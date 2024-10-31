<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { IItem } from "../data/data";
import Card from "./Card.vue";
import ModalComponent from "./ModalComponent.vue";
import { useDataStore } from "../store/store";
import { storeToRefs } from "pinia";

const isModalOpened: Ref<boolean> = ref<boolean>(false);
const itemIdToRemove: Ref<number | null> = ref<number | null>(null);
const store = useDataStore();
const { setData } = useDataStore();
const { data } = storeToRefs(store);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

const remove = (id: number) => {
  openModal();
  itemIdToRemove.value = id;
};

const removeCard = (): void => {
  closeModal();
  const filtered = [...data.value].filter(
    (item) => item.id !== itemIdToRemove.value,
  );
  setData(filtered);
};

const cancel = () => {
  closeModal();
  itemIdToRemove.value = null;
};

const sortById = (a: IItem, b: IItem) => {
  // console.log("a, b", a, b)
  return a.id - b.id;
};
</script>

<template>
  <ModalComponent
    :isOpen="isModalOpened"
    @modal-close="closeModal"
    name="login-modal"
  >
    <template #content>
      <div class="modal-content">
        <p>Вы действительно хотите удалить заметку?</p>

        <div class="modal-footer">
          <button type="button" @click="removeCard">Да</button>
          <button type="button" @click="cancel">Нет</button>
        </div>
      </div>
    </template>
  </ModalComponent>
  <section class="main-content">
    <h1 class="sr-only">Список карточек</h1>
    <div class="cards">
      <ul v-if="data" class="card-list">
        <li v-for="card in data.sort(sortById)" :key="card.id">
          <Card :info="card" @remove="remove" />
        </li>
      </ul>
    </div>
    <div class="controls">
      <div class="controls-wrapper">
        <router-link to="/create"
          ><svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9H17M9 1L9 17"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          Создать заметку</router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-content {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.cards {
  max-width: 70%;
}

.card-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

.controls-wrapper {
  position: fixed;
  top: 40px;
  right: 10%;
  z-index: 1000;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(13, 77%, 55%);
  border-radius: 8px;
}

.controls-wrapper a {
  color: #ffffff;
}

.controls-wrapper a:hover,
.controls-wrapper a:focus {
  color: var(--color-link);
}

.controls-wrapper a svg {
  stroke: #ffffff;
}

.controls-wrapper a:hover svg,
.controls-wrapper a:focus svg {
  stroke: var(--color-link);
}

.modal-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-content p {
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
}

.modal-footer {
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-footer button {
  margin: 20px;
}

@media (max-width: 1250px) {
  .controls-wrapper {
    right: 0;
  }
}

@media (max-width: 1100px) {
  .card-list {
    padding-top: 120px;
  }
}

@media (max-width: 900px) {
  .main-content {
    flex-direction: column;
    flex-wrap: wrap;
  }

  .cards {
    width: 100%;
    max-width: 100%;
  }

  .card-list {
    display: flex;
    flex-direction: column;
  }
}
</style>
