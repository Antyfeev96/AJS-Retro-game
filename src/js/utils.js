/* eslint-disable max-len */
/* eslint-disable consistent-return */
export function calcTileType(index, boardSize) {
  // TODO: write logic here
  if (index === 0) {
    return 'top-left';
  }

  if (index > 0 && index < 7) {
    return 'top';
  }

  if (index === 7) {
    return 'top-right';
  }

  if (index === 15 || index === 23 || index === 31 || index === 39 || index === 47 || index === 55) {
    return 'right';
  }

  if (index === 8 || index === 16 || index === 24 || index === 32 || index === 40 || index === 48) {
    return 'left';
  }

  if ((index > 8 && index < 15)
    || (index > 16 && index < 23)
    || (index > 24 && index < 31)
    || (index > 32 && index < 39)
    || (index > 40 && index < 47)
    || (index > 48 && index < 55)) {
    return 'center';
  }

  if (index === 56) {
    return 'bottom-left';
  }

  if (index > 56 && index < 63) {
    return 'bottom';
  }

  if (index === 63) {
    return 'bottom-right';
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
