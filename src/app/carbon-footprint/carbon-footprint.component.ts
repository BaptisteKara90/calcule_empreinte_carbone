import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarbonFootprintFormComponent } from '../carbon-footprint-form/carbon-footprint-form.component';
import { CarbonFootprintResultComponent } from '../carbon-footprint-result/carbon-footprint-result.component';

@Component({
  selector: 'app-carbon-footprint',
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    CommonModule
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.scss'
})
export class CarbonFootprintComponent {

  setResultCons : WritableSignal<number> = signal(0)
  resultCons : Signal<number> = computed(() =>  (this.distanceKm / 100) * this.consommationPour100Km)
  
  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
]

  get distanceKm() : number {
    return this.voyages.reduce((acc, voyage) => acc + voyage.distanceKm, 0);
  }
  get consommationPour100Km() : number {
    return (this.voyages.reduce((acc, voyages)=> acc + voyages.consommationPour100Km,0))/this.voyages.length;
  }

  get color(): string {
    if (this.consommationPour100Km > 7) {
      return 'red';
    } else if (this.consommationPour100Km < 4) {
      return 'green';
    }else{
      return 'orange'
    }
  }

  get distanceClass(): string {
    if (this.distanceKm > 500) {
      return 'haute-distance';
    } else if (this.distanceKm < 100) {
      return 'basse-distance';
    } else {
      return '';
    }
  }

  // add100km(): void {
  //   this.distanceKm += 100;
  // }

  

  addVoyage(): void {
    const randomDistance = Math.floor(Math.random() * 991) + 10; 
    const randomConso = parseFloat((Math.random() * 7 + 3).toFixed(1)); 

    this.voyages.push({
      distanceKm: randomDistance,
      consommationPour100Km: randomConso
    });
  }
}
