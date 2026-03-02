import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormSecurityService {

  constructor() { }

  /**
   * Nettoie et sécurise une chaîne de caractères contre les injections XSS
   */
  sanitizeInput(input: string): string {
    if (!input) return '';
    
    // Supprimer les balises HTML
    let sanitized = input.replace(/<[^>]*>/g, '');
    
    // Encoder les caractères spéciaux HTML
    sanitized = this.escapeHtml(sanitized);
    
    // Supprimer les caractères de contrôle dangereux
    sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
    
    return sanitized.trim();
  }

  /**
   * Échappe les caractères HTML spéciaux
   */
  private escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;',
    };
    return text.replace(/[&<>"'/]/g, (char) => map[char]);
  }

  /**
   * Valide un email
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  /**
   * Valide un nom (pas de caractères spéciaux dangereux)
   */
  isValidName(name: string): boolean {
    // Accepte lettres, espaces, tirets, apostrophes
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
    return nameRegex.test(name);
  }

  /**
   * Valide un sujet (longueur et caractères)
   */
  isValidSubject(subject: string): boolean {
    return subject.length >= 3 && subject.length <= 100;
  }

  /**
   * Valide un message (longueur)
   */
  isValidMessage(message: string): boolean {
    return message.length >= 10 && message.length <= 1000;
  }

  /**
   * Détecte les tentatives d'injection SQL
   */
  containsSqlInjection(input: string): boolean {
    const sqlPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi,
      /(--|\*|;|'|"|\||&)/g,
      /(\bOR\b|\bAND\b).*=.*=/gi,
      /(\bunion\b.*\bselect\b)/gi,
      /(\bscript\b.*>)/gi
    ];
    
    return sqlPatterns.some(pattern => pattern.test(input));
  }

  /**
   * Détecte les tentatives d'injection de script
   */
  containsScriptInjection(input: string): boolean {
    const scriptPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi, // onclick, onerror, etc.
      /<iframe/gi,
      /<object/gi,
      /<embed/gi,
      /eval\(/gi,
      /expression\(/gi
    ];
    
    return scriptPatterns.some(pattern => pattern.test(input));
  }

  /**
   * Valide et nettoie tous les champs du formulaire
   */
  validateAndSanitizeForm(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): { isValid: boolean; errors: string[]; sanitizedData?: any } {
    const errors: string[] = [];

    // Vérifier les injections avant tout
    if (this.containsSqlInjection(formData.name) || 
        this.containsSqlInjection(formData.email) || 
        this.containsSqlInjection(formData.subject) || 
        this.containsSqlInjection(formData.message)) {
      errors.push('Tentative d\'injection SQL détectée');
    }

    if (this.containsScriptInjection(formData.name) || 
        this.containsScriptInjection(formData.email) || 
        this.containsScriptInjection(formData.subject) || 
        this.containsScriptInjection(formData.message)) {
      errors.push('Tentative d\'injection de script détectée');
    }

    // Nettoyer les données
    const sanitizedName = this.sanitizeInput(formData.name);
    const sanitizedEmail = this.sanitizeInput(formData.email);
    const sanitizedSubject = this.sanitizeInput(formData.subject);
    const sanitizedMessage = this.sanitizeInput(formData.message);

    // Valider le nom
    if (!sanitizedName || !this.isValidName(sanitizedName)) {
      errors.push('Le nom doit contenir entre 2 et 50 caractères (lettres uniquement)');
    }

    // Valider l'email
    if (!sanitizedEmail || !this.isValidEmail(sanitizedEmail)) {
      errors.push('L\'adresse email n\'est pas valide');
    }

    // Valider le sujet
    if (!sanitizedSubject || !this.isValidSubject(sanitizedSubject)) {
      errors.push('Le sujet doit contenir entre 3 et 100 caractères');
    }

    // Valider le message
    if (!sanitizedMessage || !this.isValidMessage(sanitizedMessage)) {
      errors.push('Le message doit contenir entre 10 et 1000 caractères');
    }

    if (errors.length > 0) {
      return { isValid: false, errors };
    }

    return {
      isValid: true,
      errors: [],
      sanitizedData: {
        name: sanitizedName,
        email: sanitizedEmail,
        subject: sanitizedSubject,
        message: sanitizedMessage
      }
    };
  }

  /**
   * Limite le taux de soumission (rate limiting côté client)
   */
  private lastSubmissionTime = 0;
  private readonly MIN_SUBMISSION_INTERVAL = 5000; // 5 secondes

  canSubmit(): boolean {
    const now = Date.now();
    if (now - this.lastSubmissionTime < this.MIN_SUBMISSION_INTERVAL) {
      return false;
    }
    this.lastSubmissionTime = now;
    return true;
  }

  getRemainingTime(): number {
    const now = Date.now();
    const elapsed = now - this.lastSubmissionTime;
    const remaining = Math.max(0, this.MIN_SUBMISSION_INTERVAL - elapsed);
    return Math.ceil(remaining / 1000);
  }
}
