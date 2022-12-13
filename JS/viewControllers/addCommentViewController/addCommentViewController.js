import { Post} from "../../models/post.js";
import { ViewController } from "../viewController.js";
import { AddPostService } from "./addPostService.js";

export class AddComentViewController extends ViewController{
    constructor(appManeger, parent){
        super(appManeger, parent);
        this.view.className = 'AddComentViewController';
        this.service = new AddPostService(this, this.appManager.selectedUser);

        
        this.fadeView.className = 'addComentViewController_fadeView';
        this.fadeView.innerHTML = this.AddPostViewController.title;
        this.contentView.style.transform = `translate ${window.innerWidth}px, 0px`;
        this.view.appendChild(title);

        this.titleLbl = document.createElement('p');
        this.titleLbl.className = 'addComentViewController_titleLbl';
        this.titleLbl.innerHTML = 'Add Post';
        this.contentView.appendChild(this.titleLbl);


        this.titleIn = document.createElement('input');
        this.titleIn.className = 'AddComentViewController_titleIn';
        this.titleIn.innerHTML = 'Title';
        this.contentView.appendChild(this.titleIn);

        this.bodyIn = document.createElement('input');
        this.bodyIn.className = 'AddComentViewController_bodyIn';
        this.bodyIn.innerHTML = 'Body';
        this.contentView.appendChild(this.bodyIn);

        this.okBtn = document.createElement('div');
        this.okBtn.className = 'AddComentViewController_okBtn';
        this.okBtn.innerHTML = 'Ok';
        this.okBtn.onclick = this.onOkBtn.bind(this);
        this.contentView.appendChild(this.okBtn);

        this.cancelBtn = document.createElement('div');
        this.cancelBtn.className = 'AddComentViewController_cancelBtn';
        this.cancelBtn.innerHTML = 'Cancel';
        this.cancelBtn.onclick = this.onCancelBtn.bind(this);
        this.contentView.appendChild(this.cancelBtn);


        this.removeIn();

    }

    removeIn(){
    
    }
    
    moveIn(){
        this.fadeView.innerHTML='';
        //gsap.to(this.contentView,{x:0, duration: this.moveInDuration});
        //gsap.to(this.fadeview,{opacity:0.75, duration: this.moveInDuration});
        gsap.to(this.view,{x:0, duration: 0.5});
    }

    moveInCompleted(){
        this.addPostBtn.classList.remove('hidden');
    }

    moveOut(){
        //gsap.to(this.view,{x:window.innerWidth, duration: this.moveOutDuration, onComplete: this.destroy.bind(this)});
        this.addPostBtn.classList.remove('hidden');
        //gsap.to(this.view,{x:window.innerWidth, duration: 0.5});
        //gsap.to(this.fadeview,{opacity:0, duration: this.moveOutDuration});
        gsap.to(this.view,{x: window.innerWidth, duration: 0.5, onComplete: this.destroy.bind(this)});
       
    }

    onOkBtn(){
        var title = title = this.titleIn.value;
        var body = this.body.value;

        if(title !== '' && body !== ''){
            var post = new Post(null, title, body);
            this.service.sendPost(post);
        }else{
           if(title == ''){
            this.titleIn.classList.add('addComentViewController_input_error');
           } else{
            this.titleIn.classList.remove('addComentViewController_input_error');
           }  
           
           if(body == ''){
            this.bodyIn.classList.add('addComentViewController_input_error');
           } else{
            this.bodyIn.classList.remove('addComentViewController_input_error');
           }  
        }

        alert('Datos Incompletos');

       
    }
    onCancelBtn(){
        this.appManager.back();
    }

    postingCompleted(){
        this.appManager.back();
    }
}

