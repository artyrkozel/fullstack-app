import { memo, ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';
import { Text } from '@/shared/ui/Text/Text';

interface PageProps {
    className?: string;
    children: ReactNode;
    pageTitle?: string;
}

export const Page = memo(({ className, pageTitle = '', children }: PageProps) => {
    return (
        <main className={cn('py-10 px-16 grow h-screen shrink overflow-auto bg-bg-page', {}, [className || ''])}>
            <Text title={pageTitle} className="mb-11 font-bold" />
            {children}
        </main>
    );
});
