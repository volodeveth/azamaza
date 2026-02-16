import {
  BsShopWindow,
  BsCamera,
  BsRepeat,
  BsBuilding,
  BsCupHot,
  BsPeople,
  BsPhone,
  BsTaxiFront,
  BsGrid,
  BsGeoAlt,
  BsSearch,
  BsCalendar3,
  BsChevronDown,
  BsX,
  BsList,
  BsArrowLeft,
} from "react-icons/bs";

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function MarketplacesIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return <BsShopWindow className={className} size={size} color={color} />;
}

export function PhotoIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return <BsCamera className={className} size={size} color={color} />;
}

export function RentIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return <BsRepeat className={className} size={size} color={color} />;
}

export function HotelsIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return <BsBuilding className={className} size={size} color={color} />;
}

export function RestaurantsIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return <BsCupHot className={className} size={size} color={color} />;
}

export function MeetIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return <BsPeople className={className} size={size} color={color} />;
}

export function AppSubscriptionIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return <BsPhone className={className} size={size} color={color} />;
}

export function TaxiIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return <BsTaxiFront className={className} size={size} color={color} />;
}

export function GridIcon({ className, size = 20, color = "currentColor" }: IconProps) {
  return <BsGrid className={className} size={size} color={color} />;
}

export function LocationIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return <BsGeoAlt className={className} size={size} color={color} />;
}

export function SearchIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return <BsSearch className={className} size={size} color={color} />;
}

export function CalendarIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return <BsCalendar3 className={className} size={size} color={color} />;
}

export function ChevronDownIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return <BsChevronDown className={className} size={size} color={color} />;
}

export function CloseIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return <BsX className={className} size={size} color={color} />;
}

export function BurgerIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return <BsList className={className} size={size} color={color} />;
}

export function ArrowLeftIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return <BsArrowLeft className={className} size={size} color={color} />;
}

export function PersonIcon({ className, size = 24, color = "currentColor" }: IconProps) {
  return <BsGeoAlt className={className} size={size} color={color} />;
}
