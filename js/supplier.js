// ═══════════════════════════════════════════════════════════════════
//  SUPPLIER MODULE — HomeLoop B2B Portal
//  CR-02: Área reservada para parceiros/fornecedores
// ═══════════════════════════════════════════════════════════════════

// ─── SUPPLIER DATA ────────────────────────────────────────────────
const SUPPLIERS = [
  {
    id: 'sup1', name: 'ElectroPlus Lda', email: 'electroplus@homeloop.pt', password: 'sup1234',
    contact: 'Carlos Neves', phone: '+351 912 345 678',
    categories: ['Máquina de Lavar', 'Máquina de Secar', 'Máquina de Lavar Louça'],
    commissionRate: 0.20, fixedPerUnit: 20,
    joinedDate: '2025-03-01',
    applianceIds: ['a1','a3','a7','a8']
  },
  {
    id: 'sup2', name: 'FrigoTech SA', email: 'frigotech@homeloop.pt', password: 'sup5678',
    contact: 'Ana Martins', phone: '+351 963 456 789',
    categories: ['Frigorífico', 'Ar Condicionado'],
    commissionRate: 0.20, fixedPerUnit: 20,
    joinedDate: '2025-04-15',
    applianceIds: ['a2','a5','a12']
  },
  {
    id: 'sup3', name: 'KitchenWorld Porto', email: 'kitchenworld@homeloop.pt', password: 'sup9012',
    contact: 'Miguel Costa', phone: '+351 934 567 890',
    categories: ['Forno', 'Fogão', 'Micro-ondas', 'Máquina de Café'],
    commissionRate: 0.20, fixedPerUnit: 20,
    joinedDate: '2025-02-10',
    applianceIds: ['a4','a6','a9','a10']
  },
  {
    id: 'sup4', name: 'SmartHome Solutions', email: 'smarthome@homeloop.pt', password: 'sup3456',
    contact: 'Sofia Rodrigues', phone: '+351 916 678 901',
    categories: ['Aspirador', 'Ar Condicionado'],
    commissionRate: 0.20, fixedPerUnit: 20,
    joinedDate: '2025-05-01',
    applianceIds: ['a11','a12']
  },
];

// Mock: métricas simuladas por fornecedor
const SUPPLIER_METRICS = {
  sup1: {
    activeRentals: 312, totalRentals: 489, impressions: 1840,
    revenue: 18720, commissions: 3744, avgRating: 4.7, reviewCount: 203,
    breakdownRate: 4.2, returnsPending: 3,
    monthlyRevenue: [1200,1380,1520,1640,1780,1900,2050,2120,1980,2200,2350,2400],
    topProducts: [
      {id:'a1', name:'Samsung EcoBubble 9kg', rentals:142, revenue:8520, breakdowns:6},
      {id:'a7', name:'Miele W1 ChromeEdition', rentals:98, revenue:5880, breakdowns:2},
      {id:'a3', name:'Bosch Serie 6 Lava-Louça', rentals:72, revenue:4320, breakdowns:3},
    ],
    pendingOrders: [
      {id:'ord001', client:'Tiago M.', appliance:'Samsung EcoBubble 9kg', date:'2026-05-30', status:'pending', address:'Rua das Flores 12, Porto'},
      {id:'ord002', client:'Maria F.', appliance:'Miele W1 ChromeEdition', date:'2026-06-02', status:'pending', address:'Av. República 45, Lisboa'},
      {id:'ord003', client:'João S.', appliance:'Bosch Lava-Louça', date:'2026-06-05', status:'confirmed', address:'Rua do Sol 8, Braga'},
    ],
    breakdowns: [
      {id:'bk001', client:'Ana P.', appliance:'Samsung EcoBubble 9kg', reported:'2026-05-20', status:'open', description:'Tambor faz barulho anormal durante centrifugação.', photos:true},
      {id:'bk002', client:'Rui L.', appliance:'Miele W1', reported:'2026-05-18', status:'resolved', description:'Não liga ao pressionar o botão power.', photos:false},
    ],
    equipment: [
      {id:'a1', name:'Samsung EcoBubble 9kg', active:142, stock:18, condition:'Bom', lastCheck:'2026-04-15'},
      {id:'a3', name:'Bosch Serie 6 Lava-Louça', active:72, stock:8, condition:'Bom', lastCheck:'2026-04-20'},
      {id:'a7', name:'Miele W1 ChromeEdition', active:98, stock:5, condition:'Excelente', lastCheck:'2026-05-01'},
      {id:'a8', name:'Electrolux PerfectCare 800', active:0, stock:12, condition:'Bom', lastCheck:'2026-03-28'},
    ]
  },
  sup2: {
    activeRentals: 197, totalRentals: 310, impressions: 1240,
    revenue: 11820, commissions: 2364, avgRating: 4.5, reviewCount: 134,
    breakdownRate: 3.8, returnsPending: 1,
    monthlyRevenue: [800,920,1010,1100,1050,1180,1250,1300,1150,1400,1320,1340],
    topProducts: [
      {id:'a2', name:'LG InstaView Frigorífico', rentals:121, revenue:7260, breakdowns:4},
      {id:'a5', name:'Whirlpool FreshControl', rentals:76, revenue:4560, breakdowns:3},
    ],
    pendingOrders: [
      {id:'ord004', client:'Carla V.', appliance:'LG InstaView Frigorífico', date:'2026-06-01', status:'pending', address:'Rua Nova 22, Coimbra'},
    ],
    breakdowns: [
      {id:'bk003', client:'Pedro T.', appliance:'LG InstaView', reported:'2026-05-22', status:'open', description:'Painel tátil não responde.', photos:true},
    ],
    equipment: [
      {id:'a2', name:'LG InstaView Frigorífico', active:121, stock:9, condition:'Bom', lastCheck:'2026-04-10'},
      {id:'a5', name:'Whirlpool FreshControl', active:76, stock:6, condition:'Bom', lastCheck:'2026-04-18'},
      {id:'a12', name:'Samsung WindFree AC', active:0, stock:4, condition:'Novo', lastCheck:'2026-05-05'},
    ]
  },
  sup3: {
    activeRentals: 223, totalRentals: 401, impressions: 1560,
    revenue: 13380, commissions: 2676, avgRating: 4.8, reviewCount: 187,
    breakdownRate: 2.1, returnsPending: 2,
    monthlyRevenue: [950,1010,1100,1200,1150,1250,1320,1400,1380,1450,1380,1490],
    topProducts: [
      {id:'a6', name:'Siemens iQ700 Forno', rentals:89, revenue:5340, breakdowns:1},
      {id:'a4', name:"De'Longhi Dinamica Plus", rentals:74, revenue:4440, breakdowns:2},
      {id:'a10', name:'Bosch HNG6764B6 Fogão', rentals:60, revenue:3600, breakdowns:0},
    ],
    pendingOrders: [
      {id:'ord005', client:'Inês R.', appliance:"De'Longhi Dinamica Plus", date:'2026-05-31', status:'confirmed', address:'Rua da Paz 3, Faro'},
      {id:'ord006', name:'Manuel C.', appliance:'Bosch Fogão', date:'2026-06-08', status:'pending', address:'Av. Central 99, Setúbal'},
    ],
    breakdowns: [],
    equipment: [
      {id:'a4', name:"De'Longhi Dinamica Plus", active:74, stock:11, condition:'Bom', lastCheck:'2026-04-25'},
      {id:'a6', name:'Siemens iQ700 Forno', active:89, stock:7, condition:'Excelente', lastCheck:'2026-05-02'},
      {id:'a9', name:'LG NeoChef Micro-ondas', active:0, stock:9, condition:'Bom', lastCheck:'2026-03-30'},
      {id:'a10', name:'Bosch HNG6764B6 Fogão', active:60, stock:4, condition:'Bom', lastCheck:'2026-04-05'},
    ]
  },
  sup4: {
    activeRentals: 88, totalRentals: 142, impressions: 720,
    revenue: 5280, commissions: 1056, avgRating: 4.6, reviewCount: 71,
    breakdownRate: 5.1, returnsPending: 0,
    monthlyRevenue: [250,300,380,420,390,450,460,490,520,480,510,530],
    topProducts: [
      {id:'a11', name:'Dyson V15 Detect', rentals:55, revenue:3300, breakdowns:3},
      {id:'a12', name:'Samsung WindFree AC', rentals:33, revenue:1980, breakdowns:2},
    ],
    pendingOrders: [],
    breakdowns: [
      {id:'bk004', client:'Laura M.', appliance:'Dyson V15 Detect', reported:'2026-05-24', status:'open', description:'Bateria não carrega completamente.', photos:false},
    ],
    equipment: [
      {id:'a11', name:'Dyson V15 Detect', active:55, stock:6, condition:'Bom', lastCheck:'2026-04-22'},
      {id:'a12', name:'Samsung WindFree AC', active:33, stock:3, condition:'Bom', lastCheck:'2026-04-12'},
    ]
  }
};

