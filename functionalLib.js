const pack = (fn) => {
    return (args) => {
        return fn(...args);
    }
};

const currify = (fn) => {
    return function aux (...args) {
        if (args.length >= fn.length) return fn(...args);
        else return (...more) => aux(...args, ...more);
    };
};

const range = currify((initial, end) => {
    const range = [];
    if (initial < end) {
        for(let i = initial; i <= end; i++) range.push(i);
        return range;
    } else console.log(`initial value #{initial} should be less than end value #{end}`);
});


const partial = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs);

const partialRight = (fn, ...args) => (...newArgs) => fn(...newArgs, ...args);

const compose = (...fns) =>
    fns.reverse().reduce((prevFn, nextFn) => 
        (...args) => nextFn.call({}, prevFn.call({}, ...args))
    );

const map = (fn, list) => list.map(n => fn(n));

const first = ([h, ...t], n = 1) => ([h, ...t].length > 0 && n > 0) ? [h, ...first(t, n - 1)] : [];


const lib = {
    pack,
    currify, 
    range,
    partial,
    compose,
    map,
    partialRight,
    first
};

module.exports = lib;