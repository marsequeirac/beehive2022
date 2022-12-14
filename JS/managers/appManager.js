
import { PostListViewController } from "../viewControllers/postListViewController/postListViewController.js";
import { TodoListService } from "../viewControllers/todoListViewController/todoListService.js";
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
        this.SHOWING_POST = 2;
        this.SHOWING_TODOS = 3;
        this.SHOWING_ADD_POSTS = 4;
        this.SHOWING_ADD_TODOS = 5;
        this.state = this.SHOWING_USERS;
        this.users = null;
    }
    

    back(){

        switch (this.state) {
            case this.SHOWING_USERS:
                console.log('SHOWING_USERS')
               break;
            case this.SHOWING_POST:
                this.navBarView.hideBackBtn();
                this.state =this.SHOWING_USERS;
                this.mainView.removeChild(this.postListViewController.view);
                this.postListViewController.moveOut();
                this.postListViewController = null;
                break;
            case  this.SHOWING_TODOS:
                this.navBarView.hideBackBtn();
                this.state = this.SHOWING_USERS;
                this.todoListViewController.moveOut();
                this.todoListViewController = null;
                break;
            case this.SHOWING_ADD_POSTS:
               break;
            case this.SHOWING_ADD_TODOS:
               break;

            case this.SHOWING_POST:
                break;
                
            default:
                break;
       }

       
       
        
    }

    removeLoading(){
        this.navBarView = new NavBarView(this, this.mainView);
        this.loadingViewController.destroy();
        this.loadingViewController = null;
    }


    showPost(user){
        this.navBarView.showBackBtn();
        //this.state = this.SHOWING_ADD_POSTS;
        this.state = this.SHOWING_POST;
        this.selectedUser  = user;
        console.log(this.selectedUser);
        this.postListViewController = new PostListViewController(this, this.mainView);
        
    }

    getUserById(id){
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if(user.id == id){
                return user
            }
        }

        return null;
        
    }

    showTodo(user){
        this.navBarView.showBackBtn();
        this.state = this.SHOWING_TODOS;
        this.selectedUser = user;
        this.todoListViewController = new TodoListService(this, this.mainView);
    }
    
    showaddPost(){
        this.state = sho;
    }
}
    
