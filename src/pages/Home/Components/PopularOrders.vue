<script lang="ts" setup>
import {
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonText,
} from "@ionic/vue";

import P1 from "@/assets/home/p1.png";
import P2 from "@/assets/home/p2.png";
import P3 from "@/assets/home/p3.png";
import P4 from "@/assets/home/p4.png";

import { star, starHalf } from "ionicons/icons";

const popularItems = [
  { image: P1, title: "Product 1", subTitle: "Description 1", price: "10" },
  { image: P2, title: "Product 2", subTitle: "Description 2", price: "20" },
  { image: P3, title: "Product 3", subTitle: "Description 3", price: "30" },
  { image: P4, title: "Product 4", subTitle: "Description 3", price: "30" },
];

</script>

<template>
  <IonGrid>
    <IonRow>
      <IonCol size="12">
        <IonText>
          <h3>Most Popular</h3>
        </IonText>
      </IonCol>
      <IonCol
        v-for="(item, index) in popularItems"
        :key="index"
        style="margin: 5px"
      >
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol size="12" class="ion-text-center">
                <img
                  :src="item.image"
                  :class="item.title === 'Product 3' ? 'product3' : 'all-food'"
                />
              </IonCol>
              <IonCol size="12" class="ion-text-start">
                <h1 id="item-title">{{ item.title }}</h1>
                <IonCardSubtitle>{{ item.subTitle }}</IonCardSubtitle>
              </IonCol>
              <IonCol size="12">
                <IonText>
                  <p id="price-text"><span>&#8369;</span> {{ item.price }}</p>
                  <div>
                    <ion-icon :icon="star" color="warning"></ion-icon>
                    <ion-icon :icon="star" color="warning"></ion-icon>
                    <ion-icon :icon="star" color="warning"></ion-icon>
                    <ion-icon :icon="star" color="warning"></ion-icon>
                    <ion-icon :icon="starHalf" color="warning"></ion-icon>
                  </div>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<style scoped>
#item-title {
  font-weight: 700;
  font-size: 14px;
  color: #000000;
}

#price-text {
  font-weight: 700;
  font-size: 16px;
  color: #d71921;
}
.product3 {
  max-height: 80px !important;
}
ion-card {
  --background: #e9ecef;
  position: relative !important;
  min-height: 310px !important;
  display: flex;
  flex-direction: column;
  margin: 0 !important;
}
</style>
