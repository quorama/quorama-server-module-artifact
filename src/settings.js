var method = Settings.prototype

var mongodb_url = null;

function Settings(settings) {
    this.mongodb_url = settings.mongodb_url;
}

module.exports = Settings