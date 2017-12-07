var Settings = require('./settings.js')

/**
 * This is the init constructor for this module.
 * 
 * @param {any} settings settings dictionary.
 */
class init {
    constructor(settings) {
        this.settings = new Settings(settings)
    }
}

module.exports = init