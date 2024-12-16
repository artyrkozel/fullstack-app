import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/shared/lib/cn';

interface ILogo {
    collapsed: boolean;
    className?: string;
}

export const Logo = ({ collapsed, className }: ILogo) => {
    return (
        <Link href="/" className={cn('flex items-center', className)}>
            <Image src="/images/logo-short.svg" alt="Logo" width={50} height={50} />
            {!collapsed && <span className="text-slate-50 text-3xl">InCrypto</span>}
        </Link>
    );
};
