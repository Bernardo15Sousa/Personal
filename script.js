function tick(){const d=new Date();document.getElementById('ptClock').textContent=d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false})}
tick();setInterval(tick,30000);

const bL=[
  {t:'<span class="t-bl">[*]</span> Initializing portfolio environment...',d:0},
  {t:'<span class="t-bl">[*]</span> Loading modules: security, dfir, fortinet',d:180},
  {t:'<span class="t-gr">[✓]</span> SOC experience loaded, 5 years',d:350},
  {t:'<span class="t-gr">[✓]</span> Security Engineering modules active',d:480},
  {t:'<span class="t-gr">[✓]</span> DFIR toolkit mounted at /opt/athar',d:600},
  {t:'<span class="t-gr">[✓]</span> Fortinet stack configured',d:710},
  {t:'<span class="t-yl">[→]</span> Starting desktop for <b>bernardo@kali</b>...',d:880},
  {t:'<span class="t-tx w3">→ <b class="t-tb">Bernardo Sousa</b> · DFIR & Cybersecurity · Open to hybrid (PT) / remote (EU)</span>',d:1050},
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

const CONTACT_EMAIL='bernardo.sousa.15@protonmail.com';

function tbIcon(key){
  const svg=document.querySelector(`.di[data-f="${key}"] .di-i svg`);
  return svg?svg.outerHTML:(W[key]&&W[key].iconSvg)||'';
}

const W={
  about:{title:'bernardo@kali:~/about_me.txt',icon:'about',label:'about_me.txt',
    html:`<div class="mb1"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> about_me.txt</div>
<div class="ch">Bernardo Sousa</div>
<p class="ct"><b>Cybersecurity Engineer</b> with ~5 years of experience across SOC operations and Security Engineering. My focus is <b>DFIR and Incident Response</b>: understanding how attacks happen and how to take them apart.</p>
<div class="fg"><div class="fi"><div class="fi-k">Location</div><div class="fi-v">Porto, Portugal</div></div><div class="fi"><div class="fi-k">Currently at</div><div class="fi-v">Ascendi</div></div><div class="fi"><div class="fi-k">Focus</div><div class="fi-v">DFIR · Security Eng.</div></div><div class="fi"><div class="fi-k">Open source</div><div class="fi-v">@cycurity</div></div><div class="fi ac gcf"><div class="fi-k">Fortinet Ultimate Fabric Challenge</div><div class="fi-v">1st place, 2nd edition</div><div class="fi-s">2× participant · 2nd place in 1st edition</div></div></div>
<hr class="cdiv">
<p class="ct">What got me into cybersecurity was <b>Digital Forensics and Incident Response</b>. Reconstructing an attack, piecing together what happened and following the attacker's logic, is the part I find genuinely interesting.</p>
<p class="ct">I started my career in a <b>SOC environment</b>, which gave me the operational foundation I still rely on. Over time I moved toward <b>Security Engineering</b> (detection architecture, access control hardening, PKI, tabletop exercises, security tooling), which is where most of my focus sits today at Ascendi.</p>
<p class="ct">During university I competed in <b>CTF competitions</b>, mostly as a team. It's also where I started building tools with a group of colleagues, work we eventually formalised under <b>@cycurity</b>, an open-source org.</p>
<p class="ct">I work well in a team and take on unfamiliar problems directly. A complex investigation, a new environment, or a problem with no obvious answer is where I do my best work. I'm comfortable with the <b>Fortinet stack</b> across production environments, including competition-level deployments.</p>
<hr class="cdiv">
<div class="frow"><a href="https://www.linkedin.com/in/bernardo-sousa-605a30181/" target="_blank" rel="noopener" class="lb lb-li">${svgLi} LinkedIn</a><a href="https://github.com/Bernardo15Sousa" target="_blank" rel="noopener" class="lb lb-gh">${svgGh} GitHub</a></div>`},

  experience:{title:'bernardo@kali:~/experience.md',icon:'experience',label:'experience.md',
    html:`<div class="mb1"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> experience.md</div>
<div class="ch">Experience</div>
<p class="ct tk-hint">Click a role to expand.</p>
<div class="tl">
  <div class="tl-node">
    <div class="tl-h" data-act="tl">
      <div class="tl-m">2023 — Present</div>
      <div class="tl-c">Ascendi</div>
      <div class="tl-r">Security Engineer</div>
    </div>
    <div class="tl-p"><div class="tl-pi">
      <p>I run security engineering across the environment: detection engineering, system hardening, and security architecture, from endpoint and network through to identity and access control.</p>
      <p>I designed the tiered admin model and segmented privilege by access level, so least-privilege is enforced org-wide. I own the certificate lifecycle (PKI), the VPN infrastructure, and user access governance. On cross-functional projects I'm the internal security advisor: I set the security requirements and run the risk assessments before anything ships, and I support the ISO 27001 effort on policy, controls, and audit readiness.</p>
      <p>I plan the internal tabletop exercises that test our incident response, and I run the phishing simulations and awareness campaigns for non-technical teams. Day to day also covers incident response, vulnerability management, and the security posture across a distributed infrastructure.</p>
      <div class="tl-built"><b>Built:</b> the tiered admin account model and privilege segregation now enforced across the organisation.</div>
      <div class="tl-pills"><span class="tl-pill">IAM</span><span class="tl-pill">PKI</span><span class="tl-pill">VPN</span><span class="tl-pill">Detection Engineering</span><span class="tl-pill">ISO 27001</span><span class="tl-pill">Incident Response</span><span class="tl-pill">Tabletop</span><span class="tl-pill">Phishing Simulation</span></div>
    </div></div>
  </div>
  <div class="tl-node">
    <div class="tl-h" data-act="tl">
      <div class="tl-m">2021 — 2022</div>
      <div class="tl-c">S21sec · MSSP</div>
      <div class="tl-r">SOC Consultant</div>
    </div>
    <div class="tl-p"><div class="tl-pi">
      <p>I joined as a Tier 1 SOC analyst and worked up to Tier 3. I handled incident detection and response, threat hunting, and security analysis across a broad portfolio of clients spanning different industries.</p>
      <div class="tl-built"><b>Did:</b> worked a large-scale incident response with multiple coordinated teams, running monitoring and live response through the night as new attacker activity surfaced.</div>
      <div class="tl-pills"><span class="tl-pill">SOC</span><span class="tl-pill">Threat Hunting</span><span class="tl-pill">Incident Response</span><span class="tl-pill">Detection</span><span class="tl-pill">Log Analysis</span></div>
    </div></div>
  </div>
</div>`},

  certs:{title:'bernardo@kali:~/certifications.sh',icon:'certs',label:'certifications.sh',
    html:`<div class="mb1"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">./</span>certifications.sh</div>
<div class="ch">Certifications</div>
<div class="cg"><div class="cc"><div class="cc-a">CEH</div><div class="cc-n">Certified Ethical Hacker — EC-Council · ISEP Academy</div><span class="cc-s d">Training done</span></div><div class="cc"><div class="cc-a">CHFI</div><div class="cc-n">Computer Hacking Forensic Investigator — EC-Council · ISEP Academy</div><span class="cc-s d">Training done</span></div><div class="cc"><div class="cc-a">BTL1</div><div class="cc-n">Blue Team Labs Level 1 — Security Blue Team</div><span class="cc-s d">Certified</span></div><div class="cc"><div class="cc-a">CCD</div><div class="cc-n">Certified CyberDefender — CyberDefenders</div><span class="cc-s w">In progress</span></div></div>`},

  tools:{title:'bernardo@kali:~/toolstack.yml',icon:'tools',label:'toolstack.yml',
    html:`<div class="mb1"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> toolstack.yml</div>
<div class="ch">Tools &amp; Stack</div>
<div class="tg"><div class="tg-l">SIEM & Log Management</div><div class="tg-items"><span class="tg-item h">IBM QRadar</span><span class="tg-item h">FortiSIEM</span><span class="tg-item h">Microsoft Sentinel</span><span class="tg-item">Splunk</span></div></div>
<div class="tg"><div class="tg-l">DFIR & Forensics</div><div class="tg-items"><span class="tg-item">Wireshark</span><span class="tg-item">Autopsy</span><span class="tg-item">FTK Imager</span><span class="tg-item">EZ Tools (Eric Zimmerman)</span><span class="tg-item">Volatility</span><span class="tg-item">KAPE</span><span class="tg-item">Velociraptor</span><span class="tg-item">Zui</span></div></div>
<div class="tg"><div class="tg-l">Network Security</div><div class="tg-items"><span class="tg-item h">NGFW</span><span class="tg-item h">Email Gateway</span><span class="tg-item h">PKI</span><span class="tg-item">WAF</span><span class="tg-item">ADC / Load Balancing</span></div></div>
<div class="tg"><div class="tg-l">Endpoint Security</div><div class="tg-items"><span class="tg-item h">EDR</span><span class="tg-item h">Endpoint Management</span><span class="tg-item">Intune</span><span class="tg-item">Microsoft Defender for Endpoint</span><span class="tg-item">CrowdStrike Falcon</span></div></div>
<div class="tg"><div class="tg-l">Identity & Access</div><div class="tg-items"><span class="tg-item h">Active Directory</span><span class="tg-item h">Microsoft Entra ID</span></div></div>
<div class="tg"><div class="tg-l">Advanced Threat Protection</div><div class="tg-items"><span class="tg-item h">Sandboxing</span><span class="tg-item h">Deception</span><span class="tg-item h">MFA / Authentication</span></div></div>
<div class="tg"><div class="tg-l">Frameworks & Compliance</div><div class="tg-items"><span class="tg-item h">ITIL</span><span class="tg-item">ISO 27001</span><span class="tg-item">NIS2</span><span class="tg-item">NIST 800-53</span></div></div>
<div class="tg"><div class="tg-l">Scripting & Automation</div><div class="tg-items"><span class="tg-item h">Python</span><span class="tg-item h">PowerShell</span><span class="tg-item">Bash</span></div></div>
<p class="ct tk-note"><span class="t-bl">●</span> highlighted = hands-on production experience</p>`},

  projects:{title:'bernardo@kali:~/projects/',icon:'projects',label:'projects/',
    html:`<div class="mb1"><span class="pr">bernardo@kali</span>:<span class="pa">~/projects</span>$ <span class="fl">ls -la</span></div>
<div class="ch">Projects</div>
<div class="pi pi-feat" data-act="open" data-f="security">
  <div class="pi-n">this-site <span class="pi-feat-badge">▸ inspect</span></div>
  <div class="pi-d">The site you're on is itself a project. Static on GitHub Pages, proxied through Cloudflare, A+ security headers, and a DevSecOps pipeline on every push to main. Click to open its full security stack.</div>
  <div class="pi-tags"><span class="pi-tag">HTML/JS</span><span class="pi-tag">Security Headers</span><span class="pi-tag">DevSecOps</span><span class="pi-tag">Cloudflare</span></div>
</div>
<a href="https://github.com/Bernardo15Sousa/Athar" target="_blank" rel="noopener" class="pi">
  <div class="pi-n">Athar <span class="pi-w">In development</span></div>
  <div class="pi-d">Cross-platform Python DFIR tool. Ingests Prefetch, MFT, USN Journal, and Event Logs, correlates them temporally, and outputs an analyst-ready timeline with findings, tags, and a self-contained HTML report.</div>
  <div class="pi-tags"><span class="pi-tag">Python</span><span class="pi-tag">DFIR</span><span class="pi-tag">Windows Forensics</span><span class="pi-tag">Timeline Analysis</span></div>
</a>
<a href="https://github.com/cycurity/wister" target="_blank" rel="noopener" class="pi">
  <div class="pi-n">Wister</div>
  <div class="pi-d">Wordlist generator built for targeted engagements. Supply a set of seed words and get back every meaningful variation, crafted for a specific target, not a generic dump.</div>
  <div class="pi-tags"><span class="pi-tag">Python</span><span class="pi-tag">Offensive Security</span><span class="pi-tag">Wordlist Generation</span><span class="pi-tag">@cycurity</span></div>
</a>
<a href="https://github.com/cycurity/the-box" target="_blank" rel="noopener" class="pi">
  <div class="pi-n">The-Box</div>
  <div class="pi-d">174 Linux tools for penetration testing and security audits, consolidated into a single deployable toolbox. Everything a practitioner needs, ready to go.</div>
  <div class="pi-tags"><span class="pi-tag">Shell</span><span class="pi-tag">Linux</span><span class="pi-tag">Penetration Testing</span><span class="pi-tag">@cycurity</span></div>
</a>
<div class="pi cur-def">
  <div class="pi-n">Homelab</div>
  <div class="pi-d">Self-hosted infrastructure for learning and experimentation. Docker containers for services and security tooling, pfSense firewall for segmentation and traffic control, UniFi switch and AP for managed networking.</div>
  <div class="pi-tags"><span class="pi-tag">Docker</span><span class="pi-tag">pfSense</span><span class="pi-tag">UniFi</span><span class="pi-tag">Networking</span><span class="pi-tag">Self-hosted</span></div>
</div>`},

  conferences:{title:'bernardo@kali:~/conferences.log',icon:'conferences',label:'conferences.log',
    html:`<div class="mb1"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> conferences.log</div>
<div class="ch">Conferences</div>
<div class="ce"><div class="ce-y">2026</div><div><div class="ce-n">Flag the Hack #1 — Fortinet</div><div class="ce-d">Fortinet CTF event · 2nd place with my team</div></div></div>
<div class="ce"><div class="ce-y">2025</div><div><div class="ce-n">BSides Lisboa</div><div class="ce-d">Community-driven security conference · Lisbon, Portugal</div></div></div>
<div class="ce"><div class="ce-y">2025</div><div><div class="ce-n">Fortinet Security Day</div><div class="ce-d">Fortinet partner and practitioner event · Portugal</div></div></div>
<div class="ce"><div class="ce-y">2025</div><div><div class="ce-n">AI Security Conference</div><div class="ce-d">Security implications of AI systems and emerging threats</div></div></div>
<div class="ce"><div class="ce-y">2024</div><div><div class="ce-n">Xperts Portugal</div><div class="ce-d">Fortinet technical conference for security professionals · Portugal</div></div></div>`},

  writeups:{title:'bernardo@kali:~/writeups/',icon:'writeups',label:'writeups/',
    html:`<div class="mb1"><span class="pr">bernardo@kali</span>:<span class="pa">~/writeups</span>$ <span class="fl">ls</span> && <span class="fl">cat</span> README.md</div>
<div class="ch">CTF Write-ups</div>
<p class="ct">I've been doing <b>Capture the Flag</b> competitions since university, usually with a teammate. Write-ups are published as Markdown on GitHub, covering the machines and challenges I find worth documenting.</p>
<hr class="cdiv">
<a href="https://github.com/Bernardo15Sousa/CTF_Writeups" target="_blank" rel="noopener" class="pi"><div class="pi-n">${svgGh} CTF_Writeups →</div><div class="pi-d">Published on GitHub · Markdown format</div></a>`},

  interests:{title:'bernardo@kali:~/interests.conf',icon:'interests',label:'interests.conf',
    html:`<div class="mb1"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> interests.conf</div>
<div class="ch">Beyond the Keyboard</div>
<div class="ir"><div class="ir-e">🏊</div><div><div class="ir-t">water sports &amp; triathlon</div><div class="ir-d">Water polo since forever, open water swimming, and working toward a first triathlon. Pain is just a training variable.</div></div></div>
<div class="ir"><div class="ir-e"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gr)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><rect x="2" y="6" width="20" height="12" rx="6"/></svg></div><div><div class="ir-t">Gaming</div><div class="ir-d">Who doesn't like to sit down for a few hours and forget the world exists.</div></div></div>
<div class="ir"><div class="ir-e">☕</div><div><div class="ir-t">Speciality Coffee</div><div class="ir-d">I like to pretend I'm a scientist while making a simple cup of coffee. V60, Chemex, Aeropress. The equipment changes, the obsession doesn't.</div></div></div>
<div class="ir"><div class="ir-e">🦴</div><div><div class="ir-t">Manual Therapy</div><div class="ir-d">Studying osteopathic manipulative therapy: how the body moves, compensates, and heals.</div></div></div>`},

  security:{title:'bernardo@kali:~/security.conf',icon:'security',label:'security.conf',
    iconSvg:`<svg viewBox="0 0 24 24" fill="none" stroke="var(--gr)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    html:`<div class="mb1"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">cat</span> security.conf</div>
<div class="ch">This Site's Security Stack</div>
<div class="fg"><div class="fi"><div class="fi-k">Hosting</div><div class="fi-v">GitHub Pages</div><div class="fi-s">Static — zero server-side execution</div></div><div class="fi"><div class="fi-k">CDN / Proxy</div><div class="fi-v">Cloudflare</div><div class="fi-s">Free tier, proxied</div></div><div class="fi"><div class="fi-k">TLS</div><div class="fi-v">Universal SSL + HSTS</div><div class="fi-s">Preloaded · max-age=15552000</div></div><div class="fi ac"><div class="fi-k">Security Headers</div><div class="fi-v">A+</div><div class="fi-s">securityheaders.com</div></div></div>
<hr class="cdiv">
<div class="ch">Security Headers Configured</div>
<p class="ct"><b>Strict-Transport-Security</b> — <span class="cm">max-age=15552000; includeSubDomains; preload</span><br>Forces every connection to this domain and its subdomains over HTTPS for 180 days, before a single request leaves the browser. Kills SSL-stripping and hostile-network downgrade attacks.</p>
<p class="ct"><b>Content-Security-Policy</b> — <span class="cm">strict sources, no unsafe-inline</span><br>Declares exactly which origins may serve scripts, styles and frames. Without <span class="cm">unsafe-inline</span>, an injected <span class="cm">&lt;script&gt;</span> simply never executes. That is the core defence against XSS.</p>
<p class="ct"><b>X-Frame-Options</b> — <span class="cm">SAMEORIGIN</span><br>Blocks other sites from embedding this page in an iframe. Prevents clickjacking, where an invisible overlay tricks you into clicking something you can't see.</p>
<p class="ct"><b>X-Content-Type-Options</b> — <span class="cm">nosniff</span><br>Forces browsers to honour the declared Content-Type instead of guessing it. Stops MIME confusion attacks that get an uploaded image executed as JavaScript.</p>
<p class="ct"><b>Referrer-Policy</b> — <span class="cm">strict-origin-when-cross-origin</span><br>Sends only the bare origin, never the full path or query, to third parties, and nothing at all on an HTTPS→HTTP downgrade. Prevents leaking sensitive URLs through the Referer header.</p>
<p class="ct"><b>Permissions-Policy</b> — <span class="cm">geolocation=(), microphone=(), camera=(), payment=()</span><br>Revokes powerful browser APIs for this document and everything it embeds. Even a fully compromised script cannot reach your camera, mic, or location.</p>
<p class="ct"><b>Cross-Origin-Opener-Policy</b> — <span class="cm">same-origin</span><br>Severs the window reference between this page and any cross-origin opener. Blocks tab-nabbing and cross-window scripting into this context.</p>
<p class="ct"><b>Cross-Origin-Resource-Policy</b> — <span class="cm">same-origin</span><br>Tells the browser to refuse serving these resources to other origins entirely. Mitigates side-channel leaks such as Spectre and cross-site resource inclusion.</p>
<p class="ct"><b>Cross-Origin-Embedder-Policy</b> — <span class="cm">credentialless</span><br>Cross-origin subresources load without cookies or credentials attached. Enables origin isolation while shutting down credentialed cross-origin leaks.</p>
<div class="hl"><div class="hl-l">Validate it yourself</div><div class="hl-t">Don't take my word for it. This site scores A+ on securityheaders.com, independently verified, no tricks. Click below to run the scan yourself.<br><a href="https://securityheaders.com/?q=https%3A%2F%2Fbernardo-sousa.com&followRedirects=on" target="_blank" rel="noopener" class="lb lb-gh mt10">Run the scan →</a></div></div>
<hr class="cdiv">
<div class="ch">Additional Hardening</div>
<p class="ct"><b>security.txt</b> — <a href="/.well-known/security.txt" target="_blank" rel="noopener" class="fl">/.well-known/security.txt</a>, RFC 9116 compliant. A machine-readable way for researchers to report an issue to me.</p>
<p class="ct"><b>Honeypot</b> — Active decoy endpoints monitored for scanners. Anything that requests them wasn't browsing.</p>
<p class="ct"><b>Bot traffic</b> — Managed via Cloudflare.</p>
<hr class="cdiv">
<div class="ch">CI/CD — DevSecOps Pipeline</div>
<p class="ct">Every push to <span class="cm">main</span> triggers a <b>GitHub Actions</b> security pipeline. <b>Trivy</b> scans the filesystem for CVEs, <b>Semgrep</b> runs SAST over the JavaScript, and <b>Gitleaks</b> sweeps the full git history for committed secrets. <b>HTMLHint</b> and <b>ESLint</b> keep the markup and scripts clean, and a nightly job re-checks the A+ headers grade so the claim above can't quietly rot. Third-party actions are pinned to commit SHAs, not mutable tags.</p>
<a href="https://github.com/Bernardo15Sousa/Personal/actions" target="_blank" rel="noopener" class="lb lb-gh">${svgGh} View the pipeline runs →</a>
<hr class="cdiv">
<div class="ch">Challenge</div>
<p class="ct">This site has <b>3 independent hidden flags</b>, each hidden a different way. Can you find them all?</p>
<p class="ct"><span class="cm">Hint: one's in the source, one's in the terminal, one's in the response headers.</span></p>
<p class="ct">Flag format: <span class="fl">flag{...}</span>. Found all three? Email them in.</p>
<a href="mailto:${CONTACT_EMAIL}?subject=CTF%20Flag%20Submission" class="lb lb-gh">Submit by email →</a>`},

  toolkit:{title:'bernardo@kali:~/toolkit.sh',icon:'toolkit',label:'toolkit.sh',init:()=>initToolkit(),
    html:`<div class="mb1"><span class="pr">bernardo@kali</span>:<span class="pa">~</span>$ <span class="fl">./</span>toolkit.sh</div>
<div class="ch">Security Toolkit</div>
<p class="ct tk-hint"><span class="t-gr">●</span> Everything below runs 100% client-side. Nothing you type here leaves your browser.</p>
<div class="tabs" id="tkTabs">
  <button class="tab active" data-tp="tkPw">Password Generator</button>
  <button class="tab" data-tp="tkPgp">PGP Generator</button>
  <button class="tab" data-tp="tkCsr">CSR Decoder</button>
  <button class="tab" data-tp="tkCer">CER Decoder</button>
  <button class="tab" data-tp="tkHash">Hash Tools</button>
  <button class="tab" data-tp="tkB64">Base64</button>
</div>

<div class="tp active" id="tkPw">
  <div class="fld"><label for="pwLen">Length — <span id="pwLenV">24</span></label><input type="range" class="rng" id="pwLen" min="8" max="128" value="24"></div>
  <div class="cbs">
    <label class="cb"><input type="checkbox" id="pwU" checked> Uppercase</label>
    <label class="cb"><input type="checkbox" id="pwL" checked> Lowercase</label>
    <label class="cb"><input type="checkbox" id="pwN" checked> Numbers</label>
    <label class="cb"><input type="checkbox" id="pwS" checked> Symbols</label>
    <label class="cb"><input type="checkbox" id="pwA"> Exclude ambiguous (0 O l 1 I)</label>
  </div>
  <div class="out" id="pwOut"></div>
  <div class="row mt07"><button class="btn" id="pwGen">Regenerate</button><button class="btn gh" id="pwCopy">Copy</button><span class="pw-ent">Entropy: <b id="pwEnt" class="t-gr">0</b> bits</span></div>
  <div class="err" id="pwErr"></div>
</div>

<div class="tp" id="tkPgp">
  <div class="fld"><label for="pgName">Name</label><input class="in" id="pgName" autocomplete="off" placeholder="Ada Lovelace"></div>
  <div class="fld"><label for="pgEmail">Email</label><input class="in" id="pgEmail" type="email" autocomplete="off" placeholder="ada@example.com"></div>
  <div class="fld"><label for="pgPass">Passphrase</label><div class="row nowrap"><input class="in" id="pgPass" type="password" autocomplete="new-password"><button class="btn gh" id="pgToggle" type="button">Show</button></div></div>
  <div class="fld"><label for="pgAlgo">Algorithm</label><select class="in" id="pgAlgo"><option value="rsa">RSA-4096</option><option value="ecc">ECC Curve25519</option></select></div>
  <button class="btn" id="pgGen">Generate keypair</button>
  <div class="err" id="pgErr"></div>
  <div id="pgOut" class="hidden">
    <div class="fld mt1"><label for="pgPub">Public key</label><textarea class="in" id="pgPub" readonly></textarea><button class="btn gh mt04" id="pgDlPub">Download public.asc</button></div>
    <div class="fld"><label for="pgPriv">Private key</label><textarea class="in" id="pgPriv" readonly></textarea><button class="btn gh mt04" id="pgDlPriv">Download private.asc</button></div>
    <div class="warn">⚠ Store your private key securely. Never share it.</div>
  </div>
</div>

<div class="tp" id="tkCsr">
  <div class="fld"><label for="csrIn">PEM-encoded CSR</label><textarea class="in" id="csrIn" spellcheck="false" placeholder="-----BEGIN CERTIFICATE REQUEST-----"></textarea></div>
  <button class="btn" id="csrGo">Decode</button>
  <div class="err" id="csrErr"></div>
  <div id="csrOut" class="mt1"></div>
</div>

<div class="tp" id="tkCer">
  <div class="fld"><label for="cerIn">PEM or base64 (DER) certificate</label><textarea class="in" id="cerIn" spellcheck="false" placeholder="-----BEGIN CERTIFICATE-----"></textarea></div>
  <button class="btn" id="cerGo">Decode</button>
  <div class="err" id="cerErr"></div>
  <div id="cerOut" class="mt1"></div>
</div>

<div class="tp" id="tkHash">
  <div class="fld"><label for="hashIn">Input text</label><textarea class="in" id="hashIn" spellcheck="false" placeholder="text to hash"></textarea></div>
  <div class="fld"><label>Algorithm</label><div class="row" id="hashAlgo"><button class="btn gh active" data-alg="MD5">MD5</button><button class="btn gh" data-alg="SHA-1">SHA-1</button><button class="btn gh" data-alg="SHA-256">SHA-256</button><button class="btn gh" data-alg="SHA-512">SHA-512</button></div></div>
  <div class="row"><button class="btn" id="hashGo">Hash</button><button class="btn gh" id="hashCopy">Copy</button></div>
  <div class="out mt07" id="hashOut"></div>
  <div class="err" id="hashErr"></div>
  <div class="warn hidden" id="hashNote">MD5 is one-way, not reversible. External lookup opens in a new tab.</div>
  <a class="lb lb-gh mt07 hidden" id="hashLookup" href="https://crackstation.net/" target="_blank" rel="noopener">Look up hash →</a>
</div>

<div class="tp" id="tkB64">
  <div class="fld"><label for="b64In">Input</label><textarea class="in" id="b64In" spellcheck="false" placeholder="text to encode, or base64 to decode"></textarea></div>
  <div class="row"><button class="btn" id="b64Enc">Encode</button><button class="btn" id="b64Dec">Decode</button><button class="btn gh" id="b64Copy">Copy</button></div>
  <div class="out mt07" id="b64Out"></div>
  <div class="err" id="b64Err"></div>
</div>`}
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
  if(data.init) data.init();
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
  addTermLine(sc,'<span class="t-ka b7">╔══════════════════════════════════════════╗</span>');
  addTermLine(sc,'<span class="t-ka b7">║</span>  Welcome to Bernardo\'s portfolio shell  <span class="t-ka b7">║</span>');
  addTermLine(sc,'<span class="t-ka b7">╚══════════════════════════════════════════╝</span>');
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
      const cmds=['help','whoami','cat about_me.txt','cat experience.md','cat conferences.log','cat interests.conf','cat toolstack.yml','cat security.conf','ls projects/','./certifications.sh','./toolkit.sh','curl','contact','clear','sudo','exit'];
      const m=cmds.filter(c=>c.startsWith(v));
      if(m.length===1) input.value=m[0];
    }
  });
}

const md5=s=>forge.md.md5.create().update(s,'utf8').digest().toHex();
const esc=s=>s.replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

// ── CTF flags ────────────────────────────────────────────────────────────────
// Three independent flags, each found a different way:
//   1. source  — base64 in the HTML comment at the bottom of index.html
//   2. terminal — undocumented sequence: unlock → shadow → decode
//   3. headers  — the X-Challenge response header (curl handler + note below)
//
// The X-Challenge header is NOT set here — GitHub Pages serves static files and
// a page can't set its own response headers. It is configured MANUALLY in
// Cloudflare → Rules → Transform Rules → Modify Response Header, as a static
// header on all requests to bernardo-sousa.com:
//     X-Challenge: ZmxhZ3tzM2N1cjF0eV8xc180X20xbmRzM3R9
// which base64-decodes to flag{s3cur1ty_1s_4_m1nds3t}. The `curl` command below
// only *simulates* the response for players without a shell — keep the two in
// sync: if you change the flag, update both this constant and the Cloudflare rule.
let ctfLevel=0;
const SHADOW_B64='ZmxhZ3t0M3JtMW40bF93MXo0cmR9';
const XCHALLENGE_B64='ZmxhZ3tzM2N1cjF0eV8xc180X20xbmRzM3R9';

function runCmd(sc,cmd){
  const c=cmd.trim().toLowerCase();
  if(c==='help'){
    addTermLine(sc,`
<span class="t-yl b6">Available commands:</span>

  <span class="fl">cat about_me.txt</span>      — who I am
  <span class="fl">cat experience.md</span>      — work history
  <span class="fl">./certifications.sh</span>    — certifications
  <span class="fl">cat toolstack.yml</span>      — tools & stack
  <span class="fl">ls projects/</span>           — my projects
  <span class="fl">cat conferences.log</span>    — conferences attended
  <span class="fl">cat interests.conf</span>     — beyond the keyboard
  <span class="fl">cat security.conf</span>      — this site's security stack
  <span class="fl">./toolkit.sh</span>           — password / PGP / cert / hash / base64
  <span class="fl">contact</span>                — reach out on LinkedIn
  <span class="fl">whoami</span>                 — quick intro
  <span class="fl">sudo</span>                   — try it ;)
  <span class="fl">clear</span>                 — clear terminal
  <span class="fl">exit</span>                  — close terminal
`);
  }
  else if(c==='whoami'){
    addTermLine(sc,`<span class="t-gr">bernardo</span> — Cybersecurity Engineer @ Ascendi
<span class="t-td">Focus:</span> DFIR · Security Engineering · Fortinet
<span class="t-td">Location:</span> Porto, Portugal
<span class="t-td">Status:</span> <span class="t-gr">●</span> Open to new opportunities`);
  }
  else if(c==='cat about_me.txt' || c==='cat about.txt'){ closeWindow(); setTimeout(()=>openW('about'),250); }
  else if(c==='cat experience.md'){ closeWindow(); setTimeout(()=>openW('experience'),250); }
  else if(c==='./certifications.sh' || c==='./certs.sh'){ closeWindow(); setTimeout(()=>openW('certs'),250); }
  else if(c==='cat toolstack.yml' || c==='cat tools.yml'){ closeWindow(); setTimeout(()=>openW('tools'),250); }
  else if(c==='ls projects/' || c==='ls projects'){ closeWindow(); setTimeout(()=>openW('projects'),250); }
  else if(c==='cat conferences.log' || c==='cat conf.log'){ closeWindow(); setTimeout(()=>openW('conferences'),250); }
  else if(c==='cat interests.conf'){ closeWindow(); setTimeout(()=>openW('interests'),250); }
  else if(c==='cat security.conf'){ closeWindow(); setTimeout(()=>openW('security'),250); }
  else if(c==='./toolkit.sh' || c==='toolkit'){ closeWindow(); setTimeout(()=>openW('toolkit'),250); }
  else if(c==='contact'){
    addTermLine(sc,'<span class="t-gr">[✓]</span> Opening LinkedIn... see you on the other side!');
    setTimeout(()=>window.open('https://www.linkedin.com/in/bernardo-sousa-605a30181/','_blank'),500);
  }
  else if(c.startsWith('sudo')){
    const sub=c.replace('sudo','').trim();
    if(sub==='rm -rf /' || sub==='rm -rf /*'){
      addTermLine(sc,`<span class="t-rd">[✗] Nice try.</span>
<span class="t-td">This portfolio took me longer to build than I'd like to admit.</span>
<span class="t-td">Least privilege means you don't get to destroy it. Sorry not sorry.</span>`);
    } else if(sub==='su' || sub==='su root' || sub==='-i' || sub==='bash'){
      addTermLine(sc,`<span class="t-rd">[✗] Permission denied.</span>
<span class="t-yl">Root access on a personal machine?</span> That's not how least privilege works.
<span class="t-td">Even I don't have root here. And I built the thing.</span>`);
    } else {
      addTermLine(sc,`<span class="t-rd">[✗] bernardo is not in the sudoers file. This incident will be reported.</span>
<span class="t-td">Just kidding. But seriously — least privilege. If you don't need it, you don't get it.</span>
<span class="t-td">That's literally my job.</span>`);
    }
  }
  else if(c==='clear'){ sc.innerHTML=''; }
  else if(c==='exit'){ closeWindow(); }
  else if(c==='ls'){
    addTermLine(sc,`<span class="t-bl">about_me.txt</span>  <span class="t-bl">experience.md</span>  <span class="t-gr">certifications.sh</span>  <span class="t-bl">toolstack.yml</span>  <span class="t-mv">projects/</span>  <span class="t-bl">conferences.log</span>  <span class="t-mv">writeups/</span>  <span class="t-bl">interests.conf</span>`);
  }
  else if(c==='ls -la' || c==='ls -a' || c==='ls -al'){
    addTermLine(sc,`total 44
drwxr-xr-x  4 bernardo bernardo 4096 .
drwxr-xr-x  3 root     root     4096 ..
-rw-r--r--  1 bernardo bernardo 2048 <span class="t-bl">about_me.txt</span>
-rw-r--r--  1 bernardo bernardo 4096 <span class="t-bl">experience.md</span>
-rwxr-xr-x  1 bernardo bernardo 1024 <span class="t-gr">certifications.sh</span>
-rw-r--r--  1 bernardo bernardo 1536 <span class="t-bl">toolstack.yml</span>
drwxr-xr-x  2 bernardo bernardo 4096 <span class="t-mv">projects/</span>
-rw-r--r--  1 bernardo bernardo  768 <span class="t-bl">conferences.log</span>
drwxr-xr-x  2 bernardo bernardo 4096 <span class="t-mv">writeups/</span>
-rw-r--r--  1 bernardo bernardo  512 <span class="t-bl">interests.conf</span>`);
  }
  else if(c==='unlock'){
    ctfLevel=Math.max(ctfLevel,1);
    addTermLine(sc,'<span class="t-gr">Access level 1 granted. Continue.</span>');
  }
  else if(c==='shadow'){
    if(ctfLevel<1){ addTermLine(sc,'<span class="t-rd">[✗] Locked. Access level 1 required.</span>'); }
    else{
      ctfLevel=Math.max(ctfLevel,2);
      addTermLine(sc,`<span class="t-td"># shadow entry (encoded):</span>
<span class="t-yl b6">${SHADOW_B64}</span>`);
    }
  }
  else if(c==='curl' || c.startsWith('curl ')){
    addTermLine(sc,`<span class="t-td">Simulating: curl -I https://bernardo-sousa.com</span>
<span class="t-bl">[*]</span> Fetching response headers...
<span class="t-td">&gt;</span> HTTP/2 200
<span class="t-td">&gt;</span> strict-transport-security: max-age=15552000; includeSubDomains; preload
<span class="t-td">&gt;</span> x-frame-options: SAMEORIGIN
<span class="t-td">&gt;</span> x-content-type-options: nosniff
<span class="t-td">&gt;</span> content-security-policy: default-src 'self'; ...
<span class="t-td">&gt;</span> x-challenge: <span class="t-yl">${XCHALLENGE_B64}</span>
<span class="t-bl">[*]</span> Header detected: X-Challenge. Looks like base64 — try <span class="fl">decode &lt;value&gt;</span>.`);
  }
  else if(c.startsWith('decode')){
    const arg=cmd.trim().slice(6).trim();
    if(arg){
      let d=null;
      try{ d=atob(arg); }catch(_){}
      if(d===null || !/^[\x20-\x7e]+$/.test(d)) addTermLine(sc,'<span class="t-rd">[✗] Not valid base64.</span>');
      else addTermLine(sc,`<span class="t-gr">[✓] Decoded:</span> <span class="t-yl b6">${esc(d)}</span>`);
    }
    else if(ctfLevel>=2){
      addTermLine(sc,`<span class="t-gr">[✓] Decoded:</span> <span class="t-yl b6">${esc(atob(SHADOW_B64))}</span>`);
    }
    else{ addTermLine(sc,'<span class="t-td">usage: decode &lt;base64&gt;</span>'); }
  }
  else if(c==='pwd'){ addTermLine(sc,'/home/bernardo'); }
  else if(c==='uname -a' || c==='uname'){ addTermLine(sc,'Linux kali-portfolio 6.1.0-kali9 #1 SMP x86_64 GNU/Linux'); }
  else if(c==='date'){ addTermLine(sc,new Date().toString()); }
  else if(c==='ping google.com'){
    addTermLine(sc,`<span class="t-td">PING google.com — are you trying to check if this portfolio has internet? It's a website. It IS the internet.</span>`);
  }
  else if(c==='neofetch' || c==='screenfetch'){
    addTermLine(sc,`<span class="t-ka">  ..............               </span>  <span class="pr">bernardo</span>@<span class="t-bl">kali-portfolio</span>
<span class="t-ka">          ..,;:ccc,.           </span>  ─────────────────────
<span class="t-ka">        ......''';lxO.         </span>  <span class="t-td">OS:</span> Kali Portfolio 2025
<span class="t-ka">  .....''''..........,:ld;    </span>  <span class="t-td">Host:</span> Ascendi
<span class="t-ka">             .';;;:::;,,.x,   </span>  <span class="t-td">Uptime:</span> ~5 years in security
<span class="t-ka">        ..'''.            0Wm </span>  <span class="t-td">Shell:</span> DFIR/bash
<span class="t-ka">     ....                ;MM; </span>  <span class="t-td">DE:</span> Security Engineering
<span class="t-ka">    .                      .  </span>  <span class="t-td">Theme:</span> Fortinet [dark]
<span class="t-ka">   ..                       . </span>  <span class="t-td">Terminal:</span> portfolio.html
<span class="t-ka">    ,                        ;</span>
<span class="t-ka">     ,.                       .</span>
<span class="t-ka">       .;,   ...               </span>
<span class="t-ka">          .;' .;googoo;.       </span>
<span class="t-ka">             ;dOOOOOOOd;       </span>
<span class="t-ka">              .';:cccc:'.      </span>`);
  }
  else if(c!==''){
    addTermLine(sc,`<span class="t-rd">bash: ${esc(cmd)}: command not found</span>\n<span class="t-td">Type</span> <span class="fl">help</span> <span class="t-td">to see available commands.</span>`);
  }
  sc.scrollTop=sc.scrollHeight;
}

