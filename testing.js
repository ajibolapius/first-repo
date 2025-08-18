function passwordstrenght(password){
  var length = password.length;
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