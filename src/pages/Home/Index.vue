<script lang="ts" setup>
import {
  IonItem,
  IonCol,
  IonGrid,
  IonRow,
  IonButton,
  IonLabel,
  IonSearchbar,
} from "@ionic/vue";

import { chevronForwardOutline } from "ionicons/icons";

import { Swiper, SwiperSlide } from "swiper/vue";

import WhatsNew from './Components/New.vue'
import PopularOrders from './Components/PopularOrders.vue'
</script>

<template>
  <div class="flex flex-center">
    <IonGrid>
      <IonRow>
        <IonCol size="3">
          <img src="@/assets/logo-red.png" width="70px" height="80px" />
        </IonCol>
        <ionCol class="ion-text-left" size="9">
          <IonItem lines="none" :detail="false">
            <IonLabel>
              <p>Anneoyong, Chou!</p>
              <h1>What do you want to eat?</h1>
            </IonLabel>
          </IonItem>
        </ionCol>
        <IonCol size="12">
          <IonSearchbar
            class="custom"
            placeholder="try our new Beef Bibimbowl!"
          ></IonSearchbar>
        </IonCol>
        <IonCol size="6" class="ion-padding">
          <h4>Special Offers!</h4>
        </IonCol>
        <IonCol size="6" class="ion-padding-vertical ion-text-end">
          <IonButton fill="clear" class="view-all">
            View All
            <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
          </IonButton>
        </IonCol>
        <IonCol size="12">
          <img src="@/assets/home/special-offer-img.png" />
        </IonCol>
        <IonCol size="12">
            <WhatsNew />
        </IonCol>
        <PopularOrders />
      </IonRow>
    </IonGrid>
  </div>
</template>

<style scoped>
ion-searchbar.custom {
  border: solid 1px #dee2e6 !important;
  border-radius: 16px;
  background-color: #f8f9fa !important;
  --background: #f8f9fa !important;
  --placeholder-color: #6c757d;
  --icon-color: #d71921;
  --clear-button-color: #d71921;
}

ion-button.view-all {
  --color: #d71921;
}
</style>
