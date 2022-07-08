import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  value = 'btn'
  registerform = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(15)]),
    
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    
   
    control: new FormControl('true', [
      Validators.required,

    ])

  });

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log(this.registerform.value);
    this.registerform.markAllAsTouched()
    if (this.registerform.valid) {
      this.messageService.add({
        severity: 'success', summary: 'Success', detail: 'Submitted',
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }
  }

}





