import { defineStore } from "pinia";
import { computed, ref } from "vue";

import P1 from "@/assets/home/p1.png";
import P2 from "@/assets/home/p2.png";
import P3 from "@/assets/home/p3.png";
import P4 from "@/assets/home/p4.png";

import sauce from "@/assets/home/sauce 1.png";
import rice from "@/assets/home/image 18.png";

export type FoodOptions = {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  price: string;
  information: string;
};

export type addOnsOptions = {
  img: string;
  title: string;
  price: number;
  subTitle: string;
};

export const useFoodList = defineStore("FOOD_LIST_STORE", () => {
  const FoodListOptions = computed<Array<FoodOptions>>(() => [
    {
      id: 1,
      image: P1,
      title: "Product 1",
      subTitle: "Description 1",
      price: "10",
      information: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.`,
    },
    {
      id: 2,
      image: P2,
      title: "Product 2",
      subTitle: "Description 2",
      price: "20",
      information: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.`,
    },
    {
      id: 3,
      image: P3,
      title: "Product 3",
      subTitle: "Description 3",
      price: "30",
      information: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.`,
    },
    {
      id: 4,
      image: P4,
      title: "Product 4",
      subTitle: "Description 3",
      price: "30",
      information: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.`,
    },
  ]);

  const addOnsListOptions = computed<Array<addOnsOptions>>(() => [
    { img: sauce, title: "Tomato Sauce", subTitle: "Sauce", price: 49 },
    { img: rice, title: "Rice", subTitle: "Rice", price: 29 },
  ]);

  return {
    FoodListOptions,
    addOnsListOptions,
  };
});
