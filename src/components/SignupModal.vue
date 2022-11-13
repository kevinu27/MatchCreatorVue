<template>
  <div>
    <div
      class="modal-overlay"
      v-if="$store.state.showModalSignup == true"
      @click="closeModal"
    ></div>
    <div class="modal" v-if="$store.state.showModalSignup == true">
      <div class="closingX">
        <h1 @click="closeModal">X</h1>
      </div>
      <h1>Signup</h1>
      <h3>name</h3>
      <input type="text" v-model="name" />
      <h3>email</h3>
      <input type="email" v-model="email" />
      <h3>password</h3>
      <input type="password" v-model="password" />
      <br />
      <button class="loginButton" @click="loginSubmit">Signup</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupModal",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      formisvalid: true,
    };
  },
  methods: {
    closeModal() {
      this.$store.state.showModalSignup = false;
    },
    loginSubmit() {
      console.log("email", this.email);
      //---------con esto guardo en una tabla
      // fetch("https://brazo2.firebaseio.com/users.json", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email: this.email, password: this.password }),
      // });
      //--------Get para traer de la tabla
      // fetch("https://brazo2.firebaseio.com/users.json")
      //   .then((response) => {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //   })
      //   .then((data) => {
      //     console.log("data de la tabla de firebase", data);
      //   });
      this.$store.dispatch("signup", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
input {
  height: 2rem;
  width: 70%;
}
.loginButton {
  margin-top: 2rem;
  width: 40%;
  height: 3rem;
  border-radius: 0.5rem;
  box-shadow: 3px 5px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
}
h1 {
  margin-top: 0px;
}
.closingX {
  width: 90%;
  /* border: 2px solid red; */
  display: flex;
  justify-content: end;
  padding: 0px;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 3rem;
  padding-bottom: 7rem;
}
</style>
