# Programmering i Typescript - Projekt

## Beskrivning
En kursportal för ett fiktivt lärosäte där studenter kan söka bland kurser och skapa ett ett ramschema.
Jag har endast satsat på att uppfylla grundkraven för projektuppgiften vilket inkluderar:

*Applikationen skall skapas med Angular och TypeScript.
*Lösningen skall ha minst två undersidor, en för att söka och visa information om kurser - och en som visar skapat ramschema.
*Komponenter och routing skalla användas.
*Minst två stycken services skall skapas, en för kursdata och en för hantering av ramschema.
*Det ska gå att skapa ett eget ramschema med ett tydligt gränssnitt. Det får inte vara möjligt att skapa dubletter av samma kurs i ramschemat.
*Listan med valda kurser skall uppdateras utan sidomladdning, och skapat ramschema skall lagras med hjälp av localStorage, och läsas in på nytt vid inladdning av webbsidan.
*Webbplatsen skall vara snygg, prydlig och ha ett välgenomarbetat helhetsintryckt - och fungera väl på stora som små skärmar med bra responsiv design.
*Källkodens skall versionshanteras med Git.
*Den färdiga lösning skall publiceras till publikt tillgänglig webbhost.

###Krav för kurser
Kurserna skall presenteras på ett tydligt tillgängligt sätt, och det ska finnas möjlighet att:

*Kunna sortera data på kurskod, kursnamn, poäng, ämne.
*Att filtrera data på kurskod och kursnamn.
*Att välja ut kurser från ämne - exempelvis; bara visa kurser som tillhör ämnet "Datateknik"
*Lägga till kurser till eget ramschema.
*Se antal kurser i aktuell sökning, exempelvis alla kurser, eller antal kurser i valt urval tex hur många kurser det blir om enbart "Datateknik"-kurser visas.

###Krav för ramschema
Ramschemat skall presenteras på ett tydligt tillgängligt sätt, och det ska finnas möjlighet att:

*Se valda kurser till ramschemat (dessa ska lagras i localStorage).
*Se antal sammanlagda högskolepoäng för de valda kurserna.
*Att kunna plocka bort kurser från ramschemat.
*Samtliga ändringar i ramschamat skall lagras/uppdateras i localStorage (alternativt se nedan), och laddas in på nytt vid sidomladdning.

##Mål
*Angular ska användas som ramverk och TypeScript som programmeringsspråk.
*Källkoden skall versionshanteras med Git, och den färdiga webbplatsen skall publiceras på valfri webbhost.
*Kunna läsa in externt data, behandla detta och presentera på skärm.
*Kunna använda tidigare moment i kursen i en större sammanhängande webbplats.