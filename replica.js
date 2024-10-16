"use strict";

function replica(target, ...objs) {
    for (const obj of objs) {
        const newObj = new Object;
        Object.assign(newObj, obj);

        for (const [key, value] of Object.entries(obj)) {
            // Handle RegExp objects by creating a new instance of RegExp
            if (value instanceof RegExp) {
                newObj[key] = new RegExp(value);
                continue;
            }

            // Handle other objects deeply (except arrays, handled later)
            if (typeof value === "object" && value !== null && !Array.isArray(value)) {
                newObj[key] = replica(target[key] || {}, value);
            } else if (Array.isArray(value)) {
                // Deep copy arrays
                newObj[key] = value.map(item => (typeof item === 'object' && item !== null) ? replica({}, item) : item);
            } else {
                // Directly assign primitives or non-object types
                newObj[key] = value;
            }
        }

        Object.assign(target, newObj);
    }
    return target;
}

// Example usage for the failing test:
const result = replica({ con: console.log }, { reg: /hello/ });
console.log(result);

// Expected output:
// { con: [Function: log], reg: /hello/ }
