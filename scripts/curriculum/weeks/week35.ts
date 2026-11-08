import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 5: ความแม่นยำระดับสูงและการต่อยอดใช้จริงตลอดชีวิต';

export const WEEK35: ModuleSeed = createModule(
  {
    week: 35,
    phase: 5,
    phase_title: PHASE_TITLE,
    cefr_level: 'C1',
    title: 'Real-World Capstone Projects: ลงสนามใช้งานจริง',
    summary:
      'รวมทุกทักษะสร้างผลงานภาษาอังกฤษจริงตลอดสัปดาห์ ตั้งแต่เขียน Storytelling Profile, วิเคราะห์ปัญหาเชิงสร้างสรรค์, บันทึกเสียง 4/3/2 และสื่อสารโต้ตอบสด',
    focus: 'Capstone Writing, Case Storytelling, Live Q&A & Public Speaking',
  },
  [
    {
      day: 239,
      title: 'Capstone 1: Writing Your Authentic Story & Personal Introduction Essay (250+ words)',
      objective:
        'เขียนเรียงความแนะนำตัวเชิงเล่าเรื่องความยาว 250+ คำอย่างมีเสน่ห์ด้วยเทคนิค Show, Don’t Tell แทนการเรียงประวัติแบบท่องจำ',
      explanation:
        'บททดสอบแรกของสัปดาห์ลงสนามจริงคือ **Personal Introduction Essay (250+ คำ)** สำหรับใช้แนะนำตัวบนพอร์ตโฟลิโอ สมัครงาน ทุน หรือโปรไฟล์นานาชาติ จุดพลาดคลาสสิกของคนไทยคือเขียนเป็นรายการประวัติแห้งๆ (*"My name is... I am diligent and friendly. My hobby is..."*) ซึ่งไม่สร้างความทรงจำเลย วิธีเขียนระดับ C1 ใช้โครง **4 จังหวะ (Narrative Arc)**: 1) **Hook (ภาพเปิดที่มีชีวิต)**: เปิดด้วยฉากจริงหรือคำถามที่สะท้อนตัวตน 2) **Turning Point (จุดเปลี่ยน)**: เหตุการณ์ที่หล่อหลอมวิธีคิดของคุณ 3) **Current Craft (สิ่งที่ทำอยู่ในปัจจุบัน)**: เล่าผ่านผลลัพธ์และนิสัยจริง (**Show, Don’t Tell** — แทนที่จะบอก *"I am responsible"* ให้เล่าว่า *"Every Sunday evening, I prepare checklists..."*) 4) **Horizon (ทิศทางข้างหน้า)**: สิ่งที่อยากสร้างต่อและคุณค่าที่คุณนำมาให้ผู้คนรอบตัว',
      sound: [
        'Reflective Storytelling Pacing & Open-Vowel Resonance',
        'authentic /ɔːˈθen.tɪk/ · trajectory /trəˈdʒek.tər.i/ · watershed /ˈwɔː.tə.ʃed/ · spark /spɑːk/',
        'เวลาอ่านเรียงความส่วนตัวออกเสียง เน้นเว้นจังหวะสั้นๆ หลังภาพเปิด ("At six a.m. in my grandmother’s kitchen, / curiosity always arrived before breakfast.") เพื่อดึงคนฟังเข้าฉาก',
        'อ่านย่อหน้าแรกของเรื่องตัวเองออกเสียง 2 รอบ เช็กว่าจังหวะประโยคสั้น-ยาวสลับกันลื่นหู ไม่ราบเรียบเป็นเส้นตรง',
      ],
      l1: [
        'เขียนแนะนำตัวแบบเรียงข้อเท็จจริงแห้งๆ ไล่ชื่อ อายุ จังหวัด และคำคุณศัพท์ลอยๆ ("I am hardworking, punctual, and love learning new things.")',
        'เคยชินกับรูปแบบเขียนเรียงความแนะนำตัวสมัยเรียนที่เน้นบอกคุณสมบัติแบบสรุปรวมมากกว่าเล่าเหตุการณ์พิสูจน์ตัวตน',
        'ใช้กฎ "ห้ามชมตัวเองลอยๆ — ให้ภาพเหตุการณ์พิสูจน์แทน!": แปลงทุกคำว่า diligent / creative / empathetic เป็นการกระทำจริง 1 ประโยคที่คนอ่านเห็นภาพตามได้ทันที',
      ],
      vocab: [
        ['trajectory', 'เส้นทางพัฒนาการ / ทิศทางชีวิต', '/trəˈdʒek.tər.i/', 'shape my career trajectory', 'หล่อหลอมเส้นทางอาชีพของฉัน'],
        ['formative', 'ที่เป็นรากฐานหล่อหลอมตัวตน', '/ˈfɔː.mə.tɪv/', 'a formative experience', 'ประสบการณ์ที่หล่อหลอมตัวตน'],
        ['spark', 'จุดประกายความสนใจ', '/spɑːk/', 'spark a lasting curiosity', 'จุดประกายความอยากรู้อยากเห็นที่ยั่งยืน'],
        ['gravitate toward', 'ถูกดึงดูดเข้าหา / มักเลือกไปทาง', '/ˈɡræv.ɪ.teɪt təˈwɔːd/', 'gravitate toward hands-on projects', 'มักถูกดึงดูดเข้าหางานลงมือทำจริง'],
        ['bridge', 'เชื่อมโยงเข้าด้วยกัน', '/brɪdʒ/', 'bridge practical craft and strategy', 'เชื่อมงานฝีมือเข้ากับการวางแผน'],
        ['craft', 'ทักษะงานที่ฝึกฝนจนชำนาญ', '/krɑːft/', 'refine my craft daily', 'ลับคมฝีมือในงานทุกวัน'],
        ['anchor', 'เป็นหลักยึดทางความคิด', '/ˈæŋ.kər/', 'anchor my decisions in empathy', 'ยึดการตัดสินใจไว้บนความเข้าใจผู้อื่น'],
      ],
      examples: [
        ['Instead of calling yourself adaptable, describe how you redesigned an outdoor event during a monsoon storm.', 'แทนที่จะบอกว่าตัวเองปรับตัวเก่ง จงเล่าว่าคุณออกแบบงานกลางแจ้งใหม่ยังไงตอนเจอพายุฝน'],
        ['Growing up behind a family repair counter sparked my lifelong curiosity about how ordinary tools work.', 'การเติบโตหลังเคาน์เตอร์ร้านซ่อมของครอบครัวจุดประกายความอยากรู้เรื่องกลไกของเครื่องมือรอบตัวมาตลอดชีวิต'],
        ['Over the past five years, I have steadily gravitated toward roles that bridge technical design and human stories.', 'ตลอดห้าปีที่ผ่านมา ฉันมักถูกดึงดูดเข้าหาบทบาทที่เชื่อมงานออกแบบทางเทคนิคเข้ากับเรื่องราวของผู้คน'],
        ['A single formative summer working in a rural clinic anchored my commitment to clear patient communication.', 'ฤดูร้อนหนึ่งที่ไปช่วยงานคลินิกต่างจังหวัดได้กลายเป็นหลักยึดความตั้งใจเรื่องการสื่อสารกับผู้ป่วยอย่างชัดเจน'],
      ],
      reading:
        'When reading personal introductions from skilled professionals, one pattern separates forgettable profiles from memorable essays: specificity. Anyone can write, "I am passionate about teamwork and eager to grow," yet such abstract slogans vanish from memory five seconds later. Authentic storytelling anchors abstract qualities in concrete scenes. Compare two openings. A generic writer begins, "I learned leadership in university clubs." An engaging storyteller writes, "During my sophomore year, forty volunteer umbrellas arrived broken two hours before an outdoor charity fair, leaving ten students staring at dark clouds." Instantly, the reader sees rain, feels urgency, and wonders what happened next. Notice also how strong C1 narratives connect past roots to present craft without bragging. Rather than listing every job title chronologically, trace one recurring thread—curiosity about broken systems, care for quiet voices, or love of translating complex ideas clearly. Close by looking forward with grounded optimism rather than empty promises. When concrete scenes carry your values, readers trust your voice before ever meeting you.',
      listenQ: 'What makes a concrete opening scene stronger than writing "I am passionate about teamwork"?',
      listenA: 'Concrete scenes let readers picture the situation, feel the urgency, and remember your qualities naturally without abstract slogans.',
      dictation: 'Authentic storytelling anchors abstract qualities in concrete human scenes.',
      listenNote:
        'ฟังเสียง stress คำหลายพยางค์ในบทอ่าน: spec-i-FI-ci-ty /ˌspes.ɪˈfɪs.ə.ti/ และ chro-no-LO-gi-cal-ly /ˌkrɒn.əˈlɒdʒ.ɪ.kəl.i/',
      drills: [
        {
          kind: 'choice',
          prompt: 'ประโยคเปิดใดใช้หลัก "Show, Don’t Tell" เพื่อสื่อว่าคุณเป็นคนแก้ปัญหาเฉพาะหน้าเก่งและใจเย็นได้ดีที่สุด?',
          answer: 'When our translation headset failed ten minutes before a cross-border workshop, I sketched three visual cue cards on napkins so both groups never lost the thread.',
          choices: [
            'I am a very calm, hardworking, and adaptable problem solver who always stays positive under pressure.',
            'When our translation headset failed ten minutes before a cross-border workshop, I sketched three visual cue cards on napkins so both groups never lost the thread.',
            'My name is Arthit and I graduated with good grades because I never give up easily.',
            'Everyone knows that adaptability is the most important skill in modern workplaces today.',
          ],
          explanation: 'การเล่าฉากจริงที่เกิดขึ้นภายใน 10 นาทีก่อนเวิร์กชอปแสดงให้เห็นความนิ่งและการแก้ปัญหาโดยไม่ต้องชมตัวเองลอยๆ',
        },
        {
          kind: 'error_fix',
          prompt: 'ปรับแก้ประโยคแนะนำตัวที่แปลตรงจากภาษาไทยและเวิ่นเว้อเกินไป: "Since I was a child, I very like to repair things, so I am gravitating to engineering works every day."',
          answer: 'Ever since childhood, I have loved fixing things, which naturally led me to gravitate toward hands-on engineering work.',
          explanation: '1) ไม่ใช้ very like (ใช้ really love / have loved) 2) work ในความหมายเนื้องานนับไม่ได้ไม่เติม s 3) gravitate toward (ไม่ใช่ to)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำกริยาให้ครบก้อนคำ: Watching my grandfather tune old wooden radios was a _____ experience that shaped my patience.',
          answer: 'formative',
          explanation: 'a formative experience = ประสบการณ์สำคัญที่ช่วยหล่อหลอมตัวตนและวิธีคิด',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษให้สละสลวย: "ตลอดสี่ปีที่ผ่านมา ฉันค้นพบตัวเองว่าชอบงานที่ช่วยเชื่อมข้อมูลซับซ้อนเข้ากับการตัดสินใจในชีวิตจริง"',
          answer: 'Over the past four years, I have found myself gravitating toward work that bridges complex data and real-world decisions.',
          explanation: 'ใช้ Present Perfect + gravitate toward + bridge A and B เพื่อความสละสลวยระดับ C1',
        },
      ],
      writing:
        'Capstone Project 1: เขียน Personal Introduction Essay ของตัวคุณเองความยาว **250+ คำ** วางโครง 4 ย่อหน้า: (1) Hook ด้วยฉากจริงในชีวิต (2) Formative Turning Point (3) Current Craft แบบ Show, Don’t Tell (4) Horizon ทิศทางที่คุณอยากสร้างต่อ',
      writingSample:
        'At six o’clock every weekday morning during my childhood in Nakhon Pathom, the rhythmic clack of my mother’s sewing machine woke our entire wooden house before any alarm clock ever rang. Sitting cross-legged beside spools of bright thread, I learned early that patient repair creates beauty far more reliably than rushing for shiny replacements. That quiet morning ritual became the invisible foundation behind everything I build today.\n\nAlthough I initially trained in graphic design in Bangkok, a formative turning point arrived during my third year when I volunteered to redesign medication labels for an elderly community clinic. Half the patients struggled not because they lacked memory, but because tiny instructions assumed twenty-year-old eyesight and fluent jargon. Spending three rainy weekends listening closely to grandmothers squint over pill packets shifted my entire trajectory. Never had design felt less like decoration and more like everyday respect.\n\nOver the past five years, my craft has anchored around simplifying messy systems—whether translating dense service agreements into visual guides or helping multilingual product teams stay on the same page. Rather than chasing flashy trends, I gravitate toward small improvements people feel immediately: a clearer form, a calmer onboarding screen, or a meeting agenda that ends on time. Colleagues often tease me for sketching flowcharts on café napkins, yet watching confusion vanish from someone’s face still gives me energy.\n\nLooking ahead, I hope to collaborate with cross-cultural teams building practical digital tools for Southeast Asian families. My aim stays simple: bring curious listening, steady hands, and clear language into every room I enter.',
      writingNote:
        'ตรวจนับจำนวนคำให้เกิน 250 คำ (ตัวอย่างด้านบนยาว ~270 คำ) และเช็กว่าไม่มีคำชมตัวเองลอยๆ อย่าง hardworking/diligent แต่ใช้เรื่องราวจริงเป็นตัวเล่าแทน',
      speakingTopic: 'เล่า Personal Introduction Story ของคุณแบบ 4/3/2 นาที (ห้ามอ่านโพย — เล่าเป็นฉากภาพ!)',
      speakingBullets: [
        'เปิด 20 วินาทีแรกด้วยภาพฉากจริงหรือความทรงจำสำคัญ ไม่ใช่พูดว่า "Hello, my name is... I live in..."',
        'เชื่อมจุดเปลี่ยนในอดีตเข้ากับทักษะปัจจุบัน และปิดด้วยทิศทางที่ตื่นเต้นในอนาคต',
      ],
    },
    {
      day: 240,
      title: 'Capstone 2: Analyzing a Real Problem & Presenting Actionable Solutions (Structured Briefing)',
      objective:
        'วิเคราะห์ปัญหาจริงอย่างเป็นระบบตามกรอบ SCQA (Situation → Complication → Root Cause → Actionable Solution) และนำเสนอข้อเสนอที่ลงมือทำได้จริง',
      explanation:
        'ในชีวิตทำงานและงานชุมชน เวลาเจอปัญหา (เช่น คนไข้รอนาน, ขยะล้นตลาด, ยอดคนดูคลิปตก, ทีมส่งงานช้า) คนทั่วไปมัก "บ่นอาการ" วนไปมา แต่ระดับ C1 ต้องสรุปเป็น **Structured Briefing** ภายใน 1 นาทีครึ่งด้วย 4 ส่วนชัดเจน: 1) **Situation & Complication** (ภาพปกติ vs จุดสะดุดที่เกิดขึ้นพร้อมตัวเลข/หลักฐานจริง) 2) **Root Cause** (รากเหง้า ไม่ใช่อาการผิวเผิน — ใช้ *stems from*, *largely driven by*) 3) **Trade-offs & Options** (ข้อดี-ข้อเสียของทางเลือก ใช้ *while Option A cuts costs, Option B preserves quality*) 4) **Actionable Next Steps** (ใคร ทำอะไร เมื่อไหร่ วัดผลยังไง — ใช้ *roll out a two-week pilot*, *measure drop-off daily*)',
      sound: [
        'Executive Briefing Cadence & Signposting Stress',
        'complication /ˌkɒm.plɪˈkeɪ.ʃən/ · bottleneck /ˈbɒt.əl.nek/ · feasible /ˈfiː.zə.bəl/ · trade-off /ˈtreɪd.ɒf/',
        'ฝึกเน้นคำป้ายบอกทาง (Signposts) ตอนเปลี่ยนช่วง: "**LOOKING** at the root cause...", "**IN TERMS** of trade-offs...", "**OUR** immediate next step is..."',
        'อ่านประโยคนำเสนอปัญหา 4 ท่อนโดยหยุด 0.5 วินาทีระหว่างท่อนให้ผู้ฟังแยกโครงสร้างออกทันทีโดยไม่ต้องดูสไลด์',
      ],
      l1: [
        'เล่าปัญหาแบบกระโดดไปกระโดดมาระหว่างอาการกับวิธีแก้ และลงท้ายคำแนะนำด้วยวลีกว้างๆ อย่าง "We should improve teamwork and try harder."',
        'ไม่ได้แยก "อาการ (Symptom)" ออกจาก "ต้นเหตุ (Root Cause)" และไม่คุ้นกับการระบุข้อจำกัดหรือ trade-offs อย่างตรงไปตรงมา',
        'บังคับตัวเองตอบ 3 คำถามให้ครบในทุกการเสนอแผน: 1) ต้นเหตุแท้จริงคืออะไร? (Root cause) 2) วิธีแก้มีราคาหรือข้อแลกเปลี่ยนอะไร? (Trade-off) 3) สัปดาห์หน้าเริ่มทดลองจุดเล็กที่สุดตรงไหน? (Pilot step)',
      ],
      vocab: [
        ['bottleneck', 'คอขวด / จุดติดขัดของกระบวนการ', '/ˈbɒt.əl.nek/', 'remove the approval bottleneck', 'ปลดล็อกคอขวดขั้นตอนอนุมัติ'],
        ['root cause', 'สาเหตุรากเหง้าที่แท้จริง', '/ruːt kɔːz/', 'address the root cause', 'แก้ที่ต้นเหตุแท้จริง'],
        ['trade-off', 'ข้อแลกเปลี่ยน (ได้สิ่งหนึ่งต้องแลกอีกสิ่ง)', '/ˈtreɪd.ɒf/', 'weigh the trade-offs carefully', 'ชั่งน้ำหนักข้อดีข้อเสียอย่างรอบคอบ'],
        ['feasible', 'เป็นไปได้จริงในทางปฏิบัติ', '/ˈfiː.zə.bəl/', 'a practical and feasible option', 'ทางเลือกที่ทำได้จริงในทางปฏิบัติ'],
        ['stem from', 'มีต้นตอมาจาก', '/stem frɒm/', 'stem from unclear handoffs', 'มีต้นตอจากการส่งต่องานที่ไม่ชัด'],
        ['roll out', 'เริ่มนำไปใช้งานจริง / เปิดตัวเป็นระยะ', '/rəʊl aʊt/', 'roll out a two-week trial', 'ทดลองใช้งานจริงระยะเวลาสองสัปดาห์'],
        ['measurable', 'วัดผลเป็นรูปธรรมได้', '/ˈmeʒ.ər.ə.bəl/', 'set a measurable target', 'ตั้งเป้าหมายที่วัดผลได้ชัด'],
      ],
      examples: [
        ['Late afternoon clinic queues stem less from doctor speed and more from a registration bottleneck at noon.', 'คิวคลินิกช่วงบ่ายที่ยาวไม่ได้เกิดจากความเร็วหมอเป็นหลัก แต่มาจากคอขวดจุดลงทะเบียนตอนเที่ยง'],
        ['We weighed the trade-offs between hiring extra weekend staff and shifting routine checkups to online pre-intake.', 'เราชั่งน้ำหนักข้อแลกเปลี่ยนระหว่างจ้างพนักงานเพิ่มวันหยุด กับการย้ายขั้นซักประวัติทั่วไปมาทำออนไลน์ล่วงหน้า'],
        ['Rather than rebuilding the whole curriculum overnight, let us roll out a feasible two-week pilot with fifteen learners.', 'แทนที่จะรื้อหลักสูตรใหม่ทั้งชุดในคืนเดียว เรามาลองปล่อยโครงการนำร่องสองสัปดาห์กับผู้เรียนสิบห้าคนก่อน'],
        ['Every recommendation in this briefing includes a clear owner, a Friday deadline, and one measurable outcome.', 'ทุกข้อเสนอในสรุปนี้ระบุผู้รับผิดชอบ เส้นตายวันศุกร์ และผลลัพธ์ที่วัดได้ชัดเจน'],
      ],
      reading:
        'Last quarter, a community co-working café in Ari noticed morning seating complaints rising sharply even though total daily visitors remained steady. Instead of guessing, the manager spent four days tracking arrival patterns before writing a two-minute briefing for her partners. She opened with the complication: between nine and ten-thirty a.m., single laptop guests occupied four-person booths, leaving small study groups standing near the entrance. Rather than blaming customers, her root-cause analysis showed the congestion stemmed from two silent design gaps: power outlets existed only along large booth walls, and small café tables lacked comfortable backrests. Next, she evaluated two options and named their trade-offs candidly. Installing strict two-hour time limits would free seats quickly, yet risk turning away loyal neighborhood regulars. Instead, adding power strips beneath eight two-seat wooden tables and reserving large booths for groups of three or more offered a warmer, feasible alternative. She proposed rolling out the change as a fourteen-day trial with one measurable goal: cut morning walk-aways in half without hurting customer satisfaction.',
      listenQ: 'What were the two physical design gaps causing morning seat congestion at the café?',
      listenA: 'Power outlets existed only along large booth walls, and small two-seat tables lacked comfortable backrests.',
      dictation: 'Let us address the root cause through a feasible two-week pilot.',
      listenNote:
        'สังเกตเสียงเชื่อมคำในคำนามประสม: "root_cause", "two-week pilot", และคำว่า "walk-aways" (/ˈwɔːk.ə.weɪz/) ซึ่งเน้นพยางค์แรก "WALK-aways"',
      drills: [
        {
          kind: 'choice',
          prompt: 'ข้อใดเขียนประโยคระบุ "Root Cause + Actionable Pilot" ในการวิเคราะห์ปัญหาได้คมชัดระดับผู้บริหาร?',
          answer: 'Missed afternoon deliveries stem primarily from unconfirmed address pins, so I propose rolling out a ten-second map confirmation step at checkout for two weeks.',
          choices: [
            'Deliveries are often late because drivers sometimes make mistakes, so everyone needs to be much more careful starting tomorrow.',
            'Missed afternoon deliveries stem primarily from unconfirmed address pins, so I propose rolling out a ten-second map confirmation step at checkout for two weeks.',
            'Our delivery problem is terrible and we should completely change everything immediately without checking trade-offs.',
            'Drivers are busy in the afternoon, which is very difficult to fix easily.',
          ],
          explanation: 'ชี้ต้นตอเฉพาะเจาะจง (stem from unconfirmed address pins) และเสนอทางแก้ที่ทำได้จริงพร้อมระยะทดสอบ (ten-second step / two weeks)',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่สลับบุพบทและคำศัพท์เพี้ยน: "These communication errors stem of unclear handoffs, and we must weight the trade-outs carefully."',
          answer: 'These communication errors stem from unclear handoffs, and we must weigh the trade-offs carefully.',
          explanation: 'ใช้ stem from (ไม่ใช่ stem of), กริยา weigh /weɪ/ (ไม่ใช่ weight ที่เป็นคำนาม), และ trade-offs (ไม่ใช่ trade-outs)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำศัพท์ให้ครบก้อนคำ: Requiring five signatures for small office supplies created an unnecessary _____ in the purchasing process.',
          answer: 'bottleneck',
          explanation: 'create a bottleneck = สร้างจุดติดขัด/คอขวดในกระบวนการทำงาน',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "แทนที่จะบังคับใช้กฎที่เข้มงวดทันที เรามาทดลองปรับใช้สองสัปดาห์เพื่อดูผลลัพธ์ที่วัดได้จริงกันก่อน"',
          answer: 'Rather than enforcing strict rules immediately, let us roll out a two-week trial to track measurable results first.',
          explanation: 'Rather than + V-ing + roll out a two-week trial + measurable results',
        },
      ],
      writing:
        'Capstone Project 2: เลือก 1 ปัญหาจริงจากที่ทำงาน บ้าน หรือชุมชนของคุณ (เช่น ที่จอดรถแออัด, การสื่อสารในแชทกลุ่มตกหล่น, คิวร้านอาหารช้า) แล้วเขียน **Structured Briefing (140–170 คำ)** ครบ 4 ส่วน: Situation & Complication → Root Cause → Trade-off ของทางเลือก → Actionable Pilot',
      writingSample:
        'Situation & Complication: Over the past month, weekly updates in our twelve-person project chat have grown chaotic. Important client changes frequently get buried beneath sixty casual messages, forcing teammates to ask the same questions twice.\n\nRoot Cause: This confusion stems less from carelessness and more from mixing quick social chatter with final decision logs inside a single scrolling channel.\n\nOptions & Trade-offs: Creating three separate chat apps might organize topics neatly, yet the trade-off is notification fatigue across too many tools. Keeping our main chat while adding a pinned Friday summary thread feels far more feasible.\n\nActionable Next Step: Starting Monday, let us roll out a two-week trial whereby each task lead posts one three-bullet update inside a dedicated decision thread by four p.m., targeting zero missed handoffs by week two.',
      writingNote:
        'เช็กดูว่างานเขียนมีครบ 4 หัวข้อและตอบโจทย์ได้จริงไหม โดยเฉพาะส่วน Trade-off (ยอมรับข้อเสียของอีกทางเลือกอย่างยุติธรรม) และเป้าหมายทดลองที่มีกำหนดเวลาชัด',
      speakingTopic: '2-Minute Problem Briefing Pitch: นำเสนอปัญหาจริง + ทางออกเป็นขั้นเป็นตอน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้กรอบ 4 จังหวะต่อเนื่องไม่หลงประเด็น: ปัญหาจริง → ต้นตอ (stems from...) → ข้อแลกเปลี่ยน (trade-off) → ก้าวแรกที่ทดลองได้พรุ่งนี้ (roll out...)',
        'ใช้เสียงเน้นตรงป้ายบอกทางให้ผู้ฟังตามโครงสร้างทันตั้งแต่รอบ 4 นาที จนกระชับคมที่สุดในรอบ 2 นาที!',
      ],
    },
    {
      day: 241,
      title: 'Capstone 3: Travel, Culture & Meaningful Conversations Across Borders',
      objective:
        'สนทนาแลกเปลี่ยนเรื่องวัฒนธรรม อาหาร และการเดินทางกับชาวต่างชาติให้ลึกซึ้งเกินระดับผิวเผิน ด้วยการเล่าวัฒนธรรมไทยแบบเห็นภาพและตั้งคำถามต่อยอดอย่างตั้งใจ',
      explanation:
        'เมื่อเดินทางหรือเจอเพื่อนต่างชาติ ผู้เรียนจำนวนมากติดอยู่แค่คำถาม 3 ข้อ (*Where are you from? / How long have you been in Thailand? / Do you like Thai food?*) แล้วบทสนทนาก็ตัน! ระดับ C1 เปลี่ยนจาก **"Small Talk แบบถามคำตอบคำ"** เป็น **"Meaningful Cross-Cultural Dialogue"** ด้วย 3 เทคนิค: 1) **ตั้งคำถามปลายเปิดที่ชวนเล่าเรื่อง**: แทน *Do you like Bangkok?* → **`What surprised you most about daily life here compared to home?`** 2) **อธิบายวัฒนธรรมไทยโดยเทียบประสบการณ์สากล (Don’t just name it—paint the texture!)**: แทนที่จะพูดแค่ *"This is Som Tum"* ให้บอกที่มาและรสสัมผัส เช่น **`It’s a bright, crunchy green-papaya salad pounded fresh with lime, chili, and fermented fish sauce—spicy and refreshing at the same time.`** 3) **สร้างสะพานเชื่อมฟังต่อ (Conversational Hooks)**: ใช้ **`Wait—that reminds me of...`**, **`How do people back home usually handle that?`**, **`I never thought about it from that angle!`**',
      sound: [
        'Warm Rising-Falling Curiosity Intonation in Questions',
        'fermented /fəˈmen.tɪd/ · hospitality /ˌhɒs.pɪˈtæl.ə.ti/ · intriguing /ɪnˈtriː.ɡɪŋ/ · unspoken /ʌnˈspəʊ.kən/',
        'ฟังทำนองคำถามเปิดใจ: "What sur-**PRISED** you most about..." (เสียงขึ้นอุ่นๆ ไม่แข็งเหมือนสอบสวนตำรวจ) และเชื่อมคำ "Wait—that re-**MINDS** me_of..."',
        'ซ้อม 3 ประโยคเชื่อมบทสนทนาให้เป็นธรรมชาติราวกับนั่งคุยที่โต๊ะอาหาร: Wait—that reminds me of... / What surprised you most was... / Back home, we usually...',
      ],
      l1: [
        'ถามคำถามปิดที่ตอบได้แค่ Yes/No ("You like Thailand?" / "Spicy okay?") หรือแปลชื่อเมนู/ประเพณีไทยแบบเดาคำศัพท์จนคนฟังนึกภาพไม่ออก ("Krengjai is scared heart")',
        'กลัวพูดผิดเลยยิงคำถามสั้นๆ ตามตำรา A1 และพยายามแปลคำไทยลึกซึ้งตรงตามตัวอักษรแทนการอธิบายภาพและสถานการณ์',
        'อธิบายคำไทยเฉพาะถิ่น (เช่น *เกรงใจ*, *น้ำพริก*, *สงกรานต์*) ด้วยสูตร 2 ชั้น: **1) ให้คำเทียบใกล้เคียง + 2) เล่าสถานการณ์ตัวอย่าง 1 ประโยค** เช่น *Kreng-jai is a thoughtful reluctance to burden someone else—for instance, refusing the last piece of mango even when you want it!*',
      ],
      vocab: [
        ['reluctance', 'ความลังเลใจ / ความไม่เต็มใจรบกวน', '/rɪˈlʌk.təns/', 'a thoughtful reluctance to impose', 'ความเกรงใจไม่อยากรบกวนผู้อื่น'],
        ['hospitality', 'น้ำใจไมตรีและการต้อนรับ', '/ˌhɒs.pɪˈtæl.ə.ti/', 'everyday neighborhood hospitality', 'ไมตรีจิตแบบเพื่อนบ้านในชีวิตประจำวัน'],
        ['ritual', 'ธรรมเนียมปฏิบัติประจำวัน/เทศกาล', '/ˈrɪtʃ.u.əl/', 'a cherished morning ritual', 'กิจวัตร/ธรรมเนียมยามเช้าอันแสนอบอุ่น'],
        ['aroma', 'กลิ่นหอมเฉพาะตัว (อาหาร/กาแฟ)', '/əˈrəʊ.mə/', 'savory toasted aroma', 'กลิ่นหอมคั่วกลมกล่อม'],
        ['spark a connection', 'จุดประกายความเชื่อมโยงระหว่างกัน', '/spɑːk ə kəˈnek.ʃən/', 'spark an instant connection', 'สร้างความเชื่อมโยงทันที'],
        ['intrigued', 'สนใจใคร่รู้ ทึ่งในรายละเอียด', '/ɪnˈtriːɡd/', 'genuinely intrigued by the custom', 'ทึ่งและสนใจในธรรมเนียมนั้นจริงๆ'],
        ['common ground', 'จุดร่วมที่คุยกันเข้าใจ', '/ˌkɒm.ən ˈɡraʊnd/', 'discover unexpected common ground', 'ค้นพบจุดร่วมที่คาดไม่ถึง'],
      ],
      examples: [
        ['What struck you most about street food culture here compared with evening markets back in your hometown?', 'อะไรทำให้คุณประทับใจหรือแปลกใจที่สุดเกี่ยวกับสตรีทฟู้ดที่นี่เทียบกับตลาดเย็นที่บ้านเกิดคุณ?'],
        ['In Thai culture, "kreng-jai" reflects a thoughtful reluctance to impose on someone else’s comfort or time.', 'ในวัฒนธรรมไทย คำว่า "เกรงใจ" สะท้อนความละเอียดอ่อนที่ไม่อยากไปรบกวนเวลาหรือความสบายใจของอีกฝ่าย'],
        ['Wait—that family Sunday soup ritual actually reminds me of how my grandmother simmers herbal broth back in Lampang.', 'เดี๋ยวนะ ธรรมเนียมต้มซุปวันอาทิตย์ของครอบครัวคุณทำให้ฉันนึกถึงวิธีที่คุณยายฉันเคี่ยวน้ำซุปสมุนไพรที่ลำปางเลย!'],
        ['Sharing stories about childhood kitchen aromas almost always uncovers common ground across vastly different countries.', 'การเล่าเรื่องกลิ่นอาหารในครัวตอนเด็กแทบจะช่วยเผยให้เห็นจุดร่วมข้ามประเทศที่ต่างกันสุดขั้วได้เสมอ'],
      ],
      reading:
        'Meaningful travel rarely comes from checking off famous landmarks; it usually happens over unexpected conversations at train platforms, guesthouse tables, or neighborhood bakeries. Last spring, while riding a ferry across Lake Como, I struck up a conversation with an elderly Italian carpenter named Marco. Instead of sticking to stiff polite questions like "Is it cold here?", I noticed his flour-dusted apron bag and asked what small local food tradition travelers almost always miss. Marco’s eyes lit up immediately. For twenty minutes, he explained how mountain villages still share communal stone ovens on weekends—and asked how northern Thai families gather around sticky rice baskets at harvest time. When I described dipping warm sticky rice into smoky roasted chili paste while sharing stories on woven mats, Marco smiled and said it echoed his own grandfather’s table in Lombardy. Even when we explored subtle concepts like "kreng-jai," explaining it through concrete dinner-table examples sparked an instant connection rather than blank stares. Great cross-cultural dialogue relies less on textbook vocabulary and far more on generous listening, vivid sensory detail, and genuine curiosity about how another person experiences ordinary life.',
      listenQ: 'What simple question did the speaker ask Marco that sparked a twenty-minute conversation?',
      listenA: 'He asked what small local food tradition travelers almost always miss.',
      dictation: 'Genuine curiosity and sensory details turn small talk into lasting connection.',
      listenNote:
        'สังเกตเสียงในคำว่า "flour-dusted" (flour ออกเสียงพยางค์เดียวหรือสองพยางค์เบา /ˈflaʊ.ər/) และคำว่า "struck up a conversation" เชื่อมเสียง "struck_up_a" เป็นจังหวะต่อเนื่อง',
      drills: [
        {
          kind: 'choice',
          prompt: 'คุณอยากชวนเพื่อนต่างชาติที่เพิ่งเจอกันในโฮสเทลคุยต่อให้ลึกซึ้งกว่าคำถาม "Do you like Thai food?" ข้อใดเป็นคำถามปลายเปิดที่ชวนเล่าเรื่องที่สุด?',
          answer: 'Which local dish here caught you completely by surprise—in either a wonderful or unexpected way?',
          choices: [
            'Do you like spicy Thai food yes or no?',
            'Which local dish here caught you completely by surprise—in either a wonderful or unexpected way?',
            'How many days did you stay in Thailand until today?',
            'Have you ever eaten pad thai at Khao San Road?',
          ],
          explanation: 'คำถามนี้เปิดพื้นที่ให้อีกฝ่ายเล่าความทรงจำและรสชาติที่เจอจริง ไม่ใช่แค่ตอบ "Yes, delicious!" แล้วบทสนทนาจบ',
        },
        {
          kind: 'choice',
          prompt: 'เพื่อนชาวแคนาดาถามว่า "Kreng-jai" แปลว่าอะไร ข้อใดอธิบายให้คนต่างชาติเข้าใจภาพและความรู้สึกได้ลึกซึ้งและแม่นยำที่สุด?',
          answer: 'It’s a thoughtful reluctance to burden others—for example, insisting you’re fine carrying heavy bags so a friend doesn’t go out of their way.',
          choices: [
            'It means Thai people are afraid and shy to speak the truth.',
            'It’s a thoughtful reluctance to burden others—for example, insisting you’re fine carrying heavy bags so a friend doesn’t go out of their way.',
            'It is exactly the same word as "thank you" in formal English.',
            'It translates literally as "scared heart," which means feeling nervous in public.',
          ],
          explanation: 'การอธิบายความหมาย + ยกตัวอย่างสถานการณ์จริง (เช่น เกรงใจไม่ให้เพื่อนต้องลำบาก) ช่วยให้ต่างชาติเข้าใจเจตนาดีของคำนี้ถูกต้อง',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในก้อนคำ: Despite growing up ten thousand miles apart, we quickly found _____ ground over our grandmothers’ cooking tips.',
          answer: 'common',
          explanation: 'find common ground = ค้นพบจุดร่วมที่เข้าใจตรงกันหรือสนใจเหมือนกัน',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษแบบเล่ากลิ่นรสให้เห็นภาพ: "ข้าวเหนียวมะม่วงจับคู่ความหวานหอมของมะม่วงสุกเข้ากับกะทิอุ่นๆ เค็มมันได้อย่างลงตัว"',
          answer: 'Mango sticky rice pairs the fragrant sweetness of ripe mango with warm, lightly salted coconut cream.',
          explanation: 'ใช้กริยา pair A with B และคำขยายประสาทสัมผัส (fragrant, ripe, warm, lightly salted)',
        },
      ],
      writing:
        'Capstone Project 3: เขียนบทนำเสนอ 1 วัฒนธรรม อาหาร หรือธรรมเนียมไทยที่คุณรักให้เพื่อนต่างชาติฟัง (140–170 คำ) โดยห้ามแปลชื่อตรงตัวแห้งๆ ให้บรรยาย "ภาพ เสียง กลิ่น รส หรือความรู้สึกทางสังคม" พร้อมทิ้งคำถามปลายเปิดท้ายเรื่อง 1 ข้อเพื่อชวนเขาเล่าฝั่งบ้านเขาบ้าง',
      writingSample:
        'If you ever wander past a neighborhood Thai fresh market around six in the morning, follow the smell of toasted garlic and simmering ginger broth to a street-side jok stall. Jok is velvety jasmine rice porridge slow-cooked until every grain softens into warm comfort, topped with minced pork, crisp fried shallots, and a soft-boiled egg dropped straight into the bowl. Yet what makes jok special goes far beyond texture. For many Thai families, picking up warm bags of rice porridge before work is a quiet ritual of morning care—parents grabbing an extra portion for sleepy teenagers or elderly neighbors. It is gentle, restorative, and unhurried in a city that moves fast. What morning comfort food back in your hometown carries that same feeling of home before the day even begins?',
      writingNote:
        'สังเกตการบรรยายประสาทสัมผัส (velvety, toasted garlic, crisp fried shallots) และการเชื่อมโยงคุณค่าทางใจก่อนปิดด้วยคำถามปลายเปิดที่อบอุ่น',
      speakingTopic: 'แนะนำอาหารหรือธรรมเนียมไทย 1 อย่างให้เพื่อนต่างชาติ + โต้ตอบจุดร่วม (4 / 3 / 2 นาที)',
      speakingBullets: [
        'อธิบายแบบเห็นภาพและรสสัมผัส โดยเปรียบเทียบให้คนต่างชาตินึกออกแม้ไม่เคยมาเมืองไทย',
        'แทรกจังหวะถามกลับ (conversational hook) เช่น "What about back home—do you have something similar?"',
      ],
    },
    {
      day: 242,
      title: 'Capstone 4: Explaining Your Craft, Hobby or Work to Anyone Clearly (Jargon-Free Clarity)',
      objective:
        'อธิบายงาน อาชีพ หรือสิ่งที่เชี่ยวชาญเฉพาะทางให้คนนอกวงการเข้าใจภายใน 90 วินาที ด้วยการเทียบอุปมา (Analogies) และตัดศัพท์เทคนิคเกินจำเป็น',
      explanation:
        'บททดสอบความเข้าใจจริงข้อสำคัญที่สุด (Feynman Technique): **ถ้าคุณอธิบายงานตัวเองให้ญาติผู้ใหญ่หรือเพื่อนต่างสายงานเข้าใจง่ายๆ ไม่ได้ แปลว่าภาษายังไม่หลุดจากศัพท์เฉพาะ!** คนไทยที่เก่งเฉพาะทางมักเผลอรัวศัพท์เทคนิค (*API latency, KPI alignment, glycemic index, cashflow amortization*) โดยลืมว่ารายละเอียดพวกนั้นปิดประตูความเข้าใจของคนฟัง วิธีพูดระดับ C1 ใช้สูตร **3 ขั้น (What → Why It Matters → Everyday Analogy)**: 1) **นิยาม 1 ประโยคเรียบง่าย** (*In plain terms, what I actually do is...*) 2) **ใช้คำเปรียบเทียบที่คนทั่วไปรู้จัก** (*Think of it like acting as a bridge between...* / *It’s a bit like organizing a busy restaurant kitchen so...*) 3) **บอกผลลัพธ์ต่อชีวิตจริง** (*So at the end of the day, patients/users don’t have to...*)',
      sound: [
        'Analogy Pitching & Pausing Before Technical Terms',
        'jargon /ˈdʒɑː.ɡən/ · analogy /əˈnæl.ə.dʒi/ · in plain terms /ɪn pleɪn tɜːmz/ · behind the scenes /bɪˈhaɪnd ðə siːnz/',
        'เวลาพูดวลีเปิดการเปรียบเทียบอย่าง "Think of it like..." หรือ "In plain terms," ให้หยุดจังหวะครึ่งวินาทีหลังคำเชื่อมเพื่อดึงความสนใจผู้ฟังก่อนปล่อยภาพเปรียบเทียบ',
        'ฝึกพูดนิยามงาน/งานอดิเรกของคุณใน 1 ประโยคสั้นที่สุดโดยห้ามมีศัพท์เทคนิคแม้แต่คำเดียว!',
      ],
      l1: [
        'พูดทับศัพท์อังกฤษยาวๆ เพื่ออธิบายงาน ("I do B2B omnichannel CRM optimization and stakeholder KPI tracking.") จนคนฟังได้แต่พยักหน้าเกรงใจแต่ไม่เข้าใจเลย',
        'ชินกับการคุยกับคนในสายอาชีพเดียวกัน เลยลืมถอดรหัสคำย่อและศัพท์เฉพาะให้เป็นภาษาคนทั่วไป',
        'ใช้กฎ "แม่ยาย/หลานวัย 12 ปี": ก่อนอธิบายงานหรือความถนัด ถามตัวเองว่าประโยคนี้คนอายุ 12 ฟังแล้วเห็นภาพเป็นอาชีพหรือกิจกรรมอะไร? ใช้กริยาธรรมดา + "Think of it like..." นำทางเสมอ',
      ],
      vocab: [
        ['in plain terms', 'พูดให้เข้าใจง่ายๆ แบบตรงไปตรงมา', '/ɪn pleɪn tɜːmz/', 'put it in plain terms', 'อธิบายด้วยภาษาง่ายๆ ตรงประเด็น'],
        ['analogy', 'คำเปรียบเทียบให้เห็นภาพ', '/əˈnæl.ə.dʒi/', 'draw a helpful analogy', 'ยกคำเปรียบเทียบที่ช่วยให้เข้าใจง่าย'],
        ['demystify', 'คลี่คลายเรื่องยากให้เข้าใจง่าย', '/ˌdiːˈmɪs.tɪ.faɪ/', 'demystify complex medical steps', 'คลี่คลายขั้นตอนการแพทย์ที่ซับซ้อนให้เข้าใจง่าย'],
        ['behind the scenes', 'เบื้องหลังการทำงาน', '/bɪˈhaɪnd ðə siːnz/', 'handle logistics behind the scenes', 'ดูแลงานจัดการเบื้องหลัง'],
        ['puzzle piece', 'ชิ้นส่วนประกอบที่เชื่อมเข้ากัน', '/ˈpʌz.əl piːs/', 'fit the puzzle pieces together', 'ต่อชิ้นส่วนต่างๆ เข้าด้วยกัน'],
        ['overcomplicate', 'ทำให้ซับซ้อนเกินความจำเป็น', '/ˌəʊ.vəˈkɒm.plɪ.keɪt/', 'avoid overcomplicating the explanation', 'เลี่ยงการอธิบายให้ซับซ้อนเกินจำเป็น'],
        ['end result', 'ผลลัพธ์สุดท้ายที่จับต้องได้', '/end rɪˈzʌlt/', 'focus on the end result for people', 'โฟกัสที่ผลลัพธ์ปลายทางต่อผู้คน'],
      ],
      examples: [
        ['In plain terms, a user-experience researcher tests whether a new app makes real people smile or feel stuck.', 'อธิบายง่ายๆ งานนักวิจัย UX คือการทดสอบว่าแอปใหม่ทำให้คนใช้จริงยิ้มออกหรือติดขัดตรงไหน'],
        ['Think of supply-chain planning like orchestrating ingredients for a wedding banquet so fresh herbs never arrive after dessert.', 'ลองนึกภาพงานวางแผนซัพพลายเชนเหมือนการจัดการวัตถุดิบงานเลี้ยงใหญ่ เพื่อไม่ให้ผักสดมาถึงหลังเสิร์ฟของหวานแล้ว'],
        ['Good teachers demystify intimidating science by anchoring every concept in kitchen experiments.', 'ครูที่ดีจะคลี่คลายวิทยาศาสตร์ที่ดูน่ากลัวให้เข้าใจง่ายด้วยการผูกทุกแนวคิดเข้ากับการทดลองในครัว'],
        ['Skipping buzzwords helps clients see the end result clearly rather than nodding politely in confusion.', 'การละเว้นศัพท์หรูช่วยให้ลูกค้าเห็นผลลัพธ์สุดท้ายชัดเจน แทนที่จะพยักหน้าตามมารยาททั้งที่ยังงงอยู่'],
      ],
      reading:
        'Have you ever asked someone at a dinner party what they do for a living, only to hear twenty seconds of mysterious acronyms? Overcomplicating an explanation rarely makes a speaker sound smarter; instead, it builds an invisible wall between speaker and listener. Contrast how two software engineers answered the same dinner question last month. The first engineer sighed, "I build microservices pipelines handling asynchronous event queues." His tablemates smiled politely and quietly changed the subject to traffic. Ten minutes later, another engineer offered a completely different answer: "In plain terms, I build invisible traffic lights inside banking apps. When thousands of people tap transfer at lunchtime, my code keeps payments flowing into separate lanes so nothing crashes." Within five seconds, everyone around the table understood both the challenge and why the work mattered. Drawing an everyday analogy—a busy kitchen, traffic lanes, or tuning a guitar—demystifies specialized craft without watering down your real skill. Whether your passion is nursing, sourdough baking, accounting, or woodworking, true expertise shines brightest when anyone across the table can nod and genuinely understand.',
      listenQ: 'What everyday analogy did the second software engineer use to explain her work?',
      listenA: 'She compared her code to invisible traffic lights inside banking apps that keep payments flowing into separate lanes.',
      dictation: 'Everyday analogies demystify specialized craft without losing accuracy.',
      listenNote:
        'สังเกตการเน้นเสียงในประโยคเทียบภาพ: "Think of it LIKE..." และ "asynchronous" (/eɪˈsɪŋ.krə.nəs/) ซึ่งเป็นตัวอย่างศัพท์เทคนิคที่บทอ่านชี้ให้เห็นว่าทำให้คนฟังนอกวงการตามไม่ทัน',
      drills: [
        {
          kind: 'choice',
          prompt: 'นักกายภาพบำบัดต้องการอธิบายงานให้คุณป้าชาวต่างชาติที่เพิ่งเจอกันเข้าใจง่ายๆ ข้อใดใช้เทคนิค Jargon-Free Analogy ได้ดีที่สุด?',
          answer: 'In plain terms, I help people retrain stiff joints and muscles after injuries—a bit like gently teaching a rusted hinge how to swing smoothly again.',
          choices: [
            'I perform neuromuscular musculoskeletal rehabilitation protocols focusing on proprioceptive kinetic chains.',
            'In plain terms, I help people retrain stiff joints and muscles after injuries—a bit like gently teaching a rusted hinge how to swing smoothly again.',
            'I work at a hospital doing very important medical things every day with doctors.',
            'My profession involves therapeutic biomechanical intervention for orthopedic recovery.',
          ],
          explanation: 'ใช้ภาษาง่าย (retrain stiff joints) + อุปมาที่ทุกคนเห็นภาพ (like teaching a rusted hinge to swing smoothly)',
        },
        {
          kind: 'error_fix',
          prompt: 'ปรับประโยคที่ติดศัพท์เฉพาะและใช้คำเชื่อมผิดให้ชัดเจนขึ้น: "On plain term, my hobby of sourdough baking is like chemistry, whereby yeasts eat flour to grow."',
          answer: 'In plain terms, my hobby of sourdough baking is like gentle kitchen chemistry, where wild yeast slowly turns flour and water into airy bread.',
          explanation: 'ใช้วลีมาตรฐาน In plain terms (ไม่ใช่ On plain term) และบรรยายผลลัพธ์ที่คนทั่วไปนึกภาพออก (airy bread)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบก้อนคำ: Drawing a clear everyday _____ helps non-experts grasp complex ideas within seconds.',
          answer: 'analogy',
          explanation: 'draw an analogy = ยกตัวอย่างเปรียบเทียบให้เห็นภาพ',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยไม่ใช้ศัพท์ยาก: "เบื้องหลังงานของฉัน คือการทำให้ขั้นตอนที่ซับซ้อนกลายเป็นประสบการณ์ที่ลื่นไหลสำหรับผู้ป่วยทุกคน"',
          answer: 'Behind the scenes, my job is turning complicated steps into a smooth experience for every patient.',
          explanation: 'ใช้ Behind the scenes + turning complicated steps into a smooth experience',
        },
      ],
      writing:
        'Capstone Project 4: เลือก "งานของคุณ" หรือ "งานอดิเรก/ความถนัดที่คุณหลงใหล" 1 อย่าง แล้วเขียนคำอธิบายความยาว 130–160 คำ สำหรับคนนอกวงการอ่าน 100% (ห้ามใส่คำย่อหรือศัพท์เทคนิคที่ไม่อธิบาย!) โดยใช้สูตร: In plain terms → Everyday analogy (Think of it like...) → End result for real people',
      writingSample:
        'When friends ask what a data analyst at a small retail shop actually does all day, I skip terms like regression models and start with a familiar picture. In plain terms, I act like a weather forecaster for store shelves. Think of it like watching past rainy seasons before stocking umbrellas: by studying last year’s receipts alongside local school holidays, I help shop owners spot quiet patterns early. Instead of guessing how many boxes of cold brew or sunscreen to order each Friday, the team adjusts stock calmly before shelves run empty or spoil. Behind the scenes, there is plenty of spreadsheet cleanup, yet the end result is simple—neighborhood customers find what they need right when they walk in, and small owners waste far less money on unsold goods.',
      writingNote:
        'อ่านทวนอีกครั้งแล้วขีดเส้นใต้หากเผลอหลุดคำเฉพาะวงการออกมา ถ้ามี ให้เปลี่ยนเป็นกริยาธรรมดาหรืออธิบายด้วยภาพทันที!',
      speakingTopic: '90-Second Elevator Craft Explanation: อธิบายงานหรือสิ่งที่คุณรักให้ทุกคนในห้องเข้าใจและยิ้มตาม (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เริ่มต้นด้วย "In plain terms..." แล้วต่อด้วยภาพเปรียบเทียบ "Think of it like..." ที่คนอายุเท่าไหร่ก็นึกออก',
        'ปิดด้วยผลลัพธ์ปลายทางที่เกิดขึ้นกับชีวิตคนจริงๆ (The end result is...)',
      ],
    },
    {
      day: 243,
      title: 'Capstone 5: Active Editing Workshop — จับจุดผิดระดับ C1 ของตัวเอง (Precision, Collocation, Flow & Articles)',
      objective:
        'ตรวจแก้และขัดเกลางานเขียนภาษาอังกฤษของตัวเองผ่านระบบ 4 รอบ (4-Pass Edit) เพื่อกำจัดร่องรอยภาษาแปลไทยและอัปเกรด Collocations & Articles ให้เนียนแบบ C1',
      explanation:
        'แม้แต่นักเขียนเจ้าของภาษาก็ไม่ได้เขียนดีตั้งแต่ร่างแรก — พวกเขาเก่งที่ **"การตรวจแก้ (Editing)"**! คนไทยที่เรียนถึงระดับสูงมักยังมี "รอยรั่ว 4 จุดสุดท้าย" ที่ทำให้คนอ่านรู้ว่าแปลมาจากภาษาไทย เราจึงใช้ **4-Pass Active Editing System**: **Pass 1 — Flow & Double Connectors**: ตัดลูกคู่ซ้ำซ้อนอย่าง *Although... but*, *Because... so*, และการขึ้นต้นซ้ำๆ **Pass 2 — Collocation Precision**: เปลี่ยนคู่คำเพี้ยน เช่น *do progress* → **`make progress`**, *solve a challenge* → **`address / overcome a challenge`**, *big effect* → **`profound / lasting impact`** **Pass 3 — Article Subtlety (`a/an/the/Ø`)**: เช็กนามนามธรรมและนามทั่วไป! เช่น **"ความสำคัญของการสื่อสาร"** (พูดทั่วไป ไม่ใส่ `the` → `Communication builds trust.` ไม่ใช่ ❌ *The communication*), แต่ **"การสื่อสารในทีมของเรา"** (ชี้เฉพาะ → **`The communication within our clinic...`**) **Pass 4 — Comma Splices**: ห้ามเชื่อมสองประโยคสมบูรณ์ด้วยลูกน้ำ `,` เฉยๆ (❌ *I checked the draft, it looked fine.*) ให้ใช้ `;` หรือ `, so/and` หรือแยกเป็นสองประโยค!',
      sound: [
        'Reading Aloud to Catch Rhythm Stumbles & Comma Splices',
        'collocation /ˌkɒl.əˈkeɪ.ʃən/ · redundancy /rɪˈdʌn.dən.si/ · subtle /ˈsʌt.əl/ · polish /ˈpɒl.ɪʃ/',
        'เทคนิคอ่านออกเสียงตรวจงานเขียนตัวเอง: หูของเราจะสะดุดทันทีตรงประโยคที่มีคำซ้ำซ้อน ("Although... but") หรือจังหวะหายใจขาดช่วงตรง Comma Splice!',
        'ฝึกพูดแก้คู่คำติดปากคนไทยให้คล่อง: MAKE progress / POSE a challenge / HAVE a profound impact / TAKE responsibility',
      ],
      l1: [
        'ยังคงหลุด comma splice, ใส่ "The" หน้าคำนามนามธรรมทั่วไป ("The education is important"), หรือใช้คู่คำตรงตัว ("learn knowledge", "do a mistake") ในงานเขียนยาวๆ',
        'เวลาเขียนความยาว 200+ คำ สมองโฟกัสเนื้อหาและคำศัพท์ จนละเลยตัวเชื่อมซ้ำกับ Article หน้าคำทั่วไป',
        'แยกเวลาระหว่าง "ร่างแรก (Drafting — ห้ามแก้ระหว่างพิมพ์)" กับ "ตรวจแก้ 4 รอบ (Editing — ไล่ทีละมิติ)" จะจับจุดพลาดของตัวเองเจอเพิ่มขึ้น 3 เท่า!',
      ],
      vocab: [
        ['comma splice', 'การเชื่อมสองประโยคอิสระด้วยลูกน้ำตัวเดียว (ผิดไวยากรณ์)', '/ˈkɒm.ə splaɪs/', 'fix every comma splice', 'แก้จุดเชื่อมประโยคด้วยลูกน้ำผิดทุกจุด'],
        ['redundancy', 'ความซ้ำซ้อนเกินจำเป็นของถ้อยคำ', '/rɪˈdʌn.dən.si/', 'trim verbal redundancy', 'ตัดความซ้ำซ้อนของถ้อยคำออก'],
        ['abstract noun', 'คำนามนามธรรม (เช่น trust, feedback, growth)', '/ˈæb.strækt naʊn/', 'drop "the" before general abstract nouns', 'ตัด the หน้าคำนามนามธรรมที่กล่าวถึงโดยทั่วไป'],
        ['profound impact', 'ผลกระทบที่ลึกซึ้งและยั่งยืน', '/prəˈfaʊnd ˈɪm.pækt/', 'leave a profound impact', 'ทิ้งผลกระทบอันลึกซึ้งไว้'],
        ['pose a challenge', 'ก่อให้เกิดความท้าทาย', '/pəʊz ə ˈtʃæl.ɪndʒ/', 'pose an unexpected challenge', 'สร้างความท้าทายที่คาดไม่ถึง'],
        ['tighten', 'กระชับถ้อยคำให้คมขึ้น', '/ˈtaɪ.tən/', 'tighten the opening paragraph', 'กระชับย่อหน้าเปิดให้คมขึ้น'],
        ['self-edit', 'ตรวจแก้งานของตัวเองอย่างเป็นระบบ', '/ˌselfˈed.ɪt/', 'self-edit in four focused passes', 'ตรวจแก้งานตัวเองเป็นรอบ 4 ขั้น'],
      ],
      examples: [
        ['Although the workshop ran overtime, everyone left energized—never add "but" after "although."', 'แม้เวิร์กชอปจะเลยเวลาไปบ้าง แต่ทุกคนก็กลับไปอย่างมีพลัง (อย่าเติม but ตามหลัง although เด็ดขาด)'],
        ['General abstract nouns stay clean without "the": Curiosity drives lifelong learning far better than fear.', 'คำนามนามธรรมทั่วไปไม่ต้องใส่ the: ความอยากรู้อยากเห็นขับเคลื่อนการเรียนรู้ตลอดชีวิตได้ดีกว่าความกลัวมาก'],
        ['Replacing weak phrases like "do big progress" with "make steady progress" elevates clarity overnight.', 'การเปลี่ยนวลีอ่อนๆ อย่าง do big progress เป็น make steady progress ช่วยยกระดับความชัดเจนได้ทันที'],
        ['Reading your finished paragraph aloud exposes awkward comma splices and clunky rhythm immediately.', 'การอ่านย่อหน้าที่เขียนเสร็จแล้วออกเสียงช่วยเผยจุดเชื่อมลูกน้ำผิดและจังหวะที่สะดุดได้ทันที'],
      ],
      reading:
        'Great writers are rarely born producing flawless first drafts; instead, they build sharper instincts during revision. When advanced Thai learners review their own essays, grammar mistakes rarely look dramatic anymore. Rather, subtle habits hold their prose back: an unnecessary "the" before general concepts like "the confidence," a lingering comma splice joining two complete thoughts, or direct translations such as "learn new knowledge" instead of "gain fresh insight." Imagine revising a draft sentence that reads: "Although remote work saves commuting time, but it makes a big effect on spontaneous mentoring, I noticed this last winter." Running our four-pass editing check fixes three layers in twenty seconds. First, cut "but" after "Although" to restore smooth flow. Second, upgrade "makes a big effect on" to the natural collocation "has a profound impact on." Third, repair the comma splice before "I noticed" by starting a clean new sentence or linking with "as." Treating revision like four focused lenses—Flow, Collocations, Articles, and Punctuation—turns a decent B2 paragraph into crisp, authoritative C1 writing.',
      listenQ: 'What three specific edits did the passage make to the example sentence about remote work?',
      listenA: 'It cut "but" after "Although," upgraded "makes a big effect on" to "has a profound impact on," and repaired the comma splice before "I noticed."',
      dictation: 'Reading drafts aloud exposes awkward phrasing and subtle article slips.',
      listenNote:
        'สังเกตเสียง /z/ ท้ายคำว่า "exposes" (/ɪkˈspəʊ.zɪz/) และคำว่า "profound" (/prəˈfaʊnd/) กับ "revision" (/rɪˈvɪʒ.ən/) ที่อ่านเสียง /ʒ/ นุ่มๆ',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'ใช้ 4-Pass Edit แก้ 3 จุดพลาด (Double Connector + Collocation + Comma Splice) ในประโยคนี้: "Although she did many mistakes at first, but she kept practicing, it helped her win trust."',
          answer: 'Although she made many mistakes at first, she kept practicing, which helped her earn trust.',
          explanation: '1) ตัด but หลัง Although 2) made mistakes (ไม่ใช่ did) 3) แก้ comma splice โดยเชื่อมด้วย , which helped... (และ earn/build trust)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Article (a/an/the/Ø) กับคำนามนามธรรมและ Collocations ได้เนียนระดับ C1 ที่สุด?',
          answer: 'Honest feedback plays a vital role in growth, yet the feedback we received on Monday felt unusually vague.',
          choices: [
            'The honest feedback plays vital role in the growth, yet feedback we received on Monday felt unusually vague.',
            'Honest feedback plays a vital role in growth, yet the feedback we received on Monday felt unusually vague.',
            'An honest feedback plays the vital role in growth, yet a feedback we received on Monday felt unusually vague.',
            'Honest feedbacks play vital roles in the growth, yet feedbacks we received on Monday felt unusually vague.',
          ],
          explanation: 'feedback นับไม่ได้ (ไม่เติม s / ไม่ใช้ an); เมื่อกล่าวทั่วไปใช้ Honest feedback & growth (ไม่มี the); เมื่อชี้เฉพาะในวันจันทร์ใช้ the feedback we received',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำกริยาให้ตรง Collocation: Tight schedules often _____ a challenge for rural clinics trying to run group workshops.',
          answer: 'pose',
          explanation: 'pose a challenge = ก่อให้เกิดความท้าทาย (collocation มาตรฐานระดับ B2–C1)',
        },
        {
          kind: 'translation',
          prompt: 'แปลและตรวจให้ไร้ Comma Splice และ Collocation เพี้ยน: "การอ่านทวนออกเสียงช่วยกระชับย่อหน้าและทิ้งผลลัพธ์ที่ลึกซึ้งต่อความมั่นใจเวลาพูด"',
          answer: 'Reading aloud tightens your paragraphs and leaves a profound impact on your speaking confidence.',
          explanation: 'ใช้ tightens + leaves a profound impact on + speaking confidence',
        },
      ],
      writing:
        'Active Editing Task: คัดลอกย่อหน้าที่มีจุดพลาด 5 จุดด้านล่างนี้ แล้วเขียนเวอร์ชันที่ขัดเกลาสมบูรณ์ระดับ C1 พร้อมระบุสั้นๆ ว่าคุณแก้จุดใดบ้าง:\nDraft: "The curiosity is an important key for learning, because I read English articles every morning, so my vocabulary did big progress. Even though grammar drills felt slow at first, however speaking aloud daily made a huge effect, I notice the difference in every call now."',
      writingSample:
        'Edited C1 Version:\nCuriosity is vital to continuous learning. Because I read English articles every morning, my vocabulary has made steady progress. Even though grammar drills felt slow at first, speaking aloud daily has had a profound impact, and I now notice the difference on every call.\n\nEdits Applied (4-Pass Summary):\n1) Dropped "the" before general abstract noun "Curiosity". 2) Cut "so" after "Because" and "however" after "Even though" to remove double connectors. 3) Fixed collocations: "did big progress" → "made steady progress" and "made a huge effect" → "had a profound impact". 4) Repaired two comma splices by splitting the opening sentence and linking ", and I now notice..." cleanly.',
      writingNote:
        'ลองหยิบงานเขียนจาก Day 239 ของตัวเองกลับมาทำ 4-Pass Edit ด้วยวิธีเดียวกันดู คุณจะจับจุดที่ปรับให้คมขึ้นได้อีกอย่างน้อย 2–3 จุด!',
      speakingTopic: 'อ่านงานเขียน Day 239 ของตัวเองหลังทำ 4-Pass Edit ออกเสียง แล้วเล่าจุดที่แก้แล้วดีขึ้นชัดที่สุด (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เปรียบเทียบประโยค "ก่อนแก้ vs หลังแก้" ให้ฟังชัดๆ 2 คู่ (เช่น Collocation หรือ Double Connector ที่ตัดออก)',
        'ฝึกสแกนคำว่า the หน้าคำนามนามธรรมทั่วไปตอนพูดสดไปด้วย!',
      ],
    },
    {
      day: 244,
      title: 'Capstone 6: Full Unscripted 4/3/2 Presentation & Spontaneous Q&A Simulation',
      objective:
        'พูดนำเสนอแบบไม่มีสคริปต์ (Unscripted 4/3/2) ให้จบโครงสร้างคมชัด พร้อมรับมือคำถามสดที่ไม่คาดคิด (Spontaneous Q&A) ได้อย่างเยือกเย็นและน่าเชื่อถือ',
      explanation:
        'ความแตกต่างระหว่าง **"ท่องจำไปพูดเก่ง"** กับ **"ผู้สื่อสาร C1 ตัวจริง"** ปรากฏชัดที่สุดตอนจบสไลด์แล้วมีคนยกมือถามสด! เวลาสมองว่างเปล่าหรือโดนถามจุดที่ไม่ได้เตรียม คำแรกที่พูดออกมาสำคัญที่สุด — อย่าเงียบค้างหรือพูดว่า ❌ *"Uh... I don’t know."* ให้ใช้ **กลยุทธ์ 3 ขั้นตอน (Pause → Bridge → Structured Micro-Answer)**: 1) **Buy Time Gracefully (ซื้อเวลา 2 วินาทีอย่างสง่า)**: **`That’s a thoughtful angle—let me unpack two sides of that.`** หรือ **`Great question. Off the top of my head, one pattern stands out...`** 2) **P.R.E.P. Structure (ตอบสดไม่หลงทาง)**: **P**oint (ตอบตรงๆ 1 ประโยค) → **R**eason (เหตุผล 1 ข้อ) → **E**xample (ตัวอย่างจริง 1 ภาพ) → **P**oint (สรุปปิดท้าย) 3) **Honest Pivot (เมื่อไม่รู้ข้อมูลเป๊ะ)**: **`I don’t have the exact figure on hand right now, though in practice what we observed was...`** — ซื่อสัตย์ มั่นคง และไม่เสียความน่าเชื่อถือ!',
      sound: [
        'Calm Filler-Free Thinking Pauses & Confident Pitch Closure',
        'unscripted /ʌnˈskrɪp.tɪd/ · spontaneous /spɒnˈteɪ.ni.əs/ · unpack /ʌnˈpæk/ · offhand /ˌɒfˈhænd/',
        'ฝึกแทนที่เสียง "อืม.../เอ่อ..." ยาวๆ ด้วยการ **สูดลมหายใจเงียบๆ 1 วินาที** แล้วเปิดด้วยประโยคซื้อเวลาในโทนเสียงต่ำมั่นคง: "That’s a great angle."',
        'ซ้อมตอบคำถามสดด้วยสูตร P.R.E.P. ภายใน 45 วินาทีต่อข้อ ให้ประโยคปิดท้ายลดเสียงลงต่ำ (Falling Intonation) ไม่ลอยค้างเหมือนกำลังถามคนฟัง!',
      ],
      l1: [
        'เวลาโดนถามสดแล้วตกใจจนลืมภาษาอังกฤษไปชั่วขณะ รีบตอบว่า "Wait... I forgot" หรือตอบนอกประเด็นวนไปเรื่อยๆ โดยไม่มีประโยคปิดจนต้องเงียบหายไปเอง',
        'กลัวความเงียบ 1 วินาทีเลยรีบอ้าปากก่อนจัดโครงสร้างคำตอบ และไม่รู้วลีซื้อเวลาแบบมืออาชีพ',
        'ติดป้ายคำตอบอัตโนมัติไว้ 2 วลี: 1) รับคำถามพร้อมซื้อเวลา: "That’s a fair question—I look at it from two angles." 2) ปิดคำตอบให้จบคม: "So overall, that’s why [สรุป 1 ประโยค]."',
      ],
      vocab: [
        ['unpack', 'คลี่คลายอธิบายทีละส่วน', '/ʌnˈpæk/', 'unpack two sides of that question', 'คลี่คลายคำถามนั้นออกเป็นสองมุม'],
        ['offhand', 'ทันทีโดยไม่ได้เปิดโพย/เช็กข้อมูล', '/ˌɒfˈhænd/', 'not know the exact number offhand', 'ไม่ทราบตัวเลขเป๊ะๆ ในทันทีโดยไม่มีโพย'],
        ['pivotal', 'สำคัญยิ่งยวดที่เป็นแกนหลัก', '/ˈpɪv.ə.təl/', 'highlight a pivotal takeaway', 'เน้นข้อคิดแกนหลักสำคัญ'],
        ['circle back', 'วกกลับมาตอบหรือติดตามเรื่องนั้นภายหลัง', '/ˈsɜː.kəl bæk/', 'circle back with exact figures', 'กลับมาแจ้งตัวเลขที่แม่นยำภายหลัง'],
        ['off the top of my head', 'เท่าที่นึกได้เร็วๆ ตอนนี้โดยไม่เปิดโน้ต', '/ɒf ðə tɒp əv maɪ hed/', 'say off the top of my head', 'บอกคร่าวๆ จากความจำตอนนี้'],
        ['concisely', 'อย่างกระชับตรงจุด', '/kənˈsaɪs.li/', 'summarize concisely under pressure', 'สรุปอย่างกระชับภายใต้แรงกดดัน'],
        ['takeaway', 'สาระสำคัญที่ผู้ฟังเก็บกลับไปได้', '/ˈteɪk.ə.weɪ/', 'leave listeners with one clear takeaway', 'ฝากข้อคิดชัดเจนหนึ่งอย่างให้ผู้ฟัง'],
      ],
      examples: [
        ['That’s a thoughtful angle; let me unpack both the short-term cost and the long-term payoff.', 'นั่นเป็นมุมมองที่น่าคิดมากครับ ขอผมคลี่คลายทั้งต้นทุนระยะสั้นและผลคุ้มค่าระยะยาวให้ดูนะครับ'],
        ['I don’t have last quarter’s exact figure offhand, though I can verify it and circle back right after this session.', 'ตอนนี้ผมยังไม่มีตัวเลขเป๊ะๆ ของไตรมาสก่อนอยู่กับตัว แต่เดี๋ยวผมเช็กยืนยันแล้วกลับมาแจ้งทันทีหลังจบช่วงนี้ครับ'],
        ['Off the top of my head, three local cafés have already tested a similar reusable cup deposit.', 'เท่าที่นึกได้เร็วๆ ตอนนี้ มีร้านกาแฟแถวนี้สามร้านแล้วที่ลองใช้ระบบมัดจำแก้วใช้ซ้ำคล้ายๆ กัน'],
        ['Ending a spontaneous answer with a crisp takeaway keeps your voice calm and decisive rather than trailing off.', 'การปิดคำตอบสดด้วยข้อคิดที่คมชัดช่วยคุมเสียงให้นิ่งและเด็ดขาด แทนที่จะพูดแผ่วหายไปเฉยๆ'],
      ],
      reading:
        'For many English learners, preparing a three-minute talk feels manageable, yet the moment Q&A begins, heart rates spike and carefully practiced grammar vanishes. Why does Q&A feel twice as scary? Because spontaneous questions remove your safety script and force you to organize ideas while speaking. Fortunately, strong speakers rely on simple mental anchors rather than superhuman memory. First, give yourself permission to pause for one quiet second instead of filling space with nervous "ums." Opening with "That’s a fair question—let me unpack two sides of that" immediately signals composure while buying three seconds to arrange your thoughts. Next, follow the four-step PREP pattern: state your main Point concisely, add one clear Reason, ground it with a concrete Example, and restate your Point so the answer ends decisively rather than drifting away. And what if a listener asks for a statistic you genuinely cannot recall offhand? Never invent numbers or apologize endlessly. Say calmly, "I don’t have that exact figure off the top of my head, though in practice we observed faster onboarding—I’ll circle back with the sheet this afternoon." Calm structure turns unpredictable Q&A into your most authentic moment on stage.',
      listenQ: 'What does the speaker advise doing instead of inventing numbers when you cannot recall an exact statistic during Q&A?',
      listenA: 'State honestly that you do not have the exact figure offhand, share what you observed in practice, and offer to circle back with the verified number later.',
      dictation: 'A calm one-second pause sounds far stronger than nervous filler words.',
      listenNote:
        'ฟังประโยคพูดตัวอย่างในบทอ่าน: สังเกตว่าคำว่า "though in practice..." ถูกใช้เพื่อเชื่อมจากสิ่งที่ยังไม่รู้เป๊ะ ไปสู่ประสบการณ์จริงที่รู้มั่นใจ ทำให้โทนเสียงยังดูเป็นมืออาชีพเต็มร้อย',
      drills: [
        {
          kind: 'choice',
          prompt: 'ระหว่าง Q&A หลังพรีเซนต์ มีคนถามตัวเลขสถิติย้อนหลังที่ไม่ได้อยู่ในสไลด์และคุณจำตัวเลขเป๊ะไม่ได้ ข้อใดรับมือได้สง่างามและมืออาชีพที่สุด?',
          answer: 'I don’t have that exact figure offhand, though in practice our team saw wait times drop noticeably—I’ll circle back with the full breakdown after this call.',
          choices: [
            'Oh sorry, my English is still poor, I forgot that number completely, maybe around fifty percent?',
            'I don’t have that exact figure offhand, though in practice our team saw wait times drop noticeably—I’ll circle back with the full breakdown after this call.',
            'Why are you asking about numbers that weren’t even on my slides?',
            'Wait a minute, up to you if you want to check the spreadsheet yourself.',
          ],
          explanation: 'ยอมรับอย่างนิ่งว่าไม่มีตัวเลขในมือ (offhand) + ให้ภาพสิ่งที่เห็นจริง + รับปากส่งต่อ (circle back) อย่างมืออาชีพ',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคซื้อเวลาและตอบคำถามสดที่ผิดสำนวน: "That’s a thoughtful angle—off top of my heads, let me packing two sides and circle around later."',
          answer: 'That’s a thoughtful angle—off the top of my head, let me unpack two sides and circle back later.',
          explanation: 'รูปสำนวนมาตรฐานคือ off the top of my head (เอกพจน์ มี the), unpack two sides (ไม่ใช่ packing), และ circle back (ไม่ใช่ circle around)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในก้อนคำ: Before rushing into a three-minute ramble, pause for a second to organize one crisp _____ for your audience.',
          answer: 'takeaway',
          explanation: 'one crisp takeaway = ประเด็นสำคัญคมๆ หนึ่งข้อที่ผู้ฟังเก็บไปคิดต่อได้',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษสำหรับซื้อเวลาอย่างมืออาชีพ: "นั่นเป็นมุมมองที่ดีมากเลยครับ ขอผมคลี่คลายเหตุผลสำคัญสักสองข้อจากเรื่องนี้ดูนะครับ"',
          answer: 'That is a great angle—let me unpack two key reasons behind that.',
          explanation: 'ใช้สูตรซื้อเวลา + unpack + two key reasons behind that',
        },
      ],
      writing:
        'จำลองสคริปต์ Q&A 2 คำถามที่คนอาจถามหลังคุณเล่าโปรเจกต์/บทความจากสัปดาห์นี้ พร้อมเขียนคำตอบสดตามโครง **PREP (Point → Reason → Example → Point)** ข้อละ 4–5 ประโยค โดยใช้ก้อนคำอย่าง *That’s a thoughtful angle*, *unpack*, หรือ *offhand / circle back*',
      writingSample:
        'Q1: Wouldn’t shortening weekly updates make people miss small technical bugs?\nA1 (PREP): That’s a fair question—let me unpack why focused threads actually catch bugs faster. Keeping a three-bullet summary does not delete details; rather, it separates urgent decisions from casual chatter. For example, during our two-week pilot, engineers stopped scrolling past sixty lunch messages and spotted a payment glitch on day two. Overall, brevity improves focus without hiding critical facts.\n\nQ2: How much extra time did teammates spend writing those summaries each Friday?\nA2 (PREP): I don’t have every teammate’s exact minutes offhand, though off the top of my head, nobody spent longer than ten minutes a week. Because everyone already reviewed tasks on Friday afternoon, pasting three clear lines required almost zero extra effort—I can circle back with our feedback poll later today. In practice, ten structured minutes saved hours of Monday follow-ups.',
      writingNote:
        'ตรวจทุกคำตอบว่ามีครบ 4 ขั้นของ PREP (Point → Reason → Example → Point) และมีประโยคปิดที่จบลงตัวไม่ลอยหาย',
      speakingTopic: 'Capstone 4/3/2 Unscripted Talk + Mock Q&A: พูดหัวข้อที่คุณเลือก 4 → 3 → 2 นาที แล้วตอบ 2 คำถามสดด้วยสูตร PREP!',
      speakingBullets: [
        '4 นาที (รอบลองโครงสร้าง) → 3 นาที (ตัดส่วนเกิน รักษาน้ำเสียงนิ่ง) → 2 นาที (คม ชัด และจบทรงพลัง)',
        'ต่อด้วยจำลองตอบคำถาม Q&A ข้อละ 45 วินาที โดยบังคับตัวเองเงียบ 1 วินาทีก่อนเปิดด้วย "That’s a thoughtful angle..." และจบด้วย "Overall, ..."' ,
      ],
    },
    {
      day: 245,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 35 — Capstone Critique & Refinement + Dictogloss',
      objective:
        'ทบทวนและยกระดับทักษะลงสนามจริงทั้ง 6 ด้าน (Storytelling, Structured Briefing, Cross-Cultural Dialogue, Jargon-Free Explanation, 4-Pass Editing และ Q&A) พร้อม Dictogloss',
      explanation:
        'สัปดาห์ที่ 35 คือสัปดาห์ที่คุณได้ลองผลิตผลงานจริงแบบครบวงจรแล้ว! วันนี้เราประเมินงานตัวเองอย่างเป็นระบบด้วย **เกณฑ์ 5 เสาหลักของการสื่อสารระดับ C1**: 1) **Specificity (ความชัดเจนมีชีวิต)**: แทนคำชมลอยๆ ด้วยฉากจริง 2) **Actionable Logic (ตรรกะลงมือทำ)**: แยก Symptom ออกจาก Root Cause และกล้าบอก Trade-offs 3) **Cultural Empathy (หัวใจข้ามวัฒนธรรม)**: อธิบายวัฒนธรรมไทยด้วยประสาทสัมผัสและตั้งคำถามปลายเปิด 4) **Accessible Clarity (ความเข้าใจง่าย)**: ใช้ Analogy คลี่คลายงานยากโดยไม่ติด Jargon 5) **Self-Editing & Composure (ตรวจแก้ 4 รอบ + คุมสติตอน Q&A)**: ไร้ Double Connectors/Comma Splices และซื้อเวลาอย่างสง่างามในคำถามสด',
      sound: [
        'Full Capstone Delivery Check: Pace, Pausing & Intonation Arc',
        'specificity /ˌspes.ɪˈfɪs.ə.ti/ · composure /kəmˈpəʊ.ʒər/ · refine /rɪˈfaɪn/ · resonate /ˈrez.ə.neɪt/',
        'Shadowing บทอ่านวันนี้เพื่อตรวจจับ "ทำนองเสียงแห่งความมั่นใจ": ไม่เร่งเครื่องรัวช่วงต้น, เน้นคำป้ายบอกทาง, และปิดประโยคสุดท้ายด้วยโทนเสียงลงมั่นคง',
        'เช็กคำที่คนไทยมักออกเสียงพลาดในชุด Capstone: analogy /əˈnæl.ə.dʒi/, trajectory /trəˈdʒek.tər.i/, spontaneous /spɒnˈteɪ.ni.əs/',
      ],
      l1: [
        'เมื่อรวมหลายทักษะในชิ้นงานเดียว มักทำได้ดีในย่อหน้าแรกแล้วเริ่มหลุดไปใช้ประโยคกว้างๆ ตัด Article ทิ้ง หรือยัดศัพท์ยากกลับมาช่วงท้าย',
        'ความเหนื่อยล้าระหว่างเขียน/พูดยาวทำให้สมองกลับไปใช้สูตรเก่าตอนต้นคอร์สโดยไม่รู้ตัว',
        'ก่อนกดส่งหรือจบการพูดทุกครั้ง แบ่ง 2 นาทีสุดท้ายเพื่อทำ "4-Pass Scan" เฉพาะ 3 จุดแรกของตัวเอง: Article หน้า abstract nouns, Comma splice, และคำซ้ำอย่าง Although...but!',
      ],
      vocab: [
        ['resonate', 'ก้องกังวาน / โดนใจคนฟังลึกซึ้ง', '/ˈrez.ə.neɪt/', 'resonate deeply with listeners', 'สื่อใจถึงผู้ฟังได้อย่างลึกซึ้ง'],
        ['polish', 'ขัดเกลาให้ประณีตสมบูรณ์', '/ˈpɒl.ɪʃ/', 'polish a rough draft', 'ขัดเกลาร่างงานเขียนให้ประณีต'],
        ['critique', 'การวิจารณ์เชิงวิเคราะห์เพื่อพัฒนา', '/krɪˈtiːk/', 'offer constructive critique', 'ให้ข้อเสนอแนะเชิงสร้างสรรค์'],
        ['cohesive', 'เชื่อมโยงเป็นเนื้อเดียวกัน', '/kəʊˈhiː.sɪv/', 'weave a cohesive narrative', 'ร้อยเรียงเรื่องเล่าให้เชื่อมโยงเป็นเนื้อเดียว'],
        ['composure', 'ความเยือกเย็นสงบนิ่ง', '/kəmˈpəʊ.ʒər/', 'maintain composure during Q&A', 'รักษาความนิ่งสงบระหว่างตอบคำถามสด'],
        ['tangible', 'จับต้องได้เป็นรูปธรรม', '/ˈtæn.dʒə.bəl/', 'deliver tangible outcomes', 'ส่งมอบผลลัพธ์ที่จับต้องได้'],
        ['recalibrate', 'ปรับเทียบจูนทิศทางใหม่', '/ˌriːˈkæl.ɪ.breɪt/', 'recalibrate after feedback', 'ปรับจูนหลังได้รับฟีดแบ็ก'],
      ],
      examples: [
        ['Specific childhood details resonate far more strongly with readers than generic claims about passion.', 'รายละเอียดวัยเด็กที่เฉพาะเจาะจงโดนใจผู้อ่านมากกว่าคำกล่าวอ้างลอยๆ เรื่องความมุ่งมั่นมาก'],
        ['Polishing a rough draft in four calm passes consistently turns scattered notes into a cohesive briefing.', 'การขัดเกลาร่างงานสี่รอบอย่างใจเย็นเปลี่ยนโน้ตกระจัดกระจายให้เป็นบทสรุปที่เชื่อมโยงเป็นเนื้อเดียวกันเสมอ'],
        ['Constructive critique helps us spot blind spots without undermining our authentic speaking voice.', 'การวิจารณ์เชิงสร้างสรรค์ช่วยให้เราเห็นจุดบอดโดยไม่ทำลายน้ำเสียงที่เป็นตัวของตัวเอง'],
        ['Maintaining composure during unexpected questions demonstrates true mastery better than any memorized speech.', 'การรักษาความนิ่งระหว่างเจอคำถามที่ไม่คาดคิดแสดงถึงความเชี่ยวชาญจริงได้ดีกว่าสุนทรพจน์ท่องจำใดๆ'],
      ],
      reading:
        'Look back at everything you created across this capstone week. On day one, you moved beyond stiff textbook introductions by anchoring your personal story in vivid scenes. Next, you practiced framing workplace headaches into structured briefings that isolate root causes, weigh honest trade-offs, and launch feasible trials. Midweek, you stepped across borders—translating local food rituals with sensory warmth while stripping opaque jargon from your own profession through clear everyday analogies. Perhaps most importantly, you discovered that polish comes from revision and composure rather than rushing for perfection on a first attempt. Running a four-pass edit eliminates hidden article slips and double connectors, while a calm one-second breath paired with the PREP framework transforms unpredictable Q&A from panic into poised dialogue. Real-world English mastery never demands flawless robotic sentences. Instead, it asks you to listen generously, revise thoughtfully, and speak with enough structure and clarity that your ideas truly resonate with whoever sits across the table.',
      listenQ: 'What two practical tools are highlighted as turning unpredictable Q&A into poised dialogue?',
      listenA: 'A calm one-second breath paired with the PREP framework.',
      dictation: 'Thoughtful revision and calm composure make your ideas genuinely resonate.',
      listenNote:
        'เตรียมฟัง Dictogloss: รอบแรกฟังความหมายทั้งหมด รอบสองจดก้อนคำเด่น เช่น polish / four-pass edit / article slips / calm one-second breath / poised dialogue แล้วเลือกประโยคสรุปที่ตรงที่สุด',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังประโยคสรุปใจความหลักจากบทอ่านแล้วเลือกตัวเลือกที่ถ่ายทอดโครงสร้างและ Collocations ได้ถูกต้องตรงกับที่ได้ยิน:',
          answer: 'Real-world English mastery asks you to listen generously, revise thoughtfully, and speak with clarity so your ideas truly resonate.',
          choices: [
            'Real-world English mastery asks you to talk continuously, memorize perfectly, and use long jargon so people admire you.',
            'Real-world English mastery asks you to listen generously, revise thoughtfully, and speak with clarity so your ideas truly resonate.',
            'Real-world English mastery demands robotic perfection, avoids comma edits, and speaks quickly so nobody asks questions.',
            'Real-world English mastery asks you to translate literally, skip analogies, and speak softly so your ideas stay hidden.',
          ],
          explanation:
            'ตรงตามสาระสำคัญในบทอ่าน: listen generously, revise thoughtfully, speak with clarity so your ideas truly resonate',
          audio_text:
            'Real-world English mastery asks you to listen generously, revise thoughtfully, and speak with clarity so your ideas truly resonate.',
        },
        {
          kind: 'error_fix',
          prompt: 'ทำ 4-Pass Edit แก้ประโยคที่รวมจุดผิดทั้งสัปดาห์ (Article + Double Connector + Collocation + Comma Splice): "The honesty builds trust, although the pilot posed some unexpected troubles, but we made big progress."',
          answer: 'Honesty builds trust; although the pilot posed some unexpected challenges, we made steady progress.',
          explanation: '1) ตัด The หน้า Honesty 2) แก้ comma splice หลัง trust เป็น ; 3) ตัด but หลัง although 4) เปลี่ยน troubles/big progress เป็น challenges/steady progress',
        },
        {
          kind: 'choice',
          prompt: 'หากต้องอธิบาย "หน้าที่ของบรรณาธิการข่าว" ให้เด็กอายุ 12 ปีและผู้ร่วมงานต่างชาติเข้าใจพร้อมกัน ข้อใดผสาน Jargon-Free Analogy และความชัดเจนได้ดีที่สุด?',
          answer: 'In plain terms, an editor acts like a filter and clarity coach—helping reporters cut confusing detours so readers grasp the true story in half the time.',
          choices: [
            'An editor executes editorial quality-assurance protocols across multi-platform journalistic deliverables daily.',
            'In plain terms, an editor acts like a filter and clarity coach—helping reporters cut confusing detours so readers grasp the true story in half the time.',
            'Editing means checking commas and telling writers what they did wrong before printing.',
            'An editor writes everything again using harder vocabulary so newspapers sound prestigious.',
          ],
          explanation: 'ใช้ In plain terms + อุปมาเปรียบเทียบ filter and clarity coach + ผลลัพธ์จริงที่ทุกคนนึกภาพตามได้ทันที',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบก้อนคำ: Rather than defending a flawed draft, strong speakers welcome constructive _____ to sharpen their message.',
          answer: 'critique',
          explanation: 'constructive critique = คำติชมเชิงสร้างสรรค์เพื่อปรับปรุงผลงาน',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "การวางโครงสร้างที่ชัดเจนและคำเปรียบเทียบในชีวิตประจำวันช่วยให้ไอเดียที่ซับซ้อนเข้าถึงผู้ฟังทุกวัย"',
          answer: 'Clear structure and everyday analogies help complex ideas resonate with listeners of every age.',
          explanation: 'Clear structure + everyday analogies + resonate with listeners of every age',
        },
      ],
      writing:
        'Capstone Self-Critique Note: ทบทวนผลงาน Week 35 ของตัวเอง (Story / Briefing / Cultural Intro / Craft Explanation / Q&A) แล้วเขียนบันทึกสะท้อนผล 1 ย่อหน้า (6–7 ประโยค) ระบุ: 1) จุดแข็งที่สุดที่เห็นในผลงานตัวเอง 2) จุดผิด 1–2 อย่างที่จับได้ตอนทำ 4-Pass Edit และ 3) แผนปรับแก้งานชิ้นหนึ่งให้คมขึ้นก่อนสอบจบสัปดาห์หน้า',
      writingSample:
        'Reviewing my five capstone drafts from this week gave me a surprisingly honest look at both my progress and my lingering blind spots. My strongest improvement appeared in personal storytelling and craft analogies: replacing generic adjectives with concrete morning kitchen scenes immediately made my voice sound warmer and more distinct. However, running the four-pass editing checklist exposed two recurring habits I still miss when writing quickly—dropping "the" unevenly before abstract concepts and slipping into comma splices inside long explanations. During the unscripted Q&A simulation, my opening pauses also felt slightly rushed on round one before settling into a steadier PREP rhythm on round three. Before next week’s final synthesis, I plan to tighten my personal introduction essay by cutting twenty redundant words and recording one fresh two-minute briefing without glancing at bullet points. Stepping back to critique my own work calmly feels less like hunting mistakes and more like sharpening a favorite kitchen knife.',
      writingNote:
        'เช็กงานเขียนบันทึกผลด้วยตัวเองด้วย 4-Pass Edit อีกครั้ง — ให้เป็นตัวอย่างงานเขียน C1 ที่สะอาด ปราศจาก comma splice และ collocation เพี้ยน 100%',
      speakingTopic: 'Week 35 Reflection & Best 2-Minute Pitch Showcase (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกรวม "จุดที่ดีที่สุดจาก Week 35" (เช่น เปิดด้วย Storytelling Hook 30 วิ + อธิบาย Craft แบบ Analogy 60 วิ + ปิดด้วย Takeaway คมๆ 30 วิ)',
        'ใช้จังหวะหยุดหายใจ 1 วินาทีก่อนจุดเปลี่ยนสำคัญ และปิดท้ายด้วยน้ำเสียงมั่นคงชัดเจน',
      ],
    },
  ]
);
