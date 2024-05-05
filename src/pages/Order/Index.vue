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
  IonModal,
  IonCardContent,
} from "@ionic/vue";
import UserInformation from "./Components/UserInformation.vue";
import OrderListComponent from "./Components/OrderListComponent.vue";
import PaymentOption from "./Components/PaymentOption.vue";
import { useRouter } from "vue-router";
import {ref} from 'vue'

const router = useRouter()

const modal = ref();

const onHandleRedirect = () => {
  router.push({name: "home.page"})
  modal.value.$el.dismiss(null, 'onHandleRedirect')
}
</script>

<template>
  <IonGrid class="ion-no-padding">
    <IonRow>
      <IonCol size="12">
        <UserInformation />
        <OrderListComponent />
        <PaymentOption />
      </IonCol>
      <IonCol size="12">
        <IonButton
          id="open-modal"
          class="place-order"
          type="button"
          expand="block"
          >Place order</IonButton
        >
        <ion-modal ref="modal" trigger="open-modal">
          <IonCard class="order ion-no-margin ion-text-center">
            <IonCardContent>
              <IonGrid>
                <IonRow class="ion-text-card">
                  <IonCol size="12">
                    <img src="@/assets/approved.png" width="150px" />
                  </IonCol>
                  <IonCol>
                    <IonText>
                      <h1>Order Received!</h1>
                      <p>
                        Your order No. 19049585 has successfully take and now
                        being processed. Kindly wait for our notification
                        regarding your order.
                      </p>
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
          <div class="bottom ion-padding ion-text-center">
            <IonButton label="" class="custom" expand="block"
              >Track Order</IonButton
            >
            <IonButton fill="clear" class="home" @click="onHandleRedirect">
              Back to Home
            </IonButton>
          </div>
        </ion-modal>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<style scoped>
ion-button.place-order {
  height: 60px;
  color: white;
  --border-radius: 16px !important;
  --background: #d71921;
}

ion-card.order {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: none !important;
}

.bottom {
  margin: 40px;
}
ion-button.custom {
  height: 60px;
  color: white;
  font-weight: bold;
  --border-radius: 16px !important;
  --background: #d71921;
}
ion-button.home {
  font-weight: bold;
  --background: #ffffff;
  --background-activated: #d71921;

  --color: #d71921;

  --ripple-color: deeppink;

  --padding: 200px;
}
</style>
