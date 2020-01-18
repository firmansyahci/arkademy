function cetak_gambar(angka){
    if (angka % 2 == 0){
        return "Parameter harus angka dan ganjil!";
    }
    let bintang = "";
    let samaDengan = "";

    console.log("---panjang---");
    for(let i=0; i<angka; i++){
        for(let j=0; j<angka; j++){
            if (i == (angka-1)/2){
                bintang += "* ";
            }
            else if(i==0){
                if (j==0 || j==angka-1){
                    samaDengan += "* ";
                }
                else{
                    samaDengan += "= ";
                }
            }
        }
        if(i == (angka-1)/2){
            console.log(bintang);
        }
        else{
            console.log(samaDengan);
        } 
    }
}
console.log(cetak_gambar(5));