const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = [];
  newArray = arr.concat(newArray)
  return newArray.sort(function(a, b) {
  return a - b;
});;
  // Only change code above this line
}

console.log(nonMutatingSort([1, 30, 4, 21, 100000]))
/**************************************************************************************************/
// Only change code below this line
function urlSlug(title) {

    title = title.split(" ").join("");
    return title= title.split(/(?=[A-Z])/).join("-");
    
    }
    // Only change code above this line
    urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
    
    console.log(urlSlug(" Winter Is  Coming"));

/************************************************************************************************** */

function checkPositive(arr) {
    // Only change code below this line
    return arr.every(function(currentValue){
        return currentValue>=0;
    })
    
    // Only change code above this line
    }
    
    checkPositive([1, 2, 3, -4, 5]);

/**************************************************************************************************/
      
function checkPositive(arr) {
    // Only change code below this line
    return arr.some(function(currentValue){
        return currentValue >=0;
    })

// Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);