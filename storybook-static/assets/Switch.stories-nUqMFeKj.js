import{n as e,o as t}from"./rolldown-runtime-PE7_xIU0.js";import{t as n}from"./react-D96Z4ODX.js";import{t as r}from"./jsx-runtime-DjOA8AOY.js";function i({checked:e,onChange:t,className:n=``}){return(0,a.jsx)(`div`,{className:`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${e?`bg-green-500`:`bg-gray-300`} ${n}`,onClick:()=>t(!e),children:(0,a.jsx)(`div`,{className:`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${e?`translate-x-6`:`translate-x-0`}`})})}var a,o=e((()=>{a=r(),i.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{checked:{required:!0,tsType:{name:`boolean`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),s,c,l,u,d,f,p;e((()=>{s=r(),c=t(n()),o(),l={title:`Design System/Switch`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]},u=e=>{let[t,n]=(0,c.useState)(e.checked||!1);return(0,s.jsx)(i,{...e,checked:t,onChange:t=>{n(t),e.onChange&&e.onChange(t)}})},d={render:e=>(0,s.jsx)(u,{...e}),args:{checked:!1}},f={render:e=>(0,s.jsx)(u,{...e}),args:{checked:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <SwitchWrapper {...args} />,
  args: {
    checked: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <SwitchWrapper {...args} />,
  args: {
    checked: true
  }
}`,...f.parameters?.docs?.source}}},p=[`Off`,`On`]}))();export{d as Off,f as On,p as __namedExportsOrder,l as default};