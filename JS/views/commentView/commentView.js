import { View } from "../view.js";

export class CommentView extends View{
    constructor(appManeger, parent, comment){
        super(appManeger, parent);
        this.comment = comment;
        this.view.className = 'commentView';

        var title = document.createElement('p');
        title.className = 'commentView_title';
        title.innerHTML = this.comment.title;
        this.view.appendChild(title);

        var body = document.createElement('p');
        body.className = 'commentView_body';
        body.innerHTML = this.comment.body;
        this.view.appendChild(body);


        var userDiv = document.createElement('div');
        userDiv.className = 'commentView_userDiv';
        this.view.appendChild(userDiv);


        var user = this.appManager.getUserById(this.comment.user);


        var avatar = document.createElement('img');
        avatar.className = 'commentView_avatar';
        avatar.src = user.avatar;
        userDiv.appendChild(avatar);

        var userName = document.createElement('p');
        userName.className = 'commentView_Name';
        userName.innerHTML = user.name;
        userDiv.appendChild(userName);

      



    }

    
}