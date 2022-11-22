import { Comment } from "../../models/comment.js";
import { Post } from "../../models/post.js";

export class PostListService {
    constructor(viewController, user){
        this.viewController = viewController;
        this.user = user;
        this.url = 'https://us-central1-beehivebackend-23257.cloudfunctions.net/app/posts/' +user.id;
    }

    get(){
        var posts = [];
        var request = new XMLHttpRequest();


        request.open('get',this.url);
        request.onload = () => {
            let data = JSON.parse(request.response);

            for(const id in data){
                if (data.hasOwnProperty(id)) {
                    const postData = data[id];
                    console.log(postData);
                    var comments = [];
                    const commentsData = postData.comments;
                    for (const commentId in commentsData) {
                        const commentData = commentsData[commentId];
                        var comment = new Comment(commentId, commentData.title, commentId.body);
                        comments.push(comment)
                        
                    }
                   

                    var post = new Post(id, postData.title, postData.body, comments);
                    posts.push(post);
                    
                    
                    
                }
            }

            this.viewController.showUI(posts);
            
        };
        request.send();

    }

    put(){
        
    }

    delete(){
        
    }
}