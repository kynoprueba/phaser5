

export class Escenanave2 extends Phaser.Scene{

    constructor(){
        super({key:'naveescena2'});
    }
    preload(){
        this.nave1=this.load.image('planeta','./src/tierra.jpg');
      
        

   
        
    }
    create(){
        this.add.sprite(100,100,'planeta');
     
    }

  
  
  
}