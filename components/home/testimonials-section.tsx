import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue. Voici quelques témoignages de personnes qui nous ont fait confiance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-5 -left-3 text-6xl text-blue-200 leading-none font-serif">
                &ldquo;
              </div>
              
              <div className="relative">
                <p className="italic text-slate-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}