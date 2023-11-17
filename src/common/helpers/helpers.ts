export const debounce = (fn: Function, ms = 100) => {
  let timer: ReturnType<typeof setTimeout>;
  return function (e: Event) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(e), ms);
  };
};

export const stringToReactHtml = (string: String) => {
  return { __html: string };
};

/**
 * Return an object after deleting properties by value.
 * @param obj Object to modify
 * @param values Array of values to remove
 */
export function deleteObjectPropertyByValue(obj: object = {}, values: Array<String> = []) {
  for (const key in obj) {
    if (values.includes(obj[key as keyof typeof obj])) {
      delete obj[key as keyof typeof obj];
    }
  }
  return obj;
}

/**
 * Convert an object to an array of only its values.
 * Used when importing enums in component stories for populating argType dropdowns.
 * @param {*} options
 *  imported enums object
 */
export function createOptionsArray(options: object = {}) {
  const optionsArray: Array<string> = [];

  Object.keys(options).map((key) => {
    optionsArray.push(options[key as keyof typeof options]);
  });

  return optionsArray;
}

/**
 * Return an object of color palette labels for a Storybook select control.
 * Each property of the object has a key of the css class (COLOR_PALETTE_VALUES)
 * and a value of the friendly label name (COLOR_PALETTE_LABELS)
 * Example: {
 *   [COLOR_PALETTE_VALUES.DARK_STONE]: COLOR_PALETTE_LABELS.DARK_STONE,
 *   ...
 * }
 * @param labels Object of color palette labels (COLOR_PALETTE_LABELS)
 * @param values Object of color palette values (COLOR_PALETTE_VALUES)
 */
export function createColorPaletteLabels(labels: object = {}, values: object = {}) {
  const optionsLabels: {[index: string]:string} = {}

  const labelKeys =  Object.keys(labels);

  labelKeys.map((key: string) => {
    if (key in values) {
      optionsLabels[values[key as keyof typeof values]] = labels[key as keyof typeof labels];
    }
  })

  return optionsLabels;
}
