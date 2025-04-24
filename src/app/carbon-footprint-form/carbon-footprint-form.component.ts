import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarbonFootprintComputeService } from '../service/carbon-footprint-compute.service';

@Component({
  selector: 'app-carbon-footprint-form',
  imports: [ReactiveFormsModule],
  templateUrl: './carbon-footprint-form.component.html',
  styleUrl: './carbon-footprint-form.component.scss'
})
export class CarbonFootprintFormComponent {
  private carbonFootprintComputeService: any = inject(CarbonFootprintComputeService);
  private fb = inject(FormBuilder);
  formNewVoyage = this.fb.group({
    distance: ['', [Validators.required, Validators.min(1)]],
    consoPour100Km: ['', [Validators.required, Validators.min(1)]],
    date: ['', [Validators.required]],
    vehicule : ['', [Validators.required]]
  })

  onSubmit() {
    if (this.formNewVoyage.valid) {
      const voyage = {
        distanceKm: this.formNewVoyage.value.distance,
        consommationPour100Km: this.formNewVoyage.value.consoPour100Km,
        quantiteCO2: 0,
        date: this.formNewVoyage.value.date,
        vehicule: this.formNewVoyage.value.vehicule
      };
      this.carbonFootprintComputeService.addVoyage(voyage);
    } else {
      console.info("Formulaire invalide !");
    }
  }
}
