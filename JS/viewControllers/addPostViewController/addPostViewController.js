import { Post} from "../../models/post.js";
import { ViewController } from "../viewController.js";
import { AddPostService } from "./addPostService.js";

export class AddPostViewController extends ViewController{
    constructor(appManeger, parent){
        super(appManeger, parent);
        this.view.className = 'AddPostViewControllerView';
        this.service = new AddPostService(this, this.appManager.selectedUser);

        
        this.fadeView.className = 'AddPostViewControllerView_fadeView';
        this.fadeView.innerHTML = this.AddPostViewController.title;
        this.contentView.style.transform = `translate ${window.innerWidth}px, 0px`;
        this.view.appendChild(title);

        this.titleLbl = document.createElement('p');
        this.titleLbl.className = 'AddPostViewControllerView_titleLbl';
        this.titleLbl.innerHTML = 'Add Post';
        this.contentView.appendChild(this.titleLbl);


        this.titleIn = document.createElement('input');
        this.titleIn.className = 'AddPostViewControllerView_titleIn';
        this.titleIn.innerHTML = 'Title';
        this.contentView.appendChild(this.titleIn);

        this.bodyIn = document.createElement('input');
        this.bodyIn.className = 'AddPostViewControllerView_bodyIn';
        this.bodyIn.innerHTML = 'Body';
        this.contentView.appendChild(this.bodyIn);

        this.okBtn = document.createElement('div');
        this.okBtn.className = 'AddPostViewControllerView_okBtn';
        this.okBtn.innerHTML = 'Ok';//Azul claro
        this.okBtn.onclick = this.onOkBtn.bind(this);
        this.contentView.appendChild(this.okBtn);

        this.cancelBtn = document.createElement('div');
        this.cancelBtn.className = 'AddPostViewControllerView_cancelBtn';
        this.cancelBtn.innerHTML = 'Cancel'; // Azul
        this.cancelBtn.onclick = this.onCancelBtn.bind(this);
        this.contentView.appendChild(this.cancelBtn);


        this.removeIn();

    }

    removeIn(){
    
    }
    
}

