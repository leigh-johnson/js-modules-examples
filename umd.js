/* jshint ignore:start */


(function (global, factory) {
    // CommonJS support
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    // AMD support
    typeof define === 'function' && define.amd ? define(factory) :
    // When all else fails ....
    global.myModule = factory()
}(this, function(){
	// anonymous definition of factory()
	// isn't it VERY clear what's going on here?
}));

// What do you think happens when you need to start defining dependencies for a module with a UMD export definition?
// Hint: it's not pretty
