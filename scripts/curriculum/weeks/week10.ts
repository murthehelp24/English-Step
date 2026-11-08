import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 2: เล่าเรื่อง ตอบโต้ และเชื่อมความคิดในชีวิตประจำวัน';

export const WEEK10: ModuleSeed = createModule(
  {
    week: 10,
    phase: 2,
    phase_title: PHASE_TITLE,
    cefr_level: 'A2 → B1',
    title: 'Present Perfect: จุดเปลี่ยนสู่ความคิดแบบเจ้าของภาษา',
    summary:
      'เชื่อมเหตุการณ์อดีตเข้ากับปัจจุบันด้วย Present Perfect (have/has + V3), ประสบการณ์ชีวิต (ever/never), been vs gone, just/already/yet, for/since และการคุยต่อยอดด้วย Past Simple',
    focus: 'Present Perfect (have/has + V3), Experience, just/already/yet, for/since, Perfect vs Past Simple',
  },
  [
    {
      day: 64,
      title: 'เข้าใจแก่นแท้ Present Perfect (have/has + V3): สะพานเชื่อมอดีตสู่ปัจจุบัน',
      objective:
        'ใช้ have/has + V3 พูดถึงเหตุการณ์ที่เกิดขึ้นแล้วและมีผลลัพธ์เชื่อมโยงถึงตอนนี้ พร้อมจดจำกริยาช่อง 3 ชุดแรกที่พบบ่อย',
      explanation:
        'คนไทยมักงงว่าทำไมภาษาอังกฤษต้องมี **Present Perfect (`have / has + V3`)** ทั้งที่เกิดไปแล้วเหมือน Past Simple! หัวใจอยู่ที่ **"สะพานเชื่อมถึงปัจจุบัน"**:\n- **Past Simple** = จบขาดในอดีต (เช่น `I lost my keys yesterday.` เน้นเล่าว่าเกิดขึ้นเมื่อวาน)\n- **Present Perfect** = เกิดขึ้นแล้ว **แต่ผลของมันยังมีอยู่ตรงหน้าตอนนี้!** เช่น `I**\'ve lost** my keys.` (ตอนพูดนี้ฉันยังเข้าห้องไม่ได้เลย!) หรือ `Someone **has broken** the mug.` (ตอนนี้เศษแก้วแตกอยู่ตรงหน้า!)\nจำคู่ประธานให้แม่น: `I / you / we / they` ใช้ **`have (\'ve)`** ส่วน `he / she / it` ใช้ **`has (\'s)`** (ปฏิเสธเป็น `haven\'t / hasn\'t`) และมาเริ่มเก็บ **V3 ชุดที่ 1** ที่ไม่เหมือน V2: *do–did–**done**, see–saw–**seen**, write–wrote–**written**, take–took–**taken**, break–broke–**broken**, forget–forgot–**forgotten**, give–gave–**given**, eat–ate–**eaten***!',
      sound: [
        'Contractions \'ve / \'s & Weak have /həv/',
        'I\'ve /aɪv/ · she\'s /ʃiːz/ · broken /ˈbrəʊ.kən/ · forgotten /fəˈɡɒt.ən/',
        'เวลาพูดเร็ว เจ้าของภาษาแทบไม่พูดคำเต็มว่า "ไอ แฮฟ ลอสต์" แต่มักเชื่อมสั้นเป็น "ไอฟ-ลอสต์" (/aɪv lɒst/) และ "ชีซ-ดัน-อิท" (/ʃiːz ˈdʌn ɪt/)',
        'ฝึกพูด 5 ก้อนคำแบบลดรูป: I\'ve done it / She\'s seen it / We\'ve broken it / He\'s taken it / They\'ve forgotten',
      ],
      l1: [
        'ใช้ Past Simple แทนทั้งหมดเมื่อพูดถึงผลในปัจจุบัน หรือพูดว่า "I have lose my wallet" (ลืมผันเป็น V3) หรือ "She have done it"',
        'ภาษาไทยใช้คำว่า "แล้ว" ต่อท้ายกริยาเดิมได้เลย เช่น "ทำหายแล้ว / ซ่อมแล้ว" จึงไม่คุ้นการสลับรูปกริยาช่อง 2 กับช่อง 3',
        'เวลาเจอผลลัพธ์ตรงหน้าตอนนี้ (กุญแจหาย โต๊ะสะอาดแล้ว ฝนหยุดตกถนนยังเปียก) ให้หยิบโครง \'ve / \'s + V3 มาใช้ทันที!',
      ],
      vocab: [
        ['repair', 'ซ่อมแซม', '/rɪˈpeər/', 'have repaired the tap', 'ซ่อมก๊อกน้ำเรียบร้อยแล้ว'],
        ['spill', 'ทำหก', '/spɪl/', 'have spilled juice', 'ทำน้ำผลไม้หก (คราบยังอยู่)'],
        ['achieve', 'ทำสำเร็จ / บรรลุ', '/əˈtʃiːv/', 'have achieved a goal', 'ทำเป้าหมายสำเร็จแล้ว'],
        ['tidy', 'จัดเก็บให้เรียบร้อย', '/ˈtaɪ.di/', 'have tidied the kitchen', 'จัดห้องครัวเรียบร้อยแล้ว'],
        ['notice', 'สังเกตเห็น', '/ˈnəʊ.tɪs/', 'have noticed a difference', 'สังเกตเห็นความเปลี่ยนแปลง'],
        ['misplace', 'วางลืมไว้ผิดที่', '/ˌmɪsˈpleɪs/', 'have misplaced my badge', 'วางบัตรประจำตัวลืมไว้ที่ไหนไม่รู้'],
      ],
      examples: [
        ['Look at the floor—someone has spilled iced coffee near the door.', 'ดูพื้นสิ มีคนทำกาแฟเย็นหกไว้ใกล้ประตู'],
        ['I have forgotten my laptop charger at home today.', 'วันนี้ฉันลืมสายชาร์จโน้ตบุ๊กไว้ที่บ้าน'],
        ['Good news! The mechanic has repaired our car, so we can drive tonight.', 'ข่าวดี! ช่างซ่อมรถให้พวกเราเสร็จแล้ว คืนนี้เราขับออกไปได้'],
        ['She hasn\'t written the summary yet because her screen froze.', 'เธอยังไม่ได้เขียนสรุปเลยเพราะหน้าจอค้าง'],
      ],
      reading:
        'Beam unlocks his apartment door after work on Wednesday evening and stops in total surprise. Everything inside looks completely different! His roommate Jack had a free afternoon earlier and clearly spent it well. Someone has tidied the messy living room, washed every bowl in the sink, and wiped the kitchen table until it shines. Even better, Jack has repaired the dripping bathroom tap that bothered them all week! On the kitchen counter, Beam spots a yellow sticky note next to a bowl of fresh mangoes. "I\'ve gone out for groceries and I\'ve taken the trash downstairs," the note says. "Also, I\'ve bought sweet mangoes for tonight—help yourself!" Beam smiles happily because his tiring weekday evening has suddenly turned bright.',
      listenQ: 'What household problem did Jack repair in the bathroom?',
      listenA: 'He repaired the dripping bathroom tap.',
      dictation: 'Someone has tidied the messy living room.',
      listenNote: 'สังเกตเสียงเชื่อม "has tidied" (/həz ˈtaɪ.did/) ที่ has ถูกลดเสียงเบา แล้วไปลง stress ชัดที่ tidied และ living room',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยค Present Perfect ที่ใช้ V2 แทน V3 และผิดประธาน: "Look! My sister have broke my favorite cup and she has forgot to tell me."',
          answer: 'Look! My sister has broken my favorite cup and she has forgotten to tell me.',
          explanation: 'My sister (เอกพจน์) ต้องใช้ has + V3 (broken) และ forget ช่อง 3 คือ forgotten',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้รูปกริยาช่อง 3 (V3) หลัง have/has ได้ถูกต้องทุกคำ?',
          answer: 'We have eaten lunch, taken notes, and spoken with the team.',
          choices: [
            'We have ate lunch, took notes, and spoke with the team.',
            'We have eaten lunch, taken notes, and spoken with the team.',
            'We has eaten lunch, taked notes, and spoken with the team.',
            'We have eat lunch, taken notes, and speaked with the team.',
          ],
          explanation: 'หลัง We have ต้องตามด้วยกริยาช่อง 3 ทั้งหมด: eaten, taken, spoken',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำกริยาช่อง 3 ของ write ให้ถูกต้อง: I\'m relieved—Pim has _____ (write) down all the customer names clearly.',
          answer: 'written',
          explanation: 'ช่อง 3 ของ write คือ written (ตัว t สองตัว)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ฉันวางบัตรประจำตัวลืมไว้ที่ไหนไม่รู้ ตอนนี้เลยเข้าออฟฟิศไม่ได้"',
          answer: 'I have misplaced my ID badge, so I cannot enter the office right now.',
          explanation: 'ใช้ I have misplaced (เหตุการณ์เกิดแล้วและส่งผลให้เข้าออฟฟิศไม่ได้ในตอนนี้)',
        },
      ],
      writing:
        'เขียน 5 ประโยคบอกสิ่งที่คุณหรือคนในบ้าน "เพิ่งทำเสร็จแล้ว/ผลลัพธ์ยังเห็นอยู่ตอนนี้" โดยใช้ `I\'ve / She\'s / We\'ve + V3` และใช้กริยาช่อง 3 เปลี่ยนรูปอย่างน้อย 3 ตัว (`done, eaten, broken, written, forgotten, seen, taken`)',
      writingSample:
        'Today has been a productive morning at home. I\'ve tidied my study desk and I\'ve taken out all the old papers. My mom has prepared warm soup in the kitchen, and we\'ve already eaten breakfast together. Unfortunately, I\'ve forgotten where I placed my house keys, so I\'m checking my jacket pockets now.',
      writingNote: 'ตรวจสอบกริยาหลัง have/has ทุกตัวว่าเป็น V3 จริงๆ ไม่ใช่เผลอหยิบ V2 (เช่น wrote, broke, ate, forgot) มาใส่',
      speakingTopic: 'รายงานความเรียบร้อยรอบตัวตอนนี้ด้วย have/has + V3 (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดถึง 5 สิ่งที่เสร็จแล้ววันนี้และผลที่เห็นอยู่ตรงหน้า (โต๊ะสะอาด อาหารทำแล้ว งานเขียนแล้ว ฯลฯ)',
        'ใช้รูปย่อ \'ve และ \'s ให้ไหลลื่น ไม่ต้องเน้นเสียง have/has เต็มคำทุกครั้ง',
      ],
    },
    {
      day: 65,
      title: 'ถาม-เล่าประสบการณ์ชีวิต (Have you ever...?) และแยกขาด been to vs gone to',
      objective:
        'ถามและตอบเรื่องประสบการณ์ชีวิตด้วย Have you ever + V3...? และ I\'ve never + V3 พร้อมแยกความหมายระหว่าง have been to กับ have gone to ได้แม่นยำ',
      explanation:
        'เวลาอยากถามว่า **"ในชีวิตนี้เคยลอง / เคยไป...บ้างไหม?"** ไม่ว่าจะเมื่อไหร่ก็ตาม ให้ใช้สูตร **`Have you ever + V3...?`** เช่น `Have you ever tried durian?` หรือ `Have you ever missed a flight?` เวลาปฏิเสธว่า "ไม่เคยเลย" ใช้ **`I\'ve never + V3`** (ห้ามใส่ `not` ซ้อนกับ `never` นะครับ!)\nและนี่คือคู่กับดักที่สำคัญที่สุดของบทนี้:\n- **`have been to + สถานที่`** = **เคยไปมาแล้วและกลับมาแล้ว** (`She has been to Chiang Rai twice.` = เธอเคยไปเชียงรายมาแล้ว 2 ครั้ง ตอนนี้ไม่ได้อยู่ที่นั่น)\n- **`have gone to + สถานที่`** = **ออกเดินทางไปแล้ว และตอนนี้ยังอยู่ที่นั่น / ยังไม่กลับมา!** (`Where\'s Dan? — He\'s gone to the bank.` = แดนออกไปธนาคาร ตอนนี้ไม่อยู่ที่นี่!)',
      sound: [
        'Sentence Rhythm in Have you ever...? /həv jʊ ˈev.ər/',
        'ever /ˈev.ər/ · never /ˈnev.ər/ · scuba diving /ˈskuː.bə ˌdaɪ.vɪŋ/ · abroad /əˈbrɔːd/',
        '"Have you ever been to...?" เวลาพูดเร็วคนอังกฤษ/อเมริกันเชื่อมเป็น "แฮฟ-ยู-เอฟ-เวอะ-บิน-ทู..." โดยเน้นเสียงคำว่า EV-er และชื่อสถานที่หรือกริยาหลัก',
        'ฝึกถาม-ตอบ 4 คู่เร็วๆ: "Have you ever been to Phuket?" → "Yes, I\'ve been there once." / "No, I\'ve never been there."',
      ],
      l1: [
        'พูดว่า "Ever you go to Japan?" หรือ "I ever went to Osaka" หรือ "I haven\'t never tried it" (ซ้อนปฏิเสธ) หรือ "I have gone to Korea three times"',
        'แปลคำว่า "เคย" จากภาษาไทยตรงๆ เป็น ever แล้ววางไว้ต้นประโยคโดยไม่มี have + V3 และคิดแค่ว่า go ช่อง 3 คือ gone เลยเอา gone to มาใช้เล่าประสบการณ์',
        'จำง่ายๆ: ถ้ายังกลับมานั่งคุยกันอยู่ตรงนี้ ต้องใช้ been to เสมอ! ใช้ gone to เฉพาะตอนถามหาคนที่ไม่อยู่ตรงนี้แล้วออกไปแล้ว',
      ],
      vocab: [
        ['experience', 'ประสบการณ์', '/ɪkˈspɪə.ri.əns/', 'an unforgettable experience', 'ประสบการณ์ที่ลืมไม่ลง'],
        ['abroad', 'ในต่างประเทศ', '/əˈbrɔːd/', 'travel abroad', 'เดินทางไปต่างประเทศ'],
        ['camping', 'การตั้งแคมป์', '/ˈkæm.pɪŋ/', 'go camping in the hills', 'ไปตั้งแคมป์บนภูเขา'],
        ['spicy', 'เผ็ด / รสจัด', '/ˈspaɪ.si/', 'try extra-spicy food', 'ลองอาหารรสเผ็ดจัด'],
        ['ferry', 'เรือข้ามฟาก', '/ˈfer.i/', 'ride a night ferry', 'นั่งเรือข้ามฟากตอนกลางคืน'],
        ['missing', 'ที่หายไป / ไม่อยู่', '/ˈmɪs.ɪŋ/', 'go missing', 'หายตัวไป / หาไม่เจอ'],
      ],
      examples: [
        ['Have you ever traveled abroad on your own?', 'คุณเคยเดินทางไปต่างประเทศคนเดียวไหม?'],
        ['I have never ridden a horse before, though I would love to try.', 'ฉันไม่เคยขี่ม้ามาก่อนเลย แต่ก็อยากลองสักครั้ง'],
        ['Mint isn\'t at her desk—she\'s gone to the post office to mail a parcel.', 'มิ้นต์ไม่อยู่ที่โต๊ะ เธอออกไปที่ไปรษณีย์เพื่อส่งพัสดุ (ยังไม่กลับมา)'],
        ['Our team has been to Krabi twice for company retreats.', 'ทีมของเราเคยไปกระบี่มาแล้วสองครั้งสำหรับทริปพักผ่อนของบริษัท'],
      ],
      reading:
        'At lunch in the office pantry, Noah and Kwan start talking about memorable travel experiences. "Have you ever been to the northern mountains during winter?" asks Kwan. "Yes, I\'ve been to Mae Hong Son once, and the morning fog was magical," Noah replies. "What about you? Have you ever gone camping in a national park?" Kwan laughs and shakes her head. "Actually, I\'ve never slept in a tent in my life! I love nature, though I\'ve never felt brave enough around insects." Suddenly, Noah looks around and asks, "Hey, where is Pete? We wanted to invite him for coffee." Kwan checks her chat and answers, "Oh, Pete\'s gone to the clinic near the station. He\'ll be back around two o\'clock."',
      listenQ: 'Where is Pete right now, and when will he come back?',
      listenA: 'He has gone to the clinic near the station, and he will be back around two o\'clock.',
      dictation: 'I have never slept in a tent in my life.',
      listenNote: 'จับเสียงปฏิเสธ "never" (/ˈnev.ər/) ให้ชัด—ไม่เติม not หน้า never และเชื่อม "in my life" ตอนจบประโยคให้นุ่มนวล',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคเรื่องประสบการณ์ที่ผิด 2 จุด: "I ever went to Chiang Rai twice, and I haven\'t never seen snow."',
          answer: 'I have been to Chiang Rai twice, and I have never seen snow.',
          explanation: '1) เล่าประสบการณ์ที่ไปแล้วกลับมาแล้วใช้ have been to (ไม่ใช้ I ever went) 2) never เป็นปฏิเสธในตัว ห้ามใส่ not ซ้อนเป็น haven\'t never',
        },
        {
          kind: 'choice',
          prompt: 'สถานการณ์: เพื่อนโทรมาถามหาพี่สาวคุณที่ตอนนี้ขับรถออกไปซูเปอร์มาร์เก็ตเมื่อ 10 นาทีที่แล้วยังไม่กลับ คุณควรตอบว่าอย่างไร?',
          answer: 'She\'s gone to the supermarket, so she isn\'t home right now.',
          choices: [
            'She\'s been to the supermarket, so she isn\'t home right now.',
            'She\'s gone to the supermarket, so she isn\'t home right now.',
            'She ever went to the supermarket ten minutes ago.',
            'She has went to the supermarket right now.',
          ],
          explanation: 'ออกไปแล้วตอนนี้ยังไม่กลับมาใช้ has gone to (\'s gone to)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบคำถาม: Have you _____ eaten street food in Yaowarat at midnight?',
          answer: 'ever',
          explanation: 'ถามประสบการณ์ว่า "เคย...ไหม" ใช้ Have you ever + V3...?',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "คุณเคยขี่ช้างหรือยัง? — ไม่เลย ฉันไม่เคยลองมาก่อน"',
          answer: 'Have you ever ridden an elephant? — No, I have never tried it before.',
          explanation: 'ride ช่อง 3 คือ ridden และตอบปฏิเสธประสบการณ์ด้วย I have never tried...',
        },
      ],
      writing:
        'เขียน "รายการประสบการณ์ชีวิต" ของคุณ 5 ประโยค: บอก 2 อย่างที่เคยทำ (`I\'ve been to... / I\'ve tried...`), 2 อย่างที่ไม่เคยทำเลย (`I\'ve never...`) และ 1 ประโยคสมมุติบอกคนรอบตัวที่ตอนนี้ออกไปข้างนอก (`...has gone to...`)',
      writingSample:
        'In my life, I\'ve been to three different islands in southern Thailand, and I\'ve swum near colorful coral reefs. I\'ve also cooked traditional curry from scratch for my family. However, I\'ve never flown in a small helicopter, and I\'ve never seen real snow yet. Right now, my dad isn\'t in the living room—he\'s gone to the local bakery to pick up fresh bread.',
      writingNote: 'เช็กให้มั่นใจว่าประโยคประสบการณ์ "ไปแล้วกลับมาแล้ว" ใช้ been to ไม่ใช่ gone to และไม่มี not ซ้อนหน้า never',
      speakingTopic: 'เกมถาม-ตอบประสบการณ์ชีวิต "Have you ever...?" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ตั้งคำถาม Have you ever...? ออกเสียงดังๆ แล้วตอบตัวเองด้วย "Yes, I\'ve..." หรือ "No, I\'ve never..." อย่างน้อย 6 รอบ',
        'แทรกตัวอย่างแยก been to (เคยไปมาแล้ว) กับ gone to (ออกไปแล้วตอนนี้ไม่อยู่) อย่างน้อยอย่างละ 1 ประโยค',
      ],
    },
    {
      day: 66,
      title: 'ข่าวสดและงานที่เพิ่งเสร็จ (just, already, yet) พร้อมตำแหน่งคำที่ถูกต้อง',
      objective:
        'ใช้ just, already และ yet กับ Present Perfect เพื่อบอกข่าวที่เพิ่งเกิด งานที่ทำเสร็จก่อนคาด หรือถามสิ่งที่ยังค้างอยู่ได้อย่างถูกต้องทั้งตำแหน่งและความหมาย',
      explanation:
        'เมื่อคุยกันเรื่องข่าวด่วน งานบ้าน หรืออัปเดตงานออฟฟิศ 3 คำนี้ช่วยให้ภาษาคุณฟังดูเหมือนเจ้าของภาษามากๆ:\n1) **`just`** ("เพิ่งจะ..." ไม่กี่นาที/วินาทีที่ผ่านมา): วางไว้ **ระหว่าง `have/has` กับ `V3`** ในประโยคบอกเล่า เช่น `I**\'ve just arrived** at the café.`\n2) **`already`** ("เรียบร้อยแล้ว / เร็วกว่าที่คิด"): มักวาง **ระหว่าง `have/has` กับ `V3`** เช่น `She**\'s already sent** the file.` (บางครั้งวางท้ายประโยคเพื่อเน้นความประหลาดใจได้ แต่ไม่ใช้ในคำถามทั่วไปแบบสับสนกับ yet)\n3) **`yet`** ("หรือยัง?" ในคำถาม / "ยังเลย" ในประโยคปฏิเสธ): วางไว้ **ท้ายสุดของประโยค** เสมอ! เช่น `Have you eaten **yet**?` / `No, I haven\'t checked my email **yet**.` (ห้ามเอา `yet` ไปวางในประโยคบอกเล่าเด็ดขาด!)',
      sound: [
        'Weak Words & Linking in \'ve just / already / yet',
        'just /dʒʌst/ · already /ɔːlˈred.i/ · yet /jet/ · grocery /ˈɡrəʊ.sər.i/',
        'เวลาพูด "I\'ve just got here" → เสียง /t/ ท้าย just มักกลืนหายหน้าตัว g เหลือเป็น "ไอฟ-จัส-กอท-เฮียร์" และใน "Have you eaten yet?" เสียงเชื่อม "eat-ən-yet" ลงเสียงสูงตรงท้ายคำถาม',
        'ฝึกพูด 3 จังหวะ: "I\'ve JUST finished." / "We\'ve al-READ-y paid." / "Have you packed YET?"',
      ],
      l1: [
        'พูดว่า "I eat already!" (แบบไทยปนสิงคโปร์), "I haven\'t already done it", หรือวาง yet ไว้กลางประโยค "I haven\'t yet finished"',
        'จำคำแปล "แล้ว" กับ "ยัง" แบบภาษาไทยแล้วสลับตำแหน่งคำท้ายประโยคโดยไม่เปลี่ยนกริยาเป็น Present Perfect',
        'จำกล่องตำแหน่ง 3 ใบ: just & already อยู่ตรงกลาง (have + [just/already] + V3) | yet อยู่ท้ายสุดเฉพาะคำถามและปฏิเสธเท่านั้น!',
      ],
      vocab: [
        ['deliver', 'จัดส่ง / ส่งของถึงที่', '/dɪˈlɪv.ər/', 'just delivered the parcel', 'เพิ่งมาส่งพัสดุถึงที่'],
        ['unpack', 'แกะกระเป๋า / เอาของออก', '/ʌnˈpæk/', 'unpack the bags', 'เก็บของออกจากกระเป๋า'],
        ['announce', 'ประกาศ / แจ้งข่าว', '/əˈnaʊns/', 'just announced the date', 'เพิ่งประกาศวันเวลา'],
        ['grocery', 'ของชำ / ของสดเข้าบ้าน', '/ˈɡrəʊ.sər.i/', 'do the grocery shopping', 'ซื้อของเข้าบ้าน'],
        ['receipt', 'ใบเสร็จรับเงิน', '/rɪˈsiːt/', 'keep the receipt', 'เก็บใบเสร็จไว้'],
        ['reply', 'ตอบกลับ', '/rɪˈplaɪ/', 'haven\'t replied yet', 'ยังไม่ได้ตอบกลับเลย'],
      ],
      examples: [
        ['Guess what! Our flight company has just announced a new weekend discount.', 'ทายสิ! สายการบินของเราเพิ่งประกาศโปรโมชั่นสุดสัปดาห์ใหม่'],
        ['Have you unpacked your suitcase yet, or are you still resting?', 'คุณเอาของออกจากกระเป๋าเดินทางหรือยัง หรือว่ายังพักอยู่?'],
        ['Don\'t buy milk—I\'ve already put two bottles in the fridge.', 'ไม่ต้องซื้อนมแล้วนะ ฉันเอาใส่ตู้เย็นไว้สองขวดเรียบร้อยแล้ว'],
        ['Sorry, the technician hasn\'t arrived at our building yet.', 'ขอโทษด้วย ช่างซ่อมยังไม่มาถึงอาคารของเราเลย'],
      ],
      reading:
        'It is five thirty on Saturday afternoon, and three friends are preparing a small dinner party at Maya\'s apartment. Maya opens the fridge and smiles. "Nice work, guys! You\'ve already washed all the vegetables and chilled the drinks." Leo walks in from the balcony carrying two shopping bags. "I\'ve just returned from the bakery with warm garlic bread," he says happily. "By the way, has the delivery rider dropped off the dessert yet?" Maya checks her phone and laughs. "Not yet! He\'s still three minutes away on the map." Meanwhile, Ploy calls out from the living room: "Hey, have you two set up the extra chairs yet? Our first guests are already walking up the stairs!" Everyone quickly grabs a chair, feeling excited for a fun night.',
      listenQ: 'What has Leo just brought back from the bakery?',
      listenA: 'He has just brought back warm garlic bread.',
      dictation: 'Have you set up the extra chairs yet?',
      listenNote: 'สังเกตคำถาม Yes/No ลงท้ายด้วย "yet" เสียงหางประโยคจะยกสูงขึ้น (rising intonation) และเสียง /t/ ของ yet ออกชัดพอดีคำ',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ใช้ just/already/yet ผิดตำแหน่งและผิด Tense 2 จุด: "Don\'t worry, I pay the water bill already, and Sam hasn\'t yet called me."',
          answer: 'Don\'t worry, I have already paid the water bill, and Sam hasn\'t called me yet.',
          explanation: '1) ใช้ Present Perfect พร้อม already วางหลัง have เป็น I have already paid 2) yet ต้องวางท้ายสุดของประโยคปฏิเสธ',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้คำว่า just, already หรือ yet ได้ถูกต้องทั้งไวยากรณ์และความหมาย?',
          answer: 'Look at the wet paint—someone has just painted this bench!',
          choices: [
            'Look at the wet paint—someone has just painted this bench!',
            'Look at the wet paint—someone has painted yet this bench!',
            'Have you already finished not your lunch?',
            'I didn\'t check my messages just.',
          ],
          explanation: 'just วางระหว่าง has กับ V3 (has just painted) เพื่อบอกเหตุการณ์ที่เพิ่งเกิดขึ้นหมาดๆ จนสีที่ม้านั่งยังไม่แห้ง',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ถูกต้อง (just / already / yet): Have you received the parcel from Chiang Mai _____?',
          answer: 'yet',
          explanation: 'วางท้ายคำถามเพื่อถามว่า "...หรือยัง?" ต้องใช้ yet เท่านั้น',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "พวกเราเพิ่งมาถึงสนามบิน แต่ยังไม่ได้เช็กอินเลย"',
          answer: 'We have just arrived at the airport, but we haven\'t checked in yet.',
          explanation: 'ใช้ We have just arrived... และ haven\'t checked in yet (วาง yet ท้ายปฏิเสธ)',
        },
      ],
      writing:
        'เขียนแชทอัปเดตเตรียมงาน/เตรียมทริปกับเพื่อน 6 ข้อความสลับกันไป-มา โดยใช้ `just`, `already` และ `yet` ให้ครบทั้ง 3 คำ (อย่างน้อยคำละ 1–2 ครั้ง)',
      writingSample:
        'A: Hey! Have you booked the van for Sunday yet?\nB: Yes, I\'ve already confirmed it with the driver this morning!\nA: Awesome! I\'ve just packed the snacks and cold drinks in the cooler.\nB: Wait, have you checked the weather forecast yet?\nA: Not yet—let me check right now. Oh, good news! The sunny forecast has just updated for Sunday morning.\nB: Perfect, we\'re ready to go!',
      writingNote: 'ตรวจสอบตำแหน่งของ just / already (หน้า V3) และ yet (ท้ายประโยคคำถาม/ปฏิเสธเท่านั้น)',
      speakingTopic: 'อัปเดตงานค้างและข่าวสดในวันหยุดด้วย just / already / yet (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ไล่เช็กลิสต์ของวันนี้ออกเสียงดัง: อะไรที่เพิ่งทำเสร็จ (I\'ve just...), อะไรที่เรียบร้อยแล้ว (I\'ve already...), และอะไรที่ยังไม่ได้ทำ (I haven\'t... yet)',
        'ลองตั้งคำถาม Have you... yet? 3 ข้อพร้อมตอบสั้นๆ แบบธรรมชาติ (Yes, already! / No, not yet.)',
      ],
    },
    {
      day: 67,
      title: 'บอกความต่อเนื่องจนถึงวันนี้ด้วย for vs since (แก้กับดัก "since 3 years" และ "I live since 2020")',
      objective:
        'ใช้ Present Perfect ร่วมกับ for + ระยะเวลา และ since + จุดเริ่มต้น เพื่อเล่าเรื่องที่เริ่มในอดีตและยังดำเนินมาถึงปัจจุบันโดยไม่หลุดใช้ Present Simple หรือ for...ago',
      explanation:
        'นี่คือ **จุดพลาดอันดับ 1 ของผู้เรียนไทย**! พอจะบอกว่า *"ฉันอยู่กรุงเทพฯ มาตั้งแต่ปี 2020"* คนไทยมักเผลอพูดว่า ❌ *"I live in Bangkok since 2020"* หรือ ❌ *"I lived here for 4 years ago"* — จำกฎเหล็ก 3 ข้อนี้ให้ขึ้นใจครับ:\n1) ถ้าเริ่มในอดีตและ **ยังเป็นจริงมาจนถึงวินาทีนี้** ต้องใช้ **Present Perfect (`have/has + V3`)** ห้ามใช้ Present Simple (`live/work/know`)!\n   ✅ `I **have lived** in Bangkok since 2020.`\n   ✅ `We **have known** each other for six years.`\n2) **`for` + ช่วงเวลา/ความยาว (นับจำนวนได้)**: `for ten minutes`, `for three days`, `for five years`, `for a long time` (**ห้ามใส่ `ago` ต่อท้าย `for` เด็ดขาด!**)\n3) **`since` + จุดเริ่มต้นบนปฏิทิน/นาฬิกา**: `since 2020`, `since Monday`, `since 8 a.m.`, `since I graduated`',
      sound: [
        'Stress on Time Phrases & Weak for /fər/',
        'since /sɪns/ · graduate /ˈɡrædʒ.u.eɪt/ · neighbor /ˈneɪ.bər/ · regular /ˈreɡ.jə.lər/',
        'เวลาพูด "I\'ve worked here for five years" คำว่า for ลดเสียงเป็น /fər/ ("เฟอะ-ไฟฟ์-เยียร์ซ") ส่วนเสียง /s/ ท้าย since (/sɪns/) ต้องออกชัดไม่ให้เพี้ยนเป็น "ซิน"',
        'ฝึกพูดคำถามยอดนิยม: "How long have you lived here?" → "I\'ve lived here for five years / since twenty twenty."',
      ],
      l1: [
        'พูดว่า "I know him since high school", "I am living here for 3 years", หรือ "She has worked here for 2 years ago"',
        'แปลตรงตัวจากภาษาไทย "ฉันอยู่ที่นี่มา 5 ปีแล้ว / ตั้งแต่ปี..." โดยใช้กริยาปัจจุบัน (live/know/am) และสับสนคำว่า "มาแล้ว" เลยเติม ago ต่อท้าย',
        'ท่อง 2 สูตรตายตัว: have/has + V3 + for + [จำนวนเวลาไม่มี ago] | have/has + V3 + since + [จุดเริ่มต้น]',
      ],
      vocab: [
        ['duration', 'ระยะเวลา', '/djʊəˈreɪ.ʃən/', 'for a short duration', 'เป็นระยะเวลาสั้นๆ'],
        ['childhood', 'วัยเด็ก', '/ˈtʃaɪld.hʊd/', 'since early childhood', 'ตั้งแต่สมัยเด็กเล็ก'],
        ['neighborhood', 'ย่านชุมชน', '/ˈneɪ.bə.hʊd/', 'live in this neighborhood', 'อาศัยอยู่ในย่านนี้'],
        ['operate', 'เปิดให้บริการ / ดำเนินกิจการ', '/ˈɒp.ər.eɪt/', 'operate since 2018', 'เปิดให้บริการมาตั้งแต่ปี 2018'],
        ['customer', 'ลูกค้า', '/ˈkʌs.tə.mər/', 'a regular customer', 'ลูกค้าประจำ'],
        ['trust', 'ความไว้วางใจ / เชื่อใจ', '/trʌst/', 'trust each other for years', 'ไว้ใจกันมาหลายปี'],
      ],
      examples: [
        ['How long have you owned this tiny corner coffee shop?', 'คุณเป็นเจ้าของร้านกาแฟหัวมุมเล็กๆ ร้านนี้มานานแค่ไหนแล้ว?'],
        ['My family has lived in this quiet neighborhood for twelve years.', 'ครอบครัวของฉันอาศัยอยู่ในย่านที่เงียบสงบนี้มาสิบสองปีแล้ว'],
        ['We have known each other since we started university in 2019.', 'พวกเรารู้จักกันมาตั้งแต่เริ่มเข้ามหาวิทยาลัยในปี 2019'],
        ['Auntie Noi has sold fresh coconut pancakes here since early morning.', 'ป้าน้อยขายขนมครกสดที่นี่มาตั้งแต่เช้าตรู่แล้ว'],
      ],
      reading:
        'At the corner of Soi Ari, a cozy green café called Mint Cup has operated since 2018. Its owner, Pim, has loved roasting coffee beans for more than a decade. Before opening her shop, she worked at a small roastery in Chiang Mai, and she has used those same local beans ever since. Most people in the neighborhood know her well because she has welcomed regular customers every morning for nearly eight years. "My closest friend Joy has helped me design every seasonal menu since day one," Pim explains while pouring steamed milk. Even though two big chain cafés opened nearby last year, Pim\'s warm shop hasn\'t lost a single loyal customer. For years, neighbors have called it their second living room.',
      listenQ: 'How long has Pim welcomed regular customers at Mint Cup?',
      listenA: 'For nearly eight years (since 2018).',
      dictation: 'We have known each other since we started university.',
      listenNote: 'ระวังคำว่า known (/nəʊn/) อย่าหลุดพูดเป็น know และออกเสียงเชื่อม "each other" เป็น "อี-ชัท-เธอร์"',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้จุดพลาดคู่ของคนไทยทั้ง 2 จุดในประโยคเดียว: "I live in Nonthaburi since five years ago, and I know my neighbor since 2021."',
          answer: 'I have lived in Nonthaburi for five years, and I have known my neighbor since 2021.',
          explanation: '1) ใช้ Present Perfect (have lived / have known) ไม่ใช้ Present Simple 2) นับจำนวน 5 ปีใช้ for five years (ห้ามใส่ since และ ago ซ้อนกัน)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดจับคู่ Tense กับ for / since ได้ถูกต้องสมบูรณ์?',
          answer: 'How long has your sister had that laptop? — She has had it since last August.',
          choices: [
            'How long does your sister have that laptop? — She has it since last August.',
            'How long has your sister had that laptop? — She has had it for last August.',
            'How long has your sister had that laptop? — She has had it since last August.',
            'How long did your sister had that laptop? — She had it since last August ago.',
          ],
          explanation: 'ถามระยะเวลาถึงปัจจุบันใช้ How long has... had...? และตอบจุดเริ่มต้นเดือนสิงหาคมปีก่อนใช้ since last August',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำว่า for หรือ since ให้ถูกต้อง: I haven\'t eaten street-style pad thai _____ nearly three months!',
          answer: 'for',
          explanation: 'nearly three months เป็นระยะเวลา (นับเป็นจำนวนเดือน) จึงใช้ for',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "พวกเราเรียนภาษาอังกฤษกันมาตั้งแต่เดือนมกราคมแล้ว"',
          answer: 'We have studied English since January.',
          explanation: 'ใช้ We have studied (หรือ have been studying) + since January (จุดเริ่มต้น)',
        },
      ],
      writing:
        'เขียนแนะนำสิ่งที่ต่อเนื่องมาจนถึงวันนี้ 5 ประโยค เกี่ยวกับที่อยู่อาศัย งาน/การเรียน เพื่อนสนิท และงานอดิเรกของคุณ โดยใช้ `How long...`, `for` และ `since` ให้ถูกทุกข้อ (ห้ามมี for...ago หรือ Present Simple เด็ดขาด!)',
      writingSample:
        'I have lived in Bangkok for four years, and I really enjoy my current neighborhood. I have worked at a small design studio since March 2023. At the office, my colleague Ton and I have been good friends since my very first week there. Outside work, I haven\'t skipped my evening walk for two weeks! Also, I have kept an English journal since January to track new chunks.',
      writingNote: 'เช็กกริยาทุกตัวหน้า for / since ว่าอยู่ในรูป have/has + V3 แล้ว และไม่มีคำว่า ago ปนอยู่หลัง for',
      speakingTopic: 'ตอบคำถาม "How long have you...?" ใน 4 มุมชีวิตของคุณ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดครบ 4 เรื่อง: 1) อาศัยอยู่ที่นี่มานานแค่ไหน 2) รู้จักเพื่อนสนิทตั้งแต่เมื่อไหร่ 3) ทำงาน/เรียนสายนี้มานานเท่าไหร่ 4) มีของรักหรือความชอบอะไรที่ทำมานานแล้ว',
        'สลับใช้ทั้ง for + จำนวนเวลา และ since + จุดเริ่มต้น โดยไม่มีคำว่า ago หลุดออกมาคู่กับ for',
      ],
    },
    {
      day: 68,
      title: 'แยกขาด Present Perfect vs Past Simple: เวลาเปิดกว้าง vs เวลาปิดจบในอดีต',
      objective:
        'เลือกใช้ Present Perfect หรือ Past Simple ได้อย่างแม่นยำตามเส้นเวลา: ช่วงเวลาที่ยังไม่จบ/ไม่ระบุเวลา vs ช่วงเวลาที่ปิดจบแล้วในอดีต',
      explanation:
        'บทนี้คือตัวตัดสินว่าคุณคิดแบบภาษาอังกฤษได้จริงหรือยัง! ให้ถามตัวเองเรื่อง **"หน้าต่างของเวลา"**:\n- **หน้าต่างปิดแล้ว (Finished Time)** → ใช้ **Past Simple (`V2 / didn\'t + V1`) เท่านั้น!**\n  คำบอกเวลาปิดตาย: *yesterday, last night, last week, two days ago, in 2021, when I was a student*\n  ❌ ห้ามพูด *I have seen him yesterday.* → ✅ ต้องพูด `I **saw** him yesterday.`\n- **หน้าต่างยังเปิดอยู่ / ไม่ได้ระบุเวลา (Open / Unfinished Time)** → ใช้ **Present Perfect (`have/has + V3`)**\n  คำบอกเวลาที่ยังไม่จบตอนนี้: *today, this week, this month, so far, recently, in my life*\n  ✅ `I **have drunk** two cups of coffee **this morning**.` (ถ้าตอนนี้ยังเป็นตอนเช้าอยู่! แต่ถ้าตอนเย็นมาเล่าเรื่องเช้านี้ที่จบไปแล้ว ก็ใช้ `I drank two cups this morning` ได้เลย!)',
      sound: [
        'Clear Tense Contrast: Did you /dɪdʒə/ vs Have you /həvjə/',
        'recently /ˈriː.sənt.li/ · so far /səʊ fɑːr/ · schedule /ˈʃed.juːl/ · cancel /ˈkæn.səl/',
        'แยกจังหวะหัวประโยคให้ไว: "Did-jə SEE him yesterday?" (Past Simple) vs "Həv-jə SEEN him today?" (Present Perfect)',
        'ฝึกพูดประโยคคู่เทียบ 3 คู่: "I lost it yesterday / I\'ve lost it today" · "She called last night / She hasn\'t called this week"',
      ],
      l1: [
        'พูดว่า "I have met her two weeks ago" หรือ "Did you finish your lunch today?" ในบริบทที่ยังไม่จบมื้อ',
        'เห็นว่าเป็นเรื่องในอดีตก็ใส่ have + V3 ผสมกับคำว่า yesterday / last year / ago',
        'จำกฎเหล็ก 1 วินาที: เมื่อไหร่มีคำว่า yesterday / last ... / ... ago / in 20XX ปิดท้าย → ห้ามใส่ have/has เด็ดขาด ให้ใช้ V2 ทันที!',
      ],
      vocab: [
        ['recently', 'เมื่อเร็วๆ นี้ / ช่วงนี้', '/ˈriː.sənt.li/', 'have noticed recently', 'เพิ่งสังเกตเห็นช่วงนี้'],
        ['so far', 'จนถึงตอนนี้', '/səʊ fɑːr/', 'so far this week', 'จนถึงตอนนี้ในสัปดาห์นี้'],
        ['deadline', 'กำหนดส่งงาน', '/ˈded.laɪn/', 'meet the deadline', 'ส่งงานทันกำหนด'],
        ['postpone', 'เลื่อนออกไป', '/pəʊstˈpəʊn/', 'postpone a meeting', 'เลื่อนการประชุมออกไป'],
        ['previous', 'ก่อนหน้า / ที่ผ่านมา', '/ˈpriː.vi.əs/', 'in the previous month', 'ในเดือนก่อนหน้า'],
        ['update', 'ปรับปรุงข้อมูล / อัปเดต', '/ʌpˈdeɪt/', 'update the report', 'อัปเดตรายงาน'],
      ],
      examples: [
        ['I haven\'t checked my inbox today, because this morning was super busy.', 'วันนี้ฉันยังไม่ได้เช็กอีเมลเลย เพราะเมื่อเช้านี้ยุ่งมากจริงๆ'],
        ['Our manager postponed the team call yesterday afternoon.', 'ผู้จัดการของเราเลื่อนสายประชุมทีมไปเมื่อบ่ายวานนี้'],
        ['So far this week, I have practiced speaking aloud four times.', 'จนถึงตอนนี้ของสัปดาห์นี้ ฉันฝึกพูดออกเสียงมาแล้วสี่ครั้ง'],
        ['Two years ago, she changed careers and moved closer to her parents.', 'เมื่อสองปีก่อน เธอเปลี่ยนสายงานและย้ายมาอยู่ใกล้พ่อแม่มากขึ้น'],
      ],
      reading:
        'Sunday evening is Anna\'s favorite time to review her week with a cup of tea. Looking at her planner, she smiles because this week has been remarkably smooth so far. Since Monday, she has finished three client designs, cooked healthy lunches at home, and called her grandmother twice. However, not everything happened without surprises. Last Wednesday, a heavy storm knocked out her internet for four hours, so she had to work at a library downtown. Also, on Friday morning, her supervisor postponed their monthly review until next Tuesday. Yesterday, Anna finally took a full break, visited a quiet art gallery, and bought a wooden notebook. Now, with a few hours left in the weekend, she hasn\'t packed her work bag yet, but she feels proud of everything she has completed.',
      listenQ: 'What happened to Anna\'s internet last Wednesday?',
      listenA: 'A heavy storm knocked out her internet for four hours.',
      dictation: 'So far this week, she has finished three client designs.',
      listenNote: 'ฟังเสียงเชื่อมใน "So far this week" และตัว /s/ ท้าย has + finished + designs ที่ช่วยให้รู้ชัดว่าพูดถึงสัปดาห์ที่ยังไม่จบนี้',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ใส่ Present Perfect กับเวลาจบแล้ว 2 จุด: "I have visited Phuket last December, and my cousin has arrived three days ago."',
          answer: 'I visited Phuket last December, and my cousin arrived three days ago.',
          explanation: 'last December และ three days ago เป็นเวลาที่ปิดจบแล้วในอดีต จึงต้องใช้ Past Simple (visited / arrived) เท่านั้น',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้คู่ Tense กับคำบอกเวลาได้ถูกต้องตรงตามบริบท?',
          answer: 'Have you seen any good movies recently? — Yes, I watched one last Saturday.',
          choices: [
            'Did you see any good movies recently? — Yes, I have watched one last Saturday.',
            'Have you seen any good movies recently? — Yes, I watched one last Saturday.',
            'Have you saw any good movies this month? — Yes, I seen one yesterday.',
            'I have finished the project two hours ago, so I am free now.',
          ],
          explanation: 'recently (ช่วงนี้ถึงปัจจุบัน) ใช้ Have you seen...? และตอบระบุวันจบแล้ว last Saturday ใช้ watched (Past Simple)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำกริยาให้ถูกต้องตามหน้าต่างเวลา (meet / met / have met): So far this month, our team _____ (meet) three new partners.',
          answer: 'has met',
          explanation: 'So far this month เป็นช่วงเวลาที่ยังไม่จบและ team เป็นเอกพจน์รวมกลุ่ม ใช้ has met (หรือ have met ในแบบ British, ในที่นี้ our team ใช้ has met เป็นมาตรฐานชัดเจนที่สุด)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "จนถึงตอนนี้สัปดาห์นี้ฝนตกมาแล้วสองครั้ง แต่วันนี้ท้องฟ้าสดใส"',
          answer: 'So far this week, it has rained twice, but today the sky is clear.',
          explanation: 'So far this week (ยังไม่จบสัปดาห์) ใช้ it has rained twice',
        },
      ],
      writing:
        'เขียนสรุปสัปดาห์ของคุณ (5–6 ประโยค) โดยแบ่งให้ชัด: 3 ประโยคใช้ **Present Perfect** สำหรับสิ่งที่เกิดขึ้น "this week / so far" และ 2–3 ประโยคใช้ **Past Simple** สำหรับสิ่งที่ระบุวันเวลาชัด ("yesterday / on Wednesday / two days ago")',
      writingSample:
        'This week has gone by really fast so far! Since Monday, I have read four chapters of my book and I have saved money by cooking dinner at home. However, on Tuesday evening, I stayed late at work to solve a delivery mistake. Then, yesterday morning, I went for a long walk in the park and bought fresh fruit at the market. I haven\'t cleaned my desk yet, so I\'ll do that tonight.',
      writingNote: 'ตรวจคำบอกเวลาท้ายประโยคทุกจุด: yesterday/on Tuesday/ago → V2 เสมอ | so far/this week/since → have/has + V3',
      speakingTopic: 'แยกหน้าต่างเวลาเล่าเรื่องสัปดาห์นี้ vs เมื่อวานให้ไม่พลาด Tense (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดสลับ 2 หมวด: สิ่งที่ได้ทำไปแล้วในสัปดาห์นี้/เดือนนี้ (Present Perfect) กับเหตุการณ์เฉพาะวันในอดีต (Past Simple)',
        'ตั้งสติทุกครั้งที่พูดคำว่า yesterday, last week, ago ให้ปากสลับไปใช้ V2 ทันที',
      ],
    },
    {
      day: 69,
      title: 'คุยต่อยอดให้เป็นธรรมชาติ: เปิดประเด็นด้วย Present Perfect แล้วเจาะลึกด้วย Past Simple',
      objective:
        'ใช้รูปแบบบทสนทนาจริงของเจ้าของภาษา: เปิดหัวข้อด้วย Present Perfect (Have you ever... / I\'ve just...) แล้วสลับเข้า Past Simple ทันทีเมื่อถาม-ตอบรายละเอียด (When, Where, How)',
      explanation:
        'เคยสังเกตไหมครับว่าทำไมฝรั่งคุยกันลื่นไหลมาก? เพราะเขาใช้ **"กฎสลับเกียร์ 2 จังหวะ"** ในบทสนทนาครับ:\n- **เกียร์ 1 — เปิดประเด็น / เช็กประสบการณ์ (Present Perfect)**:\n  A: *"**Have you ever tried** authentic northern curry?"*\n  B: *"Yes, **I have**!"*\n- **เกียร์ 2 — เจาะรายละเอียด (เปลี่ยนเป็น Past Simple ทันที!)**:\n  A: *"Oh really? Where **did you eat** it, and **was it** spicy?"*\n  B: *"I **tried** it in Chiang Mai last winter! It **was** rich and slightly sweet."*\nอย่าค้างอยู่ที่ Present Perfect ทั้งบทสนทนานะครับ! พออีกฝ่ายถามว่า *When? Where? Who with? How did it feel?* เมื่อไหร่ ให้สับเกียร์เข้า **Past Simple** ทันที!',
      sound: [
        'Natural Turn-Taking & Follow-up Question Intonation',
        'authentic /ɔːˈθen.tɪk/ · recommend /ˌrek.əˈmend/ · ingredient /ɪnˈɡriː.di.ənt/ · flavor /ˈfleɪ.vər/',
        'คำถาม Wh- (Where did you go? / How was it?) เสียงปลายประโยคจะตกลง (falling intonation) ต่างจาก Yes/No อย่าง "Have you ever been there?" ที่ปลายเสียงยกขึ้น',
        'ฝึกพูดบทสนทนา 2 เกียร์คนเดียว 3 คู่ โดยเปลี่ยนน้ำเสียงให้ฟังดูอยากรู้อยากเห็นจริงเวลาถามต่อด้วย When / Where / How',
      ],
      l1: [
        'ยังถามต่อด้วย Present Perfect ซ้ำซาก ("When have you gone there?" หรือ "What have you eaten there?") หลังจากรู้แล้วว่าเหตุการณ์เกิดจบในอดีต',
        'คิดว่าจะพูดเรื่องเดียวกันก็ต้องใช้ Tense เดียวตลอดบทสนทนา ไม่กล้าสลับเกียร์กลับเป็น Past Simple',
        'จำกฎสับเกียร์: ประโยคเปิดกว้าง = Have you...? (Present Perfect) | คำถามเจาะเวลา/สถานที่/รายละเอียด (When/Where/Who/How) = Did you / Was it...? (Past Simple)!',
      ],
      vocab: [
        ['recommend', 'แนะนำ (ว่าดี/น่าลอง)', '/ˌrek.əˈmend/', 'highly recommend', 'แนะนำอย่างยิ่ง'],
        ['authentic', 'ต้นตำรับ / ของแท้ดั้งเดิม', '/ɔːˈθen.tɪk/', 'authentic street food', 'อาหารสตรีทฟู้ดรสต้นตำรับ'],
        ['ingredient', 'วัตถุดิบ / ส่วนผสม', '/ɪnˈɡriː.di.ənt/', 'fresh local ingredients', 'วัตถุดิบสดในท้องถิ่น'],
        ['atmosphere', 'บรรยากาศ', '/ˈæt.məs.fɪər/', 'a lively atmosphere', 'บรรยากาศคึกคักมีชีวิตชีวา'],
        ['worthwhile', 'คุ้มค่า (เวลา/ความพยายาม)', '/ˌwɜːθˈwaɪl/', 'totally worthwhile', 'คุ้มค่าสุดๆ'],
        ['catch up', 'อัปเดตชีวิต / คุยตามข่าว', '/kætʃ ʌp/', 'catch up over coffee', 'นั่งจิบกาแฟคุยอัปเดตชีวิตกัน'],
      ],
      examples: [
        ['Have you ever taken a hands-on cooking class? — Yes, I took one in Bangkok last April.', 'คุณเคยลงคลาสเรียนทำอาหารแบบลงมือทำเองไหม? — เคยสิ ฉันลงคลาสที่กรุงเทพฯ เมื่อเดือนเมษายนปีที่แล้ว'],
        ['I\'ve just discovered a wonderful night market behind the old library.', 'ฉันเพิ่งค้นพบตลาดกลางคืนเจ๋งๆ ที่เพิ่งเปิดหลังห้องสมุดเก่า'],
        ['Has your brother ever visited Nan? — Yes, he went there with friends two winters ago.', 'พี่ชายคุณเคยไปน่านไหม? — เคย เขาไปกับเพื่อนเมื่อสองหน้าหนาวที่แล้ว'],
        ['How did you find the atmosphere? — I loved it, and the fresh ingredients made every dish unforgettable.', 'คุณรู้สึกว่าบรรยากาศเป็นยังไงบ้าง? — ฉันชอบมากเลย และวัตถุดิบสดๆ ทำให้ทุกจานลืมไม่ลง'],
      ],
      reading:
        'Over iced matcha on Friday afternoon, Ploy and Mark catch up after a busy month. "Have you ever tried making Thai curry paste by hand?" Ploy asks curiously. "Actually, yes! I have," Mark replies with a grin. Ploy leans forward and switches straight to details: "Really? When did you learn, and was it difficult?" Mark laughs, "I took a weekend workshop in Old Town last November. At first, chopping all those fresh ingredients took forever, and my arm got quite tired! Still, the authentic flavor in the end made the effort totally worthwhile." Ploy smiles and asks, "Who did you go with, and would you recommend that school?" "I went with my sister, and yes, I\'ve already sent the link to two coworkers," Mark answers.',
      listenQ: 'When and where did Mark take the weekend cooking workshop?',
      listenA: 'He took it in Old Town last November.',
      dictation: 'When did you learn, and was it difficult?',
      listenNote: 'สังเกตจังหวะคำถาม 2 ท่อนที่เปลี่ยนเกียร์จาก Present Perfect เข้าสู่ Past Simple: "When-dɪdʒə-learn" + "wəz-ɪt-DIF-fɪ-kəlt"',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้บทสนทนาที่ลืมสับเกียร์เข้า Past Simple ในคำถามเจาะรายละเอียด: "A: Have you ever been to Koh Lanta? B: Yes, I have! A: Nice! When have you gone there, and how has the weather been?"',
          answer: 'A: Have you ever been to Koh Lanta? B: Yes, I have! A: Nice! When did you go there, and how was the weather?',
          explanation: 'ทันทีที่ถามเจาะรายละเอียด When / How ของทริปที่จบไปแล้ว ต้องเปลี่ยนเป็น Past Simple: When did you go...? และ how was the weather?',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดต่อบทสนทนาหลังคำว่า "Have you ever visited Chiang Khan?" ได้อย่างเป็นธรรมชาติที่สุด?',
          answer: 'Yes, I have! I went there three years ago and stayed beside the Mekong River.',
          choices: [
            'Yes, I have! I have gone there three years ago and stay beside the river.',
            'Yes, I did! I have been there since three years and loved it.',
            'Yes, I have! I went there three years ago and stayed beside the Mekong River.',
            'Yes, I ever visited! I was going there three years ago.',
          ],
          explanation: 'รับลูกด้วย Yes, I have! แล้วเจาะรายละเอียดทริปจบแล้วด้วย Past Simple: went / stayed',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำถามต่อยอดหลังรู้ว่าเพื่อนเคยปีนภูกระดึง: Awesome! Who _____ (you / go) up the mountain with?',
          answer: 'did you go',
          explanation: 'ถามรายละเอียดของเหตุการณ์ในอดีต ใช้ Past Simple: Who did you go...?',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "คุณเคยลองพายเรือคายัคไหม? — เคยสิ ฉันลองครั้งแรกที่กระบี่เมื่อฤดูร้อนปีที่แล้ว"',
          answer: 'Have you ever tried kayaking? — Yes, I have! I tried it for the first time in Krabi last summer.',
          explanation: 'เปิดด้วย Have you ever tried...? แล้วลงรายละเอียดเวลาที่จบแล้วด้วย I tried it ... last summer',
        },
      ],
      writing:
        'เขียนบทสนทนา "ชวนคุยเรื่องประสบการณ์น่าประทับใจ" ระหว่างเพื่อน 2 คน (8 บรรทัดสลับ A/B) โดยเริ่มต้นจากคำถาม `Have you ever...?` แล้วถาม-ตอบต่อยอดด้วยคำถาม Past Simple (`When / Where / Who / How did...?`) อย่างน้อย 3 รอบ',
      writingSample:
        'A: Have you ever joined a half-marathon or fun run?\nB: Yes, I have! I finished my first ten-kilometer run last December.\nA: No way! Where did the race take place?\nB: It started near Lumpini Park at five in the morning.\nA: How did you feel during the last two kilometers?\nB: Honestly, my legs felt heavy, yet the cheering crowd gave me huge energy.\nA: Who did you train with before race day?\nB: I practiced with my neighbor every weekend, and it was totally worthwhile!',
      writingNote: 'เช็กจุดเปลี่ยนเกียร์: หลัง "Yes, I have!" ทุกประโยคถัดไปที่เล่าเวลา/สถานที่/ความรู้สึกในครั้งนั้นควรเป็น Past Simple (V2 / did / was-were)',
      speakingTopic: 'สวมบทบาท 2 ฝ่าย: เปิดด้วย Present Perfect แล้วเจาะรายละเอียดด้วย Past Simple (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ลองเลือก 3 หัวข้อ (อาหารแปลกที่เคยกิน, เมืองที่เคยไป, กิจกรรมท้าทายที่เคยทำ) แล้วถาม-ตอบเองทั้ง 2 เกียร์',
        'คุมทำนองคำถามให้ชัด: Have you ever...? (เสียงขึ้น) vs When did you...? / How was it? (เสียงตกลง)',
      ],
    },
    {
      day: 70,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 10: Past Simple vs Present Perfect & Dictogloss Intensive',
      objective:
        'สรุปและทดสอบการใช้ Present Perfect ครบทุกมิติ (ผลปัจจุบัน, ever/never, been vs gone, just/already/yet, for/since, สลับเกียร์สู่ Past Simple) พร้อมฝึก Dictogloss เข้มข้น',
      explanation:
        'ครบ 10 สัปดาห์แล้วครับ! สัปดาห์นี้คุณได้สร้างนิสัยการคิดแบบเจ้าของภาษาเรื่อง **"เวลาที่ไม่ตัดขาดจากปัจจุบัน"** ครบทุกมุม:\n1) **ผลถึงตอนนี้**: `have/has + V3` (*I\'ve lost my key / Someone has broken it*)\n2) **ประสบการณ์ชีวิต**: `Have you ever...? / I\'ve never...` และ **`been to`** (ไปแล้วกลับแล้ว) vs **`gone to`** (ออกไปแล้ว ยังไม่กลับ)\n3) **อัปเดตสด**: `just` (เพิ่งจะ) · `already` (แล้ว) · `yet` (หรือยัง/ยังเลย ท้ายคำถามและปฏิเสธ)\n4) **ความต่อเนื่อง**: `have/has + V3` + **`for` + ระยะเวลา (ห้ามใส่ ago!)** / **`since` + จุดเริ่มต้น**\n5) **2 เกียร์สนทนา**: เปิดด้วย Present Perfect แล้วเจาะรายละเอียดด้วย Past Simple (`Did you...? / V2`) ทันทีเมื่อระบุเวลาปิดจบ!',
      sound: [
        'Week 10 Intensive Listening & Contraction Audit',
        '\'ve /v/ · \'s /z/ · been /bɪn/ · since /sɪns/ · forgotten /fəˈɡɒt.ən/ · worthwhile /ˌwɜːθˈwaɪl/',
        'แยกเสียง "I\'ve lived" (/aɪv lɪvd/) ออกจาก "I lived" (/aɪ lɪvd/) ให้หูจับเสียง /v/ ของ \'ve ให้ได้แม้พูดเร็ว และฝึก Shadowing บทอ่าน Dictogloss 3 รอบ',
        'อ่านคำกริยา V3 ชุดสัปดาห์นี้รวดเดียว 10 คำ: done, seen, written, taken, broken, forgotten, spoken, eaten, ridden, known',
      ],
      l1: [
        'เผลอกลับไปใช้ Present Simple กับ since/for ("I work here since 2022"), ใส่ ago หลัง for ("for 3 years ago"), หรือใช้ Present Perfect กับคำว่า yesterday',
        'ความเคยชินทางความหมายภาษาไทย ("อยู่มาตั้งแต่...", "ไปมาเมื่อวานแล้ว") ชวนให้หลุด Tense เมื่อพูดเร็ว',
        'ใช้กฎ 3 ตรวจ: มี yesterday/ago ไหม? (ใช้ V2) | มี since/for ถึงตอนนี้ไหม? (ใช้ have/has + V3) | กำลังพูดถึงคนที่ไม่อยู่ตรงนี้หรือเล่าที่เคยไป? (gone vs been)',
      ],
      vocab: [
        ['progress', 'ความก้าวหน้า', '/ˈprəʊ.ɡres/', 'make steady progress', 'ก้าวหน้าอย่างต่อเนื่อง'],
        ['skill', 'ทักษะ', '/skɪl/', 'build communication skills', 'สร้างทักษะการสื่อสาร'],
        ['memorize', 'ท่องจำ / จำขึ้นใจ', '/ˈmem.ə.raɪz/', 'memorize useful chunks', 'จำก้อนคำที่มีประโยชน์'],
        ['lately', 'ช่วงหลังมานี้', '/ˈleɪt.li/', 'notice changes lately', 'สังเกตเห็นความเปลี่ยนแปลงช่วงหลังมานี้'],
        ['explore', 'สำรวจ / ลองสิ่งใหม่', '/ɪkˈsplɔːr/', 'explore new places', 'ออกไปสำรวจสถานที่ใหม่ๆ'],
        ['achieve', 'บรรลุผลสำเร็จ', '/əˈtʃiːv/', 'achieve a milestone', 'บรรลุหมุดหมายสำคัญ'],
      ],
      examples: [
        ['Have you noticed how much steadier your English has become lately?', 'คุณสังเกตไหมว่าภาษาอังกฤษของคุณมั่นคงขึ้นมากแค่ไหนช่วงหลังมานี้?'],
        ['I have kept a daily notebook for ten weeks and memorized over three hundred chunks.', 'ฉันจดสมุดบันทึกทุกวันมาสิบสัปดาห์แล้วและจำก้อนคำได้มากกว่าสามร้อยชุด'],
        ['Last month, I visited a book fair in town and bought two short storybooks.', 'เดือนที่แล้ว ฉันไปงานหนังสือในเมืองและซื้อหนังสือนิทานสั้นมาสองเล่ม'],
        ['My roommate isn\'t back yet because she has gone to pick up dinner.', 'รูมเมทของฉันยังไม่กลับมาเลยเพราะเธอออกไปรับมื้อเย็นข้างนอก'],
      ],
      reading:
        'Over the past ten weeks, Ken has made steady progress with his English habits. He has practiced aloud for sixty minutes almost every day since January, and he hasn\'t missed a single weekly review yet. Last month, he even traveled to Chiang Mai alone for the first time. Have you ever felt nervous about speaking with locals in another city? Ken certainly felt shy at first! On his second morning, however, he walked into a busy coffee roastery, ordered in English, and chatted comfortably with two travelers from Singapore. That small moment gave him real confidence. Lately, Ken has already finished reading his first graded storybook, and he has just started listening to short daily podcasts on the train.',
      listenQ: 'When did Ken travel to Chiang Mai alone for the first time?',
      listenA: 'Last month.',
      dictation: 'He has practiced aloud almost every day since January.',
      listenNote: 'ฝึก Dictogloss โดยจับคู่คำบอกเวลาในเรื่องให้ขาด: "since January" (Present Perfect) vs "Last month" / "On his second morning" (Past Simple)',
      drills: [
        {
          kind: 'dictogloss',
          prompt: 'ฟังข้อความสรุปจากบทอ่านแล้วเลือกคำชุดที่ตรงตามต้นฉบับครบทั้ง 3 ช่อง: "Ken _____ for sixty minutes almost every day since January, he _____ a single review yet, and last month he _____ to Chiang Mai alone."',
          answer: 'has practiced / hasn\'t missed / traveled',
          choices: [
            'practiced / didn\'t miss / has traveled',
            'has practiced / hasn\'t missed / traveled',
            'is practicing / hasn\'t missed / has traveled',
            'has practiced / didn\'t missed / traveled',
          ],
          explanation: 'since January และ yet ใช้ Present Perfect (has practiced / hasn\'t missed) ส่วน last month เป็นเวลาปิดจบจึงใช้ Past Simple (traveled)',
          audio_text:
            'He has practiced aloud for sixty minutes almost every day since January, and he hasn\'t missed a single weekly review yet. Last month, he even traveled to Chiang Mai alone for the first time.',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่รวมจุดพลาด 4 ข้อของสัปดาห์ 10: "I know Lisa since four years ago, and she has went to Japan yesterday!"',
          answer: 'I have known Lisa for four years, and she went to Japan yesterday!',
          explanation: '1) know + ระยะเวลาถึงปัจจุบันใช้ have known 2) 4 ปีใช้ for four years (ตัด since/ago ออก) 3) yesterday ใช้ Past Simple (went) ไม่ใช้ has went',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ไวยากรณ์และความหมายของ Present Perfect และ Past Simple ได้ถูกต้องครบทั้งประโยค?',
          answer: 'I\'ve just arrived at the café, and Mia has already ordered our drinks—she got here ten minutes ago.',
          choices: [
            'I\'ve just arrived at the café, and Mia has already ordered our drinks—she got here ten minutes ago.',
            'I just arrived at the café, and Mia ordered yet our drinks—she has got here ten minutes ago.',
            'Where is Mia? She has been to the bakery to buy bread and isn\'t back yet.',
            'Have you ever ate northern food? Yes, I have eaten it last Sunday.',
          ],
          explanation: '\'ve just arrived / has already ordered (เพิ่งมาถึง / สั่งเรียบร้อยแล้ว) + ten minutes ago (got here เป็น Past Simple)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "คุณเคยไปหัวหินไหม? — เคยสิ ฉันไปที่นั่นกับครอบครัวเมื่อสองปีก่อน"',
          answer: 'Have you ever been to Hua Hin? — Yes, I have! I went there with my family two years ago.',
          explanation: 'ถามประสบการณ์ไปแล้วกลับมาแล้วใช้ Have you ever been to...? และระบุเวลา two years ago ใช้ Past Simple (went)',
        },
      ],
      writing:
        'Weekly Review Essay (7–8 ประโยค): เขียนเล่า "พัฒนาการหรือความสำเร็จของคุณในช่วง 2–3 เดือนที่ผ่านมา + ประสบการณ์หนึ่งครั้งที่จำไม่ลืม" โดยใช้ครบ: `for / since`, `already / just / yet`, `ever / never` และสลับเข้า `Past Simple` อย่างน้อย 2 ประโยคเมื่อเล่าเหตุการณ์ที่ระบุวันเวลา',
      writingSample:
        'Lately, I have noticed a big change in how I manage my daily time. I have cooked my own lunches for six weeks, and I haven\'t ordered late-night snacks since April! Also, I\'ve already saved enough money for a short weekend trip next month. Have I ever traveled solo before? Yes, I have! Two years ago, I took an early train to Kanchanaburi by myself and stayed at a small riverside guesthouse. At first I felt a bit shy, yet I met kind locals and had a peaceful weekend. I\'ve just written down three new travel goals in my notebook, though I haven\'t booked the train tickets yet.',
      writingNote: 'ตรวจสอบการสลับเกียร์: ตรงส่วนที่เล่าเหตุการณ์ "Two years ago..." ทุกกริยาต้องเป็น Past Simple ส่วนช่วงต่อเนื่องถึงวันนี้ใช้ Present Perfect',
      speakingTopic: 'Weekly Reflection 4/3/2: "สิ่งที่ฉันทำต่อเนื่องมา + ประสบการณ์ที่เปลี่ยนมุมมอง" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เปิดด้วยพัฒนาการที่มี for / since / already / just / yet แล้วสับเกียร์เข้าเรื่องเล่าในอดีตด้วย Past Simple 1 เหตุการณ์',
        'ฝึกฟังตัวเองไม่ให้เผลอหลุดคำว่า "for ... ago" หรือ "I know him since..."',
      ],
    },
  ]
);
