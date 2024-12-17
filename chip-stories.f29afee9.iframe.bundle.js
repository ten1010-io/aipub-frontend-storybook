"use strict";(self.webpackChunkaipub_frontend=self.webpackChunkaipub_frontend||[]).push([[521],{"./stories/chip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Default:()=>Default,Size:()=>Size,Type:()=>Type,Variant:()=>Variant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>chip_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),utils=__webpack_require__("./lib/utils.ts");const chipVariants=(0,dist.F)("inline-flex items-center justify-center text-xs font-medium transition-colors duration-150 focus:outline-none",{variants:{type:{round:"rounded-full",oval:"rounded-md"},variant:{outline:"border",fill:"border"},color:{gray:"text-[#555555]",yellow:"text-[#DC9E00]",orange:"text-[#F46E00]",red:"text-[#FF0000]",blue:"text-[#4B82FF]"},size:{sm:"h-5 px-1.5",lg:"h-6 px-2"}},compoundVariants:[{variant:"outline",color:"gray",className:"border-[#D5D5DA]"},{variant:"outline",color:"yellow",className:"border-[#FFD028]"},{variant:"outline",color:"orange",className:"border-[#F46E00]"},{variant:"outline",color:"red",className:"border-[#FF6666]"},{variant:"outline",color:"blue",className:"border-[#4B82FF]"},{variant:"fill",color:"gray",className:"border-transparent bg-[#F7F8FB]"},{variant:"fill",color:"yellow",className:"border-transparent bg-[#FFD0281A]"},{variant:"fill",color:"orange",className:"border-transparent bg-[#F28D001A]"},{variant:"fill",color:"red",className:"border-transparent bg-[#FF00000F]"},{variant:"fill",color:"blue",className:"border-transparent bg-[#F1F5FF]"}],defaultVariants:{type:"round",variant:"outline",color:"gray",size:"sm"}}),Chip=react.forwardRef((({className,type,variant,color,size,...props},ref)=>(0,jsx_runtime.jsx)("span",{className:(0,utils.cn)(chipVariants({type,variant,color,size,className})),...props})));Chip.displayName="Chip",Chip.__docgenInfo={description:"`Chip` 은 사용자에게 정보를 간결하게 전달하거나 분류하여 표기할때 사용합니다.\n[Figma](https://www.figma.com/design/R6fle1eW2pVTbbhOW1PkNY/AI-Pub-R-Library?node-id=96-2541)\n- closable (개발중)",methods:[],displayName:"Chip",props:{type:{required:!1,tsType:{name:"union",raw:"'round' | 'oval'",elements:[{name:"literal",value:"'round'"},{name:"literal",value:"'oval'"}]},description:"Chip의 모양을 설정합니다."},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'fill'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'fill'"}]},description:"Chip의 형태을 설정합니다."},color:{required:!1,tsType:{name:"union",raw:"'gray' | 'yellow' | 'orange' | 'red' | 'blue'",elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'red'"},{name:"literal",value:"'blue'"}]},description:"Chip의 색상을 설정합니다."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"Chip의 사이즈을 설정합니다. (sm:20, lg:24)"}}};const chip_stories={title:"ui/Chip",component:Chip,parameters:{layout:"centered"},tags:["autodocs"]},Default={argTypes:{type:{table:{defaultValue:{summary:"round"}}},variant:{table:{defaultValue:{summary:"outline"}}},color:{table:{defaultValue:{summary:"gray"}}},size:{table:{defaultValue:{summary:"sm"}}}},args:{type:"round",variant:"outline",color:"gray",size:"sm",children:"Chip"}},Type=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-3",children:[(0,jsx_runtime.jsxs)("div",{className:"space-x-3",children:[(0,jsx_runtime.jsx)(Chip,{type:"round",variant:"outline",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{type:"oval",variant:"outline",children:"Chip"})]}),(0,jsx_runtime.jsxs)("div",{className:"space-x-3",children:[(0,jsx_runtime.jsx)(Chip,{type:"round",variant:"fill",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{type:"oval",variant:"fill",children:"Chip"})]})]}),Variant=()=>(0,jsx_runtime.jsxs)("div",{className:"space-x-3",children:[(0,jsx_runtime.jsx)(Chip,{variant:"outline",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{variant:"fill",children:"Chip"})]}),Color=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-3",children:[(0,jsx_runtime.jsxs)("div",{className:"space-x-3",children:[(0,jsx_runtime.jsx)(Chip,{variant:"outline",color:"gray",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{variant:"outline",color:"yellow",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{variant:"outline",color:"orange",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{variant:"outline",color:"red",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{variant:"outline",color:"blue",children:"Chip"})]}),(0,jsx_runtime.jsxs)("div",{className:"space-x-3",children:[(0,jsx_runtime.jsx)(Chip,{variant:"fill",color:"gray",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{variant:"fill",color:"yellow",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{variant:"fill",color:"orange",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{variant:"fill",color:"red",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{variant:"fill",color:"blue",children:"Chip"})]})]}),Size=()=>(0,jsx_runtime.jsxs)("div",{className:"space-y-3",children:[(0,jsx_runtime.jsxs)("div",{className:"space-x-3",children:[(0,jsx_runtime.jsx)(Chip,{size:"sm",variant:"outline",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{size:"lg",variant:"outline",children:"Chip"})]}),(0,jsx_runtime.jsxs)("div",{className:"space-x-3",children:[(0,jsx_runtime.jsx)(Chip,{size:"sm",variant:"fill",children:"Chip"}),(0,jsx_runtime.jsx)(Chip,{size:"lg",variant:"fill",children:"Chip"})]})]}),__namedExportsOrder=["Default","Type","Variant","Color","Size"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    type: {\n      table: {\n        defaultValue: {\n          summary: 'round'\n        }\n      }\n    },\n    variant: {\n      table: {\n        defaultValue: {\n          summary: 'outline'\n        }\n      }\n    },\n    color: {\n      table: {\n        defaultValue: {\n          summary: 'gray'\n        }\n      }\n    },\n    size: {\n      table: {\n        defaultValue: {\n          summary: 'sm'\n        }\n      }\n    }\n  },\n  args: {\n    type: 'round',\n    variant: 'outline',\n    color: 'gray',\n    size: 'sm',\n    children: 'Chip'\n  }\n}",...Default.parameters?.docs?.source}}},Type.parameters={...Type.parameters,docs:{...Type.parameters?.docs,source:{originalSource:'() => <div className="space-y-3">\n    <div className="space-x-3">\n      <Chip type="round" variant="outline">\n        Chip\n      </Chip>\n      <Chip type="oval" variant="outline">\n        Chip\n      </Chip>\n    </div>\n    <div className="space-x-3">\n      <Chip type="round" variant="fill">\n        Chip\n      </Chip>\n      <Chip type="oval" variant="fill">\n        Chip\n      </Chip>\n    </div>\n  </div>',...Type.parameters?.docs?.source}}},Variant.parameters={...Variant.parameters,docs:{...Variant.parameters?.docs,source:{originalSource:'() => <div className="space-x-3">\n    <Chip variant="outline">Chip</Chip>\n    <Chip variant="fill">Chip</Chip>\n  </div>',...Variant.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:'() => <div className="space-y-3">\n    <div className="space-x-3">\n      <Chip variant="outline" color="gray">\n        Chip\n      </Chip>\n      <Chip variant="outline" color="yellow">\n        Chip\n      </Chip>\n      <Chip variant="outline" color="orange">\n        Chip\n      </Chip>\n      <Chip variant="outline" color="red">\n        Chip\n      </Chip>\n      <Chip variant="outline" color="blue">\n        Chip\n      </Chip>\n    </div>\n    <div className="space-x-3">\n      <Chip variant="fill" color="gray">\n        Chip\n      </Chip>\n      <Chip variant="fill" color="yellow">\n        Chip\n      </Chip>\n      <Chip variant="fill" color="orange">\n        Chip\n      </Chip>\n      <Chip variant="fill" color="red">\n        Chip\n      </Chip>\n      <Chip variant="fill" color="blue">\n        Chip\n      </Chip>\n    </div>\n  </div>',...Color.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'() => <div className="space-y-3">\n    <div className="space-x-3">\n      <Chip size="sm" variant="outline">\n        Chip\n      </Chip>\n      <Chip size="lg" variant="outline">\n        Chip\n      </Chip>\n    </div>\n    <div className="space-x-3">\n      <Chip size="sm" variant="fill">\n        Chip\n      </Chip>\n      <Chip size="lg" variant="fill">\n        Chip\n      </Chip>\n    </div>\n  </div>',...Size.parameters?.docs?.source}}}}}]);