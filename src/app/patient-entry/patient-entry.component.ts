import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  name=""
  id=""
  address=""
  phone=""
  appointment=""
  image=""
  doctor=""

  readValues=()=>
  {
    let data:any={"name":this.name,"id":this.id,"address":this.address,"phone":this.phone,"appointment":this.appointment,"image":this.image,"doctor":this.doctor}
    console.log(data)
  }




}
