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



    }

    
}