import TwoImage from "./components/TwoImage";

export default function Home() {
  return (
    <main className="">
      <section className="text-white bg-[url(/images/start_header.jpg)] bg-contain h-[600px] bg-no-repeat p-16 flex justify-center flex-col">
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
        <TwoImage />
      </section>
      <section>
        <h1>We scale regenerative agriculture in Europe</h1>
      </section>
    </main>
  );
}
