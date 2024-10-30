<script lang="ts" setup>
import type  {IItem} from "../data/data";

interface IProps {
    info: IItem;
}

defineProps<IProps>();

const emit = defineEmits(["remove"]);

const remove = (itemId:number) => {
  emit("remove", itemId);
};
</script>

<template>
  <div class="wrapper">
    <h2>{{ info.title }} <span>id: {{ info.id }}</span></h2>
    <p>
      {{ info.description }}
    </p>
    <span>{{ new Date(info.published_from).toLocaleDateString() }}</span>

    <div class="footer">
    <router-link :to="{ name: 'Edit', params: { id: info.id }}">Редактировать</router-link>    
    <button type="button" @click="remove(info.id)">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L17 17M17 1L1 17"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      Удалить
    </button>

    </div>
    
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  padding: 20px 28px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.4);
  background-color: var(--bg-card);
  border: 1px solid rgba(0, 0, 0, 0.4);
}

.wrapper h2 {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
  padding: 0;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}

.wrapper h2 span {
    font-size: 18px;
    line-height: 1.5;
    margin-top: 5px;
}

.wrapper p {
  text-overflow: ellipsis;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6;
}

.wrapper button {
  margin-left: auto;
  border: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: inherit;
}

.wrapper button:hover,
.wrapper button:focus{
    color: var(--color-link-hover);
}

.wrapper button svg {
    margin-right: 5px;
    stroke: var(--color-dark);
}

.wrapper button:hover svg,
.wrapper button:focus svg{
    stroke: var(--color-link-hover);
}

.footer {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items:center;
    justify-content: space-between;
}

.footer a {
    color: var(--color-dark);
}
.footer a:hover,
.footer a:focus {
    color: var(--color-link-hover);
}
</style>
