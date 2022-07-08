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

  registerationform = new FormGroup({
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*"),
    ]),
    // lastName: new FormControl('',[
    //   Validators.required,
    //   Validators.maxLength(20)]),
    // phoneNumber: new FormControl('',[
    //   Validators.required,
    //   Validators.required, Validators.pattern("[0-9 ]{10}")]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
    control: new FormControl(true)

  });

  constructor(
    // private primengConfig: PrimeNGConfig, 
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }
  addSingle() {
    this.messageService.add({
      severity: 'success', summary: 'Service Message', detail: 'Via MessageService'
    });
  }
  registeration() {
    console.log(this.registerationform.value);
  }
}