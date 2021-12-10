import classNames from 'classnames';
import LazyLoad from 'vanilla-lazyload';

import { useEffect } from 'react';
import type {
  FunctionComponent,
  DetailedHTMLProps,
  ImgHTMLAttributes,
} from 'react';

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    threshold: 500,
  });
}

interface LazyImageProps
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  alt: string;
}

export const LazyImage: FunctionComponent<LazyImageProps> = ({
  src,
  srcSet,
  sizes,
  alt,
  className,
  ...props
}) => {
  useEffect(() => {
    document.lazyLoadInstance.update();
  }, []);

  return (
    <img
      className={classNames(className, 'lazy')}
      data-src={src}
      data-srcset={srcSet}
      data-sizes={sizes}
      {...props}
      alt={alt}
    />
  );
};
