import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myForm: FormGroup;
  data_sector: any = [];
  data_sub_sector: any = [];

 constructor() {

 }


 ngOnInit() {
   this.myForm = new FormGroup({
     sector: new FormControl(''),
     sub_sector: new FormControl('')
   })

   for(let i=0; i<10; i++) {
     this.data_sector.push({name:i, value:i})
   }
   for(let i=0; i<10; i++) {
     this.data_sub_sector.push({name:i, value:i})
   }
   console.log(this.data_sector)
 }

 onSubmit() {
   console.log(this.myForm)
 }


 onChange() {
   console.log("onChange trigger")
  for(let i=10; i<20; i++) {
    this.data_sub_sector.push({name:i, value:i})
  } }
}
