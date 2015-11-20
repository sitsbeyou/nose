console.log('Server running at http://127.0.0.1:8124/');
// 没有重载, 同名函数用后面的
function add(num){
    return num + 100;
}

function add(num, num1){
    return num + num1;
}

console.log(add(100));    //NaN
console.log(add(1, 12));  //13
