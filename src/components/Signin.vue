<template>
  <v-container>
    <div v-if="loading" class="text-center">
      <v-progress-circular size="50" color="red" indeterminate></v-progress-circular>
      <p>กำลังดำเนินการ...</p>
    </div>

    <v-card v-else>
      <v-list>
        <v-list-item @click="signinByGoogle">
          <v-list-item-avatar>
            <v-icon color="red">mdi-google</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>เข้าสู่ระบบด้วย Google</v-list-item-title>    
        </v-list-item>
        <v-list-item @click="signinByFacebook">
          <v-list-item-avatar>
            <v-icon color="blue">mdi-facebook</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>เข้าสู่ระบบด้วย facebook</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>


<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
      return {
          loading: true
      };
  },

  mounted() {
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        if (result.user == null) {
            this.loading = false;
        } else {
          this.$router.replace("/");
        }
      });
  },

  methods: {
    signinByGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    }
  },
  methods1: {
    signinByFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
          // เข้าสู่ระบบผ่าน Facebook สำเร็จ
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          // เกิดข้อผิดพลาดในการเข้าสู่ระบบผ่าน Facebook
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    }
  }
};
</script>