// ─── SUPPLIER AUTH ────────────────────────────────────────────────
const SUPPLIER_SESSION_KEY = 'homeloop_supplier_session';

function getSupplierSession() {
  try { return JSON.parse(localStorage.getItem(SUPPLIER_SESSION_KEY)); }
  catch { return null; }
}
function saveSupplierSession(sup) {
  localStorage.setItem(SUPPLIER_SESSION_KEY, JSON.stringify(sup));
}
function clearSupplierSession() {
  localStorage.removeItem(SUPPLIER_SESSION_KEY);
}
function isSupplierLoggedIn() { return !!getSupplierSession(); }
function getCurrentSupplier() { return getSupplierSession(); }

function supplierLogin(email, password) {
  const sup = SUPPLIERS.find(s => s.email === email.trim().toLowerCase() && s.password === password);
  if (!sup) return false;
  saveSupplierSession({id: sup.id, name: sup.name, email: sup.email, contact: sup.contact});
  return true;
}
function supplierLogout() { clearSupplierSession(); }

function getSupplierMetrics(id) { return SUPPLIER_METRICS[id] || {}; }
function getSupplierData(id) { return SUPPLIERS.find(s => s.id === id); }

// ─── SUPPLIER PAGES ───────────────────────────────────────────────

function renderSupplierLogin() {
  document.getElementById('page-supplier-login').innerHTML = `
  <div class="login-screen" style="background:linear-gradient(135deg,#0f2027 0%,#203a43 50%,#2c5364 100%)">
    <div class="login-box" style="max-width:420px">
      <div style="text-align:center;margin-bottom:1.5rem">
        <div style="display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;background:var(--teal-l);border-radius:14px;margin-bottom:10px;font-size:1.5rem">🏭</div>
        <div class="login-logo">Home<span>Loop</span></div>
        <p style="font-size:.78rem;color:var(--gray-400);margin-top:3px;font-weight:600;text-transform:uppercase;letter-spacing:.08em">Portal B2B · Fornecedores</p>
      </div>
      <p class="login-sub" style="margin-bottom:1.5rem">Aceda à sua área de parceiro</p>
      <div class="login-err" id="sup-login-err"></div>
      <div class="field">
        <label>Email do parceiro</label>
        <input type="text" id="sl-email" placeholder="parceiro@homeloop.pt" autocomplete="email">
      </div>
      <div class="field">
        <label>Palavra-passe</label>
        <input type="text" id="sl-pass" placeholder="A sua palavra-passe" onkeydown="if(event.key==='Enter')doSupplierLogin()">
      </div>
      <button class="btn btn-primary w-full" onclick="doSupplierLogin()" style="margin-top:.5rem">
        Entrar na área de parceiro →
      </button>
      <div style="margin-top:1.5rem;padding:1rem;background:var(--gray-50);border-radius:12px;border:1px solid var(--gray-100)">
        <p style="font-size:.72rem;color:var(--gray-500);font-weight:600;margin-bottom:6px">Credenciais de demonstração:</p>
        ${SUPPLIERS.map(s=>`
          <div style="display:flex;justify-content:space-between;font-size:.72rem;color:var(--gray-400);margin-bottom:2px">
            <span>${s.name}</span>
            <code style="color:var(--teal-d)">${s.email} / ${s.password}</code>
          </div>`).join('')}
      </div>
      <p style="text-align:center;font-size:.82rem;color:var(--gray-400);margin-top:1rem">
        <button data-nav="/" style="background:none;border:none;cursor:pointer;color:var(--gray-400)">← Voltar ao portal de cliente</button>
      </p>
    </div>
  </div>`;
}

