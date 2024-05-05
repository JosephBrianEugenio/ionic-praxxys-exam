<template>
  <ion-menu content-id="main-content">
    <IonContent class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <img src="@/assets/account_image.png" />
          </ion-col>
          <ion-col size="6"> </ion-col>
        </ion-row>
      </ion-grid>

      <IonList>
        <IonListHeader>Chuzu yu</IonListHeader>
        <IonNote>+63 912 345 6789</IonNote>
      </IonList>

      <NavigationItem />
    </IonContent>
  </ion-menu>
  <ion-page id="main-content">
    <IonHeader no-border>
      <ion-toolbar no-border>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title style="color: black !important;">Menu</ion-title>
      </ion-toolbar>
    </IonHeader>
    <ion-content class="ion-padding">
      <router-view></router-view>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import NavigationItem from "../Components/NavigationItem.vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
  IonListHeader,
  IonNote,
  IonList,
} from "@ionic/vue";
</script>

<style scoped>
ion-toolbar {
  --border-color: none !important;
  --background: white;
  --color: black !important;
}
</style>
