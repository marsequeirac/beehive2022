import { View } from "../view.js";

export class NavBarView extends View {
    constructor(appManager, parent){
        super(appManager, parent);
        this.view.className = 'navBarView';

        this.backBtn = document.createElement('div');
        this.backBtn.className = 'navBarView_backBtn';
        this.view.appendChild(this.backBtn);
        this.backBtn.onclick = this.back.bind(this);

        this.icon = document.createElement('img');
        this.icon.src = '../images/icons8.png';
        this.backBtn.appendChild(this.icon);

        this.hideBackBtn();
        
    }

    back() {
        this.appManager.back();
    }

    hideBackBtn() {
        this.backBtn.classList.add('hidden');
    }

    showBackBtn() {
        this.backBtn.classList.remove('hidden');
    }

}