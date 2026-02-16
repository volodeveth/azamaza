import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[189px] w-full overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Azamaza hero background"
        fill
        className="object-cover"
        priority
      />
      {/* Blur overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute h-[125px] w-[339px] rounded-full"
          style={{
            background: "rgba(21, 20, 20, 0.25)",
            filter: "blur(12.5px)",
          }}
        />
        <h1 className="relative z-10 px-4 text-center font-inter text-2xl font-extrabold leading-8 text-white">
          Marketplace of verified services and wholesale offers — travel, shop, and save!
        </h1>
      </div>
    </section>
  );
}
