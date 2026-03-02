import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Détection automatique: si on est sur localhost, utiliser le serveur local
  // Sinon, utiliser l'API Vercel
  private apiUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api/contact'
    : '/api/contact';

  constructor(private http: HttpClient) {}

  sendEmail(formData: ContactForm): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.apiUrl, formData);
  }
}
