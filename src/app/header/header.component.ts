import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  nomUtilisateur: string = "";
  userService: any = inject(UserService);

  ngOnInit() {
  this.nomUtilisateur = this.userService.getUsername();
  }
}
