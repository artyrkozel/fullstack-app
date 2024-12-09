'use client';

import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getBlockList } from '../../../shared/api/generated';
import Button from '@/shared/ui/Button/Button';
import { Page } from '@/shared/ui/Page/Page';

export default function TestPage() {
    const router = useRouter();
    const { data: test } = useQuery({
        queryKey: ['tes34234t11'],
        queryFn: async () => getBlockList().userControllerFindOne('32d3cc14-8bbb-4abf-a93e-07ce15db9559'),
    });

    const { data: test2 } = useQuery({
        queryKey: ['42342'],
        queryFn: async () => getBlockList().userControllerFindOne('32d3cc14-8bbb-4abf-a93e-07ce15db955') as any,
    });

    const { mutate: logout } = useMutation({
        mutationFn: () => {
            return getBlockList().authControllerLogout();
        },
        onSuccess: () => {
            localStorage.removeItem('token');
            router.push('/login');
        },
    });

    const handleLogout = async () => {
        logout();
    };

    return (
        <Page>
            <div>{test?.email}</div>
            <div>{test2?.email}</div>
            <div>
                <Button onClick={handleLogout}>logout</Button>
            </div>
        </Page>
    );
}
