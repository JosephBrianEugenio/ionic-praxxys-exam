import {ref} from 'vue'


export function useComposables(){


    const quantity = ref(0);

    const modal = ref()

    const addQuantity = () => {
        quantity.value++;
      };
      
      const decrementQuantity = () => {
        if (quantity.value > 1) {
          quantity.value--;
        }
      };

    return {
        quantity,
        modal,
        addQuantity,
        decrementQuantity
    }
}