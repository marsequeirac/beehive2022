export class AddCommentService {
    constructor(viewController, userId, postId) {
        this.viewController = viewController;
        this.url = `https://us-central1-beehivebackend-23257.cloudfunctions.net/app/post/${postId}/user/${userId}`;
    }

    sendComment(comment) {
        var request = new XMLHttpRequest();
        request.open('post', this.url);
        request.onload = () => {
            this.viewController.sendingCompleted();
        };
        request.send(JSON.stringify(comment));
    }
}