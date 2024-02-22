import { exec } from 'child_process'


export function initTsProject( projectName : string ) {
    const commandsArray: string[] = [`cd ${projectName} && npm init -y`, `cd ${projectName} && npx tsc --init`, `cd ${projectName} && mkdir src`, `cd ${projectName} && touch src/index.ts`]
    exec(`mkdir ${projectName}`);

    commandsArray.map((command)=> {
        exec(command)
    })
}

