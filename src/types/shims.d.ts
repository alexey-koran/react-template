declare module '*.svg' {
  import type { FC, JSX } from 'react';

  const content: FC<JSX.IntrinsicElements['svg']>;

  export = content;
}

declare module '*.svg?url' {
  const content: string;

  export = content;
}

declare module '*.png' {
  const content: string;

  export = content;
}

declare module '*.jpg' {
  const content: string;

  export = content;
}

declare module '*.jpeg' {
  const content: string;

  export = content;
}

declare module '*.webp' {
  const content: string;

  export = content;
}

declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>;

  export = classes;
}

declare module '*.module.pcss' {
  const classes: Readonly<Record<string, string>>;

  export = classes;
}
