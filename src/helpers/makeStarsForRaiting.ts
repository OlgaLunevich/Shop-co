export function makeStarsForRaiting (raiting: number) {
    
    const starsArray: string[] = [];
    const star = "/src/assets/icons/stars/starForRaiting.svg";
    const halfStar = "/src/assets/icons/stars/halfStarForRaiting.svg";

    const wholePart = Math.trunc(raiting);
    const fractionPart = raiting -wholePart;

    for (let i = wholePart; i > 0; i--) {
        starsArray.push(star);
    }
    if (fractionPart > 0.5) {
        starsArray.push(halfStar);
    } 
    
    return starsArray;
}