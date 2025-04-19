<template>
  <div class="pre-wrapper">
    <div v-if="filename">
      {{ filename }}
    </div>
    <div v-if="language">
      {{ language }}
    </div>
    <div v-if="highlights">
      {{ highlights }}
    </div>
    <div v-if="meta">
      {{ meta }}
    </div>
    <pre :class="$props.class"><slot/></pre>
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})
</script>

<style>
.pre-wrapper > * {
  margin-top: 0;
  border: 1px solid #303030;
}
pre code .line {
  display: block;
}
</style>