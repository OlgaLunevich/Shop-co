import { Match } from "navigo";
import { createElementForImages } from "../helpers/createElementForImages";
import { createElementWithDocumentCreateElement } from "../helpers/createElementWithDocumentCreateElement";
import { getProductById } from "../app/api/api";
import { productDetailPageCard } from "../components/productDetailPageCard";
import { getCategories } from "../app/api/api";



export const productDetailPage  = async(match: Match) => {
   
   const mainElements = document.querySelector<HTMLDivElement>('main');
     if(mainElements){
        mainElements.innerHTML = '';
        
        const currentDataProductId = match?.data?.productId;
        const productFound = await getProductById(currentDataProductId);
        
        let currentCategoryTitle = "";
        const categories = await getCategories();

        categories.forEach(category => {
          if (category.slug === productFound.category) {
            currentCategoryTitle = category.name;

          }
        })

        const mainContent = createElementWithDocumentCreateElement("div", undefined, "productDetailPage ");
        mainElements.append(mainContent); 
        
        const breadCrumbs = createElementWithDocumentCreateElement("div", undefined, "breadCrumbs"); 
        const homelink = createElementWithDocumentCreateElement("a", "Home", 'home-link');
        homelink.setAttribute('href', '/');
        const categotylink = createElementWithDocumentCreateElement("a", currentCategoryTitle, 'categoty-link');
        categotylink.setAttribute('href', '/' + productFound.category);
        const breadCrumbsArrow1 = createElementForImages("div", "/src/assets/icons/breadCrumbsArrow.svg", "breadCrumbsArrow");
        const breadCrumbsArrow2 = createElementForImages("div", "/src/assets/icons/breadCrumbsArrow.svg", "breadCrumbsArrow");        
        const currentProductIdLink = createElementWithDocumentCreateElement("div", productFound.title, 'currentProductId-Link');

        breadCrumbs.append(...[homelink, breadCrumbsArrow1, categotylink, breadCrumbsArrow2, currentProductIdLink]);
              
        const productPlace = createElementWithDocumentCreateElement("div", undefined, "productPlace");
        mainContent.append(...[breadCrumbs, productPlace]);

        const productImagesgPlace = createElementWithDocumentCreateElement("div", undefined, "productImagesgPlace");
        const productInformationPlace = createElementWithDocumentCreateElement("div", undefined, "productInformationPlace");
        productPlace.append(...[productImagesgPlace, productInformationPlace]); 

        const smallImages = createElementWithDocumentCreateElement("div", undefined, "smallImages");
        const bigImage = createElementWithDocumentCreateElement("div", undefined, "bigImage");
      
        productImagesgPlace.append(...[smallImages, bigImage]);

        const randomIndex = Math.floor(Math.random()*productFound.images.length);
        console.log(productFound.images.length);
         if (productFound.images.length <= 3) {
              productFound.images.forEach((item, index)=> {
              const imgClassName = (index === randomIndex ? "smallImg picture-border" : "smallImg")
              const im = createElementForImages("div", item, "picture");
              im.className = imgClassName;
              smallImages.append(im);
            })
          } else {
              productFound.images.forEach((item, index)=> {
                  if (index !== randomIndex) {
                    const im = createElementForImages("div", item, "picture");
                    im.className = "smallImg" ;             
                    smallImages.append(im);
                  }
              })
          }

        // productFound.images.forEach((item, index) => {
        //     const imgClassName = (index === randomIndex ? "smallImg picture-border" : "smallImg")
        //     const im = createElementForImages("div", item, "picture");
        //     im.className = imgClassName;
        //     smallImages.append(im);
        // })
       
       const mainIm = createElementForImages("div", productFound.images[randomIndex], "picture");
       mainIm.className = "mainIm";
       bigImage.append(mainIm);

       const abouProduct = productDetailPageCard(productFound);
       productInformationPlace.append(abouProduct);
       
     }
  return mainElements;
}    