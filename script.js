function tick(){const d=new Date();document.getElementById('ptClock').textContent=d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false})}
tick();setInterval(tick,30000);

const bL=[
  {t:'<span style="color:var(--bl)">[*]</span> Initializing portfolio environment...',d:0},
  {t:'<span style="color:var(--bl)">[*]</span> Loading modules: security, dfir, fortinet',d:180},
  {t:'<span style="color:var(--gr)">[✓]</span> SOC experience loaded — 5 years',d:350},
  {t:'<span style="color:var(--gr)">[✓]</span> Security Engineering modules active',d:480},
  {t:'<span style="color:var(--gr)">[✓]</span> DFIR toolkit mounted at /opt/athar',d:600},
  {t:'<span style="color:var(--gr)">[✓]</span> Fortinet stack configured',d:710},
  {t:'<span style="color:var(--yl)">[→]</span> Starting desktop for <b>bernardo@kali</b>...',d:880},
  {t:'<span style="color:var(--tx);font-weight:300">→ <b style="color:var(--tb)">Bernardo Sousa</b> · DFIR & Cybersecurity · Open to hybrid (PT) / remote (EU)</span>',d:1050},
];
const bEl=document.getElementById('bootC'),bS=document.getElementById('boot');
bL.forEach(l=>{setTimeout(()=>{const d=document.createElement('div');d.className='bl';d.innerHTML=l.t;bEl.appendChild(d);requestAnimationFrame(()=>d.classList.add('show'))},l.d)});
setTimeout(()=>{bS.classList.add('done');setTimeout(()=>bS.remove(),500)},2200);

let notifTimeout;
function showNotif(){
  const n=document.getElementById('notif');
  n.classList.add('show');
  notifTimeout=setTimeout(dismissNotif,8000);
}
function dismissNotif(){
  clearTimeout(notifTimeout);
  const n=document.getElementById('notif');
  n.classList.remove('show');
}
setTimeout(showNotif,2700);

const svgLi='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
const svgGh='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>';

function tbIcon(key){
  const svg=document.querySelector(`.di[data-f="${key}"] .di-i svg`);
  return svg?svg.outerHTML:'';
}

