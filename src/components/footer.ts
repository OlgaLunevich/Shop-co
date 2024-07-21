import { DATABASE_FOOTER } from "../data/data.ts";
import { SOCIAL_NETWORKS } from "../data/data.ts";
import { PAMENTS } from "../data/data.ts";

import { createElementForImages } from "../helpers/createElementForImages";
import { createElementWithDocumentCreateElement } from "../helpers/createElementWithDocumentCreateElement";
import { createElementForInput } from "../helpers/createElementForInput";


export const Footer = () => {
    const footerElements = document.querySelector<HTMLDivElement>('footer');
        if(footerElements) {
            footerElements.innerHTML = `
                <div class = "footerConteiner">
                    <div class = "box-Stay" id = "form-component">
                    
                     <div id = "input-fields"></div>
                    </div> 

                    <div id = "full-information" class = "container">
                        <div id = "full-information-columns" class = "full-information-columns">
                            <div id = "full-information-first-column" class = "full-information-first-column"></div>
                        </div>
                        <div id = "rightsPaments" class = "rightsPaments"></div>
                    </div>
                </div>
            ` 
        }


    const stay = createElementWithDocumentCreateElement('div','STAY UPTO DATE ABOUT OUR LATEST OFFERS','stay',);    
    
    const inputFields = footerElements?.querySelector('#input-fields');
    inputFields!.className ="inputFields";

    const emailInput = createElementForInput("email", "email", "email", "Enter your email address");
    inputFields?.append(emailInput);

    const subscribe = createElementWithDocumentCreateElement ("button","Subscribe to Newsletter","button");
    inputFields?.append(subscribe);

    const fullInformation = footerElements?.querySelector('#full-information-first-column');

    const shopCoTitle = createElementWithDocumentCreateElement("div", "SHOP.CO", "shop-class");
    const shopCoText = createElementWithDocumentCreateElement("div", "We have clothes that suits your style and which you're proud to wear. From women to men.", "shopCoText");

    const shopCoSocials = createElementWithDocumentCreateElement("div", "", "shop-social");
    SOCIAL_NETWORKS.forEach((item)=> {
        shopCoSocials.append(createElementForImages("div", `/${item.src}`, item.alt));
    })
    fullInformation?.append(shopCoTitle);
    fullInformation?.append(shopCoText);
    fullInformation?.append(shopCoSocials);

    const fullInformationColumns = footerElements?.querySelector('#full-information-columns');

    DATABASE_FOOTER.forEach((item)=> {
        const column = createElementWithDocumentCreateElement('div', undefined, "column");
        const columnTitle = createElementWithDocumentCreateElement('div',item.title, "columnTitle");
        column.append(columnTitle);

        item.positions.forEach((el) => {
            const link = createElementWithDocumentCreateElement('a', el, "link");
            link.setAttribute("href", "#2");
            column.append(link);
        })
        
        fullInformationColumns?.append(column);
    })

    const rightsPaments = footerElements?.querySelector('#rightsPaments');
    const rights = createElementWithDocumentCreateElement('div', 'Shop.co © 2000-2023, All Rights Reserved', );
    rightsPaments?.append(rights);
    

    const pamentsLogos = createElementWithDocumentCreateElement('div', undefined, "pamentsLogos");
    rightsPaments?.append(pamentsLogos);

    PAMENTS.forEach((item) => {
        const pay = createElementForImages('div',`/${item.src}`, item.alt);
        pamentsLogos?.append(pay);
    })

    footerElements?.querySelector('#form-component')?.prepend(stay);

    return footerElements;

}


