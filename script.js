// FAQ accordion

document.querySelectorAll(".accordion-header").forEach(btn => {

btn.addEventListener("click", () => {

const body = btn.nextElementSibling
const icon = btn.querySelector("i")

body.classList.toggle("active")

if(body.classList.contains("active")){
icon.style.transform="rotate(180deg)"
}else{
icon.style.transform="rotate(0deg)"
}

})

})



// Smooth scroll animation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})

})



// Discord Member Counter

const guildID = "YOUR_SERVER_ID"

fetch(`https://discord.com/api/guilds/${guildID}/widget.json`)
.then(res=>res.json())
.then(data=>{

document.getElementById("member-count").innerText =
data.presence_count

})
.catch(()=>{
document.getElementById("member-count").innerText = "Community"
})

// FAQ Tabs

const buttons = document.querySelectorAll(".faq-btn")
const panels = document.querySelectorAll(".faq-panel")

buttons.forEach(btn=>{
btn.addEventListener("click",()=>{

buttons.forEach(b=>b.classList.remove("active"))
panels.forEach(p=>p.classList.remove("active"))

btn.classList.add("active")
document.getElementById(btn.dataset.tab).classList.add("active")

})
})

// FAQ Tabs Logic
const faqButtons = document.querySelectorAll(".faq-btn");
const faqPanels = document.querySelectorAll(".faq-panel");

faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    faqButtons.forEach(b => b.classList.remove("active"));
    faqPanels.forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

