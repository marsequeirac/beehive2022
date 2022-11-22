import { PostView } from "../../views/postView/postView.js";
import { ViewController } from "../viewController.js";
import { PostListService } from "./postListService.js";


export class PostListViewController extends ViewController{
    constructor(appManager,parent){
        super(appManager, parent);
        this.view.className = 'postListViewController';
        this.service = new PostListService(this, this.appManager.selectedUser);
        this.service.get();
        //this.fadeView.className = 'postListViewController_fadeView';
        //this.contentView.className = 'postListViewController_contentView';
        this.view.style.transform =`translate(${window.innerWidth}px, 0px)`

    }

    showUI(posts){

        posts.forEach(post => {
           let postView = new PostView(this.appManager, this.view, post);
        });

        this.moveIn();
       

    }

    moveIn(){

        //gsap.to(this.contentView,{x:0, duration: this.moveInDuration});
        //gsap.to(this.fadeview,{opacity:0.75, duration: this.moveInDuration});
        gsap.to(this.view,{x:0, duration: 0.5});
    }

    moveOut(){
        //gsap.to(this.view,{x:window.innerWidth, duration: this.moveOutDuration, onComplete: this.destroy.bind(this)});
        this.parent.removeChild(this.view);
        //gsap.to(this.view,{x:window.innerWidth, duration: 0.5});
        //gsap.to(this.fadeview,{opacity:0, duration: this.moveOutDuration});
        gsap.to(this.view,{x:window.innerWidth, duration: 0.5, onComplete: this.destroy.bind(this)});
       
    }
}