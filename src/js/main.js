'use strict';
/*globals CONTEXT, test, context*/

// Display the current context
var context = function () {
	var span = document.getElementById('context');
	span.innerHTML = CONTEXT;
	console.log(CONTEXT);
};

// Display the context of test.js
var nodeContext = function () {
	var span = document.getElementById('context');
	span.innerHTML = test.context();
	console.log(test.context());
};

// List the root dir
var lsRoot = function () {
	var fs = require('fs');
  	var dirList = fs.readdirSync('/');
	var ul = document.getElementById('dirlist');

	for (var i = 0; i < dirList.length; i++) {

		var li = document.createElement('li');
		li.innerHTML = dirList[i];
		ul.appendChild(li);

	}
};