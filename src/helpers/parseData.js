export function parseData(obj) {
    if (typeof obj === "object") {
        for(let key in obj) {
            if (obj.hasOwnProperty(key)) {
                parseData(obj[key]);
            }
        }
    } else if(Array.isArray(obj)) {
        obj.forEach( element => {
            parseData(element);
        });
    } else {
        return obj;
    }
}