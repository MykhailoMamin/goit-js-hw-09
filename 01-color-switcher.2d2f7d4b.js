!function(){var t,e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,d.disabled=!1,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)})),d.addEventListener("click",(function(){e.disabled=!1,d.disabled=!0,clearInterval(t),document.body.style.backgroundColor=""}))}();
//# sourceMappingURL=01-color-switcher.2d2f7d4b.js.map
