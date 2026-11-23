(function(){
try{if(sessionStorage.getItem('sp'))return;sessionStorage.setItem('sp','1')}catch(e){}
var sains=/sains/.test(location.pathname),c1=sains?'#0b7285':'#5f3dc4',c2=sains?'#2f9e8f':'#3b5bdb';
var ph=['diri','keluarga','pasangan'],n=0;try{n=+localStorage.getItem('spn')||0;localStorage.setItem('spn',(n+1)%3)}catch(e){}
var img=ph[n%3];
var ex=sains?new Date(2026,11,3,8,0):new Date(2026,10,24,9,0),nm=sains?'Sains 1511':'Bahasa Inggeris 1119';
var d=Math.ceil((ex-new Date())/864e5),t=d>1?d+' hari lagi':d===1?'Esok!':d===0?'Hari ini!':'';
var s=document.createElement('style');
s.textContent='#sp{position:fixed;inset:0;z-index:2147483647;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;background:linear-gradient(160deg,'+c1+','+c2+');color:#fff;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;text-align:center;overflow:hidden;transition:opacity .5s,transform .5s}#sp.o{opacity:0;transform:scale(1.04);pointer-events:none}#sp .g{position:absolute;width:140vmax;height:140vmax;left:50%;top:38%;margin:-70vmax;background:radial-gradient(circle,rgba(255,255,255,.28),transparent 55%);animation:spg 6s ease-in-out infinite}#sp img{position:relative;max-height:62vh;max-width:88vw;object-fit:contain;filter:drop-shadow(0 14px 22px rgba(0,0,0,.35));animation:spi .9s cubic-bezier(.2,.9,.3,1.2) both,spf 4s 1s ease-in-out infinite}#sp .b{position:relative;width:100%;padding:18px 20px calc(26px + env(safe-area-inset-bottom));background:linear-gradient(transparent,rgba(0,0,0,.35) 30%)}#sp h1{margin:0 0 6px;font-size:clamp(24px,7vw,34px);line-height:1.15;animation:spu .7s .3s both}#sp p{margin:0;font-size:15px;opacity:.95;animation:spu .7s .5s both}#sp b.c{display:inline-block;margin-top:12px;padding:7px 16px;border-radius:99px;background:rgba(255,255,255,.2);font-size:14px;animation:spu .7s .7s both}#sp small{display:block;margin-top:10px;opacity:.7;font-size:12px}@keyframes spi{from{opacity:0;transform:translateY(60px) scale(.9)}to{opacity:1;transform:none}}@keyframes spf{50%{transform:translateY(-8px)}}@keyframes spu{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}@keyframes spg{50%{transform:scale(1.12)}}@media(prefers-reduced-motion:reduce){#sp *{animation:none!important}}';
document.head.appendChild(s);
var e=document.createElement('div');e.id='sp';
e.innerHTML='<div class="g"></div><img src="'+img+'.webp" alt=""><div class="b"><h1>Semangat! Kamu boleh A+</h1><p>Keluarga sentiasa doakan kamu.</p>'+(t?'<b class="c">'+nm+': '+t+'</b>':'')+'<small>Ketuk untuk mula</small></div>';
function x(){e.classList.add('o');setTimeout(function(){e.remove()},600)}
e.onclick=x;document.body.appendChild(e);setTimeout(x,4200);
})();
