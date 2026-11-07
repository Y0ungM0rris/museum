/* =========================================================
   Встроенные иллюстрации (SVG) – показываются, если у слайда
   нет фото или фото не загрузилось. Палитра – пастель/бежевый.
   ========================================================= */
(function () {
  const C = {
    bg1: '#F2E8DA', bg2: '#E3D2BA', ink: '#4A3324', line: '#6B4B35',
    sand: '#D8C3A3', latte: '#C6A47C', clay: '#B9876A', sage: '#AEB596',
    rose: '#DDB7A6', cream: '#FBF6EE', gold: '#C9A26A'
  };
  let uid = 0;

  function wrap(inner, o = {}) {
    const id = 'a' + (++uid);
    const b1 = o.bg1 || C.bg1, b2 = o.bg2 || C.bg2;
    return `<svg class="art" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${o.label || 'Иллюстрация'}">
      <defs>
        <linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${b1}"/><stop offset="1" stop-color="${b2}"/></linearGradient>
        <radialGradient id="${id}r" cx=".5" cy=".38" r=".6"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
        <pattern id="${id}p" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="14" cy="14" r="1.2" fill="${C.line}" opacity=".12"/></pattern>
      </defs>
      <rect width="600" height="800" fill="url(#${id}g)"/>
      <rect width="600" height="800" fill="url(#${id}p)"/>
      <rect width="600" height="800" fill="url(#${id}r)"/>
      <g fill="none" stroke="${C.line}" stroke-opacity=".35">
        <rect x="26" y="26" width="548" height="748" rx="22"/>
        <rect x="38" y="38" width="524" height="724" rx="16" stroke-dasharray="2 7"/>
      </g>
      <g stroke-linecap="round" stroke-linejoin="round">${inner}</g>
    </svg>`;
  }

  const ground = (y = 640) =>
    `<path d="M40 ${y} H560" stroke="${C.line}" stroke-width="3"/>
     <path d="M70 ${y + 22} H530 M110 ${y + 40} H490" stroke="${C.line}" stroke-opacity=".3" stroke-width="2"/>`;

  const windowsRow = (x0, y, n, w, h, gap) => {
    let s = '';
    for (let i = 0; i < n; i++) {
      const x = x0 + i * (w + gap);
      s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${C.cream}" stroke="${C.line}" stroke-width="2.5"/>
            <path d="M${x + w / 2} ${y} V${y + h} M${x} ${y + h * .45} H${x + w}" stroke="${C.line}" stroke-width="1.5" stroke-opacity=".6"/>`;
    }
    return s;
  };

  const HORSE = 'M150 365 C200 333 300 338 360 342 C392 300 402 262 422 236 C434 216 452 202 474 206 L503 216 C518 223 522 242 513 252 L495 263 C481 270 471 282 466 302 C462 332 456 360 446 382 L449 470 C450 500 452 530 456 560 L428 560 C426 530 425 500 424 470 L410 424 C380 432 300 432 252 427 L238 470 C238 500 240 530 242 560 L214 560 C212 530 210 500 210 470 L192 432 C176 470 172 515 178 560 L150 560 C146 520 148 470 155 430 C141 410 140 382 150 365 Z';
  const MANE = 'M424 238 C410 262 398 290 388 318 M436 226 C420 252 410 280 402 306 M448 214 C432 240 422 266 414 292';
  const TAIL = 'M152 368 C120 384 104 432 112 486 C120 456 132 428 152 410';

  const ART = {
    mansion: () => wrap(`
      ${ground(620)}
      <path d="M90 620 V360 H510 V620" fill="${C.sand}" stroke="${C.line}" stroke-width="3"/>
      <path d="M70 360 H530 L510 336 H90 Z" fill="${C.latte}" stroke="${C.line}" stroke-width="3"/>
      <path d="M220 336 V250 H380 V336" fill="${C.cream}" stroke="${C.line}" stroke-width="3"/>
      <path d="M205 250 L300 196 L395 250 Z" fill="${C.clay}" stroke="${C.line}" stroke-width="3"/>
      <circle cx="300" cy="230" r="12" fill="${C.cream}" stroke="${C.line}" stroke-width="2.5"/>
      ${windowsRow(245, 270, 3, 30, 46, 20)}
      <path d="M90 490 H510" stroke="${C.line}" stroke-width="2.5"/>
      ${windowsRow(115, 390, 7, 34, 64, 22)}
      ${windowsRow(115, 515, 7, 34, 64, 22)}
      <rect x="276" y="540" width="48" height="80" rx="4" fill="${C.clay}" stroke="${C.line}" stroke-width="3"/>
      <path d="M150 640 C170 610 200 610 214 640 M400 640 C420 606 456 606 470 640" fill="${C.sage}" stroke="${C.line}" stroke-width="2.5"/>
      <text x="300" y="712" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">особняк начала XIX века</text>`, { label: 'Купеческий особняк' }),

    stable: () => wrap(`
      ${ground(620)}
      <path d="M50 620 V430 H550 V620" fill="${C.cream}" stroke="${C.line}" stroke-width="3"/>
      <path d="M40 430 H560 L540 408 H60 Z" fill="${C.latte}" stroke="${C.line}" stroke-width="3"/>
      <path d="M250 430 V330 H350 V430" fill="${C.sand}" stroke="${C.line}" stroke-width="3"/>
      <path d="M240 330 H360 L340 306 H260 Z" fill="${C.latte}" stroke="${C.line}" stroke-width="3"/>
      <path d="M272 306 V250 H328 V306" fill="${C.cream}" stroke="${C.line}" stroke-width="3"/>
      <path d="M266 250 C280 226 320 226 334 250 Z" fill="${C.clay}" stroke="${C.line}" stroke-width="3"/>
      <path d="M300 230 V128" stroke="${C.line}" stroke-width="4"/>
      <path d="M300 132 L322 144 L300 156 Z" fill="${C.clay}" stroke="${C.line}" stroke-width="2"/>
      <circle cx="300" cy="278" r="12" fill="${C.cream}" stroke="${C.line}" stroke-width="2.5"/>
      <path d="M270 620 V530 C270 498 330 498 330 530 V620" fill="${C.clay}" stroke="${C.line}" stroke-width="3"/>
      ${windowsRow(72, 470, 4, 30, 40, 22)}${windowsRow(372, 470, 4, 30, 40, 22)}
      ${windowsRow(72, 545, 4, 30, 40, 22)}${windowsRow(372, 545, 4, 30, 40, 22)}
      <text x="300" y="712" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">дворцовый конный завод · 1770–1780-е</text>`, { label: 'Конный завод' }),

    church: () => wrap(`
      ${ground(640)}
      <path d="M190 640 V420 H410 V640" fill="${C.cream}" stroke="${C.line}" stroke-width="3"/>
      <path d="M176 420 H424 L404 398 H196 Z" fill="${C.latte}" stroke="${C.line}" stroke-width="3"/>
      <path d="M180 410 H420" stroke="${C.sage}" stroke-width="8" stroke-dasharray="10 6"/>
      <path d="M240 398 V310 H360 V398" fill="${C.sand}" stroke="${C.line}" stroke-width="3"/>
      <path d="M236 310 C236 230 364 230 364 310 Z" fill="${C.sage}" stroke="${C.line}" stroke-width="3"/>
      <path d="M300 246 V180 M284 200 H316 M288 222 L312 214" stroke="${C.line}" stroke-width="4"/>
      <path d="M270 640 V560 C270 530 330 530 330 560 V640" fill="${C.clay}" stroke="${C.line}" stroke-width="3"/>
      ${windowsRow(214, 460, 4, 26, 52, 32)}
      <path d="M440 640 V300 H500 V640" fill="${C.sand}" stroke="${C.line}" stroke-width="3"/>
      <path d="M432 300 L470 220 L508 300 Z" fill="${C.clay}" stroke="${C.line}" stroke-width="3"/>
      <path d="M470 220 V170 M458 186 H482" stroke="${C.line}" stroke-width="3.5"/>
      <rect x="456" y="340" width="28" height="56" rx="14" fill="${C.cream}" stroke="${C.line}" stroke-width="2.5"/>
      <rect x="456" y="440" width="28" height="56" rx="14" fill="${C.cream}" stroke="${C.line}" stroke-width="2.5"/>
      <path d="M90 640 C100 560 140 540 150 640" fill="${C.sage}" stroke="${C.line}" stroke-width="2.5"/>
      <text x="300" y="712" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">храмы старого посада</text>`, { label: 'Храм' }),

    rows: () => wrap(`
      ${ground(600)}
      <path d="M50 600 V420 H550 V600" fill="${C.sand}" stroke="${C.line}" stroke-width="3"/>
      <path d="M36 420 H564 L540 390 H60 Z" fill="${C.latte}" stroke="${C.line}" stroke-width="3"/>
      ${[0,1,2,3,4,5,6,7].map(i => {const x = 70 + i * 60; return `<path d="M${x} 600 V500 C${x} 470 ${x+44} 470 ${x+44} 500 V600" fill="${C.cream}" stroke="${C.line}" stroke-width="2.5"/><path d="M${x+22} 486 V600" stroke="${C.line}" stroke-width="1.2" stroke-opacity=".5"/>`;}).join('')}
      ${windowsRow(80, 436, 8, 24, 30, 36)}
      <text x="300" y="690" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">торговые ряды · 1853</text>`, { label: 'Торговые ряды' }),

    horse: () => wrap(`
      ${ground(560)}
      <g transform="translate(-10 0)">
        <path d="${TAIL}" fill="none" stroke="${C.line}" stroke-width="10"/>
        <path d="${HORSE}" fill="${C.clay}" stroke="${C.line}" stroke-width="4"/>
        <path d="${MANE}" fill="none" stroke="${C.ink}" stroke-width="6"/>
        <path d="M420 540 C430 552 450 552 460 540 M206 540 C216 552 236 552 246 540 M146 540 C156 552 176 552 186 540" stroke="${C.cream}" stroke-width="8"/>
        <circle cx="486" cy="226" r="4" fill="${C.ink}"/>
      </g>
      <text x="300" y="660" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="26" font-weight="600" fill="${C.ink}" opacity=".8">владимирский тяжеловоз</text>`, { label: 'Владимирский тяжеловоз' }),

    monument: () => wrap(`
      <rect x="120" y="560" width="360" height="90" rx="6" fill="${C.sand}" stroke="${C.line}" stroke-width="3"/>
      <rect x="100" y="650" width="400" height="30" rx="4" fill="${C.latte}" stroke="${C.line}" stroke-width="3"/>
      <g transform="translate(20 0)">
        <path d="${TAIL}" fill="none" stroke="${C.line}" stroke-width="10"/>
        <path d="${HORSE}" fill="#8E7E6A" stroke="${C.line}" stroke-width="4"/>
        <path d="${MANE}" fill="none" stroke="${C.ink}" stroke-width="6"/>
      </g>
      <text x="300" y="614" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".75">памятник тяжеловозу</text>`, { label: 'Памятник' }),

    route: () => wrap(`
      <path d="M90 520 C170 420 230 520 300 420 C370 320 430 420 510 300" fill="none" stroke="${C.clay}" stroke-width="6" stroke-dasharray="14 12"/>
      <circle cx="90" cy="520" r="16" fill="${C.sage}" stroke="${C.line}" stroke-width="3"/>
      <circle cx="510" cy="300" r="16" fill="${C.rose}" stroke="${C.line}" stroke-width="3"/>
      <text x="90" y="572" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}">Сибирь</text>
      <text x="510" y="262" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}">Европа</text>
      <g transform="translate(150 140) scale(.55)">
        <path d="${HORSE}" fill="${C.clay}" stroke="${C.line}" stroke-width="6"/>
        <path d="${MANE}" fill="none" stroke="${C.ink}" stroke-width="8"/>
      </g>
      <text x="300" y="680" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="56" font-weight="700" fill="${C.ink}" opacity=".85">1990</text>`, { label: 'Маршрут похода' }),

    sarafan: () => wrap(`
      <path d="M240 170 H360 L372 250 C450 350 480 520 490 650 H110 C120 520 150 350 228 250 Z" fill="${C.rose}" stroke="${C.line}" stroke-width="4"/>
      <path d="M240 170 L228 250 M360 170 L372 250" stroke="${C.line}" stroke-width="3"/>
      <path d="M300 250 V650" stroke="${C.gold}" stroke-width="10"/>
      ${[290, 340, 390, 440, 490, 540, 590].map(y => `<circle cx="300" cy="${y}" r="6" fill="${C.cream}" stroke="${C.line}" stroke-width="2"/>`).join('')}
      <path d="M116 610 H484" stroke="${C.gold}" stroke-width="14"/>
      <path d="M116 610 H484" stroke="${C.ink}" stroke-width="2" stroke-dasharray="4 10"/>
      <path d="M240 170 C250 140 270 128 270 110 M360 170 C350 140 330 128 330 110" stroke="${C.line}" stroke-width="5" fill="none"/>
      <text x="300" y="712" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">народный костюм XVIII–XX веков</text>`, { label: 'Сарафан' }),

    dress: () => wrap(`
      <path d="M220 150 C250 130 350 130 380 150 L430 220 L400 240 L380 210 L372 330 H228 L220 210 L200 240 L170 220 Z" fill="${C.sage}" stroke="${C.line}" stroke-width="4"/>
      <path d="M300 150 V330" stroke="${C.line}" stroke-width="2"/>
      ${[175, 210, 245, 280, 315].map(y => `<circle cx="300" cy="${y}" r="5" fill="${C.cream}" stroke="${C.line}" stroke-width="2"/>`).join('')}
      <path d="M228 330 H372 C420 440 450 560 470 650 H130 C150 560 180 440 228 330 Z" fill="${C.sage}" stroke="${C.line}" stroke-width="4"/>
      ${[400, 470, 540, 610].map(y => `<path d="M${200 - (y - 400) * .2} ${y} H${400 + (y - 400) * .2}" stroke="${C.line}" stroke-opacity=".35" stroke-width="2"/>`).join('')}
      <path d="M140 640 H460" stroke="${C.rose}" stroke-width="12"/>
      <text x="300" y="712" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">«парочка» – кофта и юбка</text>`, { label: 'Платье-парочка' }),

    coins: () => wrap(`
      <path d="M150 600 C150 520 450 520 450 600 C450 660 150 660 150 600 Z" fill="${C.latte}" stroke="${C.line}" stroke-width="4"/>
      <path d="M170 590 C200 470 400 470 430 590" fill="${C.sand}" stroke="${C.line}" stroke-width="3"/>
      ${[[230,470,58],[350,430,64],[290,350,70],[210,560,40],[400,540,44]].map(([x,y,r]) => `
        <circle cx="${x}" cy="${y}" r="${r}" fill="#C8956A" stroke="${C.line}" stroke-width="4"/>
        <circle cx="${x}" cy="${y}" r="${r - 12}" fill="none" stroke="${C.line}" stroke-width="2" stroke-dasharray="3 5"/>
        <path d="M${x} ${y - r * .4} V${y + r * .4} M${x - r * .3} ${y} H${x + r * .3}" stroke="${C.ink}" stroke-width="3"/>`).join('')}
      <text x="300" y="712" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">три клада медных монет</text>`, { label: 'Монеты' }),

    samovar: () => wrap(`
      ${ground(640)}
      <path d="M190 640 H410 L380 600 H220 Z" fill="${C.latte}" stroke="${C.line}" stroke-width="3"/>
      <path d="M240 600 V570 H360 V600" fill="${C.gold}" stroke="${C.line}" stroke-width="3"/>
      <path d="M220 570 C170 470 190 330 250 300 H350 C410 330 430 470 380 570 Z" fill="${C.gold}" stroke="${C.line}" stroke-width="4"/>
      <path d="M250 300 V260 H350 V300" fill="${C.latte}" stroke="${C.line}" stroke-width="3"/>
      <path d="M270 260 C270 220 330 220 330 260" fill="${C.gold}" stroke="${C.line}" stroke-width="3"/>
      <path d="M292 210 H308 V226 H292 Z" fill="${C.ink}"/>
      <path d="M200 380 C150 380 150 450 200 450 M400 380 C450 380 450 450 400 450" fill="none" stroke="${C.line}" stroke-width="8"/>
      <path d="M300 480 H340 V500 H320 V520" fill="none" stroke="${C.line}" stroke-width="7"/>
      <path d="M230 360 C250 340 350 340 370 360" stroke="${C.cream}" stroke-width="5" fill="none" opacity=".7"/>
      <path d="M280 190 C270 160 300 150 290 120 M316 190 C306 160 336 150 326 120" stroke="${C.line}" stroke-opacity=".4" stroke-width="3" fill="none"/>
      <text x="300" y="712" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">купеческий быт</text>`, { label: 'Самовар' }),

    embroidery: () => {
      let cells = '';
      const motif = [[0,0,1,0,0],[0,1,1,1,0],[1,1,0,1,1],[0,1,1,1,0],[0,0,1,0,0]];
      for (let gy = 0; gy < 3; gy++) for (let gx = 0; gx < 3; gx++)
        motif.forEach((row, r) => row.forEach((v, c) => {
          if (!v) return;
          const x = 150 + gx * 104 + c * 18, y = 210 + gy * 104 + r * 18;
          const col = (gx + gy) % 2 ? C.rose : '#B5513F';
          cells += `<path d="M${x} ${y} L${x + 14} ${y + 14} M${x + 14} ${y} L${x} ${y + 14}" stroke="${col}" stroke-width="4"/>`;
        }));
      return wrap(`
        <rect x="110" y="170" width="380" height="380" rx="8" fill="${C.cream}" stroke="${C.latte}" stroke-width="22"/>
        <rect x="110" y="170" width="380" height="380" rx="8" fill="none" stroke="${C.line}" stroke-width="3"/>
        ${cells}
        <path d="M130 600 H470" stroke="#B5513F" stroke-width="6" stroke-dasharray="12 8"/>
        <text x="300" y="690" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">вышитые картины</text>`, { label: 'Вышивка' });
    },

    model: () => wrap(`
      <path d="M80 520 L300 640 L520 520 L300 400 Z" fill="${C.sage}" stroke="${C.line}" stroke-width="3"/>
      <path d="M80 520 V545 L300 665 V640 Z M520 520 V545 L300 665 V640 Z" fill="${C.latte}" stroke="${C.line}" stroke-width="3"/>
      <path d="M210 520 L300 570 L390 520 L300 470 Z" fill="${C.cream}" stroke="${C.line}" stroke-width="2"/>
      ${[[150,500],[200,470],[250,445],[400,470],[440,495],[350,600]].map(([x,y]) => `
        <path d="M${x} ${y} l26 14 v-30 l-26 -14 Z" fill="${C.sand}" stroke="${C.line}" stroke-width="2"/>
        <path d="M${x+26} ${y+14} l26 -14 v-30 l-26 14 Z" fill="${C.latte}" stroke="${C.line}" stroke-width="2"/>
        <path d="M${x} ${y-30} l26 14 l26 -14 l-26 -14 Z" fill="${C.clay}" stroke="${C.line}" stroke-width="2"/>`).join('')}
      <path d="M300 480 V420 M290 430 H310" stroke="${C.line}" stroke-width="3"/>
      <circle cx="300" cy="470" r="14" fill="${C.sage}" stroke="${C.line}" stroke-width="2"/>
      <text x="300" y="260" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="26" font-weight="600" fill="${C.ink}" opacity=".8">исторический центр</text>
      <text x="300" y="296" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="20" fill="${C.ink}" opacity=".6">макет · XIX век</text>`, { label: 'Макет города' }),

    artifact: () => wrap(`
      <path d="M220 260 C190 330 190 470 230 560 H370 C410 470 410 330 380 260 Z" fill="${C.clay}" stroke="${C.line}" stroke-width="4"/>
      <path d="M232 260 H368 L356 230 H244 Z" fill="${C.latte}" stroke="${C.line}" stroke-width="3"/>
      ${[320, 360, 400, 440].map(y => `<path d="M${212} ${y} Q300 ${y + 18} 388 ${y}" fill="none" stroke="${C.cream}" stroke-width="3" stroke-dasharray="6 6"/>`).join('')}
      <path d="M300 300 L330 380 L300 470 L270 380 Z" fill="none" stroke="${C.ink}" stroke-width="3" opacity=".6"/>
      <path d="M150 600 C200 580 400 580 450 600" stroke="${C.line}" stroke-width="3" fill="none"/>
      <path d="M120 640 l24 -40 l24 40 Z M440 640 l20 -34 l20 34 Z" fill="${C.sand}" stroke="${C.line}" stroke-width="2"/>
      <text x="300" y="712" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">археология · меря</text>`, { label: 'Археология' }),

    nature: () => wrap(`
      ${ground(620)}
      <path d="M40 620 C150 560 260 600 330 570 C420 532 500 580 560 560 V620 Z" fill="${C.sage}" stroke="${C.line}" stroke-width="3"/>
      <path d="M40 660 C160 640 260 680 360 650 C450 626 520 660 560 650" stroke="#9DB2B5" stroke-width="16" fill="none"/>
      ${[[150,560],[210,580],[430,540]].map(([x,y]) => `
        <path d="M${x} ${y} V${y - 210}" stroke="${C.cream}" stroke-width="12"/>
        <path d="M${x} ${y} V${y - 210}" stroke="${C.ink}" stroke-width="2" stroke-dasharray="4 16"/>
        <ellipse cx="${x}" cy="${y - 230}" rx="56" ry="70" fill="${C.sage}" stroke="${C.line}" stroke-width="3"/>`).join('')}
      <path d="M330 220 q16 -14 32 0 q16 -14 32 0 M400 270 q12 -10 24 0 q12 -10 24 0" stroke="${C.ink}" stroke-width="3" fill="none"/>
      <circle cx="470" cy="160" r="40" fill="${C.rose}" opacity=".8"/>
      <text x="300" y="730" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">природа ополья</text>`, { label: 'Природа' }),

    field: () => wrap(`
      <circle cx="420" cy="220" r="60" fill="${C.rose}" opacity=".85"/>
      <path d="M40 420 C160 380 300 430 420 400 C480 386 530 400 560 396 V760 H40 Z" fill="${C.sand}"/>
      <path d="M40 500 C200 460 360 520 560 480 V760 H40 Z" fill="${C.latte}"/>
      <path d="M40 600 C200 570 380 620 560 590 V760 H40 Z" fill="${C.sage}"/>
      ${Array.from({ length: 9 }, (_, i) => `<path d="M${80 + i * 52} 760 L${300} 500" stroke="${C.line}" stroke-opacity=".18" stroke-width="2"/>`).join('')}
      <path d="M120 400 V360 M110 372 L120 360 L130 372" stroke="${C.line}" stroke-width="3" fill="none"/>
      <text x="300" y="150" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="26" font-weight="600" fill="${C.ink}" opacity=".8">Владимирское ополье</text>`, { label: 'Поля ополья' }),

    flax: () => wrap(`
      ${Array.from({ length: 11 }, (_, i) => {
        const x = 90 + i * 42;
        return `<path d="M${x} 640 C${x - 10} 520 ${x + 14} 420 ${x} 300" stroke="${C.sage}" stroke-width="5" fill="none"/>
                <circle cx="${x}" cy="296" r="13" fill="#9DB6D4" stroke="${C.line}" stroke-width="2"/>
                <circle cx="${x}" cy="296" r="4" fill="${C.cream}"/>`;
      }).join('')}
      <path d="M60 640 H540" stroke="${C.line}" stroke-width="3"/>
      <text x="300" y="712" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="22" fill="${C.ink}" opacity=".7">лён и ярмарки</text>`, { label: 'Лён' }),

    emblem: () => wrap(`
      <path d="M170 200 H430 V420 C430 520 360 580 300 610 C240 580 170 520 170 420 Z" fill="${C.cream}" stroke="${C.line}" stroke-width="5"/>
      <path d="M190 220 H410 V420 C410 506 352 558 300 586 C248 558 190 506 190 420 Z" fill="none" stroke="${C.gold}" stroke-width="3"/>
      <g transform="translate(160 200) scale(.48)">
        <path d="${HORSE}" fill="${C.clay}" stroke="${C.line}" stroke-width="7"/>
        <path d="${MANE}" fill="none" stroke="${C.ink}" stroke-width="9"/>
      </g>
      <text x="300" y="680" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="30" font-weight="700" fill="${C.ink}" opacity=".8">1434 · 1789</text>`, { label: 'Эмблема' }),

    portrait: (initials = '', seed = 0) => {
      const tints = [[C.bg1, C.rose], [C.bg1, C.sage], [C.bg1, C.latte], [C.bg1, C.sand]];
      const [b1, b2] = tints[seed % tints.length];
      return wrap(`
        <ellipse cx="300" cy="380" rx="200" ry="250" fill="${C.cream}" stroke="${C.line}" stroke-width="4"/>
        <ellipse cx="300" cy="380" rx="182" ry="232" fill="none" stroke="${C.gold}" stroke-width="2" stroke-dasharray="1 9"/>
        <path d="M300 112 l12 18 l-12 18 l-12 -18 Z M300 612 l12 18 l-12 18 l-12 -18 Z" fill="${C.gold}" stroke="${C.line}" stroke-width="2"/>
        <ellipse cx="300" cy="380" rx="120" ry="150" fill="${b2}" opacity=".55"/>
        <path d="M210 520 H390" stroke="${C.line}" stroke-width="2" stroke-opacity=".5"/>
        <text x="300" y="422" text-anchor="middle" font-family="Montserrat Alternates, sans-serif" font-size="112" font-weight="700" fill="${C.ink}" letter-spacing="-4">${initials}</text>`,
        { bg1: b1, bg2: b2, label: 'Монограмма' });
    }
  };

  window.ART = (kind, ...args) => (ART[kind] || ART.emblem)(...args);
})();
