'use strict';

var qunit = require("qunit");

qunit.run({
	deps : [{
		path : "node_modules/is-promise/index.js",
		namespace : 'isPromise'
	}],
    code: {
    	path : "channel-deferred.js",
    	namespace : 'deferred'
    },
    tests: "test/test.js"
});