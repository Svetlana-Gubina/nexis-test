<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import Form from "./Form.vue";
import { useRouter } from "vue-router";
import LoadingView from "./LoadingView.vue";
import { useDataStore } from "../store/store";

import type { IItem } from "../data/data";
import { storeToRefs } from "pinia";

const store = useDataStore();
const { setData } = useDataStore();
const { data } = storeToRefs(store);

interface IProps {
  id: string;
}

const props = defineProps<IProps>();
const defaultItem = {
  id: -1,
  title: "",
  description: "",
  published: true,
  published_from: new Date(),
};

const itemData: Ref<IItem> = ref<IItem>({
  id: -1,
  title: "",
  description: "",
  published: true,
  published_from: new Date(),
});
const isLoading: Ref<boolean> = ref<boolean>(false);
const router = useRouter();

const onSuccess = (editedtem: IItem) => {
  isLoading.value = true;
  // post(newItem);
  console.log("editedtem", editedtem);

  let dataCopy = [...data.value];
  const index = dataCopy.findIndex((i) => i.id === editedtem.id);
  if (index !== -1) {
    dataCopy = dataCopy.filter((i) => i.id !== editedtem.id);
    dataCopy.push(editedtem);
    setData(dataCopy);
  }

  setTimeout(() => {
    isLoading.value = false;
    router.push({
      name: "Home",
    });
  }, 1000);
};

onMounted(() => {
  if (data.value && data.value.length) {
    itemData.value =
      data.value.find((i) => i.id === Number(props.id)) || defaultItem;
  }
});
</script>

<template>
  <LoadingView v-if="isLoading" />
  <Form
    title="Редактирование сущности"
    submit-btn-text="Сохранить"
    :info="itemData"
    @success="onSuccess"
  />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
