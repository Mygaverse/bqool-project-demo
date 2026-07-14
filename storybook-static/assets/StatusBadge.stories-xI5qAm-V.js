import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";var n,r,i=e((()=>{n=t(),r=({status:e})=>(0,n.jsx)(`span`,{className:`px-2 py-1 rounded-full text-xs border ${{active:`bg-green-100 text-status-success border-green-200`,paused:`bg-yellow-100 text-status-warning border-yellow-200`,archived:`bg-gray-100 text-gray-500 border-gray-200`}[e]}`,children:e.toUpperCase()}),r.__docgenInfo={description:``,methods:[],displayName:`StatusBadge`,props:{status:{required:!0,tsType:{name:`union`,raw:`'active' | 'paused' | 'archived'`,elements:[{name:`literal`,value:`'active'`},{name:`literal`,value:`'paused'`},{name:`literal`,value:`'archived'`}]},description:``}}}})),a,o,s,c,l;e((()=>{i(),a={title:`Design System/StatusBadge`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{status:{control:`select`,options:[`active`,`paused`,`archived`]}},args:{status:`active`}},o={args:{status:`active`}},s={args:{status:`paused`}},c={args:{status:`archived`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'active'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'paused'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'archived'
  }
}`,...c.parameters?.docs?.source}}},l=[`Active`,`Paused`,`Archived`]}))();export{o as Active,c as Archived,s as Paused,l as __namedExportsOrder,a as default};