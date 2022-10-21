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
    arrCities.forEach(city =>{
        for(let key in arrCities){
            if(!arrCities[key].capital){
                arrCities.splice(key, 1);
            }
        }
    })
    return arrCities;
}
console.log(getNonCapitalCities(arrCities));