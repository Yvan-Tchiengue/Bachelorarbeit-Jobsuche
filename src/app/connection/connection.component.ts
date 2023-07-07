import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobOfferService} from "../shared/job-offer.service";


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  reponse?: number;
  constructor(private http: HttpClient, private authService: JobOfferService) { }

  ngOnInit(): void {
  }

  credentials = {
    email: '',
    motDePasse: ''
  };

  loginEmail?: string;
  loginPassword?: string;

  submit() {
    this.authService.authentification(this.credentials).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        alert('Authentification réussie!');
      },
      err => alert('Erreur lors de l\'authentification: ' + err.error.error)
    );
  }

  login() {
    // Effectuer l'authentification avec le backend
    // Utiliser les valeurs de loginEmail et loginPassword
  }

  demanderCalcul() {
    const url = 'http://localhost:3000/api/calcul'; // Remplacez l'URL par celle de votre serveur Node.js

    this.http.get<number>(url).subscribe(
      (resultat) => {
        this.reponse = resultat;
      },
      (erreur) => {
        console.error('Une erreur s\'est produite lors de la demande de calcul :', erreur);
      }
    );
  }
}
