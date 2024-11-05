import MainProvider from "@/components/Main";
import HomePage from "@/pages/home/HomePage";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Diamond Fleet Rentals",
  description: 'Rent all your dream cars here',
}

export default function Home() {
  return (
    <MainProvider>
      <HomePage/>
    </MainProvider>
  );
}
