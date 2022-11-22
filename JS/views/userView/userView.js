import { View } from "../view.js";

export class UserView extends View{
    constructor(appManeger, parent, user){
        super(appManeger, parent);
        this.user = user;
        this.view.className = 'userView';

        this.avatarDiv = document.createElement('div');
        this.dataDiv = document.createElement('div');
        this.buttonsDiv = document.createElement('div');

        this.avatarDiv.className ='userView_avatarDiv';
        this.dataDiv.className ='userView_dataDiv';
        this.buttonsDiv.className ='userView_buttonsDiv';

        this.view.appendChild(this.avatarDiv);
        this.view.appendChild(this.dataDiv);
        

        var name = document.createElement('p');
        name.className = 'userView_name';
        name.innerHTML =this.user.name;
        this.dataDiv.appendChild(name);

        var username = document.createElement('p');
        username.className = 'userView_infoUser';
        username.innerHTML =`<b>Username: </b> ${this.user.username}`;
        this.dataDiv.appendChild(username);

        var email = document.createElement('p');
        email.className = 'userView_infoUser';
        email.innerHTML =`<b>Email: </b> ${this.user.email}`;
        this.dataDiv.appendChild(email);

        var phone = document.createElement('p');
        phone.className = 'userView_infoUser';
        phone.innerHTML =`<b>Phone: </b> ${this.user.phone}`;
        this.dataDiv.appendChild(phone);

        var website = document.createElement('p');
        website.className = 'userView_infoUser';
        website.innerHTML =`<b>Website: </b> ${this.user.website}`;
        this.dataDiv.appendChild(website);

        var avatarImg = document.createElement('img');
        avatarImg.className ='userView_avatarImg';
        avatarImg.src = this.user.avatar;
        this.avatarDiv.appendChild(avatarImg);

        this.postsBtn = document.createElement('div');
        this.postsBtn.className = 'userView_button';
        this.postsBtn.innerHTML = `POST: ${this.user.postsCount}`;
        this.postsBtn.onclick = this.showPost.bind(this);
        this.buttonsDiv.appendChild(this.postsBtn);
        this.dataDiv.appendChild(this.buttonsDiv);

        this.todosBtn = document.createElement('div');
        this.todosBtn.className = 'userView_button';
        this.todosBtn.innerHTML = `TODOS: ${this.user.todosCount}`;
        this.todosBtn.onclick = this.showTodos.bind(this);
        this.buttonsDiv.appendChild(this.todosBtn);
        this.dataDiv.appendChild(this.buttonsDiv);
    }

    showPost(){
        console.log(this.user);
        this.appManager.showPost(this.user);
    }

    showTodos(){
        
    }
}