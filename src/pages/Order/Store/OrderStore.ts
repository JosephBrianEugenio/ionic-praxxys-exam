import { defineStore } from "pinia";
import { computed, ref } from "vue";

import paypal from "@/assets/PayPal-Logo 1.png";
import paynamic from "@/assets/paynamics_rgb 1.png";

export type userOrderInformation = {
  name?: string;
  phoneNumber?: string;
  emailAddress?: string;
  value: string;
  userAddress?: string;
  userAddressInfo?: string;
};

export type orderPaymentList = {
  image?: string;
  title?: string;
  description: string;
  value: string;
};

export const useOrderStore = defineStore("ORDER_INFORMATION_STORE", () => {
  const userInformation = computed<Array<userOrderInformation>>(() => [
    {
      name: "Chou Tzuyu",
      phoneNumber: "+63 912 345 6789",
      emailAddress: "chou.tzu-yu@email.com",
      value: "userData",
    },
    {
      userAddress: "My Home Address",
      userAddressInfo:
        "No. 21 St. Agustin Street, Brgy. De Jose Delgado City 2234 Philippines",
      value: "addressData",
    },
    {
      userAddress: "Work/Office",
      userAddressInfo:
        "3rd flr Anyeong Bldg. Seareal St. Joaqin City 3456 Philippines",
      value: "addressData",
    },
  ]);

  const paymentList = computed<Array<orderPaymentList>>(() => [
    
    {
        title: "Cash on Delivery",
        description: "Pay when you received the order",
        value: "cod",
      },
    {
      title: "Loyalty Points",
      description: "Pay using your earned loyalty points",
      value: "loyalty",
    },
    {
      image: paypal,
      description: "A new tab will open to access your account",
      value: "paypal",
    },
    {
      image: paynamic,
      description: "Choose paynamics services available from you",
      value: "paynamic",
    },
  ]);

  return {
    userInformation,
    paymentList
  };
});
