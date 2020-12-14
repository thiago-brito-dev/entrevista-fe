<template>
    <div class="title-container">
      <slot name="title-place" />
      <div class="blueBall"></div>
      <slot name="title-effect-place" />
    </div>
</template>

<script>

export default {
  name: "last-episode-title",
};
</script>