function doSupplierLogin() {
  const email = document.getElementById('sl-email')?.value?.trim();
  const pass  = document.getElementById('sl-pass')?.value;
  if (supplierLogin(email, pass)) {
    navigate('/supplier/dashboard');
  } else {
    const err = document.getElementById('sup-login-err');
    err.textContent = 'Credenciais inválidas. Verifique o email e a palavra-passe.';
    err.classList.add('show');
  }
}

// ─── SUPPLIER DASHBOARD ──────────────────────────────────────────
let supplierActiveTab = 'overview';

function renderSupplierDashboard() {
  const session = getCurrentSupplier();
  if (!session) { navigate('/supplier/login'); return; }

  const sup = getSupplierData(session.id);
  const m = getSupplierMetrics(session.id);
  const el = document.getElementById('page-supplier-dashboard');

  const tabs = [
    {id:'overview',   icon:'📊', label:'Visão Geral'},
    {id:'orders',     icon:'📦', label:'Encomendas', badge: m.pendingOrders?.filter(o=>o.status==='pending').length || 0},
    {id:'breakdowns', icon:'🔧', label:'Avarias',    badge: m.breakdowns?.filter(b=>b.status==='open').length || 0},
    {id:'equipment',  icon:'🏠', label:'Inventário'},
    {id:'finance',    icon:'💰', label:'Financeiro'},
    {id:'profile',    icon:'⚙️', label:'Perfil'},
  ];

  el.innerHTML = `
  <!-- SUPPLIER HEADER -->
  <div style="background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);padding:1.75rem 1.5rem">
    <div style="max-width:1280px;margin:0 auto">
      <div class="flex justify-between items-center flex-wrap gap-3">
        <div class="flex items-center gap-3">
          <div style="width:46px;height:46px;background:rgba(20,184,166,.2);border:1px solid rgba(20,184,166,.3);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0">🏭</div>
          <div>
            <p style="color:var(--teal);font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.07em">Portal B2B · Parceiro</p>
            <h1 style="color:white;font-size:1.3rem;margin:0">${sup?.name}</h1>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div style="display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.08);padding:6px 12px;border-radius:10px;font-size:.78rem;color:#94a3b8">
            <div style="width:7px;height:7px;background:var(--teal);border-radius:50%;animation:pulse 2s infinite"></div>
            Parceiro Ativo
          </div>
          <button onclick="handleSupplierLogout()" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:7px 14px;font-size:.78rem;color:#94a3b8;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s"
            onmouseover="this.style.background='rgba(239,68,68,.2)';this.style.color='#fca5a5'"
            onmouseout="this.style.background='rgba(255,255,255,.08)';this.style.color='#94a3b8'">
            Sair
          </button>
        </div>
      </div>

      <!-- KPI STRIP -->
      <div class="kpi-grid" style="margin-top:1.25rem">
        <div class="kpi">
          <div class="kpi-icon">📦</div>
          <div class="kpi-val">${m.activeRentals}</div>
          <div class="kpi-lbl">Alugueres ativos</div>
        </div>
        <div class="kpi">
          <div class="kpi-icon">💶</div>
          <div class="kpi-val">€${m.revenue?.toLocaleString('pt-PT')}</div>
          <div class="kpi-lbl">Receita total</div>
        </div>
        <div class="kpi">
          <div class="kpi-icon">👁️</div>
          <div class="kpi-val">${m.impressions?.toLocaleString('pt-PT')}</div>
          <div class="kpi-lbl">Visualizações</div>
        </div>
        <div class="kpi">
          <div class="kpi-icon">⭐</div>
          <div class="kpi-val">${m.avgRating}/5</div>
          <div class="kpi-lbl">Avaliação média</div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB BAR -->
  <div style="background:white;border-bottom:1px solid var(--gray-100);position:sticky;top:64px;z-index:40">
    <div style="max-width:1280px;margin:0 auto;padding:0 1.5rem;display:flex;gap:2px;overflow-x:auto">
      ${tabs.map(t=>`
        <button onclick="switchSupplierTab('${t.id}')" id="sup-tab-${t.id}"
          style="display:flex;align-items:center;gap:6px;padding:14px 16px;border:none;background:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:.875rem;white-space:nowrap;border-bottom:2px solid ${supplierActiveTab===t.id?'var(--teal)':'transparent'};color:${supplierActiveTab===t.id?'var(--teal-d)':'var(--gray-500)'};transition:all .15s;font-weight:${supplierActiveTab===t.id?'600':'400'}">
          ${t.icon} ${t.label}
          ${t.badge > 0 ? `<span style="background:var(--red);color:white;font-size:.65rem;font-weight:700;min-width:18px;height:18px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;padding:0 4px">${t.badge}</span>` : ''}
        </button>`).join('')}
    </div>
  </div>

  <!-- TAB CONTENT -->
  <div id="sup-tab-content" style="max-width:1280px;margin:0 auto;padding:2rem 1.5rem">
    ${renderSupplierTab(session.id, supplierActiveTab)}
  </div>`;
}

