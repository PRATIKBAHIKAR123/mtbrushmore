// import Image from "next/image";
import HomePage from "./home/page";
import { siteMetadata } from "@/lib/metadata";

export const metadata = siteMetadata;

export default function Home() {
  return (
    <>

      <HomePage />

    </>
  );
}
