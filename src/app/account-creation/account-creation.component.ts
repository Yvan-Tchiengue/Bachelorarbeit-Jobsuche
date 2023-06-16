import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nom?: string;
  email?: string;
  motDePasse?: string;
  typeCompte?: string;

  creerCompte() {
    // Créer le compte avec le backend
    // Utiliser les valeurs de nom, email, motDePasse et typeCompte
  }

}
