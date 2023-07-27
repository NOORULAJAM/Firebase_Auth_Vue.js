<template>
  <div class="container">
    <div class="cart">
      <h2>Welcome, {{ name }}</h2>
      <button type="submit" @click="Logout" class="btn btn-primary sm">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import firebase from "firebase";
export default {
  setup() {
    const name = ref("");

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Logout Successfully!"))
        .catch((err) => console.log(err));
    };

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    return {
      name,
      Logout,
    };
  },
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--gray-color);
}
.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>