'use client';
import { ReactNode } from 'react';
import { ReactQueryClientProvider } from './ReactQueryClientProvider';

export function AppProvider({ children }: { children?: ReactNode }) {
    return <ReactQueryClientProvider>{children}</ReactQueryClientProvider>;
}
