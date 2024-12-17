"use strict";(self.webpackChunkaipub_frontend=self.webpackChunkaipub_frontend||[]).push([[96],{"./stories/header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,IsAdmin:()=>IsAdmin,IsUser:()=>IsUser,__namedExportsOrder:()=>__namedExportsOrder,default:()=>header_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),utils=__webpack_require__("./lib/utils.ts"),navigation=__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs"),constants=__webpack_require__("./constants/index.ts"),use_auth=__webpack_require__("./hooks/use-auth.ts"),use_disclosure=__webpack_require__("./hooks/use-disclosure.tsx"),icons=__webpack_require__("./components/icon/icons.tsx"),r_icon=__webpack_require__("./components/icon/r-icon.tsx"),dist=__webpack_require__("./node_modules/@radix-ui/react-popover/dist/index.mjs"),ai_pub_r_icon=__webpack_require__("./components/icon/ai-pub-r-icon.tsx");const PopoverRoot=dist.bL,PopoverTrigger=dist.l9,PopoverContent=(dist.Mz,react.forwardRef((({className,align="center",sideOffset=4,...props},ref)=>(0,jsx_runtime.jsx)(dist.ZL,{children:(0,jsx_runtime.jsx)(dist.UC,{ref,align,sideOffset,className:(0,utils.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props})}))));PopoverContent.displayName=dist.UC.displayName;PopoverContent.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:"'center'",computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};var truncated_text=__webpack_require__("./components/utility/truncated-text.tsx");function MyInfoPopover({isAdmin}){var _MainMenu_Account;const router=(0,navigation.useRouter)(),{user,logout}=(0,use_auth.A)(),{isOpen,onOpenChange}=(0,use_disclosure.j)();return(0,jsx_runtime.jsxs)(PopoverRoot,{open:isOpen,onOpenChange,children:[(0,jsx_runtime.jsx)(PopoverTrigger,{asChild:!0,children:(0,jsx_runtime.jsx)("button",{className:"size-8 rounded-full bg-color-1 text-lg font-semibold text-gray-0 transition-colors duration-150 hover:bg-color-2 data-[state=open]:bg-white data-[state=open]:text-gray-20",children:"M"})}),(0,jsx_runtime.jsxs)(PopoverContent,{className:"w-[250px] p-0 text-sm",children:[(0,jsx_runtime.jsxs)("div",{className:"mx-6 my-5 space-y-2",children:[(0,jsx_runtime.jsx)("div",{className:"text-[13px] font-normal leading-[16px] text-color-2",children:"사용자 아이디"}),(0,jsx_runtime.jsx)(truncated_text.G,{className:"font-semibold",children:null==user?void 0:user.username})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-[15px] border-t bg-[#FAFBFD] p-6 text-[13px] font-[400]",children:[(0,jsx_runtime.jsx)("div",{children:"[이미지 레지스트리 정보]"}),(0,jsx_runtime.jsxs)("div",{className:"flex-col gap-[6px]",children:[(0,jsx_runtime.jsx)("div",{children:"이미지 레지스트리 주소"}),(0,jsx_runtime.jsx)(truncated_text.G,{maxLines:2,children:`ㄴ url: ${(0,utils.i$)({})}`})]})]}),(0,jsx_runtime.jsxs)("div",{className:"border-t py-2 [&>*]:flex [&>*]:h-10 [&>*]:items-center [&>*]:gap-x-3 [&>*]:px-6",children:[(0,jsx_runtime.jsxs)(link_default(),{href:`/${null===(_MainMenu_Account=constants.zU.Account)||void 0===_MainMenu_Account?void 0:_MainMenu_Account.value}`,onClick:()=>onOpenChange(!isOpen),children:[(0,jsx_runtime.jsx)(r_icon.A,{className:"size-4",icon:icons.F.edit}),"사용자 정보 변경"]}),(0,jsx_runtime.jsxs)("div",{onClick:async()=>{try{await logout.trigger()}catch(e){}finally{router.push("/welcome")}},className:"grow cursor-pointer text-left",children:[(0,jsx_runtime.jsx)(r_icon.A,{className:"size-4",icon:icons.F.logout}),"로그아웃"]})]})]})]})}MyInfoPopover.__docgenInfo={description:"",methods:[],displayName:"MyInfoPopover",props:{isAdmin:{required:!1,tsType:{name:"boolean"},description:""}}};var intersection=__webpack_require__("./node_modules/lodash-es/intersection.js"),isEqual=__webpack_require__("./node_modules/lodash-es/isEqual.js"),cloneDeep=__webpack_require__("./node_modules/lodash-es/cloneDeep.js"),find=__webpack_require__("./node_modules/lodash-es/find.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),mutation=__webpack_require__("./node_modules/swr/dist/mutation/index.mjs");var backend_client=__webpack_require__("./apis/backend-client.ts");const userApi_common={getUsers:([_,search])=>{var _getBackendClient_getUserApi,_getBackendClient;return null===(_getBackendClient=(0,backend_client.k)())||void 0===_getBackendClient||null===(_getBackendClient_getUserApi=_getBackendClient.getUserApi())||void 0===_getBackendClient_getUserApi?void 0:_getBackendClient_getUserApi.listUsers(0,999999,void 0,search)},getUser:_=>{var _getBackendClient_getUserApi,_getBackendClient;return null===(_getBackendClient=(0,backend_client.k)())||void 0===_getBackendClient||null===(_getBackendClient_getUserApi=_getBackendClient.getUserApi())||void 0===_getBackendClient_getUserApi?void 0:_getBackendClient_getUserApi.getUser(_)},getCredentials:(_,{arg})=>{var _getBackendClient;return null===(_getBackendClient=(0,backend_client.k)())||void 0===_getBackendClient?void 0:_getBackendClient.getUserApi().listCredentials(arg.id)},createUser:(_,{arg})=>{var _getBackendClient_getUserApi,_getBackendClient;return null===(_getBackendClient=(0,backend_client.k)())||void 0===_getBackendClient||null===(_getBackendClient_getUserApi=_getBackendClient.getUserApi())||void 0===_getBackendClient_getUserApi?void 0:_getBackendClient_getUserApi.createUser(arg.user)},updateResetPassword:(_,{arg})=>{var _getBackendClient_getUserApi,_getBackendClient;return null===(_getBackendClient=(0,backend_client.k)())||void 0===_getBackendClient||null===(_getBackendClient_getUserApi=_getBackendClient.getUserApi())||void 0===_getBackendClient_getUserApi?void 0:_getBackendClient_getUserApi.updateResetPassword(arg.id,{...arg.credential,type:"Password"})},updateUser:(_,{arg})=>{var _getBackendClient_getUserApi,_getBackendClient;return null===(_getBackendClient=(0,backend_client.k)())||void 0===_getBackendClient||null===(_getBackendClient_getUserApi=_getBackendClient.getUserApi())||void 0===_getBackendClient_getUserApi?void 0:_getBackendClient_getUserApi.updateUser(arg.user.id,arg.user)},deleteUser:(_,{arg})=>{var _getBackendClient_getUserApi,_getBackendClient;return null===(_getBackendClient=(0,backend_client.k)())||void 0===_getBackendClient||null===(_getBackendClient_getUserApi=_getBackendClient.getUserApi())||void 0===_getBackendClient_getUserApi?void 0:_getBackendClient_getUserApi.deleteUser(arg.id)},getRoleMappings:([_,id])=>{var _getBackendClient;return null===(_getBackendClient=(0,backend_client.k)())||void 0===_getBackendClient?void 0:_getBackendClient.getUserApi().listRoleMappings(id||"")},getNamespaces:([_,id])=>{var _getBackendClient;return null===(_getBackendClient=(0,backend_client.k)())||void 0===_getBackendClient?void 0:_getBackendClient.getUserApi().listRoleMappings(id||"")}};var use_ref_state=__webpack_require__("./hooks/use-ref-state.ts");var core=__webpack_require__("./node_modules/swr/dist/core/index.mjs");const namespaceApi_common={getNamespaces:([_,search])=>{var _getBackendClient_getK8sApi,_getBackendClient;return null===(_getBackendClient=(0,backend_client.k)())||void 0===_getBackendClient||null===(_getBackendClient_getK8sApi=_getBackendClient.getK8sApi())||void 0===_getBackendClient_getK8sApi?void 0:_getBackendClient_getK8sApi.getNamespaceApi().listNamespace()}};function useSequentialJobs(){const[runningJobIds,setRunningJobIds]=(0,react.useState)([]),jobQueueRef=(0,react.useRef)([]),prevJobResultRef=(0,react.useRef)();return{runningJobIds,addJob:function addJob(job){jobQueueRef.current.push(job),setRunningJobIds((prevState=>[...new Set([...prevState,job.id])])),(async()=>{if(0!==jobQueueRef.current.length)for(;jobQueueRef.current.length>0;){const job=jobQueueRef.current[0];prevJobResultRef.current=await job.run((0,cloneDeep.A)(prevJobResultRef.current)),jobQueueRef.current=jobQueueRef.current.slice(1),setRunningJobIds((prevJobIds=>prevJobIds.filter((prevJobId=>prevJobId!==job.id))))}})()}}}var dialog_confirm=__webpack_require__("./components/dialog/confirm.tsx"),custom_dialog=__webpack_require__("./components/dialog/custom-dialog.tsx"),ui_checkbox=__webpack_require__("./components/ui/checkbox.tsx"),chunk_DRE2DOBH=__webpack_require__("./node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs"),chunk_GQQM5TNQ=__webpack_require__("./node_modules/@nextui-org/input/dist/chunk-GQQM5TNQ.mjs"),ui_button=__webpack_require__("./components/ui/button.tsx");const Input=(0,chunk_DRE2DOBH.Rf)((({control,name,maxLength,isClearable,endContent,endButton,isReadOnly,isDisabled,label,onClear,classNames,...props},ref)=>{const showEndContent=maxLength||isClearable||(null==endButton?void 0:endButton.title)||!!endContent,finalLabel=props.isRequired?(0,jsx_runtime.jsxs)("div",{className:"leading-[18px]",children:[label,(0,jsx_runtime.jsx)("span",{className:"w-[4px] h-[4px] mt-[2px] ml-[4px] rounded-[50%] bg-[#FF0000] absolute right-0 top-0"})]}):(0,jsx_runtime.jsx)("div",{className:"leading-[18px]",children:label});return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(index_esm.xI,{name,control,render:({field:{value="",ref:fieldRef,onChange,...field}})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(chunk_GQQM5TNQ.r,{...field,ref:instance=>{fieldRef(instance),"function"==typeof ref?ref(instance):ref&&(ref.current=instance)},...props,...showEndContent&&{endContent:(0,jsx_runtime.jsxs)("div",{className:"end-content flex cursor-default items-center gap-[8px]",children:[isClearable&&!!value&&(0,jsx_runtime.jsx)(r_icon.A,{className:"size-4 cursor-pointer rounded-full fill-color-3 stroke-2 text-white hover:fill-gray-30",icon:icons.j.circleX,onClick:()=>{props.onClearableBtnClick?props.onClearableBtnClick((()=>{onChange("")})):onChange("")}}),maxLength&&(0,jsx_runtime.jsxs)("span",{className:`pointer-events-none flex ${maxLength>=100?"w-[46px]":"w-[32px]"} items-center justify-end gap-x-[2px] text-right text-small text-default-400`,children:[(0,jsx_runtime.jsx)("span",{children:(value||"").length}),(0,jsx_runtime.jsx)("span",{children:"/"}),(0,jsx_runtime.jsx)("span",{children:maxLength})]}),(null==endButton?void 0:endButton.title)&&(0,jsx_runtime.jsx)(ui_button.$,{size:"sm",variant:"outline",disabled:isDisabled||endButton.isDisabled,className:(endButton.isDisabled?"pointer-events-none":"")+" border-color-3 bg-white text-[#333333]",onClick:e=>{!isDisabled&&endButton.onClick&&endButton.onClick(e)},children:endButton.title}),endContent]})},value,onChange:e=>{const inputValue=e.target.value;(!maxLength||inputValue.length<=maxLength)&&onChange(inputValue)},isReadOnly,readOnly:isReadOnly,disabled:isDisabled,label:finalLabel,classNames:{base:(0,utils.cn)("next-ui-input-base",(null==classNames?void 0:classNames.base)||""),input:(0,utils.cn)("next-ui-input placeholder:text-[#33333366] "+(isReadOnly?"!cursor-default":""),(null==classNames?void 0:classNames.input)||""),inputWrapper:(0,utils.cn)("next-ui-input-wrapper border-color-4 h-[40px] pl-[12px] pr-[8px] py-[8px] shadow-none "+(isReadOnly||isDisabled?"bg-[#FAFBFD] !cursor-default [&:hover]:border-color-4 [&:focus]:border-color-4 [&:active]:border-color-4 [&:blur]:border-color-4 [&:focus]:outline-none group-data-[focus=true]:border-color-4 group-data-[hover=true]:border-color-4":""),(null==classNames?void 0:classNames.inputWrapper)||""),innerWrapper:(0,utils.cn)("next-ui-inner-wrapper",(null==classNames?void 0:classNames.innerWrapper)||""),label:(0,utils.cn)("next-ui-input-label after:content-[] !text-color-2",(null==classNames?void 0:classNames.label)||"")},errorMessage:"Required"===props.errorMessage?"필수 입력 항목입니다.":props.errorMessage})})})})}));Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{control:{required:!0,tsType:{name:"UseFormReturn['control']",raw:"UseFormReturn<any>['control']"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""},endButton:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  title?: string;\n  onClick?: MouseEventHandler<HTMLButtonElement>;\n  isDisabled?: boolean;\n}",signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"onClick",value:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}}]}},description:""},onClearableBtnClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(onOkFunc?: () => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onOkFunc"}],return:{name:"void"}}},description:""}}};const NamespaceSelect=({isAdmin})=>{var _userNamespaces_filter;const{namespaces:userNamespaces,user,whoami}=(0,use_auth.A)(),[query,setQuery]=(0,react.useState)(""),debouncedQuery=function useDebounce(value,delay=300){const[debouncedValue,setDebouncedValue]=(0,use_ref_state.A)(value);return(0,react.useEffect)((()=>{const handler=setTimeout((()=>{setDebouncedValue(value)}),delay);return()=>{clearTimeout(handler)}}),[value,delay]),debouncedValue.current}(query),{namespaces,mutate:mutateNamespaces,totalCount}=function useNamespaces(query){const{data,mutate}=(0,core.Ay)(["namespaces",query],namespaceApi_common.getNamespaces),namespaces=(0,react.useMemo)((()=>null==data?void 0:data.items.filter((namespace=>{var _namespace_metadata_name,_namespace_metadata;return null===(_namespace_metadata=namespace.metadata)||void 0===_namespace_metadata||null===(_namespace_metadata_name=_namespace_metadata.name)||void 0===_namespace_metadata_name?void 0:_namespace_metadata_name.includes(query)}))),[null==data?void 0:data.items,query]),namespacesStr=(0,react.useMemo)((()=>(null==namespaces?void 0:namespaces.map((namespace=>{var _namespace_metadata;return null===(_namespace_metadata=namespace.metadata)||void 0===_namespace_metadata?void 0:_namespace_metadata.name})).filter((item=>!!item)))||[]),[namespaces]);return{namespaces,namespacesStr,totalCount:null==data?void 0:data.items.length,mutate}}(debouncedQuery),{control,register,reset}=(0,index_esm.mN)(),{trigger:updateUser}=(0,mutation.A)("users",userApi_common.updateUser),router=(0,navigation.useRouter)(),popover=(0,use_disclosure.j)(),{isOpen,onOpen,onOpenChange,onClose}=(0,use_disclosure.j)(),[message,setMessage]=(0,react.useState)(""),{addJob,runningJobIds}=useSequentialJobs(),lastUserNamespaces=(0,react.useRef)(userNamespaces||[]);function outerFunction(newUserNamespaces,forcePrevResult){return async function innerFunction(prevResult){var _this,_ref;const _user=null!==(_ref=null!=forcePrevResult?forcePrevResult:prevResult)&&void 0!==_ref?_ref:user,newUser={...null!=_user?_user:user,enabled:!0,attributes:{...null===(_this=null!=_user?_user:user)||void 0===_this?void 0:_this.attributes,namespaces:[...new Set(newUserNamespaces)]}};return await updateUser({user:newUser}),await whoami.mutate(),newUser}}(0,react.useEffect)((()=>{!async function a(){const res=await mutateNamespaces();if(res&&popover.isOpen){const _nses=res.items.map((item=>item.metadata.name)),newUserNamespaces=(0,intersection.A)(userNamespaces,_nses);(0,isEqual.A)(newUserNamespaces,_nses)||(await updateUser({user:{...user,attributes:{...user.attributes,namespaces:[...new Set(newUserNamespaces)]}}}),await whoami.mutate())}}()}),[popover.isOpen,userNamespaces,mutateNamespaces]);const handleItemClick=async targetNamespace=>{if(null==user?void 0:user.id)try{var _targetNamespace_metadata,_targetNamespace_metadata1,_targetNamespace_metadata2;const newUserNamespaces=lastUserNamespaces.current.includes(null===(_targetNamespace_metadata=targetNamespace.metadata)||void 0===_targetNamespace_metadata?void 0:_targetNamespace_metadata.name)?lastUserNamespaces.current.filter((userNamespace=>{var _targetNamespace_metadata;return userNamespace!==(null===(_targetNamespace_metadata=targetNamespace.metadata)||void 0===_targetNamespace_metadata?void 0:_targetNamespace_metadata.name)})):[...lastUserNamespaces.current,null===(_targetNamespace_metadata1=targetNamespace.metadata)||void 0===_targetNamespace_metadata1?void 0:_targetNamespace_metadata1.name];lastUserNamespaces.current=(0,cloneDeep.A)(newUserNamespaces),addJob({id:(null===(_targetNamespace_metadata2=targetNamespace.metadata)||void 0===_targetNamespace_metadata2?void 0:_targetNamespace_metadata2.name)||"",run:outerFunction(newUserNamespaces)})}catch(e){const errorBody=await async function getErrorResponseBody(e){let errorBody=null;if(function isErrorWithResponse(error){return"object"==typeof error&&null!==error&&"response"in error&&"object"==typeof error.response&&null!==error.response}(e)&&e.response&&e.response.body){const reader=e.response.body.getReader();try{const text=await(0,utils.bv)(reader);errorBody=JSON.parse(text)}catch(parseError){}}return errorBody}(e),errorCode=errorBody.code;403===errorCode?(0,custom_dialog.u)({message:"접근 권한이 없는 Namespace입니다. 접근 권한 확인 후 다시 선택해 주세요."}):errorCode>=400&&errorCode<500?(0,custom_dialog.u)({message:"에러가 발생했습니다."}):errorCode>=500?router.push("/error-500"):(0,custom_dialog.u)({message:errorBody.reason||e.message})}},handleQueryChange=e=>{var _e_target;setQuery((null===(_e_target=e.target)||void 0===_e_target?void 0:_e_target.value)||"")};var _userNamespaces_filter_length;return(0,jsx_runtime.jsxs)("span",{children:[(0,jsx_runtime.jsxs)(PopoverRoot,{...popover,children:[(0,jsx_runtime.jsx)(PopoverTrigger,{asChild:!0,children:(0,jsx_runtime.jsxs)("button",{className:"group relative flex h-8 w-[125px] items-center justify-center gap-1.5 overflow-visible rounded-full bg-color-1 text-[13px] font-medium text-gray-0 transition-colors duration-150 hover:bg-color-2 data-[state=open]:bg-white data-[state=open]:text-gray-20",children:["Namespace",(0,jsx_runtime.jsx)(r_icon.A,{className:"size-4 text-white group-data-[state=open]:text-gray-20",icon:icons.F.folderOpen})]})}),(0,jsx_runtime.jsxs)(PopoverContent,{side:"bottom",align:"start",className:"flex h-[720px] w-[400px] flex-col gap-y-6 rounded-xl px-0 py-5",children:[(0,jsx_runtime.jsxs)("div",{className:"flex h-[32px] w-full items-center justify-between px-6",children:[(0,jsx_runtime.jsx)("span",{className:"text-[18px] font-bold",children:"Namespace"}),(0,jsx_runtime.jsxs)("span",{className:"text-[13px] text-color-1",children:[(0,jsx_runtime.jsx)("span",{className:"font-semibold text-gray-20",children:`Choose ${null!==(_userNamespaces_filter_length=null==userNamespaces||null===(_userNamespaces_filter=userNamespaces.filter((userNamespace=>(0,find.A)(namespaces,(namespace=>{var _namespace_metadata;return(null===(_namespace_metadata=namespace.metadata)||void 0===_namespace_metadata?void 0:_namespace_metadata.name)===userNamespace})))))||void 0===_userNamespaces_filter?void 0:_userNamespaces_filter.length)&&void 0!==_userNamespaces_filter_length?_userNamespaces_filter_length:"0"} `}),`of ${totalCount||"0"}`]})]}),(0,jsx_runtime.jsx)("div",{className:"flex w-full justify-center px-6",children:(0,jsx_runtime.jsx)(Input,{control,...register("query",{onChange:handleQueryChange}),isClearable:!0,onClear:()=>handleQueryChange({target:{value:""}}),variant:"bordered",classNames:{input:["placeholder:text-default-700/50 dark:placeholder:text-white/60 text-gray-20"],inputWrapper:["group-data-[focus=true]:!border-color-1"],innerWrapper:["pb-0 !items-center"]},placeholder:"Enter your search term",endContent:(0,jsx_runtime.jsx)(r_icon.A,{icon:icons.F.search})})}),(0,jsx_runtime.jsx)("div",{className:"namespace-list-wrapper flex h-full w-full flex-col items-center overflow-hidden pr-1.5",children:(0,jsx_runtime.jsx)("div",{className:"custom-scrollbar h-full w-full overflow-y-auto pl-6 pr-3",children:(0,jsx_runtime.jsx)("ul",{className:"h-full w-full",children:(null==namespaces?void 0:namespaces.map(((namespace,i)=>{var _namespace_metadata,_namespace_metadata1,_namespace_metadata2,_namespace_metadata3;const isSelected=null==userNamespaces?void 0:userNamespaces.includes((null===(_namespace_metadata=namespace.metadata)||void 0===_namespace_metadata?void 0:_namespace_metadata.name)||"");return(0,jsx_runtime.jsx)("li",{className:"border-color-5 hover:bg-color-8 [&:not(:first-child)]:border-t",children:(0,jsx_runtime.jsxs)("label",{className:"flex w-full cursor-pointer items-center gap-x-2 py-2.5",children:[(0,jsx_runtime.jsx)(ui_checkbox.S,{checked:isSelected,isLoading:runningJobIds.includes((null===(_namespace_metadata1=namespace.metadata)||void 0===_namespace_metadata1?void 0:_namespace_metadata1.name)||""),onCheckedChange:()=>handleItemClick(namespace)}),(0,jsx_runtime.jsx)(truncated_text.G,{calculate:popover.isOpen,className:(0,utils.cn)("text-sm text-color-1",{"font-semibold text-gray-20":isSelected}),children:null===(_namespace_metadata2=namespace.metadata)||void 0===_namespace_metadata2?void 0:_namespace_metadata2.name})]})},null===(_namespace_metadata3=namespace.metadata)||void 0===_namespace_metadata3?void 0:_namespace_metadata3.name)})))||(0,jsx_runtime.jsx)("li",{className:"namespace-list-empty-content flex h-full items-center justify-center py-[16px] pr-[16px] text-center text-[14px] font-normal leading-[normal] text-gray-30",children:(0,jsx_runtime.jsxs)("span",{children:["생성된 네임스페이스가 존재하지 않습니다.",(0,jsx_runtime.jsx)("br",{}),"관리자에게 문의해 주세요."]})})})})})]})]}),(0,jsx_runtime.jsx)(dialog_confirm.p,{open:isOpen,message,onOK:onClose,onOpenChange,isDismissible:!1})]})};NamespaceSelect.__docgenInfo={description:"",methods:[],displayName:"NamespaceSelect",props:{isAdmin:{required:!1,tsType:{name:"boolean"},description:""}}};var esm_fetch=__webpack_require__("./node_modules/@microsoft/fetch-event-source/lib/esm/fetch.js"),dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min),isToday=__webpack_require__("./node_modules/dayjs/plugin/isToday.js"),isToday_default=__webpack_require__.n(isToday),groupBy=__webpack_require__("./node_modules/lodash-es/groupBy.js"),filter=__webpack_require__("./node_modules/lodash-es/filter.js"),matches=__webpack_require__("./node_modules/lodash-es/matches.js"),config=__webpack_require__("./config/index.ts");const notificationApi_common={getNotifications:async([_,userId,page])=>{const res=await fetch(`${config.A.aipubBackendUri}/api/v1alpha1/notifications?userId=${userId}&pageOffset=0&pageSize=${100*(Number(page||0)+1)}`,{credentials:"include"});let notifications=await res.json();return notifications=notifications.sort(((a,b)=>dayjs_min_default()(a.eventTime).isBefore(dayjs_min_default()(b.eventTime))?1:-1)),notifications.map((item=>({...item,visibility:"KEYCLOAK"!==item.eventOrigin&&item.visibility})))},updateNotifications:async([_,userId,notifications])=>{await fetch(`${config.A.aipubBackendUri}/api/v1alpha1/notifications`,{credentials:"include",method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId,notifications:JSON.parse(notifications||"[]")})})}};const badgeVariants=(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").F)("inline-flex items-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{size:{default:"px-2 h-6 text-xs",sm:"px-2 py-0.5 text-xs"},color:{primary:"",secondary:"",invert:"",success:"",destructive:"",warning:"",pending:"",info:"",default:""},variant:{fill:"text-invert bg-foreground",outline:"text-foreground bg-transparent"}},compoundVariants:[{color:"default",variant:"outline",class:"border border-color-4 text-gray-30"},{color:"primary",variant:"fill",class:"bg-[#f1f5ff] text-primary"},{color:"primary",variant:"outline",class:"bg-primary text-primary"},{color:"warning",variant:"fill",class:"bg-secondary text-foreground"},{color:"warning",variant:"outline",class:"border border-warning text-[#DC9E00]"},{color:"destructive",variant:"fill",class:"bg-error bg-opacity-[0.06] text-destructive"},{color:"destructive",variant:"outline",class:"border border-[#FF6666] text-destructive"}],defaultVariants:{variant:"fill",color:"primary",size:"default"}});function Badge({className,variant,color,size,...props}){return(0,jsx_runtime.jsx)("span",{className:(0,utils.cn)(badgeVariants({variant,color,size}),className),...props})}Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["Omit","VariantProps"]};var skeleton=__webpack_require__("./components/ui/skeleton.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js");function NotiPopover({isAdmin}){const[notiCount,setNotiCount]=(0,react.useState)(0),{isOpen,onOpenChange}=(0,use_disclosure.j)(),{user}=(0,use_auth.A)(),[connected,setConnected]=(0,react.useState)(!1),{data:notificationsData,isLoading,mutate:mutateNotificationsData}=(0,core.Ay)(["notifications",null==user?void 0:user.id,"0"],notificationApi_common.getNotifications,{keepPreviousData:!0}),groupedNotifications=(0,react.useMemo)((()=>{const _filtered=null==notificationsData?void 0:notificationsData.filter((item=>item.visibility));return(0,groupBy.A)(_filtered,(notification=>dayjs_min_default()(notification.eventTime).format("YYYY.MM.DD")))}),[notificationsData]);return(0,react.useEffect)((()=>{!async function a(){if(notificationsData&&isOpen){await notificationApi_common.updateNotifications(["",null==user?void 0:user.id,JSON.stringify(notificationsData.filter((notification=>!notification.confirmation)).map((item=>({id:item.id,confirmation:!0}))))]);const asd=await mutateNotificationsData();setNotiCount((0,filter.A)(asd,(0,matches.A)({confirmation:!1,visibility:!0})).length)}}()}),[isOpen,notificationsData,isLoading,null==user?void 0:user.id,mutateNotificationsData]),(0,react.useEffect)((()=>{notificationsData&&!connected&&(0,esm_fetch.y)(`${config.A.aipubBackendUri}/api/v1alpha1/notifications/stream?userId=${null==user?void 0:user.id}&pageOffset=0&pageSize=100`,{credentials:"include",async onopen(e){console.log("SSE Open"),setConnected(!0)},onerror(e){console.error("SSE Error",e)},onclose(){console.log("SSE Closed"),setConnected(!1)},onmessage(ev){if(console.log("SSE OnMessage",ev.event),"CONNECTED"===ev.event){const filtered=JSON.parse(ev.data).newNotifications.map((item=>({...item,visibility:"KEYCLOAK"!==item.eventOrigin&&item.visibility}))).filter((item=>item.visibility));setNotiCount(filtered.length),(0,core.Tk)(["notifications",null==user?void 0:user.id,"0"],[...filtered,...notificationsData||[]],{revalidate:!1}).then()}else if("NEW_NOTIFICATION"===ev.event){var _notificationStream_newNotifications;const notificationStream=JSON.parse(ev.data),newNotification=null===(_notificationStream_newNotifications=notificationStream.newNotifications)||void 0===_notificationStream_newNotifications?void 0:_notificationStream_newNotifications[0],{message,trigger}=(0,utils.Rl)(newNotification),filtered=notificationStream.newNotifications.map((item=>({...item,visibility:"KEYCLOAK"!==item.eventOrigin&&item.visibility}))).filter((item=>item.visibility));setNotiCount(filtered.length),(0,core.Tk)(["notifications",null==user?void 0:user.id,"0"],[newNotification,...notificationsData||[]],{revalidate:!1}).then(),null==trigger||trigger({message,onClose:async()=>{await notificationApi_common.updateNotifications(["update-notifications",null==user?void 0:user.id,JSON.stringify([{id:newNotification.id,confirmation:!0}])])}})}}})}),[connected,notificationsData,null==user?void 0:user.id]),(0,jsx_runtime.jsxs)(PopoverRoot,{open:isOpen,onOpenChange,children:[(0,jsx_runtime.jsx)(PopoverTrigger,{asChild:!0,children:(0,jsx_runtime.jsxs)("button",{className:"group relative flex size-8 items-center justify-center overflow-visible rounded-full bg-color-1 text-lg text-gray-0 transition-colors duration-150 hover:bg-color-2 data-[state=open]:bg-white data-[state=open]:text-gray-20",children:[(0,jsx_runtime.jsx)(r_icon.A,{className:"size-4 text-white group-data-[state=open]:text-gray-20",icon:icons.F.bell}),notiCount>0?(0,jsx_runtime.jsx)(Badge,{size:"sm",color:"destructive",className:(0,utils.cn)("absolute -right-1 -top-1 inline-flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-opacity-100 px-1 text-[10px] font-medium text-white",{"-right-2.5":notiCount>9,"-right-3":notiCount>99}),children:notiCount>99?"99+":notiCount||"-"}):null]})}),(0,jsx_runtime.jsxs)(PopoverContent,{className:"w-[400px] px-6 py-5",children:[(0,jsx_runtime.jsxs)("div",{className:"mb-[24px] flex items-center justify-between",children:[(0,jsx_runtime.jsx)("h4",{className:"text-[18px] font-bold leading-normal text-gray-10",children:"Notifications"}),(0,jsx_runtime.jsxs)(link_default(),{href:`/${constants.zU.Notifications.value}`,className:"flex items-center gap-x-[6px]",onClick:e=>{onOpenChange(!isOpen)},children:[(0,jsx_runtime.jsx)("span",{className:"text-[14px] text-gray-20",children:"전체보기"}),(0,jsx_runtime.jsx)(ai_pub_r_icon.t,{icon:"ico_arr_r"})]})]}),(0,jsx_runtime.jsx)("div",{className:"custom-scrollbar mr-[8px] max-h-[605px] overflow-auto pr-2",children:(0,jsx_runtime.jsx)("div",{children:notificationsData?Object.keys(groupedNotifications).length>0?Object.entries(groupedNotifications).map((([date,notifications],index)=>(0,jsx_runtime.jsxs)("div",{className:"mt-[24px] first:mt-0",children:[(0,jsx_runtime.jsx)("h5",{className:"py-[12px] text-[14px] font-bold",children:dayjs_min_default()().format("YYYY.MM.DD")===date?"오늘":date}),(0,jsx_runtime.jsx)("div",{className:"",children:notifications.map(((notification,index)=>(0,jsx_runtime.jsx)("div",{className:"border-t *:flex *:gap-x-[12px]",children:(0,jsx_runtime.jsxs)("span",{className:"py-[16px] first:*:w-[40px] first:*:shrink-0",children:[(0,jsx_runtime.jsx)(Badge,{variant:"outline",color:"ERROR"===notification.notificationLevel?"destructive":"WARNING"===notification.notificationLevel?"warning":"default",className:"mr-3 whitespace-nowrap rounded-full",children:"ERROR"===notification.notificationLevel?"경고":"WARNING"===notification.notificationLevel?"주의":"일반"}),(0,jsx_runtime.jsxs)("span",{className:"flex flex-col gap-y-[8px] *:text-[13px]",children:[(0,jsx_runtime.jsx)("span",{className:(0,utils.cn)("leading-[20px]",{"font-bold":!notification.confirmation}),children:(0,utils.Rl)(notification).message}),(0,jsx_runtime.jsx)("span",{className:"leading-normal text-[#ADADAD]",children:dayjs_min_default()(notification.eventTime).format("HH:mm:ss")})]})]})},index.toString())))})]},index.toString()))):(0,jsx_runtime.jsx)("div",{className:"flex h-[600px] w-full flex-[1_0_0] items-center justify-center px-0 py-4",children:(0,jsx_runtime.jsx)("div",{className:"text-sm/[21px]",children:"새로운 알림 내역이 없습니다."})}):(0,jsx_runtime.jsx)(skeleton.n,{})})})]})]})}dayjs_min_default().extend(isToday_default()),NotiPopover.__docgenInfo={description:"",methods:[],displayName:"NotiPopover",props:{isAdmin:{required:!1,tsType:{name:"boolean"},description:""}}};const logo_aipub_white={src:"static/media/logo_aipub_white.3d043827.svg",height:32,width:82,blurDataURL:"static/media/logo_aipub_white.3d043827.svg"};function Header({isAdmin}){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"h-[${GNB_HEIGHT}px] fixed left-0 top-0 z-50 flex w-full items-center justify-between gap-4 overflow-hidden border-b border-b-color-5 bg-gray-20 py-3 pl-6 pr-4 text-gray-20",children:[(0,jsx_runtime.jsx)("div",{className:"flex items-center gap-[20px]",children:(0,jsx_runtime.jsxs)("span",{className:"flex items-center gap-x-[12px] xl:w-[188px]",children:[(0,jsx_runtime.jsx)(link_default(),{href:"/",className:"min-w-[82px]",children:(0,jsx_runtime.jsx)(next_image.A,{src:logo_aipub_white,alt:"logo",width:82,height:32,priority:!0,style:{width:"82px",height:"32px"}})}),isAdmin&&(0,jsx_runtime.jsx)("span",{className:"flex h-6 w-[61px] items-center justify-center rounded-md border bg-color-8 text-xs font-bold text-gray-20",children:"Admin"})]})}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-6",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-4",children:[(0,jsx_runtime.jsxs)("div",{className:"flex h-8 items-center gap-3 rounded-2xl bg-gray-30 px-3",children:[(0,jsx_runtime.jsx)(HeaderLink,{title:"Grafana",href:isAdmin?utils.eb.ADMIN:utils.eb.USER}),isAdmin&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"h-3 w-px bg-color-2"}),(0,jsx_runtime.jsx)(HeaderLink,{title:"Kibana",href:utils.em.ADMIN}),(0,jsx_runtime.jsx)("div",{className:"h-3 w-px bg-color-2"}),(0,jsx_runtime.jsx)(HeaderLink,{title:"Harbor",href:(0,utils.i$)({})})]})]}),(0,jsx_runtime.jsx)(NamespaceSelect,{isAdmin})]}),(0,jsx_runtime.jsx)("div",{className:"h-5 w-px bg-color-1"}),(0,jsx_runtime.jsxs)("div",{className:"flex gap-4",children:[(0,jsx_runtime.jsx)(NotiPopover,{isAdmin}),(0,jsx_runtime.jsx)(MyInfoPopover,{isAdmin})]})]})]}),(0,jsx_runtime.jsx)("div",{className:"h-14"})]})}function HeaderLink({title,href}){return(0,jsx_runtime.jsxs)("a",{className:"group inline-flex items-center gap-1 text-[13px] font-medium text-color-4 transition-colors duration-150 hover:text-white",href,target:"_blank",rel:"noreferrer",children:[title,(0,jsx_runtime.jsx)(r_icon.A,{className:"size-3 text-color-4 group-hover:text-white",icon:icons.j.externalLink})]})}Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{isAdmin:{required:!1,tsType:{name:"boolean"},description:""}}};const header_stories={title:"layout/Header",component:Header,parameters:{layout:"centered",nextjs:{appDirectory:!0}},tags:["autodocs"]},Default={args:{isAdmin:!0},decorators:Story=>(0,jsx_runtime.jsx)("div",{className:"w-[960px]",children:(0,jsx_runtime.jsx)(Story,{})})},IsAdmin=()=>(0,jsx_runtime.jsx)("div",{className:"w-[960px]",children:(0,jsx_runtime.jsx)(Header,{isAdmin:!0})}),IsUser=()=>(0,jsx_runtime.jsx)("div",{className:"w-[960px]",children:(0,jsx_runtime.jsx)(Header,{isAdmin:!1})}),__namedExportsOrder=["Default","IsAdmin","IsUser"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    isAdmin: true\n  },\n  decorators: Story => <div className="w-[960px]">\n      <Story />\n    </div>\n}',...Default.parameters?.docs?.source}}},IsAdmin.parameters={...IsAdmin.parameters,docs:{...IsAdmin.parameters?.docs,source:{originalSource:'() => <div className="w-[960px]">\n    <Header isAdmin={true} />\n  </div>',...IsAdmin.parameters?.docs?.source}}},IsUser.parameters={...IsUser.parameters,docs:{...IsUser.parameters?.docs,source:{originalSource:'() => <div className="w-[960px]">\n    <Header isAdmin={false} />\n  </div>',...IsUser.parameters?.docs?.source}}}},"./components/ui/checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/react-checkbox/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/utils.ts"),_components_icon_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/icon/icons.tsx"),_components_icon_r_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/icon/r-icon.tsx"),_components_ui_spinner__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/ui/spinner.tsx");const Checkbox=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({isLoading,isIndeterminate,className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__.bL,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("peer h-[18px] w-[18px] shrink-0 rounded-sm bg-color-5 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-color-7 data-[state=checked]:bg-checkbox",{"!bg-checkbox":isIndeterminate},className),...props,children:isLoading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_spinner__WEBPACK_IMPORTED_MODULE_5__.y,{className:"size-2.5"}):isIndeterminate?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center font-black"),children:"-"}):props.checked?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__.C1,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icon_r_icon__WEBPACK_IMPORTED_MODULE_4__.A,{className:"h-[6.5px] w-[8.5px] text-gray-20",icon:_components_icon_icons__WEBPACK_IMPORTED_MODULE_3__.F.check})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_icon_r_icon__WEBPACK_IMPORTED_MODULE_4__.A,{className:"h-[6.5px] w-[8.5px] text-gray-0",icon:_components_icon_icons__WEBPACK_IMPORTED_MODULE_3__.F.check})})})));Checkbox.displayName=_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_6__.bL.displayName,Checkbox.__docgenInfo={description:"",methods:[],props:{isLoading:{required:!1,tsType:{name:"boolean"},description:""},isIndeterminate:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);