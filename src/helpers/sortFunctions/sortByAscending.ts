import { Product } from "../../types";

export function sortByAscending (products:Product[]) {
    
    const productsByAscending = products.sort(function(a,b){
        return  a.price - b.price;
    })
   return productsByAscending;
}