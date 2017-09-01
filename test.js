var hitpointLevel = Math.floor(Math.random() * 50)

function attackHP(hitpoint){
  hitpoint = hitpoint - hitpointLevel;
  return hitpoint;
}

function hpCheck(checkhp){
  if(checkhp===0){
    console.log("end game")
  }
}

function whosTurn(){
  var userTurn = 0;
  var userHP = 50;
  var computerHP = 50;

  if(userTurn==0){
    userHP = attackHP(userHP)
    console.log(userHP)
    hpCheck(userHP)
  }else{
    computerHP = attackHP(computerHP)
    console.log(computerHP)
    hpCheck(computerHP)
  }
}
