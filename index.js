/*
* Author : Md. Sholayman
* Description: This is the file where app is running.
* Date: 15 December  2023.
* */

const app = require("./app");

app.listen(`${process.env.RUNNING_PORT}`,() =>{
    console.log(`App is listening on PORT ${process.env.RUNNING_PORT}`)
});