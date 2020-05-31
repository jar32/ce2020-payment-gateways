import React from "react";

const cards = [
    {'id' : 1, 'name': 'Name', 'price':25,
        'Description': 'Lorem ipsum dolor',
        'img': 'https://images.unsplash.com/random'},

];

const ProductContext = React.createContext(
    cards
);
export default ProductContext;