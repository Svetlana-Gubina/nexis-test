import { ref } from "vue";
import Card from "./Card.vue";
import ModalComponent from "./ModalComponent.vue";
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
// import { getMockData } from '../data/data';
const isModalOpened = ref(false);
const itemIdToRemove = ref(null);
const store = useDataStore();
const { setData } = useDataStore();
const { data } = storeToRefs(store);
const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};
const remove = (id) => {
  openModal();
  itemIdToRemove.value = id;
};
const removeCard = () => {
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
const sortById = (a, b) => {
  // console.log("a, b", a, b)
  return a.id - b.id;
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
  __VLS_styleScopedClasses["controls-wrapper"];
  __VLS_styleScopedClasses["controls-wrapper"];
  __VLS_styleScopedClasses["controls-wrapper"];
  __VLS_styleScopedClasses["controls-wrapper"];
  __VLS_styleScopedClasses["controls-wrapper"];
  __VLS_styleScopedClasses["controls-wrapper"];
  __VLS_styleScopedClasses["modal-content"];
  __VLS_styleScopedClasses["modal-footer"];
  __VLS_styleScopedClasses["controls-wrapper"];
  __VLS_styleScopedClasses["card-list"];
  __VLS_styleScopedClasses["main-content"];
  __VLS_styleScopedClasses["cards"];
  __VLS_styleScopedClasses["card-list"];
  // CSS variable injection
  // CSS variable injection end
  let __VLS_resolvedLocalAndGlobalComponents;
  // @ts-ignore
  [ModalComponent, ModalComponent];
  // @ts-ignore
  const __VLS_0 = __VLS_asFunctionalComponent(
    ModalComponent,
    new ModalComponent({
      ...{ onModalClose: {} },
      isOpen: __VLS_ctx.isModalOpened,
      name: "login-modal",
    }),
  );
  const __VLS_1 = __VLS_0(
    {
      ...{ onModalClose: {} },
      isOpen: __VLS_ctx.isModalOpened,
      name: "login-modal",
    },
    ...__VLS_functionalComponentArgsRest(__VLS_0),
  );
  let __VLS_5;
  const __VLS_6 = {
    onModalClose: __VLS_ctx.closeModal,
  };
  let __VLS_2;
  let __VLS_3;
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.template,
    __VLS_intrinsicElements.template,
  )({});
  {
    const { content: __VLS_thisSlot } = __VLS_nonNullable(__VLS_4.slots);
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.div,
      __VLS_intrinsicElements.div,
    )({ ...{ class: "modal-content" } });
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.p,
      __VLS_intrinsicElements.p,
    )({});
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.div,
      __VLS_intrinsicElements.div,
    )({ ...{ class: "modal-footer" } });
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.button,
      __VLS_intrinsicElements.button,
    )({ ...{ onClick: __VLS_ctx.removeCard }, type: "button" });
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.button,
      __VLS_intrinsicElements.button,
    )({ ...{ onClick: __VLS_ctx.cancel }, type: "button" });
  }
  var __VLS_4;
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.section,
    __VLS_intrinsicElements.section,
  )({ ...{ class: "main-content" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.h1,
    __VLS_intrinsicElements.h1,
  )({ ...{ class: "sr-only" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div,
  )({ ...{ class: "cards" } });
  if (__VLS_ctx.data) {
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.ul,
      __VLS_intrinsicElements.ul,
    )({ ...{ class: "card-list" } });
    for (const [card] of __VLS_getVForSourceType(
      __VLS_ctx.data.sort(__VLS_ctx.sortById),
    )) {
      __VLS_elementAsFunction(
        __VLS_intrinsicElements.li,
        __VLS_intrinsicElements.li,
      )({ key: card.id });
      // @ts-ignore
      [Card];
      // @ts-ignore
      const __VLS_7 = __VLS_asFunctionalComponent(
        Card,
        new Card({ ...{ onRemove: {} }, info: card }),
      );
      const __VLS_8 = __VLS_7(
        { ...{ onRemove: {} }, info: card },
        ...__VLS_functionalComponentArgsRest(__VLS_7),
      );
      let __VLS_12;
      const __VLS_13 = {
        onRemove: __VLS_ctx.remove,
      };
      let __VLS_9;
      let __VLS_10;
      var __VLS_11;
    }
  }
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div,
  )({ ...{ class: "controls" } });
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div,
  )({ ...{ class: "controls-wrapper" } });
  const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
  /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
  // @ts-ignore
  const __VLS_15 = __VLS_asFunctionalComponent(
    __VLS_14,
    new __VLS_14({ to: "/create" }),
  );
  const __VLS_16 = __VLS_15(
    { to: "/create" },
    ...__VLS_functionalComponentArgsRest(__VLS_15),
  );
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.svg,
    __VLS_intrinsicElements.svg,
  )({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  });
  __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
    d: "M1 9H17M9 1L9 17",
    "stroke-width": "2",
    "stroke-linecap": "round",
  });
  __VLS_nonNullable(__VLS_19.slots).default;
  var __VLS_19;
  __VLS_styleScopedClasses["modal-content"];
  __VLS_styleScopedClasses["modal-footer"];
  __VLS_styleScopedClasses["main-content"];
  __VLS_styleScopedClasses["sr-only"];
  __VLS_styleScopedClasses["cards"];
  __VLS_styleScopedClasses["card-list"];
  __VLS_styleScopedClasses["controls"];
  __VLS_styleScopedClasses["controls-wrapper"];
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
      Card: Card,
      ModalComponent: ModalComponent,
      isModalOpened: isModalOpened,
      data: data,
      closeModal: closeModal,
      remove: remove,
      removeCard: removeCard,
      cancel: cancel,
      sortById: sortById,
    };
  },
});
export default (await import("vue")).defineComponent({
  setup() {
    return {};
  },
}); /* PartiallyEnd: #4569/main.vue */
