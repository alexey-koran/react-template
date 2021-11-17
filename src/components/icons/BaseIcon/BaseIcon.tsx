import classNames from 'classnames';

import type {
  FunctionComponent,
  HTMLAttributes,
} from 'react';

import styles from './BaseIcon.scss';

type BaseIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Map = {
  [key in BaseIconSize]: string;
};

const baseIconSize: Map = {
  xs: 'size-xs',
  sm: 'size-sm',
  md: 'size-md',
  lg: 'size-lg',
  xl: 'size-xl',
};

export interface BaseIconProps extends HTMLAttributes<HTMLElement> {
  size?: BaseIconSize;
}

export const BaseIcon: FunctionComponent<BaseIconProps> = ({
  size,
  className,
  children,
  ...restProps
}): JSX.Element => (
  <i
    className={classNames(
      styles['icon-body'],
      size && styles[baseIconSize[size]],
      restProps.onClick && styles['icon-clickable'],
      className,
    )}
    {...restProps}
  >
    {children}
  </i>
);
