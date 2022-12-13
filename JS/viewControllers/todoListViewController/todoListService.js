import { Todo } from "../../models/todo.js";

export class TodoListService {
    constructor(viewController, user) {
        this.viewController = viewController;
        this.user = user;
        this.url = 'https://us-central1-beehivebackend-23257.cloudfunctions.net/app/todos/' + user.id;
    }

    get() {
        var todos = [];
        var request = new XMLHttpRequest();

        request.open('get', this.url);
        request.onload = () => {
            let data = JSON.parse(request.response);

            for (const id in data) {
                if (data.hasOwnProperty(id)) {
                    const todoData = data[id];
                    var todo = new Todo(id, todoData.title, todoData.completed);
                    todos.push(todo);
                }
            }

            this.viewController.showUI(todos);
        };
        request.send();
    }

    patch(todo) {

        var request = new XMLHttpRequest();
        request.open('patch', this.url);
        request.onload = () => {
            // let data = JSON.parse(request.response);

            // for (const id in data) {
            //     if (data.hasOwnProperty(id)) {
            //         const todoData = data[id];
            //         var todo = new Todo(id, todoData.title, todoData.completed);
            //         todos.push(todo);
            //     }
            // }

            // this.viewController.showUI(todos);
        };
        request.send(JSON.stringify(todo));
    }

    put() { }

    delete() { }
}