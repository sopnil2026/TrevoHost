# TrevoHost

Responsive TrevoHost landing page based on the supplied visual reference.

## Files
- `index.html` — page structure and content
- `style.css` — responsive dark/neon-green styling
- `script.js` — mobile navigation, pricing selection and account information modal
- `.github/workflows/deploy-pages.yml` — automatic GitHub Pages deployment

## Publish with GitHub Pages
1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. The workflow deploys automatically after a push to `main`. You can also open the **Actions** tab to check the deployment status.
4. Once the workflow succeeds, open: https://sopnil2026.github.io/TrevoHost/

## Important implementation note
This repository currently contains a static frontend only. The dashboard cards and activity log are illustrative preview content. Login/registration, user accounts, bot process execution, persistent file management, real-time log streaming, wallet balances, payments, domain management and uptime monitoring require a secure backend, database, hosting infrastructure and appropriate integrations. The account and plan buttons explain this state instead of accepting credentials or claiming to start services.
