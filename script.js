PE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>CARtografia CidadÃ£ â€” Mapeamento Participativo</title>
<style>
  :root {
    --verde: #1a6b3a;
    --verde-escuro: #0f4423;
    --verde-claro: #e8f5ee;
    --verde-mid: #2d9b5a;
    --amarelo: #f5a623;
    --azul: #1a4a8b;
    --azul-claro: #e8f0fb;
    --cinza: #f4f6f8;
    --cinza-medio: #8a9bb0;
    --texto: #1c2b3a;
    --borda: #d1dde9;
    --branco: #ffffff;
    --alerta: #e84040;
    --alerta-claro: #fdeaea;
    --pendente: #f5a623;
    --pendente-claro: #fff8ec;
    --ok: #1a6b3a;
    --ok-claro: #e8f5ee;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', system-ui, sans-serif; color: var(--texto); background: #f0f4f8; font-size: 15px; }
  a { color: inherit; text-decoration: none; }

  /* NAV */
  nav {
    background: var(--verde-escuro);
    padding: 0 32px;
    display: flex; align-items: center; justify-content: space-between;
    height: 56px; position: sticky; top: 0; z-index: 100;
    border-bottom: 3px solid var(--verde-mid);
  }
  .nav-logo { display: flex; align-items: center; gap: 10px; color: white; font-weight: 700; font-size: 17px; }
  .nav-logo span.badge { background: var(--verde-mid); color: white; font-size: 10px; padding: 2px 7px; border-radius: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: .5px; }
  .nav-links { display: flex; gap: 24px; }
  .nav-links a { color: rgba(255,255,255,0.8); font-size: 13px; font-weight: 500; transition: color .2s; }
  .nav-links a:hover { color: white; }
  .nav-cta { background: var(--verde-mid); color: white; padding: 7px 16px; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; border: none; }

  /* HERO */
  .hero {
    background: linear-gradient(135deg, var(--verde-escuro) 0%, #1a5c30 60%, #1a4a8b 100%);
    padding: 60px 32px 0;
    display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: end; max-width: 1200px; margin: 0 auto;
  }
  .hero-text { padding-bottom: 60px; }
  .hero-tag { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.9); font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); text-transform: uppercase; letter-spacing: .8px; margin-bottom: 20px; }
  .hero-tag::before { content: "ðŸ›°"; font-size: 13px; }
  .hero h1 { color: white; font-size: 38px; font-weight: 800; line-height: 1.15; margin-bottom: 16px; }
  .hero h1 em { color: #7de8a0; font-style: normal; }
  .hero-sub { color: rgba(255,255,255,0.75); font-size: 16px; line-height: 1.6; margin-bottom: 28px; max-width: 480px; }
  .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-primary { background: var(--verde-mid); color: white; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; border: none; transition: background .2s; }
  .btn-primary:hover { background: #25b560; }
  .btn-secondary { background: transparent; color: white; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; border: 2px solid rgba(255,255,255,0.3); transition: border-color .2s; }
  .btn-secondary:hover { border-color: white; }
  .btn-ghost { background: rgba(255,255,255,0.1); color: white; padding: 12px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; border: 1px solid rgba(255,255,255,0.2); }

  /* HERO MOCKUP */
  .hero-mockup { position: relative; }
  .mockup-window {
    background: white; border-radius: 12px 12px 0 0; overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  }
  .mockup-bar { background: #e8edf2; padding: 10px 14px; display: flex; align-items: center; gap: 6px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot.r { background: #ff5f57; }
  .dot.y { background: #febc2e; }
  .dot.g { background: #28c840; }
  .mockup-url { background: white; flex: 1; margin-left: 8px; padding: 4px 10px; border-radius: 5px; font-size: 11px; color: var(--cinza-medio); }
  .mockup-content { padding: 16px; }
  .mockup-map {
    background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 30%, #81c784 50%, #66bb6a 70%, #4caf50 90%);
    height: 160px; border-radius: 8px; position: relative; overflow: hidden;
    border: 1px solid var(--borda);
  }
  .map-overlay {
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M10 20 L30 15 L50 25 L70 18 L90 22' stroke='%23fff' stroke-width='1.5' fill='none' opacity='0.4'/%3E%3Cpath d='M5 50 L20 45 L40 55 L60 42 L80 50 L95 45' stroke='%23fff' stroke-width='1' fill='none' opacity='0.3'/%3E%3Cpolygon points='15,60 35,50 55,65 40,80 20,75' fill='%23fff' opacity='0.15'/%3E%3Cpolygon points='60,40 80,35 90,55 70,60' fill='%232e7d32' opacity='0.3'/%3E%3C/svg%3E") repeat;
  }
  .map-pin { position: absolute; background: var(--alerta); color: white; font-size: 9px; font-weight: 700; padding: 3px 7px; border-radius: 12px; }
  .map-pin.p1 { top: 20px; left: 30px; }
  .map-pin.p2 { top: 50px; right: 25px; background: var(--azul); }
  .map-pin.p3 { bottom: 30px; left: 50px; background: var(--verde); }
  .map-legend { position: absolute; bottom: 8px; right: 8px; background: rgba(255,255,255,0.9); border-radius: 5px; padding: 5px 8px; font-size: 9px; }
  .legend-item { display: flex; align-items: center; gap: 4px; margin: 1px 0; }
  .legend-dot { width: 7px; height: 7px; border-radius: 50%; }
  .mockup-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-top: 10px; }
  .mstat { background: var(--cinza); border-radius: 6px; padding: 8px 10px; text-align: center; }
  .mstat .val { font-size: 18px; font-weight: 800; color: var(--verde); }
  .mstat .lab { font-size: 9px; color: var(--cinza-medio); margin-top: 1px; text-transform: uppercase; letter-spacing: .3px; }
  .mockup-alert { background: var(--pendente-claro); border: 1px solid var(--pendente); border-radius: 6px; padding: 7px 10px; display: flex; align-items: center; gap: 8px; margin-top: 10px; font-size: 11px; color: #7a5000; }

  /* WRAPPER */
  .wrapper { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

  /* PROFILES */
  .profiles-section { background: white; padding: 60px 0; border-top: 1px solid var(--borda); }
  .section-tag { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--verde-mid); margin-bottom: 8px; }
  .section-title { font-size: 28px; font-weight: 800; color: var(--texto); margin-bottom: 8px; }
  .section-sub { color: var(--cinza-medio); font-size: 15px; margin-bottom: 36px; }
  .profiles-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
  .profile-card {
    border: 2px solid var(--borda); border-radius: 12px; overflow: hidden;
    transition: border-color .2s, box-shadow .2s; cursor: pointer;
  }
  .profile-card:hover { border-color: var(--verde-mid); box-shadow: 0 4px 20px rgba(26,107,58,0.1); }
  .profile-card.active { border-color: var(--verde-mid); box-shadow: 0 4px 20px rgba(26,107,58,0.15); }
  .profile-header { padding: 18px; border-bottom: 1px solid var(--borda); display: flex; align-items: center; gap: 12px; }
  .profile-icon { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 22px; }
  .icon-produtor { background: #e8f5ee; }
  .icon-agente { background: #e8f0fb; }
  .icon-analista { background: #fff8ec; }
  .profile-name { font-weight: 700; font-size: 14px; }
  .profile-desc { font-size: 12px; color: var(--cinza-medio); margin-top: 2px; }
  .profile-steps { padding: 16px 18px; }
  .step-row { display: flex; align-items: flex-start; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--cinza); }
  .step-row:last-child { border-bottom: none; }
  .step-num { width: 22px; height: 22px; border-radius: 50%; background: var(--verde-mid); color: white; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
  .step-num.blue { background: var(--azul); }
  .step-num.amber { background: var(--amarelo); }
  .step-body { flex: 1; }
  .step-label { font-size: 11px; font-weight: 600; color: var(--cinza-medio); text-transform: uppercase; letter-spacing: .4px; }
  .step-text { font-size: 13px; color: var(--texto); margin-top: 2px; line-height: 1.4; }
  .step-result { background: var(--ok-claro); border: 1px solid #b7dfc4; border-radius: 5px; padding: 4px 8px; margin-top: 6px; font-size: 11px; color: var(--ok); font-weight: 600; }
  .step-result.warning { background: var(--pendente-claro); border-color: #f5d88e; color: #7a5000; }

  /* FLOW */
  .flow-section { background: var(--cinza); padding: 60px 0; }
  .flow-steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; margin-top: 36px; position: relative; }
  .flow-steps::before {
    content: ''; position: absolute; top: 38px; left: 12.5%; right: 12.5%;
    height: 2px; background: linear-gradient(90deg, var(--verde-mid), var(--azul));
    z-index: 0;
  }
  .flow-step { text-align: center; position: relative; z-index: 1; padding: 0 12px; }
  .flow-icon { width: 76px; height: 76px; border-radius: 50%; background: white; border: 3px solid var(--verde-mid); display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
  .flow-step:nth-child(2) .flow-icon { border-color: #5b7fc0; }
  .flow-step:nth-child(3) .flow-icon { border-color: var(--amarelo); }
  .flow-step:nth-child(4) .flow-icon { border-color: var(--azul); }
  .flow-title { font-weight: 700; font-size: 14px; margin-bottom: 6px; }
  .flow-desc { font-size: 12px; color: var(--cinza-medio); line-height: 1.5; }
  .flow-tag { display: inline-block; font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 20px; margin-top: 8px; }
  .tag-entrada { background: var(--verde-claro); color: var(--verde); }
  .tag-orientacao { background: var(--azul-claro); color: var(--azul); }
  .tag-consulta { background: var(--pendente-claro); color: #7a5000; }
  .tag-resultado { background: var(--ok-claro); color: var(--ok); }

  /* ECOSYSTEM */
  .eco-section { background: white; padding: 60px 0; }
  .eco-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  .eco-diagram { background: var(--cinza); border-radius: 16px; padding: 24px; border: 1px solid var(--borda); }
  .eco-center {
    text-align: center; padding: 16px; background: var(--verde-escuro); color: white;
    border-radius: 12px; margin-bottom: 16px;
  }
  .eco-center .eco-logo { font-size: 28px; margin-bottom: 4px; }
  .eco-center h3 { font-size: 16px; font-weight: 800; }
  .eco-center p { font-size: 11px; opacity: .7; margin-top: 2px; }
  .eco-nodes { display: grid; grid-template-columns: repeat(2,1fr); gap: 8px; }
  .eco-node {
    background: white; border: 1px solid var(--borda); border-radius: 8px; padding: 10px 12px;
    display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 600;
    transition: border-color .2s, box-shadow .2s; cursor: default;
  }
  .eco-node:hover { border-color: var(--verde-mid); box-shadow: 0 2px 8px rgba(26,107,58,0.1); }
  .eco-node-icon { font-size: 16px; width: 28px; text-align: center; flex-shrink: 0; }
  .eco-node .node-name { font-size: 11px; font-weight: 700; }
  .eco-node .node-sub { font-size: 10px; color: var(--cinza-medio); font-weight: 400; }
  .eco-connector { text-align: center; font-size: 10px; color: var(--verde-mid); font-weight: 700; margin: 8px 0 0; }
  .eco-desc h3 { font-size: 22px; font-weight: 800; margin-bottom: 12px; }
  .eco-desc p { color: #4a5568; line-height: 1.7; margin-bottom: 16px; font-size: 14px; }
  .eco-list { list-style: none; }
  .eco-list li { display: flex; align-items: flex-start; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--cinza); font-size: 13px; line-height: 1.4; }
  .eco-list li:last-child { border-bottom: none; }
  .eco-list li::before { content: "â†’"; color: var(--verde-mid); font-weight: 700; flex-shrink: 0; margin-top: 1px; }

  /* DIAGNOSTICO */
  .diag-section { background: var(--cinza); padding: 60px 0; }
  .diag-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; align-items: start; }
  .diag-panel { background: white; border-radius: 12px; border: 1px solid var(--borda); overflow: hidden; }
  .diag-panel-header { padding: 14px 18px; background: var(--verde-escuro); color: white; display: flex; align-items: center; gap: 10px; }
  .diag-panel-header h4 { font-size: 14px; font-weight: 700; }
  .diag-panel-header .status-pill { margin-left: auto; background: rgba(255,255,255,0.15); font-size: 11px; padding: 3px 10px; border-radius: 20px; }
  .diag-body { padding: 16px 18px; }
  .diag-row { display: flex; justify-content: space-between; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--cinza); font-size: 13px; }
  .diag-row:last-child { border-bottom: none; }
  .diag-label { color: #4a5568; }
  .badge-ok { background: var(--ok-claro); color: var(--ok); font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; }
  .badge-warn { background: var(--pendente-claro); color: #7a5000; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; }
  .badge-erro { background: var(--alerta-claro); color: var(--alerta); font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; }
  .diag-alert { background: var(--alerta-claro); border: 1px solid #f5b5b5; border-radius: 8px; padding: 12px 14px; margin-top: 12px; font-size: 12px; color: #8b1a1a; line-height: 1.5; }
  .diag-alert strong { display: block; margin-bottom: 4px; font-size: 13px; }
  .diag-next { background: var(--verde-mid); color: white; border: none; padding: 10px 18px; border-radius: 7px; font-weight: 700; font-size: 13px; cursor: pointer; width: 100%; margin-top: 12px; }
  .progress-bar { height: 6px; background: var(--cinza); border-radius: 3px; margin: 8px 0 14px; overflow: hidden; }
  .progress-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--verde-mid), #25b560); }
  .diag-upload-area { border: 2px dashed var(--borda); border-radius: 8px; padding: 20px; text-align: center; margin: 12px 0; cursor: pointer; transition: border-color .2s; }
  .diag-upload-area:hover { border-color: var(--verde-mid); }
  .diag-upload-area p { font-size: 12px; color: var(--cinza-medio); margin-top: 6px; }
  .loading-state { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--cinza-medio); padding: 12px; background: var(--cinza); border-radius: 8px; }
  .spinner { width: 16px; height: 16px; border: 2px solid var(--borda); border-top-color: var(--verde-mid); border-radius: 50%; animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* API */
  .api-section { background: var(--texto); padding: 60px 0; }
  .api-section .section-tag { color: #7de8a0; }
  .api-section .section-title { color: white; }
  .api-section .section-sub { color: rgba(255,255,255,0.5); }
  .api-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; }
  .code-block { background: #0d1f12; border-radius: 10px; padding: 20px; font-family: 'Courier New', monospace; font-size: 12px; line-height: 1.8; border: 1px solid #2a4a30; overflow-x: auto; }
  .code-comment { color: #4a8a5a; }
  .code-key { color: #7de8a0; }
  .code-val { color: #f5e6a0; }
  .code-url { color: #80c8ff; }
  .api-endpoints { list-style: none; }
  .api-endpoints li { display: flex; gap: 12px; align-items: flex-start; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 13px; }
  .api-endpoints li:last-child { border-bottom: none; }
  .method { background: rgba(125,232,160,0.15); color: #7de8a0; font-family: monospace; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 4px; flex-shrink: 0; }
  .method.post { background: rgba(245,166,35,0.15); color: var(--amarelo); }
  .endpoint-desc { color: rgba(255,255,255,0.6); font-size: 11px; margin-top: 2px; }
  .endpoint-path { color: rgba(255,255,255,0.9); font-family: monospace; }

  /* CREDIBILIDADE */
  .cred-section { background: white; padding: 48px 0; border-top: 1px solid var(--borda); }
  .cred-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-top: 28px; }
  .cred-card { border: 1px solid var(--borda); border-radius: 10px; padding: 16px; display: flex; gap: 12px; align-items: flex-start; }
  .cred-icon { font-size: 22px; flex-shrink: 0; }
  .cred-title { font-size: 13px; font-weight: 700; margin-bottom: 4px; }
  .cred-text { font-size: 12px; color: var(--cinza-medio); line-height: 1.5; }

  /* FOOTER */
  footer { background: var(--verde-escuro); color: rgba(255,255,255,0.7); padding: 32px; text-align: center; font-size: 12px; }
  footer strong { color: white; }
  .footer-links { display: flex; justify-content: center; gap: 20px; margin-top: 10px; }
  .footer-links a { color: rgba(255,255,255,0.5); font-size: 12px; }
  .footer-links a:hover { color: white; }
  .footer-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 20px; font-size: 11px; margin-top: 10px; }

  /* DRONES */
  .drones-section { background: var(--azul-claro); padding: 60px 0; border-top: 1px solid var(--borda); }
  .drones-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 32px; }
  .drone-card { background: white; border-radius: 12px; border: 1px solid var(--borda); padding: 20px; }
  .drone-card h4 { font-size: 15px; font-weight: 700; margin: 12px 0 6px; }
  .drone-card p { font-size: 12px; color: var(--cinza-medio); line-height: 1.5; }
  .drone-tag { font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 3px 9px; border-radius: 20px; display: inline-block; margin-bottom: 8px; }
  .tag-drone { background: var(--azul-claro); color: var(--azul); }
  .tag-territorio { background: var(--verde-claro); color: var(--verde); }
  .tag-validacao { background: var(--pendente-claro); color: #7a5000; }
  .drone-stats { display: flex; gap: 12px; margin-top: 14px; }
  .dstat { flex: 1; text-align: center; background: var(--cinza); border-radius: 6px; padding: 8px; }
  .dstat .dv { font-size: 16px; font-weight: 800; color: var(--azul); }
  .dstat .dl { font-size: 9px; color: var(--cinza-medio); }

  @media(max-width: 900px) {
    .hero { grid-template-columns: 1fr; }
    .hero-mockup { display: none; }
    .profiles-grid, .flow-steps { grid-template-columns: 1fr; }
    .eco-grid, .diag-grid, .api-grid { grid-template-columns: 1fr; }
    .cred-grid { grid-template-columns: repeat(2,1fr); }
    .drones-grid { grid-template-columns: 1fr; }
    .flow-steps::before { display: none; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">
    ðŸ—ºï¸ CARtografia CidadÃ£
    <span class="badge">haCARthon 2026</span>
  </div>
  <div class="nav-links">
    <a href="#perfis">Perfis</a>
    <a href="#fluxo">Fluxo</a>
    <a href="#ecossistema">Ecossistema CAR</a>
    <a href="#diagnostico">DiagnÃ³stico</a>
    <a href="#api">API Aberta</a>
  </div>
  <button class="nav-cta">Simular consulta â†’</button>
</nav>

<!-- HERO -->
<div style="background: linear-gradient(135deg, var(--verde-escuro) 0%, #1a5c30 60%, #1a4a8b 100%); padding: 0 24px;">
<div class="hero">
  <div class="hero-text">
    <div class="hero-tag">Camada de orientaÃ§Ã£o sobre o ecossistema do CAR</div>
    <h1>Mapeamento <em>participativo</em> para territÃ³rios reais</h1>
    <p class="hero-sub">Conecta produtores rurais, comunidades tradicionais e tÃ©cnicos ao SICAR â€” com drones, protocolos validados pelo IBGE e API aberta de dados geoespaciais.</p>
    <div class="hero-actions">
      <button class="btn-primary">ðŸ›© Explorar o fluxo</button>
      <button class="btn-secondary">Ver diagnÃ³stico de imÃ³vel</button>
      <button class="btn-ghost">API Docs</button>
    </div>
  </div>
  <div class="hero-mockup">
    <div class="mockup-window">
      <div class="mockup-bar">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <div class="mockup-url">cartografiacidada.car.gov.br/diagnostico?id=MG-1234567</div>
      </div>
      <div class="mockup-content">
        <div class="mockup-map">
          <div class="map-overlay"></div>
          <div class="map-pin p1">âš  APP suprimida</div>
          <div class="map-pin p2">âœ“ RL registrada</div>
          <div class="map-pin p3">ðŸ“¡ Drone validado</div>
          <div class="map-legend">
            <div class="legend-item"><div class="legend-dot" style="background:#e84040"></div> PendÃªncia</div>
            <div class="legend-item"><div class="legend-dot" style="background:#1a6b3a"></div> Conforme</div>
            <div class="legend-item"><div class="legend-dot" style="background:#f5a623"></div> Em anÃ¡lise</div>
          </div>
        </div>
        <div class="mockup-stats">
          <div class="mstat"><div class="val">82%</div><div class="lab">Conformidade</div></div>
          <div class="mstat"><div class="val">3,2ha</div><div class="lab">APP a restaurar</div></div>
          <div class="mstat"><div class="val">SICAR</div><div class="lab">Sistema origem</div></div>
        </div>
        <div class="mockup-alert">â³ AnÃ¡lise do OEMA pendente â€” prazo: 15 dias. <strong style="margin-left:auto;color:#7a5000;cursor:pointer;">Ver â†’</strong></div>
      </div>
    </div>
  </div>
</div>
</div>

<!-- PERFIS -->
<div id="perfis" class="profiles-section">
<div class="wrapper">
  <div class="section-tag">Jornadas por perfil</div>
  <div class="section-title">Quem usa e como usa</div>
  <div class="section-sub">TrÃªs caminhos diferentes, um ecossistema conectado.</div>
  <div class="profiles-grid">

    <!-- PRODUTOR -->
    <div class="profile-card active">
      <div class="profile-header">
        <div class="profile-icon icon-produtor">ðŸ§‘â€ðŸŒ¾</div>
        <div>
          <div class="profile-name">Produtor / Possuidor Rural</div>
          <div class="profile-desc">ImÃ³veis rurais, assentamentos, posses</div>
        </div>
      </div>
      <div class="profile-steps">
        <div class="step-row">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-label">Entrada</div>
            <div class="step-text">Informa CPF/CNPJ e nÃºmero do NIRF ou Recibo CAR na Central do ProprietÃ¡rio</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-label">AÃ§Ã£o</div>
            <div class="step-text">Sistema cruza dados com INCRA, SIGEF e SNCR para prÃ©-preencher polÃ­gono e atributos do imÃ³vel</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-label">Resultado</div>
            <div class="step-text">Recibe do CAR gerado, diagnÃ³stico de conformidade ambiental e prÃ³ximo passo no PRA</div>
            <div class="step-result">âœ“ Recibo emitido â€” conformidade 82%</div>
          </div>
        </div>
      </div>
    </div>

    <!-- AGENTE -->
    <div class="profile-card">
      <div class="profile-header">
        <div class="profile-icon icon-agente">ðŸ‘©â€ðŸ’¼</div>
        <div>
          <div class="profile-name">Multiplicador / Agente Local</div>
          <div class="profile-desc">TÃ©cnicos de extensÃ£o, Emater, CREA, sindicatos</div>
        </div>
      </div>
      <div class="profile-steps">
        <div class="step-row">
          <div class="step-num blue">1</div>
          <div class="step-body">
            <div class="step-label">Entrada</div>
            <div class="step-text">Acessa kit de drone do programa de emprÃ©stimo via associaÃ§Ã£o rural credenciada</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num blue">2</div>
          <div class="step-body">
            <div class="step-label">AÃ§Ã£o</div>
            <div class="step-text">Executa protocolo padronizado de voo, coleta ortofotos e envia para base nacional via app offline</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num blue">3</div>
          <div class="step-body">
            <div class="step-label">Resultado</div>
            <div class="step-text">Ortofotos integradas ao SICAR, polÃ­gono do imÃ³vel refinado e enviado ao OEMA para validaÃ§Ã£o</div>
            <div class="step-result warning">â³ Aguardando validaÃ§Ã£o OEMA â€” 15 dias</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ANALISTA -->
    <div class="profile-card">
      <div class="profile-header">
        <div class="profile-icon icon-analista">ðŸ”¬</div>
        <div>
          <div class="profile-name">Analista / TÃ©cnico OEMA</div>
          <div class="profile-desc">Engenheiros agrÃ´nomos, florestais, biÃ³logos</div>
        </div>
      </div>
      <div class="profile-steps">
        <div class="step-row">
          <div class="step-num amber">1</div>
          <div class="step-body">
            <div class="step-label">Entrada</div>
            <div class="step-text">Recebe fila de polÃ­gonos prÃ³ximos Ã  sua localidade para revisÃ£o no Painel de RegularizaÃ§Ã£o</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num amber">2</div>
          <div class="step-body">
            <div class="step-label">AÃ§Ã£o</div>
            <div class="step-text">Compara ortofoto do drone com camadas do SNIF, bases IBGE e limites declarados no SICAR</div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-num amber">3</div>
          <div class="step-body">
            <div class="step-label">Resultado</div>
            <div class="step-text">Valida, corrige ou devolve ao produtor com nota tÃ©cnica via plataforma distribuÃ­da de revisÃ£o</div>
            <div class="step-result">âœ“ PolÃ­gono validado â€” base atualizada no SICAR</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</div>

<!-- FLUXO -->
<div id="fluxo" class="flow-section">
<div class="wrapper">
  <div class="section-tag">Fluxo de uso real</div>
  <div class="section-title">Do campo ao SICAR em 4 etapas</div>
  <div class="section-sub">Cada etapa conecta um ator, um sistema e uma aÃ§Ã£o concreta.</div>
  <div class="flow-steps">
    <div class="flow-step">
      <div class="flow-icon">ðŸ¤”</div>
      <div class="flow-title">DÃºvida ou Necessidade</div>
      <div class="flow-desc">Produtor, comunidade ou tÃ©cnico identificam necessidade de cadastro, retificaÃ§Ã£o ou mapeamento territorial</div>
      <div class="flow-tag tag-entrada">Entrada</div>
    </div>
    <div class="flow-step">
      <div class="flow-icon">ðŸ§­</div>
      <div class="flow-title">OrientaÃ§Ã£o Inteligente</div>
      <div class="flow-desc">Plataforma identifica perfil e redireciona ao fluxo correto: mÃ³dulo prÃ©-preenchido, offline ou protocolo participativo</div>
      <div class="flow-tag tag-orientacao">OrientaÃ§Ã£o</div>
    </div>
    <div class="flow-step">
      <div class="flow-icon">ðŸ–¥ï¸</div>
      <div class="flow-title">Consulta ao Sistema</div>
      <div class="flow-desc">IntegraÃ§Ã£o direta com SICAR, SIGEF, Painel de RegularizaÃ§Ã£o, Meu ImÃ³vel Rural ou consulta pÃºblica</div>
      <div class="flow-tag tag-consulta">Consulta</div>
    </div>
    <div class="flow-step">
      <div class="flow-icon">âœ…</div>
      <div class="flow-title">Resultado ou Encaminhamento</div>
      <div class="flow-desc">Recibo do CAR, diagnÃ³stico de conformidade, nota tÃ©cnica do OEMA ou encaminhamento ao PRA</div>
      <div class="flow-tag tag-resultado">Resultado</div>
    </div>
  </div>
</div>
</div>

<!-- DRONES / COMPONENTES -->
<div class="drones-section">
<div class="wrapper">
  <div class="section-tag">Componentes da soluÃ§Ã£o</div>
  <div class="section-title">Quatro pilares operacionais</div>
  <div class="section-sub">Cada componente endereÃ§a uma lacuna real no ecossistema do CAR.</div>
  <div class="drones-grid">
    <div class="drone-card">
      <div class="drone-tag tag-drone">ðŸ›© Drones</div>
      <h4>Programa de EmprÃ©stimo de Drones</h4>
      <p>Kits DJI Mini disponibilizados a sindicatos e cooperativas com protocolo padronizado de voo. Ortofotos alimentam base nacional de alta resoluÃ§Ã£o, complementando imagens de satÃ©lite.</p>
      <div class="drone-stats">
        <div class="dstat"><div class="dv">~5cm</div><div class="dl">ResoluÃ§Ã£o GSD</div></div>
        <div class="dstat"><div class="dv">ISO</div><div class="dl">Protocolo voo</div></div>
        <div class="dstat"><div class="dv">WMS</div><div class="dl">SaÃ­da SICAR</div></div>
      </div>
    </div>
    <div class="drone-card">
      <div class="drone-tag tag-territorio">ðŸŒ¿ TerritÃ³rios</div>
      <h4>Mapeamento de TerritÃ³rios Tradicionais</h4>
      <p>Comunidades quilombolas, ribeirinhas e indÃ­genas participam do mapeamento dos prÃ³prios territÃ³rios com metodologia validada pelo IBGE. Limites e usos costumeiros registrados corretamente no SICAR.</p>
      <div class="drone-stats">
        <div class="dstat"><div class="dv">IBGE</div><div class="dl">Metodologia</div></div>
        <div class="dstat"><div class="dv">SICAR</div><div class="dl">Destino</div></div>
        <div class="dstat"><div class="dv">3</div><div class="dl">Tipos comunidade</div></div>
      </div>
    </div>
    <div class="drone-card">
      <div class="drone-tag tag-validacao">ðŸ” ValidaÃ§Ã£o</div>
      <h4>Rede DistribuÃ­da de RevisÃ£o TÃ©cnica</h4>
      <p>Engenheiros agrÃ´nomos, florestais e biÃ³logos credenciados nos OEMAs revisam e validam remotamente polÃ­gonos prÃ³ximos Ã  sua localidade â€” descentralizando a anÃ¡lise que hoje se concentra nos estados.</p>
      <div class="drone-stats">
        <div class="dstat"><div class="dv">OEMA</div><div class="dl">Credencial</div></div>
        <div class="dstat"><div class="dv">GeoJSON</div><div class="dl">Formato troca</div></div>
        <div class="dstat"><div class="dv">API</div><div class="dl">IntegraÃ§Ã£o</div></div>
      </div>
    </div>
  </div>
</div>
</div>



<!-- SISTEMAS COMPLEMENTARES -->
<div style="background:#fff;padding:60px 0;border-top:1px solid var(--borda);">
<div class="wrapper">
  <div class="section-tag">Sistemas complementares</div>
  <div class="section-title">Acesse o sistema certo para cada tarefa</div>
  <div class="section-sub">Atalhos operacionais para navegar no ecossistema real do CAR sem perder contexto.</div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
    <div style="background:var(--cinza);border:1px solid var(--borda);border-radius:12px;padding:16px;">
      <div style="font-size:22px;">ðŸ”Ž</div><div style="font-weight:700;margin-top:8px;">Consulta PÃºblica</div><div style="font-size:12px;color:var(--cinza-medio);margin-top:4px;line-height:1.5;">Ver situaÃ§Ã£o pÃºblica do imÃ³vel e checar dados bÃ¡sicos antes de avanÃ§ar.</div><div style="margin-top:12px;display:inline-block;background:var(--verde-claro);color:var(--verde);padding:5px 10px;border-radius:20px;font-size:11px;font-weight:700;">Abrir consulta</div>
    </div>
    <div style="background:var(--cinza);border:1px solid var(--borda);border-radius:12px;padding:16px;">
      <div style="font-size:22px;">ðŸ“Š</div><div style="font-weight:700;margin-top:8px;">Painel de RegularizaÃ§Ã£o</div><div style="font-size:12px;color:var(--cinza-medio);margin-top:4px;line-height:1.5;">Acompanhar pendÃªncias, status do PRA e encaminhamentos tÃ©cnicos.</div><div style="margin-top:12px;display:inline-block;background:var(--pendente-claro);color:#7a5000;padding:5px 10px;border-radius:20px;font-size:11px;font-weight:700;">Ver painel</div>
    </div>
    <div style="background:var(--cinza);border:1px solid var(--borda);border-radius:12px;padding:16px;">
      <div style="font-size:22px;">ðŸ¡</div><div style="font-weight:700;margin-top:8px;">Meu ImÃ³vel Rural</div><div style="font-size:12px;color:var(--cinza-medio);margin-top:4px;line-height:1.5;">Conferir vÃ­nculo, titularidade e dados cadastrais relacionados ao imÃ³vel.</div><div style="margin-top:12px;display:inline-block;background:var(--azul-claro);color:var(--azul);padding:5px 10px;border-radius:20px;font-size:11px;font-weight:700;">Abrir imÃ³vel</div>
    </div>
    <div style="background:var(--cinza);border:1px solid var(--borda);border-radius:12px;padding:16px;">
      <div style="font-size:22px;">ðŸŒ²</div><div style="font-weight:700;margin-top:8px;">SNIF</div><div style="font-size:12px;color:var(--cinza-medio);margin-top:4px;line-height:1.5;">Consultar bases de referÃªncia florestal e apoiar validaÃ§Ã£o de camadas ambientais.</div><div style="margin-top:12px;display:inline-block;background:var(--verde-claro);color:var(--verde);padding:5px 10px;border-radius:20px;font-size:11px;font-weight:700;">Explorar bases</div>
    </div>
    <div style="background:var(--cinza);border:1px solid var(--borda);border-radius:12px;padding:16px;">
      <div style="font-size:22px;">ðŸ’¾</div><div style="font-weight:700;margin-top:8px;">MÃ³dulo Offline</div><div style="font-size:12px;color:var(--cinza-medio);margin-top:4px;line-height:1.5;">Cadastrar em campo sem internet e sincronizar depois com seguranÃ§a.</div><div style="margin-top:12px;display:inline-block;background:var(--azul-claro);color:var(--azul);padding:5px 10px;border-radius:20px;font-size:11px;font-weight:700;">Baixar mÃ³dulo</div>
    </div>
    <div style="background:var(--cinza);border:1px solid var(--borda);border-radius:12px;padding:16px;">
      <div style="font-size:22px;">ðŸ§ª</div><div style="font-weight:700;margin-top:8px;">Ambiente de Testes</div><div style="font-size:12px;color:var(--cinza-medio);margin-top:4px;line-height:1.5;">Simular cadastro e validar o fluxo sem risco ao ambiente oficial.</div><div style="margin-top:12px;display:inline-block;background:var(--pendente-claro);color:#7a5000;padding:5px 10px;border-radius:20px;font-size:11px;font-weight:700;">Entrar em teste</div>
    </div>
    <div style="background:var(--cinza);border:1px solid var(--borda);border-radius:12px;padding:16px;">
      <div style="font-size:22px;">âš™ï¸</div><div style="font-weight:700;margin-top:8px;">RER / GitHub do RER</div><div style="font-size:12px;color:var(--cinza-medio);margin-top:4px;line-height:1.5;">Acessar repositÃ³rio tÃ©cnico, documentaÃ§Ã£o e bases abertas de regularizaÃ§Ã£o.</div><div style="margin-top:12px;display:inline-block;background:var(--verde-claro);color:var(--verde);padding:5px 10px;border-radius:20px;font-size:11px;font-weight:700;">Abrir repositÃ³rio</div>
    </div>
  </div>
</div>
</div>

<!-- FLUXO DE NAVEGAÃ‡ÃƒO -->
<div style="background:var(--cinza);padding:60px 0;border-top:1px solid var(--borda);">
<div class="wrapper">
  <div class="section-tag">Fluxo de navegaÃ§Ã£o</div>
  <div class="section-title">Entrada, sistema correto e saÃ­da</div>
  <div class="section-sub">A plataforma mostra o prÃ³ximo passo e leva o usuÃ¡rio ao site complementar adequado.</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;">
    <div class="diag-panel">
      <div class="diag-panel-header" style="background:var(--verde-escuro);"><span>1</span><h4>O que vocÃª precisa?</h4></div>
      <div class="diag-body">
        <div class="diag-row"><span class="diag-label">Consultar imÃ³vel</span><span class="badge-ok">Consulta PÃºblica</span></div>
        <div class="diag-row"><span class="diag-label">Acompanhar pendÃªncia</span><span class="badge-warn">Painel RegularizaÃ§Ã£o</span></div>
        <div class="diag-row"><span class="diag-label">Ver titularidade</span><span class="badge-ok">Meu ImÃ³vel Rural</span></div>
        <div class="diag-row"><span class="diag-label">Validar base</span><span class="badge-ok">SNIF</span></div>
      </div>
    </div>
    <div class="diag-panel">
      <div class="diag-panel-header" style="background:var(--azul);"><span>2</span><h4>O sistema responde</h4></div>
      <div class="diag-body">
        <div class="loading-state"><div class="spinner"></div>Identificando fluxo correto...</div>
        <div class="diag-alert" style="background:#eef5ff;border-color:#b8d0ff;color:#1a4a8b;"><strong>Encaminhamento sugerido</strong>Abra o mÃ³dulo prÃ©-preenchido para revisar dados do imÃ³vel e evitar duplicidade.</div>
      </div>
    </div>
    <div class="diag-panel">
      <div class="diag-panel-header" style="background:var(--amarelo);"><span>3</span><h4>PrÃ³ximo passo</h4></div>
      <div class="diag-body">
        <button class="diag-next" style="margin-top:0;">Abrir sistema complementar</button>
        <div class="diag-row" style="margin-top:10px;"><span class="diag-label">Alternativa offline</span><span class="badge-ok">MÃ³dulo Offline</span></div>
        <div class="diag-row"><span class="diag-label">Ambiente de testes</span><span class="badge-warn">SimulaÃ§Ã£o segura</span></div>
      </div>
    </div>
  </div>
</div>
</div>

<!-- ECOSSISTEMA -->
<div id="ecossistema" class="eco-section">
<div class="wrapper">
  <div class="section-tag">IntegraÃ§Ã£o com o ecossistema</div>
  <div class="section-title">Camada sobre o CAR â€” nÃ£o substituto</div>
  <div class="section-sub">A plataforma respeita e potencializa os sistemas oficiais existentes.</div>
  <div class="eco-grid">
    <div class="eco-diagram">
      <div class="eco-center">
        <div class="eco-logo">ðŸ—ºï¸</div>
        <h3>CARtografia CidadÃ£</h3>
        <p>Camada de orientaÃ§Ã£o, mapeamento e validaÃ§Ã£o</p>
      </div>
      <div class="eco-nodes">
        <div class="eco-node"><div class="eco-node-icon">ðŸ–¥ï¸</div><div><div class="node-name">MÃ³dulo PrÃ©-Preenchido</div><div class="node-sub">INCRA + Receita Federal</div></div></div>
        <div class="eco-node"><div class="eco-node-icon">ðŸ’¾</div><div><div class="node-name">MÃ³dulo Offline v3.5</div><div class="node-sub">Cadastro sem internet</div></div></div>
        <div class="eco-node"><div class="eco-node-icon">ðŸ‘¤</div><div><div class="node-name">Central do ProprietÃ¡rio</div><div class="node-sub">GestÃ£o de cadastros</div></div></div>
        <div class="eco-node"><div class="eco-node-icon">ðŸ”</div><div><div class="node-name">Consulta PÃºblica</div><div class="node-sub">TransparÃªncia SICAR</div></div></div>
        <div class="eco-node"><div class="eco-node-icon">ðŸ“Š</div><div><div class="node-name">Painel RegularizaÃ§Ã£o</div><div class="node-sub">Status PRA / RER</div></div></div>
        <div class="eco-node"><div class="eco-node-icon">ðŸŒ³</div><div><div class="node-name">SNIF</div><div class="node-sub">InventÃ¡rio florestal</div></div></div>
        <div class="eco-node"><div class="eco-node-icon">ðŸ¡</div><div><div class="node-name">Meu ImÃ³vel Rural</div><div class="node-sub">Painel dados INCRA</div></div></div>
        <div class="eco-node"><div class="eco-node-icon">âš™ï¸</div><div><div class="node-name">RER / GitHub RER</div><div class="node-sub">RegularizaÃ§Ã£o cÃ³digo aberto</div></div></div>
      </div>
      <div class="eco-connector">â†• Todos os dados trafegam via WFS/WMS e APIs abertas</div>
    </div>
    <div class="eco-desc">
      <h3>Por que isso importa para o produtor?</h3>
      <p>Hoje, o produtor rural precisa navegar sozinho entre pelo menos 8 sistemas diferentes do ecossistema do CAR, sem saber qual usar para cada situaÃ§Ã£o. CARtografia CidadÃ£ Ã© a camada de orientaÃ§Ã£o que elimina essa fricÃ§Ã£o.</p>
      <p>A plataforma nÃ£o duplica dados â€” ela lÃª e escreve nos sistemas existentes, garantindo que toda informaÃ§Ã£o continue centralizada no SICAR.</p>
      <ul class="eco-list">
        <li>Identifica o sistema correto para cada perfil e necessidade</li>
        <li>PrÃ©-valida dados antes do envio para reduzir rejeiÃ§Ãµes no OEMA</li>
        <li>Permite uso offline em campo, sincronizando quando hÃ¡ conexÃ£o</li>
        <li>ExpÃµe dados do SICAR via GeoJSON, GeoPackage, WFS e WMS para terceiros</li>
        <li>Respeita fluxos oficiais e base legal do CÃ³digo Florestal (Lei 12.651/2012)</li>
      </ul>
    </div>
  </div>
</div>
</div>

<!-- DIAGNÃ“STICO -->
<div id="diagnostico" class="diag-section">
<div class="wrapper">
  <div class="section-tag">Exemplo de uso real</div>
  <div class="section-title">DiagnÃ³stico de imÃ³vel rural</div>
  <div class="section-sub">Como a plataforma apresenta resultados â€” nÃ£o texto abstrato, mas extrato prÃ¡tico com aÃ§Ãµes.</div>
  <div class="diag-grid">

    <div>
      <div class="diag-panel">
        <div class="diag-panel-header">
          <span>ðŸ“‹</span>
          <h4>DiagnÃ³stico Ambiental â€” ImÃ³vel MG-1234567</h4>
          <div class="status-pill">Em anÃ¡lise</div>
        </div>
        <div class="diag-body">
          <div class="progress-bar"><div class="progress-fill" style="width:82%"></div></div>
          <div style="font-size:11px;color:var(--cinza-medio);margin-bottom:12px;">82% de conformidade ambiental verificada pelo SICAR</div>
          <div class="diag-row"><span class="diag-label">Reserva Legal declarada</span><span class="badge-ok">âœ“ Conforme</span></div>
          <div class="diag-row"><span class="diag-label">APP de curso d'Ã¡gua</span><span class="badge-erro">âœ— PendÃªncia</span></div>
          <div class="diag-row"><span class="diag-label">MÃ³dulo cadastral</span><span class="badge-ok">âœ“ PrÃ©-preenchido</span></div>
          <div class="diag-row"><span class="diag-label">ValidaÃ§Ã£o OEMA</span><span class="badge-warn">â³ Aguardando</span></div>
          <div class="diag-row"><span class="diag-label">SNCR / INCRA</span><span class="badge-ok">âœ“ Vinculado</span></div>
          <div class="diag-row"><span class="diag-label">AdesÃ£o ao PRA</span><span class="badge-warn">â³ NecessÃ¡ria</span></div>
          <div class="diag-alert">
            <strong>âš  AÃ§Ã£o necessÃ¡ria: APP do cÃ³rrego Arvoredo</strong>
            3,2 ha de Ãrea de PreservaÃ§Ã£o Permanente com supressÃ£o identificada pela ortofoto do drone. Prazo para regularizaÃ§Ã£o via PRA: <strong>90 dias</strong>.
          </div>
          <button class="diag-next">â†’ Iniciar regularizaÃ§Ã£o no PRA</button>
        </div>
      </div>
    </div>

    <div>
      <div class="diag-panel">
        <div class="diag-panel-header">
          <span>ðŸ›©</span>
          <h4>Upload de Ortofoto â€” Protocolo de Campo</h4>
          <div class="status-pill">Aguardando upload</div>
        </div>
        <div class="diag-body">
          <div class="diag-row"><span class="diag-label">AssociaÃ§Ã£o solicitante</span><span style="font-size:13px;font-weight:600;">Cooperativa Serra Verde</span></div>
          <div class="diag-row"><span class="diag-label">Drone utilizado</span><span style="font-size:13px;font-weight:600;">DJI Mini 4 Pro</span></div>
          <div class="diag-row"><span class="diag-label">Protocolo de voo</span><span class="badge-ok">âœ“ PadrÃ£o SICAR</span></div>
          <div class="diag-upload-area">
            <div style="font-size:28px;">ðŸ“</div>
            <p>Arraste os arquivos .TIF, .GPKG ou .GeoJSON<br>ou clique para selecionar</p>
          </div>
          <div class="loading-state">
            <div class="spinner"></div>
            Validando metadados de georreferenciamento...
          </div>
          <div class="diag-row" style="margin-top:10px;"><span class="diag-label">Destino dos dados</span><span style="font-size:12px;color:var(--verde);font-weight:600;">â†’ Base nacional de ortofotos SICAR</span></div>
          <div class="diag-row"><span class="diag-label">Formato de saÃ­da</span><span style="font-size:12px;">GeoJSON Â· GeoPackage Â· WMS</span></div>
        </div>
      </div>
      <div class="diag-panel" style="margin-top:16px;">
        <div class="diag-panel-header" style="background:var(--azul);">
          <span>ðŸŒ¿</span>
          <h4>TerritÃ³rio Quilombola â€” ValidaÃ§Ã£o Participativa</h4>
          <div class="status-pill">Mapeamento ativo</div>
        </div>
        <div class="diag-body">
          <div class="diag-row"><span class="diag-label">Comunidade</span><span style="font-size:13px;font-weight:600;">Quilombo CÃ³rrego do Meio / MG</span></div>
          <div class="diag-row"><span class="diag-label">Metodologia</span><span class="badge-ok">âœ“ Validada IBGE</span></div>
          <div class="diag-row"><span class="diag-label">TÃ©cnico responsÃ¡vel</span><span style="font-size:13px;">Eng. Florestal credenciado OEMA</span></div>
          <div class="diag-row"><span class="diag-label">PolÃ­gono no SICAR</span><span class="badge-warn">â³ Em revisÃ£o</span></div>
          <button class="diag-next" style="background:var(--azul);">â†’ Abrir mapa participativo</button>
        </div>
      </div>
    </div>

  </div>
</div>
</div>

<!-- API -->
<div id="api" class="api-section">
<div class="wrapper">
  <div class="section-tag">API Aberta de Dados Geoespaciais</div>
  <div class="section-title" style="color:white;">Dados do SICAR para pesquisadores, startups e prefeituras</div>
  <div class="section-sub">Todos os dados publicados em formatos abertos com atualizaÃ§Ã£o contÃ­nua.</div>
  <div class="api-grid">
    <div>
      <div class="code-block">
<span class="code-comment"># Consultar polÃ­gono de imÃ³vel rural</span>
<span class="code-url">GET</span> /api/v1/imovel/<span class="code-val">{codigo_car}</span>
<span class="code-comment">
# Resposta</span>
{
  <span class="code-key">"codigo_car"</span>: <span class="code-val">"MG-1234567-ABCDE"</span>,
  <span class="code-key">"area_ha"</span>: <span class="code-val">48.3</span>,
  <span class="code-key">"status_analise"</span>: <span class="code-val">"em_analise"</span>,
  <span class="code-key">"conformidade"</span>: <span class="code-val">0.82</span>,
  <span class="code-key">"geometry"</span>: {
    <span class="code-key">"type"</span>: <span class="code-val">"Polygon"</span>,
    <span class="code-key">"coordinates"</span>: <span class="code-val">[...]</span>
  },
  <span class="code-key">"camadas"</span>: {
    <span class="code-key">"reserva_legal"</span>: <span class="code-val">true</span>,
    <span class="code-key">"app_pendente"</span>: <span class="code-val">true</span>,
    <span class="code-key">"ortofoto_drone"</span>: <span class="code-val">true</span>
  }
}
      </div>
    </div>
    <div>
      <ul class="api-endpoints">
        <li><span class="method">GET</span><div><div class="endpoint-path">/api/v1/imovel/{codigo_car}</div><div class="endpoint-desc">PolÃ­gono, atributos e status de anÃ¡lise do imÃ³vel</div></div></li>
        <li><span class="method">GET</span><div><div class="endpoint-path">/api/v1/municipio/{ibge}/imoveis</div><div class="endpoint-desc">Listagem de imÃ³veis rurais por municÃ­pio (GeoJSON/GeoPackage)</div></div></li>
        <li><span class="method">GET</span><div><div class="endpoint-path">/wms?layer=ortofotos_drone</div><div class="endpoint-desc">Camada WMS de ortofotos coletadas por drones</div></div></li>
        <li><span class="method">GET</span><div><div class="endpoint-path">/api/v1/territorios/tradicionais</div><div class="endpoint-desc">PolÃ­gonos de territÃ³rios quilombolas, ribeirinhos e indÃ­genas</div></div></li>
        <li><span class="method post">POST</span><div><div class="endpoint-path">/api/v1/ortofoto/upload</div><div class="endpoint-desc">Envio de ortofoto com metadados de georreferenciamento</div></div></li>
        <li><span class="method post">POST</span><div><div class="endpoint-path">/api/v1/poligono/validar</div><div class="endpoint-desc">SubmissÃ£o de polÃ­gono para fila de revisÃ£o tÃ©cnica distribuÃ­da</div></div></li>
      </ul>
      <div style="margin-top:20px;padding:14px;background:rgba(255,255,255,0.05);border-radius:8px;border:1px solid rgba(255,255,255,0.1);">
        <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-bottom:6px;">Formatos suportados</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <span style="background:rgba(125,232,160,0.1);color:#7de8a0;padding:4px 10px;border-radius:5px;font-size:12px;font-weight:700;">GeoJSON</span>
          <span style="background:rgba(125,232,160,0.1);color:#7de8a0;padding:4px 10px;border-radius:5px;font-size:12px;font-weight:700;">GeoPackage</span>
          <span style="background:rgba(125,232,160,0.1);color:#7de8a0;padding:4px 10px;border-radius:5px;font-size:12px;font-weight:700;">WFS</span>
          <span style="background:rgba(125,232,160,0.1);color:#7de8a0;padding:4px 10px;border-radius:5px;font-size:12px;font-weight:700;">WMS</span>
          <span style="background:rgba(125,232,160,0.1);color:#7de8a0;padding:4px 10px;border-radius:5px;font-size:12px;font-weight:700;">Shapefile</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<!-- CREDIBILIDADE -->
<div class="cred-section">
<div class="wrapper">
  <div class="section-tag">Credibilidade e base legal</div>
  <div class="section-title">SoluÃ§Ã£o construÃ­da sobre os fluxos oficiais do CAR</div>
  <div class="cred-grid">
    <div class="cred-card">
      <div class="cred-icon">âš–ï¸</div>
      <div>
        <div class="cred-title">Base legal</div>
        <div class="cred-text">Alinhado ao CÃ³digo Florestal (Lei 12.651/2012), Decreto 7.830/2012 e InstruÃ§Ã£o Normativa MMA nÂº 2/2014</div>
      </div>
    </div>
    <div class="cred-card">
      <div class="cred-icon">ðŸ›ï¸</div>
      <div>
        <div class="cred-title">NÃ£o substitui o SICAR</div>
        <div class="cred-text">Toda informaÃ§Ã£o gerada retorna ao SICAR. A plataforma atua como camada de orientaÃ§Ã£o e prÃ©-validaÃ§Ã£o</div>
      </div>
    </div>
    <div class="cred-card">
      <div class="cred-icon">ðŸ“±</div>
      <div>
        <div class="cred-title">Pensada para o campo</div>
        <div class="cred-text">Interface e app desenhados para baixa familiaridade digital, uso offline e conexÃ£o instÃ¡vel em Ã¡rea rural</div>
      </div>
    </div>
    <div class="cred-card">
      <div class="cred-icon">ðŸ”“</div>
      <div>
        <div class="cred-title">CÃ³digo aberto</div>
        <div class="cred-text">RepositÃ³rio pÃºblico no GitHub (padrÃ£o RER), auditÃ¡vel por OEMAs, pesquisadores e pela sociedade civil</div>
      </div>
    </div>
  </div>
</div>
</div>

<!-- FOOTER -->
<footer>
  <strong>CARtografia CidadÃ£</strong> â€” Mapeamento Participativo com Drones e Comunidades<br>
  Proposta desenvolvida para o <strong>haCARthon 2026</strong> Â· SFB / MinistÃ©rio do Meio Ambiente
  <div class="footer-links">
    <a href="#">car.gov.br</a>
    <a href="#">SICAR</a>
    <a href="#">Painel de RegularizaÃ§Ã£o</a>
    <a href="#">Consulta PÃºblica</a>
    <a href="#">API Docs</a>
    <a href="#">GitHub RER</a>
  </div>
  <div class="footer-badge">ðŸŒ¿ Alinhado ao CÃ³digo Florestal Â· Lei 12.651/2012</div>
</footer>

</body>
</html
