import { ViewController } from "../viewController.js";
import { UserListSevice } from "./userListService.js";

export class UserListViewController extends ViewController {
    constructor(appManager){
        super(appManager);
        this.service = new UserListSevice(this);
        this.service.get();
    }

    showUI(users){
        console.log(users);
    }
}