import{j as a}from"./index-Cm8sXCLE.js";import{r as c}from"./react-vendor-ByTr29QW.js";import"./firebase-vendor-CAk-8R_y.js";const m={_origin:"https://api.emailjs.com"},x=(t,e="https://api.emailjs.com")=>{m._userID=t,m._origin=e},g=(t,e,o)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class d{constructor(e){this.status=e.status,this.text=e.responseText}}const b=(t,e,o={})=>new Promise((n,l)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:s})=>{const i=new d(s);i.status===200||i.text==="OK"?n(i):l(i)}),r.addEventListener("error",({target:s})=>{l(new d(s))}),r.open("POST",m._origin+t,!0),Object.keys(o).forEach(s=>{r.setRequestHeader(s,o[s])}),r.send(e)}),f=(t,e,o,n)=>{const l=n||m._userID;return g(l,t,e),b("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:l,service_id:t,template_id:e,template_params:o}),{"Content-type":"application/json"})},y=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},v=(t,e,o,n)=>{const l=n||m._userID,r=y(o);g(l,t,e);const s=new FormData(r);return s.append("lib_version","3.2.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",l),b("/api/v1.0/email/send-form",s)},u={init:x,send:f,sendForm:v},w=6e4;let h=0;const j=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),_=t=>t.length>=10&&t.length<=1e3,F=({t})=>{const[e,o]=c.useState({name:"",email:"",message:""}),n=c.useCallback(r=>{const{name:s,value:i}=r.target;o(p=>({...p,[s]:i}))},[]),l=c.useCallback(async r=>{r.preventDefault();const s=Date.now();if(s-h<w){alert("Please wait a minute before sending another message.");return}if(!j(e.email)){alert("Please enter a valid email address.");return}if(!_(e.message)){alert("Message must be between 10 and 1000 characters.");return}h=s;try{u.init("skwn_-DYfDakGK644"),await u.send("service_bdj14o3","template_2e2nikq",{name:e.name,email:e.email,message:e.message,to_email:"tiger3homs@gmail.com"}),alert("Message sent successfully!"),o({name:"",email:"",message:""})}catch(i){console.error("Failed to send message:",i),alert("Failed to send message. Please try again.")}},[e]);return a.jsx("section",{className:"container mx-auto px-4 py-16 rounded-lg shadow-xl bg-gray-800/50 backdrop-blur-sm",children:a.jsxs("div",{className:"sectionbg max-w-3xl mx-auto p-8 rounded-lg shadow-lg ",children:[a.jsx("h2",{className:"text-3xl font-bold text-center mb-8 ",style:{color:"var(--title-color)"},children:t.title}),a.jsxs("form",{onSubmit:l,className:"mt-8",children:[a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300",style:{color:"var(--h3title-color)"},children:t.nameLabel}),a.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:n,placeholder:t.namePlaceholder,className:"mt-1 block w-full rounded-md  bg-gray-800/50 text-white border-gray-500 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300",style:{color:"var(--h3title-color)"},children:t.emailLabel}),a.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:n,placeholder:t.emailPlaceholder,className:"mt-1 block w-full rounded-md  bg-gray-800/50 text-white border-gray-500 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300",style:{color:"var(--h3title-color)"},children:t.messageLabel}),a.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:n,placeholder:t.messagePlaceholder,className:"mt-1 block w-full rounded-md  bg-gray-800/50 text-white border-gray-500 focus:ring-blue-500 focus:border-blue-500",rows:4,required:!0})]}),a.jsx("button",{type:"submit",className:"px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-900 transition",children:t.submitButton})]})]})})};export{F as default};
//# sourceMappingURL=ContactSection-zDRaRpba.js.map
