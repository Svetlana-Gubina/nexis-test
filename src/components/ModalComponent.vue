<script lang="ts" setup>
import { defineProps, defineEmits, ref } from "vue";
import { UseFocusTrap } from "@vueuse/integrations/useFocusTrap/component";

defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const closeModal = () => {
  emit("modal-close");
};

const target = ref(null);
</script>

<template>
  <div v-if="isOpen" class="modal-overlay">
    <UseFocusTrap>
      <div class="modal-wrapper" ref="target">
        <div class="modal-container" ref="target">
          <button
            class="modal-close"
            type="button"
            aria-label="Закрыть модальное окно"
            @click="closeModal"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <slot name="content"></slot>
        </div>
      </div>
    </UseFocusTrap>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  width: 600px;
  margin: 50px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 2px;
  border-radius: 40px;
  position: relative;
}

.modal-close {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
}


@media (max-width: 768px) {
  .modal-container {
    width: calc(100% - 40px);
    margin: 20px auto;
  }
}

@media (max-width: 360px) {
  .modal-container {
    width: 100%;
    padding: 24px 16px;
  }
}
</style>
