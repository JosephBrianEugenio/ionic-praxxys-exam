<script lang="ts" setup>
import {
  IonCol,
  IonText,
  IonSelect,
  IonSelectOption,
  IonChip,
} from "@ionic/vue";
import { chevronDown } from "ionicons/icons";

import { ref, onMounted } from "vue";

const beverageSize = [
  { value: "regular", name: "Regular" },
  { value: "medium", name: "Medium" },
  { value: "large", name: "Large" },
];

const selectedBeverage = ref("");
const selectedChip = ref("");

const onHandleDrinkSize = (val: any) => {
  selectedChip.value = val;
};
</script>

<template>
  <IonCol>
    <IonText>
      <h2>Beverages</h2>
    </IonText>
    <ion-select
      class="always-flip"
      label="Select Beverages"
      label-placement="floating"
      fill="outline"
      shape="round"
      :toggle-icon="chevronDown"
      interface="popover"
      v-model="selectedBeverage"
    >
      <ion-select-option value="apples">Apple Juice</ion-select-option>
      <ion-select-option value="oranges">Orange Juice</ion-select-option>
      <ion-select-option value="bananas">Coke</ion-select-option>
    </ion-select>
  </IonCol>
  <IonCol
    size="auto"
    v-for="(sizes, index) in beverageSize"
    :key="index"
    v-if="selectedBeverage.length"
  >
    <IonChip
      :outline="true"
      @click="onHandleDrinkSize(sizes.value)"
      :style="{
        backgroundColor: selectedChip === sizes.value ? '#FFC02E' : '',
      }"
      >{{ sizes.name }}</IonChip
    >
  </IonCol>
</template>

<style scoped>
ion-select {
  background: #f8f9fa !important;
  border: 1px solid #dee2e6;
  border-radius: 25px;
  height: 60px !important;
  --border-radius: 5px !important;
  --padding-start: 10px !important;
  --padding-end: 10px !important;
}

ion-select.always-flip::part(icon) {
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  color: red;
}

ion-select.always-flip.select-expanded::part(icon) {
  transform: rotate(180deg);
}

ion-select.never-flip::part(icon) {
  transform: none;
}
ion-chip {
  padding: 10px;
  width: 85px !important;
}
.selected-chip {
  background-color: #007bff !important;
  color: white;
}
</style>
