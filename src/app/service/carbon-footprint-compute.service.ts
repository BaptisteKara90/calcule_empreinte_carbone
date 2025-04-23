import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  voyages = [
    { distanceKm: 50, consommationPour100Km: 5, quantiteCO2: 0 },
    { distanceKm: 150, consommationPour100Km: 6, quantiteCO2: 0 },
    { distanceKm: 250, consommationPour100Km: 7, quantiteCO2: 0 },
    { distanceKm: 350, consommationPour100Km: 8, quantiteCO2: 0 },
    { distanceKm: 450, consommationPour100Km: 9, quantiteCO2: 0 },
]

  calculQuantiteCO2(distanceKm: number, consommationPour100Km: number): number {
    return (distanceKm * consommationPour100Km) / 100 * 2.3
  }

  getVoyage(){
    return this.voyages
  }

  addVoyage(): void {
    const randomDistance = Math.floor(Math.random() * 991) + 10; 
    const randomConso = Math.floor(Math.random() * 8) + 3; 
    const randomQuantiteCO2 = (randomDistance * randomConso) / 100 * 2.3;

    this.voyages.push({
      distanceKm: randomDistance,
      consommationPour100Km: randomConso,
      quantiteCO2: randomQuantiteCO2
    });
  }

  getResumeVoyages(){
    let ResumeVoyage = {
      distanceKm: this.voyages.reduce((acc, voyage) => acc + voyage.distanceKm, 0),
      consommationPour100Km: (this.voyages.reduce((acc, voyages)=> acc + voyages.consommationPour100Km,0))/this.voyages.length,
      quantiteCO2: this.voyages.reduce((acc, voyage) => acc + voyage.quantiteCO2, 0)
    }
    return ResumeVoyage
  }

  constructor() { 
    this.voyages.forEach(e => {
      e.quantiteCO2 = this.calculQuantiteCO2(e.distanceKm, e.consommationPour100Km)
    });
  }
}
