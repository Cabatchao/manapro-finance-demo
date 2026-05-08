# Déploiement ManaPro Finance

## 1. Vercel

1. Va dans Vercel.
2. Clique sur New Project.
3. Importe le repository GitHub `Cabatchao/manapro-finance-demo`.
4. Framework : Next.js.
5. Ajoute les variables depuis `.env.example`.
6. Clique sur Deploy.

## 2. Supabase

1. Crée un projet Supabase.
2. Ouvre SQL Editor.
3. Colle le contenu de `supabase/schema.sql`.
4. Récupère l'URL projet et la clé publique anon.
5. Ajoute ces valeurs dans Vercel.

## 3. OpenAI

Ajoute ta clé API OpenAI dans Vercel sous le nom `OPENAI_API_KEY`.

Modèle recommandé pour la démo : `gpt-4.1-mini`.

## 4. Stripe

1. Crée 3 abonnements : Fenua Starter, Mana Pro, Tiare Business.
2. Copie les Price IDs dans Vercel.
3. Ajoute la clé secrète Stripe.
4. Configure le webhook vers `/api/stripe/webhook`.

## 5. Pages à tester

- `/` : landing page
- `/demo` : dashboard
- `/demo/clients` : clients
- `/demo/devis` : devis
- `/demo/factures` : factures
- `/demo/depenses` : dépenses
- `/demo/assistant` : assistant IA
- `/demo/exports` : exports

## Important

Cette version est une démo SaaS de gestion. Elle ne propose pas de compte bancaire, pas d'IBAN, pas de carte et pas de détention de fonds.
