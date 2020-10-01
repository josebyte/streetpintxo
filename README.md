# StreetPintxo

Street pintxo is born to help bars to survive the pandemic by promoting
serving pintxos on the street. Bars adhered to the program will offer a
discount to the clients in exchange of being promoted in our website.

This is an ambitious project so we will offer this service per city, and we
expect people from different countries to come and live this unique
experience.

## Run

Node v12.18.3 or NVM (node version manager) is required.

```
nvm use // follow instrucctions if you haven't the required node version
```

Backend:
```
docker-compose up -d
```

Frontend:
```
cd webapp
npm install
npm start
```

## TODO:

- Loader
- Skeletons
- Tooltips
- Form Validations text
- assets size improvements

## Decisions:

- **Architecture**: I decided to use Ionic because it fit well to this requirements (movile first, multiple components, Routing, Translations, PWA). Also, if in the future we want to create an APP is as simple as launching the capacitor build command for each mobile operating system. Also if in the future we want to use geolocation, camera, qr codes, bluetooth, nfc, wifi... simplifies things. However, the date component needs to be replaced by a simple date selector for browsers. Ionic has simple platform conditions for do that.
- There is a **model** with the data **typed** by each entity.
- **Pagination**: Created a custom paginator component for handle all pagination in the project. This component can handle any kind of item because the Output of the component is the new page and the dispatch should be handled by the main component. The paginator component should detect if there is more pages and also hide the previous button when is the first page.
- **REST API** with 3 entities: /bill /bar /city
- **Cities**: City list is getting from the API so when a new one is created it will appear automatically in the menu and the home page. When the list grows the buttons should be changed for a selector in order to keep a responsive design. 
- **Private area**: Is a independent module of the application. It should be like that instead of using static routes for CSS and assets resources.
- **Header**: The header is a shared component for use in the private-area module and in the rest of the modules of the application.
- **User** signup is in localstorage (without API). //TODO
- **Styling**: The city styles have been implemented with CSS variables (the cleanest and best way to implement it) instead of appending styles to the body or component.
- **NGRX**: Implemented for cities and bars, bills are out of ngrx store.
- **NGX-translate**: Installed and implemented.
- **PWA**: PWA has been implemented, but service workers don't working in development environment.
