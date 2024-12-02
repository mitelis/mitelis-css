import { createApp, reactive } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js';

const store = reactive({
    firstCounter: 1,
    secondCounter: 1,
    resetFirstCounter() {
        this.firstCounter = 1;
    },
    resetSecondCounter() {
        this.secondCounter = 1;
    },
    incFirstCounter() {
        this.firstCounter++;
    },
    incSecondCounter() {
        this.secondCounter++;
    }
});

setInterval(() => {
    store.firstCounter === 1
        ? store.incFirstCounter()
        : store.firstCounter === 2
        ? store.incFirstCounter()
        : store.resetFirstCounter();
}, 3000);

setInterval(() => {
    store.secondCounter === 1
        ? store.incSecondCounter()
        : store.secondCounter === 2
        ? store.incSecondCounter()
        : store.resetSecondCounter();
}, 3000);

setTimeout(() => {
    store.firstCounter = 2;
}, 500);

setTimeout(() => {
    store.secondCounter = 2;
}, 500);

const ellipses = [
    {
        counter: 'secondCounter',
        styles: [
            { x: '-75px', y: '25px', scale: '105%' },
            { x: '-250px', y: '300px', scale: '110%' },
            { x: '-400px', y: '300px', scale: '100%' }
        ],
        colorClass: 'ellipsis-red',
        position: { right: '35%', top: '-200px' }
    },
    {
        counter: 'firstCounter',
        styles: [
            { x: '75px', y: '-25px', scale: '105%' },
            { x: '-100px', y: '-550px', scale: '110%' },
            { x: '150px', y: '-550px', scale: '100%' }
        ],
        colorClass: 'ellipsis',
        position: { right: '15%', bottom: '-200px' }
    },
    {
        counter: 'firstCounter',
        styles: [
            { x: '400px', y: '-75px', scale: '105%' },
            { x: '450px', y: '-550px', scale: '110%' },
            { x: '1050px', y: '-150px', scale: '100%' }
        ],
        colorClass: 'ellipsis-third',
        position: { left: '-10%', bottom: '-200px' }
    }
];

function generateClass(counter, styles) {
    const currentCounter = store[counter];
    const { x, y, scale } = styles[currentCounter - 1];
    return `translate-x-[${x}] translate-y-[${y}] scale-[${scale}]`;
}

createApp({
    store,
    ellipses,
    generateClass
}).mount();
