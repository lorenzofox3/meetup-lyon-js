import {EOL} from 'os';

export const filter = (predicate) => async function* (stream) {
    for await (const element of stream) {
        if (predicate(element)) {
            yield element;
        }
    }
};

export const map = (mapFn) => async function* (stream) {
    for await (const element of stream) {
        yield mapFn(element);
    }
};

export const reduce = (fn, init = 0) =>  async (stream) => {
    let acc = init;
    for await (const element of stream) {
        acc = fn(acc, element);
    }
    return acc;
}

export const split = (char = EOL) => async function* (stream) {
    let buffer = '';
    for await (const element of stream) {
        const newParts = (buffer + element).toString().split(char);
        buffer = newParts.pop();
        yield* newParts;
    }
    if (buffer) {
        yield buffer;
    }
};

// export const take = (number) => async function* (stream) {
//     for await (const element of stream) {
//         if (number <= 0) {
//             break;
//         }
//         yield element;
//         number--;
//     }
// };
