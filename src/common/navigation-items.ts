import HomeImage from '@/assets/logo-red.png'
import Orders from '@/assets/chicken.png'


export type RouteType = {
    name: string
  }

  export type NavigationItems = {
    label: string
    separator?: boolean
    route?: RouteType
    img: string | any
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
        img: Orders,
        separator: false,
        route: { name: 'home.page' },
    },
    // {
    //     label: 'Home',
    //     separator: false,
    //     // route: 
    // },
    // {
    //     label: 'Home',
    //     separator: false,
    //     // route: 
    // },
    // {
    //     label: 'Home',
    //     separator: false,
    //     // route: 
    // },
    // {
    //     label: 'Home',
    //     separator: false,
    //     // route: 
    // },
    // {
    //     label: 'Home',
    //     separator: false,
    //     // route: 
    // },
    // {
    //     label: 'Home',
    //     separator: false,
    //     // route: 
    // },
    // {
    //     label: 'Home',
    //     separator: false,
    //     // route: 
    // },
    // {
    //     label: 'Home',
    //     separator: false,
    //     // route: 
    // },

  ]