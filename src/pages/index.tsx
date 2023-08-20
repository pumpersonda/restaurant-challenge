import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ButtonView from "@/components/atoms/button/ButtonView";
import CategoryField from "@/components/atoms/category/CategoryField";
import { SkeletonShape } from "@/components/atoms/skeletonShape/SkeletonShape";
import FoodCard, { FoodCardProps } from "@/components/molecules/card/FoodCard";
import { RatingIcon } from "@/components/atoms/rating/RatingIcon";
import RestaurantsLayout from "@/components/organisms/restaurants/RestaurantsLayout";
import Categories from "@/components/molecules/categories/Categories";
import RestaurantsTemplate from "@/components/templates/RestaurantsTemplate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
