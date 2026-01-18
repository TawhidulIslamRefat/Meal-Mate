import AboutUs from "@/Components/AboutUs/About";
import Blog from "@/Components/Blog/Blog";
import Category from "@/Components/Category/Category";
import Chefs from "@/Components/Chefs/Chefs";
import Hero from "@/Components/Hero/Hero";
import SpecialOffers from "@/Components/SpecialOffers/SpecialOffers";
import Testimonials from "@/Components/Testimonials/Testimonials";
import WhyChooseUs from "@/Components/WhyChooseUs/WhyChooseUs";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <Category></Category>
      </section>
      <section>
        <AboutUs></AboutUs>
      </section>
      <section>
        <SpecialOffers></SpecialOffers>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <Chefs></Chefs>
      </section>
      <section>
        <Blog></Blog>
      </section>
    </div>
  );
}
