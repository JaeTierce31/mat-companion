# MAT Companion

Early React/Vite app foundation. Medication safety content remains blocked until clinical review. No PHI is collected.

## Local development

Requires Node 24. Run `npm ci`, `npm test`, `npm run build`, and `npm run dev`.

## Safety release gate

`src/safety/claim.js` keeps the released claim manifest empty. The app displays a review-pending state. Tests use synthetic approval records only. The clinical source and release conditions are in [MAT-CNS-001](docs/MAT-CNS-001.md); [Linear J3S-34](https://linear.app/j3sovereignty/issue/J3S-34/mat-cns-001-clinical-review-and-app-test-for-methadonecns-depressant) tracks the reviewer decision.
