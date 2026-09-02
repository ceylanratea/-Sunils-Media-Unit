
document.addEventListener("DOMContentLoaded", () => {
  // Animated counters
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target, target = Number(el.dataset.target);
      let start = 0, duration = 1800, startTime = null;
      const tick = t => {
        if (!startTime) startTime = t;
        const p = Math.min((t-startTime)/duration,1);
        const eased = 1 - Math.pow(1-p,3);
        el.textContent = Math.floor(target*eased).toLocaleString("en-US");
        if(p<1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, {threshold:.4});
  counters.forEach(c => observer.observe(c));

  // Service panel
  const panel = document.getElementById("servicePanel");
  const serviceData = {
    office: `
      <span class="eyebrow">OFFICE</span><h3>🏢 කාර්යාල සම්බන්ධතා</h3>
      <p>පහත බටන ඔබන්න — ඔබට අවශ්‍ය සම්බන්ධතාවයට සෘජුවම යන්න.</p>
      <div class="panel-actions">
        <a class="action-btn" href="tel:+94770000000">💬 WhatsApp / Mobile</a>
        <a class="action-btn" href="mailto:office@example.com">✉️ Email</a>
        <a class="action-btn" href="tel:+94112222222">🚨 Hotline</a>
        <a class="action-btn" href="tel:+94113333333">☎️ කාර්යාලීය අංකය</a>
      </div>`,
    leaf: `
      <span class="eyebrow">TEA EXTENSION</span><h3>🌱 දළු මාර්ග තේ ව්‍යාප්ති අංශය</h3>
      <div class="panel-actions">
        <a class="action-btn" href="tel:+94770000000">📅 ඉඩම් පරීක්ෂාවට දින වෙන්කරවා ගන්න</a>
        <a class="action-btn" href="tel:+94771111111">👨‍🌾 තේ ව්‍යාප්ති නිලධාරී</a>
        <a class="action-btn" href="tel:+94772222222">🧪 නොමිලේ පස් පරීක්ෂණ වැඩසටහන</a>
        <a class="action-btn" href="tel:+94773333333">💡 තාක්ෂණික උපදෙස්</a>
        <a class="action-btn" href="prices-2025.html">📊 2025 දළු මිල ගණන්</a>
        <a class="action-btn" href="prices-2026.html">📊 2026 දළු මිල ගණන්</a>
        <a class="action-btn" href="tel:+94774444444">🌾 හේලිස් පොහොර උපදේශන නිලධාරී</a>
      </div>
      <div class="mt-4"><h5 class="fw-bold">📸 සේවා ඡායාරූප</h5><div class="row g-2">
        ${[1,2,3,4,5].map(i=>`<div class="col-6 col-md-2"><img class="img-fluid rounded-3" src="https://images.unsplash.com/photo-${['1597318181409-cf64d0f5f9d1','1594631252845-29fc4cc8cde9','1544787219-7f47ccb76574','1556679343-c7306c1976bc','1576092768241-dec231879fc3'][i-1]}?auto=format&fit=crop&w=400&q=80" alt="Tea service"></div>`).join("")}
      </div></div>`,
    tourism: `
      <span class="eyebrow">TEA TOURISM</span><h3>🏞️ තේ සංචාරක කර්මාන්තය</h3>
      <p>තේ වතු, කර්මාන්ත ශාලාව සහ Ceylon Tea අත්දැකීම.</p>
      <div class="panel-actions"><a class="action-btn" href="tel:+94775555555">📞 සංචාරක සේවාව අමතන්න</a></div>
      <div class="mt-4"><div class="row g-2">${Array.from({length:10},(_,i)=>`<div class="col-6 col-md-3"><img class="img-fluid rounded-3" src="https://images.unsplash.com/photo-${['1597318181409-cf64d0f5f9d1','1594631252845-29fc4cc8cde9','1544787219-7f47ccb76574','1556679343-c7306c1976bc','1576092768241-dec231879fc3','1523920290221-3f5b7057a116','1501339847302-ac426a4a7cbb','1461988320302-91b5d3c2e5b1','1519681393784-d120267933ba','1495474472287-4d71bcdd2085'][i]}?auto=format&fit=crop&w=500&q=80" alt="Tea tourism"></div>`).join("")}</div></div>`
  };
  document.querySelectorAll(".service-card").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".service-card").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      panel.innerHTML = serviceData[btn.dataset.service];
      panel.scrollIntoView({behavior:"smooth", block:"nearest"});
    });
  });
});
