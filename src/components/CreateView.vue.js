import { ref } from "vue";
import { useRouter } from "vue-router";
import LoadingView from "./LoadingView.vue";
import Form from "./Form.vue";
import { useDataStore } from "../store/store";
import { storeToRefs } from "pinia";
const {
  defineProps,
  defineSlots,
  defineEmits,
  defineExpose,
  defineModel,
  defineOptions,
  withDefaults,
} = await import("vue");
const store = useDataStore();
const { setData } = useDataStore();
const { data } = storeToRefs(store);
let getLen = () => data.value.length;
const newInfo = {
  id: getLen() + 1,
  title: "",
  description: "",
  published: true,
  published_from: new Date(),
};
const isLoading = ref(false);
const router = useRouter();
const onSuccess = (newItem) => {
  isLoading.value = true;
  // post(newItem);
  console.log("newItem", newItem);
  let dataCopy = [...data.value, newItem];
  setData(dataCopy);
  setTimeout(() => {
    isLoading.value = false;
    router.push({
      name: "Home",
    });
  }, 1000);
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import("vue")).defineComponent({});
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
  // CSS variable injection
  // CSS variable injection end
  let __VLS_resolvedLocalAndGlobalComponents;
  if (__VLS_ctx.isLoading) {
    // @ts-ignore
    [LoadingView];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(
      LoadingView,
      new LoadingView({}),
    );
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
  }
  // @ts-ignore
  [Form];
  // @ts-ignore
  const __VLS_5 = __VLS_asFunctionalComponent(
    Form,
    new Form({
      ...{ onSuccess: {} },
      info: __VLS_ctx.newInfo,
      title: "Создание сущности",
      submitBtnText: "Опубликовать",
    }),
  );
  const __VLS_6 = __VLS_5(
    {
      ...{ onSuccess: {} },
      info: __VLS_ctx.newInfo,
      title: "Создание сущности",
      submitBtnText: "Опубликовать",
    },
    ...__VLS_functionalComponentArgsRest(__VLS_5),
  );
  let __VLS_10;
  const __VLS_11 = {
    onSuccess: __VLS_ctx.onSuccess,
  };
  let __VLS_7;
  let __VLS_8;
  var __VLS_9;
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
      LoadingView: LoadingView,
      Form: Form,
      newInfo: newInfo,
      isLoading: isLoading,
      onSuccess: onSuccess,
    };
  },
});
export default (await import("vue")).defineComponent({
  setup() {
    return {};
  },
}); /* PartiallyEnd: #4569/main.vue */
