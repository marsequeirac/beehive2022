export class User {
    constructor(id, name,email,isOwner, phone, website, username, postsCount, todosCount, avatar){
        this.id = id;
        this.name = name;
        this.email = email;
        this.isOwner = isOwner;
        this.phone = phone;
        this.website = website;
        this.username = username;
        this.postsCount = postsCount;
        this.todosCount = todosCount;
        this.avatar = avatar;
    }
}