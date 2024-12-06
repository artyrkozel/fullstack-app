'use client';

import { useRouter } from 'next/navigation';
import { getBlockList } from '../api/generated';
import { useMutation, useQuery } from '@tanstack/react-query';
import Button from '../components/Button/Button';

export default function Test() {
    const router = useRouter();
    const { data: test } = useQuery({
        queryKey: ['tes34234t11'],
        queryFn: async () => getBlockList().userControllerFindOne('32d3cc14-8bbb-4abf-a93e-07ce15db9559') as any,
    });

    const { data: test2 } = useQuery({
        queryKey: ['42342'],
        queryFn: async () => getBlockList().userControllerFindOne('32d3cc14-8bbb-4abf-a93e-07ce15db9559') as any,
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
        <div>
            <div>{test?.email}</div>
            <div>{test2?.email}</div>
            <div>
                <Button onClick={handleLogout}>logout</Button>
            </div>
        </div>
    );
}
