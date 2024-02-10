export class Escenauno extends Phaser.Scene{
  constructor(){
    super({key:'escenauno'});
  }

    
   


    preload(){
      this.load.image('nave','./src/nave.png');
       
    }
    create(){
        this.add.sprite(500,200,'nave');
      
    }
    update(){
       
    }



    
}

