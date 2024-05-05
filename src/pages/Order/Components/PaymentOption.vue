<script lang="ts" setup>
import {
  IonCol,
  IonGrid,
  IonRow,
  IonButton,
  IonIcon,
  IonInput,
  IonChip,
  IonText,
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonItemGroup,
  IonList,
  IonCard,
  IonCheckbox,
} from "@ionic/vue";

import { storeToRefs } from "pinia";

import { useOrderStore } from "@/pages/Order/Store/OrderStore";

const userOrder = useOrderStore();

const { paymentList } = storeToRefs(userOrder);
</script>

<template>
  <div>
    <h2>Payment Option</h2>
  </div>
  <div>
    <IonList v-for="(items, index) in paymentList" :key="index">
      <IonItem class="payment-options">
        <IonLabel>
          <img v-if="items && items.image" :src="items.image" />
          <h5 v-else>
            {{ items.title }}
          </h5>
          <p>
            {{ items.description }}
          </p>
        </IonLabel>
        <div>
          <IonCheckbox
            class="order"
            mode="md"
            style="justify-self: end"
          ></IonCheckbox>
        </div>
      </IonItem>
    </IonList>
  </div>
  <div class="ion-margin-vertical">
    <IonList lines="none">
      <IonItem  lines="none">
        <IonLabel slot="start">
          <IonText>
            <h3>Subtotal</h3>
          </IonText>
        </IonLabel>
        <IonLabel slot="end">
          <IonText>
            <h3>333</h3>
          </IonText>
        </IonLabel>
      </IonItem>
      <IonItem lines="none">
        <IonLabel slot="start">
          <IonText>
            <h3>Delivery Charge</h3>
          </IonText>
        </IonLabel>
        <IonLabel slot="end">
          <IonText>
            <h3>333</h3>
          </IonText>
        </IonLabel>
      </IonItem>
    </IonList>
  </div>
  <div class="ion-margin-vertical">
    <IonInput
      class="custom"
      label="Change for"
      label-placement="stacked"
      placeholder="eg. 1,000"
    ></IonInput>
  </div>
</template>

<style scoped>
ion-item.payment-options {
  border-radius: 15px;
  --background: #e9ecef;
  --min-height: 79px;
  margin-top: 15px;
}

ion-input.custom {
  border: 2px solid #dee2e6;
  border-radius: 50px !important;
  background: #f8f9fa;
  --color: #6c757d;
  --placeholder-color: #dee2e6;
  --placeholder-opacity: 1;

  --padding-bottom: 15px;
  --padding-start: 16px;
  --padding-top: 5px;
}

ion-checkbox.order {
  --size: 25px;
  --checkbox-background-checked: white !important;
  --checkmark-color: #ffc02e !important;
  --border-color: white;
  --border-color-checked: white !important;
  justify-self: end !important;
}

h3 {
  font-weight: 700;
  font-size: 14px;
}
h2 {
  font-weight: 700;
  color: black;
  font-size: 20px;
}

h5 {
  font-weight: 700;
  font-size: 14px;
  padding-bottom: 5px;
}
p {
  color: #6c757d;
  font-weight: 400;
  font-size: 12px;
}
</style>
