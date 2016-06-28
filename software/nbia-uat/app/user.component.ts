import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {Checkbox} from 'primeng/primeng';
import {User} from './users/user';
import {UserService} from './users/userservice';

@Component({
	templateUrl: 'app/user.component.html',
	selector: 'user',
    directives: [InputText,Checkbox,DataTable,Button,Dialog,Column,Header,Footer],
	providers: [HTTP_PROVIDERS,UserService]
})

export class UserComponent {

	displayDialog: boolean;
    user: User = new PrimeUser();
    selectedUser: User;
    newUser: boolean;
    users: User[];
	postData: string;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers().then(users => this.users = users);
    }

    showDialogToAdd() {
        this.newUser = true;
        this.user = new PrimeUser();
        this.displayDialog = true;
    }

    save() {
        if(this.newUser) {
			this.userService.addNewUser(this.user)
			.subscribe(
				data => this.postData = JSON.stringify(data),
				error => alert(error),
				() => console.log("Finished")
			);
			this.users.push(this.user);
		}
        else {
			this.userService.modifyExistingUser(this.user)
			.subscribe(
				data => this.postData = JSON.stringify(data),
				error => alert(error),
				() => console.log("Finished")
			);
            this.users[this.findSelectedUserIndex()] = this.user;
		}
        this.user = null;
        this.displayDialog = false;
    }

    delete() {
        this.users.splice(this.findSelectedUserIndex(), 1);
        this.user = null;
        this.displayDialog = false;
    }

//    onRowSelect(event) {
	showDialog(u) {
        this.newUser = false;
        this.user = this.cloneUser(u);
		this.selectedUser=u;
        this.displayDialog = true;
    }

    cloneUser(u: User): User {
        let user = new PrimeUser();
        for(let prop in u) {
            user[prop] = u[prop];
        }
        return user;
    }

    findSelectedUserIndex(): number {
        return this.users.indexOf(this.selectedUser);
    }
}

class PrimeUser implements User {

    constructor(public loginName?, public email?, public active?) {}
}
