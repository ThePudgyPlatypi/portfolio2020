import {isObject} from './isObject';
import {last} from './arrayLast';

export function parsePieceData(obj, key, ...nestedKey) {
    let parentKey = key;
    let oneBackKey = last(nestedKey);
    let nested = false;

    if(oneBackKey) {
        nested = true;
        console.log(`Nested Parent Object ${oneBackKey}`);
    } else {
        console.log(`Parent Object ${parentKey}`);
    }

    if(Array.isArray(obj)) {
        console.log(`This is an array in ${key}: ${obj}`);

        for(let index = 0; index < obj.length; index++) {
            
            if(!nested && (index === 0)) {
                continue;
            }
            console.log(`I am nested ${nested}`)
            parsePieceData(obj[index], key);
        };

    } else if ( isObject(obj) ) {
        console.log(`This is an object in ${key}: ${obj}`);

        for(let nestKey in obj) {
            parsePieceData( obj[nestKey], nestKey, key);
        }
    } else {
        console.log(`This is a single value: ${obj} in ${key}`);

        if (obj === "" || !obj) {
            return obj = "Empty Value";
        } else if (key === "thumbnail") {
            let img = document.createElement('img');
            img.src = obj;
        } else {
            return obj;
        }
    }
}