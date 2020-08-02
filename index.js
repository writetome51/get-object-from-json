import {errorIfNotString} from 'error-if-not-string';


// Preferable to calling JSON.parse() because JSON.parse() doesn't
// tell you if the passed argument is not in JSON format.

export function getObjectFromJSON(jsonString) {
	errorIfNotString(jsonString);
	try {
		return JSON.parse(jsonString);
	}
	catch (error) {
		throw new Error('Argument is not in JSON format.');
	}
}
