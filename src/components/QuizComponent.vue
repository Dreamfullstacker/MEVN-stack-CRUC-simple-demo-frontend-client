<template>
  <div>
    <Selectdifffcult/>
    <Display/>
  </div>
</template>

<script>
import Selectdifffcult from "./QuizSelectDiffculty.vue";
import Display from "./QuizDisplay.vue";

export default {
  name: "App",
  components: {
    Selectdifffcult,
    Display
  }
};
</script>