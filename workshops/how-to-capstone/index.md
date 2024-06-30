<!-- _class: intro-slide nemo -->

# How to Capstone

---

<!-- _class: big-headline granite -->

Tagesablauf

---

<!-- _class: small -->

## Tagesablauf während der Capstone-Phase

- **09:00 Uhr** Students Meeting (ohne Coaches)
  - Anwesenheitsfoto
  - Zeit für euch, um euch auszutauschen
- **09:30 Uhr** Daily Standup (mit Coaches)
  - Was habe ich gestern gemacht? / Woran werde ich heute arbeiten? / Habe ich Blocker?
  - Ähnliche "Baustellen"? Findet euch gerne in Gruppen zusammen!
- **17:00 Uhr** Checkout
  - Es besteht **Anwesenheitspflicht** in Zoom, von 9:00 Uhr bis 17:00 Uhr

---

<!-- _class: big-headline granite -->

Wochenablauf

---

<!-- _class: small -->

## Wochenablauf während der Capstone-Phase

- **Keine verpflichtenden Sessions!** Evtl. kleine, **freiwillige Workshops** zu Themen, die für eure Capstone-Projekte interessant sind.
- **[!!hier Wochentag eintragen]:** Sprint Planning / User Stories ausformulieren (1 Woche = 1 Sprint)
- **[!!hier Wochentag, Uhrzeit eintragen]:** Public Sprint Review
- **Tipp:** Macht abends und am Wochenende **Pausen**

---

<!-- _class: big-headline granite -->

Workflow

---

<!-- _class: small -->

## Workflow während der Capstone-Phase

- User Stories, Pull Requests, Code Reviews, Quality Assurance
- **Agiles Arbeiten**: Kanban Board und User Stories sind nicht nur Pflicht, sondern Helfen.
- **Plant genügend Zeit für Organisatorisches ein!**

---

<!-- _class: small -->

## Sprint Vorbereitung & User Story **#user-stories**

- User Story schreiben und in die Spalte **Backlog** des Boards ablegen.
- User Story fertig ausformuliert? Link zur Story in **#user-stories**
- Wenn ihr eine User Story reviewed, reagiert bitte wie folgt auf den Post:
  - in review: 👀
  - changes requested: ✔️
  - approved: ✅
  - Coaches Veto: ☝️ _nur Coaches_
- Bei Änderungen, die User Story erneut in **#user-stories** posten.
- Approved?! Dann in die Spalte **Sprint Backlog** des Boards ablegen.
- Reviews werden **immer** nach der Reihenfolge im Channel bearbeitet.

---

<!-- _class: small -->

## User Story bearbeiten

- Arbeitet ihr an der User Story? Dann **In Progress** des Boards ablegen.
- Auf den `main Branch` wechseln und `git pull` ausführen.
- Neuen Branch für das neue Feature erstellen, z.B. `feature/navigation`.
- Coden und möglichst viele kleine Commits machen.
- `Tasks` aus der User Story abarbeiten.
- `Acceptance Criteria` aus der User Story prüfen.

---

<!-- _class: small -->

## Pull Requests & Code Reviews **#code-reviews**

- Pull Request (kurz: **PR**) erstellen.
- Achtet darauf, dass der PR einen **sinnvollen Titel** hat.
  - Verlinkt gerne das dazugehörige **Issue aus dem Board**.
- **Keine** Collaborators/Assignees/Reviewers hinzufügen oder direkt Personen anschreiben.
- Postet den Link zu dem PR in den Slack Channel **#code-reviews**.
- User Story im Board in die Spalte **Code Review** ablegen.

---

<!-- _class: small -->

## Pull Requests & Code Reviews **#code-reviews**

- Wenn ihr einen PR reviewed, reagiert bitte wie folgt auf den Post:
  - in review: 👀
  - changes requested: ✔️
  - approved: ✅
  - Coaches Veto: ☝️ _nur Coaches_
