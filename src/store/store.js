import { defineStore } from "pinia";
import { ref } from "vue";
import { getMockData } from "../data/data";
export const useDataStore = defineStore("data", () => {
  const data = ref(getMockData());
  const setData = (newList) => {
    data.value = newList;
  };
  function $reset() {
    data.value = [];
  }
  return { data, setData, $reset };
});
