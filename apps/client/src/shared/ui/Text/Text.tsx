import { cva } from 'class-variance-authority';
import { memo } from 'react';
import { cn } from '@/shared/lib/cn';

export enum TextColor {
    primary = 'primary',
    secondary = 'secondary',
    grey = 'grey',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    XS = 'size_xs',
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    uppercase?: boolean;
    align?: TextAlign;
    size?: TextSize;
    color?: TextColor;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.XS]: 'h4',
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        size = TextSize.M,
        color = TextColor.secondary,
        align,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <>
            {title && (
                <HeaderTag
                    className={cn(titleVariants({ size, color }), className)}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={cn('', textVariants({ size, color, align }), className)}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </>
    );
});

Text.displayName = 'Input';
const titleVariants = cva('', {
    variants: {
        size: {
            [TextSize.XS]: 'text-lg',
            [TextSize.S]: 'text-2xl',
            [TextSize.M]: 'text-[27px]',
            [TextSize.L]: 'text-[32px]',
        },
        color: {
            primary: 'text-primary',
            secondary: 'text-secondary',
            grey: 'text-grey',
        },
    },
});

const textVariants = cva('', {
    variants: {
        size: {
            [TextSize.XS]: 'text-xs',
            [TextSize.S]: 'text-sm',
            [TextSize.M]: 'text-base',
            [TextSize.L]: 'text-2xl',
        },
        align: {
            [TextAlign.RIGHT]: 'text-right',
            [TextAlign.LEFT]: 'text-left',
            [TextAlign.CENTER]: 'text-center',
        },
        color: {
            primary: 'text-primary',
            secondary: 'text-secondary',
            grey: 'text-grey-dark',
        },
    },
});