document.getElementById('wo').addEventListener('click',e=>{
  if(e.target===e.currentTarget){ closeWindow(); return; }
  if(cur==='terminal'){
    const inp=document.querySelector('.term-input:not([disabled])');
    if(inp) inp.focus();
  }
});

// Delegated handlers replacing former inline on* attributes (CSP-safe).
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-act]');
  if(!t) return;
  const act=t.dataset.act;
  if(act==='open') openW(t.dataset.f);
  else if(act==='close') closeWindow();
  else if(act==='dismiss') dismissNotif();
  else if(act==='dismiss-open'){ dismissNotif(); openW(t.dataset.f); }
  else if(act==='url') window.open(t.dataset.url,'_blank');
  else if(act==='tl'){
    const node=t.closest('.tl-node'), open=node.classList.contains('open');
    node.parentElement.querySelectorAll('.tl-node.open').forEach(n=>n.classList.remove('open'));
    if(!open) node.classList.add('open');
  }
});

/* ── toolkit.sh — all four tools run entirely in the browser ───────────────── */

const $=id=>document.getElementById(id);

function initToolkit(){
  $('tkTabs').onclick=e=>{
    const t=e.target.closest('.tab'); if(!t) return;
    document.querySelectorAll('#tkTabs .tab').forEach(b=>b.classList.toggle('active',b===t));
    document.querySelectorAll('.tp').forEach(p=>p.classList.toggle('active',p.id===t.dataset.tp));
  };
  initPw(); initPgp(); initDecoders(); initHashTools(); initB64();
}

