// import Image from "next/image";
// import cat from "../public/static/img1.png";

import Banner from "@/components/banner.client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
    </main>
  );
}
