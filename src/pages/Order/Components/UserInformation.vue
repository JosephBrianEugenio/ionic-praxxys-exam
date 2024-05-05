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
  IonCheckbox,
  IonCardContent,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/vue";

import { heart, trash, pencil } from "ionicons/icons";

import { ellipsisVertical } from "ionicons/icons";
import { storeToRefs } from "pinia";
import { useOrderStore } from "../Store/OrderStore";

const userOrder = useOrderStore();

const { userInformation } = storeToRefs(userOrder);
</script>

<template>
  <IonGrid class="ion-no-padding">
    <IonRow v-for="(user, index) in userInformation" :key="index">
      <IonCol size="11" class="order">
        <IonItemSliding>
          <IonItem lines="none">
            <IonLabel v-if="user.value === 'userData'"
              ><h1 class="order">{{ user && user.name }}</h1>
              <p>{{ user && user.phoneNumber }}</p>
              <p>{{ user && user.emailAddress }}</p></IonLabel
            >
            <IonLabel v-else style="display: grid">
              <div style="justify-self: end; align-items: end; align-self: end">
                <IonCheckbox class="order" mode="md"></IonCheckbox>
              </div>
              <h1 class="order">{{ user && user.userAddress }}</h1>
              <p>{{ user && user.userAddressInfo }}</p>
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
      </IonCol>
      <IonCol size="1">
        <IonIcon
          class="order ion-text-center"
          size="large"
          color="warning"
          :icon="ellipsisVertical"
        ></IonIcon>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<style scoped>
ion-item {
  border-radius: 15px;
  --background: #e9ecef;
  --min-height: 130px;
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

h1.order {
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: black;
}
p {
  font-weight: 400px;
  font-size: 14px;
  line-height: 21px;
}
ion-icon.order {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
ion-col.order {
  margin-top: 18px !important;
}
ion-checkbox.order {
  --size: 25px;
  --checkbox-background-checked: white !important;
  --checkmark-color: #ffc02e !important;
  --border-color: white;
  --border-color-checked: white !important;
  justify-self: end !important;
}
</style>
