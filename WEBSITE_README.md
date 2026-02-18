# TrainUp Your Brain – Website Landing Page

> **Hinweis:** Diese README enthält einen vollständigen Prompt zur Erstellung einer Landing Page für die TrainUp Your Brain iOS-App. Kopiere diesen Inhalt in ein neues Webprojekt und nutze ihn als Grundlage für die Entwicklung.

---

## Projektübersicht

Erstelle eine moderne, responsive Landing Page für die iOS-App **"TrainUp Your Brain"** – eine Gehirntraining- und Achtsamkeits-App. Die Website soll die App professionell präsentieren, ihre Funktionen erklären und Besucher zum Download im App Store motivieren.

---

## Design-System (angelehnt an die App)

### Farbpalette

```css
:root {
  /* Primärfarben (AppTheme) */
  --primary-blue: #0A84FF;
  --primary-cyan: #00D4FF;
  --dark-blue: #0A1628;
  --primary-gradient: linear-gradient(135deg, #0A84FF 0%, #00D4FF 100%);

  /* Kategoriefarben */
  --cognitive-blue: #0A84FF;
  --physical-orange: #FF9500;
  --mindfulness-green: #34C759;

  /* Akzentfarben */
  --accent-orange: #FF9500;    /* Streaks */
  --accent-green: #34C759;     /* Erfolge */
  --accent-yellow: #FFCC00;    /* Hervorhebungen / Badges */
  /* XP/Level-System in der App: primary-blue (#0A84FF) */

  /* Neutrale Farben (Light Mode) */
  --background-light: #F2F2F7;
  --card-light: #FFFFFF;
  --text-primary-light: #000000;
  
  /* Neutrale Farben (Dark Mode) */
  --background-dark: #1C1C1E;
  --card-dark: #2C2C2E;
  --text-primary-dark: #FFFFFF;
  
  /* Gemeinsam */
  --text-secondary: #8E8E93;

  /* Glasmorphism */
  --glass-background: rgba(255, 255, 255, 0.7);
  --glass-background-dark: rgba(44, 44, 46, 0.7);
  --glass-border: rgba(255, 255, 255, 0.3);
  --glass-shadow: rgba(0, 0, 0, 0.1);
}
```

### Typografie

```css
:root {
  /* Schriftart: SF Pro Display / SF Pro Rounded (Apple) oder Fallback */
  --font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Rounded', 'Segoe UI', Roboto, sans-serif;

  /* Hierarchie */
  --heading-xl: 3.5rem;    /* Hero Titel */
  --heading-lg: 2.5rem;    /* Section Titel */
  --heading-md: 1.75rem;   /* Card Titel */
  --heading-sm: 1.25rem;   /* Subtitel */
  --body-lg: 1.125rem;     /* Lead Text */
  --body-md: 1rem;         /* Fließtext */
  --body-sm: 0.875rem;     /* Captions */
}
```

### Design-Elemente

