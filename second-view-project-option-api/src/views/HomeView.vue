<script>
// import flash from "@/mixins/flash";
import { useFlash } from "@/composables/useFlash";

export default {
  setup() {
    useFlash();
  },
};
</script>

<template>
  <main>
    <button @click="flash('It Works !')">Click Me</button>
  </main>
</template>
