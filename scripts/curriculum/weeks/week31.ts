import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 4: สื่อสารคล่องตัว เลือกโทนภาษา และฟังความเร็วเจ้าของภาษา';

export const WEEK31: ModuleSeed = createModule(
  {
    week: 31,
    phase: 4,
    phase_title: PHASE_TITLE,
    cefr_level: 'B2',
    title: 'Critical Reading, Opinion & Media Literacy',
    summary:
      'อ่านบทความวิพากษ์ ข่าว และบทความออนไลน์ความยาวสูง จับ Main Argument, Tone, Bias, Implied Meaning และ Paraphrase ด้วยคำของตัวเองโดยไม่ลอกประโยคเดิม',
    focus: 'Main Argument, Author Tone & Bias, Inference, Paraphrasing Skills',
  },
  [
    {
      day: 211,
      title: 'Main Thesis vs Supporting Evidence — แยกแกนหลักออกจากตัวอย่างและเรื่องเปิด',
      objective:
        'ระบุ Main Thesis (ข้อเสนอหลักของผู้เขียน) แยกออกจาก Anecdotes (เรื่องเล่าเปิด), Statistics และ Counter-examples ในบทความเชิงวิเคราะห์ความยาวสูง',
      explanation:
        'เวลาอ่านบทความภาษาอังกฤษยาวๆ ผู้เรียนระดับ B1 มักตกหลุมเดียวกันคือ **อ่านย่อหน้าแรกที่มีเรื่องเล่าเปิด (Hook/Anecdote) แล้วเหมารวมว่านั่นคือใจความสำคัญของทั้งบทความ!** ในงานเขียนเชิงวิเคราะห์ (Essays, Editorial Columns, Feature Articles) ผู้เขียนมักใช้โครงสร้าง 3 ชั้น: **1) Hook / Context** เปิดฉากด้วยเรื่องคนหนึ่งคนหรือเทรนด์ที่คนสนใจ **2) Main Thesis (Central Claim)** ประโยคที่บอกจุดยืนหลักว่าผู้เขียนกำลังพิสูจน์อะไร มักมีสัญญาณบอกเหตุ เช่น *Yet the evidence suggests...*, *Ultimately, success depends on...*, *What separates A from B is...* **3) Supporting Evidence** ข้อมูล ตัวเลข ผลสำรวจ หรือกรณีศึกษาที่ถูกยกมาค้ำยัน Thesis นั้น เคล็ดลับอ่านเร็วระดับ B2: ถามตัวเองทุกครั้งหลังจบแต่ละย่อหน้าว่า **"ย่อหน้านี้กำลังเสนอข้อโต้แย้งหลัก (Claim) หรือแค่ยกตัวอย่างมาสนับสนุนข้อโต้แย้ง (Evidence)?"**',
      sound: [
        'Analytical Presentation Stress: Claim vs Evidence',
        'thesis /ˈθiː.sɪs/ · anecdote /ˈæn.ɪk.dəʊt/ · workflow /ˈwɜːk.fləʊ/',
        'เวลาสรุปบทความให้คนอื่นฟัง ฝึกออกเสียงสัญญาณแยกแกนหลักให้ชัด: "The CORE claim | is NOT that... | It’s THAT..." และเน้นคำเชื่อมเหตุผล: "To BACK that up, | the author cites..."',
        'ฝึกอ่านออกเสียงคำศัพท์วิเคราะห์ 4 คำให้ถูกพยางค์เน้น: THE-sis /ˈθiː.sɪs/ · AN-ec-dote /ˈæn.ɪk.dəʊt/ · EV-i-dence /ˈev.ɪ.dəns/ · WORK-flow /ˈwɜːk.fləʊ/',
      ],
      l1: [
        'หยิบตัวเลขหรือชื่อสถานที่ในตัวอย่างมาตอบว่าเป็น Main Idea เช่น บทความยกตัวอย่างบริษัทในสิงคโปร์แค่ 1 ย่อหน้า แต่สรุปว่า "This article is mainly about a Singapore software firm."',
        'สายตามักเกาะติดคำศัพท์ที่เป็นรูปธรรม (ชื่อคน ชื่อเมือง ตัวเลข) มากกว่าคำนามธรรมที่บอกข้อสรุปหลัก (claim, shift, redesign)',
        'แยก 2 คำถามนี้ก่อนสรุป: 1) ผู้เขียนกำลังพิสูจน์หลักการใดในภาพรวม? (Thesis) 2) เรื่องของคน/บริษัท/ตัวเลขนั้นถูกยกมาเพื่อพิสูจน์ข้อใด? (Evidence)',
      ],
      vocab: [
        [
          'thesis',
          'ข้อเสนอหลัก / แกนความคิดหลัก',
          '/ˈθiː.sɪs/',
          'state the central thesis clearly',
          'ระบุข้อเสนอหลักอย่างชัดเจน',
        ],
        [
          'anecdote',
          'เรื่องเล่าสั้นประกอบการอธิบาย',
          '/ˈæn.ɪk.dəʊt/',
          'open with a relatable anecdote',
          'เปิดเรื่องด้วยเรื่องเล่าสั้นๆ ที่จับต้องได้',
        ],
        [
          'evidence',
          'หลักฐาน / ข้อมูลอ้างอิง',
          '/ˈev.ɪ.dəns/',
          'back a claim with evidence',
          'สนับสนุนข้อโต้แย้งด้วยหลักฐาน',
        ],
        [
          'workflow',
          'ขั้นตอนการทำงาน',
          '/ˈwɜːk.fləʊ/',
          'redesign outdated workflows',
          'ออกแบบขั้นตอนงานที่ล้าสมัยใหม่',
        ],
        [
          'burn through',
          'ใช้จนหมดเกลี้ยงอย่างรวดเร็ว',
          '/bɜːn θruː/',
          'burn through spare hours',
          'ผลาญเวลาว่างจนหมด',
        ],
        [
          'trivial',
          'เล็กน้อยไม่สลักสำคัญ',
          '/ˈtrɪv.i.əl/',
          'cut trivial status meetings',
          'ตัดการประชุมอัปเดตจุกจิกออก',
        ],
        [
          'sustainable',
          'ยั่งยืน / ทำต่อเนื่องระยะยาวได้',
          '/səˈsteɪ.nə.bəl/',
          'build a sustainable pace',
          'สร้างจังหวะการทำงานที่ยั่งยืน',
        ],
      ],
      examples: [
        [
          'The opening story about a tired designer is merely an anecdote; the central thesis appears in paragraph two.',
          'เรื่องเปิดเกี่ยวกับนักออกแบบที่เหนื่อยล้าเป็นเพียงเรื่องประกอบ ส่วนข้อเสนอหลักปรากฏอยู่ในย่อหน้าที่สอง',
        ],
        [
          'Four-day workweeks succeed only when teams redesign daily workflows.',
          'สัปดาห์ทำงานสี่วันจะสำเร็จได้ก็ต่อเมื่อทีมปรับขั้นตอนการทำงานประจำวันใหม่เท่านั้น',
        ],
        [
          'To back that claim up with concrete evidence, the report tracks six months of delivery times.',
          'เพื่อยืนยันข้อเสนอนั้นด้วยหลักฐานที่เป็นรูปธรรม รายงานจึงติดตามระยะเวลาส่งมอบงานตลอดหกเดือน',
        ],
        [
          'Trimming trivial status calls saved staff nearly four focused hours every Monday.',
          'การตัดการประชุมอัปเดตงานจุกจิกช่วยประหยัดเวลาที่มีสมาธิให้พนักงานเกือบสี่ชั่วโมงทุกวันจันทร์',
        ],
      ],
      reading:
        'When a mid-sized engineering studio in Kuala Lumpur announced a permanent four-day workweek, local headlines credited generous bosses and extra coffee perks. Yet compressing forty hours of messy habits into thirty-two hours rarely produces magic on its own. The real lesson from three years of workplace trials is simpler and far less glamorous: shorter workweeks succeed only when teams systematically redesign how daily communication flows. Consider what happened inside that studio during month one. Staff kept attending every routine check-in while rushing to finish tasks by Thursday evening—burning through energy faster than before. Productivity dropped until managers canceled trivial status meetings, grouped feedback into two daily windows, and protected uninterrupted morning blocks. Over the next six months, on-time project delivery actually rose by twelve percent while overtime claims fell sharply. Those numbers matter not because Fridays off automatically heal burnout, but because scarcity forces clearer priorities. Ultimately, a shorter week works only as a catalyst; what creates sustainable output is cutting noise from the workflow itself.',
      listenQ: 'According to the essay, what is the main condition required for a four-day workweek to succeed?',
      listenA: 'Teams must systematically redesign their workflows and cut noise from daily communication.',
      dictation: 'Shorter workweeks succeed only when teams redesign daily workflows.',
      listenNote:
        'ลองชี้ในบทอ่านว่า: ประโยคที่ 1 เป็น Hook, ประโยคที่ 3 ("The real lesson... is...") เป็น Main Thesis, ส่วนเรื่องของสตูดิโอและตัวเลข 12% เป็น Supporting Evidence',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดระบุ Main Thesis (แกนหลักที่ผู้เขียนต้องการพิสูจน์) ของบทความเรื่อง 4-day workweek ข้างต้นได้แม่นยำที่สุด?',
          answer:
            'A four-day workweek boosts sustainable output only when teams redesign workflows and eliminate noisy interruptions.',
          choices: [
            'A Kuala Lumpur engineering studio offers generous coffee perks to its tired staff.',
            'A four-day workweek boosts sustainable output only when teams redesign workflows and eliminate noisy interruptions.',
            'Every technology company in Southeast Asia raised productivity by twelve percent this year.',
            'Employees naturally burn through energy faster whenever they take Fridays off.',
          ],
          explanation:
            'ตัวเลือกอื่นล้วนเป็นรายละเอียดย่อย (Hook, สถิติเฉพาะกรณี, หรือตัวอย่างเดือนแรก) ส่วน Main Thesis คือข้อกำหนดเรื่องการออกแบบ workflow ใหม่',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยควิเคราะห์บทความที่สับสนไวยากรณ์ 2 จุด: "The author uses the studio story as an evidence to prove why cut trivial meetings matter."',
          answer:
            'The author uses the studio story as evidence to prove why cutting trivial meetings matters.',
          explanation:
            '1) evidence เป็นคำนามนับไม่ได้ ห้ามใส่ an ข้างหน้า 2) ประธานในอนุประโยคหลัง why คือ Gerund "cutting trivial meetings" (เอกพจน์) จึงใช้ matters',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำศัพท์ให้ตรงบริบท (1 คำ): Starting a serious essay with a brief personal story is an effective _____ before introducing hard data.',
          answer: 'anecdote',
          explanation:
            'anecdote = เรื่องเล่าสั้นๆ จากเหตุการณ์จริงที่ใช้เปิดประเด็นก่อนเข้าสู่ข้อมูลและข้อโต้แย้งหลัก',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ตัวเลขสถิติเพียงอย่างเดียวไม่ได้บอกข้อเสนอหลัก จนกว่าเราจะเห็นว่าผู้เขียนใช้มันพิสูจน์อะไร"',
          answer:
            'Statistics alone do not reveal the central thesis until we see what claim they support.',
          explanation:
            'ใช้ Statistics alone do not reveal... until we see what claim they support เพื่อแยกข้อมูลดิบออกจากข้อโต้แย้ง',
        },
      ],
      writing:
        'เขียนย่อหน้าเชิงวิเคราะห์ 5 ประโยคในหัวข้อที่คุณสนใจ (เช่น กฎทำงานทางไกล, การใช้ AI ในห้องเรียน, หรือรถไฟฟ้าในเมือง) โดยระบุโครงสร้างให้ชัดเจนว่าประโยคใดคือ Anecdote/Hook, ประโยคใดคือ Main Thesis, และประโยคใดคือ Supporting Evidence',
      writingSample:
        '[Hook/Anecdote] Last month, a neighborhood library near my house removed half of its desktop PCs and replaced them with long communal oak tables. [Main Thesis] Modern public libraries thrive not by chasing flashy gadgets, but by offering rare distraction-free space for community connection. [Supporting Evidence] Within eight weeks of adding shared study tables and evening book clubs, local attendance among young adults nearly doubled. [Supporting Evidence] Surveys showed that visitors already carried smartphones in their pockets; what they lacked at home was quiet tables without commercial pressure. [Reinforcement] Therefore, investing in calm physical design remains a library’s strongest asset.',
      writingNote:
        'ตรวจเช็กว่า Main Thesis ของคุณเป็นการ "แสดงจุดยืนที่มีเหตุผล" ไม่ใช่แค่การบอกข้อเท็จจริงลอยๆ และ Supporting Evidence ต้องตอบคำถาม "ทำไมถึงเชื่อแบบนั้น?" ได้จริง',
      speakingTopic:
        'สรุปโครงสร้างบทความ (Hook → Thesis → Evidence) ให้เพื่อนฟังภายในเวลาจำกัด (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เริ่มด้วยระบุ Main Thesis ในประโยคแรกทันที (The author’s core argument is that...)',
        'แยกเล่า Supporting Evidence 2 ข้อโดยใช้ตัวเชื่อมอย่าง To support this, ... / Another piece of evidence is...',
        'แยกออกให้ชัดว่าอะไรคือ "เรื่องเปิดตัวอย่าง" และอะไรคือ "บทสรุปหลัก"',
      ],
    },
    {
      day: 212,
      title: 'Author Tone & Attitude — จับน้ำเสียงจริง (วิพากษ์ ประชด เตือนภัย หรือเห็นด้วย)',
      objective:
        'จำแนกน้ำเสียงของผู้เขียน (objective, skeptical, enthusiastic, ironic, cautionary) จากการเลือกใช้คำคุณศัพท์ คำกริยาวิเศษณ์ และเครื่องหมายอัญประกาศ',
      explanation:
        'ความผิดพลาดคลาสสิกของการอ่านระดับ B2 คือ **"เข้าใจศัพท์ทุกคำ แต่ตีความอารมณ์ผู้เขียนกลับด้าน"**! เช่น อ่านเจอประโยค *"This \'revolutionary\' sleep ring merely reminds you at noon that you slept badly at midnight."* คนที่ไม่สังเกต Tone อาจนึกว่าผู้เขียนชมสินค้าว่า *revolutionary* ทั้งที่ความจริงผู้เขียนกำลัง **ประชด/กังขา (ironic / skeptical)** ชัดๆ! ดู 4 เบาะแสจับน้ำเสียงระดับ B2: **1) Quotation Marks เชิงประชด**: ใส่ `\'...\'` หรือ `"..."` รอบคำหรูๆ (*"smart", "effortless"*) แปลว่าผู้เขียนไม่เชื่อ! **2) Diminishers / Minimizers**: คำอย่าง *merely, barely, supposedly, at best* ส่งสัญญาณลดทอนความน่าเชื่อถือ **3) Attitude Adverbs**: *ironically, tellingly, alarmingly, remarkably* เผยความรู้สึกตรงๆ **4) Word Choice (Connotation)**: เปรียบเทียบ *confident* (เชิงบวก) vs *overstated* (เกินจริง) vs *reckless* (ประมาทอันตราย)',
      sound: [
        'Skeptical & Ironic Intonation Signals',
        'skeptical /ˈskep.tɪ.kəl/ · cautionary /ˈkɔː.ʃən.ər.i/ · ironic /aɪˈrɒn.ɪk/',
        'สังเกตวิธีอ่านคำประชดหรือคำกังขาอย่าง `so-called`, `supposedly`, `merely`: เสียงมักลากยาวขึ้นเล็กน้อยและแกว่งขึ้น-ลง (rise-fall) เพื่อให้ผู้ฟังรู้ว่าไม่ได้เชื่อเต็มร้อย เช่น "This SO-called smart gadget | MERELY adds another alert."',
        'ฝึกอ่าน 3 ประโยคด้วยน้ำเสียง 3 แบบ: 1) Objective (นิ่งเรียบ) 2) Enthusiastic (กระตือรือร้น) 3) Skeptical (ตั้งคำถามเบาๆ)',
      ],
      l1: [
        'ตีความตรงตัวทุกคำศัพท์โดยไม่ดูเครื่องหมายคำพูด ("...") หรือคำบอกท่าทีอย่าง merely, supposedly, ironically',
        'เวลาเรียนคำศัพท์จาก Flashcard เรามักจำแค่คำแปลพื้นฐาน เช่น revolutionary = ปฏิวัติวงการ โดยลืมสังเกตบริบทว่าผู้เขียนใส่เครื่องหมายคำพูดล้อเลียนอยู่',
        'สแกน "คำเล็กๆ ที่เผยอารมณ์" ก่อนเชื่อข้อความ: คำใน "..." | supposedly / allegedly | merely / only | tellingly / ironically',
      ],
      vocab: [
        [
          'skeptical',
          'กังขา / ตั้งคำถามไม่ปักใจเชื่อ',
          '/ˈskep.tɪ.kəl/',
          'remain skeptical of bold claims',
          'ยังคงกังขากับคำโฆษณาเกินจริง',
        ],
        [
          'cautionary',
          'เชิงตักเตือนให้ระวัง',
          '/ˈkɔː.ʃən.ər.i/',
          'issue a cautionary warning',
          'ออกคำเตือนให้ระมัดระวัง',
        ],
        [
          'ironic',
          'ย้อนแย้ง / ประชดประชัน',
          '/aɪˈrɒn.ɪk/',
          'note an ironic twist',
          'ชี้ให้เห็นความย้อนแย้งที่ชวนขำขื่น',
        ],
        [
          'merely',
          'เป็นเพียงแค่ (ลดทอนน้ำหนัก)',
          '/ˈmɪə.li/',
          'merely repackage old advice',
          'แค่เอาคำแนะนำเก่ามาเปลี่ยนแพ็กเกจใหม่',
        ],
        [
          'supposedly',
          'ตามที่อ้างกันว่า (แฝงความไม่เชื่อ)',
          '/səˈpəʊ.zɪd.li/',
          'a supposedly effortless solution',
          'ทางออกที่อ้างกันว่าทำได้แบบไม่ต้องออกแรง',
        ],
        [
          'harvest',
          'เก็บเกี่ยว (เช่น ข้อมูลผู้ใช้)',
          '/ˈhɑː.vɪst/',
          'quietly harvest behavioral data',
          'เก็บข้อมูลพฤติกรรมอย่างเงียบๆ',
        ],
        [
          'objective',
          'เป็นกลาง / อิงข้อเท็จจริงไม่ใส่อารมณ์',
          '/əbˈdʒek.tɪv/',
          'keep the tone objective',
          'รักษาน้ำเสียงให้เป็นกลาง',
        ],
      ],
      examples: [
        [
          'Ironically, an app marketed to reduce anxiety sent fourteen alerts before breakfast.',
          'ช่างย้อนแย้งที่แอปซึ่งทำการตลาดว่าช่วยลดความกังวลกลับส่งแจ้งเตือนถึงสิบสี่ครั้งตั้งแต่ก่อนมื้อเช้า',
        ],
        [
          'Readers should remain skeptical of any supposedly effortless cure.',
          'ผู้อ่านควรกังขากับวิธีแก้ปัญหาใดๆ ที่อ้างว่าได้ผลโดยไม่ต้องออกแรง',
        ],
        [
          'Rather than solving poor sleep, the bracelet merely generates another score to stress over.',
          'แทนที่จะแก้ปัญหานอนหลับไม่ดี สายรัดข้อมือกลับแค่สร้างคะแนนอีกชุดให้มานั่งเครียดเพิ่ม',
        ],
        [
          'While her early summary sounded objective, the final paragraph struck a cautionary note.',
          'แม้บทสรุปช่วงแรกของเธอจะฟังดูเป็นกลาง แต่ย่อหน้าสุดท้ายกลับส่งสัญญาณเตือนให้ระวัง',
        ],
      ],
      reading:
        'Walk down any electronics aisle today and you will meet dozens of sleek wearables promising "effortless" rest. Yet before strapping another sensor onto your wrist, it helps to examine what these supposedly smart wellness gadgets actually deliver. Many models do little more than count restless minutes you already noticed when your alarm rang—merely converting groggy mornings into colorful pie charts. Ironically, sleep specialists warn that tracking every minor dip in deep rest can spark "orthosomnia," a fresh anxiety caused by chasing a perfect score on screen. Worse still, while glossy ads celebrate personal health empowerment, the fine print often reveals how quietly these apps harvest heart-rate trends and bedtime routines for third-party marketers. None of this means simple sleep diaries lack value. Rather, a cautionary look behind the marketing suggests that real rest comes from darker bedrooms and consistent wind-down habits—not another glowing dashboard demanding your attention at sunrise.',
      listenQ: 'What ironic side effect do sleep specialists warn can happen from obsessing over wearable sleep scores?',
      listenA: 'It can spark a fresh anxiety called orthosomnia from chasing a perfect score on screen.',
      dictation: 'Readers should remain skeptical of any supposedly effortless cure.',
      listenNote:
        'ชี้จุดบอกน้ำเสียงในบทอ่าน: เครื่องหมายคำพูดรอบ "effortless", คำว่า supposedly, merely, Ironically, และวลี a cautionary look',
      drills: [
        {
          kind: 'choice',
          prompt:
            'น้ำเสียงโดยรวม (Overall Tone) ของผู้เขียนในบทความเรื่อง Smart Wellness Gadgets ข้างต้นตรงกับคู่คำใดมากที่สุด?',
          answer: 'Skeptical and cautionary',
          choices: [
            'Enthusiastic and promotional',
            'Skeptical and cautionary',
            'Completely neutral and purely descriptive',
            'Desperate and hopeless',
          ],
          explanation:
            'ผู้เขียนตั้งข้อกังขาต่อคำโฆษณา ("effortless", supposedly, merely) และเตือนผลกระทบเรื่องความกังวลและการเก็บข้อมูล (cautionary)',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยควิเคราะห์น้ำเสียงที่ผิดความหมายและไวยากรณ์ 2 จุด: "Because the writer used the word ‘revolutionary’ inside quotes, her tone is enthusiastic, and she ironical praised the price."',
          answer:
            'Because the writer used the word ‘revolutionary’ inside quotation marks, her tone is skeptical, and she ironically criticized the price.',
          explanation:
            '1) ใส่เครื่องหมายคำพูดรอบคำชมลอยๆ มักสื่อถึงความกังขา/ประชด (skeptical/ironic) ไม่ใช่ enthusiastic 2) กริยาวิเศษณ์คือ ironically (ไม่ใช้ ironical)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำกริยาวิเศษณ์แสดงความสงสัย/ไม่ปักใจเชื่อ (1 คำ): The headline promises a _____ painless commute, though riders report longer waits.',
          answer: 'supposedly',
          explanation:
            'supposedly แปลว่า "ตามที่อ้างกันว่า..." ใช้ส่งสัญญาณว่าผู้เขียนมีข้อมูลอีกด้านที่ชวนสงสัย',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยรักษาโทนกังขา/ลดน้ำหนักคำโฆษณา: "แพลตฟอร์มใหม่นี้เป็นเพียงแค่การเอาตำราเก่ามาจัดหน้าใหม่เท่านั้นเอง"',
          answer: 'This new platform merely repackages old textbooks in a fresh layout.',
          explanation:
            'คำว่า merely ช่วยสื่อน้ำเสียงว่าสิ่งที่อ้างว่าใหม่ความจริงมีคุณค่าน้อยกว่าที่โฆษณา',
        },
      ],
      writing:
        'เขียนรีวิวเชิงวิพากษ์ขนาดสั้น 5–6 ประโยคเกี่ยวกับ "เทรนด์ สินค้า หรือแอปที่โฆษณาเกินจริง" โดยเลือกใช้โทน Skeptical & Cautionary พร้อมใส่สัญญาณน้ำเสียงอย่างน้อย 3 ตัว (เช่น quotation marks "...", supposedly, merely, ironically)',
      writingSample:
        'Every January, social feeds fill with "miracle" thirty-day reset teas promising instant energy without changing how you sleep or eat. Yet a quick glance at the ingredient label reveals that these supposedly scientific blends merely combine common green tea with pricey packaging. Ironically, buyers who skip regular meals while sipping detox drinks often end up more exhausted by week two. None of this requires panic, of course; it simply serves as a cautionary reminder that real stamina is built through steady nutrition and rest, not overnight shortcuts.',
      writingNote:
        'ตรวจเช็กว่าน้ำเสียงของคุณมีความเป็นเหตุเป็นผล (cautionary/skeptical) ไม่ใช่การด่าทอด้วยอารมณ์หยาบคาย ซึ่งจะทำให้งานเขียนดูน่าเชื่อถือระดับ B2',
      speakingTopic:
        'วิเคราะห์โฆษณาหรือเทรนด์ดังด้วยน้ำเสียงตั้งคำถามอย่างมีเหตุผล (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ยกตัวอย่างคำกล่าวอ้าง 1 อย่าง แล้วใช้เสียง rise-fall อ่านคำว่า supposedly / so-called ให้จับความหมายแฝงได้',
        'อธิบายเหตุผลที่ควรระมัดระวังด้วยโทนสุภาพแต่มั่นคง (A cautionary look suggests...)',
        'แยกให้ออกระหว่างข้อเท็จจริงที่พิสูจน์ได้ กับคำโฆษณาเกินจริง',
      ],
    },
    {
      day: 213,
      title: 'Fact, Interpretation & Bias — แยกข้อมูลจริง การตีความ และอคติในข่าวและโซเชียล',
      objective:
        'แยก Verifiable Facts (ข้อเท็จจริงตรวจสอบได้) ออกจาก Plausible Interpretations (การตีความ) และ Loaded Bias (ถ้อยคำชวนเชื่อ/อคติ) ในข่าวและโพสต์ออนไลน์',
      explanation:
        'ในยุคโซเชียล ประโยคหนึ่งประโยคมักผสม 3 อย่างเข้าด้วยกันจนผู้อ่านแยกไม่ออก: **1) Fact (ข้อเท็จจริง)** สิ่งที่ตรวจสอบยืนยันด้วยตัวเลข วันที่ หรือหลักฐานได้ เช่น *"Pedestrian count rose 18% while weekend car revenue dropped 4%."* **2) Interpretation (การตีความ)** การคาดคะเนเหตุผลจากข้อมูลนั้น เช่น *"This suggests families felt safer walking after dark."* (มีเหตุผลรองรับ แต่ยังไม่ใช่ Fact 100%) **3) Bias / Slant (อคติและการชี้นำอารมณ์)** การเลือกใช้ **Loaded Words** (คำที่ใส่สีตีไข่) เช่น *reckless experiment* (การทดลองบ้าบิ่น) vs *bold initiative* (ก้าวริเริ่มที่กล้าหาญ), การเลือกเล่าข้อมูลเพียงด้านเดียว (**Cherry-picking**), หรือใช้กริยารุนแรงเกินจริง (*slammed, crushed, ruined*) **ทักษะ Media Literacy ระดับ B2**: เมื่ออ่านโพสต์ไวรัล ให้ "ลอกคำคุณศัพท์ใส่อารมณ์ออก" เพื่อดูว่าเหลือ Fact กี่เปอร์เซ็นต์!',
      sound: [
        'Neutral Attribution vs Emotional Trigger Contrast',
        'bias /ˈbaɪ.əs/ · verify /ˈver.ɪ.faɪ/ · selective /sɪˈlek.tɪv/',
        'เวลาเล่าข่าวต่อให้เป็นกลาง ฝึกใช้จังหวะเสียงเรียบนิ่งตรงคำอ้างอิง (`AcCORDing to the data...` | `Critics CLAIM that...` | `Supporters ARGUE that...`) เพื่อไม่ให้เสียงเราเผลอเอียงตามคำโฆษณาของแหล่งข่าว',
        'ฝึกอ่านคำคู่ Bias vs Neutral: slammed → criticized · skyrocketed → rose sharply · reckless → risky',
      ],
      l1: [
        'สรุปข้อความจากโพสต์ที่มีอารมณ์รุนแรงราวกับเป็นข้อเท็จจริง เช่น อ่านโพสต์ที่ด่าว่า "The street project completely destroyed small businesses!" แล้วรายงานต่อว่า "Small businesses went bankrupt."',
        'สมองมักจำคำที่มีพลังอารมณ์สูง (destroyed, disastrous, miracle) ได้เร็วกว่าตัวเลขและบริบทที่ละเอียดอ่อน',
        'ถาม 3 คำถามทุกครั้งที่อ่านข่าว/โพสต์: 1) ส่วนไหนวัดหรือตรวจซ้ำได้? (Fact) 2) ส่วนไหนคือข้อสรุปของผู้เขียน? (Interpretation) 3) คำไหนใส่สีอารมณ์เกินจริง? (Bias)',
      ],
      vocab: [
        [
          'bias',
          'อคติ / ความเอนเอียง',
          '/ˈbaɪ.əs/',
          'spot subtle media bias',
          'สังเกตเห็นอคติแฝงในสื่อ',
        ],
        [
          'verifiable',
          'ตรวจสอบยืนยันได้',
          '/ˈver.ɪ.faɪ.ə.bəl/',
          'rely on verifiable figures',
          'อ้างอิงตัวเลขที่ตรวจสอบได้',
        ],
        [
          'interpretation',
          'การตีความ',
          '/ɪnˌtɜː.prɪˈteɪ.ʃən/',
          'offer one plausible interpretation',
          'เสนอการตีความที่น่าจะเป็นไปได้ทางหนึ่ง',
        ],
        [
          'loaded',
          'แฝงอารมณ์ชี้นำ (คำพูด)',
          '/ˈləʊ.dɪd/',
          'avoid loaded adjectives',
          'หลีกเลี่ยงคำคุณศัพท์ที่ชี้นำอารมณ์',
        ],
        [
          'cherry-pick',
          'เลือกหยิบเฉพาะข้อมูลที่เข้าข้างตัวเอง',
          '/ˈtʃer.i.pɪk/',
          'cherry-pick favorable numbers',
          'เลือกหยิบเฉพาะตัวเลขที่ดูดีมาพูด',
        ],
        [
          'pedestrian',
          'คนเดินเท้า',
          '/pəˈdes.tri.ən/',
          'pedestrianize a market street',
          'จัดถนนตลาดให้เป็นทางเดินเท้า',
        ],
        [
          'polarized',
          'แบ่งขั้วสุดโต่ง',
          '/ˈpəʊ.lə.raɪzd/',
          'calm a polarized debate',
          'ลดความตึงเครียดของการถกเถียงที่แบ่งขั้ว',
        ],
      ],
      examples: [
        [
          'Calling a two-week delay a "total disaster" is loaded bias, not a verifiable fact.',
          'การเรียกความล่าช้าสองสัปดาห์ว่า "หายนะย่อยยับ" คืออคติชี้นำอารมณ์ ไม่ใช่ข้อเท็จจริงที่ตรวจสอบได้',
        ],
        [
          'Neutral reporting separates hard data from competing interpretations.',
          'การรายงานข่าวที่เป็นกลางแยกข้อมูลจริงออกจากคำตีความที่ขัดแย้งกัน',
        ],
        [
          'When bloggers cherry-pick one bad weekend while ignoring three solid months, the picture becomes distorted.',
          'เมื่อบล็อกเกอร์เลือกหยิบแค่วันหยุดที่แย่หนึ่งสัปดาห์แล้วเมินสามเดือนที่ยอดดี ภาพรวมก็จะบิดเบือนไป',
        ],
        [
          'According to municipal sensors, foot traffic climbed twenty-two percent after closing the lane to cars.',
          'จากข้อมูลเซนเซอร์ของเทศบาล จำนวนคนเดินเท้าเพิ่มขึ้นยี่สิบสองเปอร์เซ็นต์หลังปิดช่องจราจรรถยนต์',
          'ใช้ According to + แหล่งข้อมูลจริง เพื่ออ้างอิงข้อเท็จจริงอย่างเป็นกลาง',
        ],
      ],
      reading:
        'Following a ninety-day trial that turned Old Market Lane into a weekend pedestrian zone, two online summaries circulated widely. The city’s transport log reported verifiable figures: evening foot traffic rose twenty-four percent, emergency response times stayed unchanged, and food stalls earned more while two hardware shops saw slightly fewer bulky pickups. That measured summary suggests an interpretation: the street worked well for dining and strolling, though freight access still needed tuning. By contrast, a viral neighborhood post slammed the "reckless experiment" for "crushing local livelihoods," sharing one photo of an empty morning alley taken at six a.m. before shops even opened. Meanwhile, a supporter blog cherry-picked Saturday night crowd counts to claim "unanimous neighborhood joy." Notice how polarized posts rely on loaded language and selective timing to steer emotion. Reading critically means stripping away dramatic verbs like "crushing" and asking calmly what the verified data actually shows—and which voices were conveniently left outside the frame.',
      listenQ: 'How did the viral neighborhood post distort the situation on Old Market Lane?',
      listenA: 'It used loaded language and shared a photo of an empty alley taken at six a.m. before shops opened.',
      dictation: 'Neutral reporting separates hard data from competing interpretations.',
      listenNote:
        'แยก 3 ชั้นในบทอ่าน: 1) Fact = +24% foot traffic, emergency times unchanged 2) Interpretation = dining worked well, freight needs tuning 3) Bias = "reckless experiment", "crushing livelihoods", 6 a.m. photo, "unanimous joy"',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ประโยคใดต่อไปนี้เป็น "Verifiable Fact" ล้วนๆ โดยไม่มี Interpretation หรือ Loaded Bias ปะปนอยู่เลย?',
          answer:
            'During the ninety-day trial, evening foot traffic increased by twenty-four percent.',
          choices: [
            'The reckless city trial completely crushed honest shopkeepers across the district.',
            'During the ninety-day trial, evening foot traffic increased by twenty-four percent.',
            'This impressive increase proves residents clearly want permanent car bans everywhere.',
            'Everyone in the neighborhood unanimously loved the lively weekend atmosphere.',
          ],
          explanation:
            'ตัวเลข +24% ตลอดช่วงทดลอง 90 วันวัดซ้ำและตรวจสอบได้โดยไม่ตีความหรือใส่อารมณ์',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคสรุปข่าวที่เผลอใส่ Bias ปะปนและผิดไวยากรณ์ 2 จุด: "According with the viral post, the policy total ruined every shop, despite municipal data showed higher food sales."',
          answer:
            'According to the viral post, the policy disrupted local shops, although municipal data showed higher food sales.',
          explanation:
            '1) สำนวนอ้างอิงที่ถูกต้องคือ According to (ไม่ใช่ According with) และลดคำ Bias "total ruined" เป็นคำเป็นกลาง 2) despite ตามด้วยคำนาม/V-ing ส่วนเมื่อมี Clause (municipal data showed...) ให้ใช้ although',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำกริยาที่แปลว่า "เลือกหยิบเฉพาะส่วนที่เข้าข้างฝ่ายตัวเองมาเล่า" (1 คำ, แบบมีขีดกลาง): Critics accused the campaign video of trying to _____ one sunny afternoon while hiding two months of delays.',
          answer: 'cherry-pick',
          explanation:
            'cherry-pick = เลือกเฟ้นเฉพาะหลักฐานส่วนน้อยที่เข้าข้างมุมมองตัวเองมาแสดง',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษแบบเป็นกลาง: "เมื่อเราถอดถ้อยคำชี้นำอารมณ์ออก ข้อเท็จจริงที่ตรวจสอบได้ก็ชัดเจนขึ้นมาก"',
          answer:
            'Once we strip away loaded language, the verifiable facts become much clearer.',
          explanation:
            'ใช้ strip away loaded language + verifiable facts เพื่ออธิบายทักษะการอ่านสื่ออย่างมีวิจารณญาณ',
        },
      ],
      writing:
        'เลือกหัวข้อสาธารณะ 1 เรื่อง (เช่น รถจักรยานยนต์บนทางเท้า, นโยบายเลิกใช้ถุงพลาสติก, หรือค่าจอดรถในห้าง) แล้วเขียนย่อหน้า 6 ประโยคเปรียบเทียบ: 2 ประโยคที่เป็น Fact ล้วนๆ, 2 ประโยคที่แสดง Bias/Loaded words ของสองฝ่าย, และ 2 ประโยคที่เป็นการตีความอย่างเป็นกลางของคุณ',
      writingSample:
        '[Facts] Last quarter, our city’s central park banned single-use plastic cups at its weekend market, reducing daily bin weight by eighteen percent. Over the same period, beverage stalls reported a five-percent dip in impulse drink sales. [Biased Posts] One angry social thread called the rule a "short-sighted attack on small vendors," while an activist blog hailed it as a "historic triumph over greed." [Neutral Interpretation] Stripping away loaded slogans, the numbers suggest visitors support greener habits yet need convenient cup-return stations near park entrances. Adjusting logistics could preserve both sales and waste reduction.',
      writingNote:
        'ตรวจดูว่าส่วน [Facts] ไม่มีคำคุณศัพท์ตัดสินคุณค่า (เช่น historic, short-sighted, terrible) และส่วน [Neutral Interpretation] ใช้คำกริยาอย่าง suggest / indicate แทนการฟันธง',
      speakingTopic:
        'ถอดรหัสข่าว/โพสต์ไวรัลให้ฟังแบบเป็นกลาง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'สรุปประเด็นที่คนถกเถียงกันโดยแยกพูดเป็น 3 ขั้น: Verified Facts → Biased Claims → Balanced Interpretation',
        'ใช้คำเชื่อมที่นุ่มนวลเป็นกลาง (According to..., Critics claim..., Supporters point out...)',
        'ชี้ให้เห็น 1 ตัวอย่างของ Cherry-picking หรือ Loaded word ที่เคยเห็นในชีวิตจริง',
      ],
    },
    {
      day: 214,
      title: 'Reading Between the Lines — อ่านความหมายแฝง การถ่อมคำ (Understatement) และคำติสุภาพ',
      objective:
        'ตีความ Implied Meaning (ความหมายแฝง), Diplomatic Understatement (การพูดเบากว่าจริงเพื่อติอย่างสุภาพ) และ Omission Clues โดยไม่อาศัยแค่การจับคำตรงตัว',
      explanation:
        'เจ้าของภาษา—โดยเฉพาะในวัฒนธรรมอังกฤษและการสื่อสารมืออาชีพ—มักไม่เขียนตรงๆ ว่า *"The food was awful and overpriced."* แต่จะใช้ **Understatement (การลดระดับคำให้นุ่มแต่เจ็บแสบ!)** เช่น **`The portions were modest for the price.`** (= ให้โคตรน้อยแต่แพง!), **`Service was unhurried.`** (= รอนานจนหงุดหงิด!), หรือ **`I am not entirely convinced the timeline is realistic.`** (= ตารางงานนี้เป็นไปไม่ได้เลย!) การอ่านระดับ B2 ต้องจับ 3 สัญญาณ **Reading Between the Lines (การอ่านระหว่างบรรทัด)**: **1) Litotes / Soft Negatives**: *hardly ideal*, *not exactly cheap*, *less than seamless* **2) Praise-then-Pivot (`While... / Though...`)**: ชมเปลือกนอก 1 ประโยคแล้วหักเข้าความจริง เช่น *"The lobby design is striking, though acoustics leave little room for conversation."* (= เสียงก้องคุยไม่รู้เรื่อง) **3) What is conspicuously missing (สิ่งที่จงใจไม่ชม)**: ถ้ารีวิวร้านอาหารชมแต่ไฟสวยและเก้าอี้นั่งสบาย โดยพูดถึงรสชาติแค่คำเดียวว่า *"interesting"* คุณรู้ทันทีว่าเกิดอะไรขึ้น!',
      sound: [
        'Polite Understatement Prosody',
        'understatement /ˌʌn.dəˈsteɪt.mənt/ · modest /ˈmɒd.ɪst/ · unhurried /ʌnˈhʌr.id/',
        'เวลาพูด Understatement เสียงมักจะ "นิ่งเรียบและลากช้าลงเบาๆ" ตรงคำลดทอน: "Service was... unHURried." หรือ "It’s NOT enTIREly ideal." น้ำเสียงแบบนี้บอกความหมายแฝงได้ชัดกว่าการตะโกน!',
        'ฝึกแปลง 4 ประโยคสุภาพให้เป็นความหมายแฝงที่แท้จริงขณะอ่านออกเสียง: hardly cheap · modest portions · ambitious deadline · leaves something to be desired',
      ],
      l1: [
        'เห็นคำว่า "interesting" หรือ "modest" หรือ "unhurried" ในรีวิวแล้วเข้าใจผิดว่าเป็นคำชมล้วนๆ เพราะดูแค่ความหมายในดิกชันนารีแบบเดี่ยวๆ',
        'ผู้เรียนมักใช้เทคนิคจับคำตรงตัว (keyword matching) โดยไม่สังเกตบริบทของการชม-แล้ว-หักมุม หรือวลีปฏิเสธเบาๆ อย่าง hardly / scarcely / not entirely',
        'เมื่อเจอประโยคขึ้นด้วย "While X was lovely, Y..." หรือเจอคู่คำอย่าง hardly ideal / not particularly memorable ให้หยุด 1 วินาทีแล้วถามว่า: "ความจริงที่ผู้เขียนอ้อมค้อมไม่กล้าพูดตรงๆ คืออะไร?"',
      ],
      vocab: [
        [
          'understatement',
          'การพูดให้น้อยกว่าความจริง / พูดแบบอ้อมค้อมสุภาพ',
          '/ˌʌn.dəˈsteɪt.mənt/',
          'use polite understatement',
          'ใช้การพูดแบบถ่อมคำสุภาพแต่แฝงความหมาย',
        ],
        [
          'imply',
          'บอกเป็นนัย / แฝงความหมาย',
          '/ɪmˈplaɪ/',
          'imply subtle disappointment',
          'สื่อเป็นนัยถึงความผิดหวังเล็กน้อย',
        ],
        [
          'infer',
          'อนุมาน / ตีความจากเบาะแส',
          '/ɪnˈfɜːr/',
          'infer the hidden critique',
          'ตีความคำติที่ซ่อนอยู่ได้',
        ],
        [
          'unhurried',
          'ไม่เร่งรีบ (แฝงความหมายว่าช้า)',
          '/ʌnˈhʌr.id/',
          'experience unhurried service',
          'เจอการบริการที่อืดอาดช้าเกินควร',
        ],
        [
          'modest',
          'พอประมาณ / เล็กน้อย (แฝงว่าน้อยไป)',
          '/ˈmɒd.ɪst/',
          'serve modest portions',
          'เสิร์ฟอาหารปริมาณน้อยเกินราคา',
        ],
        [
          'ambitious',
          'ทะเยอทะยาน (แฝงว่าอาจทำไม่ทัน)',
          '/æmˈbɪʃ.əs/',
          'set an ambitious timeline',
          'ตั้งกรอบเวลาที่แทบเป็นไปไม่ได้',
        ],
        [
          'seamless',
          'ไร้รอยต่อ / ราบรื่นมาก',
          '/ˈsiːm.ləs/',
          'far from seamless',
          'ห่างไกลจากคำว่าราบรื่น',
        ],
      ],
      examples: [
        [
          'Saying the hotel Wi-Fi was "not entirely reliable" politely implies it kept dropping all evening.',
          'การบอกว่า Wi-Fi โรงแรม "ไม่ค่อยเสถียรนัก" เป็นการสื่อเป็นนัยอย่างสุภาพว่ามันหลุดทั้งคืน',
        ],
        [
          'We can infer from her quiet reply that she doubted the schedule.',
          'เราอนุมานได้จากคำตอบเบาๆ ของเธอว่าเธอไม่เชื่อมั่นในตารางเวลา',
        ],
        [
          'The plating looked artistic, though the portions felt rather modest for the price.',
          'การจัดจานดูมีศิลปะดี แต่ปริมาณอาหารค่อนข้างน้อยไปหน่อยเมื่อเทียบกับราคา',
        ],
        [
          'Calling a three-month workload a "one-week sprint" is an ambitious proposal, to put it mildly.',
          'การเรียกงานหนักสามเดือนว่า "สปรินต์หนึ่งสัปดาห์" เป็นข้อเสนอที่ทะเยอทะยานมาก—พูดแบบถนอมน้ำใจสุดๆ แล้วนะ',
          'to put it mildly = พูดแบบอ้อมๆ เบาๆ แล้วนะ (ความจริงหนักกว่านั้นมาก)',
        ],
      ],
      reading:
        'Stepping into the newly opened bistro on Sukhumvit, diners are greeted by warm cedar lighting and a playlist curated with genuine care. The host smiles warmly, though the wait between seating and our first water glasses felt rather unhurried. Once the tasting plates arrived, their presentation was undeniably photogenic; however, the portions were modest enough to leave even light eaters glancing back at the menu. Our roasted sea bass carried an interesting citrus glaze that might appeal to adventurous guests, while the risotto arrived a touch lukewarm—hardly ideal at nearly nine hundred baht a plate. When we flagged our bill, the manager remained courteous yet took another fifteen minutes to adjust a duplicated drink charge, making the evening feel far from seamless. For an unhurried catch-up over sparkling water and interior photography, this dining room certainly shines. Still, anyone arriving genuinely hungry after work may find the experience raises more appetite than satisfaction.',
      listenQ: 'What can we infer about the critic’s overall satisfaction with the food quantity, temperature, and billing speed?',
      listenA: 'The portions were too small for the price, the risotto arrived cool, and billing was slow and disorganized.',
      dictation: 'We can infer from the review that service was slow.',
      listenNote:
        'สังเกตวิธีชมสลับติในรีวิว: ชมไฟสวย เพลงดี จัดจานถ่ายรูปสวย แต่แทรก unhurried (= ช้า), modest (= น้อย), interesting (= รสแปลกไม่ถูกปาก), a touch lukewarm (= เย็นชืด), hardly ideal (= แย่), far from seamless (= ติดขัด), raises more appetite than satisfaction (= กินไม่อิ่มไม่คุ้ม)',
      drills: [
        {
          kind: 'choice',
          prompt:
            'เมื่ออ่านประโยคท้ายของรีวิวร้านอาหารว่า "For an unhurried catch-up over sparkling water and interior photography, this dining room certainly shines." ผู้เขียนกำลังบอกเป็นนัยว่าอะไร?',
          answer:
            'The room looks great for photos and drinks, yet it is a weak choice if you want fast service or filling meals.',
          choices: [
            'It is the fastest and most affordable dinner spot in Sukhumvit.',
            'The room looks great for photos and drinks, yet it is a weak choice if you want fast service or filling meals.',
            'Diners should order two bottles of sparkling water to get free photographs.',
            'The chef specializes only in photography rather than cooking.',
          ],
          explanation:
            'การระบุว่า "ดีเฉพาะเรื่องน้ำและการถ่ายรูป" เป็นการเว้นสิ่งสำคัญ (รสชาติ/ความอิ่ม/ความเร็ว) ออกไปอย่างจงใจ (Omission Clue + Understatement)',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ใช้คู่คำ infer / imply สลับกันและผิดไวยากรณ์ 2 จุด: "The manager’s email inferred that the project is delayed, so we can imply from his tone that clients are angry."',
          answer:
            'The manager’s email implied that the project is delayed, so we can infer from his tone that clients are angry.',
          explanation:
            'ผู้ส่งสาร/ข้อความเป็นฝ่าย "imply" (บอกเป็นนัย) ส่วนผู้อ่าน/ผู้ฟังเป็นฝ่าย "infer" (ตีความอนุมานจากสิ่งที่ได้รับ)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำวิเศษณ์ปฏิเสธเบาๆ ที่แปลว่า "แทบจะไม่ / ไม่ค่อยจะ..." ให้เข้ากับบริบท Understatement (1 คำ): Waiting forty minutes just to pay the check was _____ ideal on a weeknight.',
          answer: 'hardly',
          explanation:
            'hardly ideal = ไม่ค่อยสมบูรณ์แบบเอาเสียเลย (คำพูดสุภาพแทนคำว่า "แย่/น่าหงุดหงิดมาก")',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยใช้ Understatement เชิงธุรกิจ: "ฉันยังไม่ค่อยมั่นใจนักว่ากรอบเวลาที่เสนอมาจะทำได้จริง"',
          answer:
            'I am not entirely convinced that the proposed timeline is realistic.',
          explanation:
            'I am not entirely convinced... เป็นวิธีติงหรือแสดงความไม่เห็นด้วยอย่างมีวุฒิภาวะในระดับ B2',
        },
      ],
      writing:
        'เขียนรีวิวสถานที่ โรงแรม หรือบริการ 5–6 ประโยคที่ใช้ศิลปะ **Understatement และ Praise-then-Pivot** เพื่อบอกว่ามีข้อดี 1–2 จุด แต่จริงๆ แล้วมีข้อบกพร่องเรื่องความช้า ราคา หรือความสะดวก (ห้ามใช้คำด่าตรงๆ อย่าง terrible, awful, worst!)',
      writingSample:
        'The new rooftop coworking lounge boasts sweeping skyline views and impressively quiet armchairs. However, securing a power outlet near the window proved rather challenging unless you arrived before eight. The café menu offered creative drinks, though the portions felt somewhat modest for their downtown prices. Additionally, the booking app’s checkout screen could be described as less than seamless during busy mornings. Overall, it is a lovely spot for short brainstorms, provided your laptop battery starts at one hundred percent.',
      writingNote:
        'เช็กคำสุภาพที่แฝงคำติในงานของคุณ (เช่น modest, rather challenging, less than seamless, provided that...) พร้อมทั้งแยกการใช้ imply (ผู้เขียนแฝงนัย) vs infer (ผู้อ่านตีความ)',
      speakingTopic:
        'ฝึกพูดวิจารณ์หรือให้ฟีดแบ็กด้วย Understatement อย่างมีชั้นเชิง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดให้ฟีดแบ็กผลงานหรือรีวิวประสบการณ์ที่ไม่น่าประทับใจ โดยไม่ใช้คำว่า bad/terrible/boring เลยสักคำ',
        'ใช้น้ำเสียงเรียบ นิ่ง และเว้นจังหวะเบาๆ หน้าวลีอย่าง hardly ideal, modest, far from seamless, not entirely convinced',
        'อธิบายช่วงท้ายสั้นๆ ว่าผู้ฟังต่างชาติจะตีความ (infer) ประโยคเหล่านั้นว่าอย่างไร',
      ],
    },
    {
      day: 215,
      title: 'The Art of Paraphrasing — ถอดความใหม่ทั้งโครงสร้างโดยรักษาความหมาย 100%',
      objective:
        'Paraphrase ประโยคและย่อหน้ายาวๆ ด้วยการเปลี่ยนทั้งคำศัพท์และโครงสร้างไวยากรณ์ (Word Class Shift, Voice Flip, Clause Restructuring) โดยไม่ลอกโครงสร้างเดิมและไม่บิดเบือนความหมาย',
      explanation:
        'ผู้เรียนส่วนใหญ่เข้าใจผิดว่า **Paraphrase (การถอดความใหม่ด้วยภาษาตัวเอง)** คือการเปิดพจนานุกรมหา Synonym มาหยอดทับคำเดิมทีละคำ (*"patchwriting"*) เช่น เปลี่ยน *"Urban trees reduce street heat."* เป็น *"City plants decrease road warmth."* — ฟังดูประหลาดและผิด Collocation ทันที! การ Paraphrase ระดับ B2 ที่เป็นธรรมชาติและสะอาดตาต้องทำ **3 ขั้นตอน**: **1) อ่านแล้วปิดตาจำ "ไอเดียหลัก" ไม่ใช่จำลำดับคำ** **2) เปลี่ยนโครงสร้างไวยากรณ์ (Syntactic Shift)**: สลับ Active ↔ Passive, ย้ายผลมาขึ้นก่อนเหตุ (*X happens because Y* → *Y leads to X*), หรือเปลี่ยนชนิดคำ (Verb ↔ Noun เช่น *reduce heat* → *a drop in temperature*) **3) ใช้ Collocation ที่เป็นธรรมชาติของคำใหม่** และเช็ก 100% ว่าไม่เติมข้อมูลเพิ่มหรือตัดเงื่อนไขสำคัญทิ้ง!',
      sound: [
        'Smooth Reformulation Transitions',
        'paraphrase /ˈpær.ə.freɪz/ · canopy /ˈkæn.ə.pi/ · mitigate /ˈmɪt.ɪ.ɡeɪt/',
        'เวลา Paraphrase ความคิดของคนอื่นในห้องประชุม ใช้วลีนำที่ลื่นไหลพร้อมเน้นเสียงให้ชัด: "Put SIMply, | ..." · "In OTHER words, | ..." · "So what you’re SAYing is | ..."',
        'ฝึกพูดถอดความประโยคเดียวกัน 2 รูปแบบปากเปล่าโดยไม่มองตัวหนังสือ: ต้นฉบับ → พูดซ้ำด้วยโครงสร้าง Cause-Effect ใหม่',
      ],
      l1: [
        'เปลี่ยนแค่คำศัพท์ 2–3 คำด้วย Synonym โดยคงโครงสร้างประโยคและคำเชื่อมเดิมเป๊ะๆ (ทำให้ผิด Collocation หรือโดนมองว่าลอกประโยค)',
        'กลัวเปลี่ยนโครงสร้างแล้วความหมายผิด เลยเกาะติดลำดับคำของประโยคต้นฉบับแน่นเกินไป',
        'กฎ 3 สับเปลี่ยน (3-Switch Rule): ทุกครั้งที่ Paraphrase ให้เปลี่ยนอย่างน้อย 2 ใน 3 อย่างนี้: 1) สลับลำดับ Clause (เหตุ↔ผล) 2) เปลี่ยนชนิดคำ (Adj/Verb/Noun) 3) เปลี่ยนก้อน Collocation',
      ],
      vocab: [
        [
          'paraphrase',
          'ถอดความ / เรียบเรียงด้วยคำของตัวเอง',
          '/ˈpær.ə.freɪz/',
          'paraphrase an idea accurately',
          'ถอดความแนวคิดได้ตรงตามต้นฉบับ',
        ],
        [
          'canopy',
          'เรือนยอดไม้ที่แผ่ร่มเงา',
          '/ˈkæn.ə.pi/',
          'expand urban tree canopy',
          'ขยายพื้นที่เรือนยอดไม้ในเมือง',
        ],
        [
          'mitigate',
          'บรรเทา / ลดความรุนแรง',
          '/ˈmɪt.ɪ.ɡeɪt/',
          'mitigate extreme street heat',
          'บรรเทาความร้อนจัดบนถนน',
        ],
        [
          'retain',
          'กักเก็บไว้',
          '/rɪˈteɪn/',
          'retain afternoon heat',
          'กักเก็บความร้อนช่วงบ่ายไว้',
        ],
        [
          'shaded',
          'มีร่มเงา',
          '/ˈʃeɪ.dɪd/',
          'walk along shaded sidewalks',
          'เดินบนทางเท้าที่มีร่มไม้',
        ],
        [
          'asphalt',
          'พื้นยางมะตอย',
          '/ˈæs.fælt/',
          'sun-baked asphalt surfaces',
          'พื้นผิวยางมะตอยที่โดนแดดเผา',
        ],
        [
          'feasible',
          'เป็นไปได้ในทางปฏิบัติ',
          '/ˈfiː.zə.bəl/',
          'a financially feasible upgrade',
          'การปรับปรุงที่เป็นไปได้ด้านงบประมาณ',
        ],
      ],
      examples: [
        [
          'Original: Because bare asphalt retains afternoon heat, unshaded avenues stay warm long after sunset.',
          'ต้นฉบับ: เนื่องจากพื้นยางมะตอยโล่งๆ กักเก็บความร้อนช่วงบ่าย ถนนที่ไม่มีร่มเงาจึงยังร้อนอบอ้าวหลังพระอาทิตย์ตกไปแล้วนาน',
        ],
        [
          'Good Paraphrase: A lack of street shade leaves asphalt surfaces radiating heat well into the night.',
          'ถอดความที่ดี: การขาดร่มเงาริมถนนทำให้พื้นผิวยางมะตอยยังคงแผ่ความร้อนไปจนถึงช่วงค่ำ',
          'สังเกตการเปลี่ยนทั้งโครงสร้าง (Because... → A lack of... leaves...) และคงความหมาย 100%',
        ],
        [
          'Original: Planting wide-canopy trees lowers surface temperatures far more cheaply than misting fans.',
          'ต้นฉบับ: การปลูกต้นไม้ทรงพุ่มกว้างช่วยลดอุณหภูมิพื้นผิวได้ถูกกว่าพัดลมไอน้ำมาก',
        ],
        [
          'Good Paraphrase: Compared with mechanical misting systems, broad tree canopies offer a more affordable way to cool city pavements.',
          'ถอดความที่ดี: เมื่อเทียบกับระบบพ่นละอองน้ำ ต้นไม้เรือนยอดกว้างเป็นทางเลือกที่ประหยัดกว่าในการลดความร้อนพื้นทางเดินในเมือง',
        ],
      ],
      reading:
        'Across rapidly growing Southeast Asian cities, concrete towers and dark asphalt roads absorb intense sunlight all afternoon and continue radiating warmth well into the night—a pattern known as the urban heat-island effect. While outdoor misting fans and indoor cooling units provide temporary relief, they demand heavy electricity and actually pump extra waste heat into surrounding alleys. By contrast, urban forestry studies show that continuous tree canopies can lower pavement temperatures by several degrees simply by blocking direct solar rays and releasing moisture through leaves. Expanding street greenery is not an overnight fix, however; narrow utilities underground and tight municipal budgets often limit where deep roots can spread. Even so, prioritizing shade along busy pedestrian corridors remains one of the most feasible long-term strategies for making humid cities walkable again. Put simply, cooling a modern neighborhood effectively begins with restoring living shade rather than adding louder machines.',
      listenQ: 'What limitation makes expanding street trees a gradual process rather than an overnight fix?',
      listenA: 'Underground utilities and tight municipal budgets often limit where deep tree roots can grow.',
      dictation: 'Broad tree canopies offer an affordable way to cool city pavements.',
      listenNote:
        'ฝึกอ่านบทความนี้แล้วปิดหน้าจอ จากนั้นลองพูดสรุปประโยคหลักด้วย "Put simply..." หรือ "In other words..." โดยไม่ใช้โครงสร้างประโยคเดิมซ้ำ',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ต้นฉบับ: "Outdoor cooling units provide temporary relief, yet they consume heavy electricity and exhaust extra heat into alleys." ข้อใด Paraphrase ได้ถูกต้องตามหลัก (เปลี่ยนโครงสร้าง + คงความหมายครบ 100%)?',
          answer:
            'Although outdoor coolers offer brief comfort, their high power demand ends up warming nearby lanes even further.',
          choices: [
            'Outside cold machines give short rest, still they eat strong electricity and push more hotness to small streets.',
            'Although outdoor coolers offer brief comfort, their high power demand ends up warming nearby lanes even further.',
            'Outdoor cooling systems permanently solve alley heat while using very little electricity.',
            'Indoor air conditioning always cools alleys faster than street trees.',
          ],
          explanation:
            'ข้อ 1 เป็น patchwriting ที่ผิด collocation (strong electricity, hotness), ข้อ 3-4 บิดเบือนความหมาย ส่วนข้อ 2 เปลี่ยนโครงสร้างด้วย Although + high power demand + ends up warming... ได้ครบและเป็นธรรมชาติ',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยค Paraphrase ที่เผลอใช้ Collocation เพี้ยนและไวยากรณ์ผิด 2 จุด: "Expanding green trees can mitigation city warmth and make pedestrian feeling comfort."',
          answer:
            'Expanding urban greenery can mitigate city heat and make pedestrians feel comfortable.',
          explanation:
            '1) หลัง can ใช้คำกริยา mitigate (ไม่ใช่คำนาม mitigation) และใช้ city heat (ไม่ใช่ city warmth ซึ่งแปลว่าความอบอุ่นเชิงใจดี) 2) make + pedestrians (พหูพจน์) + feel + comfortable (Adj)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำกริยาที่เป็นทางการและนิยมใช้แทน reduce / lessen ในงานเขียน Paraphrase ระดับ B2 (1 คำ): Installing rooftop gardens helps _____ severe afternoon heat inside older buildings.',
          answer: 'mitigate',
          explanation:
            'mitigate = บรรเทา/ลดความรุนแรงของปัญหา (ใช้คู่กับ heat, risk, impact ได้เป็นธรรมชาติมาก)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยใช้วลีสรุปแบบถอดความ: "พูดง่ายๆ ก็คือ การฟื้นฟูร่มไม้ในเมืองเป็นทางออกที่ทำได้จริงมากกว่าการพึ่งเครื่องจักร"',
          answer:
            'Put simply, restoring urban shade is a more feasible solution than relying on machines.',
          explanation:
            'ใช้ Put simply, + Gerund subject (restoring urban shade) + feasible solution',
        },
      ],
      writing:
        'อ่านข้อความต้นฉบับต่อไปนี้ แล้วเขียน Paraphrase ขึ้นมาใหม่ 2–3 ประโยคโดยห้ามลอกคำเชื่อมหรือเรียงประโยคแบบเดิม: "Employees who commute over ninety minutes a day report higher exhaustion and quit twice as often as colleagues living within twenty minutes of the office."',
      writingSample:
        'Original meaning restated: Long daily travel severely drains staff energy and doubles turnover risk. Specifically, workers facing commutes exceeding an hour and a half experience far more fatigue—and leave their roles at twice the rate—compared with teammates who live nearby.',
      writingNote:
        'ตรวจเช็กกับกฎ 3-Switch Rule: เปลี่ยนรูปคำ (exhaustion → fatigue, quit twice as often → double turnover risk / leave at twice the rate) และตรวจดูว่าไม่ตกหล่นตัวเลข 90 นาที กับ 20 นาที',
      speakingTopic:
        'ฝึกฟังประโยคหรือย่อหน้าสั้นๆ แล้วพูด Paraphrase สดทันที (4 / 3 / 2 นาที)',
      speakingBullets: [
        'อ่านออกเสียงบทความวันนี้รอบแรก แล้วปิดข้อความลงจากนั้นเล่าซ้ำเป็นคำพูดตัวเองโดยเริ่มด้วย In other words... / Put simply...',
        'บังคับตัวเองให้สลับ Cause ↔ Effect และเปลี่ยนชนิดคำอย่างน้อย 2 จุด (เช่น lower temperatures → a drop in heat)',
        'รักษาความถูกต้องของเงื่อนไข (ไม่เติมเกิน ไม่ตัดข้อจำกัดเรื่องงบและสาธารณูปโภคใต้ดิน)',
      ],
    },
    {
      day: 216,
      title: 'Crisp 3-Sentence Summaries — ย่อบทความยาวให้เหลือ 3 ประโยคคมกริบ',
      objective:
        'สังเคราะห์บทความออนไลน์ขนาดยาวให้เหลือบทสรุป 3 ประโยคที่มีโครงสร้างชัดเจน (1. บริบทและประเด็นหลัก 2. กลไก/หลักฐานสำคัญ 3. ข้อคิดหรือผลกระทบ) โดยไม่ใส่ความเห็นส่วนตัวและไม่ยืดเยื้อ',
      explanation:
        'เคยไหมครับ เวลาเพื่อนถามว่า *"บทความยาวๆ ที่แชร์มาพูดเรื่องอะไร?"* แล้วเราเล่าตั้งแต่ต้นจนจบยืดยาว 3 นาทีจนคนฟังจับจุดไม่ถูก? ทักษะระดับ B2 คือ **3-Sentence Executive Summary**: **ประโยคที่ 1 (Context & Central Claim)** ระบุหัวข้อและข้อเสนอหลักของบทความในภาพรวม (`The article argues that...`) **ประโยคที่ 2 (Core Mechanism / Evidence)** ยกเฉพาะเหตุผลหลักหรือความตึงเครียดสำคัญ 1–2 ข้อมาเชื่อม โดย **ตัดสถิติยิบย่อยและชื่อย่อยที่ไม่จำเป็นออก** **ประโยคที่ 3 (Takeaway / Implication)** สรุปข้อเสนอแนะหรือผลลัพธ์ระยะยาวที่ผู้เขียนชี้ไว้ **กฎเหล็ก 3 ข้อ**: 1) ห้ามลอกประโยคเดิมตรงๆ (ใช้ทักษะ Paraphrase จากเมื่อวาน!) 2) ห้ามใส่ความเห็นส่วนตัวเช่น *"I totally agree..."* ในบทสรุปที่เป็นกลาง 3) ความยาวรวมทั้ง 3 ประโยคควรอยู่ที่ **50–75 คำ** พอดี!',
      sound: [
        'Decisive Executive Summary Cadence',
        'resilience /rɪˈzɪl.i.əns/ · loneliness /ˈləʊn.li.nəs/ · casual /ˈkæʒ.u.əl/',
        'เวลาพูดสรุป 3 ประโยค ให้ใช้ระดับเสียง **ลงต่ำจบชัดเจน (Falling Intonation ↘)** ทุกปลายประโยคทั้ง 3 ประโยค และเว้นหายใจ 0.5 วินาทีคั่นแต่ละประโยค จะทำให้เสียงฟังดูสุขุมและน่าเชื่อถือเหมือนผู้บริหาร',
        'ฝึกพูด 3 ประโยคตัวอย่างความยาวรวม ~60 คำให้จบภายใน 25 วินาทีอย่างชัดถ้อยชัดคำ',
      ],
      l1: [
        'สรุปบทความยาวๆ โดยยัดรายละเอียดทุกย่อหน้าลงไปจนกลายเป็น 8–10 ประโยค หรือแทรกประโยคเปิดแบบโรงเรียนว่า "I think this article is very interesting because..."',
        'คนไทยกลัวข้อมูลตกหล่นเลยพ่วงประโยคยาวเยิ่นเย้อ และคุ้นกับการเขียนความเห็นส่วนตัวปนในงานสรุป',
        'ท่องกรอบ 3 กล่อง: Box 1: ประเด็นหลักคืออะไร? | Box 2: ทำไมหรือเกิดขึ้นได้อย่างไร? | Box 3: ผลลัพธ์/ทางออกคืออะไร? — จบครบใน 3 ประโยค ห้ามใส่คำว่า "I think"',
      ],
      vocab: [
        [
          'third place',
          'พื้นที่สังคมที่สาม (นอกจากบ้านและที่ทำงาน)',
          '/θɜːd pleɪs/',
          'preserve neighborhood third places',
          'รักษาพื้นที่สังคมที่สามในชุมชนไว้',
        ],
        [
          'resilience',
          'ความยืดหยุ่นทางใจ / การฟื้นตัว',
          '/rɪˈzɪl.i.əns/',
          'strengthen mental resilience',
          'เสริมความแข็งแรงทางใจ',
        ],
        [
          'loneliness',
          'ความเหงา / ความโดดเดี่ยว',
          '/ˈləʊn.li.nəs/',
          'ease urban loneliness',
          'บรรเทาความเหงาในเมืองใหญ่',
        ],
        [
          'commercial',
          'เชิงพาณิชย์ / เพื่อค้าขาย',
          '/kəˈmɜː.ʃəl/',
          'free from commercial pressure',
          'ปราศจากแรงกดดันให้ต้องซื้อของ',
        ],
        [
          'spontaneous',
          'เป็นธรรมชาติไม่ได้นัดหมายล่วงหน้า',
          '/spɒnˈteɪ.ni.əs/',
          'spark spontaneous conversations',
          'จุดประกายบทสนทนาโดยบังเอิญ',
        ],
        [
          'fade away',
          'ค่อยๆ เลือนหายไป',
          '/feɪd əˈweɪ/',
          'let casual ties fade away',
          'ปล่อยให้ความสัมพันธ์สบายๆ จางหายไป',
        ],
        [
          'takeaway',
          'สาระสำคัญที่สรุปได้',
          '/ˈteɪk.ə.weɪ/',
          'distill a three-sentence takeaway',
          'กลั่นสาระสำคัญออกมาเป็นสามประโยค',
        ],
      ],
      examples: [
        [
          'Sentence 1: The essay argues that informal neighborhood spaces are essential for keeping adult friendships alive.',
          'ประโยค 1: บทความเสนอว่าพื้นที่ชุมชนแบบไม่เป็นทางการมีความจำเป็นอย่างยิ่งต่อการรักษามิตรภาพวัยผู้ใหญ่',
        ],
        [
          'Sentence 2: Without shared spots like libraries, spontaneous chats quickly fade away.',
          'ประโยค 2: หากไม่มีพื้นที่ส่วนกลางอย่างห้องสมุด บทสนทนาสบายๆ โดยบังเอิญก็จะเลือนหายไปอย่างรวดเร็ว',
        ],
        [
          'Sentence 3: Consequently, cities must protect accessible gathering spots to strengthen mental resilience.',
          'ประโยค 3: ดังนั้น เมืองต่างๆ จึงต้องปกป้องจุดรวมตัวที่เข้าถึงง่ายเพื่อเสริมสร้างความเข้มแข็งทางใจ',
        ],
        [
          'Keep summaries strictly objective—save personal reactions like "I loved this point" for the discussion afterward.',
          'รักษาบทสรุปให้เป็นกลางเสมอ และเก็บความรู้สึกส่วนตัวอย่าง "ฉันชอบประเด็นนี้มาก" ไว้พูดช่วงแลกเปลี่ยนหลังสรุปจบ',
        ],
      ],
      reading:
        'Sociologists have long noted that strong communities rely on "third places"—informal gathering spots separate from home and the workplace, such as corner cafés, neighborhood parks, and public libraries. Unlike scheduled calendar dinners that require weeks of planning, third places encourage spontaneous conversations with familiar faces over ordinary routines. When an adult greets the same dog walkers along a shaded park loop every evening, those light, low-pressure interactions quietly ease urban loneliness and build everyday trust. Yet in many modern cities, rising commercial rents and screen-centered lifestyles are squeezing these accessible corners out. Free benches are replaced by paid co-working lounges where lingering without buying feels awkward, while delivery apps reduce reasons to step outside at all. As casual ties fade away, making new friends after college becomes noticeably harder—turning social life into an exhausting project rather than a natural byproduct of daily life. Ultimately, urban planners warn that protecting affordable, welcoming third places is far more than a design luxury; it is a practical investment in public mental resilience and neighborly connection.',
      listenQ: 'How do third places differ from scheduled calendar dinners according to the passage?',
      listenA: 'They encourage spontaneous, low-pressure conversations during ordinary routines rather than requiring weeks of planning.',
      dictation: 'Cities must protect accessible spaces to strengthen mental resilience.',
      listenNote:
        'ลองกลั่นบทความเรื่อง Third Places ความยาว ~200 คำนี้ให้เหลือ 3 ประโยค: 1) นิยาม+ความสำคัญของ third places 2) อุปสรรคจากค่าเช่าแพงและหน้าจอที่ทำให้พื้นที่เหล่านี้หายไป 3) ข้อเตือนใจให้วางผังเมืองเพื่อรักษาพื้นที่สังคมนี้ไว้',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดเป็น "3-Sentence Takeaway" ที่ดีที่สุดสำหรับบทความเรื่อง Third Places (เป็นกลาง กระชับ ไม่ใส่ความเห็นส่วนตัว และครอบคลุมทั้งบริบท ปัญหา และทางออก)?',
          answer:
            'The passage highlights how informal community spaces like parks and libraries sustain adult friendships through spontaneous daily contact. However, high commercial rents and app-based convenience are steadily shrinking these low-pressure gathering spots. Protecting affordable public spaces is therefore essential for reducing loneliness and strengthening urban mental resilience.',
          choices: [
            'I really enjoyed reading about corner cafés and parks because my neighborhood needs more benches. Everyone uses delivery apps too much nowadays, which is very sad for young adults after college.',
            'The passage highlights how informal community spaces like parks and libraries sustain adult friendships through spontaneous daily contact. However, high commercial rents and app-based convenience are steadily shrinking these low-pressure gathering spots. Protecting affordable public spaces is therefore essential for reducing loneliness and strengthening urban mental resilience.',
            'Sociologists studied dog walkers in parks and discovered that scheduled calendar dinners take weeks of planning while co-working lounges charge high coffee prices for visitors.',
            'Urban planners want to ban delivery apps permanently because commercial rents are rising everywhere in modern cities.',
          ],
          explanation:
            'ข้อ 2 ครบ 3 ขั้น (Context/Claim → Problem/Mechanism → Implication) ใช้คำสรุปแบบ Paraphrase เป็นกลาง ไม่ใส่ "I enjoyed" และไม่ลอกรายละเอียดยิบย่อย',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขบทสรุปที่เผลอใส่ความเห็นส่วนตัวและใช้คำเชื่อมผิดไวยากรณ์ 2 จุด: "In my opinion, the article shows why free parks matter; despite rising rents push them out, protect them are crucial."',
          answer:
            'The article shows why free parks matter; although rising rents are pushing them out, protecting them is crucial.',
          explanation:
            '1) ตัด In my opinion ออกเพื่อให้สรุปเป็นกลางตามต้นฉบับ และเปลี่ยน despite + Clause เป็น although + Clause 2) ประธาน Gerund "protecting them" เป็นเอกพจน์ จึงใช้ is crucial',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำคุณศัพท์ที่แปลว่า "เกิดขึ้นเองตามธรรมชาติโดยไม่ได้วางแผนล่วงหน้า" (1 คำ): Public benches invite _____ chats among neighbors who might otherwise stay strangers.',
          answer: 'spontaneous',
          explanation:
            'spontaneous chats = การพูดคุยที่เกิดขึ้นเองตามธรรมชาติแบบไม่ต้องนัดล่วงหน้า',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษสำหรับประโยคจบของบทสรุป: "ดังนั้น การปกป้องพื้นที่ส่วนกลางที่เข้าถึงง่ายจึงเป็นการลงทุนที่คุ้มค่าเพื่อความเข้มแข็งทางใจของคนเมือง"',
          answer:
            'Therefore, protecting accessible public spaces is a worthwhile investment in urban mental resilience.',
          explanation:
            'ใช้ Therefore, + Gerund subject (protecting accessible public spaces) + is เพื่อปิดบทสรุปอย่างมีน้ำหนัก',
        },
      ],
      writing:
        'ฝึกเขียน **3-Sentence Summary** (ความยาวรวม 55–75 คำ) สรุปบทความเรื่อง "Urban Tree Canopy" จากเมื่อวาน (Day 215) หรือบทความที่คุณเพิ่งอ่าน โดยทำตามโครงสร้าง: ประโยค 1 (ประเด็นหลัก) → ประโยค 2 (หลักฐาน/อุปสรรค) → ประโยค 3 (สรุปทางออก)',
      writingSample:
        'Growing cities trap intense heat through concrete and asphalt, pushing residents toward energy-heavy cooling machines that warm streets further. Urban forestry research shows that continuous street tree canopies cool neighborhoods naturally, even though underground utilities and tight budgets slow planting down. Consequently, prioritizing living shade along pedestrian routes offers one of the most practical paths to comfortable, walkable cities.',
      writingNote:
        'นับจำนวนประโยค (ต้องได้ 3 ประโยคพอดี!) นับจำนวนคำ (เป้าหมาย 55–75 คำ) และเช็กว่าไม่มีประโยคไหนลอกคำต่อคำมาจากต้นฉบับ',
      speakingTopic:
        'Elevator Summary: เล่าสรุปบทความยาวให้จบคมใน 3 ประโยค (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ในรอบ 4 นาที: พูดสรุป 3 ประโยคแบบเป็นกลางก่อน แล้วค่อยต่อด้วยความเห็นส่วนตัว (Moving to my own view...)',
        'ในรอบ 3 และ 2 นาที: ฝึกตัดคำเกริ่นและย่อให้กระชับลงโดยยังรักษาแก่นครบ 3 ส่วน (Claim → Evidence/Tension → Takeaway)',
        'ปิดท้ายทุกประโยคด้วยเสียงลงต่ำ (Falling pitch) เพื่อแสดงความมั่นใจ',
      ],
    },
    {
      day: 217,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 31 — Critical Reading & Paraphrase + Dictogloss',
      objective:
        'ประเมินทักษะการอ่านเชิงวิพากษ์ครบวงจร: แยก Thesis vs Evidence, อ่าน Tone & Understatement, แยก Fact vs Bias, ถอดความ Paraphrase และสรุป 3 ประโยค + Dictogloss',
      explanation:
        'ครบสัปดาห์ที่ 31 แล้วครับ! สัปดาห์นี้คุณยกระดับจาก "ผู้อ่านที่แปลศัพท์ออก" เป็น **"ผู้อ่านที่รู้ทันผู้เขียน (Critical Reader)"**: **1) Thesis vs Evidence** ไม่หลงติดกับเรื่องเปิดตัวอย่าง **2) Author Tone** จับสัญญาณ *merely, supposedly, ironically* และเครื่องหมาย `"..."` **3) Fact vs Bias** ลอกคำชี้นำอารมณ์ออกเพื่อหาตัวเลขตรวจสอบได้ **4) Inference & Understatement** อ่านนัยยะของ *hardly ideal, modest, unhurried* **5) Paraphrase & 3-Sentence Summary** เปลี่ยนโครงสร้างใหม่โดยคงความหมายและเป็นกลาง 100% วันนี้มาทดสอบกับบทความวิเคราะห์เรื่อง "Screen-Free Weekends" และทำ Dictogloss กันครับ!',
      sound: {
        title: 'Week 31 Critical Reading & Paraphrasing Fluency',
        ipa: 'pragmatic /præɡˈmæt.ɪk/ · subtle /ˈsʌt.əl/ · exaggerate /ɪɡˈzædʒ.ə.reɪt/',
        connected_speech:
          'เช็กการเน้นเสียงคำเชื่อมเชิงวิพากษ์เวลาเล่าบทความต่อ: "WHILE the columnist concedes... | she remains SKEPtical of..." · "Put SIMply, | the REAL takeaway is..."',
        drill:
          'อ่านบทความทบทวนวันนี้ 1 รอบเพื่อจับ Tone และ Thesis จากนั้นฟังเสียงเพื่อทำ Dictogloss และสรุป 3 ประโยคปากเปล่า',
      },
      l1: [
        'จุดพลาดรวมสัปดาห์ 31: 1) จำแนก Anecdote ว่าเป็น Main Thesis 2) อ่านคำใน "..." แบบตรงตัว 3) สลับ imply (คนพูด/ข้อความแฝงนัย) กับ infer (คนอ่านอนุมาน) 4) ลอกโครงสร้างเดิมตอน Paraphrase 5) แทรก "I think" ในบทสรุปที่เป็นกลาง',
        'ความเร่งรีบทำให้เรากวาดตาหาคำคุ้นตาแล้วสรุปเอาเองก่อนอ่านคำเชื่อมอย่าง Yet, Ironically, หรือ While',
        'ใช้เช็กลิสต์ 4 ข้อกับทุกบทความที่อ่านในชีวิตจริง: What’s the main claim? | What’s the tone? | What’s verifiable fact vs opinion? | How would I say this in 3 original sentences?',
      ],
      vocab: [
        [
          'pragmatic',
          'เน้นปฏิบัติจริง / มองโลกตามความเป็นจริง',
          '/præɡˈmæt.ɪk/',
          'take a pragmatic approach',
          'ใช้วิธีที่เน้นปฏิบัติจริงได้ผล',
        ],
        [
          'exaggerate',
          'พูดเกินจริง',
          '/ɪɡˈzædʒ.ə.reɪt/',
          'exaggerate short-term benefits',
          'พูดเกินจริงถึงประโยชน์ระยะสั้น',
        ],
        [
          'subtle',
          'ละเอียดอ่อน / แนบเนียน',
          '/ˈsʌt.əl/',
          'spot a subtle shift in tone',
          'สังเกตการเปลี่ยนน้ำเสียงอย่างแนบเนียน',
        ],
        [
          'detox',
          'การงดพัก/ล้างพิษ (เช่น พักหน้าจอ)',
          '/ˈdiː.tɒks/',
          'promote a digital detox',
          'ส่งเสริมการพักหน้าจอดิจิทัล',
        ],
        [
          'privileged',
          'มีอภิสิทธิ์ / มีเงื่อนไขเอื้อกว่าคนทั่วไป',
          '/ˈprɪv.əl.ɪdʒd/',
          'assume a privileged schedule',
          'คิดเอาเองว่าทุกคนมีตารางที่ยืดหยุ่นเหมือนกัน',
        ],
        [
          'backfire',
          'ส่งผลย้อนกลับทางลบ',
          '/ˌbækˈfaɪər/',
          'strict rules often backfire',
          'กฎที่ตึงเกินไปมักได้ผลตรงข้าม',
        ],
        [
          'sustainability',
          'ความยั่งยืน',
          '/səˌsteɪ.nəˈbɪl.ə.ti/',
          'question long-term sustainability',
          'ตั้งคำถามถึงความยั่งยืนระยะยาว',
        ],
        [
          'nuance',
          'ความละเอียดอ่อนต่างระดับ',
          '/ˈnjuː.ɑːns/',
          'capture nuance in a summary',
          'เก็บรายละเอียดแง่มุมต่างระดับไว้ในบทสรุป',
        ],
      ],
      examples: [
        [
          'The columnist adopts a pragmatic rather than enthusiastic tone toward extreme weekend screen bans.',
          'คอลัมนิสต์เลือกใช้น้ำเสียงเชิงปฏิบัติมากกว่าจะตื่นเต้นคล้อยตามกระแสการห้ามใช้หน้าจอสุดโต่งในวันหยุด',
        ],
        [
          'We can infer that strict digital bans backfire when Monday routines remain overloaded.',
          'เราอนุมานได้ว่าการห้ามใช้มือถือแบบเคร่งครัดมักย้อนกลับมาส่งผลเสียเมื่อกิจวัตรวันจันทร์ยังคงอัดแน่นเหมือนเดิม',
        ],
        [
          'Rather than exaggerating either side, a strong summary preserves subtle nuance.',
          'แทนที่จะขยายความเกินจริงไปข้างใดข้างหนึ่ง บทสรุปที่ดีจะรักษาน้ำหนักและรายละเอียดแง่มุมอย่างพอเหมาะ',
        ],
        [
          'Put simply, sustainable rest depends on weekday boundaries more than dramatic weekend detoxes.',
          'พูดง่ายๆ ก็คือ การพักผ่อนที่ยั่งยืนขึ้นอยู่กับขอบเขตเวลาในวันทำงานมากกว่าการงดหน้าจอแบบหักดิบช่วงสุดสัปดาห์',
        ],
      ],
      reading:
        'Every few months, lifestyle blogs celebrate the latest "miracle" cure for digital fatigue: forty-eight-hour screen-free weekends. On the surface, locking your phone in a drawer from Friday night until Monday morning sounds refreshingly simple. Yet a closer, more pragmatic look suggests these dramatic weekend detoxes often exaggerate their lasting benefits. First, total disconnection frequently assumes a privileged schedule—ignoring workers who care for aging parents or coordinate weekend family errands via chat. Second, banning screens for two days does little to fix an overloaded weekday calendar. In fact, strict blackouts can quietly backfire: users spend Sunday night anxiously catching up on missed messages, erasing half the calm they gained on Saturday. That does not mean stepping away from feeds lacks value; rather, the article implies that chasing extreme weekend rules merely treats the symptom while leaving Monday habits untouched. Sustainable relief comes less from heroic two-day stunts than from modest daily boundaries—turning off work alerts after dinner, keeping phones off nightstands, and reclaiming quiet mornings throughout the entire week.',
      listenQ: 'Why might a strict forty-eight-hour screen-free weekend quietly backfire according to the article?',
      listenA: 'Because users often spend Sunday night anxiously catching up on missed messages, erasing Saturday’s calm.',
      dictation: 'Strict rules often backfire when weekday routines remain overloaded.',
      listenNote:
        'วิเคราะห์บทอ่านครบ 5 มิติ: Thesis (daily boundaries > weekend stunts), Tone (pragmatic + mildly skeptical of "miracle" detox), Inference (privileged schedule = not everyone can afford to vanish offline), Fact/Logic (Sunday catch-up anxiety), Paraphrase',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังเสียงจากบทอ่านแล้วเลือกประโยค Paraphrase/สรุปใจความที่ตรงกับท่อนจบของต้นฉบับมากที่สุด: "Sustainable relief comes less from heroic two-day stunts than from _____"',
          answer:
            'modest daily boundaries—turning off work alerts after dinner, keeping phones off nightstands, and reclaiming quiet mornings throughout the entire week.',
          choices: [
            'locking your phone permanently in a drawer while ignoring aging parents.',
            'modest daily boundaries—turning off work alerts after dinner, keeping phones off nightstands, and reclaiming quiet mornings throughout the entire week.',
            'heroic two-day stunts that magically cure every overloaded weekday calendar.',
            'buying expensive sleep gadgets that send more alerts on Monday mornings.',
          ],
          explanation:
            'ต้นฉบับปิดท้ายด้วยทางออกเชิงปฏิบัติอย่างยั่งยืน: "modest daily boundaries—turning off work alerts after dinner, keeping phones off nightstands, and reclaiming quiet mornings throughout the entire week."',
          audio_text:
            'Sustainable relief comes less from heroic two-day stunts than from modest daily boundaries—turning off work alerts after dinner, keeping phones off nightstands, and reclaiming quiet mornings throughout the entire week.',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยควิเคราะห์บทอ่านที่มีข้อผิด 3 จุด (imply/infer, ชนิดคำ, และโครงสร้าง): "The author infers that extreme detoxes fail, and we can imply from the phrase ‘miracle’ cure that her tone is pragmatic skeptical."',
          answer:
            'The author implies that extreme detoxes fail, and we can infer from the quotation marks around ‘miracle’ that her tone is pragmatic and skeptical.',
          explanation:
            '1) ผู้เขียนเป็นผู้สื่อเป็นนัย (implies) ส่วนผู้อ่านเป็นผู้ตีความอนุมาน (infer) 2) ระบุสัญญาณเครื่องหมายคำพูดรอบคำว่า miracle 3) เชื่อมคำคุณศัพท์สองตัวด้วย and (pragmatic and skeptical)',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใด Paraphrase ประโยคนี้ได้สะอาดและคงความหมาย 100% โดยไม่ลอกโครงสร้างเดิม: "Total disconnection frequently assumes a privileged schedule—ignoring workers who coordinate family care via chat."',
          answer:
            'Completely shutting off devices overlooks people with family responsibilities who rely on messaging and cannot easily step offline.',
          choices: [
            'Full disconnection always shows lazy workers who enjoy chatting on phones during weekends.',
            'Completely shutting off devices overlooks people with family responsibilities who rely on messaging and cannot easily step offline.',
            'Total disconnection often expects a lucky calendar—forgetting employees who arrange family care by chat.',
            'Everyone in modern cities should quit family chat groups every Friday evening.',
          ],
          explanation:
            'ข้อ 2 เปลี่ยนโครงสร้างและคำศัพท์อย่างเป็นธรรมชาติ (Completely shutting off devices / overlooks / rely on messaging) โดยรักษาแก่นความหมายครบถ้วน (ข้อ 3 เป็น patchwriting)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษสำหรับประโยคสรุปใจความ: "พูดสั้นๆ ก็คือ ความผ่อนคลายที่ยั่งยืนเกิดจากขอบเขตเล็กๆ ทุกวัน มากกว่าการหักดิบงดหน้าจอแค่ช่วงสุดสัปดาห์"',
          answer:
            'In short, sustainable relief comes from small daily boundaries rather than dramatic weekend screen bans.',
          explanation:
            'ใช้ In short, + sustainable relief + rather than เพื่อสรุปข้อเปรียบเทียบอย่างคมชัด',
        },
      ],
      writing:
        'เขียนงานส่งท้ายสัปดาห์ที่ 31 แบบ 2 ส่วนสั้นๆ: **ส่วนที่ 1 (3 ประโยค)** สรุปบทความ "Screen-Free Weekends" ด้านบนให้เป็นกลางด้วยคำของคุณเอง (55–75 คำ) **ส่วนที่ 2 (2 ประโยค)** วิเคราะห์ว่า Tone ของผู้เขียนคืออะไร พร้อมยกคำหรือเครื่องหมายจากบทความมาเป็นหลักฐาน 1 จุด',
      writingSample:
        '[3-Sentence Summary] The columnist questions the popularity of forty-eight-hour weekend digital detoxes, arguing that they offer less lasting relief than advertised. Strict two-day bans often overlook family caregivers and can trigger Sunday-night message anxiety without fixing busy weekday schedules. Consequently, establishing modest daily phone limits throughout the workweek offers a far more realistic way to rest. [Tone Analysis] The author’s tone is pragmatic and mildly skeptical rather than dismissive. Putting quotation marks around "miracle" and noting that strict rules "backfire" signals measured caution against extreme quick fixes.',
      writingNote:
        'ตรวจเช็ก 2 ส่วนแยกกันชัดเจน: ส่วนที่ 1 ห้ามมีความเห็นส่วนตัวและห้ามลอกประโยคเดิม; ส่วนที่ 2 ใช้ศัพท์วิเคราะห์ Tone อย่างถูกต้อง (pragmatic, skeptical, implies, quotation marks)',
      speakingTopic:
        'Review สัปดาห์ 31: วิพากษ์บทความ + สรุป 3 ประโยค + ถอดความสด (4 / 3 / 2 นาที)',
      speakingBullets: [
        'สรุปบทความ Screen-Free Weekends ให้จบภายใน 3 ประโยคแรกก่อนขยายความ',
        'วิเคราะห์ Tone & Inference: อธิบายว่าทำไมผู้เขียนใส่ "..." รอบคำว่า miracle และคำว่า backfire สื่ออะไร',
        'ปิดท้ายด้วยมุมมองของคุณเองโดยใช้วลีถอดความอย่าง Put simply... และคุมจังหวะเสียงลงท้ายประโยคให้นิ่งมั่นใจ',
      ],
    },
  ]
);