const W={
  about:{title:'bernardo@kali:~/about_me.txt',icon:'about',label:'about_me.txt',
    html:`<div style="margin-bottom:1rem"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> about_me.txt</div>
<div class="ch">Bernardo Sousa</div>
<p class="ct"><b>Cybersecurity Engineer</b> with ~5 years of experience across SOC operations and Security Engineering. Passionate about <b>DFIR and Incident Response</b> — understanding how attacks happen and how to take them apart.</p>
<div class="fg"><div class="fi"><div class="fi-k">Location</div><div class="fi-v">Porto, Portugal</div></div><div class="fi"><div class="fi-k">Currently at</div><div class="fi-v">Ascendi</div></div><div class="fi"><div class="fi-k">Focus</div><div class="fi-v">DFIR · Security Eng.</div></div><div class="fi"><div class="fi-k">Open source</div><div class="fi-v">@cycurity</div></div><div class="fi ac" style="grid-column:1/-1"><div class="fi-k">Fortinet Ultimate Fabric Challenge</div><div class="fi-v">1st place — 2nd edition</div><div class="fi-s">2× participant · 2nd place in 1st edition</div></div></div>
<hr class="cdiv">
<p class="ct">What got me into cybersecurity was <b>Digital Forensics and Incident Response</b>. The idea of reconstructing an attack — piecing together what happened, understanding the attacker's logic, figuring out what went wrong — genuinely fascinates me.</p>
<p class="ct">I started my career in a <b>SOC environment</b>, which gave me the operational foundation I still rely on. Over time I moved toward <b>Security Engineering</b> — detection architecture, access control hardening, PKI, tabletop exercises, security tooling — which is where most of my focus sits today at Ascendi.</p>
<p class="ct">During university, I was actively competing in <b>CTF competitions</b>, mostly as a team. It was also where I started building tools alongside a group of colleagues — work we eventually formalised under <b>@cycurity</b>, an open-source org.</p>
<p class="ct">I'm a team player who thrives on new challenges. Whether it's a complex investigation, an unfamiliar environment, or a problem with no obvious answer — that's where I do my best work. I'm very comfortable with the <b>Fortinet stack</b> across production environments, including competition-level deployments.</p>
<hr class="cdiv">
<div style="display:flex;gap:6px;flex-wrap:wrap"><a href="https://www.linkedin.com/in/bernardo-sousa-605a30181/" target="_blank" rel="noopener" class="lb lb-li">${svgLi} LinkedIn</a><a href="https://github.com/Bernardo15Sousa" target="_blank" rel="noopener" class="lb lb-gh">${svgGh} GitHub</a></div>`},

  experience:{title:'bernardo@kali:~/experience.md',icon:'experience',label:'experience.md',
    html:`<div style="margin-bottom:1rem"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> experience.md</div>
<div class="ch">Experience</div>
<div class="eb"><div class="eb-m">2023 — Present</div><div class="eb-c">Ascendi</div><div class="eb-r">Security Engineer</div><div class="eb-d">Security engineering across the full scope of an enterprise environment. Core responsibilities include detection engineering, system hardening, and security architecture — from endpoint and network to identity and access control.<br><br>Hands-on IAM hardening: designed and implemented tiered admin accounts and privilege segregation by access level, enforcing least-privilege across the organisation. Manage the full digital certificates lifecycle (PKI), VPN infrastructure, and user access governance.<br><br>Act as the internal security advisor on cross-functional projects, providing security requirements, risk assessments, and architectural guidance before deployment. Support the organisation's ISO 27001 certification effort, contributing to policy alignment, control implementation, and audit readiness.<br><br>Plan and run internal tabletop exercises to test incident response preparedness, and lead phishing simulation campaigns and security awareness initiatives to build a stronger security culture across non-technical teams.<br><br>Day-to-day also covers incident response, vulnerability management, and maintaining the security posture across a distributed infrastructure.</div></div>
<hr class="cdiv">
<div class="eb"><div class="eb-m">2021 — 2022</div><div class="eb-c">S21sec · MSSP</div><div class="eb-r">SOC Consultant</div><div class="eb-d">Joined as a Tier 1 SOC Analyst and progressed through to Tier 3. SOC operations, incident detection and response, threat hunting, and security analysis across a diverse portfolio of clients and industry verticals.</div>
<div class="hl"><div class="hl-l">Major Incident Response</div><div class="hl-t">Participated in a large-scale IR engagement involving multiple coordinated response teams working around the clock to contain an active attack and restore operations. Extended monitoring shifts through the night — including live response to new attacker activity as it surfaced.</div></div></div>`},

  certs:{title:'bernardo@kali:~/certifications.sh',icon:'certs',label:'certifications.sh',
    html:`<div style="margin-bottom:1rem"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">./</span>certifications.sh</div>
<div class="ch">Certifications</div>
<div class="cg"><div class="cc"><div class="cc-a">CEH</div><div class="cc-n">Certified Ethical Hacker — EC-Council · ISEP Academy</div><span class="cc-s d">Training done</span></div><div class="cc"><div class="cc-a">CHFI</div><div class="cc-n">Computer Hacking Forensic Investigator — EC-Council · ISEP Academy</div><span class="cc-s d">Training done</span></div><div class="cc"><div class="cc-a">BTL1</div><div class="cc-n">Blue Team Labs Level 1 — Security Blue Team</div><span class="cc-s d">Certified</span></div><div class="cc"><div class="cc-a">CCD</div><div class="cc-n">Certified CyberDefender — CyberDefenders</div><span class="cc-s w">In progress</span></div></div>`},

  tools:{title:'bernardo@kali:~/toolstack.yml',icon:'tools',label:'toolstack.yml',
    html:`<div style="margin-bottom:1rem"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> toolstack.yml</div>
<div class="ch">Tools &amp; Stack</div>
<div class="tg"><div class="tg-l">SIEM & Log Management</div><div class="tg-items"><span class="tg-item h">IBM QRadar</span><span class="tg-item h">FortiSIEM</span><span class="tg-item h">Microsoft Sentinel</span><span class="tg-item">Splunk</span></div></div>
<div class="tg"><div class="tg-l">DFIR & Forensics</div><div class="tg-items"><span class="tg-item">Wireshark</span><span class="tg-item">Autopsy</span><span class="tg-item">FTK Imager</span><span class="tg-item">EZ Tools (Eric Zimmerman)</span><span class="tg-item">Volatility</span><span class="tg-item">KAPE</span><span class="tg-item">Velociraptor</span><span class="tg-item">Zui</span></div></div>
<div class="tg"><div class="tg-l">Network Security</div><div class="tg-items"><span class="tg-item h">NGFW</span><span class="tg-item h">Email Gateway</span><span class="tg-item h">PKI</span><span class="tg-item">WAF</span><span class="tg-item">ADC / Load Balancing</span></div></div>
<div class="tg"><div class="tg-l">Endpoint Security</div><div class="tg-items"><span class="tg-item h">EDR</span><span class="tg-item h">Endpoint Management</span><span class="tg-item">Intune</span><span class="tg-item">Microsoft Defender for Endpoint</span><span class="tg-item">CrowdStrike Falcon</span></div></div>
<div class="tg"><div class="tg-l">Identity & Access</div><div class="tg-items"><span class="tg-item h">Active Directory</span><span class="tg-item h">Microsoft Entra ID</span></div></div>
<div class="tg"><div class="tg-l">Advanced Threat Protection</div><div class="tg-items"><span class="tg-item h">Sandboxing</span><span class="tg-item h">Deception</span><span class="tg-item h">MFA / Authentication</span></div></div>
<div class="tg"><div class="tg-l">Frameworks & Compliance</div><div class="tg-items"><span class="tg-item h">ITIL</span><span class="tg-item">ISO 27001</span><span class="tg-item">NIS2</span><span class="tg-item">NIST 800-53</span></div></div>
<div class="tg"><div class="tg-l">Scripting & Automation</div><div class="tg-items"><span class="tg-item h">Python</span><span class="tg-item h">PowerShell</span><span class="tg-item">Bash</span></div></div>
<p class="ct" style="margin-top:1rem;font-size:11px;color:var(--td)"><span style="color:var(--bl)">●</span> highlighted = hands-on production experience</p>`},

  projects:{title:'bernardo@kali:~/projects/',icon:'projects',label:'projects/',
    html:`<div style="margin-bottom:1rem"><span class="pr">bernardo@kali</span>:<span class="pa">~/projects</span>$ <span class="fl">ls -la</span></div>
<div class="ch">Projects</div>
<a href="https://github.com/Bernardo15Sousa/Athar" target="_blank" rel="noopener" class="pi pi-feat">
  <div class="pi-n">Athar <span class="pi-feat-badge">Featured</span> <span class="pi-w">In development</span></div>
  <div class="pi-d">Cross-platform Python DFIR tool. Ingests Prefetch, MFT, USN Journal, and Event Logs, correlates them temporally, and outputs an analyst-ready timeline with findings, tags, and a self-contained HTML report.</div>
  <div class="pi-tags"><span class="pi-tag">Python</span><span class="pi-tag">DFIR</span><span class="pi-tag">Windows Forensics</span><span class="pi-tag">Timeline Analysis</span></div>
</a>
<a href="https://github.com/cycurity/wister" target="_blank" rel="noopener" class="pi">
  <div class="pi-n">Wister</div>
  <div class="pi-d">Wordlist generator built for targeted engagements. Supply a set of seed words and get back every meaningful variation — crafted for a specific target, not a generic dump.</div>
  <div class="pi-tags"><span class="pi-tag">Python</span><span class="pi-tag">Offensive Security</span><span class="pi-tag">Wordlist Generation</span><span class="pi-tag">@cycurity</span></div>
</a>
<a href="https://github.com/cycurity/the-box" target="_blank" rel="noopener" class="pi">
  <div class="pi-n">The-Box</div>
  <div class="pi-d">174 Linux tools for penetration testing and security audits, consolidated into a single deployable toolbox. Everything a practitioner needs, ready to go.</div>
  <div class="pi-tags"><span class="pi-tag">Shell</span><span class="pi-tag">Linux</span><span class="pi-tag">Penetration Testing</span><span class="pi-tag">@cycurity</span></div>
</a>
<div class="pi" style="cursor:default">
  <div class="pi-n">Homelab</div>
  <div class="pi-d">Self-hosted infrastructure for learning and experimentation. Docker containers for services and security tooling, pfSense firewall for segmentation and traffic control, UniFi switch and AP for managed networking.</div>
  <div class="pi-tags"><span class="pi-tag">Docker</span><span class="pi-tag">pfSense</span><span class="pi-tag">UniFi</span><span class="pi-tag">Networking</span><span class="pi-tag">Self-hosted</span></div>
</div>`},

  conferences:{title:'bernardo@kali:~/conferences.log',icon:'conferences',label:'conferences.log',
    html:`<div style="margin-bottom:1rem"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> conferences.log</div>
<div class="ch">Conferences</div>
<div class="ce"><div class="ce-y">2026</div><div><div class="ce-n">Flag the Hack #1 — Fortinet</div><div class="ce-d">Fortinet CTF event · 2nd place with my team</div></div></div>
<div class="ce"><div class="ce-y">2025</div><div><div class="ce-n">BSides Lisboa</div><div class="ce-d">Community-driven security conference · Lisbon, Portugal</div></div></div>
<div class="ce"><div class="ce-y">2025</div><div><div class="ce-n">Fortinet Security Day</div><div class="ce-d">Fortinet partner and practitioner event · Portugal</div></div></div>
<div class="ce"><div class="ce-y">2025</div><div><div class="ce-n">AI Security Conference</div><div class="ce-d">Security implications of AI systems and emerging threats</div></div></div>
<div class="ce"><div class="ce-y">2024</div><div><div class="ce-n">Xperts Portugal</div><div class="ce-d">Fortinet technical conference for security professionals · Portugal</div></div></div>`},

  writeups:{title:'bernardo@kali:~/writeups/',icon:'writeups',label:'writeups/',
    html:`<div style="margin-bottom:1rem"><span class="pr">bernardo@kali</span>:<span class="pa">~/writeups</span>$ <span class="fl">ls</span> && <span class="fl">cat</span> README.md</div>
<div class="ch">CTF Write-ups</div>
<p class="ct">I've been doing <b>Capture the Flag</b> competitions since university — usually with a teammate. Write-ups are published as Markdown on GitHub, covering the machines and challenges I find worth documenting.</p>
<hr class="cdiv">
<a href="https://github.com/Bernardo15Sousa/CTF_Writeups" target="_blank" rel="noopener" class="pi"><div class="pi-n">${svgGh} CTF_Writeups →</div><div class="pi-d">Published on GitHub · Markdown format</div></a>`},

  interests:{title:'bernardo@kali:~/interests.conf',icon:'interests',label:'interests.conf',
    html:`<div style="margin-bottom:1rem"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> interests.conf</div>
<div class="ch">Beyond the Keyboard</div>
<div class="ir"><div class="ir-e">🏊</div><div><div class="ir-t">Water Sports &amp; Fitness</div><div class="ir-d">Water polo, open-water swimming, running — if there's water or a finish line, I'm in.</div></div></div>
<div class="ir"><div class="ir-e">🎧</div><div><div class="ir-t">DJing</div><div class="ir-d">Behind the decks when I need to disconnect. Mixing is just another kind of flow state.</div></div></div>
<div class="ir"><div class="ir-e">☕</div><div><div class="ir-t">Speciality Coffee</div><div class="ir-d">V60, Chemex, Hario Switch — always chasing the perfect cup. From origin and processing to dialling in the brew.</div></div></div>
<div class="ir"><div class="ir-e">🦴</div><div><div class="ir-t">Manual Therapy</div><div class="ir-d">Studying osteopathic manipulative therapy — understanding how the body moves, compensates, and heals.</div></div></div>`}
};

