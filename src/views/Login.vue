<template>
  <transition name="fade">
    <div id="login">
      <top-navigation current="admin"></top-navigation>
      <div class="section">
        <b-container>
          <div class="row">
            <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>
            <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12 form">
              <div v-if="error" style="margn-bottom: 10px" class="alert alert-danger">
                {{ error }}
              </div>
              <div class="header">
                <span class="h2">Admin Login</span>
                <p>Login if you have the right authentication details</p>
              </div>
              <div class="body">
                <form @submit.prevent="handleSubmit">
                  <div class="form-group">
                    <label>Email Address <span class="req">*</span></label>
                    <input class="form-control" v-model="email" type="email" autocomplete="off" name="emailAdd" placeholder="Email address" required />
                  </div>
                  <div class="form-group">
                    <label>Password <span class="req">*</span></label>
                    <input class="form-control" v-model="password" type="password" autocomplete="off" name="passWord" placeholder="Password" required />
                  </div>
                  <div class="form-group">
                    <button v-if="processing" type="button" class="form-control btn btn-lg btn-success" disabled><i class="fa fa-spinner fa-spin"></i> Opening ...</button>
                    <button v-else type="submit" class="form-control btn btn-lg btn-success">Login</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>
          </div>
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
@media only screen and (min-width : 992px) {
  #login .section {
    margin-top: 50px;
    padding: 20px;
  }

  #login .section .form .header {
    color: #fff;
    text-align: left;
    margin-bottom: 30px;
  }

  #login .section .form .body {
    background-color: #1b1c21;
    padding: 50px;
  }

  #login label {
    color: #c5c5c5;
  }

  #login .section .form .body input {
    height: 40px;
    background-color: #222328;
    color: #5A6872;
    font-size: 16px;
    padding: 10px;
    border-radius: 0;
    border: 1px solid #2c363e;
  }

  #login .section .form .body input:focus {
    border: 1px solid #f57c00;
  }

  #login .section .form .body input:active {
    background: unset;
  }

  #login button {
    margin-top: 10px;
    padding: 10px;
    height: 50px;
    background: #f57c00;
    border-radius: 0;
    color: #fff;
    text-align: center;
    border: 0;
  }
}

@media only screen and (max-width : 768px) {
  #login .section {
    margin-top: 50px;
    padding: 20px;
  }

  #login .section .form .header {
    color: #fff;
    text-align: left;
    margin-bottom: 30px;
  }

  #login .section .form .body {
    background-color: #1b1c21;
    padding: 50px;
  }

  #login label {
    color: #c5c5c5;
  }

  #login .section .form .body input {
    height: 40px;
    background-color: #222328;
    color: #5A6872;
    font-size: 16px;
    padding: 10px;
    border-radius: 0;
    border: 1px solid #2c363e;
  }

  #login .section .form .body input:focus {
    border: 1px solid #c57c00;
  }

  #login .section .form .body input:active {
    background: unset;
  }

  #login button {
    margin-top: 10px;
    padding: 10px;
    height: 50px;
    background: #f57c00;
    border-radius: 0;
    color: #fff;
    text-align: center;
    border: 0;
  }
}
</style>