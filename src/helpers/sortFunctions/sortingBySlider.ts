import { Product } from "../../types";

export function sortingBySlider(item:Product ) {
    let minValue = +((<HTMLInputElement>document.querySelector("#minPrice")!).value);
    let maxValue = +((<HTMLInputElement>document.querySelector("#maxPrice")!).value);
        if (minValue < 1) {
            minValue = 1;
        } 
        if ((maxValue < 1)||(maxValue > 100000)) {
            maxValue = 100000;
        } 
        if ((item.price >= minValue) && (item.price <= maxValue)) {
            return true;
        } return false;
}