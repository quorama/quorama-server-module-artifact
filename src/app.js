var Settings = require('./settings.js')

/**
 * This is the init class of this module.
 * 
 * @class init
 */
class Init {
    /**
     * This is the init constructor for this module.
     * 
     * @param {any} settings settings dictionary.
     */
    constructor(settings) {
        this.settings = new Settings(settings)
    }
}

module.exports = Init