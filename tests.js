import {getObjectFromJSON} from './index.js';

// Test 1: Make sure it actually converts json string to object:
var json = '{"prop1": "hello", "prop2": 1}';
let result = getObjectFromJSON(json);
if (typeof result === 'object' && result.prop1 === 'hello'  && result.prop2 === 1)
	console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 2: anything other than a string passed to function should trigger error:
let errTriggered = false;
try{
	getObjectFromJSON({});
}
catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: if string arg is not in JSON format, should trigger error:
errTriggered = false;
try{
	getObjectFromJSON('');
}
catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


// json = '{prop1: "hello", "prop2": 1}';
// console.log(getObjectFromJSON(json));
