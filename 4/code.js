var obj = {a: 'value1', b: 'value2'} 
var obj2= {};
var newKey = [];
var newValue = [];
function weirdCopy(obj){
    for (var key in obj){
        newValue.push(key);
        newKey.push(obj[key]);
    }
}
weirdCopy(obj);
for (var i = 0 ; i < newKey.length; i++){
    var g = newKey[i];
    obj2[g] = newValue[i];
    
}
console.log(obj2);