#### 1. Glasmorphism-Karten
```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Dark Mode */
.dark .glass-card {
  background: rgba(44, 44, 46, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### 2. Gradient-Buttons
```css
.btn-primary {
  background: linear-gradient(135deg, #0A84FF 0%, #00D4FF 100%);
  border-radius: 12px;
  padding: 16px 32px;
  color: white;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.35);
}
```

#### 3. Animationen
- Sanfte Hover-Effekte (scale, shadow)
- Scroll-triggered Animationen (fade-in, slide-up)
- Pulsierendes Logo/Icon für Aufmerksamkeit
- Floating-Elemente im Hero-Bereich

#### 4. Dark Mode Support
- Vollständige Dark Mode Unterstützung
- Angepasste Schatten (heller im Dark Mode)
- System-Präferenz respektieren

#### 5. App-Theme & Erscheinungsbild
- Die App unterstützt **Light / Dark / System** (Einstellungen → Erscheinungsbild).
- Die Website soll dieselbe Farblogik wie das AppTheme nutzen und die System-Präferenz für Dark Mode respektieren.

---

## Seitenstruktur

### 1. Hero Section

**Inhalte:**
- App-Logo/Icon (großes, stilisiertes Gehirn-Icon mit Gradient)
- Headline: "TrainUp Your Brain"
- Tagline: "Dein persönliches Gehirn- und Achtsamkeitstraining"
- Subheadline: "Über 14 wissenschaftlich fundierte Übungen für geistige Fitness, körperliche Koordination und innere Ruhe – in nur wenigen Minuten am Tag."
- CTA-Button: "Im App Store laden" (mit Apple-Logo)
- App Store Badge
- Hero-Bild: iPhone Mockup mit App-Screenshot (Dashboard oder Training-Ansicht)

**Design:**
- Volle Bildschirmhöhe (100vh)
- Subtiler animierter Gradient-Hintergrund (Blau → Cyan, siehe Primärfarben)
- Floating-Elemente (kleine Icons, die sanft schweben)

---

### 2. Features Overview Section

**Headline:** "Alles, was du für dein mentales Wohlbefinden brauchst"

**3 Feature-Kategorien als große Karten:**

#### Karte 1: Kognitives Training (Blau – #0A84FF)
| Element | Inhalt |
|---------|--------|
| Icon | 🧠 oder `brain.head.profile` |
| Titel | Kognitive Spiele |
| Beschreibung | 5 wissenschaftlich basierte Spiele für Gedächtnis, Reaktion und Konzentration |

**Features-Liste:**
- ✓ Stroop-Test – Trainiere Aufmerksamkeit
- ✓ N-Back – Stärke dein Arbeitsgedächtnis
- ✓ Sequenz-Gedächtnis – Merke dir Muster
- ✓ Richtungswechsel – Kognitive Flexibilität
- ✓ Schnell-Tippen – Geschwindigkeit & Präzision

#### Karte 2: Körper & Koordination (Orange – #FF9500)
| Element | Inhalt |
|---------|--------|
| Icon | 🏃 oder `figure.walk` |
| Titel | Körperliche Übungen |
| Beschreibung | Verbinde Geist und Körper für ganzheitliches Training |

**Features-Liste:**
- ✓ Brain-Body-Combo – Geist & Körper synchronisieren
- ✓ Balance-Challenge – Gleichgewicht verbessern

#### Karte 3: Achtsamkeit (Grün – #34C759)
| Element | Inhalt |
|---------|--------|
| Icon | 🧘 oder `leaf.fill` |
| Titel | Achtsamkeit & Entspannung |
| Beschreibung | Finde innere Ruhe und reduziere Stress |

**Features-Liste:**
- ✓ 4-7-8 Atemübung – Bewährte Atemtechnik
- ✓ Affirmations-Boost – Selbstbewusstsein aufbauen

---

### 3. Gamification Section

**Headline:** "Motivation, die dich am Ball hält"

**4 Feature-Highlights (Grid):**

| Icon | Feature | Beschreibung |
|------|---------|--------------|
| ⚡ `bolt.fill` (blau) | XP & Level-System | Sammle Erfahrungspunkte und steige Level für Level auf (AppTheme: primary-blue) |
| 🔥 `flame.fill` (orange) | Tägliche Streaks | Halte deine Serie und werde zur Gewohnheit |
| 🏆 `trophy.fill` (gold) | 80+ Achievements | Schalte Erfolge frei und feiere deine Meilensteine |
| 🎯 `target` (blau) | Intelligente Ziele | Setze dir tägliche, wöchentliche und monatliche Ziele |

---

### 4. FocusFlow Section

**Headline:** "FocusFlow – Dein Modus für maximale Konzentration"

**Beschreibung:** 
> Aktiviere den FocusFlow-Modus und trainiere ohne Ablenkung. Mit entspannenden Soundscapes und einem minimalistischen Interface bleibst du voll bei der Sache.

**Features:**
- 🎵 Entspannende Hintergrundmusik
- 🌲 Naturklänge: Waldgeräusche, Meeresrauschen, Regen
- 🎹 Ambient Piano für tiefe Konzentration
- 🔕 Ablenkungsfreies Training

**Design:**
- Dunkler Hintergrund mit grünem Akzent (#34C759)
- Waveform-Animation oder Audio-Visualisierung
- iPhone Mockup mit FocusFlow-Screen

---

### 5. App Screenshots Gallery

**Headline:** "Entdecke TrainUp Your Brain"

**Carousel/Gallery mit iPhone Mockups (6 Screenshots):**

1. **Dashboard** – Level-Fortschritt, Streak-Anzeige, Quick Stats
2. **Training-Übersicht** – Spielkarten in Grid-Ansicht mit Kategorien
3. **Aktives Spiel** – z.B. Stroop-Test während des Spielens
4. **Ziele-Ansicht** – Kalender mit täglichen/wöchentlichen Zielen
5. **Profil** – Statistiken und Achievements
6. **FocusFlow-Modus** – Minimalistisches Interface mit Soundscape-Auswahl

**Design:**
- Horizontales Scrolling auf Mobile
- 3D-Perspektive auf Desktop (leichte Rotation)
- Glasmorphism-Rahmen um Screenshots
- Pagination-Dots

---

### 6. Benefits Section

**Headline:** "Warum TrainUp Your Brain?"

| Icon | Benefit | Beschreibung |
|------|---------|--------------|
| ⚙️ `circle.grid.3x3.fill` | Ganzheitlicher Ansatz | Vereint kognitives Training, körperliche Übungen und Achtsamkeit in einer App – perfekt aufeinander abgestimmt. |
| ⏱️ `clock.fill` | Passt in jeden Alltag | Ob 2 Minuten oder 20 Minuten – jede Übung ist so gestaltet, dass sie in deinen Tag passt. |
| 🔒 `lock.shield.fill` | Privatsphäre first | Alle Daten bleiben auf deinem Gerät. Keine Cloud, keine Registrierung, volle Kontrolle. |

---

### 7. Testimonials/Social Proof (optional)

**Headline:** "Was Nutzer sagen"

**3-4 Testimonial-Karten:**
```
"TrainUp Your Brain hat mir geholfen, meine Konzentration im Alltag deutlich zu verbessern. 
Die kurzen Übungen passen perfekt in meine Mittagspause."
– Anna M., ⭐⭐⭐⭐⭐

