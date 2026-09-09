(() => {
  const events = [
    {
      date: 'JUN 2026 - AUG 2026',
      company: 'Deep24 (YC W24) | Remote',
      role: 'Builder Fellow',
      bullets: [
        'Developed an iOS app and mobile Safari extension using React Native, Xcode, Expo, and EAS.',
        'Served as head of marketing and outreach while leading development.'
      ]
    },
    {
      date: 'NOV 2025 - JUN 2026',
      company: 'Spread Goodness(R) | Remote',
      role: 'Software Engineering Intern',
      bullets: [
        'Created an early-adopter payment system with Stripe API, Google Apps Script/Sheets, and Firebase for an education conference pilot.',
        'Led a teacher and school dashboard using Docker; optimized Firebase calls to reduce usage by 10x and separated UI from logic.',
        'Built and deployed PWA functionality for mobile use, including a mobile UI/CSS revamp and optimized app assets.'
      ]
    },
    {
      date: 'OCT 2025 - MAY 2026',
      company: 'Calpoly CodeBox | San Luis Obispo, CA',
      role: 'Software Engineer',
      bullets: [
        'Engineered a serverless username generator with Supabase Edge Functions for low-latency onboarding suggestions.',
        'Designed and optimized PostgreSQL queries for fast availability checks and collision prevention.'
      ]
    },
    {
      date: 'JAN 2026 - PRESENT',
      company: 'Mustang Market | mustang-market.com',
      role: 'Co-Founder & Software Engineer',
      bullets: [
        'Led a team of 3 to create an online student marketplace website and mobile apps with React, Firebase, and Vercel.',
        'Used Firebase Storage and Cloud Functions for direct messaging and listing systems.',
        'Launched to 3000+ visitors and 500+ users in the first 10 days; social posts reached 50,000+ views.'
      ]
    },
    {
      date: 'JUL 2025 - PRESENT',
      company: 'VocaView | vocaview.com',
      role: 'Founder & Lead Developer',
      bullets: [
        'Built and shipped a Chrome extension, mobile app, and website using Cloudflare Pages, React, Supabase, and a self-hosted VPS backend.',
        'Developed subtitle translation infrastructure with Supabase Edge Functions and Groq, including fallback logic, caching, rate limits, and quota enforcement.',
        'Reached 10 subscriptions ($200+) within the first two weeks of marketing.'
      ]
    },
  ];

  const achievements = [
    '1st place in the 2025 Cal Poly Elevator Pitch Competition with Communicare; secured $1,000 in seed funding/prize money.',
    'Won $10,000 at the 2026 Cal Poly x Ironsite Construction Innovation Challenge with HotHead.',
    'Treasurer and Embedded Systems Lead for Cal Poly Mechatronics Club; handle budgeting, teach Arduino/Circuitry/C++, and guide PCB design.',
    'Dean\'s List (x2) at Cal Poly; current affiliations include VocaView, Mechatronics Club, and Mustang Market.'
  ];

  const projects = [];

  const sideQuestArchives = [
    {
      title: 'DISK GOLF ROBOT CHALLENGE',
      role: 'VEX ROBOT / MECHANICAL BUILD',
      photo: 'sidequests/robot/IMG_6041.jpg',
      log: 'Designed and built a custom VEX-style robot for a disk-golf-inspired challenge: score disks by shooting them into elevated hoops. Iterated on the intake, launcher, and drive system through repeated test runs.'
    },
    {
      title: 'CAL POLY TOURNAMENT ORGANIZER',
      role: 'EVENT PLANNING / MARKETING',
      photo: 'IMG_0508.jpg',
      log: 'Planned, organized, and marketed Cal Poly\'s first 2v2 Clash Royale tournament solo. Recruited 12 teams and 30+ attendees, created the promotional campaign, managed brackets and event logistics, and resolved live issues during the tournament.',
      links: [['EVENT VIDEO', 'https://www.youtube.com/watch?v=VkPxaFniXcs']]
    },
    {
      title: 'MUSTANG MARKET',
      role: 'BUILD + GROWTH',
      photo: 'IMG_6904.jpg',
      log: 'Built and launched Mustang Market with a team of 3 over a two-week sprint, reaching 3,000+ visitors and 500+ users in the first 10 days.',
      links: [['LIVE SITE', 'https://mustang-market.com']]
    },
    {
      title: 'VOCAVIEW (SAAS)',
      role: 'FOUNDER / FULL-STACK',
      photo: 'vocaview-landing.png',
      log: 'Deployed a browser extension and web app with Vite, Supabase, Render, and Vercel, then iterated on onboarding and early-user growth.',
      links: [['LIVE SITE', 'https://vocaview.com']]
    },
    {
      title: 'IRONSITE INNOVATION CHALLENGE',
      role: 'THIRD PLACE / $10,000 AWARD',
      photo: 'sidequests/ironsite-challenge.png',
      log: 'Placed third in the 2026 Cal Poly x Ironsite Construction Innovation Challenge with HotHead and earned a $10,000 award for the team’s construction-tech concept.',
      links: [['LINKEDIN POST / VIDEO', 'https://www.linkedin.com/posts/last-october-we-handed-100-students-a-real-ugcPost-7468699219684638720-SqZL/']]
    },
    {
      title: 'ELEVATOR PITCH COMPETITION',
      role: '1ST PLACE / COMMUNICARE',
      photo: 'signal-2026-02-27-164119.jpeg',
      log: 'Won the 2025 Cal Poly Elevator Pitch Competition with Communicare, an AI communication coach. Delivered a 90-second pitch, defended the product in live Q&A, and secured $1,000 in seed funding and prize money.',
      links: [['PITCH VIDEO', 'https://youtu.be/fwE4Xvotm8s']]
    },
    {
      title: 'MECHATRONICS CLUB',
      role: 'EMBEDDED SYSTEMS LEAD',
      photo: 'sidequests/mechatronics-club.png',
      log: 'Serve as Treasurer and Embedded Systems Lead for Cal Poly Mechatronics Club. Manage budgeting, teach Arduino/Circuitry/C++, and guide members through PCB design and hands-on hardware builds.',
      links: []
    },
  ];

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && node.textContent !== value) node.textContent = value;
  };

  const renderEvent = (event) => `
    <article class="timeline-event" data-resume-sync="true">
      <div class="event-year">${event.date}</div>
      <div class="event-card">
        <h3>${event.company}</h3>
        <p>${event.role}</p>
        ${event.bullets.map((bullet) => `<span>${bullet}</span>`).join('')}
      </div>
    </article>
  `;

  const renderProject = (project) => `
    <article class="sideproject-card" data-resume-sync="true">
      <div class="sideproject-head">
        <h4>${project.title}</h4>
        <span class="sideproject-status ${project.statusClass}">${project.status}</span>
      </div>
      ${project.bullets.map((bullet) => `<p>${bullet}</p>`).join('')}
    </article>
  `;

  const renderSideQuestArchive = (index) => {
    const archive = sideQuestArchives[index];
    return `
      <div class="sidequest-archive-shell" data-resume-sync="true">
        <div class="sidequest-tabs" role="tablist" aria-label="Side quest archive">
          ${sideQuestArchives.map((item, itemIndex) => `
            <button class="sidequest-tab ${itemIndex === index ? 'is-active' : ''}" type="button" role="tab" aria-selected="${itemIndex === index}" data-sidequest-index="${itemIndex}">
              <span class="sidequest-tab-index">${String(itemIndex + 1).padStart(2, '0')}</span>
              <span>${item.title}</span>
            </button>
          `).join('')}
        </div>
        <article class="sidequest-archive-panel">
          <div class="sidequest-archive-photo">
            <img src="${archive.photo}" alt="${archive.title}" />
            <span class="sidequest-archive-stamp">ARCHIVE // ${String(index + 1).padStart(2, '0')}</span>
          </div>
          <div class="sidequest-archive-copy">
            <p class="sidequest-archive-role">${archive.role}</p>
            <h3>${archive.title}</h3>
            <p>${archive.log}</p>
            ${archive.links?.length ? `<div class="sidequest-archive-links">${archive.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`).join('')}</div>` : ''}
          </div>
        </article>
      </div>
    `;
  };

  const sync = () => {
    const profileStats = document.querySelector('.stand-stats-info');
    if (profileStats && profileStats.dataset.resumeSync !== 'true') {
      profileStats.innerHTML = `
        <p><strong>DESIGNATION: </strong>Carter Lim</p>
        <p><strong>AFFILIATION: </strong>Cal Poly SLO - Computer Engineering | Class of 2029</p>
        <p><strong>SPECIALIZATION: </strong>Mobile Apps, Backend Systems, AI Tools</p>
        <p><strong>STATUS: </strong><span style="color:#00ff66">● ONLINE</span></p>
      `;
      profileStats.dataset.resumeSync = 'true';
    }

    setText('.profile-desc', 'Computer engineering student building mobile apps, developer tools, and AI-powered products from prototype to launch.');
    setText('.profile-body .badge', 'BUILDER - FOUNDER - SYSTEMS ENGINEER');
    setText('.timeline-panel .section-heading', 'EXPERIENCE');

    const feedLabel = document.querySelector('.timeline-summary .timeline-summary-title');
    if (feedLabel) feedLabel.style.display = 'none';

    const missionLabel = document.querySelector('.timeline-panel > .section-label');
    if (missionLabel) missionLabel.style.display = 'none';

    const timelineSummary = document.querySelector('.timeline-summary');
    if (timelineSummary) timelineSummary.style.display = 'none';

    const feed = document.querySelector('.timeline-feed');
    if (feed && feed.dataset.resumeSync !== 'true') {
      const track = feed.querySelector('.timeline-track');
      feed.innerHTML = '';
      if (track) feed.appendChild(track);
      feed.insertAdjacentHTML('beforeend', events.map(renderEvent).join(''));
      feed.dataset.resumeSync = 'true';
    }

    const sideList = document.querySelector('.sideproject-list');
    if (sideList && sideList.dataset.resumeSync !== 'true') {
      sideList.innerHTML = projects.map(renderProject).join('');
      sideList.style.display = 'none';
      sideList.dataset.resumeSync = 'true';
    }

    const questsGrid = document.querySelector('.sidequests-panel .quests-grid');
    if (questsGrid && questsGrid.dataset.resumeSync !== 'true') {
      questsGrid.innerHTML = renderSideQuestArchive(0);
      questsGrid.dataset.resumeSync = 'true';
      questsGrid.addEventListener('click', (event) => {
        const tab = event.target.closest('[data-sidequest-index]');
        if (!tab) return;
        const index = Number(tab.dataset.sidequestIndex);
        if (!Number.isInteger(index) || !sideQuestArchives[index]) return;
        questsGrid.innerHTML = renderSideQuestArchive(index);
      });
    }

    const sideRail = document.querySelector('.timeline-sideprojects');
    const sideTitle = sideRail?.querySelector(':scope > .timeline-summary-title');
    if (sideTitle && sideTitle.textContent !== 'LEADERSHIP & ACHIEVEMENTS') {
      sideTitle.textContent = 'LEADERSHIP & ACHIEVEMENTS';
    }
    if (sideRail && !sideRail.querySelector('.resume-achievement-block')) {
      sideRail.insertAdjacentHTML('beforeend', `
        <section class="resume-achievement-block" aria-label="Leadership and achievements">
          <ul class="resume-achievement-list">
            ${achievements.map((achievement) => `<li>${achievement}</li>`).join('')}
          </ul>
        </section>
      `);
    }

    const links = document.querySelector('.timeline-links');
    const achievementBlock = sideRail?.querySelector('.resume-achievement-block');
    if (links && achievementBlock && !achievementBlock.contains(links)) {
      achievementBlock.appendChild(links);
    }
    const resumeButton = document.querySelector('.data-shard-btn');
    if (resumeButton && achievementBlock && !achievementBlock.contains(resumeButton)) {
      achievementBlock.appendChild(resumeButton);
    }

    if (!document.getElementById('resume-sync-styles')) {
      const style = document.createElement('style');
      style.id = 'resume-sync-styles';
      style.textContent = `
        .resume-achievement-block {
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(0, 240, 255, 0.45);
        }
        .resume-achievement-list {
          display: grid;
          gap: 0.7rem;
          margin: 0.9rem 0 0;
          padding: 0;
          list-style: none;
          color: rgba(232, 230, 227, 0.92);
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.98rem;
          font-weight: 600;
          line-height: 1.3;
        }
        .resume-achievement-list li {
          position: relative;
          padding: 0.7rem 0.8rem;
          border: 1px solid rgba(252, 238, 9, 0.42);
          border-left: 4px solid var(--cyber-yellow);
          background: linear-gradient(90deg, rgba(252, 238, 9, 0.13), rgba(0, 240, 255, 0.04));
          box-shadow: inset 0 0 18px rgba(252, 238, 9, 0.06);
        }
        .resume-achievement-list li::before {
          content: none;
        }
        .resume-achievement-block .timeline-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-top: 0.9rem;
        }
        .resume-achievement-block .data-shard-btn {
          display: block;
          width: 100%;
          margin-top: 0.65rem;
        }
        .timeline-panel {
          padding-top: clamp(5.5rem, 10vh, 8rem) !important;
        }
        .timeline-layout {
          grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr) !important;
        }
        .timeline-event {
          grid-template-columns: 108px minmax(0, 1fr) !important;
        }
        .event-year {
          overflow-wrap: anywhere;
        }
        .sidequests-panel .quests-grid {
          pointer-events: auto;
          display: block;
          position: static;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          transform: none !important;
        }
        .sidequest-archive-shell {
          display: grid;
          gap: 0.8rem;
          width: min(100%, 1100px);
        }
        .sidequest-tabs {
          display: flex;
          gap: 0.35rem;
          overflow-x: auto;
          padding: 0.25rem 0.25rem 0.45rem;
          scrollbar-width: none;
        }
        .sidequest-tabs::-webkit-scrollbar {
          display: none;
        }
        .sidequest-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          flex: 0 0 auto;
          border: 1px solid rgba(0, 240, 255, 0.32);
          border-bottom: 2px solid rgba(0, 240, 255, 0.52);
          background: rgba(1, 12, 20, 0.82);
          color: rgba(232, 230, 227, 0.72);
          padding: 0.55rem 0.7rem;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.64rem;
          letter-spacing: 0.08rem;
          white-space: nowrap;
          cursor: pointer;
          transition: color 180ms ease, border-color 180ms ease, background 180ms ease;
        }
        .sidequest-tab:hover,
        .sidequest-tab.is-active {
          color: var(--deep-black);
          border-color: var(--cyber-yellow);
          background: var(--cyber-yellow);
        }
        .sidequest-tab-index {
          opacity: 0.65;
          font-size: 0.56rem;
        }
        .sidequest-archive-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
          column-gap: clamp(1rem, 2vw, 1.5rem);
          min-height: min(52vh, 500px);
          border: 1px solid rgba(0, 240, 255, 0.42);
          background: transparent;
          box-shadow: none;
          clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
        }
        .sidequest-archive-photo {
          position: relative;
          grid-column: 2;
          grid-row: 1;
          z-index: 1;
          min-height: 320px;
          overflow: hidden;
          border-right: 1px solid rgba(0, 240, 255, 0.35);
          background: #020816;
        }
        .sidequest-archive-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center top;
          filter: saturate(0.9) contrast(1.05);
        }
        .sidequest-archive-photo::after {
          content: none;
        }
        .sidequest-archive-stamp {
          position: absolute;
          left: 0.7rem;
          bottom: 0.7rem;
          padding: 0.25rem 0.45rem;
          border: 1px solid rgba(252, 238, 9, 0.72);
          background: rgba(2, 8, 18, 0.78);
          color: var(--cyber-yellow);
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.08rem;
        }
        .sidequest-archive-copy {
          grid-column: 1;
          grid-row: 1;
          position: relative;
          isolation: isolate;
          z-index: 2;
          overflow: visible;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(2rem, 4vw, 4rem);
        }
        .sidequest-archive-copy::before {
          content: '';
          position: absolute;
          z-index: 0;
          inset: clamp(-1.5rem, -2vw, -1rem);
          pointer-events: none;
          background: radial-gradient(ellipse at 50% 50%, rgba(1, 10, 18, 0.98) 0%, rgba(1, 10, 18, 0.88) 42%, rgba(1, 10, 18, 0.46) 68%, rgba(1, 10, 18, 0.12) 84%, transparent 100%);
        }
        .sidequest-archive-copy > * {
          position: relative;
        }
        .sidequest-archive-role {
          margin: 0 0 0.7rem;
          color: var(--cyber-yellow);
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.12rem;
        }
        .sidequest-archive-copy h3 {
          margin: 0 0 1rem;
          color: #aef6ff;
          font-family: Orbitron, sans-serif;
          font-size: clamp(1.1rem, 2.2vw, 1.8rem);
          letter-spacing: 0.08rem;
        }
        .sidequest-archive-copy > p:last-child {
          margin: 0;
          max-width: 34rem;
          color: rgba(232, 230, 227, 0.82);
          font-family: Rajdhani, sans-serif;
          font-size: clamp(1rem, 1.5vw, 1.18rem);
          line-height: 1.55;
        }
        .sidequest-archive-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-top: 1.6rem;
        }
        .sidequest-archive-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 10rem;
          min-height: 3.25rem;
          padding: 0.85rem 1.25rem;
          border: 1px solid rgba(0, 240, 255, 0.58);
          color: #9cf4ff;
          background: rgba(0, 12, 20, 0.9);
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(0.72rem, 1vw, 0.9rem);
          letter-spacing: 0.12rem;
          text-decoration: none;
          transition: transform 180ms ease, color 180ms ease, background 180ms ease, border-color 180ms ease;
        }
        .sidequest-archive-links a:hover {
          transform: translateY(-2px);
          color: #0b0f14;
          background: linear-gradient(90deg, #00f0ff, #8ff7ff);
          border-color: rgba(0, 240, 255, 0.85);
        }
        @media (max-width: 900px) {
          .timeline-panel {
            padding-top: max(6.5rem, calc(env(safe-area-inset-top) + 5.5rem)) !important;
          }
          .timeline-layout {
            grid-template-columns: 1fr !important;
          }
          .timeline-event {
            grid-template-columns: 100px minmax(0, 1fr) !important;
          }
          .sidequest-archive-panel {
            grid-template-columns: 1fr;
            row-gap: 0.8rem;
          }
          .sidequest-archive-photo {
            grid-column: 1;
            grid-row: auto;
            min-height: 220px;
            max-height: 38vh;
            border-right: 0;
            border-bottom: 1px solid rgba(0, 240, 255, 0.35);
          }
          .sidequest-archive-copy {
            grid-column: 1;
            grid-row: auto;
          }
          .sidequest-archive-copy::before {
            inset: 0;
          }
          .sidequest-archive-photo::after {
            content: none;
          }
        }
      `;
      document.head.appendChild(style);
    }
  };

  sync();
  let syncQueued = false;
  new MutationObserver(() => {
    if (syncQueued) return;
    syncQueued = true;
    window.requestAnimationFrame(() => {
      syncQueued = false;
      sync();
    });
  }).observe(document.body, { childList: true, subtree: true });
})();
