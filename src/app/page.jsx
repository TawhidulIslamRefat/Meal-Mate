import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import Category from "./Components/Category/Category";
import About from "./Components/About/About";
import SpecialOffers from "./Components/SpecialOffers/SpecialOffers";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Chefs from "./Components/Chefs/Chefs";
import Blog from "./Components/Blog/Blog";

export default function Home() {
  return (
    <div>
      <section><Hero></Hero></section>
      <section><Category></Category></section>
      <section><About></About></section>
      <section><SpecialOffers></SpecialOffers></section>
      <section><WhyChooseUs></WhyChooseUs></section>
      <section><Testimonials></Testimonials></section>
      <section><Chefs></Chefs></section>
      <section><Blog></Blog></section>
    </div>
  );
}
