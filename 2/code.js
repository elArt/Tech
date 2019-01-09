
function formatText(str){
    var dat =str.replace(/(\d+)-(\d+)-(\d+)/,'$3.$2.$1');
    var re = /\. \w/gim;
    var repl = function ( group1 ) {
        return group1.toUpperCase();
    };
    var vr = /^\w/gim;
    var lowWords = dat.replace( re, repl ); 
    var firstWords =  lowWords.replace( vr, repl )
    console.log( firstWords);

}
formatText('to jest zwykÅe zdanie. to tylko zdanie. LubiÄ koty. lubie psy od 01-02-2018.')



