import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 3: คิดเป็นภาษาอังกฤษและสื่อสารในงานจริง';

export const WEEK21: ModuleSeed = createModule(
  {
    week: 21,
    phase: 3,
    phase_title: PHASE_TITLE,
    cefr_level: 'B1',
    title: 'Modals of Deduction: วิเคราะห์เหตุผลและคาดเดาอย่างมีหลักฐาน',
    summary:
      'คาดเดาสถานการณ์ปัจจุบันและอดีตอย่างมีระดับความมั่นใจด้วย must, might, could, can’t พร้อม connected speech ของ must have / might have',
    focus: 'Present & Past Modals of Deduction, Weak Forms of have',
  },
  [
    {
      day: 141,
      title: 'คาดเดาปัจจุบันอย่างมีระดับความมั่นใจ (must be / might be / can’t be)',
      objective:
        'ใช้ must be, might/may/could be และ can’t be วิเคราะห์ความน่าจะเป็นในปัจจุบันจากหลักฐานตรงหน้าได้แม่นยำโดยไม่ใช้ mustn’t be ผิดความหมาย',
      explanation:
        'เวลาพูดภาษาไทยว่า "เขาน่าจะเป็น...", "อาจจะ..." หรือ "ไม่มีทางเป็น..." คนเรียนมักใช้แต่คำว่า *maybe* ทุกประโยค ทำให้ฟังดูไม่ค่อยเป็นธรรมชาติในระดับ B1 ลองใช้ **Modals of Deduction** เพื่อบอกระดับความมั่นใจจากหลักฐานตรงหน้า: 1) **มั่นใจ ~95% (ต้องใช่แน่ๆ)** ใช้ **`must be`** เช่น `His bag is on the desk—he must be nearby.` (ไม่ใช่หน้าที่บังคับ แต่เป็นการสรุปจากหลักฐาน!) 2) **เป็นไปได้ ~40–50% (อาจจะใช่)** ใช้ **`might be / may be / could be`** เช่น `She might be stuck in traffic.` 3) **มั่นใจ 95% ว่าไม่มีทางใช่** ใช้ **`can’t be`** เช่น `That can’t be true!` (**ข้อควรระวังเด็ดขาด:** ห้ามใช้ `mustn’t be` แปลว่า "ต้องไม่ใช่" เด็ดขาด เพราะ `mustn’t` ใช้สำหรับข้อห้ามเท่านั้น!)',
      sound: [
        'T-Elision in "must be" & "can’t be"',
        'must be /ˈmʌs.bi/ · might be /ˈmaɪt.bi/ · can’t be /ˈkɑːnt.bi/',
        'เวลาพูดเร็ว เสียง /t/ ระหว่าง must กับ be มักกลืนหายกลายเป็น /ˈmʌs.bi/ ("มัส-บี") ส่วน can’t be ต้องปล่อยลมท้ายหรือกลั้นเสียง /t/ ให้ชัดเพื่อไม่ให้สับสนกับ can be',
        'ฝึกพูดไล่ระดับความมั่นใจ 3 ขั้นต่อเนื่อง: "He must be upstairs. / He might be upstairs. / He can’t be upstairs."',
      ],
      l1: [
        'ใช้ "mustn’t be" เมื่อต้องการเดาว่าสิ่งนั้นไม่น่าเป็นความจริง เช่น "He mustn’t be the boss, he looks too young."',
        'สมองจับคู่ตรงข้ามจากความเคยชินว่า must ↔ mustn’t โดยลืมไปว่าในความหมายการคาดเดา (deduction) คู่ตรงข้ามของ must คือ can’t',
        'จำกฎเหล็กคู่ตรงข้ามของการคาดเดา: มั่นใจว่าใช่ = must be ↔ มั่นใจว่าไม่มีทางใช่ = can’t be (ส่วน mustn’t เก็บไว้ใช้สั่งห้ามอย่างเดียว)',
      ],
      vocab: [
        ['clue', 'เบาะแส / หลักฐาน', '/kluː/', 'follow a clear clue', 'ตามเบาะแสที่ชัดเจน'],
        ['evidence', 'พยานหลักฐาน (นับไม่ได้)', '/ˈev.ɪ.dəns/', 'solid evidence', 'หลักฐานที่หนักแน่น'],
        ['assume', 'สันนิษฐาน / เหมารวม', '/əˈsjuːm/', 'safe to assume', 'สันนิษฐานได้อย่างมีเหตุผล'],
        ['exhausted', 'เหนื่อยล้าหมดแรง', '/ɪɡˈzɔː.stɪd/', 'look completely exhausted', 'ดูเหนื่อยล้าอย่างเห็นได้ชัด'],
        ['identical', 'เหมือนกันทุกประการ', '/aɪˈden.tɪ.kəl/', 'almost identical', 'แทบจะเหมือนกันเป๊ะ'],
        ['genuine', 'แท้จริง / จริงใจ', '/ˈdʒen.ju.ɪn/', 'a genuine mistake', 'ความผิดพลาดที่ไม่ได้ตั้งใจจริง'],
        ['suspicious', 'น่าสงสัย', '/səˈspɪʃ.əs/', 'sound slightly suspicious', 'ฟังดูน่าสงสัยเล็กน้อย'],
      ],
      examples: [
        ['All the office lights are off, so the team must be out for lunch.', 'ไฟออฟฟิศปิดหมดเลย แสดงว่าทีมน่าจะออกไปกินข้าวเที่ยงกันแน่ๆ'],
        ['Nina usually answers within five minutes, so she might be in a client call.', 'ปกติณินาตอบในห้านาที เธออาจจะติดสายคุยกับลูกค้าอยู่'],
        ['Wait, that signature can’t be real—our director never signs in red ink.', 'เดี๋ยวก่อน ลายเซ็นนั้นไม่มีทางเป็นของจริง ผู้อำนวยการเราไม่เคยเซ็นด้วยปากกาแดง'],
        ['Judging by the dark circles under his eyes, he must be exhausted today.', 'ดูจากรอยคล้ำใต้ตาของเขา วันนี้เขาต้องเหนื่อยมากแน่ๆ'],
      ],
      reading:
        'At 8:45 a.m., Niran walked into the quiet co-working studio and noticed a silver thermos beside the window seat. Nobody was at the desk yet, so he followed a few simple clues. The thermos was still warm, which meant the owner must be somewhere inside the building. Niran glanced toward the balcony and spotted a half-empty notebook open to a design sketch. "That can’t be Lek’s notebook," he thought, because Lek was away in Chiang Mai until Friday. It might be Ton’s, since Ton always arrived early before rush hour and drew layout ideas in pencil. Just then, footsteps echoed from the hallway, and Ton walked in holding fresh coffee. Having solid evidence made it easy to narrow down the answer without guessing blindly.',
      listenQ: 'Why did Niran conclude the notebook could not belong to Lek?',
      listenA: 'Because Lek was away in Chiang Mai until Friday.',
      dictation: 'The lights are off, so they must be out for lunch.',
      listenNote:
        'จับเสียง /t/ ที่หายไปใน "must be" (/ˈmʌs.bi/) และเสียงเชื่อม "lights are" กับ "out for" เพื่อไม่ให้ฟังพลาดคำสั้นๆ',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคคาดเดาที่คนไทยมักใช้ผิดคำตรงข้าม: "That bill is 9,000 baht for two coffees—it mustn’t be correct!"',
          answer: "That bill is 9,000 baht for two coffees—it can't be correct!",
          explanation:
            'การคาดเดาว่า "ไม่มีทางเป็นไปได้" ต้องใช้ can’t be (ห้ามใช้ mustn’t be เพราะ mustn’t ใช้บอกข้อห้าม)',
        },
        {
          kind: 'choice',
          prompt:
            'คุณเห็นร่มเปียกน้ำวางอยู่หน้าประตูบ้านทั้งที่เมื่อเช้าแดดออก ข้อใดสรุปจากหลักฐานอย่างมั่นใจ 95% ได้ถูกต้อง?',
          answer: 'It must be wet outside right now.',
          choices: [
            'It must be wet outside right now.',
            'It mustn’t be dry outside right now.',
            'It can be wet outside right now.',
            'It has to raining outside right now.',
          ],
          explanation:
            'มั่นใจสูงจากหลักฐานตรงหน้าใช้ must + V1 (must be); can be ใช้พูดถึงความเป็นไปได้ทั่วไป ไม่ใช่การเดาเหตุการณ์เฉพาะหน้าแบบ might/could/must',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้เหมาะกับหลักฐานที่ยังไม่แน่ชัด (~40%): Pim isn’t answering her phone yet—she _____ be on the subway.',
          answer: 'might',
          explanation:
            'ยังไม่มีหลักฐานยืนยันแน่ชัดว่าอยู่บนรถไฟใต้ดิน จึงใช้ might (หรือ may / could) เพื่อแสดงความเป็นไปได้ปานกลาง',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ข้อความนั้นไม่มีทางมาจากหัวหน้าเราได้หรอก—เธอยังบินอยู่บนเครื่องเลย"',
          answer: "That message can't be from our boss—she's still on the plane.",
          explanation:
            'ใช้ can’t be เพื่อปฏิเสธความเป็นไปได้ตามหลักฐานที่มี',
        },
      ],
      writing:
        'สังเกตห้องหรือโต๊ะทำงานของเพื่อน/สมาชิกในบ้านตอนนี้ แล้วเขียนคาดเดา 4–5 ประโยค โดยใช้ must be, might/could be และ can’t be ให้ครบทั้ง 3 ระดับความมั่นใจ',
      writingSample:
        "I just walked into our shared kitchen and spotted two iced matcha cups on the counter. My sister must be home already because she always buys drinks from that corner shop. However, the living room feels quiet, so she might be upstairs taking a quick shower. Her laptop bag isn't on the sofa, which means she can't be planning to work late tonight. Judging by the fresh fruit next to the sink, someone must be ready to cook dinner soon.",
      writingNote:
        'ตรวจดูว่าหลัง must / might / could / can’t ตามด้วย V1 (be หรือกริยาแท้รูปเดิม) เสมอ และใช้ can’t แทน mustn’t ในการคาดเดาเชิงปฏิเสธ',
      speakingTopic: 'สวมบทนักสืบจากเบาะแสรอบตัว (4 / 3 / 2 นาที)',
      speakingBullets: [
        'นึกภาพสถานการณ์จริง 1 อย่าง (เช่น โต๊ะที่ว่างแต่ไฟเปิด หรือเพื่อนไม่ตอบแชทตั้งแต่เช้า) แล้วอธิบายเบาะแสที่เห็น',
        'ใช้ให้ครบทั้ง 3 ระดับ: must be (มั่นใจ) → might/could be (อาจจะ) → can’t be (ไม่มีทาง)',
        'ออกเสียง must be เป็น "มัส-บี" ให้ลื่นไหลโดยไม่สะดุดตัว t',
      ],
    },
    {
      day: 142,
      title: 'คาดเดาสิ่งที่กำลังเกิดขึ้นเดี๋ยวนี้ (must be / might be + V-ing)',
      objective:
        'ต่อยอดโครงสร้าง Modal + be + V-ing เพื่อเดาว่าคนอื่นกำลังทำอะไรอยู่ในวินาทีนี้ได้อย่างถูกต้องโดยไม่ลืม be',
      explanation:
        'เมื่อวานเราเดา "สภาพ" ด้วย `must be + adj/noun` แต่วันนี้ถ้าอยากเดา **"การกระทำที่กำลังดำเนินอยู่ตอนนี้"** (เช่น เพื่อนหายเงียบไปในสาย หรือไฟห้องประชุมเปิดตอนสองทุ่ม) ให้ใช้สูตร **`Modal + be + V-ing`** เช่น `He must be driving right now.` (เขาต้องกำลังขับรถอยู่แน่ๆ เลยไม่รับสาย), `They might be discussing the budget.` (พวกเขาน่าจะกำลังคุยเรื่องงบกันอยู่), `She can’t be sleeping—she just posted a photo!` (เธอไม่มีทางกำลังนอนอยู่แน่ๆ เพิ่งลงรูปไปเมื่อกี้!) โครงสร้างนี้ช่วยหลีกเลี่ยงการพูด *"Maybe he drives now"* ซึ่งผิดกาลทั้งความหมายและความต่อเนื่อง',
      sound: [
        'Reduction of "be" & Unstressed "-ing"',
        'must be working /ˈmʌs.bi ˈwɜː.kɪŋ/ · might be waiting /ˈmaɪt.bi ˈweɪ.tɪŋ/',
        'คำว่า be ใน modal + be + V-ing ออกเสียงสั้นและเบา /bi/ ไม่เน้นเสียงหนัก ส่วนน้ำหนักหลักอยู่ที่กริยาแท้หน้า -ing (WORK-ing, DRIV-ing)',
        'ฝึกพูดประโยคจังหวะต่อเนื่อง 4 ประโยค: "She MUST be WORKing. / He MIGHT be DRIVing. / They COULD be EATing. / You CAN’T be SERious."',
      ],
      l1: [
        'ตัดคำว่า "be" ทิ้งแล้วพูดว่า "She must working right now" หรือใช้รูป Present Simple แทน: "He might sleep now."',
        'ภาษาไทยใช้แค่ "น่าจะกำลัง..." หน้ากริยาเดียวได้เลย ไม่มีคำเชื่อมกริยาอย่าง be คั่นกลางระหว่าง modal กับ -ing',
        'ท่องสูตรติดปากไว้เป็น 3 ชิ้นต่อกันเสมอ: Modal + BE + V-ing (ห้าม modal ชน V-ing โดยตรงเด็ดขาด!)',
      ],
      vocab: [
        ['rehearse', 'ซักซ้อม', '/rɪˈhɜːs/', 'rehearsing a presentation', 'กำลังซ้อมพรีเซนต์'],
        ['commute', 'เดินทางไปกลับทำงาน', '/kəˈmjuːt/', 'commuting home', 'กำลังเดินทางกลับบ้าน'],
        ['concentrate', 'จดจ่อ / มีสมาธิ', '/ˈkɒn.sən.treɪt/', 'concentrating hard', 'กำลังตั้งใจจดจ่อ'],
        ['brainstorm', 'ระดมความคิด', '/ˈbreɪn.stɔːm/', 'brainstorming fresh ideas', 'กำลังระดมไอเดียใหม่ๆ'],
        ['pack up', 'เก็บของเตรียมกลับ', '/pæk ʌp/', 'packing up for the day', 'กำลังเก็บของเลิกงาน'],
        ['troubleshoot', 'ตรวจแก้ปัญหาเฉพาะหน้า', '/ˈtrʌb.əl.ʃuːt/', 'troubleshooting a bug', 'กำลังไล่แก้บั๊ก'],
        ['silence', 'เงียบเสียง / ปิดเสียง', '/ˈsaɪ.ləns/', 'silence your notifications', 'ปิดเสียงแจ้งเตือน'],
      ],
      examples: [
        ['Ploy hasn’t checked the group chat for an hour—she must be rehearsing her talk.', 'พลอยยังไม่เปิดแชทกลุ่มมาชั่วโมงนึงแล้ว เธอต้องกำลังซ้อมพูดอยู่แน่ๆ'],
        [
          'He might be troubleshooting the login issue on the test server.',
          'เขาอาจจะกำลังไล่แก้ปัญหาการล็อกอินบนเซิร์ฟเวอร์ทดสอบอยู่',
        ],
        ['Look at the clock; it’s past seven, so the team can’t still be brainstorming.', 'ดูนาฬิกาสิ ทุ่มกว่าแล้ว ทีมไม่มีทางยังระดมสมองกันอยู่หรอก'],
        ['Don’t call him right now—he could be commuting through the tunnel.', 'อย่าเพิ่งโทรหาเขาตอนนี้เลย เขาอาจจะกำลังเดินทางผ่านอุโมงค์อยู่'],
      ],
      reading:
        'During an online workshop on Thursday afternoon, the host noticed that Ken’s camera had been frozen for ten minutes while his microphone stayed muted. At first, a participant joked that Ken might be taking a quick nap. However, the host knew Ken well and ruled that out immediately. "He can’t be sleeping—he sent me two questions in the chat five minutes ago," the host explained. Looking closely at the screen, someone pointed out that the background clock had stopped moving too. That meant Ken’s router must be restarting, or his laptop might be installing a sudden system update. Rather than waiting silently, the host messaged Ken on his mobile phone and moved smoothly to the next topic. Minutes later, Ken rejoined and laughed, confirming he had been troubleshooting a weak Wi-Fi connection.',
      listenQ: 'How did the host know Ken could not be sleeping?',
      listenA: 'Because Ken had sent two questions in the chat five minutes earlier.',
      dictation: 'He might be commuting home through heavy traffic.',
      listenNote:
        'ฟังเสียง /t/ ของ "might" ที่มักหยุดลมเบาๆ แล้วเชื่อมต่อด้วย /bi/ สั้นๆ ก่อนถึงคำหนัก "com-MUT-ing"',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคเดาสิ่งที่กำลังทำอยู่ตอนนี้ที่ขาดกริยาช่วย: "Look at the lights in room 3B—the designers must still working on the prototype."',
          answer:
            'Look at the lights in room 3B—the designers must still be working on the prototype.',
          explanation:
            'หลัง must (และ modal ทุกตัว) ต้องใส่ be ก่อนกริยา -ing เสมอ -> must still be working',
        },
        {
          kind: 'choice',
          prompt:
            'เพื่อนของคุณส่งข้อความบอกว่า "เพิ่งขึ้นเครื่องบินกำลังจะปิดมือถือ" อีก 20 นาทีต่อมามีคนถามว่าเขาทำอะไรอยู่ ข้อใดเดาได้เหมาะสมที่สุด?',
          answer: 'He must be flying over the coast by now.',
          choices: [
            'He must flying over the coast by now.',
            'He must be flying over the coast by now.',
            'He mustn’t be sleeping at home now.',
            'He might flown over the coast by now.',
          ],
          explanation:
            'ใช้ must be + V-ing เพื่อคาดเดาการกระทำที่กำลังดำเนินอยู่ ณ ขณะนี้ด้วยความมั่นใจสูง',
        },
        {
          kind: 'gap',
          prompt:
            'เติมรูปกริยาให้ครบโครงสร้าง: Shh, keep your voice down—they _____ be recording the podcast episode right now.',
          answer: 'could',
          explanation:
            'ใช้ could (หรือ might / may) หน้า be recording เพื่อเดาเหตุการณ์ที่อาจกำลังเกิดขึ้นอยู่ตอนนี้',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "เธอไม่มีทางกำลังขับรถอยู่หรอก—เมื่อกี้ฉันเพิ่งเห็นเธอเดินเข้าตึก"',
          answer:
            "She can't be driving right now—I just saw her walk into the building.",
          explanation:
            'ปฏิเสธสิ่งที่กำลังเกิดขึ้นตอนนี้ด้วยความมั่นใจใช้ can’t be + V-ing',
        },
      ],
      writing:
        'สมมติว่าคุณโทรหาเพื่อนร่วมงาน 3 คนแล้วไม่มีใครรับสายเลย เขียนย่อหน้าสั้นๆ 5–6 ประโยคเดาว่าแต่ละคนน่าจะกำลังทำอะไรอยู่ ณ เวลานี้ด้วย must be / might be / can’t be + V-ing',
      writingSample:
        "I tried calling three teammates before lunch, and nobody picked up. First, Beam must be commuting from the client's factory because she left our chat at ten. Second, Win isn't online either, so he might be rehearsing his pitch in the quiet booth. Finally, Dao can't be taking a break right now—her status icon shows green, which means she must be concentrating hard on the monthly report.",
      writingNote:
        'เช็กทุกประโยคว่าใส่ be ครบก่อน V-ing หรือยัง และระวังไม่ใช้ mustn’t be + V-ing ในความหมายว่า "ไม่น่าจะกำลัง..."',
      speakingTopic: 'เดาชีวิตสดๆ ของเพื่อนหรือคนในทีมตอนนี้ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกคนที่รู้จัก 3 คน แล้วลองเดาว่าเวลานี้พวกเขากำลังทำอะไรอยู่จากกิจวัตรและหลักฐานที่รู้',
        'บังคับใช้โครงสร้าง must be + V-ing, might be + V-ing และ can’t be + V-ing ให้คล่องปาก',
        'เน้นเสียงหนักที่กริยาหลัก (เช่น WORKing, DRIVing) และลดเสียง be ให้เบาและเร็ว',
      ],
    },
    {
      day: 143,
      title: 'คาดเดาอดีต (must have / might have / can’t have + V3) & เสียง /əv/',
      objective:
        'ใช้ Modal + have + V3 วิเคราะห์สาเหตุที่เกิดไปแล้วในอดีต พร้อมฟังและออกเสียง weak form ของ have (/əv/) ได้อย่างเป็นธรรมชาติ',
      explanation:
        'เมื่อเหตุการณ์จบลงไปแล้ว แต่เราเห็น **"ร่องรอยในปัจจุบัน"** แล้วอยากเดาย้อนกลับไปว่าเกิดอะไรขึ้น เช่น เปิดตู้เย็นแล้วเค้กหายไป หรือเพื่อนมาสายผิดปกติ ให้ใช้ **`Modal + have + V3 (Past Participle)`**: 1) **มั่นใจว่าเกิดแน่ๆ**: `Someone must have eaten the cake.` (ต้องมีคนกินเค้กไปแล้วแน่ๆ) 2) **อาจเป็นไปได้**: `She might/could have missed the bus.` (เธออาจจะตกรถเมล์ก็ได้) 3) **ไม่มีทางเกิดขึ้นได้**: `He can’t / couldn’t have forgotten—I reminded him twice!` (เขาไม่มีทางลืมหรอก ฉันเตือนตั้งสองรอบ!) ในการพูดจริง คำว่า `have` จะถูกลดเสียงเป็น `/əv/` ("เอิฟ" เบาๆ) จนฟังคล้าย "must-əv", "might-əv" แต่ **ห้ามเขียนคำว่า *must of* เด็ดขาด!**',
      sound: [
        'Weak Form of "have" (/əv/) in Past Modals',
        'must have /ˈmʌs.təv/ · might have /ˈmaɪ.təv/ · couldn’t have /ˈkʊd.n̩t.əv/',
        'สังเกตการเชื่อมเสียง: พยัญชนะท้ายของ modal วิ่งไปเชื่อมกับ /əv/ ทันที -> "must-have" = "มัส-เทิฟ", "could-have" = "คุด-เดิฟ", "can’t-have" = "แคน-เทิฟ"',
        'ฝึกพูดซ้ำให้ลื่นหู 5 รอบ: "must-əv left", "might-əv dropped", "couldn’t-əv known"',
      ],
      l1: [
        'ใช้ Modal + V2 ตรงๆ เช่น "He must forgot his keys" หรือเขียนตามเสียงที่ได้ยินว่า "She must of gone home."',
        'ภาษาไทยไม่มี V3 หลังกริยาช่วย พออยากเล่าอดีตเลยเปลี่ยนแค่กริยาเป็น V2 หรือพอฟังเจ้าของภาษาพูดเร็วได้ยินเสียง "-əv" เลยสะกดเป็น "of"',
        'จำสมการย้อนอดีตชุดเดียวจบ: Modal + have + V3 (ตัว V3 ต้องเป็นรูปช่อง 3 เช่น gone, forgotten, taken, broken เสมอ และสะกด have ไม่ใช่ of)',
      ],
      vocab: [
        ['unplug', 'ถอดปลั๊กออก', '/ʌnˈplʌɡ/', 'accidentally unplug the cable', 'เผลอถอดสายปลั๊กออก'],
        ['misplace', 'วางผิดที่ / ทำหายชั่วคราว', '/ˌmɪsˈpleɪs/', 'misplace a keycard', 'วางคีย์การ์ดผิดที่'],
        ['rush out', 'รีบพุ่งออกไป', '/rʌʃ aʊt/', 'rush out the door', 'รีบออกจากประตู'],
        ['spoil', 'บูดเสีย / ทำให้เสียบรรยากาศ', '/spɔɪl/', 'spoil overnight', 'บูดเสียข้ามคืน'],
        ['overlook', 'มองข้ามไป', '/ˌəʊ.vəˈlʊk/', 'overlook a tiny detail', 'มองข้ามรายละเอียดเล็กๆ'],
        ['trace', 'ร่องรอย', '/treɪs/', 'leave no trace', 'ไม่ทิ้งร่องรอยไว้'],
        ['vanish', 'หายวับไป', '/ˈvæn.ɪʃ/', 'vanish without a word', 'หายไปโดยไม่บอกกล่าว'],
      ],
      examples: [
        ['My charger isn’t in my backpack—I must have left it at the café.', 'สายชาร์จไม่ได้อยู่ในเป้ ฉันต้องลืมไว้ที่ร้านกาแฟแน่ๆ เลย'],
        [
          'The pavement is soaking wet, so it must have rained overnight.',
          'พื้นทางเท้าเปียกชุ่มเลย เมื่อคืนฝนต้องตกหนักแน่ๆ',
        ],
        ['Why hasn’t the package arrived? The courier might have misplaced the address label.', 'ทำไมพัสดุยังไม่ถึงนะ พนักงานส่งอาจจะทำป้ายที่อยู่หล่นหายก็ได้'],
        ['June couldn’t have deleted that folder—she doesn’t even have access to it.', 'จูนไม่มีทางลบโฟลเดอร์นั้นได้หรอก เธอไม่มีสิทธิ์เข้าถึงด้วยซ้ำ'],
      ],
      reading:
        'When Mint arrived at her apartment on Sunday night, the fridge door was slightly open, and the kitchen floor felt warm. Immediately, she began piecing together what had happened. Earlier that week, the building had experienced brief power dips, yet that couldn’t have pushed the heavy door open by itself. Then she noticed her cat, Mochi, licking his paws near the counter. Mint smiled and sighed: Mochi must have jumped onto the handle while chasing a moth! Because the door stayed cracked for hours, the milk might have spoiled already, though the frozen berries still felt firm. Fortunately, the cat hadn’t touched the hot stove, which could have caused a far worse mess. Next time, Mint promised herself to double-check the latch before rushing out.',
      listenQ: 'What did Mint conclude had opened the fridge door?',
      listenA: 'Her cat, Mochi, must have jumped onto the handle while chasing a moth.',
      dictation: 'I must have left my charger at the office.',
      listenNote:
        'สังเกตว่าเสียง "must have" ไหลรวมกันเป็น "มัส-เทิฟ" (/ˈmʌs.təv/) ก่อนเข้าคำว่า "left" อย่าเผลอพิมพ์เป็น "must of"',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคคาดเดาอดีตที่มักพลาดทั้งไวยากรณ์และรูปกริยา: "Look at the broken mug on the floor—someone must of knocked it over and ran away."',
          answer:
            'Look at the broken mug on the floor—someone must have knocked it over and run away.',
          explanation:
            '1) เขียน have เสมอ ไม่ใช่ of 2) หลัง must have ต้องใช้ V3 ทั้งคู่: knocked และ run (run–ran–run)',
        },
        {
          kind: 'choice',
          prompt:
            'คุณมั่นใจมากว่าเพื่อนไม่ได้เป็นคนส่งอีเมลแปลกๆ เมื่อวาน เพราะเขาไม่มีอินเทอร์เน็ตทั้งวัน ข้อใดถูกต้อง?',
          answer: "He couldn't have sent that email yesterday.",
          choices: [
            "He mustn't have sent that email yesterday.",
            "He couldn't have sent that email yesterday.",
            "He mightn't sent that email yesterday.",
            "He can't send that email yesterday.",
          ],
          explanation:
            'ปฏิเสธความน่าจะเป็นในอดีตด้วยความมั่นใจสูง ใช้ couldn’t have + V3 (หรือ can’t have + V3)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมรูปที่ถูกต้องของ forget: Oh no, the lights are still on—I must have _____ to switch them off before leaving.',
          answer: 'forgotten',
          explanation:
            'must have + V3 -> V3 ของ forget คือ forgotten',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "รถไฟขบวนก่อนหน้าอาจจะออกไปแล้วตอนที่เรามาถึงชานชาลา"',
          answer:
            'The earlier train might have left by the time we reached the platform.',
          explanation:
            'เดาเหตุการณ์อดีตที่อาจเกิดขึ้นไปแล้วใช้ might/could have + V3 (left)',
        },
      ],
      writing:
        'นึกถึงเหตุการณ์แปลกๆ ที่เคยเจอในบ้านหรือที่ทำงาน (เช่น ของหาย, ไฟล์หาย, หรือคนมาสายผิดปกติ) แล้วเขียนเล่าวิธีเดาย้อนอดีต 5 ประโยคด้วย must have, might have และ couldn’t have + V3',
      writingSample:
        "Yesterday morning, I found my desk plant knocked onto the carpet beside the open window. At first, I thought my younger brother might have bumped into the table before school. However, he couldn't have done it because he left at six, and the soil was still fresh on the rug. Then I felt a strong breeze blowing through the curtains. The morning wind must have blown the window shutter hard enough to tip the pot over!",
      writingNote:
        'ตรวจ V3 ทุกคำหลัง have (เช่น eaten, left, gone, forgotten, done) และห้ามสะกด "of" แทน "have" เด็ดขาด',
      speakingTopic: 'ย้อนรอยปริศนา: เกิดอะไรขึ้นก่อนหน้านี้? (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าร่องรอยที่เห็นตอนเดินเข้าห้องหรือเปิดคอมพิวเตอร์ 1 เหตุการณ์',
        'เดาย้อนอดีตด้วย must have + V3, might have + V3 และ couldn’t have + V3',
        'ฝึกเชื่อมเสียง "มัส-เทิฟ" (/ˈmʌs.təv/) และ "คุด-เดิฟ" (/ˈkʊd.əv/) ให้ต่อเนื่องไม่สะดุด',
      ],
    },
    {
      day: 144,
      title: 'ทบทวนความเสียดายและข้อเสนอแนะย้อนหลัง (should have / shouldn’t have / could have)',
      objective:
        'แยกความต่างระหว่างการวิจารณ์/เสียดาย (should have) กับทางเลือกที่เคยทำได้ (could have) และพูดเตือนใจย้อนหลังอย่างสร้างสรรค์',
      explanation:
        'วันก่อนเราใช้ `might/could have + V3` เพื่อ "เดาความจริงที่ไม่รู้" แต่วันนี้เรารู้ความจริงแล้วว่าอดีตเกิดอะไรขึ้น และอยากพูดว่า **"ตอนนั้นน่าจะทำ..."** หรือ **"ไม่น่าทำแบบนั้นเลย"** ให้ใช้: 1) **`should have + V3`** = น่าจะทำ (แต่ไม่ได้ทำ!) เช่น `I should have backed up my slides last night.` (เมื่อคืนฉันน่าจะสำรองสไลด์ไว้!) 2) **`shouldn’t have + V3`** = ไม่น่าทำเลย (แต่ทำไปแล้ว!) เช่น `We shouldn’t have skipped the sound check.` 3) **`could have + V3`** = จริงๆ ตอนนั้นทำได้นะ (มีทางเลือกอื่นที่ดีกว่าแต่ไม่ได้เลือก) เช่น `You could have texted me earlier so I wouldn’t wait.` ระวังน้ำเสียงตอนพูดกับคนอื่น: ใช้ `We could have...` หรือ `Next time, maybe we should...` จะฟังดูร่วมมือกันมากกว่าการตำหนิว่า `You shouldn’t have...`',
      sound: [
        'Contractions in "shouldn’t have" & "could have"',
        'should have /ˈʃʊd.əv/ · shouldn’t have /ˈʃʊd.n̩t.əv/ · could have /ˈkʊd.əv/',
        'เวลาออกเสียง shouldn’t have ในจังหวะพูดเร็ว ปลายลิ้นแตะปุ่มเหงือกที่ /d/ แล้วปล่อยลมจมูก /n/ ต่อเข้า /əv/ ทันที: "ชุด-นึท-เทิฟ" หรือลดรูปเป็น "ชุด-นึฟ"',
        'ฝึกอ่านประโยคคู่เปรียบเทียบด้วยน้ำเสียงนุ่มนวล: "I should-əv called first." / "We could-əv taken the express train."',
      ],
      l1: [
        'พูดว่า "I must have studied harder" หรือ "I should studied harder" เมื่อต้องการบอกว่า "ตอนนั้นฉันน่าจะตั้งใจกว่านี้"',
        'แปลตรงตัวคำว่า "น่าจะ" เป็น should + V2 หรือสับสนนำ must have (ซึ่งแปลว่าต้องเกิดแน่ๆ) มาใช้แทนความเสียดาย',
        'แยกหน้าที่ให้ขาด: คาดเดาอดีตที่ไม่ชัวร์ = must/might have + V3 · เสียดายอดีตที่รู้แล้วว่าพลาด = should / shouldn’t have + V3',
      ],
      vocab: [
        ['regret', 'เสียใจ / เสียดายภายหลัง', '/rɪˈɡret/', 'deeply regret', 'เสียดายอย่างยิ่ง'],
        ['back up', 'สำรองข้อมูล', '/bæk ʌp/', 'back up important files', 'สำรองไฟล์สำคัญ'],
        ['hindsight', 'มุมมองย้อนหลังเมื่อเรื่องผ่านไปแล้ว', '/ˈhaɪnd.saɪt/', 'in hindsight', 'พอมองย้อนกลับไป'],
        ['double-check', 'ตรวจสอบซ้ำสองรอบ', '/ˌdʌb.əlˈtʃek/', 'double-check the figures', 'ตรวจตัวเลขซ้ำอีกครั้ง'],
        ['alternative', 'ทางเลือกอื่น', '/ɔːlˈtɜː.nə.tɪv/', 'a safer alternative', 'ทางเลือกที่ปลอดภัยกว่า'],
        ['constructive', 'เชิงสร้างสรรค์', '/kənˈstrʌk.tɪv/', 'constructive reflection', 'การสะท้อนบทเรียนอย่างสร้างสรรค์'],
        ['warn', 'เตือนล่วงหน้า', '/wɔːn/', 'warn someone in advance', 'เตือนล่วงหน้า'],
      ],
      examples: [
        ['In hindsight, I should have saved a backup copy on a USB drive.', 'พอมองย้อนกลับไป ฉันน่าจะเก็บไฟล์สำรองไว้ในแฟลชไดรฟ์ด้วย'],
        [
          "We shouldn't have trusted the weather app without checking the sky.",
          'พวกเราไม่น่าเชื่อแอปพยากรณ์อากาศโดยไม่เงยหน้าดูท้องฟ้าเลย',
        ],
        ['You could have asked me for help instead of struggling until midnight.', 'จริงๆ คุณขอให้ฉันช่วยก็ได้นะ แทนที่จะฝืนทำคนเดียวจนเที่ยงคืน'],
        ['I shouldn’t have drunk iced coffee at 9 p.m.—now I’m wide awake.', 'ไม่น่าดื่มกาแฟเย็นตอนสามทุ่มเลย ตอนนี้ตาสว่างเลย'],
      ],
      reading:
        'Last Friday, our community book club hosted its first live author Q&A. Everything seemed ready at five o’clock, yet ten minutes before starting, the projector cable stopped showing clear video. Looking back, we should have tested the exact adapter with the guest’s laptop a day earlier. Instead, we assumed all HDMI ports worked smoothly. Worse still, we shouldn’t have placed the backup speaker in a locked storage room without checking who held the key. In hindsight, we could have moved everyone into the brighter lounge upstairs, which already had a built-in screen. Thankfully, the author stayed calm and turned the twenty-minute delay into an informal coffee circle. Although the tech hiccup felt stressful, it gave us constructive reflection for next month’s event.',
      listenQ: 'What did the team do wrong regarding the backup speaker?',
      listenA: 'They placed it in a locked storage room without checking who held the key.',
      dictation: 'We should have tested the adapter a day earlier.',
      listenNote:
        'ฟังเสียง "should have" เป็น "ชุด-เดิฟ" (/ˈʃʊd.əv/) และเชื่อมคำว่า "tested the" ให้ชัดโดยไม่กลืนเสียง -ed ท้ายคำว่า tested',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคแสดงความเสียดายที่ผันกริยาผิดรูป: "Oh no, we missed the last ferry—we should checked the timetable before leaving the hotel."',
          answer:
            'Oh no, we missed the last ferry—we should have checked the timetable before leaving the hotel.',
          explanation:
            'เสียดายสิ่งที่ไม่ได้ทำในอดีตต้องใช้ should have + V3 (ไม่ใช้ should + V2)',
        },
        {
          kind: 'choice',
          prompt:
            'เพื่อนร่วมงานลืมแจ้งคุณเรื่องเปลี่ยนเวลาประชุมจนคุณรอเก้อ คุณอยากชี้ทางเลือกที่ดีกว่าแบบสุภาพว่า "จริงๆ คุณส่งข้อความบอกผมก่อนก็ได้นะ" ควรพูดว่าอย่างไร?',
          answer: 'You could have sent me a quick message beforehand.',
          choices: [
            'You must have sent me a quick message beforehand.',
            'You could have sent me a quick message beforehand.',
            "You can't have sent me a quick message beforehand.",
            'You should sending me a quick message beforehand.',
          ],
          explanation:
            'could have + V3 ใช้ชี้ว่าอีกฝ่ายมีทางเลือกที่ดีกว่าที่สามารถทำได้ในอดีตแต่ไม่ได้ทำ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมรูปที่ถูกต้องให้สมบูรณ์: In hindsight, I _____ have spent so much time editing tiny fonts before checking the main content.',
          answer: "shouldn't",
          explanation:
            'ความหมายคือ "ไม่น่าเสียเวลาทำแบบนั้นเลย" จึงใช้ shouldn’t have + V3',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ฉันน่าจะพกเสื้อกันฝนติดกระเป๋ามาด้วยเมื่อเช้า"',
          answer: 'I should have packed a raincoat in my bag this morning.',
          explanation:
            'should have + packed (V3) แสดงความเสียดายที่ไม่ได้เตรียมมา',
        },
      ],
      writing:
        'เขียนทบทวนความผิดพลาดเล็กๆ ในการเดินทางหรือการทำงานที่ผ่านมา 5–6 ประโยค โดยใช้ทั้ง should have, shouldn’t have และ could have + V3 อย่างสร้างสรรค์ (ไม่โทษตัวเองรุนแรง)',
      writingSample:
        "During my first freelance workshop last month, I arrived only ten minutes before the session began. In hindsight, I should have reached the venue thirty minutes early to check the room setup. Worse yet, I shouldn't have relied only on the café Wi-Fi without preparing offline slides. Actually, I could have saved the deck locally on my tablet as a simple backup. Even though I felt flustered at first, that experience gave me a clear checklist for future workshops.",
      writingNote:
        'เช็กการสะกด V3 และการเลือกใช้ should have (น่าจะทำ) vs could have (จริงๆ มีทางเลือกอื่นที่ทำได้) ให้ตรงเจตนา',
      speakingTopic: 'เปลี่ยนความพลาดในอดีตเป็นบทเรียน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าเหตุการณ์ที่พลาดเล็กน้อย 1 เรื่อง (เช่น ไปสาย ลืมไฟล์ หรือซื้อของผิดไซซ์)',
        'สรุปด้วยประโยค In hindsight, I should have... / I shouldn’t have... / I could have...',
        'คุมจังหวะ "ชุด-เดิฟ" (/ˈʃʊd.əv/) และ "ชุด-นึท-เทิฟ" (/ˈʃʊd.n̩t.əv/) ให้ชัดและไม่เกร็ง',
      ],
    },
    {
      day: 145,
      title: 'วิเคราะห์ต้นตอปัญหาในชีวิตจริงและงานเทค (Root-Cause Problem Solving)',
      objective:
        'ตั้งคำถามและวิเคราะห์สาเหตุของปัญหาเชิงระบบหรืออุปกรณ์ด้วย What could have caused...? และวลีตัดตัวเลือกอย่างเป็นขั้นเป็นตอน',
      explanation:
        'เวลาระบบล่ม พัสดุส่งผิด หรือแผนงานสะดุด ในการทำงานจริงเราไม่ควรรีบโทษคนอื่น แต่ควรตั้งคำถามหาต้นตอ (Root Cause) ด้วย Modals of Deduction ผสมกริยาวิเคราะห์ปัญหา: 1) **ตั้งคำถามเปิดทาง**: `What could have caused this glitch?` / `Could someone have changed the settings?` 2) **ตัดตัวเลือกที่เป็นไปไม่ได้**: `That rules out a battery issue.` / `It couldn’t have been the server because other pages loaded fine.` 3) **เจาะหาสาเหตุหลัก**: `The latest update must have broken the login button.` / `We may have overlooked a broken link.` การสื่อสารลักษณะนี้ฟังดูมีเหตุผล สุขุม และเป็นมืออาชีพมาก',
      sound: [
        'Question Intonation in "What could have...?"',
        'What could have /wɒt ˈkʊd.əv/ · rule out /ruːl aʊt/ · narrow down /ˈnær.əʊ daʊn/',
        'เวลาถามหาสาเหตุด้วย Wh-word ("What could have caused it?") เสียงตกท้ายประโยค (falling intonation) แต่ถ้าเป็น Yes/No ("Could the cable have come loose?") เสียงขึ้นท้ายประโยค (rising intonation)',
        'ฝึกพูดสลับทำนองขึ้น-ลง: "What COULD-əv caused it? (↘)" vs "Could a plug-in have BROKEN it? (↗)"',
      ],
      l1: [
        'ตั้งคำถามย้อนอดีตด้วย "What did can cause this?" หรือ "Could it happened because...?"',
        'ลืมกฎว่า modal verb (could/might/must) เป็นกริยาช่วยอยู่แล้ว ห้ามใช้คู่กับ did และหลัง could it + have + V3 ไม่ใช่ could + V2',
        'จำโครงสร้างคำถามวิเคราะห์ต้นตอ 2 รูปตายตัว: What could have + V3...? และ Could + ประธาน + have + V3...?',
      ],
      vocab: [
        ['root cause', 'สาเหตุรากเหง้า / ต้นตอหลัก', '/ruːt kɔːz/', 'identify the root cause', 'ระบุต้นตอของปัญหา'],
        ['rule out', 'ตัดความเป็นไปได้ออก', '/ruːl aʊt/', 'rule out hardware failure', 'ตัดปัญหาฮาร์ดแวร์ออกไปก่อน'],
        ['narrow down', 'ตีกรอบให้แคบลง', '/ˈnær.əʊ daʊn/', 'narrow down the options', 'ตีกรอบตัวเลือกให้แคบลง'],
        ['pinpoint', 'ชี้เป้าได้แม่นยำ', '/ˈpɪn.pɔɪnt/', 'pinpoint the exact bug', 'ชี้จุดบั๊กได้อย่างแม่นยำ'],
        ['glitch', 'ข้อผิดพลาดชั่วคราวของระบบ', '/ɡlɪtʃ/', 'a minor software glitch', 'บั๊ก/ความขัดข้องเล็กน้อย'],
        ['loose', 'หลวม / ไม่แน่น', '/luːs/', 'come loose', 'หลุดหลวมออกมา'],
        ['reproduce', 'จำลองปัญหาซ้ำ', '/ˌriː.prəˈdjuːs/', 'reproduce the error', 'จำลองข้อผิดพลาดซ้ำได้'],
      ],
      examples: [
        ['What could have caused the checkout page to freeze right after midnight?', 'อะไรที่น่าจะทำให้หน้าชำระเงินค้างหลังเที่ยงคืนได้นะ?'],
        ['Other apps load quickly, so we can rule out a general Wi-Fi outage.', 'แอปอื่นโหลดเร็วปกติ ดังนั้นเราตัดปัญหาเน็ตล่มทั้งหมดออกไปได้เลย'],
        ['A recent update might have conflicted with the payment plug-in.', 'การอัปเดตล่าสุดอาจจะไปตีกับปลั๊กอินชำระเงินก็ได้'],
        ['Once we reproduced the glitch, it was easy to pinpoint the root cause.', 'พอเราจำลองปัญหาซ้ำได้ ก็ชี้เป้าต้นตอได้ง่ายเลย'],
      ],
      reading:
        'At ten past nine on Monday, the café’s automated receipt printer suddenly refused to connect to the tablet at the counter. Instead of panicking while customers waited in line, manager Khao walked calmly through three checks. First, the tablet screen loaded online orders normally, which ruled out an internet outage. "What could have caused the printer alone to stop?" she asked the barista. Maybe the power cord had come loose when someone mopped under the counter earlier. She checked behind the desk, yet the green indicator light stayed solid. Next, Khao wondered if a staff member might have accidentally switched the tablet onto the guest Wi-Fi network. Sure enough, the settings showed the wrong network name! That tiny shift must have broken the local link. Within thirty seconds, receipts printed smoothly again, proving how systematic deduction beats guesswork.',
      listenQ: 'What turned out to be the root cause of the printer problem?',
      listenA: 'Someone had switched the tablet onto the guest Wi-Fi network.',
      dictation: 'What could have caused the system to freeze?',
      listenNote:
        'จับเสียง "What could have" (/wɒt ˈkʊd.əv/) ให้ครบทุกคำและสังเกตเสียงลงท้ายประโยคแบบ Wh-question',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้คำถามหาต้นตอปัญหาที่ผสม did และ V2 ผิด: "What did could cause the file disappear—could someone deleted it by mistake?"',
          answer:
            'What could have caused the file to disappear—could someone have deleted it by mistake?',
          explanation:
            'ห้ามใช้ did กับ could และต้องใช้ modal + have + V3 (could have caused / could someone have deleted)',
        },
        {
          kind: 'choice',
          prompt:
            'คุณเช็กแล้วว่าปลั๊กไฟเสียบแน่นดีและหน้าจอติดปกติ ข้อใดใช้วลีตัดสาเหตุนั้นออกจากสมมติฐานได้ถูกต้อง?',
          answer: 'Since the screen lights up, we can rule out a power issue.',
          choices: [
            'Since the screen lights up, we can rule out a power issue.',
            'Since the screen lights up, we mustn’t have a power issue.',
            'Since the screen lights up, we can pinpoint the root cause is power.',
            'Since the screen lights up, it could have rule out power.',
          ],
          explanation:
            'rule out + นาม แปลว่า ตัดสาเหตุนั้นออกไปจากความเป็นไปได้',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบวลี: By testing each cable one by one, the technician managed to _____ down the exact source of the noise.',
          answer: 'narrow',
          explanation:
            'narrow down = ตีกรอบให้แคบลงเพื่อหาสาเหตุหรือตัวเลือกที่แท้จริง',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "การอัปเดตเมื่อคืนอาจจะไปปิดการตั้งค่าเสียงก็ได้"',
          answer: "Last night's update might have turned off the sound settings.",
          explanation:
            'might have + V3 (turned off) ใช้คาดเดาสาเหตุที่เป็นไปได้ของปัญหา',
        },
      ],
      writing:
        'เขียนจำลองสถานการณ์แก้ปัญหาในชีวิตประจำวันหรืออุปกรณ์ไอที (เช่น เน็ตช้า ไฟดับ แอร์ไม่เย็น หรือไฟล์พัง) 5–6 ประโยค โดยใช้คำถาม What could have...?, rule out และ must/might have + V3',
      writingSample:
        "Yesterday afternoon, our office air conditioner suddenly started blowing warm air. What could have caused it to fail on the hottest day of the week? The fan was still spinning quietly, so we could rule out a total power cut. I thought someone might have switched the remote to fan mode by accident, yet the display still showed cool at twenty-four degrees. Finally, the technician checked the outdoor unit and noticed thick dust blocking the filter. Nobody had cleaned it for months, which must have forced the compressor to overheat.",
      writingNote:
        'ตรวจให้แน่ใจว่ามีขั้นตอนการ "ตั้งข้อสงสัย -> ตัดสิ่งที่ไม่ใช่ -> สรุปต้นตอด้วย must have + V3"',
      speakingTopic: 'อธิบายวิธีไล่เช็กต้นตอปัญหาอย่างเป็นระบบ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าปัญหาที่เคยแก้ได้จริง 1 เรื่อง (เช่น คอมค้าง พัสดุส่งผิด หรือเมนูรสเพี้ยน)',
        'ใช้คำเชื่อมขั้นตอนการสืบ: What could have caused... -> That ruled out... -> It must have been...',
        'ฝึกขึ้น-ลงเสียง Wh-question กับ Yes/No question ให้ต่างกันชัดเจน',
      ],
    },
    {
      day: 146,
      title: 'อ่านเบาะแสและสรุปความอย่างมีเหตุผล (Judging by & Logical Conclusions)',
      objective:
        'ผสานข้อมูลแวดล้อมเข้ากับสำนวนสรุปอย่างมีเหตุผล (Judging by..., Chances are..., It’s unlikely that...) โดยไม่ด่วนสรุปเกินหลักฐาน',
      explanation:
        'คนไทยเวลาแปลความเห็นมักเผลอใช้คำเด็ดขาดเกินจริง เช่น *"100% sure he angry"* ทั้งที่หลักฐานยังไม่ชัดพอ ในภาษาอังกฤษระดับ B1→B2 เราใช้ **Evidence Starters** นำหน้าประโยคเพื่อแสดงให้ผู้ฟังเห็น "เหตุ" ก่อน "ผล": 1) **`Judging by + N/V-ing, ...`** (ดูจาก...แล้ว): `Judging by her smile, the interview must have gone well.` 2) **`Based on what he said, ...`** (จากสิ่งที่เขาพูด...): `Based on his email, they may postpone the launch.` 3) **`Chances are (that)...`** (มีโอกาสสูงที่...): `Chances are they’re stuck on the expressway.` 4) **`It’s bound to + V1`** (ยังไงก็ต้องเป็นแบบนั้นแน่ๆ) vs **`It’s unlikely to + V1`** (ไม่น่าจะเกิด) การวางกรอบหลักฐานก่อนสรุปทำให้คำพูดของคุณน่าเชื่อถือและสุภาพขึ้นทันตา',
      sound: [
        'Linking in Evidence Starters',
        'Judging by /ˈdʒʌdʒ.ɪŋ baɪ/ · Chances are /ˈtʃɑːn.sɪz ɑːr/ · unlikely /ʌnˈlaɪk.li/',
        'วลี "Judging by..." ออกเสียงนำเบาแล้วหยุดจังหวะสั้นๆ (comma pause) ก่อนปล่อยข้อสรุป ส่วน "Chances are" เชื่อมท้าย -es (/ɪz/) เข้า "are" เป็น "แชน-ซิ-ซาร์"',
        'ฝึกพูด 3 วลีเปิดประโยคให้จังหวะน่าฟัง: "Judging by the look on his face, ... | Based on the data, ... | Chances are..."',
      ],
      l1: [
        'พูดว่า "See from his face, he must angry" หรือ "Maybe 100% he didn’t come."',
        'แปลตรงตัว "ดูจาก..." เป็น See from... และใช้ maybe กับ 100% ซึ่งขัดแย้งกันเองในภาษาอังกฤษ',
        'แทนคำว่า "ดูจาก..." ด้วย Judging by + คำนาม และหลีกเลี่ยงการใช้ maybe คู่กับคำมั่นใจสูง ให้ใช้ Judging by... + must be/have แทน',
      ],
      vocab: [
        ['judging by', 'เมื่อพิจารณาดูจาก...', '/ˈdʒʌdʒ.ɪŋ baɪ/', 'judging by the tone', 'ดูจากน้ำเสียงแล้ว'],
        ['chances are', 'มีแนวโน้มสูงว่า...', '/ˈtʃɑːn.sɪz ɑːr/', 'chances are they forgot', 'มีโอกาสสูงที่พวกเขาจะลืม'],
        ['bound to', 'ย่อมต้อง...อย่างแน่นอน', '/baʊnd tuː/', 'bound to happen', 'ต้องเกิดขึ้นแน่นอน'],
        ['unlikely', 'ไม่น่าเป็นไปได้', '/ʌnˈlaɪk.li/', 'highly unlikely', 'แทบเป็นไปไม่ได้เลย'],
        ['jump to conclusions', 'ด่วนสรุปโดยไม่มีหลักฐานพอ', '/dʒʌmp tə kənˈkluː.ʒənz/', 'avoid jumping to conclusions', 'หลีกเลี่ยงการด่วนสรุป'],
        ['indication', 'สัญญาณบ่งชี้', '/ˌɪn.dɪˈkeɪ.ʃən/', 'a clear indication', 'สัญญาณบ่งชี้ที่ชัดเจน'],
        ['consistent', 'สอดคล้องกัน', '/kənˈsɪs.tənt/', 'consistent with the facts', 'สอดคล้องกับข้อเท็จจริง'],
      ],
      examples: [
        ['Judging by the quiet hallway, most teams must have left early for the holiday.', 'ดูจากโถงทางเดินที่เงียบกริบ ทีมส่วนใหญ่น่าจะกลับบ้านก่อนวันหยุดกันไปแล้ว'],
        ['Chances are the courier will arrive later this afternoon instead.', 'มีโอกาสสูงที่คนส่งของจะมาถึงช่วงบ่ายแก่ๆ วันนี้แทน'],
        ['It’s highly unlikely that she missed the deadline on purpose.', 'ไม่น่าเป็นไปได้สูงเลยที่เธอจะตั้งใจส่งงานช้ากว่ากำหนด'],
        ['Before blaming anyone, let’s check if our timeline is consistent with the logs.', 'ก่อนจะโทษใคร มาตรวจดูก่อนว่าไทม์ไลน์เราสอดคล้องกับบันทึกหรือเปล่า'],
      ],
      reading:
        'When we read short text messages from busy colleagues, it is easy to jump to conclusions. For instance, if a teammate replies only with "Okay, noted," we might assume they sound annoyed. However, judging by their packed calendar, chances are they simply typed between back-to-back meetings! Learning to separate clear facts from quick guesses protects workplace trust. First, look for more than one indication before deciding what someone meant. If a partner misses two calls and leaves an urgent project untouched, there must be a solid reason—perhaps a family emergency or a sudden travel delay. On the other hand, if their replies are consistent with their usual short style, it’s unlikely that anything is wrong. Pausing to weigh the evidence keeps every conversation calm and fair.',
      listenQ: 'Why might a teammate reply only with "Okay, noted" according to the reading?',
      listenA: 'Because they may simply be typing between back-to-back meetings.',
      dictation: 'Judging by his calm tone, everything must be fine.',
      listenNote:
        'สังเกตจังหวะหยุดหายใจสั้นๆ ตรงเครื่องหมายจุลภาคหลังคำว่า "tone" แล้วตามด้วยข้อสรุป "everything must be fine"',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้สำนวนแปลตรงตัวที่ผิดโครงสร้าง: "Look from these muddy shoes by the door, someone maybe 100% went hiking early."',
          answer:
            'Judging by these muddy shoes by the door, someone must have gone hiking early.',
          explanation:
            'เปลี่ยน "Look from" เป็น Judging by + คำนาม และแทน "maybe 100%" ด้วย must have + V3 (gone)',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้วลีประเมินโอกาสได้ถูกต้องและไม่ด่วนสรุปเกินเหตุ?',
          answer:
            "It's unlikely that the train was canceled without an announcement.",
          choices: [
            "It's unlikely that the train was canceled without an announcement.",
            "It's unlikely for the train must be canceled without an announcement.",
            "Judging with the clock, the train can't be arrive soon.",
            'Chances are impossible that the train was canceled.',
          ],
          explanation:
            'ใช้ It’s unlikely that + ประโยค เพื่อบอกความไม่น่าจะเป็นไปได้; judging ใช้กับ by และ chances are ใช้คู่กับสิ่งที่พอมีโอกาส',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบสำนวน: Don’t _____ to conclusions until you read the whole message thread.',
          answer: 'jump',
          explanation:
            'jump to conclusions = ด่วนตัดสิน/ด่วนสรุปเร็วเกินไป',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ดูจากที่จอดรถที่แน่นขนาดนี้ วันนี้ตลาดต้องคนเยอะมากแน่ๆ"',
          answer:
            'Judging by the crowded parking lot, the market must be packed today.',
          explanation:
            'ใช้ Judging by + noun phrase แล้วสรุปด้วย must be',
        },
      ],
      writing:
        'เขียนย่อหน้าแนะนำเพื่อนที่ไม่ค่อยกล้าถามตรงๆ เวลาอ่านแชทสั้นๆ จากเจ้านายหรือเพื่อนร่วมงาน 5–6 ประโยค โดยใช้ judging by, jump to conclusions, chances are และ unlikely',
      writingSample:
        "When my friend receives a brief message like 'Let's talk tomorrow,' she immediately jumps to conclusions and worries all night. I always remind her to check the facts calmly before assuming the worst. Judging by her strong feedback last month, it's highly unlikely that anything serious is wrong. Chances are her manager simply wants to plan next quarter's schedule face to face. Looking for real evidence saves so much unnecessary stress.",
      writingNote:
        'เช็กคำหลัง Judging by ต้องเป็นคำนามหรือ V-ing เสมอ (ห้ามใช้ Judging by + ประโยคที่มีกริยาแท้)',
      speakingTopic: 'แยกข้อเท็จจริงออกจากการด่วนสรุป (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าตัวอย่างเวลาคนมักเข้าใจแชทหรือสีหน้าคนอื่นผิด (เช่น ตอบสั้น หรือหน้าบึ้ง)',
        'ฝึกใช้วลีเปิดประโยค: Judging by..., Based on..., Chances are..., It’s unlikely that...',
        'คุมทำนองหยุดจังหวะตรงจุลภาคให้ผู้ฟังตามตรรกะทันทุกท่อน',
      ],
    },
    {
      day: 147,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 21: การคาดเดาอย่างมีเหตุผล & Dictogloss',
      objective:
        'ประมวลผลการใช้ Modals of Deduction ทั้งปัจจุบัน กำลังทำ อดีต และความเสียดายย้อนหลัง รวมถึงการจับเสียง weak form /əv/ ผ่าน Dictogloss',
      explanation:
        'ครบสัปดาห์ที่ 21 แล้วครับ! วันนี้เรามารวมภาพใหญ่ของ Modals of Deduction เพื่อเช็กว่าคุณเลือกใช้ได้แม่นยำตาม **"เวลา + ระดับความมั่นใจ"** จริงหรือยัง: 1) **เดาปัจจุบัน**: `must be / might be / can’t be` (และ `+ V-ing` ถ้ากำลังเกิดขึ้นตอนนี้) 2) **เดาอดีต**: `must have / might have / couldn’t have + V3` 3) **เสียดาย/วิจารณ์อดีต**: `should have / shouldn’t have / could have + V3` ท่องหลัก 3 ข้อจำง่าย: **ห้ามใช้ `mustn’t` ในการคาดเดา (ใช้ `can’t` แทน)**, **ห้ามเขียน `of` แทน `have`**, และ **อย่าลืม `be` หน้า `-ing`**! วันนี้มีฝึก Dictogloss จับความจากเสียงพูดเร็วด้วยนะครับ',
      sound: [
        'Week 21 Weak-Form & Contraction Recap',
        "must have /ˈmʌs.təv/ · shouldn't have /ˈʃʊd.n̩t.əv/ · can't be /ˈkɑːnt.bi/ · judging by /ˈdʒʌdʒ.ɪŋ baɪ/",
        'ทบทวนจังหวะการกลืนเสียง /t/ ใน must be และลดเสียง have เป็น /əv/ ในทุกประโยคอดีต เพื่อเพิ่มทั้งความเร็วในการฟังและพูด',
        'Shadowing บทอ่านวันนี้รวดเดียว 2 รอบ โดยทำเครื่องหมายเน้นเสียงเฉพาะคำสำคัญ (content words)',
      ],
      l1: [
        'เมื่อต้องสลับระหว่างการเดาปัจจุบันกับอดีตในเรื่องเดียวกัน มักเผลอกลับไปใช้ V2 หลัง must หรือสับสนระหว่าง couldn’t have (เป็นไปไม่ได้) กับ shouldn’t have (ไม่น่าทำเลย)',
        'ความหมายภาษาไทยคำว่า "ไม่น่า..." ฟังคล้ายกันมาก ทั้ง "ไม่น่าใช่หรอก" (impossibility) และ "ไม่น่าทำเลย" (regret)',
        'แยกคำว่า "ไม่น่า" ในใจเป็น 2 ภาษา: "ไม่มีทางใช่หรอก" = can’t / couldn’t have · "ไม่น่าทำพลาดเลย" = shouldn’t have!',
      ],
      vocab: [
        ['deduce', 'อนุมาน / วิเคราะห์สรุป', '/dɪˈdjuːs/', 'deduce from the clues', 'วิเคราะห์สรุปจากเบาะแส'],
        ['probability', 'ความน่าจะเป็น', '/ˌprɒb.əˈbɪl.ə.ti/', 'assess the probability', 'ประเมินความน่าจะเป็น'],
        ['oversight', 'ความพลั้งเผลอ / มองข้าม', '/ˈəʊ.və.saɪt/', 'an honest oversight', 'ความพลั้งเผลอโดยไม่เจตนา'],
        ['confirm', 'ยืนยัน', '/kənˈfɜːm/', 'confirm the suspicion', 'ยืนยันข้อสันนิษฐาน'],
        ['speculate', 'คาดการณ์โดยยังไม่ฟันธง', '/ˈspek.jə.leɪt/', 'speculate about the cause', 'คาดเดาเกี่ยวกับสาเหตุ'],
        ['misleading', 'ทำให้เข้าใจผิด', '/ˌmɪsˈliː.dɪŋ/', 'a misleading clue', 'เบาะแสที่ชวนเข้าใจผิด'],
        ['clarify', 'ทำให้กระจ่าง', '/ˈklær.ɪ.faɪ/', 'clarify what happened', 'ชี้แจงให้กระจ่างว่าเกิดอะไรขึ้น'],
      ],
      examples: [
        ['Judging by the wet umbrella, she must have walked through heavy rain.', 'ดูจากร่มที่เปียกชุ่ม เธอต้องเดินฝ่าฝนหนักมาแน่ๆ'],
        [
          "They can't be finished already because the meeting just started.",
          'พวกเขายังไม่มีทางประชุมเสร็จหรอก เพราะการประชุมเพิ่งเริ่มเมื่อกี้เอง',
        ],
        ['In hindsight, we should have confirmed the delivery address earlier.', 'พอมองย้อนกลับไป เราน่าจะยืนยันที่อยู่จัดส่งให้เร็วกว่านี้'],
        ['At first that clue looked misleading, so I refused to speculate blindly.', 'ตอนแรกเบาะแสนั้นดูชวนเข้าใจผิด ฉันเลยไม่ยอมเดาสุ่ม'],
      ],
      reading:
        'Last Tuesday, our community garden suffered an unexpected surprise: every tomato plant in the corner bed looked dry, even though the automated timer usually watered them at dawn. Before blaming anyone, volunteers gathered around to assess the probability of each cause. Judging by the damp soil in the middle beds, the main valve couldn’t have been shut off. Someone might have stepped on the thin corner hose, or a tiny pebble could have blocked the nozzle. Sure enough, when Uncle Chai lifted the hose, a kink appeared right under a heavy flowerpot. "Ah, I shouldn’t have moved that heavy pot yesterday without checking underneath!" he laughed. In hindsight, we could have taped bright markers along the narrow border. Clarifying what happened kept everyone cheerful and saved the plants in time.',
      listenQ: 'What did Uncle Chai realize he shouldn’t have done the day before?',
      listenA: 'He shouldn’t have moved the heavy flowerpot without checking underneath.',
      dictation: 'The main valve could not have been shut off.',
      listenNote:
        'ระวังการแยกเสียงระหว่าง "couldn’t have" (เชื่อมเป็น "คุด-นึท-เทิฟ") กับ "shouldn’t have" ในการฟังต่อเนื่อง',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังประโยคจากบทอ่านแล้วเลือกกลุ่มคำที่เติมช่องว่างได้ตรงตามหลักฐานและความหมาย: "Judging by the damp soil, the main valve _____ shut off, though someone _____ on the thin corner hose."',
          answer: "couldn't have been / might have stepped",
          choices: [
            "couldn't have been / might have stepped",
            "mustn't have been / must have stepped",
            "shouldn't have been / can't have stepped",
            'could have been / should have stepped',
          ],
          explanation:
            'ดินตรงกลางยังชื้นอยู่ แสดงว่าวาล์วหลัก "ไม่มีทางถูกปิด" (couldn’t have been) ส่วนสายยางมุมสวน "อาจมีคนไปเหยียบเข้า" (might have stepped)',
          audio_text:
            "Judging by the damp soil, the main valve couldn't have been shut off, though someone might have stepped on the thin corner hose.",
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคผสม 2 จุดจากบทเรียนสัปดาห์นี้: "Wait, Tom mustn’t be sleeping now—it’s 2 p.m.! And he should checked his calendar yesterday."',
          answer:
            "Wait, Tom can't be sleeping now—it's 2 p.m.! And he should have checked his calendar yesterday.",
          explanation:
            '1) คาดเดาว่าไม่น่าใช่ใช้ can’t be (ไม่ใช่ mustn’t be) 2) เสียดายอดีตใช้ should have + V3 (checked)',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ "ไม่น่าเลย" กับเหตุการณ์อดีตได้ถูกต้องตรงความหมายว่า "ไม่น่าซื้อตั๋วแบบคืนเงินไม่ได้เลย"?',
          answer: "We shouldn't have bought non-refundable tickets.",
          choices: [
            "We couldn't have bought non-refundable tickets.",
            "We shouldn't have bought non-refundable tickets.",
            "We mustn't have bought non-refundable tickets.",
            "We mightn't bought non-refundable tickets.",
          ],
          explanation:
            'แสดงความเสียดายกับการตัดสินใจที่ทำไปแล้วในอดีตใช้ shouldn’t have + V3',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ดูจากข้อความที่ค้างอยู่ เธออาจจะกำลังเตรียมสไลด์อยู่ก็ได้"',
          answer:
            'Judging by the pending messages, she might be preparing her slides right now.',
          explanation:
            'ผสม Evidence Starter (Judging by...) เข้ากับ Present Continuous Deduction (might be + V-ing)',
        },
      ],
      writing:
        'เขียนเรื่องสั้นแนว "คลี่คลายเรื่องเข้าใจผิด" 6–7 ประโยค โดยใช้ให้ครบทั้งเดาปัจจุบัน (must be / can’t be), เดาอดีต (might have / couldn’t have + V3) และบทเรียน (should have / could have + V3)',
      writingSample:
        "Yesterday evening, my roommate didn't reply to three texts, and the kitchen light stayed on past midnight. At first, I thought he must be working late at the library, yet his shoes were still by the door. That meant he couldn't have gone out! Judging by the quiet music coming from his room, he might have fallen asleep with his headphones on. When I knocked gently, he woke up surprised and laughed at his oversight. In hindsight, I should have knocked earlier instead of worrying for an hour, and he could have set a quick phone reminder before resting.",
      writingNote:
        'ตรวจสอบความสอดคล้องของเวลาในทุกประโยค: ปัจจุบันใช้ modal + (be) V1/-ing ส่วนอดีตใช้ modal + have + V3',
      speakingTopic: 'สรุปสัปดาห์ 21: เล่าเหตุการณ์ที่มีการเดา + เช็กหลักฐาน + บทเรียน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'รวมครบ 3 ช่วง: ตอนแรกเห็นเบาะแสอะไรและเดาว่ายังไง -> ความจริงคืออะไร -> มองย้อนกลับไปแล้วน่าจะทำอะไรต่างออกไป',
        'ตรวจสอบตัวเองไม่ให้หลุดคำว่า mustn’t be หรือ must of และออกเสียง -əv ให้เป็นธรรมชาติ',
      ],
    },
  ]
);
