import { Input, Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;

    contact: Contact = new Contact();
    loading = true;

    constructor() {
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }

    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    ngOnInit() {
        this.loading = false;
    }

    onSubmit() {
        this.loading = true;
        //Don't forget to subscribe on an observable, or it will never be called.
        /*this.contactService.sendMail(this.contact).subscribe(
            () => {
                //Success
                this.contact = new Contact();
                this.loading = false;
                this.toastr.success('Message send.');
            },
            () => {
                //Failed
                this.loading = false;                
                this.toastr.error('Woops, something went wrong.');
            }
        );*/
    }

}

export interface IAlert {
    id: number;
    type: string;
    message: string;
    icon?: string;
}
