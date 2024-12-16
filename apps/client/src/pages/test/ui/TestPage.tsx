'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { getBlockList } from '../../../shared/api/generated';
import { Page } from '@/shared/ui/Page/Page';

export default function TestPage() {
    const { data: test } = useQuery({
        queryKey: ['tes34234t11'],
        queryFn: async () => getBlockList().userControllerFindOne('32d3cc14-8bbb-4abf-a93e-07ce15db9559'),
    });

    const { data: test2 } = useQuery({
        queryKey: ['42342'],
        queryFn: async () => getBlockList().userControllerFindOne('32d3cc14-8bbb-4abf-a93e-07ce15db955') as any,
    });

    const { data: coinsList, isLoading } = useQuery({
        queryKey: ['fdfs'],
        queryFn: async () => getBlockList().coninsControllerGetCoinBuId('Qwsogvtv82FCd'),
    });

    if (isLoading) {
        return <div>...loading</div>
    }

    return (
        <Page>
            <div>{test?.email}</div>
            <div>{test2?.email}</div>
            <div>{coinsList?.iconUrl && <Image src={coinsList?.iconUrl} alt="Logo" width={200} height={200} />}</div>
        </Page>
    );
}
