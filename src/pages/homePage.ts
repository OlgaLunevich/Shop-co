import { createElementWithDocumentCreateElement } from "../helpers/createElementWithDocumentCreateElement";
import { createElementForImages } from "../helpers/createElementForImages";
import router from "../app/router/router.ts";
import { getCategories } from "../app/api/api.ts";
import { LABELS_LIST } from "../data/data.ts";
import { STATISTIC_DATA } from "../data/data.ts";


export const homePage = async()=>{
    const mainElements = document.querySelector<HTMLDivElement>('main');
    
    if(mainElements){

        mainElements.innerHTML = '';
        const mainContent = createElementWithDocumentCreateElement("div", undefined, "mainContent");
        const hero = createElementWithDocumentCreateElement("div", undefined, "hero"); 
        const categoriesBox = createElementWithDocumentCreateElement("div", undefined, "categoriesBox");
        const labelsBox = createElementWithDocumentCreateElement("div", undefined, "labelsBox");

        LABELS_LIST.forEach((item)=> {
            const label =  createElementForImages("div",item.src, item.alt);
            labelsBox.append(label)
        });

        const mainText = createElementWithDocumentCreateElement("div", undefined, "mainText");
        const mainTextInform = createElementWithDocumentCreateElement("div", undefined, "mainTextInform");
        const title = createElementWithDocumentCreateElement("div", undefined, "title");
        title.innerHTML = "FIND <u>ANYTHING</u> THAT MATCHES YOUR STYLE";
        const text = createElementWithDocumentCreateElement("div", "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.", "text");
        const button = createElementWithDocumentCreateElement("div", "Shop Now", "button-shopNow");

        const statisticPlace = createElementWithDocumentCreateElement("div",undefined, "statisticPlace");

        STATISTIC_DATA.forEach((item)=>{
            const statisticBox =  createElementWithDocumentCreateElement("div", undefined, "statisticBox");
            const statisticDigits = createElementWithDocumentCreateElement("div", item.amount, "h3");
            const statisticText = createElementWithDocumentCreateElement("div", item.description, "h4");

            statisticBox.append(...[statisticDigits, statisticText]);
            statisticPlace.append(statisticBox);
        })

        const bigStar = createElementForImages("div", "src/assets/icons/forHeroHomePage/bigStar.svg", "bigStar");
        bigStar.className = "bigStar";
        const smallStar = createElementForImages("div", "src/assets/icons/forHeroHomePage/smallStar.svg", "smallStar");
        smallStar.className = "smallStar";

        mainTextInform.append(...[title, text, button,statisticPlace]);
        mainText.append(...[mainTextInform, bigStar, smallStar]);
    
        const categoriesTitle = createElementWithDocumentCreateElement("div", "Categories", "categoriesTitle");
        const categoriesGrid = createElementWithDocumentCreateElement('div', undefined, "categoriesGrid"); 

        const categories = await getCategories();
        
        categories.forEach(category => {
            const categoryCard = createElementWithDocumentCreateElement('div', undefined, 'cardCell');
            const categoryContentCard = createElementWithDocumentCreateElement('div', undefined, 'card-content');
            const cardContent = createElementWithDocumentCreateElement('div',category.name, "content", () =>  router.navigate(`/${category.slug}`));
            categoryContentCard.appendChild(cardContent)
            categoryCard.appendChild(categoryContentCard)
            categoriesGrid.appendChild(categoryCard);
        })

        categoriesBox.append(...[categoriesTitle, categoriesGrid]);
        hero.append(...[mainText, labelsBox]);
        mainContent.append(...[hero, categoriesBox]);
        
        mainElements.append(mainContent);
        return new Promise<HTMLElement> ((resolve) => resolve (mainElements));

    }
}