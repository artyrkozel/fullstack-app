'use client';
import { queryClientConfig } from '@/shared/config/react-query.config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient(queryClientConfig);

export const ReactQueryClientProvider = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
