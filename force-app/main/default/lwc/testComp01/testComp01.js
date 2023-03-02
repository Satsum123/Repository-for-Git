import { LightningElement } from 'lwc';

export default class TestComp01 extends LightningElement {
    name='Drama';
    description='This is Title name';
    price='200';
    image='C:\Users\ASUS\Pictures.png';
    ready= false;
    connectedCallback(){
        setTimeout(() => {
        this.ready=true;    
        }, 3000);
    }
    
}