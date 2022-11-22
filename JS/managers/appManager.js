
import { PostListViewController } from "../viewControllers/postListViewController/postListViewController.js";
import { UserListViewController } from "../viewControllers/userListViewController/userListViewController.js";
import { NavBarView } from "../views/navBarView/navBarView.js";

//Une el archivo UserListViewController con AppManager
export class AppManager{
    constructor(){
        this.mainView = document.getElementById('mainView');
        this.navBarView = new NavBarView(this, this.mainView)
        this.userListViewController = new UserListViewController(this,this.mainView);
        this.postListViewController = null;
        console.log(this);
        this.selectedUser = null;

        this.SHOWING_USERS = 1;
        this.SHOWING_POST = 1;
        this.SHOWING_TODOS = 1;
        this.SHOWING_ADD_POSTS = 1;
        this.SHOWING_ADD_TODOS = 1;
        this.state = this.SHOWING_USERS;
    }
    

    back(){
        switch (this.state) {
            case this.SHOWING_USERS:
                break;
            case this.SHOWING_POST:
                this.navBarView.hideBackBtn();
                this.state =this.SHOWING_USERS;
               // this.mainView = removeChild(this.postListViewController.view);
                this.postListViewController.moveOut();
                this.postListViewController = null;
                break;
            case  this.SHOWING_TODOS:
                break;
            case this.SHOWING_ADD_POSTS:
                break;
            case this.SHOWING_ADD_TODOS:
                break;
            default:
                break;
        }
        
    }

    showPost(user){
        this.navBarView.showBackBtn();
        this.state = this.SHOWING_ADD_POSTS;
        this.selectedUser  = user;
        console.log(this.selectedUser);
        this.postListViewController = new PostListViewController(this, this.mainView);
        
    }
}