import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 2: เล่าเรื่อง ตอบโต้ และเชื่อมความคิดในชีวิตประจำวัน';

export const WEEK12: ModuleSeed = createModule(
  {
    week: 12,
    phase: 2,
    phase_title: PHASE_TITLE,
    cefr_level: 'Low B1',
    title: 'Modals แห่งความจำเป็น คำแนะนำ และการคาดการณ์เบาๆ',
    summary:
      'เลือกใช้ must vs have to (แรงผลักภายใน vs กฎภายนอก) และอดีต had to, แยกขาด mustn\'t vs don\'t have to, คำแนะนำ 3 ระดับ (should/ought to/had better), ขอร้องสุภาพ และ should have + V3',
    focus: 'must vs have to, mustn\'t vs don\'t have to, Advice & Requests, should have + V3',
  },
  [
    {
      day: 78,
      title: 'ต้องทำ! แยก must (ใจอยาก/สำคัญกับตัวเอง) vs have to (กฎภายนอก) และอดีต had to',
      objective:
        'เลือกใช้ must กับ have/has to ได้ตรงตามแหล่งที่มาของความจำเป็น และเปลี่ยนเป็น had to + V1 เมื่อเล่าความจำเป็นในอดีต (ไม่ใช้ musted)',
      explanation:
        'ในภาษาไทยเราใช้คำว่า **"ต้อง"** คำเดียวหมดเลย แต่ในภาษาอังกฤษแยกน้ำหนักความรู้สึกต่างกันชัดเจนครับ:\n1) **`must + V1`** = **ความจำเป็นมาจากข้างในใจผู้พูดเอง** หรือรู้สึกว่าสำคัญมากกับตัวเอง (Personal Urgency) เช่น `I **must call** my mom tonight—I haven\'t talked to her all week!` (ฉันบอกตัวเองว่าต้องโทร!)\n2) **`have to / has to + V1`** = **ความจำเป็นมาจากกฎเกณฑ์ ตาราง หรือคนอื่นสั่ง (External Rule)** เช่น `Staff **have to wear** aprons in the kitchen.` หรือ `She **has to submit** the report by five.`\n3) **ข้อบังคับในอดีตใช้ `had to + V1` เท่านั้น!** คำว่า **`must` ไม่มีรูปอดีต** นะครับ ❌ ห้ามพูด *Yesterday I must work late* → ✅ ต้องพูดว่า `Yesterday I **had to** work late.` (และรูปคำถาม/ปฏิเสธในปัจจุบันของ have to ใช้ `Do/Does ... have to?` เช่น `Do we have to sign in?`)',
      sound: [
        'Natural Reductions: have to /ˈhæf.tə/ & has to /ˈhæs.tə/',
        'have to /ˈhæf.tə/ · has to /ˈhæs.tə/ · had to /ˈhæt.tə/ · helmet /ˈhel.mət/',
        'เวลาพูดว่า "I have to go" เจ้าของภาษาไม่ออกเสียง /v/ ของ have แต่เปลี่ยนเป็นเสียง /f/ เชื่อม to เลย: "ไอ-แฮฟ-เทอะ-โก" (/aɪ ˈhæf.tə ɡəʊ/) และ "has to" อ่าน "แฮส-เทอะ" (/ˈhæs.tə/) ไม่ใช่ "แฮซ ทู"!',
        'ฝึกอ่านรวบจังหวะ: "I ˈhæf-tə wake up" / "She ˈhæs-tə wear a helmet" / "Yesterday we ˈhæt-tə wait"',
      ],
      l1: [
        'ใส่ to หลัง must ("I must to go now"), ใช้ must กับเหตุการณ์เมื่อวาน ("Last night I must stay at work"), หรือถามว่า "Have you to go?"',
        'เคยชินกับการต่อคำว่า "ต้อง" ด้วย "to" เสมอ และไม่รู้ว่า must เป็น Modal Verb ที่ไม่มีรูปอดีตจึงต้องแปลงร่างเป็น had to',
        'จำ 3 กฎทันที: 1) หลัง must ห้ามมี to! 2) อดีตของทั้ง must และ have to ใช้ had to + V1 ตัวเดียวจบ! 3) have to ฟังออกเสียงว่า "แฮฟ-เทอะ" และคำถามใช้ Do you have to...?',
      ],
      vocab: [
        ['regulation', 'กฎระเบียบ', '/ˌreɡ.jəˈleɪ.ʃən/', 'follow safety regulations', 'ปฏิบัติตามกฎความปลอดภัย'],
        ['helmet', 'หมวกกันน็อก', '/ˈhel.mət/', 'wear a helmet', 'สวมหมวกกันน็อก'],
        ['shift', 'กะการทำงาน', '/ʃɪft/', 'work the morning shift', 'เข้ากะเช้า'],
        ['apron', 'ผ้ากันเปื้อน', '/ˈeɪ.prən/', 'put on a clean apron', 'ใส่ผ้ากันเปื้อนสะอาด'],
        ['overtime', 'ทำงานล่วงเวลา', '/ˈəʊ.və.taɪm/', 'work unexpected overtime', 'ทำงานล่วงเวลาอย่างกะทันหัน'],
        ['signature', 'ลายเซ็น', '/ˈsɪɡ.nə.tʃər/', 'get a manager\'s signature', 'ขอลายเซ็นผู้จัดการ'],
      ],
      examples: [
        ['I must remember to buy my father a birthday card before Friday.', 'ฉันต้องจำไว้ให้ได้ว่าต้องซื้อการ์ดวันเกิดให้พ่อก่อนวันศุกร์ (เตือนตัวเอง)'],
        ['All scooter riders have to wear a helmet under city traffic laws.', 'ผู้ขับขี่สกู๊ตเตอร์ทุกคนต้องสวมหมวกกันน็อกตามกฎหมายจราจรของเมือง'],
        ['Last night, our team had to stay until nine to fix a broken file.', 'เมื่อคืนนี้ ทีมของเราจำเป็นต้องอยู่ต่อถึงสามทุ่มเพื่อแก้ไฟล์ที่เสีย'],
        ['Does Maya have to wear an apron when she works the afternoon shift?', 'มายาต้องใส่ผ้ากันเปื้อนเวลาเธอเข้ากะบ่ายหรือเปล่า?'],
      ],
      reading:
        'Starting a part-time café job has taught Ton the difference between personal goals and workplace rules. During the morning rush, every staff member has to follow strict kitchen regulations: baristas have to tie back long hair, put on a clean apron, and wash their hands every hour. Yesterday evening was especially busy because a tour group arrived right before closing, so Ton had to work forty minutes of overtime and mop the entire floor twice. By the time he rode his bicycle home, his legs felt heavy. Looking in the mirror, Ton told himself quietly, "I really must go to bed before eleven tonight, and I must drink more plain water tomorrow!" Even when nobody forces him, taking care of his own health is something he feels from the inside.',
      listenQ: 'Why did Ton have to work forty minutes of overtime yesterday evening?',
      listenA: 'Because a tour group arrived right before closing.',
      dictation: 'Every staff member has to follow strict kitchen regulations.',
      listenNote: 'สังเกตเสียง "has to" ออกเป็น /ˈhæs.tə/ ("แฮส-เทอะ") และเสียงท้ายพหูพจน์ "regulations" ออก /z/ ชัดท้ายประโยค',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคเกี่ยวกับความจำเป็นที่ผิด 2 จุด: "Yesterday I must to catch a late train, and today my sister have to sign this form."',
          answer: 'Yesterday I had to catch a late train, and today my sister has to sign this form.',
          explanation: '1) ความจำเป็นในอดีตใช้ had to + V1 (ไม่มี must to ในอดีต) 2) my sister เป็นเอกพจน์ต้องใช้ has to',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้คำถามและรูปประโยคความจำเป็นได้อย่างถูกต้องตามหลักไวยากรณ์?',
          answer: 'Do we have to bring our own pens, or will the office provide them?',
          choices: [
            'Must we to bring our own pens, or will the office provide them?',
            'Have we to bring our own pens, or will the office provide them?',
            'Do we have to bring our own pens, or will the office provide them?',
            'Did we had to bring our own pens yesterday?',
          ],
          explanation: 'รูปคำถามของ have to ใช้ Do/Does + ประธาน + have to + V1',
        },
        {
          kind: 'gap',
          prompt: 'เติมรูปอดีตของความจำเป็น: Our street flooded on Monday, so we _____ (have to) park two blocks away.',
          answer: 'had to',
          explanation: 'เหตุการณ์เกิดวันจันทร์ที่ผ่านมา (on Monday) จึงใช้รูปอดีต had to',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ฉันต้องรีบนอนเร็วขึ้นคืนนี้ (เตือนตัวเอง) เพราะพรุ่งนี้ฉันต้องเข้ากะเช้า"',
          answer: 'I must go to bed earlier tonight because tomorrow I have to work the morning shift.',
          explanation: 'เตือนตัวเองจากข้างในใช้ must go ส่วนตารางกะงานใช้ have to work',
        },
      ],
      writing:
        'เขียนเปรียบเทียบ "สิ่งที่ตัวคุณรู้สึกว่าต้องทำเพื่อตัวเอง (`I must...`)" กับ "กฎหรือหน้าที่ที่ต้องทำตามระบบ/งาน (`have/has to...`)" และ "สิ่งที่จำเป็นต้องทำเมื่อสัปดาห์ก่อน (`had to...`)" รวม 5 ประโยค',
      writingSample:
        'This week has been full of small responsibilities. At my office, everyone has to tap a security card at the front gate and keep the shared kitchen clean. Also, my teammate has to submit weekly notes every Friday afternoon. Yesterday, our printer jammed before a client arrived, so we had to rush to a copy shop across the street. Honestly, I feel like I really must organize my sleep schedule better starting tonight!',
      writingNote: 'เช็ก 3 จุด: หลัง must ไม่มีคำว่า to · อดีตใช้ had to เท่านั้น · หลัง had to/has to ใช้ V1 ไม่ผันรูป',
      speakingTopic: 'แยกเล่า "ความจำเป็นจากใจ (must) vs กฎจากภายนอก (have to) vs อดีต (had to)" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ยกตัวอย่างกฎที่ทำงาน/ที่บ้าน/บนถนนด้วย have to และความตั้งใจเตือนตัวเองด้วย must (ไม่มี to)',
        'ออกเสียง "have to" เป็น /ˈhæf.tə/ และ "has to" เป็น /ˈhæs.tə/ ให้ลื่นปาก',
      ],
    },
    {
      day: 79,
      title: 'จุดพลาดใหญ่ของคนไทย: mustn\'t (ห้ามเด็ดขาด!) vs don\'t have to (ไม่จำเป็นต้องทำ)',
      objective:
        'แยกความหมายตรงกันข้ามระหว่าง mustn\'t (ข้อห้ามเด็ดขาด) และ don\'t/doesn\'t have to (ไม่จำเป็นต้องทำ อยากทำก็ได้ไม่ทำก็ได้) เพื่อสื่อสารโดยไม่เผลอสั่งห้ามคนอื่นผิด',
      explanation:
        'ถึงแม้ประโยคบอกเล่า `must` กับ `have to` จะคล้ายกันมาก แต่พอทำเป็น **"รูปปฏิเสธ"** ความหมายจะแยกไปคนละโลกเลยครับ!\n- **`mustn\'t + V1`** = **⛔ ห้ามทำเด็ดขาด! (Forbidden / Not allowed)** ถ้าทำแล้วผิดกฎหรืออันตราย เช่น `You **mustn\'t touch** those wet wires.` (ห้ามจับสายไฟเปียกเด็ดขาด!)\n- **`don\'t / doesn\'t have to + V1`** = **✅ ไม่จำเป็นต้องทำ (Optional / Not necessary)** จะทำก็ได้ ไม่ทำก็ได้ ไม่มีใครบังคับ เช่น `Tomorrow is a holiday—you **don\'t have to wake up** early!` (พรุ่งนี้วันหยุด คุณไม่ต้องตื่นเช้าก็ได้)\n**จุดพลาดสุดอันตรายของคนไทย**: เวลาอยากบอกเพื่อนต่างชาติว่า *"ไม่ต้องเกรงใจ / ไม่ต้องเอาของมาฝากนะ"* อย่าเผลอพูดว่า ❌ *"You mustn\'t bring food!"* (ฟังเหมือนโกรธและสั่งห้ามเอาอาหารเข้าบ้าน!) ต้องพูดว่า ✅ `You **don\'t have to** bring anything!`',
      sound: [
        'Silent /t/ in mustn\'t /ˈmʌs.ənt/ & Linking in don\'t have to',
        'mustn\'t /ˈmʌs.ənt/ · don\'t have to /dəʊnt ˈhæf.tə/ · doesn\'t have to /ˈdʌz.ənt ˈhæf.tə/ · optional /ˈɒp.ʃən.əl/',
        'ออกเสียงคำว่า "mustn\'t" ให้ถูกต้อง: ตัว t ตรงกลาง **ไม่ออกเสียง**! อ่าน 2 พยางค์ว่า **"มัส-เซิ่นท"** (/ˈmʌs.ənt/) ไม่ใช่ "มัส-เทิ่นท"!',
        'ฝึกพูดคู่เทียบตรงข้าม: "You ˈmʌs-ənt smoke here (ห้าม)" vs "You don\'t ˈhæf-tə wait for me (ไม่ต้องรอ)"',
      ],
      l1: [
        'ใช้ mustn\'t แทนคำว่า "ไม่ต้อง" เช่น "You mustn\'t pay now, you can pay later" (กลายเป็นห้ามจ่ายตอนนี้เด็ดขาด!) หรือใช้ "don\'t must"',
        'คิดว่ารูปปฏิเสธของ must ก็น่าจะแปลว่า "ไม่ต้อง" เหมือนภาษาไทยที่เติม "ไม่" หน้าคำว่า "ต้อง" ได้เลย',
        'จำสมการภาษาไทยให้แม่นก่อนพูดทุกครั้ง: "ห้ามทำ = mustn\'t" | "ไม่ต้องทำก็ได้ (ตามสบาย) = don\'t / doesn\'t have to"!',
      ],
      vocab: [
        ['strict', 'เข้มงวด / เคร่งครัด', '/strɪkt/', 'a strict rule', 'กฎที่เข้มงวด'],
        ['optional', 'ไม่บังคับ / เลือกได้ตามสมัครใจ', '/ˈɒp.ʃən.əl/', 'completely optional', 'ไม่บังคับเลย / เลือกทำได้'],
        ['permission', 'การอนุญาต', '/pəˈmɪʃ.ən/', 'without permission', 'โดยไม่ได้รับอนุญาต'],
        ['badge', 'บัตรประจำตัว/ป้ายชื่อ', '/bædʒ/', 'wear an entry badge', 'ติดบัตรผ่านเข้าออก'],
        ['formal', 'เป็นทางการ', '/ˈfɔː.məl/', 'formal attire', 'ชุดสุภาพเป็นทางการ'],
        ['locked', 'ที่ล็อกไว้แล้ว', '/lɒkt/', 'keep the gate locked', 'ล็อกประตูรั้วไว้เสมอ'],
      ],
      examples: [
        ['You mustn\'t leave hot drinks near the shared laptops in this room.', 'คุณห้ามวางเครื่องดื่มร้อนใกล้โน้ตบุ๊กส่วนกลางในห้องนี้เด็ดขาด'],
        ['Members don\'t have to wear formal clothes on Fridays at our studio.', 'สมาชิกไม่จำเป็นต้องใส่ชุดเป็นทางการในวันศุกร์ที่สตูดิโอของเรา'],
        ['Visitors mustn\'t take flash photos inside the ancient wooden temple.', 'ผู้เข้าชมห้ามถ่ายรูปเปิดแฟลชภายในโบสถ์ไม้โบราณเด็ดขาด'],
        ['She doesn\'t have to cook tonight because her brother already ordered soup.', 'คืนนี้เธอไม่ต้องทำกับข้าวก็ได้เพราะพี่ชายสั่งซุปไว้ให้แล้ว'],
      ],
      reading:
        'Welcome to your first day at Riverview Co-working Space! Before grabbing a desk, take two minutes to learn what is strict versus what is optional here. First, for everyone\'s comfort and safety, members mustn\'t place uncovered cups beside shared printers or leave the street door unlocked after nine at night. You also mustn\'t take loud phone calls inside the Quiet Reading Room—please step into a glass phone booth instead. On the bright side, our culture stays relaxed! You don\'t have to wear formal office clothes here; clean casual t-shirts and sneakers are completely fine. Plus, you don\'t have to carry your own heavy mug from home, since free ceramic cups and hot tea sit waiting in the pantry all day.',
      listenQ: 'Where mustn\'t members take loud phone calls at Riverview Co-working Space?',
      listenA: 'Inside the Quiet Reading Room.',
      dictation: 'You don\'t have to wear formal clothes on Fridays.',
      listenNote: 'สังเกตว่าเมื่อพูดเร็ว "don\'t have to" เชื่อมเป็น "โดน-แทฟ-เทอะ" โดยตัว t ท้าย don\'t เบาลง แต่ต้องแยกให้ออกจาก mustn\'t (/ˈmʌs.ənt/) ให้ขาด',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่แปลคำว่า "ไม่ต้อง" เป็น mustn\'t ผิดความหมาย 2 จุด: "It\'s Sunday tomorrow, so you mustn\'t wake up early, and your sister don\'t has to drive you."',
          answer: 'It\'s Sunday tomorrow, so you don\'t have to wake up early, and your sister doesn\'t have to drive you.',
          explanation: '1) ไม่จำเป็นต้องตื่นเช้าใช้ don\'t have to (ถ้าใช้ mustn\'t จะแปลว่าห้ามตื่น!) 2) your sister เอกพจน์ใช้ doesn\'t have to',
        },
        {
          kind: 'choice',
          prompt: 'สถานการณ์: ป้ายหน้าห้องแล็บเขียนว่า "อันตราย ห้ามบุคคลภายนอกเข้าเด็ดขาด" ควรเขียนประโยคใด?',
          answer: 'Visitors mustn\'t enter the lab without permission.',
          choices: [
            'Visitors don\'t have to enter the lab without permission.',
            'Visitors mustn\'t enter the lab without permission.',
            'Visitors haven\'t to enter the lab without permission.',
            'Visitors don\'t must enter the lab without permission.',
          ],
          explanation: 'ข้อห้ามเด็ดขาด (อันตราย/ผิดกฎ) ใช้ mustn\'t ส่วน don\'t have to แปลว่าอยากเข้าก็ได้ไม่อยากเข้าก็ได้ (ผิดความหมายมาก!)',
        },
        {
          kind: 'gap',
          prompt: 'เติมรูปปฏิเสธที่ตรงความหมาย "ไม่จำเป็นต้องทำ": Thanks for offering, but you _____ bring snacks—we already have plenty!',
          answer: 'don\'t have to',
          explanation: 'บอกเพื่อนอย่างใจดีว่า "ไม่ต้องเอามาเพิ่มหรอก (ตามสบาย)" ใช้ don\'t have to',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "คุณห้ามจอดรถตรงมุมถนนนี้เด็ดขาด แต่คุณไม่ต้องจ่ายค่าเข้าชม"',
          answer: 'You mustn\'t park on this corner, but you don\'t have to pay an entry fee.',
          explanation: 'ห้ามจอดเด็ดขาด = mustn\'t park · ไม่จำเป็นต้องจ่าย = don\'t have to pay',
        },
      ],
      writing:
        'เขียน "คู่มือต้อนรับเพื่อนที่มาพักที่บ้าน/คอนโดของคุณ หรือคู่มือที่ทำงานใหม่" 5–6 ประโยค โดยแยกให้ชัดระหว่าง **ข้อห้ามเด็ดขาด (`mustn\'t`)** 2 ข้อ และ **สิ่งที่ไม่ต้องทำก็ได้ ตามสบาย (`don\'t have to / doesn\'t have to`)** 3 ข้อ',
      writingSample:
        'Welcome to stay at my apartment this weekend! There are just two house rules: first, you mustn\'t wear outdoor shoes on the bedroom carpet, and second, you mustn\'t leave the balcony door open when you go out. Everything else is super easy! You don\'t have to bring a towel or soap because I prepared a clean basket for you. Also, you don\'t have to wake up early for breakfast—help yourself to the fridge anytime. My building has free parking too, so our guests don\'t have to pay anything extra.',
      writingNote: 'ตรวจสอบความหมายซ้ำอีกทีว่าประโยคที่เป็นคำใจดี ("ไม่ต้องเอามา / ไม่ต้องรีบ") ใช้ don\'t have to แล้ว ไม่ใช่ mustn\'t!',
      speakingTopic: 'แนะนำกฎข้อห้าม vs อิสระสบายๆ ของบ้าน/ออฟฟิศ/ฟิตเนส (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดสลับคู่ชัดๆ: "Two things you mustn\'t do..." (ห้ามเด็ดขาด) และ "Three things you don\'t have to worry about..." (ไม่ต้องทำก็ได้)',
        'ระวังการออกเสียง mustn\'t เป็น /ˈmʌs.ənt/ (ตัว t ตรงกลางไม่ออกเสียง!)',
      ],
    },
    {
      day: 80,
      title: 'ให้คำแนะนำ 3 ระดับน้ำหนัก: should, ought to และ had better (เตือนก่อนเจอผลเสีย!)',
      objective:
        'เลือกใช้ should/shouldn\'t (คำแนะนำทั่วไป), ought to (คำแนะนำเชิงเหตุผล/มารยาท) และ had better / \'d better (เตือนเร่งด่วนเมื่อมีผลเสียรออยู่) ได้ตรงระดับความแรง',
      explanation:
        'ไม่ใช่ทุกคำแนะนำจะมีน้ำหนักเท่ากันครับ! มาฝึกปรับระดับความแรงเวลาแนะนำคนอื่น 3 ขั้น:\n1) **`should / shouldn\'t + V1`** (ระดับกลาง — คำแนะนำทั่วไปที่เป็นมิตร): `You **should drink** more water.` / `You **shouldn\'t skip** breakfast.`\n2) **`ought to + V1`** (ระดับสุภาพ/เชิงหลักการ — ควรทำเพราะมันสมเหตุสมผลหรือถูกต้อง): `We **ought to thank** her for helping.` (เวลาพูดเร็วออกเสียง `/ˈɔː.tə/` — ใช้บอกเล่าเป็นหลัก ไม่ค่อยนิยมใช้ถาม)\n3) **`had better (\'d better) + V1`** และ **`had better not + V1`** (ระดับเข้ม/เร่งด่วน! — **"รีบทำดีกว่านะ ไม่งั้นเดี๋ยวซวย/เจอผลเสียตามมา!"**): เช่น `You**\'d better leave** now, or you\'ll miss the last ferry!` หรือ `We**\'d better not forget** our umbrellas—look at those clouds!`\n**จุดตายสำคัญ**: ถึงจะมีคำว่า `had` แต่ `had better` **พูดถึงตอนนี้และอนาคต** (ไม่ใช่อดีต!) และ **ห้ามใส่ `to` หลัง better เด็ดขาด!** (❌ *You had better to go* → ✅ `You\'d better go`)',
      sound: [
        'Weak Forms in ought to /ˈɔː.tə/ & \'d better /d ˈbet.ər/',
        'ought to /ˈɔː.tə/ · had better /hæd ˈbet.ər/ · traffic /ˈtræf.ɪk/ · shortcut /ˈʃɔːt.kʌt/',
        'ในคำพูดจริงคนแทบไม่พูดเต็มว่า "You had better" แต่มักย่อเสียง /d/ แตะเบาๆ ในปากเป็น "ยู-ดฺ-เบ็ท-เทอะ": "You\'d better check" และ "ought to" เชื่อมเป็น "ออท-เทอะ" (/ˈɔː.tə/)',
        'ฝึกพูดประโยคเตือน 3 ระดับน้ำเสียง: "You should rest" (เบา/ห่วงใย) → "You ought to call him" (มีเหตุผล) → "You\'d better hurry, or we\'ll miss it!" (เร่งด่วน)',
      ],
      l1: [
        'พูดว่า "You had better to take a taxi" (ใส่ to เกิน), "You hadn\'t better go" (ปฏิเสธผิดจุด), หรือใช้ had better ชม/แนะนำชิลๆ จนฟังเหมือนขู่เพื่อน ("You\'d better try this cake!")',
        'เห็นคำว่า better แล้วเผลอใส่ to ตามความเคยชิน หรือไม่รู้ว่า had better แฝงความหมาย "ไม่งั้นเดี๋ยวเกิดปัญหา"',
        'เช็ก 3 ข้อของ had better: 1) รูปปฏิเสธคือ had better NOT + V1 (not อยู่หลัง better!) 2) ห้ามมี to! 3) ใช้เฉพาะตอนมีผลเสียรออยู่ถ้าไม่ทำ (ถ้าแนะนำเรื่องดีๆ ทั่วไปใช้ should แทน!)',
      ],
      vocab: [
        ['rush hour', 'ชั่วโมงเร่งด่วน', '/ˈrʌʃ aʊər/', 'avoid evening rush hour', 'เลี่ยงชั่วโมงเร่งด่วนตอนเย็น'],
        ['battery', 'แบตเตอรี่', '/ˈbæt.ər.i/', 'low battery warning', 'เตือนแบตเตอรี่ใกล้หมด'],
        ['receipt', 'ใบเสร็จ', '/rɪˈsiːt/', 'hang onto the receipt', 'เก็บใบเสร็จไว้ก่อน'],
        ['shortcut', 'ทางลัด', '/ˈʃɔːt.kʌt/', 'take a quiet shortcut', 'ใช้ทางลัดที่เงียบสงบ'],
        ['sunscreen', 'ครีมกันแดด', '/ˈsʌn.skriːn/', 'put on sunscreen', 'ทาครีมกันแดด'],
        ['delay', 'ความล่าช้า', '/dɪˈleɪ/', 'cause a long delay', 'ทำให้ล่าช้าไปนาน'],
      ],
      examples: [
        ['You shouldn\'t scroll on your phone right before sleep if you want deep rest.', 'คุณไม่ควรไถโทรศัพท์ก่อนนอนทันทีถ้าอยากพักผ่อนหลับสนิท'],
        ['You should check the spare tire and brake lights before a long road trip.', 'คุณควรเช็กยางอะไหล่กับไฟเบรกก่อนขับรถทางไกลนะ'],
        ['We ought to bring our reusable bottles to cut down on plastic waste.', 'พวกเราควรพกขวดน้ำที่ใช้ซ้ำได้มาด้วยเพื่อช่วยลดขยะพลาสติก'],
        ['You\'d better charge your phone now, or it will die before we meet the driver!', 'คุณรีบชาร์จมือถือตอนนี้เลยดีกว่านะ ไม่งั้นเดี๋ยวแบตหมดก่อนเราเจอคนขับแน่!'],
      ],
      reading:
        'Preparing for a weekend drive to Khao Yai takes a little foresight. Before leaving Bangkok on Friday afternoon, Ben reviews a smart checklist with his sister May. "First, we really ought to check the weather radar and pack light rain jackets," May reminds him calmly. Ben nods and adds, "True, and you shouldn\'t wear brand-new white sneakers because muddy trails are common after rain." Checking the clock on the wall, May suddenly looks serious: "Whoa, it\'s already three thirty! We\'d better leave within ten minutes, or we\'ll hit awful rush-hour traffic on the highway." Ben grabs his car keys quickly, "Good call! Oh, and we\'d better not forget our portable phone chargers and printed parking receipt—our signal might drop near the hills!"',
      listenQ: 'Why does May say they had better leave within ten minutes?',
      listenA: 'Because otherwise they will hit awful rush-hour traffic on the highway.',
      dictation: 'You had better charge your phone before we leave home.',
      listenNote: 'สังเกตเสียงของ "had better" เมื่อพูดเร็วจะลดเหลือ "You\'d better" (/jʊd ˈbet.ər/) และเชื่อมต่อเข้า V1 (charge) ทันทีโดยไม่มี to คั่น',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคการใช้ had better ผิดรูปแบบ 2 จุด: "Look at that dark storm—we had better to close the windows, and you hadn\'t better drive fast."',
          answer: 'Look at that dark storm—we had better close the windows, and you had better not drive fast.',
          explanation: '1) หลัง had better ห้ามใส่ to (close) 2) รูปปฏิเสธที่ถูกคือ had better not + V1 (not วางหลัง better ไม่ใช่ hadn\'t)',
        },
        {
          kind: 'choice',
          prompt: 'สถานการณ์ใดเหมาะสมกับการใช้ "had better (\'d better)" มากที่สุด?',
          answer: 'เหลือเวลาอีก 5 นาทีก่อนประตูรถไฟปิด: We\'d better run to platform three right now!',
          choices: [
            'อยากชวนเพื่อนชิมขนมร้านโปรดชิลๆ: You\'d better try this mango sticky rice!',
            'เหลือเวลาอีก 5 นาทีก่อนประตูรถไฟปิด: We\'d better run to platform three right now!',
            'แนะนำให้เพื่อนพักผ่อนวันหยุด: You had better to sleep longer tomorrow.',
            'เล่าอดีตเมื่อสัปดาห์ก่อน: Yesterday I\'d better stay indoors all day.',
          ],
          explanation: 'had better ใช้เมื่อสถานการณ์เร่งด่วนและจะมีผลเสียตามมาทันที (ตกรถไฟ!) ส่วนชิมขนม/พักผ่อนใช้ should แทน และ had better ไม่ใช้เล่าอดีต',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบวลีปฏิเสธของ had better: The soup is boiling hot—you\'d _____ (better / not) taste it without a spoon first!',
          answer: 'better not',
          explanation: 'เตือนไม่ให้ทำเดี๋ยวปากพอง ใช้ \'d better not + V1',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "พวกเราควรรีบออกเดินทางตอนนี้ดีกว่า ไม่งั้นเดี๋ยวจะเจอกับรถติดช่วงชั่วโมงเร่งด่วน"',
          answer: 'We\'d better leave right now, or we\'ll hit rush-hour traffic.',
          explanation: 'เตือนเร่งด่วนมีผลเสียรออยู่ใช้ We\'d better leave..., or we\'ll...',
        },
      ],
      writing:
        'เขียน "คำแนะนำเตรียมตัวเดินทางหรือวันสำคัญ" ถึงเพื่อนสนิท 5–6 ประโยค โดยเรียงระดับให้ครบ: 2 คำแนะนำทั่วไป (`should / shouldn\'t`), 1 คำแนะนำเชิงเหตุผล (`ought to`), และ 2 คำเตือนเร่งด่วนที่มีผลเสียรออยู่ (`\'d better / \'d better not`)',
      writingSample:
        'Hey! Since you\'re riding a ferry to Koh Samet tomorrow morning, here are a few quick tips. You should pack light clothes and bring a reusable water bottle. Also, you ought to check which pier your ticket uses so you feel relaxed. Most importantly, you\'d better arrive thirty minutes early, or you might miss the boat! And you\'d better not sit on the front deck without sunscreen because the midday sun gets intense.',
      writingNote: 'เช็ก 3 กฎ: หลัง should/ought to (มี to เฉพาะ ought!)/had better กริยาต้องเป็น V1 และปฏิเสธของ had better คือ had better not',
      speakingTopic: 'แนะนำและเตือนเพื่อน 3 ระดับก่อนทริป/โปรเจกต์สำคัญ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ฝึกไล่น้ำเสียงจาก "ห่วงใยเบาๆ" (You should...) → "สมเหตุสมผล" (You ought to...) → "ด่วน ไม่งั้นซวย" (You\'d better... or...)',
        'ระวังไม่หลุดใส่ "to" หลัง better และพูด \'d better not ให้คล่อง',
      ],
    },
    {
      day: 81,
      title: 'ขออนุญาตและขอร้องอย่างสุภาพ + วิธีตอบ "Would you mind...?" ไม่ให้คนฟังงง',
      objective:
        'เลือกใช้ระดับความสุภาพในการขออนุญาตและขอร้อง (Can I / Could I / May I / Would you mind + V-ing?) และตอบคำถาม Would you mind...? ด้วย "Not at all!" อย่างถูกต้อง',
      explanation:
        'การขอร้องหรือขออนุญาตในภาษาอังกฤษมี "บันไดความสุภาพ 4 ขั้น":\n1) **`Can I / Can you...?`** (กันเอง สนิทกัน เพื่อน/ครอบครัว): `Can I borrow your charger?`\n2) **`Could I / Could you...?`** (สุภาพมาตรฐาน ใช้ได้ทุกสถานการณ์ ทั้งที่ทำงาน ร้านค้า เพื่อน): `Could you lower the music a bit?`\n3) **`May I...?`** (สุภาพเป็นทางการมากขึ้น มักใช้ขออนุญาตจากผู้ใหญ่/พนักงาน/ลูกค้า — **ห้ามใช้ *May you...?* ในการขอให้คนอื่นทำอะไรให้** นะครับ!): `May I sit here?`\n4) **`Would you mind + V-ing?`** / **`Would you mind if I + V2?`** (สุภาพมาก เกรงใจสุดๆ! แปลตรงตัวว่า *"คุณจะรังเกียจ/ขุ่นเคืองไหมถ้า...?"*)\n**จุดพลาดระดับตำนาน**: ถ้ามีคนถามว่า `"Would you mind opening the window?"` แล้วคุณ **ยินดีให้เปิด** ต้องตอบว่า **`"Not at all!"` / `"No, go ahead!"` (ไม่รังเกียจเลย ทำเลย!)** — **ห้ามตอบว่า `"Yes"`** เด็ดขาด เพราะ `"Yes"` แปลว่า **"ใช่ ฉันรังเกียจ (ห้ามเปิดนะ!)"** ครับ!',
      sound: [
        'Polite Rising Intonation & Linking in Would you mind',
        'would you mind /wʊdʒu maɪnd/ · could you /ˈkʊdʒu/ · not at all /nɒt ət ɔːl/ · charger /ˈtʃɑː.dʒər/',
        'เวลาพูดจริง "Would you..." และ "Could you..." เสียง /d/ + /j/ จะเชื่อมรวมเป็นเสียง /dʒ/: "วูด-จู-มายด์" (/wʊdʒu maɪnd/) และ "คุด-จู" (/ˈkʊdʒu/) ส่วน "Not at all!" เชื่อมทุกคำเป็น "นอท-แท-ทอล!" พร้อมน้ำเสียงยิ้มแย้ม',
        'ฝึกตอบคำขอร้อง 3 รอบให้ติดปากอัตโนมัติ: "Would you mind moving your bag?" → "Not at all! Go right ahead."',
      ],
      l1: [
        'ตอบคำถาม "Would you mind closing the door?" ว่า "Yes, sure!" (ความหมายขัดแย้งกันในประโยคเดียว!), ใส่ V1 หลัง mind ("Would you mind to open..."), หรือพูด "May you help me?"',
        'คิดตามคำแปลไทยว่า "ได้สิ = Yes" โดยลืมไปว่าคำว่า mind แปลว่า "รังเกียจ/ถือสา" การตอบ No / Not at all จึงแปลว่า "ไม่รังเกียจเลย"',
        'จำ 3 กฎทอง: 1) หลัง Would you mind ต้องใช้ V-ing เสมอ! 2) ยินยอมต่อ Would you mind...? ตอบว่า "Not at all!" / "No problem!" 3) ห้ามพูด "May you...?" ให้ใช้ Could you / Would you mind แทน!',
      ],
      vocab: [
        ['bother', 'รบกวน / กวนใจ', '/ˈbɒð.ər/', 'sorry to bother you', 'ขอโทษที่รบกวนนะ'],
        ['swap', 'แลกเปลี่ยน (ที่นั่ง/ของ)', '/swɒp/', 'swap seats', 'แลกที่นั่งกัน'],
        ['volume', 'ระดับเสียง', '/ˈvɒl.juːm/', 'turn down the volume', 'ลดเสียงลงหน่อย'],
        ['go ahead', 'เชิญทำได้เลย / ลุยเลย', '/ɡəʊ əˈhed/', 'please go ahead', 'เชิญทำได้เลยครับ/ค่ะ'],
        ['courteous', 'สุภาพอ่อนโยน', '/ˈkɜː.ti.əs/', 'a courteous request', 'คำขอที่สุภาพ'],
        ['outlet', 'ปลั๊กไฟติดผนัง', '/ˈaʊt.let/', 'use the power outlet', 'ใช้เต้ารับปลั๊กไฟ'],
      ],
      examples: [
        ['Could you pass me the green menu on that table, please?', 'รบกวนช่วยส่งเมนูสีเขียวบนโต๊ะนั้นให้หน่อยได้ไหมครับ?'],
        ['Would you mind turning down your phone volume for a few minutes?', 'คุณจะรังเกียจไหมครับถ้าจะช่วยลดเสียงโทรศัพท์ลงสักครู่?'],
        ['Not at all! Let me grab my earphones right away.', 'ไม่รังเกียจเลยค่ะ! เดี๋ยวฉันหยิบหูฟังมาใส่ทันทีเลย'],
        ['May I use the power outlet beside your seat while my laptop charges?', 'ขออนุญาตใช้ปลั๊กไฟข้างที่นั่งของคุณระหว่างชาร์จโน้ตบุ๊กได้ไหมครับ?'],
      ],
      reading:
        'Sharing a crowded long-distance train cabin goes much smoother when passengers use courteous requests. Halfway through a four-hour ride to Lampang, Dan notices his phone battery dropping to five percent. Looking across the small table, he smiles politely at a traveler wearing headphones. "Excuse me, sorry to bother you—may I use the empty power outlet under your window?" he asks gently. The woman takes off one earbud and replies warmly, "Sure, go right ahead!" Ten minutes later, an elderly couple boards at the next station holding heavy bags, hoping to sit side by side. Dan stands up and asks the woman quietly, "Would you mind swapping seats with the gentleman so they can sit together?" She laughs kindly and says, "Not at all! That\'s very thoughtful of you." A tiny dose of polite English turns a cramped cabin into a pleasant journey.',
      listenQ: 'How did the woman respond when Dan asked "Would you mind swapping seats..."?',
      listenA: 'She said, "Not at all!" (meaning she was happy to swap).',
      dictation: 'Would you mind swapping seats so we can sit together?',
      listenNote: 'สังเกตเสียงเชื่อม "Would you" (/wʊdʒu/) และเสียง /p/ + /ɪŋ/ ของ swapping รวมถึงการขึ้นเสียงท้ายคำถามอย่างนุ่มนวล',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคขอร้องและการตอบรับที่ผิด 2 จุด: "May you open the window? — Would you mind to help me move this chair? — Yes, I don\'t mind!"',
          answer: 'Could you open the window? — Would you mind helping me move this chair? — Not at all!',
          explanation: '1) ขอให้คนอื่นทำอะไรใช้ Could you...? (ไม่ใช้ May you) 2) หลัง Would you mind ใช้ V-ing (helping) 3) ยินยอมไม่รังเกียจตอบ Not at all! (ไม่ขึ้นต้นด้วย Yes)',
        },
        {
          kind: 'choice',
          prompt: 'เพื่อนร่วมโต๊ะถามคุณว่า "Would you mind if I turned off the small lamp?" แล้วคุณไม่ว่าอะไร เชิญปิดได้เลย ควรตอบข้อใด?',
          answer: 'Not at all! Go right ahead.',
          choices: [
            'Yes, please turn it off!',
            'Not at all! Go right ahead.',
            'Yes, I mind very much, thank you.',
            'No, you mustn\'t mind it.',
          ],
          explanation: 'Not at all! แปลว่าไม่รังเกียจเลย แล้วต่อด้วย Go right ahead (เชิญทำได้เลย) เพื่อไม่ให้ผู้ฟังสับสน',
        },
        {
          kind: 'gap',
          prompt: 'เติมรูปกริยาให้ถูกต้องหลัง mind: Sorry to bother you, would you mind _____ (speak) slightly slower?',
          answer: 'speaking',
          explanation: 'หลัง Would you mind ต้องใช้กริยาเติม -ing เสมอ (speaking)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ขอโทษที่รบกวนนะคะ คุณช่วยปิดประตูเบาๆ หน่อยได้ไหมคะ?"',
          answer: 'Sorry to bother you, would you mind closing the door gently?',
          explanation: 'ใช้ Sorry to bother you + would you mind + closing... หรือ Could you close...?',
        },
      ],
      writing:
        'เขียนบทสนทนาขอความช่วยเหลือ/ขออนุญาตในชีวิตจริง (บนรถไฟ, ร้านกาแฟ, หรือที่ทำงาน) 6 บรรทัด (A/B) โดยใช้ทั้ง `Could you...?`, `May I...?` และ `Would you mind + V-ing?` พร้อมตอบรับว่า `Not at all! / Go right ahead.`',
      writingSample:
        'A: Excuse me, sorry to bother you. May I sit in this empty chair?\nB: Sure, please go right ahead!\nA: Thank you so much. Oh, could you pass me a tissue from that box?\nB: Here you go!\nA: Thanks! By the way, would you mind letting me plug in my charger behind your table?\nB: Not at all! Let me move my backpack slightly so you can reach the outlet easily.',
      writingNote: 'ตรวจสอบคำตอบของ Would you mind ว่าใช้ Not at all! / No problem! (ไม่ใส่ Yes!) และกริยาหลัง mind เติม -ing แล้ว',
      speakingTopic: 'ซ้อมขอร้องสุภาพ 4 ระดับ + ตอบรับ "Not at all!" จนคล่องปาก (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ฝึกถาม-ตอบด้วยตัวเอง 4 สถานการณ์ (ขอยืมปากกา, ขอลดเสียงเพลง, ขอแลกที่นั่ง, ขอให้พูดช้าลง) โดยใช้ Can/Could/May/Would you mind ครบทุกระดับ',
        'เน้นฝึกออกเสียงเชื่อม "Would you" (/wʊdʒu/) และตอบทันทีว่า "Not at all!" โดยไม่เผลอพูด "Yes"',
      ],
    },
    {
      day: 82,
      title: 'ความเสียดายย้อนหลังด้วย should have + V3 / shouldn\'t have + V3 และเสียง "should-əv"',
      objective:
        'แสดงความเสียดายหรือวิจารณ์การกระทำในอดีตที่ย้อนกลับไปแก้ไม่ได้ด้วย should have + V3 (น่าจะทำ) และ shouldn\'t have + V3 (ไม่น่าทำเลย) พร้อมแยกเสียง "should-əv" ออกจากรูปสะกดผิด "should of"',
      explanation:
        'เมื่อเรื่องในอดีตผ่านไปแล้ว แต่เรามานึกย้อนหลังว่า **"รู้งี้ทำแบบนั้นดีกว่า / ไม่น่าทำแบบนั้นเลย!"** เจ้าของภาษาไม่ใช้ `should + V1` เฉยๆ (เพราะนั่นคือปัจจุบัน/อนาคต!) แต่ต้องใช้ **Past Modal: `should have + V3` / `shouldn\'t have + V3`** ครับ:\n- **`should have + V3`** = **เสียดายที่ตอนนั้นไม่ได้ทำ (น่าจะทำไว้!)**: เช่น `I **should have brought** an umbrella.` (ตอนนั้นไม่ได้เอาร่มมา ตอนนี้เปียกเลยเสียดาย!)\n- **`shouldn\'t have + V3`** = **เสียดายที่ตอนนั้นดันทำลงไป (ไม่น่าทำเลย!)**: เช่น `I **shouldn\'t have stayed** up so late last night.` (เมื่อคืนดันนอนดึก วันนี้เลยง่วง!)\n**เรื่องเสียงที่คนเรียนชอบเข้าใจผิด**: เวลาพูดเร็ว `should have` จะถูกลดรูปเป็น **"ชูด-เดิฟ"** (`/ˈʃʊd.əv/`) ทำให้บางคนเขียนผิดเป็น ❌ *"should of"*! จำไว้ว่ามันคือ **`should have`** เสมอ และต่อด้วย **V3**!',
      sound: [
        'Weak Reduction in should have /ˈʃʊd.əv/ & shouldn\'t have /ˈʃʊd.ənt.əv/',
        'should have /ˈʃʊd.əv/ · shouldn\'t have /ˈʃʊd.ənt.əv/ · regret /rɪˈɡret/ · overpriced /ˌəʊ.vəˈpraɪst/',
        'ฟังให้ออก: เจ้าของภาษามักพูด "I should-əv checked" (/aɪ ˈʃʊd.əv tʃekt/) หรือ "I shouldn\'t-əv eaten that" (/aɪ ˈʃʊd.ənt.əv ˈiː.tən ðæt/) — เสียง have ลดรูปเป็นแค่ /əv/ เบาๆ แต่เวลาเขียนต้องเป็น should have + V3 เท่านั้น!',
        'ฝึกพูดระบายความเสียดาย 4 ประโยคโดยเชื่อมเสียง have เป็น /əv/: "I should-əv left earlier / I shouldn\'t-əv bought that / We should-əv booked ahead"',
      ],
      l1: [
        'พูดว่า "Yesterday I should bring an umbrella" (ใช้ V1 เล่าความเสียดายอดีต) หรือเขียนผิดตามเสียงที่ได้ยินเป็น "I should of brought..."',
        'คิดว่า should คำเดียวใช้ได้กับทุกเวลาเหมือนคำว่า "น่าจะ/ควรจะ" ในภาษาไทย และสับสนเสียงลดรูป /əv/ กับคำว่า of',
        'เช็ก 2 จุดทันทีเมื่อเสียดายเรื่องที่ผ่านมาแล้ว: 1) ต้องมี have (ไม่ใช่ of!) 2) กริยาตัวหลังต้องเป็น V3 (brought, checked, eaten, slept, left)!',
      ],
      vocab: [
        ['regret', 'เสียใจ / เสียดายย้อนหลัง', '/rɪˈɡret/', 'deeply regret', 'เสียดายอย่างมาก'],
        ['oversleep', 'ตื่นสายเกินเวลา', '/ˌəʊ.vəˈsliːp/', 'overslept this morning', 'ตื่นสายเมื่อเช้านี้'],
        ['overpriced', 'แพงเกินราคา', '/ˌəʊ.vəˈpraɪst/', 'overpriced airport snacks', 'ขนมสนามบินที่ราคาแพงเกินไป'],
        ['skip', 'ข้าม / งดไป', '/skɪp/', 'skip breakfast', 'ข้ามมื้อเช้าไม่กิน'],
        ['backup', 'สำรอง', '/ˈbæk.ʌp/', 'keep a backup copy', 'เก็บสำเนาสำรองไว้'],
        ['check ahead', 'เช็กดูก่อนล่วงหน้า', '/tʃek əˈhed/', 'should have checked ahead', 'น่าจะเช็กดูก่อนล่วงหน้า'],
      ],
      examples: [
        ['I should have checked the weather forecast before washing my white shoes.', 'ฉันน่าจะเช็กพยากรณ์อากาศก่อนซักรองเท้าผ้าใบสีขาวเลย (ตอนนี้ฝนตกไม่แห้ง)'],
        ['We should have reserved a table ahead of time for Friday dinner.', 'พวกเราน่าจะจองโต๊ะล่วงหน้าไว้ก่อนสำหรับมื้อเย็นวันศุกร์'],
        ['She shouldn\'t have drunk that second iced espresso at five in the afternoon.', 'เธอไม่น่าดื่มเอสเปรสโซเย็นแก้วที่สองตอนห้าโมงเย็นเลย (ตอนนี้นอนไม่หลับ)'],
        ['My roommate shouldn\'t have skipped breakfast before a three-hour bike ride.', 'รูมเมทของฉันไม่น่าข้ามมื้อเช้าก่อนไปปั่นจักรยานสามชั่วโมงเลย'],
      ],
      reading:
        'Friday morning started with a comedy of tiny mistakes for Pete. First, he stayed up watching cooking videos until one thirty, so he overslept and skipped his morning coffee. "I really shouldn\'t have stayed up so late," Pete muttered while running for the skytrain. Worse still, he grabbed an empty backpack and left his folding umbrella by the front door. Ten minutes after stepping out of the station, heavy rain poured down without warning! While hiding under a shop awning, Pete ended up buying a cheap plastic raincoat and an overpriced sandwich near his office because his stomach was growling. Sitting at his desk with damp socks, he sighed and laughed at himself: "Honestly, I should have packed my umbrella last night, and I definitely should have eaten a quick banana before leaving home!"',
      listenQ: 'What two things did Pete regret not doing before leaving home?',
      listenA: 'He regretted not packing his umbrella last night and not eating breakfast (a quick banana) before leaving home.',
      dictation: 'I should have packed my umbrella before leaving home.',
      listenNote: 'ฝึกฟังเสียง "should have" ที่ลดรูปเป็น /ˈʃʊd.əv/ ("ชูด-เดิฟ") เชื่อมเข้า V3 (packed) — อย่าเขียนผิดเป็น should of!',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคความเสียดายย้อนหลังที่ผิด 2 จุด: "Yesterday I missed the bus! I should of wake up earlier, and I shouldn\'t drank coffee so late."',
          answer: 'Yesterday I missed the bus! I should have woken up earlier, and I shouldn\'t have drunk coffee so late.',
          explanation: '1) รูปที่ถูกคือ should have + V3 (woken up) ไม่ใช่ should of + V1 2) ปฏิเสธในอดีตคือ shouldn\'t have + V3 (drunk)',
        },
        {
          kind: 'choice',
          prompt: 'สถานการณ์: เพื่อนบ่นว่าปวดท้องมากเพราะเมื่อคืนกินบุฟเฟต์ดึกเกินไป คุณควรพูดแสดงความคิดเห็นย้อนหลังว่าอย่างไร?',
          answer: 'Oh no—you shouldn\'t have eaten so heavily right before bed!',
          choices: [
            'Oh no—you shouldn\'t eat so heavily last night!',
            'Oh no—you shouldn\'t have eaten so heavily right before bed!',
            'Oh no—you should of not ate so heavily last night!',
            'Oh no—you mustn\'t have eaten so heavily right before bed!',
          ],
          explanation: 'วิจารณ์สิ่งที่ทำไปแล้วในอดีตด้วยความห่วงใยใช้ shouldn\'t have + V3 (eaten)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบประโยคเสียดายย้อนหลัง: My laptop file vanished! I know I _____ (should / save) a backup copy earlier.',
          answer: 'should have saved',
          explanation: 'เสียดายที่ไม่ได้ทำในอดีตใช้ should have + V3 (saved)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "พวกเราน่าจะเช็กเวลาเปิดทำการก่อนออกจากบ้าน"',
          answer: 'We should have checked the opening hours before leaving home.',
          explanation: 'น่าจะทำในอดีต (แต่ไม่ได้ทำ) ใช้ We should have checked...',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์ "วันที่ผิดแผนเล็กๆ น้อยๆ" เมื่อเร็วๆ นี้ (เช่น ตื่นสาย, ลืมของ, ซื้อของพลาด, หรือฝนตก) 5–6 ประโยค โดยใช้ `should have + V3` และ `shouldn\'t have + V3` รวมกันอย่างน้อย 3 ประโยค',
      writingSample:
        'Last Sunday turned out much messier than I expected. I decided to visit a popular weekend market at noon without checking the crowd first. Honestly, I should have gone there around eight in the morning! Worse yet, I wore thin sandals and shouldn\'t have walked through the wet food alley in them. On top of that, I bought three pricey smoothies that tasted mostly like sugar—I really should have saved my money for fresh mango sticky rice instead.',
      writingNote: 'เช็ก 2 จุดหลัก: 1) เขียนเต็มว่า should have / shouldn\'t have (ห้ามเขียน should of!) 2) กริยาตัวตามหลังเป็น V3 ครบทุกคำ',
      speakingTopic: 'เล่าเหตุการณ์ "รู้งี้น่าจะ... / ไม่น่า...เลย!" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'หยิบเรื่องพลาดขำๆ ในอดีตมาเล่า 1 เรื่อง (ลืมของ หลงทาง นอนดึก กินเผ็ดเกิน ฯลฯ) แล้วปิดท้ายด้วยบทเรียน 3 ข้อด้วย should have / shouldn\'t have + V3',
        'ฝึกพูดออกเสียงลดรูป natural "should-əv" และ "shouldn\'t-əv" ให้ไหลลื่นไม่สะดุด',
      ],
    },
    {
      day: 83,
      title: 'ให้คำแนะนำในชีวิตจริง 4 ด้าน (สุขภาพ การเงิน ความสัมพันธ์ งาน) ด้วยโทนที่เหมาะสม',
      objective:
        'ผสมผสาน Modals และวลีเปิดประโยคให้คำแนะนำอย่างนุ่มนวลและมีเหตุผลใน 4 บริบทชีวิตจริง (สุขภาพ การเงิน ความสัมพันธ์ และเวลาทำงาน) โดยไม่ฟังดูเจ้ากี้เจ้าการ',
      explanation:
        'พอเรารู้จักทั้ง `should, ought to, had better, must, don\'t have to, should have` แล้ว ความเก่งระดับ B1 คือการเลือก **"โทนคำแนะนำที่ฟังแล้วคนรับรู้สึกดี"** ไม่ใช่สั่งเหมือนครูใหญ่!\nลองเติม **"วลีเปิดเบาๆ (Soft Openers)"** หน้า Modals เหล่านี้ดูครับ:\n- **`If I were you, I\'d...`** ("ถ้าฉันเป็นเธอนะ ฉันจะ...") — เหมาะมากกับเรื่อง **ความสัมพันธ์/การเงิน** เพื่อไม่ให้ดูตัดสินคนอื่น\n- **`Maybe you should / shouldn\'t...`** ("บางทีเธออาจจะลอง...") — นุ่มนวล ฟังสบาย\n- **`Have you thought about + V-ing?`** ("เคยลองคิดเรื่อง...ดูไหม?") — ชวนคิดเอง ไม่บังคับ\n- **`You don\'t have to + V1`** — ช่วยลดความกดดันให้เพื่อนว่า *"เธอไม่จำเป็นต้องแบกทุกอย่างคนเดียวก็ได้นะ!"*',
      sound: [
        'Empathetic Tone & Smooth Linking in Soft Openers',
        'If I were you /ɪf aɪ wɜːr juː/ · burn out /bɜːn aʊt/ · budget /ˈbʌdʒ.ɪt/ · apologize /əˈpɒl.ə.dʒaɪz/',
        'เวลาพูด "If I were you, I\'d..." → เชื่อมเร็วเป็น "อิฟ-ไอ-เวอ-ยู-อายดฺ..." โดยใช้น้ำเสียงอบอุ่นเห็นใจ (empathetic tone) และหยุดหายใจนิดนึงก่อนเข้าคำแนะนำ',
        'ฝึกพูดประโยคปลอบใจ 4 ด้าน: "You don\'t have to fix everything today" / "If I were you, I\'d talk openly" / "Maybe you shouldn\'t skip breaks"',
      ],
      l1: [
        'พูดห้วนเกินไป: "You must stop buying coffee!" หรือ "You should apologize now!" จนฟังเหมือนตำหนิหรือบังคับ',
        'แปลตรงตัวจากคำแนะนำสั้นๆ ในภาษาไทยโดยขาดคำเชื่อมเปิดใจ (Soft Openers) และไม่รู้จักใช้ don\'t have to เพื่อลดแรงกดดัน',
        'ก่อนให้คำแนะนำเรื่องส่วนตัวเพื่อน ให้แปะ Soft Opener หน้า Modal เสมอ: "If I were you, I\'d..." / "Maybe you should..." / "Remember, you don\'t have to..."',
      ],
      vocab: [
        ['burnout', 'ภาวะหมดไฟจากการทำงานหนัก', '/ˈbɜːn.aʊt/', 'prevent work burnout', 'ป้องกันภาวะหมดไฟจากการทำงาน'],
        ['budget', 'งบประมาณ / วางแผนการเงิน', '/ˈbʌdʒ.ɪt/', 'stick to a weekly budget', 'คุมงบประมาณรายสัปดาห์'],
        ['takeout', 'อาหารสั่งกลับบ้าน', '/ˈteɪk.aʊt/', 'cut back on takeout', 'ลดการสั่งอาหารกลับบ้าน'],
        ['apologize', 'ขอโทษ', '/əˈpɒl.ə.dʒaɪz/', 'apologize sincerely', 'ขอโทษอย่างจริงใจ'],
        ['pressure', 'ความกดดัน', '/ˈpreʃ.ər/', 'ease the pressure', 'ลดความกดดันลง'],
        ['balance', 'ความสมดุล', '/ˈbæl.əns/', 'keep a healthy balance', 'รักษาสมดุลที่ดีต่อสุขภาพ'],
      ],
      examples: [
        ['If I were you, I\'d talk openly with your friend instead of staying quiet.', 'ถ้าฉันเป็นคุณ ฉันจะคุยกับเพื่อนอย่างเปิดใจแทนที่จะเงียบไว้'],
        ['Remember, you don\'t have to answer work messages late at night to prove your value.', 'จำไว้นะว่าคุณไม่จำเป็นต้องตอบแชทงานตอนดึกเพื่อพิสูจน์คุณค่าของตัวเองเลย'],
        ['Have you thought about setting a weekly budget to cut back on pricey takeout?', 'คุณเคยลองคิดเรื่องตั้งงบรายสัปดาห์เพื่อลดค่าสั่งอาหารแพงๆ ดูบ้างไหม?'],
        ['Maybe you shouldn\'t drink iced tea after four o\'clock if your sleep feels light.', 'บางทีคุณอาจไม่ควรดื่มชาเย็นหลังสี่โมงเย็นถ้าช่วงนี้หลับไม่ค่อยสนิท'],
      ],
      reading:
        'Giving good advice requires both practical ideas and a gentle tone. Every week, a neighborhood radio show answers four common questions from listeners. First, for a tired office worker facing burnout, the host suggests gently: "You don\'t have to reply to non-urgent messages at ten p.m.—you ought to protect your evening rest." Second, to a student overspending on food delivery, she advises, "Have you thought about cooking simple meals twice a week to stick to a weekly budget?" Third, when a caller feels guilty after arguing with a close friend, the host replies warmly, "If I were you, I\'d apologize sincerely first. Maybe you shouldn\'t have raised your voice, yet honest words heal quickly." Finally, to someone struggling with poor sleep, she adds firmly, "You\'d better put your phone outside the bedroom, or your mind won\'t slow down!"',
      listenQ: 'What does the host suggest to the student who is overspending on food delivery?',
      listenA: 'She asks if the student has thought about cooking simple meals twice a week to stick to a weekly budget.',
      dictation: 'If I were you, I would apologize sincerely first.',
      listenNote: 'ฟังเสียงเชื่อมใน "If I were you" และจังหวะลดเสียง "I\'d" (/aɪd/) ที่ในประโยคเต็มเขียนเป็น "I would" พร้อมเสียง stress ชัดที่ apologize sincerely',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคคำแนะนำที่ผิดรูปและแข็งเกินไป 2 จุด: "If I am you, I will not stay quiet—you mustn\'t answer emails at midnight because it isn\'t urgent."',
          answer: 'If I were you, I wouldn\'t stay quiet—and you don\'t have to answer emails at midnight because it isn\'t urgent.',
          explanation: '1) สำนวนสมมุติแนะนำใช้ If I were you, I wouldn\'t... 2) บอกว่า "ไม่จำเป็นต้องตอบ" ใช้ don\'t have to (ไม่ใช้ mustn\'t ที่แปลว่าห้ามเด็ดขาด)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้น้ำเสียงให้คำแนะนำเรื่องการเงินกับเพื่อนได้สุภาพและถูกไวยากรณ์ที่สุด?',
          answer: 'Have you thought about tracking your takeout spending for two weeks?',
          choices: [
            'You must stop buying coffee right now! You had better to save money!',
            'Have you thought about tracking your takeout spending for two weeks?',
            'If I were you, I should have saved money next month.',
            'You don\'t have to overspending on pricey snacks every day.',
          ],
          explanation: 'Have you thought about + V-ing? เป็นวลีชวนคิดที่สุภาพ ไม่ตำหนิ และถูกไวยากรณ์ 100%',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบก้อนคำให้คำแนะนำ: To avoid work burnout, you really _____ to take a real lunch break away from your screen.',
          answer: 'ought',
          explanation: 'มีคำว่า to + take อยู่ด้านหลัง จึงเติม ought (ought to take)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ถ้าฉันเป็นคุณ ฉันคงไม่ต้องกังวลขนาดนั้น และบางทีคุณควรพักผ่อนบ้างนะ"',
          answer: 'If I were you, I wouldn\'t worry so much, and maybe you should get some rest.',
          explanation: 'ใช้ If I were you, I wouldn\'t... คู่กับ maybe you should... เพื่อโทนที่อบอุ่นและเป็นกันเอง',
        },
      ],
      writing:
        'เลือก 2 ปัญหาจาก 4 ด้าน (สุขภาพ, การเงิน, ความสัมพันธ์, การทำงาน) แล้วเขียนตอบแนะนำเพื่อนอย่างอบอุ่นยาวด้านละ 3 ประโยค (รวม 6 ประโยค) โดยผสม Soft Openers (`If I were you, I\'d...`, `Maybe you should...`, `Have you thought about...`) กับ Modals (`don\'t have to`, `ought to`, `shouldn\'t have`, `\'d better`)',
      writingSample:
        'Dear Mint, I heard you\'ve been exhausted lately from working late every night. Remember that you don\'t have to solve every small problem on your own! If I were you, I\'d ask your team to split tasks clearly, and you\'d better turn off work notifications after eight, or you\'ll burn out soon. Also, about saving more money this month: have you thought about making lunch at home three days a week? Maybe you shouldn\'t have bought that expensive gym pass yet, so try free evening walks in the park first!',
      writingNote: 'เช็กว่าโทนอ่านแล้วรู้สึกเหมือนเพื่อนหวังดี ไม่ใช่สั่งบังคับ และตรวจไวยากรณ์หลัง about + V-ing / ought to + V1 / \'d better + V1',
      speakingTopic: 'สวมบทเป็นที่ปรึกษาใจดีตอบปัญหา 4 ด้านของชีวิต (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดให้คำแนะนำคนละ 2–3 ประโยคใน 4 เรื่อง: 1) นอนไม่พอ (สุขภาพ) 2) เงินเดือนหมดไว (การเงิน) 3) ทะเลาะกับเพื่อน (ความสัมพันธ์) 4) งานล้นมือ (งาน)',
        'ใช้ Soft Openers และน้ำเสียงอบอุ่นเห็นใจตลอดการพูด 4 → 3 → 2 นาที',
      ],
    },
    {
      day: 84,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 12: รวม Modals ความจำเป็น คำแนะนำ ขอร้อง & Dictogloss',
      objective:
        'สังเคราะห์ Modals ทั้งสัปดาห์ 12 (must/have to/had to, mustn\'t vs don\'t have to, should/ought to/had better, Would you mind + V-ing, should have + V3) พร้อมฝึก Dictogloss และจบ Phase 2A อย่างมั่นใจ',
      explanation:
        'ยินดีด้วยครับ! จบสัปดาห์ที่ 12 (และครบ **Phase 2A: Days 57–84**) อย่างสง่างามแล้ว! วันนี้เรามารวม **"แผนผัง Modals สำคัญทั้ง 5 หมวด"** ให้ติดตาไม่สลับอีกต่อไป:\n1) **ต้องทำ**: `must` (ใจเราเองสำคัญ) vs `have/has to` (กฎ/หน้าที่ภายนอก) — อดีตใช้ **`had to + V1`** เท่านั้น!\n2) **จุดสลับความหมาย**: **`mustn\'t`** = ⛔ ห้ามเด็ดขาด (`/ˈmʌs.ənt/`) vs **`don\'t/doesn\'t have to`** = ✅ ไม่จำเป็นต้องทำ (ตามสบาย)\n3) **คำแนะนำ 3 น้ำหนัก**: `should` (ทั่วไป) · `ought to` (เหตุผล) · **`\'d better (not) + V1`** (เตือนด่วน เดี๋ยวเจอผลเสีย!)\n4) **ขอร้องสุภาพ**: `Could you...?` / `May I...?` / `Would you mind + V-ing?` → ยินยอมให้ตอบ **`"Not at all!"`**\n5) **เสียดายอดีต**: **`should have / shouldn\'t have + V3`** (เสียงพูด `/ˈʃʊd.əv/` แต่เขียน `have` เสมอ!)',
      sound: [
        'Week 12 Modal Reductions & Intonation Mastery Check',
        'have to /ˈhæf.tə/ · mustn\'t /ˈmʌs.ənt/ · ought to /ˈɔː.tə/ · would you mind /wʊdʒu maɪnd/ · should have /ˈʃʊd.əv/',
        'ทำ Shadowing บทอ่านวันนี้ 3 รอบ โดยฟังให้คมทั้ง weak forms (have to / should have / ought to) และน้ำเสียงเวลาให้คำแนะนำอย่างสุภาพ',
        'ทวนเสียงต้องห้าม 3 จุด: 1) mustn\'t ไม่ออกเสียงตัว t กลางคำ 2) have to อ่านเสียง /f/ 3) should have เขียน have + V3 ไม่เขียน should of',
      ],
      l1: [
        'สลับ mustn\'t กับ don\'t have to, ตอบ Yes ให้ Would you mind...?, ใส่ to หลัง had better/must, หรือใช้ should + V1 แทนความเสียดายในอดีต',
        'ความหมายภาษาไทยคำเดียว ("ต้อง/ไม่ต้อง/น่าจะ") ครอบคลุมหลายบริบทในภาษาอังกฤษ ทำให้เผลอเลือกตัวที่ความหมายตรงข้าม',
        'ทวนเข็มทิศ 4 คำถาม: นี่คือ "ห้าม" (mustn\'t) หรือ "ไม่ต้อง" (don\'t have to)? | แนะนำทั่วไป (should) หรือเตือนผลเสีย (had better)? | เรื่องเกิดจบแล้วหรือยัง (should have V3)?',
      ],
      vocab: [
        ['responsibility', 'ความรับผิดชอบ', '/rɪˌspɒn.sɪˈbɪl.ə.ti/', 'share daily responsibilities', 'แบ่งเบาความรับผิดชอบประจำวัน'],
        ['flexibility', 'ความยืดหยุ่น', '/ˌflek.sɪˈbɪl.ə.ti/', 'allow some flexibility', 'เปิดกว้างให้มีความยืดหยุ่นบ้าง'],
        ['polite', 'สุภาพ', '/pəˈlaɪt/', 'keep a polite tone', 'รักษาโทนเสียงที่สุภาพ'],
        ['warning', 'คำเตือน', '/ˈwɔː.nɪŋ/', 'a clear safety warning', 'คำเตือนความปลอดภัยที่ชัดเจน'],
        ['sensible', 'มีเหตุผล / รอบคอบ', '/ˈsen.sə.bəl/', 'a sensible choice', 'ทางเลือกที่รอบคอบมีเหตุผล'],
        ['considerate', 'เกรงใจ / ใส่ใจความรู้สึกคนอื่น', '/kənˈsɪd.ər.ət/', 'be considerate of others', 'ใส่ใจและเกรงใจผู้อื่น'],
      ],
      examples: [
        ['Yesterday I had to catch an early train, and I should have packed my snacks the night before.', 'เมื่อวานฉันต้องขึ้นรถไฟแต่เช้า และฉันน่าจะจัดเตรียมขนมไว้ตั้งแต่คืนก่อน'],
        ['You mustn\'t share private passwords, though you don\'t have to memorize every code alone.', 'คุณห้ามแชร์รหัสผ่านส่วนตัวเด็ดขาด แต่คุณไม่จำเป็นต้องจำรหัสทุกตัวด้วยตัวคนเดียวหรอก'],
        ['Would you mind lowering the screen brightness slightly? — Not at all, let me adjust it now.', 'คุณจะรังเกียจไหมครับถ้าจะช่วยลดแสงหน้าจอลงนิดนึง? — ไม่รังเกียจเลย เดี๋ยวฉันปรับให้ตอนนี้เลย'],
        ['We\'d better leave before five, or we\'ll hit heavy rain along the bridge.', 'พวกเรารีบออกก่อนห้าโมงเย็นดีกว่านะ ไม่งั้นเดี๋ยวเจอฝนหนักตรงสะพานแน่'],
      ],
      reading:
        'When Leo and his sister Ploy opened a small neighborhood bakery last month, they quickly learned how helpful clear communication is. Inside the kitchen, staff have to follow strict cleanliness rules, and nobody mustn\'t ignore hot oven safety—oh wait, remember you mustn\'t touch metal trays without thick gloves! Still, Leo allows pleasant flexibility for small things: bakers don\'t have to wear formal uniforms, just clean cotton aprons. Last Saturday morning was chaotic because they ran out of fresh butter at nine. "We should have ordered extra butter on Thursday!" Ploy sighed, yet Leo stayed calm and said, "If I were you, I wouldn\'t stress—you\'d better call our local dairy shop now, or we\'ll delay the afternoon bread." Later, when a customer asked, "Would you mind warming this croissant?" Ploy smiled cheerfully and replied, "Not at all!"',
      listenQ: 'What did Ploy sigh that they should have done on Thursday?',
      listenA: 'They should have ordered extra butter on Thursday.',
      dictation: 'We should have ordered extra butter on Thursday morning.',
      listenNote: 'ฝึก Dictogloss โดยจับคู่ Modals ทั้งเรื่อง: have to / mustn\'t / don\'t have to / should have + V3 / \'d better / Would you mind + V-ing → Not at all!',
      drills: [
        {
          kind: 'dictogloss',
          prompt: 'ฟังข้อความจากบทอ่านแล้วเลือกคำชุดที่ตรงตามเนื้อหาและไวยากรณ์ครบ 3 ช่อง: "Bakers _____ wear formal uniforms. Last Saturday, Ploy sighed that they _____ extra butter, and Leo warned that she _____ call the dairy shop right away."',
          answer: 'don\'t have to / should have ordered / had better',
          choices: [
            'mustn\'t / should order / would better',
            'don\'t have to / should have ordered / had better',
            'don\'t have to / should of ordered / has better',
            'hadn\'t to / shouldn\'t have ordered / ought to',
          ],
          explanation: 'ไม่จำเป็นต้องใส่ชุดทางการใช้ don\'t have to, เสียดายย้อนหลังใช้ should have ordered, และเตือนเร่งด่วนใช้ had better',
          audio_text:
            'Bakers don\'t have to wear formal uniforms, just clean cotton aprons. We should have ordered extra butter on Thursday! You\'d better call our local dairy shop now, or we\'ll delay the afternoon bread.',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยครวมจุดพลาดสัปดาห์ 12 ทั้ง 3 จุด: "Yesterday I must stayed late, so you mustn\'t bring dinner tonight—you had better to rest!"',
          answer: 'Yesterday I had to stay late, so you don\'t have to bring dinner tonight—you had better rest!',
          explanation: '1) อดีตของ must ใช้ had to + V1 (had to stay) 2) ไม่ต้องเอามาก็ได้ใช้ don\'t have to 3) หลัง had better ห้ามใส่ to (rest)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Modals ครบทั้งการตอบรับสุภาพ คำเตือน และความเสียดายย้อนหลังได้ถูกต้อง 100%?',
          answer: 'Would you mind holding the door? — Not at all! By the way, you\'d better grab a jacket, or you\'ll get cold.',
          choices: [
            'Would you mind to hold the door? — Yes, go ahead! You ought take a jacket too.',
            'Would you mind holding the door? — Not at all! By the way, you\'d better grab a jacket, or you\'ll get cold.',
            'May you open the window? — No, I don\'t mind! Yesterday I should of brought my umbrella.',
            'You mustn\'t finish this form today because tomorrow is still open.',
          ],
          explanation: 'Would you mind + holding (-ing) → ตอบ Not at all! + เตือนผลเสียด้วย \'d better grab..., or you\'ll... ถูกต้องสมบูรณ์',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "พวกเราไม่จำเป็นต้องรีบ แต่เราไม่ควรนอนดึกเมื่อคืนเลย (เสียดายย้อนหลัง)"',
          answer: 'We don\'t have to rush, though we shouldn\'t have stayed up so late last night.',
          explanation: 'ไม่จำเป็นต้องรีบ = don\'t have to rush · เสียดายที่ไม่น่าทำในอดีต = shouldn\'t have stayed up',
        },
      ],
      writing:
        'Phase 2A Wrap-Up Writing (7–8 ประโยค): เขียนเล่า "บทเรียนจากความผิดพลาดเล็กๆ ในชีวิตหรือที่ทำงาน" โดยใช้ครบทั้ง Modals ปัจจุบัน/อดีต (`had to`, `mustn\'t`, `don\'t have to`, `should have + V3`, `\'d better`) และสอดแทรกประโยคขอร้องสุภาพหรือคำแนะนำแบบ Soft Opener 1 ประโยค',
      writingSample:
        'Last month, I learned a useful lesson when I organized a small family picnic. Because it was a busy Sunday, we had to leave early to find parking near the lake. At the park, visitors mustn\'t feed wild birds, though luckily we didn\'t have to pay for entry. Unfortunately, I forgot to check the forecast and left our raincoats behind—I really should have packed them the night before! When dark clouds arrived at three, my cousin smiled kindly and said, "If I were you, I wouldn\'t worry—we\'d better pack the snacks now, or the cake will get soaked!" On our walk out, I asked a guard, "Would you mind pointing us toward the nearest covered gate?" He replied, "Not at all!" and kept our day cheerful.',
      writingNote: 'ตรวจสอบความแม่นยำรอบสุดท้ายก่อนจบ Phase 2A: had to + V1 / don\'t have to / mustn\'t / should have + V3 / \'d better + V1 / mind + V-ing',
      speakingTopic: 'Phase 2A Synthesis 4/3/2: "กฎ ชีวิตจริง ความเสียดาย และคำแนะนำดีๆ" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดครบ 4 มุมในเรื่องเดียว: เหตุการณ์อดีตที่จำเป็นต้องทำ (had to) → บทเรียนเสียดายย้อนหลัง (should/shouldn\'t have + V3) → คำแนะนำเตือนเพื่อน (If I were you / \'d better) → สิ่งที่ต้องห้าม vs ไม่จำเป็นต้องเครียด (mustn\'t vs don\'t have to)',
        'คุม weak forms ของ have to (/ˈhæf.tə/), should have (/ˈʃʊd.əv/) และ mustn\'t (/ˈmʌs.ənt/) ให้เป็นธรรมชาติในรอบ 2 นาทีสุดท้าย',
      ],
    },
  ]
);
