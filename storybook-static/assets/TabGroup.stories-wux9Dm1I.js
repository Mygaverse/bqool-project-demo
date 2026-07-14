import{n as e,o as t}from"./rolldown-runtime-PE7_xIU0.js";import{t as n}from"./react-D96Z4ODX.js";import{t as r}from"./jsx-runtime-DjOA8AOY.js";import{c as i,n as a,t as o}from"./dist-C2Z254DA.js";var s,c,l=e((()=>{s=r(),o(),c=({items:e,activeId:t,onSelect:n,onDelete:r,action:i,className:o=``,variant:c=`scroll`,gridSlots:l=0})=>(0,s.jsxs)(`div`,{className:`flex items-center gap-3 w-full ${o}`,children:[(0,s.jsxs)(`div`,{className:`flex-1 flex items-center border border-[#e2e2e2] rounded-md overflow-hidden h-[42px] bg-white`,children:[e.map(e=>{let i=t===e.id;return(0,s.jsxs)(`button`,{onClick:()=>n(e.id),className:`
                h-full text-sm text-center relative transition-colors font-medium border-r-0 border-[#e2e2e2] last:border-r-0 group
                flex items-center justify-center gap-2 px-4
                ${c===`grid`?`flex-1`:`flex-none min-w-[120px]`} 
                ${i?`text-[#212529] bg-gray-50`:`text-gray-400 hover:text-gray-600 hover:bg-gray-50/50`}
              `,children:[(0,s.jsx)(`span`,{className:`truncate`,children:e.label}),i&&(0,s.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 h-[2px] bg-[#4aaada]`}),e.deletable&&r&&(0,s.jsx)(`span`,{onClick:t=>{t.stopPropagation(),r(e.id)},className:`p-0.5 rounded-full hover:bg-gray-200 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100`,children:(0,s.jsx)(a,{size:14})})]},e.id)}),(()=>{if(c!==`grid`||l<=e.length)return null;let t=l-e.length;return Array.from({length:t}).map((e,t)=>(0,s.jsx)(`div`,{className:`flex-1 bg-[#fafafa] border-r border-[#e2e2e2] last:border-r-0`},`empty-${t}`))})(),c===`scroll`&&(0,s.jsx)(`div`,{className:`flex-1 bg-white`})]}),i&&(0,s.jsx)(`div`,{className:`relative flex-shrink-0`,children:i})]}),c.__docgenInfo={description:``,methods:[],displayName:`TabGroup`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:``},activeId:{required:!0,tsType:{name:`string`},description:``},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},action:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'scroll' | 'grid'`,elements:[{name:`literal`,value:`'scroll'`},{name:`literal`,value:`'grid'`}]},description:``,defaultValue:{value:`'scroll'`,computed:!1}},gridSlots:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}}}}})),u,d,f,p,m,h,g;e((()=>{u=r(),d=t(n()),l(),o(),f={title:`Design System/TabGroup`,component:c,tags:[`autodocs`]},p=e=>{let[t,n]=(0,d.useState)(e.activeId||`1`),[r,i]=(0,d.useState)(e.items),a=e=>{i(r.filter(t=>t.id!==e))};return(0,u.jsx)(`div`,{className:`w-[600px] p-4 bg-[#f8f9fa] rounded`,children:(0,u.jsx)(c,{...e,items:r,activeId:t,onSelect:n,onDelete:a})})},m={render:e=>(0,u.jsx)(p,{...e}),args:{variant:`scroll`,activeId:`1`,items:[{id:`1`,label:`Dashboard Overview`},{id:`2`,label:`Sponsored Products`,deletable:!0},{id:`3`,label:`Sponsored Display`,deletable:!0}],action:(0,u.jsx)(`button`,{className:`h-[42px] w-[42px] border border-[#e2e2e2] rounded-md flex items-center justify-center hover:bg-gray-50 bg-white text-gray-500`,children:(0,u.jsx)(i,{size:20})})}},h={render:e=>(0,u.jsx)(p,{...e}),args:{variant:`grid`,gridSlots:4,activeId:`1`,items:[{id:`1`,label:`Sales Chart`},{id:`2`,label:`ACoS Chart`}]}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <TabGroupWrapper {...args} />,
  args: {
    variant: 'scroll',
    activeId: '1',
    items: [{
      id: '1',
      label: 'Dashboard Overview'
    }, {
      id: '2',
      label: 'Sponsored Products',
      deletable: true
    }, {
      id: '3',
      label: 'Sponsored Display',
      deletable: true
    }],
    action: <button className="h-[42px] w-[42px] border border-[#e2e2e2] rounded-md flex items-center justify-center hover:bg-gray-50 bg-white text-gray-500">\r
        <Plus size={20} />\r
      </button>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <TabGroupWrapper {...args} />,
  args: {
    variant: 'grid',
    gridSlots: 4,
    activeId: '1',
    items: [{
      id: '1',
      label: 'Sales Chart'
    }, {
      id: '2',
      label: 'ACoS Chart'
    }]
  }
}`,...h.parameters?.docs?.source}}},g=[`ScrollLayout`,`GridLayout`]}))();export{h as GridLayout,m as ScrollLayout,g as __namedExportsOrder,f as default};