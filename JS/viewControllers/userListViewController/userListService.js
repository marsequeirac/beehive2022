export class UserListSevice {
    constructor(viewController){
        this.viewController = viewController;
        this.url = 'https://us-central1-beehivebackend-23257.cloudfunctions.net/app/users';
        
    }

    get(){
        var users = [];
        var request = new XMLHttpRequest();
        request.open('get',this.url);
        request.onload = (event) => {
            let data = JSON.parse(request.response);
            for(const id in data){
                if (data.hasOwnProperty(id)) {
                    const userData = data[id];
                    let user = new User(id,
                        userData.name,
                        userData.email,
                        userData.isOwner, 
                        userData.phone, 
                        userData.website, 
                        userData.username, 
                        userData.postsCount, 
                        userData.todosCount, 
                        userData.avatar)
                    users.push(user);
                    
                    
                }
            }
            
        }
        request.send();


        this.viewController.showUI(users)
    }

    put(){
        
    }

    delete(){
        
    }
}