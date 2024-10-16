function replica(target, ...objs) {
    for (const obj of objs) {
        const newObj = new Object;
        Object.assign(newObj, obj);

        for (const [key, value] of Object.entries(obj)) {
            // Handle RegExp objects by creating a new instance of RegExp
            if (value.constructor === RegExp) {
                newObj[key] = new RegExp(value);
                continue;
            }

            // If the value is an object (but not an array), deep copy it
            if (typeof value === "object" && value !== null && !Array.isArray(value)) {
                // Overwrite primitive values or initialize undefined target key with an empty object
                if (typeof target[key] !== "object" || target[key] === null || Array.isArray(target[key])) {
                    target[key] = {};
                }
                Object.assign(newObj[key], replica(target[key], value));
            }
        }

        Object.assign(target, newObj);
    }
    return target;
}

// // Example usage for the failing tests:
// console.log(replica({ con: console.log }, { reg: /hello/ }));
// // Expected output: { con: [Function: log], reg: /hello/ }

// console.log(replica({ a: 4 }, { a: { b: 1 } }).a.b);
// // Expected output: 1
