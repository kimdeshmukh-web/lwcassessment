import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/demotclass.getContacts';

export default class ContactList extends LightningElement {
    @track contacts;
    @track error;

    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = null;
        } else if (error) {
            this.contacts = null;
            this.error = 'Error fetching Contacts';
        }
    }

    
}
