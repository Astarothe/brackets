module.exports = function check(str, bracketsConfig) {
    let massive = bracketsConfig.map(element => element.join(''));
    let strLong = str.length;
    while(strLong > 0){
        massive.forEach(function(elements){
            str = str.replace(elements,'');
        });
        if(str.length === strLong){
            return false;
        }else if(str.length === 0){
           return true;
       }else{
           strLong = str.length;
       }           
    }
}
