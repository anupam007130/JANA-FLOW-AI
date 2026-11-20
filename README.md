# Jana Flow AI

**Turn Ideas Into Cinema.**

A Next.js starter interface based on the Jana Flow AI PRD.

## Included
- Premium responsive marketing landing page
- Studio/dashboard shell
- Video generation and image generation screens
- Text-to-video / image-to-video mode selector
- Project cards, quick actions, history/assets/credits placeholders
- Dark cinematic design system

## Run locally
1. Install Node.js 20 or later.
2. Extract this project.
3. In this folder run:
   ```bash
   npm install
   npm run dev
   ```
4. Open http://localhost:3000

## Important implementation status
This is a **frontend starter/prototype**, not a production-connected SaaS yet.
The generation button deliberately does not call Runway and displays a setup notice.
Authentication, Firestore persistence, Storage uploads, Cloud Tasks workers,
credit reservations, Razorpay verification, and protected admin APIs still
need backend implementation and configuration.

## Production security
- Never put a Runway key in client-side code, `.env` files committed to Git,
  browser storage, or public Firestore documents.
- Rotate any API key previously pasted into a chat or shared message.
- Store the replacement secret in Google Cloud Secret Manager.
- Implement generation through a server-side AI Gateway only.
- Verify current Runway API models, endpoints, headers, and request schemas
  against official documentation before shipping.

## Next milestones
1. Firebase Authentication + role-based server authorization.
2. Firestore project/generation records and Storage upload pipeline.
3. Cloud Run AI Gateway + Runway adapter + asynchronous task worker.
4. Idempotent credit reserve/settle/refund ledger.
5. Razorpay order creation, signature/webhook verification.
6. Full admin routes and audit logging.
7. Deployment, monitoring, security rules, and end-to-end tests.
