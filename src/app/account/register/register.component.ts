import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None

})
export class RegisterComponent implements OnInit {
  value = 'btn'
  registerform = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(15)]),
    // lastName: new FormControl('',[
    //   Validators.required,
    //   Validators.maxLength(20)]),
    // phoneNumber: new FormControl('',[
    //   Validators.required,
    //   Validators.required, Validators.pattern("[0-9 ]{10}")]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+@')]),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      


      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+@')
    ]),

    control: new FormControl('true', [
      Validators.required,

    ])

  });

  constructor(
    // private primengConfig: PrimeNGConfig, 
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }
  // addSingle() {
  //   this.messageService.add({severity:'success', summary:'Success', detail:'Submitted', 
  //   });
  // }

  //   showError() {
  //     this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
  // }
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





// onSubmit(data: any) {
  //   if (this.registerform.valid) {
  //     alert("Successfully Login")
  //   } else {
  //     this.registerform.invalid
  //     alert("Invalid Login")
  //   }
  //   console.log(data);
  // }