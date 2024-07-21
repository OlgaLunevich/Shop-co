import { Product } from "../../types";

export function sortByDescending (products:Product[]) {
    
    const productsByAscending = products.sort(function(a,b){
        return  b.price - a.price;
    })
   return productsByAscending;
}