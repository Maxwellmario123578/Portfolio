import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ContactForm } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  submitContactForm(formData: ContactForm): Observable<boolean> {
    return of(true).pipe(delay(1000));
  }
}
