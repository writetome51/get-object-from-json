var getObjectFromJSON = require('./index').getObjectFromJSON;

var json = '{"prop1": "hello", "prop2": 1}';

console.log(typeof getObjectFromJSON(json));


json = {};
console.log(getObjectFromJSON(json));


json = '';
console.log(getObjectFromJSON(json));


// json = '{prop1: "hello", "prop2": 1}';
// console.log(getObjectFromJSON(json));
