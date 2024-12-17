import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

export async function IntlProvider({ children }: { children?: ReactNode }) {
    const messages = await getMessages();
    return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
