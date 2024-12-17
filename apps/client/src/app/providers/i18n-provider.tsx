import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export async function IntlProvider({ children }: { children?: ReactNode }) {
    const messages = await getMessages();
    return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
