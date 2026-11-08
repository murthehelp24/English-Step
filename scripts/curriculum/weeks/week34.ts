import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 5: ความแม่นยำระดับสูงและการต่อยอดใช้จริงตลอดชีวิต';

export const WEEK34: ModuleSeed = createModule(
  {
    week: 34,
    phase: 5,
    phase_title: PHASE_TITLE,
    cefr_level: 'C1',
    title: 'Idiomatic Fluency, Metaphors & Cultural Pragmatics',
    summary:
      'ใช้สำนวนและอุปมาอุปไมยในชีวิตจริงและที่ทำงานอย่างพอดีและถูกบริบท พร้อมเข้าใจอารมณ์ขัน คำเปรียบเทียบ และวัฒนธรรมการสื่อสารสากล',
    focus: 'Real-World Idioms, Conceptual Metaphors, Cultural Pragmatics & Humor',
  },
  [
    {
      day: 232,
      title: 'Workplace & Collaboration Idioms: สำนวนที่ทำงานแบบธรรมชาติ ไม่ฝืนและไม่ผิดความหมาย',
      objective:
        'ใช้สำนวนการทำงานอย่าง on the same page, back to the drawing board, cut corners, get the ball rolling และ think outside the box ได้ตรงอารมณ์และความหมายจริง',
      explanation:
        'สำนวนภาษาอังกฤษไม่ได้มีไว้ท่องเป็นรายการแปลกๆ แต่ทุกสำนวนมี **"ภาพอุปมา (Metaphor)"** ซ่อนอยู่: 1) **`on the same page`** = อ่านหน้าเดียวกันอยู่ → เข้าใจตรงกันทั้งทีม (`Let’s make sure we’re on the same page before lunch.`) 2) **`get the ball rolling`** = เริ่มกลิ้งลูกบอล → เปิดฉากเริ่มงานหรือเริ่มคุย 3) **`back to the drawing board`** = กลับไปที่กระดานร่างแบบ → แผนแรกไม่เวิร์ก ต้องเริ่มออกแบบใหม่ทั้งหมด 4) **`cut corners`** = เดินลัดตัดมุม → **ความหมายแง่ลบเสมอ!** แปลว่าทำชุ่ยๆ ลัดขั้นตอนเพื่อประหยัดเวลา/เงิน จนเสียคุณภาพ (ห้ามใช้ชมใครว่าทำงานเร็วเด็ดขาด!) 5) **`think outside the box`** = คิดนอกกรอบ (ระวังอย่าใช้พร่ำเพรื่อในอีเมลจนดูซ้ำซาก แต่ใช้พูดคุยระดมไอเดียได้เป็นธรรมชาติ)',
      sound: [
        'Idiomatic Stress Placement & Linking in Common Phrases',
        'collaborate /kəˈlæb.ə.reɪt/ · alignment /əˈlaɪn.mənt/ · compromise /ˈkɒm.prə.maɪz/ · streamline /ˈstriːm.laɪn/',
        'สังเกตการเน้นเสียงในสำนวน: "on the same **PAGE**" (เน้น page), "cut **COR**-ners", "back to the **DRAW**-ing board", "get the **BALL** rolling"',
        'ฝึกพูดเชื่อมสำนวนเข้าประโยคจริง 4 แบบ: We’re_on the same page / Let’s get_the ball rolling / Don’t cut corners',
      ],
      l1: [
        'เข้าใจผิดว่า "cut corners" แปลว่าทำงานไวหรือประหยัดงบเก่ง ("We cut corners to finish faster!") หรือใช้สำนวนผิดรูป เช่น "❌ on a same page" / "❌ back to drawing board"',
        'แปลตรงตัวคำว่า "ตัดมุม" ว่าทำงานฉลาดลัดขั้นตอน และมักเผลอตัด "the" ในสำนวนตายตัว',
        'ล็อกกฎสำนวนตายตัว 2 ข้อ: 1) จำให้ติดหูว่า cut corners = ชุ่ย/ลดคุณภาพ (ความหมายลบ!) ถ้าอยากชมว่าประหยัดเวลาอย่างมีคุณภาพใช้ streamline แทน 2) article ในสำนวนห้ามเปลี่ยน: on **the** same page, back to **the** drawing board',
      ],
      vocab: [
        ['on the same page', 'เข้าใจตรงกัน / เห็นพ้องต้องกัน', '/ɒn ðə seɪm peɪdʒ/', 'get everyone on the same page', 'ทำให้ทุกคนเข้าใจตรงกัน'],
        ['cut corners', 'ทำลัดขั้นตอนจนเสียคุณภาพ', '/kʌt ˈkɔː.nərz/', 'never cut corners on safety', 'อย่ามักง่ายลดขั้นตอนเรื่องความปลอดภัย'],
        ['back to the drawing board', 'กลับไปเริ่มต้นออกแบบใหม่', '/bæk tuː ðə ˈdrɔː.ɪŋ bɔːd/', 'go back to the drawing board', 'ต้องกลับไปเริ่มวางแผนใหม่ทั้งหมด'],
        ['get the ball rolling', 'เปิดฉากเริ่มต้นลงมือทำ', '/ɡet ðə bɔːl ˈrəʊ.lɪŋ/', 'get the ball rolling early', 'เริ่มเดินหน้าตั้งแต่เนิ่นๆ'],
        ['think outside the box', 'คิดนอกกรอบเดิมๆ', '/θɪŋk ˌaʊtˈsaɪd ðə bɒks/', 'encourage people to think outside the box', 'กระตุ้นให้กล้าคิดนอกกรอบ'],
        ['streamline', 'ปรับขั้นตอนให้คล่องตัวขึ้น (ไม่ลดคุณภาพ)', '/ˈstriːm.laɪn/', 'streamline the approval flow', 'ปรับขั้นตอนอนุมัติให้กระชับขึ้น'],
        ['alignment', 'ความสอดคล้องเข้าใจตรงกัน', '/əˈlaɪn.mənt/', 'reach clear alignment', 'สร้างความเข้าใจตรงกันชัดเจน'],
      ],
      examples: [
        ['Before we order packaging materials, let’s have a quick call to get everyone on the same page.', 'ก่อนจะสั่งวัสดุแพ็กเกจจิ้ง มาโทรคุยสั้นๆ ให้ทุกคนเข้าใจตรงกันก่อนนะ'],
        ['When local suppliers ran out of recycled paper, our designer had to go back to the drawing board.', 'พอซัพพลายเออร์ท้องถิ่นหมดกระดาษรีไซเคิล ดีไซเนอร์ของเราก็ต้องกลับไปเริ่มออกแบบใหม่ทั้งหมด'],
        ['Rushing the inspection would mean cutting corners on food safety, which we simply cannot risk.', 'การเร่งตรวจรับสินค้าหมายถึงการมักง่ายเรื่องความปลอดภัยอาหาร ซึ่งเราเสี่ยงไม่ได้เด็ดขาด'],
        ['To get the ball rolling on Monday’s meeting, Namo shared two rough sketches instead of empty slides.', 'เพื่อเปิดฉากการประชุมวันจันทร์ นะโมแชร์ภาพร่างหยาบๆ สองแบบแทนที่จะเปิดสไลด์เปล่าๆ'],
      ],
      reading:
        'When two small cafés in Nimman decided to co-host a weekend coffee market, excitement ran high on day one. Unfortunately, different teams imagined completely different setups. One crew pictured quiet acoustic music and pour-over stalls, while another drafted bright banners and tasting games. Fifteen minutes into their planning chat, Mint paused and suggested getting everyone on the same page before spending a single baht. To get the ball rolling smoothly, they wrote three shared principles on a whiteboard: calm neighborhood vibe, zero plastic waste, and transparent profit sharing. Midway through testing booth layouts, rain forecasts forced them to rethink an open lawn setup. Rather than panicking, Mint laughed and said it was back to the drawing board for canopy placement. One vendor offered cheap thin tarps that tore easily in wind, yet the organizers refused to cut corners on shelter safety. Instead, they thought outside the box and partnered with an adjacent craft gallery whose covered courtyard stayed dry all weekend, turning a weather headache into their best collaboration yet.',
      listenQ: 'How did the organizers solve the rain shelter issue without cutting corners?',
      listenA: 'They partnered with an adjacent craft gallery that had a dry covered courtyard.',
      dictation: 'Never cut corners on safety just to save an hour.',
      listenNote:
        'ฟังการเชื่อมเสียงในสำนวน: "get everyone_on the same page" และ "back to the drawing board" คำว่า "to the" ลดเสียงเบาและไวเพื่อส่งแรงไปที่ drawing',
      drills: [
        {
          kind: 'choice',
          prompt: 'ประโยคใดใช้สำนวน cut corners ได้ถูกต้องตรงความหมายจริงของเจ้าของภาษา?',
          answer: 'Because the contractor cut corners on waterproofing, the ceiling leaked during the first storm.',
          choices: [
            'Our engineer cut corners brilliantly, making the bridge twice as safe and durable.',
            'Because the contractor cut corners on waterproofing, the ceiling leaked during the first storm.',
            'Thank you for cutting corners to help our team understand each other clearly.',
            'Let’s cut corners first so we can brainstorm creative ideas together.',
          ],
          explanation: 'cut corners มีความหมายแง่ลบ = มักง่าย/ลัดขั้นตอนสำคัญจนเกิดปัญหาหรือลดคุณภาพ',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้สำนวนที่ผิดรูป article และความหมาย: "Our first layout failed, so we are back to drawing board to get a ball rolling again."',
          answer: 'Our first layout failed, so we are back to the drawing board to get the ball rolling again.',
          explanation: 'สำนวนตายตัวต้องใช้ back to the drawing board และ get the ball rolling (ใช้ the ทั้งคู่)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในสำนวนให้สมบูรณ์: Before assigning tasks, let’s schedule ten minutes to make sure everyone is on the same _____.',
          answer: 'page',
          explanation: 'on the same page = เข้าใจตรงกันในทิศทางเดียวกัน',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยใช้ get the ball rolling: "ใครอยากช่วยเปิดประเด็นเริ่มพูดถึงไอเดียของอาทิตย์หน้าก่อนไหม?"',
          answer: 'Who would like to get the ball rolling on next week’s ideas?',
          explanation: 'get the ball rolling on... เป็นสำนวนสุภาพและเป็นกันเองในการชวนเริ่มประชุม/เริ่มลงมือทำ',
        },
      ],
      writing:
        'เขียนบันทึกอัปเดตงานหรือเรื่องเล่าโปรเจกต์ร่วมกับเพื่อน (5–6 ประโยค) โดยใช้สำนวนการทำงานอย่างน้อย 3 สำนวนจากบทนี้ให้ถูกโทนและถูกไวยากรณ์',
      writingSample:
        'Early this month, three friends and I decided to build a neighborhood book-swap shelf outside our apartment lobby. At our first café meetup, we shared plenty of wishes, so I suggested writing a clear checklist to get everyone on the same page. My friend Ton shared two wooden shelf measurements to get the ball rolling on budgeting. When carpenter quotes came back double what we expected, we had to go back to the drawing board on materials. Still, we refused to cut corners on weatherproof varnish because Bangkok’s monsoon humidity ruins untreated pine within weeks.',
      writingNote:
        'เช็ก article ในสำนวนทุกตัว (the same page / the drawing board / the ball rolling) และตรวจว่า cut corners ถูกใช้ในความหมาย "ไม่ยอมชุ่ย/ทำชุ่ย"',
      speakingTopic: 'เล่าเบื้องหลังโปรเจกต์หรืองานกลุ่มที่เคยติดขัดแล้วแก้จนลงตัว (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้ get the ball rolling เล่าจุดเริ่มต้น และ back to the drawing board เล่าช่วงที่ต้องรื้อแผนใหม่',
        'อธิบายจุดที่ไม่ยอม cut corners และวิธีคิดแก้ไขแบบ think outside the box',
      ],
    },
    {
      day: 233,
      title: 'Resilience & Perspective Idioms: มุมมองเมื่อเจอวิกฤตด้วย silver lining, bite the bullet & weather the storm',
      objective:
        'ถ่ายทอดความอดทน มุมมองเชิงบวกแบบมีวุฒิภาวะ และหลักการตัดสินใจจริงด้วยสำนวน silver lining, weather the storm, blessing in disguise, rule of thumb และ bite the bullet',
      explanation:
        'เวลาพูดคุยเรื่องชีวิต การย้ายงาน หรือปัญหาที่ไม่คาดฝัน ภาษาอังกฤษระดับ C1 ใช้สำนวนเปรียบเทียบเพื่อ **ปลอบใจอย่างไม่โลกสวยเกินจริง** และแสดงวุฒิภาวะ: 1) **`weather the storm`** = ฟันฝ่าพายุ/ช่วงเวลายากลำบากไปให้รอด (`Our shop weathered the storm during the quiet season.`) 2) **`bite the bullet`** = กัดฟันทำสิ่งยาก/น่าอึดอัดที่หลีกเลี่ยงไม่ได้สักที (`I finally bit the bullet and booked that dentist checkup.`) 3) **`every cloud has a silver lining` / `a silver lining`** = แสงเงินปลายขอบเมฆดำ → ข้อดีเล็กๆ ที่ซ่อนอยู่ในเรื่องแย่ 4) **`a blessing in disguise`** = โชคดีในคราบความโชคร้าย (ตอนเกิดดูแย่ แต่มองย้อนกลับไปกลับเป็นผลดีมาก!) 5) **`a rule of thumb`** = หลักคิดคร่าวๆ ที่ใช้งานได้จริงจากประสบการณ์ (ไม่ใช่กฎเป๊ะทางวิทยาศาสตร์)',
      sound: [
        'Expressive Stress on Emotional & Metaphorical Keywords',
        'disguise /dɪsˈɡaɪz/ · weather /ˈweð.ər/ · resilient /rɪˈzɪl.i.ənt/ · silver lining /ˌsɪl.vər ˈlaɪ.nɪŋ/',
        'คำว่า "blessing in disguise" ออกเสียงเชื่อม "blessing_in" และเน้นหนักที่พยางค์ท้าย -GUISE /dɪsˈɡaɪz/ ไม่ใช่ DIS-guise!',
        'ฝึกพูด 3 ประโยคด้วยน้ำเสียงจริงจังแต่มีความหวัง: bite the **BUL**-let / weather the **STORM** / blessing in dis-**GUISE**',
      ],
      l1: [
        'ใช้ "silver lining" แทน "blessing in disguise" สับสนกัน หรือแปลคำว่า "bite the bullet" ตรงตัวว่าเป็นเรื่องอันตราย ("อย่าไปกัดกระสุนนะ!")',
        'ไม่รู้ที่มาของคำว่า "bite the bullet" (สมัยก่อนทหารกัดตะกั่วเพื่อทนความเจ็บเวลาผ่าตัด) จึงนึกภาพความหมายไม่ออก',
        'แยกคู่ความหมายให้แม่น: ข่มใจลงมือทำสิ่งที่ยาก/กลัว = **bite the bullet** | อดทนรอจนวิกฤตผ่าน = **weather the storm** | ข้อดีแฝงในเรื่องร้าย = **silver lining** | เรื่องร้ายที่กลายเป็นจุดเปลี่ยนดีมาก = **blessing in disguise**',
      ],
      vocab: [
        ['weather the storm', 'ฟันฝ่าช่วงเวลายากลำบากจนผ่านพ้นไป', '/ˈweð.ər ðə stɔːm/', 'weather the storm together', 'ฟันฝ่าช่วงวิกฤตไปด้วยกัน'],
        ['bite the bullet', 'กัดฟันลงมือทำเรื่องยากที่เลี่ยงไม่ได้', '/baɪt ðə ˈbʊl.ɪt/', 'bite the bullet and apologize', 'กัดฟันเอ่ยคำขอโทษตรงๆ'],
        ['silver lining', 'ข้อดีหรือความหวังเล็กๆ ในสถานการณ์แย่', '/ˌsɪl.vər ˈlaɪ.nɪŋ/', 'find a silver lining', 'มองหาข้อดีเล็กๆ ท่ามกลางเรื่องแย่'],
        ['blessing in disguise', 'โชคดีในคราบความโชคร้าย', '/ˈbles.ɪŋ ɪn dɪsˈɡaɪz/', 'turn out to be a blessing in disguise', 'กลายเป็นเรื่องดีที่แฝงมาอย่างไม่คาดคิด'],
        ['rule of thumb', 'หลักเกณฑ์คร่าวๆ จากประสบการณ์จริง', '/ruːl əv θʌm/', 'a good rule of thumb', 'หลักคิดคร่าวๆ ที่ใช้ได้ผลดี'],
        ['setback', 'อุปสรรค / ความถดถอยชั่วคราว', '/ˈset.bæk/', 'recover from a setback', 'ฟื้นตัวจากอุปสรรค'],
        ['silver-tongued', 'พูดจาหว่านล้อมเก่ง (หมายเหตุ: ใช้เฉพาะบริบทระมัดระวัง)', '/ˌsɪl.vəˈtʌŋd/', 'stay grounded rather than silver-tongued', 'คงความจริงใจมากกว่าการพูดจาหวานหู'],
      ],
      examples: [
        ['Losing that first freelance contract stung at the time, yet it became a blessing in disguise when a steadier studio hired me.', 'การพลาดงานฟรีแลนซ์ชิ้นแรกตอนนั้นเจ็บใจมาก แต่มันกลับกลายเป็นโชคดีในคราบโชคร้ายเมื่อสตูดิโอที่มั่นคงกว่ามาจ้างฉัน'],
        ['After postponing tax paperwork for three weeks, I finally bit the bullet and sorted every receipt on Sunday.', 'หลังผัดผ่อนเอกสารภาษีมาสามอาทิตย์ ในที่สุดฉันก็กัดฟันสะสางใบเสร็จทั้งหมดในวันอาทิตย์'],
        ['As a rule of thumb when cooking curry paste, gentle heat brings out far deeper aroma than rushing on high flame.', 'โดยหลักคร่าวๆ เวลาผัดพริกแกง ไฟอ่อนจะดึงกลิ่นหอมลึกกว่าการเร่งไฟแรงมาก'],
        ['Strong friendships are rarely built in sunny weeks alone; they grow when two people weather the storm side by side.', 'มิตรภาพที่แข็งแรงไม่ได้เกิดแค่ในสัปดาห์ที่ราบรื่น แต่มักเติบโตตอนที่สองคนช่วยกันฝ่ามรสุมเคียงข้างกัน'],
      ],
      reading:
        'Three years ago, Korn’s small bakery in Hat Yai saw foot traffic vanish overnight after major road construction dug up the entire block. Many friends urged him to shut the storefront immediately, yet Korn decided to weather the storm for ninety days before making any permanent choice. The silver lining of having fewer walk-in visitors was sudden free hours in the afternoon, which he used to test lighter sourdough loaves for neighborhood coffee shops. Eventually, delivery expenses grew too heavy to ignore, so Korn bit the bullet and renegotiated his lease into a smaller prep kitchen tucked inside a quiet alley. At first, moving off the main street felt like a painful defeat. Six months later, however, lower rent and steady wholesale orders turned that setback into a blessing in disguise. Whenever younger bakers ask Korn how much emergency cash to keep before opening, he offers one simple rule of thumb: save enough for four slow months, stay curious during quiet afternoons, and treat uncomfortable adjustments as stepping stones rather than dead ends.',
      listenQ: 'What unexpected benefit did Korn gain from having fewer walk-in customers during road construction?',
      listenA: 'He gained free hours in the afternoon to test lighter sourdough loaves for nearby coffee shops.',
      dictation: 'That painful setback turned out to be a blessing in disguise.',
      listenNote:
        'สังเกต stress ของคำว่า "disguise" (เน้นพยางค์หลัง /dɪsˈɡaɪz/) และคำว่า "renegotiated" (/ˌriː.nɪˈɡəʊ.ʃi.eɪ.tɪd/) เวลาอ่านไหลต่อเนื่อง',
      drills: [
        {
          kind: 'choice',
          prompt: 'เพื่อนของคุณผัดผ่อนการคุยเรื่องขึ้นค่าเช่ากับเจ้าของบ้านมานานจนทนไม่ไหวและตัดสินใจโทรคุยวันนี้ สถานการณ์นี้ตรงกับสำนวนใด?',
          answer: 'She finally bit the bullet and called her landlord this morning.',
          choices: [
            'She finally used a rule of thumb and called her landlord this morning.',
            'She finally bit the bullet and called her landlord this morning.',
            'She finally found a silver lining and called her landlord this morning.',
            'She finally weathered the storm and avoided her landlord this morning.',
          ],
          explanation: 'bite the bullet = กัดฟันลงมือทำเรื่องยากหรือเรื่องที่ไม่อยากเผชิญสักที',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ใช้สำนวนและ prepositions ผิด: "As a rule of my thumb, that delay was a bless in disguise."',
          answer: 'As a rule of thumb, that delay was a blessing in disguise.',
          explanation: 'รูปตายตัวคือ rule of thumb (ไม่มี my) และ a blessing in disguise (ใช้ blessing ไม่ใช่ bless)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบสำนวน: Our electricity bill dropped while we were stuck waiting for repairs—that was one small _____ lining.',
          answer: 'silver',
          explanation: 'silver lining = ข้อดีเล็กๆ ที่ซ่อนอยู่ในเหตุการณ์ไม่สู้ดี',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยใช้ weather the storm: "แม้ยอดขายช่วงหน้าฝนจะชะลอลง ร้านเล็กๆ ของเราก็ยังประคองตัวฝ่าช่วงยากลำบากมาได้"',
          answer: 'Even though sales slowed down during the rainy season, our small shop managed to weather the storm.',
          explanation: 'weather the storm = ผ่านพ้นช่วงเวลายากลำบากไปได้โดยไม่ล่ม',
        },
      ],
      writing:
        'เขียนเรื่องราวส่วนตัวเกี่ยวกับ "อุปสรรคหรือความผิดหวังที่ต่อมามองเห็นข้อดี" 1 ย่อหน้า (5–6 ประโยค) โดยใช้สำนวนอย่างน้อย 3 สำนวนจากบทนี้ (เช่น bite the bullet, weather the storm, silver lining, blessing in disguise, rule of thumb)',
      writingSample:
        'Two years ago, missing the application deadline for an overseas fellowship felt crushing at the time. After sulking for a weekend, I bit the bullet and applied to join a local public-health research project in Chiang Rai instead. The fieldwork tested my patience every week, yet the team supported one another closely to weather the storm through tight budgets. Looking back now, that missed deadline turned out to be a blessing in disguise because I met mentors who shaped my entire career path. Today, I follow a simple rule of thumb whenever a door slams shut: pause, scan the room quietly, and look for the silver lining waiting beside it.',
      writingNote:
        'ตรวจการสะกดคำในสำนวน: silver lining, blessing in disguise (ไม่ตก -ing), rule of thumb (ไม่เติม my/the กลางวลี)',
      speakingTopic: 'เล่าเรื่อง "เรื่องร้ายที่กลายเป็นดี" หรือ "ช่วงที่ต้องกัดฟันตัดสินใจยาก" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'บรรยายความรู้สึกตอนเจอปัญหาจริงก่อน แล้วค่อยใช้ silver lining หรือ blessing in disguise เล่าจุดเปลี่ยน',
        'แบ่งปันข้อคิด 1 ข้อที่เป็น rule of thumb ในชีวิตของคุณให้ผู้ฟังนำไปใช้ต่อได้จริง',
      ],
    },
    {
      day: 234,
      title: 'Conversational Nuance & Social Idioms: break the ice, beat around the bush & hit the nail on the head',
      objective:
        'ใช้สำนวนบทสนทนาในชีวิตจริงเพื่อละลายพฤติกรรม พูดตรงประเด็นโดยสุภาพ ยอมรับความเห็นต่าง และปิดงานอย่างลงตัว',
      explanation:
        'ในการคุยจริงทั้งวงเพื่อนและประชุมงาน คุณจะได้ยิน 5 สำนวนนี้แทบทุกสัปดาห์: 1) **`break the ice`** = ละลายพฤติกรรม/เริ่มชวนคุยให้บรรยากาศผ่อนคลาย (`Asking about weekend food always breaks the ice.`) 2) **`beat around the bush`** = พูดอ้อมค้อมไม่เข้าเรื่องสักที (`Let’s not beat around the bush—we need three more days.`) 3) **`hit the nail on the head`** = ตีตะปูโดนหัว → พูดได้ตรงจุดเป๊ะสุดๆ (`You hit the nail on the head!`) 4) **`see eye to eye`** = เห็นพ้องต้องกัน (มักใช้ในรูปปฏิเสธ `We don’t always see eye to eye, but we respect each other.`) 5) **`call it a day`** = พอแค่นี้สำหรับวันนี้ เลิกงาน/พักผ่อนกันเถอะ (`It’s past seven—let’s call it a day.` — ข้อควรระวัง: ใช้เมื่อจบกิจกรรมของวันนั้น ไม่ได้แปลว่าลาออก!)',
      sound: [
        'Natural Conversational Intonation on Idiomatic Reactions',
        'nuance /ˈnjuː.ɑːns/ · candid /ˈkæn.dɪd/ · deadlock /ˈded.lɒk/ · wrap up /ræp ʌp/',
        'ฟังทำนองเสียงเวลาตอบโต้: "You hit the **NAIL** on the **HEAD**!" (ขึ้นสูงที่ nail แล้วลงชัดที่ head) และ "Let’s call it a **DAY**." (เสียงลงอบอุ่น)',
        'ฝึกพูดตอบโต้สั้นๆ 5 ประโยคเหมือนคุยสดกับเพื่อนร่วมงาน โดยเชื่อมเสียง "call it_a day" เป็น "คอ-ลิ-เทอะ-เดย์"',
      ],
      l1: [
        'ใช้ "call it a day" ตอนอยากบอกว่าจบโปรเจกต์ถาวร หรือพูดว่า "We don’t see eye to eye" แบบขาดความนุ่มนวล หรือจำสลับเป็น "hit the head on the nail"',
        'แปลความหมาย "จบบท" สับสนระหว่างพักงานสำหรับวันนี้ กับเลิกทำตลอดไป และสลับคำในสำนวนยาว',
        'จำจังหวะความหมาย 2 จุด: 1) call it a day = พักสำหรับวันนี้แล้วพรุ่งนี้ค่อยต่อ 2) don’t beat around the bush มักเติมคำลดความแรงข้างหน้า เช่น "To be honest, I don’t want to beat around the bush..." จะฟังดูตรงไปตรงมาแบบสุภาพ ไม่ก้าวร้าว',
      ],
      vocab: [
        ['break the ice', 'ละลายพฤติกรรม / เปิดบทสนทนาให้ผ่อนคลาย', '/breɪk ði aɪs/', 'break the ice with a light joke', 'ละลายพฤติกรรมด้วยมุกเบาๆ'],
        ['beat around the bush', 'พูดอ้อมค้อม ไม่เข้าประเด็น', '/biːt əˈraʊnd ðə bʊʃ/', 'stop beating around the bush', 'เลิกพูดอ้อมค้อมสักที'],
        ['hit the nail on the head', 'พูดได้ตรงจุด/แม่นยำเป๊ะ', '/hɪt ðə neɪl ɒn ðə hed/', 'hit the nail right on the head', 'จี้โดนจุดสำคัญแบบเป๊ะๆ'],
        ['see eye to eye', 'เห็นพ้องต้องกัน / มุมมองตรงกัน', '/siː aɪ tuː aɪ/', 'rarely see eye to eye on budgets', 'ไม่ค่อยเห็นตรงกันเรื่องงบ'],
        ['call it a day', 'พอแค่นี้สำหรับวันนี้ / ปิดจ๊อบวันนี้', '/kɔːl ɪt ə deɪ/', 'ready to call it a day', 'พร้อมพอแค่นี้สำหรับวันนี้แล้ว'],
        ['candid', 'ตรงไปตรงมา จริงใจ', '/ˈkæn.dɪd/', 'have a candid conversation', 'คุยกันอย่างตรงไปตรงมา'],
        ['diplomatic', 'มีชั้นเชิงทางการทูต / นุ่มนวล', '/ˌdɪp.ləˈmæt.ɪk/', 'stay diplomatic yet clear', 'คงความนุ่มนวลแต่ชัดเจน'],
      ],
      examples: [
        ['Sharing fresh mango slices before the workshop broke the ice among guests from five countries.', 'การแบ่งมะม่วงสดให้ชิมก่อนเวิร์กชอปช่วยละลายพฤติกรรมระหว่างแขกจากห้าประเทศได้ทันที'],
        ['My business partner and I don’t always see eye to eye on pricing, yet we always listen first.', 'ฉันกับหุ้นส่วนไม่ได้เห็นตรงกันเรื่องตั้งราคาเสมอไป แต่พวกเราตั้งใจฟังกันก่อนเสมอ'],
        ['When May pointed out that our welcome email sounded robotic, she hit the nail on the head.', 'พอเมย์ทักว่าอีเมลต้อนรับของเราฟังดูเหมือนหุ่นยนต์ เธอพูดโดนจุดเป๊ะเลย'],
        ['We have reviewed twelve drafts since morning—let’s save our notes and call it a day.', 'เราตรวจงานร่างมาสิบสองฉบับตั้งแต่เช้าแล้ว เซฟโน้ตไว้แล้วพอแค่นี้สำหรับวันนี้เถอะ'],
      ],
      reading:
        'Friday afternoon feedback sessions can easily grow tense when everyone is tired. Last week, two designers, Beam and Alex, sat across from each other over a website redesign that had stalled for ten days. Knowing the silence felt awkward, Beam brought out hot jasmine tea to break the ice and asked how Alex’s new puppy was settling in. Once both smiled, Alex decided not to beat around the bush. "Honestly, Beam, I think our home page tries to please five audiences at once, so nobody knows where to click first." Beam leaned back, paused for two seconds, and laughed: "You hit the nail right on the head. I felt something was off, just couldn’t name it." Although Beam and Alex rarely saw eye to eye on typography colors, having a candid chat cleared the fog immediately. Together they cut three cluttered banners, sketched one simple starting button, and checked the wall clock at six-fifteen. "That feels solid," Alex grinned, closing his laptop. "Let’s call it a day and test it fresh on Monday."',
      listenQ: 'What did Alex say was wrong with the home page during the candid chat?',
      listenA: 'It tried to please five audiences at once, so nobody knew where to click first.',
      dictation: 'Let us stop beating around the bush and call it a day soon.',
      listenNote:
        'ฟังเสียง "see eye to eye" — มีเสียง /j/ เชื่อมเบาๆ ระหว่าง see กับ eye และ "call it a day" ลดเสียง t นุ่มๆ แบบ flap /d/ ในภาษาอังกฤษอเมริกัน',
      drills: [
        {
          kind: 'choice',
          prompt: 'ในวงประชุม เพื่อนร่วมงานเพิ่งชี้ปัญหาต้นตอที่ทุกคนมองข้ามมาตลอดสัปดาห์ได้อย่างแม่นยำ คุณจะชมว่าอย่างไร?',
          answer: 'You just hit the nail on the head!',
          choices: [
            'You just beat around the bush!',
            'You just hit the nail on the head!',
            'You just broke the ice!',
            'You just called it a day!',
          ],
          explanation: 'hit the nail on the head = พูดจี้ตรงจุดสำคัญได้อย่างแม่นยำ',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้รูปสำนวนที่ผิด: "Although we don’t see eyes to eyes on everything, let’s call this a day at six."',
          answer: 'Although we don’t see eye to eye on everything, let’s call it a day at six.',
          explanation: 'ใช้เอกพจน์ว่า see eye to eye (ไม่เติม -s) และ call it a day (ไม่ใช้ call this a day)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในสำนวน: Let’s not beat around the _____—the current schedule leaves zero buffer for testing.',
          answer: 'bush',
          explanation: 'beat around the bush = พูดอ้อมไปอ้อมมาไม่เข้าประเด็น',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยใช้ break the ice: "เกมถาม-ตอบสั้นๆ ตอนเริ่มต้นช่วยละลายพฤติกรรมในห้องได้อย่างรวดเร็ว"',
          answer: 'A short Q&A game at the start quickly broke the ice in the room.',
          explanation: 'break the ice (อดีต broke the ice) = ทำให้บรรยากาศระหว่างคนแปลกหน้าผ่อนคลายลง',
        },
      ],
      writing:
        'เขียนบทสนทนาจำลอง 6–8 บรรทัดระหว่างเพื่อนร่วมงานหรือเพื่อนร่วมทริป 2 คนที่เริ่มต้นอย่างอึดอัดเล็กน้อย แล้วคุยเคลียร์ใจจนเข้าใจตรงกัน โดยแทรก break the ice, beat around the bush, hit the nail on the head, see eye to eye และ call it a day',
      writingSample:
        'Nok: Hey Sam, thanks for staying ten minutes—want a cold chrysanthemum tea to break the ice after that long workshop?\nSam: Definitely! Look, I won’t beat around the bush: I felt our Q&A slides rushed past the budget concerns.\nNok: Honestly, you hit the nail on the head. I noticed two guests frowning near the end.\nSam: We don’t always see eye to eye on how much detail to show early, yet transparent numbers build trust.\nNok: Agreed. Let’s add one clear breakdown slide tomorrow morning.\nSam: Sounds fair. It’s nearly seven—let’s call it a day and grab dinner downstairs.',
      writingNote:
        'สังเกตวิธีเปิดประโยคตรงไปตรงมาอย่างสุภาพ ("Look, I won’t beat around the bush:") ที่ช่วยให้ความตรงไปตรงมาฟังดูเป็นผู้ใหญ่ ไม่แข็งกระด้าง',
      speakingTopic: 'สวมบทบาทเล่าเหตุการณ์ที่ต้องคุยตรงๆ เพื่อเคลียร์ปัญหาให้จบสวยๆ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้ break the ice เล่าวิธีเปิดบทสนทนาให้บรรยากาศไม่ตึงเครียด',
        'เล่าจุดที่พูดตรงประเด็นด้วย not beat around the bush และปฏิกิริยาเห็นพ้องด้วย hit the nail on the head / call it a day',
      ],
    },
    {
      day: 235,
      title: 'Cultural Pragmatics: ถอดรหัส Understatement แบบ UK, Direct Warmth แบบ US และกับดักความสุภาพของคนไทย',
      objective:
        'ตีความนัยทางวัฒนธรรมเบื้องหลังถ้อยคำแบบอังกฤษและอเมริกันได้ถูกต้อง พร้อมหลีกเลี่ยงวลีแบบคนไทยที่อาจฟังดูห้วน เฉยชา หรือเกรงใจเกินไปในระดับสากล',
      explanation:
        'ภาษาอังกฤษ C1 ไม่ใช่แค่แปลคำออก แต่คือ **อ่านความหมายแฝงทางวัฒนธรรม (Pragmatics)** ให้ออก: 1) **UK Understatement (การพูดลดระดับเพื่อถนอมใจ)**: ชาวอังกฤษพูดว่า *"That’s a bold idea"* หรือ *"It’s quite interesting"* อาจแปลว่า **"เสี่ยง/ยังไม่เห็นด้วย"** และ *"Not bad at all!"* มักแปลว่า **"ดีมากเลย!"** ส่วน *"With respect..."* มักเป็นสัญญาณเตือนสุภาพๆ ก่อนคัดค้านแรง 2) **US Direct Warmth (ความตรงไปตรงมาที่อบอุ่น)**: ชาวอเมริกันพูด *"Awesome, let’s definitely grab coffee sometime!"* เป็นการปิดบทสนทนาอย่างเป็นมิตร (ถ้าไม่ได้นัดวันเวลา อย่าเพิ่งรอเก้อ—ถือเป็นคำลาที่อบอุ่น!) 3) **กับดักคนไทย 3 ข้อ**: หลีกเลี่ยง ❌ *"Up to you"* (ฟังดูไม่ใส่ใจหรือรำคาญ! ให้เปลี่ยนเป็น **`Either works for me`** หรือ **`I’d be happy with either option`**), หลีกเลี่ยง ❌ *"Wait a minute"* (ฟังดูสั่ง! ใช้ **`Give me just a second`**), และแทนที่จะพูด ❌ *"Sorry to disturb you"* ทุกครั้ง ให้ใช้ **`Hi [Name], quick question when you have a moment`** แทน!',
      sound: [
        'Polite Pitch Contours & Reading Micro-Tone',
        'pragmatics /præɡˈmæt.ɪks/ · understatement /ˌʌn.dəˈsteɪt.mənt/ · dismissive /dɪsˈmɪs.ɪv/ · courteous /ˈkɜː.ti.əs/',
        'เปรียบเทียบน้ำเสียง: "Up to you" ที่ลงท้ายห้วนมักฟังดูหงุดหงิด ส่วน "Either works for me!" ที่ยกเสียงขึ้นนิดตอนต้นและนุ่มลงตอนท้ายฟังดูร่วมมือเต็มใจ',
        'ฝึกพูด 4 วลีอัปเกรดความสุภาพสากล: Either works for me / Give me just a second / Quick question when you have a moment / I hear what you’re saying, though...',
      ],
      l1: [
        'พูด "Up to you" แปลจาก "แล้วแต่คุณเลย" (เพื่อแสดงความเกรงใจแบบไทย) หรือ "Wait a minute" หรือตอบอีเมลด้วย "Sorry to disturb you" ซ้ำๆ จนดูไม่มั่นใจ',
        'ในภาษาไทย "แล้วแต่เลย" + น้ำเสียงอ่อนโยนแปลว่าตามใจไม่เรื่องมาก แต่ในภาษาอังกฤษ "Up to you" มักตีความว่า "ฉันไม่สน ไม่อยากตัดสินใจให้"',
        'เปลี่ยน 3 ประโยคติดปากทันที: 1) Up to you → **Either works for me!** 2) Wait a minute → **Just a moment, please.** 3) Sorry to disturb → **Thanks for your time / Quick question when free.**',
      ],
      vocab: [
        ['understatement', 'การพูดลดน้ำหนักลงกว่าความเป็นจริง', '/ˈʌn.də.steɪt.mənt/', 'classic British understatement', 'การพูดถ่อมระดับแบบอังกฤษคลาสสิก'],
        ['either works for me', 'แบบไหนก็ได้สำหรับฉัน (น้ำเสียงยินดี)', '/ˈaɪ.ðər wɜːks fər miː/', 'either option works for me', 'ตัวเลือกไหนฉันก็โอเคทั้งนั้น'],
        ['dismissive', 'ดูเพิกเฉย / ไม่ใส่ใจ', '/dɪsˈmɪs.ɪv/', 'sound unintentionally dismissive', 'ฟังดูเหมือนไม่ใส่ใจโดยไม่ได้ตั้งใจ'],
        ['read between the lines', 'ตีความนัยที่ซ่อนอยู่', '/riːd bɪˈtwiːn ðə laɪnz/', 'read between the lines gently', 'จับนัยที่ซ่อนอยู่อย่างรอบคอบ'],
        ['tentative', 'ชั่วคราว / ยังไม่สรุปตายตัว', '/ˈten.tə.tɪv/', 'keep plans tentative', 'วางแผนแบบเผื่อปรับได้ก่อน'],
        ['confrontational', 'แข็งกร้าวเชิงเผชิญหน้า', '/ˌkɒn.frʌnˈteɪ.ʃən.əl/', 'avoid sounding confrontational', 'เลี่ยงการฟังดูชวนทะเลาะ'],
        ['warmth', 'ความอบอุ่นเป็นกันเอง', '/wɔːmθ/', 'balance directness with warmth', 'สมดุลความตรงไปตรงมากับความอบอุ่น'],
      ],
      examples: [
        ['Instead of saying "Up to you," try "Both places look great—either works for me!" to sound genuinely easygoing.', 'แทนที่จะพูดว่า "Up to you" ลองพูดว่า "ร้านไหนก็น่าไป—แบบไหนก็ได้เลยสำหรับฉัน!" จะฟังดูสบายๆ อย่างจริงใจกว่ามาก'],
        ['When a London colleague says your timeline is "quite ambitious," read between the lines: she worries it is unrealistic.', 'เวลาเพื่อนร่วมงานจากลอนดอนบอกว่าไทม์ไลน์คุณ "ค่อนข้างท้าทายมาก" ลองตีความนัยดู: เธอกังวลว่ามันอาจทำไม่ทันจริง'],
        ['Saying "Give me just a second" feels noticeably warmer than "Wait a minute" when answering a busy desk call.', 'การพูดว่า "Give me just a second" ฟังดูอบอุ่นกว่า "Wait a minute" อย่างชัดเจนเวลารับสายตอนยุ่งๆ'],
        ['In American small talk, "Let’s catch up soon!" shows friendly warmth rather than a locked calendar invite unless a date is named.', 'ในการทักทายแบบอเมริกัน คำว่า "ไว้เจอกันเร็วๆ นี้นะ!" แสดงไมตรีอบอุ่นมากกว่าจะเป็นการนัดลงปฏิทินจริงจังเว้นแต่จะระบุวันชัด'],
      ],
      reading:
        'Cross-cultural misunderstandings rarely come from wrong verb tenses; they usually happen when two speakers interpret politeness through completely different filters. Take Ton, a Thai UX researcher who recently joined a distributed team across London, Seattle, and Singapore. During his first month, when teammates asked whether he preferred Thai food or ramen for a welcome lunch, Ton smiled politely and replied, "Up to you." To his surprise, the chat went awkwardly quiet because his Western peers heard "Up to you" as mildly dismissive, as if he didn’t care about lunch at all. Meanwhile, when a British director reviewed Ton’s dense draft and remarked, "Well, that’s certainly comprehensive," Ton felt thrilled—until a mentor helped him read between the lines that "comprehensive" politely meant "too long." Conversely, Ton worried an American teammate felt angry when she typed, "Quick ask: can we swap slide three?" In reality, direct brevity paired with a cheerful tone simply reflected US workplace warmth. Learning cultural pragmatics doesn’t mean erasing your Thai gentleness; it means translating your real kindness into phrases international ears hear accurately.',
      listenQ: 'Why did Ton’s Western teammates react awkwardly when he replied "Up to you"?',
      listenA: 'Because they heard "Up to you" as mildly dismissive, as though he did not care about the lunch plan.',
      dictation: 'Both options sound great, so either works for me.',
      listenNote:
        'สังเกตน้ำเสียงคำว่า "certainly comprehensive" ในบทอ่าน: เมื่อพูดเนิบลงนิดและยกโทนช่วงต้น มักเป็นสัญญาณการติอย่างสุภาพแบบ UK (Polite hedging)',
      drills: [
        {
          kind: 'choice',
          prompt: 'เพื่อนชาวต่างชาติชวนเลือกร้านอาหารระหว่างอิตาเลียนกับเวียดนาม คุณอยากตอบแบบสุภาพเต็มใจตามสไตล์คนไทยแต่ไม่ให้ฟังดูเฉยชา ควรพูดอย่างไร?',
          answer: 'Both sound delicious—either works for me!',
          choices: [
            'Up to you, I don’t care.',
            'Both sound delicious—either works for me!',
            'Wait a minute, maybe you decide yourself.',
            'Sorry to disturb, you choose.',
          ],
          explanation: 'Both sound delicious—either works for me! สื่อความเกรงใจและเต็มใจร่วมมือโดยไม่ฟังดู dismissive',
        },
        {
          kind: 'choice',
          prompt: 'หัวหน้าชาวอังกฤษอ่านแผนที่เร่งรัดมากของคุณแล้วพูดว่า "That is certainly an ambitious schedule." ความหมายแฝงที่เป็นไปได้มากที่สุดคืออะไร?',
          answer: 'She gently thinks the schedule may be too tight or unrealistic.',
          choices: [
            'She guarantees the schedule will definitely finish early.',
            'She gently thinks the schedule may be too tight or unrealistic.',
            'She wants you to shorten the deadline even further.',
            'She is inviting you for coffee right after the meeting.',
          ],
          explanation: 'ใน British Understatement คำว่า "certainly ambitious" มักแปลนัยๆ ว่า "น่าจะแน่น/ตึงเกินไปหน่อยนะ"',
        },
        {
          kind: 'error_fix',
          prompt: 'ปรับประโยคแชทแบบคนไทยที่ดูสั่งและเกรงใจเกินไปให้เป็นธรรมชาติสากล: "Sorry to disturb you. Wait a minute, I am checking the file now."',
          answer: 'Hi! Quick question when you have a moment—give me just a second while I pull up the file.',
          explanation: 'เปลี่ยน Sorry to disturb เป็นทักทายกระชับเป็นมิตร และเปลี่ยน Wait a minute เป็น give me just a second',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยให้โทนสุภาพแต่มั่นคง (ไม่แข็งกร้าว): "ฉันเข้าใจมุมมองของคุณนะ แต่บางทีเราอาจต้องเผื่อเวลาตรวจอีกสักวัน"',
          answer: 'I see where you are coming from, though we might want to leave an extra day for review.',
          explanation: 'I see where you are coming from + though we might want to... ช่วยลดความขัดแย้งแต่ยังรักษาจุดยืนชัดเจน',
        },
      ],
      writing:
        'เขียนสถานการณ์จำลองสั้นๆ 2 ข้อความ: 1) ข้อความตอบรับการเลือกเวลาประชุมโดยไม่ใช้ "Up to you" และ 2) ข้อความท้วงติงแผนงานที่ดูแน่นเกินไปแบบนุ่มนวลมีวุฒิภาวะ (รวม 5–6 ประโยค)',
      writingSample:
        'Message 1 (Scheduling): Thanks for sending two slots! Tuesday at 10:00 and Wednesday afternoon are both open on my calendar, so either works for me—just let me know whichever suits your side best.\n\nMessage 2 (Gentle Pushback): Thanks for putting together this launch timeline so quickly. Looking at the testing phase, Tuesday feels slightly tight for catching mobile layout bugs. I completely understand why we want to launch before the holiday; nonetheless, adding one buffer day on Wednesday would help us ship much more smoothly. How does that feel to you?',
      writingNote:
        'เช็กโทนเสียงในงานเขียน: ไม่มีคำว่า Up to you / Wait a minute / Sorry to disturb และมีการรับฟังอีกฝ่ายก่อนเสนอทางเลือกอย่างอบอุ่น',
      speakingTopic: 'อธิบายความต่างของความสุภาพข้ามวัฒนธรรม (ไทย vs UK vs US) ให้เพื่อนคนไทยที่กำลังจะไปทำงานกับต่างชาติฟัง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ยกตัวอย่างคำที่มักเข้าใจคลาดเคลื่อน เช่น Up to you, Wait a minute, และ UK understatement',
        'สาธิตวลีทดแทนด้วยน้ำเสียงที่อบอุ่น ชัดเจน และเป็นมืออาชีพ',
      ],
    },
    {
      day: 236,
      title: 'Tone, Irony & Conversational Humor: ใช้อารมณ์ขันและการประชดเบาๆ อย่างปลอดภัยในวงสนทนาสากล',
      objective:
        'เข้าใจกลไกของอารมณ์ขันเชิงประชดเบาๆ (Dry Irony) และมุกถ่อมตัว (Self-deprecation) ในภาษาอังกฤษ พร้อมรู้สัญญาณน้ำเสียงเพื่อหลีกเลี่ยงการเข้าใจผิดข้ามวัฒนธรรม',
      explanation:
        'อารมณ์ขันระดับ C1 มักไม่ได้มาเป็น "มุกตลกยาวๆ" แต่มักมาเป็น **Dry Irony (พูดตรงข้ามแบบหน้าตาย)** หรือ **Self-deprecation (แซวตัวเองเบาๆ)** เพื่อคลายบรรยากาศ เช่น รถติดหนัก 2 ชั่วโมงแล้วพูดยิ้มๆ ว่า *"Well, that was a brisk five-minute commute!"* หรือทำกาแฟหกบนสมุดแล้วพูดว่า *"Clearly, my coordination is thriving today."* แต่การใช้อารมณ์ขันข้ามวัฒนธรรมมีกฎทอง 3 ข้อ: 1) **แซวตัวเองหรือสถานการณ์ได้ แต่อย่าแซวปมคนอื่น** (Punching at situations/yourself, never punching down) 2) **น้ำเสียงและหน้าตาสำคัญกว่าคำพูด**: ในการพูดจริงใช้จังหวะหยุดสั้นๆ + ยิ้มมุมปาก + น้ำเสียงแบนหรือยืดคำนิด 3) **ในแชทตัวอักษรต้องระวังสุดขีด!** เพราะไม่มีน้ำเสียง อ่านแล้วคนอาจนึกว่าโกรธจริง — ถ้าไม่สนิทจริงๆ ให้เลี่ยงข้อความประชดล้วนๆ ในอีเมลหรือ Slack!',
      sound: [
        'Deadpan Pacing & Elongated Irony Vowel Cue',
        'irony /ˈaɪə.rə.ni/ · self-deprecating /ˌselfˈdep.rə.keɪ.tɪŋ/ · deadpan /ˈded.pæn/ · misinterpret /ˌmɪs.ɪnˈtɜː.prɪt/',
        'ฟังสัญญาณน้ำเสียงประชดขำๆ: ในคำว่า "What a *lovely* Monday morning!" มักลากเสียง love- ยาวขึ้นนิดและโทนต่ำลงเล็กน้อยเมื่อฝนเทหนัก',
        'ฝึกพูดประโยคแซวตัวเอง 3 ประโยคด้วยน้ำเสียงยิ้มผ่อนคลาย: My timing is impeccable / Well, that went smoothly / So much for a quiet morning',
      ],
      l1: [
        'ตีความประโยคประชดขำๆ ของเพื่อนต่างชาติเป็นคำชมตรงตัว 100% หรือพิมพ์มุกประชดลงในแชทงานกับคนที่ยังไม่สนิทจนเกิดดราม่า',
        'ในภาษาไทยมักใส่คำว่า "ฮ่าๆ / 555 / แซวเล่นนะ" กำกับเสมอ แต่ภาษาอังกฤษแบบ Deadpan/Dry humor มักไม่หัวเราะนำหน้าคำพูด',
        'เช็ก 2 ชั้นก่อนเล่นมุก: 1) ตอนฟัง: ถ้าคำพูดบวกสุดขีด ("Oh, brilliant!") เกิดขึ้นตอนเรื่องแย่พอดี → แปลว่ากำลังบ่นขำๆ 2) ตอนใช้เอง: แซวตัวเอง/สภาพอากาศได้ แต่อย่าแซวผลงานเพื่อนร่วมทีมในตัวอักษร!',
      ],
      vocab: [
        ['self-deprecating', 'ที่แซวหรือถ่อมตัวเองอย่างมีอารมณ์ขัน', '/ˌselfˈdep.rə.keɪ.tɪŋ/', 'a touch of self-deprecating humor', 'อารมณ์ขันแซวตัวเองเบาๆ'],
        ['deadpan', 'หน้าตาย / น้ำเสียงเรียบแต่ขำ', '/ˈded.pæn/', 'deliver a line deadpan', 'พูดมุกด้วยสีหน้าเรียบนิ่ง'],
        ['misinterpret', 'ตีความคลาดเคลื่อน', '/ˌmɪs.ɪnˈtɜː.prɪt/', 'easily misinterpreted in text', 'ถูกตีความผิดได้ง่ายในข้อความแชท'],
        ['banter', 'การหยอกล้อเล่นกันอย่างเป็นมิตร', '/ˈbæn.tər/', 'lighthearted office banter', 'การหยอกล้อเบาๆ ในที่ทำงาน'],
        ['lighten the mood', 'คลายบรรยากาศให้ผ่อนคลาย', '/ˈlaɪ.tən ðə muːd/', 'lighten the mood after a glitch', 'คลายบรรยากาศหลังเกิดความขัดข้อง'],
        ['punch down', 'ล้อเลียนคนที่ด้อยกว่า/กำลังลำบาก (สิ่งต้องห้าม)', '/pʌntʃ daʊn/', 'never punch down with jokes', 'อย่านำความลำบากของคนอื่นมาล้อ'],
        ['playful', 'ขี้เล่น เป็นกันเอง ไม่จริงจังเกิน', '/ˈpleɪ.fəl/', 'keep the tone playful', 'คุมโทนให้ขี้เล่นเป็นกันเอง'],
      ],
      examples: [
        ['When the elevator stopped on every floor while carrying heavy groceries, Dan sighed playfully, "Ah, the scenic tour."', 'พอริฟต์จอดทุกชั้นตอนถือของหนัก แดนถอนหายใจขำๆ ว่า "อ๋อ ทัวร์ชมวิวสินะ"'],
        ['A touch of self-deprecating humor after tripping over your own slide cable immediately lightens the mood.', 'การแซวตัวเองเบาๆ หลังเดินสะดุดสายสไลด์ของตัวเองช่วยคลายบรรยากาศตึงเครียดได้ทันที'],
        ['Deadpan irony travels poorly over email because readers cannot hear the smile in your voice.', 'มุกประชดหน้าตายมักสื่อสารพลาดในอีเมล เพราะคนอ่านไม่ได้ยินรอยยิ้มในน้ำเสียงของคุณ'],
        ['Healthy banter builds warmth only when everyone feels comfortable laughing together rather than singled out.', 'การหยอกล้อที่ดีสร้างความสนิทใจได้ก็ต่อเมื่อทุกคนขำไปด้วยกัน ไม่ใช่รู้สึกถูกจี้จุดคนเดียว'],
      ],
      reading:
        'Humor is one of the fastest ways to feel truly at home in another language, yet it also requires sharp social radar. When May moved to Melbourne for a one-year design exchange, she was baffled on her very first rainy Tuesday. Stepping off the tram soaked to her shoes, her studio buddy Leo looked at the gray sky and murmured deadpan, "Gotta love Melbourne’s tropical sunshine." May blinked before noticing his grin and realizing he was using playful irony to lighten the mood. Within weeks, she learned that friendly banter often targets unpredictable weather, slow printers, or one’s own tiny blunders. For example, after accidentally brewing decaf coffee before an early workshop, May laughed at herself: "Clearly my brain took a day off before my body arrived." Everyone chuckled, and the room felt instantly relaxed. At the same time, May noticed a clear boundary: jokes targeting accents, mistakes by junior interns, or tense text threads almost always backfired. Without eye contact or warm vocal cues, ironic lines over chat are easily misinterpreted as passive-aggressive criticism. Saving playful irony for spoken moments—and keeping humor centered on shared situations or yourself—keeps laughter genuinely welcoming.',
      listenQ: 'What targets does May notice friendly banter safely focuses on?',
      listenA: 'Unpredictable weather, slow printers, or one’s own tiny blunders.',
      dictation: 'Irony over text is easily misinterpreted without warm vocal cues.',
      listenNote:
        'สังเกตเสียงหัวเราะเบาๆ ในจังหวะเล่า: คำว่า "Gotta love..." (/ˈɡɒt.ə lʌv/) เป็นภาษาพูดอเมริกัน/ออสเตรเลียย่อจาก "(You’ve) got to love..." ใช้ประชดขำๆ กับเรื่องน่าหงุดหงิดเล็กๆ',
      drills: [
        {
          kind: 'choice',
          prompt: 'คุณเปิดไมค์ประชุมช้าไป 10 วินาทีและเผลอถือแก้วชาเปล่าขึ้นมาพูด คุณอยากแซวตัวเองเบาๆ เพื่อคลายบรรยากาศ (Self-deprecation) ข้อใดเหมาะสมที่สุด?',
          answer: 'Clearly my morning caffeine hasn’t reached the control room yet—let me start that again!',
          choices: [
            'Why didn’t anyone remind me that I was muted? That was terrible teamwork.',
            'Clearly my morning caffeine hasn’t reached the control room yet—let me start that again!',
            'You all look far too serious today—try smiling more.',
            'Well, at least my slides aren’t as messy as yesterday’s presentation.',
          ],
          explanation: 'การแซวตัวเองเรื่องกาแฟ (self-deprecating humor) ช่วยลดความเขินและคลายบรรยากาศโดยไม่กระทบคนอื่น',
        },
        {
          kind: 'choice',
          prompt: 'ทำไมการพิมพ์มุกประชดหน้าตาย (Deadpan irony) เช่น "Great, another urgent task at 6 p.m.!" ลงในแชททีมข้ามประเทศจึงมีความเสี่ยง?',
          answer: 'Without facial cues or vocal warmth, readers may misinterpret the remark as passive-aggressive anger.',
          choices: [
            'Because English speakers never understand irony in the evening.',
            'Without facial cues or vocal warmth, readers may misinterpret the remark as passive-aggressive anger.',
            'Because exclamation marks are grammatically forbidden in workplace chat.',
            'Because remote teammates prefer long formal essays instead of short jokes.',
          ],
          explanation: 'ในข้อความไม่มีน้ำเสียงหรือสีหน้า ทำให้ประโยคประชดถูกตีความว่าประชดด้วยความโกรธ (passive-aggressive) ได้ง่ายมาก',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในก้อนคำ: Adding a touch of _____ humor when you spill water on your desk puts everyone at ease.',
          answer: 'self-deprecating',
          explanation: 'self-deprecating humor = อารมณ์ขันแบบแซว/ถ่อมตัวเองเล็กๆ',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "การหยอกล้อกันอย่างเป็นกันเองควรช่วยคลายบรรยากาศ ไม่ใช่ทำให้ใครสักคนรู้สึกอึดอัด"',
          answer: 'Lighthearted banter should lighten the mood rather than make anyone feel awkward.',
          explanation: 'banter + lighten the mood + rather than make anyone feel awkward',
        },
      ],
      writing:
        'เขียนตัวอย่างสั้นๆ 3 สถานการณ์ (สถานการณ์ละ 2–3 ประโยค): 1) ประโยคแซวตัวเองเบาๆ ตอนทำผิดเล็กน้อย 2) ประโยคเล่นมุกกับสถานการณ์น่าเบื่อ (เช่น ฝนตก/รถติด) และ 3) อธิบายสั้นๆ ว่าทำไมคุณถึงไม่พิมพ์มุกนี้ในอีเมลถึงลูกค้าที่ไม่รู้จักกัน',
      writingSample:
        '1. Self-deprecation (Dropping my pen twice during a talk): "Clearly gravity is working overtime on my side of the table today—give me one second to rescue that pen."\n\n2. Situational Irony (Waiting forty minutes for an iced coffee during a rush): "Nothing builds character quite like staring thoughtfully at twenty blender cups ahead of yours."\n\n3. Why not in a client email: While these lines feel warm with eye contact and a grin, typing irony to an unfamiliar client removes vocal tone and can sound impatient or sarcastic rather than friendly.',
      writingNote:
        'เช็กดูว่ามุกทุกข้อพุ่งเป้าไปที่ "ตัวเองหรือสถานการณ์ทั่วไป" โดยไม่ได้ตำหนิหรือจี้จุดด้อยของคนอื่น',
      speakingTopic: 'เล่าเหตุการณ์โก๊ะๆ ของตัวเองที่คลี่คลายด้วยอารมณ์ขัน และหลักการเล่นมุกอย่างปลอดภัย (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ซ้อมใช้ประโยคแซวตัวเอง 1–2 จังหวะโดยไม่รีบพูดรัว — ปล่อยให้ผู้ฟังได้ยิ้มตาม',
        'สรุปเส้นแบ่งระหว่าง banter ที่อบอุ่น กับข้อความประชดในแชทที่อาจถูกตีความผิด',
      ],
    },
    {
      day: 237,
      title: 'When NOT to Use Idioms: ความชัดเจนสากลในทีมที่มีหลายสัญชาติ (Global Clarity)',
      objective:
        'รู้จักคัดกรองและลดสำนวนเฉพาะถิ่น (เช่น baseball/regional idioms) เมื่อสื่อสารในทีมหลากหลายสัญชาติ แล้วเปลี่ยนเป็นภาษาชัดเจนที่ทุกคนเข้าใจตรงกัน 100%',
      explanation:
        'เรื่องน่าทึ่งของภาษาอังกฤษยุคปัจจุบันคือ **ผู้พูดภาษาอังกฤษส่วนใหญ่ในโลกไม่ใช่เจ้าของภาษา!** หากคุณพูดในห้องประชุมที่มีเพื่อนชาวญี่ปุ่น เยอรมัน บราซิล และไทยว่า *"Let’s not jump the gun—let’s touch base after lunch, aim for low-hanging fruit, and knock it out of the park!"* เพื่อนร่วมงานอาจพยักหน้ายิ้มๆ แต่จริง ๆ ไม่เข้าใจเลยว่าต้องทำอะไร! การสื่อสารระดับ C1 ที่แท้จริงรู้จัก **"Global Plain English"** เมื่อบริบทต้องการความแม่นยำ 100% (เช่น ข้อตกลงงาน ความปลอดภัย เหตุฉุกเฉิน อีเมลทีมนานาชาติ): เปลี่ยน *touch base* → **`check in briefly`**, *jump the gun* → **`act too early`**, *low-hanging fruit* → **`quick wins / easiest tasks first`**, *ballpark figure* → **`rough estimate`**, *table an idea* → **`postpone` (US) หรือ `put forward` (UK) — เห็นไหมว่าคำนี้คน US กับ UK ยังแปลตรงข้ามกันเลย!**',
      sound: [
        'Crisp Articulation for International Listeners',
        'estimate /ˈes.tɪ.mət/ · ambiguous /æmˈbɪɡ.ju.əs/ · inclusive /ɪnˈkluː.sɪv/ · straightforward /ˌstreɪtˈfɔː.wəd/',
        'เวลาพูดในทีมนานาชาติ ลดความเร็วช่วงคำสำคัญ 10% และแยกเสียงพยัญชนะท้ายให้ชัดกว่าคุยเล่น เช่น rough ES-ti-mate / act TOO ear-ly',
        'ฝึกแปล 4 สำนวนเป็นภาษาชัดเจนทันที: touch base → check in / ballpark figure → rough estimate / jump the gun → rush ahead / backburner → pause for now',
      ],
      l1: [
        'นึกว่ายิ่งยัดสำนวนเยอะในประชุมนานาชาติยิ่งดูเก่งระดับ C1 จนคนฟังชาติอื่นงงกับคำเปรียบเทียบกีฬาอเมริกันหรือสำนวนท้องถิ่น',
        'วัดความเก่งจาก "ความยากของคำ" แทนที่จะวัดจาก "ความเข้าใจตรงกันระหว่างคนฟัง"',
        'ใช้กฎ 2 คำถาม: "คำนี้คนเวียดนามหรือเยอรมันฟังแล้วเข้าใจตรงกันใน 1 วินาทีไหม?" ถ้าไม่ → แปลงสำนวนเป็นกริยาตรงไปตรงมาทันที!',
      ],
      vocab: [
        ['ambiguous', 'กำกวม / ตีความได้หลายทาง', '/æmˈbɪɡ.ju.əs/', 'avoid ambiguous phrasing', 'เลี่ยงการใช้ถ้อยคำกำกวม'],
        ['inclusive', 'ครอบคลุม / ทำให้ทุกคนมีส่วนร่วม', '/ɪnˈkluː.sɪv/', 'adopt inclusive language', 'เลือกใช้ภาษาที่ทุกคนเข้าใจร่วมกัน'],
        ['rough estimate', 'ตัวเลขประมาณการคร่าวๆ (แทน ballpark figure)', '/rʌf ˈes.tɪ.mət/', 'give a rough estimate', 'ให้ตัวเลขประมาณการคร่าวๆ'],
        ['check in', 'แวะถามไถ่ความคืบหน้า (แทน touch base)', '/tʃek ɪn/', 'check in briefly on Friday', 'อัปเดตความคืบหน้าสั้นๆ วันศุกร์'],
        ['priority', 'ลำดับความสำคัญแรก', '/praɪˈɒr.ə.ti/', 'focus on top priorities', 'โฟกัสที่เรื่องสำคัญอันดับแรก'],
        ['jargon', 'ศัพท์เฉพาะวงการที่คนนอกงง', '/ˈdʒɑː.ɡən/', 'strip out unnecessary jargon', 'ตัดศัพท์เฉพาะที่ไม่จำเป็นออก'],
        ['universal', 'เป็นสากล เข้าใจตรงกันทุกชาติ', '/ˌjuː.nɪˈvɜː.səl/', 'choose universal phrasing', 'เลือกถ้อยคำที่เป็นสากล'],
      ],
      examples: [
        ['Rather than asking an international supplier for a "ballpark figure," simply request a "rough cost estimate."', 'แทนที่จะถามซัพพลายเออร์ต่างชาติว่า "ballpark figure" แค่ขอ "rough cost estimate" ก็ชัดเจนกว่ามาก'],
        ['Saying "Let’s table that proposal" actually means postpone in New York yet introduce for discussion in London!', 'การพูดว่า "Let’s table that proposal" ในนิวยอร์กแปลว่าเลื่อนออกไป แต่ในลอนดอนแปลว่าหยิบขึ้นมาถกกันเดี๋ยวนี้!'],
        ['Choosing "quick wins" or "easiest tasks first" over "low-hanging fruit" keeps non-native teammates completely on board.', 'การเลือกใช้ "quick wins" หรือ "easiest tasks first" แทน "low-hanging fruit" ช่วยให้เพื่อนร่วมทีมต่างชาติตามทันทุกคน'],
        ['High-level English shows wisdom not by hiding behind idioms, but by knowing when plain verbs prevent costly mistakes.', 'ภาษาอังกฤษระดับสูงแสดงความฉลาดไม่ใช่ด้วยการหลบหลังสำนวน แต่ด้วยารรู้ว่าเมื่อไรกริยาตรงไปตรงมาช่วยป้องกันความผิดพลาดราคาแพง'],
      ],
      reading:
        'During an international logistics project linking teams in Bangkok, Munich, and Osaka, an urgent email nearly derailed an entire shipping schedule. A regional manager wrote: "Let’s not jump the gun before customs clears, just touch base with Osaka for a ballpark figure, and table the southern route until Friday." Within two hours, confusion exploded. One engineer didn’t know what "jump the gun" meant and assumed he should speed up loading; another thought "ballpark figure" referred to stadium event deliveries. Worse still, the British consultant read "table the southern route" as putting it onto Friday’s main agenda, whereas the American manager meant setting it aside entirely! That single expensive afternoon taught the group a golden rule of global communication: idioms add wonderful color among close friends or shared cultures, yet clear universal English saves hours whenever stakes, timelines, or diverse accents meet. Replacing "touch base" with "send a quick status update" and replacing "table" with "postpone" or "discuss next" removes ambiguity overnight. True mastery is making sure every person in the room hears the exact same action plan.',
      listenQ: 'How did the British consultant and the American manager interpret "table the southern route" differently?',
      listenA: 'The British consultant thought it meant putting it on Friday’s agenda, while the American manager meant setting it aside.',
      dictation: 'Clear universal language prevents costly misunderstandings across international teams.',
      listenNote:
        'สังเกตการเน้นเสียงแยกความแตกต่างในบทอ่าน: "where-AS the American manager..." และเสียงคำว่า "estimate" เมื่อเป็นคำนามลงท้าย /mət/ เบาๆ (ไม่ใช่ /-meɪt/ เหมือนตอนเป็นกริยา!)',
      drills: [
        {
          kind: 'choice',
          prompt: 'คุณกำลังเขียนอีเมลด่วนถึงพาร์ทเนอร์ในเวียดนามและเยอรมนี ประโยคใดชัดเจนเป็นสากล 100% โดยไม่เสี่ยงตีความผิด?',
          answer: 'Let’s postpone the extra brochure until next week and focus on getting a rough shipping estimate today.',
          choices: [
            'Let’s table the brochure until next week, touch base at noon, and ask for a ballpark figure.',
            'Let’s postpone the extra brochure until next week and focus on getting a rough shipping estimate today.',
            'Let’s put the brochure on the backburner so we can knock our low-hanging fruit out of the park.',
            'Don’t jump the gun on the brochure; let’s circle back and move the goalpost tomorrow.',
          ],
          explanation: 'คำว่า postpone + rough shipping estimate ชัดเจน 100% ข้ามวัฒนธรรม ต่างจาก table/ballpark/backburner/jump the gun ที่กำกวม',
        },
        {
          kind: 'error_fix',
          prompt: 'แปลงประโยคที่อัดสำนวนกำกวมเกินไปให้เป็น Global Plain English ที่สุภาพและชัดเจน: "Before we jump the gun, touch base with Tokyo for a ballpark timeline and table the budget."',
          answer: 'Before we rush ahead, please check in with Tokyo for a rough timeline and postpone the budget discussion.',
          explanation: 'เปลี่ยน jump the gun → rush ahead, touch base → check in, ballpark → rough, และ table → postpone (หรือ discuss now ตามเจตนา)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำศัพท์ที่เหมาะสม: Stripping out regional sports idioms prevents _____ instructions in cross-border teams.',
          answer: 'ambiguous',
          explanation: 'ambiguous = กำกวม ตีความได้หลายทาง',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็น Global Plain English ที่ชัดเจน: "เพื่อไม่ให้สับสน ขอให้ทุกคนช่วยอัปเดตตัวเลขประมาณการคร่าวๆ ก่อนบ่ายสามโมง"',
          answer: 'To avoid confusion, please share a rough estimate before three p.m.',
          explanation: 'ใช้ rough estimate และภาษาที่ตรงไปตรงมาไม่มีคำกำกวม',
        },
      ],
      writing:
        'ลองเขียนข้อความเวอร์ชัน "ปรับให้เป็นภาษาสากล (Global Plain English)" จากข้อความต้นฉบับที่เต็มไปด้วยสำนวนนี้ พร้อมอธิบาย 2 เหตุผลสั้นๆ ว่าทำไมต้องแก้:\nต้นฉบับ: "Hey team, don’t jump the gun on the new app! Let’s touch base with Seoul, tackle the low-hanging fruit first, and table the payment feature until Q4."',
      writingSample:
        'Revised Version: "Hi everyone, let’s avoid launching the new app too early. First, please check in with the Seoul team so we align on priorities. Let’s complete the simplest tasks first and postpone the payment feature until Q4."\n\nWhy these edits matter: First, replacing "jump the gun" and "low-hanging fruit" with "launching too early" and "simplest tasks first" ensures teammates from every language background grasp the exact sequence immediately. Second, replacing "table" with "postpone" eliminates an infamous US/UK opposite meaning that could cause one office to build the feature while another pauses it.',
      writingNote:
        'เช็กคำแปลใหม่ทั้งหมดว่าไม่มีสำนวนกีฬาหรือคำสองความหมาย (เช่น table) หลงเหลืออยู่เลย',
      speakingTopic: 'อธิบายหลัก "เมื่อไหร่ควรใช้สำนวน vs เมื่อไหร่ควรงดสำนวน" ในการทำงานจริง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ยกตัวอย่างคำที่ US กับ UK ยังแปลตรงข้ามกัน (table an idea) และสำนวนที่คนต่างชาติอาจงง (ballpark, touch base)',
        'แสดงให้เห็นว่าผู้พูด C1 ที่แท้จริงปรับระดับภาษาเพื่อ "ให้คนฟังเข้าใจ" ไม่ใช่ "โชว์คำยาก"',
      ],
    },
    {
      day: 238,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 34 — Idiomatic & Cultural Pragmatics + Dictogloss',
      objective:
        'ทบทวนสังเคราะห์สำนวนทำงาน ชีวิต สนทนา การอ่านนัยวัฒนธรรม UK/US/Thai อารมณ์ขัน และการเลือกความชัดเจนสากล พร้อม Dictogloss',
      explanation:
        'จบสัปดาห์ที่ 34 แล้วครับ! สัปดาห์นี้คุณได้ก้าวข้ามจากการ **"จำสำนวนเป็นคำๆ"** ไปสู่ **"ความฉลาดทางบริบท (Pragmatic Intelligence)"**: 1) **ใช้สำนวนตรงความหมายจริง** (*cut corners* เป็นลบเสมอ, *call it a day* คือพักวันนี้, *bite the bullet* คือกัดฟันทำสิ่งยาก) 2) **แปลความสุภาพข้ามวัฒนธรรม** (อ่านนัย *Understatement* แบบ UK, แยกความเป็นกันเองแบบ US, เปลี่ยน *Up to you* เป็น *Either works for me*) 3) **รู้ขอบเขตอารมณ์ขัน** (แซวตัวเอง/สถานการณ์ได้ เลี่ยงประชดหน้าตายในแชท) 4) **รู้เวลาควรงดสำนวน** เพื่อความชัดเจน 100% ในทีมหลายสัญชาติ',
      sound: [
        'Week 34 Pragmatic Tone & Rhythm Synthesis',
        'pragmatics /præɡˈmæt.ɪks/ · ambiguous /æmˈbɪɡ.ju.əs/ · self-deprecating /ˌselfˈdep.rə.keɪ.tɪŋ/ · understatement /ˈʌn.də.steɪt.mənt/',
        'Shadowing บทอ่านทบทวน 3 รอบ โดยเลียนแบบน้ำเสียงอบอุ่น ตรงไปตรงมา และจังหวะเว้นช่วงให้ชัด',
        'ตรวจจับความต่างของเสียงคำว่า estimate (n.) /ˈes.tɪ.mət/ vs (v.) /ˈes.tɪ.meɪt/ และ disguise /dɪsˈɡaɪz/',
      ],
      l1: [
        'นำสำนวนที่เรียนใหม่มาใส่ปะปนในสถานการณ์ข้ามวัฒนธรรมที่ต้องการความชัด หรือกลับไปใช้ Up to you / Sorry to disturb ด้วยความเคยชิน',
        'แยกบริบทระหว่าง "คุยสร้างสีสันกับเพื่อน/ทีมที่คุ้นเคย" กับ "ข้อตกลงหรือกำหนดการที่ต้องไม่มีช่องว่างให้ความเข้าใจผิด"',
        'ใช้สวิตช์ 2 โหมดในหัว: โหมดสีสัน (Warmth & Idioms) กับ โหมดสากล (Global Clarity) — สลับตามผู้ฟังตรงหน้า!',
      ],
      vocab: [
        ['nuance', 'ความละเอียดอ่อนของความหมาย/โทน', '/ˈnjuː.ɑːns/', 'pick up subtle nuances', 'จับความละเอียดอ่อนของน้ำเสียงได้'],
        ['rapport', 'ความสัมพันธ์อันดีและความไว้วางใจ', '/ræpˈɔːr/', 'build genuine rapport', 'สร้างความสัมพันธ์ที่จริงใจ'],
        ['tactful', 'มีไหวพริบ รู้จักถนอมน้ำใจ', '/ˈtækt.fəl/', 'offer tactful feedback', 'ให้ฟีดแบ็กอย่างมีศิลปะ'],
        ['decode', 'ถอดรหัส / ตีความ', '/diːˈkəʊd/', 'decode cultural signals', 'ถอดรหัสสัญญาณทางวัฒนธรรม'],
        ['bridge the gap', 'เชื่อมช่องว่างระหว่างสองฝั่ง', '/brɪdʒ ðə ɡæp/', 'bridge the cultural gap', 'เชื่อมช่องว่างทางวัฒนธรรม'],
        ['candidly', 'อย่างตรงไปตรงมาจริงใจ', '/ˈkæn.dɪd.li/', 'speak candidly yet kindly', 'พูดตรงไปตรงมาอย่างมีเมตตา'],
        ['misalignment', 'ความเข้าใจไม่ตรงกัน', '/ˌmɪs.əˈlaɪn.mənt/', 'prevent costly misalignment', 'ป้องกันความเข้าใจคลาดเคลื่อนที่เสียหาย'],
      ],
      examples: [
        ['True fluency means knowing both when an idiom adds warmth and when plain English prevents misalignment.', 'ความคล่องแคล่วที่แท้จริงคือรู้ทั้งตอนที่สำนวนช่วยเติมความอบอุ่น และตอนที่ภาษาตรงไปตรงมาช่วยกันความเข้าใจผิด'],
        ['To build genuine rapport quickly, match your humor to shared moments rather than testing deadpan lines over email.', 'เพื่อสร้างความสนิทใจอย่างรวดเร็ว จงเลือกใช้อารมณ์ขันกับจังหวะที่คุยกันตรงหน้ามากกว่าลองพิมพ์ประชดในอีเมล'],
        ['Being tactful does not require beating around the bush when a project genuinely needs help.', 'การรักษาน้ำใจไม่ได้แปลว่าต้องพูดอ้อมค้อมจนเสียเรื่องเมื่อโปรเจกต์ต้องการความช่วยเหลือจริง'],
        ['Once you learn to decode cultural signals, every international conversation feels calmer and richer.', 'เมื่อคุณถอดรหัสสัญญาณทางวัฒนธรรมเป็น ทุกการสนทนากับต่างชาติจะผ่อนคลายและมีสีสันขึ้นมาก'],
      ],
      reading:
        'Reaching C1 fluency is less about memorizing five hundred obscure idioms and far more about building sharp cultural empathy. Over this past week, we saw how a single phrase can build genuine rapport—or create silent confusion depending on who is listening. Among close teammates who share similar backgrounds, saying "Let’s get the ball rolling" or laughing off a messy morning with a touch of self-deprecating humor breaks the ice effortlessly. When setbacks appear, recognizing a silver lining or biting the bullet on a tough conversation helps groups weather the storm together. Yet equally important is knowing when to step back from colorful metaphors. In fast-moving international teams, stripping out ambiguous sports idioms and replacing vague phrases like "Up to you" with "Either works for me" shows true respect for everyone’s time. Even British understatement and American direct warmth become easy to decode once you listen closely to context rather than word-for-word definitions. Ultimately, language exists to bridge the gap between people: speak candidly without sounding harsh, stay tactful without beating around the bush, and let clarity guide every choice.',
      listenQ: 'According to the passage, what is C1 fluency really about compared to memorizing hundreds of idioms?',
      listenA: 'It is about building sharp cultural empathy and choosing phrases that bridge the gap for the listener.',
      dictation: 'Speak candidly without harshness, and stay tactful without beating around the bush.',
      listenNote:
        'เตรียมฟัง Dictogloss: ฟังรอบแรกจับใจความรวม ฟังรอบสองจดคำสำคัญ เช่น bridge the gap / candidly / tactful / beating around the bush แล้วเทียบกับตัวเลือก',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังประโยคปิดท้ายจากบทอ่านแล้วเลือกตัวเลือกที่ถ่ายทอดโครงสร้างและสำนวนได้ถูกต้องแม่นยำ:',
          answer: 'Speak candidly without sounding harsh, stay tactful without beating around the bush, and let clarity guide every choice.',
          choices: [
            'Speak candid without sound harsh, stay tactful without cut corners, and let clarity guide every choice.',
            'Speak candidly without sounding harsh, stay tactful without beating around the bush, and let clarity guide every choice.',
            'Speak candidly without sounding harsh, stay dismissive without beating around the bush, and let idioms guide every choice.',
            'Speak candidly without sounding warm, stay tactful without hitting the nail on the head, and let clarity guide every choice.',
          ],
          explanation:
            'ตามบทอ่าน: Speak candidly without sounding harsh, stay tactful without beating around the bush, and let clarity guide every choice.',
          audio_text:
            'Speak candidly without sounding harsh, stay tactful without beating around the bush, and let clarity guide every choice.',
        },
        {
          kind: 'choice',
          prompt: 'สถานการณ์ใดควรเลือกใช้สำนวนแทนที่จะพูดตรงๆ ทื่อๆ และสถานการณ์ใดควรงดสำนวน?',
          answer: 'Use "Let’s call it a day" with close local teammates at 6 p.m., but write "rough cost estimate" instead of "ballpark figure" in a cross-border supplier quote request.',
          choices: [
            'Use "ballpark figure" in an urgent cross-border safety instruction, and never smile during coffee breaks.',
            'Use "Let’s call it a day" with close local teammates at 6 p.m., but write "rough cost estimate" instead of "ballpark figure" in a cross-border supplier quote request.',
            'Reply "Up to you" to every overseas client so they feel totally free to decide.',
            'Send deadpan sarcastic messages in Slack so international teams laugh without audio cues.',
          ],
          explanation: 'ใช้สำนวนกับจังหวะสนิทใจในทีมที่เข้าใจตรงกัน และใช้ภาษาสากลที่ชัดเจนกับเอกสาร/ซัพพลายเออร์นานาชาติ',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ผิดทั้งสำนวนและความหมายทางวัฒนธรรม: "Our designer cut corners brilliantly so everyone is in the same page, and if you want coffee or tea, up to you."',
          answer: 'Our designer streamlined the layout thoughtfully so everyone is on the same page, and as for coffee or tea, either works for me.',
          explanation: '1) เปลี่ยน cut corners (ความหมายชุ่ย) เป็น streamlined 2) on the same page (ไม่ใช่ in) 3) เปลี่ยน up to you เป็น either works for me',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำศัพท์ให้ครบก้อนคำ: Replacing ambiguous metaphors with straightforward verbs helps prevent costly _____ across remote teams.',
          answer: 'misalignment',
          explanation: 'prevent costly misalignment = ป้องกันความเข้าใจไม่ตรงกันที่ก่อให้เกิดความเสียหาย',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยใช้ hit the nail on the head และ silver lining: "เธอพูดตรงจุดเป๊ะเลยว่าข้อดีเล็กๆ ของทริปที่ล่าช้าครั้งนี้คือพวกเราได้พักหายใจกันบ้าง"',
          answer: 'She hit the nail on the head that the silver lining of this delayed trip was giving us a chance to catch our breath.',
          explanation: 'hit the nail on the head + silver lining + catch our breath',
        },
      ],
      writing:
        'เขียน "คู่มือการสื่อสาร 1 หน้า" (6–7 ประโยค) แนะนำเพื่อนร่วมงานไทยที่จะต้องย้ายไปทำงานกับทีมนานาชาติ ครอบคลุม: 1) การใช้สำนวนให้ถูกบริบท 2) การเลี่ยงคำกำกวม/กับดักอย่าง Up to you 3) มุมมองเรื่องอารมณ์ขันข้ามวัฒนธรรม',
      writingSample:
        'Welcome to your new international team—here are three practical habits that make daily collaboration smooth from week one. First, when you feel flexible about lunch spots or meeting times, replace "Up to you" with "Either works for me!" so colleagues hear genuine warmth rather than indifference. Second, save colorful idioms like "hit the nail on the head" or "silver lining" for spoken chats where your smile carries the tone, while using plain universal phrases like "rough estimate" or "postpone" in cross-border emails to prevent misalignment. Similarly, keep light self-deprecating humor for live calls instead of deadpan text jokes that can be misinterpreted. Whenever teammates hit a rough week, reminding everyone that you can weather the storm together builds instant rapport. Stay candid without sounding harsh, and your kindness will shine clearly across every accent.',
      writingNote:
        'ตรวจความสมบูรณ์ทั้ง 3 มิติ: มีตัวอย่างเปลี่ยนคำแบบไทย มีการแยกโหมด Spoken Idioms vs Global Written Clarity และมีประโยคปิดที่ทรงพลัง',
      speakingTopic: 'Review Presentation: "สื่อสารข้ามวัฒนธรรมยังไงให้ทั้งอบอุ่น ชัดเจน และเป็นตัวของตัวเอง" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ยกตัวอย่างจริงจาก 3 หมวด: Workplace Idioms, Resilience & Social Idioms, และ Global Clarity',
        'สาธิตน้ำเสียงจริงระหว่างพูดลดทอนความแข็ง (I see where you’re coming from / Either works for me) กับน้ำเสียงเล่นมุกแซวตัวเองอย่างเป็นกันเอง',
      ],
    },
  ]
);
