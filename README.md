Wedding Website — Save the Date

A lightweight save-the-date site with an RSVP / info-collection form. Built to try out a few design directions and to be easy for non-technical people to host and manage, using Netlify for hosting and form handling.

What it does

Save-the-date landing page — exploring a few design directions for layout, type, and colour.
Info-collection form — guests submit details (contact, etc.), handled by Netlify Forms.
Serverless by design — no backend to maintain; Netlify captures submissions and hosts the static site.
Bot protection — a honeypot field plus a hidden field, so automated spam submissions are filtered out before they reach the inbox.

Tech stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Hosting	Netlify (static site + continuous deploy)
Forms	Netlify Forms
Anti-spam	Honeypot field + hidden field
How the bot protection works

The form uses a honeypot: a field that's present in the HTML but hidden from real users with CSS. Humans never see it, so they leave it blank — bots, which fill in every field they find, give themselves away by populating it. Netlify then silently discards any submission where the honeypot is filled.

Why I built it

A real project with a real deadline, used to try out design ideas end to end: layout and visual direction, a working form, serverless hosting, and a small dose of practical security to keep spam out. Kept deliberately lightweight so the people using it can host and manage it without any technical overhead.
