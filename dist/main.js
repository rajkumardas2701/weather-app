!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=()=>{const e=document.querySelector(".alert-city-name");e&&e.remove()},i=async e=>{const t=`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=bae266a2bf0e92ca7ec62610275967dc`;try{document.getElementById("spinner-section").classList.add("loader"),document.querySelector(".weather-content").classList.add("hide-weather-content");const e=await fetch(t,{mode:"cors"}),i=await e.json();return i.main?(document.getElementById("spinner-section").classList.remove("loader"),document.querySelector(".weather-content").classList.remove("hide-weather-content"),(e=>{if(e){const t=[{id:"city-heading",value:e.name},{id:"feels-like-id",value:e.main.feels_like},{id:"humidity-temp-id",value:e.main.humidity},{id:"pressure-temp-id",value:e.main.pressure},{id:"max-temp-id",value:e.main.temp_max+"K"},{id:"max-temp-id-celcious",value:(e.main.temp_max-273.15).toFixed(2)+"°C"},{id:"min-temp-id",value:e.main.temp_min+"K"},{id:"min-temp-id-celcious",value:(e.main.temp_max-273.15).toFixed(2)+"°C"},{id:"wind-deg-id",value:e.wind.deg},{id:"wind-speed-id",value:e.wind.speed}];for(let e=0;e<t.length;e+=1)document.getElementById(t[e].id).innerHTML=t[e].value;const n=document.querySelector(".gif-section");document.getElementById("weather-span").innerHTML=e.weather[0].main,document.getElementById("weather-description").innerHTML=e.weather[0].description;const i=document.createElement("img");i.setAttribute("class","image-giff"),"Rain"===e.weather[0].main?(n.innerHTML="",i.setAttribute("src","images/rainy.png"),n.appendChild(i)):"Clouds"===e.weather[0].main?(n.innerHTML="",i.setAttribute("src","images/cloudy.png"),n.appendChild(i)):"Clear"===e.weather[0].main?(n.innerHTML="",i.setAttribute("src","images/clear.png"),n.appendChild(i)):"Mist"===e.weather[0].main?(n.innerHTML="",i.setAttribute("src","images/mist.jpg"),n.appendChild(i)):"Thunderstorm"===e.weather[0].main?(n.innerHTML="",i.setAttribute("src","images/Thunderstorm.png"),n.appendChild(i)):"Drizzle"===e.weather[0].main?(n.innerHTML="",i.setAttribute("src","images/drizzle.png"),n.appendChild(i)):"Snow"===e.weather[0].main?(n.innerHTML="",i.setAttribute("src","images/snow.png"),n.appendChild(i)):"Haze"===e.weather[0].main&&(n.innerHTML="",i.setAttribute("src","images/haze.png"),n.appendChild(i))}})(i)):((e,t)=>{n();const i=document.createElement("div");i.className=t,i.appendChild(document.createTextNode(e));const r=document.querySelector(".general-section"),a=document.querySelector(".upper-section");r.insertBefore(i,a),setTimeout(()=>{n(),document.getElementById("spinner-section").classList.remove("loader")},3e3)})("Ooopps!! It seems your city does not exist. Please check the spelling","alert-city-name"),i}catch(e){return e}};document.getElementById("search-button").addEventListener("click",()=>{const e=document.getElementById("city-name").value;e&&i(e)}),document.getElementById("toggle-temperature").addEventListener("click",()=>{document.querySelector(".maximum-temp-celcious").classList.toggle("hide-section"),document.querySelector(".minimum-temp-celcious").classList.toggle("hide-section"),document.querySelector(".maximum-temp").classList.toggle("hide-section-two"),document.querySelector(".minimum-temp").classList.toggle("hide-section-two")})}]);