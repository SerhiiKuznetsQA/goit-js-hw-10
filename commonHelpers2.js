import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const r=document.querySelector(".form");r.addEventListener("submit",n);function n(e){e.preventDefault();const o=e.target.elements.delay.value,s=e.target.elements.state.value;m(o,s).then(t=>{i.show({message:`✅ Fulfilled promise in ${t}ms`,position:"topRight",color:"green"})}).catch(t=>{i.show({message:`❌ Rejected promise in ${t}ms`,position:"topRight",color:"red"})})}function m(e,o){return new Promise((s,t)=>{o==="fulfilled"&&setTimeout(()=>{s(e)},e),setTimeout(()=>{t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
