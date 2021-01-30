import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      passWord: [''],
      confirmPassWord: [''],
    })
  }

  onRegisterClick() {
    const body = {
      email: this.form.get('email').value,
      passWord: this.form.get('passWord').value,
    }
    this.authService.register(body).subscribe((res: any) => {
      console.log('res', res)

    });
  }

}
