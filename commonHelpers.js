import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as f}from"./assets/vendor-77e16229.js";const s={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){y(e[0]).then(()=>{t.disabled=!1,t.classList.remove("disabled")}).catch(n=>{t.disabled=!0,t.classList.add("disabled"),f.show({message:n.message,position:"topRight",color:"red"})})}};let o,d;const t=document.querySelector("[data-start]"),i=document.querySelector("#datetime-picker");t.disabled=!0;t.classList.add("disabled");t.addEventListener("click",p);function y(e){return new Promise((n,a)=>{let r=new Date;e.getTime()<r.getTime()?a(new Error("Please choose a date in the future")):(o=e.getTime(),n(o))})}function p(e){e&&(t.disabled=!0,t.classList.add("disabled"),i.disabled=!0),b()}function b(){d=setInterval(()=>{g()},1e3)}function g(){const e=o-Date.now();if(e<=0)clearInterval(d),i.disabled=!1;else{const n=T(e);w(n)}}function T(e){const c=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:l,seconds:m}}function w(e){s.days.textContent=String(e.days).padStart(2,"0"),s.hours.textContent=String(e.hours).padStart(2,"0"),s.minutes.textContent=String(e.minutes).padStart(2,"0"),s.seconds.textContent=String(e.seconds).padStart(2,"0")}h("#datetime-picker",S);
//# sourceMappingURL=commonHelpers.js.map
