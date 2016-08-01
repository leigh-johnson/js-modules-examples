/* jshint ignore:start */

// top-level dependency loading
// named: define('module_name', ['dependencyA', 'dependencyB'], fn)
// anonymous: define(['dependencyA', 'dependencyB'], fn)
define('myModule',
    ['jquery', 'foo'],
    function ( $, foo ) {
        // local scope
        var myModule = {
            fooify:function(){
                // local-er scope
                return $('someEl').foo();
            }
        };
        return myModule;
});

// usage
require(['jquery', 'bar'], function ( $, bar, datepicker) {
        // local scope
        $.fn.myPlugin = function(bar){
            // jquery plugin definition, consuming bar
        };
        $.fn.datepicker = datepicker;
        // What do you think happens when you try to invoke $.fn.myPlugin or $.fn.datepicker outside of this scope?
});

// asynchronous dependency loading
define(function ( require ) {
    var isUnFuckulated = false, unfuckulate;

    // inline requirements
    require(['un', 'fuckulate'], function (un, fuckulate) {
        isUnFuckulated = true;
        unfuckulate = un() + fuckulate();
    });

    return {
        isUnFuckulated: isUnFuckulated,
        unfuckulate: unfuckulate
    };
});

