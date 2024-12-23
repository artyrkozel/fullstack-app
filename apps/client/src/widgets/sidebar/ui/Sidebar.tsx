'use client';

import { cva } from 'class-variance-authority';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import DashboardIcon from '../../../../public/svg/DashboardIcon';
import Market from '../../../../public/svg/Market';
import Trade from '../../../../public/svg/Trade';
import { SidebarItem } from './SidebarItem';
import { ROUTES } from '@/shared/constants/routes';
import { Logout } from '@/shared/queries/auth-service';
import { SidebarItemType } from '@/shared/types/types';
import Button from '@/shared/ui/Button/Button';
import { Logo } from '@/shared/ui/Logo/Logo';
import { LangSwitcher } from '@/widgets/lang-switcher';

interface ISidebar {
    className?: string;
}

const sidebarItemsList: SidebarItemType[] = [
    {
        path: '/dashboard',
        text: 'Dashboard',
        Icon: DashboardIcon,
    },
    {
        path: '/test',
        text: 'Trade',
        Icon: Trade,
    },
    {
        path: '/ssrwatches',
        text: 'Actions',
        Icon: Market,
    },
];

export function Sidebar({ className }: ISidebar) {
    const { mutateAsync } = Logout();
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations('Sidebar');

    const menuList = useMemo(
        () => sidebarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />),
        [collapsed],
    );

    const handleLogout = async () => {
        await mutateAsync({});
        router.push(ROUTES.LOGIN);
    };

    if ([ROUTES.LOGIN, ROUTES.REGISTER].includes(pathname as string)) {
        return null;
    }

    return (
        <aside className={sidebarVariants({ className, variant: collapsed ? 'shorten' : 'extended' })}>
            <div>
                <Logo className="mb-16" collapsed={collapsed} />
                <>{menuList}</>
            </div>
            <div className="flex flex-col gap-5">
                <Button variant="primary" onClick={() => setCollapsed((prev) => !prev)}>
                    {collapsed ? '>' : '<'}
                </Button>
                <Button onClick={handleLogout} type="submit">
                    Logout
                </Button>
                <LangSwitcher lang={t('language')} />
            </div>
        </aside>
    );
}

const sidebarVariants = cva(
    'flex flex-col justify-between px-8 py-[30px] h-screen bg-secondary transition-all duration-300 ease-in-out',
    {
        variants: {
            variant: {
                extended: 'min-w-[312px] max-w-[312px]',
                shorten: 'min-w-[120px] max-w-[120px]',
            },
        },
        defaultVariants: {
            variant: 'extended',
        },
    },
);
