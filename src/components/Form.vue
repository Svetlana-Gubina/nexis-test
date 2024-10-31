<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import type { Ref } from "vue";
import ErrorMessage from "./ErrorMessage.vue";

import type { IItem } from "../data/data";

// to import everything from yup
import * as Yup from "yup";

interface IProps {
  info: IItem;
  title: string;
  submitBtnText: string;
}
const props = defineProps<IProps>();
const emit = defineEmits(["success"]);

type Data = {
  title: string;
  description: string;
  published_from: Date;
};
type D = keyof Data;

const formData: Ref<Data> = ref<Data>({
  title: "",
  description: "",
  published_from: new Date(),
});

const updateFormData = (): void => {
  if (props.info) {
    formData.value = {
      title: props.info.title,
      description: props.info.description,
      published_from: props.info.published_from,
    };
  }
};

watch(
  () => props.info,
  () => {
    updateFormData();
  },
);

const errors = ref({
  title: "",
  description: "",
  published_from: "",
});

const minDate = new Date();

const schema = Yup.object().shape({
  title: Yup.string()
    .required("Введите название")
    .max(50, "Заголовок не может быть длиннее 50 символов"),
  description: Yup.string().required("Введите описание"),
  published_from: Yup.date()
    .nullable()
    .required("Введите дату")
    .min(minDate, "Дата не может быть меньше текущей"),
});

const validate = (field: D) => {
  schema
    .validateAt(field, formData.value)
    .then(() => {
      errors.value[field] = "";
    })
    .catch((err) => {
      errors.value[field] = err.message;
    });
};

const onSubmitCreateForm = (): void => {
  const newItem: IItem = {
    id: props.info.id,
    title: formData.value.title,
    description: formData.value.description,
    published: true,
    published_from: formData.value.published_from,
  };
  schema
    .validate(formData.value, { abortEarly: false })
    .then(() => {
      errors.value = {} as {
        title: string;
        description: string;
        published_from: string;
      };
      emit("success", newItem);
      return Promise.resolve();
    })
    .catch((err) => {
      err.inner.forEach((error: any) => {
        errors.value[error.path as D] = error.message;
      });
    });
};

onMounted(() => {
  updateFormData();
});

const handleDate = (e: any) => {
  formData.value.published_from = e.target.value;
};
</script>

<template>
  <section class="form-wrapper">
    <h1>{{ title }}</h1>
    <form
      class="form"
      method="POST"
      @submit.prevent="onSubmitCreateForm"
      novalidate
      :validation-schema="schema"
    >
      <label for="title">Название</label>
      <input
        type="text"
        id="title"
        v-model="formData.title"
        placeholder="Введите название"
        @blur="validate('title')"
      />

      <ErrorMessage v-if="!!errors.title">
        {{ errors.title }}
      </ErrorMessage>

      <label for="description">Описание</label>
      <!-- <textarea id="description"
          v-model="formData.description"
          placeholder="Введите описание"
          @blur="validate('description')"
          rows="5">
        </textarea> -->
      <v-md-editor
        id="description"
        v-model="formData.description"
        height="400px"
      ></v-md-editor>

      <ErrorMessage v-if="!!errors.description">
        {{ errors.description }}
      </ErrorMessage>

      <label for="published_from">Дата</label>
      <input
        type="date"
        id="published_from"
        name="published_from"
        :value="new Date(formData.published_from).toISOString().split('T')[0]"
        @input="handleDate"
      />

      <ErrorMessage v-if="!!errors.published_from">
        {{ errors.published_from }}
      </ErrorMessage>

      <button type="submit">{{ submitBtnText }}</button>
    </form>
  </section>
</template>

<style scoped>
.form-wrapper {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.form-wrapper h1 {
  font-size: 24px;
  margin: 0;
  margin-bottom: 40px;
}

.form {
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
}

.form label {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  color: var(-color-dark-light);
  margin-left: 16px;
  margin-bottom: 8px;
}

.form input,
.form textarea {
  font-family: inherit;
  border-radius: 8px;
  background: #ffffff;
  padding: 16px;
  margin-bottom: 24px;
  width: 100%;
  max-width: 100%;
  font-size: inherit;
}

.form textarea {
  resize: none;
}

.form input:last-of-type {
  margin-bottom: 40px;
}
</style>