/* Tab 6 — base64 encoder / decoder (UTF-8 safe) */
function initB64(){
  $('b64Enc').onclick=()=>{
    $('b64Err').textContent='';
    try{ $('b64Out').textContent=btoa(String.fromCharCode(...new TextEncoder().encode($('b64In').value))); }
    catch(ex){ $('b64Err').textContent='Encode failed: '+ex.message; }
  };
  $('b64Dec').onclick=()=>{
    $('b64Err').textContent='';
    try{ $('b64Out').textContent=new TextDecoder().decode(Uint8Array.from(atob($('b64In').value.trim()),c=>c.charCodeAt(0))); }
    catch(_){ $('b64Err').textContent='Not valid base64.'; }
  };
  $('b64Copy').onclick=()=>{
    if(!$('b64Out').textContent) return;
    navigator.clipboard.writeText($('b64Out').textContent).then(()=>{
      $('b64Copy').textContent='Copied ✓';
      setTimeout(()=>$('b64Copy').textContent='Copy',1200);
    });
  };
}

/* Tab 5 — hash generator (SHA via SubtleCrypto, MD5 via node-forge) */
function initHashTools(){
  let alg='MD5';
  const render=t=>{
    $('hashAlgo').querySelectorAll('.btn').forEach(b=>b.classList.toggle('active',b===t));
    alg=t.dataset.alg;
  };
  $('hashAlgo').onclick=e=>{ const t=e.target.closest('.btn'); if(t) render(t); };
  const run=async()=>{
    const txt=$('hashIn').value; $('hashErr').textContent='';
    try{
      let hex;
      if(alg==='MD5') hex=md5(txt);
      else{
        const buf=await crypto.subtle.digest(alg,new TextEncoder().encode(txt));
        hex=[...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('');
      }
      $('hashOut').textContent=hex;
      $('hashNote').classList.toggle('hidden',alg!=='MD5');
      $('hashLookup').classList.toggle('hidden',alg!=='MD5');
    }catch(ex){ $('hashErr').textContent='Hashing failed: '+ex.message; }
  };
  $('hashGo').onclick=run;
  $('hashCopy').onclick=()=>{
    if(!$('hashOut').textContent) return;
    navigator.clipboard.writeText($('hashOut').textContent).then(()=>{
      $('hashCopy').textContent='Copied ✓';
      setTimeout(()=>$('hashCopy').textContent='Copy',1200);
    });
  };
}

/* Tab 1 — password generator */
const PW_SETS={pwU:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',pwL:'abcdefghijklmnopqrstuvwxyz',pwN:'0123456789',pwS:'!@#$%^&*()-_=+[]{};:,.<>?/~'};
const AMBIGUOUS='0Ol1I';

function pwPool(){
  let p=Object.keys(PW_SETS).filter(id=>$(id).checked).map(id=>PW_SETS[id]).join('');
  if($('pwA').checked) p=[...p].filter(ch=>!AMBIGUOUS.includes(ch)).join('');
  return p;
}

// Rejection sampling — plain `% pool.length` would bias toward the low end of
// the charset, which is exactly the bug you don't want in a password generator.
function randChars(pool,n){
  const max=Math.floor(256/pool.length)*pool.length;
  let out='';
  while(out.length<n){
    const buf=new Uint8Array(n-out.length);
    crypto.getRandomValues(buf);
    for(const b of buf){ if(b<max) out+=pool[b%pool.length]; }
  }
  return out;
}

function genPw(){
  const pool=pwPool(), len=+$('pwLen').value;
  $('pwLenV').textContent=len;
  if(!pool.length){ $('pwOut').textContent=''; $('pwEnt').textContent='0'; $('pwErr').textContent='Select at least one character set.'; return; }
  $('pwErr').textContent='';
  $('pwOut').textContent=randChars(pool,len);
  $('pwEnt').textContent=Math.floor(len*Math.log2(pool.length));
}

function initPw(){
  ['pwLen','pwU','pwL','pwN','pwS','pwA'].forEach(id=>$(id).oninput=genPw);
  $('pwGen').onclick=genPw;
  $('pwCopy').onclick=()=>{
    if(!$('pwOut').textContent) return;
    navigator.clipboard.writeText($('pwOut').textContent).then(()=>{
      $('pwCopy').textContent='Copied ✓';
      setTimeout(()=>$('pwCopy').textContent='Copy',1200);
    });
  };
  genPw();
}

/* Tab 2 — PGP key generator */
function dl(name,text){
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([text],{type:'application/pgp-keys'}));
  a.download=name; a.click();
  URL.revokeObjectURL(a.href);
}

function initPgp(){
  $('pgToggle').onclick=()=>{
    const i=$('pgPass'), show=i.type==='password';
    i.type=show?'text':'password';
    $('pgToggle').textContent=show?'Hide':'Show';
  };
  $('pgGen').onclick=async()=>{
    const name=$('pgName').value.trim(), email=$('pgEmail').value.trim(), pass=$('pgPass').value;
    const err=$('pgErr'); err.textContent='';
    if(!name||!email){ err.textContent='Name and email are both required.'; return; }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ err.textContent='That email address doesn\'t look valid.'; return; }
    const btn=$('pgGen');
    btn.disabled=true; btn.textContent='Generating keys...';
    try{
      const opts=$('pgAlgo').value==='rsa'?{type:'rsa',rsaBits:4096}:{type:'ecc',curve:'curve25519'};
      const {privateKey,publicKey}=await openpgp.generateKey({...opts,userIDs:[{name,email}],passphrase:pass,format:'armored'});
      $('pgPub').value=publicKey; $('pgPriv').value=privateKey;
      $('pgOut').classList.remove('hidden');
      $('pgDlPub').onclick=()=>dl('public.asc',publicKey);
      $('pgDlPriv').onclick=()=>dl('private.asc',privateKey);
    }catch(ex){ err.textContent='Key generation failed: '+ex.message; }
    btn.disabled=false; btn.textContent='Generate keypair';
  };
}

