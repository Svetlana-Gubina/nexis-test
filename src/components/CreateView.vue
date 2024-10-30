<script setup lang="ts">
import { ref } from 'vue';
import type {Ref}from 'vue';
import { useRouter } from "vue-router";
import LoadingView from './LoadingView.vue';
import Form from './Form.vue';

import type {IItem} from "../data/data";
import {useDataStore} from '../store/store'
import { storeToRefs } from "pinia";

 const store = useDataStore();  
 const {setData} = useDataStore();
 const { data }= storeToRefs(store);
 let getLen = () => data.value.length;
 const newInfo:IItem = {
   id: getLen() + 1,
   title: '',
   description: '',
   published: true,
   published_from: new Date()
 }

const isLoading:Ref<boolean> = ref<boolean>(false);
const router = useRouter();

const onSuccess = (newItem:IItem) => {
  isLoading.value = true;
  // post(newItem);
  console.log("newItem", newItem)

  let dataCopy = [...data.value, newItem];
  setData(dataCopy);
 
  setTimeout(() => {
        isLoading.value = false;
        router.push({
          name: "Home"
        })
      }, 1000);
}    


</script>

<template>
  <LoadingView v-if="isLoading" />
  <Form :info="newInfo" title="Создание сущности" submit-btn-text="Опубликовать" @success="onSuccess" />
</template>

<style scoped>
</style>
