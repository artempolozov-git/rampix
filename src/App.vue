<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <feedback></feedback>
    <feedback-reviews></feedback-reviews>
    <router-view name="footer"></router-view>
    <mobile-navigation></mobile-navigation>
  </div>
</template>
<script>

  import FeedbackReviews from "@/components/FeedbackReviews";
  import MobileNavigation from "@/components/MobileNavigation";
  import Feedback from "@/components/Feedback";
  export default {
    components: {
        Feedback,
      MobileNavigation,
      FeedbackReviews,

    },
    computed: {
      defaultViewKey: function() {
        return this.$route.name;
      }
    }
  }
</script>
<style>
  html, body {
    height: 100%;
  }
  body {
    margin: initial;
    font-family: GoogleSans;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  @font-face {
      font-family: GoogleSans;
      src: url('./assets/GoogleSans-Bold.ttf');
      font-weight: bold;
      font-display: fallback;
  }
  @font-face {
      font-family: GoogleSans;
      src: url('./assets/GoogleSans-Regular.ttf');
      font-weight: normal;
  }
  @font-face {
      font-family: GoogleSans;
      src: url('./assets/GoogleSans-Medium.ttf');
      font-weight: 500;
  }
  #app-content {
    flex: 1 0 auto;
    max-width: 1920px;
    align-self: center;
    width: -webkit-fill-available;
  }
</style>