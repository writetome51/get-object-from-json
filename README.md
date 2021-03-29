# getObjectFromJSON(jsonString): object

`getObjectFromJSON()` is a more helpful alternative to `JSON.parse()`.  
The reason?  Better error messages.  If you pass anything other than a  
string, you get 'Input must be string', and if the string is not strictly  
formatted as JSON, you get 'Argument is not in JSON format'.

### Installation

`npm i  get-object-from-json`


### Loading
```js
import { getObjectFromJSON } from 'get-object-from-json';
```
