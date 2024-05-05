<script lang="ts" setup>
import {
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonText,
  IonButton,
  IonIcon,
  IonInput,
  IonCardContent,
} from "@ionic/vue";

import { useComposables } from "@/pages/Foods/Stores/Composables";

import { useRouter } from "vue-router";

const { modal } = useComposables();



const router = useRouter();


const onHandleToCheckout = () => {
    router.push({name: ""})
}

const onHandleToFood = () => {
    router.push({name: "food.page"})
    modal.value.$el.dismiss();
}
</script>

<template>
  <IonCard class="order ion-no-margin ion-text-center">
    <IonCardContent>
      <IonGrid>
        <IonRow class="ion-text-card">
          <IonCol size="12">
            <img src="@/assets/approved.png" />
          </IonCol>
          <IonCol>
            <IonText>
              <h1>Sucessfully Added</h1>
              <p>What do you want to do now?</p>
            </IonText>
          </IonCol>
          <IonCol size="12">
            <IonButton label="" class="custom"  expand="block"
              >Proceed to Checkout</IonButton
            >
          </IonCol>
          <IonCol size="12">
            <IonButton fill="clear" class="add-more" @click="onHandleToFood"> Add More </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCardContent>
  </IonCard>
</template>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: black;
}
p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #6c757d;
}
ion-button {
  --background: #ffffff;
  --background-activated: #d71921;

  --color: #d71921;

  --ripple-color: deeppink;

  --padding: 200px;
}

ion-button.custom {
    color: white;
    margin-top: 20px;
    --background:#D71921;
    --border-radius: 16px
    
}

ion-button.add-more {
  font-weight: bold;
  --color: #d71921;
}
ion-card.order {
  background-color: white !important;
  border-radius: 15px;

}
</style>
