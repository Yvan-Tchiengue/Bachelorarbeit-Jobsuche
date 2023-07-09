import { Component, OnInit } from '@angular/core';
import { JobOfferService} from "../shared/job-offer.service";

@Component({
  selector: 'app-booking-request',
  templateUrl: './booking-request.component.html',
  styleUrls: ['./booking-request.component.css']
})
export class BookingRequestComponent implements OnInit {

  constructor(private jobsOfferService: JobOfferService) { }

  ngOnInit(): void {
  }
  titre?: string;
  description?: string;

  jobsOffer = {
    title: '',
    description: '',
    salary: null,
    location: '',
    typeContract: '',
    businessSector: ''
  };

  enregistrerOffre() {
    // Enregistrer l'offre d'emploi avec le backend
    // Utiliser les valeurs de titre et description
  }

  submit() {
    this.jobsOfferService.creerOffre(this.jobsOffer).subscribe(
      () => alert('Offre d\'emploi créée avec succès!'),
      err => alert('Erreur lors de la création de l\'offre d\'emploi: ' + err.message)
    );
  }

}
