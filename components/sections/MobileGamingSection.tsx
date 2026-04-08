import Link from "next/link";
import SiteIcon from "@/components/common/SiteIcon";
import SectionTitle from "@/components/common/SectionTitle";
import { ROUTES } from "@/lib/routes";

export default function MobileGamingSection() {
  return (
    <section className="bg-[#F7F4EE] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Phone illustration */}
          <div className="flex justify-center order-2 md:order-1">
            <div
              style={{ background: "#1C1C1E", borderRadius: "2.5rem" }}
              className="p-3 shadow-2xl w-44"
            >
              <div
                style={{ background: "#000", borderRadius: "2rem" }}
                className="aspect-[9/16] flex flex-col items-center justify-center gap-2 p-4"
              >
                <SiteIcon name="mobile_slot_reels" size={36} />
                <span className="text-white text-xs font-bold text-center">كازينو موبايل</span>
                <div className="flex gap-1 text-xl" style={{ color: "#C8963E" }}>
                  <span>♠</span><span>♥</span>
                </div>
                <button
                  style={{ background: "#10B981" }}
                  className="text-white text-xs font-bold px-4 py-1.5 rounded-full"
                >
                  العب الآن
                </button>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <SectionTitle title="المقامرة على الهواتف الذكية" />
            <p className="text-sm text-[#555] leading-relaxed mb-3">
              أصبحت كازينوهات الموبايل جزءاً أساسياً من تجربة القمار الحديثة. معظم الكازينوهات الموصى بها توفر تطبيقات مخصصة لـ iOS وAndroid.
            </p>
            <p className="text-sm text-[#555] leading-relaxed mb-5">
              يمكنك الوصول إلى آلاف الألعاب من أي مكان وفي أي وقت — الروليت والبلاك جاك والسلوتس والكازينو المباشر — كلها في راحة يدك.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href={ROUTES.slotsMobile}
                className="text-sm text-[#C8963E] font-semibold hover:underline"
              >
                سلوتس الموبايل
              </Link>
              <span className="text-[#CCC]">|</span>
              <Link href={ROUTES.apps} className="text-sm text-[#C8963E] font-semibold hover:underline">
                تطبيقات الكازينو
              </Link>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="flex items-center gap-2 bg-white border border-[#E8E4DA] rounded-xl px-4 py-2.5">
                <SiteIcon name="badge_ios" size={22} />
                <div>
                  <p className="text-xs text-[#888]">متوفر على</p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">App Store</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border border-[#E8E4DA] rounded-xl px-4 py-2.5">
                <SiteIcon name="badge_android" size={22} />
                <div>
                  <p className="text-xs text-[#888]">متوفر على</p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
