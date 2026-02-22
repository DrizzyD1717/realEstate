import { PROPERTIES } from "@/constants";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function PropertyDetails({
  params,
}: {
  params: { id: string };
}) {
  // We await the params directly here
  const { id } = await params;

  // Find the property using the awaited ID
  const property = PROPERTIES.find((p) => p.id.toString() === id);

  if (!property) return notFound();

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/properties"
          className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors mb-12 inline-block"
        >
          ← Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image Container */}
          <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-white/5">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content Section */}
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4">
              {property.category} // {property.location}
            </span>

            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tighter italic font-serif">
              {property.title}
            </h1>

            <p className="text-2xl font-light mb-10 text-white/80 tracking-tight">
              {property.price}
            </p>

            <div className="grid grid-cols-3 gap-8 py-10 border-y border-white/10 mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-medium">
                  Beds
                </p>
                <p className="text-xl font-light">{property.specs.beds}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-medium">
                  Baths
                </p>
                <p className="text-xl font-light">{property.specs.baths}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-medium">
                  Sq Ft
                </p>
                <p className="text-xl font-light">
                  {property.specs.sqft.toLocaleString()}
                </p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed text-lg font-light mb-12 max-w-lg">
              Experience the pinnacle of minimalist design. This{" "}
              {property.category.toLowerCase()}
              in {property.location} has been meticulously crafted to blend
              structural integrity with aesthetic purity.
            </p>

            <button className="w-full bg-white text-black py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-zinc-200 transition-all duration-300">
              Inquire for Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
