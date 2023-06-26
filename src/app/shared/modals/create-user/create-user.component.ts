import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit{
 // phone number regex
 phoneNumberPattern = /^([+]\d{2})?\d{10}$/;

 // User form
 userForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  phone: ['', [Validators.required, Validators.pattern(this.phoneNumberPattern)]],
  address: ['', Validators.required]
 });

 constructor(
  private fb: UntypedFormBuilder,
  public dialogRef: MatDialogRef<CreateUserComponent>,
 ) {

 }

 ngOnInit(): void {

 }

 /**
  * Handle error handling
  */
 public errorHandling = (control: string, error: string) => {
  return this.userForm.controls[control].hasError(error);
 };

 submitForm() {
  if (this.userForm.valid) {
    this.dialogRef.close(this.userForm.value);
  }
 }
}