- Wenn ihr Änderungen vornehmen musstest, postet das **Update des PR** erneut in **#code-reviews**
- **Der Merge darf erst NACH der Quality Assurance** ausgeführt werden! Ausnahme: bei einem PR, bei dem eine Quality Assurance nicht sinnvoll ist, z.B. Code Refactoring.
- Reviews werden **immer** nach der Reihenfolge im Channel bearbeitet.

---

<!-- _class: small -->

## Quality Assurance **#quality-assurance**

- Nach der Code-Review postet ihr den Link zur App (Vercel) in den Slack Channel **#quality-assurance**
- Beschreibt worauf man ggf. achten soll bzw. was neu ist.
- User Story im Board in die Spalte **Quality Assurance / QA** ablegen.
- Wenn ihr einen QA reviewed reagiert bitte wie folgt auf den Post:
  - in review: 👀
  - changes requested: ✔️
  - approved: ✅
  - Coaches Veto: ☝️ _nur Coaches_
- Feedback diesmal in dem Thread zu dem jeweiligen Post schreiben.
- Reviews werden **immer** nach der Reihenfolge im Channel bearbeitet.

---

<!-- _class: small -->

## Quality Assurance **#quality-assurance**

- Bei Änderungen geht der Pull Request **erneut** durch die "Stationen" **#code-reviews** und **#quality-assurance**
- **Der Merge darf erst NACH der Quality Assurance** ausgeführt werden! Ausnahme: bei einem Pull Request, bei dem eine Quality Assurance nicht sinnvoll ist, z.B. Code Refactoring.
- Approved?! Dann in die Spalte **Done** des Boards ablegen.

---

<!-- _class: small -->

## Nach dem Quality Assurance Approval

- Wenn die Quality Assurance Approved ist, kann der Merge des Pull Request durchgeführt werden.
- Im Anschluss mit der nächsten User Story, dem nächsten Feature beginnen.

---

<!-- _class: small -->

## Fragen & **[GitHub Discussions Board](https://github.com/orgs/neuefische/discussions)**

- Lest die Dokumentationen bzw. googelt.
- Fragt bei anderen Studierenden im Kurs nach.
- Im **[GitHub Discussions Board](https://github.com/orgs/neuefische/discussions)** nach ähnlichen Fragen suchen.
- Im **[GitHub Discussions Board](https://github.com/orgs/neuefische/discussions)** eine Frage stellen:
  - Formuliert eure Frage aus und orientiert euch dabei an folgendem Handout: **[How to ask good questions?](https://github.com/neuefische/questions/wiki/How-to-ask-good-questions)**
    Immer enthalten sein sollte:
  - **Link** zum/r betroffenen Branch / Datei / Zeile.
  - **Erklärung**, was ihr bereits versucht habt.
  - **Fehlermeldung** (bitte als Text, kein Screenshot!)

---

<!-- _class: big-headline granite -->

Capstone Tipps

---

<!-- _class: small -->

## Capstone Project Tipps

- **Code Quality** ist wichtiger als die Anzahl der Features.
- **KISS** _Keep It Simple Stupid_ z.B. keine unnötigen Technologien einbauen.
- **CRUD operations** orientiert euch an:
  - **create** hinzufügen
  - **read** anzeigen
  - **update** editieren
  - **delete** löschen

---

<!-- _class: small -->

## Workflow Tipps

- **Kill your Darlings:** verabschiedet euch vom Ideal.
- **Dog Days are okay:** akzeptiert Tage, an denen es nicht glatt läuft.
- **Expectation Managment:** Erwartungen justieren und prüfen.
- **Eigenverantwortung:** selbstständig nach Feedback und Hilfe fragen.
- **Macht Reviews:** haben einen super Lerneffekt.
- **Teamwork makes the dream work:** helft euch gegenseitig und achtet immer auf die Slack Channel!

---

<!-- _class: intro-slide nemo -->

# Viel Spaß!
