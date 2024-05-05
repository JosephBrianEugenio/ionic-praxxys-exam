import HomeImage from '@/assets/logo-red.png'
import Orders from '@/assets/chicken.png'
import { useRoute } from "vue-router";
import { cartOutline, timer, location, heart, fastFood, notifications, storefront, helpCircle, cart, person } from "ionicons/icons";

// const route = useRoute();



export type RouteType = {
    name: string
  }

  export type NavigationItems = {
    label: string
    separator?: boolean
    route?: RouteType
    img?: string | any
    icon?: string
    isActive?: boolean
  }

  export const MenuItems: Array <NavigationItems> = [
    {
        label: 'Home',
        img: HomeImage,
        separator: false,
        route: { name: 'home.page' },
    },
    {
        label: 'Order Now!',
        icon: fastFood,
        separator: false,
        route: { name: 'food.page' },
    },
    {
        label: 'Notiifications',
        separator: false,
        icon: notifications
        // route: 
    },
    {
        label: 'Store Locator',
        separator: false,
        icon: storefront
        // route: 
    },
    {
        label: `FAQ's`,
        separator: false,
        icon:helpCircle
        // route: 
    },
    {
        label: 'My Orders',
        separator: false,
        icon:cart
        // route: 
    },
    {
        label: 'My Account',
        separator: false,
        icon: person
        // route: 
    },
    {
        label: 'My Favorites',
        separator: false,
        icon: heart
        // route: 
    },
    {
        label: 'Order Tracker',
        separator: false,
        icon: location
        // route: 
    },
    {
        label: 'Order History',
        separator: false,
        icon: timer
        // route: 
    },

  ]

  export function calculateIsActive(routeName: string): boolean {
    const route = useRoute();
    return route.name === routeName;
}