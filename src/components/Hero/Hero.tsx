import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "189px" }}>
      <Image
        src="/images/hero-bg.jpg"
        alt="Azamaza hero background"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 768px"
      />
      {/* Blur overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div
          className="absolute rounded-full"
          style={{
            width: "339px",
            height: "125px",
            background: "rgba(21, 20, 20, 0.25)",
            filter: "blur(12.5px)",
          }}
        />
        <h1
          className="relative z-10 text-center font-inter text-white"
          style={{
            maxWidth: "358px",
            fontSize: "24px",
            fontWeight: 800,
            lineHeight: "32px",
          }}
        >
          Marketplace of verified services and wholesale offers
          {" "}— travel, shop, and save!
        </h1>
      </div>
    </section>
  );
}
