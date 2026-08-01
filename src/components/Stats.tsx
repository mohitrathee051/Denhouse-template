import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/AnimatedCounter";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="bg-primary py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-heading text-4xl font-semibold text-white sm:text-5xl"
              />
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
