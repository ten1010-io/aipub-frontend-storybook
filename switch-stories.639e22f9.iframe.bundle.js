"use strict";(self.webpackChunkaipub_frontend=self.webpackChunkaipub_frontend||[]).push([[367],{"./node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function usePrevious(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef({value,previous:value});return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>useSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function useSize(element){const[size,setSize]=react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./stories/switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Default:()=>Default,Disabled:()=>Disabled,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>switch_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs");function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}var react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_use_previous_dist=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),react_use_size_dist=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),[createSwitchContext,createSwitchScope]=function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react.createContext(defaultContext),index=defaultContexts.length;defaultContexts=[...defaultContexts,defaultContext];const Provider=props=>{const{scope,children,...context}=props,Context=scope?.[scopeName]?.[index]||BaseContext,value=react.useMemo((()=>context),Object.values(context));return(0,jsx_runtime.jsx)(Context.Provider,{value,children})};return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName]?.[index]||BaseContext,context=react.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}("Switch"),[SwitchProvider,useSwitchContext]=createSwitchContext("Switch"),Switch=react.forwardRef(((props,forwardedRef)=>{const{__scopeSwitch,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,form,...switchProps}=props,[button,setButton]=react.useState(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=react.useRef(!1),isFormControl=!button||(form||!!button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist.i)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,jsx_runtime.jsxs)(SwitchProvider,{scope:__scopeSwitch,checked,disabled,children:[(0,jsx_runtime.jsx)(react_primitive_dist.sG.button,{type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":getState(checked),"data-disabled":disabled?"":void 0,disabled,value,...switchProps,ref:composedRefs,onClick:(0,dist.m)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))}),isFormControl&&(0,jsx_runtime.jsx)(BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,form,style:{transform:"translateX(-100%)"}})]})}));Switch.displayName="Switch";var SwitchThumb=react.forwardRef(((props,forwardedRef)=>{const{__scopeSwitch,...thumbProps}=props,context=useSwitchContext("SwitchThumb",__scopeSwitch);return(0,jsx_runtime.jsx)(react_primitive_dist.sG.span,{"data-state":getState(context.checked),"data-disabled":context.disabled?"":void 0,...thumbProps,ref:forwardedRef})}));SwitchThumb.displayName="SwitchThumb";var BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=react.useRef(null),prevChecked=(0,react_use_previous_dist.Z)(checked),controlSize=(0,react_use_size_dist.X)(control);return react.useEffect((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,jsx_runtime.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:checked,...inputProps,tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function getState(checked){return checked?"checked":"unchecked"}var Root=Switch,Thumb=SwitchThumb,class_variance_authority_dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),utils=__webpack_require__("./lib/utils.ts");const switchVariants=(0,class_variance_authority_dist.F)("peer inline-flex min-w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-secondary data-[state=unchecked]:bg-input",{variants:{size:{default:"w-10 h-5",lg:"w-14 h-7"}},defaultVariants:{size:"default"}}),switchThumbVariants=(0,class_variance_authority_dist.F)("pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform",{variants:{size:{default:"w-3 h-3 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-1",lg:"w-5 h-5 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-1"}},defaultVariants:{size:"default"}}),switch_Switch=react.forwardRef((({className,size,...props},ref)=>(0,jsx_runtime.jsx)(Root,{className:(0,utils.cn)(switchVariants({size}),className),...props,ref,children:(0,jsx_runtime.jsx)(Thumb,{className:(0,utils.cn)(switchThumbVariants({size}))})})));switch_Switch.displayName=Root.displayName,switch_Switch.__docgenInfo={description:"`Switch` 단일 설정의 상태를 켜거나 끕니다.\n[Figma](https://www.figma.com/design/R6fle1eW2pVTbbhOW1PkNY/AI-Pub-R-Library?node-id=59-2623)",methods:[],props:{size:{required:!1,tsType:{name:"union",raw:"'default' | 'lg'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"Switch의 사이즈를 설정 (default:20, lg:28)"}},composes:["Omit","VariantProps"]};const switch_stories={title:"ui/Switch",component:switch_Switch,parameters:{layout:"centered"},tags:["autodocs"]},Default={argTypes:{checked:{table:{defaultValue:{summary:"false"}}},size:{table:{defaultValue:{summary:"default"}}}},args:{checked:!1,size:"default",disabled:!1}},Size=()=>(0,jsx_runtime.jsxs)("div",{className:"space-x-3",children:[(0,jsx_runtime.jsx)(switch_Switch,{size:"default"}),(0,jsx_runtime.jsx)(switch_Switch,{size:"lg"})]}),Active=()=>(0,jsx_runtime.jsx)(switch_Switch,{checked:!0}),Disabled=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-3",children:[(0,jsx_runtime.jsxs)("div",{className:"space-x-3",children:[(0,jsx_runtime.jsx)(switch_Switch,{size:"default",disabled:!0}),(0,jsx_runtime.jsx)(switch_Switch,{size:"lg",disabled:!0})]}),(0,jsx_runtime.jsxs)("div",{className:"space-x-3",children:[(0,jsx_runtime.jsx)(switch_Switch,{size:"default",checked:!0,disabled:!0}),(0,jsx_runtime.jsx)(switch_Switch,{size:"lg",checked:!0,disabled:!0})]})]}),__namedExportsOrder=["Default","Size","Active","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    checked: {\n      table: {\n        defaultValue: {\n          summary: 'false'\n        }\n      }\n    },\n    size: {\n      table: {\n        defaultValue: {\n          summary: 'default'\n        }\n      }\n    }\n  },\n  args: {\n    checked: false,\n    size: 'default',\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'() => <div className="space-x-3">\n    <Switch size="default" />\n    <Switch size="lg" />\n  </div>',...Size.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"() => <Switch checked />",...Active.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'() => <div className="space-y-3">\n    <div className="space-x-3">\n      <Switch size="default" disabled />\n      <Switch size="lg" disabled />\n    </div>\n    <div className="space-x-3">\n      <Switch size="default" checked disabled />\n      <Switch size="lg" checked disabled />\n    </div>\n  </div>',...Disabled.parameters?.docs?.source}}}}}]);