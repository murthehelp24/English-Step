import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 3: คิดเป็นภาษาอังกฤษและสื่อสารในงานจริง';

export const WEEK22: ModuleSeed = createModule(
  {
    week: 22,
    phase: 3,
    phase_title: PHASE_TITLE,
    cefr_level: 'B1 → B2',
    title: 'Third & Mixed Conditionals, Wish / If only',
    summary:
      'พูดถึงเหตุการณ์ย้อนหลังในอดีตที่แก้ไขไม่ได้ (3rd Conditional), อดีตที่ส่งผลถึงปัจจุบัน (Mixed Conditional), และการแสดงความปรารถนาด้วย I wish / If only',
    focus: 'Third & Mixed Conditionals, I wish / If only, Alternatives to if',
  },
  [
    {
      day: 148,
      title: 'สมมุติย้อนอดีตที่เปลี่ยนไม่ได้ (Third Conditional: If + had + V3, would have + V3)',
      objective:
        'ใช้ Third Conditional เล่าเรื่องสมมุติในอดีต ("ถ้าตอนนั้นทำอย่างนี้ ป่านนั้นคงเกิดผลอย่างนั้น") โดยไม่ใส่ would ในประโยค If',
      explanation:
        'เมื่อเหตุการณ์จบไปแล้วในอดีตและเราอยากนึกย้อนว่า "ถ้าตอนนั้นสิ่งนี้เกิดขึ้น (หรือไม่ได้เกิดขึ้น) ผลในอดีตก็คงเปลี่ยนไป" เราใช้ **Third Conditional**: **`If + S + had + V3, S + would / could / might + have + V3`** เช่น `If we had left earlier, we wouldn’t have missed the ferry.` (ถ้าเราออกจากบ้านเร็วกว่านั้น เราก็คงไม่พลาดเรือข้ามฟากแล้ว) ความหมายจริงคือ **เราออกสาย และเราก็พลาดเรือไปแล้ว** สามารถใช้ `might have` ถ้าไม่ชัวร์ 100% หรือ `could have` ถ้าแปลว่า "น่าจะทำได้" และเมื่อสลับ `If` ไปไว้ครึ่งหลัง **ไม่ต้องใส่ลูกน้ำ** (`We wouldn’t have missed the ferry if we had left earlier.`) กฎทองที่ห้ามลืม: **ห้ามใส่ `would` เข้าไปในท่อน `If` เด็ดขาด!**',
      sound: [
        'Contracted "’d" (had) & "wouldn’t’ve"',
        "If I'd known /ɪf aɪd nəʊn/ · wouldn't have /ˈwʊd.n̩t.əv/ · had left /həd left/",
        'ในการพูดจริง เจ้าของภาษาแทบไม่พูดคำเต็มว่า If we had left แต่ย่อเป็น "If we’d left" (/ɪf wiːd left/) และเชื่อม "wouldn’t have" เป็น "วูด-นึท-เทิฟ" (/ˈwʊd.n̩t.əv/)',
        'ฝึกพูดเชื่อมประโยคยาวให้จบใน 2 ลมหายใจ: "If we’d left earlier, | we wouldn’t-əv missed the ferry."',
      ],
      l1: [
        'ใส่ "would" ลงไปในประโยคเงื่อนไข เช่น "If I would have known earlier, I would have helped you."',
        'ภาษาไทยแปลตรงตัวว่า "ถ้าฉันจะรู้..." หรือเห็นท่อนหลังมี would have เลยเผลอคัดลอก would have มาใส่ท่อนหน้าด้วย',
        'จำกฎเหล็กข้ามภพ: ท่อน IF = ความจริงย้อนอดีต (had + V3 เท่านั้น ห้ามมี would) | ท่อนผล = จินตนาการผลลัพธ์ (would/could/might + have + V3)',
      ],
      vocab: [
        ['ferry', 'เรือข้ามฟาก', '/ˈfer.i/', 'catch the early ferry', 'ขึ้นเรือข้ามฟากเที่ยวเช้า'],
        ['non-refundable', 'ที่ไม่สามารถขอคืนเงินได้', '/ˌnɒn.rɪˈfʌn.də.bəl/', 'a non-refundable booking', 'การจองที่คืนเงินไม่ได้'],
        ['alert', 'แจ้งเตือน', '/əˈlɜːt/', 'send a travel alert', 'ส่งข้อความแจ้งเตือนการเดินทาง'],
        ['bypass', 'เลี่ยงเส้นทาง / ข้ามขั้นตอน', '/ˈbaɪ.pɑːs/', 'bypass heavy congestion', 'เลี่ยงการจราจรติดขัดหนัก'],
        ['reschedule', 'เลื่อนกำหนดการใหม่', '/ˌriːˈʃed.juːl/', 'reschedule the departure', 'เลื่อนเวลาออกเดินทาง'],
        ['turn around', 'กลับรถ / เปลี่ยนทิศทาง', '/tɜːn əˈraʊnd/', 'turn around in time', 'หันกลับได้ทันเวลา'],
        ['fortunate', 'โชคดี', '/ˈfɔː.tʃən.ət/', 'feel fortunate', 'รู้สึกโชคดี'],
      ],
      examples: [
        ['If we had left fifteen minutes earlier, we would have caught the early ferry.', 'ถ้าเราออกเร็วกว่านี้สักสิบห้านาที เราก็คงทันเรือเที่ยวเช้าแล้ว'],
        ["If I had checked the weather alert, I wouldn't have booked the outdoor boat tour.", 'ถ้าฉันเช็กแจ้งเตือนสภาพอากาศก่อน ฉันคงไม่จองทัวร์เรือกลางแจ้งหรอก'],
        ['She might have found a cheaper seat if she had reserved online in May.', 'เธออาจจะได้ที่นั่งถูกกว่านี้ถ้าเธอจองออนไลน์ตั้งแต่เดือนพฤษภาคม'],
        ['They could have bypassed the highway jam if the map had updated sooner.', 'พวกเขาน่าจะเลี่ยงรถติดบนทางด่วนได้ถ้าแผนที่อัปเดตเร็วกว่านี้'],
      ],
      reading:
        'Last April, Pim and her cousin planned a weekend escape to Koh Mak. Because they wanted extra sleep, they skipped the dawn taxi and caught a later van instead. Unfortunately, roadwork slowed traffic near Rayong pier for almost forty minutes. By the time they ran onto the wooden dock, the afternoon boat was already pulling away into the bay. Pim sighed as she checked their tickets. If they had booked an earlier van, they would have boarded the ferry smoothly and reached the island before sunset. Furthermore, if Pim had read the fine print on the app, she wouldn’t have bought a non-refundable hotel pass for that first night. Still, they laughed over iced coconut water at a pier café and caught the next morning’s crossing. If everything had gone perfectly, they might never have discovered that cozy little seafood market near the port.',
      listenQ: 'What unexpected discovery happened because they missed the boat?',
      listenA: 'They discovered a cozy little seafood market near the port.',
      dictation: 'If we had left earlier, we would have caught the ferry.',
      listenNote:
        'ฟังเสียง "had" ที่มักเบาลงมากเป็น /həd/ หรือ /əd/ และเสียงเชื่อม "would have" (/ˈwʊd.əv/) ก่อนคำว่า "caught"',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยค Third Conditional ที่ใส่ would ในท่อน If: "If you would have reminded me yesterday, I wouldn’t missed the deadline."',
          answer:
            "If you had reminded me yesterday, I wouldn't have missed the deadline.",
          explanation:
            '1) ท่อน If ใช้ had + V3 (had reminded) ห้ามใส่ would 2) ท่อนผลต้องมี have หน้า V3 -> wouldn’t have missed',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ Third Conditional เล่าเรื่องจริงในอดีตที่ไม่เกิดขึ้นได้อย่างถูกต้อง 100%?',
          answer:
            'We could have saved two hours if we had taken the skytrain instead.',
          choices: [
            'We could have saved two hours if we took the skytrain instead.',
            'We could have saved two hours if we had taken the skytrain instead.',
            'We would save two hours if we had taken the skytrain instead.',
            'We could have save two hours if we had took the skytrain instead.',
          ],
          explanation:
            'เหตุการณ์อดีตทั้งหมด: ท่อนผลใช้ could have + V3 (saved) และท่อน if ใช้ had + V3 (taken)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำกริยาช่อง 3 ที่ถูกต้องของ know: If I had _____ the café closed at four, I would have walked faster.',
          answer: 'known',
          explanation:
            'If + had + V3 -> V3 ของ know คือ known',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ถ้าเขาเช็กไฟล์แนบก่อนส่ง เขาคงไม่ส่งอีเมลผิดฉบับหรอก"',
          answer:
            "If he had checked the attachment before sending, he wouldn't have sent the wrong email.",
          explanation:
            'ใช้ If + had checked (อดีตที่ไม่ได้ทำ) + wouldn’t have sent (ผลที่คงไม่เกิด)',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์เดินทางหรือการตัดสินใจในอดีต 1 เรื่องที่ผลลัพธ์อาจต่างไปหากเลือกอีกทาง (5–6 ประโยค) โดยใช้ Third Conditional อย่างน้อย 3 ประโยค (ผสมทั้ง would have, could have, might have)',
      writingSample:
        "Two winters ago, I traveled up north without packing a warm fleece jacket because the daytime forecast looked mild. If I had checked the nighttime mountain temperatures, I would have brought proper layers from Bangkok. When the wind picked up after sunset, I ended up buying an overpriced sweater at a roadside stall. On the bright side, if I hadn't walked into that tiny shop looking for warm clothes, I might never have met a local weaver who invited us to her studio. Sometimes even clumsy planning leads to unexpected good memories.",
      writingNote:
        'เช็กท่อน If ทุกประโยคว่าเป็น had + V3 (ไม่มี would!) และท่อนผลเป็น modal + have + V3 ครบถ้วน',
      speakingTopic: 'ถ้าย้อนเวลากลับไปตอนนั้นได้... (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าเรื่องจริง 1 เรื่อง (เช่น พลาดรถ ตกเครื่อง ซื้อของผิด หรือเจอเรื่องบังเอิญดีๆ เพราะความผิดพลาด)',
        'สลับใช้ท่อนหน้าแบบย่อ (If I’d known..., If we’d checked...) และท่อนผล (I wouldn’t-əv..., We might-əv...)',
        'ลองพูดทั้งแบบ If นำหน้าและแบบเอาผลลัพธ์ขึ้นก่อนเพื่อความคล่องตัว',
      ],
    },
    {
      day: 149,
      title: 'อดีตเปลี่ยน ชีวิตวันนี้ก็เปลี่ยน (Mixed Conditionals)',
      objective:
        'เชื่อมการตัดสินใจในอดีตเข้ากับผลลัพธ์ในปัจจุบัน (If + had + V3, would + V1 now) และใช้บุคลิกปัจจุบันอธิบายผลอดีตได้อย่างแม่นยำ',
      explanation:
        'ในชีวิตจริง เรามักไม่ได้คิดแค่ "อดีต→อดีต" แต่มักเชื่อม **"การกระทำในอดีต → ผลที่เป็นอยู่ตอนนี้!"** นี่คือ **Mixed Conditional** ที่ทรงพลังมาก: **สูตรหลัก (Past → Present)**: **`If + S + had + V3, S + would/could/might + V1 (+ now/today)`** เช่น `If I had saved money earlier, I would be traveling right now.` (ถ้าตอนนั้นเก็บเงินไว้ ป่านนี้ฉันคงกำลังเที่ยวอยู่แล้ว!) หรือ `If I hadn’t drunk three espressos earlier, I wouldn’t feel so shaky now.` (**สังเกต!** ท่อนหลังไม่ใส่ `have + V3` เพราะผลเกิด **ตอนนี้** ไม่ใช่ในอดีต!) ส่วน **สูตรกลับ (Present Trait → Past Result)**: **`If + S + V2/were, S + would have + V3`** เช่น `If I spoke fluent Korean, I would have taken that Seoul offer last year.` (ถ้าฉันเป็นคนพูดเกาหลีคล่อง ป่านนั้นฉันคงรับงานที่โซลไปแล้ว)',
      sound: [
        'Time Contrast Stress: "earlier" vs "now"',
        'earlier /ˈɜː.li.ər/ · right now /raɪt naʊ/ · still /stɪl/',
        'เพื่อให้ผู้ฟังจับคู่เวลาข้ามกาลได้ทันที ให้เน้นคำบอกเวลาที่เป็นจุดตัดทั้งสองฝั่งของประโยค: "If I’d SAVED money EARlier, I’d BE debt-free NOW."',
        'ฝึกพูดประโยคเชื่อมเวลา 3 ประโยค โดยกดน้ำหนักที่ V1/be ในท่อนหลังเพื่อแยกจาก Third Conditional',
      ],
      l1: [
        'ใส่ "have + V3" ลงไปในท่อนหลังทั้งที่ลงท้ายด้วยคำว่า now / today เช่น "If I had slept earlier last night, I wouldn’t have felt tired right now."',
        'จำสูตร Third Conditional แบบตายตัวจนเผลอใช้ have + V3 ทุกครั้งที่เห็น If + had + V3 โดยไม่ได้เช็กว่า "ผลลัพธ์" เกิดขึ้นเมื่อไร',
        'ถามตัวเองก่อนจบท่อนหลังเสมอ: "ผลที่พูดถึงเกิดตอนไหน?" ถ้าเกิดตอนนั้นจบไปแล้ว = would have + V3 · ถ้าเป็นความจริงอยู่ตอนนี้ = would + V1 (หรือ would be + V-ing)!',
      ],
      vocab: [
        ['consequence', 'ผลที่ตามมา', '/ˈkɒn.sɪ.kwəns/', 'face the consequences', 'เผชิญกับผลที่ตามมา'],
        ['discipline', 'วินัยในตนเอง', '/ˈdɪs.ə.plɪn/', 'financial discipline', 'วินัยทางการเงิน'],
        ['exhausting', 'ที่ทำให้เหนื่อยหมดแรง', '/ɪɡˈzɔː.stɪŋ/', 'an exhausting routine', 'กิจวัตรที่ทำให้เหนื่อยล้า'],
        ['confident', 'มั่นใจในตัวเอง', '/ˈkɒn.fɪ.dənt/', 'feel far more confident', 'รู้สึกมั่นใจมากขึ้นมาก'],
        ['debt-free', 'ปลอดหนี้สิน', '/ˌdetˈfriː/', 'stay completely debt-free', 'ปลอดหนี้อย่างสมบูรณ์'],
        ['fluent', 'คล่องแคล่ว (ทางภาษา)', '/ˈfluː.ənt/', 'fluent in Japanese', 'คล่องแคล่วในภาษาญี่ปุ่น'],
        ['grateful', 'ซาบซึ้ง / ขอบคุณ', '/ˈɡreɪt.fəl/', 'genuinely grateful', 'รู้สึกซาบซึ้งใจอย่างแท้จริง'],
      ],
      examples: [
        ['If I had started learning English five years ago, I would feel much more confident today.', 'ถ้าฉันเริ่มเรียนภาษาอังกฤษตั้งแต่ห้าปีก่อน วันนี้ฉันคงรู้สึกมั่นใจขึ้นกว่านี้มาก'],
        ['If we had invested in a reliable laptop earlier, we would be saving hours every week now.', 'ถ้าเราลงทุนซื้อแล็ปท็อปดีๆ ตั้งแต่แรก ตอนนี้เราคงประหยัดเวลาได้หลายชั่วโมงต่อสัปดาห์'],
        ['If Natee weren’t afraid of heights, he would have joined us on the zipline yesterday.', 'ถ้านทีไม่ใช่คนกลัวความสูง เมื่อวานเขาคงไปเล่นซิปไลน์กับพวกเราแล้ว'],
        ['You wouldn’t be scrambling for receipts right now if you had kept a monthly folder.', 'ตอนนี้คุณคงไม่ต้องมานั่งคุ้ยหาใบเสร็จหรอกถ้าตอนนั้นเก็บแยกแฟ้มไว้ทุกเดือน'],
      ],
      reading:
        'Every time Ton looks at his quiet apartment overlooking a leafy park, he thinks about a risky choice he made three years ago. Back then, he turned down a comfortable corporate role to join a small bicycle design studio, even though the initial pay was tight. If he had stayed at his old firm, he would probably own a newer car today, yet he might still be staring at spreadsheets for ten hours a day. Instead, he learned hands-on workshop skills and built real financial discipline along the way. Conversely, if Ton were less patient with slow steady growth, he would have quit during his toughest first winter. Looking around now, he feels genuinely grateful for that turning point. The decisions we made in past seasons quietly shape how free, exhausted, or energized we feel right here in the present.',
      listenQ: 'What might Ton still be doing today if he had stayed at his old corporate firm?',
      listenA: 'He might still be staring at spreadsheets for ten hours a day.',
      dictation: 'If I had saved earlier, I would be traveling now.',
      listenNote:
        'จับเสียงตัวตัดเวลาระหว่าง "had saved earlier" (อดีต) กับ "would be traveling now" (ปัจจุบันที่กำลังสมมุติอยู่)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยค Mixed Conditional ที่เผลอใส่ have + V3 กับผลในปัจจุบัน: "If Mai hadn’t stayed up watching dramas until 3 a.m., she wouldn’t have been so sleepy at her desk right now."',
          answer:
            "If Mai hadn't stayed up watching dramas until 3 a.m., she wouldn't be so sleepy at her desk right now.",
          explanation:
            'เหตุการณ์เกิดเมื่อคืน (hadn’t stayed up) แต่ผลเกิด "right now" จึงต้องใช้ wouldn’t be (would + V1) ไม่ใช่ wouldn’t have been',
        },
        {
          kind: 'choice',
          prompt:
            'คุณอยากพูดว่า "ถ้าฉันเป็นคนขับรถเป็น ป่านนั้นเมื่อวานฉันคงอาสาขับพาทุกคนไปหัวหินแล้ว" (นิสัย/ความสามารถปัจจุบัน → ผลอดีต) ข้อใดถูกต้อง?',
          answer:
            'If I knew how to drive, I would have offered to take everyone to Hua Hin yesterday.',
          choices: [
            'If I knew how to drive, I would have offered to take everyone to Hua Hin yesterday.',
            'If I had known how to drive, I would offer to take everyone to Hua Hin yesterday.',
            'If I know how to drive, I would have offered to take everyone to Hua Hin yesterday.',
            'If I knew how to drive, I would offer to take everyone to Hua Hin yesterday.',
          ],
          explanation:
            'ความจริงถาวรในปัจจุบัน (ขับรถไม่เป็น) ใช้ If + V2 (knew) และผลลัพธ์ที่เกิดในอดีต (เมื่อวาน) ใช้ would have + V3 (offered)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ตรงกาลปัจจุบัน: If we had backed up the photos before resetting the phone, we would still _____ them on our screen today.',
          answer: 'have',
          explanation:
            'would + V1 (still have) ใช้บอกผลลัพธ์ที่มีอยู่จริงในปัจจุบัน (today)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ถ้าฉันตั้งใจฟังคำแนะนำตั้งแต่เดือนก่อน ตอนนี้โปรเจกต์นี้ก็คงเสร็จแล้ว"',
          answer:
            'If I had listened to the advice last month, this project would be finished now.',
          explanation:
            'อดีต (If I had listened) เชื่อมสู่สภาพปัจจุบัน (would be finished now)',
        },
      ],
      writing:
        'เขียนสะท้อนผลพวงของการตัดสินใจในอดีต 2 เรื่องที่มีผลต่อชีวิตของคุณ "ในวันนี้" (5–6 ประโยค) โดยใช้ Mixed Conditionals ทั้งแง่บวกและแง่บทเรียน',
      writingSample:
        "Two decisions from my past strongly affect my life today. First, if I hadn't adopted a morning reading habit last year, I wouldn't understand natural articles as quickly as I do now. Second, if I had spent all my freelance bonus on gadgets, I wouldn't feel so relaxed about my savings right now. On the other hand, if I were a bit more organized with digital notes, I would have found last summer's workshop slides in seconds instead of hunting through old folders yesterday.",
      writingNote:
        'ตรวจจุดเชื่อมเวลาในทุกประโยค: ฝั่งอดีตใช้ had + V3, ฝั่งปัจจุบันใช้ V2 (ใน If) หรือ would + V1 (ในท่อนผล)',
      speakingTopic: 'จุดเปลี่ยนในอดีตที่สร้างตัวคุณในวันนี้ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือก 1 การตัดสินใจที่ดีและ 1 บทเรียนในอดีต แล้วเชื่อมผลลัพธ์มาถึง "right now / today"',
        'เช็กท่อนผลปัจจุบันไม่ให้หลุดคำว่า have + V3 (พูดแค่ I’d be..., I’d feel..., I wouldn’t have to... now)',
        'เน้นเสียงคำบอกเวลาตัดกัน เช่น last year vs today / last night vs right now',
      ],
    },
    {
      day: 150,
      title: 'แสดงความปรารถนาและความเสียดายด้วย I wish & If only',
      objective:
        'เลือกใช้โครงสร้างหลัง I wish / If only ได้ครบ 3 เวลา (ปัจจุบัน = Past Simple/were, อดีต = Past Perfect, อยากให้คนอื่นเปลี่ยน = would + V1)',
      explanation:
        'คำว่า "อยากให้..." หรือ "รู้งี้..." ในภาษาอังกฤษไม่ได้ใช้ `I wish + Present`! โครงสร้างหลัง **`I wish` / `If only`** (ที่เน้นอารมณ์แรงกว่า) จะ **"ถอย Tense ไป 1 ก้าว"** เพื่อบอกว่ามันไม่จริงในตอนนี้หรืออดีต: 1) **อยากเปลี่ยนปัจจุบัน (ตอนนี้ไม่ได้เป็นอย่างนั้น)**: `I wish + S + V2 / were` เช่น `I wish I had more free time.` / `If only the office were closer to home!` (ไม่ใช่ *I wish I have*!) 2) **เสียดายอดีต (แก้อดีตไม่ได้แล้ว)**: `I wish + S + had + V3` เช่น `I wish I hadn’t eaten that extra spicy bowl!` 3) **รำคาญ/อยากให้คนอื่นหรือสถานการณ์ข้างนอกเปลี่ยนพฤติกรรม**: `I wish + S + would + V1` เช่น `I wish my neighbor would stop drilling at 7 a.m.` (**ข้อห้ามเด็ดขาด:** ห้ามใช้ `I wish I would...` กับตัวเอง! ตัวเองใช้ `could` แทน เช่น `I wish I could swim.`)',
      sound: [
        'Linking & Emotional Stress in "I wish" / "If only"',
        "I wish I'd /aɪ wɪʃ aɪd/ · If only /ɪf ˈəʊn.li/ · I wish you'd /aɪ wɪʃ juːd/",
        'เชื่อมท้ายเสียง /ʃ/ ของ wish เข้าสู่สระถัดไปทันที: "I wish-I had" (/aɪ wɪʃ aɪ hæd/) และ "If-only" เชื่อม /f/ เข้า /əʊ/ เป็น "อิฟ-โฟน-ลี"',
        'ฝึกใส่น้ำเสียงอารมณ์ต่างกัน 3 แบบ: ถอนหายใจ (If only...), เสียดาย (I wish I’d...), หงุดหงิดนิดๆ (I wish he would...)',
      ],
      l1: [
        'พูดว่า "I wish I have more money" หรือ "I wish I can speak faster" หรือใช้ "I wish I would be taller."',
        'ในภาษาไทยใช้ "อยากให้ + ปัจจุบัน" ตรงๆ เลยลืมถอย Tense และมักแปล "น่าจะ/อยากจะ" เป็น would ใช้กับประธาน I',
        'จำ 3 กล่องเวลาหลัง I wish: เปลี่ยนตอนนี้ -> V2/were/could · เสียดายอดีต -> had + V3 · บ่นให้คนอื่นเปลี่ยนนิสัย -> would + V1 (ห้าม I wish I would!)',
      ],
      vocab: [
        ['if only', 'หากเพียงแต่ / รู้งี้...', '/ɪf ˈəʊn.li/', 'if only I had known', 'หากเพียงแต่ฉันรู้มาก่อน'],
        ['commute', 'ระยะ/การเดินทางไปทำงาน', '/kəˈmjuːt/', 'a shorter commute', 'การเดินทางไปทำงานที่สั้นลง'],
        ['backup', 'สำเนาสำรอง', '/ˈbæk.ʌp/', 'keep a cloud backup', 'เก็บสำเนาสำรองบนคลาวด์'],
        ['considerate', 'เกรงใจ / คิดถึงใจผู้อื่น', '/kənˈsɪd.ər.ət/', 'be more considerate', 'เกรงใจคนอื่นมากขึ้น'],
        ['irritating', 'ที่น่ารำคาญใจ', '/ˈɪr.ɪ.teɪ.tɪŋ/', 'an irritating habit', 'นิสัยที่น่ารำคาญ'],
        ['regretful', 'เต็มไปด้วยความเสียดาย', '/rɪˈɡret.fəl/', 'sound overly regretful', 'ฟังดูมัวแต่เสียดายเกินไป'],
        ['afford', 'มีกำลังทรัพย์ซื้อได้', '/əˈfɔːd/', 'afford a quiet studio', 'มีกำลังเช่าห้องสตูดิโอเงียบๆ'],
      ],
      examples: [
        ['I wish I had an extra hour every morning before checking messages.', 'ฉันอยากมีเวลาเพิ่มอีกสักชั่วโมงทุกเช้าก่อนเปิดดูข้อความจัง'],
        ['I wish my apartment were only ten minutes from the train station.', 'ฉันอยากให้ห้องพักอยู่ห่างจากสถานีรถไฟแค่สิบนาทีจังเลย'],
        ['If only we had backed up the customer list before the laptop crashed!', 'รู้งี้เราน่าจะสำรองรายชื่อลูกค้าไว้ก่อนที่แล็ปท็อปจะพัง!'],
        ['I wish commuters would take off large backpacks on crowded skytrains.', 'อยากให้คนขึ้นรถไฟฟ้ายอมถอดเป้ใบใหญ่ออกเวลาคนแน่นจัง'],
      ],
      reading:
        'Wait until Monday morning on a crowded train and listen quietly to what people say to themselves. One passenger looks at her watch and thinks, "I wish the bus had arrived on time—now I’m going to miss my first coffee." Across the aisle, a sleepy programmer sighs, "If only I hadn’t played video games past midnight!" Meanwhile, two friends chat about housing prices near the business district. "I wish I could afford a quiet studio right beside the park," says one, while the other adds, "Honestly, I just wish my upstairs neighbor would stop moving heavy furniture after eleven!" Even though "I wish" sounds simple, English separates present dreams, past regrets, and everyday frustrations into clear grammar patterns. Mastering these three forms helps you express real feelings naturally without sounding like a direct Thai translation.',
      listenQ: 'What does the sleepy programmer wish he had not done the night before?',
      listenA: 'He wishes he hadn’t played video games past midnight.',
      dictation: 'If only I had backed up those files yesterday.',
      listenNote:
        'สังเกตเสียงเชื่อม "If only" (/ɪf ˈəʊn.li/) และเสียง "I had" ที่มักพูดเร็วเป็น "I’d" ก่อนคำว่า "backed up"',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยค I wish ที่พลาด 2 จุดเรื่องเวลาและรูปกริยา: "I wish I have a bigger desk now, and I wish I can stay longer yesterday."',
          answer:
            'I wish I had a bigger desk now, and I wish I could have stayed longer yesterday.',
          explanation:
            '1) ปรารถนาเรื่องปัจจุบันใช้ V2 -> I wish I had 2) เสียดายความสามารถในอดีตใช้ could have + V3 (หรือ I wish I had stayed longer)',
        },
        {
          kind: 'choice',
          prompt:
            'คุณรำคาญเสียงแจ้งเตือนมือถือของเพื่อนร่วมโต๊ะที่เปิดดังตลอดเวลา อยากพูดว่า "อยากให้เขาปิดเสียงเตือนจัง" ข้อใดถูกต้อง?',
          answer: 'I wish he would turn off those loud alerts.',
          choices: [
            'I wish he turn off those loud alerts.',
            'I wish he would turn off those loud alerts.',
            'I wish I would turn off his loud alerts.',
            'I wish he turns off those loud alerts.',
          ],
          explanation:
            'อยากให้ "คนอื่น" เปลี่ยนพฤติกรรมที่น่ารำคาญใช้ wish + someone + would + V1',
        },
        {
          kind: 'gap',
          prompt:
            'เติมรูปกริยาให้ตรงตามความปรารถนาปัจจุบัน: If only this café _____ open until ten o’clock instead of closing at six!',
          answer: 'were',
          explanation:
            'หลัง If only / I wish สำหรับความปรารถนาปัจจุบันใช้ V2 (รูปมาตรฐานนิยมใช้ were กับทุกประธาน หรือ was ในภาษาพูดไม่เป็นทางการ)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "รู้งี้น่าจะชวนพี่สาวมาเที่ยวตลาดนี้ด้วยกันเมื่ออาทิตย์ก่อน"',
          answer:
            'If only I had invited my sister to visit this market together last week.',
          explanation:
            'เสียดายเหตุการณ์ในอดีตใช้ If only / I wish + had + V3 (had invited)',
        },
      ],
      writing:
        'เขียนความปรารถนาและความรู้สึก 5–6 ประโยคให้ครบทั้ง 3 แบบ: 1) สิ่งที่อยากให้ชีวิตปัจจุบันต่างออกไป (V2/were/could) 2) เรื่องอดีตที่รู้งี้ไม่น่าพลาด (had + V3) 3) นิสัยรอบตัวที่อยากให้คนอื่นปรับ (would + V1)',
      writingSample:
        "Honestly, I have three small wishes this month. First, I wish my daily commute were twenty minutes shorter so I could read peacefully before work. Second, looking back at last quarter, I wish I hadn't accepted two side projects at the same time—it left me drained for weeks. Finally, when we ride public buses, I really wish passengers would speak softly on voice calls instead of playing videos without headphones.",
      writingNote:
        'ตรวจห้ามใช้ I wish + Present Simple (have/am/can) และห้ามใช้ I wish I would...',
      speakingTopic: '3 ความปรารถนา: ปัจจุบัน อดีต และสิ่งรอบตัว (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดเรียง 3 หัวข้อ: I wish I had/could... (ตอนนี้) -> I wish I’d / hadn’t... (อดีต) -> I wish people would... (สิ่งรอบตัว)',
        'ฝึกเชื่อมเสียง "wish-I", "If-only" และใส่อารมณ์จริงลงในน้ำเสียง ไม่พูดแบนเรียบ',
      ],
    },
    {
      day: 151,
      title: 'ใช้ตัวเชื่อมเงื่อนไขขั้นกว่า if (unless / provided that / as long as / in case)',
      objective:
        'แยกความต่างเชิงตรรกะระหว่าง in case (เผื่อไว้ก่อน) กับ if (ถ้าเกิดขึ้นค่อยทำ) รวมถึงใช้ unless, provided that และ as long as ได้แม่นยำ',
      explanation:
        'ระดับ B1→B2 เราไม่ใช้ `if` ซ้ำๆ ทุกประโยคครับ มาดูคำเชื่อมเงื่อนไข 4 ตัวที่เปลี่ยนความชัดเจนของประโยคทันที: 1) **`unless` = ถ้าไม่... (if ... not)**: ห้ามใส่ `not` ซ้อนเข้าไปในท่อน `unless`! เช่น `We’ll miss the boat unless we hurry.` (ห้าม ❌ *unless we don’t hurry*) 2) **`as long as` / `provided (that)` = ตราบใดที่ / โดยมีเงื่อนไขว่า**: `You can borrow my camera as long as you keep the lens clean.` 3) **กับดักใหญ่ `in case` vs `if`**: **`if`** = รอให้เกิดก่อนแล้วค่อยทำ (`Charge your phone if the battery hits 10%.`) ส่วน **`in case`** = **"ทำเตรียมเผื่อไว้ก่อนเลย ไม่ว่ามันจะเกิดหรือไม่เกิดก็ตาม!"** (`Bring a power bank in case the battery dies.` = พกไว้ตั้งแต่ออกจากบ้าน เผื่อแบตหมด!) 4) ทุกตัวข้างต้นเมื่อพูดถึงอนาคต **ใช้ Present Simple ด้านหลังคำเชื่อม (ไม่ใส่ will)**',
      sound: [
        'Boundary Clarity in Conditional Clauses',
        'unless /ənˈles/ · provided that /prəˈvaɪ.dɪd ðæt/ · as long as /əz ˈlɒŋ əz/ · in case /ɪn keɪs/',
        'คำว่า "as long as" ในประโยคพูดเร็ว เสียงสระหน้า-หลังหดสั้นเป็น "เอิซ-ลอง-เอิซ" (/əz ˈlɒŋ əz/) แล้วเน้นเสียงที่คำว่า LONG',
        'ฝึกพูดคู่แยกความหมายชัดๆ: "Take a jacket IN CASE it rains." vs "Put on the jacket IF it rains."',
      ],
      l1: [
        'ใช้ "unless + don’t" ซ้ำซ้อน เช่น "Unless you don’t study, you won’t pass" หรือใช้ "in case" กับความหมายว่า "ถ้าเกิดเรื่องนี้ขึ้นค่อย..."',
        'ภาษาไทยมีคำว่า "ถ้าไม่..." ที่ซ้อนคำว่า "ไม่" อยู่ข้างใน และมักแปล "เผื่อ/กรณีที่" ปนกับ "ถ้า"',
        'เช็ก 2 กฎทอง: 1) unless แปลว่า "if NOT" ในตัวอยู่แล้ว ตามด้วยประโยคบอกเล่าเสมอ 2) เตรียมล่วงหน้า = in case · เกิดเหตุค่อยทำ = if',
      ],
      vocab: [
        ['unless', 'เว้นเสียแต่ว่า / ถ้าไม่', '/ənˈles/', 'unless something changes', 'เว้นเสียแต่ว่าจะมีอะไรเปลี่ยน'],
        ['in case', 'เผื่อว่า / ในกรณีที่ (เตรียมไว้ก่อน)', '/ɪn keɪs/', 'bring cash in case', 'พกเงินสดเผื่อไว้'],
        ['as long as', 'ตราบใดที่ / ขอแค่...', '/əz ˈlɒŋ əz/', 'as long as we communicate', 'ขอแค่เราสื่อสารกัน'],
        ['provided that', 'โดยมีเงื่อนไขว่า', '/prəˈvaɪ.dɪd ðæt/', 'provided that everyone agrees', 'โดยมีเงื่อนไขว่าทุกคนเห็นพ้อง'],
        ['precaution', 'มาตรการป้องกันล่วงหน้า', '/prɪˈkɔː.ʃən/', 'take a simple precaution', 'เตรียมป้องกันไว้ล่วงหน้า'],
        ['expire', 'หมดอายุ', '/ɪkˈspaɪər/', 'expire at midnight', 'หมดอายุตอนเที่ยงคืน'],
        ['flexible', 'ยืดหยุ่นได้', '/ˈflek.sə.bəl/', 'remain flexible', 'ยังคงยืดหยุ่นได้'],
      ],
      examples: [
        ['We won’t cancel the picnic unless heavy rain starts before nine.', 'เราจะไม่ยกเลิกปิกนิก เว้นเสียแต่ว่าฝนหนักจะตกก่อนเก้าโมง'],
        ['Please pack a compact umbrella in case the afternoon sky turns dark.', 'ช่วยพกร่มพับไปด้วยนะ เผื่อช่วงบ่ายฟ้าจะมืดครึ้ม'],
        ['You can swap shifts with me as long as the team lead signs off first.', 'คุณสลับกะกับฉันได้ ตราบใดที่หัวหน้าทีมอนุมัติก่อน'],
        ['I’m happy to cover Friday’s session provided that you share the slides by Thursday.', 'ฉันยินดีรับหน้าที่สอนแทนวันศุกร์ โดยมีเงื่อนไขว่าคุณต้องส่งสไลด์ให้ภายในวันพฤหัสบดี'],
      ],
      reading:
        'Preparing for an outdoor community film night taught our neighborhood club the value of smart conditions. First, the organizer announced, "The screening stays on the lawn as long as the ground remains dry by five o’clock." Next, volunteers packed thick plastic tarps in case a sudden drizzle drifted over the park. Notice why they didn’t pack the tarps only if it rained—that precaution had to happen beforehand! Meanwhile, guests could reserve free mats online provided that they arrived at least fifteen minutes before showtime. Finally, the team agreed not to move the equipment indoors unless strong wind made the screen unsafe. Thanks to clear planning and precise wording, nobody felt confused when evening clouds rolled across the hills.',
      listenQ: 'When did guests lose their free mat reservation if they arrived late?',
      listenA: 'They had to arrive at least fifteen minutes before showtime.',
      dictation: 'Pack a light jacket in case the room gets cold.',
      listenNote:
        'ฟังคู่คำ "in case" กับกริยา Present Simple ด้านหลัง ("gets cold" ไม่ใช่ "will get cold")',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ใช้ unless ซ้อนปฏิเสธและใส่ will ผิดที่: "Unless you won’t confirm by noon, your seat will expire."',
          answer:
            'Unless you confirm by noon, your seat will expire.',
          explanation:
            '1) unless แปลว่า if...not แล้ว ห้ามใส่ not/won’t ข้างในอีก 2) ใช้ Present Simple (confirm) หลัง unless',
        },
        {
          kind: 'choice',
          prompt:
            'คุณอยากเตือนเพื่อนก่อนออกจากบ้านว่า "จดเบอร์โรงแรมใส่กระดาษติดตัวไว้ด้วย เผื่อแบตมือถือหมดระหว่างทาง" ข้อใดใช้คำเชื่อมถูกต้องที่สุด?',
          answer:
            'Write down the hotel number in case your phone battery dies on the way.',
          choices: [
            'Write down the hotel number in case your phone battery dies on the way.',
            'Write down the hotel number unless your phone battery dies on the way.',
            'Write down the hotel number provided that your phone battery will die on the way.',
            'Write down the hotel number in case your phone battery will die on the way.',
          ],
          explanation:
            'จดไว้ล่วงหน้าก่อนออกเดินทางเพื่อป้องกันปัญหาที่อาจเกิด ใช้ in case + Present Simple',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมบอกเงื่อนไขที่เข้มขึ้นระดับข้อตกลง: Our partner will extend the discount _____ that we place the order before Friday.',
          answer: 'provided',
          explanation:
            'provided that = โดยมีเงื่อนไขว่า (ใช้กับข้อตกลง/เงื่อนไขเจรจา)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "คุณยืมกล้องฉันไปใช้ได้ ขอแค่ดูแลให้ปลอดภัยก็พอ"',
          answer:
            'You can borrow my camera as long as you keep it safe.',
          explanation:
            'ใช้ as long as + Present Simple (keep) เพื่อระบุเงื่อนไขเดียวที่ต้องทำตาม',
        },
      ],
      writing:
        'เขียนกฎและคำแนะนำการเตรียมตัวสำหรับทริปสั้นๆ หรือเวิร์กชอป 5–6 ประโยค โดยใช้ครบทั้ง unless, in case, as long as และ provided that (ระวังอย่าใช้ will หลังคำเชื่อมเหล่านี้)',
      writingSample:
        "Welcome to Saturday's riverside bike tour! Everyone is welcome to join as long as your brakes and tires are checked before departure. We recommend bringing a small bottle of sunscreen and extra cash in case some village stalls don't accept QR payments. Furthermore, our group will ride through the orchard trail provided that the path isn't muddy after Friday night. Don't worry—we won't stop early unless heavy rain makes visibility unsafe.",
      writingNote:
        'เช็กคำหลัง unless, in case, as long as, provided that: ต้องเป็น Present Simple และไม่มี not ซ้อนใน unless',
      speakingTopic: 'วางกฎและแผนป้องกันก่อนเดินทางหรือจัดงาน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'สมมุติว่าคุณกำลังบรีฟเพื่อนร่วมทริปหรือลูกค้าก่อนจัดกิจกรรม 1 อย่าง',
        'แยกใช้ให้เห็นภาพชัดระหว่าง "ทำเผื่อไว้ก่อน" (in case) กับ "เงื่อนไขข้อตกลง" (as long as / provided that / unless)',
        'ออกเสียง "as long as" เป็น "เอิซ-ลอง-เอิซ" ให้จังหวะลื่นและเป็นธรรมชาติ',
      ],
    },
    {
      day: 152,
      title: 'เปลี่ยนบทเรียนความผิดพลาดให้ฟังดูเติบโต (Constructive Reflections)',
      objective:
        'เล่าความผิดพลาดในอดีตด้วย Third/Mixed Conditional และวลีสะท้อนคิดเชิงบวก (silver lining, takeaway, moving forward) โดยไม่ฟังดูมัวแต่บ่น',
      explanation:
        'ในการสัมภาษณ์งาน การคุยกับหัวหน้า หรือการเล่าประสบการณ์ชีวิต การพูดแค่ *"I wish I didn’t do it, I’m so stupid"* ทำให้เราฟังดูติดลบและไม่ก้าวหน้า วิธีเปลี่ยนโทนให้ฟังดูโตแบบมืออาชีพคือสูตร **3 ก้าว (Acknowledge → Reframe → Forward)**: 1) **ยอมรับสั้นๆ ด้วย Mixed/3rd Conditional หรือ Hindsight**: `Looking back, if I had asked more questions upfront, I would have avoided that rework.` 2) **มองหามุมที่ได้เรียนรู้ (Silver lining / Takeaway)**: `The silver lining was that it forced me to build a clearer checklist.` / `What I took away from that experience was...` 3) **ก้าวต่อไป (Moving forward)**: `Moving forward, I always confirm priorities in writing first.` ฟังดูมั่นคง รับผิดชอบ และมีวุฒิภาวะทันที!',
      sound: [
        'Reflective Pauses & Measured Tone',
        'takeaway /ˈteɪk.ə.weɪ/ · silver lining /ˌsɪl.vər ˈlaɪ.nɪŋ/ · moving forward /ˈmuː.vɪŋ ˈfɔː.wəd/',
        'เวลาใช้วลีเปิดท่อนสะท้อนคิด เช่น "Looking back," หรือ "Moving forward," ให้หยุดเว้นจังหวะประมาณครึ่งวินาทีก่อนเข้าประเด็น เพื่อสร้างน้ำหนักและความสุขุม',
        'ฝึกพูดเปลี่ยนประโยคบ่นเป็นประโยคเติบโต: "I regret wasting time." -> "Looking back, | if I’d paused to plan, | I would-əv worked smarter. | Moving forward, | I block focus time daily."',
      ],
      l1: [
        'เล่าเรื่องความพลาดแล้วจบด้วยคำว่า "So sad / I am very regret / Next time I try my best" ซึ่งฟังดูลอยๆ ไม่เห็นแนวทางแก้เป็นรูปธรรม',
        'ติดรูปแบบคำลงท้ายแบบให้กำลังใจกว้างๆ ในภาษาไทย แทนที่จะระบุบทเรียนและขั้นตอนป้องกันที่ชัดเจน',
        'ทุกครั้งที่พูดถึงอดีตที่พลาด ให้จับคู่ 3 วลีนี้เสมอ: Looking back (มองย้อน) + The main takeaway was... (สิ่งที่ได้เรียนรู้) + Moving forward, I... (วิธีปฏิบัติใหม่)',
      ],
      vocab: [
        ['takeaway', 'บทเรียน/ข้อคิดสำคัญที่ได้', '/ˈteɪk.ə.weɪ/', 'the key takeaway', 'ข้อคิดสำคัญที่สุดที่ได้'],
        ['silver lining', 'ข้อดีที่ซ่อนอยู่ในเรื่องร้าย', '/ˌsɪl.vər ˈlaɪ.nɪŋ/', 'find a silver lining', 'มองเห็นแง่ดีในวิกฤต'],
        ['upfront', 'ตั้งแต่แรก / ล่วงหน้า', '/ˌʌpˈfrʌnt/', 'clarify expectations upfront', 'ชี้แจงความคาดหวังตั้งแต่แรก'],
        ['rework', 'การต้องรื้อทำใหม่', '/ˌriːˈwɜːk/', 'avoid unnecessary rework', 'หลีกเลี่ยงการแก้ซ้ำโดยไม่จำเป็น'],
        ['accountability', 'ความรับผิดชอบต่อผลลัพธ์', '/əˌkaʊn.təˈbɪl.ɪ.ti/', 'take full accountability', 'รับผิดชอบต่อผลอย่างเต็มที่'],
        ['moving forward', 'นับจากนี้ต่อไป / ในอนาคต', '/ˈmuː.vɪŋ ˈfɔː.wəd/', 'adjust habits moving forward', 'ปรับนิสัยต่อจากนี้เป็นต้นไป'],
        ['setback', 'อุปสรรคที่ทำให้สะดุดชั่วคราว', '/ˈset.bæk/', 'a temporary setback', 'อุปสรรคชั่วคราว'],
      ],
      examples: [
        ['Looking back, if I had clarified the client’s goals upfront, I would have avoided two rounds of rework.', 'มองย้อนกลับไป ถ้าฉันถามเป้าหมายลูกค้าให้ชัดตั้งแต่แรก คงไม่ต้องแก้งานซ้ำถึงสองรอบ'],
        ['The silver lining of that setback is that I finally built a reliable template.', 'ข้อดีจากอุปสรรคครั้งนั้นคือในที่สุดฉันก็ได้สร้างเทมเพลตที่ไว้ใจได้ขึ้นมา'],
        ['If I hadn’t struggled through that tough launch, I wouldn’t feel so prepared today.', 'ถ้าตอนนั้นฉันไม่เคยผ่านการเปิดตัวที่ทุลักทุเลขนาดนั้น วันนี้ฉันคงไม่รู้สึกพร้อมขนาดนี้'],
        ['Moving forward, I always send a short summary email right after each planning call.', 'ต่อจากนี้ไป ฉันจะส่งอีเมลสรุปสั้นๆ ทันทีหลังจบสายวางแผนทุกครั้ง'],
      ],
      reading:
        'During a mentoring chat last week, a junior designer named Ploy shared a mistake from her first freelance project. Instead of asking about image sizes at the start, she designed twenty social banners using rough assumptions. When the client finally reviewed them, half the graphics needed resizing overnight. "If only I had asked for exact dimensions upfront, I wouldn’t have wasted an entire weekend," Ploy admitted calmly. Rather than dwelling on frustration, however, she framed the setback constructively. She explained that the key takeaway was never relying on guesswork when specs felt vague. Even better, she noticed a clear silver lining: having rebuilt every banner under pressure, she now works twice as fast in her design software. Moving forward, she keeps a short intake checklist before starting any new project. Her mentor smiled, impressed less by perfection than by her quiet accountability and clear growth.',
      listenQ: 'What silver lining did Ploy discover after rebuilding all the banners?',
      listenA: 'She now works twice as fast in her design software.',
      dictation: 'Moving forward, we will clarify expectations upfront.',
      listenNote:
        'จับเสียงวรรคพักสั้นๆ หลัง "Moving forward" และเสียงท้ายคำ /t/ เบาๆ ของคำว่า "upfront"',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคสะท้อนบทเรียนที่เรียงกาลผิดและฟังดูบ่น: "Look back, if I ask earlier, I will save time. I so regret it and next time I try harder."',
          answer:
            'Looking back, if I had asked earlier, I would have saved time. Moving forward, I will clarify things upfront.',
          explanation:
            '1) วลีเปิดใช้ Looking back (ไม่ใช่ Look back) 2) Third Conditional ใช้ had + V3 / would have + V3 3) ปิดท้ายด้วย Moving forward + แนวทางชัดเจนแทนการบ่น',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดพูดเรื่อง "ข้อดีที่ได้จากเหตุการณ์ที่เคยพลาด" ได้เป็นธรรมชาติและมีวุฒิภาวะที่สุด?',
          answer:
            'The silver lining of that mistake is that I now double-check every detail automatically.',
          choices: [
            'The silver lining of that mistake is that I now double-check every detail automatically.',
            'I wish I never born when I made that terrible mistake.',
            'The key takeaway is nothing except I feel really bad.',
            'If I didn’t make that mistake, I was smarter today.',
          ],
          explanation:
            'ใช้ The silver lining... เชื่อมเข้ากับพฤติกรรมที่พัฒนาขึ้นในปัจจุบัน ฟังดูสร้างสรรค์และเติบโต',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ตรงความหมาย: Always confirm the budget _____ before ordering materials so you avoid surprises later.',
          answer: 'upfront',
          explanation:
            'upfront = ตั้งแต่แรก / ล่วงหน้าก่อนเริ่มลงมือ',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "บทเรียนสำคัญที่สุดที่ได้คือฉันต้องยืนยันกำหนดส่งเป็นลายลักษณ์อักษรเสมอ"',
          answer:
            'The key takeaway is that I always need to confirm deadlines in writing.',
          explanation:
            'The key takeaway is that... เป็นสำนวนสรุปบทเรียนระดับ B2 ที่คมชัดมาก',
        },
      ],
      writing:
        'เขียนคำตอบเชิงสะท้อนคิด 6 ประโยค สำหรับคำถามว่า "Tell me about a time something didn’t go as planned, and what you learned." โดยเรียงครบ 3 ก้าว: Looking back (3rd/Mixed Conditional) -> Silver lining/Takeaway -> Moving forward',
      writingSample:
        "Last year, I volunteered to coordinate snacks and audio setup for a thirty-person workshop, but I didn't assign a backup helper. Halfway through the morning, two tasks clashed at once, and guests waited fifteen minutes for coffee. Looking back, if I had delegated clear roles upfront, the break would have run smoothly. Even so, the silver lining was realizing how much easier events become when tasks are shared early. If I hadn't experienced that hectic morning, I probably wouldn't organize checklists so carefully today. Moving forward, I always pair every major task with a named co-host.",
      writingNote:
        'ตรวจสอบความสมดุล: อย่ามัวเล่าแต่ความผิดพลาดเกินครึ่ง ให้พื้นที่อย่างน้อยครึ่งหนึ่งแก่ "บทเรียน + วิธีป้องกันในอนาคต"',
      speakingTopic: 'เล่าเรื่องพลาด 1 ครั้งในแบบที่คนฟังอยากร่วมงานด้วย (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้โครง 3 จังหวะ: เหตุการณ์และเงื่อนไขย้อนหลัง (If I had...) -> Silver lining / Takeaway -> Moving forward',
        'คุมน้ำเสียงให้นิ่ง มั่นใจ และหยุดพักสั้นๆ ตรงจุดเปลี่ยนท่อนความคิด',
        'หลีกเลี่ยงคำพูดโทษโชคชะตาหรือกล่าวโทษคนอื่น แสดง accountability อย่างชัดเจน',
      ],
    },
    {
      day: 153,
      title: 'เจรจาเงื่อนไขและวางแผนสำรอง (Negotiating Terms & Contingency Plans)',
      objective:
        'ใช้เงื่อนไขเชิงเจรจา (as long as, on condition that, unless, what if) เพื่อตั้งขอบเขตงานและวางแผนสำรองในชีวิตจริงได้อย่างสุภาพและชัดเจน',
      explanation:
        'เวลาคุยตกลงเรื่องงานกับลูกค้า คุยแบ่งหน้าที่กับเพื่อน หรือเตรียมแผนสำรองเวลาจัดทริป เราต้องพูดเงื่อนไขให้ชัดโดยไม่ฟังดูแข็งกระด้าง ใช้ชุดประโยค **Negotiation & Contingency** 4 แบบนี้: 1) **ตั้งเงื่อนไขแลกเปลี่ยน**: `We can include the extra page as long as we push delivery to Friday.` / `I’m happy to swap shifts on condition that next week stays regular.` 2) **ขีดเส้นชัดเจนแบบนุ่มนวล**: `Unless we receive the final text by noon, the print run will slip.` 3) **ถามดักแผนสำรอง (Contingency)**: `What if the outdoor café is booked out?` / `In the event of rain, we’ll shift indoors.` 4) **ทริกสำคัญ**: ใส่เหตุผลคู่เงื่อนไข (`...so that quality stays high`) เพื่อให้อีกฝ่ายเห็นว่าเงื่อนไขนั้นช่วยให้งานออกมาดีด้วยกันทั้งคู่',
      sound: [
        'Smooth Stress on Negotiation Hedges',
        'on condition that /ɒn kənˈdɪʃ.ən ðæt/ · backup plan /ˈbæk.ʌp plæn/ · what if /wɒt ɪf/',
        'เวลาพูดว่า "What if...?" เพื่อถามแผนสำรอง ให้เชื่อมเสียง /t/ ของ what เข้า /ɪ/ ของ if เป็น "วอท-ทิฟ" (/wɒt.ɪf/) และกดน้ำหนักคำกริยาสำคัญด้านหลัง',
        'ฝึกพูดประโยคต่อรองแบบสุภาพ 3 รอบ โดยเน้นคำว่า "as long as" ให้ฟังดูเปิดกว้าง ไม่ใช่ขู่',
      ],
      l1: [
        'พูดต่อรองสั้นเกินไปจนฟังดูห้วน เช่น "No! Must pay first, otherwise I don’t start." หรือใช้ "What if + will..." ในอนาคต',
        'ไม่มีวลีช่วยลดความแข็ง (hedging) เลยแปลคำต่อรองตรงตัวจากภาษาไทยแบบคำต่อคำ',
        'เปลี่ยนประโยคห้ามหรือสั่งเป็น "I’d be happy to + [สิ่งที่เขาอยากได้] + as long as / provided that + [เงื่อนไขของเรา]" แล้วตามด้วยแผนสำรองด้วย What if...!',
      ],
      vocab: [
        ['contingency plan', 'แผนสำรองกรณีฉุกเฉิน', '/kənˈtɪn.dʒən.si plæn/', 'prepare a contingency plan', 'เตรียมแผนสำรองเผื่อฉุกเฉิน'],
        ['on condition that', 'โดยมีเงื่อนไขว่า', '/ɒn kənˈdɪʃ.ən ðæt/', 'agree on condition that', 'ตกลงโดยมีเงื่อนไขว่า'],
        ['compromise', 'ประนีประนอม / พบกันครึ่งทาง', '/ˈkɒm.prə.maɪz/', 'reach a fair compromise', 'บรรลุข้อตกลงที่พบกันครึ่งทาง'],
        ['buffer', 'เวลา/งบเผื่อกันพลาด', '/ˈbʌf.ər/', 'build in a buffer', 'เผื่อเวลาสำรองไว้ในแผน'],
        ['shift', 'เลื่อน / ปรับย้าย', '/ʃɪft/', 'shift the timeline', 'ขยับไทม์ไลน์ออกไป'],
        ['sign off', 'อนุมัติขั้นสุดท้าย', '/saɪn ɒf/', 'sign off on the draft', 'อนุมัติฉบับร่าง'],
        ['fallback', 'ทางเลือกสำรอง', '/ˈfɔːl.bæk/', 'have a solid fallback', 'มีทางเลือกสำรองที่มั่นคง'],
      ],
      examples: [
        ['We can keep the original budget as long as the page count stays under ten.', 'เราคงงบเดิมไว้ได้ ขอแค่จำนวนหน้าไม่เกินสิบหน้า'],
        [
          "I'm glad to cover Saturday's event on condition that I take Monday morning off.",
          'ฉันยินดีไปดูแลงานวันเสาร์ให้ โดยมีเงื่อนไขว่าขอลาเช้าวันจันทร์แทนนะ',
        ],
        ['What if the main speaker’s flight gets delayed? Let’s prepare a solid fallback.', 'แล้วถ้าเที่ยวบินของวิทยากรหลักดีเลย์ล่ะ? เรามาเตรียมทางเลือกสำรองไว้กันเถอะ'],
        ['Unless the client signs off by four today, printing will shift to next Tuesday.', 'เว้นเสียแต่ว่าลูกค้าจะอนุมัติภายในสี่โมงเย็นวันนี้ งานพิมพ์จะต้องเลื่อนไปวันอังคารหน้า'],
      ],
      reading:
        'Negotiating scope smoothly rarely requires raising your voice; it depends on clear conditions and thoughtful contingency plans. Last week, a small catering team received an urgent request for eighty lunch boxes on short notice. Instead of saying flatly, "Impossible," the manager offered a fair compromise. "We can deliver everything hot by eleven thirty as long as you choose two set menus instead of five," she explained. She also added a gentle boundary: "Unless we confirm the headcount before five today, our kitchen won’t have enough prep time." Just before hanging up, the client asked a smart question: "What if heavy afternoon rain blocks the main gate?" Prepared as always, the manager already had a fallback—drivers would park at the covered side entrance and call ten minutes ahead. Both sides signed off happily because every condition protected quality rather than creating tension.',
      listenQ: 'What did the catering manager ask the client to choose in order to deliver on time?',
      listenA: 'Two set menus instead of five.',
      dictation: 'We can deliver on time as long as you confirm today.',
      listenNote:
        'สังเกตจังหวะเชื่อม "as long as" (/əz ˈlɒŋ əz/) และการออกเสียงกริยา Present Simple "confirm" หลังตัวเชื่อมเงื่อนไข',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคเจรจาเงื่อนไขที่ใส่ will และใช้ unless ซ้อนปฏิเสธ: "I will can finish it tomorrow provided that you will send the photos, unless the designer isn’t busy."',
          answer:
            'I can finish it tomorrow provided that you send the photos, unless the designer is busy.',
          explanation:
            '1) ไม่ใช้ will + can (ใช้ I can) 2) หลัง provided that ใช้ Present Simple (send) 3) หลัง unless ห้ามใส่ not/isn’t (ใช้ unless the designer is busy)',
        },
        {
          kind: 'choice',
          prompt:
            'ลูกค้าขอเพิ่มฟีเจอร์ใหม่กะทันหัน คุณอยากตอบรับแบบมืออาชีพและกันเวลาเพิ่ม ข้อใดเหมาะสมที่สุด?',
          answer:
            'We can include that extra section as long as we build in a two-day buffer.',
          choices: [
            'We can include that extra section as long as we build in a two-day buffer.',
            'No way! Unless we will add two days, we cannot do anything.',
            'We include that extra section in case we build a two-day buffer.',
            'What if we don’t include it? You have to pay more now.',
          ],
          explanation:
            'ตอบรับข้อเสนอเชิงบวกพร้อมเงื่อนไขด้วย as long as + Present Simple (build in a two-day buffer)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบสำนวนวางแผนสำรอง: Let’s prepare a _____ plan before Friday in case the outdoor sound system runs into trouble.',
          answer: 'contingency',
          explanation:
            'contingency plan = แผนสำรองกรณีเกิดเหตุไม่คาดคิด',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "แล้วถ้าผู้บรรยายมาสายล่ะ? เราควรมีทางเลือกสำรองไว้"',
          answer:
            'What if the speaker arrives late? We should have a fallback option ready.',
          explanation:
            'ใช้ What if + Present Simple เพื่อตั้งคำถามแผนสำรองอย่างกระชับ',
        },
      ],
      writing:
        'เขียนข้อความตอบตกลงเพื่อนหรือลูกค้าแบบมีเงื่อนไข 5–6 ประโยค (เช่น แบ่งงานกลุ่ม, ปรับแก้ดีไซน์ หรือจองสถานที่จัดงาน) โดยใช้ as long as, on condition that / provided that, unless และ What if',
      writingSample:
        "Thanks for sending over the new schedule! Our team would be glad to support the Saturday workshop on condition that we finalize the guest list by Wednesday evening. We can also bring our spare projector as long as someone meets us at the lobby to open the storage lift. However, unless we receive the updated slides before Friday noon, we won't have enough time to test the video clips. Just in case, what if the venue Wi-Fi drops during the demo? Let's keep a local copy on a flash drive as our fallback.",
      writingNote:
        'เช็กโทนข้อความว่าไม่แข็งทื่อ: จับคู่ "ยินดีช่วย (I’d be glad to...)" เข้ากับเงื่อนไขชัดเจน + แผนสำรอง',
      speakingTopic: 'ต่อรองข้อตกลงและแผนสำรองแบบได้ใจทั้งสองฝ่าย (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกสถานการณ์เจรจา 1 เรื่อง (เช่น ขอเลื่อนส่งเพื่อคุมคุณภาพ, แบ่งงานบ้าน/งานกลุ่ม, หรือวางแผนจัดอีเวนต์หน้าฝน)',
        'ใช้คำเชื่อมเงื่อนไขอย่างน้อย 3 ตัว: as long as, provided that / on condition that, unless, What if',
        'เช็กตัวเองว่าไม่เผลอพูด will หลังคำเชื่อมเงื่อนไข และพูด "วอท-ทิฟ" ลื่นปาก',
      ],
    },
    {
      day: 154,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 22: Third & Mixed Conditionals, Wish & เงื่อนไขขั้นสูง + Dictogloss',
      objective:
        'สังเคราะห์การใช้ Third Conditional, Mixed Conditional, I wish / If only 3 รูป และตัวเชื่อมเงื่อนไข beyond if ผ่านการวิเคราะห์ข้อผิดพลาดและ Dictogloss',
      explanation:
        'จบสัปดาห์ที่ 22 แล้วครับ! สัปดาห์นี้คุณได้อัปเกรดการพูดเรื่องสมมุติและเงื่อนไขจาก A2 สู่ระดับ B1→B2 เต็มตัว มาตรวจเช็ก 4 จุดสำคัญก่อนขึ้นสัปดาห์ใหม่: 1) **3rd Conditional**: `If + had + V3, would/could/might + have + V3` (ห้ามใส่ `would` ในท่อน `If`) 2) **Mixed Conditional**: แยกให้ขาดว่า "ผลลัพธ์" เกิดตอนไหน ถ้าเกิด **ตอนนี้ (`now/today`)** ท่อนผลใช้แค่ `would + V1`! 3) **`I wish / If only`**: ถอยเวลา 1 ขั้น (ปัจจุบัน→V2/were, อดีต→had+V3, คนอื่นเปลี่ยนนิสัย→would+V1) 4) **Beyond `if`**: `in case` (ทำเผื่อก่อน), `unless` (ห้ามใส่ `not` ข้างใน), `as long as / provided that` (ไม่ใส่ `will` หลังตัวเชื่อม) วันนี้ฝึก Dictogloss และเรียบเรียงความคิดแบบครบเครื่องเลยครับ!',
      sound: [
        'Week 22 Contractions & Clause Stress Audit',
        "If I'd known /ɪf aɪd nəʊn/ · wouldn't have /ˈwʊd.n̩t.əv/ · as long as /əz ˈlɒŋ əz/ · unless /ənˈles/",
        'ตรวจสอบการลดรูป ’d (had vs would) และเชื่อมคำ "in case" / "as long as" ในความเร็วปกติของเจ้าของภาษา',
        'ทำ Shadowing บทอ่านประจำสัปดาห์วันนี้ 2 รอบ โดยเน้นแยกเสียงเน้นของเวลา (อดีต vs ปัจจุบัน) ให้ชัดเจน',
      ],
      l1: [
        'จุดสับสนรวมสัปดาห์: ปนกาลระหว่าง 3rd กับ Mixed Conditional (ใส่ have V3 กับ now), ใส่ not หลัง unless, และพูด I wish + Present Simple',
        'เวลาพูดเร็ว สมองจะสลับกลับไปใช้สูตรเก่าที่ชินที่สุดโดยไม่ดูคำบอกเวลาท้ายประโยค',
        'ฝึกชะลอครึ่งวินาทีตรงเครื่องหมายจุลภาคเพื่อถามตัวเองว่าท่อนหลังหมายถึง "อดีต" (have+V3) หรือ "ตอนนี้" (V1/be)!',
      ],
      vocab: [
        ['hindsight', 'การมองย้อนกลับหลัง', '/ˈhaɪnd.saɪt/', 'with the benefit of hindsight', 'เมื่อมองย้อนกลับไปด้วยมุมมองตอนนี้'],
        ['compromise', 'การพบกันครึ่งทาง', '/ˈkɒm.prə.maɪz/', 'a practical compromise', 'ข้อตกลงที่ปรับเข้าหากันได้จริง'],
        ['safeguard', 'มาตรการป้องกันเผื่อไว้', '/ˈseɪf.ɡɑːd/', 'add an extra safeguard', 'เพิ่มชั้นป้องกันสำรองไว้'],
        ['outcome', 'ผลลัพธ์สุดท้าย', '/ˈaʊt.kʌm/', 'shape the final outcome', 'กำหนดผลลัพธ์สุดท้าย'],
        ['unintended', 'ที่ไม่ได้ตั้งใจให้เกิด', '/ˌʌn.ɪnˈten.dɪd/', 'unintended side effects', 'ผลข้างเคียงที่ไม่ได้ตั้งใจ'],
        ['proactive', 'เชิงรุก / เตรียมการล่วงหน้า', '/prəʊˈæk.tɪv/', 'take a proactive step', 'ลงมือป้องกันล่วงหน้าอย่างเชิงรุก'],
        ['restraint', 'ความยับยั้งชั่งใจ', '/rɪˈstreɪnt/', 'show calm restraint', 'แสดงความสุขุมยับยั้งใจ'],
      ],
      examples: [
        ['If we had built in a short buffer earlier, we wouldn’t be rushing through edits today.', 'ถ้าเราเผื่อเวลาสำรองไว้ตั้งแต่แรก วันนี้เราก็คงไม่ต้องรีบปั่นแก้กันแบบนี้'],
        ['I wish I had saved those draft notes before closing the browser window.', 'ฉันน่าจะเซฟโน้ตร่างพวกนั้นไว้ก่อนปิดหน้าต่างเบราว์เซอร์เลย'],
        ['You can join the mountain hike as long as you bring waterproof shoes.', 'คุณร่วมเดินป่าขึ้นเขาได้ ขอแค่เตรียมรองเท้ากันน้ำมาด้วย'],
        ['With the benefit of hindsight, that small delay helped us spot a bigger issue.', 'พอมองย้อนกลับไป ความล่าช้าเล็กน้อยครั้งนั้นช่วยให้เราเห็นปัญหาใหญ่กว่าเดิมทัน'],
      ],
      reading:
        'Last month, two startup founders reflected on how they handled a sudden supplier shortage just days before a seasonal trade fair. Initially, they wished their main vendor would respond faster to urgent messages. However, wishing alone never changes an immediate outcome. Looking back, if they had lined up a secondary workshop three months earlier, they wouldn’t have panicked when shipments stalled—and they would feel far more relaxed about next season’s inventory today. Luckily, one founder took a proactive step by packing sample boxes in case their main booth display arrived late. That simple safeguard saved their opening morning. Moving forward, they will only sign exclusive supply contracts provided that partners agree to clear backup terms. Unless small teams build practical compromises early, minor setbacks easily grow into exhausting crises.',
      listenQ: 'On what condition will the founders sign future exclusive supply contracts?',
      listenA: 'Provided that partners agree to clear backup terms.',
      dictation: 'We would feel calmer today if we had planned ahead.',
      listenNote:
        'จับการสลับกาลในประโยค Dictation: ท่อนหน้า "would feel calmer today" (ปัจจุบัน) + ท่อนหลัง "if we had planned ahead" (อดีต)',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังบทอ่านแล้วเติมคู่โครงสร้าง Mixed Conditional ให้ตรงตามต้นฉบับ: "If they _____ a secondary workshop earlier, they _____ far more relaxed about inventory today."',
          answer: 'had lined up / would feel',
          choices: [
            'had lined up / would feel',
            'would line up / had felt',
            'lined up / would have felt',
            'had lined up / would have felt',
          ],
          explanation:
            'อดีต (had lined up earlier) ส่งผลถึงปัจจุบัน (would feel far more relaxed today) เป็น Mixed Conditional',
          audio_text:
            'If they had lined up a secondary workshop three months earlier, they would feel far more relaxed about next season’s inventory today.',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่มีจุดพลาด 3 จุดจากสัปดาห์ 22: "I wish I have a backup battery now, and unless you don’t charge it early, you will run out of power in case the trip takes long."',
          answer:
            'I wish I had a backup battery now, and unless you charge it early, you will run out of power if the trip takes long.',
          explanation:
            '1) I wish + อดีต (had) สำหรับความปรารถนาปัจจุบัน 2) unless แปลว่า if not อยู่แล้ว จึงตัด don’t ออกเป็น unless you charge 3) "ถ้าทริปใช้เวลานาน (ค่อยเกิดเหตุแบตหมด)" ใช้ if ไม่ใช่ in case',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดแสดงความเสียดายอดีตด้วย If only ได้ถูกต้องตามไวยากรณ์?',
          answer:
            'If only we had verified the venue address before calling the taxi!',
          choices: [
            'If only we had verified the venue address before calling the taxi!',
            'If only we verified the venue address before calling the taxi last night!',
            'If only we would verify the venue address before calling the taxi!',
            'If only we have verified the venue address before calling the taxi!',
          ],
          explanation:
            'ความเสียดายย้อนหลังกับเหตุการณ์อดีตต้องใช้ If only + had + V3',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "เตรียมสำเนาบัตรติดตัวไว้ด้วย เผื่อระบบสแกนที่ประตูเกิดขัดข้อง"',
          answer:
            'Bring a copy of your ID in case the gate scanner malfunctions.',
          explanation:
            'เตรียมไว้ล่วงหน้าก่อนออกเดินทางใช้ in case + Present Simple',
        },
      ],
      writing:
        'เขียนเรียงความสั้น 1 ย่อหน้า (6–7 ประโยค) หัวข้อ "A Decision That Taught Me to Plan Ahead" โดยใช้ครบทั้ง 3rd Conditional, Mixed Conditional, I wish / If only และคำเชื่อม beyond if อย่างน้อย 1 ตัว (in case / unless / as long as)',
      writingSample:
        "Two years ago, I booked an overnight bus to a mountain town during peak holiday season without checking local transfer times. If only I had checked the last local shuttle schedule before buying my ticket! If I had arrived two hours earlier, I wouldn't have waited outside a chilly station until sunrise. Even now, whenever I travel solo, I wish regional bus apps would display clear connection alerts. Still, that messy night gave me a proactive habit: I now bring snacks and an offline map in case my signal disappears in the hills. If I hadn't learned that lesson the hard way, I wouldn't feel so calm when unexpected delays happen today.",
      writingNote:
        'ตรวจสอบความต่างระหว่าง 3rd (อดีต→อดีต), Mixed (อดีต→ปัจจุบัน) และตัวเชื่อมเงื่อนไขที่ไม่มี will หลัง unless / in case / as long as',
      speakingTopic: 'สรุปสัปดาห์ 22: เล่าอดีต ผลถึงวันนี้ และกติกาป้องกันในอนาคต (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าเหตุการณ์สำคัญ 1 เรื่องแล้วแตกออกเป็น 3 มุม: If I had... (3rd), I wouldn’t be... now (Mixed), Moving forward, I do X in case... (Beyond if)',
        'ฝึกพูดให้ลื่นโดยย่อรูป I’d / wouldn’t’ve และหยุดหายใจตรงจุดเปลี่ยนกาลอย่างเป็นธรรมชาติ',
      ],
    },
  ]
);
