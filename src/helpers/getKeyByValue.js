import titleCase from "./titleCase";

export default function getKeyByValue(object, value) {

    return titleCase(Object.keys(object).find(key => object[key] === value));
}