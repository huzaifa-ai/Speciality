"use client";
import { useEffect, useState } from "react";
import { fetcher } from "@/lib/api";
import Speciality from "@/components/company";

export default function Home() {
  const [features, setFeatures] = useState([]); // State to hold the fetched data

  const getData = async () => {
    const response = await fetcher(`https://uplifting-fun-36ddc60736.strapiapp.com/api/company-specialities`);
    const data = response.data.map(item => ({
      title: item.title, // Assuming the title is in the 'attributes' field
      description: item.description // Assuming the description is in the 'attributes' field
    }));
    setFeatures(data); // Set the features in state
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Pass the features data as props to WhyChooseUs */}
    <Speciality features={features} />
    </div>
  );
}
