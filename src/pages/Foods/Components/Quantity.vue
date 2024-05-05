<script lang="ts" setup>
import { add, remove } from "ionicons/icons";

import { IonInput, IonButton, IonIcon } from "@ionic/vue";

import { useComposables } from "../Stores/Composables";
const { quantity, addQuantity, decrementQuantity } = useComposables();
</script>

<template>
  <IonInput
    :readonly="true"
    id="quantityInput"
    type="text"
    class="text-input"
    :value="quantity"
    @input="quantity = $event.target.value"
  >
    <IonButton size="small" slot="start" @click="addQuantity">
      <IonIcon slot="icon-only" :icon="add"></IonIcon>
    </IonButton>
    <IonButton slot="end" @click="decrementQuantity">
      <IonIcon slot="icon-only" :icon="remove"></IonIcon>
    </IonButton>
  </IonInput>
</template>

<style scoped>
ion-button {
  --background: #0000001a;
  --background-activated: #d71921;

  --color: #d71921;

  --ripple-color: deeppink;

  --padding: 200px;
}
</style>
