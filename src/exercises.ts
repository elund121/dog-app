/**
 *
 * @param ms delay in milliseconds
 * @returns a Promise that is resolved after ms milliseconds
 */
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Moves the element to the right by 100px over a duration of 1 second
 * @param el the element node object
 */
export function animateRight(el: HTMLElement) {
  let id = 0;

  // get element's left style
  const style = window.getComputedStyle(el);
  const left = style.getPropertyValue("left").replace("px", "");

  // set starting position
  let pos = parseInt(left);
  window.clearInterval(id);
  id = window.setInterval(frame, 1);
  function frame() {
    // stop when element is 100px to right of starting pos
    if (pos === 100) {
      clearInterval(id);
    } else {
      pos++;
      el.style.left = pos + "px";
    }
  }
}

/**
 * Removes duplicates from an array
 * @param xs the array
 * @returns a new array, with unique items
 */
export function removeDuplicates(xs: string[]) {
  return xs.filter((x, idx, s) => s.indexOf(x) === idx);
}
