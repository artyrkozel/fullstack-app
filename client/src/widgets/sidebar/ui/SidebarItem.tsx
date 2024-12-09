'use client';

import { cn } from '@/shared/lib/cn';
import { SidebarItemType } from '@/shared/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const pathName = usePathname();

    return (
        <Link
            className={cn(
                'flex align-middle font-semibold mb-3 text-base py-4 px-3 text-grey-dark hover:text-white',
                item.path === pathName ? 'text-white' : '',
            )}
            href={item.path}
        >
            {item.Icon && <item.Icon />}
            {!collapsed && <span className="pl-4 text-gray">{item.text}</span>}
        </Link>
    );
});
