document.addEventListener("DOMContentLoaded",function(){
const WA="966596100109";
const menu={
coffee:[
{id:"flat",name:"Flat White",desc:"Double espresso, silky milk.",price:24},
{id:"v60",name:"V60",desc:"Seasonal single-origin filter coffee.",price:27},
{id:"spanish",name:"Spanish Latte",desc:"Espresso, milk and gentle sweetness.",price:26}],
food:[
{id:"croissant",name:"Turkey Croissant",desc:"Butter croissant, turkey and cheese.",price:32},
{id:"toast",name:"Avocado Toast",desc:"Sourdough, avocado and herbs.",price:36},
{id:"sandwich",name:"SOU Sandwich",desc:"Chicken, greens and house sauce.",price:39}],
dessert:[
{id:"tiramisu",name:"Coffee Tiramisu",desc:"Espresso, mascarpone and cocoa.",price:29},
{id:"cheesecake",name:"Burnt Cheesecake",desc:"Creamy Basque-style slice.",price:31},
{id:"cookie",name:"Sea Salt Cookie",desc:"Warm chocolate cookie.",price:18}]
};
let cart={};let method="Delivery",payment="Apple Pay";
const grid=document.getElementById("menuGrid"),items=document.getElementById("cartItems"),count=document.getElementById("cartCount"),total=document.getElementById("cartTotal");
function renderMenu(cat){grid.innerHTML=menu[cat].map(x=>`<article class="item" data-id="${x.id}"><small>${cat.toUpperCase()}</small><h3>${x.name}</h3><p>${x.desc}</p><div class="item-foot"><strong>${x.price} SAR</strong><button type="button" class="add" data-id="${x.id}" data-cat="${cat}">+</button></div></article>`).join("");grid.querySelectorAll(".add").forEach(b=>b.onclick=()=>{const x=menu[b.dataset.cat].find(i=>i.id===b.dataset.id);cart[x.id]||(cart[x.id]={...x,qty:0});cart[x.id].qty++;renderCart()})}
function renderCart(){const vals=Object.values(cart).filter(x=>x.qty>0);count.textContent=vals.reduce((s,x)=>s+x.qty,0);total.textContent=vals.reduce((s,x)=>s+x.qty*x.price,0);if(!vals.length){items.innerHTML='<p class="empty">Choose something from the menu.</p>';return}items.innerHTML=vals.map(x=>`<div class="cart-row"><span>${x.qty} × ${x.name}</span><b>${x.qty*x.price} SAR</b></div>`).join("")}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderMenu(b.dataset.category)});
document.querySelectorAll(".method").forEach(b=>b.onclick=()=>{document.querySelectorAll(".method").forEach(x=>x.classList.remove("active"));b.classList.add("active");method=b.dataset.method});
document.querySelectorAll(".pay").forEach(b=>b.onclick=()=>{document.querySelectorAll(".pay").forEach(x=>x.classList.remove("active"));b.classList.add("active");payment=b.dataset.pay});
document.getElementById("sendOrder").onclick=()=>{const vals=Object.values(cart).filter(x=>x.qty>0);if(!vals.length)return alert("Add an item first.");const lines=["SOU Café Order","",`Method: ${method}`,`Payment preference: ${payment}`,"",...vals.map(x=>`${x.qty} x ${x.name} — ${x.qty*x.price} SAR`),"",`Total: ${total.textContent} SAR`];window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(lines.join("\n")),"_blank")};
document.getElementById("reserveForm").onsubmit=e=>{e.preventDefault();const msg=["SOU Café Table Reservation","",`Name: ${document.getElementById("reserveName").value}`,`Guests: ${document.getElementById("reserveGuests").value}`,`Date: ${document.getElementById("reserveDate").value}`,`Time: ${document.getElementById("reserveTime").value}`].join("\n");window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(msg),"_blank")};
const scene=document.getElementById("cupScene"),cup=document.getElementById("cup");if(scene&&cup&&matchMedia("(hover:hover) and (pointer:fine)").matches){scene.onmousemove=e=>{const r=scene.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cup.style.transform=`rotateX(${7-y*8}deg) rotateY(${-11+x*14}deg) translateY(${y*6}px)`};scene.onmouseleave=()=>cup.style.transform="rotateX(7deg) rotateY(-11deg)"}
renderMenu("coffee");renderCart();
});