import{n as e,o as t}from"./rolldown-runtime-PE7_xIU0.js";import{t as n}from"./react-D96Z4ODX.js";import{t as r}from"./jsx-runtime-DjOA8AOY.js";import{f as i,t as a}from"./dist-C2Z254DA.js";function o({content:e,children:t,position:n=`top`,className:r=``}){let[i,a]=(0,c.useState)(!1),o=c.useId();return(0,s.jsxs)(`div`,{className:`relative inline-block ${r}`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onFocus:()=>a(!0),onBlur:()=>a(!1),"aria-describedby":o,children:[t,i&&(0,s.jsxs)(`div`,{id:o,role:`tooltip`,className:`absolute z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-sm whitespace-nowrap ${{top:`bottom-full left-1/2 -translate-x-1/2 mb-2`,bottom:`top-full left-1/2 -translate-x-1/2 mt-2`,left:`right-full top-1/2 -translate-y-1/2 mr-2`,right:`left-full top-1/2 -translate-y-1/2 ml-2`}[n]}`,children:[e,(0,s.jsx)(`div`,{className:`absolute w-2 h-2 bg-gray-900 transform rotate-45 
            ${n===`top`?`bottom-[-4px] left-1/2 -translate-x-1/2`:``}
            ${n===`bottom`?`top-[-4px] left-1/2 -translate-x-1/2`:``}
            ${n===`left`?`right-[-4px] top-1/2 -translate-y-1/2`:``}
            ${n===`right`?`left-[-4px] top-1/2 -translate-y-1/2`:``}
          `})]})]})}var s,c,l=e((()=>{s=r(),c=t(n()),o.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),u,d,f,p,m,h,g;e((()=>{u=r(),l(),a(),d={title:`Design System/Tooltip`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`,`left`,`right`]}},args:{content:`This is a helpful tooltip explanation.`,position:`top`,children:(0,u.jsxs)(`span`,{className:`flex items-center gap-1 cursor-pointer text-gray-500 hover:text-gray-700`,children:[`Hover me `,(0,u.jsx)(i,{size:16})]})}},f={args:{position:`top`}},p={args:{position:`bottom`}},m={args:{position:`left`}},h={args:{position:`right`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'bottom'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'left'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'right'
  }
}`,...h.parameters?.docs?.source}}},g=[`Top`,`Bottom`,`Left`,`Right`]}))();export{p as Bottom,m as Left,h as Right,f as Top,g as __namedExportsOrder,d as default};