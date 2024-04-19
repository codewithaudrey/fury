import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type TextElement<TAs extends React.ElementType> = React.ElementRef<TAs>;

type RemovedProps<TAs extends React.ElementType> = {
  as?: TAs;
  className?: string;
};

type TextProps<TAs extends React.ElementType> = RemovedProps<TAs> &
  Omit<ComponentPropsWithoutRef<TAs>, keyof RemovedProps<TAs>>;

const Text = forwardRef(
  <TAs extends React.ElementType>(
    props: TextProps<TAs>,
    ref: React.ForwardedRef<TextElement<'span'>>
  ) => {
    const { as, className, m, ...rest } = props;

    const Component = as || 'span';

    return (
      <Component
        className={twMerge(
          'text-[2.0rem] font-medium tracking-[-0.035rem]',
          className
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Text;
