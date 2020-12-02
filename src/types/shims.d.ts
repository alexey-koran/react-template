/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
