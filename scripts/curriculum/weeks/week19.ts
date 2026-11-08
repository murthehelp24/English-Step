import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 3: คิดเป็นภาษาอังกฤษและสื่อสารในงานจริง';

export const WEEK19: ModuleSeed = createModule(
  {
    week: 19,
    phase: 3,
    phase_title: PHASE_TITLE,
    cefr_level: 'B1',
    title: 'Indirect Questions & ศิลปะการสื่อสารอย่างสุภาพ (Polite Diplomacy)',
    summary:
      'เปลี่ยนคำถามตรงที่ฟังดูห้วนให้เป็นมืออาชีพและนุ่มนวล แก้ปัญหาสลับตำแหน่งกริยาในประโยคซ้อน (what it is แทน what is it) พร้อมคำขึ้นต้นภาษาสุภาพ',
    focus: 'Embedded/Indirect Questions, Word Order in Noun Clauses, Soft Requests',
  },
  [
    {
      day: 127,
      title: 'Word Order ใน Embedded Questions: ลำดับคำต้องเป็น "...where the exit is?" ไม่ใช่ "...where is the exit?"',
      objective:
        'เปลี่ยนคำถาม Wh- ตรงๆ ที่ฟังดูห้วนให้เป็นประโยคคำถามซ้อนแบบสุภาพ พร้อมเรียงลำดับ Subject + Verb และตัด do/does/did ออกได้อย่างแม่นยำ',
      explanation:
        'การเดินไปถามพนักงานโรงแรมหรือเพื่อนร่วมงานว่า *"Where is the exit?"* หรือ *"What time does the clinic close?"* ไม่ได้ผิดไวยากรณ์ แต่ฟังดูห้วนเหมือนสอบสวน! ในโลกมืออาชีพ เราเอาคำขึ้นต้นสุภาพมาสวมด้านหน้า เช่น `Could you tell me...`, `Do you know...`, `I’d like to know...`, `Can you remind me...`\nแต่ทันทีที่มีคำขึ้นต้นเหล่านี้อยู่ข้างหน้าแล้ว **ท่อนหลังจะไม่เรียงแบบคำถามอีกต่อไป!** กฎเหล็ก 2 ข้อ:\n1) **คืนลำดับเป็น `ประธาน + กริยา` (Statement Order)**: `Where is the exit?` → `Could you tell me **where the exit is**?` (ห้ามพูดว่า ❌ `*where is the exit?`)\n2) **ตัด `do / does / did` ทิ้ง แล้วผันกริยาแท้ตามกาล**: `What time does it open?` → `Do you know **what time it opens**?` / `Why did he leave?` → `Do you know **why he left**?`',
      sound: [
        'Linking & Polite Rising Pitch in Indirect Openers',
        'Could you tell me /kʊdʒ.ə ˈtel mi/ · I was wondering /aɪ wəz ˈwʌn.də.rɪŋ/',
        'พูด "Could you tell me" ให้ลื่นเป็นก้อนเดียว /kʊdʒ.ə ˈtel mi/ โดยยกน้ำเสียงอุ่นๆ ขึ้นนิดหนึ่ง ไม่กระแทกเสียงตรงปลายคำถาม',
        'ซ้อมแปลง 4 คู่เร็วๆ: Where is it? → Could you tell me where it is? / What did she say? → Do you know what she said?',
      ],
      l1: [
        'พูดว่า "Could you tell me where is the subway?" หรือ "Do you know what time does the train leave?"',
        'สมองจำแพตเทิร์นคำถามเดิม (where + is + N / what time + does + N) มาต่อท้าย Could you tell me เลยกลายเป็นการถามซ้อนสองครั้ง',
        'ท่องคาถา: "ข้างหน้าถามให้แล้ว ข้างหลังต้องเรียงแบบบอกเล่า (S + V)!" และตัด do/does/did ทิ้งทุกครั้งหลัง Wh-word',
      ],
      vocab: [
        ['reception', 'เคาน์เตอร์ต้อนรับ', '/rɪˈsep.ʃən/', 'ask at the reception desk', 'สอบถามที่เคาน์เตอร์ต้อนรับ'],
        ['directory', 'ป้ายแนะนำแผนผัง/รายชื่อ', '/daɪˈrek.tər.i/', 'check the building directory', 'ดูป้ายแนะนำชั้นของอาคาร'],
        ['pharmacy', 'ร้านขายยา', '/ˈfɑː.mə.si/', 'the nearest pharmacy', 'ร้านขายยาที่ใกล้ที่สุด'],
        ['boarding pass', 'บัตรขึ้นเครื่อง', '/ˈbɔː.dɪŋ pɑːs/', 'print a boarding pass', 'พิมพ์บัตรขึ้นเครื่อง'],
        ['transfer', 'การโอนเงิน / การเปลี่ยนสายรถ', '/ˈtræns.fɜːr/', 'process an international transfer', 'ดำเนินการโอนเงินระหว่างประเทศ'],
        ['reminder', 'ข้อความเตือนความจำ', '/rɪˈmaɪn.dər/', 'a quick friendly reminder', 'คำเตือนสั้นๆ อย่างเป็นมิตร'],
      ],
      examples: [
        ['Excuse me, could you tell me where the elevator to the clinic is?', 'ขอโทษนะครับ ช่วยบอกได้ไหมครับว่าลิฟต์ขึ้นไปคลินิกอยู่ตรงไหน?'],
        ['Do you know what time the neighborhood pharmacy closes tonight?', 'คุณพอทราบไหมว่าร้านขายยาแถวนี้ปิดกี่โมงคืนนี้?'],
        ['I was wondering how long the bank transfer usually takes.', 'ฉันสงสัยว่าการโอนเงินผ่านธนาคารปกติใช้เวลานานแค่ไหน'],
        ['Could you remind me why we moved Tuesday’s workshop to room three?', 'ช่วยเตือนฉันหน่อยได้ไหมว่าทำไมเราถึงย้ายเวิร์กช็อปวันอังคารไปห้องสาม?'],
      ],
      reading:
        "Arriving at a busy medical complex for the first time can easily feel overwhelming, especially when signs appear in small print. At the ground lobby, Som noticed two visitors asking curt questions at the counter, and the tired receptionist looked stressed. When Som's turn came, she smiled warmly and started with soft indirect phrasing: \"Excuse me, could you tell me where the blood test desk is?\" Immediately, the receptionist relaxed and pointed clearly toward the second corridor. A moment later, Som realized she also needed to confirm her follow-up visit. Instead of barking \"When does Dr. Natee return?\", she politely asked, \"Do you happen to know when Dr. Natee returns from lunch, and how long the wait usually is?\" Not only did the clerk answer thoroughly, she even printed a small floor map for Som. Gentle word order turns hurried counters into helpful conversations.",
      listenQ: 'How did the receptionist react after Som used polite indirect phrasing?',
      listenA: 'She relaxed, answered thoroughly, and even printed a small floor map for Som.',
      dictation: 'Could you tell me where the nearest pharmacy is?',
      listenNote: 'จับเสียงเชื่อม "Could you" เป็น /kʊdʒ.ə/ และสังเกตว่า "is" วางอยู่ท้ายสุดเบาๆ ไม่กระแทกเสียง',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ลำดับคำในคำถามซ้อนที่ผิด 2 จุด: "Excuse me, could you tell me where is the exit and what time does the shuttle leave?"',
          answer: 'Excuse me, could you tell me where the exit is and what time the shuttle leaves?',
          explanation: 'ใน Indirect Question ต้องเรียงแบบบอกเล่า: where the exit is และตัด does ทิ้งพร้อมเติม -s ที่ leaves',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดเปลี่ยนคำถาม "Why did the client cancel?" เป็น Indirect Question ได้ถูกต้อง?',
          answer: 'Do you happen to know why the client canceled?',
          choices: [
            'Do you happen to know why did the client cancel?',
            'Do you happen to know why the client canceled?',
            'Do you happen to know why canceled the client?',
            'Do you happen to know why does the client canceled?',
          ],
          explanation: 'ตัด did ทิ้งแล้วเปลี่ยน cancel เป็นรูปอดีต canceled หลังประธาน the client',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้เรียงประโยคถูกต้อง: I would like to know how much this repair _____ (cost) before you begin.',
          answer: 'costs',
          explanation: 'ประโยคซ้อนแบบบอกเล่า ประธานเอกพจน์ this repair ต้องผันกริยาเติม -s เป็น costs',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษแบบสุภาพ: "คุณพอจะบอกฉันได้ไหมว่าร้านกาแฟเปิดกี่โมง?"',
          answer: 'Could you tell me what time the coffee shop opens?',
          explanation: 'Could you tell me + what time + the coffee shop (S) + opens (V เติม -s ไม่มี does)',
        },
      ],
      writing:
        'แปลงคำถามตรงต่อไปนี้และเขียนเป็นบทสนทนาหรืออีเมลสั้นๆ 5–6 ประโยค เพื่อถามข้อมูลจากโรงแรม คลินิก หรือเพื่อนร่วมงาน โดยใช้ Indirect Wh-Questions อย่างน้อย 4 ประโยค',
      writingSample:
        'Hello, I am arriving in Chiang Mai next Thursday and have a few quick questions about my stay. Could you tell me where the nearest airport shuttle stop is? Also, I would like to know what time early check-in becomes available. Since I have an afternoon call, could you let me know how strong the lobby Wi-Fi signal is? Finally, please let me know how much the extra breakfast voucher costs.',
      writingNote: 'ตรวจสอบทุกประโยคหลัง Wh-word ว่าวาง ประธาน ก่อน กริยา แล้ว (เช่น where ... is / what time ... becomes / how much ... costs) และไม่มี do/does/did โผล่มา',
      speakingTopic: 'ถามข้อมูลอย่างสุภาพเมื่อเดินทางหรือไปสถานที่ใหม่ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'จำลองสถานการณ์ถามข้อมูล 4–5 อย่างในโรงแรม สนามบิน หรืออาคารสำนักงานใหญ่',
        'ใช้คำขึ้นต้นสลับกัน: Could you tell me... / Do you know... / I’d like to know... / I was wondering...',
        'ตรวจหูตัวเองทุกครั้งที่จบประโยค: ห้ามหลุดพูด where is / what does เด็ดขาด!',
      ],
    },
    {
      day: 128,
      title: 'if / whether ใน Indirect Yes-No Questions (Do you know if...? / I was wondering whether...)',
      objective:
        'แปลงคำถามที่ตอบ ใช่/ไม่ใช่ ให้เป็นประโยคคำถามซ้อนสุภาพด้วย if และ whether พร้อมเลือกใช้น้ำเสียงที่เป็นธรรมชาติและเป็นทางการเหมาะสม',
      explanation:
        'เมื่อวานเราฝึกคำถามที่มี Wh-word (`where, what time, how much`) แต่วันนี้ถ้าคำถามเดิมเป็น **Yes/No Question** (ไม่มี Wh-word เช่น *Is there a service fee? / Does this price include tax? / Did they confirm?*) เราจะเชื่อมประโยคด้วย **`if`** หรือ **`whether`** แทน!\n- **ภาษาคุยทั่วไป เป็นกันเอง**: ใช้ **`if`** → `Do you know **if** she’s joining lunch?` (อย่าลืมใส่ `if` เด็ดขาด!)\n- **มืออาชีพ สุภาพระดับงาน/อีเมล (หรือมี `or not`)**: ใช้ **`whether`** → `I was wondering **whether** this package includes delivery.` หรือ `Could you check **whether** the room is free **or not**?`\nสังเกตด้วยว่าการใช้ **`I was wondering if/whether...`** (Past Continuous แต่ความหมายขอถามตอนนี้!) เป็นวิธีขึ้นต้นคำถามที่นุ่มนวลและสุภาพที่สุดแบบหนึ่งในภาษาอังกฤษ!',
      sound: [
        'Linking "know if" & Articulating "whether" /ˈweð.ər/',
        'whether /ˈweð.ər/ · include /ɪnˈkluːd/ · available /əˈveɪ.lə.bəl/',
        'ระวังเสียง /ð/ ใน `whether` (แลบลิ้นแตะฟันบนเบาๆ มีเสียงก้อง) ไม่ให้ปนกับ `weather` ในความหมาย และฝึกเชื่อม `know if` (/nəʊ ɪf/) กับ `check if` (/tʃek ɪf/) ให้ลื่น',
        'ฝึกพูด 3 วลีสุภาพ: I was wondering if... / Could you check whether... / Do you happen to know if...',
      ],
      l1: [
        'พูดว่า "Do you know she is coming?" (ลืมใส่ if/whether) หรือ "Can you tell me if does this include breakfast?" (เผลอคง does ไว้)',
        'ภาษาไทยใช้แค่คำว่า "หรือเปล่า / ไหม" ท้ายประโยค ("รู้ไหมว่าเขามา") จึงไม่รู้ว่าต้องแทรกคำเชื่อม if/whether หน้าอนุประโยค',
        'กฎเหล็ก: ถ้าไม่มี who/what/where/when ให้เสียบ "if" หรือ "whether" ทันทีหลังคำขึ้นต้น แล้วตัด do/does/did ออก พร้อมเรียง S + V!',
      ],
      vocab: [
        ['include', 'รวมอยู่ในราคา/รายการ', '/ɪnˈkluːd/', 'whether the fee includes tax', 'ว่าราคานี้รวมภาษีแล้วหรือไม่'],
        ['confirm', 'ยืนยัน', '/kənˈfɜːm/', 'confirm the reservation', 'ยืนยันการจอง'],
        ['deposit', 'เงินมัดจำ / ฝากเงิน', '/dɪˈpɒz.ɪt/', 'require a refundable deposit', 'ต้องวางเงินมัดจำที่ขอคืนได้'],
        ['available', 'ว่าง / พร้อมใช้งาน', '/əˈveɪ.lə.bəl/', 'check if seats are available', 'เช็กว่ายังมีที่นั่งว่างไหม'],
        ['receipt', 'ใบเสร็จรับเงิน', '/rɪˈsiːt/', 'issue an official receipt', 'ออกใบเสร็จรับเงินอย่างเป็นทางการ'],
        ['vegetarian', 'มังสวิรัติ', '/ˌvedʒ.ɪˈteə.ri.ən/', 'offer vegetarian options', 'มีเมนูมังสวิรัติให้บริการ'],
      ],
      examples: [
        ['Do you know if the café takes QR payments as well as cash?', 'คุณพอทราบไหมว่าคาเฟ่รับสแกน QR ด้วยหรือรับแต่เงินสด?'],
        ['I was wondering whether this workshop fee includes lunch.', 'ฉันอยากทราบว่าค่าอบรมนี้รวมอาหารกลางวันด้วยไหมครับ'],
        ['Could you check whether the courier delivered our package this morning?', 'ช่วยเช็กหน่อยได้ไหมว่าพนักงานส่งของมาส่งพัสดุเราเมื่อเช้าหรือยัง?'],
        ['I am calling to ask if any studio rooms are still available for Saturday.', 'ฉันโทรมาสอบถามว่ายังมีห้องว่างสำหรับวันเสาร์เหลืออยู่ไหมคะ'],
      ],
      reading:
        "Before booking a full-day team retreat outside Bangkok, Keng called the riverside guesthouse to clarify several details without sounding demanding. Instead of firing direct questions like \"Does this include breakfast?\" or \"Can we cancel?\", he opened gently. \"Hi there, I was wondering whether your group package includes lunch and afternoon snacks, or if we should arrange those separately.\" The owner happily explained the full menu and offered two vegetarian trays at no extra charge. Next, Keng asked, \"Could you also let me know if a projector is available in the garden room, and whether a deposit is required today?\" Because he sounded calm and respectful, the owner checked their calendar right away and even held the room until five o'clock without asking for immediate payment. Good phrasing makes every negotiation smoother for both sides.",
      listenQ: 'What extra option did the guesthouse owner offer at no extra charge?',
      listenA: 'Two vegetarian trays.',
      dictation: 'I was wondering whether this fee includes tax.',
      listenNote: 'สังเกตคำว่า "was" ออกเสียงเบา /wəz/ และเน้นคำสำคัญที่ wondering, fee, includes, tax',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคคำถาม Yes-No ซ้อนที่ขาดคำเชื่อมและมีกริยาช่วยเกิน: "Hi, could you check does the meeting room have a whiteboard?"',
          answer: 'Hi, could you check if the meeting room has a whiteboard?',
          explanation: 'ต้องใส่ if (หรือ whether) เชื่อมประโยค ตัด does ทิ้ง และผัน have เป็น has ตามประธานเอกพจน์ the meeting room',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดถามถึง "ตั๋วราคาโปรโมชั่น" ได้สุภาพและถูกโครงสร้าง 100%?',
          answer: 'I was wondering whether the weekend pass covers all workshops or not.',
          choices: [
            'I was wondering does the weekend pass cover all workshops or not.',
            'I was wondering whether the weekend pass covers all workshops or not.',
            'I was wondering that the weekend pass covers all workshops.',
            'I was wondering whether is the weekend pass covering all workshops.',
          ],
          explanation: 'whether ... covers ... or not ใช้ถูกต้องตามหลักประโยคซ้อนและสุภาพมากด้วย I was wondering',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำเชื่อมให้สมบูรณ์ (ตอบเป็นคำ 1 คำ): Do you know _____ our printer has enough ink for fifty handouts?',
          answer: 'if',
          explanation: 'ใช้ if (หรือ whether) เชื่อมคำถาม Yes/No แบบไม่เป็นทางการหลัง Do you know',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษอย่างสุภาพ: "ช่วยเช็กให้หน่อยได้ไหมว่าร้านอาหารเปิดในวันอาทิตย์หรือเปล่า"',
          answer: 'Could you check whether the restaurant is open on Sundays or not?',
          explanation: 'Could you check + whether (หรือ if) + the restaurant is open (เรียง S+V) + on Sundays (or not)',
        },
      ],
      writing:
        'เขียนข้อความสอบถามร้านค้า สถานที่จัดงาน หรือฝ่ายบุคคล 5–6 ประโยค เพื่อเช็กเงื่อนไข Yes/No หลายข้อ โดยใช้ทั้ง `I was wondering if/whether...`, `Could you check if...`, และ `Do you know whether...`',
      writingSample:
        'Hello, I am hoping to reserve a quiet corner table for six colleagues this Thursday evening. First, I was wondering whether your set menu includes drinks or if we order beverages separately. Also, could you let me know if vegan dishes are available for one guest? Finally, do you know whether street parking is allowed after six o’clock, or whether we need to validate tickets at the front desk?',
      writingNote: 'เช็กว่าหลัง if/whether ทุกตัว ไม่มี do/does/did และผันกริยาเอกพจน์ (-s/-es) หรืออดีต (V2) ตามประธานเรียบร้อย',
      speakingTopic: 'โทรสอบถามรายละเอียดก่อนจองหรือซื้อบริการ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'จำลองการโทรถามข้อมูล 4–5 ข้อกับโรงแรม ร้านอาหาร หรือคลินิก',
        'ใช้ I was wondering if/whether... และ Could you check whether... อย่างน้อย 3 ครั้ง',
        'สังเกตโทนเสียงพูดให้นุ่มนวลและเน้น /ð/ ใน whether ให้ชัดเจน',
      ],
    },
    {
      day: 129,
      title: 'Softening Requests & Complaints: Would you mind...? / I was hoping... / Do you happen to know...?',
      objective:
        'ขอความช่วยเหลือ ขอแก้ไขปัญหา และร้องเรียนอย่างสุภาพด้วยโครงสร้างที่ช่วยรักษาบรรยากาศดีๆ และได้ผลลัพธ์ไวกว่าการสั่งหรือตำหนิตรงๆ',
      explanation:
        'เวลาต้องขอร้องคนอื่นหรือแจ้งปัญหา (เช่น เสียงดัง อาหารผิดรายการ ขอเลื่อนเวลา) ถ้าพูดตรงๆ ว่า *"Wait here."* หรือ *"Your team made a mistake."* อีกฝ่ายมักตั้งการ์ดป้องกันตัวทันที ลองเปลี่ยนเป็น 4 เครื่องมือลดความแข็งระดับ B1:\n1) **`Would you mind + V-ing...?`** (รบกวนช่วย...หน่อยได้ไหม?): `Would you mind lowering the volume slightly?` (**คำตอบที่แปลว่า "ได้เลย ยินดี" คือ `Not at all / No problem`** ไม่ใช่ `Yes` เพราะ mind = รังเกียจ/ถือสา!)\n2) **`Would you mind if I + V2...?`** (ถ้าฉันขอ...จะรังเกียจไหม?): `Would you mind if I opened the window?` (ใช้ V2 เพื่อเพิ่มความสุภาพ!)\n3) **`I was hoping we could...` / `Do you happen to know...?`**: ใช้ขอต่อรองหรือถามแบบเกรงใจ\n4) **`There seems to be a slight issue with...`**: แจ้งความผิดพลาดโดยไม่ชี้หน้ากล่าวหาใคร!',
      sound: [
        'Gentle Pitch in "Would you mind" & "happen to"',
        'Would you mind /ˈwʊdʒ.ə maɪnd/ · happen to know /ˈhæp.ən tə nəʊ/ · slightly /ˈslaɪt.li/',
        'เชื่อม `Would you` เป็น `/ˈwʊdʒ.ə/` เบาๆ และลด `to` ใน `happen to know` เป็น `/tə/` พร้อมยืดเสียงอุ่นๆ ตรง `mind` เพื่อไม่ให้ฟังเหมือนประชด',
        'ฝึกตอบรับและขอร้อง 3 คู่: Would you mind checking this? → Not at all! / Would you mind if I sat here? → Go right ahead.',
      ],
      l1: [
        'พูดว่า "Would you mind to help me?" (ใส่ to V1 หลัง mind!) หรือตอบคำถาม "Would you mind if I sit here?" ว่า "Yes!" เมื่อตั้งใจอนุญาต',
        '1) ในภาษาไทยหลังคำกริยาไม่มีการแยกรูป V-ing กับ to V1 2) คนไทยตีความ "คุณรังเกียจไหม?" เป็น "คุณยินดีไหม?" เลยตอบ Yes ซึ่งแปลว่า "ใช่ ฉันรังเกียจ!"',
        'จำ 2 กฎทอง: หลัง Would you mind ใช้ V-ing เสมอ (ห้าม to) และถ้าจะตอบรับว่า "ไม่ถือสา เชิญเลย" ให้ตอบ "Not at all!" หรือ "No, go ahead!"',
      ],
      vocab: [
        ['slightly', 'เล็กน้อย / นิดหน่อย', '/ˈslaɪt.li/', 'turn it down slightly', 'ลดเสียงลงเล็กน้อย'],
        ['issue', 'ปัญหา / ประเด็นติดขัด', '/ˈɪʃ.uː/', 'there seems to be a slight issue', 'ดูเหมือนจะมีปัญหาเล็กน้อยเกี่ยวกับ...'],
        ['overcharged', 'คิดเงินเกิน', '/ˌəʊ.vəˈtʃɑːdʒd/', 'seem to be overcharged', 'ดูเหมือนจะถูกคิดเงินเกิน'],
        ['swap', 'สลับเปลี่ยน', '/swɒp/', 'swap for a quieter room', 'เปลี่ยนไปเป็นห้องที่เงียบกว่า'],
        ['bother', 'รบกวน', '/ˈbɒð.ər/', 'sorry to bother you', 'ขอโทษที่รบกวน'],
        ['accommodate', 'อำนวยความสะดวก / ปรับให้รองรับได้', '/əˈkɒm.ə.deɪt/', 'accommodate an earlier request', 'ช่วยจัดการตามคำขอก่อนหน้าให้ได้'],
      ],
      examples: [
        ['Would you mind checking if our room on a quieter floor is ready?', 'รบกวนช่วยเช็กให้หน่อยได้ไหมครับว่าห้องที่ชั้นเงียบกว่าพร้อมหรือยัง?'],
        ['Would you mind if I opened the side window for fresh air?', 'คุณจะว่าอะไรไหมถ้าฉันขอเปิดหน้าต่างด้านข้างรับลมหน่อย?'],
        ['I was hoping we could move tomorrow’s catch-up call by thirty minutes.', 'ฉันหวังว่าเราจะเลื่อนสายคุยอัปเดตพรุ่งนี้ไปอีกสักสามสิบนาทีได้ไหม'],
        ['Excuse me, there seems to be a slight issue with the numbers on this bill.', 'ขอโทษนะคะ ดูเหมือนตัวเลขในบิลใบนี้จะมีข้อคลาดเคลื่อนเล็กน้อย'],
      ],
      reading:
        "During a busy Friday dinner in Sukhumvit, Pete noticed two small problems: the air vent above his table blew freezing air, and an extra starter appeared on his bill. Rather than snapping at the server, he tried calm, diplomatic English. First, he caught the waiter's eye and smiled: \"Sorry to bother you—would you mind if we switched to that booth by the window? It's slightly chilly right here.\" The waiter immediately replied, \"Not at all! Let me carry your glasses over.\" Later, when checking the receipt, Pete avoided blaming anyone directly and said softly, \"Excuse me, there seems to be a slight issue with this receipt—I think we were charged twice for the soup.\" Within two minutes, the manager came over, apologized warmly, adjusted the bill, and offered complimentary mango sorbet. Respectful requests solve problems twice as fast.",
      listenQ: 'How did Pete avoid blaming anyone directly when he noticed a mistake on the bill?',
      listenA: 'He softly said there seemed to be a slight issue with the receipt and that they were charged twice for the soup.',
      dictation: 'Would you mind checking the receipt one more time?',
      listenNote: 'สังเกต "Would you" เชื่อมเป็น /ˈwʊdʒ.ə/ และออกเสียง checking (V-ing) ให้ชัดเต็มคำ',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคขอร้องและการตอบรับที่ผิดโครงสร้าง 2 จุด: "A: Would you mind to close the door? B: Yes, I am happy to!"',
          answer: 'A: Would you mind closing the door? B: Not at all, I am happy to!',
          explanation: '1) หลัง Would you mind ใช้ V-ing (closing) ไม่ใช้ to V1 2) ตอบตกลงให้ใช้ Not at all (ไม่ถือสาเลย) แทน Yes',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้แจ้งปัญหาของผิดสเปกหรือบิลผิดพลาดได้อย่างสุภาพ มีชั้นเชิง และถูกต้องตามหลักไวยากรณ์?',
          answer: 'Excuse me, there seems to be a slight issue with the delivery address on my order.',
          choices: [
            'Hey, you made a wrong address on my order, fix it now.',
            'Excuse me, there seems to be a slight issue with the delivery address on my order.',
            'Would you mind if I changing the delivery address right now?',
            'I was hope you could check why did you write the wrong address.',
          ],
          explanation: 'There seems to be a slight issue with... นุ่มนวลและเป็นมืออาชีพที่สุด (ข้ออื่นผิดแกรมมาร์หรือห้วนเกินไป)',
        },
        {
          kind: 'gap',
          prompt: 'เติมรูปกริยาให้ถูกต้องตามโครงสร้างสุภาพ: Would you mind if I _____ (borrow) your spare charger for ten minutes?',
          answer: 'borrowed',
          explanation: 'โครงสร้าง Would you mind if I + V2 (Past Simple) เพื่อเพิ่มความนุ่มนวลทางภาษา จึงใช้ borrowed',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษอย่างนุ่มนวล: "รบกวนช่วยส่งไฟล์ล่าสุดมาให้อีกรอบได้ไหมครับ?"',
          answer: 'Would you mind sending the latest file one more time?',
          explanation: 'ใช้ Would you mind + V-ing (sending) + one more time (หรือ again)',
        },
      ],
      writing:
        'เขียนสถานการณ์ขอความช่วยเหลือหรือแจ้งปัญหาเล็กๆ ในโรงแรม/ร้านอาหาร/ที่ทำงาน 5–6 ประโยค โดยใช้ครบทั้ง `Would you mind + V-ing...?`, `Would you mind if I + V2...?`, `I was hoping...` และ `There seems to be a slight issue...`',
      writingSample:
        'Hi team, sorry to bother you during a busy morning. There seems to be a slight issue with the sound level in meeting room two—the ceiling speaker buzzes loudly. Would you mind checking the audio cable before our two o’clock call? Also, I was hoping we could borrow an extra adapter from the reception desk. Finally, would you mind if I moved two folding chairs into the room for our guests?',
      writingNote: 'ตรวจคำกริยาหลัง Would you mind (ต้องเป็น -ing) และหลัง Would you mind if I (แนะนำ V2 เพื่อความสุภาพระดับ B1+)',
      speakingTopic: 'ซ้อมขอร้องและแจ้งปัญหาอย่างสุภาพ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'จำลอง 2 สถานการณ์: 1) ขอเปลี่ยนโต๊ะ/แจ้งบิลเกินในร้านอาหาร 2) ขอเลื่อนเวลาส่งงานหรือขอให้เพื่อนช่วยตรวจไฟล์',
        'ใช้ Would you mind + V-ing, There seems to be a slight issue และ I was hoping we could...',
        'ฝึกตอบรับคำถาม Would you mind...? ด้วย Not at all! / No problem at all!',
      ],
    },
    {
      day: 130,
      title: 'Everyday Diplomatic Responses: ปฏิเสธและอธิบายข้อจำกัดอย่างนุ่มนวล (Actually, I’m afraid...)',
      objective:
        'ปฏิเสธคำขอ แก้ข้อมูลที่เข้าใจผิด และตอบคำถามเมื่อยังไม่แน่ใจได้อย่างมืออาชีพและรักษาน้ำใจด้วยวลีลดแรงกระแทก',
      explanation:
        'การสื่อสารที่ดีไม่ได้มีแค่ "ฝ่ายถาม" แต่ขึ้นอยู่กับ **"ฝ่ายตอบ"** ด้วย! คนไทยเวลาต้องปฏิเสธหรือบอกว่าอีกฝ่ายเข้าใจผิด มักติดใช้คำตรงๆ อย่าง *"No, cannot."* หรือ *"You are wrong."* หรือพูดแค่ *"Sorry, sorry"* แล้วจบ ทำให้ฟังดูห้วนหรือไม่มั่นใจ\nเจ้าของภาษาใช้ **"สูตร 3 จังหวะรับ-ปรับ-เสนอทางออก"**:\n1) **รับฟังและลดแรงกระแทก**: `I see what you mean, though...` / `Actually, I’m afraid...` / `To be honest, that might be a bit tricky because...`\n2) **บอกเหตุผลสั้นๆ หรือขอเวลาเช็ก**: `...our technicians are booked until Thursday.` / `Let me double-check that for you right away.`\n3) **เสนอทางเลือกที่ทำได้จริง**: `What we could do instead is...` / `Would tomorrow morning work for you?`\nแค่เพิ่ม `I’m afraid` หรือ `Actually` นำหน้าคำปฏิเสธ ความรู้สึกของผู้ฟังจะเปลี่ยนจาก "ถูกชน" เป็น "ได้รับความใส่ใจ" ทันที!',
      sound: [
        'Softening Intonation on "Actually" & "I’m afraid"',
        "I'm afraid /aɪm əˈfreɪd/ · tricky /ˈtrɪk.i/ · double-check /ˌdʌb.əlˈtʃek/",
        'คำว่า `Actually` และ `I’m afraid` ไม่ได้แปลว่า "กลัว" ในบริบทนี้ และต้องออกเสียงเป็นโทนอุ่นนุ่มนวล (fall-rise tone) ก่อนหยุดหายใจสั้นๆ แล้วเข้าเหตุผล',
        'ฝึกพูด 3 ประโยคปฏิเสธแบบมืออาชีพ: Actually, I’m afraid we’re fully booked. / That might be tricky today. / Let me double-check that for you.',
      ],
      l1: [
        'ปฏิเสธตรงเกินไปว่า "No, we don’t have." / "Cannot do today." หรือกลัวจนพูดว่า "I’m very sorry, I’m afraid of..." (ผิดความหมายและแกรมมาร์)',
        'ภาษาไทยใช้หางเสียง "ค่ะ/ครับ" ช่วยลดความแข็ง แต่พอแปลเป็นอังกฤษ หางเสียงหายไป เหลือแต่คำปฏิเสธดิบๆ',
        'ตัดคำว่า "No, cannot" ออกจากพจนานุกรม แล้วสวมคำว่า "Actually, I’m afraid..." หรือ "That might be a bit tricky, so how about...?" แทนทุกครั้ง!',
      ],
      vocab: [
        ['diplomatic', 'มีวาทศิลป์ / รักษาน้ำใจ', '/ˌdɪp.ləˈmæt.ɪk/', 'give a diplomatic reply', 'ตอบกลับอย่างมีวาทศิลป์รักษาน้ำใจ'],
        ['tricky', 'ยาก / ซับซ้อนเล็กน้อย', '/ˈtrɪk.i/', 'that might be a bit tricky', 'เรื่องนั้นอาจจะค่อนข้างจัดการยากสักหน่อย'],
        ['double-check', 'ตรวจสอบซ้ำให้แน่ใจ', '/ˌdʌb.əlˈtʃek/', 'let me double-check that', 'ขออนุญาตตรวจเช็กซ้ำให้อีกที'],
        ['tight', 'กระชั้นชิด / แน่น (เวลา/งบ)', '/taɪt/', 'on a tight timeline', 'อยู่ในกรอบเวลาที่กระชั้นชิดมาก'],
        ['alternative', 'ทางเลือกอื่น', '/ɔːlˈtɜː.nə.tɪv/', 'offer a practical alternative', 'เสนอทางเลือกที่ทำได้จริง'],
        ['entirely', 'ทั้งหมด / เสียทีเดียว', '/ɪnˈtaɪə.li/', 'not entirely sure yet', 'ยังไม่แน่ใจเต็มร้อยในตอนนี้'],
      ],
      examples: [
        ['Actually, I’m afraid the workshop is already full for this weekend.', 'ขออภัยจริงๆ ค่ะ เกรงว่าเวิร์กช็อปสุดสัปดาห์นี้เต็มหมดแล้ว'],
        ['That might be a bit tricky today because our courier has already left.', 'วันนี้อาจจะค่อนข้างยากสักหน่อยเพราะพนักงานส่งของเราออกไปก่อนแล้ว'],
        ['I’m not entirely sure about the fee, so let me double-check that for you.', 'ฉันยังไม่แน่ใจเรื่องค่าธรรมเนียมเต็มร้อย เดี๋ยวขอเช็กซ้ำให้คุณทันทีเลยนะ'],
        ['I see what you mean, though pushing the launch to Monday could protect quality.', 'ฉันเข้าใจมุมมองคุณนะ เพียงแต่การขยับวันเปิดตัวไปวันจันทร์น่าจะช่วยรักษาคุณภาพได้ดีกว่า'],
      ],
      reading:
        "Good customer specialists and project coordinators rarely say a flat \"No.\" Instead, they protect the relationship while staying honest about limits. On Wednesday morning, a longtime client asked Nampetch whether her design studio could print five hundred custom menus before Friday noon. Nampetch knew the schedule was far too tight, yet she resisted saying \"Impossible.\" Calmly, she replied, \"I completely understand why you need them before the weekend. Actually, I'm afraid finishing five hundred foil-stamped menus by Friday might be a bit tricky because our print partner needs forty-eight hours to dry the ink properly.\" Before the client could feel disappointed, Nampetch added a helpful alternative: \"What we can definitely do is deliver two hundred copies by Friday morning and bring the rest early Saturday. Let me double-check the press slot for you right now.\" The client smiled gratefully and accepted the split delivery immediately.",
      listenQ: 'Why did Nampetch say finishing all five hundred menus by Friday would be tricky?',
      listenA: 'Because their print partner needed forty-eight hours to dry the ink properly.',
      dictation: 'Let me double-check that schedule for you right away.',
      listenNote: 'สังเกตคำว่า "Let me" ในภาษาพูดลื่นๆ ฟังคล้าย /ˈlem.i/ และ Stress หลักอยู่ที่ double-check กับ schedule',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'ปรับคำตอบปฏิเสธที่ห้วนและผิดโครงสร้างให้เป็นมืออาชีพ: "No, cannot refund because you lost receipt. Wait I check."',
          answer: "Actually, I'm afraid we cannot process a refund without a receipt, though let me double-check what options we have.",
          explanation: 'ใช้ Actually, I’m afraid... ลดความแข็ง + ระบุเหตุผลสุภาพ + เสนอตรวจสอบทางเลือกต่อ (let me double-check...)',
        },
        {
          kind: 'choice',
          prompt: 'เพื่อนร่วมงานขอให้คุณแก้งานด่วนคืนนี้แต่คุณติดภารกิจจริงๆ ข้อใดตอบปฏิเสธอย่างมีวาทศิลป์และนุ่มนวลที่สุด?',
          answer: "I'd love to help, though tonight might be a bit tricky because I have a family commitment. Could we review it first thing tomorrow?",
          choices: [
            "No, I can't do tonight, ask someone else.",
            "I'd love to help, though tonight might be a bit tricky because I have a family commitment. Could we review it first thing tomorrow?",
            'I am very afraid of helping you tonight because I am busy.',
            'You are wrong to ask me tonight because the timeline is too tight.',
          ],
          explanation: 'รับน้ำใจ + บอกข้อจำกัดด้วย might be a bit tricky + เสนอทางออก (first thing tomorrow)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในก้อนคำตอบรับอย่างสุภาพ: I am not _____ sure whether the branch opens on public holidays, so let me call them first.',
          answer: 'entirely',
          explanation: 'not entirely sure = ยังไม่แน่ใจเต็มร้อย (สุภาพและเป็นธรรมชาติมาก)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษอย่างนุ่มนวล: "เกรงว่าห้องประชุมเล็กจะเต็มแล้วตลอดบ่ายนี้ แต่เราสามารถใช้พื้นที่รับรองชั้นสองแทนได้นะ"',
          answer: "I'm afraid the small meeting room is booked all afternoon, though we could use the second-floor lounge instead.",
          explanation: 'ใช้ I’m afraid + เหตุผล + though + ทางเลือก (we could use ... instead)',
        },
      ],
      writing:
        'เขียนคำตอบกลับ 5–6 ประโยคเพื่อปฏิเสธคำขอที่ทำไม่ทันหรือเปลี่ยนเงื่อนไขไม่ได้ (เช่น ลูกค้าขอส่งด่วนพรุ่งนี้ หรือเพื่อนขอเลื่อนนัดกะทันหัน) โดยใช้ครบสูตร 3 จังหวะ: รับความเข้าใจ + ปฏิเสธอย่างสุภาพ (`Actually, I’m afraid... / That might be tricky...`) + เสนอทางเลือกจริง',
      writingSample:
        'Thank you so much for reaching out about adding three extra slides for tomorrow morning. I completely see why those numbers would strengthen the deck. Actually, I’m afraid revising the layout before nine o’clock might be a bit tricky since our designer is out until noon. What we can do right away is include the figures as a clean one-page handout and add the full graphics before next week’s session. Please let me know if that alternative works for you!',
      writingNote: 'เช็กว่าไม่เผลอใช้คำปฏิเสธห้วนๆ ("No / Impossible / Cannot") และมีวลีเชื่อมทางเลือกต่อท้ายเสมอ',
      speakingTopic: 'Roleplay: ปฏิเสธและเสนอทางออกอย่างมืออาชีพ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ตอบรับคำขอที่ทำไม่ได้ 2 สถานการณ์: 1) ลูกค้าขอเลื่อนเดดไลน์เข้าเร็วขึ้น 2) แขกขอเช็กเอาต์เลทในวันที่ห้องเต็ม',
        'ใช้โครงสร้าง 3 จังหวะ: I see what you mean → Actually, I’m afraid / That might be a bit tricky → What we could do instead is...',
        'ฝึกใช้น้ำเสียงอบอุ่น ใจเย็น ไม่กระแทกเสียงตรงคำปฏิเสธ',
      ],
    },
    {
      day: 131,
      title: 'Real-World Scenarios: ถามและเจรจาในโรงแรม ธนาคาร คลินิก และ Customer Support',
      objective:
        'นำ Indirect Questions และ Polite Softeners มาใช้จริงใน 4 สถานการณ์สำคัญรอบตัวโดยไม่ประหม่าหรือเผลอพูดประโยคห้วนแบบแปลตรงตัว',
      explanation:
        'เวลาต้องไปติดต่อที่เคาน์เตอร์ธนาคาร โรงพยาบาล โรงแรม หรือโทรหา Call Center หลายคนรู้แกรมมาร์แต่พอต้องพูดสดกลับเผลอพูดสั้นๆ ว่า *"My card no work, why?"* หรือ *"Can late checkout?"*\nวันนี้เรารวม **4 ชุดประโยคตัวจริง** ที่หยิบใช้ได้ทันทีใน 4 สถานที่:\n- **โรงแรม (Hospitality)**: `I was wondering if late checkout is possible today.` / `Could you tell me where luggage storage is?`\n- **ธนาคาร (Banking)**: `Could you check why my overseas transfer is still pending?` / `Do you know if there is a daily withdrawal limit?`\n- **คลินิก/ร้านยา (Healthcare)**: `Could you clarify whether I should take this after meals?` / `Do you happen to know if this causes drowsiness?`\n- **บริการลูกค้า (Customer Support)**: `There seems to be a slight delay with my parcel—would you mind checking the tracking status?`',
      sound: [
        'Articulating Key Service Nouns & Smooth Stress',
        'prescription /prɪˈskrɪp.ʃən/ · itinerary /aɪˈtɪn.ər.ər.i/ · withdrawal /wɪðˈdrɔː.əl/',
        'ออกเสียงคำเฉพาะสถานที่ให้ชัดตรงพยางค์ Stress: pre-SCRIP-tion, i-TIN-er-a-ry, with-DRAW-al เพราะคำเหล่านี้มักเป็นคำสำคัญที่เจ้าหน้าที่รอฟัง',
        'ฝึกพูดประโยคประจำ 4 สถานการณ์ใน 1 ลมหายใจไม่สะดุด',
      ],
      l1: [
        'ตกใจเมื่อโดนถามเร็วๆ เลยตัดคำช่วยและไวยากรณ์ออกหมด เหลือแค่ "Can late checkout?" หรือ "Take medicine before eat?"',
        'ยังไม่มีคลังประโยคตั้งต้น (Sentence Starters) ติดปาก ทำให้ตอนเจอสถานการณ์จริงต้องประกอบประโยคใหม่ทีละคำ',
        'จำ 3 ตัวเปิดติดปาก: 1) I was wondering if... 2) Could you clarify whether... 3) Would you mind checking... — พอพูดตัวเปิดออกไปแล้ว สมองจะมีเวลา 2 วินาทีคิดท่อนหลัง!',
      ],
      vocab: [
        ['pending', 'รอดำเนินการ / ค้างอยู่', '/ˈpen.dɪŋ/', 'a pending bank transfer', 'รายการโอนเงินที่ยังค้างรอตรวจสอบ'],
        ['prescription', 'ใบสั่งยา', '/prɪˈskrɪp.ʃən/', 'pick up a prescription', 'รับยาตามใบสั่งแพทย์'],
        ['drowsiness', 'อาการง่วงซึม', '/ˈdraʊ.zi.nəs/', 'may cause mild drowsiness', 'อาจทำให้เกิดอาการง่วงซึมเล็กน้อย'],
        ['checkout', 'การเช็กเอาต์ออกจากที่พัก', '/ˈtʃek.aʊt/', 'request a late checkout', 'ขอเช็กเอาต์ช้ากว่ากำหนด'],
        ['withdrawal', 'การถอนเงิน', '/wɪðˈdrɔː.əl/', 'daily withdrawal limit', 'วงเงินถอนต่อวัน'],
        ['verify', 'ยืนยันตัวตน / ตรวจสอบ', '/ˈver.ɪ.faɪ/', 'verify your identity', 'ยืนยันตัวตนของคุณ'],
      ],
      examples: [
        ['Could you clarify whether I should take these tablets before or after meals?', 'รบกวนช่วยชี้แจงหน่อยได้ไหมครับว่ายาเม็ดนี้ควรทานก่อนหรือหลังอาหาร?'],
        ['I was wondering if late checkout at one o’clock is possible today.', 'ฉันอยากสอบถามว่าวันนี้ขอเช็กเอาต์ช้าเป็นบ่ายโมงจะได้ไหมคะ'],
        ['Would you mind checking why my overseas transfer is still pending?', 'รบกวนช่วยตรวจสอบหน่อยได้ไหมครับว่าทำไมยอดโอนไปต่างประเทศของผมยังค้างอยู่?'],
        ['Do you happen to know how long the verification process normally takes?', 'คุณพอจะทราบไหมครับว่าขั้นตอนยืนยันตัวตนปกติใช้เวลานานแค่ไหน?'],
      ],
      reading:
        "Running four errands in one morning gave Chai a great chance to practice calm, polite English across town. At nine, he stopped by his bank branch because a payment to an overseas design conference still showed as pending. Instead of snapping at the teller, he smiled and asked, \"Excuse me, would you mind checking why this transfer hasn't cleared yet, and whether my daily limit needs adjusting?\" Within five minutes, the teller verified his ID and unlocked the limit. Next, at a neighborhood clinic, Chai collected allergy medication and gently asked the pharmacist, \"Could you clarify whether this medicine causes drowsiness, and if I should avoid coffee for a few hours?\" Finally, before heading home, he stopped at a hotel lobby to book a visiting friend's stay and asked if luggage storage was complimentary before check-in. Everywhere he went, respectful indirect questions earned faster, warmer help.",
      listenQ: 'What two things did Chai ask the pharmacist to clarify about his allergy medication?',
      listenA: 'Whether it causes drowsiness and if he should avoid coffee for a few hours.',
      dictation: 'Could you clarify whether this causes mild drowsiness?',
      listenNote: 'สังเกตคำว่า "clarify" เน้นพยางค์แรก /ˈklær.ɪ.faɪ/ และออกเสียง /ð/ ใน whether ให้ชัดเจน',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'ปรับประโยคที่หน้าเคาน์เตอร์ธนาคารให้สุภาพและเรียงคำถูกต้อง: "Hello, why my card doesn’t work abroad? Can you fix?"',
          answer: 'Hello, would you mind checking why my card does not work abroad, and if you can help unlock it?',
          explanation: 'ใช้ would you mind checking + why my card does not work (เรียงแบบบอกเล่า S+V) + and if you can...',
        },
        {
          kind: 'choice',
          prompt: 'คุณอยู่ที่ร้านขายยาและอยากถามว่ายาตัวนี้ทานตอนท้องว่างได้ไหม ข้อใดสุภาพและถูกต้องที่สุด?',
          answer: 'Excuse me, do you know if I can take this on an empty stomach?',
          choices: [
            'Excuse me, can take this before eat anything?',
            'Excuse me, do you know can I take this on an empty stomach?',
            'Excuse me, do you know if I can take this on an empty stomach?',
            'Excuse me, could you tell me if can I taking this before meal?',
          ],
          explanation: 'ใช้ do you know if + I can take (เรียงแบบบอกเล่า) + on an empty stomach (ตอนท้องว่าง)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบก้อนคำ: I am calling customer support to ask _____ my replacement parcel has left the warehouse yet.',
          answer: 'whether',
          explanation: 'ใช้ whether (หรือ if) หลัง ask เพื่อถามคำถามแบบ Yes/No ในประโยคซ้อน',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ (ใช้ที่เคาน์เตอร์โรงแรม): "ขอโทษนะคะ ดิฉันอยากทราบว่าสามารถฝากกระเป๋าไว้ก่อนเวลาเช็กอินได้ไหมคะ"',
          answer: 'Excuse me, I was wondering if I could store my luggage before check-in.',
          explanation: 'I was wondering if + I could store my luggage (สุภาพและชัดเจนที่สุดในบริบทโรงแรม)',
        },
      ],
      writing:
        'เลือก 2 สถานที่จาก (โรงแรม / ธนาคาร / คลินิก / บริการลูกค้า) แล้วเขียนบทสนทนาหรือคำขอ 6 ประโยคที่ใช้ Indirect Questions และ Soft Requests ที่เป็นธรรมชาติพร้อมคำตอบแบบสุภาพ 1–2 ประโยค',
      writingSample:
        'At the hotel desk: "Good afternoon! I was wondering if early check-in is available today, or whether I could leave my suitcase here for two hours. Also, could you tell me where the nearest convenience store is?"\nAt the pharmacy: "Excuse me, could you clarify whether I should take this pill twice a day after food? Do you happen to know if it causes drowsiness during work?"',
      writingNote: 'เช็กทุกประโยคคำถามซ้อนว่าไม่มีคำช่วย do/does/did หลงเหลืออยู่ และไม่มีการสลับกริยามาไว้หน้าประธาน',
      speakingTopic: 'เดินสายทำธุระ 4 สถานที่ด้วยภาษาสุภาพ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'จำลองเหตุการณ์ต่อเนื่อง: แวะธนาคาร → แวะร้านยา → โทรคุยกับโรงแรม/คอลเซ็นเตอร์',
        'ใช้คำขึ้นต้นให้หลากหลาย: Would you mind checking... / Could you clarify whether... / I was wondering if...',
        'เน้นออกเสียงคำศัพท์บริการให้ตรง Stress: prescription, withdrawal, itinerary, drowsiness',
      ],
    },
    {
      day: 132,
      title: 'Workplace Slack & Email Politeness: แปลงข้อความตรงทื่อแบบไทยให้เป็นข้อความสุภาพระดับมืออาชีพ',
      objective:
        'อัปเกรดข้อความแชตและอีเมลที่ทำงานจากประโยคคำสั่งหรือทวงงานห้วนๆ ให้กลายเป็นข้อความสั้น กระชับ เป็นมิตร และชวนร่วมมือ',
      explanation:
        'ปัญหาคลาสสิกของคนไทยเวลาพิมพ์ Slack / Teams / Email ภาษาอังกฤษคือ **ไม่ได้ตั้งใจดุ แต่ประโยคฟังดูเหมือนออกคำสั่ง!** เช่น:\n- ❌ *"Send me the file today. Why didn’t you reply?"* → แข็งและกดดัน\n- ❌ *"Please kindly urgent revert back ASAP!"* → ทางการเกินจริงและใช้คำซ้ำซ้อน (`please kindly` / `revert back`)\nวิธีเขียนแชตและอีเมลสมัยใหม่ที่มืออาชีพใช้กันคือ **สุภาพ + กระชับ + ชัดเจนเรื่องเวลา**:\n- ทวงงาน/อัปเดต: `Just checking in on the updated slides—could you let me know when they might be ready?`\n- ขอให้ช่วยแก้/ตรวจ: `Would you mind taking a quick look at section two before noon?`\n- ขอบคุณและส่งต่อ: `Thanks so much for sending that over—I’ve shared a few quick notes below.`',
      sound: [
        'Reading Messages Aloud to Check Tone',
        'checking in /ˈtʃek.ɪŋ ɪn/ · collaborate /kəˈlæb.ə.reɪt/ · prioritize /praɪˈɒr.ə.taɪz/',
        'เวลาเขียน Slack หรืออีเมลเสร็จ ลอง "อ่านออกเสียงดังๆ" ถ้าจังหวะคำฟังดูกระแทกสั้นๆ (`Send it now. / Reply fast.`) ให้ใส่ soft opener อย่าง `Could you...` หรือ `When you have a moment...` นำหน้า',
        'ฝึกอ่านเปรียบเทียบน้ำเสียงของประโยคตรงทื่อ vs ประโยคมืออาชีพ 3 คู่',
      ],
      l1: [
        'เขียน "Please kindly do it urgently." หรือ "Why you didn’t send?" ลงในแชตงาน',
        'คนไทยคิดว่าเติมคำว่า Please หน้าคำสั่งตรงๆ ก็สุภาพแล้ว หรือติดศัพท์อีเมลเก่าๆ อย่าง kindly / revert / ASAP มากเกินไป',
        'สูตรเขียนแชตงานที่ปลอดภัยที่สุด: [ทักทายสั้นๆ/บริบท] + [คำถามซ้อนสุภาพ Could you let me know / Would it be possible...] + [เหตุผลหรือเวลาชัดเจน]!',
      ],
      vocab: [
        ['follow up', 'ติดตามเรื่อง', '/ˈfɒl.əʊ ʌp/', 'just following up on', 'ขออนุญาตติดตามเรื่อง...สักนิด'],
        ['prioritize', 'จัดลำดับความสำคัญ', '/praɪˈɒr.ə.taɪz/', 'prioritize urgent tasks', 'จัดลำดับความสำคัญให้เรื่องเร่งด่วน'],
        ['feasible', 'เป็นไปได้ในทางปฏิบัติ', '/ˈfiː.zə.bəl/', 'check if that timeline is feasible', 'เช็กว่ากรอบเวลานี้พอเป็นไปได้ไหม'],
        ['bandwidth', 'เวลาว่าง/กำลังคนที่รับงานเพิ่มได้', '/ˈbænd.wɪdθ/', 'have enough bandwidth this week', 'มีเวลา/กำลังพอรับงานเพิ่มในสัปดาห์นี้'],
        ['loop in', 'ดึงคนเข้ามาอยู่ในวงสนทนา/อีเมล', '/luːp ɪn/', 'loop in the design lead', 'ดึงหัวหน้าทีมดีไซน์เข้ามาช่วยดูด้วย'],
        ['appreciate', 'ซาบซึ้ง/ขอบคุณ', '/əˈpriː.ʃi.eɪt/', 'really appreciate your quick review', 'ขอบคุณมากสำหรับการช่วยตรวจอย่างรวดเร็ว'],
      ],
      examples: [
        ['Hi Pim, just following up on the draft—could you let me know when you might share it?', 'สวัสดีพิม ขอติดตามดราฟต์งานสักนิดนะ ช่วยบอกได้ไหมว่าจะส่งให้ได้ประมาณเมื่อไหร่?'],
        ['Would it be possible to loop in the finance team before Thursday’s meeting?', 'พอจะเป็นไปได้ไหมที่จะดึงทีมการเงินเข้ามาในแชตด้วยก่อนประชุมวันพฤหัส?'],
        ['When you have a moment, would you mind confirming whether those numbers look right?', 'ถ้ามีเวลาสักครู่ รบกวนช่วยยืนยันหน่อยได้ไหมครับว่าตัวเลขชุดนี้ถูกต้องไหม?'],
        ['I really appreciate your flexibility while we prioritize today’s client launch.', 'ขอบคุณมากจริงๆ สำหรับความยืดหยุ่นของคุณระหว่างที่เราเร่งปล่อยงานลูกค้าวันนี้'],
      ],
      reading:
        "On Monday morning, Ton reread a Slack message he was about to send to a teammate in Singapore: \"Why didn't you upload the budget sheet? Send it before noon ASAP.\" Instantly, he paused. Although Ton only felt stressed about an afternoon call, the draft sounded cold and accusing. Remembering polite indirect structures, he rewrote two calm lines instead: \"Hi Maya! Just checking in on the Q3 budget sheet—could you let me know if it's ready to review, or whether you need a few extra hours?\" Ten minutes later, Maya replied warmly with the link and apologized for a small file error she had just fixed. Even better, she offered to loop in the regional analyst to verify two totals before lunch. Changing ten blunt words into one thoughtful indirect question preserved trust and got the job done smoothly.",
      listenQ: 'Why did Ton pause before sending his first Slack draft to Maya?',
      listenA: 'Because the draft sounded cold and accusing.',
      dictation: 'Could you let me know when it might be ready?',
      listenNote: 'สังเกต "let me" ออกเสียงต่อเนื่องลื่นๆ และเน้นคำสำคัญที่ know, when, ready',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แปลงข้อความแชตที่แข็งและใช้คำซ้ำซ้อนให้เป็นมืออาชีพ: "Please kindly urgent tell me why didn’t you send the report yet."',
          answer: 'Hi, just following up—could you let me know why the report has not been sent yet, or when it might be ready?',
          explanation: 'หลีกเลี่ยง please kindly urgent และแก้ลำดับคำหลัง why ให้เป็นแบบบอกเล่า (ไม่ใช้ didn’t you send)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อความใดเหมาะสำหรับส่งใน Slack เพื่อขอให้เพื่อนร่วมทีมช่วยตรวจงานก่อนบ่าย 3 โมงมากที่สุด?',
          answer: 'When you have a moment, would you mind reviewing slide four before three so we can finalize the deck?',
          choices: [
            'Review slide four before three PM, thank you.',
            'When you have a moment, would you mind reviewing slide four before three so we can finalize the deck?',
            'I ask you to must review slide four before three today ASAP.',
            'Could you tell me why didn’t you review slide four already?',
          ],
          explanation: 'มีตัวเปิดลดความกดดัน (When you have a moment) + would you mind + V-ing + บอกเหตุผลชัดเจน (so we can finalize)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในวลีแชตที่ทำงาน: Just _____ up on our vendor quote—do you happen to know if they confirmed the price?',
          answer: 'following',
          explanation: 'Just following up on... = ขออนุญาตติดตามเรื่อง...สักนิด',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นข้อความแชตที่ทำงานแบบสุภาพ: "พอจะเป็นไปได้ไหมที่เราจะดึงหัวหน้าทีมออกแบบเข้ามาดูเรื่องนี้ด้วย?"',
          answer: 'Would it be possible to loop in the design lead on this?',
          explanation: 'ใช้ Would it be possible to... (พอจะเป็นไปได้ไหมที่จะ...) + loop in (ดึงเข้ามาร่วมวงสนทนา)',
        },
      ],
      writing:
        'เขียนข้อความ Slack หรืออีเมลสั้นๆ 2 ฉบับ (ฉบับละ 3–4 ประโยค): 1) ตามงานที่เลยกำหนดอย่างสุภาพ 2) ขอความเห็นหรือดึงเพื่อนร่วมงานอีกคนเข้ามาช่วยดูงาน',
      writingSample:
        'Message 1: Hi Beam! Just following up on the client onboarding checklist we talked about on Monday. Could you let me know if you have enough bandwidth to finish section three today, or whether we should adjust the deadline?\nMessage 2: Hello May, thanks so much for sharing the updated brochure! Would you mind if we looped in Dan from operations to confirm the delivery dates? Really appreciate your quick help on this.',
      writingNote: 'อ่านออกเสียงข้อความทั้ง 2 ฉบับหลังเขียนเสร็จ เพื่อเช็กว่าน้ำเสียงเป็นมิตร ชัดเจน ไม่เหมือนสั่งหรือกล่าวหา',
      speakingTopic: 'แปลงประโยคตรงทื่อเป็นข้อความมืออาชีพ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดเปรียบเทียบสถานการณ์งาน 2–3 เคส: ถ้าพูดแบบตรงทื่อจะเป็นอย่างไร vs ถ้าพูดแบบสุภาพมืออาชีพควรพูดว่าอย่างไร',
        'ใช้ก้อนคำจริง: Just following up on... / Would it be possible to... / When you have a moment, would you mind... / Could you let me know if...',
        'ตรวจความถูกต้องของ Indirect Question Word Order ทุกประโยคที่พูดออกมา',
      ],
    },
    {
      day: 133,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 19: Indirect Questions & Polite Diplomacy + Dictogloss',
      objective:
        'ทบทวนและประเมินความคล่องในการใช้ Indirect Questions (Wh- และ if/whether), Soft Requests, Diplomatic Refusals และ Workplace Politeness ผ่าน Dictogloss',
      explanation:
        'ยินดีด้วยครับ จบสัปดาห์ที่ 19 เรื่อง **"ความสุภาพและชั้นเชิงทางภาษา"** แล้ว! ทบทวน 4 กฎสำคัญก่อนทำ Dictogloss:\n1) **Indirect Wh-Question**: ตัด `do/does/did` ออก แล้วเรียง `S + V` เช่น `Could you tell me where the clinic is?`\n2) **Indirect Yes-No Question**: ใส่ `if` หรือ `whether` เสมอ เช่น `I was wondering whether this includes service charge.`\n3) **Soft Requests & Complaints**: `Would you mind + V-ing?` (ตอบรับ: `Not at all`), `Would you mind if I + V2?`, `There seems to be a slight issue with...`\n4) **Diplomatic Refusals & Work Chat**: รับฟัง + `Actually, I’m afraid... / That might be tricky...` + เสนอทางออก (`What we could do instead is...`)',
      sound: [
        'Week 19 Polite Intonation & Linking Mastery',
        'Could you tell me /kʊdʒ.ə ˈtel mi/ · I was wondering /aɪ wəz ˈwʌn.də.rɪŋ/ · afraid /əˈfreɪd/',
        'ทำ Shadowing บทอ่านวันนี้ 2 รอบ โดยฟังให้ออกว่าทำไมเสียงของผู้พูดฟังดูอบอุ่นและน่าช่วยเหลือ — เคล็ดลับอยู่ที่การไม่กระแทกเสียงตรงคำขึ้นต้นและไม่ตัดพยางค์สุดท้าย',
        'ฝึกพูดประโยค Dictation และวลีสุภาพซ้ำด้วยความเร็วธรรมชาติ',
      ],
      l1: [
        'เมื่อคิดเร็วๆ ในบทสนทนาจริง มักหลุดกลับมาเรียงคำถามผิด ("Could you tell me what time does it start?") หรือลืม if ในประโยค Yes-No',
        'ความเคยชินกับการแปลจากภาษาไทยทีละคำทำให้ประโยคซ้อนเสียรูปเมื่อมีความกดดันด้านเวลา',
        'ก่อนพูดประโยคคำถามทุกครั้งในสถานการณ์จริง ให้ติดเบรก 0.5 วินาทีแล้วจับคู่: "ตัวเปิดสุภาพ + (if/Wh) + ประธาน + กริยา"',
      ],
      vocab: [
        ['courteous', 'สุภาพอ่อนโยน', '/ˈkɜː.ti.əs/', 'maintain a courteous tone', 'รักษาน้ำเสียงที่สุภาพอ่อนโยน'],
        ['clarify', 'ชี้แจงให้ชัดเจน', '/ˈklær.ɪ.faɪ/', 'clarify a billing detail', 'ชี้แจงรายละเอียดในบิลให้ชัดเจน'],
        ['hesitation', 'ความลังเลใจ', '/ˌhez.ɪˈteɪ.ʃən/', 'respond without hesitation', 'ตอบกลับอย่างไม่ลังเล'],
        ['flexible', 'ยืดหยุ่น', '/ˈflek.sə.bəl/', 'offer a flexible arrangement', 'เสนอทางเลือกที่ยืดหยุ่น'],
        ['oversight', 'ความผิดพลาดจากการมองข้าม', '/ˈəʊ.və.saɪt/', 'correct a minor oversight', 'แก้ไขความผิดพลาดเล็กน้อยจากการมองข้าม'],
        ['resolve', 'คลี่คลาย / แก้ไข', '/rɪˈzɒlv/', 'resolve the matter smoothly', 'คลี่คลายเรื่องนี้ได้อย่างราบรื่น'],
      ],
      examples: [
        ['Could you clarify whether the studio fee covers cleaning after the workshop?', 'รบกวนช่วยชี้แจงหน่อยได้ไหมครับว่าค่าเช่าสตูดิโอรวมค่าทำความสะอาดหลังเวิร์กช็อปด้วยหรือเปล่า?'],
        ['Would you mind letting us know what time the delivery truck arrives?', 'รบกวนช่วยแจ้งพวกเราหน่อยได้ไหมคะว่ารถส่งของจะมาถึงกี่โมง?'],
        ['Actually, I’m afraid we cannot move the venue today, though we can add extra fans.', 'เกรงว่าวันนี้เราจะย้ายสถานที่ไม่ได้จริงๆ ครับ แต่เราสามารถเพิ่มพัดลมให้ได้นะ'],
        ['I was wondering if you had enough bandwidth to loop in the designer before lunch.', 'ฉันอยากสอบถามว่าคุณพอมีเวลาช่วยดึงดีไซเนอร์เข้ากลุ่มคุยก่อนเที่ยงไหม'],
      ],
      reading:
        "During a hectic week at a community coworking hub, polite diplomacy kept every minor problem from growing larger. On Thursday morning, a member realized she had been billed twice for a private meeting room. Instead of sending an angry message, she walked up to the front desk and said calmly, \"Excuse me, there seems to be a slight oversight on this month's invoice—would you mind checking whether the extra charge can be removed?\" The coordinator appreciated her courteous tone and checked the logs immediately. \"Actually, I'm afraid the finance system takes two days to issue a card refund, though what we can do right now is apply a credit toward next week's booking,\" he offered smoothly. Later that afternoon, the member also asked if she could loop in a visiting partner for Friday's session, and reception gladly waived the guest fee. Gentle phrasing turns awkward errors into lasting goodwill.",
      listenQ: 'What flexible solution did the coordinator offer while the card refund was being processed?',
      listenA: 'He offered to apply a credit toward next week’s booking.',
      dictation: 'Would you mind checking whether the charge can be removed?',
      listenNote: 'สังเกตการเชื่อม "Would you" (/ˈwʊdʒ.ə/) และออกเสียง "whether" (/ˈweð.ər/) กับ "removed" (/rɪˈmuːvd/) ให้ชัดเจน',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังเสียงบทสนทนาแล้วเลือกคู่คำที่ตรงต้นฉบับ: "Excuse me, there seems to be a slight _____ on this month’s invoice—would you mind checking _____ the extra charge can be removed?"',
          answer: 'oversight / whether',
          choices: [
            'oversight / whether',
            'mistake / does',
            'issue / that',
            'problem / what',
          ],
          explanation: 'จากบทอ่าน: "...there seems to be a slight oversight on this month’s invoice—would you mind checking whether the extra charge can be removed?"',
          audio_text: "Excuse me, there seems to be a slight oversight on this month's invoice—would you mind checking whether the extra charge can be removed?",
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคคำถามซ้อนและการขอร้องให้ถูกต้อง 100%: "Could you tell me when does the clinic open, and would you mind to save a seat for me?"',
          answer: 'Could you tell me when the clinic opens, and would you mind saving a seat for me?',
          explanation: '1) ตัด does และเติม -s ที่ opens หลังคำถามซ้อน 2) หลัง Would you mind ใช้ V-ing (saving)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ทั้งการปฏิเสธอย่างสุภาพและ Indirect Question ได้ถูกต้องครบทุกจุด?',
          answer: "Actually, I'm afraid Friday's room is full, though I was wondering if Thursday afternoon works for you.",
          choices: [
            "No, Friday's room is full, do you know if does Thursday afternoon work for you?",
            "Actually, I'm afraid Friday's room is full, though I was wondering if Thursday afternoon works for you.",
            "I'm afraid of Friday's room is full, so tell me why can't you come Thursday.",
            "Actually, I'm afraid Friday's room is full, though I was wondering whether works Thursday afternoon.",
          ],
          explanation: 'I’m afraid + เหตุผล + though I was wondering if + ประธาน (Thursday afternoon) + กริยา (works)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในประโยคขออนุญาตอย่างนุ่มนวล: Would you mind if I _____ (reschedule) our check-in call to tomorrow morning?',
          answer: 'rescheduled',
          explanation: 'หลัง Would you mind if I ใช้ Past Simple (V2) เพื่อความสุภาพ: rescheduled',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษระดับมืออาชีพ: "ขอโทษที่รบกวนนะคะ ช่วยเช็กให้หน่อยได้ไหมคะว่าราคานี้รวมภาษีหรือยัง"',
          answer: 'Sorry to bother you—would you mind checking whether this price includes tax?',
          explanation: 'ใช้ Sorry to bother you + would you mind + V-ing + whether + S + V (includes)',
        },
      ],
      writing:
        'เขียนอีเมลหรือข้อความเจรจา 6–8 ประโยคในสถานการณ์ที่พบข้อผิดพลาดเล็กน้อย (เช่น บิลผิด เวลาคลาดเคลื่อน หรือขอเลื่อนห้องประชุม) โดยผสมครบทั้ง: 1) แจ้งปัญหาแบบนุ่มนวล 2) Indirect Wh- และ if/whether Question 3) Soft Request (`Would you mind...`) และ 4) การตอบรับ/เสนอทางออกอย่างมีวาทศิลป์',
      writingSample:
        'Hi Ploy, sorry to bother you during a busy afternoon! There seems to be a slight oversight on tomorrow’s workshop schedule—the calendar currently shows two teams booked in room B at two o’clock. Could you let me know which group booked that slot first, and whether the larger lounge downstairs is still available? If it helps, I would be happy to move our session downstairs. Would you mind checking the room calendar when you have a moment? Thanks so much for helping resolve this smoothly!',
      writingNote: 'ตรวจสอบลำดับคำ S+V ในทุก Indirect Question และตรวจว่าหลัง Would you mind ใช้ V-ing ครบทุกจุด',
      speakingTopic: 'Week 19 Mastery Speech: การสื่อสารอย่างมีวาทศิลป์ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูด 4 นาที → 3 นาที → 2 นาที จำลองการแก้ปัญหาที่ทำงานหรือบริการลูกค้าตั้งแต่เริ่มต้นถาม → แจ้งปัญหา → เสนอทางออก',
        'ใช้ให้ครบทั้ง Could you tell me + Wh- S V, I was wondering if/whether, Would you mind + V-ing และ Actually, I’m afraid...',
        'คุมน้ำเสียงให้อบอุ่น นิ่ง และสุภาพตลอด 2–4 นาที',
      ],
    },
  ]
);
