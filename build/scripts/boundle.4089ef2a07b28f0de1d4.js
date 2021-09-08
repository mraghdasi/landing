(()=>{"use strict";var e=document.querySelectorAll("[data-tab-target]"),t=document.querySelectorAll("[data-tab-content]"),r=document.querySelectorAll('input[name="rd"]'),n=document.querySelectorAll(".collapse-section__label"),o=document.querySelectorAll(".meeting-structure__tab"),i=document.querySelectorAll(".meeting-structure__card"),l=document.querySelectorAll(".dropdown__filter"),a=document.forms.form__signup,s=document.querySelector("#form__signup__name"),c=document.querySelector("#form__signup__phone"),u=document.querySelector("#form__signup__email"),d=document.querySelector("#form__signup__company"),f=document.querySelectorAll(".form__section-input-file"),p=document.querySelectorAll(".form__section-input-file-btn"),m=document.querySelector("#form__signup__cv"),_=document.querySelector(".form__section-input-file.cv .form__section__input-file-name"),v=document.querySelector(".form__section-input-file.cv .form__section-input-file-msg"),g=document.querySelector("#form__signup__portfilo"),y=document.querySelector(".form__section-input-file.portfilo .form__section__input-file-name"),b=document.querySelector(".form__section-input-file.portfilo .form__section-input-file-msg"),h=document.querySelector("#form__signup__submit"),S=document.querySelector("#form__signup__dropdown-value--cloud-degree"),L=document.querySelector("#form__signup__dropdown-value--cloud-type"),E=document.querySelectorAll(".dropdown__select.cloud-type li"),q=document.querySelectorAll(".dropdown__select.cloud-degree li"),I=document.querySelector(".form__result-msg-success"),w=document.querySelector(".form__result-msg-error"),A=document.querySelector("#form_signup__name-error-msg"),x=document.querySelector("#form_signup__phone-error-msg"),T=document.querySelector("#form_signup__email-error-msg"),M=document.querySelectorAll(".form_signup__error-msg"),C=document.querySelector("#form__section-footer-input-submit-loading"),B=document.querySelector("[data-target='carousel']"),k=B.querySelector("[data-target='card']"),F=document.querySelector("[data-action='slideLeft']"),O=document.querySelector("[data-action='slideRight']"),V=B.offsetWidth,j=k.currentStyle||window.getComputedStyle(k),D=Number(j.marginRight.match(/\d+/g)[0]),z=B.querySelectorAll("[data-target='card']").length;const R={carousel:B,maxX:-(z/14*V+D*(z/14)-94),allErrorMessages:M,dropdownCloudTypeInput:L,dropdownCloudDegreeInput:S,loader:C,projectListTabs:e,projectListTabContents:t,meetingStructureTabs:o,meetingStructureTabContents:i,collapseLabels:n,dropDownBoxs:l,nameInput:s,phoneInput:c,emailInput:u,companyInput:d,cvInput:m,portfiloInput:g,dropdownListCloudTypes:E,dropdownListCloudDegrees:q,form:a,leftButton:F,rightButton:O,collapseRadioButtons:r,submitInput:h,fileInputBoxs:f,fileInputButtons:p,cvFileLabel:_,portfiloFileLabel:y,cvInputMessage:v,portfiloInputMessage:b,nameInputErrorMessage:A,phoneInputErrorMessage:x,emailInputErrorMessage:T,formSuccessMessage:I,formErrorMessage:w,offset:0,carouselWidth:V,cardMarginRight:D},J={mediaQuery:window.matchMedia("(max-width: 850px)"),changeStyle:function(e,t,r,n){n.matches?(null!=e&&e.length&&e.forEach((function(e){e.parentElement.querySelector("input").checked||(e.style.backgroundColor="#E7ECF4")})),t&&(t.style.backgroundColor="transparent"),r&&(r.style.backgroundColor="#E7ECF4")):null!=e&&e.length&&e.forEach((function(e){e.style.backgroundColor="transparent"}))}};var Q=R.dropDownBoxs;function X(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N=R.submitInput,W=function(e){var t=Array.from(document.querySelectorAll("input.require")),r=Array.from(document.querySelectorAll("input.require-cv-file")).every((function(e){return!!e.files.length}));t.every((function(e){return!(""===e.value.trim())}))&&r?(N.removeAttribute("disabled"),N.classList.add("form__signup__submit--active")):(N.classList.remove("form__signup__submit--active"),N.setAttribute("disabled",null))},U=function(e){"Enter"===(null==e?void 0:e.key)&&e.preventDefault()};const Z=W;var H=R.collapseRadioButtons;const P=function(e,t){var r=e[1].querySelector(".form__section__input-file-name"),n=null;if(t){var o=t.indexOf("\\")>=0?t.lastIndexOf("\\"):t.lastIndexOf("/");0!==(n=t.substring(o)).indexOf("\\")&&0!==n.indexOf("/")||(n=n.substring(1))}n?(R.fileInputBoxs[0].classList.remove("form__section-input-file--deactive"),R.fileInputButtons[0].classList.remove("form__section-input-file-btn--deactive"),function(e,t,r){var n=e.length&&e[1],o=e.length&&e[1].querySelector(".form__section-input-file-btn");n.classList.add("form__section-input-file--active"),o.classList.add("form__section-input-file-btn--active")}(e),r.innerText=n):r.innerText="فایل باید حاوی نام باشد"};var G=R.nameInput;var K=R.phoneInput;var Y=R.emailInput;var ee=R.cvInputMessage,te=R.portfiloInputMessage,re=R.portfiloFileLabel,ne=R.fileInputBoxs,oe=R.fileInputButtons;var ie=R.nameInputErrorMessage,le=R.phoneInputErrorMessage,ae=R.emailInputErrorMessage,se=R.cvInputMessage,ce=R.portfiloInputMessage,ue=R.portfiloInput,de=R.portfiloFileLabel;var fe=R.fileInputBoxs,pe=R.fileInputButtons,me=R.form,_e=R.cvInput,ve=R.cvFileLabel,ge=R.portfiloFileLabel,ye=R.allErrorMessages,be=R.submitInput,he=R.portfiloInput;function Se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Le=R.formSuccessMessage,Ee=R.formErrorMessage,qe=R.loader,Ie=R.form;const we=function(){var e,t={rows:[{cells:[]}]},r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return Se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Se(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw i}}}}(new FormData(Ie).entries());try{for(r.s();!(e=r.n()).done;){var n=e.value;t.rows[0].cells.push({column:n[0],value:n[1]})}}catch(e){r.e(e)}finally{r.f()}var o=new Headers;o.append("Authorization","Bearer 2117bc9a-d74b-425b-bb22-f2d4dfabd835"),o.append("Content-Type","application/json");var i={method:"POST",headers:o,body:JSON.stringify(t)};fetch("https://coda.io/apis/v1/docs/ah9tBJlDzo/tables/grid-Jdw1cT7VOd/rows",i).then((function(e){return 202===e.status?Le.innerText="پیام شما با موفقیت ارسال شد":Ee.innerText="خطایی رخ داده است، لطفا مجدد تلاش کنید",fe.forEach((function(e){e.classList.remove("form__section-input-file--active")})),pe.forEach((function(e){e.classList.remove("form__section-input-file-btn--active")})),ye.forEach((function(e){e.innerText=""})),me.reset(),_e.value=null,ve.innerText="",he.value=null,ge.innerText="اختیاری",be.setAttribute("disabled",null),ge.classList.remove("form__section__input-file-name--color-aqua"),qe.classList.remove("display"),e.text()})).then((function(e){return console.log(JSON.parse(e))})).catch((function(e){return console.log("error",e)}))};var Ae=R.cvInput,xe=R.portfiloInput,Te=R.dropdownListCloudTypes,Me=R.dropdownListCloudDegrees,Ce=R.form,Be=R.cvFileLabel,ke=R.portfiloFileLabel,Fe=R.leftButton,Oe=R.rightButton,Ve=R.projectListTabs,je=R.meetingStructureTabs,De=R.meetingStructureTabContents,ze=R.projectListTabContents,Re=R.collapseLabels,Je=J.mediaQuery,Qe=R.nameInput,Xe=R.phoneInput,$e=R.emailInput,Ne=R.companyInput,We=R.loader,Ue=R.carouselWidth,Ze=R.maxX,He=R.carousel,Pe=R.dropdownCloudTypeInput,Ge=R.dropdownCloudDegreeInput,Ke=R.cardMarginRight,Ye=R.offset;(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.length&&(t[0].forEach((function(e){e.addEventListener("click",(function(){var r=document.querySelector("#tabs-table__tab-content__"+e.dataset.tabTarget);t[1].forEach((function(e){e.classList.remove("tabs-table__tab-content--active")})),t[0].forEach((function(e){e.classList.remove("tabs-table__tabsــtab--active")})),e.classList.add("tabs-table__tabsــtab--active"),r.classList.add("tabs-table__tab-content--active")}))})),t[2].forEach((function(e){e.addEventListener("click",(function(){var r=e.getAttribute("session-tab-target"),n=document.querySelector("#meeting-structure__card--"+r);t[3].forEach((function(e){e.classList.remove("meeting-structure__card--active")})),t[2].forEach((function(e){e.classList.remove("meeting-structure__tab--active")})),e.classList.add("meeting-structure__tab--active"),n.classList.add("meeting-structure__card--active")}))})))})(Ve,ze,je,De),window.addEventListener("resize",J.changeStyle.bind(null,Re,void 0,void 0,Je)),Q&&Q.length&&Q.forEach((function(e){e.addEventListener("click",(function(e){this.classList.toggle("form__section-input-dropdown--border-radius");var t=this.querySelector("li");this.querySelectorAll(".dropdown__select li").forEach((function(e){e.addEventListener("click",(function(){t.innerText=e.textContent}))}))}))})),H&&H.length&&H.forEach((function(e){e.addEventListener("click",(function(e){var t=e.path[2].querySelectorAll("input"),r=e.target.parentElement,n=r.querySelector("label");r.classList.add("collapse-section--border"),r.querySelector(".collapse-section__label__icon--arrow ellipse").setAttribute("fill","#20C5BA"),r.querySelector(".collapse-section__label__icon--arrow path").setAttribute("stroke","#fff"),n.style.borderBottom="none",J.changeStyle(void 0,n,void 0,J.mediaQuery),t.forEach((function(e){e.checked||(e.parentElement.classList.remove("collapse-section--border"),e.parentElement.querySelector(".collapse-section__label__icon--arrow ellipse").setAttribute("fill","#e7ecf4"),e.parentElement.querySelector(".collapse-section__label__icon--arrow path").setAttribute("stroke","#9db0cb"),e.parentElement.querySelector("label").style.borderBottom="1px solid #d8e1ef",r.previousElementSibling&&(r.previousElementSibling.querySelector("label").style.borderBottom="none"),J.changeStyle(void 0,void 0,e.parentElement.querySelector("label"),J.mediaQuery))}))}))})),function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=X(t.slice(0,3));n.forEach((function(e){e.addEventListener("keyup",W)})),t.forEach((function(e){e.addEventListener("keypress",U)}))}(Qe,Xe,$e,Ne),Ae.addEventListener("change",(function(e){P(e.path,Ae.value),Z()})),xe.addEventListener("change",(function(e){P(e.path,xe.value),e.path[1].querySelector(".form__section__input-file-name").classList.add("form__section__input-file-name--color-aqua")})),Te.forEach((function(e){e.addEventListener("click",(function(e){Pe.value=e.target.innerText}))})),Me.forEach((function(e){e.addEventListener("click",(function(e){Ge.value=e.target.innerText}))})),Ce.addEventListener("submit",(function(e){e.preventDefault();var t,r,n,o,i,l,a,s,c,u,d,f,p,m,_={name:"",phone:"",email:"",cvFile:"",portfiloFile:"",portfiloFileLabel:""},v=(f=Qe.value,p=!(""===f.trim()),m="",p?G.classList.remove("form__signup-input--error"):(G.classList.add("form__signup-input--error"),m="نام و نام خانوادگی را وارد کنید"),{isValid:p,message:m}),g=function(e){var t=/^09\d{9}$/.test(String(e).toLowerCase()),r="";return t?K.classList.remove("form__signup-input--error"):(K.classList.add("form__signup-input--error"),r="فرمت شماره تلفن نامعتبر است"),{isValid:t,message:r}}(Xe.value),y=function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),r="";return t?Y.classList.remove("form__signup-input--error"):(Y.classList.add("form__signup-input--error"),r="فرمت ایمیل نا معتبر است"),{isValid:t,message:r}}($e.value),b=(t=Ae.value&&Ae.files[0],r=xe.value&&xe.files[0],n=1048576,o=null==t?void 0:t.size,i=null==t?void 0:t.type,l="حداکثر حجم مجاز فایل 1 مگابایت است",a=!0,s=null==r?void 0:r.size,c=null==r?void 0:r.type,u="حداکثر حجم مجاز فایل 1 مگابایت است",d=!0,"application/pdf"!==i?(l="فرمت فایل نامعتبر است",a=!1):o>n&&(l="فایل بزرگتر از حد مجاز است",a=!1),r&&"application/pdf"!==c?(u="فرمت فایل نامعتبر است",d=!1):r&&s>n&&(u="فایل بزرگتر از حد مجاز است",d=!1),a?(ee.classList.remove("form_signup__error-msg"),ne[0].classList.remove("form__section-input-file--deactive"),oe[0].classList.remove("form__section-input-file-btn--deactive")):(ee.classList.add("form_signup__error-msg"),ne[0].classList.add("form__section-input-file--deactive"),oe[0].classList.add("form__section-input-file-btn--deactive")),d?(te.classList.remove("form_signup__error-msg"),ne[1].classList.remove("form__section-input-file--deactive"),oe[1].classList.remove("form__section-input-file-btn--deactive"),re.classList.remove("form_signup__error-msg")):(te.classList.add("form_signup__error-msg"),ne[1].classList.add("form__section-input-file--deactive"),oe[1].classList.add("form__section-input-file-btn--deactive"),re.classList.add("form_signup__error-msg")),{cvMessage:l,cvIsValid:a,portfiloMessage:u,portfiloIsValid:d});v.isValid&&g.isValid&&y.isValid&&b.cvIsValid&&b.portfiloIsValid?(We.classList.add("display"),we()):(_.name=v.message,_.phone=g.message,_.email=y.message,_.cvFile=b.cvMessage,_.portfiloFile=b.portfiloMessage,b.cvIsValid||(Ae.value=null,Be.innerText=""),b.portfiloIsValid||(xe.value=null,ke.innerText=""),function(e){ie.innerText=e.name,le.innerText=e.phone,ae.innerText=e.email,se.innerText=e.cvFile,ce.innerText=e.portfiloFile,de.innerText=ue.value?e.portfiloFileLabel:"اختیاری"}(_))})),Fe.addEventListener("click",(function(){0!==Ye&&(Ye+=Ue+Ke,He.style.transform="translateX(".concat(Ye,"px)"))})),Oe.addEventListener("click",(function(){Ye!==Ze&&(Ye-=Ue+Ke,He.style.transform="translateX(".concat(Ye,"px)"))}))})();