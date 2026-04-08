import SiteIcon from "@/components/common/SiteIcon";

const badges = [
  { name: "Forbes", icon: "trust_news" as const },
  { name: "Wall Street Journal", icon: "trust_chart" as const },
  { name: "The Guardian", icon: "trust_doc" as const },
  { name: "WIRED", icon: "trust_bulb" as const },
  { name: "Lonely Planet", icon: "trust_globe" as const },
];

export default function TrustBadges() {
  return (
    <section className="border-t border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-5 text-center text-sm text-gray-500">كما ظهرنا في</p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="flex cursor-default items-center gap-2 text-gray-400 transition-colors hover:text-gray-700"
            >
              <SiteIcon name={badge.icon} size={20} className="opacity-80" />
              <span className="text-sm font-semibold">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
