import { UserView } from "../../views/userView/userView.js";
import { ViewController } from "../viewController.js";
import { UserListService } from "./userListService.js";


export class UserListViewController extends ViewController{
    constructor(appManager,parent){
        super(appManager, parent);
        this.view.className = 'userListViewController';
        this.service = new UserListService(this);
        this.service.get();

    }

    showUI(users){
        this.appManager.users = users;
        users.forEach(user => {
            let userView = new UserView(this.appManager, this.view, user);
        });
    }
}
