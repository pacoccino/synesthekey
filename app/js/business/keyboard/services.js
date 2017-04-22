const PALETTE_LS_KEY = 'palette';

export function storePalette(palette) {
  try {
    const serialized = JSON.stringify(palette);
    localStorage.setItem(PALETTE_LS_KEY, serialized);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
export function getPalette() {
  try {
    const serialized = localStorage.getItem(PALETTE_LS_KEY);
    return JSON.parse(serialized);
  } catch (e) {
    console.error(e);
  }
}