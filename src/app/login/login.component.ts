import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  value = 'btn'

  registerationform = new FormGroup({
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
      Validators.pattern("[^ @]*@[^ @]*"),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+@')]),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),

      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+@')
    ]),
  
    control: new FormControl(true)

  });

  constructor(
    // private primengConfig: PrimeNGConfig, 
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
  }
  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'
    });
  }
  registeration() {
    console.log(this.registerationform.value);
  }
}

