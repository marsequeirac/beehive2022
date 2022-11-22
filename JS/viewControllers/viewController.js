export class ViewController{
    constructor(appManager, parent){
        this.appManager = appManager;
        this.parent = parent;
        this.service = null;
        this.view = document.createElement('div');
        this.parent.appendChild(this.view);

        this.fadeView =document.createElement('div');
        this.parent.appendChild(this.fadeView);

        this.contentView =document.createElement('div');
        this.parent.appendChild(this.contentView);

        this.moveInSpeed = 0.5;
        this.moveOut = 0.25;
    }

    showUI(){
        
    }

    moveIn(){
       // console.log(gsap);
       // this.view.style.transform = `traslate(${0}px, 0px)`

    }

    moveOut(){

    }


    Destroy(){
        this.parent.removeChild(this.view);
    }
}