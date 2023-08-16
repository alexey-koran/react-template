declare module '*.svg' {
  import type { FC, JSX } from 'react';

  const content: FC<JSX.IntrinsicElements['svg']>;

  export default content;
}

declare module '*.svg?url' {
  const content: string;

  export default content;
}

declare module '*.png' {
  const content: string;

  export default content;
}

declare module '*.jpg' {
  const content: string;

  export default content;
}

declare module '*.jpeg' {
  const content: string;

  export default content;
}

declare module '*.webp' {
  const content: string;

  export default content;
}

declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>;

  export default classes;
}

declare module '*.module.pcss' {
  const classes: Readonly<Record<string, string>>;

  export default classes;
}
