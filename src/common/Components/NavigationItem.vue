<script lang="ts" setup>
import { MenuItems, calculateIsActive } from "@/common/navigation-items";
import { useRouter, useRoute } from "vue-router";

import { IonItem, IonAvatar, IonLabel, IonIcon } from "@ionic/vue";

const router = useRouter();

const route = useRoute();

const onHandleRedirect = (route: any) => {
  router.push(route);
};
</script>

<template>
  <!-- <template v-for="(item, index) in MenuItems" :key="index"> -->
    <IonItem
      @click="onHandleRedirect(item.route)"
      tag="ion-item"
      lines="none"
      :detail="false"
      class="hydrated"
      v-for="(item, index) in MenuItems" :key="index"
    >
      <img v-if="item.img" :src="item.img" width="30px" style="padding-right: 2px;" />
      <IonIcon v-if="item.icon" class="custom" :class="{ 'active': calculateIsActive(item.route?.name) }"  :icon="item.icon" />
      {{ item.label }}
      </IonItem
    >
    <IonAvatar slot="start">
        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        <IonLabel>
            <p>Hi</p>
        </IonLabel>
    </IonAvatar>
  <!-- </template> -->
</template>

<style scoped>
ion-icon.custom {
    color: #DEE2E6;
    padding-right: 2px;
    font-size: 20px ;
}

ion-icon.custom.active {
    color: #D71921; 
}

</style>
