const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps();
const emit = defineEmits(["remove"]);
const remove = (itemId) => {
    emit("remove", itemId);
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
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
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['footer'];
    __VLS_styleScopedClasses['footer'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.info.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.info.id);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.info.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (new Date(__VLS_ctx.info.published_from).toLocaleDateString());
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("footer") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (({ name: 'Edit', params: { id: __VLS_ctx.info.id } })), }));
    const __VLS_2 = __VLS_1({ to: (({ name: 'Edit', params: { id: __VLS_ctx.info.id } })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.remove(__VLS_ctx.info.id);
            } }, type: ("button"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("18"), height: ("18"), viewBox: ("0 0 18 18"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M1 1L17 17M17 1L1 17"), "stroke-width": ("2"), "stroke-linecap": ("round"), });
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['footer'];
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
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            remove: remove,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
