# quorama-server-module-artifact
A module that enables Quoarama Server to handle Artifacts. It has responsibility of abstract the business logic of an Artifact and at the same time store them out.

## Installation instructions

TODO.


## Settings object for module configuration

~~~
{
    "mongodb_url": "mongodb://localhost:27017/"
}
~~~

## Instantiation

~~~
var settings = require('./module-settings.json')
var QuoramaServerModuleArtifact = require('quorama-server-module-artifact')
QuoramaServerModuleArtifact(settings);
~~~

## API

Check out the /docs folder for full API documentation.