let cur=null;const oF=new Map();

function renderTB(){
  const tb=document.getElementById('tb');
  tb.querySelectorAll('.tb-b').forEach(b=>b.remove());
  const sp=tb.querySelector('.tb-sp');
  oF.forEach((_,id)=>{
    const w=W[id]||{icon:'terminal',label:'terminal'};
    const b=document.createElement('button');
    b.className='tb-b'+(cur===id?' active':'');
    const iconKey=id==='terminal'?'terminal':w.icon;
    b.innerHTML='<span class="tb-i">'+tbIcon(iconKey)+'</span>'+(id==='terminal'?'terminal':w.label);
    b.onclick=()=>openW(id);
    tb.insertBefore(b,sp);
  });
}

function openW(id){
  dismissNotif();
  oF.set(id,true); cur=id;
  document.querySelectorAll('.di').forEach(el=>el.classList.remove('active'));
  const ic=document.querySelector(`.di[data-f="${id}"]`);
  if(ic) ic.classList.add('active');
  const overlay=document.getElementById('wo');
  const body=document.getElementById('wB');
  if(id==='terminal'){
    document.getElementById('wT').textContent='bernardo@kali:~';
    document.getElementById('ptApp').textContent='~/terminal';
    body.className='wnb term-body';
    body.innerHTML='<div class="term-scroll" id="termScroll"></div>';
    overlay.classList.add('open');
    renderTB();
    initTerminal();
    return;
  }
  const data=W[id]; if(!data) return;
  document.getElementById('wT').textContent=data.title;
  document.getElementById('ptApp').textContent=data.title.split(':').pop()||'File';
  body.className='wnb';
  body.innerHTML=data.html;
  overlay.classList.add('open');
  body.scrollTop=0;
  renderTB();
}

