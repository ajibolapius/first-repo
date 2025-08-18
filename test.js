// passwordstrenght
function createlogin(username , password){

  var username = "admin"
  var password ="1234"
  if (username =="admin" && password =="1234"){
    console.log("successful")
  }else{
    console.log("failed")
  }
}
console.log(createlogin())

function passwordstrenght(password){
  var length = password.length
  if( length < 6 ){
    return "weak"
  }else if(length <= 10){
    return "moderate"
  }
  else{
    return "strong"
  }
}
console.log(passwordstrenght("aji"))
console.log(passwordstrenght("ajibola123"))
console.log(passwordstrenght("ajiolaadeola123"))