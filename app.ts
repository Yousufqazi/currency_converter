#! /usr/bin/env node

import inquirer from "inquirer" 

const currency : any = {
    USD : 1,
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280,
};

let user_Ans  = await inquirer.prompt(
   [
    {
             name: "from",
             message: "enter from currency",
             type: "list",
             choices: ["USD","EUR","GBP","INR","PKR",] 
    },   

    {
             name: "to",
             message: "enter from currency",
             type: "list",
             choices: ["USD","EUR","GBP","INR","PKR",] 
    }, 
    
    {
             name: "amount",
             message: "enter your amount",
             type: "number",
     }
  ]  
)

let fromamount = currency[user_Ans.from]
let toamount = currency[user_Ans.to]
let amount = user_Ans.amount
let baseamount = amount / fromamount
let convertedamount = baseamount * toamount
console.log(convertedamount);

 
