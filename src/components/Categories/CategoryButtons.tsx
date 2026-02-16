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
      <section style={{ padding: "16px 16px 0 16px" }}>
        <div className="flex flex-wrap" style={{ rowGap: "8px", columnGap: "5px" }}>
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <a
                key={category.id}
                href={category.href}
                className="inline-flex items-center transition-colors hover:opacity-80"
                style={{
                  height: "42px",
                  padding: "6px 16px",
                  gap: "4px",
                  borderRadius: "24px",
                  border: "1px solid #006CE4",
                  fontFamily: "var(--font-onest-var), 'Onest', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22px",
                  letterSpacing: "-0.408px",
                  textAlign: "center" as const,
                  color: "#006CE4",
                }}
              >
                {IconComponent && <IconComponent size={20} color="#006CE4" />}
                <span>{category.name}</span>
              </a>
            );
          })}

          {/* "All" button - filled */}
          <button
            onClick={() => setIsCategoriesPageOpen(true)}
            className="inline-flex items-center text-white transition-colors hover:opacity-90"
            style={{
              height: "42px",
              padding: "6px 16px",
              gap: "4px",
              borderRadius: "24px",
              backgroundColor: "#006CE4",
              fontFamily: "var(--font-onest-var), 'Onest', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "-0.408px",
              textAlign: "center" as const,
            }}
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
