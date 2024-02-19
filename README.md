## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deployment
Edit .github/workflow/deploy.yml and replace `marduk` with new `appname`
Dont forget to create new app with the same name in [caprover](https://captain.bleff.xyz/#/apps)
Add caprover password to actions secrets
```bash
# /settings/secrets/actions
CAPROVER_PASSWORD=****
```
