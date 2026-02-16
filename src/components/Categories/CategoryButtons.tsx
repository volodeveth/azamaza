"use client";

import { useState } from "react";
import { categories } from "@/data/categories";
import {
  MarketplacesIcon,
  PhotoIcon,
  RentIcon,
  HotelsIcon,
  RestaurantsIcon,
  MeetIcon,
  AppSubscriptionIcon,
  TaxiIcon,
  GridIcon,
} from "@/components/ui/Icons";
import ImageOverlay from "@/components/ui/ImageOverlay";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  marketplaces: MarketplacesIcon,
  photo: PhotoIcon,
  rent: RentIcon,
  hotels: HotelsIcon,
  restaurants: RestaurantsIcon,
  meet: MeetIcon,
  "app-subscription": AppSubscriptionIcon,
  taxi: TaxiIcon,
};

export default function CategoryButtons() {
  const [isCategoriesPageOpen, setIsCategoriesPageOpen] = useState(false);

  return (
    <>
      <section className="px-4 py-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <a
                key={category.id}
                href={category.href}
                className="inline-flex items-center gap-1 rounded-3xl border border-primary-blue px-4 py-1.5 font-onest text-base leading-[22px] tracking-tight text-primary-blue transition-colors hover:bg-primary-blue/5"
              >
                {IconComponent && <IconComponent size={20} color="#006CE4" />}
                <span>{category.name}</span>
              </a>
            );
          })}

          {/* "All" button - filled */}
          <button
            onClick={() => setIsCategoriesPageOpen(true)}
            className="inline-flex items-center gap-1 rounded-3xl bg-primary-blue px-4 py-1.5 font-onest text-base leading-[22px] tracking-tight text-white transition-colors hover:bg-primary-blue/90"
          >
            <GridIcon size={20} color="#FFFFFF" />
            <span>All</span>
          </button>
        </div>
      </section>

      {/* All categories page overlay */}
      <ImageOverlay
        src="/images/categories-page.png"
        alt="All service categories"
        isOpen={isCategoriesPageOpen}
        onClose={() => setIsCategoriesPageOpen(false)}
      />
    </>
  );
}
