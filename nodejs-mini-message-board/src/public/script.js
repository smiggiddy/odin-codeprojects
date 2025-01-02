function test(event) {
  const messageId = event.target.dataset.messageId;
  window.location.href = `comment?id=${messageId}`;
}

document.getElementById("year").textContent = `${new Date().getFullYear()}`;
