import { PostView } from "../../views/postView/postView.js";
import { ViewController } from "../viewController.js";
import { PostListService } from "./postListService.js";


export class PostListViewController extends ViewController{
    constructor(appManager,parent){
        super(appManager, parent);
        this.view.className = 'postListViewController';
        this.service = new PostListService(this, this.appManager.selectedUser);
        this.service.get();


        this.fadeView.className = 'postListViewController_fadeView';
        this.fadeView.innerHTML = 'LOADING...'
        this.contentView.className = 'postListViewController_contentView';
        this.view.style.transform =`translate(${window.innerWidth}px, 0px)`;

        this.addPostBtn = document.createElement('div');
        this.addPostBtn.className = 'postListViewController_addPostBtn';
        this.addPostBtn.innerHTML = '+';
        this.view.appendChild(this.addPostBtn);

        this.isUILoaded = false;
        gsap.to(this.fadeView,{opacity: 0.75, duration: this.moveInDuration});




    }

    showUI(posts){

        this.contentView.innerHTML = '';
        posts.forEach(post => {
           let postView = new PostView(this.appManager, this.view, post);
        });

        this.moveIn();
       

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

    onaddPostBtn(){

    }
}