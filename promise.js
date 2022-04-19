import {chalk} from 'chalk';
const isAppleAvailableInMarket = false;

const isAppleAvailable = () => {
    return new Promise((resolve, reject) => {
        if(isAppleAvailableInMarket) {
            resolve(chalk.green('Yes!!! Apple is avalaible to the market !!!!'))
        } else {
            reject(chalk.red('Opps !!! Apple are not avalaible to the market !!!!'))
        }
    });
}

const isBreadAvailable = () => {
    return new Promise((resolve, reject) => {
        if(isBreadAvailableInMarket) {
            resolve(chalk.green('Yes!!! Bread is avalaible to the market !!!!'))
        } else {
            reject(chalk.red('Opps !!! Bread are not avalaible to the market !!!!'))
        }
    });
}

const mainFunction = async() => {
    try {
        const appleStatus = await isAppleAvailable();
        console.log(appleStatus)
    } catch(e) {
        console.log(e)
    }
   
}

mainFunction();