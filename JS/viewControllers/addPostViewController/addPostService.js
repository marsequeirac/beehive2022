import { Todo } from "../../models/todo.js";

export class AddPostService {
    constructor(viewController, user) {
        this.viewController = viewController;
        this.user = user;
        this.url = 'https://us-central1-beehivebackend-23257.cloudfunctions.net/app/posts/' + user.id;
    }

    sendPost(post) {
        var request = new XMLHttpRequest();
        request.open('post', this.url);
        request.onload = () => {
            this.viewController.postingCompleted();
        };
        request.send(JSON.stringify(post));
    }
}