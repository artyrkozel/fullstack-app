import { cn } from '@/shared/utils/cn';
import { memo, ReactNode } from 'react';
import { Text } from '@/shared/ui/Text/Text';

interface PageProps {
    className?: string;
    children: ReactNode;
    pageTitle?: string;
}

export const Page = memo(({ className, pageTitle = '', children }: PageProps) => {
    return (
        <main className={cn('py-16 px-10 grow h-screen shrink overflow-auto bg-bg-page', {}, [className || ''])}>
            <Text title={pageTitle} className="mb-11" />
            {children}
        </main>
    );
});
