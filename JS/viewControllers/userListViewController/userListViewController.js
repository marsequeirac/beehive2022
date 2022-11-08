import { UserListSevice } from "./userListService.js";

export class UserListViewController{
    constructor(appManager){
        this.appManager = appManager;
        this.service = new UserListSevice(this);
        this.service.get();
    }

    showUI(users){
        
    }
}