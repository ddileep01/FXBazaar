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
    <div className="bg-[#2563EB] border-y-2 border-[#111] overflow-hidden py-3">
      <div
        className="flex w-max"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-xs font-black text-white uppercase tracking-widest whitespace-nowrap"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
