import fs from "fs";
 import { exit } from "process";
export default async function dbfileCheck (){
if(fs.existsSync("db.json")){
    console.log("file exists");
     
}
else{
    console.log("file does not exist")
    exit(1);
}
 }
//  dbfileCheck();