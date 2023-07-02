export const formatObjectkey = (key: string): string => {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => {
    return str.toUpperCase();
  });
};

export const commaStringToNumber = (str: string): number => {
  return nanToZeroValue(str.replace(/,/g, ""));
};

export const formateKey = (key: string): string => {
  const words = key.split(" ");
  const newWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return newWords.join("");
};

export const nanToZeroValue = (value: string) => {
  if (isNaN(parseFloat(value))) {
    return parseFloat("0");
  }
  return parseFloat(value);
};

export const checkInputValue = (value: string | undefined | number | null) => {
  if (value == 0 || value === null || value === undefined) {
    return false;
  }
  return true;
};

export const checkIfValueIsInput = (formData: { [key: string]: number }) => {
  const keys = Object.keys(formData);
  for (let i = 0; i < keys.length; i++) {
    if (formData[keys[i]!] === 0) {
      return false;
    }
  }
  return true;
};
