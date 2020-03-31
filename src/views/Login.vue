<template>
  <transition name="fade">
    <div id="login">
      <top-navigation current="admin"></top-navigation>
      <div class="section">
        <b-container>
          <b-row>
            <b-col></b-col>
            <b-col cols="8" class="form">
              <div v-if="error" style="margn-bottom: 10px" class="alert alert-danger">
                {{ error }}
              </div>
              <div class="header">
                <span class="h2">Login</span>
                <p>Login if you have the right authentication details</p>
              </div>
              <div class="body">
                <form @submit.prevent="handleSubmit">
                  <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" v-model="email" type="email" autocomplete="off" name="emailAdd" placeholder="Email address" required />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input class="form-control" v-model="password" type="password" autocomplete="off" name="passWord" placeholder="Password" required />
                  </div>
                  <div class="form-group">
                    <button v-if="processing" type="button" class="form-control btn btn-lg btn-success" disabled><i class="fa fa-spinner fa-spin"></i> Opening ...</button>
                    <button v-else type="submit" class="form-control btn btn-lg btn-success">Get Me In</button>
                  </div>
                </form>
              </div>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </transition>
</template>

<script>
import TopNavigation from "@/components/TopNavigation";
import { auth } from "../firebase";

export default {
  name: "login",
  components: {
    TopNavigation
  },
  data() {
    return {
      email: '',
      password: '',
      processing: false,
      buttonActive: true,
      error: null
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.processing = true;
      try {
        const user = await auth.signInWithEmailAndPassword(this.email, this.password);
        if (user) {
          this.$router.replace("dashboard");
        }
      }
      catch (err) {
        this.error = err.message;
      }
      finally {
        this.processing = false;
      }
    }
  }
};
</script>

<style scoped>
#login .section {
  margin-top: 50px;
  padding: 20px;
}

#login .section .form .header {
  background-color: #1d1e20;
  padding: 30px;
  color: #fff;
  text-align: center;
}

#login .section .form .body {
  background-color: #000000;
  border: 1px solid #404040;
  padding: 10px;
}

#login label {
  color: #c5c5c5;
}

#login .section .form .body input {
  height: 60px;
  background-color: unset;
  color: #c5c5c5;
  font-size: 18px;
  padding: 10px;
}

#login .section .form .body input:focus {
  border: 1px solid #3fe277;
}

#login .section .form .body input:active {
  background: unset;
}

#login button {
  margin-top: 10px;
  padding: 10px;
  height: 50px;
}
</style>