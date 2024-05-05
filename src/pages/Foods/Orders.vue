<script setup lang="ts">
import {
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonText,
  IonButton,
  IonIcon,
  IonInput,
  IonModal,
  IonCardContent,

} from "@ionic/vue";
import { heartOutline, add, remove } from "ionicons/icons";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useFoodList } from "@/pages/Foods/Stores/FoodStore";
// import { useComposables } from "./Stores/Composables";
import StaticRating from "@/common/Components/StaticRating.vue";
import BeveragesComponent from "./Components/BeveragesComponent.vue";
import AdOnsComponent from "./Components/AdOnsComponent.vue";
import Quantity from "./Components/Quantity.vue";
import OrderAddedDialog from "./Components/OrderAddedDialog.vue";

interface Product {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  price: string;
  information: string;
}

// const { quantity, addQuantity, decrementQuantity } = useComposables();

const filteredFoodList = ref("");

const foods = useFoodList();

const { FoodListOptions } = storeToRefs(foods);

const route = useRoute();

const router = useRouter();

const onHandleToCheckout = () => {
  router.push({ name: "order.page" });
   modal.value.$el.dismiss();
};

const modal = ref();

const onHandleToFood = async () => {
  router.push({ name: "food.page" });
  await modal.value.$el.dismiss();
};

onMounted(() => {
  if (route.params.id) {
    filteredFoodList.value = FoodListOptions.value.filter(
      (food: Product) => food.id === Number(route.params.id)
    );
  }
});
</script>

<template>
  <div v-for="(orderDetails, index) in filteredFoodList" :key="index">
    <IonCard class="custom">
      <div class="ion-text-center">
        <img :src="orderDetails.image" alt="" class="order-image" />
      </div>
      <div class="heart-button ion-padding">
        <IonButton size="large">
          <IonIcon size="large" slot="icon-only" :icon="heartOutline"></IonIcon>
        </IonButton>
      </div>
    </IonCard>
    <IonGrid>
      <IonRow>
        <IonCol size="12" class="ion-text-left">
          <IonText>
            <h4 id="price-title">{{ orderDetails.title }}</h4>
          </IonText>
          <StaticRating />
          <IonText>
            <p id="order-information">{{ orderDetails.information }}</p>
          </IonText>
        </IonCol>
        <IonRow>
          <IonCol size="8" class="ion-text-left">
            <p id="price-text"><span>&#8369;</span> {{ orderDetails.price }}</p>
          </IonCol>
          <IonCol size="4" class="ion-text-center">
            <Quantity />
          </IonCol>
          <IonCol size="12" class="ion-text-left">
            <!-- beverages -->
            <BeveragesComponent />
          </IonCol>
          <IonCol size="12">
            <IonText>
              <h2>Ad-ons</h2>
            </IonText>
          </IonCol>
          <IonCol size="12">
            <AdOnsComponent />
          </IonCol>

          <IonCol size="12" class="ion-margin-vertical">
            <IonButton
              id="open-custom-dialog"
              label=""
              class="custom"
              type="button"
              expand="block"
              >Add to bag</IonButton
            >
            <ion-modal
              class="ion-padding"
              id="example-modal"
              ref="modal"
              trigger="open-custom-dialog"
            >
              <IonCard class="order ion-no-margin ion-text-center">
                <IonCardContent>
                  <IonGrid>
                    <IonRow class="ion-text-card">
                      <IonCol size="12">
                        <img src="@/assets/approved.png" />
                      </IonCol>
                      <IonCol>
                        <IonText>
                          <h1>Sucessfully Added</h1>
                          <p>What do you want to do now?</p>
                        </IonText>
                      </IonCol>
                      <IonCol size="12">
                        <IonButton label="" class="custom" @click="onHandleToCheckout" expand="block"
                          >Proceed to Checkout</IonButton
                        >
                      </IonCol>
                      <IonCol size="12">
                        <IonButton
                          fill="clear"
                          class="add-more"
                          @click="onHandleToFood()"
                        >
                          Add More
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </ion-modal>
          </IonCol>
        </IonRow>
      </IonRow>
    </IonGrid>
  </div>
</template>

<style scoped>
#price-title {
  font-weight: 700;
  font-size: 14px;
  color: #000000;
}
#price-text {
  font-weight: 700;
  font-size: 16px;
  color: #d71921;
}
#order-information {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #6c757d;
}
ion-card.custom {
  --background: #e9ecef;
  min-height: 239px !important;
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  height: 100%;
}
.order-image {
  width: 250px;
}
.heart-button {
  align-self: flex-end;
}
ion-button {
  --background: #ffffff;
  --background-activated: #d71921;

  --color: #d71921;

  --ripple-color: deeppink;

  --padding: 200px;
}
ion-card {
  --background: #e9ecef;
  padding: 10px;
}
ion-button.custom {
  height: 60px;
  color: white;
  --border-radius: 16px !important;
  --background: #d71921;
}
ion-modal#example-modal {
  --width: fit-content;
  --min-width: 250px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}
ion-button.add-more {
  font-weight: bold;
  --color: #d71921;
}
ion-card.order {
  background-color: white !important;
  border-radius: 15px;
}
</style>
