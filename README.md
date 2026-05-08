# ManaPro Finance — Démo MVP

ManaPro Finance est une base SaaS pensée pour le marché polynésien : devis, factures, dépenses, relances, trésorerie, exports et assistant IA en XPF.

Important : cette version est un SaaS de gestion. Elle ne se présente pas comme une banque, ne fournit pas d'IBAN, ne détient pas de fonds et n'émet pas de carte.

## Inclus

- Landing page complète
- Dashboard démo
- Modules clients, devis, factures, dépenses, relances, exports
- Assistant IA avec règles anti-hallucination
- Base Supabase SQL avec RLS
- Intégration Stripe prête à connecter
- Design responsive

## Lancer en local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Va sur `http://localhost:3000`.

## Déployer sur Vercel

1. Importer ce dépôt GitHub dans Vercel.
2. Framework : Next.js.
3. Ajouter les variables d'environnement depuis `.env.example`.
4. Déployer.

## Supabase

1. Créer un projet Supabase.
2. Ouvrir SQL Editor.
3. Coller `supabase/schema.sql`.
4. Copier l'URL projet, la clé publique anon et la clé service role dans Vercel.

## OpenAI

Ajouter dans Vercel les variables OpenAI indiquées dans `.env.example`.

L'assistant doit répondre uniquement à partir des données transmises par l'application. S'il manque une donnée, il doit le dire.

## Stripe

Créer 3 produits/prix dans Stripe : Fenua Starter, Mana Pro, Tiare Business. Puis ajouter les identifiants de prix dans Vercel et configurer le webhook vers `/api/stripe/webhook`.
