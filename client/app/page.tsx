'use client';

import { useQuery } from '@tanstack/react-query';
import { getBlockList } from './api/generated';

export default function Home() {
    const { data } = useQuery({
        queryKey: ['test'],
        queryFn: async () => getBlockList().userControllerFindOne('eewfwef23f2'),
    });
    console.log(data);
    return <div>main</div>;
}