/* Tabs 3 & 4 — CSR / certificate decoders (node-forge) */
const attr=(o,s)=>{const a=o.getField&&o.getField(s);return a?a.value:''};
const kv=(k,v,cls)=>v?`<div class="kv"><div class="kv-k">${k}</div><div class="kv-v${cls?' '+cls:''}">${esc(String(v))}</div></div>`:'';
const dn=o=>o.attributes.map(a=>`${a.shortName||a.name}=${a.value}`).join(', ');

function keyInfo(key){
  if(key&&key.n) return {algo:'RSA',size:key.n.bitLength()+' bits'};
  return {algo:'EC / unsupported by decoder',size:''};
}

function sans(ext){
  if(!ext||!ext.altNames) return '';
  return ext.altNames.map(a=>a.value||a.ip||'').filter(Boolean).join(', ');
}

function decodeCsr(){
  const err=$('csrErr'), out=$('csrOut');
  err.textContent=''; out.innerHTML='';
  try{
    const csr=forge.pki.certificationRequestFromPem($('csrIn').value.trim());
    if(!csr.verify()) err.textContent='Warning: CSR self-signature does not verify.';
    const extReq=csr.getAttribute({name:'extensionRequest'});
    const san=extReq?sans((extReq.extensions||[]).find(e=>e.name==='subjectAltName')):'';
    const k=keyInfo(csr.publicKey);
    out.innerHTML=
      kv('Common Name',attr(csr.subject,'CN'))+
      kv('Organization',attr(csr.subject,'O'))+
      kv('Org. Unit',attr(csr.subject,'OU'))+
      kv('Country',attr(csr.subject,'C'))+
      kv('State',attr(csr.subject,'ST'))+
      kv('Locality',attr(csr.subject,'L'))+
      kv('Email',attr(csr.subject,'E'))+
      kv('SANs',san||'none')+
      kv('Key Algorithm',k.algo)+
      kv('Key Size',k.size)+
      kv('Signature Alg.',forge.pki.oids[csr.siginfo.algorithmOid]||csr.siginfo.algorithmOid);
  }catch(ex){ err.textContent='Could not parse that CSR. Check it\'s a complete PEM block. ('+ex.message+')'; }
}

