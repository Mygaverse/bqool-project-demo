import{n as e,o as t}from"./rolldown-runtime-PE7_xIU0.js";import{t as n}from"./react-D96Z4ODX.js";import{t as r}from"./jsx-runtime-DjOA8AOY.js";import{S as i,b as a,t as o}from"./dist-C2Z254DA.js";var s,c,l,u=e((()=>{s=r(),c=t(n()),o(),l=({tabs:e,activeTab:t,onTabChange:n,className:r=``})=>{let o=(0,c.useRef)(null),[l,u]=(0,c.useState)(!1),[d,f]=(0,c.useState)(!1),p=()=>{if(o.current){let{scrollLeft:e,scrollWidth:t,clientWidth:n}=o.current;u(e>0),f(e<t-n-1)}};(0,c.useEffect)(()=>(p(),window.addEventListener(`resize`,p),()=>window.removeEventListener(`resize`,p)),[e]);let m=e=>{o.current&&(o.current.scrollBy({left:e===`left`?-200:200,behavior:`smooth`}),setTimeout(p,300))};return(0,s.jsxs)(`div`,{className:`flex-1 flex items-center bg-white border border-[#e2e2e2] rounded-md h-full overflow-hidden relative`,children:[l&&(0,s.jsx)(`button`,{onClick:()=>m(`left`),className:`absolute left-0 top-0 bottom-0 w-8 flex items-center justify-center bg-white/90 shadow-[4px_0_5px_-2px_rgba(0,0,0,0.1)] z-10 hover:bg-gray-50`,children:(0,s.jsx)(i,{size:12})}),(0,s.jsx)(`div`,{ref:o,onScroll:p,className:`flex-1 flex items-center overflow-x-auto no-scrollbar scroll-smooth h-full`,style:{scrollbarWidth:`none`,msOverflowStyle:`none`},children:e.map(e=>(0,s.jsxs)(`button`,{onClick:()=>!e.disabled&&n(e.id),disabled:e.disabled,className:`
                flex-1 min-w-max h-full px-6 text-sm font-medium relative transition-colors border-r-0 border-[#e2e2e2] last:border-0 whitespace-nowrap
                ${t===e.id?`text-gray-900 bg-gray-50`:e.disabled?`text-gray-300 cursor-not-allowed bg-white`:`text-gray-400 hover:text-gray-700 hover:bg-gray-50`}
            `,children:[e.label,e.count!==void 0&&(0,s.jsx)(`span`,{className:`
                text-xs px-1.5 py-0.5 rounded-full 
                ${t===e.id?`bg-blue-100 text-blue-700`:`bg-gray-100 text-gray-600`}
              `,children:e.count}),t===e.id&&(0,s.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 h-[3px] bg-[#4aaada]`})]},e.id))}),d&&(0,s.jsx)(`button`,{onClick:()=>m(`right`),className:`absolute right-0 top-0 bottom-0 w-8 flex items-center justify-center bg-white/90 shadow-[-4px_0_5px_-2px_rgba(0,0,0,0.1)] z-10 hover:bg-gray-50`,children:(0,s.jsx)(a,{size:12})})]})},l.__docgenInfo={description:``,methods:[],displayName:`ScrollableTabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`Tab`}],raw:`Tab[]`},description:``},activeTab:{required:!0,tsType:{name:`string`},description:``},onTabChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),d,f,p,m,h,g;e((()=>{d=r(),f=t(n()),u(),p={title:`Design System/ScrollableTabs`,component:l,tags:[`autodocs`]},m=e=>{let[t,n]=(0,f.useState)(e.activeTab||`1`);return(0,d.jsx)(`div`,{className:`w-[500px] h-[48px] p-4 bg-[#f8f9fa] rounded flex items-center justify-center`,children:(0,d.jsx)(`div`,{className:`w-full h-full`,children:(0,d.jsx)(l,{...e,activeTab:t,onTabChange:n})})})},h={render:e=>(0,d.jsx)(m,{...e}),args:{activeTab:`1`,tabs:[{id:`1`,label:`All Campaigns`,count:124},{id:`2`,label:`Sponsored Products`,count:85},{id:`3`,label:`Sponsored Display`,count:39},{id:`4`,label:`Keyword Rules`,count:12},{id:`5`,label:`Disabled Tab`,count:0,disabled:!0}]}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <ScrollableTabsWrapper {...args} />,
  args: {
    activeTab: '1',
    tabs: [{
      id: '1',
      label: 'All Campaigns',
      count: 124
    }, {
      id: '2',
      label: 'Sponsored Products',
      count: 85
    }, {
      id: '3',
      label: 'Sponsored Display',
      count: 39
    }, {
      id: '4',
      label: 'Keyword Rules',
      count: 12
    }, {
      id: '5',
      label: 'Disabled Tab',
      count: 0,
      disabled: true
    }]
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,p as default};