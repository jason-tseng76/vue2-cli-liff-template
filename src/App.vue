<template>
  <div id="app">
    <div>payload:{{payload}}</div>
    <div>isLoggedIn:{{isLoggedIn}}</div>
    <div>accessToken:{{accessToken}}</div>
    <div>idToken:{{idToken}}</div>
    <div>profile:{{profile}}</div>
    <div>Error:{{errors}}</div>
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import liff from '@line/liff';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    payload: {},
    isInClient: false,
    isLoggedIn: false,
    accessToken: '',
    idToken: '',
    profile: {},
    errors: null,
  }),
  mounted() {
    this.initLiff();
  },
  methods: {
    async initLiff() {
      try {
        await liff.init({ liffId: '1537609169-w5z1JaoK' });
        this.isInClient = liff.isInClient();
        this.isLoggedIn = liff.isLoggedIn();
        if (this.isLoggedIn) {
          this.payload = liff.getDecodedIDToken();
          console.log(this.payload);
          this.idToken = liff.getIDToken();
          this.accessToken = liff.getAccessToken();
          this.profile = await liff.getProfile();
        }
      } catch (e) {
        this.errors = e;
      }
    },
  },
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
