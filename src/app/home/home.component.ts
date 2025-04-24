import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private userService: any = inject(UserService);
  private router: Router = inject(Router);
  private fb = inject(FormBuilder);
  username: string = '';
  password: string = '';
  
  form= this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
      this.userService.login(this.form.value.username);
      this.router.navigate(['/summary']);
    }else{
      console.info("Formulaire invalide !");
    }
  }


}
