import{r as s,a as e,o as t,c as o,b as r,d as a,t as n,F as i,e as l,w as d,f as u,v as c,g as m,h as g,i as p}from"./vendor.9e080f88.js";const f={data:()=>({buttonDisabled:!1,buttonClass:"",usernameClass:"",passwordClass:"",form:{username:"40947026s",password:"asd"},buttonLabel:"",showResult:!1,data:{username:"",term:"",courses:[]}}),created(){this.resetFormStyle()},methods:{resetFormStyle(){this.buttonLabel="登入",this.buttonClass="bg-indigo-600 hover:bg-indigo-700",this.usernameClass="focus:ring-indigo-500 focus:border-indigo-500",this.passwordClass="focus:ring-indigo-500 focus:border-indigo-500"},toggleUsername(){"focus:ring-indigo-500 focus:border-indigo-500"==this.usernameClass?this.usernameClass="focus:ring-red-500 focus:border-red-500":this.usernameClass="focus:ring-indigo-500 focus:border-indigo-500"},togglePassword(){"focus:ring-indigo-500 focus:border-indigo-500"==this.passwordClass?this.passwordClass="focus:ring-red-500 focus:border-red-500":this.passwordClass="focus:ring-indigo-500 focus:border-indigo-500"},toggleButton(){"bg-indigo-600 hover:bg-indigo-700"==this.buttonClass?this.buttonClass="bg-red-600 hover:bg-red-700":this.buttonClass="bg-indigo-600 hover:bg-indigo-700"},async onSubmit(){if(this.resetFormStyle(),!/^[a-z0-9]+$/i.test(this.form.username)||9!=this.form.username.length)return this.$refs.username.focus(),void this.toggleUsername();if(!this.form.password)return this.$refs.password.focus(),void this.togglePassword();this.buttonDisabled=!0,this.buttonLabel="處理中";const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.form.username,password:this.form.password})},o=await fetch("https://api.birkhoff.me/v1/ntnuFinalSurvey",t),r=await o.json();if(console.log(null==r?void 0:r.message),"Invalid username/password pair"===(null==r?void 0:r.message))return this.buttonLabel="帳號或密碼錯誤",this.buttonDisabled=!1,this.$refs.password.focus(),void this.toggleButton();this.data.username=r.username,this.data.term=r.term,this.data.courses=r.coursesData.map((t=>{const o="Y"===t.completeFlag;return{name:t.courseChn,ct_pk:t.ct_pk,completed:o,icon:o?s:e,iconBackground:o?"bg-green-500":"bg-red-500"}})),this.showResult=!0}}},h={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},b={class:"max-w-md w-full space-y-8"},w=r("img",{class:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"},null,-1),y={key:0,class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},x={key:1,class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},v={key:2,class:"mt-2 text-center text-sm text-gray-600"},C={key:0,class:"flow-root"},k={class:"-mb-8"},S={class:"relative pb-8"},j={key:0,class:"absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200","aria-hidden":"true"},R={class:"relative flex space-x-3"},D={class:"min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"},F={class:"text-sm text-gray-500"},z={class:"rounded-md shadow-sm -space-y-px"},B=r("label",{for:"username",class:"sr-only"},"學號",-1),L=r("label",{for:"password",class:"sr-only"},"密碼",-1),U={key:0,class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},$=r("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),N=r("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1);f.render=function(s,e,p,f,P,T){return t(),o("div",h,[r("div",b,[r("div",null,[w,P.showResult?a("",!0):(t(),o("h2",y," 使用 NTNU 帳號登入 ")),P.showResult?(t(),o("h2",x,n(P.data.term)+" 期末評鑑填寫結果 ",1)):a("",!0),P.showResult?a("",!0):(t(),o("p",v," 帳號密碼不會被儲存 "))]),P.showResult?(t(),o("div",C,[r("ul",k,[(t(!0),o(i,null,l(P.data.courses,((s,e)=>(t(),o("li",{key:s.ct_pk},[r("div",S,[e!==P.data.courses.length-1?(t(),o("span",j)):a("",!0),r("div",R,[r("div",null,[r("span",{class:[s.iconBackground,"h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"]},[(t(),o(g(s.icon),{class:"h-5 w-5 text-white","aria-hidden":"true"}))],2)]),r("div",D,[r("div",null,[r("p",F,n(s.name),1)])])])])])))),128))])])):a("",!0),P.showResult?a("",!0):(t(),o("form",{key:1,class:"mt-8 space-y-6",onSubmit:e[3]||(e[3]=d(((...s)=>T.onSubmit&&T.onSubmit(...s)),["prevent"]))},[r("div",z,[r("div",null,[B,u(r("input",{class:[[P.usernameClass],"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm"],"onUpdate:modelValue":e[1]||(e[1]=s=>P.form.username=s),ref:"username",id:"username",name:"username",required:"",placeholder:"學號"},null,2),[[c,P.form.username]])]),r("div",null,[L,u(r("input",{class:[[P.passwordClass],"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm"],"onUpdate:modelValue":e[2]||(e[2]=s=>P.form.password=s),ref:"password",id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",placeholder:"密碼"},null,2),[[c,P.form.password]])])]),r("div",null,[r("button",{type:"submit",class:[[P.buttonClass],"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"],disabled:P.buttonDisabled},[P.buttonDisabled?(t(),o("svg",U,[$,N])):a("",!0),m(" "+n(P.buttonLabel),1)],10,["disabled"])])],32))])])};p({expose:[],setup:s=>(s,e)=>(t(),o(f))}).mount("#app");
