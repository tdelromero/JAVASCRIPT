/*********** Ejercicio 1 ***************/ 
// Dado un array de objetos, obtener el objeto con el id 3

const arrNames = [ 
    {id:1, name:'Pepe'},
    {id:2, name:'Juan'},
    {id:3, name:'Alba'},
    {id:4, name:'Toby'},
    {id:5, name:'Lala'},
]

console.log(arrNames[arrNames.findIndex(x => x.id == 3)]);


/*********** Ejercicio 2 ***************/ 
// Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos) 
const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];
let truthyArray = []

// Dejo dos opciones: ¿Es mejor usar bucle for o forEach?

function cleanArray1(arrDirty){
    for(let i =0; i<arrDirty.length; i++){
        if(arrDirty[i]){
            truthyArray.push(arrDirty[i]);
        }
    }
    return truthyArray;
}

function cleanArray2(arrDirty){
    arrDirty.forEach((index) => {
        if(arrDirty[index]){
            truthyArray.push(arrDirty[index]);
        }
    });
    return truthyArray;
}

console.log(cleanArray1(arrDirty));
console.log(cleanArray2(arrDirty));

/*********** Ejercicio 3 ***************/ 
// Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales
// (Supongo que sacar se refiere a quitar del array)

const arrCities = [  
    {city: 'Logroño', country: 'Spain', capital: false},  
    {city: 'Paris', country: 'France', capital: true},  
    {city: 'Madrid', country: 'Spain', capital: true},  
    {city: 'Rome', country: 'Italy', capital: true}, 
    {city: 'Oslo', country: 'Norway', capital: true},  
    {city: 'Jaén', country: 'Spain', capital: false}
]
function getNonCapitalCities(arrCities){
    for(let key in arrCities){
        if(!arrCities[key].capital){
            arrCities.splice(key, 1);
        }
    }
    
    return arrCities;
}
console.log(getNonCapitalCities(arrCities));


/*********** Ejercicio 4 ***************/ 
// Valores comunes
// Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

const intersection = arrNumber1.filter(number => arrNumber2.indexOf(number) !== -1).filter(number => arrNumber3.indexOf(number) !== -1);

console.log(intersection);

/*********** Ejercicio 5 ***************/ 

// Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos 
// parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
// Ejemplo: {city: "Logroño", isSpain: "true"}

const arrCities2 = [ 
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
]

function getNonCapitalCities(arrCities2){
    let nonCapitalCities2 = [];
    for(let key in arrCities2){
        if(!arrCities2[key].capital){
            let isSpain = arrCities2[key].country==="Spain";
            nonCapitalCities2.push({'city':arrCities2[key].city, 'isSpain': isSpain });
        }        
    }
    
    return nonCapitalCities2;
}

console.log(getNonCapitalCities(arrCities2));


/*********** Ejercicio 6 ***************/ 

/*

Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
Primer parámetro es un número float con x decimales
Según parámetro es un int que indique el número de decimales al que redondear
Evitar usar el método toFixed()

*/

function roundTo(number, numberOfDecimals) {  
    return (Math.round(number * Math.pow(10, numberOfDecimals))/Math.pow(10, numberOfDecimals));
}

const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12

const roundedResult2 = roundTo(1.123456789, 6);
console.log(roundedResult2); // 1.123457

/*********** Ejercicio 7 ***************/ 
/*********** Ejercicio 8 ***************/ 
/*********** Ejercicio 9 ***************/ 
/*********** Ejercicio 10 ***************/ 
/*********** Ejercicio 11 ***************/ 