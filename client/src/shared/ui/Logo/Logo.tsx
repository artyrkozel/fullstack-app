import Image from 'next/image';

interface ILogo {
    collapsed: boolean;
}

export const Logo = ({ collapsed }: ILogo) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/images/logo-short.svg" alt="Logo" width={50} height={50} />
            {!collapsed && <span className="text-slate-50 text-3xl">InCrypto</span>}
        </div>
    );
};
