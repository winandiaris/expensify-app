const isAdult = (age)=> age >= 18
const canDrink = (age)=> age >=21
const isSenior = (age)=> age >= 64
function old (age){
   if(age >=70) {
      console.log('old') 
   } 
}

export { isAdult, canDrink, old, isSenior as default}