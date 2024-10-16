function replica(target, ...sources) {
    sources.forEach(source => {
        if (source && typeof source === 'object') {
            for (const [key, value] of Object.entries(source)) {
                if (Array.isArray(value)) {
                    // If value is an array, deep copy the array
                    target[key] = Array.isArray(target[key]) ? target[key] : [];
                    target[key] = replica([], value);
                } else if (value !== null && typeof value === 'object') {
                    // If value is an object, deep copy the object
                    target[key] = typeof target[key] === 'object' ? target[key] : {};
                    target[key] = replica(target[key], value);
                } else {
                    // Otherwise, assign the value directly (primitives)
                    target[key] = value;
                }
            }
        }
    });
    return target;
}

// // Example usage:
// const target = { a: 1, b: { x: 10, y: 20 } };
// const source1 = { b: { x: 100, z: 300 }, c: [1, 2, 3] };
// const source2 = { d: 'new value', c: [4, 5] };

// const result = replica(target, source1, source2);
// console.log(result);
