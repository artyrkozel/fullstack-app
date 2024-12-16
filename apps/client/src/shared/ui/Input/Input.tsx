'use client';

import { cva } from 'class-variance-authority';
import { ChangeEvent, InputHTMLAttributes, forwardRef, memo, useCallback } from 'react';
import InputMask from 'react-input-mask';
import { cn } from '@/shared/lib/cn';

export type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export interface IInputProps extends HTMLInputProps {
    className?: string;
    variant?: 'primary' | 'secondary';
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    value?: string;
    mask?: string;
    name: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ className, onChange, onChangeInput, type = 'string', placeholder, mask, name, value, ...rest }, ref) => {
        const onChangeHandler = useCallback(
            (e: ChangeEvent<HTMLInputElement>) => {
                onChangeInput && onChangeInput(e);
                onChange && onChange(e);
            },
            [onChangeInput, onChange],
        );

        return (
            <div className={cn('relative', className)}>
                <InputMask
                    className={cn(inputStyles())}
                    name={name}
                    mask={mask || ''}
                    maskChar=" "
                    alwaysShowMask={false}
                    onChange={onChangeHandler}
                    type={type}
                    placeholder={placeholder && placeholder.toUpperCase()}
                    inputRef={ref}
                    onBlur={rest.onBlur}
                    onFocus={rest.onFocus}
                    value={value?.toString()}
                    {...rest}
                />
            </div>
        );
    },
);
Input.displayName = 'Input';
export default memo(Input);

const inputStyles = cva(
    'w-full h-12 bg-white rounded-xl p-4 text-sm border border-grey focus:outline-none focus:border-secondary hover:border-secondary outline-0 transition ease-in-out delay-30 placeholder:text-xs',
);
