import{n as e,o as t}from"./rolldown-runtime-PE7_xIU0.js";import{t as n}from"./react-D96Z4ODX.js";import{t as r}from"./jsx-runtime-DjOA8AOY.js";import{n as i,t as a}from"./dist-C2Z254DA.js";var o,s,c=e((()=>{o=r(),a(),s=({filters:e,onReset:t,className:n=``})=>e.length===0?null:(0,o.jsxs)(`div`,{className:"flex items-center bg-white border border-[#e2e2e2] rounded-md h-[48px] px-2 shadow-sm mb-4 ${className}`}",children:[(0,o.jsx)(`div`,{className:`px-4 py-2 border-r border-[#e2e2e2] text-sm font-medium text-gray-700 mr-2`,children:`Filters`}),(0,o.jsx)(`div`,{className:`flex items-center gap-2 flex-1 overflow-x-auto no-scrollbar`,children:e.map((e,t)=>(0,o.jsxs)(`div`,{className:`bg-[#eff1f5] flex items-center px-2 py-1.5 rounded text-xs text-gray-600 border border-transparent hover:border-gray-300 transition-all whitespace-nowrap`,children:[e.label,(0,o.jsx)(`button`,{onClick:e.onRemove,className:`ml-2 hover:text-red-500`,children:(0,o.jsx)(i,{size:16})})]},t))}),(0,o.jsx)(`button`,{onClick:t,className:`px-4 py-2 border-l border-[#e2e2e2] text-sm text-gray-500 hover:text-[#4aaada] transition-colors whitespace-nowrap`,children:`Reset Filters`})]}),s.__docgenInfo={description:``,methods:[],displayName:`FilterBar`,props:{filters:{required:!0,tsType:{name:`Array`,elements:[{name:`FilterItem`}],raw:`FilterItem[]`},description:``},onReset:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),l,u,d,f,p,m;e((()=>{l=r(),u=t(n()),c(),d={title:`Design System/FilterBar`,component:s,tags:[`autodocs`]},f=e=>{let[t,n]=(0,u.useState)(e.filters),r=e=>{n(t.filter((t,n)=>n!==e))},i=()=>{n([])},a=t.map((e,t)=>({label:e.label,onRemove:()=>r(t)}));return(0,l.jsx)(`div`,{className:`w-[600px] p-4 bg-[#f8f9fa] rounded`,children:(0,l.jsx)(s,{...e,filters:a,onReset:i})})},p={render:e=>(0,l.jsx)(f,{...e}),args:{filters:[{label:`Marketplace: US`},{label:`ACoS > 35%`},{label:`Status: Active`},{label:`Budget > $100`}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <FilterBarWrapper {...args} />,
  args: {
    filters: [{
      label: 'Marketplace: US'
    }, {
      label: 'ACoS > 35%'
    }, {
      label: 'Status: Active'
    }, {
      label: 'Budget > $100'
    }]
  }
}`,...p.parameters?.docs?.source}}},m=[`ActiveFilters`]}))();export{p as ActiveFilters,m as __namedExportsOrder,d as default};