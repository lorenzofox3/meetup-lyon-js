import {pipeline, Readable} from 'stream';
import {createReadStream, createWriteStream} from 'fs';
import {map, split} from './transducers.js';
import {on, EventEmitter} from 'events';

// ex readable from iterator
const wait = (time = 1000) => new Promise((resolve) => {
    setTimeout(() => resolve(), time);
});
//
const generator = async function* () {
    yield 'hello\n';
    await wait();
    yield 'world\n';
    await wait();
    yield '!\n';
};
// //
const readable = Readable.from(generator());
readable.pipe(process.stdout);

// ex event emitter as async iterable
// const emitter = new EventEmitter();
// process.nextTick(() =>{
//    emitter.emit('foo','hello');
//    emitter.emit('foo','world');
//    emitter.removeAllListeners('foo');
// });
//
// for await(const event of on(emitter,'foo')) {
//     console.log(event);
// }

// ex pipeline
pipeline(
    createReadStream('./data/transactions.txt', {encoding: 'utf8'}),
    split(),
    map(JSON.parse),
    map((obj) => `${obj.description}\n`),
    process.stdout,
    (err) =>{
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);






