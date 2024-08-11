export const javaScriptExtensionsObj = {
  default: 'js',
  commonJS: 'cjs',
  esm: 'mjs',
  react: 'jsx',
  reactCommonJS: 'cjsx',
  reactESM: 'mjsx',
};

export const typeScriptExtensionsObj = {
  default: 'ts',
  commonJS: 'cts',
  esm: 'mts',
  react: 'tsx',
  reactCommonJS: 'ctsx',
  reactESM: 'mtsx',
};

const getExtensionsArr = ({ extensionsObj, options: { startsWithDot = false } = {} }) => {
  const extensionsArr = Object.values(extensionsObj);

  if (startsWithDot) {
    return extensionsArr.map((extension) => `.${extension}`);
  }

  return extensionsArr;
};

export const getExtensionsStr = ({ extensionsObj, options: { separator = '' } }) =>
  getExtensionsArr({ extensionsObj }).join(separator);

const getAllExtensionsArr = ({
  javaScriptExtensionsObj,
  typeScriptExtensionsObj,
  options: { startsWithDot = false },
}) => {
  return [
    ...getExtensionsArr({ extensionsObj: javaScriptExtensionsObj, options: { startsWithDot } }),
    ...getExtensionsArr({ extensionsObj: typeScriptExtensionsObj, options: { startsWithDot } }),
  ];
};

export const extensionsArr = getAllExtensionsArr({
  javaScriptExtensionsObj,
  typeScriptExtensionsObj,
  options: { startsWithDot: true },
});
