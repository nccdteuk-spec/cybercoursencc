# www.cybercoursencc.com

Deployable NCC Cyber Course Training Portal built with Next.js, Prisma, and NextAuth.

## Features
- Directorate listing page
- Group HQ routing
- Cadet registration with generated Cadet ID
- Admin dashboard
- Issue tracking
- Role-based authentication scaffold
- Prisma schema and seed

## Quick start
1. Copy `.env.example` to `.env`
2. Run `npm install`
3. Run `npx prisma migrate dev --name init`
4. Run `npm run seed`
5. Run `npm run dev`

## Default seed credentials
- Email: value from `ADMIN_SEED_EMAIL`
- Password: value from `ADMIN_SEED_PASSWORD`

## Suggested deployment
- Frontend/API: Vercel
- Database: PostgreSQL or PlanetScale / Neon
- Email: SMTP, Resend, or SendGrid
- Domain: www.cybercoursencc.com
