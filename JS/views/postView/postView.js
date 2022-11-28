import { CommentView } from "../commentView/commentView.js";
import { View } from "../view.js";

export class PostView extends View{
    constructor(appManeger, parent, post){
        super(appManeger, parent);
        this.post = post;
        this.view.className = 'postView';

        var title = document.createElement('p');
        title.className = 'postView_title';
        title.innerHTML = this.post.title;
        this.view.appendChild(title);

        var body = document.createElement('p');
        body.className = 'postView_body';
        body.innerHTML = this.post.body;
        this.view.appendChild(body);

        this.addCommentBtn = document.createElement('div');
        this.addCommentBtn.className = 'postView_addCommentBtn'
        this.view.appendChild(this.addCommentBtn);
        this.addCommentBtn.innerHTML = 'ADD COMMENT';
        this.addCommentBtn.onclick = this.addComment.bind(this);


        var commentsDiv = document.createElement('div');
        commentsDiv.className = 'postView_commentsDiv'
        this.view.appendChild(commentsDiv);

        post.comments.forEach(comment => {
            var commentView = new CommentView(this.appManager, commentsDiv, comment);
        });



    }

    addComment(){
        
    }

    
}