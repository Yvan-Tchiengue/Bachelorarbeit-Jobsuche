import { Component, OnInit } from '@angular/core';
import { JobOfferService} from "../shared/job-offer.service";


@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  constructor(private rechercheurEmploiService: JobOfferService) { }

  ngOnInit(): void {
  }

  nom?: string;
  email?: string;
  motDePasse?: string;
  typeCompte?: string;

  rechercheurEmploi = {
    nom: '',
    email: '',
    motDePasse: '',
    typeCompte: ''
  };

  submit() {
    this.rechercheurEmploiService.creerCompte(this.rechercheurEmploi).subscribe(
      () => alert('Compte créé avec succès!'),
      err => alert('Erreur lors de la création du compte: ' + err.message)
    );
  }

  creerCompte() {
    // Créer le compte avec le backend
    // Utiliser les valeurs de nom, email, motDePasse et typeCompte
  }

}
