import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 2: เล่าเรื่อง ตอบโต้ และเชื่อมความคิดในชีวิตประจำวัน';

export const WEEK16: ModuleSeed = createModule(
  {
    week: 16,
    phase: 2,
    phase_title: PHASE_TITLE,
    cefr_level: 'Early B1',
    title: 'Conditionals 0/1/2 & Milestone Assessment Phase 2',
    summary:
      'ใช้ประโยคเงื่อนไข 3 แบบแรกอย่างถูกต้อง (ข้อเท็จจริง, โอกาสจริง, เรื่องสมมุติ/ขออย่างสุภาพ) พร้อมสอบประเมินผลใหญ่จบ Phase 2',
    focus: 'Zero, First, Second Conditionals & Phase 2 B1 Bridge Assessment',
  },
  [
    {
      day: 106,
      title: 'Zero Conditional (If + Present Simple, Present Simple) — กฎและความจริงทั่วไป',
      objective:
        'ใช้ Zero Conditional อธิบายกฎระเบียบ สาเหตุ-ผลลัพธ์ที่เป็นจริงเสมอ และกิจวัตรอัตโนมัติ (when/if + Present Simple, Present Simple)',
      explanation:
        'ประโยคเงื่อนไขแบบที่ 0 (**Zero Conditional**) ไม่ได้พูดถึงอนาคตเจาะจงครั้งเดียว แต่ใช้พูดถึง **"ความจริงทั่วไป กฎการทำงาน นิสัยประจำ และเหตุ-ผลที่เกิดซ้ำทุกครั้ง"**:\n**โครงสร้าง**: **`If / When + Present Simple, Present Simple`**\nเช่น `If you skip breakfast, you lose focus before noon.` หรือ `If the printer jams, our office policy says to unplug it first.`\n\nข้อสังเกตสำคัญ:\n1. **ใช้ `When` แทน `If` ได้** เมื่อหมายถึง "ทุกครั้งที่..." เช่น `When I drink coffee after four, I sleep poorly.`\n2. **อย่าลืมผัน `-s/-es`** เมื่อประธานเป็นเอกพจน์ในทั้งสองฝั่ง! (`If a guest **arrives** early, the front desk **offers** tea.`)\n3. **กฎลูกน้ำ (Comma)**: ถ้าเอา `If...` ขึ้นต้น **ต้องมี `,`** คั่นกลาง; ถ้าเอา `If...` ไปไว้หลัง **ไม่ต้องใส่ `,`** (`You lose focus if you skip breakfast.`)',
      sound: [
        'Rising-Falling Intonation in Conditional Clauses',
        'policy /ˈpɒl.ə.si/ · concentrate /ˈkɒn.sən.treɪt/ · automatic /ˌɔː.təˈmæt.ɪk/ · exhaust /ɪɡˈzɔːst/',
        'เวลาพูดประโยค `If` ให้เสียงขึ้นเล็กน้อยตรงท้ายท่อน `If...` เพื่อส่งสัญญาณว่า "ยังไม่จบนะ มีผลต่อท้าย" แล้วเสียงตกลงท้ายประโยคผล: "If you skip BREAKfast ↗, you lose FOcus ↘."',
        'ฝึกพูด 4 กฎการทำงานให้ได้ทำนองขึ้น-ลง: If a file fails ↗, save a copy ↘. / When it rains ↗, traffic slows down ↘.',
      ],
      l1: [
        'ใส่ "will" หรือลืมผันกริยาเอกพจน์ -s ในฝั่งกฎทั่วไป เช่น "If a machine overheat, it shut down automatically"',
        'คนไทยชินกับรูปกริยาที่ไม่ต้องผัน -s และมักติดใส่ will ทันทีที่แปลคำว่า "ถ้า...จะ..." โดยไม่ดูว่าพูดถึงกฎประจำหรือเหตุการณ์อนาคต',
        'ถามตัวเองก่อน: "เรื่องนี้เกิดขึ้นเสมอเป็นปกติ (ทุกครั้งที่ทำก็ได้ผลนี้)" ใช่ไหม? ถ้าใช่ ใช้ Present Simple ทั้งสองข้าง และเช็ก -s เมื่อประธานเป็น he/she/it!',
      ],
      vocab: [
        ['policy', 'นโยบาย / กฎข้อบังคับ', '/ˈpɒl.ə.si/', 'company safety policy', 'นโยบายความปลอดภัยของบริษัท'],
        ['concentrate', 'มีสมาธิ / จดจ่อ', '/ˈkɒn.sən.treɪt/', 'concentrate on tasks', 'จดจ่ออยู่กับงาน'],
        ['prevent', 'ป้องกัน', '/prɪˈvent/', 'prevent common errors', 'ป้องกันข้อผิดพลาดที่พบบ่อย'],
        ['routine', 'กิจวัตรประจำ', '/ruːˈtiːn/', 'morning routine', 'กิจวัตรยามเช้า'],
        ['ingredient', 'ส่วนผสม', '/ɪnˈɡriː.di.ənt/', 'fresh ingredients', 'วัตถุดิบสดใหม่'],
        ['automatic', 'โดยอัตโนมัติ', '/ˌɔː.təˈmæt.ɪk/', 'automatic backup system', 'ระบบสำรองข้อมูลอัตโนมัติ'],
        ['exhaust', 'ทำให้หมดแรง / อ่อนล้า', '/ɪɡˈzɔːst/', 'exhaust your energy', 'ทำให้หมดพลังงาน'],
      ],
      examples: [
        ['If you store fresh herbs in a damp towel, they stay crisp for days.', 'ถ้าคุณเก็บผักสมุนไพรสดในผ้าหมาดๆ มันจะกรอบอยู่ได้หลายวัน'],
        ['When my laptop overheats, the fan turns on automatically.', 'เวลาโน้ตบุ๊กของฉันร้อนเกินไป พัดลมจะเปิดทำงานโดยอัตโนมัติ'],
        ['Employees receive a meal allowance if they work past eight o’clock.', 'พนักงานจะได้รับค่าอาหารหากทำงานหลังสองทุ่มเป็นประจำ'],
        ['Skipping short breaks exhausts your mind and makes it hard to concentrate.', 'การข้ามช่วงพักสั้นๆ ทำให้สมองล้าและจดจ่อยาก'],
      ],
      reading:
        'Good systems prevent stress before problems even begin. At our small community kitchen, everyone follows three clear Zero Conditional rules to keep service smooth. First, if a chef finishes preparing one ingredient, that person wipes the cutting board right away so bacteria never spread. Second, when the fridge temperature rises above four degrees, an automatic alarm chimes gently until someone closes the door properly. Finally, if a volunteer feels tired during a weekend rush, the shift leader rotates stations every ninety minutes so nobody exhausts their energy. Because these habits stay consistent every single day, new staff learn the routine within one afternoon, and customers always enjoy safe, freshly cooked meals.',
      listenQ: 'What happens automatically when the fridge temperature rises above four degrees?',
      listenA: 'An automatic alarm chimes gently until someone closes the door properly.',
      dictation: 'When you store fresh herbs properly, they stay crisp longer.',
      listenNote:
        'จับทำนองเสียงขึ้นเล็กน้อยตรงคำว่า `properly` เพื่อส่งต่อเข้าท่อนผล `they stay crisp longer`',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคกฎทั่วไปที่ลืมผัน -s และใส่เครื่องหมายวรรคตอนผิด: "If a visitor forget to sign in the guard ask for an ID card."',
          answer:
            'If a visitor forgets to sign in, the guard asks for an ID card.',
          explanation:
            'a visitor และ the guard เป็นเอกพจน์ทั้งคู่ กริยาจึงต้องเติม -s (forgets, asks) และต้องมีลูกน้ำคั่นหลัง If-clause',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Zero Conditional อธิบายความจริงทั่วไปและกิจวัตรได้ถูกต้อง?',
          answer: 'If water reaches one hundred degrees, it boils quickly.',
          choices: [
            'If water will reach one hundred degrees, it boils quickly.',
            'If water reach one hundred degrees, it boiling quickly.',
            'If water reaches one hundred degrees, it boils quickly.',
            'When water reached one hundred degrees, it will boil quickly.',
          ],
          explanation:
            'ข้อเท็จจริงทางวิทยาศาสตร์ใช้ Present Simple ทั้งสองฝั่ง (reaches / boils)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมรูปกริยาที่ถูกต้องของ save: If you enable automatic sync, the app _____ your progress every minute.',
          answer: 'saves',
          explanation: 'the app เป็นเอกพจน์ ใน Zero Conditional จึงผัน save เป็น saves',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ถ้าฉันดื่มกาแฟตอนเย็น ฉันมักจะนอนไม่หลับ"',
          answer: 'If I drink coffee in the evening, I usually cannot sleep.',
          explanation: 'นิสัย/เหตุ-ผลประจำตัว ใช้ Present Simple ทั้งสองส่วน',
        },
      ],
      writing:
        'เขียนกฎการทำงาน เคล็ดลับในครัว หรือกฎดูแลสุขภาพของคุณ 4–5 ประโยค โดยใช้ Zero Conditional (`If / When + Present Simple, Present Simple`) ทั้งแบบ `If` ขึ้นต้นและ `If` อยู่กลางประโยค',
      writingSample:
        'At my desk, I follow simple rules that protect my focus every day. If I turn off notifications before starting work, I finish writing twice as fast. When my back feels stiff after an hour, I stand up and stretch beside the window. You also prevent afternoon tiredness if you drink enough water before lunch.',
      writingNote:
        'เช็กการเติม -s เมื่อประธานฝั่งใดฝั่งหนึ่งเป็นเอกพจน์ และตรวจว่ามีลูกน้ำเมื่อ If/When อยู่หน้าประโยค',
      speakingTopic:
        'แชร์ "กฎทอง 4 ข้อของบ้านหรือที่ทำงานฉัน" ด้วย Zero Conditional (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้ `If + V1, V1` หรือ `When + V1, V1` พูดถึงกฎประจำที่เกิดผลเดิมเสมอ',
        'ฝึกโทนเสียงขึ้น-ลงตามจังหวะ If-clause ↗ → ผลลัพธ์ ↘ ให้ฟังเป็นธรรมชาติ',
      ],
    },
    {
      day: 107,
      title: 'First Conditional (If + Present, will/can/might + V1) & unless',
      objective:
        'พูดถึงเหตุการณ์ที่มีโอกาสเกิดขึ้นจริงในอนาคตด้วย First Conditional และใช้ unless (= if not) โดยไม่ใส่ will หลัง if',
      explanation:
        'เมื่อพูดถึง **"สิ่งที่มีโอกาสเกิดขึ้นจริงในอนาคตอันใกล้"** (เช่น ฝนตกพรุ่งนี้, ส่งงานทันศุกร์นี้) เราใช้ **First Conditional**:\n**โครงสร้าง**: **`If + Present Simple, will / can / might + V1`**\n- `If it **rains** tomorrow, we **will move** the picnic indoors.` (ห้าม ❌ *If it will rain...*)\n- เปลี่ยนความมั่นใจได้ตาม Modal: `will` (ค่อนข้างแน่), `can` (ทำได้), `might` (อาจจะ)\n\n**คำเชื่อมประหยัดคำ `unless` = `if ... not` (เว้นแต่ว่า / ถ้าไม่...)**: เช่น `We will miss the ferry unless we leave now.` (= *if we don’t leave now*) **ข้อควรระวัง**: ห้ามใส่ `not` ซ้ำหลัง `unless`! (❌ *unless we don’t leave*)',
      sound: [
        'Natural ’ll Reduction & Won’t /wəʊnt/ vs Want /wɒnt/',
        'forecast /ˈfɔː.kɑːst/ · unless /ənˈles/ · deadline /ˈded.laɪn/ · confirm /kənˈfɜːm/',
        'เวลาพูดจริง `I will / we will / it will` ย่อเป็น **`I’ll / we’ll / it’ll`**: `we’ll call` (`/wiːl/`), `it’ll help` (`/ˈɪt.əl/`). และแยก **`won’t`** (`/wəʊnt/` สระโอว) ให้ชัดจาก **`want`** (`/wɒnt/` สระเอาะ/ออ)!',
        'ฝึกพูดคู่ย่อ 4 ประโยค: If it rains, I’ll stay; If you hurry, we’ll make it; Unless you confirm, we won’t book.',
      ],
      l1: [
        'ใส่ will ทั้งสองข้าง ("If it will rain tomorrow, I will stay home") หรือใส่ not ซ้ำหลัง unless ("unless you don’t hurry")',
        'แปลตามภาษาไทย "ถ้าพรุ่งนี้ฝนจะตก ฉันก็จะอยู่บ้าน" และคิดว่า unless แปลว่า "เว้นแต่" เลยเติม "ไม่" เพิ่มข้างหลังอีก',
        'จำกฎเหล็ก: หลัง If และหลัง Unless ห้ามมี will เด็ดขาด! และตัวคำว่า unless มีความหมายว่า "ไม่" อยู่ในตัวแล้ว จึงห้ามใส่ don’t/doesn’t ตามหลัง!',
      ],
      vocab: [
        ['forecast', 'พยากรณ์อากาศ / คาดการณ์', '/ˈfɔː.kɑːst/', 'check the weather forecast', 'เช็กพยากรณ์อากาศ'],
        ['unless', 'เว้นแต่ว่า / ถ้าไม่...', '/ənˈles/', 'unless plans change', 'เว้นแต่แผนจะเปลี่ยน'],
        ['deadline', 'กำหนดส่งงาน', '/ˈded.laɪn/', 'meet the deadline', 'ส่งทันกำหนด'],
        ['backup', 'แผนสำรอง', '/ˈbæk.ʌp/', 'prepare a backup plan', 'เตรียมแผนสำรองไว้'],
        ['delay', 'ความล่าช้า / ทำให้ล่าช้า', '/dɪˈleɪ/', 'avoid any delay', 'หลีกเลี่ยงความล่าช้า'],
        ['cancel', 'ยกเลิก', '/ˈkæn.səl/', 'cancel the booking', 'ยกเลิกการจอง'],
        ['confirm', 'ยืนยัน', '/kənˈfɜːm/', 'confirm by noon', 'ยืนยันภายในเที่ยง'],
      ],
      examples: [
        ['If the morning forecast shows heavy rain, we’ll reschedule the hike.', 'ถ้าพยากรณ์อากาศตอนเช้าบอกว่าฝนตกหนัก พวกเราจะเลื่อนวันเดินป่า'],
        ['Unless everyone confirms by Thursday, the café won’t hold our large table.', 'เว้นแต่ทุกคนจะยืนยันภายในวันพฤหัสบดี ร้านกาแฟจะไม่เก็บโต๊ะใหญ่ไว้ให้เรา'],
        ['You might catch the earlier ferry if you skip checking luggage.', 'คุณอาจจะขึ้นเรือรอบเช้ากว่านั้นทันถ้าไม่ต้องรอโหลดกระเป๋า'],
        ['I’ll text you immediately if there is any unexpected delay.', 'ฉันจะทักหาคุณทันทีหากมีความล่าช้าที่คาดไม่ถึง'],
      ],
      reading:
        'Planning an outdoor food festival during Thailand’s rainy season always requires a clear backup plan. Yesterday, our organizing group reviewed Friday’s weather forecast and agreed on exact steps. If the sky stays bright on Saturday afternoon, we’ll set up twelve wooden booths around the garden lawn as planned. However, if dark clouds gather before two o’clock, the team will move every table under the covered market roof nearby. Our lead reminded vendors that they might face a slight delay unless they label their electrical cables beforehand. We won’t cancel the event unless a serious storm arrives, so guests can still drop by, enjoy warm snacks, and confirm our next community gathering.',
      listenQ: 'Under what condition will the organizing group cancel the Saturday food festival?',
      listenA: 'They will not cancel it unless a serious storm arrives.',
      dictation: 'We will miss the deadline unless we confirm the plan today.',
      listenNote:
        'สังเกต `We’ll` หรือ `We will` กับคำว่า `unless` (`/ənˈles/` เน้นพยางค์หลัง) และ `confirm` (`/kənˈfɜːm/` เน้นพยางค์หลัง)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ใส่ will หลัง if และใส่ปฏิเสธซ้ำหลัง unless: "If it will rain this evening, we won’t dine outside unless they don’t open the tent."',
          answer:
            'If it rains this evening, we won’t dine outside unless they open the tent.',
          explanation:
            '1) หลัง if ห้ามใช้ will → ใช้ Present Simple (rains) 2) unless แปลว่า "ถ้าไม่" อยู่แล้ว จึงตัด don’t ทิ้ง เป็น unless they open',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ First Conditional และ Modal (will/can/might) แสดงระดับความเป็นไปได้ได้ถูกต้อง?',
          answer: 'If we leave at six, we can avoid the worst traffic and might arrive before sunrise.',
          choices: [
            'If we will leave at six, we can avoid the worst traffic and might arrive before sunrise.',
            'If we leave at six, we can avoid the worst traffic and might arrive before sunrise.',
            'Unless we leave at six, we will avoid the worst traffic smoothly.',
            'If we left at six tomorrow, we can avoid the worst traffic.',
          ],
          explanation:
            'If + Present Simple (leave) + can / might + V1 ถูกต้องตามหลัก First Conditional',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมที่หมายถึง "ถ้าไม่": The printer _____ work properly unless you push the paper tray firmly.',
          answer: 'won’t',
          explanation: 'ใช้ won’t (will not) ในประโยคผลเมื่อเงื่อนไขเป็น unless (ถ้าไม่ดันถาดกระดาษ)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ถ้าฉันทำงานเสร็จทันกำหนด คืนนี้เราอาจจะไปกินร้านใหม่กัน"',
          answer: 'If I finish work on time, we might try the new restaurant tonight.',
          explanation: 'If + finish (Present Simple) + might try (ความน่าจะเป็นระดับกลาง)',
        },
      ],
      writing:
        'เขียนแผนสุดสัปดาห์ของคุณพร้อมแผนสำรอง 4–5 ประโยค โดยใช้ First Conditional (`If + Present, will/can/might + V1`) อย่างน้อย 3 ประโยค และ `unless` อย่างน้อย 1 ประโยค',
      writingSample:
        'This Saturday, I plan to cycle around Bang Krachao with two friends. If the weather stays dry in the morning, we’ll cross the river on the eight o’clock ferry. Unless the bike rental shop runs out of baskets, we can pack cold water and fresh mangoes for the ride. However, if it starts raining heavily before noon, we might stop at a covered riverside café instead.',
      writingNote:
        'ตรวจเช็กหลัง if และหลัง unless ทุกจุดว่าไม่มีคำว่า will และไม่มี don’t/won’t ซ้ำซ้อนหลัง unless',
      speakingTopic:
        'เล่า "แผนวันหยุด + แผนสำรองรับมือความเสี่ยง" ด้วย First Conditional & unless (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดแผนหลักกับแผนสำรองอย่างน้อย 3 เงื่อนไข (If the weather..., If traffic is bad..., Unless we book early...)',
        'ออกเสียง `won’t` (`/wəʊnt/`) และ `’ll` ให้ชัดและเป็นธรรมชาติ',
      ],
    },
    {
      day: 108,
      title: 'Second Conditional (If + Past Simple, would/could + V1) — เรื่องสมมุติ',
      objective:
        'พูดเรื่องสมมุติ จินตนาการในปัจจุบัน และให้คำแนะนำอย่างนุ่มนวลด้วย If I were you, I’d... โดยไม่ใส่ would ในฝั่ง if',
      explanation:
        'ถ้าอยากพูดถึงเรื่อง **"สมมุติขึ้นในปัจจุบันตอนนี้" หรือเรื่องที่โอกาสเกิดน้อยมาก/ไม่จริงตอนนี้** (เช่น มีเวลาว่างเพิ่ม, อยู่คนละประเทศ, เป็นอีกคนหนึ่ง) เราใช้ **Second Conditional**:\n**โครงสร้าง**: **`If + Past Simple (V2 / were), would / could + V1`**\n- `If I **had** an extra hour every morning, I **would cook** breakfast calmly.`\n- `If I **were** you, I **would ask** for clearer feedback.` (ใช้ `were` กับ I/he/she ได้อย่างเป็นธรรมชาติที่สุดในวลี `If I were you`!)\n\n**จุดที่ต้องระวัง**: `had / knew / were` ในที่นี้ **ไม่ได้แปลว่าอดีต!** แต่มันถอยรูปเป็น Past เพื่อส่งสัญญาณให้คนฟังรู้ว่า *"เรื่องนี้เป็นเรื่องสมมุติในใจตอนนี้"* และ **ห้ามใส่ `would` หลัง `if`** (❌ *If I would have time...*)',
      sound: [
        'Natural ’d Contraction & Silent "l" in would / could',
        'would /wʊd/ · could /kʊd/ · imagine /ɪˈmædʒ.ɪn/ · opportunity /ˌɒp.əˈtʃuː.nə.ti/',
        'จำไว้ว่าตัว `l` ใน `would` และ `could` **ไม่ออกเสียงเลย!** อ่าน `/wʊd/` และ `/kʊd/` ส่วนในประโยคพูดจริง `I would / we would` ลดเสียงเป็น **`I’d / we’d`**: `"If I were you, I’d wait"` → `/ɪf aɪ wɜː juː aɪd weɪt/`',
        'ฝึกพูด 4 ประโยคลดรูป `’d`: If I had time, I’d join; If we lived closer, we’d walk; If I were you, I’d check.',
      ],
      l1: [
        'ใส่ would เข้าไปในฝั่ง if ("If I would have more money, I would buy...") หรือแปล V2 ว่าหมายถึงอดีตเมื่อวาน',
        'คนไทยคิดว่า "จะ = would" ทุกที่ และไม่ชินกับการใช้ V2 (had, knew, were) เพื่อบอกเรื่อง "สมมุติในปัจจุบัน"',
        'จำสูตรแยก 2 ฟากเด็ดขาด: ฟาก `If` = กริยาช่อง 2 หรือ `were` (ห้ามมี would!) | ฟากผลลัพธ์ = `would / could + V1` (หรือ `’d + V1`)!',
      ],
      vocab: [
        ['imagine', 'จินตนาการ / สมมุติว่า', '/ɪˈmædʒ.ɪn/', 'imagine living nearby', 'จินตนาการว่าอยู่ใกล้ๆ'],
        ['remote', 'ทางไกล / ห่างไกล', '/rɪˈməʊt/', 'work remotely from anywhere', 'ทำงานทางไกลจากที่ไหนก็ได้'],
        ['invest', 'ลงทุน (เวลา/เงิน)', '/ɪnˈvest/', 'invest time wisely', 'ลงทุนเวลาอย่างชาญฉลาด'],
        ['flexible', 'ยืดหยุ่น', '/ˈflek.sə.bəl/', 'a four-day flexible week', 'สัปดาห์ทำงานยืดหยุ่น 4 วัน'],
        ['opportunity', 'โอกาส', '/ˌɒp.əˈtʃuː.nə.ti/', 'seize an opportunity', 'คว้าโอกาส'],
        ['realistic', 'อยู่บนพื้นฐานความจริง', '/ˌrɪəˈlɪs.tɪk/', 'stay realistic', 'มองตามความเป็นจริง'],
        ['wisely', 'อย่างชาญฉลาด', '/ˈwaɪz.li/', 'spend resources wisely', 'ใช้ทรัพยากรอย่างคุ้มค่า'],
      ],
      examples: [
        ['If I had a four-day workweek, I’d invest Fridays in learning Thai cooking.', 'ถ้าฉันมีสัปดาห์ทำงาน 4 วัน ฉันจะเอาวันศุกร์ไปเรียนทำอาหารไทย'],
        ['We could walk to the river every evening if our office were closer.', 'พวกเราคงเดินไปริมน้ำได้ทุกเย็นถ้าออฟฟิศของเราอยู่ใกล้กว่านี้'],
        ['If I were you, I would politely turn down that weekend shift.', 'ถ้าฉันเป็นคุณ ฉันจะปฏิเสธกะทำงานวันเสาร์-อาทิตย์นั้นอย่างสุภาพ'],
        ['Imagine how relaxed mornings would feel if nobody checked emails before nine.', 'ลองนึกดูว่าตอนเช้าจะสบายขนาดไหนถ้าไม่มีใครเช็กอีเมลก่อนเก้าโมง'],
      ],
      reading:
        'During Friday lunch, our small team played a quick "what if" game to spark fresh ideas for the year ahead. Everyone asked one simple question: how would our daily routines change if our company tested a flexible four-day schedule? Mint smiled and said that if she had every Friday free, she would volunteer at a local animal shelter and spend evenings reading quietly. Meanwhile, Ton admitted he could visit his parents in Korat more often if remote work stayed open on Mondays. Even our manager joined in, joking that if she were twenty again, she would invest her savings more wisely instead of buying pricey gadgets. Although the four-day plan is not realistic just yet, imagining better work habits brought useful ideas to the table.',
      listenQ: 'What would Ton do if remote work stayed open on Mondays?',
      listenA: 'He could visit his parents in Korat more often.',
      dictation: 'If I were you, I would invest that time wisely.',
      listenNote:
        'ฟังเสียง `If I were you` เชื่อมต่อกันเบาๆ แล้วเน้นคำว่า `would / ’d`, `invest` และ `wisely` (ระวังไม่ออกเสียงตัว `l` ใน `would`)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคสมมุติที่ใส่ would ผิดฝั่งและใช้รูปกริยาผิด: "If I would know her phone number, I will call her immediately—and if I was you, I don’t wait."',
          answer:
            'If I knew her phone number, I would call her immediately—and if I were you, I would not wait.',
          explanation:
            'หลัง if ใช้ Past Simple (knew / were) ห้ามใช้ would และฝั่งผลลัพธ์ใช้ would + V1 (would call / would not wait)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดให้คำแนะนำอย่างนุ่มนวลด้วย Second Conditional ได้ถูกต้องที่สุด?',
          answer: 'If I were in your shoes, I’d speak directly with the landlord before moving out.',
          choices: [
            'If I am in your shoes, I’d speak directly with the landlord before moving out.',
            'If I were in your shoes, I’d speak directly with the landlord before moving out.',
            'If I would be in your shoes, I speak directly with the landlord.',
            'If I were you, I would spoke directly with the landlord.',
          ],
          explanation:
            'If I were in your shoes (สำนวนเหมือน If I were you) + I’d + speak (V1 หลัง ’d = would)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมรูปกริยาที่ถูกต้องในเรื่องสมมุติ: Where _____ you live if you could work remotely from any town in Thailand?',
          answer: 'would',
          explanation: 'คำถาม Second Conditional ใช้ Where would + S + V1 + if + S + could/V2',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ถ้าฉันมีวันหยุดเพิ่มอีกหนึ่งสัปดาห์ ฉันคงไปเที่ยวภาคเหนือ"',
          answer: 'If I had one more week of holiday, I would travel to the north.',
          explanation: 'สมมุติปัจจุบันใช้ If I had... + I would travel...',
        },
      ],
      writing:
        'เขียนตอบคำถามสมมุติ 4–5 ประโยค: "ถ้าคุณมีเวลาว่างเพิ่มวันละ 2 ชั่วโมง หรือย้ายไปทำงานแบบยืดหยุ่นได้ คุณจะเปลี่ยนชีวิตประจำวันยังไง?" และแทรกคำแนะนำถึงเพื่อนด้วย `If I were you...` 1 ประโยค',
      writingSample:
        'If I had two extra hours every weekday, I’d start my mornings much more calmly. Instead of rushing out the door, I would cook a warm breakfast and practice English speaking aloud for thirty minutes. I could also visit my grandmother twice a week if traffic around town were lighter. By the way, if I were you, I would try blocking thirty minutes every morning before opening social media!',
      writingNote:
        'ตรวจทุกประโยคสมมุติว่าฝั่ง If เป็น Past Simple (had, were, could) และฝั่งผลใช้ would/could + V1 (ไม่ใช้ V2 ซ้ำหลัง would)',
      speakingTopic:
        'ตอบคำถามจินตนาการ "What would your ideal week look like?" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'สมมุติ 3–4 เรื่อง (เวลาว่าง, ที่อยู่, งาน, คำแนะนำให้เพื่อนด้วย If I were you, I’d...)',
        'พูดรูปย่อ `I’d / we’d` และตัดเสียง `l` ใน `would/could` ให้เป็นธรรมชาติ',
      ],
    },
    {
      day: 109,
      title: 'แยก First vs Second Conditional & Polite Softening (It would be great if...)',
      objective:
        'เลือกใช้ First หรือ Second Conditional ตามมุมมองความน่าจะเป็นของคนพูด และใช้วลี Second Conditional ขอความช่วยเหลืออย่างสุภาพมืออาชีพ',
      explanation:
        'ความลับระดับ B1 ที่ทำให้คุณสื่อสารเก่งกว่าตำราคือ: สถานการณ์เดียวกัน **ขึ้นอยู่กับมุมมองของผู้พูด** ว่าจะใช้ First หรือ Second!\n- **First Conditional (มองว่าเป็นไปได้จริง/แผนจริง)**: `If I **finish** early, I’ll **join** you.` (งานวันนี้มีลุ้นเสร็จจริง)\n- **Second Conditional (มองว่ายาก/เป็นแค่เรื่องสมมุติ)**: `If I **finished** early, I’d **join** you.` (วันนี้ติดยาวมาก คงไม่ทันหรอก แค่ฝันเอา!)\n\nนอกจากนี้ เจ้าของภาษายังใช้โครงสร้าง Second Conditional เพื่อ **"ลดความแข็ง/ขอความช่วยเหลืออย่างสุภาพ"** ในที่ทำงานและอีเมล เช่น:\n- **`It would be great if you could...`** (จะดีมากเลยถ้าคุณช่วย...)\n- **`Would you mind if I opened...?`** (คุณจะว่าอะไรมั้ยถ้าฉันขอ...)\nฟังดูสุภาพ อ่อนโยน และให้เกียรติคู่สนทนามากกว่าคำสั่งตรงๆ หลายเท่า!',
      sound: [
        'Warm Polite Tone in Softening Requests',
        'negotiate /nɪˈɡəʊ.ʃi.eɪt/ · compromise /ˈkɒm.prə.maɪz/ · grateful /ˈɡreɪt.fəl/ · hesitate /ˈhez.ɪ.teɪt/',
        'เวลาพูดวลีขออย่างสุภาพ `It would be great if you could...` ให้อ่านติดกันเบาๆ ช่วงต้นแล้วกดน้ำหนักนุ่มนวลที่ `great` และคำกริยาหลัก: `"It’d be GREAT if you could send it early."`',
        'ฝึกพูดประโยคขออย่างสุภาพ 4 ประโยคด้วยโทนเสียงอบอุ่น: It would help if you could..., Would you mind if I borrowed..., It would be lovely if we met...',
      ],
      l1: [
        'ใช้คำสั่งตรงๆ หรือใช้ If you can + will ตลอดเวลาขอเลื่อนนัด/ขอแก้ไฟล์จากหัวหน้าหรือลูกค้า ทำให้ฟังดูแข็งเกินไปในบริบททางการ',
        'ไม่รู้ว่า Past Simple หลัง `if I borrowed` หรือ `if you could` ไม่ได้แปลว่าอดีต แต่เป็นวิธีแสดง "ความสุภาพมีระยะห่าง"',
        'ใช้สูตรสุภาพติดตัว 2 ประโยค: 1) ขอให้เขาช่วย: "It would be really helpful if you could..." 2) ขออนุญาตเอง: "Would you mind if I used/left...?"',
      ],
      vocab: [
        ['negotiate', 'เจรจาต่อรอง', '/nɪˈɡəʊ.ʃi.eɪt/', 'negotiate a fair timeline', 'เจรจากรอบเวลาที่เป็นธรรม'],
        ['compromise', 'ประนีประนอม / หาทางกลาง', '/ˈkɒm.prə.maɪz/', 'reach a polite compromise', 'หาข้อตกลงร่วมกันอย่างสุภาพ'],
        ['grateful', 'ซาบซึ้งใจ / ขอบคุณ', '/ˈɡreɪt.fəl/', 'truly grateful for your help', 'ซาบซึ้งใจในความช่วยเหลือของคุณ'],
        ['hesitate', 'ลังเลใจ', '/ˈhez.ɪ.teɪt/', 'please do not hesitate to ask', 'อย่าลังเลที่จะถามได้เลย'],
        ['reasonable', 'สมเหตุสมผล', '/ˈriː.zən.ə.bəl/', 'a reasonable request', 'คำขอที่สมเหตุสมผล'],
        ['adjust', 'ปรับเปลี่ยน', '/əˈdʒʌst/', 'adjust the schedule', 'ปรับตารางเวลา'],
        ['polite', 'สุภาพ', '/pəˈlaɪt/', 'polite softening phrase', 'วลีสุภาพช่วยลดโทนแข็ง'],
      ],
      examples: [
        ['If I finish these invoices by four, I will call you right back.', 'ถ้าฉันทำใบแจ้งหนี้พวกนี้เสร็จตอนสี่โมง ฉันจะโทรกลับทันที (มีลุ้นทำได้จริง)'],
        ['It would be great if you could share the updated slides before noon.', 'จะขอบคุณมากเลยค่ะหากคุณช่วยแชร์สไลด์ฉบับอัปเดตก่อนเที่ยง'],
        ['Would you mind if I adjusted tomorrow’s check-in by thirty minutes?', 'คุณจะขัดข้องไหมคะถ้าฉันขอขยับเวลาประชุมเช็กอินพรุ่งนี้ออกไปสามสิบนาที?'],
        ['If we compromised on a Wednesday deadline, nobody would feel rushed.', 'หากเรายืดหยุ่นเป็นวันพุธแทน คงไม่มีใครต้องเร่งรีบจนเกินไป'],
      ],
      reading:
        'Knowing when to choose First or Second Conditional immediately sharpens your tone at work. Yesterday, Ken needed to ask his client, Ms. Lin, for two extra days to polish a design draft. If he had written, "I need more time; please reply today," his message might have sounded abrupt. Instead, he used polite softening: "It would be really helpful if we could adjust the final delivery to Thursday afternoon. I would be truly grateful for the extra time to double-check every graphic. However, if you need the draft sooner for your internal review, I will happily send an early version tonight." Notice how Ken mixed both conditionals smoothly—Second Conditional for a polite request, and First Conditional for a realistic backup promise.',
      listenQ: 'What did Ken promise to do if Ms. Lin needed the draft sooner for her internal review?',
      listenA: 'He promised to happily send an early version that night.',
      dictation: 'It would be great if you could confirm before noon.',
      listenNote:
        'จับจังหวะเสียงอ่านต่อเนื่อง `It would be great if you could` โดยลดรูป `would` และ `could` อย่างนุ่มนวล',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคขอความช่วยเหลืออย่างสุภาพที่ผสมกาลผิด: "It will be really helpful if you could sent me the report early, and would you mind if I borrow this chair?"',
          answer:
            'It would be really helpful if you could send me the report early, and would you mind if I borrowed this chair?',
          explanation:
            '1) ขออย่างสุภาพใช้ It would be... + if you could send (หลัง could ใช้ V1) 2) Would you mind if I + V2 (borrowed)',
        },
        {
          kind: 'choice',
          prompt: 'สถานการณ์: หัวหน้างานยุ่งมาก คุณอยากขอเลื่อนกำหนดส่งไฟล์ไปอีก 1 วันอย่างนุ่มนวลและเป็นมืออาชีพ ข้อใดเหมาะที่สุด?',
          answer: 'Would it be possible to adjust the deadline? It would help a lot if I could submit it tomorrow morning.',
          choices: [
            'Give me one more day because if I have more time I will send it tomorrow.',
            'Would it be possible to adjust the deadline? It would help a lot if I could submit it tomorrow morning.',
            'It would helped a lot if you can let me submitting it tomorrow morning.',
            'If I would finish tomorrow morning, it will be great for you.',
          ],
          explanation:
            'ใช้ It would help a lot if I could + V1 สื่อความสุภาพแบบมืออาชีพได้ชัดเจนที่สุด',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำกริยาที่เหมาะสมหลัง if I: Would you mind if I _____ a quick question before we wrap up?',
          answer: 'asked',
          explanation: 'Would you mind if I + Past Simple (asked) เป็นโครงสร้างขออนุญาตอย่างสุภาพ',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "จะขอบคุณมากเลยค่ะถ้าคุณช่วยส่งไฟล์ที่แก้ไขแล้วภายในวันศุกร์"',
          answer: 'I would be very grateful if you could send the revised file by Friday.',
          explanation: 'ใช้ I would be grateful if you could + V1 เพื่อขออย่างสุภาพและอบอุ่น',
        },
      ],
      writing:
        'เขียนอีเมลหรือข้อความแชทสุภาพถึงเพื่อนร่วมงาน/อาจารย์/ลูกค้า 4–5 ประโยค เพื่อขอปรับตารางหรือขอข้อมูลเพิ่ม พร้อมเสนอทางเลือกจริงหากอีกฝ่ายไม่สะดวก (ใช้ทั้ง `It would be great/helpful if...` และ First Conditional)',
      writingSample:
        'Hi Sarah, thank you for sharing the draft schedule earlier. It would be really helpful if we could shift Thursday’s call from two o’clock to three-thirty so our guest speaker can join smoothly. Would you mind if I updated the calendar link tonight? Of course, if you need to keep the original slot because of another commitment, I will happily adjust my afternoon instead.',
      writingNote:
        'เช็กคำกริยาหลัง could และ would ว่าใช้รูป V1 เสมอ และเช็กความสุภาพของโทนข้อความ',
      speakingTopic:
        'สวมบทบาทขอเลื่อนนัดหรือขอความช่วยเหลืออย่างนุ่มนวลด้วย Polite Softening (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดให้ครบ 3 ขั้น: ขอบคุณ → ขออย่างนุ่มนวล (`It would be great if you could...` / `Would you mind if I...?`) → เสนอแผนสำรองจริง (`If you prefer..., I’ll...`)',
        'ฝึกโทนเสียงให้อบอุ่น ไม่ห้วนกระชากตอนขอร้อง',
      ],
    },
    {
      day: 110,
      title: 'Practical Scenarios: Troubleshooting, Negotiation & "What If" Discussions',
      objective:
        'แก้ปัญหาเฉพาะหน้า เจรจาหาทางออก และถกประเด็น "What if..." ด้วยการสลับ Zero, First และ Second Conditional อย่างคล่องตัว',
      explanation:
        'เวลาคุยแก้ปัญหาจริงหรือวางแผนงาน เราไม่ได้ท่องสูตรทีละแบบ แต่สลับทั้ง 3 Conditionals ในบทสนทนาเดียวตามธรรมชาติ:\n1. **Zero (เช็กอาการ/ระบบปกติ)**: `If you press reset twice, the screen goes dark.`\n2. **First (แผนรับมือจริงตอนนี้)**: `If the courier doesn’t arrive by three, we’ll pick up spare parts nearby.`\n3. **Second (คิดแผนทางเลือก / "What if" เชิงสมมุติ)**: `What would happen if we moved the launch by two days?` — เตรียมรับมือไว้ล่วงหน้า!\n\nจุดสำคัญ: **อย่าผสมหัว-หางข้ามชนิดผิด!** (เช่น ❌ *If we leave late, we would miss the ferry.* → ต้องคู่กัน: `leave → will miss` หรือ `left → would miss`)',
      sound: [
        'Quick Stress on Troubleshooting Questions',
        'troubleshoot /ˈtrʌb.əl.ʃuːt/ · alternative /ɒlˈtɜː.nə.tɪv/ · reschedule /ˌriːˈʃed.juːl/ · handle /ˈhæn.dəl/',
        'เวลาถามระดมสมอง `"What if we...?"` หรือ `"What would happen if...?"` ให้ยกเสียงขึ้นเบาๆ ท้ายคำถามเชิงเปิดไอเดียเพื่อชวนคู่สนทนาออกความเห็น',
        'ฝึกพูดคู่ถาม-ตอบแก้ปัญหา 3 คู่ให้ไหลลื่น: What if the Wi-Fi drops? / What would happen if we delayed? / How will we handle it if it rains?',
      ],
      l1: [
        'จับคู่ผิดฝั่ง เช่น เอา Present Simple ไปคู่กับ would ("If we save more, we would travel") หรือเอา Past Simple ไปคู่กับ will ("If he called, I will answer")',
        'เวลาคิดเร็วตอนถกปัญหา สมองมักดึง will กับ would มาสลับที่กันตามอารมณ์',
        'จับคู่แบบ 1-1: ช่อง 1 คู่ will/can (จริง) | ช่อง 2 คู่ would/could (สมมุติ)! ท่องเป็นคู่สี: [V1 ↔ will] และ [V2 ↔ would]',
      ],
      vocab: [
        ['troubleshoot', 'ตรวจหาและแก้ไขปัญหา', '/ˈtrʌb.əl.ʃuːt/', 'troubleshoot the delivery issue', 'แก้ปัญหาเรื่องการจัดส่ง'],
        ['alternative', 'ทางเลือกอื่น', '/ɒlˈtɜː.nə.tɪv/', 'discuss a backup alternative', 'คุยเรื่องทางเลือกสำรอง'],
        ['outcome', 'ผลลัพธ์สุดท้าย', '/ˈaʊt.kʌm/', 'reach the best outcome', 'ได้ผลลัพธ์ที่ดีที่สุด'],
        ['smoothly', 'อย่างราบรื่น', '/ˈsmuːð.li/', 'handle things smoothly', 'จัดการเรื่องต่างๆ ได้ราบรื่น'],
        ['budget', 'งบประมาณ', '/ˈbʌdʒ.ɪt/', 'stay within budget', 'คุมให้อยู่ในงบประมาณ'],
        ['reschedule', 'จัดตารางเวลาใหม่', '/ˌriːˈʃed.juːl/', 'reschedule the delivery', 'เลื่อนนัดจัดส่งใหม่'],
        ['handle', 'รับมือ / จัดการ', '/ˈhæn.dəl/', 'handle sudden changes', 'รับมือความเปลี่ยนแปลงกะทันหัน'],
      ],
      examples: [
        ['If the guest speaker’s flight gets delayed, we will move the Q&A session earlier.', 'ถ้าเที่ยวบินของวิทยากรล่าช้า พวกเราจะขยับช่วงถาม-ตอบมาไว้เร็วขึ้น'],
        ['What would happen if we split the workshop into two smaller groups?', 'จะเกิดอะไรขึ้นถ้าเราลองแบ่งเวิร์กชอปออกเป็นสองกลุ่มเล็กๆ?'],
        ['When a supplier misses a morning drop-off, the kitchen usually orders fresh greens locally.', 'เวลาซัพพลายเออร์ส่งของรอบเช้าพลาด ครัวมักจะสั่งผักสดจากตลาดใกล้เคียงแทน'],
        ['If we had a slightly bigger budget, we could hire an extra sound technician.', 'ถ้าเรามีงบประมาณมากกว่านี้อีกนิด เราคงจ้างช่างเทคนิคเสียงเพิ่มได้'],
      ],
      reading:
        'Running a small weekend pop-up booth requires quick troubleshooting whenever surprises appear. Last Thursday evening, Pim and Oat checked every scenario before opening day. First, they reviewed basic routine rules: if the card reader loses signal, restarting it usually restores the connection within seconds. Next, they listed real First Conditional backups: if heavy rain hits before noon, they’ll cover the front table with clear plastic sheets and send a location pin inside the group chat. Finally, they asked one "what if" question to explore a bold alternative: what would happen if they sold out of cold-brew bottles by two o’clock? Oat joked that if they owned a bigger van, they could pack double the stock—though staying realistic within budget kept them relaxed and ready to handle anything smoothly.',
      listenQ: 'What routine rule did Pim and Oat check in case the card reader loses signal?',
      listenA: 'Restarting it usually restores the connection within seconds.',
      dictation: 'What would happen if we rescheduled the workshop for Sunday?',
      listenNote:
        'สังเกตการเชื่อมคำถามสมมุติ `What would happen if` (`/wɒt wʊd ˈhæp.ən ɪf/`) และการผัน `rescheduled` เป็นช่อง 2 เพื่อส่งสัญญาณสมมุติ',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้การจับคู่ Conditional ข้ามชนิด 2 จุด: "If the train arrives late tomorrow, I would take a taxi—and if we had a bigger budget, we will upgrade the speakers."',
          answer:
            'If the train arrives late tomorrow, I will take a taxi—and if we had a bigger budget, we would upgrade the speakers.',
          explanation:
            'จับคู่ให้ตรงชุด: arrives (จริงพรุ่งนี้) คู่ will take และ had (สมมุติ) คู่ would upgrade',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ประโยคเงื่อนไขถกแผนแก้ปัญหาได้อย่างถูกต้องสมบูรณ์?',
          answer: 'Unless the supplier delivers by ten, we will buy fresh herbs nearby so dinner starts smoothly.',
          choices: [
            'Unless the supplier doesn’t deliver by ten, we will buy fresh herbs nearby.',
            'Unless the supplier delivers by ten, we will buy fresh herbs nearby so dinner starts smoothly.',
            'If the supplier delivered by ten tomorrow, we will buy fresh herbs nearby.',
            'If the supplier will deliver late, we would buy fresh herbs nearby.',
          ],
          explanation:
            'Unless + Present Simple (delivers) + will + V1 ถูกต้อง 100%',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ตรงคู่สมมุติ: How _____ your team handle sudden delays if two key members took leave at once?',
          answer: 'would',
          explanation: 'ฝั่ง if ใช้ took (V2) จึงต้องจับคู่กับ would ในประโยคคำถาม',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ถ้าเราลดงบตกแต่งลงนิดหน่อย เราจะสามารถซื้อเครื่องเสียงที่ดีกว่าได้"',
          answer: 'If we reduce the decoration budget slightly, we can buy a better sound system.',
          explanation: 'แผนต่อรองที่ทำได้จริงใช้ If + Present Simple + can + V1',
        },
      ],
      writing:
        'เขียนแผนรับมือปัญหาสำหรับอีเวนต์ ทริปเดินทาง หรือโปรเจกต์งาน 5–6 ประโยค โดยผสมให้ครบทั้ง Zero (กฎประจำ), First (แผนจริง/unless) และ Second (What if / เรื่องสมมุติ)',
      writingSample:
        'Before hosting our Saturday book swap, we prepared a simple troubleshooting checklist. Normally, when guests bring more than five books, we give them extra tokens automatically. For Saturday itself, if the parking lot fills up early, we’ll direct drivers to the school gate two blocks away. We won’t delay the opening talk unless the microphone fails. Also, if we had extra volunteers, we could set up a cozy tea corner—maybe next month!',
      writingNote:
        'ตรวจเช็กการจับคู่กาลทุกประโยค: [Present ↔ Present], [Present ↔ will/can], และ [Past ↔ would/could]',
      speakingTopic:
        'ระดมสมองแก้ปัญหาเฉพาะหน้าและถก "What if..." (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดเรียง 3 มุมมอง: 1) ปกติเกิดอะไร (Zero) 2) ถ้าเกิดเหตุพรุ่งนี้จะทำไง (First / unless) 3) ลองสมมุติทางเลือกใหม่ดูมั้ย (What if + V2, would...)',
        'ระวังอย่าสลับ `will` กับ `would` ข้ามคู่กลางคัน',
      ],
    },
    {
      day: 111,
      title: 'Phase 2 Mixed Synthesis Review: ร้อยโครงสร้าง A2 → Early B1 เข้าด้วยกัน',
      objective:
        'ซ้อมใหญ่ก่อนประเมินผล Day 112: ร้อยเรียง Narrative Tenses, Present Perfect, Future, Comparatives, Gerund/Phrasal Verbs, Relative Clauses และ Conditionals เข้าด้วยกันอย่างแม่นยำ',
      explanation:
        'พรุ่งนี้คือ **Phase 2 Milestone Assessment (Day 112)** แล้ว! วันนี้เรามา "จูนเครื่องรวมทุกสัปดาห์ของ Phase 2" ให้พร้อม 100% ลองตรวจเช็ก 6 อาวุธสำคัญที่คุณสะสมมาตั้งแต่ Day 57 จนถึงวันนี้:\n1. **เล่าเรื่องมีมิติ**: Past Simple vs Past Continuous (`while I was cooking, the bell rang`) + Present Perfect (`I’ve practiced for 16 weeks`)\n2. **วางแผนอนาคต**: `will / going to / Present Continuous / might`\n3. **เปรียบเทียบคมชัด**: `far better than`, `one of the + plural`, `adj + enough`, `so / such a`\n4. **กริยาธรรมชาติ**: `enjoy/suggest/look forward to + V-ing`, `remind someone to`, `turn it down`, `figure it out`\n5. **เชื่อมประโยคไม่ให้ขาดท่อน**: `who/which/where/whose`, ละคำเชื่อม (`the café we visited`), `, which`, `What matters is...`\n6. **เงื่อนไข 3 ระดับ**: Zero, First (`unless`), Second (`If I were you / It would be great if...`)',
      sound: [
        'Phase 2 Connected Speech & Fluency Audit',
        'synthesize /ˈsɪn.θə.saɪz/ · coherent /kəʊˈhɪə.rənt/ · transition /trænˈzɪʃ.ən/ · overcome /ˌəʊ.vəˈkʌm/',
        'ซ้อม 5 จุดเชื่อมเสียงสำคัญก่อนสอบ: `used to` (`/ˈjuːs.tə/`), `faster than` (`/ˈfɑːs.tə ðən/`), `look forward to seeing`, `the app I found`, `I’d be grateful if you could`',
        'อัดเสียงตัวเองอ่านบทอ่านวันนี้ 1 รอบแล้วฟังเทียบ: เช็กเสียงท้าย `-ed / -s`, ความลื่นของ Phrasal Verbs, และการพักหายใจตรงลูกน้ำของ Relative Clauses',
      ],
      l1: [
        'เวลาต้องพูดและเขียนยาวหลายโครงสร้าง มักเกิดอาการ "หลุดจุดพื้นฐานตอนกังวลจุดยาก" เช่น จำได้ว่าจะใช้ Second Conditional แต่ดันเผลอพูดว่า "everythings what I learned" หรือ "turn off it"',
        'สมองทำงานหนักขึ้นเมื่อต้องเชื่อมหลายทักษะพร้อมกัน',
        'ใช้ Checklist 3 วินาทีหลังจบแต่ละประโยค: เวลาตรงไหม (Past/Perfect/Future)? คำเชื่อมซ้ำไหม (ไม่มี it หลัง which/that)? คู่ Conditional ตรงชุดไหม?',
      ],
      vocab: [
        ['synthesize', 'สังเคราะห์ / ผสมผสานเข้าด้วยกัน', '/ˈsɪn.θə.saɪz/', 'synthesize everything learned', 'ผสานทุกสิ่งที่เรียนมา'],
        ['milestone', 'หมุดหมายสำคัญ', '/ˈmaɪl.stəʊn/', 'approach a key milestone', 'ก้าวเข้าใกล้หมุดหมายสำคัญ'],
        ['coherent', 'เชื่อมโยงสอดคล้องกัน', '/kəʊˈhɪə.rənt/', 'tell a coherent story', 'เล่าเรื่องได้ต่อเนื่องเชื่อมโยง'],
        ['transition', 'การเปลี่ยนผ่าน', '/trænˈzɪʃ.ən/', 'a smooth transition', 'การเปลี่ยนผ่านที่ราบรื่น'],
        ['reflection', 'การสะท้อนทบทวน', '/rɪˈflek.ʃən/', 'honest self-reflection', 'การทบทวนตนเองอย่างตรงไปตรงมา'],
        ['overcome', 'ก้าวข้าม / เอาชนะ', '/ˌəʊ.vəˈkʌm/', 'overcome old habits', 'ก้าวข้ามนิสัยเดิมๆ'],
        ['independent', 'พึ่งพาตัวเองได้', '/ˌɪn.dɪˈpen.dənt/', 'independent communicator', 'ผู้สื่อสารที่พึ่งพาตัวเองได้'],
      ],
      examples: [
        ['What surprises me most is how far my listening has improved since Day 57.', 'สิ่งที่ทำให้ฉันประหลาดใจที่สุดคือการฟังของฉันพัฒนาขึ้นมากขนาดไหนตั้งแต่วันที่ 57'],
        ['The small notebooks I kept along the way helped me overcome old mistakes.', 'สมุดโน้ตเล่มเล็กๆ ที่ฉันจดไว้ระหว่างทางช่วยให้ฉันก้าวข้ามข้อผิดพลาดเดิมๆ'],
        ['If you practice sixty minutes daily, difficult structures turn into automatic habits.', 'ถ้าคุณฝึกวันละหกสิบนาที โครงสร้างยากๆ จะกลายเป็นนิสัยอัตโนมัติ'],
        ['It would be wonderful if we could celebrate this transition together next week.', 'จะวิเศษมากเลยถ้าเราสามารถฉลองการเปลี่ยนผ่านนี้ด้วยกันได้ในสัปดาห์หน้า'],
      ],
      reading:
        'Looking back over the past eight weeks, the progress from A1 to early B1 feels remarkable. When Phase 2 started, many learners were still translating Thai sentences word by word, which often slowed down real conversations. Since then, you have practiced telling layered stories about what you were doing when unexpected moments happened, and you have built stronger vocabulary through phrasal verbs like figure out, put up with, and catch up. Moreover, learning to drop unnecessary connectors in phrases like "the podcast I heard" made your speech far smoother than before. Even tricky areas—such as choosing between stop smoking and stop to buy coffee, or softening requests with "It would help if you could"—now feel manageable. If you stay curious and keep practicing aloud, the step toward solid B1 next week will feel completely natural.',
      listenQ: 'What made learners’ speech far smoother than before according to the passage?',
      listenA: 'Learning to drop unnecessary connectors in phrases like "the podcast I heard."',
      dictation: 'If you keep practicing aloud, your confidence will grow naturally.',
      listenNote:
        'จับจังหวะเสียงอ่าน `keep practicing aloud` (gerund หลัง `keep`) และท่อนผล `your confidence will grow naturally`',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคผสมจุดพลาดจากหลายสัปดาห์ (4 จุด!): "Last year, I stopped to drink soda, suggested to walk my friend home, and bought a jacket which I still wear it—if I would have more free time, I join a running club."',
          answer:
            'Last year, I stopped drinking soda, suggested walking my friend home, and bought a jacket which I still wear—if I had more free time, I would join a running club.',
          explanation:
            '1) เลิกดื่ม = stopped drinking 2) suggest + V-ing (walking) 3) ตัด it ท้าย relative clause 4) Second Conditional ใช้ If I had..., I would join',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ไวยากรณ์ระดับ Early B1 ได้ถูกต้องและเป็นธรรมชาติครบทั้งประโยค?',
          answer: 'My cousin, who has lived in Chiang Mai for three years, suggested trying a café that isn’t nearly as crowded as downtown spots.',
          choices: [
            'My cousin, that has lived in Chiang Mai since three years, suggested to try a café which it isn’t crowded as downtown spots.',
            'My cousin, who has lived in Chiang Mai for three years, suggested trying a café that isn’t nearly as crowded as downtown spots.',
            'My cousin, who lives in Chiang Mai for three years, reminded me trying a café not enough crowded.',
            'My cousin who has lived in Chiang Mai, suggested trying a café what isn’t nearly as crowded than downtown.',
          ],
          explanation:
            'who หลังลูกน้ำ, has lived... for three years, suggested trying (V-ing), และ not nearly as crowded as ถูกต้องทุกจุด',
        },
        {
          kind: 'gap',
          prompt:
            'เติมก้อนคำให้ถูกต้อง: Look! Everything _____ we practiced over these two months is finally coming together.',
          answer: 'that',
          explanation: 'หลัง Everything ใช้ that (หรือละทิ้งได้ แต่ห้ามใช้ what เด็ดขาด!)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "จะดีมากเลยถ้าคุณช่วยทบทวนโน้ตเก่าก่อนสอบประเมินผลใหญ่พรุ่งนี้"',
          answer:
            'It would be great if you could review your old notes before tomorrow’s big assessment.',
          explanation: 'ใช้ Polite Softening: It would be great if you could + V1',
        },
      ],
      writing:
        'เขียนสะท้อนการพัฒนาตลอด Phase 2 (5–6 ประโยค) เพื่อเตรียมความพร้อมก่อนสอบวันพรุ่งนี้ โดยผสมให้ได้อย่างน้อย 4 ทักษะจากสัปดาห์ที่ 9–16',
      writingSample:
        'Over the past eight weeks, I have noticed a big difference in how I handle English conversations. Earlier, I avoided speaking with foreigners because I felt far too nervous about making mistakes. However, collecting useful chunks like "figure it out" and "look forward to seeing you" gave me tools I can actually use. Yesterday, while I was waiting for the skytrain, I explained directions to a lost tourist smoothly, which made me feel so proud! If I keep reviewing daily, I know I will enter Phase 3 with real confidence.',
      writingNote:
        'เช็กการเชื่อมประโยคระหว่างเหตุการณ์ในอดีต ประสบการณ์จนถึงตอนนี้ ความประทับใจ และแผนในอนาคตว่าใช้ Tense และตัวเชื่อมแม่นยำ',
      speakingTopic:
        'ซ้อมใหญ่ก่อน Milestone Day 112: "My 8-Week Journey & Next Goals" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดครบ 4 ช่วง: อดีตตอนจบ Phase 1 → สิ่งที่ได้ลองทำใน Phase 2 (Present Perfect / Comparisons) → เหตุการณ์ที่ภูมิใจ (Past Simple/Cont + Relative Clause) → เงื่อนไข/แผนต่อยอด (First/Second Conditional)',
        'ตั้งเป้าพูดรอบ 2 นาทีให้ต่อเนื่องเป็นเรื่องเดียวกันโดยไม่หลุดไวยากรณ์พื้นฐาน',
      ],
    },
    {
      day: 112,
      type: 'assessment',
      title: 'Phase 2 Milestone Assessment: จบระดับ A2 → Early B1',
      objective:
        'ประเมินผลสัมฤทธิ์จบ Phase 2 (Days 57–112): อ่านบทความยาว 250 คำ, Dictogloss, Error Analysis, เขียนอีเมล/เรื่องเล่า 120 คำ และพูด 4/3/2 ระดับ Early B1',
      explanation:
        'ยินดีด้วยครับ! วันนี้คือ **วันที่ 112 — วันประเมินผลจบ Phase 2 (A2 → Early B1)** อย่างเต็มตัว เป้าหมายของ Phase 2 คือการเปลี่ยนจากการพูดประโยคเดี่ยวสั้นๆ ในระดับ A1 ให้กลายเป็น **"ผู้สื่อสารที่เล่าเรื่องซ้อนเหตุการณ์ เชื่อมเหตุผล เปรียบเทียบตัวเลือกอย่างมีมิติ ใช้กริยาวลีธรรมชาติ ขยายความด้วย Relative Clauses และตอบโต้ด้วยประโยคเงื่อนไข 0/1/2 อย่างสุภาพและคล่องตัว"**\n\nข้อสอบประเมินผลวันนี้ประกอบด้วย 5 ด่านครบทั้ง 4 ทักษะ: 1) อ่านและฟังบทความยาว ~250 คำ 2) Dictogloss ถอดความจากเสียง 3) Error Analysis จับผิดโครงสร้างสำคัญตลอด Phase 2 4) เขียนอีเมล/เรื่องเล่าความยาว ~120 คำ และ 5) พูด 4/3/2 นาทีแบบ Early B1 ก่อนก้าวสู่ Phase 3 (Solid B1 → Early B2)!',
      sound: [
        'Phase 2 Early B1 Complete Speech Audit',
        'achievement /əˈtʃiːv.mənt/ · perspective /pəˈspek.tɪv/ · flexible /ˈflek.sə.bəl/ · gratitude /ˈɡræt.ɪ.tʃuːd/',
        'ทำ Shadowing บทอ่านประเมินผลวันนี้ 3 รอบโดยจับจังหวะทั้งหมดของระดับ Early B1: weak forms (`than`, `as`, `that`, `to`), particle stress (`figure out`, `turn down`, `put up with`), และ pitch drop ใน Non-defining clauses (`, which...`)',
        'อัดเสียงพูดสรุป 4/3/2 แล้วเปิดฟังเช็ก 4 ข้อ: 1) ไม่ทิ้งสรรพนามซ้ำท้าย Relative Clause 2) ใช้ V-ing / to V1 ถูกคู่ 3) สรรพนามอยู่กลาง Phrasal Verb 4) ไม่สลับ `will` กับ `would` ใน Conditionals',
      ],
      l1: [
        'เมื่อต้องผลิตภาษาที่ยาวขึ้นระดับ 120 คำหรือพูดต่อเนื่อง 2–4 นาที ความเคยชินแบบไทย (ทิ้ง it ซ้ำ, ลืม -s หลัง one of the, ใส่ what หลัง everything, ใส่ will หลัง if) มักแอบกลับมาตอนเผลอ',
        'ความซับซ้อนของประโยคยาวดึงสมาธิไปจากการเช็กไวยากรณ์จุดเล็ก',
        'ผู้เรียนระดับ Early B1 ที่แข็งแรงไม่ได้แปลว่าไม่เคยพลาดเลย แต่คือคนที่มี "เรดาร์ตรวจหูตัวเอง" รู้ตัวทันและแก้ประโยคต่อได้ทันทีอย่างเป็นธรรมชาติ!',
      ],
      vocab: [
        ['achievement', 'ความสำเร็จที่ภูมิใจ', '/əˈtʃiːv.mənt/', 'a meaningful achievement', 'ความสำเร็จที่มีความหมาย'],
        ['perspective', 'มุมมอง / ทัศนคติ', '/pəˈspek.tɪv/', 'gain a wider perspective', 'เปิดมุมมองให้กว้างขึ้น'],
        ['community', 'ชุมชน / สังคมรอบตัว', '/kəˈmjuː.nə.ti/', 'support the local community', 'สนับสนุนชุมชนท้องถิ่น'],
        ['renovate', 'ปรับปรุงซ่อมแซมสถานที่', '/ˈren.ə.veɪt/', 'renovate an old corner shop', 'รีโนเวตร้านหัวมุมเก่า'],
        ['collaborate', 'ร่วมมือทำงานด้วยกัน', '/kəˈlæb.ə.reɪt/', 'collaborate smoothly', 'ร่วมมือกันอย่างราบรื่น'],
        ['gratitude', 'ความรู้สึกขอบคุณ/กตัญญู', '/ˈɡræt.ɪ.tʃuːd/', 'express sincere gratitude', 'แสดงความขอบคุณอย่างจริงใจ'],
        ['momentum', 'แรงส่ง / ความต่อเนื่อง', '/məˈmen.təm/', 'keep the momentum going', 'รักษาแรงส่งต่อเนื่องไว้'],
        ['horizon', 'ขอบฟ้า / โอกาสข้างหน้า', '/həˈraɪ.zən/', 'open new horizons', 'เปิดขอบเขตโอกาสใหม่ๆ'],
      ],
      examples: [
        ['Reaching Day 112 is an achievement that shows real daily dedication.', 'การมาถึงวันที่ 112 เป็นความสำเร็จที่สะท้อนความมุ่งมั่นทุกวันอย่างแท้จริง'],
        ['Learning to compare options calmly gave me a much wider perspective at work.', 'การเรียนรู้วิธีเปรียบเทียบทางเลือกอย่างใจเย็นทำให้ฉันมีมุมมองที่กว้างขึ้นในงาน'],
        ['If we keep this learning momentum going, Phase 3 will turn out smoothly.', 'ถ้าเรารักษาแรงส่งการเรียนรู้นี้ไว้ได้ Phase 3 ก็จะผ่านไปอย่างราบรื่น'],
        ['I want to express sincere gratitude to everyone who encouraged me along the journey.', 'ฉันอยากแสดงความขอบคุณอย่างจริงใจต่อทุกคนที่ให้กำลังใจตลอดเส้นทางนี้'],
      ],
      reading:
        'Eight months ago, Korn used to put off speaking English whenever foreign travelers stopped to ask for directions near his family’s corner bakery in Bangkok. Although he understood simple menus, he avoided long conversations because he worried about making careless mistakes. Everything changed after he started practicing sixty minutes every evening and building a small notebook of useful chunks. Soon, he stopped worrying about memorizing isolated words and began paying attention to how real speakers connect ideas. Last month, while Korn was renovating the cozy shop with his sister, a travel writer whose blog covers hidden neighborhood cafés dropped by for iced tea. Normally, Korn would have felt too shy to chat, yet he managed to explain the story behind their family recipes clearly. He recommended one of the best noodle alleys nearby, shared why their street felt far calmer than downtown malls, and politely offered to look into local walking maps for her next visit. That afternoon turned out to be such a memorable milestone that Korn realized his perspective had truly shifted. Next Tuesday, he is meeting a local neighborhood group to plan simple bilingual signs for visitors. Look at how far consistent habits can carry someone: unless you give up during early challenges, small daily practice gradually builds genuine fluency. If Korn had stayed silent forever, he would never have discovered how rewarding it feels to collaborate across cultures and open new horizons.',
      listenQ: 'What did Korn offer to do for the travel writer’s next visit to the neighborhood?',
      listenA: 'He politely offered to look into local walking maps for her next visit.',
      dictation: 'Unless you give up early, daily practice builds genuine fluency.',
      listenNote:
        'บทอ่านประเมินผลความยาว ~250 คำนี้รวมทักษะทั้ง Phase 2: `used to`, `put off`, `stopped to ask` vs `stopped worrying`, `avoided + V-ing`, `while he was renovating`, `whose blog`, `one of the best + plural`, `far calmer than`, `such a memorable milestone`, `turn out`, `is meeting` (แผนอนาคต), `unless`, และ `If... would`',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'ด่านจับผิดใหญ่ Phase 2 (แก้จุดผิด 4 จุด!): "Last Friday, while I walked to the café what my friend recommended it, I remembered to bring my umbrella, and if I would live closer, I go there every day."',
          answer:
            'Last Friday, while I was walking to the café that my friend recommended, I remembered to bring my umbrella, and if I lived closer, I would go there every day.',
          explanation:
            '1) เหตุการณ์กำลังดำเนินแทรกในอดีตใช้ Past Continuous (while I was walking) 2) หลังคำนาม the café ใช้ that/which (ห้าม what) และตัด it ซ้ำทิ้ง 3) Second Conditional ใช้ If I lived..., I would go...',
        },
        {
          kind: 'dictogloss',
          prompt:
            'ฟังเสียงจากบทอ่านประเมินผลแล้วเติมกลุ่มคำที่หายไปให้ครบ: "Normally, Korn would have felt _____ to chat, yet he _____ the story behind their family recipes clearly. He recommended _____ nearby..."',
          answer: 'too shy / managed to explain / one of the best noodle alleys',
          choices: [
            'enough shy / managed explaining / one of the best noodle alley',
            'too shy / managed to explain / one of the best noodle alleys',
            'such shy / avoided to explain / one of most best noodle alleys',
            'too shy / refused explaining / one of the better noodle alleys',
          ],
          explanation:
            'จากบทอ่าน: too shy to chat (too + adj), managed to explain (manage + to V1), และ one of the best noodle alleys (นามพหูพจน์เติม -s)',
          audio_text:
            'Normally, Korn would have felt too shy to chat, yet he managed to explain the story behind their family recipes clearly. He recommended one of the best noodle alleys nearby.',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Gerund, Phrasal Verb (กฎสรรพนาม), และ Non-defining Relative Clause ถูกต้องทั้งหมด?',
          answer: 'My supervisor, who has worked here for eight years, suggested backing up every file before turning off the main server.',
          choices: [
            'My supervisor, that has worked here since eight years, suggested to back up every file before turning off it.',
            'My supervisor, who has worked here for eight years, suggested backing up every file before turning off the main server.',
            'My supervisor, who worked here for eight years, reminded me backing up every file before turn off the main server.',
            'My supervisor whose worked here for eight years suggested backing up every file, what turned out helpful.',
          ],
          explanation:
            'who หลังลูกน้ำ, has worked... for eight years, suggested backing up, และ before turning off ถูกต้องตามกฎทุกข้อ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมบอกความเป็นเจ้าของและเงื่อนไขให้ตรงความหมาย: This is the friend _____ encouragement helped me keep going, and I look forward to _____ with her next month.',
          answer: 'whose / collaborating',
          explanation:
            'friend + encouragement ของเขา ใช้ whose และหลัง look forward to ต้องใช้ V-ing (collaborating)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ (Polite Request & First Conditional): "จะขอบคุณมากเลยค่ะถ้าคุณช่วยส่งแผนที่กลับมาภายในวันศุกร์ แต่หากคุณยังยุ่งอยู่ ฉันสามารถเข้าไปรับเองสัปดาห์หน้าได้"',
          answer:
            'I would be very grateful if you could send the map back by Friday, but if you are still busy, I can pick it up myself next week.',
          explanation:
            'รวม Polite Softening (would be grateful if you could + send... back) และ First Conditional (if you are still busy, I can pick it up)',
        },
      ],
      writing:
        'Phase 2 Milestone Writing (~120 คำ): เขียนอีเมลถึงเพื่อนหรือพี่เลี้ยง (หรือเขียนบันทึกเรื่องเล่าของตัวคุณเอง) เพื่อเล่าสิ่งที่คุณได้ทำสำเร็จตลอดช่วง 2 เดือนที่ผ่านมา (Phase 2), เปรียบเทียบตัวคุณตอนนี้กับเมื่อก่อน, เล่าเหตุการณ์ประทับใจที่มีรายละเอียดสถานที่/ผู้คน, และวางแผนหรือตั้งเงื่อนไขสำหรับก้าวต่อไปใน Phase 3',
      writingSample:
        'Hi Alex, I wanted to share a quick update as I wrap up Phase 2 today! Reaching Day 112 feels like such a meaningful achievement, especially when I compare where I started four months ago. Earlier, I used to put off English phone calls because I worried too much about small errors. Now, while listening to morning podcasts, I can follow main stories smoothly without translating every word. Yesterday, I chatted with a visitor whose family runs a tea farm in Chiang Rai, and I recommended one of the coziest cafés near my station. Even better, I managed to ask polite questions without feeling stuck. If I keep this momentum going next month, I know my speaking confidence will grow even further. It would be wonderful if we could catch up over coffee next weekend!',
      writingNote:
        'ตรวจเช็กความยาว (~120 คำ) และเช็ก 5 ด่านก่อนส่ง: 1) กาลเล่าเรื่อง (used to / was-were -ing / Present Perfect) 2) เปรียบเทียบ (such a / one of the + plural) 3) กริยา/Phrasal Verbs (put off, managed to, catch up) 4) Relative Clause (whose, ไม่มีสรรพนามซ้ำ) 5) Conditionals (If I keep... will / It would be... if we could)',
      speakingTopic:
        'Phase 2 Graduation Speech: "Crossing the Bridge to Early B1" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าเชื่อม 4 ส่วนในเวลา 4 นาที → 3 นาที → 2 นาที: 1) จุดเริ่มต้นและนิสัยเก่าที่ก้าวข้ามมา (used to / stopped + V-ing) 2) เรื่องเล่าจริงที่น่าภูมิใจ (while I was... / who / whose / , which) 3) การเปรียบเทียบตัวเองวันนี้กับอดีต (far calmer than / confident enough) 4) เป้าหมายสู่ Phase 3 (If I keep... / If I had more time, I would...)',
        'ควบคุมจังหวะเสียงให้คงที่ เชื่อมเสียงลดรูป `than / as / that / to / ’d / ’ll` และไม่หยุดค้างตรงรอยต่อประโยคยาว',
      ],
    },
  ]
);
