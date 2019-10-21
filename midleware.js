let midleware = () => {
    let req;
    let res;
    let mid = [];
    let use = fn => mid.push(fn);
    let runmidle = index => {
        let count = mid.length;
        if (index < count) {
            mid[index].call(null, () => runmidle(index + 1))
        }
    }
    let get = () => {
        runmidle(0)
        // console.log('get')
    }
    return {
        get,
        use
    }
}

let app = midleware();

app.use((next) => {
    setTimeout(() => {
        console.log('midle 1')
        next()
    }, 1000);
    
})

app.use(( next) => {
    console.log('midleware 2');
    next();
})
app.get();