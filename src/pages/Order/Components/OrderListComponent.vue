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
} from "@ionic/vue";

import Quantity from "@/pages/Foods/Components/Quantity.vue";

import { heart, trash, pencil } from "ionicons/icons";
</script>

<template>
  <IonGrid>
    <IonRow>
      <IonCol size="12">
        <IonText class="ion-text-start ion-padding  ">
          <h2 class="orders">Orders</h2>
        </IonText>
      </IonCol>
      <IonCol size="12">
        <IonCard class="ion-no-margin ion-padding">
        <IonItemSliding>
          <IonItem lines="none">
            <img src="@/assets/account_image.png" />
            <IonLabel class="ion-padding">
              <h1>Steak Fries Veggies</h1>
              <p>1x Tomato Sauce</p>
              <p>1x Tomato Sauce</p>
              <p>1x Tomato Sauce</p>
            </IonLabel>
          </IonItem>

          <IonItemOptions side="end" lines="none">
            <IonItemOption class="custom-option">
              <IonIcon class="pencil" slot="icon-only" :icon="pencil"></IonIcon>
            </IonItemOption>
            <ion-item-option color="danger" class="custom-delete">
              <ion-icon slot="icon-only" :icon="trash"></ion-icon>
            </ion-item-option>
          </IonItemOptions>
        </IonItemSliding>
        <div class="ion-padding quantity">
          <div
            class="justify-between"
            style="display: flex; justify-content: space-between"
          >
            <div>
              <h3 class="price">P200</h3>
            </div>
            <div style="width: 100px" class="ion-text-center">
              <Quantity />
            </div>
          </div>
        </div>
      </IonCard>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<style scoped>
.quantity {
  /* border-top: 1px solid black; */
  background-color: #e9ecef;
  border-radius: 15px;
  margin-top: 5px;
}
ion-item {
  border-radius: 15px;
  --background: #e9ecef;
  --min-height: 130px;
}

ion-card {
  border: 1px solid black;
  --background: #F8F9FA;
}

.custom-option {
  background-color: rgba(253, 126, 20, 0.2);
  border-radius: 20px;
  margin-right: 5px;
  margin-left: 5px;
  width: 44px;
  color: #fd7e14;
}
.custom-delete {
  background-color: rgba(220, 53, 69, 0.2);
  border-radius: 20px;
  margin-right: 5px;
  margin-left: 5px;
  width: 44px;
  color: #dc3545;
}
h3.price {
  color: #D71921;
  font-weight: 700;
  font-size:16px;
}
h2.orders {
font-weight: 700;
color: black;
font-size: 20px;
}
</style>
