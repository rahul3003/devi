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
        "Ten sacred Homas for Navaratri — 11–20 October 2026. Join the special Homas conducted by Sri Santosh Bhat Guruji.",
      countdownLabel: "Dasha Homas begin in",
      countdownLive: "Dasha Homas are underway",
      countdownEnded: "Dasha Homa complete — Jaya Durge",
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
        "This Sharad Navaratri, Sri Durgadevi Temple hosts ten special Homas (Dasha Homagalu) from 11 to 20 October 2026, conducted by Sri Santosh Bhat Guruji of Dharwad — each day honouring a form of the Goddess.",
      aboutP3:
        "The triennial Durgadevi Jatra draws tens of thousands; Navaratri renews that devotion every autumn through disciplined ritual, annadana, and collective prayer.",
      aboutCaption: "Durga Devi Kere · Hirekerur",
      aboutPoint1: "Village deity of Hirekerur · ancient Shakti kshetra",
      aboutPoint2: "Ten Navaratri Homas (11–20 October 2026)",
      aboutPoint3: "Conducted by Sri Santosh Bhat Guruji, Dharwad",
      scheduleEyebrow: "Navaratri 2026",
      scheduleTitle: "Ten Homas for Navaratri",
      scheduleLead:
        "Details of the ten special Homas at Sri Durgadevi Temple, Hirekerur — 11–20 October 2026.",
      pujaLabel: "Daily Puja:",
      pujaTimes: "Morning 6:00 AM · Madhyahna 12:00 PM · Evening 6:30 PM",
      homaLabel: "Homa:",
      homaTimes: "Each morning (contact the temple for details)",
      gurujiLabel: "Homa Acharya:",
      gurujiName: "Sri Santosh Bhat Guruji, Dharwad",
      eventDatesLabel: "Dates:",
      eventDates: "11 October 2026 (Sunday) to 20 October 2026 (Tuesday)",
      sankalpaLabel: "Family sankalpa:",
      sankalpaInfo: "₹501 — have all 10 days of Homa performed in your family's name and receive prasada",
      labelColor: "Colour",
      labelAlankara: "Alankara",
      labelDayPuja: "Puja",
      labelSpecialHoma: "Special Homa",
      labelDaySeva: "Seva",
      day1Num: "Day 1",
      day1Date: "11 October 2026 · Sunday",
      day1Title: "Shailaputri Devi Homa",
      day1Desc:
        "Opening of the ten Navaratri Homas — worship of mountain-born Shailaputri for stability, purity, and a fresh sankalpa.",
      day1Color: "White",
      day1Homa: "Shailaputri Devi Homa",
      day2Num: "Day 2",
      day2Date: "12 October 2026 · Monday",
      day2Title: "Brahmacharini Devi Homa",
      day2Desc:
        "Homa of Brahmacharini, goddess of tapas and knowledge — for discipline, learning, and spiritual strength.",
      day2Color: "Red",
      day2Homa: "Brahmacharini Devi Homa",
      day3Num: "Day 3",
      day3Date: "13 October 2026 · Tuesday",
      day3Title: "Chandraghanta Devi Homa",
      day3Desc:
        "Homa of Chandraghanta, whose crescent-bell form grants courage, protection, and victory over adversity.",
      day3Color: "Golden yellow",
      day3Homa: "Chandraghanta Devi Homa",
      day4Num: "Day 4",
      day4Date: "14 October 2026 · Wednesday",
      day4Title: "Kushmanda Devi Homa",
      day4Desc:
        "Homa of Kushmanda, the creative power of the cosmos — for health, prosperity, and family wellbeing.",
      day4Color: "Green",
      day4Homa: "Kushmanda Devi Homa",
      day5Num: "Day 5",
      day5Date: "15 October 2026 · Thursday",
      day5Title: "Skandamata Devi Homa",
      day5Desc:
        "Homa of Skandamata, mother of Skanda — for motherhood, progeny blessings, and family protection.",
      day5Color: "Orange",
      day5Homa: "Skandamata Devi Homa",
      day6Num: "Day 6",
      day6Date: "16 October 2026 · Friday",
      day6Title: "Katyayani Devi Homa",
      day6Desc:
        "Homa of Katyayani, the Mahishasura-mardini form — for marriage, victory, and removal of negative forces.",
      day6Color: "Royal maroon",
      day6Homa: "Katyayani Devi Homa",
      day7Num: "Day 7",
      day7Date: "17 October 2026 · Saturday",
      day7Title: "Kalaratri Devi Homa",
      day7Desc:
        "Homa of Kalaratri, remover of fear — for dispelling ignorance, negativity, and doshas.",
      day7Color: "Deep indigo / black",
      day7Homa: "Kalaratri Devi Homa",
      day8Num: "Day 8",
      day8Date: "18 October 2026 · Sunday",
      day8Title: "Mahagauri Devi Homa",
      day8Desc:
        "Homa of Mahagauri, form of purity and peace — for cleansing of mind and deeds.",
      day8Color: "Pure white",
      day8Homa: "Mahagauri Devi Homa",
      day9Num: "Day 9",
      day9Date: "19 October 2026 · Monday",
      day9Title: "Durgagauri Chamundi Homa",
      day9Desc:
        "Durgagauri Chamundi Homa — special worship for shakti, protection, and removal of evil.",
      day9Color: "Red / gold",
      day9Homa: "Durgagauri Chamundi Homa",
      day10Num: "Day 10",
      day10Date: "20 October 2026 · Tuesday",
      day10Title: "Mahasuramardini Devi Homa",
      day10Desc:
        "Culmination of the ten Homas — Mahasuramardini Devi Homa for victory, protection, and community blessing.",
      day10Color: "Festive gold / pink",
      day10Homa: "Mahasuramardini Devi Homa",
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
      footerBlessing: "|| Jaya Durge Jaya Durge ||",
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
        "ನವರಾತ್ರಿ ನಿಮಿತ್ತ ದಶ ಹೋಮಗಳು — 11–20 ಅಕ್ಟೋಬರ್ 2026. ಶ್ರೀ ಸಂತೋಷ್ ಭಟ್ ಗುರೂಜಿ ನಡೆಸುವ ವಿಶೇಷ ಹೋಮಗಳಲ್ಲಿ ಭಾಗಿಯಾಗಿ.",
      countdownLabel: "ದಶ ಹೋಮಗಳ ಪ್ರಾರಂಭಕ್ಕೆ",
      countdownLive: "ದಶ ಹೋಮಗಳು ನಡೆಯುತ್ತಿವೆ",
      countdownEnded: "ದಶ ಹೋಮ ಪೂರ್ಣ — ಜಯ ದುರ್ಗೇ",
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
        "ಈ ಶರದ್ ನವರಾತ್ರಿಯಲ್ಲಿ ಶ್ರೀ ದುರ್ಗಾದೇವಿ ದೇವಸ್ಥಾನದಲ್ಲಿ 11ರಿಂದ 20 ಅಕ್ಟೋಬರ್ 2026ರವರೆಗೆ ದಶ ಹೋಮಗಳು ನಡೆಯಲಿವೆ. ಧಾರವಾಡದ ಶ್ರೀ ಸಂತೋಷ್ ಭಟ್ ಗುರೂಜಿ ನಡೆಸುವ ಪ್ರತಿ ದಿನದ ಹೋಮವು ದೇವಿಯ ಒಂದು ರೂಪವನ್ನು ಗೌರವಿಸುತ್ತದೆ.",
      aboutP3:
        "ಮೂರು ವರ್ಷಕ್ಕೊಮ್ಮೆ ನಡೆಯುವ ದುರ್ಗಾದೇವಿ ಜಾತ್ರೆಗೆ ಸಾವಿರಾರು ಭಕ್ತರು ಬರುತ್ತಾರೆ; ಪ್ರತಿ ಶರತ್ಕಾಲದ ನವರಾತ್ರಿಯಲ್ಲಿ ಆ ಭಕ್ತಿ ಅನ್ನದಾನ ಮತ್ತು ಸಾಮೂಹಿಕ ಪ್ರಾರ್ಥನೆಯ ಮೂಲಕ ನವೀಕೃತವಾಗುತ್ತದೆ.",
      aboutCaption: "ದುರ್ಗಾದೇವಿ ಕೆರೆ · ಹಿರೇಕೆರೂರು",
      aboutPoint1: "ಹಿರೇಕೆರೂರು ಗ್ರಾಮ ದೇವತೆ · ಪುರಾತನ ಶಕ್ತಿ ಕ್ಷೇತ್ರ",
      aboutPoint2: "ನವರಾತ್ರಿ ನಿಮಿತ್ತ ದಶ ಹೋಮಗಳು (11–20 ಅಕ್ಟೋಬರ್ 2026)",
      aboutPoint3: "ಶ್ರೀ ಸಂತೋಷ್ ಭಟ್ ಗುರೂಜಿ, ಧಾರವಾಡ",
      scheduleEyebrow: "ನವರಾತ್ರಿ 2026",
      scheduleTitle: "ನವರಾತ್ರಿ ನಿಮಿತ್ತ ದಶ ಹೋಮಗಳು",
      scheduleLead:
        "ಹಿರೇಕೆರೂರು ಗ್ರಾಮ ದೇವತೆ ಶ್ರೀ ದುರ್ಗಾದೇವಿ ದೇವಸ್ಥಾನದಲ್ಲಿ 11–20 ಅಕ್ಟೋಬರ್ 2026ರಲ್ಲಿ ನಡೆಯುವ ಹತ್ತು ವಿಶೇಷ ಹೋಮಗಳ ವಿವರ.",
      pujaLabel: "ದೈನಂದಿನ ಪೂಜೆ:",
      pujaTimes: "ಬೆಳಿಗ್ಗೆ 6:00 · ಮಧ್ಯಾಹ್ನ 12:00 · ಸಂಜೆ 6:30",
      homaLabel: "ಹೋಮ:",
      homaTimes: "ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ (ವಿವರಗಳಿಗೆ ದೇವಸ್ಥಾನವನ್ನು ಸಂಪರ್ಕಿಸಿ)",
      gurujiLabel: "ಹೋಮಾಚಾರ್ಯ:",
      gurujiName: "ಶ್ರೀ ಸಂತೋಷ್ ಭಟ್ ಗುರೂಜಿ, ಧಾರವಾಡ",
      eventDatesLabel: "ದಿನಾಂಕ:",
      eventDates: "11 ಅಕ್ಟೋಬರ್ 2026 (ಭಾನುವಾರ) ರಿಂದ 20 ಅಕ್ಟೋಬರ್ 2026 (ಮಂಗಳವಾರ)",
      sankalpaLabel: "ಕುಟುಂಬ ಸಂಕಲ್ಪ:",
      sankalpaInfo: "₹501 — ಎಲ್ಲಾ 10 ದಿನಗಳ ಹೋಮವನ್ನು ನಿಮ್ಮ ಕುಟುಂಬದ ಹೆಸರಿನಲ್ಲಿ ನಡೆಸಿ ಪ್ರಸಾದ ಪಡೆಯಿರಿ",
      labelColor: "ವರ್ಣ",
      labelAlankara: "ಅಲಂಕಾರ",
      labelDayPuja: "ಪೂಜೆ",
      labelSpecialHoma: "ವಿಶೇಷ ಹೋಮ",
      labelDaySeva: "ಸೇವೆ",
      day1Num: "ದಿನ 1",
      day1Date: "11 ಅಕ್ಟೋಬರ್ 2026 · ಭಾನುವಾರ",
      day1Title: "ಶೈಲಪುತ್ರಿ ದೇವಿಯ ಹೋಮ",
      day1Desc:
        "ನವರಾತ್ರಿ ದಶ ಹೋಮಗಳ ಪ್ರಾರಂಭ — ಪರ್ವತಾಧಿಷ್ಠಿತ ಶೈಲಪುತ್ರಿ ದೇವಿಯ ಹೋಮ. ಸ್ಥಿರತೆ, ಶುದ್ಧಿ ಮತ್ತು ನೂತನ ಸಂಕಲ್ಪಕ್ಕಾಗಿ ಪ್ರಾರ್ಥನೆ.",
      day1Color: "ಬಿಳಿ",
      day1Homa: "ಶೈಲಪುತ್ರಿ ದೇವಿಯ ಹೋಮ",
      day2Num: "ದಿನ 2",
      day2Date: "12 ಅಕ್ಟೋಬರ್ 2026 · ಸೋಮವಾರ",
      day2Title: "ಬ್ರಹ್ಮಚಾರಿಣಿ ದೇವಿಯ ಹೋಮ",
      day2Desc:
        "ತಪಸ್ಸು ಮತ್ತು ಜ್ಞಾನದ ದೇವಿ ಬ್ರಹ್ಮಚಾರಿಣಿ ಹೋಮ. ಇಂದ್ರಿಯ ನಿಗ್ರಹ, ವಿದ್ಯೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಶಕ್ತಿಗಾಗಿ ಭಕ್ತರ ಪ್ರಾರ್ಥನೆ.",
      day2Color: "ಕೆಂಪು",
      day2Homa: "ಬ್ರಹ್ಮಚಾರಿಣಿ ದೇವಿಯ ಹೋಮ",
      day3Num: "ದಿನ 3",
      day3Date: "13 ಅಕ್ಟೋಬರ್ 2026 · ಮಂಗಳವಾರ",
      day3Title: "ಚಂದ್ರಘಂಟಾ ದೇವಿಯ ಹೋಮ",
      day3Desc:
        "ಚಂದ್ರಾಕೃತಿ ಘಂಟೆಯನ್ನು ಹೊಂದಿದ ಚಂದ್ರಘಂಟಾ ದೇವಿಯ ಹೋಮ — ಧೈರ್ಯ, ರಕ್ಷಣೆ ಮತ್ತು ಶತ್ರುಗಳ ನಾಶಕ್ಕಾಗಿ ಪೂಜೆ.",
      day3Color: "ಚಿನ್ನದ ಹಳದಿ",
      day3Homa: "ಚಂದ್ರಘಂಟಾ ದೇವಿಯ ಹೋಮ",
      day4Num: "ದಿನ 4",
      day4Date: "14 ಅಕ್ಟೋಬರ್ 2026 · ಬುಧವಾರ",
      day4Title: "ಕೂಷ್ಮಾಂಡ ದೇವಿಯ ಹೋಮ",
      day4Desc:
        "ಸೃಷ್ಟಿ ಶಕ್ತಿಯ ರೂಪ ಕೂಷ್ಮಾಂಡ ದೇವಿಯ ಹೋಮ. ಆರೋಗ್ಯ, ಸಮೃದ್ಧಿ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಆರಾಧನೆ.",
      day4Color: "ಹಸಿರು",
      day4Homa: "ಕೂಷ್ಮಾಂಡ ದೇವಿಯ ಹೋಮ",
      day5Num: "ದಿನ 5",
      day5Date: "15 ಅಕ್ಟೋಬರ್ 2026 · ಗುರುವಾರ",
      day5Title: "ಸ್ಕಂದಮಾತಾ ದೇವಿಯ ಹೋಮ",
      day5Desc:
        "ಸ್ಕಂದನನ್ನು ಹೊತ್ತ ಸ್ಕಂದಮಾತಾ ದೇವಿಯ ಹೋಮ — ಮಾತೃತ್ವ, ಸಂತಾನ ಭಾಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ರಕ್ಷಣೆಗಾಗಿ ಪ್ರಾರ್ಥನೆ.",
      day5Color: "ಕಿತ್ತಳೆ",
      day5Homa: "ಸ್ಕಂದಮಾತಾ ದೇವಿಯ ಹೋಮ",
      day6Num: "ದಿನ 6",
      day6Date: "16 ಅಕ್ಟೋಬರ್ 2026 · ಶುಕ್ರವಾರ",
      day6Title: "ಕಾತ್ಯಾಯಿನಿ ದೇವಿಯ ಹೋಮ",
      day6Desc:
        "ಮಹಿಷಾಸುರ ಮರ್ದಿನಿ ರೂಪ ಕಾತ್ಯಾಯಿನಿ ದೇವಿಯ ಹೋಮ. ವಿವಾಹ, ವಿಜಯ ಮತ್ತು ದುಷ್ಟ ಶಕ್ತಿ ನಿವಾರಣೆಗಾಗಿ ಆರಾಧನೆ.",
      day6Color: "ರಾಜಮರೂನ್",
      day6Homa: "ಕಾತ್ಯಾಯಿನಿ ದೇವಿಯ ಹೋಮ",
      day7Num: "ದಿನ 7",
      day7Date: "17 ಅಕ್ಟೋಬರ್ 2026 · ಶನಿವಾರ",
      day7Title: "ಕಾಳರಾತ್ರಿ ದೇವಿಯ ಹೋಮ",
      day7Desc:
        "ಭಯ ನಿವಾರಕ ಕಾಳರಾತ್ರಿ ದೇವಿಯ ಹೋಮ. ಅಜ್ಞಾನ, ನಕಾರಾತ್ಮಕತೆ ಮತ್ತು ದೋಷ ನಿವಾರಣೆಗಾಗಿ ಪ್ರಾರ್ಥನೆ.",
      day7Color: "ಗಾಢ ನೀಲಿ / ಕಪ್ಪು",
      day7Homa: "ಕಾಳರಾತ್ರಿ ದೇವಿಯ ಹೋಮ",
      day8Num: "ದಿನ 8",
      day8Date: "18 ಅಕ್ಟೋಬರ್ 2026 · ಭಾನುವಾರ",
      day8Title: "ಮಹಾಗೌರಿ ದೇವಿಯ ಹೋಮ",
      day8Desc:
        "ಶುದ್ಧತೆ ಮತ್ತು ಶಾಂತಿಯ ರೂಪ ಮಹಾಗೌರಿ ದೇವಿಯ ಹೋಮ. ಮನಸ್ಸು ಮತ್ತು ಕರ್ಮಗಳ ಶುದ್ಧೀಕರಣಕ್ಕಾಗಿ ಆರಾಧನೆ.",
      day8Color: "ಶುದ್ಧ ಬಿಳಿ",
      day8Homa: "ಮಹಾಗೌರಿ ದೇವಿಯ ಹೋಮ",
      day9Num: "ದಿನ 9",
      day9Date: "19 ಅಕ್ಟೋಬರ್ 2026 · ಸೋಮವಾರ",
      day9Title: "ದುರ್ಗಾಗೌರಿ ಚಾಮುಂಡಿ ಹೋಮ",
      day9Desc:
        "ದುರ್ಗಾಗೌರಿ ಚಾಮುಂಡಿ ಹೋಮ — ಶಕ್ತಿ, ರಕ್ಷಣೆ ಮತ್ತು ದುಷ್ಟ ನಿವಾರಣೆಗಾಗಿ ವಿಶೇಷ ಆರಾಧನೆ.",
      day9Color: "ಕೆಂಪು / ಚಿನ್ನ",
      day9Homa: "ದುರ್ಗಾಗೌರಿ ಚಾಮುಂಡಿ ಹೋಮ",
      day10Num: "ದಿನ 10",
      day10Date: "20 ಅಕ್ಟೋಬರ್ 2026 · ಮಂಗಳವಾರ",
      day10Title: "ಮಹಾಸುರಮರ್ದಿನಿ ದೇವಿಯ ಹೋಮ",
      day10Desc:
        "ದಶ ಹೋಮಗಳ ಪೂರ್ಣಾಹುತಿ — ಮಹಾಸುರಮರ್ದಿನಿ ದೇವಿಯ ಹೋಮ. ವಿಜಯ, ರಕ್ಷಣೆ ಮತ್ತು ಸಮುದಾಯ ಆಶೀರ್ವಾದ.",
      day10Color: "ಉತ್ಸವ ಚಿನ್ನ / ಗುಲಾಬಿ",
      day10Homa: "ಮಹಾಸುರಮರ್ದಿನಿ ದೇವಿಯ ಹೋಮ",
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
      footerBlessing: "|| ಜಯ ದುರ್ಗೇ ಜಯ ದುರ್ಗೇ ||",
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
    const end = start + 10 * 24 * 60 * 60 * 1000;
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
    const end = start + 10 * 24 * 60 * 60 * 1000;
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
