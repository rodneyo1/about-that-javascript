function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.toString().replaceAll(",", "");
}


function strToSet(str) {
    return new Set(str.split(""));
}


function setToStr(set) {
    let result = "";
    set.forEach((value) => {result += value});
    return result;
}

function setToArr(set) {
    return Array.from(set);
}
function strToArr(str) {
    return str.split("");
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function mapToObj(map) {
    return Object.fromEntries(map);
}

function strToObj(str) {
    return Object.assign({}, str.split(""));
}

function objToArr(obj) {
    return Object.values(obj);
}

function arrToObj(arr) {
    return Object.assign({}, arr);
}



function superTypeOf(value) {
    if (Array.isArray(value)) {
        return "Array";
    } else if (value instanceof Set) {
        return "Set";
    } else if (value instanceof Map) {
        return "Map";
    } else if (value === null) {
        return "null";
    } else if (typeof value === "object") {
        return "Object";
    } else if (typeof value === "string") {
        return "String";
    } else if (typeof value === "number") {
        return "Number";
    } else if (typeof value === "boolean") {
        return "Boolean";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "function") {
        return "Function";
    }
}