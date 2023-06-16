import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }

  typeCompte?: string;

  constructor() {
    // Récupérer le type de compte depuis le backend après l'authentification
    // Utiliser cette valeur pour afficher les boutons appropriés dans le template
    // Exemple : this.typeCompte = 'employe' ou 'employeur'
  }

}
