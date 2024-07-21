import Navigo from "navigo";

import { homePage } from "../../pages/homePage.ts";
import { categoryPage } from "../../pages/categoryPage.ts";
import { productDetailPage } from "../../pages/productDetailPage";

const router = new Navigo('/');

function handleRouteChange(
  handler: (params?: any) => Promise<HTMLElement>,
  params?: unknown,
) {
 
  const app = document.querySelector<HTMLDivElement>('main');
  
  if (app) {
    console.log('handleRouteChange app');
    console.log('params',params);

    handler(params).then((page) => {
      console.log('handleRouteChange page', page);

    });
  }
}


router
  .on({
    '/': () => handleRouteChange(homePage),
    '/:categoryId': (params: { data: { categoryId: string } }) =>
      handleRouteChange(categoryPage, params),
    '/:categoryId/:productId': (params: { data: { categoryId: string } }) =>
      handleRouteChange(productDetailPage, params),
  })
  .resolve();


export default router;