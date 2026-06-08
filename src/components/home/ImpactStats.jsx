import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 250,
    suffix: "M+",
    label: "Funds Raised",
  },
  {
    value: 12000,
    suffix: "+",
    label: "Active Donors",
  },
  {
    value: 500,
    suffix: "+",
    label: "Campaigns",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Lives Impacted",
  },
];

const ImpactStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-orange-500 to-amber-500"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="text-center text-white">
              <h3 className="text-5xl font-bold">
                {inView && <CountUp end={item.value} duration={3} />}
                {item.suffix}
              </h3>

              <p className="mt-3 text-lg opacity-90">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
