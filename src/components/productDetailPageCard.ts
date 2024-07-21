import { createElementWithDocumentCreateElement } from "../helpers/createElementWithDocumentCreateElement";
import { createElementForImages } from "../helpers/createElementForImages";
import { Product } from "../types";
import { makeStarsForRaiting } from "../helpers/makeStarsForRaiting";

export const productDetailPageCard = (item: Product) =>{
    
    const productDetailCard = createElementWithDocumentCreateElement("div", undefined, "productDetailCard");
    const productName = createElementWithDocumentCreateElement("div", item.title, "productName");

    productDetailCard.append(productName);

    const productRaitingRow = createElementWithDocumentCreateElement("div", undefined, "productRaitingRow", ); // это линия со звездочками и рейтингом в формате дроби
    productDetailCard.append(productRaitingRow);

    const starsRaiting = createElementWithDocumentCreateElement("div", undefined, "starsRaiting");
    productRaitingRow.append(starsRaiting);
    //здесь вызвать ф-цию, которая нарисует звездочки
    const digitRaiting = createElementWithDocumentCreateElement("div", `${item.rating}/5`, "digitRaiting");
    productRaitingRow.append(digitRaiting);

    const starsLineRaiting = makeStarsForRaiting(item.rating);
    starsLineRaiting.forEach((item) => {
        const a = createElementForImages("div", `${item}`, "star");
        starsRaiting.append(a);
    })


    const cost = createElementWithDocumentCreateElement("div", undefined, "cost");
    
    if(item.discountPercentage){
        const roundDiscount = Math.round(item.discountPercentage);   
        const costDiscountPercentage = createElementWithDocumentCreateElement("div", `-${roundDiscount}%`, "costDiscountPercentage a");
        const oldCost = createElementWithDocumentCreateElement("div",`$${item.price}`, "oldCost a");
        const countCostNow = (item.price - (item.price * roundDiscount / 100)).toFixed(2);
        const CostNow = createElementWithDocumentCreateElement("div",`$${countCostNow}`, "CostNow a");
        cost.append(...[CostNow, oldCost, costDiscountPercentage]);
    } else {
        const costNow = createElementWithDocumentCreateElement("div",`$${item.price}`, "costNow");
        cost.append(costNow)
    }
    productDetailCard.append(cost);


    const productDescription = createElementWithDocumentCreateElement("div", `${item.description}`, "productDescription");
    
    const brandInformation = createElementWithDocumentCreateElement("div", undefined, "brandInformation");
    const brandTitle = createElementWithDocumentCreateElement("div", "Brand", "brandTitle");
    const brandName = createElementWithDocumentCreateElement("div", item.brand, "brandName");
    brandInformation.append(...[brandTitle, brandName]);
    
    const inStockInformation = createElementWithDocumentCreateElement("div", undefined, "inStockInformation");
    const inStockTitle = createElementWithDocumentCreateElement("div", "In Stock", "inStockTitle");
    const inStockAmount = createElementWithDocumentCreateElement("div", `${item.stock}`, "inStockAmount");
    inStockInformation.append(...[inStockTitle, inStockAmount]);
    

    const buttonsAdd = createElementWithDocumentCreateElement("div", undefined, "buttonsAdd");
    productDetailCard.append(...[productDescription, brandInformation, inStockInformation, buttonsAdd]);

    const amountChoiseButton = createElementWithDocumentCreateElement("div", "", "amountChoiseButton");
    const minus = createElementWithDocumentCreateElement("div", "-", "minus");
    const amount = createElementWithDocumentCreateElement("div", "1", "amount");
    const plus = createElementWithDocumentCreateElement("div", "+", "minus");
    amountChoiseButton.append(...[minus, amount, plus]);

    const addToCardButton = createElementWithDocumentCreateElement("button", "Add to Cart", "addToCardButton");
    buttonsAdd.append(...[amountChoiseButton, addToCardButton]);

    return productDetailCard;
}