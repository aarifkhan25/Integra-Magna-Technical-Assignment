document.addEventListener("DOMContentLoaded",()=>{
    const togglebtn=document.getElementById("theme-toggle");
    const html=document.documentElement;
    const saveTheme=localStorage.getItem("theme");
    if(saveTheme){
        html.setAttribute("data-theme",saveTheme);
        updateIcon(saveTheme)
    }
    togglebtn.addEventListener('click',()=>{
        const currentTheme=html.getAttribute('data-theme');
        const newTheme=currentTheme=="dark"? "light":"dark";
        html.setAttribute("data-theme",newTheme);
        localStorage.setItem("theme",newTheme);
        updateIcon(newTheme)
    });
    function updateIcon(theme){
        togglebtn.innerHTML=theme==="dark"? "☀️":"🌙"
    }
})