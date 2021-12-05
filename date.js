//jshint esversion:6
exports.getDate= function (){
const a=new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric' };
return a.toLocaleDateString("en-US", options);

}

exports.getDay= function(){
const a=new Date();
const options = { weekday: 'long' };
return a.toLocaleDateString("en-US", options);

}
