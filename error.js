const petiteVueScript = document.createElement("script");
petiteVueScript.src = "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js";
petiteVueScript.type = "text/javascript";
petiteVueScript.onload = () => {
    const { createApp, reactive } = petiteVue;

    window.store = reactive({
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
        window.store.firstCounter === 1
            ? window.store.incFirstCounter()
            : window.store.firstCounter === 2
            ? window.store.incFirstCounter()
            : window.store.resetFirstCounter();
    }, 3000);

    setInterval(() => {
        window.store.secondCounter === 1
            ? window.store.incSecondCounter()
            : window.store.secondCounter === 2
            ? window.store.incSecondCounter()
            : window.store.resetSecondCounter();
    }, 3000);

    setTimeout(() => {
        window.store.firstCounter = 2;
    }, 500);

    setTimeout(() => {
        window.store.secondCounter = 2;
    }, 500);

    window.ellipses = [
        {
            counter: "secondCounter",
            styles: [
                { x: "-75px", y: "25px", scale: "105%" },
                { x: "-250px", y: "300px", scale: "110%" },
                { x: "-400px", y: "300px", scale: "100%" }
            ],
            colorClass: "ellipsis-red",
            position: { right: "35%", top: "-200px" }
        },
        {
            counter: "firstCounter",
            styles: [
                { x: "75px", y: "-25px", scale: "105%" },
                { x: "-100px", y: "-550px", scale: "110%" },
                { x: "150px", y: "-550px", scale: "100%" }
            ],
            colorClass: "ellipsis",
            position: { right: "15%", bottom: "-200px" }
        },
        {
            counter: "firstCounter",
            styles: [
                { x: "400px", y: "-75px", scale: "105%" },
                { x: "450px", y: "-550px", scale: "110%" },
                { x: "1050px", y: "-150px", scale: "100%" }
            ],
            colorClass: "ellipsis-third",
            position: { left: "-10%", bottom: "-200px" }
        }
    ];

    window.generateClass = (counter, styles) => {
        const currentCounter = window.store[counter];
        const { x, y, scale } = styles[currentCounter - 1];
        return `translate-x-[${x}] translate-y-[${y}] scale-[${scale}]`;
    };

    createApp({
        store: window.store,
        ellipses: window.ellipses,
        generateClass: window.generateClass
    }).mount();
};
document.head.appendChild(petiteVueScript);