function closeWindow(){
  document.getElementById('wo').classList.remove('open');
  document.querySelectorAll('.di').forEach(el=>el.classList.remove('active'));
  document.getElementById('ptApp').textContent='Desktop';
  if(cur) oF.delete(cur);
  cur=null; renderTB();
}

document.addEventListener('keydown',e=>{if(e.key==='Escape'&&cur!=='terminal')closeWindow()});

let termHistory=[];
let termHistIdx=-1;

function initTerminal(){
  const sc=document.getElementById('termScroll');
  addTermLine(sc,'<span style="color:var(--kali);font-weight:700">╔══════════════════════════════════════════╗</span>');
  addTermLine(sc,'<span style="color:var(--kali);font-weight:700">║</span>  Welcome to Bernardo\'s portfolio shell  <span style="color:var(--kali);font-weight:700">║</span>');
  addTermLine(sc,'<span style="color:var(--kali);font-weight:700">╚══════════════════════════════════════════╝</span>');
  addTermLine(sc,'');
  runCmd(sc,'help');
  addPrompt(sc);
}

function addTermLine(sc,html){
  const d=document.createElement('div');
  d.className='term-line';
  d.innerHTML=html;
  sc.appendChild(d);
}

function addPrompt(sc){
  const line=document.createElement('div');
  line.className='term-input-line';
  line.innerHTML='<span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ ';
  const input=document.createElement('input');
  input.className='term-input';
  input.setAttribute('autocomplete','off');
  input.setAttribute('spellcheck','false');
  input.setAttribute('autofocus','true');
  line.appendChild(input);
  sc.appendChild(line);
  input.focus();
  sc.scrollTop=sc.scrollHeight;
  input.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
      e.preventDefault();
      const cmd=input.value.trim();
      input.disabled=true;
      if(cmd) termHistory.push(cmd);
      termHistIdx=termHistory.length;
      if(cmd) runCmd(sc,cmd);
      addPrompt(sc);
    } else if(e.key==='ArrowUp'){
      e.preventDefault();
      if(termHistIdx>0){termHistIdx--;input.value=termHistory[termHistIdx]}
    } else if(e.key==='ArrowDown'){
      e.preventDefault();
      if(termHistIdx<termHistory.length-1){termHistIdx++;input.value=termHistory[termHistIdx]}
      else{termHistIdx=termHistory.length;input.value=''}
    } else if(e.key==='Escape'){
      e.preventDefault(); closeWindow();
    } else if(e.key==='Tab'){
      e.preventDefault();
      const v=input.value.trim().toLowerCase();
      const cmds=['help','whoami','cat about_me.txt','cat experience.md','cat conferences.log','cat interests.conf','cat toolstack.yml','ls projects/','./certifications.sh','contact','clear','sudo','exit'];
      const m=cmds.filter(c=>c.startsWith(v));
      if(m.length===1) input.value=m[0];
    }
  });
}

