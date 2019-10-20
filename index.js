

// bai1
var number = [];
for (var i = 0; i < 10; i++) {
    number.push(i);
}
// 

// bai2
var bai2 = function (id, cb) {
    let time = Math.floor(Math.random() * (1000 - 100) + 100);
    setTimeout(() => {

        cb(id);
    }, time);
}
// 
// bai2(3,x =>{
//     console.log('Đã xử lý xong ' + x);
// })

function xuly(x) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * (1000 - 100) + 100);
        setTimeout(() => {
            resolve(x)
        }, time);
    })

}
// 

// bai3 
let bai3 = function (x) {
    let time = Math.floor(Math.random() * (1000 - 100) + 100);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x)
        }, time)
    })
}
// bai3(5).then(x => console.log('đã xử lý ' + x))
// 

// bai4
let bai4 = async function (x) {
    if (x >= number.length - 1) return console.log('done');
    let done = await xuly(x);
    console.log('đã xử lý xong ' + number[x]);
}
// bai4(5)

// bai5
var bai5 = async function (x) {
    if (x >= number.length) return console.log('done');
    let done = await xuly(x);
    console.log(' xong ' + number[x]);
    number.shift(number[x]);
    bai5(x);
}
// bai5(x)

// bai6
let x = 0;
var bai6 = async function (x) {
    if (x >= number.length - 1) return;
    let done = await xuly(x);
    console.log('đã xử lỹ xong ' + number[x]);
    number.shift(number[x]);
    bai6(x)
}
// Promise.all([
//     bai6(0),
//     bai6(0)
// ]).then(() => {
//     if (number.length == 0)
//         console.log('done')
// })

// process.nextTick(() => {
//     bai6(x);
//     process.nextTick(() => {
//         bai6(x);
//     })
// })

// bai7
// Promise.all([
//     bai6(0),
//     bai6(0),
//     bai6(0)
// ]).then(() => {
//     if (number.length == 0)
//         console.log('done')
// })