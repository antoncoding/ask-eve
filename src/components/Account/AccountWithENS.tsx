import { Address } from 'viem';
import { Avatar } from '@/components/Avatar/Avatar';
import { Name } from '../common/Name';

type AccountWithENSProps = {
  address: Address;
};

function AccountWithENS({ address }: AccountWithENSProps) {
  return (
    <div className="inline-flex items-center justify-start gap-2">
      <Avatar address={address} />
      <div className="inline-flex flex-col items-start justify-center gap-1">
        <div className="font-inter text-sm font-medium text-primary">
          <Name address={address} />
        </div>
        <span className="font-inter text-xs font-medium text-zinc-400">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
      </div>
    </div>
  );
}

export default AccountWithENS;
