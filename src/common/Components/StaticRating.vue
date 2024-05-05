<script lang="ts" setup>
import {
  IonIcon,
} from "@ionic/vue";
import { starHalf, star } from "ionicons/icons";
</script>

<template>
  <div>
    <IonIcon :icon="star" color="warning"></IonIcon>
    <IonIcon :icon="star" color="warning"></IonIcon>
    <IonIcon :icon="star" color="warning"></IonIcon>
    <IonIcon :icon="star" color="warning"></IonIcon>
    <IonIcon :icon="starHalf" color="warning"></IonIcon>
  </div>
</template>

<style scoped></style>
