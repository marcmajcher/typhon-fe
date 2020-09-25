export default function getMenuItemMaker(width) {
  return function getMenuItem(text, fill = '-') {
    const columns = width - 6;
    const left = fill.repeat((columns - 4) / 2 - Math.floor(text.length / 2));
    const right = fill.repeat((columns - 4) / 2 - Math.ceil(text.length / 2));
    return `[ ${left} ${text.toUpperCase()} ${right} ]`;
  }
}
