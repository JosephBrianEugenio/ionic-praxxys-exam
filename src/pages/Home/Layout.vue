<template>
  <ion-menu content-id="main-content">
    <IonContent class="ion-padding">

      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <img src="@/assets/account_image.png" />
          </ion-col>
          <ion-col size="6">
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-list>
        <ion-list-header>Chuzu yu</ion-list-header>
        <ion-note>+63 912 345 6789</ion-note>
      </ion-list>

      <template v-for="(item, index) in MenuItems" :key="index">
        <IonItem @click="onHandleRedirect(item.route)" tag="ion-item"  lines="none" :detail="false" class="hydrated">
        <img v-if="item.img" :src="item.img" width="30px" />
        {{
          item.label
        }}</IonItem>
      </template>
    </IonContent>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header no-border>
      <ion-toolbar no-border>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <router-view></router-view>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { MenuItems } from "@/common/navigation-items";
import { useRouter } from "vue-router";

const router = useRouter();
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCol, IonGrid, IonRow,
  IonImg
} from "@ionic/vue";

const onHandleRedirect = (route :any) => {
  router.push(route);
};
</script>

<style scoped>
ion-toolbar {
  --border-color: none !important;
  --background: white;
  --color: none !important;
}
</style>
