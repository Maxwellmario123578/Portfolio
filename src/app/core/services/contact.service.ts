import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ContactForm } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  submitContactForm(formData: ContactForm): Observable<boolean> {
    console.log('Contact form submitted:', formData);
    return of(true).pipe(delay(1000));
  }
}
