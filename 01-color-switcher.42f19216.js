let t=null,e=!0;const o={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};o.start.addEventListener("click",(function(){t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3),document.body.classList.add("background-color-change"),o.start.setAttribute("disabled","disabled"),e=!1})),o.stop.addEventListener("click",(function(){clearInterval(t),document.body.classList.remove("background-color-change"),o.start.removeAttribute("disabled"),e=!0}));
//# sourceMappingURL=01-color-switcher.42f19216.js.map
