# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# eval-react

Eval React : FilmSearchByAPI

Vous devez mettre en place une interface de recherche et d'affichage de films.
Pour se faire, vous devez :

- dans un premier temps vous abonner à une API en ligne qui vous permettra de disposer de tous les films avec leurs infos et leurs visuels, 
- afficher différents champs de saisie pour lancer la recherche (et effectuer les requetes sur l'API cad "consommer" l'API, 
- récupérer la liste des films selectionnés (la réponse de l'API en JSON) et afficher chacun dans un module visuel (une Card) qui permettra de les mettre en valeur.

Donc sur l'interface que vous créerez, vous devez avoir :
- un champ input 'NOM' pour faire des requetes sur l'API avec le nom (ou une partie du nom) d'un film
- un bouton 'Search' pour ne pas avoir à lancer trop de requetes , si on les faisait sur le onChange des champs, on génererait beaucoup trop de requetes

Tout d'abord, vous devez donc créer une SearchBar dans un composant, 
voici un modèle simplifié pour introduire le concept :
https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js

 

Evidemment la recherche ne se fera pas, comme dans l'exemple précédent, sur une liste statique locale mais en fonction d'un tableau en JSON venant d'une API.

Vous utiliserez l'API suivante qui est pratique et complète (et gratuite!)
http://www.omdbapi.com/apikey.aspx

il faut s'inscrire et récupérer via mail le token qui vous permettra de faire des requetes ...
(regardez l'exemple dans le mail, vous verrez qu'on envoie systématiquement le token dans l'url )
ensuite il faudra bien sûr lire la doc de l'API pour comprendre son fonctionnement et quelles sont les différentes options

ex de requete GET :
http://www.omdbapi.com/?i=tt3896198&apikey=6c688ff2 (recherche sur un film avec le n° IMDB et le token/apiKey )
attention le nombre de requetes est limité à 1000 par jour ... 
si vous arrivez à cette limite, vous ne pourrez plus tester, donc vous pouvez creér une mini API en local pour tester les requetes et leur exploitation avant de passer à la version API en ligne ... 
voici le type de reponse que peut fournir l'API :

{
"Title": "Guardians of the Galaxy Vol. 2",
"Year": "2017",
"Rated": "PG-13",
"Released": "05 May 2017",
"Runtime": "136 min",
"Genre": "Action, Adventure, Comedy",
"Director": "James Gunn",
"Writer": "James Gunn, Dan Abnett, Andy Lanning",
"Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
"Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
"Language": "English",
"Country": "United States",
"Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
"Ratings": [],
"Metascore": "67",
"imdbRating": "7.6",
"imdbVotes": "699,402",
"imdbID": "tt3896198",
"Type": "movie",
"DVD": "22 Aug 2017",
"BoxOffice": "$389,813,101",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
}

une fois la liste de tous les films récupérée par une requete ajax/fetch, vous devrez l'afficher dans votre interface avec un composant 'FilmCard' en spécifiant les champs suivants : 
- le nom du film (Title)
- son année (Year)
- sa durée (runtime)
- sa ou ses catégories (genre)
- ses acteurs (Actors)
- son synopsys (Plot)
- son rating sur 5 etoiles
- son revenu total (BoxOffice)
- son poster

le design de la Card est libre, l'essentiel est que tous les champs soient présents...
on pourra en option présenter des critères de classement () selon l'un des critères ci-dessus 
(reclasser les films présents par année, par revenu, par durée, ...)
