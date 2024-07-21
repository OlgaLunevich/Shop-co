import { createElementWithDocumentCreateElement } from "../helpers/createElementWithDocumentCreateElement";
import { createElementForImages } from "../helpers/createElementForImages";
import { createElementForInput } from "../helpers/createElementForInput";


export const filter = () => {
    const filterElement = document.querySelector('#filter');

    const filters = createElementWithDocumentCreateElement("div", undefined, "filters");
    const filtersTitle = createElementWithDocumentCreateElement("div", "Filters", "filtersTitle");
    const filtersImg = createElementForImages("div", "src/assets/icons/filterBox.svg", "filtersImg");

    filters.append(...[filtersTitle,filtersImg]);
        
    const sort = createElementWithDocumentCreateElement("div", undefined, "sort");
    const sortTitle = createElementWithDocumentCreateElement("div", "Sort", "sortTitle");
    const sortAscending = createElementWithDocumentCreateElement("div", "Ascending ", "sortAscending");
    sortAscending.id = "sortAscending";    
    const sortDescending  = createElementWithDocumentCreateElement("div", "Descending  ", "sortDescending");
    sortDescending.id = "sortDescending"; 

    sort.append(...[sortTitle,sortAscending,sortDescending]); 

    const price = createElementWithDocumentCreateElement("div", undefined, "price");
    const priceRow = createElementWithDocumentCreateElement("div", undefined, "priceRow");
    const priceTitle = createElementWithDocumentCreateElement("div", "Price", "priceTitle");
    const priceGalka = createElementForImages("div", "src/assets/icons/forFilterGalka.svg", "priceGalka");
    const priceSlider = createElementWithDocumentCreateElement("div", undefined, "priceSlider");
    priceSlider.id = "priceSlider";

    const priceSliderHeader = createElementWithDocumentCreateElement("div", undefined, "priceSliderHeader");
    const min = createElementWithDocumentCreateElement("div", "Min Price", "min");
    const max = createElementWithDocumentCreateElement("div", "Max Price", "max");

    priceSliderHeader.append(...[min, max]);

    const minPrice = createElementForInput("minPrice", "minPrice", "number", "1");
    const maxPrice = createElementForInput("maxPrice", "maxPrice", "number", "100000");

    priceSlider.append(...[minPrice, maxPrice]);
    priceRow.append(...[priceTitle, priceGalka]);
    
    price.append(...[priceRow, priceSliderHeader, priceSlider]);
    
    const buttons = createElementWithDocumentCreateElement("div", undefined, "buttons");
    const buttonApply = createElementWithDocumentCreateElement("button", "Apply Filter", "buttonApply");
    buttonApply.id = "buttonApply";
    const buttonReset = createElementWithDocumentCreateElement("button", "Reset Filter", "buttonReset");
    buttonReset.id = "buttonReset";

    buttons.append(...[buttonApply, buttonReset]);
    
    filterElement!.append(...[filters, sort, price, buttons]);
    
}