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
                            <p>Fill the form below to participate in the #7days code challenge</p>
                        </div>
                        <div class="body">
                            <form @submit.prevent="handleSubmit">
                                <div class="form-group">
                                    <label>Full Name <span class="req">*</span></label>
                                    <input class="form-control" v-model="name" type="text" autocomplete="off" name="fullName" placeholder="Enter your full name..." required />
                                </div>
                                <div class="form-group">
                                    <label>Email Address <span class="req">*</span></label>
                                    <input class="form-control" v-model="email" type="email" autocomplete="off" name="emailAddress" placeholder="Enter your email ..." required />
                                </div>
                                <div class="form-group">
                                    <label>Telephone <span class="req">*</span></label>
                                    <input min="11" max="11" v-model="telephone" class="form-control" type="text" name="phone" autocomplete="off" placeholder="Enter your phone number ..." required />
                                </div>
                                <div class="form-group">
                                    <label>School <span class="req">*</span></label>
                                    <input class="form-control" v-model="school" type="text" name="school" autocomplete="off" placeholder="Tell us the name of your school ..." required />
                                </div>
                                <div class="form-group">
                                    <label>Twitter Handle <span class="req">*</span></label>
                                    <input class="form-control" v-model="twitter_url" type="url" name="twitter" autocomplete="off" placeholder="Ex. https://twitter.com/rebot" required />
                                </div>
                                <div class="form-group">
                                    <label>Track <span class="req">*</span></label>
                                    <select class="form-control" v-model="track" name="track" required>
                                        <option value="">--select your track --</option>
                                        <option v-for="(track,index) in tracks" v-bind:key="index" :value="track.id">{{track.name}}</option>
                                    </select>
                                </div>
                                <div class="photoWrapper">
                                    <div>
                                        <img v-if="imageUrl === null" src="../assets/images/avatar.jpg" />
                                        <img v-else :src="imageUrl" />
                                    </div>
                                    <div>
                                        <input class="uploader" type="file" ref="image" accept="image/*" @change="handleFileUpload" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button v-if="processing" type="button" class="form-control btn btn-lg btn-success" disabled><i class="fa fa-spinner fa-spin"></i> please wait...</button>
                                    <button v-else type="submit" class="form-control btn btn-lg btn-success" :disabled="buttonActive === true">Register</button>
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
import { createPlayer } from "@/services/PlayerService";
import { allTracks } from "@/services/TrackService";
import TopNavigation from "@/components/TopNavigation";
import { toBase64 } from "@/helpers/utils";

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
      tracks: [],
      processing: false,
      buttonActive: true
    }
  },
  created() {
    this.getTracks();
  },
  methods: {
    async handleSubmit(e) {
        e.preventDefault();
        this.processing = true;
        try {
            await createPlayer({
                name: this.name,
                email: this.email,
                telephone: this.telephone,
                twitter_url: this.twitter_url,
                school: this.school,
                image_url: this.image_url,
                track_id: this.track,
            });
            this.$swal('Created Successfully!','Your profile has been successfully created','success');
            window.location.reload();
        }
        catch({response: {data}}) {
            this.$swal('Something went wrong',`${data.message}`,'error');
        }
        finally {
            this.processing = false;
        }
    },
    async handleFileUpload(e) {
        const files = e.target.files;
        if (files[0] !== undefined) {
            const fr = new FileReader();
            fr.readAsDataURL(files[0]);
            fr.addEventListener("load", async () => {
                this.imageUrl = fr.result;
                this.image_url = await toBase64(files[0]);
                console.log(this.image_url);
                this.buttonActive = false;
            });
        }
    },
    async getTracks() {
        try {
            const {data} = await allTracks();
            this.tracks = data.data;
        }
        catch (err) {
            console.log(err);
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
        color: #fff;
        text-align: left;
        margin-bottom: 30px;
    }

    #register .section .form .body {
        background-color: #1B1C21;
        padding: 50px;
    }

    #register label {
        color: #c5c5c5;
    }

    #register .section .form .body input, #register .section .form .body select {
        height: 40px;
        background-color: #222328;
        color: #5A6872;
        font-size: 16px;
        padding: 10px;
        border-radius: 0;
        border: 1px solid #2C363E;
    }

    #register .section .form .body input[type="file"] {
        background-color: unset;
        border: 0;
    }

    #register .section .form .body input:focus, #register .section .form .body select:focus {
        border: 1px solid #F57C00;
    }

    #register .h2 {
        display: block;
        text-transform: uppercase;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;
        color: #ffffff;
    }

    #register p {
        font-style: normal;
        line-height: 10px;
        font-size: 18px;
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
        background: #F57C00;
        border-radius: 0;
        color: #fff;
        text-align: left;
        border: 0;
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
        color: #fff;
        text-align: left;
        margin-bottom: 30px;
    }

    #register .section .form .body {
        background-color: #1B1C21;
        padding: 30px;
    }

    #register label {
        color: #c5c5c5;
    }

    #register .section .form .body input, #register .section .form .body select {
        height: 40px;
        background-color: #222328;
        color: #5A6872;
        font-size: 16px;
        padding: 10px;
        border-radius: 0;
        border: 1px solid #2C363E;
    }

    #register .section .form .body input:focus, #register .section .form .body select:focus {
        border: 1px solid #F57C00;
    }

    #register .h2 {
        display: block;
        text-transform: uppercase;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        color: #ffffff;
    }

    #register p {
        font-style: normal;
    }

    #register .photoWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #404040;
        margin-top: 10px;
        padding: 10px;
    }

    #register button {
        margin-top: 10px;
        padding: 10px;
        height: 50px;
        background: #F57C00;
        border-radius: 0;
        color: #fff;
        text-align: left;
        border: 0;
    }

    #register .uploader {
        background-color: unset;
        margin-top: 10px;
    }

    .uploader:active {
        border: 0;
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
