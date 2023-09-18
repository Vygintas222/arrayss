// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:













// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".


let array = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];


// 4.1. Tik skaičius (number tipo duomenis).
  
let map1 = array.map(function(str){
     

    if( typeof str === 'string'){

console.log(str)
}
}) 



// 4.2. Tik tekstą (string tipo duomenis).
  
let map2 = array.map(function(num){
     

    if( typeof num === 'number'){

console.log(num)
}
}) 













// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.

const map4 = array.map((x)=> x **4)



console.log(map4)




// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.

let map5 = array.map(function(item){
     

    if( typeof item === 'number'){
    

return item + 55
}
 
}) 
    console.log(map5)

  
  // 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.

  let map6 = array.map(function(num){
     

    if( typeof num === 'number'){

return num /2
}
}) 
console.log(map6)


// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".



let map7= array.map(function(num){
     

    if( typeof num === 'number'){

return "Number:"+ num 
}
}) 
console.log(map7)




// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.


let map8 = array.map(function(num,index){
     
if(typeof num ==='number'){

    
    console.log('Index:'+ index,',','Number:'+ num)

}

})


// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.



let map9 = array.map(function(num,index){

    if(typeof num ==="number"){
        // console.log(num * index)
    }

})


// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.

let map10 = array.map(function(num,index){
    if(typeof num ==="number"){
        if(index >= 1)
        {
            // console.log(array[index] * array[index-1] )
        }
    }
})

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.


let map11 = array.map(function(num){

if (typeof num === 'number'){

    if(num * 5 > 350 ){
        console.log(num)
    }
}

})


// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".

let map12 = array.map(function(str){

    if (typeof str === 'string'){
        
        console.log(str +'  has  ' + str.length+ '  symbols')
    }


})

// 4.12. Tik tekstą (string tipo duomenis),
// tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

let map13 = array.map(function(str){
    
    if(typeof str ==='string'){
        
        console.log(str.toLocaleUpperCase().split('').join('-'))
    }
   


})



// 4.13. Tik tekstą (string tipo duomenis),
//  tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";


let map14 = array.map(function(str){
    if (typeof str === 'string'){
       
        console.log(str.replace(Array.from(str)[0],'_').replace(Array.from(str)[2],'_'))
    }

})

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";

let map15 = array.map(function(str){
    if (typeof str === 'string'){
        var splitstr = str.split('');
        var reversestr = splitstr.reverse();
        var joined = reversestr.join('');
      console.log(joined)
    }
})

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.
// : "Word obuolys is between -5564 and -51 in the array".

console.log(array)
let map16 = array.map(function(str,index){
    if (typeof str === 'string'){
        console.log(`Word ${str} is between ${array[index -1]} and ${array[index+1]} in the array`)
    }
})

