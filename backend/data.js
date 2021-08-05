import bcrypt from 'bcryptjs';


const data = {
    users: {
        name: 'Takara Designs',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
    },

    users: [{
        name: 'John',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
    },
    ],
    products: [
        {

            name: 'Comfortable Stretch Hoodie',
            category: 'Hoodies & Sweatshirts',
            image: '..public/images/hoodie-1.jpg',
            price: 20,
            rating: 5,
            numReviews: 10,
            description: 'Comfortable 100% Cotton Hoodie',
            countInStock: 10,
            brand: 'Casual Clothing',
        },
        {

            name: 'Denim Jacket',
            category: 'Coats & Jackets',
            image: '..public/images/denim-jacket.jpg',
            price: 30,
            rating: 5,
            numReviews: 15,
            description: 'Comfortable 100% Denim Jacket',
            countInStock: 5,
            brand: 'Casual Clothing',
        },
        {

            name: 'Fluffy Hood Coat',
            category: 'Coats & Jackets',
            image: '..public/images/fluffy-coat.jpg',
            price: 40,
            rating: 5,
            numReviews: 8,
            description: 'Comfortable 100% Cotton Hoodie',
            countInStock: 7,
            brand: 'Casual Clothing',
        },
        {

            name: 'Cosy Chill Joggers',
            category: 'Joggers',
            image: '..public/images/joggers.jpg',
            price: 20,
            numReviews: 4,
            description: 'Comfortable 100% Cotton Joggers',
            countInStock: 8,
            rating: 4,
            brand: 'Casual Clothing',
        },
        {

            name: 'Quater Length Shorts',
            category: 'Shorts',
            image: './images/shorts.jpg',
            price: 15,
            numReviews: 3,
            description: 'Keep it cool this summer with our Quarter Length Joggers',
            countInStock: 10,
            rating: 4.5,
            brand: 'Casual Clothing',
        },
        {

            name: 'Lacoste Sliders',
            category: 'Footwear',
            image: './images/sliders.jpg',
            price: 25,
            numReviews: 12,
            description: 'Official Lacoste Sliders, perfect for the beach',
            countInStock: 11,
            rating: 5,
            brand: 'Lacoste',
        },
        {

            name: 'Flex Trainers',
            category: 'Footwear',
            image: './images/trainers.jpg',
            price: 30,
            numReviews: 7,
            description: 'Built for all weather conditions and maximun comfort',
            countInStock: 15,
            rating: 5,
            brand: 'Casual Clothing',
        },
        {

            name: 'Cartoon Style Baseball Cap',
            category: 'Accesories',
            image: './images/cap-1.jpg',
            price: 20,
            numReviews: 20,
            description: 'Show off your creative and fun style with our cool baseball cap',
            countInStock: 18,
            rating: 4.5,
            brand: 'Casual Clothing',
        },
        {

            name: 'Tri Coloured Set of Beanies',
            category: 'Accesories',
            image: './images/beanies.jpg',
            price: 15,
            numReviews: 6,
            description: 'Get all the colours for any occasion with our tri set of beanies!',
            countInStock: 12,
            rating: 4.0,
            brand: 'Casual Clothing',
        },

        {

            name: 'Glazy Days Shades',
            category: 'Accesories',
            image: './images/shades.jpg',
            price: 15,
            numReviews: 10,
            description: 'Toirtoise Shell frame with funky pink hues',
            countInStock: 13,
            rating: 4.5,
            brand: 'Casual Clothing',
        },
    ],
};
export default data;

