import { ViewController } from "../viewController.js";
import { TodoListService } from "./todoListService.js";

export class TodoListViewController extends ViewController {
   constructor(appManager, parent){
    super(appManager, parent);
        this.view.className = 'todoListViewController';
        this.service = new TodoListService(this, this.appManager, this.appManager.selectedUser);
        this.service.get();


        this.fadeView.className = 'todoListViewController_fadeView';
        this.contentView.className = 'todoListViewController_contentView';
        this.contentView.style.transform =`translate(${window.innerWidth}px, 0px)`;

        this.addTodoBtn = document.createElement('div');
        this.addTodoBtn.className = 'todoListViewController_addTodoBtn';
        this.addTodoBtn.innerHTML = '+';
        this.addTodoBtn.classList.add('hidden');
        this.view.appendChild(this.addTodoBtn);

        this.moveInSpeed = 0.75;
        this.moveOut = 0.5;
    }

    showUI(todos) {
        console.log(todos);
        todos.forEach(todo => {
            let todoView = new TodoView(this.appManager, this.contentView, todo);
        });

        this.moveIn();
    }

    moveIn(){
        //gsap.to(this.contentView,{x:0, duration: this.moveInDuration});
        //gsap.to(this.fadeview,{opacity:0.75, duration: this.moveInDuration});
        gsap.to(this.view,{x:0, duration: 0.5});
    }

    moveCompleted(){
        
        this.addTodoBtn.classList.add('hidden');
    }

    moveOut(){
        this.addTodoBtn.classList.add('hidden');
        gsap.to(this.contentView,{opacity:0.75, duration: this.moveInDuration});

    }

}