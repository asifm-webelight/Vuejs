<script setup>
// import flash from "@/mixins/flash";
import { useFlash } from "@/composables/useFlash";

// export default {

//   setup() {

//     let { flash } = useFlash();

//     return { flash }
//   },

// };

let { flash } = useFlash();

</script>

<template>
  <main>
    <button @click="flash('Test', 'It Works !')">Click Me</button>
  </main>
</template> 
