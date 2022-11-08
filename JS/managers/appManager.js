import { UserListViewController } from "../viewControllers/userListViewController/userListViewController.js";
//Une el archivo UserListViewController con AppManager
export class AppManager{
    constructor(){
        this.UserListViewController = new UserListViewController(this);
        console.log(this);
    }
}