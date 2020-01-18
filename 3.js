function cek_kata(words){
    if (typeof(words) !== typeof("")){
        return "Parameter harus string";
    } 
    let result = words.split(" ");
    const regex = /[a-zA-Z]{2}/;

    let totalArray = result.length;
    let countWords = 0;
    const slash = "/";

    result.forEach(word => {
        if (regex.test(word) == true){
            countWords+=1;
        }
    });

    return(countWords + slash + totalArray);
}
console.log(cek_kata("ini adalah sebuah kata"));
console.log(cek_kata("2 pasang sandal hilang"));
console.log(cek_kata(33));