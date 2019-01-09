var div = document.querySelector('div')
function distinctValue(str){
    var arr2 = [];
    var arr = str.split('');
        arr.filter(function(item, pos) {
        if(arr.indexOf(item) == pos) {
            arr2.push(arr[pos])
            
        }      
        
    })
        div.innerText = arr2.length;
        div.style.fontSize = '200px' ;
}

 distinctValue(prompt('Word or Numrer', ''))