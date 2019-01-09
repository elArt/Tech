
var arr = [];
function range (fr, to){
    for(var i = fr+1; i < to ; i++){
        arr.push(i);
    }
    return arr;
}
range(1, 5);
console.log(arr);