function runCmd(sc,cmd){
  const c=cmd.trim().toLowerCase();
  if(c==='help'){
    addTermLine(sc,`
<span style="color:var(--yl);font-weight:600">Available commands:</span>

  <span class="fl">cat about_me.txt</span>      — who I am
  <span class="fl">cat experience.md</span>      — work history
  <span class="fl">./certifications.sh</span>    — certifications
  <span class="fl">cat toolstack.yml</span>      — tools & stack
  <span class="fl">ls projects/</span>           — my projects
  <span class="fl">cat conferences.log</span>    — conferences attended
  <span class="fl">cat interests.conf</span>     — beyond the keyboard
  <span class="fl">contact</span>                — reach out on LinkedIn
  <span class="fl">whoami</span>                 — quick intro
  <span class="fl">sudo</span>                   — try it ;)
  <span class="fl">clear</span>                 — clear terminal
  <span class="fl">exit</span>                  — close terminal
`);
  }
  else if(c==='whoami'){
    addTermLine(sc,`<span style="color:var(--gr)">bernardo</span> — Cybersecurity Engineer @ Ascendi
<span style="color:var(--td)">Focus:</span> DFIR · Security Engineering · Fortinet
<span style="color:var(--td)">Location:</span> Porto, Portugal
<span style="color:var(--td)">Status:</span> <span style="color:var(--gr)">●</span> Open to new opportunities`);
  }
  else if(c==='cat about_me.txt' || c==='cat about.txt'){ closeWindow(); setTimeout(()=>openW('about'),250); }
  else if(c==='cat experience.md'){ closeWindow(); setTimeout(()=>openW('experience'),250); }
  else if(c==='./certifications.sh' || c==='./certs.sh'){ closeWindow(); setTimeout(()=>openW('certs'),250); }
  else if(c==='cat toolstack.yml' || c==='cat tools.yml'){ closeWindow(); setTimeout(()=>openW('tools'),250); }
  else if(c==='ls projects/' || c==='ls projects'){ closeWindow(); setTimeout(()=>openW('projects'),250); }
  else if(c==='cat conferences.log' || c==='cat conf.log'){ closeWindow(); setTimeout(()=>openW('conferences'),250); }
  else if(c==='cat interests.conf'){ closeWindow(); setTimeout(()=>openW('interests'),250); }
  else if(c==='contact'){
    addTermLine(sc,'<span style="color:var(--gr)">[✓]</span> Opening LinkedIn... see you on the other side!');
    setTimeout(()=>window.open('https://www.linkedin.com/in/bernardo-sousa-605a30181/','_blank'),500);
  }
  else if(c.startsWith('sudo')){
    const sub=c.replace('sudo','').trim();
    if(sub==='rm -rf /' || sub==='rm -rf /*'){
      addTermLine(sc,`<span style="color:var(--rd)">[✗] Nice try.</span>
<span style="color:var(--td)">This portfolio took me longer to build than I'd like to admit.</span>
<span style="color:var(--td)">Least privilege means you don't get to destroy it. Sorry not sorry.</span>`);
    } else if(sub==='su' || sub==='su root' || sub==='-i' || sub==='bash'){
      addTermLine(sc,`<span style="color:var(--rd)">[✗] Permission denied.</span>
<span style="color:var(--yl)">Root access on a personal machine?</span> That's not how least privilege works.
<span style="color:var(--td)">Even I don't have root here. And I built the thing.</span>`);
    } else {
      addTermLine(sc,`<span style="color:var(--rd)">[✗] bernardo is not in the sudoers file. This incident will be reported.</span>
<span style="color:var(--td)">Just kidding. But seriously — least privilege. If you don't need it, you don't get it.</span>
<span style="color:var(--td)">That's literally my job.</span>`);
    }
  }
  else if(c==='clear'){ sc.innerHTML=''; }
  else if(c==='exit'){ closeWindow(); }
  else if(c==='ls'){
    addTermLine(sc,`<span style="color:var(--bl)">about_me.txt</span>  <span style="color:var(--bl)">experience.md</span>  <span style="color:var(--gr)">certifications.sh</span>  <span style="color:var(--bl)">toolstack.yml</span>  <span style="color:var(--mv)">projects/</span>  <span style="color:var(--bl)">conferences.log</span>  <span style="color:var(--mv)">writeups/</span>  <span style="color:var(--bl)">interests.conf</span>`);
  }
  else if(c==='pwd'){ addTermLine(sc,'/home/bernardo'); }
  else if(c==='uname -a' || c==='uname'){ addTermLine(sc,'Linux kali-portfolio 6.1.0-kali9 #1 SMP x86_64 GNU/Linux'); }
  else if(c==='date'){ addTermLine(sc,new Date().toString()); }
  else if(c==='ping google.com'){
    addTermLine(sc,`<span style="color:var(--td)">PING google.com — are you trying to check if this portfolio has internet? It's a website. It IS the internet.</span>`);
  }
  else if(c==='neofetch' || c==='screenfetch'){
    addTermLine(sc,`<span style="color:var(--kali)">  ..............               </span>  <span class="pr">bernardo</span>@<span style="color:var(--bl)">kali-portfolio</span>
<span style="color:var(--kali)">          ..,;:ccc,.           </span>  ─────────────────────
<span style="color:var(--kali)">        ......''';lxO.         </span>  <span style="color:var(--td)">OS:</span> Kali Portfolio 2025
<span style="color:var(--kali)">  .....''''..........,:ld;    </span>  <span style="color:var(--td)">Host:</span> Ascendi
<span style="color:var(--kali)">             .';;;:::;,,.x,   </span>  <span style="color:var(--td)">Uptime:</span> ~5 years in security
<span style="color:var(--kali)">        ..'''.            0Wm </span>  <span style="color:var(--td)">Shell:</span> DFIR/bash
<span style="color:var(--kali)">     ....                ;MM; </span>  <span style="color:var(--td)">DE:</span> Security Engineering
<span style="color:var(--kali)">    .                      .  </span>  <span style="color:var(--td)">Theme:</span> Fortinet [dark]
<span style="color:var(--kali)">   ..                       . </span>  <span style="color:var(--td)">Terminal:</span> portfolio.html
<span style="color:var(--kali)">    ,                        ;</span>
<span style="color:var(--kali)">     ,.                       .</span>
<span style="color:var(--kali)">       .;,   ...               </span>
<span style="color:var(--kali)">          .;' .;googoo;.       </span>
<span style="color:var(--kali)">             ;dOOOOOOOd;       </span>
<span style="color:var(--kali)">              .';:cccc:'.      </span>`);
  }
  else if(c!==''){
    addTermLine(sc,`<span style="color:var(--rd)">bash: ${cmd}: command not found</span>\n<span style="color:var(--td)">Type</span> <span class="fl">help</span> <span style="color:var(--td)">to see available commands.</span>`);
  }
  sc.scrollTop=sc.scrollHeight;
}

document.getElementById('wo').addEventListener('click',e=>{
  if(cur==='terminal'){
    const inp=document.querySelector('.term-input:not([disabled])');
    if(inp) inp.focus();
  }
});
