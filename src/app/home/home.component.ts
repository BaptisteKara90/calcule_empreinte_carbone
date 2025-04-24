import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private userService: any = inject(UserService);
  private router: Router = inject(Router);

  navigateToSummary() {
    this.userService.login('Batou');
    this.router.navigate(['/summary']);
  }
}
