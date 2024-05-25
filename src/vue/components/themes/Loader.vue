<template>
  <div id="loading">
    <div class="loading-center">
      <img src="/assets/images/loader.gif" alt="loader" />
    </div>
  </div>
</template>
<script>
import * as $ from "jquery";
export default {
  name: "Loader",
  watch: {
    $route(to, from) {
      $("#loading").show();
      setTimeout(() => {
        $("#loading").delay(1000).fadeOut("slow");
      }, 100);
    },
  },
};
</script>
