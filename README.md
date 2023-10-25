# READ ME

## Languages used
 HTML,CSS and JavaScript(React.js)

## About Website
 - Shoping website created using "React + Vite"
 - App.jsx File includes 3 main components 
    - Header
        - It includes a nav bar and it's elements
        - Have "Cart" Element along with a number count
        - the number count will increase and decrese based on the button pressed in the Shopping-card
        - if "Add to Cart" is clicked the count will increase
        - and if "Remove from Cart is clicked" the count will decrease
        - Added Media query to change the Header to support the Tabs and Mobile Devics
    - Product-card
        - Using "React" a indivizual product card is created and added to the main-container
        - A data Array is created in the "App" Function to add a different data for each product card
        - The "Add to Cart" button and "Remove from cart" button are added in the each product card and 
        - used to update the Number count of the cart in Header Components
    - Footer
        - containes Copyright information

## To Run Application
 `
 npm run dev
 `

 -[Live Site](https://deluxe-faun-f69d2b.netlify.app)