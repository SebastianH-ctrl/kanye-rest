# kanye-rest

Projektarbete för kursen Flerplattformsapplikationer med webbtekniker.

Skapad av: [Sebastian, Andre, Linn]

Denna applikation är en mashup-tjänst som använder sig av två olika API:er. Det ena API:et är ett API som hämtar citat från Kanye West och det andra API:et är ett text-to-speech API som konverterar citaten till tal i form av en AI som efterliknar kanyes röst.

#

TTS-apiet är inte publikt och vi valde därför att använda oss utav en Node/express server för att kunna göra anrop till API:et från servern istället för från klienten. Denna backend används sedan som ett eget API som klienten kan göra anrop till lokalt.

#
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

Vi valde React som ramverk för att det är ett väldigt populärt ramverk som vi sedan innan har lite erfarenhet av. Vi valde även React för att det är ett väldigt lättanvänt ramverk som är väldigt bra på att hantera state och komponenter. Eftersom friheten att kunna välja rätt fritt mellan bibliotek och ramverk var väldigt stor så valde vi att använda oss utav React för att vi kände att det var det bästa alternativet för oss. Till skillnad från Angular är React också mer flexibelt eftersom det är ett bibliotek snarare än ett fullständigt ramverk, vilket innebär att det get större frihet att välja vilka andra tekniker man vill använda i sin teknikstack. När det gäller Vue så har React funnits längre och har lite större community och därmed fler verktyg och bibliotek tillgängliga för React.





