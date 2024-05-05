<script lang="ts" setup>
import {
  IonCol,
  IonGrid,
  IonRow,
  IonButton,
  IonIcon,
  IonInput,
  IonChip,
} from "@ionic/vue";

import Foods from "@/pages/Foods/Components/Foods.vue";

import { search, filter } from "ionicons/icons";

const foodCategories = [
  { title: "All" },
  { title: "Breakfast" },
  { title: "Chicken" },
  { title: "Seafood" },
  { title: "Seafood" },
  { title: "Seafood" },
  { title: "Seafood" },
  { title: "Seafood" },
];
</script>

<template>
  <IonGrid >
    <IonRow>
      <IonCol size="12">
        <IonInput
          class="ion-margin-top custom"
          placeholder="try our new Beef Bibimbowl"
        >
          <ion-icon slot="start" :icon="search"></ion-icon>
          <ion-button fill="clear" slot="end">
            <ion-icon slot="icon-only" :icon="filter"></ion-icon>
          </ion-button>
        </IonInput>
      </IonCol>
      <IonCol>
        <div id="myFixZone">
          <IonCol
            size="auto"
            v-for="(category, index) in foodCategories"
            :key="index"
          >
            <IonChip >{{ category.title }}</IonChip>
          </IonCol>
        </div>
      </IonCol>
      <Foods />
    </IonRow>
  </IonGrid>
</template>

<style scoped>
ion-input.custom {
  --background: #f8f9fa;
  --color: #fff;
  --placeholder-color: #6c757d;
  --placeholder-opacity: 0.8;

  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  --border-radius: 20px;
  --color: black;
  border: 1px solid #6c757d;
  border-radius: 20px !important;
}

ion-icon {
  color: #d71921 !important;
  font-size: 30px;
}
#myFixZone {
  width: 1000px;
  overflow-x: scroll !important;
}
</style>
