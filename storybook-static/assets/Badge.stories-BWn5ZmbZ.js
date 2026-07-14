import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{m as n,t as r,u as i}from"./dist-C2Z254DA.js";var a,o,s=e((()=>{a=t(),r(),o=({variant:e=`neutral`,size:t=`md`,children:r,className:o=``,iconStr:s})=>{let c={sm:`px-1.5 py-[1px] text-[10px]`,md:`px-2 py-0.5 text-[11px]`,lg:`px-2.5 py-1 text-[12px]`},l={"status-enabled":`bg-white border-gray-200 text-gray-700 rounded-full`,"status-paused":`bg-white border-gray-200 text-gray-500 rounded-full`,type:`bg-white border-gray-200 text-gray-700 rounded-full`,flag:`bg-white border-gray-200 text-gray-700 rounded-md`,"ai-bidding":`bg-white border-[#4aaada] text-[#4aaada] rounded-full`,"auto-harvesting":`bg-white border-[#4aaada] text-[#4aaada] rounded-full`,"keyword-type":`bg-white border-gray-200 text-gray-600 rounded-full`,neutral:`bg-white border-gray-200 text-gray-500 rounded`,blue:`bg-blue-50 border-blue-200 text-blue-700 rounded-full`,red:`bg-red-50 border-red-200 text-red-700 rounded-full`,yellow:`bg-yellow-50 border-yellow-200 text-yellow-700 rounded-full`,green:`bg-green-50 border-green-200 text-green-700 rounded-full`,gray:`bg-gray-50 border-gray-200 text-gray-600 rounded-full`},u=()=>t===`sm`?10:t===`lg`?14:12;return(0,a.jsxs)(`span`,{className:`inline-flex items-center justify-center font-medium border whitespace-nowrap gap-1 transition-colors ${c[t]} ${l[e]} ${o}`,children:[(()=>{let r=u();switch(e){case`flag`:return s?(0,a.jsx)(`img`,{src:s,alt:`flag`,className:`object-cover rounded-[1px] ${t===`sm`?`w-3 h-2`:`w-3.5 h-2.5`}`}):null;case`ai-bidding`:return(0,a.jsx)(n,{size:r});case`auto-harvesting`:return(0,a.jsx)(i,{size:r});default:return null}})(),r]})},o.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{variant:{required:!1,tsType:{name:`union`,raw:`| 'status-enabled'\r
| 'status-paused'\r
| 'type' // Gray background (e.g. Basic, SP Manual)\r
| 'flag' // Store flag\r
| 'ai-bidding' // Blue outline + Dollar icon\r
| 'auto-harvesting' // Blue outline + Lightning icon\r
| 'keyword-type' // Gray outline (e.g. Phrase)\r
| 'neutral'\r
| 'blue' | 'red' | 'yellow' | 'green' | 'gray'`,elements:[{name:`literal`,value:`'status-enabled'`},{name:`literal`,value:`'status-paused'`},{name:`literal`,value:`'type'`},{name:`literal`,value:`'flag'`},{name:`literal`,value:`'ai-bidding'`},{name:`literal`,value:`'auto-harvesting'`},{name:`literal`,value:`'keyword-type'`},{name:`literal`,value:`'neutral'`},{name:`literal`,value:`'blue'`},{name:`literal`,value:`'red'`},{name:`literal`,value:`'yellow'`},{name:`literal`,value:`'green'`},{name:`literal`,value:`'gray'`}]},description:``,defaultValue:{value:`'neutral'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},iconStr:{required:!1,tsType:{name:`string`},description:``}}}})),c,l,u,d,f,p,m,h,g,_,v;e((()=>{s(),c={title:`Design System/Badge`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`status-enabled`,`status-paused`,`type`,`flag`,`ai-bidding`,`auto-harvesting`,`keyword-type`,`neutral`,`blue`,`red`,`yellow`,`green`,`gray`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}},args:{children:`Badge Label`,variant:`neutral`,size:`md`}},l={args:{variant:`status-enabled`,children:`Active`}},u={args:{variant:`status-paused`,children:`Paused`}},d={args:{variant:`ai-bidding`,children:`AI Bidding`}},f={args:{variant:`auto-harvesting`,children:`Auto Harvesting`}},p={args:{variant:`type`,children:`SP Manual`}},m={args:{variant:`keyword-type`,children:`Phrase`}},h={args:{variant:`green`,children:`Hired`}},g={args:{variant:`red`,children:`Alert`}},_={args:{variant:`flag`,children:`US Marketplace`,iconStr:`https://flagcdn.com/w20/us.png`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'status-enabled',
    children: 'Active'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'status-paused',
    children: 'Paused'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ai-bidding',
    children: 'AI Bidding'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'auto-harvesting',
    children: 'Auto Harvesting'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'type',
    children: 'SP Manual'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'keyword-type',
    children: 'Phrase'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'green',
    children: 'Hired'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'red',
    children: 'Alert'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'flag',
    children: 'US Marketplace',
    iconStr: 'https://flagcdn.com/w20/us.png'
  }
}`,..._.parameters?.docs?.source}}},v=[`StatusEnabled`,`StatusPaused`,`AiBidding`,`AutoHarvesting`,`TypeTag`,`KeywordType`,`GreenPill`,`RedPill`,`StoreFlag`]}))();export{d as AiBidding,f as AutoHarvesting,h as GreenPill,m as KeywordType,g as RedPill,l as StatusEnabled,u as StatusPaused,_ as StoreFlag,p as TypeTag,v as __namedExportsOrder,c as default};