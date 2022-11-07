const yargs = require('yargs')
const Movie = require("./utils/index")

console.log(yargs.argv)
const myApp = (yargsObj) => {
    if (yargsObj.add) {
        const newMovie1 = new Movie(yargsObj.title1, yargsObj.actor1);
        newMovie1.add();
    }
        else if(yargsObj.addMulti) {
            const newMovie1 = new Movie(yargsObj.title1, yargsObj.actor1);
            newMovie1.add();
            const newMovie2 = new Movie(yargsObj.title2, yargsObj.actor2);
            newMovie2.add();
            const newMovie3 = new Movie(yargsObj.title3, yargsObj.actor3);
            newMovie3.add();
        
        } else {
            console.log("Command not recognised");

        }
    }


myApp(yargs.argv)
