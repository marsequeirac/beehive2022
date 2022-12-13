import { View } from "../view.js";

export class TodoView extends View{
    constructor(appManeger, parent, todo, patchCallBack){
        super(appManeger, parent);
        this.todo = todo;
        this.view.className = 'todoView';

        var titleDiv = document.createElement('div');
        titleDiv.className ='todoView_titleDiv';
        

        var completedBtnDiv = document.createElement('div');;
        completedBtnDiv.className ='completedBtnDiv';
       

        this.view.appendChild(this.titleDiv);
        this.view.appendChild(this.completedBtnDiv);
        

        var title = document.createElement('p');
        title.classname = 'todoView_title';
        title.innerHTML =this.todo.title;
        titleDiv.appendChild(title);

        this.completedBtn = document.createElement('div');
        this.completedBtn.className = 'todoView_completedBtn';
        this.completedBtn.onclick =this.toogleComplete.bind(this);
        completedBtnDiv.appendChild(completedBtn);

        this.checkComplete();
    }

    checkComplete() {
        if (this.todo.completed){
            this.completedBtn.innerHTML = '';
        }else{
            this.completedBtn.innerHTML = '';
        }
    }

    toogleComplete(){
        this.todo.completed=!this.todo.completed;
        this.checkComplete();
    }

    
}