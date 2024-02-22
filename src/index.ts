#!/usr/bin/env node

import { initTsProject } from "./cli";

async function main(){
    if(process.argv.length < 3){
        console.log("No website provided");
        process.exit(1);
    }
    if(process.argv.length > 3){
        console.log("Too many commnad line args");
        process.exit(1);
    }
    const projectName:string = process.argv[2];
    initTsProject(projectName)
    console.log(`${projectName} project created!`); 

}
main();