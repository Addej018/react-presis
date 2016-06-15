# React tutorial presis

### Förutsättningar 
Är att du har node installera på din dator.
Om du inte har node installera kan du ladda ner det på den här länken (https://nodejs.org/en/) 

### Kom igång
 
```
npm install
npm start
öppna http://localhost:3000 i din webläsare
```

### Att göra 

#### Skapa en produkt tabell som rendera ut all produkt datan
1. Skapa ett inital state för produkter i ProductListingPage.
2. Hämta data i productApi getProducts när komponent ProductListingPage har lagts till i domen. 
3. Uppdatera state i ProductListingPage med de nya produkterna.
4. Skapa en ny stateless komponent med en produkt tabell som kan rendera ut all produkt data.
5. Lägg till produkt tabells komponenten i render funktion i ProductListingPage.
6. Kolla i webläsaren så att din produkt tabell renderas ut. 

#### Skapa ett produkt formulär som kan lägga till fler produkter. 
1. Sätt upp ett state i ProductForm för att hålla forumlärdatan. 
2. Sätt upp ett formulär för all product data. 
2. Skapa en funktion för att uppdatera state på produkten när forumläret ändras. 
3. Lägg till en funktion i ProductListingPage som lägger till den nya produkten i productApi.
4. Skicka ner den funktion via props till ProductForm.
5. Skapa en funktion i ProductForm för att hantera on submit. 
6. I funktion för on submit anropa den funktion du fått via props för att lägga till en ny produkt.  


Tips är att kolla på https://facebook.github.io/react/docs/tutorial.html