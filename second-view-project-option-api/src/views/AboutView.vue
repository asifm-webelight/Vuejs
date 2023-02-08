<script setup>
// import flash from "@/mixins/flash";
import { useFlash } from "@/composables/useFlash";

// export default {
//   mixins: [flash],
// };

let { flash } = useFlash();

</script>

<template>
  <div>
    <p>
      <button @click="flash('Yay!', 'It Works On The About Page !', 'info')">Click Me</button>
    </p>
  </div>
</template>
