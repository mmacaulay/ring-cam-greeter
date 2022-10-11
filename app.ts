import {config} from 'node-config-ts'

function greet(person: string) {
    console.log(`Hello ${person}!`)
    console.log('config is', config)
}

greet('Matt')