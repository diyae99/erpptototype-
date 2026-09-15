# Dar Al Binaa — Prototype de gestion commerciale

Prototype interactif en français pour présenter les écrans et workflows d'une solution de gestion commerciale et de stock multi-dépôts. Toutes les données sont fictives et locales.

## Démarrage

Prérequis : Node.js 22.13 ou version ultérieure.

```bash
npm install
npm run dev
```

Ouvrir ensuite [http://localhost:5173](http://localhost:5173).

Pour vérifier la compilation de production :

```bash
npm run build
```

## Modules inclus

- Tableau de bord et indicateurs consolidés
- Ventes avec onglets documentaires, création directe de devis, commandes, bons de livraison, factures, retours et avoirs
- Achats avec commandes fournisseur, réceptions, factures d'achat, retours et règlements
- Formulaires interactifs avec calcul automatique HT/TVA/TTC, paiements, reliquats et règles de stock
- Actions simulées par document : consultation, modification des brouillons, impression, PDF, duplication, conversion et annulation
- Règlements clients intégrés aux Ventes et règlements fournisseurs intégrés aux Achats
- Suivi distinct des chèques reçus et émis, multichèque, échéances, emplacements et historique des déplacements
- Fiches clients et fournisseurs enrichies avec leurs règlements et effets associés
- Produits, stocks et 10 dépôts
- Clients, fournisseurs et vendeurs
- Chèques, traites et échéances
- Rapports, rôles, permissions et journal d'activité

## Limites du prototype

Les validations, conversions de documents, exports, paiements, notifications, transferts et changements de statut sont simulés dans l'interface. Il n'y a ni authentification réelle, ni base de données, ni connexion à Sage, ni génération de documents comptables. Ce prototype ne doit pas être utilisé en production.

Une version de production devra ajouter une API sécurisée, une base transactionnelle, un modèle de permissions côté serveur, l'audit immuable, le stockage des pièces, la numérotation légale, les sauvegardes, les tests, le chiffrement, la supervision et les intégrations comptables.
