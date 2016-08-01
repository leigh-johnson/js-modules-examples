/* jshint ignore:start */
// define a module with two components
// foobar.js
var foo = function(){};
var bar = 'abc123'

export {foo, bar}

// import a component
import {foo} from 'foobar';

// define a module with one default component
// foo.js
export default
	function(){
		// do stuff in here
	}

import 'foo';

// define a module with guarded internal methods
// guardedInternals.js
var foo = function(){return 'imma foo'};
var bar = ' abc123';
var baz = function(){return foo() + bar()};

export {baz as default};

var test = import 'guardedInternals';

test.baz() // 'imma foo abc123'
test.foo() // undefined
test.bar() // undefined
