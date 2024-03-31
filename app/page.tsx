import Banner from "@/components/banner.client";
import Card from "@/components/card.server";

export default function Home() {
  const coffeeStores = [
    {
      name: "Cat coffee",
      imgUrl: "/static/img1.png",
    },
    {
      name: "Coco Coffee",
      imgUrl: "/static/img2.png",
    },
    {
      name: "Game and Coffee",
      imgUrl: "/static/img3.png",
    },
    {
      name: "Lazy Sloth Coffee",
      imgUrl: "/static/img4.png",
    },
    {
      name: "Ducky Coffee",
      imgUrl: "/static/img5.png",
    },
    {
      name: "Mouse Tail Coffee",
      imgUrl: "/static/img6.png",
    },
  ];
  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            London Stores
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
            {coffeeStores.map((c, i) => (
              <Card
                key={`${c.name}-${i}`}
                name={c.name}
                imgUrl={c.imgUrl}
                href={`/coffee-store/${i}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
