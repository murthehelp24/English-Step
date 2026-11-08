import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 2: เล่าเรื่อง ตอบโต้ และเชื่อมความคิดในชีวิตประจำวัน';

export const WEEK09: ModuleSeed = createModule(
  {
    week: 9,
    phase: 2,
    phase_title: PHASE_TITLE,
    cefr_level: 'A2',
    title: 'Past Continuous, used to และศิลปะการเล่าเรื่อง',
    summary:
      'เล่าฉากหลัง + เหตุการณ์แทรก (was doing when...), นิสัยในอดีตที่เปลี่ยนไปแล้ว (used to), ลำดับเหตุการณ์ และเสียงเชื่อมเวลาเล่าเรื่อง',
    focus: 'Past Continuous vs Past Simple, used to, Sequence Connectors',
  },
  [
    {
      day: 57,
      title: 'เหตุการณ์ที่กำลังดำเนินอยู่ในอดีต (was/were + V-ing) เพื่อปูฉากเรื่องเล่า',
      objective:
        'บรรยายสิ่งที่กำลังเกิดขึ้น ณ จุดเวลาเฉพาะในอดีตด้วย was/were + V-ing เพื่อสร้างฉากหลังให้เรื่องเล่าดูมีชีวิต',
      explanation:
        'เวลาเล่าเรื่องในอดีต ถ้าเราใช้แค่ Past Simple (`I cooked dinner`) เรื่องจะฟังดูเหมือนรายการเช็กลิสต์ แต่ถ้าอยาก **"ซูมเข้าไปในฉาก"** ว่า ณ เวลานั้นใครกำลังทำอะไรอยู่ (เช่น เมื่อคืนตอนสองทุ่ม หรือตอนเกิดเหตุ) ให้ใช้ **Past Continuous: `was / were + V-ing`** เช่น `At 8 p.m. last night, I was cooking dinner.` หรือ `My roommates were watching a movie.` จับคู่ประธานให้แม่น: `I / he / she / it / เอกพจน์` ใช้ **`was`**, ส่วน `you / we / they / พหูพจน์` ใช้ **`were`** (ปฏิเสธเป็น `wasn\'t / weren\'t`) อย่าลืมว่ากริยาความรู้สึกอย่าง *know, want, need* ยังคงห้ามเติม `-ing` เหมือนเดิมนะครับ!',
      sound: [
        'Weak Forms of was /wəz/ & were /wər/',
        'was /wəz/ (อ่อน) vs /wɒz/ (เน้น) · were /wər/ · neighborhood /ˈneɪ.bə.hʊd/',
        'ในประโยคบอกเล่าปกติ เจ้าของภาษาไม่อ่าน "วอส" เต็มเสียง แต่ลดรูปเป็น "เวอะซ": "I was cooking" → "ไอ-เวอะซ-คุก-กิง"',
        'พูดประโยคปูฉาก 4 ประโยคให้ was/were ไหลเบา แล้วไปเน้นเสียงที่กริยา -ing: "I wəz COOK-ing / They wər STUDY-ing"',
      ],
      l1: [
        'พูดแค่ "Last night at 8, I sleeping" (ลืม was/were) หรือใช้ Past Simple ล้วน "Last night at 8, I slept" ทั้งที่อยากเล่าว่ากำลังทำอยู่',
        'ภาษาไทยใช้คำว่า "กำลัง...อยู่" ได้เลยทั้งอดีตและปัจจุบัน โดยไม่ต้องเปลี่ยนกริยาช่วยนำหน้า',
        'เมื่อไรที่ระบุเวลาเจาะจงในอดีต (at 8 p.m., at that moment) เพื่อบรรยายภาพที่กำลังเกิดขึ้น ต้องดึง was/were มานำหน้า V-ing ทันที',
      ],
      vocab: [
        ['blackout', 'ไฟดับทั้งบริเวณ', '/ˈblæk.aʊt/', 'a sudden blackout', 'ไฟดับกะทันหัน'],
        ['balcony', 'ระเบียงห้อง', '/ˈbæl.kə.ni/', 'sit on the balcony', 'นั่งอยู่ที่ระเบียง'],
        ['neighbor', 'เพื่อนบ้าน', '/ˈneɪ.bər/', 'chat with a neighbor', 'คุยกับเพื่อนบ้าน'],
        ['flashlight', 'ไฟฉาย', '/ˈflæʃ.laɪt/', 'shine a flashlight', 'ส่องไฟฉาย'],
        ['staircase', 'บันไดอาคาร', '/ˈsteə.keɪs/', 'walk down the staircase', 'เดินลงบันได'],
        ['candle', 'เทียนไข', '/ˈkæn.dəl/', 'light a candle', 'จุดเทียน'],
      ],
      examples: [
        ['At eight fifteen last Tuesday, I was washing dishes in the kitchen.', 'เมื่อวันอังคารที่แล้วตอนสองทุ่มสิบห้า ฉันกำลังล้างจานอยู่ในครัว'],
        ['My neighbors were sitting on the balcony and enjoying the cool breeze.', 'เพื่อนบ้านของฉันกำลังนั่งอยู่ที่ระเบียงและรับลมเย็นๆ'],
        ['What were you doing when the lights suddenly went out?', 'ตอนที่ไฟดับลงกะทันหัน คุณกำลังทำอะไรอยู่?'],
        ['She wasn\'t sleeping yet; she was reading a novel with a small lamp.', 'เธอยังไม่ได้นอน เธอกำลังอ่านนิยายด้วยโคมไฟดวงเล็กอยู่'],
      ],
      reading:
        'Last Tuesday evening, a sudden blackout hit our apartment building at exactly eight fifteen. Because it was an ordinary weekday night, everyone was doing something different at that moment. On the second floor, I was washing dinner dishes in the kitchen, and my younger sister was practicing her guitar in the living room. Across the hall, our friendly neighbor Mr. Somchai was watering his plants on the balcony. Upstairs, two students were preparing for a morning presentation on their laptops, so the sudden darkness surprised them right away. Down in the lobby, the security guard was checking daily packages when every bulb turned off. Within two minutes, people were opening their doors with phone flashlights and calling out gently along the staircase. Nobody panicked, though—we simply lit a few candles and chatted calmly until the power came back.',
      listenQ: 'What was Mr. Somchai doing when the blackout hit at 8:15?',
      listenA: 'He was watering his plants on the balcony.',
      dictation: 'At eight fifteen, I was washing dishes in the kitchen.',
      listenNote: 'สังเกตเสียง was ในประโยคนี้จะถูกลดเสียงเป็น /wəz/ เชื่อมเข้าคำว่า washing เบาๆ ไม่เน้นเสียงหนักเท่าคำกริยาหลัก',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ขาด verb ช่วยและผัน was/were ผิด: "At nine last night, we watching a film while my dad were reading."',
          answer: 'At nine last night, we were watching a film while my dad was reading.',
          explanation: 'we เป็นพหูพจน์ต้องใส่ were หน้า watching ส่วน my dad เป็นเอกพจน์ต้องใช้ was หน้า reading',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ตั้งคำถามถึงสิ่งที่กำลังทำอยู่ ณ เวลาหนึ่งของเมื่อวานได้ถูกต้อง?',
          answer: 'What were you doing at three o\'clock yesterday?',
          choices: [
            'What did you doing at three o\'clock yesterday?',
            'What were you doing at three o\'clock yesterday?',
            'What you were doing at three o\'clock yesterday?',
            'What was you doing at three o\'clock yesterday?',
          ],
          explanation: 'คำถาม Past Continuous ย้าย were มาวางหน้า you เป็น What were you doing...?',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบประโยค: Sorry I missed your call at noon—I _____ (drive) to a client\'s office then.',
          answer: 'was driving',
          explanation: 'ระบุเวลา at noon ในอดีตและประธาน I จึงใช้ was driving',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ตอนสองทุ่มเมื่อคืน ฝนไม่ได้กำลังตก แต่ลมกำลังพัดแรง"',
          answer: 'At eight last night, it wasn\'t raining, but the wind was blowing hard.',
          explanation: 'ใช้ it wasn\'t raining และ the wind was blowing เพื่อบรรยายฉากหลังในอดีต',
        },
      ],
      writing:
        'เขียนฉากเหตุการณ์ในอดีตที่ระบุเวลาชัดเจน (เช่น เมื่อวานตอน 18:30 หรือคืนที่ไฟดับ/ฝนตก) จำนวน 4–5 ประโยค โดยบรรยายว่าคุณและคนรอบตัวกำลังทำอะไรอยู่ด้วย was/were + V-ing',
      writingSample:
        'Yesterday evening at six thirty, everyone at my home was busy. I was preparing fried rice in the kitchen, and my mom was folding clean clothes in the living room. Outside, our dog was running happily across the yard. Meanwhile, my brother wasn\'t helping us at all—he was taking a long shower upstairs!',
      writingNote: 'ตรวจทุกประโยคว่าจับคู่ I/he/she + was และ you/we/they + were ถูกต้อง และไม่เผลอเติม -ing กับ Stative Verbs',
      speakingTopic: 'ปูฉากความทรงจำ: "เมื่อวานเวลานี้ / ตอนเกิดเหตุการณ์นั้น ทุกคนกำลังทำอะไรอยู่?" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกจุดเวลาหนึ่งในอดีต (เช่น เมื่อคืนตอน 2 ทุ่ม หรือตอนฝนถล่มสัปดาห์ก่อน) แล้วซูมบรรยายฉากคนรอบข้างอย่างน้อย 4 คน',
        'ลดเสียง was เป็น /wəz/ และ were เป็น /wər/ แล้วลงน้ำหนักที่กริยา -ing เพื่อจังหวะแบบเจ้าของภาษา',
      ],
    },
    {
      day: 58,
      title: 'ฉากหลัง + เหตุการณ์แทรก (was doing ... when ...) และการใช้ while',
      objective:
        'เล่าเหตุการณ์ที่กำลังทำอยู่แล้วมีอีกเหตุการณ์เกิดขึ้นแทรกด้วย Past Continuous + when + Past Simple และเชื่อมเหตุการณ์คู่ขนานด้วย while',
      explanation:
        'นี่คือสูตรทองของการเล่าเรื่องสนุกๆ! ให้จินตนาการถึง **เส้นยาว (ฉากหลัง)** กับ **จุดตัดสั้นๆ (เหตุการณ์แทรก)**:\n1) **เหตุการณ์ที่กำลังเกิดต่อเนื่องอยู่ก่อน** ใช้ **Past Continuous (`was/were + V-ing`)**\n2) **เหตุการณ์สั้นที่โผล่มาแทรกกลางคัน** ใช้ **Past Simple (`V2`)** หลังคำว่า **`when`** เช่น `I **was walking** to the station **when** it **started** to rain.`\n3) ส่วน **`while`** ("ในขณะที่...") มักนำหน้า **เหตุการณ์ยาว (`was/were + V-ing`)** เพื่อบอกสิ่งที่ทำคู่ขนานกัน หรือวางหน้าฉากหลังก่อนเหตุการณ์แทรก เช่น `**While** I **was cooking**, my phone **rang**.` จำง่ายๆ: **`when` + เหตุการณ์สั้น (V2)** · **`while` + เหตุการณ์ยาว (was/were V-ing)**!',
      sound: [
        'Clause Pausing & Linking with when / while',
        'meanwhile /ˈmiːn.waɪl/ · interrupt /ˌɪn.təˈrʌpt/ · drop /drɒp/ · spill /spɪl/',
        'เวลาประโยคยาวขึ้นให้หยุดหายใจสั้นๆ ตรงรอยต่อประโยค: "While I wəz WALK-ing home, [พัก 0.3 วิ] my friend CALLED me."',
        'ฝึกพูดประโยค 2 ท่อน 4 คู่ โดยดึงเสียงสูงขึ้นเล็กน้อยท้ายท่อนแรก (rising tone) เพื่อบอกผู้ฟังว่าเรื่องยังไม่จบ',
      ],
      l1: [
        'สลับ Tense ผิดท่อน: "I walked to work when it was raining" (ทำให้อ่านเหมือนเดินแค่ 1 วินาที) หรือ "While I cooked, the bell was ringing"',
        'ใช้คำว่า "เมื่อ/ตอนที่" ในภาษาไทยแล้วแปลทุกกริยาเป็นรูปเดียวกันหมดโดยไม่แยกระหว่างฉากหลังกับจุดตัด',
        'เช็กคำถามเดียว: "อะไรเกิดขึ้นยาวกว่าและเกิดอยู่ก่อน?" → ใส่ was/were + V-ing ให้อันนั้น ส่วนอันที่โผล่มาตัดฉึบ → ใส่ V2!',
      ],
      vocab: [
        ['pour', 'เท / ฝนเทลงมา', '/pɔːr/', 'start pouring down', 'ฝนเริ่มเทลงมาอย่างหนัก'],
        ['spill', 'ทำหก / หกล้น', '/spɪl/', 'spill coffee on', 'ทำกาแฟหกใส่'],
        ['slip', 'ลื่น / ลื่นล้ม', '/slɪp/', 'almost slip on', 'เกือบจะลื่นล้มบน...'],
        ['shelter', 'ที่หลบฝน / ที่พักพิง', '/ˈʃel.tər/', 'find quick shelter', 'หาที่หลบฝนชั่วคราว'],
        ['ring', 'ดังขึ้น (โทรศัพท์/กริ่ง)', '/rɪŋ/', 'rang loudly', 'ดังขึ้นเสียงดัง'],
        ['notice', 'สังเกตเห็น', '/ˈnəʊ.tɪs/', 'suddenly notice', 'สังเกตเห็นขึ้นมาทันที'],
      ],
      examples: [
        ['I was paying for my iced tea when my boss called with urgent news.', 'ฉันกำลังจ่ายเงินค่าชาเย็นอยู่ตอนที่หัวหน้าโทรมาแจ้งข่าวด่วน'],
        ['While we were cycling along the canal, dark clouds rolled in quickly.', 'ขณะที่พวกเรากำลังปั่นจักรยานเลียบคลอง เมฆดำก็เคลื่อนเข้ามาอย่างรวดเร็ว'],
        ['Tom spilled water on his keyboard while he was answering an email.', 'ทอมทำน้ำหกใส่คีย์บอร์ดขณะที่เขากำลังตอบอีเมล'],
        ['When the street vendor offered us umbrellas, we were standing under a small tree.', 'ตอนที่แม่ค้าริมทางยื่นร่มให้พวกเรา เรากำลังยืนหลบอยู่ใต้ต้นไม้เล็กๆ'],
      ],
      reading:
        'Last Friday afternoon, Pim was riding the skytrain home after a tiring week. While she was listening to a podcast with her eyes half-closed, someone gently tapped her shoulder. Pim took off her headphones and saw Ploy, an old college classmate she hadn\'t seen in years! They were chatting excitedly near the door when the train arrived at Pim\'s stop. Because they wanted more time to talk, they both got off and walked into a quiet bakery nearby. While they were ordering warm toast and tea, it started pouring down outside. Luckily, they already had a dry table by the window. What started as an ordinary commute turned into a wonderful two-hour catch-up over hot drinks.',
      listenQ: 'What were Pim and Ploy doing when it started pouring down outside?',
      listenA: 'They were ordering warm toast and tea inside a quiet bakery.',
      dictation: 'While she was listening to a podcast, someone tapped her shoulder.',
      listenNote: 'ฟังเสียงเชื่อมใน "tapped her" (/tæpt ər/) ที่เสียง /t/ ท้าย tapped เชื่อมเข้าคำว่า her จนแทบไม่ได้ยินเสียง /h/',
      drills: [
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ "ฉากหลัง + เหตุการณ์แทรก" ได้ถูกต้องตามความหมายธรรมชาติ?',
          answer: 'I was chopping onions when I accidentally cut my finger.',
          choices: [
            'I chopped onions when I was accidentally cutting my finger.',
            'I was chopping onions when I accidentally cut my finger.',
            'While I cut onions, I was accidentally cutting my finger.',
            'I chopping onions when I cut my finger accidentally.',
          ],
          explanation: 'การหั่นหัวหอมเป็นฉากหลังต่อเนื่อง (was chopping) ส่วนมีดบาดเป็นเหตุการณ์สั้นแทรกเข้ามา (cut ช่อง 2 หลัง when)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำเชื่อมให้ถูกต้อง (when / while): _____ they were walking across the market, an old song reminded him of home.',
          answer: 'While',
          explanation: 'ตามด้วยเหตุการณ์กำลังดำเนินต่อเนื่อง (were walking) จึงใช้ While นำหน้าอนุประโยค',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ผิด Tense ในเหตุการณ์แทรก: "While Ken waited for the bus, his hat was blowing into the street."',
          answer: 'While Ken was waiting for the bus, his hat blew into the street.',
          explanation: 'กำลังรอรถเป็นฉากหลังต่อเนื่อง (was waiting) และหมวกปลิวลงถนนเป็นเหตุการณ์สั้นแทรก (blew)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ฉันกำลังดูทีวีอยู่ตอนที่เพื่อนบ้านเคาะประตู"',
          answer: 'I was watching TV when my neighbor knocked on the door.',
          explanation: 'กำลังดูทีวี (was watching) + when + เหตุการณ์แทรก (knocked)',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์ไม่คาดคิดที่เกิดขึ้นระหว่างที่คุณกำลังทำกิจกรรมธรรมดา 1 ย่อหน้า (5–6 ประโยค) โดยใช้ทั้งรูปแบบ `was/were + V-ing ... when + V2` และ `While + was/were + V-ing, ...` อย่างน้อยแบบละ 1 ประโยค',
      writingSample:
        'Two weeks ago, I was walking home from a night market with two bags of fruit. While I was looking down at my phone to check a map, a friendly street cat jumped right onto my shoe! I almost dropped my mangoes when a nearby shop owner laughed and helped hold my bags. After that, I put my phone in my pocket and enjoyed the rest of the walk.',
      writingNote: 'เช็กให้ชัวร์ว่าเหตุการณ์ที่เกิดแทรกสั้นๆ ใช้กริยาช่อง 2 (Past Simple) และไม่มี was/were นำหน้า',
      speakingTopic: 'เล่าเหตุการณ์ "กำลังทำ...อยู่ดีๆ ก็มีเรื่องนี้แทรกเข้ามา!" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้จังหวะ 2 ท่อนให้คล่อง: "I was [V-ing]... when [V2]..." และ "While I was [V-ing]..."',
        'เว้นหายใจสั้นๆ ระหว่างท่อนฉากหลังกับท่อนเหตุการณ์แทรกเพื่อให้ผู้ฟังจับใจความได้ชัด',
      ],
    },
    {
      day: 59,
      title: 'เคยทำในอดีตแต่ตอนนี้เลิกแล้ว (used to + V1) และรูปปฏิเสธ didn\'t use to',
      objective:
        'พูดถึงนิสัย สภาพแวดล้อม หรือความชอบในอดีตที่เปลี่ยนแปลงไปแล้วในปัจจุบันด้วย used to + V1, didn\'t use to + V1 และ Did you use to...?',
      explanation:
        'เมื่ออยากบอกว่า **"เมื่อก่อนเคยทำเป็นประจำ / เคยเป็นแบบนั้น (แต่ตอนนี้ไม่แล้ว)"** เจ้าของภาษาใช้ **`used to + V1`** เสมอ เช่น `I **used to drink** three sodas a day.` (แต่ตอนนี้เลิกแล้ว) หรือ `There **used to be** a quiet bookstore here.` (เมื่อก่อนตรงนี้เคยมีร้านหนังสือ แต่ตอนนี้ไม่มีแล้ว)\nระวัง 2 จุดสำคัญมากๆ!\n1) **ห้ามใช้ `used to` กับเหตุการณ์ครั้งเดียวที่ระบุเวลา!** เช่น "เมื่อวานฉันเคยไปตลาด" ❌ ห้ามพูด *used to go* ต้องใช้ Past Simple (`I went to the market yesterday`)\n2) **ในรูปปฏิเสธและคำถาม ต้องตัด `-d` ทิ้ง!** เป็น **`didn\'t use to + V1`** และ **`Did you use to + V1?`** เพราะมี `did/didn\'t` มารับรูปอดีตไปแล้ว!',
      sound: [
        'Linking & Silent /d/ in used to /ˈjuːs.tə/',
        'used to /ˈjuːs.tə/ · didn\'t use to /ˈdɪd.ənt ˈjuːs.tə/ · childhood /ˈtʃaɪld.hʊd/',
        'สังเกตว่า "used to" ไม่ได้อ่านว่า "ยูสด์ ทู" แต่ตัว /d/ หายไปและออกเสียงเชื่อมเป็น "ยูส-เทอะ" (/ˈjuːs.tə/) เลย!',
        'ฝึกพูดประโยคคู่: "I use-tə live there" / "I didn\'t use-tə like spicy food" โดยไม่ออกเสียง /d/ ตรง used',
      ],
      l1: [
        'เขียน/พูดว่า "I didn\'t used to..." หรือใช้ "I used to go to Chiang Mai last year" กับเหตุการณ์ครั้งเดียว',
        'เผลอใส่ -d ค้างไว้หลัง didn\'t และคิดคำแปลไทยว่า "เคย" เลยเอาไปใช้แทนคำว่า "เคยทำสักครั้ง" (ซึ่งจริงๆ ต้องใช้ Present Perfect: Have you ever...)',
        'จำแยก 2 คำว่า "เคย": เคยทำเป็นนิสัยในอดีตแล้วเลิกแล้ว = used to + V1 | เคยสัมผัสประสบการณ์สักครั้งในชีวิต = Have ever + V3 | ทำครั้งเดียวปีที่แล้ว = V2',
      ],
      vocab: [
        ['childhood', 'วัยเด็ก', '/ˈtʃaɪld.hʊd/', 'during my childhood', 'ในช่วงวัยเด็กของฉัน'],
        ['bicycle', 'รถจักรยาน', '/ˈbaɪ.sɪ.kəl/', 'ride a bicycle to school', 'ปั่นจักรยานไปโรงเรียน'],
        ['neighborhood', 'ย่านที่อยู่อาศัย', '/ˈneɪ.bə.hʊd/', 'quiet neighborhood', 'ย่านที่อยู่อาศัยอันเงียบสงบ'],
        ['corner', 'หัวมุมถนน', '/ˈkɔː.nər/', 'on the corner', 'ตรงหัวมุมถนน'],
        ['avoid', 'หลีกเลี่ยง', '/əˈvɔɪd/', 'avoid sweet drinks', 'หลีกเลี่ยงเครื่องดื่มหวาน'],
        ['change', 'เปลี่ยนแปลง', '/tʃeɪndʒ/', 'change completely', 'เปลี่ยนแปลงไปโดยสิ้นเชิง'],
      ],
      examples: [
        ['I used to stay up past midnight, but now I sleep by eleven.', 'เมื่อก่อนฉันเคยนอนดึกเกินเที่ยงคืน แต่ตอนนี้เข้านอนก่อนห้าทุ่มแล้ว'],
        ['My parents didn\'t use to own a car when I was a child.', 'ตอนฉันยังเด็ก พ่อแม่ของฉันไม่ได้มีรถยนต์ส่วนตัว'],
        ['Did you use to play outside with your cousins after school?', 'ตอนเด็กๆ คุณเคยออกไปเล่นข้างนอกกับลูกพี่ลูกน้องหลังเลิกเรียนไหม?'],
        ['There used to be a huge mango tree right on that corner.', 'ตรงหัวมุมนั้นเคยมีต้นมะม่วงต้นใหญ่มากต้นหนึ่ง'],
      ],
      reading:
        'Whenever I visit my hometown in Chiang Mai, I notice how much the neighborhood has changed. Ten years ago, our street used to be super quiet, with small wooden houses and a tiny noodle shop on the corner. After school, my friends and I used to ride our bicycles along the canal until sunset. We didn\'t use to carry mobile phones at all, so our parents simply called us home from the front gate! Today, however, tall coffee shops and busy mini-marts stand where rice fields used to grow. Even my own habits look different now. I used to avoid vegetables completely and drink sweet milk tea every afternoon, whereas nowadays I cook fresh meals and drink plain water.',
      listenQ: 'Why didn\'t the speaker and their friends use to carry mobile phones?',
      listenA: 'Because their parents simply called them home from the front gate.',
      dictation: 'I didn\'t use to like vegetables during my childhood.',
      listenNote: 'สังเกตว่า "didn\'t use to" ออกเสียงไม่ต่างจาก "used to" ในแง่เสียง /juːs.tə/ โดยไม่มีเสียง /t/ ชัดตรงท้าย didn\'t เมื่อพูดเร็ว',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้รูปปฏิเสธและคำถามของ used to ที่สะกดผิด 2 จุด: "She didn\'t used to drink coffee, and did you used to live near here?"',
          answer: 'She didn\'t use to drink coffee, and did you use to live near here?',
          explanation: 'เมื่อมี didn\'t หรือ did แล้ว ต้องตัด d ท้าย used เหลือเป็น use to ทั้งสองจุด',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ used to + V1 ได้ถูกต้องตามความหมาย (นิสัย/สภาพอดีตที่เปลี่ยนไปแล้ว)?',
          answer: 'There used to be a cinema on this street, but it closed in 2021.',
          choices: [
            'Last Sunday, I used to visit my aunt for lunch.',
            'There used to be a cinema on this street, but it closed in 2021.',
            'Right now, I am used to play tennis every weekend.',
            'She didn\'t used to eat spicy food when she was young.',
          ],
          explanation: 'โรงหนังที่เคยตั้งอยู่ตรงถนนนี้ในอดีตใช้ There used to be ส่วนเหตุการณ์ครั้งเดียววันอาทิตย์ที่แล้วต้องใช้ visited',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบวลี: How _____ (you / spend) your weekends before you got your new job?',
          answer: 'did you use to spend',
          explanation: 'คำถามถามถึงนิสัยในอดีตที่เปลี่ยนไปใช้ did + ประธาน + use to + V1',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "เมื่อก่อนฉันเคยกลัวการพูดภาษาอังกฤษ แต่ตอนนี้ฉันมั่นใจขึ้นมาก"',
          answer: 'I used to be afraid of speaking English, but now I feel much more confident.',
          explanation: 'ใช้ used to be afraid of... เปรียบเทียบกับ but now I feel...',
        },
      ],
      writing:
        'เขียนเปรียบเทียบชีวิตวัยเด็กหรือเมื่อ 5 ปีก่อนของคุณกับปัจจุบัน 5–6 ประโยค โดยใช้ `used to`, `didn\'t use to` และ `but now...` ให้เห็นความเปลี่ยนแปลงชัดเจน',
      writingSample:
        'Five years ago, my daily routine looked completely different. I used to skip breakfast every morning and buy iced coffee on the way to work. Also, I didn\'t use to exercise at all because I stayed at my desk until late at night. There used to be a small night market near my dorm, so I ate snacks before bed. Now, however, I wake up early, cook eggs at home, and take a thirty-minute walk in the park.',
      writingNote: 'เช็กการสะกดคำว่า didn\'t use to (ไม่มี d) และอย่าลืมเปลี่ยนกริยาปัจจุบันหลัง but now ให้เป็น Present Simple',
      speakingTopic: 'เทียบตัวฉันในอดีต vs ตัวฉันวันนี้: "How have my habits changed?" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดถึง 3 เรื่องที่เปลี่ยนไป (อาหารการกิน, การเรียน/ทำงาน, ย่านที่อยู่หรือเพื่อน)',
        'ออกเสียง used to เป็น /ˈjuːs.tə/ ไม่ต้องออกเสียงตัว d ชัด และผันคู่กับ but now... ให้ครบ',
      ],
    },
    {
      day: 60,
      title: 'ชินแล้ว vs กำลังปรับตัว (be used to vs get used to + V-ing / Noun)',
      objective:
        'แยกความหมายและโครงสร้างของ used to + V1 ออกจาก be used to + V-ing/Noun (คุ้นชินแล้ว) และ get used to + V-ing/Noun (กำลังปรับตัวให้ชิน)',
      explanation:
        'อย่าสับสนระหว่างคำหน้าตาคล้ายกัน 3 ตัวนี้ครับ!\n1) **`used to + V1`** = อดีตที่เลิกทำแล้ว (`I used to wake up at 5` = เคยตื่นตี 5 ตอนนี้ไม่แล้ว)\n2) **`be used to + V-ing / คำนาม`** = **คุ้นเคย/ชินกับ...แล้วในตอนนี้** (ไม่มีอะไรแปลกแล้ว) เช่น `I **am used to waking** up at 5.` (ฉันชินกับการตื่นตี 5 แล้ว) หรือ `She **is used to spicy food**.`\n3) **`get used to + V-ing / คำนาม`** = **กำลังค่อยๆ ปรับตัวให้ชิน** เช่น `It\'s noisy here, but I\'m **getting used to it**.` หรือ `You\'ll soon **get used to driving** on the left.`\nจำกฎทองไว้: ถ้ามี **`be`** หรือ **`get`** นำหน้า **`used to`** คำว่า `to` ตัวนี้เป็นคำบุพบท! ดังนั้นห้ามตามด้วย V1 เด็ดขาด ต้องตามด้วย **`V-ing` หรือ `คำนาม`** เท่านั้น!',
      sound: [
        'Contrasting /ˈjuːs.tə/ with /ˈɡet.ɪŋ ˈjuːs.tə/',
        'getting used to /ˈɡet.ɪŋ ˈjuːs.tə/ · routine /ruːˈtiːn/ · climate /ˈklaɪ.mət/ · crowded /ˈkraʊ.dɪd/',
        'ใน "I\'m used to working late" → "I\'m use-tə WORK-ing late" คำว่า used to ลดเสียงเร็ว ส่วนคำว่า WORK และ LATE ถูกเน้นชัด',
        'ฝึกพูดประโยค 3 แบบสลับกัน: "I used to wake up late / Now I\'m getting used to waking up early / Soon I\'ll be used to it!"',
      ],
      l1: [
        'ตามหลัง be/get used to ด้วย V1: "I am used to wake up early" หรือ "He is getting used to live in Bangkok"',
        'จำกฎจากบทที่แล้วว่าหลังคำว่า to ต้องตามด้วย V1 เสมอ โดยลืมไปว่าในสำนวน be/get used to คำว่า to แปลว่า "กับ..." จึงต้องตามด้วยคำนามหรือ V-ing',
        'เช็กคำข้างหน้า used to: ถ้าข้างหน้าเป็นประธานเพียวๆ (I used to...) → ตามด้วย V1 | ถ้าข้างหน้ามี am/is/are/get/getting → ตามด้วย V-ing หรือ Noun!',
      ],
      vocab: [
        ['adjust', 'ปรับตัว', '/əˈdʒʌst/', 'adjust to a new schedule', 'ปรับตัวเข้ากับตารางใหม่'],
        ['unfamiliar', 'ไม่คุ้นเคย', '/ˌʌn.fəˈmɪl.i.ər/', 'feel unfamiliar at first', 'รู้สึกไม่คุ้นในตอนแรก'],
        ['climate', 'สภาพอากาศ', '/ˈklaɪ.mət/', 'cool climate', 'สภาพอากาศเย็นสบาย'],
        ['commute', 'การเดินทางไป-กลับทำงาน', '/kəˈmjuːt/', 'a long morning commute', 'การเดินทางช่วงเช้าที่ใช้เวลานาน'],
        ['gradually', 'ทีละน้อย / ค่อยๆ', '/ˈɡrædʒ.u.ə.li/', 'gradually get used to', 'ค่อยๆ ปรับตัวให้ชินทีละน้อย'],
        ['crowded', 'แออัด / คนเยอะ', '/ˈkraʊ.dɪd/', 'crowded subway cars', 'ขบวนรถไฟฟ้าที่คนแน่น'],
      ],
      examples: [
        ['After two years in Bangkok, I\'m finally used to the heavy traffic.', 'หลังจากอยู่กรุงเทพฯ มาสองปี ในที่สุดฉันก็ชินกับรถติดแล้ว'],
        ['She\'s still getting used to waking up at six every weekday.', 'เธอกำลังค่อยๆ ปรับตัวให้ชินกับการตื่นหกโมงเช้าทุกวันธรรมดา'],
        ['Don\'t worry—you\'ll quickly get used to speaking English aloud.', 'ไม่ต้องกังวล เดี๋ยวคุณก็จะปรับตัวจนชินกับการพูดภาษาอังกฤษออกเสียงดังๆ เอง'],
        ['Before moving north, Ben wasn\'t used to wearing a thick jacket indoors.', 'ก่อนย้ายขึ้นเหนือ เบนไม่คุ้นเคยกับการใส่เสื้อแจ็กเก็ตหนาๆ ในบ้านเลย'],
      ],
      reading:
        'When Nook moved from a quiet seaside town to central Bangkok for a new job, everything felt unfamiliar. Back home, she used to walk ten minutes along peaceful streets to her old office. In Bangkok, however, she wasn\'t used to taking crowded skytrains or hearing nonstop city noise. During the first month, the long morning commute made her exhausted, and she struggled to fall asleep early. Gradually, she started getting used to her new life. She found a good podcast to listen to on the train and learned which quiet side streets had tasty street food. Now, six months later, Nook is completely used to living in the big city and actually enjoys its lively energy.',
      listenQ: 'What helped Nook get used to taking the crowded morning train?',
      listenA: 'She found a good podcast to listen to on the train.',
      dictation: 'She is gradually getting used to living in the big city.',
      listenNote: 'สังเกตคำว่า gradually (/ˈɡrædʒ.u.ə.li/) มีจังหวะพยางค์เร็วตรงกลาง และ "getting used to living" เชื่อมท้าย -ing ให้ลื่นไม่ขาดช่วง',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้รูปคำกริยาหลัง be/get used to ที่ผิด 2 จุด: "At first I couldn\'t get used to drive on narrow roads, but now I am used to park there."',
          answer: 'At first I couldn\'t get used to driving on narrow roads, but now I am used to parking there.',
          explanation: 'หลัง get used to และ be used to ต้องตามด้วย V-ing เสมอ (driving และ parking)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้โครงสร้างถูกต้องและตรงความหมาย "กำลังปรับตัวให้ชินกับสภาพอากาศหนาว"?',
          answer: 'He is slowly getting used to the cold weather in London.',
          choices: [
            'He is slowly used to live in the cold weather in London.',
            'He slowly used to the cold weather in London.',
            'He is slowly getting used to the cold weather in London.',
            'He is slowly getting used to feel cold in London.',
          ],
          explanation: 'กำลังปรับตัวให้ชิน + คำนาม ใช้ is getting used to + the cold weather (ในข้อ 4 แปลเพี้ยนและควรใช้คำนาม/V-ing ที่เป็นธรรมชาติกว่า)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบ: My cousin grew up by the beach, so he isn\'t used to _____ (wear) heavy coats.',
          answer: 'wearing',
          explanation: 'isn\'t used to (ไม่ชินกับ) ต้องตามด้วย V-ing → wearing',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "เดี๋ยวคุณก็จะชินกับการทำงานจากที่บ้านเอง"',
          answer: 'You will soon get used to working from home.',
          explanation: 'ใช้ get used to + working from home เพื่อสื่อถึงการปรับตัวให้ชินในไม่ช้า',
        },
      ],
      writing:
        'เล่าประสบการณ์การปรับตัวเข้ากับสิ่งใหม่ (งานใหม่, เมืองใหม่, กิจวัตรการเรียนภาษา, หรือการออกกำลังกาย) 5 ประโยค โดยใช้ทั้ง `used to + V1`, `wasn\'t used to + V-ing`, และ `am getting used to / am used to + V-ing`',
      writingSample:
        'Last year, I used to eat dinner late and scroll on my phone until midnight. When I started my new morning routine, I wasn\'t used to going to bed before ten thirty. For the first two weeks, I kept waking up tired and missing my old habit. Now, I am gradually getting used to turning off screens at night, and I\'m already used to drinking warm water right after waking up.',
      writingNote: 'เช็กเส้นแบ่งให้แม่น: used to + V1 (อดีตที่เลิก) | be/get used to + V-ing/Noun (ความคุ้นชิน)',
      speakingTopic: 'เล่าเรื่อง "จากที่ไม่ชินเลย สู่การปรับตัวจนคุ้นเคย" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดให้ครบ 3 สเต็ป: เมื่อก่อนเคยทำอะไร (used to V1) → ตอนเปลี่ยนแรกๆ ไม่ชินอะไร (wasn\'t used to V-ing) → ตอนนี้ปรับตัวได้แค่ไหนแล้ว (getting used to / used to V-ing)',
        'ระวังไม่หลุดพูด "I\'m used to wake up" ให้ต่อ -ing หลัง used to ที่มี be/get เสมอ',
      ],
    },
    {
      day: 61,
      title: 'เชื่อมเรื่องเล่าให้ลื่นไหลเหมือนหนัง (at first, meanwhile, all of a sudden, eventually)',
      objective:
        'ใช้คำเชื่อมลำดับเรื่องเล่า (Storytelling Sequence Connectors) เพื่อเล่าเหตุการณ์หลายฉากและจุดหักมุมให้ชวนติดตาม',
      explanation:
        'เวลาเล่าเรื่องสนุกๆ อย่าใช้แค่ `and then... and then...` ซ้ำไปเรื่อยๆ ลองวาง "ป้ายบอกทางอารมณ์" 5 ตัวนี้ลงไปในเรื่องครับ:\n1) **`At first, ...`** (ในตอนแรก — มักปูทางว่าเดี๋ยวความรู้สึกหรือสถานการณ์จะเปลี่ยน!)\n2) **`Meanwhile, ...`** (ในขณะเดียวกัน — ตัดภาพไปอีกฝั่งหรืออีกคนหนึ่งที่กำลังทำอะไรอยู่พร้อมกัน)\n3) **`All of a sudden, ...`** (ทันใดนั้นเอง — แรงและได้อารมณ์กว่า *suddenly* เวลาเล่าปากเปล่า)\n4) **`Eventually, ...`** (ในที่สุด — ใช้เมื่อรอมานาน พยายามมานาน หรือผ่านความวุ่นวายมาแล้วจนสำเร็จ)\n5) **`In the end, ...`** (สุดท้ายแล้ว — สรุปบทสรุปของเรื่องทั้งหมด)',
      sound: [
        'Dramatic Pausing & Intonation on Story Signposts',
        'eventually /ɪˈven.tʃu.ə.li/ · meanwhile /ˈmiːn.waɪl/ · relieve /rɪˈliːv/ · wallet /ˈwɒl.ɪt/',
        'หลังคำเชื่อมต้นประโยคอย่าง "At first," "Meanwhile," หรือ "All of a sudden," ให้หยุดสั้นๆ ครึ่งจังหวะและดึงเสียงสูงนิดหนึ่งก่อนเข้าประโยคหลักเพื่อสร้างความตื่นเต้น',
        'อ่านคำว่า eventually ให้ได้ 4 พยางค์ชัด: ih-VEN-chuh-lee (/ɪˈven.tʃu.ə.li/) ไม่ใช่อ่านรวบเป็น "อีเว้นลี่"',
      ],
      l1: [
        'ใช้คำว่า "then... and then... and then..." ทุกประโยค หรือใช้คำว่า "eventually" ผิดความหมายเป็น "บางที/สุดท้ายเฉยๆ"',
        'ไม่คุ้นกับจังหวะการเล่าเรื่องแบบตัดสลับฉาก (Meanwhile) และไม่รู้คำบอกอารมณ์จุดหักมุม',
        'วางโครง 4 ขั้นตอนติดปาก: At first (เปิดเรื่อง) → Meanwhile / All of a sudden (จุดพลิก) → Eventually (ฝ่าฟันจนเจอทางออก) → In the end (สรุปจบ)',
      ],
      vocab: [
        ['eventually', 'ในที่สุด (หลังผ่านเรื่องราว)', '/ɪˈven.tʃu.ə.li/', 'eventually found out', 'ในที่สุดก็พบ/รู้ความจริง'],
        ['meanwhile', 'ในขณะเดียวกัน', '/ˈmiːn.waɪl/', 'meanwhile, at the station', 'ในขณะเดียวกัน ที่สถานี'],
        ['panic', 'ตื่นตระหนก', '/ˈpæn.ɪk/', 'start to panic', 'เริ่มตื่นตระหนก'],
        ['counter', 'เคาน์เตอร์บริการ', '/ˈkaʊn.tər/', 'information counter', 'เคาน์เตอร์ประชาสัมพันธ์'],
        ['valuable', 'มีค่า / สำคัญ', '/ˈvæl.jə.bəl/', 'valuable items', 'ของมีค่า'],
        ['return', 'นำมาคืน / กลับคืน', '/rɪˈtɜːn/', 'return safely', 'ได้คืนอย่างปลอดภัย'],
      ],
      examples: [
        ['At first, I thought my backpack was just under the train seat.', 'ตอนแรกฉันคิดว่ากระเป๋าเป้คงอยู่แค่ใต้เบาะรถไฟ'],
        ['Meanwhile, a kind passenger was walking toward the information counter with my wallet.', 'ในขณะเดียวกัน ผู้โดยสารใจดีคนหนึ่งกำลังเดินเอากระเป๋าสตางค์ของฉันไปที่เคาน์เตอร์ประชาสัมพันธ์'],
        ['All of a sudden, my phone buzzed with a message from the station office.', 'ทันใดนั้นเอง โทรศัพท์ฉันก็สั่นพร้อมข้อความจากห้องเจ้าหน้าที่สถานี'],
        ['Eventually, after forty stressful minutes, I got every single card back safely.', 'ในที่สุด หลังจากผ่านสี่สิบนาทีสุดเครียด ฉันก็ได้บัตรทุกใบคืนมาอย่างปลอดภัย'],
      ],
      reading:
        'Last Sunday, Ton took an afternoon train back from Hua Hin. At first, everything felt calm as he watched green fields pass by the window. When he arrived in Bangkok and reached the taxi stand, he reached for his pocket and froze—his wallet was gone! He started to panic because it held his ID and train pass. All of a sudden, he remembered leaving his jacket near the ticket gate earlier. Ton ran back to the platform as fast as he could. Meanwhile, an honest station cleaner was handing a black leather wallet to the information counter. Ton asked two guards and checked the lost-and-found desk anxiously. Eventually, a smiling officer called his name and checked his photo ID. In the end, nothing valuable was missing, and Ton thanked the cleaner with huge gratitude.',
      listenQ: 'What was the station cleaner doing while Ton was running back to the platform?',
      listenA: 'The cleaner was handing Ton\'s black leather wallet to the information counter.',
      dictation: 'All of a sudden, he remembered leaving his jacket near the gate.',
      listenNote: 'สังเกตเสียงเชื่อมใน "All of a sudden" (/ɔːl əv ə ˈsʌd.ən/) พูดติดกันเป็นกลุ่มเดียวแล้วเว้นจังหวะก่อนเข้าประโยคหลัก',
      drills: [
        {
          kind: 'choice',
          prompt: 'คำเชื่อมใดเหมาะกับการ "ตัดสลับฉากไปสิ่งที่อีกคนกำลังทำอยู่พร้อมกัน"?',
          answer: 'Meanwhile',
          choices: ['At first', 'Meanwhile', 'All of a sudden', 'In the end'],
          explanation: 'Meanwhile แปลว่า "ในขณะเดียวกัน" ใช้เล่าเหตุการณ์ที่กำลังเกิดขึ้นคู่ขนานในอีกจุดหนึ่ง',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำเชื่อมให้ตรงความหมาย "ในที่สุด (หลังจากรอหรือตามหามานาน)": We searched the parking lot for half an hour and _____ found the keys beside a bench.',
          answer: 'eventually',
          explanation: 'eventually ใช้สื่อว่าในที่สุดก็สำเร็จหลังจากใช้เวลาและความพยายามมาระยะหนึ่ง',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคเรื่องเล่าที่ใช้คำเชื่อมซ้ำและผิดรูปกริยา: "At first, I was calm, and then all of a suddenly I hear a loud crash."',
          answer: 'At first, I was calm, and then all of a sudden I heard a loud crash.',
          explanation: 'สำนวนที่ถูกคือ all of a sudden (ไม่เติม -ly) และเรื่องเกิดในอดีตต้องใช้ heard (V2)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ตอนแรกฉันคิดว่าหลงทาง แต่ในที่สุดฉันก็หาทางออกเจอ"',
          answer: 'At first, I thought I was lost, but eventually I found the exit.',
          explanation: 'ใช้ At first, ... กับ eventually ... เพื่อตัดอารมณ์เรื่องเล่าให้ชัดเจน',
        },
      ],
      writing:
        'เขียนเรื่องเล่าสั้นแนว "เกือบซวยแต่จบสวย" (เช่น ทำของหาย ขึ้นรถผิดสาย หรือหลงทาง) 6–7 ประโยค โดยใช้คำเชื่อมครบอย่างน้อย 4 คำจากบทนี้ (`At first`, `All of a sudden`, `Meanwhile`, `Eventually`, `In the end`)',
      writingSample:
        'Last month, I left my umbrella on a public bus during a busy evening. At first, I didn\'t notice it was missing until I walked outside into the rain. All of a sudden, a stranger ran after me from the bus stop while waving a blue umbrella in the air. Meanwhile, the bus driver patiently waited for twenty seconds at the light. Eventually, I caught up, grabbed my umbrella, and thanked them both loudly. In the end, I stayed completely dry and smiled all the way home.',
      writingNote: 'ตรวจดูเครื่องหมายจุลภาค (,) หลังตัวเชื่อมต้นประโยค และคุม Past Continuous / Past Simple ให้สม่ำเสมอทั้งย่อหน้า',
      speakingTopic: 'เล่าเหตุการณ์ "จุดพลิกผัน" ด้วยตัวเชื่อม 5 ตัวให้เหมือนนักเล่าเรื่อง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'วางหมุดคำเชื่อมในหัวก่อนพูด: At first... All of a sudden... Meanwhile... Eventually... In the end...',
        'ใส่จังหวะหยุดหายใจและน้ำเสียงตื่นเต้นตรง All of a sudden และน้ำเสียงโล่งอกตรง Eventually / In the end',
      ],
    },
    {
      day: 62,
      title: 'เล่าอารมณ์และความรู้สึกในเหตุการณ์อดีต (-ed vs -ing: relieved, frustrated, embarrassing)',
      objective:
        'บรรยายอารมณ์ความรู้สึกของผู้เล่าและลักษณะของสถานการณ์ในอดีตได้อย่างแม่นยำด้วยคำคุณศัพท์คู่ -ed/-ing และวลีแสดงอารมณ์',
      explanation:
        'เรื่องเล่าที่ดีไม่ได้มีแค่ "ใครทำอะไร" แต่ต้องบอกว่า **"ตอนนั้นรู้สึกยังไง"** ด้วย! จุดที่คนไทยพลาดบ่อยสุดคือคำคู่ **`-ed` vs `-ing`**:\n- **ลงท้าย `-ed` = ความรู้สึกข้างในตัวคน/สัตว์** (เช่น `I was **embarrassed**` = ฉันรู้สึกอาย/เขิน, `She felt **relieved**` = เธอรู้สึกโล่งอก, `We were **frustrated**` = พวกเรารู้สึกหงุดหงิด/อึดอัด)\n- **ลงท้าย `-ing` = ลักษณะของเหตุการณ์หรือสิ่งนั้นที่ทำให้คนอื่นรู้สึก** (เช่น `It was an **embarrassing** moment` = มันเป็นโมเมนต์ที่น่าอาย, `An **unexpected** call` = สายที่ไม่ได้คาดคิด)\nจำทริก 2 วิ: **"ฉันรู้สึก (-ed)" vs "เรื่องนั้นมันน่า... (-ing)"**! ห้ามพูดว่า *"I was very embarrassing"* เด็ดขาด เพราะจะแปลว่า "ฉันเป็นคนน่าอับอายขายหน้า" ไปเลย!',
      sound: [
        'Ending -ed Adjectives & Syllable Stress',
        'relieved /rɪˈliːvd/ · frustrated /frʌsˈtreɪ.tɪd/ · embarrassed /ɪmˈbær.əst/ · unexpected /ˌʌn.ɪkˈspek.tɪd/',
        'คำว่า relieved (/rɪˈliːvd/) ออก 2 พยางค์ (รี-ลีฟด์) ส่วน embarrassed (/ɪmˈbær.əst/) ออกเสียงท้ายเป็น /t/ ไม่ใช่ "เอ็ม-แบ-เรส-เซ็ด"!',
        'อ่านคู่เทียบ 3 คู่ให้ชัด: "It was frustrating → I felt frustrated" / "It was embarrassing → I was embarrassed" / "It was surprising → We were surprised"',
      ],
      l1: [
        'พูดว่า "I was so embarrassing" เมื่อตั้งใจบอกว่าตัวเองอาย หรือ "I am very exciting about the trip"',
        'คิดรวบยอดว่าคำคุณศัพท์ภาษาอังกฤษมีรูปเดียวเหมือนภาษาไทย (เช่น "น่าเบื่อ" กับ "เบื่อ" ใช้ปนกัน)',
        'ท่องสูตรติดปาก: คนรู้สึก → เติม -ed (tired, relieved, embarrassed, surprised) | สิ่งของ/เหตุการณ์ → เติม -ing (tiring, embarrassing, surprising)',
      ],
      vocab: [
        ['relieved', 'โล่งอก / หายกังวล', '/rɪˈliːvd/', 'feel deeply relieved', 'รู้สึกโล่งอกอย่างมาก'],
        ['frustrated', 'หงุดหงิด / ขัดใจ (ทำไม่ได้ดั่งใจ)', '/frʌsˈtreɪ.tɪd/', 'get frustrated easily', 'หงุดหงิดใจง่าย'],
        ['embarrassing', 'น่าอับอาย / ชวนเขิน', '/ɪmˈbær.ə.sɪŋ/', 'an embarrassing mistake', 'ความผิดพลาดชวนเขิน'],
        ['unexpected', 'ที่ไม่คาดคิดมาก่อน', '/ˌʌn.ɪkˈspek.tɪd/', 'an unexpected twist', 'จุดหักมุมที่คาดไม่ถึง'],
        ['awkward', 'กระอักกระอ่วน / เก้อเขิน', '/ˈɔːk.wəd/', 'an awkward silence', 'ความเงียบชวนเก้อเขิน'],
        ['laugh off', 'หัวเราะกลบเกลื่อน / ขำๆ ปล่อยผ่าน', '/lɑːf ɒf/', 'laugh off the mistake', 'หัวเราะขำๆ ให้ผ่านไป'],
      ],
      examples: [
        ['I was so embarrassed when I waved at a total stranger in the mall.', 'ฉันเขินมากตอนที่โบกมือทักคนแปลกหน้าสนิทกลางห้าง'],
        ['What an unexpected surprise to bump into you after five years!', 'ช่างเป็นเรื่องเซอร์ไพรส์ที่คาดไม่ถึงเลยที่ได้บังเอิญเจอคุณหลังจากห้าปี!'],
        ['She felt deeply relieved when the doctor said the test was normal.', 'เธอรู้สึกโล่งอกมากตอนที่หมอบอกว่าผลตรวจปกติ'],
        ['At first the printer error was frustrating, yet we laughed it off together.', 'ตอนแรกปัญหาเครื่องพิมพ์ชวนหงุดหงิดมาก แต่สุดท้ายพวกเราก็หัวเราะปล่อยผ่านไปด้วยกัน'],
      ],
      reading:
        'Last Monday morning, Mint experienced one of the most embarrassing moments of her year. While she was walking quickly into a neighborhood café, she saw a woman from behind wearing the exact same yellow jacket as her close friend Joy. Mint tapped the woman\'s shoulder and said cheerfully, "Hey, sleepyhead! Did you finish your coffee yet?" When the woman turned around, Mint froze in total shock—it was a complete stranger! There was a brief awkward silence, and Mint\'s face turned bright red. Luckily, instead of looking annoyed, the woman smiled warmly and said, "No problem! I guess I look friendly from behind." Mint felt deeply relieved and couldn\'t help laughing off her silly mistake. Later, when she told Joy about that unexpected twist, they both laughed for ten minutes straight.',
      listenQ: 'Why did Mint feel deeply relieved after tapping the stranger\'s shoulder?',
      listenA: 'Because the stranger smiled warmly instead of looking annoyed.',
      dictation: 'I felt deeply relieved when she laughed off my mistake.',
      listenNote: 'สังเกตคำว่า relieved จบด้วยเสียง /vd/ และคำว่า laughed off เชื่อม /t/ กับ off เป็น "ลาฟ-ทอฟ"',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้รูปคำคุณศัพท์ -ed / -ing ที่สลับกัน 2 จุด: "Yesterday my phone died during a call—it was really frustrated, and I felt so embarrassing!"',
          answer: 'Yesterday my phone died during a call—it was really frustrating, and I felt so embarrassed!',
          explanation: 'สถานการณ์เป็นสิ่งทำให้รู้สึกจึงใช้ frustrating (-ing) ส่วนตัวคนรู้สึกใช้ embarrassed (-ed)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้อธิบายความรู้สึกและเหตุการณ์ได้ถูกต้อง 100%?',
          answer: 'We were surprised by the unexpected gift and felt relieved to see him safe.',
          choices: [
            'We were surprising by the unexpected gift and felt relieving.',
            'We were surprised by the unexpected gift and felt relieved to see him safe.',
            'It was a surprised twist, and I felt very embarrassing.',
            'She got frustrating because her boss was awkwarded.',
          ],
          explanation: 'คนรู้สึกใช้ surprised / relieved ส่วนสิ่งของหรือเหตุการณ์ใช้ unexpected',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบก้อนคำ: When I slipped on the stairs, I tried to _____ off the awkward moment with a smile.',
          answer: 'laugh',
          explanation: 'laugh off (something) = หัวเราะกลบเกลื่อนหรือขำๆ ให้ผ่านสถานการณ์น่าอายไป',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ฉันรู้สึกโล่งอกมากเมื่อรู้ว่าไฟล์ไม่ได้หาย"',
          answer: 'I felt very relieved when I found out the file wasn\'t lost.',
          explanation: 'ใช้ I felt very relieved (-ed เพราะเป็นความรู้สึกของคน)',
        },
      ],
      writing:
        'เล่า "โมเมนต์น่าเขินหรือเหตุการณ์พลิกล็อกที่จบลงด้วยความโล่งอก" 1 เรื่อง (5–6 ประโยค) โดยใช้คำอารมณ์อย่างน้อย 4 คำ (`embarrassed/embarrassing`, `awkward`, `unexpected`, `frustrated`, `relieved`)',
      writingSample:
        'Two months ago, I had an embarrassing moment during a video call with my team. While I was explaining my plan seriously, my cat jumped onto my desk and sat right in front of the camera! At first, I felt frustrated and worried that it looked unprofessional. However, everyone started laughing warmly, which broke the awkward tension. I was truly relieved when my manager smiled and asked for the cat\'s name.',
      writingNote: 'ตรวจสอบคำท้าย -ed vs -ing ทุกตัวว่าจับคู่ "คน (-ed)" กับ "สถานการณ์ (-ing)" ถูกตำแหน่งแล้ว',
      speakingTopic: 'เล่าความรู้สึกจริงในเหตุการณ์อดีต: "ช่วงเวลาชวนเขินหรือพลิกล็อกที่จำไม่ลืม" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดใส่อารมณ์ความต่างระหว่าง -ed (ความรู้สึกในใจ) กับ -ing (ลักษณะของเหตุการณ์)',
        'ฝึกออกเสียง relieved (/rɪˈliːvd/) และ embarrassed (/ɪmˈbær.əst/) ให้ไม่เกินพยางค์',
      ],
    },
    {
      day: 63,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 9: ศิลปะการเล่าเรื่องอดีต ฉากหลัง เหตุการณ์แทรก & Dictogloss',
      objective:
        'สังเคราะห์ทักษะตลอดสัปดาห์ 9 ทั้ง Past Continuous, when/while, used to vs be/get used to, ตัวเชื่อมเรื่องเล่า, อารมณ์ -ed/-ing และฝึก Dictogloss',
      explanation:
        'ยินดีด้วยครับ! จบสัปดาห์ที่ 9 แล้ว คุณได้อัปเกรดการเล่าเรื่องจากระดับ "เรียงลำดับกริยาธรรมดา" มาเป็น **"ผู้เล่าเรื่องที่ปูฉากเป็น ใส่จุดหักมุมได้ และสื่อสารอารมณ์ชัดเจน"**\nสรุปภาพรวม 5 แกนหลักของสัปดาห์นี้:\n1) **ฉากหลัง + จุดตัด**: `was/were + V-ing` (ยาว/ต่อเนื่อง) + `when + Past Simple` (แทรกสั้น) และ `while + was/were + V-ing`\n2) **อดีตที่เลิกแล้ว**: `used to + V1` / `didn\'t use to + V1` (ห้ามเติม d หลัง didn\'t!)\n3) **ความคุ้นชิน**: `be used to` / `get used to + V-ing / Noun` (อย่าหลุดใส่ V1!)\n4) **ป้ายบอกทางเรื่องเล่า**: `At first`, `Meanwhile`, `All of a sudden`, `Eventually`, `In the end`\n5) **อารมณ์**: คนรู้สึก `-ed` (*relieved, embarrassed*) vs สถานการณ์ `-ing` (*frustrating, unexpected*)',
      sound: [
        'Week 9 Connected Storytelling Fluency Check',
        'was /wəz/ · were /wər/ · used to /ˈjuːs.tə/ · eventually /ɪˈven.tʃu.ə.li/ · relieved /rɪˈliːvd/',
        'Shadowing บทอ่านวันนี้รวดเดียว 3 รอบโดยเน้น "เสียงหยุดสั้น" หลังตัวเชื่อม และลดรูปเสียง was/were/used to',
        'เช็ก 4 จุดเวลาพูด: 1) was/were เบาแต่ไม่หาย 2) used to ไม่มีเสียง /d/ 3) คำลงท้าย -ed ไม่อ่านเกินพยางค์ 4) พักหายใจตรงรอยต่ออนุประโยค',
      ],
      l1: [
        'เมื่อต้องเล่าเรื่องยาวๆ มักสลับ used to กับ be used to ปนกัน หรือลืมเปลี่ยนกริยาแทรกหลัง when เป็น Past Simple',
        'สมองโฟกัสที่เนื้อหาเรื่องเลยปล่อยให้ความเคยชินภาษาไทยดึง Tense กลับไปเป็นรูปธรรมดา',
        'ใช้เช็กลิสต์ 3 วิหลังจบเรื่อง: ฉากกำลังทำมี was/were หรือยัง? หลัง didn\'t use to ตัด d หรือยัง? และหลัง get/be used to เติม -ing หรือยัง?',
      ],
      vocab: [
        ['memory', 'ความทรงจำ', '/ˈmem.ər.i/', 'a vivid childhood memory', 'ความทรงจำวัยเด็กที่แจ่มชัด'],
        ['struggle', 'ดิ้นรน / เจอความลำบาก', '/ˈstrʌɡ.əl/', 'struggle at first', 'ลำบากในตอนแรก'],
        ['overcome', 'เอาชนะ / ก้าวผ่าน', '/ˌəʊ.vəˈkʌm/', 'eventually overcome', 'ในที่สุดก็ก้าวผ่านไปได้'],
        ['adapt', 'ปรับตัว', '/əˈdæpt/', 'adapt to a new place', 'ปรับตัวเข้ากับสถานที่ใหม่'],
        ['scene', 'ฉาก / เหตุการณ์', '/siːn/', 'set the scene', 'ปูฉากเรื่องเล่า'],
        ['twist', 'จุดหักมุม', '/twɪst/', 'an unexpected twist', 'จุดหักมุมที่คาดไม่ถึง'],
      ],
      examples: [
        ['At first, I struggled to adapt to the chilly morning weather.', 'ตอนแรกฉันลำบากกับการปรับตัวเข้ากับอากาศหนาวช่วงเช้า'],
        ['While we were setting up the tent, an unexpected wind blew our map away.', 'ขณะที่พวกเรากำลังกางเต็นท์ ลมที่คาดไม่ถึงก็พัดแผนที่ของเราปลิวไป'],
        ['I used to feel embarrassed about making mistakes, yet now I laugh them off.', 'เมื่อก่อนฉันเคยรู้สึกเขินเวลาทำผิดพลาด แต่ตอนนี้ฉันหัวเราะขำๆ ปล่อยผ่านได้แล้ว'],
        ['Eventually, she got used to commuting by ferry every morning.', 'ในที่สุด เธอก็ปรับตัวให้ชินกับการเดินทางด้วยเรือข้ามฟากทุกเช้าได้'],
      ],
      reading:
        'Two years ago, Dan used to hate speaking in front of groups because he got nervous easily. He wasn\'t used to sharing his ideas aloud, and even short meetings felt frustrating. One Tuesday morning, Dan was riding the elevator to the fourth floor when the power suddenly stopped between levels. At first, he felt quite anxious inside the quiet metal box. Meanwhile, two coworkers inside stayed calm and started telling funny stories about their childhoods. All of a sudden, Dan joined the conversation and forgot his fear completely! When the technician opened the door twenty minutes later, everyone felt relieved and laughed together. Eventually, Dan got used to speaking casually with people at work, and that unexpected elevator delay became one of his favorite memories.',
      listenQ: 'What helped Dan forget his fear while they were stuck in the elevator?',
      listenA: 'His two coworkers stayed calm and started telling funny stories about their childhoods.',
      dictation: 'Eventually, Dan got used to speaking casually with people at work.',
      listenNote: 'ฝึก Dictogloss ด้วยการฟังบทอ่านแล้วจับโครงสร้างหลัก: used to / was riding... when / At first / Meanwhile / All of a sudden / relieved / got used to',
      drills: [
        {
          kind: 'dictogloss',
          prompt: 'ฟังเสียงประโยคจากบทอ่านแล้วเลือกตัวเลือกที่เติมช่องว่างได้ถูกต้องครบถ้วน: "One Tuesday morning, Dan _____ the elevator when the power _____ between levels, and eventually he _____ speaking casually at work."',
          answer: 'was riding / suddenly stopped / got used to',
          choices: [
            'was riding / suddenly stopped / got used to',
            'rode / was stopping / used to',
            'was riding / suddenly stop / is used to',
            'had ridden / stopped / got use to',
          ],
          explanation: 'ฉากหลังใช้ was riding, เหตุการณ์แทรกสั้นใช้ stopped, และปรับตัวจนชินใช้ got used to + speaking',
          audio_text:
            'One Tuesday morning, Dan was riding the elevator to the fourth floor when the power suddenly stopped between levels. Eventually, Dan got used to speaking casually with people at work.',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้จุดพลาดรวมสัปดาห์ 9 ทั้ง 3 จุด: "When I was a kid, I didn\'t used to eat fish, and I am still getting used to cook it while my sister watching me."',
          answer: 'When I was a kid, I didn\'t use to eat fish, and I am still getting used to cooking it while my sister is watching me.',
          explanation: '1) didn\'t use to (ไม่มี d) 2) get used to + cooking (-ing) 3) while my sister is watching me (ต้องมี is หน้า V-ing)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ไวยากรณ์และความหมายของสัปดาห์ 9 ได้สมบูรณ์แบบทั้งประโยค?',
          answer: 'I used to live in a noisy alley, so I\'m used to sleeping with soft earplugs.',
          choices: [
            'I was used to live in a noisy alley, so I used to sleep with soft earplugs now.',
            'I used to live in a noisy alley, so I\'m used to sleeping with soft earplugs.',
            'While I lived there, I was often feel frustrating by the traffic.',
            'All of a sudden, the lights were going out when I read a book.',
          ],
          explanation: 'เคยอาศัย (อดีตที่เปลี่ยนไปแล้ว) = used to live + ปัจจุบันชินกับการนอนใส่ที่อุดหูแล้ว = I\'m used to sleeping',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ในขณะเดียวกัน เธอกำลังค่อยๆ ปรับตัวให้ชินกับงานใหม่ แม้ตอนแรกจะน่าหงุดหงิดนิดหน่อย"',
          answer: 'Meanwhile, she is slowly getting used to her new job, even though it was a bit frustrating at first.',
          explanation: 'ใช้ Meanwhile + is getting used to + her new job และ frustrating (-ing) สำหรับลักษณะของสถานการณ์ตอนแรก',
        },
      ],
      writing:
        'Weekly Synthesis Story (7–8 ประโยค): เขียนเล่าประสบการณ์จริงเรื่อง "สิ่งที่ฉันไม่เคยชินหรือเคยกลัวในอดีต แต่เกิดเหตุการณ์พลิกผันที่ทำให้ปรับตัวได้" โดยผสม `used to / didn\'t use to`, `was/were V-ing when V2`, `be/get used to V-ing`, ตัวเชื่อม 3 ตัว และคำอารมณ์ `-ed/-ing` 2 คำ',
      writingSample:
        'Two years ago, I didn\'t use to speak English with strangers because I always felt embarrassed about my accent. One afternoon, I was waiting at a bus stop near a temple when an elderly tourist asked me for directions. At first, my mind went completely blank, and I felt frustrated with myself. Meanwhile, the bus was approaching slowly, so I had only one minute to help him. I took a deep breath, pointed toward the river, and explained the route using short chunks. To my surprise, he understood everything and smiled warmly! After that unexpected success, I gradually got used to talking aloud without overthinking, and eventually I started enjoying every short conversation.',
      writingNote: 'เช็กครบ 5 เช็กลิสต์สัปดาห์ 9 ก่อนส่ง: ฉากหลัง (-ing) + จุดตัด (when V2) + used to + get used to (-ing) + อารมณ์ (-ed/-ing)',
      speakingTopic: 'Weekly Story Showcase: "จุดเปลี่ยนที่ทำให้ฉันปรับตัวได้สำเร็จ" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าเรื่องเดียวให้จบสมบูรณ์ใน 4 นาที แล้วบีบให้กระชับและคมขึ้นใน 3 นาที และ 2 นาที',
        'เน้นคุมเสียงเชื่อม used to (/ˈjuːs.tə/), was/were แบบลดรูป, และคำบอกอารมณ์ relieved/frustrated/embarrassed ให้คมชัด',
      ],
    },
  ]
);
