

import { Escenanave } from "./escenanave.js";
import { Escenanave2 } from "./escenanave2.js";
import { Inicio } from "./inicio.js"


const config={
    type:Phaser.AUTO,
    width:800,
    height:600,
    dom:{
        createContainer:true
    },
    scene:[Inicio,Escenanave,Escenanave2 ],
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:400},
            debug:false
        }
    }
}

var game =new Phaser.Game(config);


