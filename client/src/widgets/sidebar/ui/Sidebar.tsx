'use client';

import { ROUTES } from '@/shared/constants/routes';
import Button from '@/shared/ui/Button/Button';
import { Logo } from '@/shared/ui/Logo/Logo';
import { cva } from 'class-variance-authority';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface ISidebar {
    className?: string;
}

export function Sidebar({ className }: ISidebar) {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();

    if ([ROUTES.LOGIN, ROUTES.REGISTER].includes(pathname as string)) {
        return null;
    }

    return (
        <aside className={sidebarVariants({ className, variant: collapsed ? 'shorten' : 'extended' })}>
            <Logo collapsed={collapsed} />
            Sidebar
            <Button variant="primary" onClick={() => setCollapsed((prev) => !prev)}>
                {collapsed ? '>' : '<'}
            </Button>
        </aside>
    );
}

const sidebarVariants = cva('px-8 py-[30px] h-screen bg-secondary transition-all duration-300 ease-in-out', {
    variants: {
        variant: {
            extended: 'min-w-[312px] max-w-[312px]',
            shorten: 'min-w-28 max-w-28',
        },
    },
    defaultVariants: {
        variant: 'extended',
    },
});
