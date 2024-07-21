export const createElementForInput =  (pid: string, classes: string, ptype: string, placeholder: string, handler?: (this: GlobalEventHandlers, ev: MouseEvent) => any) => {

    const tag = "input";
    const elem = document.createElement(tag);
    elem.setAttribute('id' , pid);
    elem.setAttribute('class' , classes);
    elem.setAttribute('type' , ptype);
    elem.setAttribute('placeholder' , placeholder);
    if (handler) {
      elem.addEventListener('click', handler);
    }
    return elem;
}