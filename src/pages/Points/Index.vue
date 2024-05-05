<script lang="ts" setup>
import {
  IonAvatar,
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonRow,
  IonButton,
  IonIcon,
  IonText,
  IonTabs,
  IonChip,
  IonThumbnail,
  IonCard,
} from "@ionic/vue";

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { chevronForwardOutline } from "ionicons/icons";
</script>

<template>
  <IonGrid class="ion-no-padding">
    <IonRow>
      <IonCol size="6">
        <IonItem lines="none">
          <IonAvatar slot="start">
            <img src="@/assets/crown 1.png" />
          </IonAvatar>
          <IonLabel>
            <h3>Beginner Tier</h3>
          </IonLabel>
        </IonItem>
      </IonCol>
      <IonCol size="6" class="ion-text-end">
        <IonButton fill="clear" class="view-all">
          View All
          <IonIcon :icon="chevronForwardOutline" slot="end"></IonIcon>
        </IonButton>
      </IonCol>
      <IonCol size="12">
        <IonText>
          <p>
            Earn points by purchasing from our store. Vestibulum ante ipsum
            primis in faucibus orci luctus et.
          </p>
        </IonText>
      </IonCol>

      <IonCol size="12 ion-padding">
        <div class="centered">
        <CircleProgress :percent="percent" :viewport="true" :show-percent="true" />
    </div>
      </IonCol>
      <IonCol size="6">
        <IonText>
          <h3>Rewards</h3>
        </IonText>
      </IonCol>
      <IonCol size="6" class="ion-text-end">
        <IonButton fill="clear" class="view-all">
          How it works
          <IonIcon :icon="chevronForwardOutline" slot="end"></IonIcon>
        </IonButton>
      </IonCol>
      <IonCol size="auto">
        <IonChip style="background-color: #d71921; color: white"> All </IonChip>
        <IonChip> Beginner </IonChip>
        <IonChip> Intermediate </IonChip>
        <IonChip> Loyal </IonChip>
      </IonCol>
      <IonCol size="12">
        <IonCard class="points ion-padding">
          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img src="@/assets/home/p1.png" />
            </IonThumbnail>
            <IonLabel>
              <h3>Steak Fries Veggies</h3>
              <p>Meat</p>
              <IonItem lines="none" class="ion-text-start">
                <IonAvatar slot="start">
                  <img src="@/assets/crown 1.png" alt="" />
                </IonAvatar>
                <IonLabel>
                  <p>20 points</p>
                </IonLabel>
              </IonItem>
            </IonLabel>
          </IonItem>
        </IonCard>
      </IonCol>
      <!-- <IonCol size="12">
      </IonCol> -->
    </IonRow>
  </IonGrid>
</template>

<style scoped>
ion-button.view-all {
  font-weight: bold;
  font-size: 16px;
  --color: #d71921;
}
ion-chip {
  padding: 10px;
  width: 90px !important;
  color: #6c757d;
  font-size: 14px;
  text-align: center;
}
ion-card.points {
  /* width: 343px; */
  /* height: 100px; */
  border-radius: 16px;
  --background: #e9ecef;
}
ion-item {
  --background: none !important;
}
.centered {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100%; 
   margin-left: 90px;
}
</style>
