import HomePage from "@/components/pages/home/HomePage";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Diamond Fleet Rentals",
  description: 'Rent all your dream cars here',
}

export default function Home() {
  return (
   <HomePage/>
  );
}
