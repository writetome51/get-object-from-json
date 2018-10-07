import {errorIfNotString} from 'basic-data-handling/errorIfNotString';


// Preferable to calling JSON.parse() because JSON.parse() doesn't
// tell you if the passed argument is not in JSON format.

export function getObjectFromJSON(jsonString): object {
	errorIfNotString(jsonString);
	try {
		return JSON.parse(jsonString);
	}
	catch (error) {
		throw new Error('Argument is not in JSON format.');
	}
}
