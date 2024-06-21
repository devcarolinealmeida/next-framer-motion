import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row gap-6 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    { /* IMAGE CONTAINER */ }
    <div className="flex-1 h-1/2 lg:h-full relative">
      <Image src="/hero.png" alt="" fill className="object-contain"/>
    </div>
    { /* TEXT CONTAINER */ }
    <div className="flex-1 h-1/2 lg:h-full flex flex-col gap-8 items-center justify-center">
      { /* TITLE */ }
      <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow</h1>
      { /* DESCRIPTION */ }
      <p>Welcome to “The Digital Canvas,” where the realms of artistry and technology intertwine to create a mesmerizing tapestry of innovation and imagination. </p>
      { /* BUTTONS */ }
      <div className="w-full flex gap-4">
        <button className="rounded-lg p-4 ring-1 ring-black bg-black text-white">View My Work</button>
        <button className="rounded-lg p-4 ring-1 ring-black">Contact Me</button>
      </div>
    </div>
  </div>;
};

export default Homepage;
