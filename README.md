# EthioMarket – Hybrid E-Commerce + Purchasing Agent

Production-ready foundation for a hybrid internal store and external purchasing agent service in Ethiopia.

## Stack
- Next.js (App Router) + TypeScript strict
- Tailwind CSS
- PostgreSQL + Prisma
- NextAuth (credentials + email magic link)
- React Hook Form + Zod
- Zustand (cart + wishlist) persisted to localStorage
- Vitest (unit tests) + Playwright (E2E)
- ESLint + Prettier

## Setup

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment variables
Create a `.env` file:
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/ethio_market"

NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"

EMAIL_SERVER="smtp://user:pass@smtp.example.com:587"
EMAIL_FROM="no-reply@ethiomarket.et"

TELEBIRR_APP_ID=""
TELEBIRR_APP_KEY=""
TELEBIRR_SHORT_CODE=""
TELEBIRR_PUBLIC_KEY=""
TELEBIRR_NOTIFY_URL="http://localhost:3000/api/telebirr/notify"
TELEBIRR_RETURN_URL="http://localhost:3000/payment-status"
TELEBIRR_H5_URL="https://telebirr-h5.example.com/pay"
```

### 3) Run migrations & generate Prisma client
```bash
npm run prisma:generate
npm run prisma:migrate
```

### 4) Run the dev server
```bash
npm run dev
```

## Tests
```bash
npm run test:unit
npm run test:e2e
```

## Deployment
- Deploy to Vercel.
- Provision a managed Postgres instance and set `DATABASE_URL`.
- Run Prisma migrations on deploy.

## Cron for FX refresh
Schedule a cron job (e.g., daily) to fetch FX rate snapshots and persist them in the `ExchangeRate` table. Manual overrides should be recorded in the same table.

## Telebirr Configuration
- Use Telebirr H5 flow with server-verified notifications.
- Never mark payments as paid from client-side redirects.
- `notifyUrl` must be server-to-server and signature verified.

## Critical Disclaimers (Hard Rules)
- External items are not guaranteed.
- Delivery estimates only—never guaranteed.
- Customs not included unless explicitly marked as duties included.
- Refunds equal the original ETB paid, no FX adjustments.
- No scraping. Customer provides product info manually.
