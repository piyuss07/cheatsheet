
const s=document.getElementById('search');
s.addEventListener('input',()=>{
 const v=s.value.toLowerCase();
 document.querySelectorAll('.card').forEach(c=>{
  c.style.display=c.innerText.toLowerCase().includes(v)?'block':'none';
 });
});
