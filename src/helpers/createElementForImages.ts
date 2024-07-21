export const createElementForImages = (tag: string, src: string, alt: string, handler?: (this: GlobalEventHandlers, ev: MouseEvent) => any) => {
    const elem = document.createElement(tag);
    const img = document.createElement("img");
    img.setAttribute('src' , src);
    img.setAttribute('alt' , alt);
    if (handler) {
      console.log(handler);
      img.addEventListener('click', handler);
    }
    elem.append(img);
    return elem;
}