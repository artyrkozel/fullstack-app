'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { setUserLocale } from '@/shared/queries/locale';
import Button from '@/shared/ui/Button/Button';

interface ILangSwitcher {
    lang: string;
}

export const LangSwitcher = ({ lang }: ILangSwitcher) => {
    const locale = useLocale();

    const [isPending, startTransition] = useTransition();

    const handleSwitchLang = async (newLocale: 'en' | 'ru') => {
        startTransition(async () => {
            await setUserLocale(newLocale);
        });
    };

    return (
        <>
            <Button onClick={() => handleSwitchLang(locale === 'en' ? 'ru' : 'en')} isLoading={isPending}>
                {lang === 'Русский' ? 'English' : 'Русский'}
            </Button>
        </>
    );
};
