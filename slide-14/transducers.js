export const filter = (predicate) => (reducer) => ((acc, curr) => predicate(curr) ? reducer(acc, curr) : acc);

export const map = (mapFn) => (reducer) => ((acc, curr) => reducer(acc, mapFn(curr)));


// transduce different protocols
export const transduceArrayValues = (transducers, init = 0) => (array) => array.reduce(transducers, init);

export const transduceEventEmitter = (transducers, init = 0) => (emitter, eventName) => new Promise(resolve => {
    let current = init;
    const listener = (transaction) => current = transducers(current, transaction);
    emitter.on(eventName, listener);
    emitter.on('removeListener', (event) => {
        if (eventName === event) {
            resolve(current);
        }
    });
});
