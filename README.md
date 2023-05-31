# kanye-rest

Projektarbete för kursen Flerplattformsapplikationer med webbtekniker.

Skapad av: [Sebastian, Andre, Linn]

Denna applikation är en mashup-tjänst som använder sig av tre olika API:er. Det ena API:et är ett API som hämtar citat från Kanye West och det andra API:et är ett text-to-speech API som konverterar citaten till tal i form av en AI som efterliknar kanyes röst.

#

TTS-apiet är inte publikt och vi valde därför att använda oss utav en Node/express server för att kunna göra anrop till API:et från servern istället för från klienten. Denna backend används sedan som ett eget API som klienten kan göra anrop till lokalt.

#

Det tredje och sista API:et är GIPHY som vi använder för att visa upp en gif medan vi väntar på att TTS-apiet ska svara.

# Körinstruktioner

1. Installera moduler

Navigera till mappen där du har klonat projektet och kör följande kommando i terminalen:

````
npm install
`````

2. Starta server

Navigera till serverfilen app.js och starta den med följande kommando:

````
node app
````````

Om servern startar på port 3000 så är allt som det ska. Om inte så kan du ändra porten i app.js filen.

3. Starta klient

navigera inuti kanye-yeha mappen och kör följande kommando:

````
npm install
````````

Efter att ha installerat alla moduler så kan du starta klienten med följande kommando:

````
npm start
````````

4. Använd applikationen

Applikationen öppnas automatiskt i din webbläsare. Om inte så kan du öppna den manuellt genom att navigera till http://localhost:3001/ i din webbläsare.

# Tekniker

- React
- Node.js
- Express
- CSS
- HTML
- Javascript
- JSX
- REST
- Git
- Github



# Val av ramverk

Vi valde React som ramverk för att det är ett väldigt populärt ramverk som vi sedan innan har lite erfarenhet av. Vi valde även React för att det är ett väldigt lättanvänt ramverk som är väldigt bra på att hantera state och komponenter. Av de valen av ramverk att välja på för detta projekt, Vue, Angular eller React, kändes React det bästa alternativet. Detta var för att vi såg en möjlighet att återanvända komponenter lika som i ett objekorienterat sätt som vi alla är vana vid. Till skillnad från Angular är React också mer flexibelt eftersom det är ett bibliotek snarare än ett fullständigt ramverk, vilket innebär att det get större frihet att välja vilka andra tekniker man vill använda i sin teknikstack. Vid användning av Angualar skulle biblioteket/ramverket ge för mycket overhead för ett så småskaligt projekt som detta är. I jämförelsen mellan React och Vue, har React funnits längre och har lite större community och därmed fler verktyg och bibliotek tillgängliga för React. Vue är även skrivet i en Single-file-component, det vill säga att CSS, HTML och Javascript är i samma fil, vilket kan minska förståelsen för koden. Detta ville vi undvika och valde därför bort Vue som bibliotek.

