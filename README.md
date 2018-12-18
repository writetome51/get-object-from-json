# getObjectFromJSON

## getObjectFromJSON(jsonString); // returns object

`getObjectFromJSON()` is a more helpful alternative to using `JSON.parse()`.  
The reason?  The error messages.

If the argument you pass to `JSON.parse()` is not a string formatted as JSON,  
the error message you get is cryptic.

`getObjectFromJSON()` gives you clear messages: if you pass anything   
other than a string, you get 'Input must be string', and if the string is not   
strictly formatted as JSON, you get 'Argument is not in JSON format'.

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install get-object-from-json
```

## Loading
```
// If using TypeScript:
import { getObjectFromJSON } from 'get-object-from-json';
// If using ES5 JavaScript:
var getObjectFromJSON = require('get-object-from-json').getObjectFromJSON;
```