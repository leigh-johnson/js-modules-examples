/* jshint ignore:start */

// package/lib is a dependency we require
var myLibrary = require('./lib/myLibary');
// note - this uses Node's path fn to resolve location
var OMFG = require('../../../../../otherLibs/OMFG')

// at least this is sane
function foo(){
    myLibrary.bar('hola mundo');
}

// export (expose) foo to other modules
exports.foo = foo;
