import mitt from 'mitt'

const emitter = mitt();

emitter.on("*", (title) => {
    console.log('emitted ' + title)
})

export { emitter }