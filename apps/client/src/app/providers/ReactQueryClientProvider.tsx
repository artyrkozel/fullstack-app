'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientConfig } from '@/shared/config/react-query.config';

const queryClient = new QueryClient(queryClientConfig);

export const ReactQueryClientProvider = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
