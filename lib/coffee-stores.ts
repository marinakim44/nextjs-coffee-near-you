import { MapBoxType } from "@/types";

const transformData = (data: MapBoxType) => {
  return {
    id: data.id,
    address: data.properties?.address || "",
    name: data.text,
    imgUrl: "/static/img1.png",
  };
};

export const fetchCoffeeStores = async () => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?limit=6&proximity=ip&access_token=${process.env.MAPBOX_API}`
    );

    const data = await response.json();

    return data.features.map((d: MapBoxType) => transformData(d));
  } catch (err) {
    console.error("Error while fetching coffee store API");
  }
};
