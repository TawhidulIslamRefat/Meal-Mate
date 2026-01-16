import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import Category from "./Components/Category/Category";

export default function Home() {
  return (
    <div>
      <section><Hero></Hero></section>
      <section><Category></Category></section>
    </div>
  );
}
