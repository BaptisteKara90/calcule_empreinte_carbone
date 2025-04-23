import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarbonFootprintFormComponent } from '../carbon-footprint-form/carbon-footprint-form.component';
import { CarbonFootprintResultComponent } from '../carbon-footprint-result/carbon-footprint-result.component';
import { CarbonFootprintComputeService } from '../service/carbon-footprint-compute.service';

@Component({
  selector: 'app-carbon-footprint',
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    CommonModule,
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.scss'
})
export class CarbonFootprintComponent {

  constructor(private CarbonFootprintComputeService : CarbonFootprintComputeService ){}
  
  get voyages(){
    return this.CarbonFootprintComputeService.getVoyage()
  }

  get resumeVoyage(){
    return this.CarbonFootprintComputeService.getResumeVoyages()
  }
  get distanceKm() : number {
    return this.resumeVoyage.distanceKm;
  }

  get consommationPour100Km() : number {
    return this.resumeVoyage.consommationPour100Km;
  }

  get quantiteCO2() : number {
    return this.resumeVoyage.quantiteCO2;
  }

  get resultCons() : number {
    return (this.distanceKm / 100) * this.consommationPour100Km
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

  addVoyage(): void {
    this.CarbonFootprintComputeService.addVoyage()
  }

}
