# Shop-co
Figma design link: https://www.figma.com/design/Q0zYyVhjvTQMKg8tqtUPLB/E-commerce-Website-Template-(Freebie)-(Community)?node-id=0-1&t=4ZgOl1BpZ6sfCMRZ-0

1. Homepage Desktop

Components

Header (shop.co title and two icons)
Hero (FIND ANYTHING... title, an image, and all the rest components inside Hero section)
Categories grid

Each category should be loaded from the Backend (see https://dummyjson.com/docs/products#products-category_list)
After load each category should be displayed in its own grey square according to the provided figma design (label inside make simple black)
Each category item must be clickable, click on each nagigates (Navigo) to the Category Page route /category/:categoryName where categoryName is the unique name taking from the backend response (see https://dummyjson.com/docs/products#products-category_list)


STAY UPTO DATE ABOUT... form component
Footer


2. Category Page Desktop

Components

Header (shop.co title and two icons)
Breadcrumbs (Home label on click must navigate to / page (Homepage)), Groceries label must be a label containg current categoryName (taking from navigo)
Products grid

Each product should be loaded from the Backend accorindg to the categoryName (see https://dummyjson.com/docs/products#products-category)
After load each product should be displayed in its own card component according to the provided figma design
Each product item must be clickable, click on each nagigates (Navigo) to the Product Detail Page route /:categoryName/:productId where productId is the unique name taking from the backend response (see https://dummyjson.com/docs/products#products-category)


Filters

Sort

Click on Ascending label must change sort order of the products (from the lowest price to the highest)
Click on Descending label must change sort order of the products (from the highest price to the lowest)


Price

Changing slider specify the minimal and maximum price of the product


Click on Apply Filter button taking select values from Sort and Price components and filter products in the Product grid
Click on Reset Filter button set sort to the default value (Ascending) and price to the default value (min 0 max 1000)


STAY UPTO DATE ABOUT... form component
Footer


3. Product Detail Page Desktop


Components

Header (shop.co title and two icons)
Breadcrumbs

(Home label on click must navigate to / page (Homepage)),
Groceries label must be a label containg current categoryName (taking from navigo)
Tree oil 300ml label must a label containg current productId (taking from navigo)


Product details grid

Each product should be loaded from the Backend (see https://dummyjson.com/docs/products#products-single)
After load display product data according to the provided figma design
Data to be displayed:

title ("Tree oil 30ml label" in the Figma design)
rating ("4.5/5" in the Figma design)
description ("The tree oil contains..."" grey text in the Figma design)
price ("$260" in the Figma design)
discountPercentage ("-40%" in the Figma design)
brand ("Hemani Tea" in the Figma design)
stock ("78 items" in the Figma design)
images (3 images put in the image gallery + one random image as a 4th one)




STAY UPTO DATE ABOUT... form component
Footer
