const mongoose=require('mongoose');
const Creat=mongoose.model('Creat',{
    first_Name: {type : String} , 
    last_Name: {type : String} , Date_of_birth: {type : String} ,
    Home_adresse : {type : String} , 
    Marital_Status:  {type : String} , 
    psychological_Issues :  {type : String} , 
    psychological_Description : {type : String} , 
    medication  : {type : String} , 
    medication_Name :  {type : String} ,
    
Paid : {type : String} 
});
module.exports=Creat;