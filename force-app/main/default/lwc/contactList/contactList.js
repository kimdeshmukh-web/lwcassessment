import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/demotclass.getContacts';


export default class ContactList extends LightningElement {
    columns = [
        { label: 'Name',  fieldName: 'Name' },
        { label: 'Email', fieldName: 'Email' },
        { label: 'Phone', fieldName: 'Phone' }
    ];
    contacts;
    rowOffset = 0;

    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
        } else if (error) {
            console.error(error);
        }
    }
    increaseRowOffset() {
        this.rowOffset += 100;
    }
}