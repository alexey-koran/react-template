import {
  javaScriptExtensionsObj,
  typeScriptExtensionsObj,
  getExtensionsStr,
} from './extensions.js';

const javaScriptExtensionsStr = getExtensionsStr({
  extensionsObj: javaScriptExtensionsObj,
  options: { separator: ',' },
});

const typeScriptExtensionsStr = getExtensionsStr({
  extensionsObj: typeScriptExtensionsObj,
  options: { separator: ',' },
});

const allExtensionsStr = `${javaScriptExtensionsStr},${typeScriptExtensionsStr}`;

const supportedJsFileTypes = `**/*.{${javaScriptExtensionsStr}}`;
const supportedTsFileTypes = `**/*.{${typeScriptExtensionsStr}}`;
const supportedFileTypes = `**/*.{${allExtensionsStr}}`;

export { supportedJsFileTypes, supportedTsFileTypes, supportedFileTypes };
