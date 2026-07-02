# Portfolio TODO — KaviruN.github.io
> Derived from the cybersecurity portfolio checklist gap analysis.
> Status key: `[ ]` todo · `[/]` in progress · `[x]` done

---


---

## 🟡 MEDIUM — Do These Next

- [ ] **Make 2–3 room write-ups public**
  - Pick your 2–3 best private room write-ups from your blog
  - Publish them publicly on your blog platform
  - Link directly to each one from the portfolio (featured write-ups section or CTF cards)

- [ ] **Add role labels to project and cert cards**
  - Add a `targetRole` field to the `Project` type in [`types.ts`](file:///home/darkduchiha/KaviruN.github.io/src/types.ts)
  - Populate it in [`data.ts`](file:///home/darkduchiha/KaviruN.github.io/src/data.ts) for each project (e.g. `"Penetration Tester"`, `"Bug Bounty Hunter"`)
  - Display it as a tag on project cards in [`ProjectsSection.tsx`](file:///home/darkduchiha/KaviruN.github.io/src/components/ProjectsSection.tsx)
  - Do the same for cert cards in [`ResumeSection.tsx`](file:///home/darkduchiha/KaviruN.github.io/src/components/ResumeSection.tsx)

- [ ] **Add 1–2 PAO mini case studies to CTF cards**
  - Expand the CTF achievement cards in [`HomeSection.tsx`](file:///home/darkduchiha/KaviruN.github.io/src/components/HomeSection.tsx#L218-L268)
  - Each card should have: Problem / Action / Outcome (2–3 sentences total)
  - Example: _"Problem: BOLA flaw in competition API. Action: Enumerated user IDs with a Python script. Outcome: Extracted admin data, reported finding, awarded Best Performing cert."_

- [ ] **Add a learning path progress display**
  - Add a small progress section to HomeSection or ResumeSection
  - Show rooms completed per path: Pre-Security, Jr Pen Tester, Web App Pentesting, Web App Red Teaming
  - Can be a simple progress bar or stat grid — no API required, just accurate static numbers

---

## 🟢 NICE-TO-HAVE — When You Have Time

- [ ] **Embed TryHackMe badge widget**
  - Replace plain-text "top 2% globally" in CTF card with the actual THM embeddable badge image
  - THM badge URL: `https://tryhackme-badges.s3.amazonaws.com/KaviruN.png`
  - Add `<img>` tag with a link to your THM profile

- [ ] **Link CTF competition results**
  - Add CTFtime.org profile link if you have one
  - Or add a GitHub repo of competition write-ups with results

- [ ] **Add a "last updated" timestamp**
  - Small text in the footer or resume section (e.g. _"Last updated: June 2026"_)
  - Signals the portfolio is actively maintained

- [ ] **Add a blog feed or latest post preview**
  - Surface 2–3 latest blog post titles + links on the Home page
  - If your blog has an RSS feed, this can be fetched dynamically via the existing API setup

---

## ✅ Already Done — No Action Needed

- [x] TryHackMe profile linked (CTF section)
- [x] 6 TryHackMe certificates with PDF viewer
- [x] GitHub + LinkedIn linked in hero
- [x] CTF competition experience in `EXPERIENCE_DATA`
- [x] BIT Cybersecurity degree in `EDUCATION_DATA`
- [x] Tools listed (Burp Suite, Nmap, Metasploit)
- [x] First-person hero bio exists (short — needs expansion above)
- [x] 30+ blog posts documenting THM challenges _(just needs linking)_
- [x] CTF scripts exist _(just needs a `ctf-tooling` GitHub repo + data.ts entry)_
- [x] 1–2 cybersecurity projects exist _(just needs data.ts entries)_
