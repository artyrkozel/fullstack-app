import { Page } from '@/shared/ui/Page/Page';
import { HStack } from '@/shared/ui/Stack';
import { Wallet } from '@/widgets/wallet';

export default function DashboardPage() {
    return (
        <Page pageTitle="Dashboard">
            <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-10">
                <div className="col-span-1 row-span-1">
                    <Wallet />
                </div>
                <div className="col-span-2 row-span-1 bg-slate-300">
                    <HStack align='center'>
                        <div className="bg-red h-[60px]">
                            <div>dfdf</div>
                        </div>
                        <div className="bg-amber-400">dfdfd</div>
                    </HStack>
                </div>
                <div className="col-span-1 row-span-1 bg-slate-300">Leaderboard</div>
            </div>
        </Page>
    );
}
