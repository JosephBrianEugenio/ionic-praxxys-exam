<script setup lang="ts">
import { IonIcon, IonText, IonInput, IonButton } from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const heading = ref("Bonjour!");
const subText = ref(
  "Welcome to all new FastFood mobile app. Kindly login your account. Thank you!"
);
const createAccountText = ref("Don’t have an account yet?");

const onHandleRedirect = () => {
  router.push({name: "home.page"})
}

</script>

<template>
  <div class="ion-padding">
    <img
      src="@/assets/logo-white.png"
      alt="login-asset"
      class="hero-image"
      width="40%"
    />
  </div>
  <div class="ion-padding">
    <ion-text>
      <h1>{{ heading }}</h1>
    </ion-text>
    <ion-text>
      <p class="sub-text">{{ subText }}</p>
    </ion-text>
  </div>
  <div class="ion-padding">
    <IonInput
      class="custom"
      label="Email Address"
      labelPlacement="stacked"
      type="email"
      placeholder="Enter your email"
    />
    <IonInput
      class="ion-margin-top custom"
      label="Password"
      labelPlacement="stacked"
      type="password"
      placeholder="Enter your password"
    >
      <Ionbutton
        slot="end"
        style="color: red; font-weight: 700"
        :collapse="true"
        >Forgot?</Ionbutton
      >
    </IonInput>
  </div>
  <div class="ion-padding">
    <IonButton class="login-button" type="button" expand="block" @click="onHandleRedirect"
      >Login</IonButton
    >
  </div> 

  <div class="ion-padding justify-center ion-text-center">
    <Ionbutton
    @click="onHandleRedirect"
      class="guest-login"
      :collapse="true"
      style="color: red; font-weight: 700"
      >Login as Guest</Ionbutton
    >
  </div>

  <div class="bottom ion-padding ion-text-center">
    <ion-text>
      <p class="create-account-text">
        {{ createAccountText }}
        <Ionbutton
          slot="end"
          style="color: red; font-weight: 700"
          :collapse="true"
          >Create</Ionbutton
        >
      </p>
    </ion-text>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 25px;
}
.sub-text {
  font-weight: 400;
  font-size: 14px;
  color: #6c757d;
}
.create-account-text {
  font-weight: 400;
  font-size: 14px;
  color: #444444;
}
ion-input.custom {
  border: 1px solid #6c757d;
  padding: 5px !important;
  padding-left: 20px !important;
  --border-radius: 20px; /* does nothing */
  border-radius: 20px;
}

ion-button.login-button {
  height: 60px;
  --border-radius: 16px !important;
  --background: #d71921;
}

.bottom {
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
</style>
