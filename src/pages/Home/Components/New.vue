<script lang="ts" setup>
import {
  IonIcon,
  IonText,
  IonInput,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";
</script>

<template>
  <IonGrid>
    <IonRow>
      <IonCol class="ion-text-start ion-padding" size="12">
      <IonText>
        <h4>What's New?</h4>
      </IonText>
    </IonCol>
    <IonCol>
        <img src="@/assets/home/newImage.png" />
    </IonCol>
    </IonRow>
  </IonGrid>
</template>

<stye scoped></stye>
