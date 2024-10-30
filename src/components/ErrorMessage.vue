<script setup lang="ts">
</script>

<template>
   <p class="error-message">
    <svg width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet">
    <g fill="#ff5a79">
        <path d="M37 42.4H27L23 2h18z"></path>
        <ellipse cx="32" cy="54.4" rx="7.7" ry="7.6"></ellipse>
    </g>
    </svg>
        <slot/>
      </p>
</template>

<style scoped>
.error-message {
  color: var(--color-error);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 20px;
  border-radius: 24px;
  background: rgba(255, 116, 97, 0.1);
  display: flex;
  align-items: baseline;
}

.error-message svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
}
</style>
