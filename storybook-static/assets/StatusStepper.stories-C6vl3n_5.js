import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{O as n,g as r,i,t as a,v as o}from"./dist-C2Z254DA.js";function s({status:e}){let t=[{id:`pending`,label:`Pending`},{id:`in_progress`,label:`In Progress`},{id:`solved`,label:`Solved`},{id:`verified`,label:`Verified`}],a=t.findIndex(t=>t.id===e);return e===`not_verified`&&(a=2),e===`archived`&&(a=4),(0,c.jsxs)(`div`,{className:`w-full mb-8`,children:[(0,c.jsxs)(`div`,{className:`flex items-center justify-between relative`,children:[(0,c.jsx)(`div`,{className:`absolute top-[11px] left-0 w-full h-0.5 bg-gray-200 -z-10`}),(0,c.jsx)(`div`,{className:`absolute top-[11px] left-0 h-0.5 bg-purple-600 -z-10 transition-all duration-500`,style:{width:`${Math.min(a,t.length-1)/(t.length-1)*100}%`}}),t.map((t,s)=>{let l=s<a||e===`archived`,u=s===a,d=t.id===`verified`&&e===`not_verified`;return(0,c.jsxs)(`div`,{className:`flex flex-col items-center bg-white px-2`,children:[(0,c.jsx)(`div`,{className:`w-6 h-6 rounded-full flex items-center justify-center mb-2 z-10 transition-colors
                                ${d?`text-red-600 bg-white`:l?`text-purple-600 bg-white`:u?`text-purple-600 ring-4 ring-purple-100 bg-white`:`text-gray-300 bg-white`}
                            `,children:d?(0,c.jsx)(i,{size:20}):l?(0,c.jsx)(n,{size:20}):u?(0,c.jsx)(o,{size:16}):(0,c.jsx)(r,{size:16})}),(0,c.jsx)(`span`,{className:`text-xs font-bold ${u||l?`text-purple-900`:`text-gray-400`}`,children:t.label})]},t.id)})]}),e===`not_verified`&&(0,c.jsx)(`div`,{className:`mt-2 text-center text-xs text-red-600 font-medium bg-red-50 py-1 rounded`,children:`Verification Failed - More Info Required`})]})}var c,l=e((()=>{c=t(),a(),s.__docgenInfo={description:``,methods:[],displayName:`StatusStepper`,props:{status:{required:!0,tsType:{name:`union`,raw:`'pending' | 'in_progress' | 'solved' | 'verified' | 'not_verified' | 'archived'`,elements:[{name:`literal`,value:`'pending'`},{name:`literal`,value:`'in_progress'`},{name:`literal`,value:`'solved'`},{name:`literal`,value:`'verified'`},{name:`literal`,value:`'not_verified'`},{name:`literal`,value:`'archived'`}]},description:``}}}})),u,d,f,p,m,h,g,_;e((()=>{l(),u={title:`Design System/StatusStepper`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{status:{control:`select`,options:[`pending`,`in_progress`,`solved`,`verified`,`not_verified`,`archived`]}},args:{status:`pending`}},d={args:{status:`pending`}},f={args:{status:`in_progress`}},p={args:{status:`solved`}},m={args:{status:`verified`}},h={args:{status:`not_verified`}},g={args:{status:`archived`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'pending'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'in_progress'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'solved'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'verified'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'not_verified'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'archived'
  }
}`,...g.parameters?.docs?.source}}},_=[`Pending`,`InProgress`,`Solved`,`Verified`,`NotVerified`,`Archived`]}))();export{g as Archived,f as InProgress,h as NotVerified,d as Pending,p as Solved,m as Verified,_ as __namedExportsOrder,u as default};