function decodeCer(){
  const err=$('cerErr'), out=$('cerOut');
  err.textContent=''; out.innerHTML='';
  try{
    const raw=$('cerIn').value.trim();
    if(!raw) throw new Error('nothing to decode');
    // Accept PEM as-is; treat anything else as bare base64 DER.
    const cert=raw.includes('-----BEGIN')
      ? forge.pki.certificateFromPem(raw)
      : forge.pki.certificateFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(forge.util.decode64(raw.replace(/\s+/g,'')))));
    const der=forge.asn1.toDer(forge.pki.certificateToAsn1(cert)).getBytes();
    const fp=(forge.md.sha256.create().update(der).digest().toHex().match(/../g)||[]).join(':').toUpperCase();
    const days=Math.floor((cert.validity.notAfter-Date.now())/86400000);
    const k=keyInfo(cert.publicKey);
    out.innerHTML=
      kv('Subject',dn(cert.subject))+
      kv('Issuer',dn(cert.issuer))+
      kv('Serial Number',cert.serialNumber)+
      kv('Valid From',cert.validity.notBefore.toUTCString())+
      kv('Valid To',cert.validity.notAfter.toUTCString())+
      kv('Days Remaining',days<0?`expired ${-days} days ago`:days,days<30?'t-rd':'t-gr')+
      kv('Key Algorithm',k.algo)+
      kv('Key Size',k.size)+
      kv('Signature Alg.',forge.pki.oids[cert.siginfo.algorithmOid]||cert.siginfo.algorithmOid)+
      kv('SHA-256 Fingerprint',fp)+
      kv('SANs',sans(cert.getExtension('subjectAltName'))||'none');
  }catch(ex){ err.textContent='Could not parse that certificate. PEM or base64 DER expected. ('+ex.message+')'; }
}

function initDecoders(){ $('csrGo').onclick=decodeCsr; $('cerGo').onclick=decodeCer; }

// Self-check for the password generator — the one piece here with real security
// weight. Run pwSelfCheck() in the console; throws if the generator is broken.
function pwSelfCheck(){
  const ok=(c,m)=>{ if(!c) throw new Error('pwSelfCheck: '+m); };
  const pool='abcXYZ789';
  const s=randChars(pool,5000);
  ok(s.length===5000,'wrong length');
  ok([...s].every(ch=>pool.includes(ch)),'char outside pool');
  const counts={}; for(const ch of s) counts[ch]=(counts[ch]||0)+1;
  ok(Object.keys(counts).length===pool.length,'not every char reachable');
  // Uniform-ish: no char should land more than 2x its expected share.
  ok(Object.values(counts).every(n=>n<2*5000/pool.length),'distribution looks biased');
  return 'pwSelfCheck: ok';
}
