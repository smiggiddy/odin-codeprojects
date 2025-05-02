const { Auth } = require('./auth');
const { File } = require('./file');

class Db {
    constructor() {
        this.auth = new Auth();
        this.file = new File();
    }
}

module.exports = Db;
