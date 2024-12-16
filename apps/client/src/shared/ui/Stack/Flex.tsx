import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around';
export type FlexAlign = 'start' | 'center' | 'end' | 'normal';
export type FlexDirection = 'row' | 'col';
export type FlexGap = '1' | '2' | '3' | '4';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        ...otherProps
    } = props;

    const classes = cn(
        'flex', 
        justify && `justify-${justify}`,
        align && `items-${align}`,
        direction && `flex-${direction}`,
        gap && `gap-${gap}`,
        max && 'w-full h-full',
        className,
    );

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};
