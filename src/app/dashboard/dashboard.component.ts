import { Component, OnInit } from '@angular/core';
import { SessionService} from "../shared/session.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userType: string | null | undefined;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.userType = this.sessionService.getUserType();
  }

  /*constructor() {
    // Récupérer le type de compte depuis le backend après l'authentification
    // Utiliser cette valeur pour afficher les boutons appropriés dans le template
    // Exemple : this.typeCompte = 'employe' ou 'employeur'
  }*/

}
