# Déploiement sur Vercel avec Formulaire de Contact

## Configuration des Variables d'Environnement sur Vercel

1. Allez sur votre projet Vercel: https://vercel.com/dashboard
2. Sélectionnez votre projet
3. Allez dans **Settings** → **Environment Variables**
4. Ajoutez les variables suivantes:

### Variables SMTP (Gmail recommandé)

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application
SMTP_FROM=votre-email@gmail.com
EMAIL_TO=votre-email@gmail.com
```

### Comment obtenir un mot de passe d'application Gmail:

1. Allez sur https://myaccount.google.com/security
2. Activez la **validation en deux étapes** (obligatoire)
3. Recherchez "Mots de passe des applications"
4. Créez un nouveau mot de passe pour "Mail"
5. Copiez le mot de passe généré (16 caractères)
6. Utilisez-le dans `SMTP_PASS`

## Structure du Projet pour Vercel

```
portfolio/
├── api/                    # Serverless Functions Vercel
│   ├── contact.js         # API endpoint pour le formulaire
│   └── package.json       # Dépendances pour l'API
├── src/                   # Application Angular
├── vercel.json           # Configuration Vercel
└── package.json          # Dépendances Angular
```

## Déploiement

### Option 1: Via Git (Recommandé)

1. Poussez votre code sur GitHub/GitLab/Bitbucket
2. Importez le projet sur Vercel
3. Vercel détectera automatiquement Angular
4. Ajoutez les variables d'environnement
5. Déployez!

### Option 2: Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

## Test de l'API en Production

Une fois déployé, votre API sera disponible à:
```
https://votre-domaine.vercel.app/api/contact
```

Testez avec curl:
```bash
curl -X POST https://votre-domaine.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

## Alternatives à Gmail

### Outlook/Hotmail
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### SendGrid (Recommandé pour production)
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=votre-api-key-sendgrid
```

### Mailgun
```
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
```

## Sécurité

- ✅ Les variables d'environnement sont sécurisées sur Vercel
- ✅ CORS est configuré pour accepter toutes les origines (ajustez si nécessaire)
- ✅ Validation des emails côté serveur
- ⚠️ Considérez ajouter un rate limiting pour éviter le spam
- ⚠️ Considérez ajouter un CAPTCHA (reCAPTCHA) pour plus de sécurité

## Dépannage

### L'email ne s'envoie pas
1. Vérifiez les logs Vercel: Dashboard → Votre projet → Functions
2. Vérifiez que toutes les variables d'environnement sont définies
3. Vérifiez que le mot de passe d'application Gmail est correct
4. Vérifiez que la validation en deux étapes est activée sur Gmail

### Erreur CORS
- L'API est configurée pour accepter toutes les origines
- Si vous voulez restreindre, modifiez `api/contact.js`:
```javascript
res.setHeader('Access-Control-Allow-Origin', 'https://votre-domaine.com');
```

### Timeout
- Les Serverless Functions Vercel ont un timeout de 10s (gratuit) ou 60s (pro)
- L'envoi d'email devrait être rapide (<2s)

## Monitoring

Surveillez vos emails envoyés via:
- Logs Vercel: https://vercel.com/dashboard
- Console Gmail: Emails envoyés
- Considérez utiliser un service comme Sentry pour le monitoring d'erreurs
