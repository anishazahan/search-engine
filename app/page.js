import About from '@/components/About/About'
import Banner from '@/components/Home/Banner'
import Graph from '@/components/Home/Graph'
import Subscribe from '@/components/Home/Subscribe'
import Blog from '@/components/blog/Blog'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import PricingPlan from '@/components/pricing-plan/PricingPlan'
import Services from '@/components/services/Services'
import TeamMember from '@/components/team/TeamMember'
import Image from 'next/image'

export default function Home() {
  return (
   <>
     <Banner></Banner>
     <About></About>
     <Services></Services>
     <Subscribe></Subscribe>
     <Graph></Graph>
     <TeamMember></TeamMember>
     <PricingPlan></PricingPlan>
     <Blog></Blog>
     <Contact></Contact>
     <Footer></Footer>
   
   </>
  )
}
