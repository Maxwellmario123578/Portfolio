# Configuration des Variables d'Environnement sur Vercel

## Étapes pour configurer les variables d'environnement:

### 1. Allez sur votre Dashboard Vercel
https://vercel.com/dashboard

### 2. Sélectionnez votre projet
Cliquez sur "portfoliomathurin" (ou le nom de votre projet)

### 3. Allez dans Settings
Cliquez sur l'onglet "Settings" en haut

### 4. Cliquez sur "Environment Variables" dans le menu de gauche

### 5. Ajoutez TOUTES ces variables une par une:

**Variable 1:**
- Key: `SMTP_HOST`
- Value: `smtp.gmail.com`
- Environment: Cochez "Production", "Preview", "Development"

**Variable 2:**
- Key: `SMTP_PORT`
- Value: `587`
- Environment: Cochez "Production", "Preview", "Development"

**Variable 3:**
- Key: `SMTP_SECURE`
- Value: `false`
- Environment: Cochez "Production", "Preview", "Development"

**Variable 4:**
- Key: `SMTP_USER`
- Value: `mmathurin529@gmail.com`
- Environment: Cochez "Production", "Preview", "Development"

**Variable 5:**
- Key: `SMTP_PASS`
- Value: `yyqwnftbtiodxfhh`
- Environment: Cochez "Production", "Preview", "Development"

**Variable 6:**
- Key: `SMTP_FROM`
- Value: `mmathurin529@gmail.com`
- Environment: Cochez "Production", "Preview", "Development"

**Variable 7:**
- Key: `EMAIL_TO`
- Value: `mmathurin529@gmail.com`
- Environment: Cochez "Production", "Preview", "Development"

### 6. Redéployez votre application

Après avoir ajouté toutes les variables:
- Allez dans l'onglet "Deployments"
- Cliquez sur les 3 points (...) du dernier déploiement
- Cliquez sur "Redeploy"
- Cochez "Use existing Build Cache"
- Cliquez sur "Redeploy"

### 7. Testez

Une fois le redéploiement terminé, testez le formulaire de contact sur votre site!

## Vérification

Pour vérifier que les variables sont bien configurées:
1. Allez dans Settings → Environment Variables
2. Vous devriez voir 7 variables listées
3. Chacune devrait avoir une coche verte pour "Production"

## Dépannage

Si ça ne fonctionne toujours pas:
1. Vérifiez les logs Vercel: Dashboard → Functions → Cliquez sur `/api/contact`
2. Regardez les erreurs dans les logs
3. Vérifiez que le mot de passe Gmail est correct (pas d'espaces)
4. Vérifiez que la validation en 2 étapes est activée sur Gmail
