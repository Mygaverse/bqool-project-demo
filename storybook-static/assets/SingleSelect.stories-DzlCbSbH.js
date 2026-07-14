import{n as e,o as t}from"./rolldown-runtime-PE7_xIU0.js";import{t as n}from"./react-D96Z4ODX.js";import{t as r}from"./jsx-runtime-DjOA8AOY.js";import{n as i,t as a}from"./SingleSelect-laUcBhAE.js";var o,s,c,l,u,d,f,p;e((()=>{o=r(),s=t(n()),i(),c={title:`Design System/SingleSelect`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},l=e=>{let[t,n]=(0,s.useState)(e.value||`US`);return(0,o.jsx)(`div`,{className:`w-[200px] h-[40px]`,children:(0,o.jsx)(a,{...e,value:t,onChange:t=>{n(t),e.onChange&&e.onChange(t)}})})},u={render:e=>(0,o.jsx)(l,{...e}),args:{label:`Marketplace`,options:[`US`,`CA`,`MX`,`UK`,`DE`,`FR`,`IT`,`ES`,`JP`],value:`US`}},d={render:e=>(0,o.jsx)(l,{...e}),args:{label:`Marketplace`,options:[`US`,`CA`,`MX`],value:`US`,disabled:!0}},f={render:e=>(0,o.jsx)(l,{...e}),args:{options:[`Search by Goals`,`Search by Campaigns`,`Search by ASINs`],value:`Search by Goals`,displayValue:`Search by`,triggerClassName:`!rounded-l-md !rounded-r-none border border-[#e2e2e2] font-medium text-gray-600`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <SingleSelectWrapper {...args} />,
  args: {
    label: 'Marketplace',
    options: ['US', 'CA', 'MX', 'UK', 'DE', 'FR', 'IT', 'ES', 'JP'],
    value: 'US'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <SingleSelectWrapper {...args} />,
  args: {
    label: 'Marketplace',
    options: ['US', 'CA', 'MX'],
    value: 'US',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <SingleSelectWrapper {...args} />,
  args: {
    options: ['Search by Goals', 'Search by Campaigns', 'Search by ASINs'],
    value: 'Search by Goals',
    displayValue: 'Search by',
    triggerClassName: '!rounded-l-md !rounded-r-none border border-[#e2e2e2] font-medium text-gray-600'
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Disabled`,`CustomTrigger`]}))();export{f as CustomTrigger,u as Default,d as Disabled,p as __namedExportsOrder,c as default};