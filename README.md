# 2026 Marblehead Town Election Voter Guide

A static, GitHub Pages–friendly voter guide for the **Marblehead, MA Annual Town Election on Tuesday, June 9, 2026**. Lists every candidate appearing on the ballot, with contested races first and questionnaire responses (where returned) below each candidate.

## Structure

```
.
├── index.html                    Main page — all races, ballot questions, voting info
├── assets/
│   ├── css/styles.css            Newspaper-style editorial styling
│   ├── js/main.js                Light enhancements (scroll-spy, expand-all)
│   ├── images/candidates/        Headshots
│   └── docs/                     Sample ballot + early voting hours (PDFs)
├── questionnaire_data.json       Raw extracted questionnaire data
└── README.md                     This file
```

The page works **fully without JavaScript** — Q&A panels use native `<details>` / `<summary>`, the nav uses anchor links, and there are no external runtime dependencies.

## Local preview

Any static server will do. From the project root:

```sh
python -m http.server 8000
# then open http://localhost:8000
```

## Publishing to GitHub Pages

1. Create a new GitHub repo (e.g. `marblehead-voter-guide-2026`).
2. Push the contents of this folder to the `main` branch:
   ```sh
   git init
   git add .
   git commit -m "2026 Marblehead voter guide"
   git branch -M main
   git remote add origin https://github.com/<you>/marblehead-voter-guide-2026.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**, then **Save**.
5. After a minute or two the guide will be live at `https://<you>.github.io/marblehead-voter-guide-2026/`.

### Custom domain (optional)

If you want it on a domain like `voters.marbleheadindependent.com`, add a `CNAME` file at the repo root containing just that hostname, then add the matching CNAME DNS record at your registrar pointing to `<you>.github.io`. Re-save the Pages settings.

## Updating the guide

- **Edit candidate copy:** open `index.html` and find the candidate's `<article class="candidate">` block.
- **Add a new questionnaire response:** copy the structure of an existing `<details class="qa">` block.
- **Swap a headshot:** drop a new image into `assets/images/candidates/` and update the `<img src="...">` for that candidate.
- **Add a contested race:** copy a `<article class="race">` block inside `#contested`.
- **Regenerate the JSON from new spreadsheets:** rerun the extraction loop in `questionnaire_data.json`'s sibling script (the Python snippet that called `openpyxl`).

## Data sources

- Candidate roster and ballot order: official sample ballot, Marblehead Town Clerk (`assets/docs/sample-ballot.pdf`).
- Early voting hours: Town Clerk's notice (`assets/docs/early-voting-hours.pdf`).
- Candidate questionnaires: *The Marblehead Independent* candidate questionnaire (responses in `questionnaire_data.json`).

## License / disclaimer

Published for informational purposes. Not an endorsement of any candidate or ballot question. Questionnaire responses are reproduced as candidates submitted them; minor typographical normalization was applied.
