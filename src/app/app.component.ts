import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarbonFootprintComponent } from './carbon-footprint/carbon-footprint.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calcule_empreinte_carbone';


  // différent états
  // ngOnInit(){
  //   console.log("Huhu")
  // }

  // ngOnDestroy(): void {
  //   console.log("ngOnDestroy")
  // }

  // ngDoCheck(){
  //   console.log("ngDoCheck")
  // }

  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit")
  // }

  // ngAfterViewInit(){
  //   console.log("ngAfterViewInit")
  // }
}
