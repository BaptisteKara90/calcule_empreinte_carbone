import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  voyages = [
    { distanceKm: 50, consommationPour100Km: 5, quantiteCO2: 0, date: new Date("2025-02-03"), vehicule: 'voiture' },
    { distanceKm: 150, consommationPour100Km: 6, quantiteCO2: 0, date: new Date("2025-03-03"), vehicule: 'voiture' },
    { distanceKm: 250, consommationPour100Km: 7, quantiteCO2: 0, date: new Date("2025-04-13"), vehicule: 'voiture' },
    { distanceKm: 350, consommationPour100Km: 8, quantiteCO2: 0, date: new Date("2025-04-16"), vehicule: 'voiture' },
    { distanceKm: 450, consommationPour100Km: 9, quantiteCO2: 0, date: new Date("2025-04-18"), vehicule: 'voiture' },
  ]

  calculQuantiteCO2(distanceKm: number, consommationPour100Km: number, vehicule?: string): number {
    if (!vehicule || vehicule == 'voiture') {
      return (distanceKm * consommationPour100Km) / 100 * 2.3;
    }
    if (vehicule == 'train') {
      return (distanceKm * consommationPour100Km) / 100 * 0.03;
    } else {
      //avion
      return (distanceKm * consommationPour100Km) / 100 * 0.2;
    }
  }

  getVoyage() {
    return this.voyages
  }

  addVoyage(voyage?: { distanceKm: number; consommationPour100Km: number; quantiteCO2: number; date: Date; vehicule: string } | undefined): void {
    if (voyage) {
      voyage.quantiteCO2 = this.calculQuantiteCO2(voyage.distanceKm, voyage.consommationPour100Km, voyage.vehicule);
      this.voyages.push(voyage);
    } else {
      const randomDistance = Math.floor(Math.random() * 991) + 10;
      const randomConso = Math.floor(Math.random() * 8) + 3;
      const randomQuantiteCO2 = (randomDistance * randomConso) / 100 * 2.3;
      const randomDate = new Date(Date.now() + Math.floor(Math.random() * 10000000000));
      const vehicule = "voiture";

      this.voyages.push({
        distanceKm: randomDistance,
        consommationPour100Km: randomConso,
        quantiteCO2: randomQuantiteCO2,
        date: randomDate,
        vehicule: vehicule
      });
    }

  }

  getResumeVoyages() {
    let ResumeVoyage = {
      distanceKm: this.voyages.reduce((acc, voyage) => acc + voyage.distanceKm, 0),
      consommationPour100Km: (this.voyages.reduce((acc, voyages) => acc + voyages.consommationPour100Km, 0)) / this.voyages.length,
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
