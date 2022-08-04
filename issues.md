# Issues

## Backend
* While making a Config class to inject the `restTemplate`, every other injection i made with `Autowired` gives error that it's null, i tried to inject them also in the class and allow overriding in the properties file.
* is the `Facad` classes i made is a right understanding of the concept ?

## Frontend
* When selecting an item in the Drop down list of the search box, i'm not redirected to the selected movie, even when the anchor tag of the `Link` componenet is rendered, as the `blur` event of the input field is handled before the click, .. may be i will try to make the blur event on the `SearchBox` component not only the input field, and adding a click event on the listItem too to handle removing the list.
* In TypeScript, when i'm not sure of the data come, i used `as` and check if it's of type specified or not, is this a best practice ?
* Can i use the singleton with a component, like the `Loading` component, as there is no props required to be different from any other `Loading` component.