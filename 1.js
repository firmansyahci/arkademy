function biodataJSON(name, age){
    const result = JSON.stringify(
        {
            name:name, 
            age:age, 
            address:"bogor", 
            hobbies:["ngoding", "badminton"], 
            is_married:false, 
            list_school:
            [
                {
                    name:"SDN 03 Kandang Panjang",
                    year_in:2003,
                    year_out:2009,
                    major:null
                },
                {
                    name:"SMPN 1 Bojonggede",
                    year_in:2009,
                    year_out:2012,
                    major:null
                },
                {
                    name:"SMKN 1 Bojonggede",
                    year_in:2012,
                    year_out:2015,
                    major:null
                }, 
            ],
            skills:
            [
                {
                    skill_name:"coding", 
                    level:"advanced"
                },
                {
                    skill_name:"desain",
                    level:"beginner"
                }
            ],
            interest_in_coding:true
        }
    );

    return result;
}
console.log(biodataJSON('firman', 23));