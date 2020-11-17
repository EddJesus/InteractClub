const main = (params) => {
    const words = [10000];
    var i = 0;

/*     for(i = 1; i < 10000; i++){
        words[i] = makeid(3);
    } */

/*     for(i = 1; i < words.length; i++){
        
    } */

    console.log(makeid(3));


} 


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
