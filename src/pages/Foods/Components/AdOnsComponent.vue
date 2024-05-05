<script lang="ts" setup>
import { storeToRefs } from "pinia";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonText,
  IonItem,
  IonThumbnail,
  IonCheckbox,
  IonInput,
  IonButton,
  IonIcon,
} from "@ionic/vue";

import { useFoodList } from "@/pages/Foods/Stores/FoodStore";


const foods = useFoodList();

const { addOnsListOptions } = storeToRefs(foods);

import Quantity from "./Quantity.vue";
</script>

<template>
  <IonCard class="ion-margin-vertical no-padding" v-for="(addonsItem, index) in addOnsListOptions" :key="index">
    <IonGrid>
      <IonRow>
        <IonCol size="8">
          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                :src="addonsItem.img"
              />
            </IonThumbnail>
            <IonText>
              <p class="ion-no-margin title">{{ addonsItem.title }}</p>
              <p class="ion-no-margin subTitle">{{ addonsItem.subTitle }}</p>
              <p class="ion-no-margin">{{ addonsItem.price }}</p>
            </IonText>
          </IonItem>
        </IonCol>
        <IonCol size="4">
          <div class="ion-text-end">
            <IonCheckbox class="checkbox-square" mode="md"></IonCheckbox>
          </div>
          <div class="ion-text-end">
            <Quantity />
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonCard>
</template>

<style scoped>
ion-checkbox {
  --size: 25px;
  --checkbox-background-checked: white !important;
  --checkmark-color: #ffc02e !important;
  --border-color: white;
  --border-color-checked: white !important;
}

ion-card {
  --background: #e9ecef;
  /* padding: 10px; */
}

ion-item {
  --background: none !important;
}
.title {
    font-weight: 14px;
    font-weight: 700;
}
.subTitle {
    font-weight: 12px;
    font-weight: 400;
}
</style>
