import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private http: HttpClient) { }

  creerOffre(offreEmploi: any): Observable<any> {
    return this.http.post('/api/offres-emploi', offreEmploi);
  }

  creerCompte(rechercheurEmploi: any): Observable<any> {
    return this.http.post('/api/rechercheurs-emploi', rechercheurEmploi);
  }

  authentification(credentials: any): Observable<any> {
    return this.http.post('/api/authentification', credentials);
  }
}
