setImmediate( () => {
    console.log('immediate');
});
// 우선적 실행 1
process.nextTick(() => { 
    console.log('nextTick');
});  
setTimeout(() => {
    console.log('timeout');
}, 0);
// 우선적 실행 2
Promise.resolve().then(() => console.log('promise') );