import { Match } from "navigo";
import { createElementWithDocumentCreateElement } from "../helpers/createElementWithDocumentCreateElement";
import { filter } from "../components/filter";
import { groceriesCard } from "../components/groceriesCards";
import { getCategories } from "../app/api/api.ts";
import { getProductsByCategory } from "../app/api/api.ts";
import { sortByAscending } from "../helpers/sortFunctions/sortByAscending.ts";
import { sortByDescending } from "../helpers/sortFunctions/sortByDescending.ts";
import { createElementForImages } from "../helpers/createElementForImages.ts";
import { sortingBySlider } from "../helpers/sortFunctions/sortingBySlider.ts";



export const categoryPage = async (match: Match) => {
    console.log('categoryPage', match?.data);
   
    const mainElements = document.querySelector<HTMLDivElement>('main');

    if (mainElements) { 

        mainElements.innerHTML = '';

        const currentDataCategoryId = match?.data?.categoryId;
        let currentCategoryTitle = "";
        
        const categories = await getCategories();
        categories.forEach(category => {
          if (category.slug === currentDataCategoryId) {
            currentCategoryTitle = category.name;
          }
        })


        const mainContent = createElementWithDocumentCreateElement("div", undefined, "mainContentCategoryPage");
        mainElements.append(mainContent);


        const breadCrumbs = createElementWithDocumentCreateElement("div", undefined, "breadCrumbs");
        const homelink = createElementWithDocumentCreateElement("a", "Home", 'home-link');
        homelink.setAttribute('href', '/');
        const breadCrumbsArrow = createElementForImages("div", "/src/assets/icons/breadCrumbsArrow.svg", "breadCrumbsArrow");

        breadCrumbs.append(...[homelink, breadCrumbsArrow]);

        const categoryLink = createElementWithDocumentCreateElement("div", currentCategoryTitle, 'category-link');
        breadCrumbs.append(categoryLink);
        
        mainContent.append(breadCrumbs);

        const forActivitiesWithGroceries = createElementWithDocumentCreateElement("div", undefined, "forActivitiesWithGroceries");
        const filterPart = createElementWithDocumentCreateElement("div", undefined, "filterPart");
        filterPart.id = "filter";
        forActivitiesWithGroceries.append(filterPart);
        mainContent.append(forActivitiesWithGroceries);

        filter();

        const cardsPart = createElementWithDocumentCreateElement("div", undefined, "cardsPart");
        forActivitiesWithGroceries.append(cardsPart);

        const cardsPartTitle = createElementWithDocumentCreateElement("div", currentCategoryTitle, "cardsPartTitle");
        cardsPart.append(cardsPartTitle);
       
        const groceriesGrid = createElementWithDocumentCreateElement("div", undefined, "groceriesGrid");
        groceriesGrid.id = "groceriesCard";
        cardsPart.append(groceriesGrid);
        
        const products = await getProductsByCategory(match?.data?.categoryId);
        const productsForSorting = Array.from(products);
        console.log('cp products', products);
        products.forEach((item) => {
            const a = groceriesCard(item, match);
            groceriesGrid.append(a);
        })

          // form logic
        const sortAscending = document.querySelector("#sortAscending");
        const sortDescending = document.querySelector("#sortDescending");
        sortAscending!.addEventListener("click",() => {
          sortAscending!.classList.add("active");
          sortAscending!.classList.remove("inactive");
          sortDescending!.classList.add("inactive");
          sortDescending!.classList.remove("active");

        })

        sortDescending!.addEventListener("click",() => {
          sortDescending!.classList.add("active");
          sortDescending!.classList.remove("inactive"); 
          sortAscending!.classList.remove("active"); 
          sortAscending!.classList.add("inactive"); 

        })


        const buttonApply = document.querySelector("#buttonApply");
        const buttonReset = document.querySelector("#buttonReset");

        buttonApply!.addEventListener("click",() => {

          if (sortAscending!.classList.contains("active")) {
             const newProductsOrder = sortByAscending(productsForSorting);
             groceriesGrid.innerHTML=``;
             newProductsOrder.forEach((item) => {
             if (sortingBySlider(item)) {
                  const a = groceriesCard(item, match);
                  groceriesGrid.append(a);
                };
              })  
            }  else if (sortDescending!.classList.contains("active")) {
                const newProductsOrder = sortByDescending(productsForSorting);
                groceriesGrid.innerHTML=``;
                newProductsOrder.forEach((item) => {
                  if (sortingBySlider(item)) {
                       const a = groceriesCard(item, match);
                       groceriesGrid.append(a);
                     };
                   })  
                }         
            });

        buttonReset!.addEventListener("click",() => {
            sortAscending!.classList.remove("active"); 
            sortAscending!.classList.add("inactive");
            sortDescending!.classList.add("inactive");
            sortDescending!.classList.remove("active");
            groceriesGrid.innerHTML=``;
            products.forEach((item) => {
              const a = groceriesCard(item, match);
              groceriesGrid.append(a);});
               
            (<HTMLInputElement>document.querySelector("#minPrice")!).value = '';
            (<HTMLInputElement>document.querySelector("#maxPrice")!).value = '';   
        });


        mainElements.append(mainContent);

        return new Promise<HTMLElement> ((resolve) => resolve (mainElements));    
    }
};