import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 4: สื่อสารคล่องตัว เลือกโทนภาษา และฟังความเร็วเจ้าของภาษา';

export const WEEK30: ModuleSeed = createModule(
  {
    week: 30,
    phase: 4,
    phase_title: PHASE_TITLE,
    cefr_level: 'B2',
    title: 'Authentic Listening: เสียงรวบ ความเร็วธรรมชาติ และสำเนียงโลก',
    summary:
      'ถอดรหัสการพูดความเร็วเจ้าของภาษา การรวบเสียง (wanna/gonna/kinda/gotcha/dunno in listening), Flap T, Glottal Stop, Word Fillers และ Blind Shadowing',
    focus: 'Authentic Connected Speech, Reductions, Spoken Fillers, Blind Shadowing',
  },
  [
    {
      day: 204,
      title: 'High-Frequency Spoken Reductions — ฟังเสียงรวบ (wanna/gonna/dunno) ให้ทะลุปรุโปร่ง',
      objective:
        'ถอดรหัสเสียงรวบความถี่สูงในภาษาพูด (wanna, gonna, hafta, sorta, kinda, dunno, outta) ได้ 100% ทันทีที่ได้ยิน และรู้เส้นแบ่งชัดเจนระหว่างการพูดลำลองกับการเขียนจริง',
      explanation:
        'ทำไมหลายคนอ่านออกหมดแต่พอเปิดพอดแคสต์หรือซีรีส์กลับฟังไม่ออก? คำตอบคือในสมองคุณคาดหวังเสียง **"want to"** ชัด 2 พยางค์ แต่หูได้ยิน **"วอน-เหนอะ" (`wanna`)**! เสียงรวบกลุ่มนี้เกิดจากสระอ่อนลงเป็นเสียง **Schwa `/ə/`** เมื่อพูดเร็ว: `want to → wanna` (`/ˈwɒn.ə/`), `(be) going to → gonna` (`/ˈɡʌn.ə/`), `have to → hafta` (`/ˈhæf.tə/`), `kind of → kinda` (`/ˈkaɪn.də/`), `sort of → sorta` (`/ˈsɔː.tə/`), `(I) don’t know → dunno` (`/dəˈnəʊ/`), `out of → outta` (`/ˈaʊ.tə/`) กฎเหล็ก 3 ข้อที่ต้องแม่น: **1) ในเสียง `gonna` ห้ามลืม Verb to be ข้างหน้าเด็ดขาด** (`I’m gonna call you.` — เมื่อฟังเร็วจะได้ยินเป็น *"แอม-กะ-เหนอะ"* ไม่ใช่ไม่มี `am`!) **2) หลัง `wanna / gonna / hafta` มี `to` กลืนเข้าไปแล้ว ห้ามพูดหรือเขียน `to` ซ้ำ** (`*gonna to go` ผิด!) **3) ห้ามใช้ `wanna` กับประธาน `he/she/it`** เพราะ `wants to` มีเสียง `s` จึงไม่หดเป็น `wanna` และสำคัญที่สุด: **คำพวกนี้มีไว้สำหรับฟังและพูดลำลอง ห้ามพิมพ์ลงอีเมลงานหรือเอกสารทางการเด็ดขาด!**',
      sound: [
        'Schwa Reductions in Casual Speech',
        'wanna /ˈwɒn.ə/ · gonna /ˈɡʌn.ə/ · hafta /ˈhæf.tə/ · dunno /dəˈnəʊ/',
        'เวลาเจ้าของภาษาพูดเร็ว "I don’t know what I’m going to do" จะกลืนเหลือแค่ "I dunno wha-dəm gonna do" — สังเกตว่าตัว t ใน want/don’t/going หายไปและท้ายคำกลายเป็นเสียง เออะ (/ə/) เบาๆ ทั้งหมด',
        'ฝึกฟังแล้วออกเสียงคู่เทียบ ช้า vs เร็ว: want to → wanna · going to → gonna · have to → hafta · out of → outta',
      ],
      l1: [
        'เอาคำรวบเสียงไปเขียนในอีเมลสมัครงาน ("I wanna apply for...") หรือเผลอซ้อนคำว่า to ("I’m gonna to check") และตัด am/is/are หน้า gonna ทิ้ง ("She gonna leave soon.")',
        'ผู้เรียนเห็นคำเหล่านี้ในเนื้อเพลงหรือซับไตเติลแล้วเข้าใจว่าเป็นคำศัพท์เดี่ยวๆ ไม่ใช่รูปย่อของ (be) going to หรือ want to',
        'ใช้กฎ "หูฟังแบบรวบ — มือพิมพ์แบบเต็ม": ฟังให้รู้ว่า gonna = be going to และ dunno = do not know แต่เวลาเขียนอีเมลหรือรายงานให้พิมพ์เต็มทุกครั้ง',
      ],
      vocab: [
        [
          'reduction',
          'การรวบ/ลดรูปเสียง',
          '/rɪˈdʌk.ʃən/',
          'spot a common reduction',
          'จับเสียงรวบที่พบบ่อยได้',
        ],
        [
          'renovate',
          'ปรับปรุงซ่อมแซมใหม่',
          '/ˈren.ə.veɪt/',
          'renovate a tiny balcony',
          'ปรับปรุงระเบียงขนาดเล็กใหม่',
        ],
        [
          'commute',
          'การเดินทางไปกลับที่ทำงาน',
          '/kəˈmjuːt/',
          'cut down the daily commute',
          'ลดเวลาเดินทางประจำวัน',
        ],
        [
          'unpredictable',
          'คาดเดายาก',
          '/ˌʌn.prɪˈdɪk.tə.bəl/',
          'unpredictable traffic jams',
          'รถติดที่คาดเดาไม่ได้',
        ],
        [
          'narrow down',
          'คัดตัวเลือกให้แคบลง',
          '/ˈnær.əʊ daʊn/',
          'narrow down two options',
          'คัดเลือกให้เหลือสองตัวเลือก',
        ],
        [
          'cramped',
          'คับแคบ',
          '/kræmpt/',
          'feel kind of cramped',
          'รู้สึกค่อนข้างอึดอัดคับแคบ',
        ],
        [
          'deposit',
          'เงินมัดจำ',
          '/dɪˈpɒz.ɪt/',
          'lose a rental deposit',
          'เสียเงินมัดจำค่าเช่า',
        ],
      ],
      examples: [
        [
          'I am going to compare both leases tonight—though honestly, I do not know which one feels smarter.',
          'คืนนี้ฉันว่าจะลองเทียบสัญญาเช่าทั้งสองที่ดู แม้เอาเข้าจริงยังไม่แน่ใจเลยว่าแบบไหนฉลาดกว่ากัน',
          'เวลาพูดเร็วในชีวิตจริงมักได้ยินเป็น "I’m gonna compare... I dunno which one..."',
        ],
        [
          'We have to decide before Friday or lose our deposit.',
          'เราต้องตัดสินใจก่อนวันศุกร์ ไม่อย่างนั้นจะเสียเงินมัดจำ',
        ],
        [
          'The bedroom looks sort of narrow, yet the balcony view is awesome.',
          'ห้องนอนดูค่อนข้างแคบหน่อย แต่วิวระเบียงสวยมากเลย',
        ],
        [
          'Do you want to grab coffee downstairs before we narrow down the list?',
          'อยากลงไปซื้อกาแฟข้างล่างก่อนที่เราจะคัดรายการให้แคบลงไหม?',
        ],
      ],
      reading:
        'Over late-night noodles, flatmates Beam and Leo debated whether to renew their apartment lease or move closer to the skytrain. "I don’t know, Beam," Leo sighed, swirling his iced tea. "Our current place feels kind of cramped when we both work from home, doesn’t it?" Beam nodded while checking her budget spreadsheet. "Yeah, it sort of does, especially on rainy Mondays. Still, if we move downtown, we are going to pay almost four thousand baht more every month. I want to save for my Japan trip in November, so I have to watch fixed costs." Leo leaned back and ran the numbers on his phone. "Fair point—we’d definitely run out of wiggle room on groceries. What if we stay one more year, buy two folding desks, and renovate the tiny balcony into a reading nook?" Beam’s eyes lit up immediately. "Honestly, that’s smart. Let’s sleep on it tonight, and tomorrow we can narrow down a budget for the balcony chairs."',
      listenQ: 'What compromise did Leo suggest instead of moving to a more expensive downtown apartment?',
      listenA: 'Staying one more year, buying two folding desks, and turning the balcony into a reading nook.',
      dictation: 'We have to decide before Friday or lose our deposit.',
      listenNote:
        'ลองอ่านบทสนทนาของ Beam และ Leo ซ้ำอีกครั้งโดยเปลี่ยน "don’t know → dunno", "kind of → kinda", "going to → gonna", "want to → wanna", "have to → hafta", "out of → outta" แล้วฟังความลื่นไหลของจังหวะพูด',
      drills: [
        {
          kind: 'choice',
          prompt:
            'คุณได้ยินเพื่อนชาวต่างชาติพูดเร็วๆ ว่า "We’re gonna hafta leave early coz traffic’s kinda unpredictable." ความหมายมาตรฐานตรงกับข้อใด?',
          answer:
            'We are going to have to leave early because traffic is somewhat unpredictable.',
          choices: [
            'We want to leave early because traffic is always fast.',
            'We are going to have to leave early because traffic is somewhat unpredictable.',
            'We already had to leave early before traffic got bad.',
            'We do not know if we are leaving early in bad traffic.',
          ],
          explanation:
            'gonna = going to, hafta = have to, kinda = kind of (ค่อนข้าง/ประมาณหนึ่ง)',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ข้อความอีเมลสมัครงานที่เผลอใช้ภาษาพูดรวบเสียงและผิดไวยากรณ์ 3 จุด: "Dear Hiring Manager, I wanna to apply for the coordinator role, and I gonna attach my portfolio below."',
          answer:
            'Dear Hiring Manager, I would like to apply for the coordinator role, and I am going to attach my portfolio below.',
          explanation:
            '1) อีเมลทางการห้ามใช้ wanna/gonna ให้ใช้ I would like to / I want to และ I am going to 2) ห้ามซ้อน to หลัง wanna และห้ามลืม am หน้า going to',
        },
        {
          kind: 'gap',
          prompt:
            'แปลงเสียงพูดที่ได้ยินให้เป็นรูปเขียนมาตรฐานที่ถูกต้อง: ในคลิปพูดเร็วว่า "I dunno why he left." → เขียนเต็มเป็น "I _____ why he left."',
          answer: 'do not know',
          explanation:
            'dunno เป็นเสียงรวบของ I don’t know / do not know',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นประโยคภาษาอังกฤษมาตรฐาน (เวลาพูดจริงมักรวบเป็น wanna / hafta): "คืนนี้คุณอยากจะทบทวนบันทึกด้วยกันหรือว่าต้องพักผ่อนก่อน?"',
          answer:
            'Do you want to review the notes together tonight, or do you have to rest first?',
          explanation:
            'ประโยคพูดจริงจะได้ยินเป็น "Do ya wanna review... or do ya hafta rest first?" แต่โครงสร้างหลักคือ want to และ have to',
        },
      ],
      writing:
        'เขียนบทสนทนาระหว่างเพื่อน 2 คนความยาว 6 บรรทัดเรื่องวางแผนวันหยุดหรือปรับพื้นที่ห้อง โดยเขียนเป็นภาษาพูดธรรมชาติมาตรฐาน (ใช้ want to, going to, have to, kind of, don’t know) แล้ววงเล็บท้ายบรรทัดบอกว่าคำใดที่หูจะได้ยินเป็นเสียงรวบเวลาพูดเร็ว',
      writingSample:
        'A: Are you going to stay in Bangkok this long weekend? (going to → gonna)\nB: Honestly, I don’t know yet. My cousin wants to visit a pottery market in Ratchaburi. (don’t know → dunno)\nA: That sounds kind of fun! Do you have to drive early in the morning? (kind of → kinda, have to → hafta)\nB: Yeah, we want to leave before seven so we stay out of heavy traffic. (want to → wanna, out of → outta)\nA: Nice—let me know if you need a ride to the station!',
      writingNote:
        'สังเกตข้อแตกต่างในตัวอย่างบรรทัดที่ 2: "wants to" ไม่สามารถรวบเป็น wanna ได้เพราะมีเสียง -s ของประธานเอกพจน์! เช็กจุดนี้ในบทสนทนาของคุณด้วย',
      speakingTopic:
        'ฝึกสวิตช์โหมดเสียงพูดลำลอง vs เสียงอ่านทางการ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดเล่าแผนสุดสัปดาห์ด้วยจังหวะธรรมชาติที่มีเสียงลดรูป (gonna, hafta, kinda) ไม่ให้ฟังเหมือนหุ่นยนต์อ่านทีละคำ',
        'สลับโหมดเล่าเรื่องเดียวกันให้อยู่ในรูปที่สุภาพชัดเจนเหมือนนำเสนอต่อลูกค้า (ออกเสียง going to, have to ชัดขึ้น)',
        'ระวังห้ามเผลอใส่ to ตามหลัง gonna หรือ wanna และห้ามลืม Verb to be หน้า gonna',
      ],
    },
    {
      day: 205,
      title: 'Assimilation & Coalescence — จับเสียงชนกลายร่าง (didja / gotcha) และ Flap T',
      objective:
        'แยกแยะคำที่เสียงชนกันแล้วเปลี่ยนรูป (did you → didja, would you → wouldja, don’t you → dontcha, got you → gotcha) และเสียง Flap T (water/better/get it) ในความเร็วเจ้าของภาษา',
      explanation:
        'เคยสงสัยไหมว่าทำไมเวลาฝรั่งถามเร็วๆ ว่า *"Did you check it?"* เราไม่ได้ยินคำว่า `did` กับ `you` เลย แต่ได้ยินคล้าย **"ดิด-จ่ะ"**?! ปรากฏการณ์นี้เรียกว่า **Coalescence (การหลอมเสียงชนกัน)**: เมื่อเสียง `/d/` ชน `/j/` (ตัว y) มันจะกลายร่างเป็น **`/dʒ/` (เสียง จ)** และเมื่อ `/t/` ชน `/j/` จะกลายร่างเป็น **`/tʃ/` (เสียง ช)**! ดูชุดพบบ่อยที่สุด: `did you → didja` (`/ˈdɪdʒ.ə/`), `would you → wouldja` (`/ˈwʊdʒ.ə/`), `could you → couldja` (`/ˈkʊdʒ.ə/`), `don’t you → dontcha` (`/ˈdəʊn.tʃə/`), `got you → gotcha` (`/ˈɡɒtʃ.ə/` = เข้าใจแล้ว/ช่วยจับได้แล้ว!) นอกจากนี้ยังมี **Flap T (`/ɾ/`)**: ในภาษาอังกฤษอเมริกันและแคนาดา เมื่อตัว **`t`** อยู่ระหว่างสระ 2 ตัวและพยางค์หลังไม่เน้น (เช่น *water, better, letter, later, wait a minute, get it*) เสียง `/t/` จะดีดลิ้นเบาๆ คล้ายเสียง **ด/ร เร็วๆ** (`"วอ-เดอะ"`, `"เก็ด-ดิด"`) การรู้กฎเสียงนี้ช่วยให้หูคุณ "แปลงเสียงกลับเป็นรูปคำ" ได้ทันที!',
      sound: [
        'Palatal Coalescence /dʒ/ & /tʃ/ + Intervocalic Flap T /ɾ/',
        'water /ˈwɔː.ɾər/ · matter /ˈmæt.ər/ · get it /ˈɡeɾ.ɪt/ · did you /ˈdɪdʒ.ə/',
        'ฟังเสียงชน 2 ชุดให้ชิน: 1) `/d/ + /j/ = /dʒ/` (did you, would you, could you, told you) 2) `/t/ + /j/ = /tʃ/` (don’t you, won’t you, bet you, got you) 3) Flap T: `Wait a minute` → "เว-เดอะ-มิ-นิท"',
        'ฝึกพูดเชื่อมคำ 5 วลี: Did you get it? · Would you grab water? · Don’t you think so? · Got you covered! · Better late than never.',
      ],
      l1: [
        'ได้ยิน "wouldja" แล้วคิดว่าเป็นคำใหม่ หรือฟัง "get it" เป็นคำเดียวที่ไม่รู้จักเพราะได้ยินเสียง "เก็ด-ดิด" แทน "เก็ต-อิท"',
        'คนไทยเรียนคำศัพท์แบบแยกคำโดดและเน้นเสียง /t/ ชัดทุกตำแหน่ง ทำให้พอเจอ Flap T หรือเสียงกลอม /dʒ/ /tʃ/ จึงเทียบเข้าคลังคำศัพท์ในหัวไม่เจอ',
        'ทุกครั้งที่ได้ยินเสียง "จ่ะ" ท้ายกริยา (didja, wouldja, couldja, hadja) ให้สมองถอดรหัสทันทีว่าข้างหลังคือคำว่า "you"!',
      ],
      vocab: [
        [
          'projector',
          'เครื่องฉายภาพ',
          '/prəˈdʒek.tər/',
          'plug in the projector',
          'เสียบสายเครื่องฉายภาพ',
        ],
        [
          'covered',
          'จัดการเผื่อไว้ให้แล้ว',
          '/ˈkʌv.əd/',
          'have someone covered',
          'ช่วยจัดการเผื่อให้เรียบร้อยแล้ว',
        ],
        [
          'handout',
          'เอกสารแจกประกอบ',
          '/ˈhæn.daʊt/',
          'stack the printed handouts',
          'เรียงเอกสารแจกที่พิมพ์แล้ว',
        ],
        [
          'adapter',
          'หัวแปลง / อะแดปเตอร์',
          '/əˈdæp.tər/',
          'pack a spare adapter',
          'พกหัวแปลงสำรองไว้',
        ],
        [
          'chilly',
          'เย็นเยือก (แอร์เย็น)',
          '/ˈtʃɪl.i/',
          'feel slightly chilly',
          'รู้สึกเย็นหนาวนิดหน่อย',
        ],
        [
          'glance',
          'เหลือบมองอย่างเร็ว',
          '/ɡlɑːns/',
          'glance at the checklist',
          'เหลือบดูเช็กลิสต์อย่างเร็ว',
        ],
        [
          'confirm',
          'ยืนยันความพร้อม',
          '/kənˈfɜːm/',
          'confirm the setup early',
          'เช็กยืนยันอุปกรณ์แต่เนิ่นๆ',
        ],
      ],
      examples: [
        [
          'Did you grab a bottle of water before heading into the meeting room?',
          'คุณได้หยิบน้ำดื่มมาสักขวดก่อนเดินเข้าห้องประชุมไหม?',
        ],
        [
          'Would you test the projector cable while I stack the handouts?',
          'ช่วยเช็กสายโปรเจกเตอร์ให้หน่อยได้ไหม ระหว่างที่ฉันเรียงเอกสารแจก?',
        ],
        [
          'Do not worry—I have got you covered with a spare adapter.',
          'ไม่ต้องห่วงเลย ฉันเตรียมหัวแปลงสำรองไว้เผื่อให้เรียบร้อยแล้ว',
        ],
        [
          'Wait a minute, did you notice how chilly the conference hall feels today?',
          'เดี๋ยวก่อนนะ คุณสังเกตไหมว่าห้องประชุมใหญ่เย็นเจี๊ยบเลยวันนี้?',
          'สังเกต Flap T ใน Wait a minute และ Coalescence ใน did you และ conference hall',
        ],
      ],
      reading:
        'Ten minutes before a morning client workshop in Bangkok, Ton and Claire scrambled to get the room ready. "Hey, did you grab a bottle of water for the speaker?" Ton asked while glancing at his checklist. "Yep, right beside the podium," Claire called back from the corner. "Wait a minute—would you check the projector cable? The screen looks a little dim." Ton tapped the spare connector in his bag and grinned. "Got you covered! I packed an extra adapter just in case." As soon as the image sharpened on the wall, Claire rubbed her arms. "Don’t you think the air conditioning feels way too chilly in here?" Ton nodded, adjusting the thermostat near the door. "Yeah, much better now. Could you stack those printed handouts by the entrance while I confirm the guest list?" Within five minutes, everything clicked into place smoothly—proving that quick teamwork beats last-minute panic every single time.',
      listenQ: 'What spare item did Ton pack in his bag just in case the projector needed help?',
      listenA: 'He packed an extra adapter.',
      dictation: 'Would you check the projector cable while I grab water?',
      listenNote:
        'ชี้จุดเชื่อมเสียงในบทอ่าน: did you (/ˈdɪdʒ.ə/), bottle of water (Flap T), Wait a minute (Flap T), would you (/ˈwʊdʒ.ə/), Got you (/ˈɡɒtʃ.ə/), Don’t you (/ˈdəʊn.tʃə/), Could you (/ˈkʊdʒ.ə/)',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ถ้าเพื่อนร่วมงานพูดเร็วๆ ในออฟฟิศว่า "Betcha didn’t see that email—wontcha check it right now?" เขาต้องการสื่อว่าอะไร?',
          answer:
            'I bet you did not see that email; will you not check it right now?',
          choices: [
            'Better not open that email because it is too late now.',
            'I bet you did not see that email; will you not check it right now?',
            'Wait until you see that email before leaving right now.',
            'I told you not to open that email earlier today.',
          ],
          explanation:
            'betcha = (I) bet you (/t/+/j/→/tʃ/), wontcha = won’t you (will you not)',
        },
        {
          kind: 'error_fix',
          prompt:
            'ฟัง/อ่านข้อความถอดเสียงพูดแล้วแก้ให้เป็นประโยคภาษาอังกฤษมาตรฐานที่ถูกต้อง: "Didja got the letter I send you earlier, or wait minute while I check?"',
          answer:
            'Did you get the letter I sent you earlier, or wait a minute while I check?',
          explanation:
            '1) Didja = Did you และหลัง Did ต้องใช้ V1 (get ไม่ใช่ got) 2) ส่งไปแล้วในอดีตใช้ sent 3) วลีเต็มคือ wait a minute',
        },
        {
          kind: 'gap',
          prompt:
            'ถอดรหัสเสียงรวบเวลาพูดว่า "ได้สิ เดี๋ยวฉันดูแลต่อให้เอง / เข้าใจแล้ว": คำที่ได้ยินว่า "Gotcha!" มาจากรูปเต็มสองคำว่า "I _____ you." (เติม 1 คำที่เป็นอดีตของ get)',
          answer: 'got',
          explanation:
            'Gotcha = (I) got you เกิดจากเสียง /t/ ท้าย got ชนกับ /j/ ของ you กลายเป็นเสียง /tʃ/',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยใช้วลีเตรียมพร้อมจากบทเรียน: "ไม่ต้องห่วง เรื่องเอกสารแจกเดี๋ยวฉันจัดการเผื่อไว้ให้เรียบร้อย"',
          answer: "Don't worry—I have got you covered with the handouts.",
          explanation:
            'I have got you covered (หรือ I’ve got you covered) แปลว่า เตรียม/จัดการเผื่อไว้ให้แล้ว (พูดเร็วได้ยินเป็น "I’ve gotcha covered")',
        },
      ],
      writing:
        'เขียนบทสนทนา 5–6 บรรทัดก่อนเริ่มงานอีเวนต์/เวิร์กช็อป ระหว่างเพื่อนร่วมงาน 2 คน โดยแทรกคำถามขึ้นต้นด้วย Did you..., Would you..., Could you..., Don’t you... และคำที่มี Flap T (water, better, wait a minute, get it) อย่างน้อย 4 จุด',
      writingSample:
        'A: Hey, did you test the microphone batteries yet?\nB: Wait a minute—I’m checking the backup set right now. Would you pass me that bottle of water?\nA: Sure! By the way, don’t you think the intro slide looks much better in blue?\nB: Way better! Also, could you print five extra schedules? I’ve got you covered on the badges.',
      writingNote:
        'ลองอ่านบทสนทนาที่เขียนเองออกเสียง 2 รอบ: รอบแรกอ่านช้าชัด รอบสองอ่านความเร็วธรรมชาติให้เสียง /dʒ/ /tʃ/ และ Flap T ออกมาเองโดยไม่ฝืน',
      speakingTopic:
        'จำลองบทสนทนาเตรียมห้องประชุมแบบคล่องตัว (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ไล่คำถามเช็กความพร้อม: Did you... / Would you... / Could you... / Don’t you think...',
        'ฝึกดีดเสียง Flap T เบาๆ ในคำว่า water, better, get it, wait a minute ไม่ให้ลิ้นเกร็งแข็ง',
        'คุมจังหวะให้กระชับเหมือนทีมงานคุยกันจริงก่อนลูกค้าเข้าห้อง 10 นาที',
      ],
    },
    {
      day: 206,
      title: 'Content vs Function Words Compression — ฟังกลุ่มคำไวยากรณ์ที่ถูกกลืนในจังหวะพูด',
      objective:
        'เข้าใจหลัก Stress-Timed Rhythm และถอดรหัสกลุ่ม Function Words ที่ถูกบีบอัด (would’ve, could’ve, should’ve, tell ’em, cup of) ได้แม่นยำโดยไม่สะกดผิด',
      explanation:
        'ภาษาไทยเป็น **Syllable-Timed** (ทุกพยางค์ใช้เวลาใกล้เคียงกัน) แต่ภาษาอังกฤษเป็น **Stress-Timed** (จังหวะจะลงตรง **Content Words** คือ คำนาม กริยาหลัก คุณศัพท์ กริยาวิเศษณ์ และคำปฏิเสธ ส่วน **Function Words** เช่น *would, have, to, of, for, him, her, them, and* จะถูกบีบอัดให้สั้นที่สุดเท่าที่จะทำได้!) ตัวอย่างคลาสสิก: ประโยค *"I would have told them earlier."* ฟังเผินๆ เหมือนมีแค่ 3 จังหวะหนัก: **WOULD** (`I would’ve` → `/aɪˈwʊd.əv/` หรือพูดเร็วเป็น *"ไอ-เดิฟ"*) **TOLD** (`told them` → `/ˈtəʊld.əm/` หายเสียง `th`!) **EAR**lier. เช่นเดียวกัน `cup of tea` → `/ˈkʌp.ə tiː/` (คัพ-เพอะ-ที) และ `should have known` → `/ˈʃʊd.əv nəʊn/`! **ข้อควรระวังอันดับ 1**: เพราะเสียง `have` ถูกลดรูปเป็น `/əv/` (เสียงเดียวกับ `of`!) จึงมีคนเขียนผิดเยอะมากว่า `*would of / *should of` — **ผิด 100%!** รูปเต็มต้องเป็น **`would have / should have / could have`** เสมอ!',
      sound: [
        'Weak-Form Compression in Modal Perfects & Pronouns',
        "would've /ˈwʊd.əv/ · should've /ˈʃʊd.əv/ · tell 'em /ˈtel.əm/ · ask 'im /ˈɑːsk.ɪm/",
        'เคาะจังหวะ 3 ครั้งในอัตราคงที่แล้วพูดเทียบ 2 ประโยค: "CATS | CHASE | MICE" ใช้เวลาเท่ากับ "The CATS would’ve | CHASED the | MICE" เพราะคำไวยากรณ์ (the, would’ve) ถูกอัดเข้าช่องว่างระหว่าง Beat!',
        'ฝึกพูด 4 ก้อนบีบอัด: could’ve caught (/ˈkʊd.əv/) · shouldn’t’ve left · tell them (/ˈtel.əm/) · out of time (/ˈaʊɾ.ə taɪm/)',
      ],
      l1: [
        'ฟังเสียง /əv/ แล้วเขียนสะกดผิดเป็น "I would of told you" หรือพูดเน้นเสียงคำช่วยเท่ากับคำกริยาหลักจนฟังเหนื่อย ("I WOULD HAVE TOLD THEM")',
        'คนไทยไม่คุ้นกับการกลืนเสียง /h/ ของ him/her/have และเสียง /ð/ ของ them ในพยางค์ไม่เน้น',
        'ท่องไว้ 2 ชั้น: 1) เวลาฟัง: เสียง "เอิฟ" หลัง would/could/should/must คือ have (+ V3) เสมอ! 2) เวลาพูด: ปล่อยเสียง he/him/her/them/have เบาๆ แล้วลงน้ำหนักตรงคำกริยาหลัก (TOLD, CAUGHT, KNOWN)',
      ],
      vocab: [
        [
          'pier',
          'ท่าเรือ',
          '/pɪər/',
          'sprint toward the pier',
          'วิ่งเหยาะๆ มุ่งหน้าไปยังท่าเรือ',
        ],
        [
          'depart',
          'ออกเดินทาง / ออกจากท่า',
          '/dɪˈpɑːt/',
          'depart right on the dot',
          'ออกเดินทางตรงเวลาเป๊ะ',
        ],
        [
          'oversleep',
          'นอนตื่นสายเกินเวลา',
          '/ˌəʊ.vəˈsliːp/',
          'oversleep on a concert day',
          'ตื่นสายในวันที่มีคอนเสิร์ต',
        ],
        [
          'regret',
          'เสียดาย / เสียใจย้อนหลัง',
          '/rɪˈɡret/',
          'avoid unnecessary regret',
          'เลี่ยงความเสียดายที่เกิดขึ้นทีหลัง',
        ],
        [
          'cut it close',
          'เฉียดฉิวหวุดหวิด',
          '/kʌt ɪt kləʊs/',
          'cut it way too close',
          'เฉียดฉิวเกินไปมาก',
        ],
        [
          'reschedule',
          'เลื่อนนัด / จัดเวลาใหม่',
          '/ˌriːˈʃedʒ.uːl/',
          'reschedule a dinner plan',
          'เลื่อนแผนมื้อค่ำไปวันอื่น',
        ],
        [
          'reliable',
          'เชื่อถือได้ / ไว้ใจได้',
          '/rɪˈlaɪ.ə.bəl/',
          'check a reliable timetable',
          'ตรวจตารางเวลาที่เชื่อถือได้',
        ],
      ],
      examples: [
        [
          'We could have caught the seven-thirty ferry if we had left ten minutes earlier.',
          'เราคงทันเรือรอบทุ่มครึ่งแล้ว ถ้าออกจากบ้านเร็วกว่านี้สักสิบนาที',
        ],
        [
          'I should have texted them before buying the tickets.',
          'ฉันน่าจะส่งข้อความบอกพวกเขาก่อนซื้อตั๋ว',
        ],
        [
          'She would have waited at the pier, except her phone ran out of battery.',
          'เธอคงรอที่ท่าเรือแล้วแหละ ติดตรงแบตมือถือเธอหมดพอดี',
        ],
        [
          'You must have cut it pretty close with all that evening rain along the river.',
          'คุณคงมาแบบเฉียดฉิวมากเลยท่ามกลางฝนตกเย็นริมแม่น้ำขนาดนั้น',
          'ฟัง must have เป็น /ˈmʌst.əv/ ไม่เน้น have แต่เน้นคำกริยาหลักคือ cut',
        ],
      ],
      reading:
        'Walking back from the Chao Phraya pier in light rain, Mint and Win laughed over how badly they had cut it close for the riverside indie concert. "Honestly, we could have caught the seven-thirty boat if my alarm hadn’t stayed on silent," Mint groaned, shaking out her umbrella. "I shouldn’t have trusted a backup app without checking the volume first." Win checked the next ferry schedule on a reliable transit board and shrugged good-naturedly. "It’s fine—I should have texted them at six to ask whether the opening band starts on time anyway. Even if we’d arrived earlier, we would have stood in the ticket line for twenty minutes." Just then, Mint’s phone buzzed with a voice note from their friends inside the venue. "Hey guys! We figured you must have hit traffic near Sathorn, so we grabbed two wristbands and a cup of hot tea for each of you." Win smiled widely. "See? We could have panicked, yet asking friends for backup saved the whole evening."',
      listenQ: 'What did their friends inside the venue buy for Mint and Win while waiting?',
      listenA: 'They grabbed two wristbands and a cup of hot tea for each of them.',
      dictation: 'I should have texted them before leaving the house.',
      listenNote:
        'สังเกตจังหวะบีบอัดในบทอ่าน: could have caught, shouldn’t have trusted, should have texted them (เสียง /əm/), would have stood, must have hit, cup of hot tea (cup-pa)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่สะกดตามเสียงที่ได้ยินผิดหลักไวยากรณ์ 2 จุด: "We would of arrive on time if someone had told us the ferry schedule changed."',
          answer:
            'We would have arrived on time if someone had told us the ferry schedule had changed.',
          explanation:
            '1) ไม่มีรูป "would of" ในภาษาอังกฤษ ต้องเขียน would have + V3 (would have arrived) 2) เหตุการณ์ที่เกิดขึ้นก่อนหน้านั้นใช้ had changed (หรือ past perfect)',
        },
        {
          kind: 'choice',
          prompt:
            'เมื่อฟังคลิปเสียงพูดเร็วๆ คุณได้ยินเสียงว่า "I-shəd-nəv told-əm so early!" ประโยคเต็มที่ถูกต้องคือข้อใด?',
          answer: 'I should not have told them so early!',
          choices: [
            'I should of not tell him so early!',
            'I should not have told them so early!',
            'I shall not tell them so early!',
            'I should have to tell them so early!',
          ],
          explanation:
            'shouldn’t’ve = should not have + V3 (told) และ ’em = them (ตัดเสียง /ð/ เมื่อไม่เน้น)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำไวยากรณ์ที่มักถูกกลืนเสียงจนเหลือแค่เสียง /əv/ (1 คำ): They must _____ missed the announcement because the speaker system was noisy.',
          answer: 'have',
          explanation:
            'must have + V3 (missed) ใช้คาดเดาเหตุการณ์ในอดีต ห้ามใส่ of เด็ดขาด',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยใช้ Modal Perfect: "ฉันน่าจะเช็กตารางเรือให้ชัวร์ก่อนออกจากบ้าน"',
          answer: 'I should have checked the ferry schedule carefully before leaving home.',
          explanation:
            'เสียดาย/ตำหนิตัวเองย้อนหลังใช้ should have + V3 (checked) ซึ่งเวลาพูดเร็วจะรวบเป็น should’ve checked',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์ "เกือบพลาด / ไปสาย / พลาดนัดแบบเฉียดฉิว" ความยาว 5–6 ประโยค โดยใส่รูป should have / could have / would have / must have อย่างน้อย 3 จุด พร้อมบอกผลลงเอย',
      writingSample:
        'Last Friday, I nearly missed a train out of Hua Lamphong because I cut it way too close after work. I should have packed my bag the night before instead of rushing at five. Honestly, I would have missed the departure altogether if a motorbike taxi driver hadn’t known a side shortcut. By the time I stepped onto the platform, the other passengers must have wondered why I was sprinting with two coffee cups. Next time, I could easily catch an earlier shuttle and save myself the stress.',
      writingNote:
        'ตรวจตัวสะกดหลัง would/could/should/must ว่าเขียน have + V3 ครบทุกที่ ไม่มีหลุดเป็น of หรือ V1',
      speakingTopic:
        'ฝึกจังหวะ Stress-Timed เล่าเหตุการณ์เฉียดฉิวด้วยรูป Modal Perfect (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ลงน้ำหนักชัดตรงคำกริยาหลักและคำนาม (CUT it CLOSE, SHOULD’ve PACKED, WOULD’ve MISSED) และปล่อยคำสั้น (have, to, of, them) ให้เบาและเร็ว',
        'ทบทวนรูปเสียงรวบ tell ’em, out of time, cup of coffee ให้ไหลลื่นเป็นก้อนเดียว',
        'คงจังหวะไม่สะดุดแม้เร่งความเร็วลงมาเหลือ 2 นาที',
      ],
    },
    {
      day: 207,
      title: 'Authentic Spoken Discourse Fillers & Repairs — ฟังข้ามคำฟุ่มเฟือยและซื้อเวลาพูดแบบมืออาชีพ',
      objective:
        'แยกสาระสำคัญออกจากคำเชื่อมจังหวะความคิดในภาษาพูด (you know, sort of, actually, to be honest) และใช้ Repairs (what I mean is, let me rephrase that) แก้คำพูดสดอย่างเป็นธรรมชาติ',
      explanation:
        'ในบทสนทนาจริงหรือพอดแคสต์ มนุษย์ไม่ได้พูดเหมือนอ่านบทความที่ขัดเกลาแล้ว! เจ้าของภาษาจะใส่ **Discourse Fillers** อย่าง *you know, I mean, sort of, actually, to be honest* เพื่อคิดคำถัดไปและเชื่อมความรู้สึก กับ **Self-Repairs** อย่าง *what I mean is..., let me rephrase that, actually wait—* เพื่อแก้สิ่งที่พูดคลาดเคลื่อนกลางอากาศ ทักษะ B2 แบ่งเป็น 2 ขา: **1) ขาฟัง**: อย่าไปแปลทุกคำว่า *you know / sort of* จนหลงทาง ให้ปล่อยผ่านเป็น "พื้นหลังเสียง" และจับคำที่ตามหลัง *what I mean is / actually* เพราะนั่นคือจุดที่ผู้พูดกำลังแก้หรือเน้นใจความจริง! **2) ขาพูด**: แทนที่จะเงียบแข็งหรือร้อง *"เอ่อ... อืม..."* ยาวๆ เวลาสมองกำลังเรียบเรียงคำภาษาอังกฤษ ให้ใช้ตัวซื้อเวลาที่ฟังดูฉลาดและสุภาพ เช่น **`Let me put it another way...`**, **`To be honest, ...`**, หรือ **`What I’m trying to say is...`**',
      sound: [
        'Parenthetical Low Pitch on Fillers vs Crisp Re-Entry on Repairs',
        'rephrase /ˌriːˈfreɪz/ · burnout /ˈbɜːn.aʊt/ · boundary /ˈbaʊn.dri/',
        'เวลาพูด filler อย่าง `you know` หรือ `I mean` ระดับเสียงจะ **ต่ำลงและเร็วขึ้นเล็กน้อย** (เหมือนใส่วงเล็บในเสียง) แล้วเสียงจะกลับมาชัดและคมทันทีตรงคำแก้ความหมาย: "(I mean, you know,) what I REALLY mean is..."',
        'ฝึกสวิตช์เสียง 3 วลีแก้ตัวกลางอากาศ: "...wait, let me rephrase that." / "...actually, what I mean is..." / "...to be honest, looking back..."',
      ],
      l1: [
        'หยุดนิ่งเงียบไป 4–5 วินาทีเวลาหาคำไม่เจอ หรือติดเสียง "เอ่อ... อะ..." และใช้คำว่า "actually" ผิดบริบทจนฟังเหมือนขัดคออีกฝ่ายทุกประโยค',
        'ผู้เรียนกลัวการพูดผิดเลยค้างกลางประโยค แทนที่จะใช้ Repair phrases แก้กลางอากาศอย่างที่เจ้าของภาษาทำตลอดเวลา',
        'จำ 3 ตัวช่วยซื้อเวลาแบบผู้ใหญ่ B2: 1) ขอลำดับความคิด: "That’s a fair point—let me think for a second." 2) แก้คำพูดตัวเอง: "Wait, let me rephrase that." 3) ขมวดปมให้คม: "What I mean is..."',
      ],
      vocab: [
        [
          'rephrase',
          'เรียบเรียงคำพูดใหม่',
          '/ˌriːˈfreɪz/',
          'let me rephrase that',
          'ขอพูดใหม่อีกแบบนะครับ/คะ',
        ],
        [
          'burnout',
          'ภาวะหมดไฟในการทำงาน',
          '/ˈbɜːn.aʊt/',
          'prevent quiet burnout',
          'ป้องกันภาวะหมดไฟแบบเงียบๆ',
        ],
        [
          'boundary',
          'ขอบเขต (เวลา/ชีวิตส่วนตัว)',
          '/ˈbaʊn.dri/',
          'set clear work boundaries',
          'ตั้งขอบเขตเวลาทำงานให้ชัดเจน',
        ],
        [
          'misconception',
          'ความเข้าใจผิดคลาดเคลื่อน',
          '/ˌmɪs.kənˈsep.ʃən/',
          'clear up a common misconception',
          'เคลียร์ความเข้าใจผิดที่เจอบ่อย',
        ],
        [
          'guilt',
          'ความรู้สึกผิด',
          '/ɡɪlt/',
          'shake off evening guilt',
          'สลัดความรู้สึกผิดตอนเลิกงาน',
        ],
        [
          'disconnect',
          'ตัดการเชื่อมต่อ / พักจากหน้าจอ',
          '/ˌdɪs.kənˈekt/',
          'genuinely disconnect after six',
          'พักจากงานจริงๆ หลังหกโมงเย็น',
        ],
        [
          'candid',
          'ตรงไปตรงมา / เปิดใจ',
          '/ˈkæn.dɪd/',
          'a candid podcast chat',
          'บทสนทนาพอดแคสต์แบบเปิดอก',
        ],
      ],
      examples: [
        [
          'I used to think remote work saved energy—actually, wait, let me rephrase that: it saved commuting time, not mental space.',
          'เมื่อก่อนฉันเคยคิดว่างานทางไกลประหยัดพลังกว่า—เอ๊ะ เดี๋ยวขอพูดใหม่ดีกว่า มันช่วยประหยัดเวลาเดินทาง แต่ไม่ได้ประหยัดพื้นที่สมองเลย',
        ],
        [
          'To be honest, setting work boundaries felt awkward at first.',
          'พูดตรงๆ เลยนะ การตั้งขอบเขตเรื่องงานตอนแรกมันรู้สึกอึดอัดนิดหน่อย',
        ],
        [
          'What I mean is, you don’t need a whole vacation to reset—just one offline hour helps.',
          'สิ่งที่ฉันหมายถึงคือคุณไม่จำเป็นต้องรอลาพักร้อนทั้งทริปเพื่อรีเซ็ตตัวเอง แค่พักจากจอหนึ่งชั่วโมงก็ช่วยได้แล้ว',
        ],
        [
          'People, you know, sort of assume freelancers never get tired, when in reality evening guilt hits hard.',
          'คนเราก็มักจะคิดเอาเองว่าฟรีแลนซ์ไม่ค่อยเหนื่อย ทั้งที่ความจริงความรู้สึกผิดตอนเย็นที่หยุดทำงานไม่ได้มันหนักมาก',
          'เวลาฟังให้ตัด "you know, sort of" ออกเป็นเพียงจังหวะเชื่อม แล้วจับใจความหลักที่ assume และ guilt',
        ],
      ],
      reading:
        'On a candid afternoon podcast about remote work burnout, host Tara asked software lead Ken how he avoids answering late-night messages. Ken chuckled before answering thoughtfully. "You know, when I first went fully remote, I sort of wore constant availability like a badge of honor. Actually—no, let me rephrase that—I felt low-level guilt whenever my chat icon turned gray after six." Tara nodded, prompting him to unpack that misconception. "To be honest," Ken continued, "the biggest trap isn’t the workload itself. What I mean is, without a commute to mark the end of the workday, your brain never receives a clear signal to disconnect. Sort of like keeping twenty browser tabs open while trying to sleep." He paused briefly, choosing his next point carefully. "So in short, what saved me wasn’t a fancy productivity app—it was setting one visible boundary: closing my laptop at six-thirty sharp and leaving it in another room."',
      listenQ: 'What comparison did Ken use to describe not having a commute to end the workday?',
      listenA: 'He compared it to keeping twenty browser tabs open while trying to sleep.',
      dictation: 'What I mean is, setting boundaries takes daily practice.',
      listenNote:
        'สังเกตว่าแม้ Ken จะมีคำเชื่อมจังหวะ (You know, sort of, To be honest) และการแก้ประโยคกลางอากาศ (Actually—no, let me rephrase that—) แต่สาระหลักของเรื่องยังคงคมชัดมาก',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ระหว่างสัมภาษณ์หรือพูดคุยกับเพื่อนร่วมงานต่างชาติ คุณพูดคำอธิบายออกไปแล้วยังไม่ตรงใจที่สุด แทนที่จะเงียบอึ้ง ควรใช้ประโยค Repair ใดเพื่อพูดใหม่ให้คมขึ้น?',
          answer:
            'Actually, let me rephrase that—what I really mean is we need clearer handoff notes.',
          choices: [
            'Sorry my English is broken, I stop talking now.',
            'Actually, let me rephrase that—what I really mean is we need clearer handoff notes.',
            'You know sort of maybe handoff notes, I mean I dunno.',
            'Ignore everything I just said and do not listen to me.',
          ],
          explanation:
            'การขอเรียบเรียงใหม่ด้วย "Actually, let me rephrase that—what I really mean is..." ดูเป็นมืออาชีพและคล่องแคล่วมากในระดับ B2',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขการใช้ Filler และไวยากรณ์ที่ปนกันในประโยคพูดต่อไปนี้ (ให้สุภาพและเป็นธรรมชาติ 2 จุด): "Actually you wrong! To honest, what I am meaning is the meeting starts at three."',
          answer:
            'Actually, let me clarify—to be honest, what I mean is that the meeting starts at three.',
          explanation:
            '1) หลีกเลี่ยง "Actually you wrong" ที่แข็งและขาด verb; ใช้คำขออธิบายสุภาพ 2) วลีเต็มคือ "to be honest" (ไม่ตัด be) และ mean ในความหมายว่า "หมายความว่า" ไม่ใช้ -ing (what I mean is)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ก้อน Repair สำหรับแก้ความเข้าใจระหว่างพูดสมบูรณ์ (1 คำ): That sounded too harsh—let me _____ that in a clearer way.',
          answer: 'rephrase',
          explanation:
            'let me rephrase that / let me put that in a clearer way เป็นวลีมาตรฐานสำหรับปรับคำพูดให้ชัดเจนขึ้น',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษแบบบทสนทนาธรรมชาติ: "พูดตามตรงนะ ตอนแรกฉันก็รู้สึกอึดอัดนิดหน่อยที่จะปฏิเสธงานนอกเวลา"',
          answer:
            'To be honest, I felt slightly awkward turning down after-hours requests at first.',
          explanation:
            'ขึ้นต้นด้วย To be honest, + ประโยคเล่าความรู้สึกอย่างเปิดเผยและเป็นธรรมชาติ',
        },
      ],
      writing:
        'เขียนคำตอบเชิงสนทนาสไตล์พอดแคสต์ 5–6 ประโยค ในหัวข้อ "นิสัยการพักผ่อนหรือการทำงานที่คุณเคยเข้าใจผิดตอนเริ่มโตเป็นผู้ใหญ่" โดยใส่ Discourse Marker (To be honest / Actually / You know) และ Repair (Let me rephrase that / What I mean is) อย่างมีชั้นเชิง (ไม่ใส่พร่ำเพรื่อเกินจำเป็น)',
      writingSample:
        'When I first started working full-time, I used to think skipping lunch made me look dedicated. Actually—let me rephrase that—I worried that stepping away from my desk meant falling behind. To be honest, by three o’clock my concentration always crashed anyway. What I mean is, working straight through without a pause only stretches a two-hour task into four. Nowadays, taking thirty minutes to eat away from screens keeps my afternoon steady.',
      writingNote:
        'เช็กสมดุล: ใส่ Filler/Repair เฉพาะจุดเปลี่ยนมุมมองหรือจังหวะคิด ไม่ยัดทุกประโยคจนรกรุงรัง และห้ามใช้ what I am meaning (ใช้ what I mean is เท่านั้น)',
      speakingTopic:
        'ซ้อมพูดตอบคำถามสดสไตล์พอดแคสต์พร้อมฝึก Self-Repair อย่างมีสติ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดแสดงความเห็นเรื่องสมดุลชีวิต-การทำงาน แล้วจงใจฝึกแก้ประโยค 1 ครั้งด้วย "Actually, let me rephrase that—what I mean is..."',
        'ลดระดับเสียงลงเล็กน้อยตรง filler (to be honest, sort of) แล้วเปิดเสียงคมชัดตรงใจความที่แก้ใหม่',
        'ห้ามปล่อยให้เกิดความเงียบอึดอัดหรือติด "เอ่อ..." นานกว่า 2 วินาที',
      ],
    },
    {
      day: 208,
      title: 'US / UK / Global English — สำเนียงโลก คำศัพท์คู่แฝด และ Glottal Stop',
      objective:
        'เข้าใจความต่างด้านคำศัพท์และการออกเสียงสำคัญระหว่างภาษาอังกฤษแบบอเมริกัน อังกฤษ และบริบทสากล (schedule, either, route, flat/apartment, lift/elevator, takeaway) พร้อมจับเสียง Glottal Stop /ʔ/',
      explanation:
        'ในโลกจริง คุณไม่ได้คุยแค่กับสำเนียงเดียว—เช้าคุณอาจประชุมกับเพื่อนร่วมงานในสิงคโปร์ เที่ยงดูคลิปยูทูบเบอร์อเมริกัน และเย็นฟังเพื่อนจากลอนดอน! วันนี้มารู้จักความแตกต่างสำคัญ 3 มิติเพื่อไม่ให้สะดุดเวลาฟัง: **1) คำที่ออกเสียงต่างกันชัดเจน**: `schedule` (US: `/ˈskedʒ.uːl/` สเก็ด-จูล vs UK: `/ˈʃed.juːl/` เช็ด-ยูล), `either` (US: `/ˈiː.ðər/` อี-เธอะ vs UK: `/ˈaɪ.ðər/` อาย-เธอะ), `route` (US: `/raʊt/` หรือ `/ruːt/` vs UK: `/ruːt/` รูท) **2) เสียง Glottal Stop (`/ʔ/`)** ที่เจอในอังกฤษและพูดเร็วทั่วไป: ตัดเสียง `/t/` กลางคำเป็นเสียงกักในลำคอสั้นๆ เช่น *bottle* (`"บอ-อึล"` `/ˈbɒʔ.əl/`), *water* (`"วอ-เออะ"`), *quite a bit* **3) คำศัพท์คู่แฝด US vs UK**: *apartment / flat*, *elevator / lift*, *takeout / takeaway*, *line / queue*, *vacation / holiday*, *subway / underground (tube)* **หลักปฏิบัติ B2**: เวลาฟัง ต้องเข้าใจทั้งสองฝั่ง 100% ส่วนเวลาพูด/เขียน ให้เลือกใช้ชุดหนึ่งอย่างสม่ำเสมอในเอกสารเดียวกัน (อย่าสลับปนในย่อหน้าเดียว!)',
      sound: [
        'US vs UK Pronunciation Pairs & British Glottal Stop /ʔ/',
        'schedule /ˈskedʒ.uːl/ (US) vs /ˈʃed.juːl/ (UK) · either /ˈiː.ðər/ vs /ˈaɪ.ðər/ · route /raʊt/ vs /ruːt/',
        'ฟังเสียง Glottal Stop `/ʔ/` ที่ตัดเสียง /t/ เบาๆ ในลำคอ: `a bottle of water` (UK casual: `/ə ˈbɒʔ.əl əv ˈwɔː.ʔə/`) vs Flap T (US: `/ə ˈbɑː.ɾəl əv ˈwɔː.ɾər/`) และสังเกตเสียง /r/ ท้ายคำ (US ออกเสียง r เต็ม; UK มักไม่พ่น r ท้ายคำอย่าง *car, park, water*)',
        'อ่านสลับ 3 คำคู่ US & UK: schedule (สเก็ดจูล / เช็ดยูล) · either (อีเธอะ / อายเธอะ) · leisure (ลีเชอะ / เลเชอะ)',
      ],
      l1: [
        'ตกใจและแปลไม่ออกเมื่อคนอังกฤษพูดว่า "We need to check the /ˈʃed.juːl/ before getting in the lift" หรือเขียนสลับคำ US/UK ปนกันในงานเขียนชิ้นเดียว (เช่น ใช้ apartment กับ lift และ colour กับ program ในย่อหน้าเดียวกัน)',
        'คนไทยมักคุ้นสื่ออเมริกันเป็นหลัก พอเจอคำศัพท์อังกฤษ (flat, takeaway, queue, postcode) หรือ Glottal stop แล้วนึกว่าเป็นคำที่ไม่เคยเรียน',
        'จำ 6 คู่ศัพท์ชีวิตประจำวันให้แม่นทั้งสองฝั่ง: flat=apartment | lift=elevator | queue=line | takeaway=takeout | holiday=vacation | rubbish=trash และใช้สไตล์เดียวตลอด 1 ข้อความ',
      ],
      vocab: [
        [
          'takeaway',
          'อาหารสั่งกลับบ้าน (UK)',
          '/ˈteɪk.ə.weɪ/',
          'order a quick takeaway',
          'สั่งอาหารกลับบ้านแบบเร็วๆ',
        ],
        [
          'queue',
          'แถว / การต่อคิว (UK)',
          '/kjuː/',
          'join a long queue',
          'ต่อแถวยาว',
        ],
        [
          'flat',
          'ห้องพัก / อพาร์ตเมนต์ (UK)',
          '/flæt/',
          'share a sunny flat',
          'แชร์ห้องพักที่แสงเข้าดี',
        ],
        [
          'elevator',
          'ลิฟต์ (US — คู่กับ lift ใน UK)',
          '/ˈel.ɪ.veɪ.tər/',
          'take the elevator up',
          'ขึ้นลิฟต์ไปด้านบน',
        ],
        [
          'route',
          'เส้นทางเดินทาง',
          '/ruːt/',
          'pick a scenic route',
          'เลือกเส้นทางที่วิวสวย',
        ],
        [
          'schedule',
          'ตารางเวลา',
          '/ˈskedʒ.uːl/',
          'stick to a tight schedule',
          'ทำตามตารางเวลาที่แน่น',
        ],
        [
          'adaptable',
          'ปรับตัวเก่ง / ยืดหยุ่นตามบริบท',
          '/əˈdæp.tə.bəl/',
          'stay culturally adaptable',
          'ปรับตัวตามวัฒนธรรมและภาษาได้ดี',
        ],
      ],
      examples: [
        [
          'Whether you call it an apartment or a flat, natural light still makes the biggest difference.',
          'ไม่ว่าคุณจะเรียกว่า apartment หรือ flat แสงธรรมชาติก็ยังสร้างความต่างได้มากที่สุดอยู่ดี',
        ],
        [
          'Let us check the schedule and choose either route before noon.',
          'มาเช็กตารางเวลาแล้วเลือกเส้นทางใดเส้นทางหนึ่งก่อนเที่ยงกันเถอะ',
        ],
        [
          'After queuing outside the bakery, we grabbed two pastries as takeaway and took the lift upstairs.',
          'หลังต่อคิวหน้าร้านขนมปัง เราก็ซื้อขนมสองชิ้นแบบสั่งกลับบ้านแล้วขึ้นลิฟต์ไปชั้นบน',
        ],
        [
          'In Seattle they waited in line for takeout, while in London they queued patiently for takeaway.',
          'ที่ซีแอตเทิลพวกเขาต่อแถวรออาหารกลับบ้าน ส่วนที่ลอนดอนพวกเขายืนเข้าคิวรออย่างใจเย็น',
          'แสดงให้เห็นคู่คำศัพท์ US (wait in line, takeout) เทียบกับ UK (queue, takeaway)',
        ],
      ],
      reading:
        'After two years working remotely with a software team in Seattle, Thai product lead Fern flew to London for a three-week client sprint. On day one, she smiled at how fast everyday words shifted around her. Her Seattle colleagues always checked their "sked-jool" before riding the elevator to grab takeout coffee. In East London, however, her host asked cheerfully over tea, "Shall we review the shed-yool first, or take the lift down to the corner café for a quick takeaway?" Walking along the canal later, Fern noticed neither accent slowed her down once she tuned into a few sound patterns—like dropped final r’s in words such as "quarter" and crisp glottal stops in "better" and "water." Even when a ticket clerk asked whether she preferred the scenic river route or the Underground, Fern understood effortlessly. Being adaptable in global English, she realized, never requires faking one foreign accent; it simply means recognizing different rhythms warmly and keeping your own speech clear.',
      listenQ: 'What did Fern realize about being adaptable in global English during her London trip?',
      listenA: 'It never requires faking one accent; it means recognizing different rhythms and keeping your speech clear.',
      dictation: 'Let us check the schedule and choose either route.',
      listenNote:
        'ลองสังเกตทั้งการออกเสียงคำคู่ (schedule, route, either) และคำศัพท์คู่ US/UK ในเรื่อง (elevator/lift, takeout/takeaway) เพื่อฝึกหูให้พร้อมรับทุกสำเนียงโลก',
      drills: [
        {
          kind: 'choice',
          prompt:
            'คุณได้ยินเพื่อนร่วมงานชาวบริติชพูดว่า "Wait in the queue by the lift while I pick up our takeaway and check the flat keys." ถ้าแปลเป็นชุดคำศัพท์แบบอเมริกัน จะตรงกับข้อใดทั้งหมด?',
          answer:
            'Wait in line by the elevator while I pick up our takeout and check the apartment keys.',
          choices: [
            'Wait in line by the stairs while I order delivery and check the hotel keys.',
            'Wait in line by the elevator while I pick up our takeout and check the apartment keys.',
            'Wait in the subway by the escalator while I pay for takeout and check the office keys.',
            'Sit in the lobby by the elevator while I eat inside and check the flat keys.',
          ],
          explanation:
            'queue (UK) = line (US), lift = elevator, takeaway = takeout, flat = apartment',
        },
        {
          kind: 'error_fix',
          prompt:
            'ปรับปรุงย่อหน้าด้านล่างให้ใช้ชุดคำศัพท์และตัวสะกดให้เป็นสไตล์เดียวกันทั้งย่อหน้า (เลือกเป็นแบบ American English ทั้งหมด): "On my holiday, I took the lift to my cozy flat, waited in the queue for takeaway tacos, and checked the colour of my subway map."',
          answer:
            'On my vacation, I took the elevator to my cozy apartment, waited in line for takeout tacos, and checked the color of my subway map.',
          explanation:
            'เปลี่ยน holiday → vacation, lift → elevator, flat → apartment, waited in the queue → waited in line, takeaway → takeout, และ colour → color เพื่อให้สม่ำเสมอกับคำว่า subway',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำกริยา/คำนามแบบ British English ที่แปลว่า "ต่อแถว" และออกเสียงเหมือนตัวอักษร Q (1 คำ): We stood in a long _____ outside the museum for twenty minutes.',
          answer: 'queue',
          explanation:
            'queue /kjuː/ เป็นคำมาตรฐานแบบ UK/International แปลว่า แถว หรือ กริยาต่อแถว (wait in a queue / queue up)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ไม่ว่าเราจะเลือกเส้นทางไหน เราก็ยังต้องเช็กตารางเวลาอีกครั้งอยู่ดี"',
          answer:
            'Whichever route we choose, we still need to double-check the schedule.',
          explanation:
            'ฝึกอ่านประโยคนี้ 2 รอบ: รอบเสียง US (/raʊt/, /ˈskedʒ.uːl/) และรอบเสียง UK (/ruːt/, /ˈʃed.juːl/)',
        },
      ],
      writing:
        'เขียนย่อหน้าสั้นๆ 5 ประโยคเล่าประสบการณ์ท่องเที่ยวหรือการทำงานในเมืองใหญ่ โดยเลือกใช้สไตล์คำศัพท์เพียงฝั่งเดียวตลอดย่อหน้า (เช่น American English ล้วน หรือ British English ล้วน) แล้วระบุหมายเหตุท้ายเรื่องว่าเลือกใช้สไตล์ใด',
      writingSample:
        'During my short stay in Manchester, I rented a quiet flat near the canal. Every morning, I took the lift downstairs, walked past the corner pharmacy, and joined a friendly queue at a bakery for a warm takeaway pastry. Before noon, I always checked my train schedule so I could catch the scenic route along the hills. Even when locals spoke fast with crisp glottal stops, tuning into the context made every conversation enjoyable. (Style: British English — flat, lift, queue, takeaway)',
      writingNote:
        'ตรวจความสม่ำเสมอของคำศัพท์และการสะกด: ถ้าใช้ flat/lift/queue/takeaway ก็อย่าเผลอใส่ elevator/apartment/color ปนในย่อหน้าเดียวกัน',
      speakingTopic:
        'เล่าประสบการณ์เจอสำเนียงหลากหลายและมุมมองเรื่อง Global English (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เปรียบเทียบตัวอย่างคำที่เคยได้ยินต่างกันอย่างน้อย 3 คู่ (เช่น schedule, route, either หรือ lift/elevator, takeaway/takeout)',
        'ออกเสียงคำที่มี /r/ หรือเสียง /t/ ให้สม่ำเสมอตามถนัดโดยไม่ฝืนดัดสำเนียงจนพูดสะดุด',
        'สรุปแนวคิดสำคัญว่าความชัด (intelligibility) สำคัญกว่าการเลียนแบบสำเนียงใดสำเนียงหนึ่ง',
      ],
    },
    {
      day: 209,
      title: 'Full-Speed Blind Shadowing Workshop — ฝึกพูดตามเสียงเจ้าของภาษาแบบไม่มองบท',
      objective:
        'ฝึกเทคนิค Blind Shadowing (0.5 วินาทีตามเสียงจริงโดยไม่มองสคริปต์) เพื่อเชื่อมระบบการได้ยินกับการขยับปากและจังหวะหายใจระดับ B2',
      explanation:
        'การทำ **Shadowing แบบอ่านตามสคริปต์** ช่วยได้ถึงระดับ B1 แต่พอเข้า B2 จุดเปลี่ยนใหญ่คือ **Blind Shadowing (พูดตามแบบไม่ดูตัวหนังสือ)**! ทำไมต้องไม่มองข้อความ? เพราะสายตาคนเรามัก "กวนหู" — เมื่อเห็นตัวสะกด สมองจะสั่งให้ออกเสียงครบทุกพยางค์แบบที่ตาเห็น แทนที่จะเลียนแบบจังหวะจริงของปากผู้พูด! ขั้นตอนเวิร์กช็อป 4 สเต็ปวันนี้: **1) Cold Listen (รอบ 1)**: ปิดข้อความ ฟังจับสาระรวมว่าใครพูดอะไร **2) Prosody Mapping (รอบ 2)**: เปิดดูข้อความ ขีดเส้นคั่นกลุ่มความคิด (**Thought Groups** `/` ที่ผู้พูดเว้นหายใจ) และขีดเส้นใต้คำเน้น (**Focus Words**) **3) Delayed Shadowing (รอบ 3)**: ปิดข้อความ พูดตามหลังเสียงประมาณครึ่งวินาที เน้นก๊อปปี้ระดับเสียง (Pitch), ความยาวสระ, และจุดหยุดหายใจให้เหมือนเงา **4) Simultaneous Blind Run (รอบ 4)**: พูดซ้อนไปพร้อมเสียงให้ลื่นไหลครบ 200 คำโดยไม่สะดุดแม้หลุด 1 คำให้ข้ามตามต่อทันที!',
      sound: [
        'Thought-Group Chunking & Intonation Mirroring',
        'overload /ˌəʊ.vəˈləʊd/ · deliberate /dɪˈlɪb.ər.ət/ · momentum /məˈmen.təm/',
        'จับจังหวะ Thought Groups ในพอดแคสต์: "When your phone buzzes | every four minutes, | your focus | never reaches deep gear." สังเกตการเชื่อมคำต่อเนื่องภายใน 1 กลุ่มความคิด เช่น `an_hour_ago`, `turn_it_off`, `at_the_end_of_the_day`',
        'ทำ Blind Shadowing บทอ่านวันนี้ตามขั้นตอน 4 รอบ โดยห้ามหยุดแก้คำที่พูดไม่ทัน—ปล่อยให้ปากไหลตามจังหวะไปข้างหน้าเสมอ',
      ],
      l1: [
        'จ้องอ่านตัวอักษรทุกคำตลอดเวลา หรือพอพูดตามไม่ทันแค่คำเดียวก็หยุดชะงักแล้วเริ่มต้นใหม่ตั้งแต่ต้นประโยค',
        'การพึ่งตาทำให้หูไม่ได้ฝึกแยกเสียงเชื่อม และนิสัยหยุดแก้คำผิดทันทีทำลายจังหวะความต่อเนื่อง (fluency momentum) ในการสื่อสารจริง',
        'กฎ Blind Shadowing: ปิดข้อความในรอบ 3–4! หากสะดุดคำไหน ให้ฮัมทำนองตามไปครึ่งวินาทีแล้วจับคำเน้นถัดไปต่อทันทีเหมือนร้องเพลงตามศิลปิน',
      ],
      vocab: [
        [
          'deep work',
          'การทำงานที่ต้องใช้สมาธิลึก',
          '/diːp wɜːk/',
          'protect hours for deep work',
          'ปกป้องชั่วโมงสำหรับงานที่ใช้สมาธิลึก',
        ],
        [
          'notification',
          'การแจ้งเตือน',
          '/ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/',
          'mute non-urgent notifications',
          'ปิดการแจ้งเตือนที่ไม่เร่งด่วน',
        ],
        [
          'fragmented',
          'แตกเป็นชิ้นเล็กๆ / ขาดช่วง',
          '/fræɡˈmen.tɪd/',
          'recover from fragmented attention',
          'ฟื้นตัวจากสมาธิที่ขาดเป็นช่วงๆ',
        ],
        [
          'momentum',
          'แรงส่ง / ความต่อเนื่อง',
          '/məˈmen.təm/',
          'build steady creative momentum',
          'สร้างแรงส่งความต่อเนื่องในการคิดงาน',
        ],
        [
          'deliberate',
          'ตั้งใจ / จงใจทำอย่างมีสติ',
          '/dɪˈlɪb.ər.ət/',
          'make a deliberate pause',
          'เว้นจังหวะหยุดอย่างตั้งใจ',
        ],
        [
          'overload',
          'ภาวะรับข้อมูลเกินขีดจำกัด',
          '/ˌəʊ.vəˈləʊd/',
          'avoid sensory overload',
          'เลี่ยงภาวะรับข้อมูลล้นสมอง',
        ],
        [
          'trigger',
          'ตัวกระตุ้น',
          '/ˈtrɪɡ.ər/',
          'remove a visual trigger',
          'เอาสิ่งกระตุ้นสายตาออกไป',
        ],
      ],
      examples: [
        [
          'When your phone lights up every four minutes, your mind never builds real momentum.',
          'เมื่อหน้าจอมือถือสว่างขึ้นทุกๆ สี่นาที สมองของคุณก็ไม่มีวันสร้างแรงส่งความต่อเนื่องได้จริง',
        ],
        [
          'Mute non-urgent notifications before starting an hour of deep work.',
          'ปิดการแจ้งเตือนที่ไม่เร่งด่วนก่อนเริ่มทำงานที่ใช้สมาธิลึกหนึ่งชั่วโมง',
        ],
        [
          'Even a brief glance at an inbox pulls you back into fragmented attention.',
          'แม้การเหลือบมองกล่องข้อความเพียงแวบเดียว ก็ดึงคุณกลับสู่สมาธิที่กระจัดกระจายได้แล้ว',
        ],
        [
          'At the end of the day, deliberate silence feels far more refreshing than endless background noise.',
          'ท้ายที่สุดแล้ว ความเงียบที่ตั้งใจสร้างขึ้นให้ความสดชื่นกว่าเสียงรบกวนตลอดเวลาเยอะเลย',
          'ฝึกพูดเป็น 3 กลุ่มความคิด: At the end of the day, | deliberate silence | feels far more refreshing than endless background noise.',
        ],
      ],
      reading:
        'Welcome back to Everyday Habits, the short show about staying sharp in noisy cities. Today we’re unpacking why forty minutes of uninterrupted deep work beats three hours of fragmented multitasking. Think about an ordinary Tuesday morning at your desk. Every time your phone buzzes beside your keyboard, it acts as a visual trigger—pulling your brain out of creative momentum before your ideas even warm up. Researchers who study sensory overload point out something surprising: it isn’t the two seconds spent reading a message that hurts most; rather, it’s the extra fifteen minutes your mind takes to climb back into focus afterward. So what actually helps without moving to a silent cabin in the woods? First, try one deliberate rule: keep your phone inside a zipped bag during your morning sprint and mute non-urgent notifications until lunch. Second, batch quick replies twice a day instead of answering like a live help desk. Start small tomorrow—one clean forty-minute block—and notice how much lighter your afternoon feels at the end of the day.',
      listenQ: 'According to researchers in the podcast excerpt, what hurts focus even more than the two seconds spent reading a notification?',
      listenA: 'The extra fifteen minutes your mind takes to climb back into focus afterward.',
      dictation: 'Keep your phone inside a bag during your morning sprint.',
      listenNote:
        'เวิร์กช็อป Blind Shadowing: ฟังบทอ่านพอดแคสต์นี้รอบแรกแบบไม่ดูบท รอบสองดูบทเพื่อขีด Thought Groups รอบสามและสี่ปิดบทแล้วพูดตามแบบไม่หยุดชะงัก!',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ระหว่างทำ Blind Shadowing เมื่อคุณฟังไม่ทันคำสั้นๆ 1–2 คำกลางประโยค วิธีปฏิบัติที่ถูกต้องที่สุดเพื่อพัฒนาความคล่องแคล่ว (Fluency) คือข้อใด?',
          answer:
            'Skip the missed word without pausing and lock back onto the next stressed content word.',
          choices: [
            'Stop the audio immediately, rewind five seconds, and spell the word on paper.',
            'Skip the missed word without pausing and lock back onto the next stressed content word.',
            'Open the full transcript permanently so your eyes read faster than your ears.',
            'Slow the playback speed down to 0.5x for all four shadowing rounds.',
          ],
          explanation:
            'หัวใจของ Blind Shadowing คือการรักษาจังหวะและท่วงทำนองต่อเนื่อง—หากหลุดคำที่ไม่เน้น ให้ข้ามไปเกาะคำเน้นถัดไปทันทีแล้วค่อยตรวจจุดที่หลุดหลังจบช่วง',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคสรุปใจความพอดแคสต์ที่ผิดไวยากรณ์ 2 จุด: "Even a brief glance at notifications pull your attention away, and mute the alerts help you build momentum."',
          answer:
            'Even a brief glance at notifications pulls your attention away, and muting the alerts helps you build momentum.',
          explanation:
            '1) ประธานหลักคือ a brief glance (เอกพจน์) → pulls 2) ใช้ Gerund เป็นประธาน (muting the alerts) และถือเป็นเอกพจน์ → helps',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำศัพท์จากพอดแคสต์ให้ครบก้อนคำ (1 คำ): Checking messages every few minutes leaves you with _____ attention instead of steady focus.',
          answer: 'fragmented',
          explanation:
            'fragmented attention = สมาธิที่แตกกระจายขาดช่วง (ตรงข้ามกับ uninterrupted deep work)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษให้กระชับเหมาะกับการพูดพอดแคสต์: "การปิดแจ้งเตือนที่ไม่เร่งด่วนช่วยให้เราสร้างความต่อเนื่องในการทำงานได้เร็วขึ้น"',
          answer:
            'Muting non-urgent notifications helps us build work momentum faster.',
          explanation:
            'ขึ้นต้นด้วย Gerund (Muting non-urgent notifications) + helps us build... เพื่อให้จังหวะเสียงไหลลื่นน่าฟัง',
        },
      ],
      writing:
        'เขียนสคริปต์พอดแคสต์สั้น 1 นาที (6–7 ประโยค) แนะนำเคล็ดลับจัดการสมาธิหรือจัดระเบียบวันทำงานของตัวคุณเอง โดยใส่เครื่องหมาย `|` คั่น Thought Groups เพื่อให้เหมาะแก่การอ่านออกเสียงทำ Shadowing',
      writingSample:
        'Welcome back to my quick daily note! | Today I want to share one simple habit | that saved my evenings from screen overload. | Every afternoon at five-thirty, | I write down tomorrow’s top two priorities | on a small paper card. | Once that card sits beside my keyboard, | I mute non-urgent notifications | and genuinely close my laptop. | It sounds almost too simple, | yet that deliberate stop | protects my rest and keeps morning momentum strong.',
      writingNote:
        'อ่านสคริปต์ที่คุณเขียนเองออกเสียง 2 รอบ โดยหยุดหายใจสั้นๆ เฉพาะตรงเครื่องหมาย | เพื่อเช็กว่า Thought Groups ไม่ยาวเกิน 1 ลมหายใจ',
      speakingTopic:
        'พูดเดี่ยวสไตล์โฮสต์พอดแคสต์ (ต่อเนื่องหลัง Blind Shadowing) (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ทำ Blind Shadowing บทอ่านวันนี้ 2 รอบก่อนเริ่มจับเวลา 4 นาทีพูดเรื่องสมาธิของตัวเอง',
        'ใช้จังหวะ Thought Groups ชัดเจน—เชื่อมคำภายในกลุ่มให้ลื่น และหยุดหายใจสั้นๆ ตรงรอยต่อ',
        'เลียนแบบโทนขึ้น-ลงแบบบทสนทนาจริง (ไม่ราบเรียบเหมือนอ่านประกาศ)',
      ],
    },
    {
      day: 210,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 30 — Native-Speed Decoding & Connected Speech + Dictogloss',
      objective:
        'ประเมินการฟังถอดรหัสความเร็วธรรมชาติครบทุกมิติ: Reductions, Assimilation/Flap T, Weak-Form Clusters, Fillers/Repairs, US/UK Pairs และ Dictogloss',
      explanation:
        'ยินดีด้วยครับกับสัปดาห์ที่ 30! ตอนนี้หูและปากของคุณเข้าใจ "กฎเบื้องหลัง" ที่ทำให้ภาษาอังกฤษฟังดูเร็วและติดกันแล้ว: **1) Reductions (`wanna/gonna/hafta/kinda/dunno`)** แยกเสียงรวบออกจากรูปเขียนทางการ **2) Coalescence & Flap T (`didja/wouldja/gotcha/water/get it`)** ถอดเสียง `/dʒ/ /tʃ/ /ɾ/` กลับเป็นคำเต็ม **3) Stress-Timed Compression (`would’ve/should’ve/tell ’em`)** ไม่สับสนเสียง `/əv/` กับ `of` **4) Fillers & Repairs (`to be honest/let me rephrase that`)** ฟังข้ามส่วนเติมจังหวะและซื้อเวลาอย่างมั่นใจ **5) Global English (`schedule/either/flat/lift/takeaway`)** และ **6) Blind Shadowing** วันนี้มาทดสอบ Dictogloss และแกะบทสนทนารวมมิตรจากคาเฟ่ในสิงคโปร์กัน!',
      sound: {
        title: 'Week 30 Complete Listening & Prosody Check',
        ipa: 'atmosphere /ˈæt.mə.sfɪər/ · itinerary /aɪˈtɪn.ər.ər.i/ · colleague /ˈkɒl.iːɡ/',
        connected_speech:
          'เช็กทั้ง 4 กลไกใน 1 ลมหายใจ: "Didja see how fast he got out of the queue?" · "I would’ve texted ’em, to be honest, if my schedule hadn’t shifted."',
        drill:
          'ทำ Blind Shadowing บทสนทนาสิงคโปร์วันนี้ 2 รอบหลังฟังรอบแรก แล้วทำ Dictogloss โดยไม่แอบดูสคริปต์ก่อนเลือกคำตอบ',
      },
      l1: [
        'สรุปจุดพลาดสัปดาห์ 30: 1) พิมพ์ gonna/wanna ลงอีเมลทางการ 2) เขียน *would of แทน would have 3) ซ้อน to หลัง wanna/gonna 4) แข็งค้างเวลาเจอคำศัพท์ US/UK ที่ไม่คุ้น 5) จ้องสคริปต์จนตาแย่งงานหูตอน Shadowing',
        'พอเข้าใจระบบเสียงลดรูปแล้ว คุณจะเลิกโทษตัวเองว่า "ฟังไม่ทันเพราะโง่" แต่รู้ทันทีว่าเสียงไหนถูกรวบตรงไหน',
        'ฝึกฟัง 10 นาทีทุกวันด้วยหู + ปาก (Blind Shadowing) สลับกับการเช็กตัวสะกดรูปเต็มในสมุดบันทึก',
      ],
      vocab: [
        [
          'itinerary',
          'กำหนดการเดินทาง',
          '/aɪˈtɪn.ər.ər.i/',
          'adjust a tight itinerary',
          'ปรับกำหนดการเดินทางที่แน่น',
        ],
        [
          'junction',
          'ทางแยก / จุดเชื่อมต่อ',
          '/ˈdʒʌŋk.ʃən/',
          'meet near the station junction',
          'นัดเจอกันใกล้จุดเชื่อมต่อสถานี',
        ],
        [
          'refreshing',
          'สดชื่น / กระปรี้กระเปร่า',
          '/rɪˈfreʃ.ɪŋ/',
          'a refreshing iced brew',
          'กาแฟเย็นที่ช่วยให้สดชื่น',
        ],
        [
          'catch up',
          'อัปเดตเรื่องราว / ตามให้ทัน',
          '/kætʃ ʌp/',
          'catch up over takeaway noodles',
          'คุยอัปเดตสารทุกข์สุกดิบระหว่างกินบะหมี่',
        ],
        [
          'decode',
          'ถอดรหัส / แกะความหมาย',
          '/ˌdiːˈkəʊd/',
          'decode fast natural speech',
          'ถอดรหัสเสียงพูดเร็วแบบธรรมชาติ',
        ],
        [
          'hesitation',
          'ความลังเล / การติดขัด',
          '/ˌhez.ɪˈteɪ.ʃən/',
          'speak with minimal hesitation',
          'พูดด้วยความติดขัดน้อยที่สุด',
        ],
        [
          'intonation',
          'ทำนองเสียงสูงต่ำในประโยค',
          '/ˌɪn.təˈneɪ.ʃən/',
          'match natural intonation',
          'จับทำนองเสียงสูงต่ำให้เป็นธรรมชาติ',
        ],
        [
          'fluent',
          'คล่องแคล่วลื่นไหล',
          '/ˈfluː.ənt/',
          'maintain fluent rhythm',
          'รักษาจังหวะการพูดที่ลื่นไหล',
        ],
      ],
      examples: [
        [
          'I would have texted them earlier, to be honest, if our schedule had not shifted twice.',
          'พูดตามตรงนะ ฉันคงส่งข้อความบอกพวกเขาไปก่อนหน้านี้แล้ว ถ้าตารางของเราไม่ขยับตั้งสองรอบ',
        ],
        [
          'Did you pick up takeaway coffee before heading to the elevator?',
          'คุณได้แวะซื้อกาแฟกลับบ้านก่อนเดินไปขึ้นลิฟต์ไหม?',
        ],
        [
          'Actually, let me rephrase that—we still have time to adjust the itinerary.',
          'เอ๊ะ เดี๋ยวขอพูดใหม่ดีกว่า เรายังพอมีเวลาปรับกำหนดการเดินทางอยู่นะ',
        ],
        [
          'Once you decode weak forms like should’ve and tell ’em, fast podcasts feel far less intimidating.',
          'พอคุณถอดรหัสเสียงลดรูปอย่าง should’ve กับ tell ’em ออก พอดแคสต์ความเร็วสูงก็ดูน่ากลัวน้อยลงเยอะเลย',
        ],
      ],
      reading:
        'At a bustling kopi shop near Tiong Bahru in Singapore, three regional teammates—Mei from London, Sam from Toronto, and Arthit from Bangkok—caught up before an afternoon site visit. "Wait a minute, did you check the updated itinerary?" Sam asked while taking a sip of iced water. "We’re going to have to leave by one-fifteen so we stay out of heavy rain near the port." Mei glanced at her schedule on screen and smiled. "Got you covered! I’ve already queued for takeaway wraps—sorry, takeout wraps—and I would have texted you both earlier, to be honest, except my flat Wi-Fi dropped right before the lift." Arthit laughed at the seamless mix of accents around the tiny marble table. "Honestly, six months ago I didn’t know how anyone followed this pace," he admitted. "Actually, let me rephrase that: I used to freeze whenever I heard reductions like should’ve or couldja. Now that I practice blind shadowing for ten minutes every morning, fast group chats feel energizing instead of stressful."',
      listenQ: 'Why did Mei apologize and rephrase "takeaway wraps" to "takeout wraps" at the table?',
      listenA: 'Because she realized Sam was from Toronto and might use North American vocabulary.',
      dictation: 'I would have texted you earlier if our schedule had not shifted.',
      listenNote:
        'บทอ่านนี้รวมองค์ประกอบสัปดาห์ 30 ครบทุกจุด: Wait a minute (Flap T), did you (/ˈdɪdʒ.ə/), going to have to, out of, Got you, queued/takeaway/takeout/flat/lift, would have texted, to be honest, let me rephrase that, should’ve, couldja',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังบทอ่านแล้วเติมข้อความที่หายไปจากประโยคคำพูดของ Mei ให้ถูกต้องทุกคำ: "_____ earlier, to be honest, except my flat Wi-Fi dropped right before the lift."',
          answer: 'I would have texted you both',
          choices: [
            'I would of texted you both',
            'I would have texted you both',
            'I will have texted you both',
            'I would had texted you both',
          ],
          explanation:
            'ต้นฉบับใช้ Modal Perfect "I would have texted you both earlier..." (เสียงพูดเร็วรวบเป็น I would’ve, ห้ามเขียน would of)',
          audio_text:
            'I would have texted you both earlier, to be honest, except my flat Wi-Fi dropped right before the lift.',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ปนข้อผิดพลาดจากเสียงรวบและคำศัพท์ในอีเมลทางการ 3 จุด: "Hi team, I wanna confirm that I could of finish the report earlier, and please take the lift to my apartment."',
          answer:
            'Hi team, I want to confirm that I could have finished the report earlier, and please take the elevator to my apartment.',
          explanation:
            '1) อีเมลทางการใช้ want to (หรือ would like to) แทน wanna 2) could have + V3 (finished) ไม่ใช่ could of + finish 3) รักษาความสม่ำเสมอเป็น elevator คู่กับ apartment (หรือ lift คู่กับ flat)',
        },
        {
          kind: 'choice',
          prompt:
            'ในคลิปเสียงสัมภาษณ์ คุณได้ยินผู้พูดกล่าวว่า "Look, I dunno—I mean, sort of, what I’m really saying is you shouldn’t’ve waited." ความหมายแท้จริงที่ผู้พูดต้องการเน้นคือข้อใด?',
          answer:
            'You should not have waited (even though the speaker hesitated while phrasing it).',
          choices: [
            'You definitely have to wait longer next time.',
            'You should not have waited (even though the speaker hesitated while phrasing it).',
            'You do not know why anyone decided to wait.',
            'You should wait because I sort of want to meet you.',
          ],
          explanation:
            'ตัด filler "I dunno—I mean, sort of" ออกเป็นจังหวะคิด แล้วจับสาระสำคัญหลัง "what I’m really saying is" ซึ่งใช้ shouldn’t’ve = should not have + V3',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ (ใช้คำเชื่อมแก้ประโยคอย่างสุภาพ): "พูดตามตรงนะ เมื่อก่อนฉันฟังไม่ออกเลย เอ๊ะ ขอพูดใหม่ดีกว่า—ฉันเคยตื่นตระหนกทุกครั้งที่ได้ยินเสียงรวบ"',
          answer:
            'To be honest, I could not follow at all before—actually, let me rephrase that: I used to panic whenever I heard spoken reductions.',
          explanation:
            'รวม To be honest + let me rephrase that + used to เพื่อเล่าพัฒนาการการฟังอย่างเป็นธรรมชาติ',
        },
      ],
      writing:
        'เขียนบันทึกสะท้อนพัฒนาการการฟังของคุณตลอดสัปดาห์ที่ 30 ความยาว 6 ประโยค โดยเล่าว่า "เสียงรวบหรือสำเนียงแบบไหนที่เคยฟังยากที่สุด" และ "คุณใช้เทคนิคอะไร (เช่น Stress-timed listening, US/UK awareness, Blind Shadowing) เพื่อแก้จุดนั้น"',
      writingSample:
        'A week ago, fast conversations in podcasts sounded like one continuous blur to me. I used to get lost whenever speakers compressed function words like would have or blended did you into didja. Once I learned how English drops weak syllables while stressing core content words, everything started clicking into place. I also stopped confusing British terms like flat, lift, and takeaway with unfamiliar vocabulary. Practicing ten minutes of blind shadowing each morning without staring at text has trained my ears to catch meaning in real time. Honestly, what used to make me freeze now feels like an enjoyable puzzle.',
      writingNote:
        'ตรวจให้แน่ใจว่าไม่มีรูปย่อภาษาพูดอย่าง wanna/gonna/dunno หลุดมาในบันทึกเขียนเชิงวิเคราะห์ฉบับนี้ และใช้ Modal Perfect (would have + V3) ได้ถูกตัวสะกด',
      speakingTopic:
        'Review สัปดาห์ 30: สรุป 4 กลไกเสียงธรรมชาติพร้อมจำลองการพูดต่อเนื่อง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดอธิบายให้เพื่อนฟังว่าทำไมภาษาอังกฤษจึงฟังดูเร็ว (Reductions, Coalescence/Flap T, Stress-timing, Global pairs) พร้อมยกตัวอย่างออกเสียงประกอบจริง',
        'สาธิต Repair phrase 1 ครั้งระหว่างพูดอย่างเป็นธรรมชาติ (Actually, let me rephrase that...)',
        'รักษาจังหวะลื่นไหล คุม Thought Groups และลงน้ำหนักคำหลักให้คมในรอบ 2 นาทีสุดท้าย',
      ],
    },
  ]
);
