const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect('mongodb+srv://ds7198170:sy0wtlI7oyFraoeH@cluster0.jr6jev5.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connection SuccessFull !!");
}
main().catch((error) =>{console.log("Connection Not Success Full !!");})
