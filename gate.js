/* WEBSTIJL demo-login. Klantwachtwoord telt elk bezoek; beheerderswachtwoord telt niet mee. */
(function(){
var ENDPOINT='';
var ADMIN='b6399048e8c4e07202f141a17b403aa50984aacf43a9985e7c41f2dbb918fa71';
var DEMOS={"cleanatoffice": {"h": "5e2f413e6e335c4979ac8cd4296559d5bf7843518902c97cfcf2298cdab9f7b6", "n": "Clean@office"}, "clemys": {"h": "19864d0390d6466a5895c8016c7ef5815763024a25b1998e2c0d5f127437984e", "n": "Bakkerij Clemy's"}, "markussen": {"h": "dc336f0831c7747a8ed2a9238f7bd97dc71c171810a6df44e46de5babdab7d3c", "n": "Markussen"}, "markussen-2": {"h": "dc336f0831c7747a8ed2a9238f7bd97dc71c171810a6df44e46de5babdab7d3c", "n": "Markussen"}, "hansgeerts": {"h": "2a4a623f8058d9b7d73ff1dfeefd4279dc1d4ffd110108c78ce3536e97e04976", "n": "Hans Geerts"}, "maatkastenthomas": {"h": "25ebd0879b725f4afa72160a4f4961ac3310c0980530e7fbb5587f124cbda0f5", "n": "Maatkasten Thomas"}, "frankyscardetailing": {"h": "873fc37576c498cba6aa00eb6256d5e15720041ee0101d40eb81610fa196353a", "n": "Franky's Car Detailing"}, "samfrederickx": {"h": "2fe65e8474ce766962ebfea6a42d6128da7742cb12dbe6ae780817efc0d6495e", "n": "Sam Frederickx"}, "jlgroup": {"h": "95000acc36bf6328986e00732655d63f113b7e9fbaa3955e35b652c914131379", "n": "JL Group"}, "ehcs": {"h": "0e69c36ab56b72964bddf6b97748431ddc73ea012986b3aa6d3b26a426c660a3", "n": "EHCS"}, "eagleworks": {"h": "301b741c00aee37dce453ef874dad6cf4c707937f38980f0f3742d8d0b0cf7c5", "n": "EagleWorks"}, "tmaesconstruct": {"h": "52b7b8558356b90e0ce164b20e7626f72d089f6277389180e87f61782f2f3579", "n": "T. Maes Construct"}, "bulacinski": {"h": "aadfcb889530c8312d5254a01455e8c7535768cedde13e0e39d123889fa60a50", "n": "Krystian Bulacinski"}};
var slug=(location.pathname.split('/').filter(Boolean)[0]||'').toLowerCase();
var d=DEMOS[slug]; if(!d) return;
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){}}
function ss(k,v){try{if(v===undefined)return sessionStorage.getItem(k);sessionStorage.setItem(k,v)}catch(e){}}
if(ls('wst-admin')==='1'||ss('wst-ok-'+slug)==='1') return;
var css=document.createElement('style');css.id='wst-hide';
css.textContent='html.wst-lock body>*:not(#wst-gate){display:none!important}html.wst-lock,html.wst-lock body{overflow:hidden!important;background:#0f1012!important}'+
'#wst-gate{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:20px;background:radial-gradient(ellipse at 30% 0%,#2a2c31,#0f1012 70%);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}'+
'#wst-gate .k{width:100%;max-width:400px;background:#17181b;border:1px solid #2c2e33;border-radius:14px;padding:34px 30px 26px;box-shadow:0 40px 80px -30px rgba(0,0,0,.8);color:#e9e9ea;text-align:center}'+
'#wst-gate .t{font-size:.75rem;letter-spacing:.18em;text-transform:uppercase;color:#F5A700;font-weight:700}'+
'#wst-gate h1{font-size:1.55rem;line-height:1.2;margin:10px 0 6px;color:#fff;font-weight:700;letter-spacing:-.01em}'+
'#wst-gate p{margin:0 0 22px;color:#a3a5ab;font-size:.95rem;line-height:1.5}'+
'#wst-gate input{width:100%;box-sizing:border-box;padding:14px 16px;border-radius:10px;border:1px solid #34363c;background:#0f1012;color:#fff;font-size:1rem;outline:none;text-align:center}'+
'#wst-gate input:focus{border-color:#F5A700;box-shadow:0 0 0 3px rgba(245,167,0,.2)}'+
'#wst-gate button{width:100%;margin-top:12px;padding:14px;border:0;border-radius:10px;background:#F5A700;color:#111;font-weight:700;font-size:1rem;cursor:pointer}'+
'#wst-gate button:hover{background:#ffb820}'+
'#wst-gate .f{min-height:20px;margin-top:10px;color:#ff7a7a;font-size:.88rem}'+
'#wst-gate .o{margin-top:14px;font-size:.8rem;color:#6f7177}#wst-gate .o a{color:#a3a5ab;text-decoration:none}';
document.head.appendChild(css);document.documentElement.classList.add('wst-lock');
function sha(s){return crypto.subtle.digest('SHA-256',new TextEncoder().encode('wst:'+s)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')})}
function open_(){document.documentElement.classList.remove('wst-lock');var g=document.getElementById('wst-gate');if(g)g.remove();}
function log(){if(!ENDPOINT)return;try{fetch(ENDPOINT+'?demo='+encodeURIComponent(slug)+'&t='+Date.now(),{mode:'no-cors',keepalive:true})}catch(e){}}
function bouw(){
 var g=document.createElement('div');g.id='wst-gate';
 g.innerHTML='<form class="k"><div class="t">Voorbeeld van je nieuwe website</div><h1>'+d.n+'</h1><p>Vul het wachtwoord in dat je van Koen kreeg om de demo te bekijken.</p><input type="password" autocomplete="current-password" placeholder="Wachtwoord" aria-label="Wachtwoord" autofocus><button type="submit">Bekijk de demo</button><div class="f" aria-live="polite"></div><div class="o">Gemaakt door <a href="https://webstijl.be/" target="_blank" rel="noopener">WEBSTIJL</a></div></form>';
 document.body.appendChild(g);
 var f=g.querySelector('form'),i=g.querySelector('input'),fout=g.querySelector('.f');
 setTimeout(function(){i.focus()},50);
 f.addEventListener('submit',function(e){e.preventDefault();var w=i.value.trim().toLowerCase();
  sha(w).then(function(x){
   if(x===ADMIN){ls('wst-admin','1');open_();}
   else if(x===d.h){ss('wst-ok-'+slug,'1');log();open_();}
   else{fout.textContent='Dat wachtwoord klopt niet.';i.select();}
  });
 });
}
if(document.body)bouw();else document.addEventListener('DOMContentLoaded',bouw);
})();
