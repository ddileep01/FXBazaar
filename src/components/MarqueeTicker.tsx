const ITEMS = [
  "17 Templates",
  "24hr Delivery",
  "Pay After Approval",
  "35+ Happy Customers",
  "Weddings",
  "Birthdays",
  "Festivals",
  "Business Promos",
  "WhatsApp Delivery",
  "Unlimited Revisions",
];

const doubled = [...ITEMS, ...ITEMS];

export default function MarqueeTicker() {
  return (
    <div
      className="overflow-hidden py-3 border-y border-white/10"
      style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.12), rgba(139,92,246,0.15), rgba(99,102,241,0.12))" }}
    >
      <div
        className="flex w-max"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-xs font-bold text-white/60 uppercase tracking-widest whitespace-nowrap"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-indigo-400/50 inline-block flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
