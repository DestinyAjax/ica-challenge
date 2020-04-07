<template>
    <div id="register">
        <top-navigation current="register"></top-navigation>
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>
                    <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12 form">
                        <div class="header">
                            <span class="h2">Register</span>
                            <p>Register to participate in the #7days code challenge</p>
                        </div>
                        <div class="body">
                            <form @submit.prevent="handleSubmit">
                                <div class="form-group">
                                    <label>Full Name</label>
                                    <input class="form-control" v-model="name" type="text" autocomplete="off" name="fullName" placeholder="Enter your full name..." required />
                                </div>
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input class="form-control" v-model="email" type="email" autocomplete="off" name="emailAddress" placeholder="Enter your email ..." required />
                                </div>
                                <div class="form-group">
                                    <label>Telephone</label>
                                    <input min="11" max="11" v-model="telephone" class="form-control" type="text" name="phone" autocomplete="off" placeholder="Enter your phone number ..." required />
                                </div>
                                <div class="form-group">
                                    <label>School</label>
                                    <input class="form-control" v-model="school" type="text" name="school" autocomplete="off" placeholder="Tell us the name of your school ..." required />
                                </div>
                                <div class="form-group">
                                    <label>Twitter Handle</label>
                                    <input class="form-control" v-model="twitter_url" type="url" name="twitter" autocomplete="off" placeholder="Ex. https://twitter.com/rebot" required />
                                </div>
                                <div class="form-group">
                                    <label>Track</label>
                                    <select class="form-control" v-model="track" name="track" required>
                                        <option value="">--select your track --</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Technical Writing">Technical Writing</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Challenge Link</label>
                                    <input class="form-control" v-model="solution_url" type="url" name="challenge" autocomplete="off" placeholder="Please provide the link to your solution" required />
                                </div>
                                <div class="photoWrapper">
                                    <img v-if="imageUrl === null" src="../assets/images/avatar.jpg" />
                                    <img v-else :src="imageUrl" />
                                    <input class="uploader" type="file" ref="image" accept="image/*" @change="handleFileUpload" required />
                                </div>
                                <div class="form-group">
                                    <button v-if="processing" type="button" class="form-control btn btn-lg btn-success" disabled><i class="fa fa-spinner fa-spin"></i> please wait...</button>
                                    <button v-else type="submit" class="form-control btn btn-lg btn-success" :disabled="buttonActive === true">Push Application</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { storage, playersCollection } from "../firebase";
import TopNavigation from "@/components/TopNavigation";

export default {
  name: "register",
  components: {
    TopNavigation
  },
  data() {
    return {
      imageUrl: null,
      name: '',
      email: '',
      track: '',
      telephone: '',
      school: '',
      twitter_url: '',
      image_url: '',
      solution_url: '',
      processing: false,
      buttonActive: true
    }
  },
  methods: {
    async handleSubmit(e) {
        e.preventDefault();
        this.processing = true;
        try {
            const file = await storage.ref(`images/${Date.now()}`).put(this.image_url);
            const downloadURL = await file.ref.getDownloadURL();
            if (downloadURL) {
                await playersCollection.add({
                    name: this.name,
                    email: this.email,
                    telephone: this.telephone,
                    twitter_url: this.twitter_url,
                    solution_url: this.solution_url,
                    school: this.school,
                    image_url: downloadURL,
                    created_at: Date.now()
                });
                this.$router.push("/leaderboard");
            }
        }
        catch(err) {
            console.log(err);
        }
        finally {
            this.processing = false;
        }
    },
    handleFileUpload(e) {
        const files = e.target.files;
        if (files[0] !== undefined) {
            const fr = new FileReader();
            fr.readAsDataURL(files[0]);

            fr.addEventListener("load", () => {
                this.imageUrl = fr.result;
                this.image_url = files[0];
                this.buttonActive = false;
            });
        }
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width : 992px) {
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

    #register .section .form .body input, #register .section .form .body select {
        height: 60px;
        background-color: unset;
        color: #c5c5c5;
        font-size: 18px;
        padding: 10px;
    }

    #register .section .form .body input:focus {
        border: 1px solid #F57C00;
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
}

@media only screen and (max-width : 768px) {
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

    #register .section .form .body input, #register .section .form .body select {
        height: 40px;
        background-color: unset;
        color: #c5c5c5;
        font-size: 14px;
        padding: 10px;
    }

    #register .section .form .body input:focus {
        border: 1px solid #F57C00;
    }

    #register .h2 {
        font-family: Courier;
        display: block;
        text-transform: uppercase;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        color: #ffffff;
    }

    #register p {
        font-family: Courier;
        font-style: normal;
    }

    #register .photoWrapper {
        display: flex;
        flex-direction: row;
        align-items: left;
        background-color: #404040;
        margin-top: 10px;
        padding: 5px;
    }

    #register button {
        margin-top: 10px;
        padding: 10px;
        height: 40px;
        font-size: 14px;
    }

    .uploader {
        text-align: left;
    }

    .uploader:active {
        border: 0;
    }

    .uploader::-webkit-file-upload-button {
        visibility: hidden;
    }

    #register img {
        border: 3px solid #C5C5C5;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 50%;
        width: 40px;
        margin-right: 30px;
    }
}
</style>
