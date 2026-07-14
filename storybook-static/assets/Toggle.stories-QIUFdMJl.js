import{n as e,o as t}from"./rolldown-runtime-PE7_xIU0.js";import{t as n}from"./react-D96Z4ODX.js";import{t as r}from"./jsx-runtime-DjOA8AOY.js";var i,a,o=e((()=>{i=r(),a=({checked:e,onChange:t,className:n=``,disabled:r=!1})=>(0,i.jsx)(`button`,{type:`button`,onClick:n=>{n.stopPropagation(),r||t(!e)},disabled:r,className:`
        w-[32px] h-[16px] rounded-full relative transition-colors duration-200 focus:outline-none shrink-0
        ${e?`bg-[#4aaada]`:`bg-[#e2e2e2]`}
        ${r?`opacity-50 cursor-not-allowed`:`cursor-pointer`}
        ${n}
      `,children:(0,i.jsx)(`div`,{className:`
            absolute top-[2px] w-[12px] h-[12px] bg-white rounded-full transition-transform duration-200 shadow-sm
            ${e?`translate-x-[18px]`:`translate-x-[2px]`}
        `})}),a.__docgenInfo={description:``,methods:[],displayName:`Toggle`,props:{checked:{required:!0,tsType:{name:`boolean`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),s,c,l,u,d,f,p,m;e((()=>{s=r(),c=t(n()),o(),l={title:`Design System/Toggle`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},u=e=>{let[t,n]=(0,c.useState)(e.checked||!1);return(0,s.jsx)(a,{...e,checked:t,onChange:t=>{n(t),e.onChange&&e.onChange(t)}})},d={render:e=>(0,s.jsx)(u,{...e}),args:{checked:!1}},f={render:e=>(0,s.jsx)(u,{...e}),args:{checked:!0}},p={render:e=>(0,s.jsx)(u,{...e}),args:{checked:!0,disabled:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    checked: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    checked: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    checked: true,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m=[`Off`,`On`,`Disabled`]}))();export{p as Disabled,d as Off,f as On,m as __namedExportsOrder,l as default};