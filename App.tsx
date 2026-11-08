import React from 'react';

const MaintenanceIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 64 64" className="maintenance-icon">
    <path d="M13 44.5c0-2.6 2.1-4.7 4.7-4.7h28.6c2.6 0 4.7 2.1 4.7 4.7v3.2c0 3-2.4 5.4-5.4 5.4H18.4c-3 0-5.4-2.4-5.4-5.4v-3.2Z" fill="currentColor" opacity=".16" />
    <path d="M15 40.2c0-1.6 1.3-2.9 2.9-2.9h28.2c1.6 0 2.9 1.3 2.9 2.9v7.2c0 2.8-2.2 5-5 5H20c-2.8 0-5-2.2-5-5v-7.2Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <path d="M19 37c0-9.2 5.8-16.5 13-16.5S45 27.8 45 37M26 20.7v-4.2m12 4.2v-4.2M32 13v-3m-9 37h.1m9 0h.1m8.8 0h.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
    <path d="M28 29c1.2-1.2 2.8-1.8 4-1.8s2.8.6 4 1.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" opacity=".65" />
  </svg>
);

const App: React.FC = () => (
  <main className="maintenance-page">
    <style>{`
      :root { color-scheme: light; font-family: 'Manrope', 'Avenir Next', Avenir, sans-serif; background: #f7f5ef; color: #23332b; font-synthesis: none; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; }
      * { box-sizing: border-box; }
      body { margin: 0; min-width: 320px; min-height: 100vh; }
      .maintenance-page { min-height: 100vh; min-height: 100svh; display: flex; flex-direction: column; padding: 28px clamp(20px, 6vw, 88px); background: radial-gradient(ellipse at 50% 44%, #fffdf8 0%, #f7f5ef 70%); }
      .site-header { width: min(100%, 1180px); margin: 0 auto; display: flex; align-items: center; gap: 12px; color: #21382b; }
      .brand-mark { width: 38px; height: 38px; display: grid; place-items: center; border: 1px solid #d6c6a5; border-radius: 50%; color: #a67d3e; font-family: Georgia, serif; font-size: 19px; font-weight: 700; }
      .brand-name { font-family: Georgia, 'Times New Roman', serif; font-size: 17px; font-weight: 700; letter-spacing: .11em; text-transform: uppercase; }
      .maintenance-content { width: min(100%, 680px); margin: auto; padding: 80px 0; text-align: center; }
      .icon-wrap { width: 96px; height: 96px; margin: 0 auto 30px; display: grid; place-items: center; border: 1px solid #e8dfcd; border-radius: 50%; background: #fffdf8; color: #a67d3e; box-shadow: 0 12px 36px rgba(74, 59, 31, .06); }
      .maintenance-icon { width: 58px; height: 58px; }
      .eyebrow { margin: 0 0 18px; color: #a67d3e; font-size: 12px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
      h1 { margin: 0; color: #21382b; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(42px, 7vw, 66px); font-weight: 500; letter-spacing: -.045em; line-height: 1.08; }
      .message { max-width: 530px; margin: 24px auto 0; color: #5d675f; font-size: clamp(16px, 2.2vw, 18px); line-height: 1.8; }
      .apology { margin-top: 12px; color: #5d675f; font-size: 15px; line-height: 1.7; }
      .ornament { width: 48px; height: 1px; margin: 32px auto 0; background: #d3bd91; }
      .site-footer { width: min(100%, 1180px); margin: 0 auto; padding-top: 20px; border-top: 1px solid #e8e4da; color: #83877f; font-size: 12px; letter-spacing: .04em; text-align: center; }
      @media (max-width: 480px) { .maintenance-page { padding: 22px 22px 18px; } .maintenance-content { padding: 56px 0; } .icon-wrap { width: 82px; height: 82px; margin-bottom: 26px; } .maintenance-icon { width: 52px; height: 52px; } .message { margin-top: 19px; } .site-footer { font-size: 11px; } }
      @media (prefers-reduced-motion: no-preference) { .icon-wrap { animation: appear .7s ease-out both; } .maintenance-content h1, .maintenance-content p { animation: appear .7s ease-out both; } .maintenance-content h1 { animation-delay: .08s; } .maintenance-content p { animation-delay: .15s; } @keyframes appear { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } } }
    `}</style>

    <header className="site-header" aria-label="Eman Bakeries">
      <span className="brand-mark" aria-hidden="true">E</span>
      <span className="brand-name">Eman Bakeries</span>
    </header>

    <section className="maintenance-content" aria-labelledby="maintenance-title">
      <div className="icon-wrap"><MaintenanceIcon /></div>
      <p className="eyebrow">A little pause while we improve</p>
      <h1 id="maintenance-title">We’ll be back soon.</h1>
      <p className="message">
        Our website is currently undergoing scheduled maintenance. We’re working to make things better and will be back online as soon as possible.
      </p>
      <p className="apology">We sincerely apologize for any inconvenience.</p>
      <div className="ornament" aria-hidden="true" />
    </section>

    <footer className="site-footer">Thank you for your patience and understanding.</footer>
  </main>
);

export default App;
