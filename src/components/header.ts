import { createElementWithDocumentCreateElement } from "../helpers/createElementWithDocumentCreateElement";
import { createElementForImages } from "../helpers/createElementForImages";

export const Header = () => {
    const headerElement = document.querySelector<HTMLDivElement>('header');
    if(headerElement) {
        headerElement.innerHTML = `
            <div class = "headerContainer ">
                <div class = "popUpMessage" id="pop-up"></div>
                <div class = "nav">
                     <div class = "logo" id="logo"></div>
                     <div class = "item" id="nav-items"></div>
                </div>     
            </div>
        `
    }

    const discount = createElementWithDocumentCreateElement('div', undefined, "discount");
    const disc = createElementWithDocumentCreateElement('div','Sign up and get 20% off to your first order.');
    const signUp = createElementWithDocumentCreateElement('span','Sign Up Now.', "span");
    discount.append(...[disc, signUp]);

    const close = createElementForImages('div','/src/assets/icons/forHeader/crossForClose.svg','to close');

    const logo = createElementWithDocumentCreateElement('div', 'SHOP.CO');

    const bin = createElementForImages('div','/src/assets/icons/forHeader/bin.svg','bin');

    const authorizeIcon = createElementForImages('div','/src/assets/icons/forHeader/authorisation.svg','authorizeIcon');

    headerElement?.querySelector('#pop-up')?.append(discount);
    headerElement?.querySelector('#pop-up')?.append(close);
    headerElement?.querySelector('#logo')?.append(logo);
    headerElement?.querySelector('#nav-items')?.append(bin);
    headerElement?.querySelector('#nav-items')?.append(authorizeIcon);

    return headerElement;

}




// export const Header = () => {
//     const headerElem = document.querySelector<HTMLDivElement>('header');
//     if(headerElem) {
//         const nav = document.createElement('nav');
//         nav.className = 'nav-bar';

//         const logo = document.createElement('div');
//         logo.className = 'navbar-brand';
//         logo.className = 'is-size-1';
//         logo.className = 'is-uppercase';
//         logo.className = 'has-text-weight-semibold';
//         logo.innerText = 'SHOP.CO';

        
//         const navFunctionality = document.createElement('div');
//         navFunctionality.className = 'navbar-end';


//         const bin = document.createElement('div');
//         bin.innerHTML = `<img src = "src/assets/images/forHeader/bin.svg" alt= "bin">`;
//         bin.className = 'image is-square';
        

//         const authorizeIcon = document.createElement('div');
//         authorizeIcon.innerHTML = `<img src = "src/assets/images/forHeader/authorisation.svg" alt = "authorizeIcon">`;
//         authorizeIcon.className = 'image is-square';
        

//         // place for router if it's needed
        
//         navFunctionality.append(bin);
//         navFunctionality.append(authorizeIcon);

//         nav.append(logo);
//         nav.append(navFunctionality);
//         return nav;

//     }



//     console.log("sdfghjkl;'");
//     return headerElem;
    
//   }