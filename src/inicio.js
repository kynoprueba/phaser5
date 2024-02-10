import { Escenanave } from "./escenanave.js";
import { Escenanave2 } from "./escenanave2.js";

export class Inicio extends Phaser.Scene{
    
    constructor(){
        super({key:'inicio'});
     }


    preload(){
        this.load.image('fondo','./src/fondo.png');
        //this.load.image('nave','./src/nave.png');
       
        
       // resize();
        //window.addEventListener('resize',resize);
      
       
    }
    create(){
        this.fondo=this.add.sprite(500,300,'fondo');
        //this.nave1=this.add.sprite(500,300,'nave');
        //this.nave1.scale=0.2;

      //zona 1
       
        const opcionNave= this.add.zone(0,0,400,410);
        opcionNave.setOrigin(0);
        this.add.graphics().lineStyle(6,0xff2244).strokeRectShape(opcionNave);
        opcionNave.setName('navecita');
        opcionNave.setInteractive();
        opcionNave.once('pointerdown',()=>this.opcionPulsada(opcionNave));

    //zona2

    const nuevoMundo= this.add.zone(400,0,400,410);
        nuevoMundo.setOrigin(0);
        this.add.graphics().lineStyle(6,0xff2244).strokeRectShape(nuevoMundo);
        nuevoMundo.setName('nuevo');
        nuevoMundo.setInteractive();
        nuevoMundo.once('pointerdown',()=>this.opcionPulsada(nuevoMundo));
 
        
    }
    update(){
        
    }

 opcionPulsada(opcion){
if (opcion.name=='navecita'){
    this.scene.start('naveescena');
   }else{
    this.scene.start('naveescena2');
   }
 }





}