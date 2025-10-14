import {FC, memo, PropsWithChildren} from 'react';

interface SpotlightCardProps {
  className?: string;
}

const SpotlightCard: FC<PropsWithChildren<SpotlightCardProps>> = memo(({children, className = ''}) => {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
});

SpotlightCard.displayName = 'SpotlightCard';
export default SpotlightCard;
