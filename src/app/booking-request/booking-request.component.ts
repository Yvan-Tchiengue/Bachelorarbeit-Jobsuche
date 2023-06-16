import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-request',
  templateUrl: './booking-request.component.html',
  styleUrls: ['./booking-request.component.css']
})
export class BookingRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titre?: string;
  description?: string;

  enregistrerOffre() {
    // Enregistrer l'offre d'emploi avec le backend
    // Utiliser les valeurs de titre et description
  }

}
