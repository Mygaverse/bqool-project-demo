import{n as e,o as t}from"./rolldown-runtime-PE7_xIU0.js";import{t as n}from"./react-D96Z4ODX.js";import{t as r}from"./jsx-runtime-DjOA8AOY.js";import{A as i,M as a,t as o}from"./dist-C2Z254DA.js";var s,c,l=e((()=>{s=r(),o(),c=({value:e,onChange:t,min:n=0,max:r=999999,step:o=1,prefix:c,suffix:l,className:u=``,isError:d=!1,placeholder:f=`0`,disabled:p=!1,size:m=`md`})=>{let h=()=>{if(p)return;let n=parseFloat(((typeof e==`number`?e:parseFloat(e)||0)+o).toFixed(2));n<=r&&t(n)},g=()=>{if(p)return;let r=parseFloat(((typeof e==`number`?e:parseFloat(e)||0)-o).toFixed(2));r>=n&&t(r)},_=e=>{if(p)return;let n=e.target.value;if(n===``){t(0);return}let i=parseFloat(n);isNaN(i)||t(Math.min(r,i))},v=e=>{if(p)return;let i=e.target.value;if(i===``){t(n);return}let a=parseFloat(i);if(isNaN(a)){t(n);return}let s=Math.max(n,Math.min(r,a)),c=o.toString(),l=c.indexOf(`.`);if(l!==-1){let e=c.length-l-1;s=parseFloat(s.toFixed(e))}else s=Math.round(s);t(s)},y=m===`sm`?`h-[28px]`:`h-[32px]`,b=p?`bg-gray-50`:d?`bg-red-50`:`bg-white`,x=d?`border-red-400`:`border-gray-300`,S=p?`text-gray-400`:`text-gray-900`,C=p?`cursor-not-allowed`:``;return(0,s.jsxs)(`div`,{className:`
        flex items-center bg-white border rounded overflow-hidden w-full transition-colors
        ${y} ${b} ${x} ${C}
        ${u}
      `,children:[c&&(0,s.jsx)(`span`,{className:`pl-2 text-xs select-none ${p?`text-gray-400`:`text-gray-500`}`,children:c}),(0,s.jsx)(`input`,{type:`number`,value:e??``,onChange:_,onBlur:v,placeholder:f,disabled:p,className:`
            w-full px-2 text-sm outline-none bg-transparent 
            placeholder:text-gray-300 text-right
            appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
            ${S} ${C}
        `}),l&&(0,s.jsx)(`span`,{className:`pr-1 text-sm select-none ${p?`text-gray-400`:`text-gray-500`}`,children:l}),(0,s.jsxs)(`div`,{className:`flex flex-col border-l h-full shrink-0 ${x}`,children:[(0,s.jsx)(`button`,{type:`button`,onClick:h,disabled:p,className:`
              px-1 h-[15px] flex items-center justify-center border-b transition-colors
              ${x}
              ${p?`text-gray-300`:`text-gray-600 hover:bg-gray-100`}
        `,children:(0,s.jsx)(i,{size:m===`sm`?6:8})}),(0,s.jsx)(`button`,{type:`button`,onClick:g,disabled:p,className:`
              px-1 h-[16px] flex items-center justify-center transition-colors
              ${p?`text-gray-300`:`text-gray-600 hover:bg-gray-100`}
            `,children:(0,s.jsx)(a,{size:m===`sm`?6:8})})]})]})},c.__docgenInfo={description:``,methods:[],displayName:`NumberStepper`,props:{value:{required:!0,tsType:{name:`union`,raw:`number | string | null`,elements:[{name:`number`},{name:`string`},{name:`null`}]},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(val: number) => void`,signature:{arguments:[{type:{name:`number`},name:`val`}],return:{name:`void`}}},description:``},min:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`999999`,computed:!1}},step:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},prefix:{required:!1,tsType:{name:`string`},description:``},suffix:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},isError:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"0"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}}}}})),u,d,f,p,m,h,g,_,v,y,b;e((()=>{u=r(),d=t(n()),l(),f={title:`Design System/NumberStepper`,component:c,parameters:{layout:`centered`},tags:[`autodocs`]},p=e=>{let[t,n]=(0,d.useState)(e.value||10);return(0,u.jsx)(`div`,{className:`w-[160px]`,children:(0,u.jsx)(c,{...e,value:t,onChange:t=>{n(t),e.onChange&&e.onChange(t)}})})},m={render:e=>(0,u.jsx)(p,{...e}),args:{value:10,min:0,max:100,step:1}},h={render:e=>(0,u.jsx)(p,{...e}),args:{value:150.5,min:10,max:5e3,step:5,prefix:`$`}},g={render:e=>(0,u.jsx)(p,{...e}),args:{value:12.5,min:0,max:200,step:.5,suffix:`%`}},_={render:e=>(0,u.jsx)(p,{...e}),args:{value:1.5,min:.1,max:10,step:.1,size:`sm`}},v={render:e=>(0,u.jsx)(p,{...e}),args:{value:45,disabled:!0}},y={render:e=>(0,u.jsx)(p,{...e}),args:{value:120,isError:!0}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <NumberStepperWrapper {...args} />,
  args: {
    value: 10,
    min: 0,
    max: 100,
    step: 1
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <NumberStepperWrapper {...args} />,
  args: {
    value: 150.5,
    min: 10,
    max: 5000,
    step: 5,
    prefix: '$'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <NumberStepperWrapper {...args} />,
  args: {
    value: 12.5,
    min: 0,
    max: 200,
    step: 0.5,
    suffix: '%'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <NumberStepperWrapper {...args} />,
  args: {
    value: 1.5,
    min: 0.1,
    max: 10.0,
    step: 0.1,
    size: 'sm'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <NumberStepperWrapper {...args} />,
  args: {
    value: 45,
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <NumberStepperWrapper {...args} />,
  args: {
    value: 120,
    isError: true
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`BudgetDollar`,`BiddingPercentage`,`SmallSize`,`DisabledState`,`ErrorState`]}))();export{g as BiddingPercentage,h as BudgetDollar,m as Default,v as DisabledState,y as ErrorState,_ as SmallSize,b as __namedExportsOrder,f as default};