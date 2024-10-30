import { defineProps, defineEmits, ref } from "vue";
import { UseFocusTrap } from "@vueuse/integrations/useFocusTrap/component";
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    isOpen: Boolean,
});
const emit = defineEmits(["modal-close"]);
const closeModal = () => {
    emit("modal-close");
};
const target = ref(null);
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        isOpen: Boolean,
    },
    emits: {},
});
;
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
    __VLS_styleScopedClasses['modal-container'];
    __VLS_styleScopedClasses['modal-container'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.isOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-overlay") }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.UseFocusTrap;
        /** @type { [typeof __VLS_components.UseFocusTrap, typeof __VLS_components.UseFocusTrap, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-wrapper") }, ref: ("target"), });
        // @ts-ignore navigation for `const target = ref()`
        __VLS_ctx.target;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-container") }, ref: ("target"), });
        // @ts-ignore navigation for `const target = ref()`
        __VLS_ctx.target;
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeModal) }, ...{ class: ("modal-close") }, type: ("button"), "aria-label": ("Закрыть модальное окно"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("18"), height: ("18"), viewBox: ("0 0 18 18"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M1 1L17 17M17 1L1 17"), stroke: ("white"), "stroke-width": ("2"), "stroke-linecap": ("round"), });
        var __VLS_6 = {};
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
    }
    __VLS_styleScopedClasses['modal-overlay'];
    __VLS_styleScopedClasses['modal-wrapper'];
    __VLS_styleScopedClasses['modal-container'];
    __VLS_styleScopedClasses['modal-close'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "target": __VLS_nativeElements['div'],
    };
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            UseFocusTrap: UseFocusTrap,
            closeModal: closeModal,
            target: target,
        };
    },
    emits: {},
    props: {
        isOpen: Boolean,
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        isOpen: Boolean,
    },
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
