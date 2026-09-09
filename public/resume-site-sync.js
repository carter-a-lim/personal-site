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
    'Treasurer and Embedded Systems Lead for Cal Poly Mechatronics Club; handle budgeting, teach Arduino/Circuitry/C++, and guide PCB design.',
    'Dean\'s List (x2) at Cal Poly; current affiliations include VocaView, Mechatronics Club, and Mustang Market.',
    '1st place in the 2025 Cal Poly Elevator Pitch Competition with Communicare; secured $1,000 in seed funding/prize money.',
    'Winner of the 2026 Cal Poly x Ironsite Construction Innovation Challenge for HotHead; awarded $10,000.'
  ];

  const projects = [];

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
