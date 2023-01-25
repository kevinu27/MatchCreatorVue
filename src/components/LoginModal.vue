<template>
  <div>
    <div
      class="modal-overlay"
      v-if="$store.state.showModalLogin == true"
      @click="closeModal"
    ></div>
    <div class="modal" v-if="$store.state.showModalLogin == true">
      <div class="closingX">
        <h1 @click="closeModal">X</h1>
      </div>
      <h1>Login</h1>
      <h3>email</h3>
      <input type="email" v-model="email" />
      <h3>password</h3>
      <input type="password" v-model="password" />
      <br />
      <button class="loginButton" @click="loginSubmit">Login</button>
    </div>
  </div>
</template>

<script>
// import AuthenticationService from '@/services/AuthenticationService';
export default {
  name: "LoginModal",
  data() {
    return {
      email: "",
      password: "",
      formisvalid: true,
    };
  },
  methods: {
    closeModal() {
      console.log("boton de cerrar el modal", this.$store.state.showModalLogin);
      this.$store.state.showModalLogin = false;
      document.documentElement.style.overflow = 'auto'
    },
    async loginSubmit() {
      console.log("entrando en el loginSubimit");
            /// con mysql
      // esto al final ponerlo en el store
      // try{

      //   const response = await AuthenticationService.login({
      //     email: this.email,
      //     password: this.password,
      //   })
      //   console.log(response.data)
      // }catch (error) {
      //   this.error = error.response.data.error
      //   }

      // this.formisvalid = true;
      // if (
      //   this.email === "" ||
      //   !this.email.includes("@") ||
      //   this.password.length < 6
      // ) {
      //   this.formisvalid = true;
      //   return;
      // }
      // this.isLoading = true;
      // console.log("email", this.email);
      // console.log("pass", this.password);
      try {
        console.log("trying");
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        // console.log("email", this.email);
        // console.log("pass", this.password);
        // console.log("error");
        this.error = err.message || "failed to authenticate";
      }

      this.isLoading = false;
      this.closeModal();
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