"Endlich eine App, die Gehirntraining und Entspannung kombiniert. 
Der FocusFlow-Modus ist mein tägliches Ritual geworden."
– Thomas K., ⭐⭐⭐⭐⭐

"Die Gamification motiviert mich jeden Tag aufs Neue. 
Mein aktueller Streak: 47 Tage!"
– Sarah L., ⭐⭐⭐⭐⭐
```

**App Store Rating Badge:** ⭐ 4.8 (basierend auf X Bewertungen)

---

### 8. Download CTA Section

**Headline:** "Starte jetzt dein Training"

**Subheadline:** 
> Erlebe, wie wenige Minuten am Tag dein Wohlbefinden und deine geistige Fitness nachhaltig verbessern.

**CTA-Elemente:**
- Großer "Im App Store laden" Button mit Apple-Logo
- Offizielles App Store Badge
- QR-Code zum direkten Download (optional)

**Design:**
- Gradient-Hintergrund (Blau → Cyan, z. B. `linear-gradient(135deg, #0A84FF 0%, #00D4FF 100%)`)
- Zentrierter Inhalt
- iPhone Mockup floating rechts/unten

---

### 9. Footer

**Inhalte:**
```
[App-Logo]

Navigation:
Datenschutz | Impressum | Support | Kontakt

Social Media: (optional)
[Twitter] [Instagram] [LinkedIn]

© 2026 TrainUp Your Brain. Alle Rechte vorbehalten.
Made with ❤️ in Germany
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 320px)  { /* Mobile */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

---

## Technische Anforderungen

### Empfohlener Tech-Stack

| Kategorie | Empfehlung |
|-----------|------------|
| Framework | Next.js 14+ (App Router) oder Astro |
| Styling | Tailwind CSS |
| Animationen | Framer Motion |
| Icons | Lucide Icons oder Heroicons |
| Fonts | Inter (Google Fonts) oder System Font Stack |
| Deployment | Vercel oder Netlify |

### Performance-Ziele
- ✓ Lighthouse Score: 90+
- ✓ Lazy Loading für Bilder
- ✓ Optimierte Bilder (WebP, AVIF)
- ✓ Minimale JavaScript-Bundle-Größe
- ✓ Core Web Vitals im grünen Bereich

### SEO-Anforderungen

```html
<title>TrainUp Your Brain – Gehirntraining & Achtsamkeits-App für iOS</title>

<meta name="description" content="Trainiere dein Gehirn mit über 14 wissenschaftlich fundierten Übungen. Verbessere Gedächtnis, Konzentration und finde innere Ruhe. Jetzt kostenlos im App Store.">

<meta property="og:title" content="TrainUp Your Brain – Gehirntraining & Achtsamkeit">
<meta property="og:description" content="Über 14 wissenschaftlich fundierte Übungen für geistige Fitness, körperliche Koordination und innere Ruhe.">
<meta property="og:image" content="/og-image.png">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
```

---

## Benötigte Assets

### Grafiken & Bilder
- [ ] App Icon (PNG, verschiedene Größen: 64px, 128px, 256px, 512px)
- [ ] iPhone Mockups mit App-Screenshots (6 Stück)
- [ ] Hero-Illustration oder 3D-Render
- [ ] Offizielles App Store Badge (von Apple)
- [ ] Open Graph Image (1200x630px)
- [ ] Favicon Set (ICO, PNG, SVG)

### Icons (SF Symbols Äquivalente)
```
brain.head.profile  → Kognitives Training
figure.walk         → Körperliche Übungen
leaf.fill           → Achtsamkeit
bolt.fill           → XP/Level
flame.fill          → Streaks
trophy.fill         → Achievements
target              → Ziele
clock.fill          → Zeit
lock.shield.fill    → Privatsphäre
```

### Optional
- [ ] App-Teaser Video (30-60 Sekunden)
- [ ] Lottie-Animationen für Hero-Bereich
- [ ] 3D-iPhone-Modell für interaktive Darstellung

---

## Texte & Copy

### Hero Section
```
TrainUp Your Brain
Dein persönliches Gehirn- und Achtsamkeitstraining

Über 14 wissenschaftlich fundierte Übungen für geistige Fitness, 
körperliche Koordination und innere Ruhe – in nur wenigen Minuten am Tag.

[Im App Store laden]
```

### Feature-Beschreibungen
```
Kognitives Training
Schärfe deinen Verstand mit Spielen wie dem Stroop-Test, N-Back und 
Sequenz-Gedächtnis. Jede Übung ist darauf ausgelegt, spezifische 
kognitive Fähigkeiten zu verbessern.

FocusFlow-Modus
Aktiviere FocusFlow und tauche in eine ablenkungsfreie Trainingsumgebung ein. 
Wähle aus entspannenden Soundscapes – von Waldgeräuschen bis hin zu sanftem Piano.
```

### Final CTA
```
Bereit, dein Gehirn zu trainieren?

Lade TrainUp Your Brain kostenlos herunter und starte noch heute 
mit deinem persönlichen Training.

[Im App Store laden]
```

---

## Zusätzliche Seiten

### /datenschutz
Datenschutzerklärung gemäß DSGVO

### /impressum
Impressum mit Angaben gemäß TMG

### /support
- FAQ-Bereich
- Kontaktformular
- E-Mail-Adresse

---

## Checkliste vor Launch

- [ ] Alle Texte korrekturgelesen
- [ ] Responsive Design auf allen Breakpoints getestet
- [ ] Dark Mode funktioniert korrekt
- [ ] Alle Links funktionieren (inkl. App Store Link)
- [ ] Bilder optimiert und Lazy Loading aktiv
- [ ] SEO Meta-Tags gesetzt
- [ ] Open Graph Preview getestet
- [ ] Lighthouse Audit durchgeführt (Score 90+)
- [ ] Analytics eingerichtet (optional)
- [ ] Cookie-Banner (falls nötig)
- [ ] Impressum & Datenschutz verlinkt

---

## Lizenz & Hinweise

Diese README dient als Briefing für die Entwicklung der TrainUp Your Brain Website. 
Die Designrichtlinien orientieren sich an der iOS-App und Apple's Human Interface Guidelines.
