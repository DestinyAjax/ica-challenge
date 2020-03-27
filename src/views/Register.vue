<template>
    <transition name="fade">
    <div id="register">
        <top-navigation></top-navigation>
        <div class="section">
            <b-container>
                <b-row>
                <b-col></b-col>
                    <b-col cols="8" class="form">
                        <div class="header">
                            <span class="h2">Register</span>
                            <p>Register to participate in the #7days code challenge</p>
                        </div>
                        <div class="body">
                            <form @submit.prevent="handleSubmit">
                                <div class="form-group">
                                    <label>Full Name</label>
                                    <input class="form-control" v-model="fullName" type="text" autocomplete="off" name="fullName" placeholder="Enter your full name..." required />
                                </div>
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input class="form-control" v-model="email" type="email" autocomplete="off" name="emailAddress" placeholder="Enter your email ..." required />
                                </div>
                                <div class="form-group">
                                    <label>Telephone</label>
                                    <input min="11" max="11" v-model="phone" class="form-control" type="text" name="phone" autocomplete="off" placeholder="Enter your phone number ..." required />
                                </div>
                                <div class="form-group">
                                    <label>School</label>
                                    <input class="form-control" v-model="school" type="text" name="school" autocomplete="off" placeholder="Tell us the name of your school ..." required />
                                </div>
                                <div class="form-group">
                                    <label>Twitter Handle</label>
                                    <input class="form-control" v-model="twitterUrl" type="url" name="twitter" autocomplete="off" placeholder="Ex. https://twitter.com/rebot" required />
                                </div>
                                <div class="form-group">
                                    <label>Challenge Link</label>
                                    <input class="form-control" v-model="solutionUrl" type="url" name="challenge" autocomplete="off" placeholder="Please provide the link to your solution" required />
                                </div>
                                <div class="photoWrapper">
                                    <img v-if="img === null" src="images/pix.jpg" />
                                    <img v-else :src="img" />
                                    <div class="form-group">
                                        <input class="uploader" type="file" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-lg btn-success" disabled>Push Application</button>
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
// import firebase from "../firebase";
import TopNavigation from "@/components/TopNavigation";

export default {
  name: "register",
  components: {
    TopNavigation
  },
  data() {
    return {
      img: null,
      fullName: '',
      email: '',
      phone: '',
      school: '',
      twitterUrl: '',
      file: '',
      solutionUrl: '',
      processing: false
    }
  },
  methods: {
    async handleSubmit(e) {
        e.preventDefault();
        // this.processing = true;
        // try {
        //     const result = await fb.playersCollection.add({
        //         name: this.fullName,
        //         email: this.email,
        //         telephone: this.phone,
        //         twitter_url: this.twitterUrl,
        //         solution_url: this.solutionUrl,
        //         school: this.school
        //     });
        //     this.$router.push("/leaderboard");
        // }
        // catch(err) {
        //     console.log(err);
        // }
    },
    handleFileUpload() {}
  }
};
</script>

<style>
#register .section {
  margin-top: 50px;
  padding: 20px;
}

#register .section .form .header {
  background-color: #1d1e20;
  padding: 30px;
  color: #fff;
  text-align: center;
}

#register .section .form .body {
  background-color: #000000;
  border: 1px solid #404040;
  padding: 10px;
}

#register label {
    color: #c5c5c5;
}

#register .section .form .body input {
    height: 60px;
    background-color: unset;
    color: #c5c5c5;
    font-size: 18px;
    padding: 10px;
}

#register .section .form .body input:focus {
    border: 1px solid #3fe277;
}

#register .uploader {
    margin-top: 15px;
}

#register .h2 {
  font-family: Courier;
  display: block;
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
}

#register p {
  font-family: Courier;
  font-style: normal;
  line-height: 10px;
}

#register .photoWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #404040;
    padding: 10px;
    margin-top: 10px;
}

#register button {
    margin-top: 10px;
    padding: 10px;
    height: 50px;
}

#register img {
    border: 8px solid #C5C5C5;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 50%;
    width: 80px;
    margin-right: 30px;
}
</style>
