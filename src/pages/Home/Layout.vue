<template>
  <ion-menu content-id="main-content">
    <IonContent class="ion-padding">
      <IonItem lines="none" class="ion-margin-vertical">
        <IonThumbnail slot="start">
          <img
            alt="Silhouette of a person's head"
            src="@/assets/account_image.png"
          />
        </IonThumbnail>
        <IonLabel class="ion-text-center">
          <IonButton fill="clear" class="view-all">
            0 points
            <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
          </IonButton>
        </IonLabel>
      </IonItem>

      <IonItem lines="none">
        <IonLabel>
          <h1>Chuzuyu</h1>
          <p>+63 912 345 6789</p>
        </IonLabel>
      </IonItem>

      <NavigationItem />

      <IonButton class="logout" type="button" expand="block">Logout</IonButton>
    </IonContent>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header class="ion-no-border">
      <ion-toolbar
        style="
          padding-top: 30px;
          border: 0px !important;
          border-bottom: 0px !important;
        "
        class="ion-no-padding"
      >
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <!-- <IonThumbnail slot="start">
          <img
            alt="Silhouette of a person's head"
            src="@/assets/crown 1.png"
            style="padding-right: 3px;"
          />
        </IonThumbnail> -->
        <ion-title class="ion-text-start custom">
          <IonLabel class="ion-text-center">
            <IonButton fill="clear" class="view-all">
            <IonIcon :icon="diamond" style="color: #b9f2ff !important; padding-right: 5px;" />
              0 points
              <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
            </IonButton>
          </IonLabel>
        </ion-title>
        <IonThumbnail slot="end" style="padding: 5px; margin-right: 3px;">
          <img
            alt="Silhouette of a person's head"
            src="@/assets/account_image.png"
          />
        </IonThumbnail>
        <!-- <IonButton class="custom" slot="end" shape="round">
            <IonIcon slot="icon-only" :icon="cart" size="large"></IonIcon>
          </IonButton> -->
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <router-view></router-view>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import NavigationItem from "@/common/Components/NavigationItem.vue";
import { cart, chevronForwardOutline,diamond } from "ionicons/icons";
import {
  IonButton,
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
  IonIcon,
  IonItem,
  IonThumbnail,
  IonAvatar,
  IonLabel,
  IonButtons,
} from "@ionic/vue";
</script>

<style scoped>
ion-toolbar {
  border: 0px !important;
  --background: white;
}
ion-button.custom {
  --background: none !important;
  --color: #d71921;
}
ion-title.custom {
  padding: 0px;
  margin-left: 50px !important;
  font-size: 25px;
}
ion-menu-button {
  --color: #d71921;
}
ion-button.logout {
  margin-top: 100px;
  height: 60px;
  color: white;
  --border-radius: 16px !important;
  --background: #d71921;
}
ion-button.view-all {
  font-weight: bold;
  font-size: 16px;
  --color: #d71921;
}
</style>
