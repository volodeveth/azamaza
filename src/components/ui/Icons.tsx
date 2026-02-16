interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function MarketplacesIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M2 3h16v2H2V3zm0 4h4v10H2V7zm6 0h4v10H8V7zm6 0h4v10h-4V7z" fill={color} />
    </svg>
  );
}

export function PhotoIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2" y="4" width="16" height="12" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="10" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="5" cy="7" r="0.75" fill={color} />
    </svg>
  );
}

export function RentIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M13.5 3.5C13.5 5.5 16 7 16 7s-4 0-8 0S0 7 0 7s2.5-1.5 2.5-3.5" transform="translate(2, 3)" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M12 5l2-3M4 12l-2 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function HotelsIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="3" y="2" width="14" height="16" rx="1" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="6" y="5" width="3" height="3" rx="0.5" fill={color} />
      <rect x="11" y="5" width="3" height="3" rx="0.5" fill={color} />
      <rect x="6" y="10" width="3" height="3" rx="0.5" fill={color} />
      <rect x="11" y="10" width="3" height="3" rx="0.5" fill={color} />
      <rect x="8" y="15" width="4" height="3" fill={color} />
    </svg>
  );
}

export function RestaurantsIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M3 8h14M5 8c0-3 2-5 5-5s5 2 5 5M4 8v2c0 1 1 2 2 2h1v5h6v-5h1c1 0 2-1 2-2V8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function MeetIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="7" cy="6" r="2.5" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="13" cy="6" r="2.5" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M2 16c0-3 2-5 5-5s5 2 5 5" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M10 16c0-3 2-5 5-5s3 2 3 5" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function AppSubscriptionIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="5" y="1" width="10" height="18" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <line x1="8" y1="16" x2="12" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TaxiIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M3 12h14l-1-5H4L3 12z" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M6 7l1-3h6l1 3" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="6" cy="14" r="1.5" fill={color} />
      <circle cx="14" cy="14" r="1.5" fill={color} />
      <path d="M3 12v4h3M14 16h3v-4" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function GridIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2" y="2" width="7" height="7" rx="1.5" fill={color} />
      <rect x="11" y="2" width="7" height="7" rx="1.5" fill={color} />
      <rect x="2" y="11" width="7" height="7" rx="1.5" fill={color} />
      <rect x="11" y="11" width="7" height="7" rx="1.5" fill={color} />
    </svg>
  );
}

export function SearchIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="2" fill="none" />
      <path d="M16 16l4.5 4.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PersonIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="2" fill="none" />
      <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}

export function ChevronDownIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="2" fill="none" />
      <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="2" />
      <line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6l12 12M18 6L6 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BurgerIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 6h18M3 12h18M3 18h18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowLeftIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15 18l-6-6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
