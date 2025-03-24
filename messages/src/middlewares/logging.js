function logging(req, res, next) {
  req.time = new Date(Date.now()).toISOString();
  const clientIp = req.header("cf-connecting-ip") || req.socket.remoteAddress;
  console.log(req.time, req.method, req.hostname, req.path, clientIp);
  next();
}

module.exports = { logging };
