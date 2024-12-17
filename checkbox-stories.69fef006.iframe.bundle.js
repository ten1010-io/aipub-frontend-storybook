"use strict";(self.webpackChunkaipub_frontend=self.webpackChunkaipub_frontend||[]).push([[184],{"./node_modules/@radix-ui/react-checkbox/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C1:()=>Indicator,bL:()=>Root});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}var primitive_dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_use_previous_dist=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),react_use_size_dist=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs"),react_use_layout_effect_dist=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");var Presence=props=>{const{present,children}=props,presence=function usePresence(present){const[node,setNode]=react.useState(),stylesRef=react.useRef({}),prevPresentRef=react.useRef(present),prevAnimationNameRef=react.useRef("none"),initialState=present?"mounted":"unmounted",[state,send]=function useStateMachine(initialState,machine){return react.useReducer(((state,event)=>machine[state][event]??state),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return react.useEffect((()=>{const currentAnimationName=getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),(0,react_use_layout_effect_dist.N)((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===styles?.display)send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),(0,react_use_layout_effect_dist.N)((()=>{if(node){let timeoutId;const ownerWindow=node.ownerDocument.defaultView??window,handleAnimationEnd=event=>{const isCurrentAnimation=getAnimationName(stylesRef.current).includes(event.animationName);if(event.target===node&&isCurrentAnimation&&(send("ANIMATION_END"),!prevPresentRef.current)){const currentFillMode=node.style.animationFillMode;node.style.animationFillMode="forwards",timeoutId=ownerWindow.setTimeout((()=>{"forwards"===node.style.animationFillMode&&(node.style.animationFillMode=currentFillMode)}))}},handleAnimationStart=event=>{event.target===node&&(prevAnimationNameRef.current=getAnimationName(stylesRef.current))};return node.addEventListener("animationstart",handleAnimationStart),node.addEventListener("animationcancel",handleAnimationEnd),node.addEventListener("animationend",handleAnimationEnd),()=>{ownerWindow.clearTimeout(timeoutId),node.removeEventListener("animationstart",handleAnimationStart),node.removeEventListener("animationcancel",handleAnimationEnd),node.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:react.useCallback((node2=>{node2&&(stylesRef.current=getComputedStyle(node2)),setNode(node2)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react.Children.only(children),ref=(0,dist.s)(presence.ref,function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(child));return"function"==typeof children||presence.isPresent?react.cloneElement(child,{ref}):null};function getAnimationName(styles){return styles?.animationName||"none"}Presence.displayName="Presence";var react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),[createCheckboxContext,createCheckboxScope]=function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react.createContext(defaultContext),index=defaultContexts.length;defaultContexts=[...defaultContexts,defaultContext];const Provider=props=>{const{scope,children,...context}=props,Context=scope?.[scopeName]?.[index]||BaseContext,value=react.useMemo((()=>context),Object.values(context));return(0,jsx_runtime.jsx)(Context.Provider,{value,children})};return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName]?.[index]||BaseContext,context=react.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}("Checkbox"),[CheckboxProvider,useCheckboxContext]=createCheckboxContext("Checkbox"),Checkbox=react.forwardRef(((props,forwardedRef)=>{const{__scopeCheckbox,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,form,...checkboxProps}=props,[button,setButton]=react.useState(null),composedRefs=(0,dist.s)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=react.useRef(!1),isFormControl=!button||(form||!!button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist.i)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange}),initialCheckedStateRef=react.useRef(checked);return react.useEffect((()=>{const form2=button?.form;if(form2){const reset=()=>setChecked(initialCheckedStateRef.current);return form2.addEventListener("reset",reset),()=>form2.removeEventListener("reset",reset)}}),[button,setChecked]),(0,jsx_runtime.jsxs)(CheckboxProvider,{scope:__scopeCheckbox,state:checked,disabled,children:[(0,jsx_runtime.jsx)(react_primitive_dist.sG.button,{type:"button",role:"checkbox","aria-checked":isIndeterminate(checked)?"mixed":checked,"aria-required":required,"data-state":getState(checked),"data-disabled":disabled?"":void 0,disabled,value,...checkboxProps,ref:composedRefs,onKeyDown:(0,primitive_dist.m)(props.onKeyDown,(event=>{"Enter"===event.key&&event.preventDefault()})),onClick:(0,primitive_dist.m)(props.onClick,(event=>{setChecked((prevChecked=>!!isIndeterminate(prevChecked)||!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))}),isFormControl&&(0,jsx_runtime.jsx)(BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,form,style:{transform:"translateX(-100%)"},defaultChecked:!isIndeterminate(defaultChecked)&&defaultChecked})]})}));Checkbox.displayName="Checkbox";var CheckboxIndicator=react.forwardRef(((props,forwardedRef)=>{const{__scopeCheckbox,forceMount,...indicatorProps}=props,context=useCheckboxContext("CheckboxIndicator",__scopeCheckbox);return(0,jsx_runtime.jsx)(Presence,{present:forceMount||isIndeterminate(context.state)||!0===context.state,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.span,{"data-state":getState(context.state),"data-disabled":context.disabled?"":void 0,...indicatorProps,ref:forwardedRef,style:{pointerEvents:"none",...props.style}})})}));CheckboxIndicator.displayName="CheckboxIndicator";var BubbleInput=props=>{const{control,checked,bubbles=!0,defaultChecked,...inputProps}=props,ref=react.useRef(null),prevChecked=(0,react_use_previous_dist.Z)(checked),controlSize=(0,react_use_size_dist.X)(control);react.useEffect((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});input.indeterminate=isIndeterminate(checked),setChecked.call(input,!isIndeterminate(checked)&&checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]);const defaultCheckedRef=react.useRef(!isIndeterminate(checked)&&checked);return(0,jsx_runtime.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:defaultChecked??defaultCheckedRef.current,...inputProps,tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function isIndeterminate(checked){return"indeterminate"===checked}function getState(checked){return isIndeterminate(checked)?"indeterminate":checked?"checked":"unchecked"}var Root=Checkbox,Indicator=CheckboxIndicator},"./node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function usePrevious(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef({value,previous:value});return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>useSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function useSize(element){const[size,setSize]=react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./stories/checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"ui/Checkbox",component:__webpack_require__("./components/ui/checkbox.tsx").S,parameters:{layout:"centered"},tags:["autodocs"]},Default={argTypes:{checked:{table:{defaultValue:{summary:"false"}}},isIndeterminate:{table:{defaultValue:{summary:"false"}}},isLoading:{table:{defaultValue:{summary:"false"}}}},args:{checked:!1,isIndeterminate:!1,isLoading:!1,disabled:!1}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    checked: {\n      table: {\n        defaultValue: {\n          summary: 'false'\n        }\n      }\n    },\n    isIndeterminate: {\n      table: {\n        defaultValue: {\n          summary: 'false'\n        }\n      }\n    },\n    isLoading: {\n      table: {\n        defaultValue: {\n          summary: 'false'\n        }\n      }\n    }\n  },\n  args: {\n    checked: false,\n    isIndeterminate: false,\n    isLoading: false,\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}}},"./components/ui/checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/react-checkbox/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/utils.ts"),_components_icon_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/icon/icons.tsx"),_components_icon_r_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/icon/r-icon.tsx"),_components_ui_spinner__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/ui/spinner.tsx");const Checkbox=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({isLoading,isIndeterminate,className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__.bL,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("peer h-[18px] w-[18px] shrink-0 rounded-sm bg-color-5 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-color-7 data-[state=checked]:bg-checkbox",{"!bg-checkbox":isIndeterminate},className),...props,children:isLoading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_spinner__WEBPACK_IMPORTED_MODULE_5__.y,{className:"size-2.5"}):isIndeterminate?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center font-black"),children:"-"}):props.checked?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__.C1,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icon_r_icon__WEBPACK_IMPORTED_MODULE_4__.A,{className:"h-[6.5px] w-[8.5px] text-gray-20",icon:_components_icon_icons__WEBPACK_IMPORTED_MODULE_3__.F.check})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icon_r_icon__WEBPACK_IMPORTED_MODULE_4__.A,{className:"h-[6.5px] w-[8.5px] text-gray-0",icon:_components_icon_icons__WEBPACK_IMPORTED_MODULE_3__.F.check})})})));Checkbox.displayName=_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__.bL.displayName,Checkbox.__docgenInfo={description:"",methods:[],props:{isLoading:{required:!1,tsType:{name:"boolean"},description:""},isIndeterminate:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);