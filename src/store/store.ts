import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";
import type { IItem } from "../data/data";
import { getMockData } from "../data/data";

export const useDataStore = defineStore("data", () => {
  const data: Ref<IItem[]> = ref<IItem[]>(getMockData());

  const setData = (newList: IItem[]) => {
    data.value = newList;
  };

  function $reset() {
    data.value = [];
  }

  return { data, setData, $reset };
});
