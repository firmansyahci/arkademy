function sequence(x, y){
    if (x <= y){
        return console.log("parameter x harus lebih besar dibanding y"); 
    }

    let a = y;
    let result = [];

    result.push(a);
    while(a>1){
        a = Math.pow(a, 2) % x;
        result.push(a);
        x++;
    }
    console.log("array : ", result);
    console.log("count : ", result.length);
}
sequence(5, 3);
sequence(16, 5);
sequence(3, 5);