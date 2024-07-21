import { Match } from "navigo";
import { createElementWithDocumentCreateElement } from "../helpers/createElementWithDocumentCreateElement";
import { createElementForImages } from "../helpers/createElementForImages";
import { makeStarsForRaiting } from "../helpers/makeStarsForRaiting";
import router from "../app/router/router";
import { Product } from "../types";



export const groceriesCard = (item: Product, match: Match) =>{
    
    const productCard = createElementWithDocumentCreateElement("div", undefined, "grocerieCard", () =>  router.navigate(`/${match?.data?.categoryId}/${item.id}`));

    const productImg = createElementForImages("div", item.images[0], item.title);
    productImg.className = "productImg";
    const productName = createElementWithDocumentCreateElement("div", item.title, "productName");
    const productRaitingRow = createElementWithDocumentCreateElement("div", undefined, "productRaitingRow", ); 
    productCard.append(...[productImg, productName, productRaitingRow]);

    const starsRaitng = createElementWithDocumentCreateElement("div", undefined, "starsRaitng");
    productRaitingRow.append(starsRaitng);
    
    const starsLineRaiting = makeStarsForRaiting(item.rating);
    starsLineRaiting.forEach((item) => {
        const a = createElementForImages("div", `${item}`, "star");
        starsRaitng.append(a);
    })

    const digitRaiting = createElementWithDocumentCreateElement("div", `${item.rating}/5`, "digitRaiting");
    productRaitingRow.append(digitRaiting);

    const cost = createElementWithDocumentCreateElement("div", undefined, "cost");
    
    if(item.discountPercentage){
        const roundDiscount = Math.round(item.discountPercentage);   
        const costDiscountPercentage = createElementWithDocumentCreateElement("div", `-${roundDiscount}%`, "costDiscountPercentage a");
        const oldCost = createElementWithDocumentCreateElement("div",`$${item.price}`, "oldCost a");
        const countCostNow = (item.price - (item.price * roundDiscount / 100)).toFixed(2);
        const CostNow = createElementWithDocumentCreateElement("div",`$${countCostNow}`, "CostNow a");
        cost.append(CostNow);
        cost.append(oldCost);
        cost.append(costDiscountPercentage);
    } else {
        const costNow = createElementWithDocumentCreateElement("div",`$${item.price}`, "costNow");
        cost.append(costNow)
    }
    productCard.append(cost)

    return productCard;
}