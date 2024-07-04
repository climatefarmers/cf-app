import bea from "./../public/images/beatriz.jpg";
import farmer from "./../public/images/farmer1.jpg";
import TwoImage from "./components/TwoImage";

export default async function Home() {
  return (
    <main className="">
      <section className="text-white bg-[url(/images/start_header.jpg)] h-[600px] rounded-3xl bg-no-repeat p-16 flex justify-center flex-col">
        <h1>It’s time to transform farming.</h1>
        <h4 className="my-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </h4>
        <button className="bg-lime self-start text-black">Learn more</button>
      </section>
      <section>
        <h3>What farmers have say</h3>
        <TwoImage
          image1={bea}
          image2={farmer}
          text1="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"
          text2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"
        />
      </section>
    </main>
  );
}