function switchSupplierTab(tab) {
  supplierActiveTab = tab;
  const session = getCurrentSupplier();
  document.getElementById('sup-tab-content').innerHTML = renderSupplierTab(session.id, tab);
  // update tab styles
  document.querySelectorAll('[id^="sup-tab-"]').forEach(btn => {
    const t = btn.id.replace('sup-tab-','');
    btn.style.borderBottomColor = t === tab ? 'var(--teal)' : 'transparent';
    btn.style.color = t === tab ? 'var(--teal-d)' : 'var(--gray-500)';
    btn.style.fontWeight = t === tab ? '600' : '400';
  });
}

function renderSupplierTab(supId, tab) {
  const m = getSupplierMetrics(supId);
  const sup = getSupplierData(supId);

  switch(tab) {
    case 'overview':   return renderSupplierOverview(supId, m, sup);
    case 'orders':     return renderSupplierOrders(m);
    case 'breakdowns': return renderSupplierBreakdowns(m);
    case 'equipment':  return renderSupplierEquipment(m, sup);
    case 'finance':    return renderSupplierFinance(m, sup);
    case 'profile':    return renderSupplierProfile(sup);
    default:           return renderSupplierOverview(supId, m, sup);
  }
}

// ─── TAB: OVERVIEW ───────────────────────────────────────────────
function renderSupplierOverview(supId, m, sup) {
  const openBreakdowns = m.breakdowns?.filter(b => b.status==='open').length || 0;
  const pendingOrders = m.pendingOrders?.filter(o => o.status==='pending').length || 0;

  return `
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.25rem;margin-bottom:1.5rem">
    <!-- Receita Mensal (mini chart) -->
    <div class="card p-5" style="grid-column:1/3">
      <div class="flex justify-between items-center mb-4">
        <h3 style="font-size:1rem">Receita Mensal (€)</h3>
        <span class="badge bg-teal">Últimos 12 meses</span>
      </div>
      <div style="display:flex;align-items:flex-end;gap:6px;height:80px">
        ${(m.monthlyRevenue||[]).map((v,i) => {
          const maxV = Math.max(...m.monthlyRevenue);
          const h = Math.round((v/maxV)*80);
          const months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
          return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
            <div style="width:100%;height:${h}px;background:${i===11?'var(--teal)':'var(--teal-l)'};border-radius:5px 5px 0 0;transition:all .3s;cursor:default"
              title="${months[i]}: €${v.toLocaleString('pt-PT')}"></div>
            <span style="font-size:.6rem;color:var(--gray-400)">${months[i]}</span>
          </div>`;
        }).join('')}
      </div>
      <div class="flex justify-between mt-3" style="font-size:.78rem">
        <span class="text-gray">Total acumulado: <strong class="text-navy">€${m.revenue?.toLocaleString('pt-PT')}</strong></span>
        <span class="text-gray">Comissões pagas: <strong style="color:var(--red)">€${m.commissions?.toLocaleString('pt-PT')}</strong></span>
      </div>
    </div>

    <!-- Alertas -->
    <div style="display:flex;flex-direction:column;gap:10px">
      <div class="card p-4">
        <p style="font-size:.72rem;color:var(--gray-400);font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Alertas</p>
        ${openBreakdowns > 0 ? `
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#fff7ed;border:1px solid #fed7aa;border-radius:11px;margin-bottom:8px;cursor:pointer"
            onclick="switchSupplierTab('breakdowns')">
            <span style="font-size:1.1rem">🔧</span>
            <div>
              <p style="font-size:.82rem;color:#ea580c;font-weight:600">${openBreakdowns} avaria${openBreakdowns!==1?'s':''} em aberto</p>
              <p style="font-size:.72rem;color:#9a3412">Clique para ver detalhes</p>
            </div>
          </div>` : `
          <div style="display:flex;align-items:center;gap:8px;padding:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:11px;margin-bottom:8px">
            <span>✅</span><p style="font-size:.82rem;color:#16a34a">Sem avarias em aberto</p>
          </div>`}
        ${pendingOrders > 0 ? `
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:11px;cursor:pointer"
            onclick="switchSupplierTab('orders')">
            <span style="font-size:1.1rem">📦</span>
            <div>
              <p style="font-size:.82rem;color:#2563eb;font-weight:600">${pendingOrders} encomenda${pendingOrders!==1?'s':''} pendente${pendingOrders!==1?'s':''}</p>
              <p style="font-size:.72rem;color:#1d4ed8">Clique para confirmar</p>
            </div>
          </div>` : `
          <div style="display:flex;align-items:center;gap:8px;padding:10px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:11px">
            <span>✅</span><p style="font-size:.82rem;color:#16a34a">Todas as encomendas tratadas</p>
          </div>`}
      </div>

      <!-- Taxa de avarias -->
      <div class="card p-4">
        <p style="font-size:.72rem;color:var(--gray-400);font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Taxa de Avarias</p>
        <div style="font-family:'Sora',sans-serif;font-size:1.8rem;font-weight:700;color:${m.breakdownRate>5?'var(--red)':m.breakdownRate>3?'#f97316':'#16a34a'}">${m.breakdownRate}%</div>
        <p style="font-size:.72rem;color:var(--gray-500);margin-top:3px">Dos equipamentos alugados</p>
        <div style="height:5px;background:var(--gray-100);border-radius:999px;margin-top:8px;overflow:hidden">
          <div style="height:100%;width:${m.breakdownRate*10}%;background:${m.breakdownRate>5?'var(--red)':m.breakdownRate>3?'#f97316':'var(--teal)'};border-radius:999px"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- TOP PRODUTOS -->
  <div class="card" style="overflow:hidden;margin-bottom:1.5rem">
    <div class="p-5" style="border-bottom:1px solid var(--gray-100)">
      <h3 style="font-size:1rem">Produtos Mais Alugados</h3>
    </div>
    <div>
      ${(m.topProducts||[]).map((p,i) => {
        const app = APPLIANCES.find(a => a.id === p.id);
        return `
        <div style="display:flex;align-items:center;gap:14px;padding:14px 20px;border-bottom:1px solid var(--gray-50)">
          <span style="font-family:'Sora',sans-serif;font-size:1.1rem;font-weight:700;color:var(--gray-200);min-width:24px">${i+1}</span>
          ${app ? `<img src="${app.image}" style="width:48px;height:48px;border-radius:10px;object-fit:cover;flex-shrink:0" onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=48&h=48&fit=crop'">` : ''}
          <div style="flex:1;min-width:0">
            <p class="text-navy text-sm fw-600">${p.name}</p>
            <p class="text-gray" style="font-size:.72rem">${p.rentals} alugueres · ${p.breakdowns} avaria${p.breakdowns!==1?'s':''}</p>
          </div>
          <div style="text-align:right">
            <p class="text-teal fw-600 text-sm">€${p.revenue.toLocaleString('pt-PT')}</p>
            <p class="text-gray" style="font-size:.72rem">receita</p>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <!-- COMPARAÇÃO ANÓNIMA -->
  <div class="card p-5" style="background:linear-gradient(135deg,var(--navy),var(--navy2))">
    <div class="flex justify-between items-center mb-4">
      <h3 style="color:white;font-size:1rem">Comparação com a Plataforma (anónima)</h3>
      <span style="font-size:.7rem;color:#94a3b8;background:rgba(255,255,255,.08);padding:3px 10px;border-radius:999px">Dados agregados</span>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">
      ${[
        {label:'Taxa de avarias', mine: m.breakdownRate+'%', avg:'4.1%', better: m.breakdownRate <= 4.1},
        {label:'Avaliação média', mine: m.avgRating+'/5', avg:'4.6/5', better: m.avgRating >= 4.6},
        {label:'Impressões/produto', mine: Math.round(m.impressions/(m.topProducts?.length||1)).toLocaleString('pt-PT'), avg:'~520', better: Math.round(m.impressions/(m.topProducts?.length||1)) >= 520},
      ].map(c => `
        <div style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:14px">
          <p style="color:#94a3b8;font-size:.72rem;margin-bottom:6px">${c.label}</p>
          <p style="color:white;font-family:'Sora',sans-serif;font-size:1.2rem;font-weight:700">${c.mine}</p>
          <div class="flex items-center gap-5" style="margin-top:4px">
            <span style="font-size:.72rem;color:#64748b">Média: ${c.avg}</span>
            <span style="font-size:.7rem;padding:1px 8px;border-radius:999px;background:${c.better?'rgba(20,184,166,.2)':'rgba(239,68,68,.2)'};color:${c.better?'var(--teal)':'#f87171'}">${c.better?'▲ Acima':'▼ Abaixo'}</span>
          </div>
        </div>`).join('')}
    </div>
    <p style="color:#475569;font-size:.72rem;margin-top:12px">* Os dados de outros parceiros são completamente anonimizados. Nunca tem acesso a dados individuais de outros fornecedores.</p>
  </div>`;
}

// ─── TAB: ORDERS ─────────────────────────────────────────────────
function renderSupplierOrders(m) {
  const orders = m.pendingOrders || [];
  const statusLabel = {pending:'Pendente', confirmed:'Confirmada', delivered:'Entregue'};
  const statusStyle = {
    pending: 'background:#fff7ed;color:#ea580c;border-color:#fed7aa',
    confirmed: 'background:var(--teal-l);color:var(--teal-d);border-color:var(--teal-m)',
    delivered: 'background:#f0fdf4;color:#16a34a;border-color:#bbf7d0'
  };

  return `
  <div class="flex justify-between items-center mb-4">
    <div>
      <h2 style="font-size:1.1rem">Gestão de Encomendas</h2>
      <p class="text-gray text-sm mt-1">Confirme entregas e actualize o estado das encomendas</p>
    </div>
    <span class="badge bg-blue">${orders.length} encomenda${orders.length!==1?'s':''}</span>
  </div>

  ${orders.length === 0 ? `
    <div style="text-align:center;padding:4rem 0">
      <p style="font-size:3rem;margin-bottom:1rem">📭</p>
      <h3 style="margin-bottom:8px">Sem encomendas pendentes</h3>
      <p class="text-gray text-sm">Todas as encomendas foram tratadas.</p>
    </div>` : `
  <div style="display:flex;flex-direction:column;gap:12px">
    ${orders.map(ord => `
    <div class="card p-5">
      <div class="flex justify-between items-start flex-wrap gap-3">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <span style="font-size:1.3rem">📦</span>
            <div>
              <p class="text-navy fw-600 text-sm">${ord.appliance}</p>
              <p class="text-gray" style="font-size:.72rem">Encomenda #${ord.id} · Cliente: ${ord.client}</p>
            </div>
          </div>
          <div class="flex items-center gap-4 text-sm text-gray">
            <span>📅 ${new Date(ord.date).toLocaleDateString('pt-PT',{day:'numeric',month:'long',year:'numeric'})}</span>
            <span>📍 ${ord.address}</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="badge" style="${statusStyle[ord.status]||''}">${statusLabel[ord.status]||ord.status}</span>
          ${ord.status === 'pending' ? `
            <button onclick="alert('Entrega confirmada! (demo)');this.closest('.card').querySelector('.badge').textContent='Confirmada';this.closest('.card').querySelector('.badge').style='background:var(--teal-l);color:var(--teal-d);border-color:var(--teal-m)';this.remove()"
              style="background:var(--teal);color:white;border:none;border-radius:9px;padding:7px 14px;font-size:.78rem;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">
              ✓ Confirmar
            </button>` : ''}
        </div>
      </div>
      ${ord.status === 'confirmed' ? `
        <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--gray-100)">
          <p style="font-size:.78rem;color:var(--gray-500);margin-bottom:8px">Actualizar estado:</p>
          <div class="flex gap-2 flex-wrap">
            <button onclick="alert('Estado actualizado para Em Entrega. (demo)')"
              style="background:#eff6ff;color:#2563eb;border:1px solid #bfdbfe;border-radius:8px;padding:5px 12px;font-size:.75rem;cursor:pointer;font-family:'DM Sans',sans-serif">
              🚚 Em Entrega
            </button>
            <button onclick="alert('Marcada como Entregue! (demo)')"
              style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:8px;padding:5px 12px;font-size:.75rem;cursor:pointer;font-family:'DM Sans',sans-serif">
              ✅ Entregue
            </button>
          </div>
        </div>` : ''}
    </div>`).join('')}
  </div>`}`;
}

// ─── TAB: BREAKDOWNS ─────────────────────────────────────────────
function renderSupplierBreakdowns(m) {
  const bks = m.breakdowns || [];
  const open = bks.filter(b=>b.status==='open');
  const resolved = bks.filter(b=>b.status==='resolved');

  return `
  <div class="flex justify-between items-center mb-4">
    <div>
      <h2 style="font-size:1.1rem">Gestão de Avarias</h2>
      <p class="text-gray text-sm mt-1">Consulte e gira os pedidos de manutenção dos seus equipamentos</p>
    </div>
    <div class="flex gap-2">
      ${open.length>0 ? `<span class="badge" style="background:#fff7ed;color:#ea580c;border-color:#fed7aa">${open.length} em aberto</span>` : ''}
      ${resolved.length>0 ? `<span class="badge bg-green">${resolved.length} resolvida${resolved.length!==1?'s':''}</span>` : ''}
    </div>
  </div>

  ${bks.length === 0 ? `
    <div style="text-align:center;padding:4rem 0">
      <p style="font-size:3rem;margin-bottom:1rem">🎉</p>
      <h3 style="margin-bottom:8px">Sem avarias registadas!</h3>
      <p class="text-gray text-sm">Os seus equipamentos estão todos em bom estado.</p>
    </div>` : `

  ${open.length > 0 ? `
    <h3 style="font-size:.875rem;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Em Aberto</h3>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:1.5rem">
      ${open.map(bk => `
      <div class="card p-5" style="border-left:3px solid #f97316">
        <div class="flex justify-between items-start flex-wrap gap-3 mb-3">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span style="font-size:1rem">🔧</span>
              <p class="text-navy fw-600 text-sm">${bk.appliance}</p>
              <span class="badge" style="background:#fff7ed;color:#ea580c;border-color:#fed7aa">Em aberto</span>
            </div>
            <p class="text-gray" style="font-size:.72rem">Reportado por ${bk.client} em ${new Date(bk.reported).toLocaleDateString('pt-PT',{day:'numeric',month:'long'})}</p>
          </div>
          ${bk.photos ? `<span style="font-size:.72rem;color:#2563eb;background:#eff6ff;border:1px solid #bfdbfe;padding:3px 10px;border-radius:999px">📷 Com fotos</span>` : ''}
        </div>
        <div style="background:var(--gray-50);border-radius:10px;padding:10px;margin-bottom:12px">
          <p style="font-size:.82rem;color:var(--gray-600);line-height:1.55">"${bk.description}"</p>
        </div>
        <div class="flex gap-2 flex-wrap">
          <button onclick="alert('Agendamento de inspeção enviado ao cliente. (demo)')"
            style="background:var(--teal);color:white;border:none;border-radius:9px;padding:8px 16px;font-size:.78rem;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">
            📅 Agendar inspeção
          </button>
          <button onclick="alert('Avaria marcada como resolvida. (demo)')"
            style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:9px;padding:8px 16px;font-size:.78rem;cursor:pointer;font-family:'DM Sans',sans-serif">
            ✅ Marcar como resolvida
          </button>
        </div>
      </div>`).join('')}
    </div>` : ''}

  ${resolved.length > 0 ? `
    <h3 style="font-size:.875rem;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Resolvidas</h3>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${resolved.map(bk => `
      <div class="card p-4" style="opacity:.7">
        <div class="flex items-center gap-3">
          <span>✅</span>
          <div style="flex:1">
            <p class="text-gray text-sm fw-600">${bk.appliance}</p>
            <p class="text-gray" style="font-size:.72rem">Reportado por ${bk.client} · "${bk.description}"</p>
          </div>
          <span class="badge bg-green">Resolvida</span>
        </div>
      </div>`).join('')}
    </div>` : ''}`}`;
}

// ─── TAB: EQUIPMENT / INVENTORY ──────────────────────────────────
function renderSupplierEquipment(m, sup) {
  const equipment = m.equipment || [];
  const condStyle = {
    'Excelente': 'background:#f0fdf4;color:#16a34a;border-color:#bbf7d0',
    'Bom':       'background:var(--teal-l);color:var(--teal-d);border-color:var(--teal-m)',
    'Razoável':  'background:#fffbeb;color:#d97706;border-color:#fde68a',
    'Mau':       'background:#fee2e2;color:var(--red);border-color:#fca5a5',
    'Novo':      'background:#eff6ff;color:#2563eb;border-color:#bfdbfe',
  };

  return `
  <div class="flex justify-between items-center mb-4">
    <div>
      <h2 style="font-size:1.1rem">Inventário de Equipamentos</h2>
      <p class="text-gray text-sm mt-1">Estado e disponibilidade dos seus eletrodomésticos na plataforma</p>
    </div>
    <button onclick="alert('Funcionalidade de exportação em breve. (demo)')"
      style="display:flex;align-items:center;gap:6px;background:var(--teal);color:white;border:none;border-radius:10px;padding:8px 16px;font-size:.82rem;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">
      ⬇ Exportar Excel
    </button>
  </div>

  <!-- Summary cards -->
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:1.5rem">
    ${[
      {icon:'📦', val: equipment.reduce((s,e)=>s+e.active,0), lbl:'Unidades alugadas'},
      {icon:'🏪', val: equipment.reduce((s,e)=>s+e.stock,0), lbl:'Em stock'},
      {icon:'🔧', val: m.returnsPending||0, lbl:'Devoluções pendentes'},
      {icon:'📋', val: equipment.length, lbl:'Modelos catalogados'},
    ].map(k=>`
      <div class="card p-4">
        <div style="font-size:1.2rem;margin-bottom:5px">${k.icon}</div>
        <div style="font-family:'Sora',sans-serif;font-size:1.4rem;font-weight:700;color:var(--navy)">${k.val}</div>
        <div style="font-size:.72rem;color:var(--gray-500);margin-top:2px">${k.lbl}</div>
      </div>`).join('')}
  </div>

  <!-- Equipment table -->
  <div class="card" style="overflow:hidden">
    <table style="width:100%;border-collapse:collapse">
      <thead>
        <tr style="background:var(--gray-50);border-bottom:1px solid var(--gray-100)">
          ${['Equipamento','Alugados','Em Stock','Condição','Última Verificação','Ações']
            .map(h=>`<th style="text-align:left;padding:12px 16px;font-size:.72rem;color:var(--gray-500);text-transform:uppercase;letter-spacing:.06em;font-weight:600">${h}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${equipment.map((eq, i) => {
          const app = APPLIANCES.find(a => a.id === eq.id);
          return `
          <tr style="border-bottom:1px solid var(--gray-50);background:${i%2===0?'white':'var(--gray-50)'}">
            <td style="padding:12px 16px">
              <div class="flex items-center gap-3">
                ${app ? `<img src="${app.image}" style="width:36px;height:36px;border-radius:8px;object-fit:cover;flex-shrink:0" onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=36&h=36&fit=crop'">` : ''}
                <div>
                  <p class="text-navy text-sm fw-600">${eq.name}</p>
                  <p class="text-gray" style="font-size:.7rem">${app?.brand||''}</p>
                </div>
              </div>
            </td>
            <td style="padding:12px 16px">
              <div class="flex items-center gap-2">
                <div style="font-size:.875rem;font-weight:600;color:var(--navy)">${eq.active}</div>
                <div style="flex:1;max-width:60px;height:5px;background:var(--gray-100);border-radius:999px;overflow:hidden">
                  <div style="height:100%;width:${Math.min((eq.active/(eq.active+eq.stock||1))*100,100)}%;background:var(--teal);border-radius:999px"></div>
                </div>
              </div>
            </td>
            <td style="padding:12px 16px;font-size:.875rem;color:var(--gray-700)">${eq.stock}</td>
            <td style="padding:12px 16px">
              <span class="badge" style="${condStyle[eq.condition]||''}">${eq.condition}</span>
            </td>
            <td style="padding:12px 16px;font-size:.82rem;color:var(--gray-500)">${new Date(eq.lastCheck).toLocaleDateString('pt-PT',{day:'numeric',month:'short'})}</td>
            <td style="padding:12px 16px">
              <button onclick="alert('Registo de condição — funcionalidade completa em breve. (demo)')"
                style="background:none;border:1px solid var(--gray-200);border-radius:8px;padding:4px 10px;font-size:.72rem;cursor:pointer;color:var(--gray-500);font-family:'DM Sans',sans-serif"
                onmouseover="this.style.borderColor='var(--teal)';this.style.color='var(--teal-d)'"
                onmouseout="this.style.borderColor='var(--gray-200)';this.style.color='var(--gray-500)'">
                Actualizar
              </button>
            </td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>`;
}

// ─── TAB: FINANCE ────────────────────────────────────────────────
function renderSupplierFinance(m, sup) {
  const currentMonth = m.monthlyRevenue?.[m.monthlyRevenue.length-1] || 0;
  const netRevenue = currentMonth * (1 - sup.commissionRate);
  const commission = currentMonth * sup.commissionRate;

  return `
  <div class="flex justify-between items-center mb-4">
    <div>
      <h2 style="font-size:1.1rem">Painel Financeiro</h2>
      <p class="text-gray text-sm mt-1">Receitas, comissões e extrato detalhado</p>
    </div>
    <button onclick="alert('Exportação em PDF em breve. (demo)')"
      style="display:flex;align-items:center;gap:6px;background:var(--navy);color:white;border:none;border-radius:10px;padding:8px 16px;font-size:.82rem;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">
      ⬇ Exportar PDF
    </button>
  </div>

  <!-- Finance KPIs -->
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:1.5rem">
    <div class="card p-5" style="border-top:3px solid var(--teal)">
      <p style="font-size:.72rem;color:var(--gray-400);font-weight:600;text-transform:uppercase;letter-spacing:.07em;margin-bottom:6px">Receita este mês</p>
      <p style="font-family:'Sora',sans-serif;font-size:1.8rem;font-weight:700;color:var(--navy)">€${currentMonth.toLocaleString('pt-PT')}</p>
      <p style="font-size:.72rem;color:var(--gray-500);margin-top:3px">${sup?.fixedPerUnit}€ fixo/unidade + ${sup?.commissionRate*100}% variável</p>
    </div>
    <div class="card p-5" style="border-top:3px solid var(--red)">
      <p style="font-size:.72rem;color:var(--gray-400);font-weight:600;text-transform:uppercase;letter-spacing:.07em;margin-bottom:6px">Comissão HomeLoop</p>
      <p style="font-family:'Sora',sans-serif;font-size:1.8rem;font-weight:700;color:var(--red)">€${commission.toFixed(2)}</p>
      <p style="font-size:.72rem;color:var(--gray-500);margin-top:3px">${sup?.commissionRate*100}% da receita bruta</p>
    </div>
    <div class="card p-5" style="border-top:3px solid #16a34a">
      <p style="font-size:.72rem;color:var(--gray-400);font-weight:600;text-transform:uppercase;letter-spacing:.07em;margin-bottom:6px">Valor líquido</p>
      <p style="font-family:'Sora',sans-serif;font-size:1.8rem;font-weight:700;color:#16a34a">€${netRevenue.toFixed(2)}</p>
      <p style="font-size:.72rem;color:var(--gray-500);margin-top:3px">Depositado até ao dia 5 do mês seguinte</p>
    </div>
  </div>

  <!-- Extrato tabela -->
  <div class="card" style="overflow:hidden">
    <div class="p-5" style="border-bottom:1px solid var(--gray-100)">
      <h3 style="font-size:1rem">Extrato Mensal Detalhado</h3>
    </div>
    <table style="width:100%;border-collapse:collapse">
      <thead>
        <tr style="background:var(--gray-50);border-bottom:1px solid var(--gray-100)">
          ${['Mês','Receita Bruta','Comissão (20%)','Valor Líquido','Estado']
            .map(h=>`<th style="text-align:left;padding:10px 16px;font-size:.72rem;color:var(--gray-500);text-transform:uppercase;letter-spacing:.06em">${h}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${(m.monthlyRevenue||[]).map((v,i) => {
          const months=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
          const comm = (v * sup.commissionRate).toFixed(2);
          const net  = (v * (1-sup.commissionRate)).toFixed(2);
          const isPaid = i < 11;
          return `
          <tr style="border-bottom:1px solid var(--gray-50);background:${i%2===0?'white':'var(--gray-50)'}">
            <td style="padding:10px 16px;font-size:.875rem;color:var(--navy);font-weight:600">${months[i]} 2025${i===11?' (atual)':''}</td>
            <td style="padding:10px 16px;font-size:.875rem;color:var(--gray-700)">€${v.toLocaleString('pt-PT')}</td>
            <td style="padding:10px 16px;font-size:.875rem;color:var(--red)">-€${comm}</td>
            <td style="padding:10px 16px;font-size:.875rem;font-weight:600;color:#16a34a">€${net}</td>
            <td style="padding:10px 16px">
              <span class="badge" style="${isPaid?'background:#f0fdf4;color:#16a34a;border-color:#bbf7d0':'background:#fffbeb;color:#d97706;border-color:#fde68a'}">
                ${isPaid?'✓ Pago':'Pendente'}
              </span>
            </td>
          </tr>`;
        }).reverse().join('')}
      </tbody>
    </table>
  </div>

  <div class="info-banner info-teal mt-4">
    ℹ️ Os pagamentos são calculados automaticamente com base nas subscrições ativas dos clientes que utilizam os seus equipamentos. Cada unidade alugada gera <strong>€${sup?.fixedPerUnit} fixos/mês</strong> mais <strong>${sup?.commissionRate*100}% da receita da subscrição</strong> proporcional.
  </div>`;
}

// ─── TAB: PROFILE ────────────────────────────────────────────────
function renderSupplierProfile(sup) {
  return `
  <div style="max-width:640px">
    <h2 style="font-size:1.1rem;margin-bottom:1.5rem">Perfil do Parceiro</h2>
    <div class="card p-6 mb-4">
      <div class="flex items-center gap-4 mb-5">
        <div style="width:64px;height:64px;background:var(--teal-l);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;flex-shrink:0">🏭</div>
        <div>
          <h3 style="font-size:1.1rem">${sup?.name}</h3>
          <p class="text-gray text-sm">Parceiro desde ${new Date(sup?.joinedDate).toLocaleDateString('pt-PT',{month:'long',year:'numeric'})}</p>
        </div>
        <span class="badge bg-green" style="margin-left:auto">Ativo</span>
      </div>
      ${[
        ['Contacto', sup?.contact],
        ['Email', sup?.email],
        ['Telefone', sup?.phone],
        ['Categorias', sup?.categories?.join(', ')],
        ['Taxa de comissão', `${sup?.commissionRate*100}% variável + €${sup?.fixedPerUnit}/unidade/mês`],
      ].map(([l,v]) => `
        <div style="display:flex;padding:12px 0;border-bottom:1px solid var(--gray-100)">
          <span style="min-width:140px;font-size:.82rem;color:var(--gray-500);font-weight:600">${l}</span>
          <span style="font-size:.875rem;color:var(--navy)">${v||'—'}</span>
        </div>`).join('')}
    </div>
    <div class="info-banner info-blue">
      ℹ️ Para actualizar os dados do seu perfil ou renegociar condições contratuais, contacte a equipa HomeLoop em <strong>parceiros@homeloop.pt</strong>.
    </div>
    <button onclick="handleSupplierLogout()" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;margin-top:1rem;background:#fee2e2;border:1px solid #fca5a5;border-radius:12px;padding:12px;font-size:.875rem;color:var(--red);cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600">
      Terminar sessão
    </button>
  </div>`;
}

function handleSupplierLogout() {
  supplierLogout();
  navigate('/');
}
