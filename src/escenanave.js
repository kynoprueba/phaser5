

export class Escenanave extends Phaser.Scene{

    constructor(){
        super({key:'naveescena'});
    }
    preload(){
        this.nave1=this.load.image('nave','./src/nave.png');
        this.t2=this.texto2();
        this.t3=this.selector();
        

   
        
    }
    create(){
        this.t3=this.selector();
        this.nave1=this.add.sprite(400,200,'nave').setInteractive();
        this.nave1.scale=0.2;
        this.t2=this.texto2();
        //hacer interactiva
        this.nave1.on('pointerdown',()=>this.carapulsada(this.nave1));
        
     
    }

    texto2(){
        var t2='esto es un texto interesante muy interesante ';
        //alert('esta es una bolita');
        const texto2=this.add.text(150,50,t2);
        texto2.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
    }

    //crear selector
    selector(){
        const pa=document.createElement("div");
        pa.textContent='que bonito es esto';

        const pa2=document.querySelector("div");
        pa2.appendChild(pa);
        pa2.style.backgroundColor='blue';

        const bt=document.querySelector('button');
        bt.addEventListener('click',()=>{
            
          

            });
      
        
       


        

        var elements = document.querySelector('.cuadro1');
      
        anime({
            targets: elements,
            translateX: 270,
            scale:2,
            delay:2000,
            translateY:300
          });
       
        
        
    }

    carapulsada(cara){
        alert('la imagen fue pulsada');
    }

  
}