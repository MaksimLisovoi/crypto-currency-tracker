const convertToShirt = params => {
  const sum = params.value;
  if (!sum) {
    return sum;
  }

  const sumStr = String(sum);

  // Convert the decimal value to a percentage
  if (sumStr.length > 9) {
    return `$${(sum / 1000000000).toFixed(3)} B`;
  } else if (sumStr.length > 6) {
    return `$${(sum / 1000000).toFixed(2)} M`;
  }
};

const roundSum = params => {
  if (!params.value) {
    return params.value;
  }
  // Convert the decimal value to a percentage
  return `$${params.value.toFixed(2)}`;
};

export { convertToShirt, roundSum };
