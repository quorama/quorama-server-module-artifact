var Artifact = require('./artifact.js')
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

class ArtifactFactory {
    constructor(settings) {
        this.settings = settings;
    }
}

module.exports = ArtifactFactory