(() => {
  "use strict";

  /** Sharad Navaratri 2026 — Ashwin Shukla Pratipada */
  const NAVARATRI_START = new Date("2026-10-11T06:00:00+05:30");

  const translations = {
    en: {
      navBrand: "Sri Durgadevi Temple",
      navAbout: "About",
      navSchedule: "Schedule",
      navDarshan: "Gallery",
      navVisit: "Visit",
      heroKicker: "Hirekerur · Haveri · Karnataka",
      heroTitle: "Sri Durgadevi Temple",
      heroLead:
        "Join the sacred 9-day Navaratri Chandi Homa and receive Devi’s blessings by the holy lake.",
      countdownLabel: "Navaratri begins in",
      countdownLive: "Navaratri is underway",
      countdownEnded: "Vijayadashami blessings",
      unitDays: "Days",
      unitHours: "Hours",
      unitMins: "Mins",
      unitSecs: "Secs",
      heroCta: "View Ritual Schedule",
      heroSecondary: "Contact & Visit",
      aboutEyebrow: "About the Temple",
      aboutTitle: "Guardian of Hirekerur’s sacred lake",
      aboutP1:
        "Nestled beside the vast Durga Devi Kere in Hirekerur, Haveri district, Sri Durgadevi Temple has long been a centre of Shakti worship for devotees across Karnataka and neighbouring Maharashtra.",
      aboutP2:
        "During Sharad Navaratri, the temple resonates with nine days of Alankara, Abhisheka, and Chandi/Durga Homa. Each day honours a form of the Goddess, culminating in Vijayadashami Poornahuti — a sankalpa of victory, protection, and community seva.",
      aboutP3:
        "The triennial Durgadevi Jatra draws tens of thousands; Navaratri renews that devotion every autumn through disciplined ritual, annadana, and collective prayer.",
      aboutCaption: "Durga Devi Kere · Hirekerur",
      aboutPoint1: "Ancient Shakti kshetra by a ~900-acre lake",
      aboutPoint2: "Nine-day Alankara & Navachandi Homa",
      aboutPoint3: "Community Annadana throughout Navaratri",
      scheduleEyebrow: "Navaratri 2026",
      scheduleTitle: "9-Day Schedule & Rituals",
      scheduleLead:
        "Each day’s Navadurga form, Alankara, puja timings, special Homa, and seva details.",
      pujaLabel: "Daily Puja:",
      pujaTimes: "Morning 6:00 AM · Madhyahna 12:00 PM · Evening 6:30 PM",
      homaLabel: "Homa:",
      homaTimes: "Begins 8:30 AM (Poornahuti by noon)",
      annadanaLabel: "Annadana:",
      annadanaTimes: "Daily after 12:30 PM",
      labelColor: "Colour",
      labelAlankara: "Alankara",
      labelDayPuja: "Puja",
      labelSpecialHoma: "Special Homa",
      labelDaySeva: "Seva",
      day1Num: "Day 1",
      day1Date: "11 October 2026 · Sunday",
      day1Title: "Pratipada · Shailaputri",
      day1Desc:
        "Navaratri begins with Ghatasthapana and worship of Shailaputri, the mountain-born Mother — for stability, purity, and a fresh sankalpa.",
      day1Color: "White",
      day1Alankara: "White saree, jasmine garlands, bilva leaves",
      day1Puja: "6:00 AM Abhisheka · 9:00 AM Alankara darshan · 6:30 PM evening aarti",
      day1Homa: "Mahaganapathi Homa — 8:30 AM",
      day1Seva: "Ghatasthapana sankalpa · Ganapathi Homa seva",
      day2Num: "Day 2",
      day2Date: "12 October 2026 · Monday",
      day2Title: "Dwitiya · Brahmacharini",
      day2Desc:
        "Brahmacharini embodies tapas and wisdom. Devotees pray for discipline, learning, and spiritual strength.",
      day2Color: "Red",
      day2Alankara: "Red saree, lotus, kumkum",
      day2Puja: "6:00 AM Abhisheka · 9:00 AM Alankara darshan · 6:30 PM evening aarti",
      day2Homa: "Navagraha Homa — 8:30 AM",
      day2Seva: "Navagraha shanti · book / vidya dana",
      day3Num: "Day 3",
      day3Date: "13 October 2026 · Tuesday",
      day3Title: "Tritiya · Chandraghanta",
      day3Desc:
        "Chandraghanta, adorned with the crescent-bell, is worshipped for courage, protection, and removal of obstacles.",
      day3Color: "Golden yellow",
      day3Alankara: "Golden yellow saree, champaka flowers, bells",
      day3Puja: "6:00 AM Abhisheka · 9:00 AM Alankara darshan · 6:30 PM evening aarti",
      day3Homa: "Sudarshana Homa — 8:30 AM",
      day3Seva: "Sudarshana Homa sankalpa · deepa seva",
      day4Num: "Day 4",
      day4Date: "14 October 2026 · Wednesday",
      day4Title: "Chaturthi · Kushmanda",
      day4Desc:
        "Kushmanda, the creative force of the cosmos, is honoured with Sapthashati parayana for health, prosperity, and family well-being.",
      day4Color: "Green",
      day4Alankara: "Green saree, tulasi, marigold",
      day4Puja: "6:00 AM Abhisheka · 9:00 AM Alankara darshan · 6:30 PM evening aarti",
      day4Homa: "Durga Sapthashati Parayana Homa — 8:30 AM",
      day4Seva: "Sapthashati parayana · fruit / annadana offering",
      day5Num: "Day 5",
      day5Date: "15 October 2026 · Thursday",
      day5Title: "Panchami · Skandamata",
      day5Desc:
        "Skandamata, mother of Skanda, blesses motherhood, progeny, and family protection through Laghu Chandi Homa.",
      day5Color: "Orange",
      day5Alankara: "Orange saree, rose garlands",
      day5Puja: "6:00 AM Abhisheka · 9:00 AM Alankara darshan · 6:30 PM evening aarti",
      day5Homa: "Chandi Homa (Laghu) — 8:30 AM",
      day5Seva: "Laghu Chandi sankalpa · child-protection prayers",
      day6Num: "Day 6",
      day6Date: "16 October 2026 · Friday",
      day6Title: "Shashti · Katyayani",
      day6Desc:
        "Katyayani, the Mahishasura-mardini form, is invoked with Navachandi Homa for marriage blessings, victory, and removal of negativity.",
      day6Color: "Royal maroon",
      day6Alankara: "Royal maroon saree, deepa, bilva",
      day6Puja: "6:00 AM Abhisheka · 9:00 AM Alankara darshan · 6:30 PM evening aarti",
      day6Homa: "Navachandi Homa — 8:30 AM",
      day6Seva: "Navachandi sankalpa · Kanya puja",
      day7Num: "Day 7",
      day7Date: "17 October 2026 · Saturday",
      day7Title: "Saptami · Kalaratri",
      day7Desc:
        "Kalaratri destroys fear and darkness. Maha Chandi Homa is offered for removal of ignorance, dosha, and afflictions.",
      day7Color: "Deep indigo / black",
      day7Alankara: "Deep indigo, neem, sesame",
      day7Puja: "6:00 AM Abhisheka · 9:00 AM Alankara darshan · 6:30 PM evening aarti",
      day7Homa: "Maha Chandi Homa — 8:00 AM",
      day7Seva: "Maha Chandi sankalpa · night jagaran",
      day8Num: "Day 8",
      day8Date: "18 October 2026 · Sunday",
      day8Title: "Ashtami · Mahagauri",
      day8Desc:
        "Mahagauri embodies purity and peace. On Maha Ashtami, Durga Homa and Kumkumarchana are performed.",
      day8Color: "Pure white",
      day8Alankara: "Pure white saree, sandal, pearl",
      day8Puja: "6:00 AM Abhisheka · 9:00 AM Alankara darshan · 7:00 PM special aarti",
      day8Homa: "Durga Homa & Kumkumarchana — 8:30 AM",
      day8Seva: "Kumkumarchana · Maha Ashtami annadana",
      day9Num: "Day 9",
      day9Date: "19–20 October 2026 · Navami–Dashami",
      day9Title: "Navami–Dashami · Siddhidatri",
      day9Desc:
        "Siddhidatri bestows siddhis, culminating in Vijayadashami Poornahuti, rathotsava, and community blessings.",
      day9Color: "Festive gold / pink",
      day9Alankara: "Festive gold, chariot Alankara, flower adornment",
      day9Puja: "5:30 AM special Abhisheka · Rathotsava · 12:00 PM Poornahuti",
      day9Homa: "Vijayadashami Poornahuti — noon",
      day9Seva: "Poornahuti sankalpa · Maha Annadana · Aparajita puja",
      darshanEyebrow: "Temple Gallery",
      darshanTitle: "Witness Devi’s Alankara from afar",
      darshanLead:
        "Glimpses of the temple sanctum, sacred lake, and Navaratri rituals.",
      gal1: "Sanctum Alankara",
      gal2: "Durga Devi Kere",
      gal3: "Chandi Homa",
      gal4: "Navaratri Procession",
      visitEyebrow: "Contact & Visit",
      visitTitle: "Plan your yatra to Hirekerur",
      visitAddress:
        "Sri Durgadevi Temple<br />Temple Road, Hirekerur<br />Haveri District, Karnataka 581111",
      contactEmail: "Email",
      footerBlessing: "Om Dum Durgayei Namaha",
      footerCopy: "© 2026 Sri Durgadevi Temple, Hirekerur. All rights reserved.",
      backTop: "Back to top",
    },
    kn: {
      navBrand: "ಶ್ರೀ ದುರ್ಗಾದೇವಿ ದೇವಸ್ಥಾನ",
      navAbout: "ಪರಿಚಯ",
      navSchedule: "ವೇಳಾಪಟ್ಟಿ",
      navDarshan: "ಗ್ಯಾಲರಿ",
      navVisit: "ಭೇಟಿ",
      heroKicker: "ಹಿರೇಕೆರೂರು · ಹಾವೇರಿ · ಕರ್ನಾಟಕ",
      heroTitle: "ಶ್ರೀ ದುರ್ಗಾದೇವಿ ದೇವಸ್ಥಾನ",
      heroLead:
        "ಪವಿತ್ರ ಸರೋವರದ ಬಳಿ ಒಂಭತ್ತು ದಿನಗಳ ನವರಾತ್ರಿ ಚಂಡಿ ಹೋಮದಲ್ಲಿ ಭಾಗವಹಿಸಿ, ದೇವಿಯ ಆಶೀರ್ವಾದ ಪಡೆಯಿರಿ.",
      countdownLabel: "ನವರಾತ್ರಿ ಪ್ರಾರಂಭಕ್ಕೆ",
      countdownLive: "ನವರಾತ್ರಿ ನಡೆಯುತ್ತಿದೆ",
      countdownEnded: "ವಿಜಯದಶಮಿ ಆಶೀರ್ವಾದ",
      unitDays: "ದಿನ",
      unitHours: "ಗಂಟೆ",
      unitMins: "ನಿಮಿಷ",
      unitSecs: "ಸೆಕೆಂಡ್",
      heroCta: "ಆಚರಣೆ ವೇಳಾಪಟ್ಟಿ ನೋಡಿ",
      heroSecondary: "ಸಂಪರ್ಕ ಮತ್ತು ಭೇಟಿ",
      aboutEyebrow: "ದೇವಸ್ಥಾನದ ಪರಿಚಯ",
      aboutTitle: "ಹಿರೇಕೆರೂರಿನ ಪವಿತ್ರ ಸರೋವರದ ರಕ್ಷಕಿ",
      aboutP1:
        "ಹಾವೇರಿ ಜಿಲ್ಲೆಯ ಹಿರೇಕೆರೂರಿನ ವಿಶಾಲ ದುರ್ಗಾದೇವಿ ಕೆರೆಯ ತೀರದಲ್ಲಿ ನೆಲೆಗೊಂಡಿರುವ ಶ್ರೀ ದುರ್ಗಾದೇವಿ ದೇವಸ್ಥಾನವು ಕರ್ನಾಟಕ ಹಾಗೂ ಮಹಾರಾಷ್ಟ್ರದ ಭಕ್ತರಿಗೆ ಶಕ್ತಿ ಆರಾಧನೆಯ ಪ್ರಮುಖ ಕೇಂದ್ರವಾಗಿದೆ.",
      aboutP2:
        "ಶರದ್ ನವರಾತ್ರಿಯಲ್ಲಿ ದೇವಸ್ಥಾನವು ಒಂಭತ್ತು ದಿನಗಳ ಅಲಂಕಾರ, ಅಭಿಷೇಕ ಮತ್ತು ಚಂಡಿ/ದುರ್ಗಾ ಹೋಮದಿಂದ ಮುಖರಿತವಾಗುತ್ತದೆ. ಪ್ರತಿ ದಿನ ದೇವಿಯ ಒಂದು ರೂಪವನ್ನು ಪೂಜಿಸಿ, ವಿಜಯದಶಮಿ ಪೂರ್ಣಾಹುತಿಯೊಂದಿಗೆ ವಿಜಯ, ರಕ್ಷಣೆ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಯ ಸಂಕಲ್ಪ ಮುಗಿಯುತ್ತದೆ.",
      aboutP3:
        "ಮೂರು ವರ್ಷಕ್ಕೊಮ್ಮೆ ನಡೆಯುವ ದುರ್ಗಾದೇವಿ ಜಾತ್ರೆಗೆ ಸಾವಿರಾರು ಭಕ್ತರು ಬರುತ್ತಾರೆ; ಪ್ರತಿ ಶರತ್ಕಾಲದ ನವರಾತ್ರಿಯಲ್ಲಿ ಆ ಭಕ್ತಿ ಅನ್ನದಾನ ಮತ್ತು ಸಾಮೂಹಿಕ ಪ್ರಾರ್ಥನೆಯ ಮೂಲಕ ನವೀಕೃತವಾಗುತ್ತದೆ.",
      aboutCaption: "ದುರ್ಗಾದೇವಿ ಕೆರೆ · ಹಿರೇಕೆರೂರು",
      aboutPoint1: "ಸುಮಾರು 900 ಎಕರೆ ಕೆರೆಯ ಬಳಿ ಪ್ರಾಚೀನ ಶಕ್ತಿ ಕ್ಷೇತ್ರ",
      aboutPoint2: "ಒಂಭತ್ತು ದಿನಗಳ ಅಲಂಕಾರ ಮತ್ತು ನವಚಂಡಿ ಹೋಮ",
      aboutPoint3: "ನವರಾತ್ರಿ ಅವಧಿಯಲ್ಲಿ ಸಮುದಾಯ ಅನ್ನದಾನ",
      scheduleEyebrow: "ನವರಾತ್ರಿ 2026",
      scheduleTitle: "9-ದಿನಗಳ ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಆಚರಣೆಗಳು",
      scheduleLead:
        "ಪ್ರತಿ ದಿನದ ನವದುರ್ಗಾ ರೂಪ, ಅಲಂಕಾರ, ಪೂಜಾ ಸಮಯ, ವಿಶೇಷ ಹೋಮ ಮತ್ತು ಸೇವಾ ವಿವರಗಳು.",
      pujaLabel: "ದೈನಂದಿನ ಪೂಜೆ:",
      pujaTimes: "ಬೆಳಿಗ್ಗೆ 6:00 · ಮಧ್ಯಾಹ್ನ 12:00 · ಸಂಜೆ 6:30",
      homaLabel: "ಹೋಮ:",
      homaTimes: "ಬೆಳಿಗ್ಗೆ 8:30ರಿಂದ (ಮಧ್ಯಾಹ್ನದೊಳಗೆ ಪೂರ್ಣಾಹುತಿ)",
      annadanaLabel: "ಅನ್ನದಾನ:",
      annadanaTimes: "ಪ್ರತಿದಿನ ಮಧ್ಯಾಹ್ನ 12:30ರ ನಂತರ",
      labelColor: "ವರ್ಣ",
      labelAlankara: "ಅಲಂಕಾರ",
      labelDayPuja: "ಪೂಜೆ",
      labelSpecialHoma: "ವಿಶೇಷ ಹೋಮ",
      labelDaySeva: "ಸೇವೆ",
      day1Num: "ದಿನ 1",
      day1Date: "11 ಅಕ್ಟೋಬರ್ 2026 · ಭಾನುವಾರ",
      day1Title: "ಪ್ರತಿಪದೆ · ಶೈಲಪುತ್ರಿ",
      day1Desc:
        "ನವರಾತ್ರಿಯ ಪ್ರಾರಂಭ — ಘಟಸ್ಥಾಪನೆ ಮತ್ತು ಪರ್ವತಾಧಿಷ್ಠಿತ ಶೈಲಪುತ್ರಿ ದೇವಿಯ ಆರಾಧನೆ. ಸ್ಥಿರತೆ, ಶುದ್ಧಿ ಮತ್ತು ನೂತನ ಸಂಕಲ್ಪಕ್ಕಾಗಿ ಪ್ರಾರ್ಥನೆ.",
      day1Color: "ಬಿಳಿ",
      day1Alankara: "ಬಿಳಿ ಸೀರೆ, ಮಲ್ಲಿಗೆ ಹಾರ, ಬಿಲ್ವ ಪತ್ರ",
      day1Puja: "6:00 ಅಭಿಷೇಕ · 9:00 ಅಲಂಕಾರ ದರ್ಶನ · 6:30 ಸಂಜೆ ಆರತಿ",
      day1Homa: "ಮಹಾಗಣಪತಿ ಹೋಮ — 8:30 AM",
      day1Seva: "ಘಟಸ್ಥಾಪನೆ ಸಂಕಲ್ಪ · ಗಣಪತಿ ಹೋಮ ಸೇವೆ",
      day2Num: "ದಿನ 2",
      day2Date: "12 ಅಕ್ಟೋಬರ್ 2026 · ಸೋಮವಾರ",
      day2Title: "ದ್ವಿತೀಯೆ · ಬ್ರಹ್ಮಚಾರಿಣಿ",
      day2Desc:
        "ತಪಸ್ಸು ಮತ್ತು ಜ್ಞಾನದ ದೇವಿ ಬ್ರಹ್ಮಚಾರಿಣಿ. ಇಂದ್ರಿಯ ನಿಗ್ರಹ, ವಿದ್ಯೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿಗಾಗಿ ಭಕ್ತರ ಪ್ರಾರ್ಥನೆ.",
      day2Color: "ಕೆಂಪು",
      day2Alankara: "ಕೆಂಪು ಸೀರೆ, ಕಮಲ, ಕುಂಕುಮ",
      day2Puja: "6:00 ಅಭಿಷೇಕ · 9:00 ಅಲಂಕಾರ ದರ್ಶನ · 6:30 ಸಂಜೆ ಆರತಿ",
      day2Homa: "ನವಗ್ರಹ ಹೋಮ — 8:30 AM",
      day2Seva: "ನವಗ್ರಹ ಶಾಂತಿ · ಪುಸ್ತಕ / ವಿದ್ಯಾ ದಾನ",
      day3Num: "ದಿನ 3",
      day3Date: "13 ಅಕ್ಟೋಬರ್ 2026 · ಮಂಗಳವಾರ",
      day3Title: "ತೃತೀಯೆ · ಚಂದ್ರಘಂಟಾ",
      day3Desc:
        "ಚಂದ್ರಾಕೃತಿ ಘಂಟೆಯನ್ನು ಹೊಂದಿದ ಚಂದ್ರಘಂಟಾ — ಧೈರ್ಯ, ರಕ್ಷಣೆ ಮತ್ತು ಶತ್ರುಗಳ ನಾಶಕ್ಕಾಗಿ ಪೂಜೆ.",
      day3Color: "ಚಿನ್ನದ ಹಳದಿ",
      day3Alankara: "ಚಿನ್ನದ ಹಳದಿ ಸೀರೆ, ಚಂಪಕ ಹೂವು, ಘಂಟೆ",
      day3Puja: "6:00 ಅಭಿಷೇಕ · 9:00 ಅಲಂಕಾರ ದರ್ಶನ · 6:30 ಸಂಜೆ ಆರತಿ",
      day3Homa: "ಸುದರ್ಶನ ಹೋಮ — 8:30 AM",
      day3Seva: "ಸುದರ್ಶನ ಹೋಮ ಸಂಕಲ್ಪ · ದೀಪ ಸೇವೆ",
      day4Num: "ದಿನ 4",
      day4Date: "14 ಅಕ್ಟೋಬರ್ 2026 · ಬುಧವಾರ",
      day4Title: "ಚತುರ್ಥಿ · ಕೂಷ್ಮಾಂಡಾ",
      day4Desc:
        "ಸೃಷ್ಟಿ ಶಕ್ತಿಯ ರೂಪ ಕೂಷ್ಮಾಂಡಾ. ಆರೋಗ್ಯ, ಸಮೃದ್ಧಿ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಸಪ್ತಶತಿ ಪಾರಾಯಣ.",
      day4Color: "ಹಸಿರು",
      day4Alankara: "ಹಸಿರು ಸೀರೆ, ತುಳಸಿ, ಸೇವಂತಿಗೆ",
      day4Puja: "6:00 ಅಭಿಷೇಕ · 9:00 ಅಲಂಕಾರ ದರ್ಶನ · 6:30 ಸಂಜೆ ಆರತಿ",
      day4Homa: "ದುರ್ಗಾ ಸಪ್ತಶತಿ ಪಾರಾಯಣ ಹೋಮ — 8:30 AM",
      day4Seva: "ಸಪ್ತಶತಿ ಪಾರಾಯಣ · ಫಲಾಹಾರ / ಅನ್ನದಾನ",
      day5Num: "ದಿನ 5",
      day5Date: "15 ಅಕ್ಟೋಬರ್ 2026 · ಗುರುವಾರ",
      day5Title: "ಪಂಚಮಿ · ಸ್ಕಂದಮಾತೆ",
      day5Desc:
        "ಸ್ಕಂದನನ್ನು ಹೊತ್ತ ಸ್ಕಂದಮಾತೆ — ಮಾತೃತ್ವ, ಸಂತಾನ ಭಾಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ರಕ್ಷಣೆಗಾಗಿ ಲಘು ಚಂಡಿ ಹೋಮ.",
      day5Color: "ಕಿತ್ತಳೆ",
      day5Alankara: "ಕಿತ್ತಳೆ ಸೀರೆ, ಗುಲಾಬಿ ಹಾರ",
      day5Puja: "6:00 ಅಭಿಷೇಕ · 9:00 ಅಲಂಕಾರ ದರ್ಶನ · 6:30 ಸಂಜೆ ಆರತಿ",
      day5Homa: "ಚಂಡಿ ಹೋಮ (ಲಘು) — 8:30 AM",
      day5Seva: "ಲಘು ಚಂಡಿ ಸಂಕಲ್ಪ · ಬಾಲ ಸಂರಕ್ಷಣಾ ಪ್ರಾರ್ಥನೆ",
      day6Num: "ದಿನ 6",
      day6Date: "16 ಅಕ್ಟೋಬರ್ 2026 · ಶುಕ್ರವಾರ",
      day6Title: "ಷಷ್ಠಿ · ಕಾತ್ಯಾಯನಿ",
      day6Desc:
        "ಮಹಿಷಾಸುರ ಮರ್ದಿನಿ ರೂಪ ಕಾತ್ಯಾಯನಿ. ವಿವಾಹ, ವಿಜಯ ಮತ್ತು ದುಷ್ಟ ಶಕ್ತಿ ನಿವಾರಣೆಗಾಗಿ ನವಚಂಡಿ ಹೋಮ.",
      day6Color: "ರಾಜಮರೂನ್",
      day6Alankara: "ರಾಜಮರೂನ್ ಸೀರೆ, ದೀಪ, ಬಿಲ್ವ",
      day6Puja: "6:00 ಅಭಿಷೇಕ · 9:00 ಅಲಂಕಾರ ದರ್ಶನ · 6:30 ಸಂಜೆ ಆರತಿ",
      day6Homa: "ನವಚಂಡಿ ಹೋಮ — 8:30 AM",
      day6Seva: "ನವಚಂಡಿ ಸಂಕಲ್ಪ · ಕನ್ಯಾ ಪೂಜೆ",
      day7Num: "ದಿನ 7",
      day7Date: "17 ಅಕ್ಟೋಬರ್ 2026 · ಶನಿವಾರ",
      day7Title: "ಸಪ್ತಮಿ · ಕಾಳರಾತ್ರಿ",
      day7Desc:
        "ಭಯ ನಿವಾರಕ ಕಾಳರಾತ್ರಿ ರೂಪ. ಅಜ್ಞಾನ, ನಕಾರಾತ್ಮಕತೆ ಮತ್ತು ದೋಷ ನಿವಾರಣೆಗಾಗಿ ಮಹಾ ಚಂಡಿ ಹೋಮ.",
      day7Color: "ಗಾಢ ನೀಲಿ / ಕಪ್ಪು",
      day7Alankara: "ಗಾಢ ನೀಲಿ, ಬೇವು, ಎಳ್ಳು",
      day7Puja: "6:00 ಅಭಿಷೇಕ · 9:00 ಅಲಂಕಾರ ದರ್ಶನ · 6:30 ಸಂಜೆ ಆರತಿ",
      day7Homa: "ಮಹಾ ಚಂಡಿ ಹೋಮ — 8:00 AM",
      day7Seva: "ಮಹಾ ಚಂಡಿ ಸಂಕಲ್ಪ · ರಾತ್ರಿ ಜಾಗರಣೆ",
      day8Num: "ದಿನ 8",
      day8Date: "18 ಅಕ್ಟೋಬರ್ 2026 · ಭಾನುವಾರ",
      day8Title: "ಅಷ್ಟಮಿ · ಮಹಾಗೌರಿ",
      day8Desc:
        "ಶುದ್ಧತೆ ಮತ್ತು ಶಾಂತಿಯ ರೂಪ ಮಹಾಗೌರಿ. ಮಹಾಷ್ಟಮಿ ದಿನ ದುರ್ಗಾ ಹೋಮ ಮತ್ತು ಕುಂಕುಮಾರ್ಚನೆ.",
      day8Color: "ಶುದ್ಧ ಬಿಳಿ",
      day8Alankara: "ಶುದ್ಧ ಬಿಳಿ ಸೀರೆ, ಗಂಧ, ಮುತ್ತು",
      day8Puja: "6:00 ಅಭಿಷೇಕ · 9:00 ಅಲಂಕಾರ ದರ್ಶನ · 7:00 ವಿಶೇಷ ಆರತಿ",
      day8Homa: "ದುರ್ಗಾ ಹೋಮ ಮತ್ತು ಕುಂಕುಮಾರ್ಚನೆ — 8:30 AM",
      day8Seva: "ಕುಂಕುಮಾರ್ಚನೆ · ಮಹಾಷ್ಟಮಿ ಅನ್ನದಾನ",
      day9Num: "ದಿನ 9",
      day9Date: "19–20 ಅಕ್ಟೋಬರ್ 2026 · ನವಮಿ–ದಶಮಿ",
      day9Title: "ನವಮಿ–ದಶಮಿ · ಸಿದ್ಧಿದಾತ್ರಿ",
      day9Desc:
        "ಸಿದ್ಧಿಗಳನ್ನು ಅನುಗ್ರಹಿಸುವ ಸಿದ್ಧಿದಾತ್ರಿ ಮತ್ತು ವಿಜಯದಶಮಿ ಪೂರ್ಣಾಹುತಿ. ರಥೋತ್ಸವ, ಸೀರೆ ಉತ್ಸವ ಮತ್ತು ಸಮುದಾಯ ಆಶೀರ್ವಾದ.",
      day9Color: "ಉತ್ಸವ ಚಿನ್ನ / ಗುಲಾಬಿ",
      day9Alankara: "ಉತ್ಸವ ಚಿನ್ನ, ರಥಾಲಂಕಾರ, ಪುಷ್ಪಾಭರಣ",
      day9Puja: "5:30 ವಿಶೇಷ ಅಭಿಷೇಕ · ರಥೋತ್ಸವ · 12:00 ಪೂರ್ಣಾಹುತಿ",
      day9Homa: "ವಿಜಯದಶಮಿ ಪೂರ್ಣಾಹುತಿ — ಮಧ್ಯಾಹ್ನ",
      day9Seva: "ಪೂರ್ಣಾಹುತಿ ಸಂಕಲ್ಪ · ಮಹಾ ಅನ್ನದಾನ · ಆಪರಾಜಿತಾ ಪೂಜೆ",
      darshanEyebrow: "ದೇವಸ್ಥಾನ ಗ್ಯಾಲರಿ",
      darshanTitle: "ದೂರದಿಂದಲೇ ದೇವಿಯ ಅಲಂಕಾರ ನೋಡಿ",
      darshanLead: "ಗರ್ಭಗುಡಿ, ಪವಿತ್ರ ಕೆರೆ ಮತ್ತು ನವರಾತ್ರಿ ಆಚರಣೆಗಳ ದೃಶ್ಯಗಳು.",
      gal1: "ಗರ್ಭಗುಡಿ ಅಲಂಕಾರ",
      gal2: "ದುರ್ಗಾದೇವಿ ಕೆರೆ",
      gal3: "ಚಂಡಿ ಹೋಮ",
      gal4: "ನವರಾತ್ರಿ ಮೆರವಣಿಗೆ",
      visitEyebrow: "ಸಂಪರ್ಕ ಮತ್ತು ಭೇಟಿ",
      visitTitle: "ಹಿರೇಕೆರೂರಿಗೆ ನಿಮ್ಮ ಯಾತ್ರೆ ಯೋಜಿಸಿ",
      visitAddress:
        "ಶ್ರೀ ದುರ್ಗಾದೇವಿ ದೇವಸ್ಥಾನ<br />ಟೆಂಪಲ್ ರೋಡ್, ಹಿರೇಕೆರೂರು<br />ಹಾವೇರಿ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ 581111",
      contactEmail: "ಇಮೇಲ್",
      footerBlessing: "ಓಂ ದುಂ ದುರ್ಗಾಯೈ ನಮಃ",
      footerCopy: "© 2026 ಶ್ರೀ ದುರ್ಗಾದೇವಿ ದೇವಸ್ಥಾನ, ಹಿರೇಕೆರೂರು. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      backTop: "ಮೇಲಕ್ಕೆ ಹೋಗಿ",
    },
  };

  let currentLang = localStorage.getItem("durga-lang") || "kn";

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang === "kn" ? "kn" : "en";
    document.body.classList.toggle("lang-kn", lang === "kn");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (value == null) return;
      if (key === "visitAddress") {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    currentLang = lang;
    localStorage.setItem("durga-lang", lang);
    updateCountdownLabel();
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function updateCountdownLabel() {
    const label = document.querySelector(".countdown-label");
    if (!label) return;
    const dict = translations[currentLang];
    const now = Date.now();
    const start = NAVARATRI_START.getTime();
    const end = start + 9 * 24 * 60 * 60 * 1000;
    if (now >= end) {
      label.textContent = dict.countdownEnded;
    } else if (now >= start) {
      label.textContent = dict.countdownLive;
    } else {
      label.textContent = dict.countdownLabel;
    }
  }

  function tickCountdown() {
    const root = document.querySelector("[data-countdown]");
    if (!root) return;

    const now = Date.now();
    const start = NAVARATRI_START.getTime();
    const end = start + 9 * 24 * 60 * 60 * 1000;
    let diff = Math.max(0, start - now);

    if (now >= start && now < end) {
      diff = Math.max(0, end - now);
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    root.querySelector("[data-days]").textContent = pad(days);
    root.querySelector("[data-hours]").textContent = pad(hours);
    root.querySelector("[data-mins]").textContent = pad(mins);
    root.querySelector("[data-secs]").textContent = pad(secs);
    updateCountdownLabel();
  }

  function setupNav() {
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector("[data-nav-toggle]");
    if (!nav || !toggle) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setupLangToggle() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyTranslations(btn.dataset.lang);
      });
    });
  }

  function setupHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  applyTranslations(currentLang);
  setupNav();
  setupLangToggle();
  setupHeaderScroll();
  setupReveal();
  tickCountdown();
  setInterval(tickCountdown, 1000);
})();
