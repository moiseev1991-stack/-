const items = ["Forbes", "WSJ", "The Guardian", "WIRED", "eCOGRA", "MGA", "18+"];

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-[#E8E4DA] py-4 px-6">
      <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex items-center justify-center gap-8 min-w-max mx-auto">
          {items.map((item) => (
            <span
              key={item}
              className="text-[#BBBBBB] text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
