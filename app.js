let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const runnerAge = 19;
// i have to check this code later
if(runnerAge > 18 && registeredEarly = true){

  raceNumber += 1000;
};

// another control flow statement for all registrants together using of elseif
if (runnerAge>18 && registeredEarly=true  ){
  console.log( raceNumber + "runner will race at 9:30am" );
}
else if (runnerAge>18 && !registeredEarly){
  console.log(raceNumber + "they will race at 11am");
}

} else if (runnerAge<18) {

 console.log(raceNumber + "they will race at 11am");
}
else{
  console.log("Please see the registration desk");
}
