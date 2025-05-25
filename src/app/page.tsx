import FeaturedCourses from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import { StickyScrollRevealDemo } from "@/components/StickyScroll";
import  {TestimonialsCards}  from '@/components/TestimonialCards'
import { CardHoverEffectDemo } from "@/components/UpcomingWebinar";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";
export default function Home() {
  return (
    <div>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    {/* <h1 className="text-center text-2xl">home page</h1> */}
    <Herosection/>
   <FeaturedCourses/>
   <StickyScrollRevealDemo/>
 <TestimonialsCards/>
 <CardHoverEffectDemo/>
 <WavyBackgroundDemo/>

    </main>
    </div>
  );
}
