const http = require("http"),
axios = require("axios");

http.createServer((req,res)=>{
    res.write (users.join(", "));
    res.write (email.join(", "));
    res.end()
}).listen(8000);

let users = [];
let email = [];

(async function getNames(){
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        users = data.map(user=>user.name);
    }catch(error){
        console.log(error)
    }
})();

(async function getEmail(){
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        email = data.map(user=>user.email);
    }catch(error){
        console.log(error)
    }
})();