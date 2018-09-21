# it2810-webutvikling-h18-prosjekt-2-gruppe--43

# Layout:
https://sketch.cloud/s/oDRGL

# How we git things done
Working on a new feature
git checkout -b some-feature

When feature is done, rebase on master 
git pull --rebase master

When rebase is resolved, open a pull request on github

# Dokumentasjon

## Innhold

Innholdet på siden fant vi på tre forskjellige nettsider. SVG-bilder kommer fra [undraw.co](https://undraw.co), lyd fra [Free Music Archive](https://freemusicarchive.org/) og tekst fra [Poetry Out Loud](https://www.poetryoutloud.org). Det ligger ingen spesielle motivasjoner bak valg av innhold. Titler er satt sammen av tilfeldige adjektiv og substantiv, og "forfattere" er tilfeldige kjendiser.

Innholdet er lagret i "public"-mappen. Bilder og lyd ligger i hver sin undermappe, mens "databasen" ligger i undermappen "data". Databasen er delt inn i `images.json`, `sounds.json` og  `texts.json`. Det ligger også en Python-fil der som ikke er relevant for innleveringen; denne er bare lagd for å raskt generere databasefilene fra forholdsvis tilfeldig data.

## Layout

Vi valgte et enkelt layout, med en "header" som lar brukeren filtrere kategorier, og en "asset container" som inneholder funksjonalitet for å navigere mellom de forskjellige resultatene, og viser innholdet. Layouten er stort sett basert på CSS-grid, noe som gjør det enkelt å ta hensyn til forksjellige enheter og skjermstørrelser. Mer om det senere.

Designet til siden er veldig enkelt. Vi har ikke lagt mye energi i å vinne noen design-konkurranser. Om det var en del av oppgaven kunne vi nok fått det til å se penere ut. Fonter er hentet fra [FontSquirrel](https://www.fontsquirrel.com) og [FontAwesome](https://fontawesome.com/), og lisenser er vedlagt font-filene.

PS: Vi er klare over at det bare står "Logo" oppe i venstre hjørne. Det er fordi vi ikke har noen logo. Se for deg inspirerende, banebrytende grafikk.

## Teknologi og komponenter

Appen er (så klart) lagd i React. Vi har ikke brukt noen ytterligere React-biblioteker enn "vanilla", per oppgaveteksten. Vi bruker NPM som package manager.

### AJAX

Angående den påkrevde AJAX-funksjonaliteten så brukte vi et bibliotek kalt [axios.js](https://github.com/axios/axios). Det er et enkelt, populært Promise-basert AJAX-bibliotek. Vi kunne også brukt jQuery og deres AJAX-funksjonalitet, men vi hadde ikke mye bruk for den andre funksjonaliteten til jQuery. Selve filteringsfunksjonaliteten, for å filtrere innholdet basert på brukerens valg, la vi til en egen JavaScript-fil. Denne filen importeres (via `require`) til App.js.

### Komponentene
Det er ikke mange komponenter å snakke om i denne appen. Vi har `Header`, som eksponerer filtreringsfunksjonaliteten, og underkomponenten `SelectOption`, for valg innenfor hver type (bilde, lyd, tekst). Videre har vi `AssetContainer`, som viser resultatet av filtreringen og selve innholdet. På toppen ligger så klart `App`-komponenten. Komponentene har ingen delt `state`, men kommuniserer via `props` (nedover) og `events` (oppover).

Eksempelvis, når et filter endres, så sendes dette via en `event` opp til `Header`, som videresender alle de nåværende valgene (bilde, lyd, tekst) opp til `App`. Her utløses `filter`-funksjonen. Denne tar det kartesiske produktet av alle bilder med kategori X, lyder med kategori Y og tekster med kategori Z, og returnerer dette. Dette settes til `state.assets` i `App`, og denne variabelen brukes som et `prop` til `AssetContainer`. Med tanke på at det er fire bilder, fire lyder og fire tekster i hver kategori vil størrelsen på produktet alltid være 64 kombinasjoner (4 * 4 * 4).

## Responsivitet

Som nevnt tidligere er layoutet satt opp via CSS-Grid. Ved å bruke Grid sin `grid-template-areas`-regel kan man veldig enkelt ta hensyn til forksjellige skjermstørrelser. Det eneste man trenger å gjøre er å lage media queries der man endrer på hvordan disse areaene er satt opp i forhold til hverandre.

Vi har testet forskjellige enheter via Google Chromes DevTools. Dette verktøyet lar deg se hvordan nettsiden vil se ut i forskjellige skjermstørrelser, og har predefinerte størrelser for de mest brukte enhetene (iPhone, iPad, Galaxy etc). Vi har hovedsakelig tatt hensyn til tre størrelser: Over 1024px bredde (PC-skjermer), mellom 768px og 1024px (tablets) og under 768px (smarttelefoner). Så langt vi har sett fungerer nettsiden tilfredsstillende innenfor alle disse.