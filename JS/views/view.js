export class View {
    constructor(appManager , parent){
        this.appManager = appManager;
        this.parent = parent;
        this.view = document.createElement('div');
        this.parent.appendChild(this.view);
    }
}