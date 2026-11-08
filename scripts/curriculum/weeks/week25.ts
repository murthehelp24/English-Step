import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 4: สื่อสารคล่องตัว เลือกโทนภาษา และฟังความเร็วเจ้าของภาษา';

export const WEEK25: ModuleSeed = createModule(
  {
    week: 25,
    phase: 4,
    phase_title: PHASE_TITLE,
    cefr_level: 'B2',
    title: 'Collocations & Three-Word Phrasal Verbs ระดับ B2',
    summary:
      'เลิกแปลคำไทยจับคู่คำอังกฤษแบบผิดธรรมชาติ เปลี่ยนมาใช้ก้อนคำจับคู่ (Verb-Noun / Adj-Noun / Adv-Adj) และ Three-word Phrasal Verbs ที่เจ้าของภาษาใช้จริงทุกวัน',
    focus: 'High-Frequency B2 Collocations & Three-Word Phrasal Verbs',
  },
  [
    {
      day: 169,
      title: 'Make / Do / Take / Have / Give Collocations เจาะลึก',
      objective:
        'เลือกใช้กริยาแกน (Light Verbs: make, do, take, have, give) คู่คำนามระดับ B2 ได้อย่างเป็นธรรมชาติแทนการแปลตรงจากคำว่า "ทำ/เอา/ให้" ในภาษาไทย',
      explanation:
        'ในภาษาไทยเราใช้คำว่า **"ทำ"** แทบทุกอย่าง (*ทำผิด, ทำความเสียหาย, ทำข้อตกลง, ทำการค้นพบ*) และใช้ **"รับ/เอา"** (*รับผิดชอบ, เอาใจใส่*) พอแปลตรงตัวเป็นอังกฤษจึงหลุดพูดว่า ❌ *"do a mistake"* หรือ *"make damage"* ทั้งที่เจ้าของภาษาจับคู่ตายตัวเป็นก้อน (Collocations): 1) **`make`** เน้น "สร้างผลลัพธ์/ความเปลี่ยนแปลงใหม่" เช่น `make a breakthrough` (สร้างความก้าวหน้าครั้งสำคัญ), `make an exception` (ยกเว้นให้เป็นกรณีพิเศษ) 2) **`do`** เน้น "ผลกระทบ/การกระทำทั่วไป" เช่น `do serious damage` (สร้างความเสียหายร้ายแรง), `do justice to` (ถ่ายทอดคุณค่าได้อย่างสมน้ำสมเนื้อ) 3) **`take`** เน้น "ถือรับ/จัดลำดับ" เช่น `take responsibility for` (รับผิดชอบต่อ), `take priority over` (สำคัญมาก่อน) 4) **`have / give`** ใช้กับปฏิสัมพันธ์ เช่น `have a word with` (คุยปรับความเข้าใจสั้นๆ), `give someone the benefit of the doubt` (เชื่อในแง่ดีไว้ก่อนจนกว่าจะมีหลักฐาน)',
      sound: [
        'Linking & Rhythm in Light-Verb Collocations',
        'breakthrough /ˈbreɪk.θruː/ · priority /praɪˈɒr.ə.ti/ · exception /ɪkˈsep.ʃən/ · doubt /daʊt/',
        'กริยาเบาหน้าคำนามมักลดเสียงและเชื่อมทันที: "make_a" (/meɪkə/), "take_a" (/teɪkə/), "have_a_word" (/hævəˈwɜːd/), "give_them_the" (/gɪvðəmdə/) โดยคำนามหลักจะรับ Stress เต็ม',
        'พูด 4 ก้อนคำรวดเดียวโดยไม่เน้นหนักที่คำกริยาเบา: make a BREAKthrough · do SERious DAMage · take reSPONsibility · give the BENefit of the DOUBT',
      ],
      l1: [
        'พูดว่า "It made a lot of damage to our reputation." หรือ "He must get responsibility for this."',
        'ภาษาไทยใช้ "ทำ" คลุมทั้ง make และ do และใช้ "รับ" คลุมทั้ง get และ take ทำให้สมองหยิบกริยาผิดคู่',
        'จำเป็๋นก้อนเสมอ: damage คู่กับ do (do damage) · breakthrough/exception คู่กับ make · responsibility/priority คู่กับ take',
      ],
      vocab: [
        [
          'breakthrough',
          'การค้นพบหรือความก้าวหน้าครั้งสำคัญ',
          '/ˈbreɪk.θruː/',
          'make a breakthrough',
          'สร้างความก้าวหน้าครั้งสำคัญ',
        ],
        [
          'damage',
          'ความเสียหาย',
          '/ˈdæm.ɪdʒ/',
          'do serious damage',
          'สร้างความเสียหายอย่างหนัก',
        ],
        [
          'responsibility',
          'ความรับผิดชอบ',
          '/rɪˌspɒn.səˈbɪl.ə.ti/',
          'take responsibility for',
          'รับผิดชอบต่อเรื่อง...',
        ],
        [
          'priority',
          'สิ่งสำคัญลำดับแรก',
          '/praɪˈɒr.ə.ti/',
          'take priority over',
          'ได้รับความสำคัญเหนือกว่า...',
        ],
        [
          'exception',
          'ข้อยกเว้น',
          '/ɪkˈsep.ʃən/',
          'make an exception',
          'ยอมยกเว้นให้เป็นกรณีพิเศษ',
        ],
        [
          'word',
          'การพูดคุยสั้นๆ',
          '/wɜːd/',
          'have a quick word with',
          'ขอคุยสั้นๆ กับ...',
        ],
        [
          'doubt',
          'ความสงสัย',
          '/daʊt/',
          'give the benefit of the doubt',
          'มองในแง่ดี/ให้โอกาสเชื่อไว้ก่อน',
        ],
      ],
      examples: [
        [
          'After three weeks of testing, the lab team finally made a major breakthrough.',
          'หลังทดสอบมาสามสัปดาห์ ในที่สุดทีมแล็บก็สร้างความก้าวหน้าครั้งสำคัญได้สำเร็จ',
        ],
        [
          'Customer safety always takes priority over hitting a quick release date.',
          'ความปลอดภัยของลูกค้าต้องมาก่อนการเร่งปล่อยงานตามกำหนดเสมอ',
        ],
        [
          'Even though policies are strict, the manager made an exception for a loyal client.',
          'แม้นโยบายจะเข้มงวด ผู้จัดการก็ยอมยกเว้นให้เป็นกรณีพิเศษสำหรับลูกค้าประจำ',
        ],
        [
          'Could I have a quick word with you before the afternoon workshop starts?',
          'ขอคุยสั้นๆ กับคุณหน่อยได้ไหมก่อนเวิร์กชอปช่วงบ่ายจะเริ่ม?',
          'ใช้ have a word with เมื่ออยากคุยเรื่องสำคัญแบบเป็นกันเอง',
        ],
      ],
      reading:
        'At four in the afternoon, a small software team in Bangkok faced a stressful setback. A minor update had broken the checkout screen just hours before a partner showcase. Instead of blaming junior developers, Nont stepped forward to take responsibility for the oversight. "Let us stay calm and inspect the error logs together," he told the room, knowing panic would only do serious damage to their concentration. Fixing the payment bug had to take priority over polishing small layout colors. For ninety focused minutes, the engineers tested every route while Maya went to have a quick word with the partner liaison in case they needed thirty extra minutes. Fortunately, the partner team gave them the benefit of the doubt and waited patiently. Moments later, Maya spotted a single missing validation rule. After one clean patch, the screen worked smoothly again, and the team celebrated having made a genuine breakthrough under pressure. Before logging off, Nont reminded everyone not to make an exception for rushed late-night releases again. Calm ownership during a crisis always turns potential chaos into lasting trust.',
      listenQ: 'What did Maya do while the engineers were testing the error logs?',
      listenA: 'She went to have a quick word with the partner liaison in case they needed thirty extra minutes.',
      dictation: 'Customer safety always takes priority over speed.',
      listenNote:
        'สังเกตการลดเสียงและเชื่อมคำว่า "takes_priority_over" (/teɪks praɪˈɒr.ə.ti ˈəʊ.vər/) เสียง /s/ ท้าย takes ออกชัดก่อนเข้าพยางค์แรกของ priority',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้คำกริยาจับคู่ผิด 2 จุดในประโยคนี้: "Ignoring client feedback can make serious damage, so we should get responsibility right away."',
          answer:
            'Ignoring client feedback can do serious damage, so we should take responsibility right away.',
          explanation:
            'ในภาษาอังกฤษระดับ B2 ใช้ do damage (ไม่ใช้ make damage) และ take responsibility (ไม่ใช้ get responsibility)',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ก้อนคำแสดงความหมาย "ยอมยกเว้นให้เป็นกรณีพิเศษแม้ปกติจะทำไม่ได้" ได้ถูกต้องเป็นธรรมชาติ?',
          answer: 'Usually we close at six, but we can make an exception today.',
          choices: [
            'Usually we close at six, but we can do an exception today.',
            'Usually we close at six, but we can make an exception today.',
            'Usually we close at six, but we can take an exception today.',
            'Usually we close at six, but we can give an exception today.',
          ],
          explanation: 'ก้อนคำมาตรฐานคือ make an exception (สร้าง/ทำข้อยกเว้น)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมกริยาให้ครบก้อนคำ: Before jumping to conclusions, try to _____ him the benefit of the doubt.',
          answer: 'give',
          explanation:
            'give someone the benefit of the doubt = ให้โอกาสเชื่อในเจตนาดีของอีกฝ่ายไว้ก่อน',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยใช้ก้อนคำจากบท: "สุขภาพจิตของทีมต้องมาก่อนกำหนดส่งงาน"',
          answer: "The team's mental health must take priority over the deadline.",
          explanation: 'ใช้โครงสร้าง take priority over + สิ่งที่สำคัญรองลงมา',
        },
      ],
      writing:
        'เขียนอัปเดตสั้นๆ ถึงเพื่อนร่วมทีม 5–6 ประโยค เล่าเหตุการณ์งานสะดุดเล็กน้อยที่คุณแก้ผ่านมาได้ โดยใช้ก้อนคำจากบทอย่างน้อย 4 ก้อน (เช่น take responsibility, take priority over, do damage, make a breakthrough, have a word with)',
      writingSample:
        "Earlier this week, our campaign link stopped working right after launch. I decided to take responsibility immediately instead of waiting for someone else to notice. Fixing the broken redirect had to take priority over posting new graphics, because silent links could do real damage to reader trust. After I had a quick word with our web developer, we found the routing typo and made a breakthrough within twenty minutes. Thanks to everyone who gave me the benefit of the doubt while we sorted it out!",
      writingNote:
        'เช็กการจับคู่ light verb กับคำนามทุกตัว: make a breakthrough / exception, do damage, take responsibility / priority, have a word with',
      speakingTopic:
        'เล่าเรื่อง "ปัญหาเฉพาะหน้าที่คุณหรือทีมรับมือได้ทันเวลา" ด้วยเวลา 4 / 3 / 2 นาที',
      speakingBullets: [
        'เปิดฉากปัญหา → ใคร take responsibility → อะไร take priority over อะไร → จบลงด้วยการ make a breakthrough อย่างไร',
        'เน้นจังหวะออกเสียงเบาที่ make/do/take/have และลงเสียงหนักที่คำนามหลัก (breakthrough, priority, damage)',
      ],
    },
    {
      day: 170,
      title: 'High-Impact Verb + Noun Collocations',
      objective:
        'อัปเกรดกริยาธรรมดาให้เป็นคู่ Verb + Noun ระดับมืออาชีพ (launch an initiative, meet a deadline, bridge a gap, address an issue, spark debate, draw a conclusion)',
      explanation:
        'หากคุณยังใช้คำกริยาพื้นฐานอย่าง *open, solve, close, make* แทนทุกอย่าง ประโยคภาษาอังกฤษจะฟังดูแบนและซ้ำซาก การจับคู่ **High-Impact Verb + Noun** ทำให้ความหมายคมชัดขึ้นทันที: **`launch an initiative`** (เปิดตัวโครงการริเริ่มใหม่ — ไม่ใช่ *open*), **`meet a deadline`** (ส่งงานทันกำหนด — ไม่ใช่ *catch/arrive*), **`bridge a gap`** (เชื่อมช่องว่างระหว่างสองกลุ่ม), **`address an issue`** (จัดการ/ชี้แจงประเด็นปัญหาอย่างตรงจุด), **`spark debate`** (จุดประกายการถกเถียง), และ **`draw a conclusion`** (สรุปผลจากข้อมูล — ไม่ใช่ *do a conclusion*)',
      sound: [
        'Verb-to-Noun Rhythm & Linking',
        'initiative /ɪˈnɪʃ.ə.tɪv/ · deadline /ˈded.laɪn/ · conclusion /kənˈkluː.ʒən/ · debate /dɪˈbeɪt/',
        'คำเชื่อมที่มักหายไปในคำพูดเร็วคือ article "an/a": "launch_an_initiative" (/ˈlɔːntʃ ən ɪˈnɪʃ.ə.tɪv/), "address_an_issue" (/əˈdres ən ˈɪʃ.uː/) ต้องเชื่อมเสียงท้ายพยัญชนะเข้ากับสระอย่างลื่นไหล',
        'ฝึกอ่าน 6 คู่ก้อนคำติดกันเป็นจังหวะ 2 จังหวะต่อคู่: LAUNCH an in-I-tia-tive · MEET a DEAD-line · BRIDGE a GAP · ad-DRESS an IS-sue · SPARK de-BATE · DRAW a con-CLU-sion',
      ],
      l1: [
        'แปลตรงจากภาษาไทยว่า "open a new project", "catch the deadline", "solve the gap" หรือ "write a conclusion from the data"',
        'สมองไทยดึงคำกริยาแกนแรกที่คุ้น (open, catch, solve, make) มาผสมกับคำนามโดยไม่ได้จำทั้งก้อนพร้อมกัน',
        'จำกริยาคู่กับคำนามแบบแพ็กเกจ: initiative → launch · deadline → meet · gap → bridge · issue → address · debate → spark · conclusion → draw',
      ],
      vocab: [
        [
          'initiative',
          'โครงการริเริ่ม / แผนปฏิบัติใหม่',
          '/ɪˈnɪʃ.ə.tɪv/',
          'launch an initiative',
          'เปิดตัวโครงการริเริ่ม',
        ],
        [
          'deadline',
          'เส้นตาย / กำหนดส่ง',
          '/ˈded.laɪn/',
          'meet a tight deadline',
          'ส่งงานทันกำหนดที่กระชั้นชิด',
        ],
        [
          'bridge',
          'เชื่อมประสาน',
          '/brɪdʒ/',
          'bridge the gap between',
          'เชื่อมช่องว่างระหว่าง...',
        ],
        [
          'address',
          'รับมือ / จัดการประเด็นอย่างเป็นระบบ',
          '/əˈdres/',
          'address an urgent issue',
          'จัดการปัญหาเร่งด่วน',
        ],
        [
          'spark',
          'จุดประกาย',
          '/spɑːk/',
          'spark lively debate',
          'จุดประกายการถกเถียงอย่างคึกคัก',
        ],
        [
          'conclusion',
          'ข้อสรุป',
          '/kənˈkluː.ʒən/',
          'draw a clear conclusion',
          'สรุปความอย่างชัดเจน',
        ],
        [
          'compromise',
          'ทางสายกลาง / การประนีประนอม',
          '/ˈkɒm.prə.maɪz/',
          'reach a fair compromise',
          'หาข้อตกลงที่ยอมรับร่วมกันได้',
        ],
      ],
      examples: [
        [
          'Last spring, local cafés launched a reusable-cup initiative across Chiang Mai.',
          'เมื่อฤดูใบไม้ผลิปีก่อน ร้านกาแฟท้องถิ่นได้เปิดตัวโครงการแก้วใช้ซ้ำทั่วเชียงใหม่',
        ],
        [
          'Clear weekly checklists help our small studio meet every tight deadline.',
          'เช็กลิสต์รายสัปดาห์ที่ชัดเจนช่วยให้สตูดิโอเล็กๆ ของเราส่งงานทันทุกกำหนดที่กระชั้นชิด',
        ],
        [
          'Mentorship programs can bridge the gap between recent graduates and employers.',
          'โครงการพี่เลี้ยงช่วยเชื่อมช่องว่างระหว่างบัณฑิตจบใหม่กับนายจ้างได้',
        ],
        [
          'Before we draw a final conclusion, let us address the budget issue first.',
          'ก่อนที่เราจะสรุปผลขั้นสุดท้าย เรามาจัดการประเด็นงบประมาณกันก่อนเถอะ',
        ],
      ],
      reading:
        'Last month, a neighborhood committee in Chiang Mai decided to launch a green-packaging initiative for night-market stalls. Right away, the proposal sparked lively debate among vendors. Longtime stall owners worried that biodegradable bowls would raise daily costs, whereas younger shoppers pushed for immediate change. Rather than ignoring the pushback, the organizers held an open workshop to address the pricing issue directly. By sharing bulk-buying contacts, they helped suppliers and small cooks bridge the gap between affordability and sustainability. Several vendors still needed extra time to switch boxes, so everyone worked together to reach a fair compromise on a two-month rollout. After tracking waste levels for thirty days, the committee could draw an encouraging conclusion: plastic bag use dropped by nearly half, and every participating stall managed to meet the transition deadline without losing regular customers. Good ideas rarely succeed through strict rules alone; they grow when communities listen openly and solve practical hurdles step by step.',
      listenQ: 'How did the organizers help vendors handle the cost of biodegradable bowls?',
      listenA: 'They held an open workshop and shared bulk-buying contacts to help bridge the pricing gap.',
      dictation: 'We must address this issue before drawing a conclusion.',
      listenNote:
        'ฟังการออกเสียง /əˈdres/ (กริยาเน้นพยางค์หลัง ต่างจากคำนาม /ˈæd.res/ ที่อยู่) และเสียงเชื่อม "drawing_a" ก่อนคำว่า conclusion',
      drills: [
        {
          kind: 'choice',
          prompt: 'กริยาตัวใดจับคู่กับคำว่า "a conclusion" และ "a deadline" ได้ถูกต้องตามธรรมชาติระดับ B2?',
          answer: 'draw a conclusion / meet a deadline',
          choices: [
            'make a conclusion / catch a deadline',
            'draw a conclusion / meet a deadline',
            'do a conclusion / arrive a deadline',
            'open a conclusion / reach a deadline',
          ],
          explanation:
            'เจ้าของภาษาใช้ draw a conclusion (สรุปผลจากข้อมูล) และ meet a deadline (ส่งงานทันกำหนด)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมกริยาให้ครบก้อนคำ: The new community center aims to _____ the gap between teenagers and senior neighbors.',
          answer: 'bridge',
          explanation: 'bridge the gap = เชื่อมช่องว่างหรือลดระยะห่างระหว่างสองกลุ่ม',
        },
        {
          kind: 'error_fix',
          prompt:
            'เปลี่ยนกริยาที่แปลตรงจากไทยให้เป็น Collocation ที่ถูกต้อง 2 จุด: "Our town will open a recycling initiative next week after the plan sparked a discussion."',
          answer:
            'Our town will launch a recycling initiative next week after the plan sparked lively debate.',
          explanation:
            'ใช้ launch an initiative (ไม่ใช้ open) และ spark debate / spark lively debate แทนวลีทื่อๆ',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "เราจำเป็นต้องจัดการประเด็นนี้ก่อนที่จะสรุปผลใดๆ"',
          answer: 'We need to address this issue before drawing any conclusion.',
          explanation:
            'address an issue = จัดการประเด็นปัญหา และ draw a conclusion = สรุปผล',
        },
      ],
      writing:
        'เขียนย่อหน้าสั้นๆ (5–6 ประโยค) เสนอไอเดียปรับปรุงชุมชนหรือที่ทำงานของคุณ โดยใช้ Verb+Noun Collocations จากบทอย่างน้อย 4 คู่ (launch an initiative, address an issue, bridge a gap, meet a deadline, draw a conclusion)',
      writingSample:
        "Next quarter, our office wants to launch a mentorship initiative for new hires. Recent surveys helped us address an onboarding issue: newcomers often felt unsure whom to ask for quick feedback. By pairing each beginner with a buddy from another team, we hope to bridge the gap between departments and help everyone meet early deadlines smoothly. Although the idea sparked debate about weekly time commitments, we reached a compromise of one thirty-minute chat per week. After two months, we will review feedback and draw a clear conclusion.",
      writingNote:
        'ตรวจให้แน่ใจว่าคำกริยาและคำนามจับคู่กันถูก (launch + initiative, bridge + gap, address + issue, meet + deadline, draw + conclusion)',
      speakingTopic:
        'เล่าแคมเปญ โครงการ หรือการเปลี่ยนแปลงที่คุณเคยเห็นหรืออยากผลักดัน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'อธิบายที่มาด้วยคำว่า launch an initiative → spark debate → address an issue → reach a compromise → draw a conclusion',
        'ระวังการออกเสียงคำว่า initiative /ɪˈnɪʃ.ə.tɪv/ และ address (v.) /əˈdres/',
      ],
    },
    {
      day: 171,
      title: 'Adverb + Adjective & Adjective + Noun Collocations',
      objective:
        'เลิกใช้คำว่า "very" นำหน้าทุกคำ เปลี่ยนมาใช้ก้อนคำขยายระดับ B2 (bitterly disappointed, strongly recommend, acutely aware, heavy traffic, mild setback, overwhelming majority)',
      explanation:
        'สัญญาณชัดเจนที่แยกระดับ A2–B1 ออกจาก B2 คือการเลิกพูดว่า *"very disappointed, very aware, big traffic, many people agree"* แล้วหันมาใช้ **Adv + Adj** และ **Adj + Noun Collocations** ที่ลงล็อกทางเสียงและความหมาย: 1) **`bitterly disappointed`** (ผิดหวังอย่างขมขื่น — ห้ามใช้ *strongly disappointed*), 2) **`strongly recommend`** (แนะนำอย่างยิ่ง — ไม่ใช้ *heavily recommend*), 3) **`acutely aware`** (ตระหนักรู้อย่างลึกซึ้ง/ชัดเจน), 4) **`heavy traffic`** (รถติดหนัก — ไม่ใช่ *crowded/big traffic*), 5) **`mild setback`** (อุปสรรคเล็กน้อย), 6) **`overwhelming majority`** (เสียงส่วนใหญ่ท่วมท้น), 7) **`viable alternative`** (ทางเลือกที่ทำได้จริง)',
      sound: [
        'Intensifier Stress & Secondary Stress',
        'bitterly /ˈbɪt.ə.li/ · acutely /əˈkjuːt.li/ · overwhelming /ˌəʊ.vəˈwel.mɪŋ/ · majority /məˈdʒɒr.ə.ti/',
        'ในคู่ Adv + Adj ทั้งสองคำมักมีจังหวะหนักคู่กัน: "BITterly disapPOINted", "STRONgly recomMEND", "aCUTEly aWARE" ทำให้ประโยคฟังดูมีน้ำหนักและอารมณ์จริง',
        'ฝึกพูด 5 คู่เทียบแทนคำว่า very: bitterly disappointed · strongly recommend · acutely aware · deeply concerned · wildly popular',
      ],
      l1: [
        'พูดว่า "very very disappointed", "very big traffic", หรือ "strong aware" เพราะภาษาไทยใช้คำว่า "มาก/หนัก/ใหญ่" แทรกได้กับทุกคำ',
        'คำขยายในภาษาอังกฤษเลือกคู่ตามความหมายแฝง (semantic prosody) เช่น bitterly มักมากับความรู้สึกเสียใจ/ผิดหวัง ส่วน acutely มากับการรับรู้ปัญหา',
        'เปลี่ยนคำว่า very ในหัวให้เป็น Adverb เฉพาะทาง 1 ตัวทุกครั้งที่พูดถึงความรู้สึกหรือคำแนะนำ',
      ],
      vocab: [
        [
          'bitterly',
          'อย่างขมขื่น / ผิดหวังมาก',
          '/ˈbɪt.ə.li/',
          'bitterly disappointed',
          'ผิดหวังอย่างยิ่ง',
        ],
        [
          'acutely',
          'อย่างเฉียบคม / ลึกซึ้ง',
          '/əˈkjuːt.li/',
          'acutely aware of',
          'ตระหนักรู้อย่างลึกซึ้งถึง...',
        ],
        [
          'strongly',
          'อย่างหนักแน่น',
          '/ˈstrɒŋ.li/',
          'strongly recommend',
          'แนะนำอย่างยิ่ง',
        ],
        [
          'traffic',
          'การจราจร',
          '/ˈtræf.ɪk/',
          'stuck in heavy traffic',
          'ติดอยู่ในการจราจรที่หนาแน่น',
        ],
        [
          'setback',
          'อุปสรรคที่ทำให้สะดุด',
          '/ˈset.bæk/',
          'a mild setback',
          'อุปสรรคเล็กน้อยชั่วคราว',
        ],
        [
          'majority',
          'เสียงส่วนใหญ่',
          '/məˈdʒɒr.ə.ti/',
          'an overwhelming majority',
          'เสียงส่วนใหญ่อย่างท่วมท้น',
        ],
        [
          'alternative',
          'ทางเลือกอื่น',
          '/ɔːlˈtɜː.nə.tɪv/',
          'a viable alternative',
          'ทางเลือกที่นำไปใช้ได้จริง',
        ],
      ],
      examples: [
        [
          'Fans were bitterly disappointed when the outdoor concert got rained out.',
          'แฟนเพลงผิดหวังอย่างยิ่งเมื่อคอนเสิร์ตกลางแจ้งต้องยกเลิกเพราะฝนตก',
        ],
        [
          'We are acutely aware of how heavy traffic affects evening commuters.',
          'พวกเราตระหนักดีว่ารถติดหนักส่งผลกระทบต่อคนเดินทางช่วงเย็นอย่างไร',
        ],
        [
          'An overwhelming majority of travelers voted to keep the morning departure.',
          'ผู้เดินทางเสียงส่วนใหญ่ท่วมท้นโหวตให้คงรอบออกเดินทางตอนเช้าไว้',
        ],
        [
          'I strongly recommend taking the river boat as a viable alternative at rush hour.',
          'ฉันแนะนำอย่างยิ่งให้ขึ้นเรือโดยสารเป็นทางเลือกที่เวิร์กจริงในช่วงเวลาเร่งด่วน',
        ],
      ],
      reading:
        'When sudden monsoon rain hit the Saturday street-food festival, early visitors felt bitterly disappointed. Because heavy traffic jammed every main road nearby, several delivery vans arrived an hour late. However, the organizers remained acutely aware that complaining would not save the evening. Treating the storm as only a mild setback, they quickly moved twelve cooking carts under a covered parking arcade next door. They also posted clear map pins online and strongly recommended taking the skytrain instead of driving. That quick pivot turned out to be a viable alternative. By seven o’clock, warm lights glowed over dry tables, and local musicians began playing acoustic sets beside the noodle stalls. In the post-event survey, an overwhelming majority of guests praised how calm and adaptable the crew remained under rough weather. Even better, small vendors noticed that regular neighbors stayed longer than usual once everyone felt sheltered from the rain. Sometimes a modest backup plan matters far more than perfect sunshine.',
      listenQ: 'How did the organizers treat the monsoon rain and traffic jam?',
      listenA: 'They treated it as only a mild setback and moved twelve cooking carts under a covered parking arcade.',
      dictation: 'An overwhelming majority voted for a viable alternative.',
      listenNote:
        'สังเกตการออกเสียง majority (/məˈdʒɒr.ə.ti/) เน้นพยางค์ที่สอง "จ๊อ" และ alternative (/ɔːlˈtɜː.nə.tɪv/) เน้น "เทอ"',
      drills: [
        {
          kind: 'choice',
          prompt: 'ก้อนคำคู่ใดจับคู่ได้ถูกต้องและเป็นธรรมชาติที่สุด?',
          answer: 'bitterly disappointed / heavy traffic / strongly recommend',
          choices: [
            'strongly disappointed / big traffic / bitterly recommend',
            'bitterly disappointed / heavy traffic / strongly recommend',
            'heavily disappointed / thick traffic / acutely recommend',
            'deeply traffic / mild aware / overwhelming setback',
          ],
          explanation:
            'ผิดหวังหนัก = bitterly disappointed · รถติดหนัก = heavy traffic · แนะนำมาก = strongly recommend',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำขยายให้ตรงคู่: As a frequent cyclist, she is _____ aware of blind spots at busy intersections.',
          answer: 'acutely',
          explanation: 'acutely aware of = ตระหนักรู้อย่างลึกซึ้งและชัดเจนถึง...',
        },
        {
          kind: 'error_fix',
          prompt:
            'อัปเกรดคำว่า very/big ให้เป็น Collocation ระดับ B2: "A very big majority of locals were very disappointed by the crowded traffic."',
          answer:
            'An overwhelming majority of locals were bitterly disappointed by the heavy traffic.',
          explanation:
            'เปลี่ยน very big majority → an overwhelming majority, very disappointed → bitterly disappointed, crowded traffic → heavy traffic',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ฉันแนะนำอย่างยิ่งให้มองมันเป็นแค่อุปสรรคเล็กน้อย และหาทางเลือกที่ทำได้จริง"',
          answer:
            'I strongly recommend seeing it as a mild setback and finding a viable alternative.',
          explanation:
            'strongly recommend + V-ing · a mild setback · a viable alternative',
        },
      ],
      writing:
        'เขียนรีวิวประสบการณ์จริง 5–6 ประโยค (ร้านอาหาร งานอีเวนต์ ทริปเดินทาง หรือแอปที่เคยใช้) โดยหลีกเลี่ยงคำว่า "very" ทั้งหมด แล้วแทนที่ด้วยก้อนคำ Adv+Adj / Adj+Noun อย่างน้อย 4 คู่จากบทนี้',
      writingSample:
        "I used to drive across town every Friday, though heavy traffic left me exhausted before dinner even started. Last month, a friend strongly recommended trying a small neighborhood bistro near the skytrain as a viable alternative. When my favorite dish sold out early, I felt briefly disappointed, yet the chef offered a fresh seasonal bowl that turned the mild setback into a highlight. Now I am acutely aware of how relaxing local dining can be—an overwhelming majority of my friends have switched to Friday walks too.",
      writingNote:
        'เช็กข้อความของคุณอีกครั้งว่าไม่มีคำว่า very ติดมาเลย แล้วแทนด้วย bitterly / strongly / acutely / heavy / mild / overwhelming',
      speakingTopic:
        'เล่าสถานการณ์ที่แผนเดิมเจอ "mild setback" แล้วคุณหา "viable alternative" ได้สำเร็จ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ห้ามพูดคำว่า very เลยตลอดทั้ง 3 รอบ! ใช้ bitterly disappointed, acutely aware, heavy traffic, strongly recommend แทน',
        'ลง Stress ให้ชัดทั้ง Adv และ Adj ในแต่ละคู่คำเพื่อเพิ่มอารมณ์ให้เรื่องเล่า',
      ],
    },
    {
      day: 172,
      title: 'Three-Word Phrasal Verbs Group 1',
      objective:
        'เข้าใจและใช้กริยาวลี 3 คำยอดฮิต (come up with, put up with, run out of, get away with, look forward to, catch up on) พร้อมวางกรรมและกริยา V-ing หลัง to ได้ถูกต้อง',
      explanation:
        'กริยาวลี 3 คำ (**Verb + Adverb + Preposition**) พบทุกวันในบทสนทนาจริงและแทบไม่มีทางแยกออกจากกันได้ (Inseparable — **ห้ามแทรกกรรมไว้ตรงกลาง** เด็ดขาด!): 1) **`come up with`** (คิดไอเดีย/ทางออกขึ้นมาได้), 2) **`put up with`** (อดทนกับสิ่งที่น่ารำคาญ), 3) **`run out of`** (ใช้จนหมด/ขาดแคลน), 4) **`get away with`** (ทำผิดหรือเลี่ยงงานแล้วรอดตัวไม่โดนลงโทษ), 5) **`look forward to`** (ตั้งตารอคอย — **จำแม่น: `to` ตัวนี้เป็น Preposition ต้องตามด้วย `Noun` หรือ `V-ing` เสมอ** เช่น `look forward to seeing you` ❌ ไม่ใช่ *to see you*), 6) **`catch up on`** (ทำ/ตามเก็บสิ่งที่ค้างอยู่ เช่น นอน อ่านข่าว งาน)',
      sound: [
        'Stress on Middle Particle & Weak Prepositions',
        'come UP with /kʌm ˈʌp wɪð/ · put UP with /pʊt ˈʌp wɪð/ · run OUT of /rʌn ˈaʊt əv/',
        'เจ้าของภาษาลง Stress ที่ **คำกลาง (up, out, away, forward)** ส่วนคำสุดท้าย (with, of, to, on) อ่านสั้นเบาและเชื่อมกับคำนามข้างหลัง เช่น "run_outta_time", "look_for-ward_tə_it"',
        'ออกเสียงเน้นคำกลาง 6 ชุด: come UP with an idea · put UP with the noise · run OUT of coffee · get aWAY with it · look FORward to meeting · catch UP on sleep',
      ],
      l1: [
        'ทำคำที่ 3 หล่นหาย ("We need to come up a plan", "I cannot put up this noise") หรือใส่ V1 หลัง look forward to ("I look forward to meet you")',
        'ภาษาไทยแปล "คิดแผน" หรือ "ทนเสียง" ไม่มีบุพบทปิดท้าย 2 ชั้น จึงเผลอตัด with / of / on ทิ้ง',
        'จำไว้ว่า Preposition ตัวสุดท้ายทำหน้าที่จับมือกับกรรมข้างหลัง ถ้าไม่มีตัวสุดท้าย ประโยคจะขาดสะพานเชื่อมทันที!',
      ],
      vocab: [
        [
          'come up with',
          'คิดค้น/เสนอไอเดียขึ้นมาได้',
          '/kʌm ˈʌp wɪð/',
          'come up with a backup plan',
          'คิดแผนสำรองขึ้นมาได้',
        ],
        [
          'put up with',
          'อดทนยอมรับ (สิ่งที่น่ารำคาญ)',
          '/pʊt ˈʌp wɪð/',
          'put up with constant noise',
          'ทนกับเสียงรบกวนตลอดเวลา',
        ],
        [
          'run out of',
          'หมด / ใช้จนเกลี้ยง',
          '/rʌn ˈaʊt əv/',
          'run out of patience',
          'หมดความอดทน / ขาดความอดทน',
        ],
        [
          'get away with',
          'ทำผิด/เอาเปรียบแล้วรอดตัวไปได้',
          '/ɡet əˈweɪ wɪð/',
          'get away with cutting corners',
          'ลักไก่ทำงานลวกๆ แล้วรอดตัวไปได้',
        ],
        [
          'look forward to',
          'ตั้งตารอคอยอย่างยินดี',
          '/lʊk ˈfɔː.wəd tə/',
          'look forward to catching up',
          'ตั้งตารอจะได้พูดคุยอัปเดตกัน',
        ],
        [
          'catch up on',
          'ตามเก็บ/ชดเชยสิ่งที่ค้างไว้',
          '/kætʃ ˈʌp ɒn/',
          'catch up on sleep',
          'นอนชดเชยที่อดนอนมา',
        ],
        [
          'face up to',
          'เผชิญหน้าและยอมรับความจริง',
          '/feɪs ˈʌp tə/',
          'face up to the problem',
          'กล้ายอมรับและเผชิญหน้ากับปัญหา',
        ],
      ],
      examples: [
        [
          'We need to come up with a practical schedule before Monday morning.',
          'เราต้องคิดตารางงานที่ใช้งานได้จริงให้เสร็จก่อนเช้าวันจันทร์',
        ],
        [
          'I look forward to meeting your design team in person next Friday.',
          'ฉันตั้งตารอที่จะได้พบทีมออกแบบของคุณตัวจริงในวันศุกร์หน้า',
          'หลัง look forward to ต้องเป็น V-ing (meeting) หรือ Noun เท่านั้น',
        ],
        [
          'After three busy trade-fair days, she spent Sunday catching up on sleep.',
          'หลังออกบูธงานแฟร์ติดต่อกันสามวัน เธอใช้เวลาวันอาทิตย์นอนชดเชยให้เต็มอิ่ม',
        ],
        [
          'Nobody should get away with leaving shared kitchen dishes unwashed.',
          'ไม่ควรมีใครปล่อยจานส่วนกลางทิ้งไว้ไม่ล้างแล้วลอยตัวไปได้เฉยๆ',
        ],
      ],
      reading:
        'Sharing an apartment near the train station sounded ideal at first, yet three roommates quickly learned what daily compromise means. All week, construction across the street meant they had to put up with loud drilling from eight in the morning. By Thursday night, they had also run out of dish soap and coffee beans because nobody kept track of supplies. Worse still, one roommate tried to get away with skipping trash duty twice in a row. Instead of letting frustration build up, they sat down on Friday evening to face up to the messy routine honestly. Together, they managed to come up with a simple shared fridge whiteboard and a rotating grocery budget. With small conflicts sorted out, Saturday morning finally felt peaceful. Mint brewed fresh tea to catch up on her neglected novel, while Ploy texted old friends to say she was looking forward to hosting a calm Sunday brunch. Living well with others rarely happens by luck; it comes from clear communication before patience runs out.',
      listenQ: 'What did the roommates create on Friday evening to solve their shared chores issue?',
      listenA: 'They came up with a simple shared fridge whiteboard and a rotating grocery budget.',
      dictation: 'I really look forward to catching up on our plans.',
      listenNote:
        'สังเกตเสียง /tə/ ของคำว่า to ใน "look forward to catching up" ที่ลดเสียงเบาแล้วต่อด้วย V-ing ทันที',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ตกคำและผันรูปหลัง to ผิด 2 จุด: "I look forward to see you soon so we can come up a fresh solution."',
          answer:
            'I look forward to seeing you soon so we can come up with a fresh solution.',
          explanation:
            '1) หลัง look forward to ต้องเป็น V-ing (seeing) 2) come up with + กรรม (ต้องมี with)',
        },
        {
          kind: 'choice',
          prompt: 'กริยาวลีใดตรงกับความหมาย "ต้องอดทนอยู่กับเสียงก่อสร้างหรือเรื่องกวนใจทุกวัน"?',
          answer: 'put up with',
          choices: ['get away with', 'put up with', 'catch up on', 'run out of'],
          explanation: 'put up with = อดทนยอมรับสิ่งที่ไม่ชอบใจ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำปิดท้ายให้ครบก้อนคำ: We had to rush to the market because we ran out _____ fresh milk.',
          answer: 'of',
          explanation: 'run out of + คำนาม = ใช้สิ่งนั้นจนหมด',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "สุดสัปดาห์นี้ฉันตั้งใจจะนอนชดเชยและตามอ่านหนังสือที่ค้างไว้"',
          answer: 'This weekend I plan to catch up on sleep and reading.',
          explanation: 'ใช้ catch up on + sleep / reading (ตามเก็บสิ่งที่ค้าง)',
        },
      ],
      writing:
        'เขียนโน้ตหรือข้อความแชทถึงเพื่อน/รูมเมท 5–6 ประโยค เล่าเรื่องวุ่นๆ ในสัปดาห์นี้และแผนผ่อนคลายสุดสัปดาห์ โดยใช้ Three-word phrasal verbs จากบทอย่างน้อย 4 คำ (เช่น come up with, put up with, run out of, catch up on, look forward to)',
      writingSample:
        "Hey! What a week—we kept running out of printer paper at work, and I had to put up with nonstop street noise outside my window. Thankfully, our team managed to come up with a smoother file checklist so nobody gets away with skipping review steps anymore. Tomorrow I am switching off my alarm to catch up on sleep, and I really look forward to grabbing iced coffee with you on Sunday afternoon!",
      writingNote:
        'เช็กทุก phrasal verb ว่ามีครบทั้ง 3 คำ และหลัง look forward to ใช้ Noun หรือ V-ing ไม่ใช่ V1',
      speakingTopic:
        'เล่าเรื่อง "สิ่งที่ต้องอดทนในชีวิตประจำวัน และวิธีแก้เกมของคุณ" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้ให้ครบ: put up with (ทนอะไร) → run out of (อะไรหมด/ขาด) → come up with (คิดทางแก้อะไร) → look forward to + V-ing',
        'ฝึกเน้นคำกลาง (put UP with, come UP with, run OUT of) เพื่อจังหวะแบบเจ้าของภาษา',
      ],
    },
    {
      day: 173,
      title: 'Three-Word Phrasal Verbs Group 2',
      objective:
        'ใช้กริยาวลี 3 คำสำหรับงานและการวางแผนชีวิต (follow up on, keep up with, live up to, stand up for, back out of, cut down on, get round to)',
      explanation:
        'ชุดที่ 2 ของ Three-word Phrasal Verbs สำคัญมากสำหรับการสื่อสารในที่ทำงานและมิตรภาพระดับ B2: 1) **`follow up on`** (ติดตามความคืบหน้าต่อจากเรื่องเดิม — อย่าพูดแค่ *follow the email*), 2) **`keep up with`** (ตามให้ทันความเปลี่ยนแปลง/จังหวะ/เพื่อน), 3) **`live up to`** (ทำได้ดีสมกับความคาดหวังหรือชื่อเสียง), 4) **`stand up for`** (ลุกขึ้นปกป้องหลักการหรือคนที่ถูกเอาเปรียบ), 5) **`back out of`** (ถอนตัว/เบี้ยวนัดหรือข้อตกลงนาทีสุดท้าย), 6) **`cut down on`** (ลดปริมาณสิ่งที่ไม่ดี เช่น น้ำตาล ค่าใช้จ่าย), 7) **`get round to` + V-ing** (หาเวลาว่างมาทำเรื่องที่ผลัดไว้สักที)',
      sound: [
        'Linking Final Consonant to Preposition',
        'follow UP_on /ˈfɒl.əʊ ˈʌp ɒn/ · back OUT_of /bæk ˈaʊt əv/ · cut DOWN_on /kʌt ˈdaʊn ɒn/',
        'สังเกตเสียงเชื่อมข้ามคำกลางไปคำท้าย: "follow_u-pon", "back_ou-təv", "cut_dow-non", "stand_up_for" และในคำพูดเร็ว "get round to" มักเชื่อมเป็น "get-roun-tə + V-ing"',
        'อ่านเรียง 6 ประโยคสั้นให้เชื่อมลื่นไม่สะดุด: Follow up on it · Keep up with the pace · Live up to the hype · Stand up for yourself · Back out of a deal · Cut down on sugar',
      ],
      l1: [
        'พูดว่า "follow the client email" (ซึ่งแปลว่าไล่ตามหลัง หรือทำตาม), "cancel out from the trip", หรือ "reduce down on coffee"',
        'สับสนระหว่าง follow (ทำตาม/เดินตาม) กับ follow up on (ตามเรื่อง/ทวงถามความคืบหน้า) และชอบซ้อนคำความหมายซ้ำ (reduce down)',
        'ท่องเป็นชุดความหมายตรงตัว: ตามเรื่อง = follow up on · ลดปริมาณ = cut down on · ถอนตัว = back out of · สมคำร่ำลือ = live up to',
      ],
      vocab: [
        [
          'follow up on',
          'ติดตามผล/ทวงถามความคืบหน้าของ...',
          '/ˈfɒl.əʊ ˈʌp ɒn/',
          'follow up on an inquiry',
          'ติดตามเรื่องที่สอบถามไว้',
        ],
        [
          'keep up with',
          'ตามให้ทัน (ข่าวสาร/จังหวะ/งาน)',
          '/kiːp ˈʌp wɪð/',
          'keep up with rapid changes',
          'ตามการเปลี่ยนแปลงที่รวดเร็วให้ทัน',
        ],
        [
          'live up to',
          'ทำได้สมกับความคาดหวัง/ชื่อเสียง',
          '/lɪv ˈʌp tə/',
          'live up to expectations',
          'เป็นไปตามความคาดหวัง / ไม่ทำให้ผิดหวัง',
        ],
        [
          'stand up for',
          'ลุกขึ้นปกป้อง / ยืนหยัดเพื่อ...',
          '/stænd ˈʌp fɔːr/',
          'stand up for fair treatment',
          'ยืนหยัดเพื่อการปฏิบัติอย่างเป็นธรรม',
        ],
        [
          'back out of',
          'ถอนตัว/เปลี่ยนใจไม่ทำตามที่ตกลงไว้',
          '/bæk ˈaʊt əv/',
          'back out of a commitment',
          'ถอนตัวจากข้อตกลงหรือคำสัญญา',
        ],
        [
          'cut down on',
          'ลดปริมาณลง (อาหาร/รายจ่าย/เวลาหน้าจอ)',
          '/kʌt ˈdaʊn ɒn/',
          'cut down on late-night snacks',
          'ลดของกินจุกจิกตอนดึก',
        ],
        [
          'get round to',
          'หาเวลาว่างมาลงมือทำสักที',
          '/ɡet ˈraʊnd tə/',
          'get round to replying',
          'หาเวลาว่างมาตอบกลับสักที',
        ],
      ],
      examples: [
        [
          'I am writing to follow up on the room booking we discussed yesterday.',
          'ฉันเขียนมาเพื่อติดตามความคืบหน้าเรื่องการจองห้องที่เราคุยกันเมื่อวาน',
        ],
        [
          'Since January, he has cut down on iced sweet drinks to sleep better.',
          'ตั้งแต่เดือนมกราคม เขาได้ลดเครื่องดื่มหวานเย็นลงเพื่อให้นอนหลับได้ดีขึ้น',
        ],
        [
          'Even after intense hype online, that quiet mountain café lived up to every expectation.',
          'แม้จะมีกระแสพูดถึงหนักในออนไลน์ คาเฟ่เงียบๆ บนดอยแห่งนั้นก็ดีสมคำร่ำลือทุกประการ',
        ],
        [
          'One vendor tried to back out of the stall agreement right before opening day.',
          'ร้านค้าร้านหนึ่งพยายามจะถอนตัวออกจากข้อตกลงจองบูธก่อนวันเปิดงานพอดี',
        ],
      ],
      reading:
        'Planning a group reunion in Nan seemed simple until two weeks before departure. First, one friend nearly tried to back out of the homestay booking because work piled up unexpectedly. Instead of panicking, Pim reminded everyone to stand up for clear commitments while still keeping plans flexible. The group decided to cut down on rushed sightseeing stops so slower walkers could keep up with the morning schedule comfortably. Meanwhile, Pim called the guesthouse owner to follow up on their dinner request and confirm vegetarian options. After weeks of waiting, she finally got round to packing her camera batteries the night before the train left. Fortunately, the rainy-season mist over the rice fields lived up to every photo they had seen online. Sipping warm local tea on the wooden porch, even the friend who had almost stayed behind admitted that cutting back the itinerary saved the whole weekend. Real travel joy comes not from squeezing ten stops into one day, but from pacing things wisely.',
      listenQ: 'Why did the group decide to cut down on sightseeing stops during their Nan trip?',
      listenA: 'So that slower walkers could keep up with the morning schedule comfortably.',
      dictation: 'I finally got round to following up on that email.',
      listenNote:
        'จำโครงสร้าง "got round to + V-ing" (หาเวลามาทำสักที) ซึ่งคำว่า to ลดเสียงเบาแล้วเชื่อมเข้ากับ following ทันที',
      drills: [
        {
          kind: 'gap',
          prompt:
            'เติมคำ 2 คำที่หายไป: Thanks for your patience—I wanted to follow _____ _____ the invoice I sent on Monday.',
          answer: 'up on',
          explanation: 'follow up on + เรื่องที่เคยติดต่อไว้ = ติดตามความคืบหน้า',
        },
        {
          kind: 'choice',
          prompt:
            'หากร้านอาหารชื่อดังอร่อยและบริการดีตรงตามที่รีวิวชมไว้ ควรใช้สำนวนใด?',
          answer: 'The restaurant really lived up to its reputation.',
          choices: [
            'The restaurant really backed out of its reputation.',
            'The restaurant really cut down on its reputation.',
            'The restaurant really lived up to its reputation.',
            'The restaurant really stood up for its reputation.',
          ],
          explanation: 'live up to expectations / reputation = ทำได้ดีสมความคาดหวังหรือชื่อเสียง',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้คำผิดและส่วนที่ขาด 2 จุด: "She tried to reduce down on screen time, but she never gets round to clean her desk."',
          answer:
            'She tried to cut down on screen time, but she never gets round to cleaning her desk.',
          explanation:
            'ใช้ cut down on (ไม่ใช้ reduce down on) และหลัง get round to ต้องตามด้วย V-ing (cleaning)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "มันยากที่จะตามข่าวเทคโนโลยีที่เปลี่ยนแปลงเร็วให้ทัน แต่ฉันจะไม่ถอนตัวจากโปรเจกต์นี้"',
          answer:
            'It is hard to keep up with fast tech changes, yet I will not back out of this project.',
          explanation:
            'keep up with = ตามให้ทัน · back out of = ถอนตัวจาก',
        },
      ],
      writing:
        'เขียนบันทึกเป้าหมายส่วนตัวหรืออัปเดตงาน 5–6 ประโยค โดยใช้ Three-word Phrasal Verbs จากบทนี้ให้ครบอย่างน้อย 4 คำ (เช่น cut down on, follow up on, get round to, keep up with, live up to, back out of)',
      writingSample:
        "This month, I promised myself to cut down on mindless scrolling so I could finally get round to organizing my portfolio. At work, it can feel tough to keep up with changing client briefs, especially when one supplier tries to back out of an agreed delivery slot. Yesterday I called to follow up on a missing sample, stood up for a fair timeline, and made sure our final booklet lived up to our studio's usual standard.",
      writingNote:
        'ตรวจสอบหลัง get round to ว่าใช้ V-ing หรือ Noun และดูว่าทุกกริยาวลีมีครบทั้ง 3 คำ (verb + particle + preposition)',
      speakingTopic:
        'เล่า "แผนหรือเป้าหมายที่คุณเกือบถอดใจ แต่ปรับจังหวะจนทำสำเร็จสมความตั้งใจ" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้กริยาวลีหลักในเรื่อง: back out of, cut down on, keep up with, follow up on, live up to',
        'เชื่อมเสียงตรงรอยต่อ UP_on / OUT_of / DOWN_on โดยไม่อ่านแยกเป็นคำๆ แข็งทื่อ',
      ],
    },
    {
      day: 174,
      title: 'Natural Expressions in Social & Digital Workplaces',
      objective:
        'ผสานสำนวนและก้อนคำใช้จริงในแชท อีเมล และการคุยงานยุคใหม่ (touch base, on the same page, in the loop, ring a bell, call it a day, play it by ear, wrap things up)',
      explanation:
        'ในชีวิตจริงและการทำงานยุคดิจิทัล เจ้าของภาษาไม่ค่อยพูดว่า *"Let us communicate again"* หรือ *"Do you have the same understanding?"* แต่ใช้สำนวน Collocations ที่กระชับและเป็นมิตรมาก: 1) **`touch base (with someone)`** (แวะทัก/คุยอัปเดตสั้นๆ ให้ตรงกัน), 2) **`on the same page`** (เข้าใจตรงกัน/เห็นภาพเดียวกัน), 3) **`keep someone in the loop`** (แจ้งความคืบหน้าให้รู้เรื่องด้วยตลอด), 4) **`ring a bell`** (คุ้นๆ ชื่อ/เรื่องเหมือนเคยได้ยินมาก่อน), 5) **`play it by ear`** (รอดูสถานการณ์หน้างานแล้วค่อยตัดสินใจ), 6) **`wrap things up`** (สรุปจบงาน/ประชุม), 7) **`call it a day`** (พอแค่นี้สำหรับวันนี้/เลิกงาน)',
      sound: [
        'Fast Workplace Idiom Linking',
        'touch base /tʌtʃ beɪs/ · loop /luːp/ · ear /ɪər/ · wrap /ræp/',
        'สำนวนสั้นพูดเร็วเป็นก้อนเดียว: "on_the_same_page" (stress หนักที่ same PAGE), "in_the_loop" (stress ที่ LOOP), "play_it_by_ear" (/pleɪ_ɪt_baɪ_ɪər/), "call_it_a_day" (/ˈkɔː.lɪ.tə ˈdeɪ/)',
        'พูดจังหวะ 1 ลมหายใจต่อ 1 สำนวน: Just touching base · Are we on the same page? · Keep me in the loop · Does that ring a bell? · Let us call it a day',
      ],
      l1: [
        'พูดว่า "Are we same understand?", "Let me know in the circle.", หรือ "Today finish work now." ซึ่งฟังดูแปลตรงจากภาษาไทย',
        'จำคำแปลตามตัวอักษรเกินไป ทำให้พลาดสำนวนสั้นที่เจ้าของภาษาใช้แทนประโยคยาวๆ',
        'จับคู่สถานการณ์จริง: เช็กความเข้าใจ = on the same page · อัปเดตสั้นๆ = touch base · เลิกงาน = call it a day',
      ],
      vocab: [
        [
          'touch base',
          'ทักมาคุยอัปเดตสั้นๆ ให้ตรงกัน',
          '/tʌtʃ beɪs/',
          'touch base on Monday',
          'คุยอัปเดตสั้นๆ กันวันจันทร์',
        ],
        [
          'page',
          'หน้า / ความเข้าใจตรงกัน',
          '/peɪdʒ/',
          'be on the same page',
          'เข้าใจตรงกัน / เห็นภาพเดียวกัน',
        ],
        [
          'loop',
          'วงข่าวสาร / การรับรู้ร่วมกัน',
          '/luːp/',
          'keep everyone in the loop',
          'แจ้งความคืบหน้าให้ทุกคนรับรู้ทั่วกัน',
        ],
        [
          'bell',
          'กระดิ่ง / ความคุ้นเคยในความทรงจำ',
          '/bel/',
          'ring a bell',
          'ฟังดูคุ้นๆ เหมือนเคยได้ยิน',
        ],
        [
          'ear',
          'หู / ปรับตัวตามหน้างาน',
          '/ɪər/',
          'play it by ear',
          'รอดูหน้างานแล้วค่อยตัดสินใจ',
        ],
        [
          'wrap up',
          'สรุปปิด / จบกิจกรรม',
          '/ræp ʌp/',
          'wrap things up quickly',
          'สรุปจบเรื่องอย่างรวดเร็ว',
        ],
        [
          'day',
          'วัน / จบการทำงานของวัน',
          '/deɪ/',
          'call it a day',
          'พอแค่นี้สำหรับวันนี้',
        ],
      ],
      examples: [
        [
          'Before we start designing slides, let us make sure everyone is on the same page.',
          'ก่อนที่เราจะเริ่มออกแบบสไลด์ มาเช็กให้ชัวร์ว่าทุกคนเข้าใจตรงกันก่อน',
        ],
        [
          'Wait—that café name rings a bell, though I cannot recall which street it is on.',
          'เดี๋ยวนะ ชื่อร้านกาแฟนั้นฟังดูคุ้นๆ แต่ฉันจำไม่ได้ว่าอยู่ถนนเส้นไหน',
        ],
        [
          'Since outdoor weather looks unpredictable, let us play it by ear after lunch.',
          'เนื่องจากอากาศข้างนอกเดาไม่ได้ หลังมื้อเที่ยงเรามารอดูสถานการณ์หน้างานกันอีกที',
        ],
        [
          'We have fixed the main layout errors, so let us wrap things up and call it a day.',
          'เราแก้จุดเพี้ยนหลักของหน้าเว็บเสร็จแล้ว งั้นสรุปจบงานแล้วพอแค่นี้สำหรับวันนี้กันเถอะ',
        ],
      ],
      reading:
        'Every Monday at nine, a small creative team across Bangkok, Singapore, and Melbourne opens a ten-minute video huddle just to touch base. They avoid long slide decks and focus on keeping everyone in the loop before solo deep work begins. Today, Kate mentioned a regional bakery client whose brief sounded unusually familiar. "Does Sunbeam Flour ring a bell to anyone?" she asked. Immediately, Ben smiled and pulled up notes from an autumn pop-up project they had pitched last year. Reviewing those old sketches helped the whole team get on the same page in under three minutes. Because Singapore faced heavy afternoon thunderstorms that could delay a photo delivery, Kate suggested they play it by ear for the Tuesday social post rather than locking an exact hour. By five thirty Bangkok time, all draft captions were uploaded cleanly into the shared folder. Instead of dragging out another late call, Kate thanked the crew, helped wrap things up with three clear next steps, and told everyone to call it a day early.',
      listenQ: 'Why did Kate suggest playing the Tuesday social post by ear?',
      listenA: 'Because heavy afternoon thunderstorms in Singapore could delay a photo delivery.',
      dictation: 'Let us wrap things up and call it a day.',
      listenNote:
        'สังเกตเสียง /w/ ที่ไม่ออกใน wrap (/ræp/) และเสียงเชื่อม "wrap_things_up" กับ "call_it_a_day" ที่พูดต่อเนื่องเป็นจังหวะสั้นกระชับ',
      drills: [
        {
          kind: 'choice',
          prompt:
            'เพื่อนร่วมทีมเสนอชื่อโปรเจกต์เก่าแล้วคุณรู้สึกคุ้นๆ แต่นึกไม่ออกทันที ควรตอบอย่างไร?',
          answer: 'That name definitely rings a bell, though I forget the details.',
          choices: [
            'That name definitely hits a clock, though I forget the details.',
            'That name definitely rings a bell, though I forget the details.',
            'That name definitely stays in the loop, though I forget the details.',
            'That name definitely calls it a day, though I forget the details.',
          ],
          explanation: 'ring a bell = ฟังดูคุ้นๆ เหมือนเคยได้ยินมาก่อน',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำ 3 คำให้ครบสำนวน: Could you CC me on that client thread just to keep me _____ _____ _____?',
          answer: 'in the loop',
          explanation: 'keep someone in the loop = แจ้งข่าวหรืออัปเดตให้รับรู้ร่วมกันตลอด',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้สำนวนที่ใช้ผิดคำศัพท์ให้ถูกต้อง 2 จุด: "Let us touch bases at noon so we stay in the same paper before we wrap up."',
          answer:
            'Let us touch base at noon so we stay on the same page before we wrap up.',
          explanation:
            'ใช้ touch base (base ไม่เติม s) และ on the same page (ไม่ใช่ in the same paper)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ตอนนี้แผนยังไม่นิ่ง เรามารอดูหน้างานก่อนแล้วค่อยปิดจ๊อบวันนี้ตอนห้าโมงกัน"',
          answer:
            'The plan is not fixed yet, so let us play it by ear and call it a day at five.',
          explanation: 'play it by ear = รอดูสถานการณ์หน้างาน · call it a day = พอแค่นี้สำหรับวันนี้',
        },
      ],
      writing:
        'เขียนข้อความ Slack/แชททีมสั้นๆ 5–6 ประโยค นัดคุยอัปเดตงานกับเพื่อนร่วมงานและสรุปจบวัน โดยใช้สำนวนจากบทอย่างน้อย 4 ตัว (touch base, on the same page, in the loop, play it by ear, wrap things up, call it a day)',
      writingSample:
        "Hi team! Just wanted to touch base before noon so we are all on the same page for tomorrow's workshop. That guest speaker's name really rang a bell—turns out she collaborated with our media group two years ago! Since two train lines are running slow today, let us play the afternoon rehearsal by ear and keep everyone in the loop via this channel. Once the slide notes are saved, we will wrap things up by 5:30 and call it a day.",
      writingNote:
        'เช็กตัวสะกดสำนวน: touch base (ไม่มี s) · on the same page (ใช้บุพบท on) · in the loop · play it by ear',
      speakingTopic:
        'จำลองการสรุปประชุมสั้นๆ ท้ายวันทำงานหรือวันเตรียมทริปกับเพื่อน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เปิดด้วยการ touch base → เช็กว่า on the same page → บอกวิธี keep in the loop → นัด play it by ear เรื่องที่ยังไม่นิ่ง → ปิดท้ายด้วย wrap things up และ call it a day',
        'เน้นความลื่นไหลของสำนวนก้อน อย่าหยุดค้างกลางสำนวน',
      ],
    },
    {
      day: 175,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 25 — B2 Collocations & Multi-Word Verbs + Dictogloss',
      objective:
        'สังเคราะห์ B2 Collocations (Light Verbs, Verb+Noun, Adv+Adj) และ Three-word Phrasal Verbs ร่วมกับสำนวนที่ทำงานในแบบฝึก Dictogloss และการเล่าเรื่องจริง',
      explanation:
        'ตลอดสัปดาห์ที่ 25 คุณได้เปลี่ยนวิธีคิดจาก **"จำคำศัพท์ทีละคำแล้วนำมาต่อแบบไทย"** มาเป็น **"หยิบใช้ก้อนคำจับคู่สำเร็จรูป (Collocations & Multi-Word Verbs)"**: 1) Light Verbs (`make a breakthrough`, `do damage`, `take responsibility`, `take priority`), 2) High-Impact Verb+Noun (`launch an initiative`, `bridge a gap`, `address an issue`, `draw a conclusion`), 3) Adv+Adj & Adj+Noun (`bitterly disappointed`, `acutely aware`, `strongly recommend`, `heavy traffic`, `overwhelming majority`), 4) Three-word Phrasal Verbs (`come up with`, `put up with`, `run out of`, `look forward to + V-ing`, `follow up on`, `live up to`, `back out of`, `cut down on`), และ 5) Workplace Idioms (`touch base`, `on the same page`, `in the loop`). วันนี้เรามาฟัง Dictogloss และลงมือใช้ทุกก้อนรวมกัน!',
      sound: [
        'Week 25 Rhythm & Phrasal Stress Audit',
        'breakthrough /ˈbreɪk.θruː/ · initiative /ɪˈnɪʃ.ə.tɪv/ · majority /məˈdʒɒr.ə.ti/ · put UP with /pʊt ˈʌp wɪð/',
        'จุดวัดระดับ B2 ที่แท้จริงเวลาพูดเร็ว: กริยาเบาและ Preposition ต้องเชื่อมเข้ากับคำหลักอย่างไหลลื่น เช่น "take_priority_over", "follow_up_on_it", "in_the_loop"',
        'ทำ Shadowing บทอ่านประจำวัน 3 รอบ โดยเน้น Stress ที่คำกลางของ Phrasal Verbs และคำนามหลักใน Collocations',
      ],
      l1: [
        'เวลาพูดต่อเนื่องยาวๆ มักหลุดกลับไปใช้สูตรเก่า: พูดว่า "very disappointed", "do a mistake", หรือตัดคำที่ 3 ของ Phrasal Verbs ทิ้ง',
        'เวลาสมาธิไปอยู่ที่เนื้อเรื่อง สมองจะหยิบคำเดี่ยวๆ ที่จำมานานกว่าก้อนคำใหม่',
        'วิธีฝังให้ติดปาก: ก่อนเล่าเรื่อง ลิสต์ก้อนคำ 5 ก้อนไว้ข้างหน้า แล้วบังคับตัวเองหยิบใส่ทีละก้อนจนเป็นนิสัย',
      ],
      vocab: [
        [
          'make a breakthrough',
          'สร้างความก้าวหน้าครั้งสำคัญ',
          '/meɪk ə ˈbreɪk.θruː/',
          'make a quiet breakthrough',
          'สร้างความก้าวหน้าสำคัญอย่างเงียบๆ',
        ],
        [
          'bridge a gap',
          'เชื่อมช่องว่าง',
          '/brɪdʒ ə ɡæp/',
          'bridge a communication gap',
          'เชื่อมช่องว่างทางการสื่อสาร',
        ],
        [
          'acutely aware',
          'ตระหนักรู้อย่างลึกซึ้ง',
          '/əˈkjuːt.li əˈweər/',
          'acutely aware of fatigue',
          'ตระหนักถึงความเหนื่อยล้าอย่างชัดเจน',
        ],
        [
          'come up with',
          'คิดค้น/เสนอทางออกได้',
          '/kʌm ˈʌp wɪð/',
          'come up with a fresh angle',
          'คิดมุมมองใหม่ๆ ขึ้นมาได้',
        ],
        [
          'live up to',
          'ทำได้ดีสมความคาดหวัง',
          '/lɪv ˈʌp tə/',
          'live up to its promise',
          'ทำได้สมกับคำสัญญาที่ให้ไว้',
        ],
        [
          'follow up on',
          'ติดตามผลต่อจากเรื่องเดิม',
          '/ˈfɒl.əʊ ˈʌp ɒn/',
          'follow up on feedback',
          'ติดตามผลจากข้อเสนอแนะ',
        ],
        [
          'on the same page',
          'เข้าใจตรงกัน',
          '/ɒn ðə seɪm peɪdʒ/',
          'stay on the same page',
          'รักษาความเข้าใจให้ตรงกัน',
        ],
      ],
      examples: [
        [
          'We are acutely aware that rushing edits can do serious damage to credibility.',
          'พวกเราตระหนักดีว่าการเร่งแก้แบบลวกๆ อาจสร้างความเสียหายต่อความน่าเชื่อถือได้',
        ],
        [
          'After following up on user feedback, the café came up with a quieter study zone.',
          'หลังติดตามผลตอบรับจากลูกค้า คาเฟ่ก็คิดไอเดียจัดโซนอ่านหนังสือที่เงียบขึ้นได้',
        ],
        [
          'An overwhelming majority agreed that clear breaks help teams meet tough deadlines.',
          'เสียงส่วนใหญ่ท่วมท้นเห็นพ้องว่าการพักอย่างชัดเจนช่วยให้ทีมส่งงานทันกำหนดยากๆ',
        ],
        [
          'I look forward to touching base next week once everyone has caught up on rest.',
          'ฉันตั้งตารอจะได้คุยอัปเดตกันสัปดาห์หน้าหลังจากทุกคนได้พักผ่อนชดเชยเต็มที่แล้ว',
        ],
      ],
      reading:
        'Three months after opening, a neighborhood coworking café felt like it was running out of momentum. Early members were bitterly disappointed by afternoon Wi-Fi drops, and some freelancers threatened to back out of their monthly passes. Rather than ignoring complaints, the owner decided to take responsibility and address the connectivity issue before adding fancy menu items. Fixing the router setup clearly had to take priority over launching a new dessert line. Next, she invited ten regulars to touch base over iced tea so everyone could stay on the same page. Listening openly helped her bridge the gap between casual coffee drinkers and quiet remote workers. Together, they came up with a simple floor rule: silent focus tables upstairs, lively chat booths downstairs. She also followed up on acoustic panels to cut down on echo during video calls. Within four weeks, the upgraded space lived up to its original promise, and an overwhelming majority renewed their passes early. I strongly recommend remembering this lesson: real improvement starts when leaders stop making excuses and start taking ownership.',
      listenQ: 'What practical floor rule did the café owner and regulars come up with?',
      listenA: 'They created silent focus tables upstairs and lively chat booths downstairs.',
      dictation: 'Fixing the core issue took priority over new menu items.',
      listenNote:
        'จับจังหวะก้อนคำสำคัญในบทอ่าน: running out of, bitterly disappointed, take responsibility, bridge the gap, live up to',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้คำจับคู่และ Phrasal Verb ผิด 3 จุด: "We cannot put up this delay anymore, so let us draw a priority to solve and follow the client."',
          answer:
            'We cannot put up with this delay anymore, so let us give it priority and follow up on the client request.',
          explanation:
            '1) put up with + กรรม 2) give priority / take priority over 3) follow up on (ติดตามเรื่อง)',
        },
        {
          kind: 'dictogloss',
          prompt:
            'ฟังประโยคสรุปจากบทอ่านแล้วเลือกกลุ่มคำที่ตรงเป๊ะทุกคำ: "Fixing the router setup clearly had to _____ _____ a new dessert line."',
          answer: 'take priority over launching',
          choices: [
            'make priority than opening',
            'take priority over launching',
            'give priority above making',
            'do priority before starting',
          ],
          explanation:
            'จากบทอ่าน: "Fixing the router setup clearly had to take priority over launching a new dessert line."',
          audio_text:
            'Fixing the router setup clearly had to take priority over launching a new dessert line.',
        },
        {
          kind: 'choice',
          prompt: 'ประโยคใดใช้ B2 Collocations และ Three-word Phrasal Verbs ถูกต้อง 100%?',
          answer:
            'I am acutely aware of the deadline, and I look forward to wrapping things up tomorrow.',
          choices: [
            'I am bitterly aware of the deadline, and I look forward to wrap things up tomorrow.',
            'I am acutely aware of the deadline, and I look forward to wrapping things up tomorrow.',
            'I am strongly aware of the deadline, and I look forward catching up tomorrow.',
            'I am heavy aware of the deadline, and I get away to wrap things up tomorrow.',
          ],
          explanation:
            'acutely aware of + look forward to + V-ing (wrapping) ถูกต้องสมบูรณ์ทั้งโครงสร้างและก้อนคำ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำที่ขาดให้สมบูรณ์: An _____ majority of team members agreed to cut down on unnecessary Monday meetings.',
          answer: 'overwhelming',
          explanation: 'an overwhelming majority = เสียงส่วนใหญ่อย่างท่วมท้น',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "แม้จะมีอุปสรรคเล็กน้อย คาเฟ่แห่งนี้ก็ยังทำได้ดีสมกับความคาดหวัง"',
          answer: 'Despite a mild setback, this café still lived up to expectations.',
          explanation: 'Despite a mild setback + lived up to expectations',
        },
      ],
      writing:
        'เขียนสรุปบทเรียนหรือเรื่องราวการแก้ปัญหา 1 ย่อหน้า (6–7 ประโยค) โดยใช้ก้อนคำจากสัปดาห์ที่ 25 อย่างน้อย 6 ก้อนผสมกันให้เป็นธรรมชาติ (เลือกใช้ทั้ง Light Verb, Adv+Adj, Three-word Phrasal Verb และ Workplace Idiom)',
      writingSample:
        "Last quarter, our small design group nearly ran out of patience when two vendors backed out of a print order at the last minute. We were bitterly disappointed at first, yet we knew panicking would only do damage to our schedule. Instead, our lead took responsibility and touched base with a local workshop to see if they could make an exception for a rush job. Because we stayed on the same page and addressed the file sizing issue quickly, we came up with a viable alternative that met our deadline. In the end, the printed booklets lived up to every expectation, and I look forward to celebrating with the team tomorrow!",
      writingNote:
        'ตรวจจุดเสี่ยง 3 ข้อ: 1) หลัง look forward to / get round to ใช้ V-ing หรือ Noun 2) ไม่มีคำว่า very หลุดมาแทน acutely/bitterly/strongly 3) กริยาวลี 3 คำอยู่ครบทุกส่วน',
      speakingTopic:
        'สรุปเรื่องราว "From Setback to Breakthrough" ด้วยภาษา B2 ภายใน 4 / 3 / 2 นาที',
      speakingBullets: [
        'บังคับใช้ก้อนคำอย่างน้อย 6 ตัวจากสัปดาห์นี้ขณะเล่าเรื่องจริงในงานหรือชีวิตส่วนตัว',
        'รอบ 2 นาทีให้พูดต่อเนื่องโดยไม่หยุดแปลคำเดี่ยวในหัว อาศัยก้อนคำสำเร็จรูปพาไหลไป',
      ],
    },
  ]
);
