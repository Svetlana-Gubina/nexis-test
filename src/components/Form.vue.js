import { ref, watch, onMounted } from "vue";
import ErrorMessage from "./ErrorMessage.vue";
// to import everything from yup
import * as Yup from "yup";
const {
  defineProps,
  defineSlots,
  defineEmits,
  defineExpose,
  defineModel,
  defineOptions,
  withDefaults,
} = await import("vue");
const props = defineProps();
const emit = defineEmits(["success"]);
const formData = ref({
  title: "",
  description: "",
  published_from: new Date(),
});
const updateFormData = () => {
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
const validate = (field) => {
  schema
    .validateAt(field, formData.value)
    .then(() => {
      errors.value[field] = "";
    })
    .catch((err) => {
      errors.value[field] = err.message;
    });
};
const onSubmitCreateForm = () => {
  const newItem = {
    id: props.info.id,
    title: formData.value.title,
    description: formData.value.description,
    published: true,
    published_from: formData.value.published_from,
  };
  schema
    .validate(formData.value, { abortEarly: false })
    .then(() => {
      errors.value = {};
      emit("success", newItem);
      return Promise.resolve();
    })
    .catch((err) => {
      err.inner.forEach((error) => {
        errors.value[error.path] = error.message;
      });
    });
};
onMounted(() => {
  updateFormData();
});
const handleDate = (e) => {
  formData.value.published_from = e.target.value;
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import("vue")).defineComponent({
  emits: {},
});
let __VLS_functionalComponentProps;
function __VLS_template() {
  const __VLS_ctx = {};
  const __VLS_localComponents = {
    ...{},
    ...{},
    ...__VLS_ctx,
  };
  let __VLS_components;
  const __VLS_localDirectives = {
    ...{},
    ...__VLS_ctx,
  };
  let __VLS_directives;
  let __VLS_styleScopedClasses;
  __VLS_styleScopedClasses["form-wrapper"];
  __VLS_styleScopedClasses["form"];
  __VLS_styleScopedClasses["form"];
  __VLS_styleScopedClasses["form"];
  __VLS_styleScopedClasses["form"];
  __VLS_styleScopedClasses["form"];
  // CSS variable injection
  // CSS variable injection end
  let __VLS_resolvedLocalAndGlobalComponents;
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.section,
    __VLS_intrinsicElements.section,
  )({ ...{ class: "form-wrapper" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.h1,
    __VLS_intrinsicElements.h1,
  )({});
  __VLS_ctx.title;
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.form,
    __VLS_intrinsicElements.form,
  )({
    ...{ onSubmit: __VLS_ctx.onSubmitCreateForm },
    ...{ class: "form" },
    method: "POST",
    novalidate: true,
    "validation-schema": __VLS_ctx.schema,
  });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.label,
    __VLS_intrinsicElements.label,
  )({ for: "title" });
  __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
    ...{
      onBlur: (...[$event]) => {
        __VLS_ctx.validate("title");
      },
    },
    type: "text",
    id: "title",
    value: __VLS_ctx.formData.title,
    placeholder: "Введите название",
  });
  if (!!__VLS_ctx.errors.title) {
    // @ts-ignore
    [ErrorMessage, ErrorMessage];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(
      ErrorMessage,
      new ErrorMessage({}),
    );
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_ctx.errors.title;
    __VLS_nonNullable(__VLS_4.slots).default;
    var __VLS_4;
  }
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.label,
    __VLS_intrinsicElements.label,
  )({ for: "description" });
  const __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.VMdEditor;
  /** @type { [typeof __VLS_components.VMdEditor, typeof __VLS_components.vMdEditor, typeof __VLS_components.VMdEditor, typeof __VLS_components.vMdEditor, ] } */
  // @ts-ignore
  const __VLS_6 = __VLS_asFunctionalComponent(
    __VLS_5,
    new __VLS_5({
      id: "description",
      modelValue: __VLS_ctx.formData.description,
      height: "400px",
    }),
  );
  const __VLS_7 = __VLS_6(
    {
      id: "description",
      modelValue: __VLS_ctx.formData.description,
      height: "400px",
    },
    ...__VLS_functionalComponentArgsRest(__VLS_6),
  );
  if (!!__VLS_ctx.errors.description) {
    // @ts-ignore
    [ErrorMessage, ErrorMessage];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(
      ErrorMessage,
      new ErrorMessage({}),
    );
    const __VLS_12 = __VLS_11(
      {},
      ...__VLS_functionalComponentArgsRest(__VLS_11),
    );
    __VLS_ctx.errors.description;
    __VLS_nonNullable(__VLS_15.slots).default;
    var __VLS_15;
  }
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.label,
    __VLS_intrinsicElements.label,
  )({ for: "published_from" });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.input,
    __VLS_intrinsicElements.input,
  )({
    ...{ onInput: __VLS_ctx.handleDate },
    type: "date",
    id: "published_from",
    name: "published_from",
    value: new Date(__VLS_ctx.formData.published_from)
      .toISOString()
      .split("T")[0],
  });
  if (!!__VLS_ctx.errors.published_from) {
    // @ts-ignore
    [ErrorMessage, ErrorMessage];
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(
      ErrorMessage,
      new ErrorMessage({}),
    );
    const __VLS_17 = __VLS_16(
      {},
      ...__VLS_functionalComponentArgsRest(__VLS_16),
    );
    __VLS_ctx.errors.published_from;
    __VLS_nonNullable(__VLS_20.slots).default;
    var __VLS_20;
  }
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.button,
    __VLS_intrinsicElements.button,
  )({ type: "submit" });
  __VLS_ctx.submitBtnText;
  __VLS_styleScopedClasses["form-wrapper"];
  __VLS_styleScopedClasses["form"];
  var __VLS_slots;
  var __VLS_inheritedAttrs;
  const __VLS_refs = {};
  var $refs;
  var $el;
  return {
    attrs: {},
    slots: __VLS_slots,
    refs: $refs,
    rootEl: $el,
  };
}
const __VLS_self = (await import("vue")).defineComponent({
  setup() {
    return {
      ErrorMessage: ErrorMessage,
      formData: formData,
      errors: errors,
      schema: schema,
      validate: validate,
      onSubmitCreateForm: onSubmitCreateForm,
      handleDate: handleDate,
    };
  },
  emits: {},
  __typeProps: {},
});
export default (await import("vue")).defineComponent({
  setup() {
    return {};
  },
  emits: {},
  __typeProps: {},
  __typeEl: {},
}); /* PartiallyEnd: #4569/main.vue */
