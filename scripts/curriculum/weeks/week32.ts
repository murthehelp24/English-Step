import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 4: สื่อสารคล่องตัว เลือกโทนภาษา และฟังความเร็วเจ้าของภาษา';

export const WEEK32: ModuleSeed = createModule(
  {
    week: 32,
    phase: 4,
    phase_title: PHASE_TITLE,
    cefr_level: 'B2',
    title: 'Structured Argumentation & Persuasive Output',
    summary:
      'จัดระเบียบความคิดและตอบคำถามแบบฉับพลันด้วย PREP Framework และ STAR Method รับมือข้อโต้แย้งอย่างมืออาชีพ พร้อมก้าวผ่าน Milestone Assessment 4 (B2 Operational Fluency Gate)',
    focus: 'PREP Framework, STAR Method, Defending Ideas Under Pressure, B2 Proficiency Gate',
  },
  [
    {
      day: 218,
      title: 'The PREP Framework: จัดระเบียบความคิดตอบสดใน 30 วินาที',
      objective:
        'จัดระเบียบความคิดและแสดงความคิดเห็นแบบฉับพลันอย่างมีตรรกะด้วยโครงสร้าง PREP: Point (ประเด็นหลัก) → Reason (เหตุผล) → Example (ตัวอย่างจริง) → Point (ตอกย้ำประเด็น)',
      explanation:
        'ปัญหาใหญ่ที่สุดของคนไทยเวลาถูกถามความเห็นสดๆ ในที่ประชุมหรือการสนทนาภาษาอังกฤษ คือ **"อ้ำอึ้ง คิดวนไปวนมา หรือพูดเกริ่นน้ำท่วมทุ่งแต่ไม่เข้าประเด็น"**! ทางออกระดับสากลคือการใช้ **PREP Framework**: 1) **Point (ฟันธงประเด็นแรกใน 5 วินาทีแรก):** *"In my view, we should adopt a four-day workweek."*, 2) **Reason (ให้เหตุผลเชิงตรรกะ):** *"The main reason is that focused work bursts significantly reduce burnout while boosting output."*, 3) **Example (ยกตัวอย่างรูปธรรมหรือสถิติจริง):** *"For instance, several tech firms in Europe saw productivity rise by fifteen percent after switching."*, 4) **Point (วนกลับมาตอกย้ำบทสรุป):** *"That is why I strongly believe this policy would benefit our organization."* เมื่อมีกรอบนี้ในหัว คุณจะไม่มีวันตันหรือหลุดประเด็นอีกต่อไป!',
      sound: [
        'Cadence and Pauses in Logical Transitions',
        'framework /ˈfreɪm.wɜːk/ · instance /ˈɪn.stəns/ · significantly /sɪɡˈnɪf.ɪ.kənt.li/',
        'เว้นวรรค 1 จังหวะสั้นๆ ระหว่างแต่ละขั้นของ PREP เพื่อส่งสัญญาณให้ผู้ฟังตามทัน และเน้นคำเชื่อมเหตุผลอย่าง "The main reason is..."',
        'ฝึกพูด PREP แบบ 4 จังหวะ: "My point is clear. ↗ The reason is simple. ↗ For example, in Asia... ↗ Therefore, we must act."',
      ],
      l1: [
        'เริ่มพูดด้วยการเล่าเรื่องส่วนตัวยืดยาว หรือพูดว่า "I think..." แล้วเงียบไปนานเพราะคิดประโยคไม่ออก',
        'วัฒนธรรมไทยมักเกริ่นอ้อมค้อมก่อนบอกความต้องการ แต่การสื่อสารภาษาอังกฤษแบบสากลต้องการประเด็นหลัก (Bottom Line) ตั้งแต่วินาทีแรก',
        'บังคับตัวเองให้ยิง Point ออกมาก่อนทันที แล้วตามด้วยคำว่า "Because / The reason is..." เสมอ',
      ],
      vocab: [
        ['framework', 'กรอบความคิด / โครงสร้าง', '/ˈfreɪm.wɜːk/', 'apply the PREP framework', 'ประยุกต์ใช้กรอบความคิด PREP'],
        ['spontaneous', 'เป็นไปโดยธรรมชาติ / ฉับพลัน', '/spɒnˈteɪ.ni.əs/', 'spontaneous response', 'การตอบสนองอย่างฉับพลัน'],
        ['for instance', 'ยกตัวอย่างเช่น...', '/fɔː ˈɪn.stəns/', 'for instance, recent trials show', 'ยกตัวอย่างเช่น การทดลองล่าสุดแสดงให้เห็น'],
        ['productivity', 'ผลิตภาพ / ประสิทธิภาพงาน', '/ˌprɒd.ʌkˈtɪv.ə.ti/', 'boost team productivity', 'เพิ่มประสิทธิภาพการทำงานของทีม'],
        ['burnout', 'ภาวะหมดไฟในการทำงาน', '/ˈbɜːn.aʊt/', 'reduce workplace burnout', 'ลดภาวะหมดไฟในที่ทำงาน'],
        ['in my view', 'ในมุมมองของฉัน...', '/ɪn maɪ vjuː/', 'in my view, the choice is clear', 'ในมุมมองของฉัน ทางเลือกนี้ชัดเจนมาก'],
      ],
      examples: [
        ['In my view, prioritizing mobile responsiveness will double our conversions.', 'ในมุมมองของฉัน การให้ความสำคัญกับการแสดงผลบนมือถือจะช่วยเพิ่มอัตราการซื้อเป็นสองเท่า'],
        ['The core reason is that over seventy percent of our visitors browse on smartphones.', 'เหตุผลสำคัญคือกว่า 70% ของผู้เยี่ยมชมเว็บไซต์เราใช้งานผ่านสมาร์ตโฟน'],
        ['For instance, when our competitors simplified their mobile cart, sales jumped immediately.', 'ยกตัวอย่างเช่น เมื่อคู่แข่งของเราปรับหน้าตะกร้าสินค้าบนมือถือให้เรียบง่าย ยอดขายก็พุ่งขึ้นทันที'],
        ['Therefore, investing in mobile optimization is our highest leverage move right now.', 'ดังนั้น การลงทุนปรับแต่งระบบบนมือเถือจึงเป็นก้าวที่ให้ผลตอบแทนคุ้มค่าที่สุดในตอนนี้'],
      ],
      reading:
        'When unexpected questions arise in high-stakes meetings, even experienced professionals can feel momentarily cornered. Without a structural mental safety net, speakers tend to ramble, wandering into irrelevant details before remembering their core conclusion. The PREP framework provides instant cognitive discipline. By committing to state the Point first, the speaker establishes clear intent within seconds. The subsequent Reason explains the underlying rationale, preventing the assertion from sounding like mere personal bias. The Example grounds the logic in concrete reality, transforming abstract theory into persuasive evidence. Finally, reiterating the Point locks the argument into the listener memory. Practicing this four-step loop turns spontaneous answers into structured miniature keynote speeches.',
      listenQ: 'How does the Example stage in PREP help the speaker argument?',
      listenA: 'It grounds the logic in concrete reality and transforms abstract theory into persuasive evidence.',
      dictation: 'The main reason is that simple workflows boost daily productivity.',
      listenNote:
        'จับเสียงเชื่อม is that (/ɪz ðæt/) และเน้นคำว่า productivity',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ขั้นตอนใดในโครงสร้าง PREP ที่ทำหน้าที่ยกข้อมูลจริงหรือกรณีศึกษามาสนับสนุนเหตุผล?',
          answer: 'Example',
          choices: [
            'Point',
            'Reason',
            'Example',
            'Proposition',
          ],
          explanation:
            'ขั้นตอน E ย่อมาจาก Example คือการยกตัวอย่างจริงหรือกรณีศึกษาเพื่อสนับสนุนเหตุผล',
        },
        {
          kind: 'error_fix',
          prompt:
            'ปรับปรุงประโยคเริ่มต้นตอบคำถามให้เข้าประเด็นทันทีตามหลัก PREP: "Well, I don\'t really know, but maybe, like, we could think about moving the office."',
          answer:
            'In my view, we should consider relocating the office to reduce commute times.',
          explanation:
            'ตัดคำอ้ำอึ้งออกแล้วเปิดด้วย Point ที่ชัดเจน (In my view, we should consider...)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมวลีเชื่อมตัวอย่างในขั้นตอน PREP: _____ _____, several regional banks reduced operating costs by adopting cloud software.',
          answer: 'For instance',
          explanation: 'For instance = ยกตัวอย่างเช่น...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษตามโครงสร้าง PREP: "ด้วยเหตุผลนี้ ฉันจึงเชื่อมั่นอย่างยิ่งว่าพวกเราควรเริ่มโครงการนี้ในเดือนหน้า"',
          answer:
            'For this reason, I strongly believe we should launch this project next month.',
          explanation:
            'For this reason, I strongly believe we should launch this project next month.',
        },
      ],
      writing:
        'เขียนตอบคำถาม "Should companies allow employees to work remotely?" โดยใช้โครงสร้าง PREP ครบ 4 ขั้นตอน (Point, Reason, Example, Point) ความยาว 80–100 คำ',
      writingSample:
        'In my view, companies should adopt flexible remote work policies permanently. The primary reason is that eliminating daily commutes gives employees more energy and focus for deep creative work. For instance, our design team reported higher output and fewer missed deadlines after shifting to remote schedules last quarter. That is why offering remote flexibility is essential for retaining top talent.',
      writingNote:
        'ตรวจสอบว่าเขียนแยกประเด็นครบทั้ง P, R, E และ P อย่างชัดเจน',
      speakingTopic:
        'ตอบคำถามสดโดยใช้ PREP Framework 4 / 3 / 2 นาที',
      speakingBullets: [
        'วินาทีที่ 1–10: บอก Point ของคุณให้ชัดเจน',
        'วินาทีที่ 10–30: อธิบาย Reason สั้นๆ 1 ข้อ',
        'วินาทีที่ 30–60: เล่า Example รูปธรรม',
        'วินาทีสุดท้าย: สรุป Point ปิดท้าย',
      ],
    },
    {
      day: 219,
      title: 'The STAR Method: เล่าประสบการณ์และความสำเร็จอย่างทรงพลัง',
      objective:
        'เล่าประสบการณ์การทำงาน การแก้ปัญหา หรือความสำเร็จในอดีตอย่างเป็นระบบด้วย STAR Method (Situation → Task → Action → Result)',
      explanation:
        'เวลาถูกขอให้เล่าเรื่อง *"Tell me about a time you handled a difficult challenge"* หลายคนเล่าสะเปะสะปะจนผู้ฟังจับประเด็นไม่ได้ **STAR Method** คือมาตรฐานระดับโลกที่ใช้ในการสัมภาษณ์งานและการพรีเซนต์ผลงาน: 1) **Situation (ปูบริบทสั้นๆ):** *"At my previous studio, we managed an e-commerce platform with fifty thousand active shoppers."*, 2) **Task (ชี้เป้าปัญหาหรือความรับผิดชอบเฉพาะตัว):** *"Two days before Black Friday, the checkout service crashed due to an unexpected memory leak."*, 3) **Action (เล่าการลงมือทำจริง โดยเน้นที่ `I` ไม่ใช่แค่ `We`):** *"I isolated the failing database query, rewrote the caching logic, and coordinated with DevOps to deploy a hotfix within three hours."*, 4) **Result (สรุปผลลัพธ์ที่วัดผลได้เป็นตัวเลข):** *"As a result, the platform stayed up with 99.9% uptime, saving over two million baht in projected losses."* นี่คือสูตรสำเร็จของการเล่าเรื่องที่มีเสน่ห์และน่าเชื่อถือที่สุด!',
      sound: [
        'Tense Shifting from Past to Present in STAR Outcomes',
        'situation /ˌsɪtʃ.uˈeɪ.ʃən/ · resolved /rɪˈzɒlvd/ · coordinated /kəʊˈɔː.dɪ.neɪ.tɪd/',
        'ในส่วน Situation, Task, Action ให้ใช้น้ำเสียงจริงจังใน Past Simple แต่เมื่อมาถึง Result ให้เปล่งเสียงภูมิใจและลงน้ำหนักที่ตัวเลขผลลัพธ์',
        'ฝึกออกเสียง: "As a result, ↗ uptime reached nine-ty-nine point nine per-cent."',
      ],
      l1: [
        'ใช้คำว่า "We" เล่ารวมๆ ตลอดเรื่องจนคนฟังไม่รู้ว่า "ตัวคุณเองทำอะไรจริงๆ บ้าง" (Lack of personal agency)',
        'คนไทยมีวัฒนธรรมถ่อมตัว ไม่กล้าพูดว่า "ฉันเป็นคนแก้" แต่ในภาษาอังกฤษสากล คุณต้องแยกบทบาทส่วนตัวของคุณ (I) ออกมาจากทีมให้ชัดเจน',
        'จำสัดส่วนเวลา: Situation & Task รวมกันไม่เกิน 20%, Action ลงลึก 60%, Result สรุปตัวเลข 20%',
      ],
      vocab: [
        ['situation', 'สถานการณ์แวดล้อม', '/ˌsɪtʃ.uˈeɪ.ʃən/', 'describe the background situation', 'อธิบายสถานการณ์ภูมิหลัง'],
        ['task', 'ภารกิจ / ความท้าทายที่ต้องรับผิดชอบ', '/tɑːsk/', 'define the urgent task', 'กำหนดภารกิจที่เร่งด่วน'],
        ['action', 'การลงมือปฏิบัติการจริง', '/ˈæk.ʃən/', 'take decisive action', 'ลงมือปฏิบัติการอย่างเด็ดขาด'],
        ['result', 'ผลลัพธ์ที่วัดผลได้', '/rɪˈzʌlt/', 'deliver measurable results', 'สร้างผลลัพธ์ที่วัดผลได้'],
        ['isolated', 'แยกส่วนเพื่อตรวจสอบ', '/ˈaɪ.sə.leɪ.tɪd/', 'isolated the bug immediately', 'แยกปัญหาบั๊กออกมาตรวจสอบทันที'],
        ['uptime', 'เวลาที่ระบบทำงานต่อเนื่อง', '/ˈʌp.taɪm/', 'maintain 99.9% uptime', 'รักษาความพร้อมใช้งานของระบบไว้ที่ 99.9%'],
      ],
      examples: [
        ['In my previous role, our team faced a severe database bottleneck.', 'ในตำแหน่งงานก่อนหน้าของฉัน ทีมเราเผชิญปัญหาคอขวดของฐานข้อมูลอย่างรุนแรง'],
        ['My specific task was to reduce response latency below two hundred milliseconds.', 'ภารกิจเฉพาะของฉันคือการลดความล่าช้าในการตอบสนองให้ต่ำกว่า 200 มิลลิวินาที'],
        ['I audited the slow queries, added redis caching, and refactored the data layer.', 'ฉันได้ตรวจสอบคำสั่งที่ทำงานช้า เพิ่มระบบแคช และปรับโครงสร้างส่วนจัดการข้อมูลใหม่'],
        ['As a result, average page load time dropped by forty percent within two weeks.', 'ผลลัพธ์คือ เวลาเฉลี่ยในการโหลดหน้าเว็บลดลงถึง 40% ภายในเวลาสองสัปดาห์'],
      ],
      reading:
        'Hiring managers and international clients rarely evaluate talent based on generic claims of passion or dedication. Instead, they seek empirical evidence of past performance under pressure. The STAR methodology transforms messy personal memories into compelling narrative case studies. By cleanly separating the ambient Situation and the specific Task from personal Actions, the storyteller highlights individual accountability without sounding arrogant. The most crucial component, often neglected by modest communicators, is the quantifiable Result. Stating tangible outcomes—such as percentages saved, hours reclaimed, or satisfaction scores achieved—proves competence beyond dispute. Mastering STAR storytelling equips learners to present their professional history with commanding credibility.',
      listenQ: 'What does the quantifiable Result in the STAR method prove?',
      listenA: 'It proves competence beyond dispute with tangible outcomes.',
      dictation: 'As a result, average page load times dropped by forty percent.',
      listenNote:
        'จับเสียงเชื่อม As a result (/æz ə rɪˈzʌlt/) และการออกเสียง forty percent ให้คมชัด',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ส่วนใดของ STAR Method ที่ควรให้ความสำคัญมากที่สุด (ประมาณ 50–60% ของเวลาพูดทั้งหมด)?',
          answer: 'Action (การลงมือทำจริง)',
          choices: [
            'Situation (การปูภูมิหลัง)',
            'Task (การอธิบายโจทย์)',
            'Action (การลงมือทำจริง)',
            'Result (ผลลัพธ์)',
          ],
          explanation:
            'ส่วน Action คือหัวใจสำคัญที่สุด เพราะแสดงให้เห็นว่าตัวคุณแก้ปัญหาอย่างไรและมีทักษะอะไร',
        },
        {
          kind: 'error_fix',
          prompt:
            'ปรับปรุงประโยค Action ที่คลุมเครือให้ระบุบทบาทของตัวเองชัดเจน: "We just worked together and everything got fixed eventually."',
          answer:
            'I took the lead in debugging the system, coordinated daily fixes, and resolved the issue within two days.',
          explanation:
            'เปลี่ยนจาก We ทั่วไปมาเป็น I พร้อมระบุกริยาการลงมือทำที่ชัดเจน',
        },
        {
          kind: 'gap',
          prompt:
            'เติมวลีขึ้นต้นส่วนสรุปผลลัพธ์: _____ _____ _____, client satisfaction scores rose to ninety-five percent.',
          answer: 'As a result',
          explanation: 'As a result = ผลลัพธ์ที่ตามมาคือ...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษตามหลัก STAR: "ภารกิจของฉันคือการส่งมอบโครงการให้ทันกำหนดเวลาโดยไม่เกินงบประมาณ"',
          answer:
            'My task was to deliver the project on schedule without exceeding the budget.',
          explanation:
            'My task was to deliver the project on schedule without exceeding the budget.',
        },
      ],
      writing:
        'เขียนเล่าประสบการณ์การแก้ปัญหาในอดีตของคุณ 1 เรื่อง (100–120 คำ) โดยแบ่งหัวข้อย่อยชัดเจน: Situation, Task, Action, และ Result',
      writingSample:
        'Situation: Last year, our online store experienced sudden traffic spikes during a holiday campaign.\nTask: My responsibility was to ensure zero checkout downtime throughout the weekend.\nAction: I implemented automated server auto-scaling, configured rate limiting on heavy endpoints, and monitored traffic logs live.\nResult: As a result, we handled over one hundred thousand orders with zero server outages, achieving our highest weekend revenue ever.',
      writingNote:
        'ระบุตัวเลขหรือผลลัพธ์ที่เป็นรูปธรรมในส่วน Result เสมอ',
      speakingTopic:
        'เล่าประสบการณ์การแก้ปัญหาด้วย STAR Method 4 / 3 / 2 นาที',
      speakingBullets: [
        'ใช้เวลา 30 วินาทีแรกกับ Situation และ Task',
        'ใช้เวลาส่วนใหญ่เล่าสิ่งที่คุณลงมือทำด้วย I did, I decided, I led',
        'จบเรื่องด้วยผลลัพธ์ที่มีตัวเลขชัดเจนใน As a result...',
      ],
    },
    {
      day: 220,
      title: 'Defending Ideas Under Pressure: ตอบคำถามยากโดยไม่เสียความมั่นใจ',
      objective:
        'รับมือกับคำถามท้าทาย ข้อสงสัย หรือคำวิจารณ์ในที่ประชุมอย่างสุขุม ด้วยเทคนิค Acknowledge, Validate & Bridge (`That is a fair concern...`, `Allow me to clarify...`, `What that means in practice is...`)',
      explanation:
        'เมื่อนำเสนอโครงการหรือแสดงความเห็น มักจะมีคนถามคำถามยากๆ หรือท้าทายไอเดียของคุณ เช่น *"Isn\'t this too expensive?"* หรือ *"Will this really work?"* คนที่ไม่ได้เตรียมตัวมักจะ **ตกใจ ตอบโต้ด้วยอารมณ์ หรือรีบยอมจำนน**! เทคนิคระดับ B2 ในการคุมสถานการณ์คือ: 1) **Validate (ยอมรับความสมเหตุสมผลของคำถาม):** *"That is a very fair point."* หรือ *"I completely understand why that seems concerning at first glance."*, 2) **Bridge (เชื่อมโยงเข้าสู่ข้อมูลจริง):** *"Allow me to share the rationale behind our numbers."* หรือ *"Let us look at what the data actually tells us."*, 3) **Deliver Proof (อธิบายด้วยหลักฐาน):** *"While initial costs are higher, the automated solution pays for itself within six months."* การตอบแบบนี้ทำให้คุณดูเป็นผู้นำที่สุขุม น่าเชื่อถือ และไม่หวั่นไหวต่อแรงกดดัน!',
      sound: [
        'Low Pitch Stability Under Interruption',
        'clarify /ˈklær.ɪ.faɪ/ · perspective /pəˈspek.tɪv/ · rationale /ˌræʃ.əˈnɑːl/',
        'เมื่อถูกขัดจังหวะหรือถามคำถามท้าทาย อย่าขึ้นเสียงสูงหรือพูดเร็วขึ้น ให้ลดระดับเสียงลงเล็กน้อย (low, calm pitch) และหายใจลึกๆ 1 จังหวะก่อนตอบ',
        'ฝึกพูดวลีคุมเกม: "That is a fair ques-tion. ↗ Al-low me to cla-ri-fy."',
      ],
      l1: [
        'พูดว่า "No, you don\'t understand" หรือ "You are wrong" เมื่อถูกตั้งคำถาม ซึ่งถือเป็นการทำลายบรรยากาศการประชุมสากล',
        'ในภาษาไทยเราอาจพูดว่า "ไม่ใช่อย่างนั้นนะ คือว่า..." ได้แบบกันเอง แต่ในภาษาอังกฤษต้องให้เกียรติผู้ถามก่อนเสมอ',
        'ใช้สูตร: ชมคำถามก่อน (Good question / Fair challenge) แล้วค่อยอธิบายมุมของเรา (Here is how we see it...)',
      ],
      vocab: [
        ['rationale', 'เหตุผลเบื้องหลัง / คำอธิบายหลัก', '/ˌræʃ.əˈnɑːl/', 'explain the underlying rationale', 'อธิบายเหตุผลหลักเบื้องหลัง'],
        ['allow me to clarify', 'ขออนุญาตชี้แจงให้ชัดเจน...', '/əˈlaʊ miː tə ˈklær.ɪ.faɪ/', 'allow me to clarify the scope', 'ขออนุญาตชี้แจงขอบเขตงานให้ชัดเจน'],
        ['fair challenge', 'ข้อทักท้วงที่สมเหตุสมผล', '/feər ˈtʃæl.ɪndʒ/', 'that is a fair challenge', 'นั่นเป็นข้อทักท้วงที่สมเหตุสมผลมาก'],
        ['at first glance', 'เมื่อมองดูผิวเผินในแวบแรก', '/æt fɜːst ɡlɑːns/', 'valid concern at first glance', 'เป็นข้อกังวลที่เข้าใจได้เมื่อมองแวบแรก'],
        ['pays for itself', 'คุ้มทุนด้วยตัวมันเอง', '/peɪz fɔː ɪtˈself/', 'the upgrade pays for itself', 'การอัปเกรดนี้จะคืนทุนด้วยตัวมันเอง'],
        ['composure', 'ความสุขุมเยือกเย็น', '/kəmˈpəʊ.ʒər/', 'maintain calm composure', 'รักษาความสุขุมเยือกเย็น'],
      ],
      examples: [
        ['That is a completely understandable concern, especially given recent budget adjustments.', 'นั่นเป็นข้อกังวลที่เข้าใจได้อย่างยิ่ง โดยเฉพาะเมื่อพิจารณาจากการปรับลดงบประมาณล่าสุด'],
        ['Allow me to clarify why our projected return outweighs the upfront implementation fee.', 'ขออนุญาตชี้แจงว่าทำไมผลตอบแทนที่คาดการณ์ไว้จึงคุ้มค่ากว่าค่าดำเนินการในขั้นต้น'],
        ['At first glance, the timeline seems aggressive, but our modular architecture reduces risk.', 'เมื่อดูเผินๆ กรอบเวลาอาจดูท้าทาย แต่สถาปัตยกรรมแบบโมดูลาร์ของเราช่วยลดความเสี่ยงลงได้มาก'],
        ['I appreciate you raising that point; here is how our contingency plan addresses it.', 'ฉันขอบคุณที่คุณยกประเด็นนี้ขึ้นมา นี่คือแนวทางที่แผนสำรองของเรารับมือกับเรื่องดังกล่าว'],
      ],
      reading:
        'Mastering public argumentation requires psychological stamina as much as grammatical fluency. In corporate boardrooms and professional negotiations, sharp inquiries are not personal attacks; they represent natural skepticism from stakeholders protecting their assets. Defensive speakers immediately raise their voice or rush to justify themselves, inadvertently projecting weakness. Seasoned leaders pause deliberately, acknowledging the validity of the question with measured grace. Phrases like "That is a sensible objection" immediately disarm confrontation. By calmly pivoting to verifiable evidence and clear contingency models, the speaker preserves authority while guiding the audience toward common ground.',
      listenQ: 'How do seasoned leaders handle sharp inquiries in boardrooms?',
      listenA: 'They pause deliberately, acknowledge the question with grace, and pivot calmly to evidence.',
      dictation: 'Allow me to clarify why our long-term return outweighs upfront costs.',
      listenNote:
        'จับจังหวะการหยุดหลัง Allow me to clarify และเน้นคำว่า outweighs',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อความใดเป็นการตอบรับข้อสงสัยของผู้ฟังอย่างเป็นมืออาชีพและสุภาพที่สุด?',
          answer:
            'That is a fair concern; allow me to walk through the safety measures we have in place.',
          choices: [
            'You clearly did not read slide four, because that is already covered.',
            'That is a fair concern; allow me to walk through the safety measures we have in place.',
            'No, that will never happen because our team is very smart.',
            'Why are you asking that when we have limited time?',
          ],
          explanation:
            'ตอบรับด้วยความเคารพ (That is a fair concern) และเสนอข้อมูลสนับสนุน (allow me to walk through...)',
        },
        {
          kind: 'error_fix',
          prompt:
            'ปรับประโยคตอบรับที่ฟังดูก้าวร้าวให้กลายเป็นภาษา B2 ที่สุขุม: "You are wrong about the pricing; it is not expensive at all."',
          answer:
            'I understand why the price point raises questions; allow me to explain the long-term value it delivers.',
          explanation:
            'เปลี่ยนการตำหนิ (You are wrong) เป็นการยอมรับและอธิบายคุณค่าระยะยาว',
        },
        {
          kind: 'gap',
          prompt:
            'เติมวลีเชื่อมเพื่อชี้แจง: _____ _____ _____ _____ (ขออนุญาตชี้แจง) how this decision protects our timeline.',
          answer: 'Allow me to clarify',
          explanation: 'Allow me to clarify = ขออนุญาตชี้แจงให้ชัดเจน...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ฉันเข้าใจดีว่าทำไมเรื่องนี้ถึงดูน่ากังวลในแวบแรก แต่นี่คือวิธีการที่พวกเราป้องกันความเสี่ยง"',
          answer:
            'I understand why this seems concerning at first glance, but here is how we mitigate the risk.',
          explanation:
            'I understand why this seems concerning at first glance, but here is how we mitigate the risk.',
        },
      ],
      writing:
        'เขียนบทตอบโต้ข้อโต้แย้ง 1 ย่อหน้า (80–100 คำ) สมมุติว่ามีคนทักว่า "Your proposed timeline is too optimistic." โดยใช้เทคนิค Acknowledge, Validate & Bridge',
      writingSample:
        'That is a very fair challenge, especially considering the delays we experienced on similar projects last year. At first glance, six weeks does sound ambitious. However, allow me to clarify that fifty percent of the core components are already built and tested from our previous sprint. Furthermore, we have allocated two full-time senior engineers exclusively to this launch, ensuring that any unforeseen blockers are resolved immediately.',
      writingNote:
        'ตรวจสอบว่าเริ่มต้นด้วยการยอมรับมุมมองของอีกฝ่ายก่อนให้เหตุผลสนับสนุน',
      speakingTopic:
        'ตอบรับข้อโต้แย้งในที่ประชุมอย่างสุขุม 4 / 3 / 2 นาที',
      speakingBullets: [
        'ใช้วลี That is a sensible objection เพื่อเปิดบทสนทนา',
        'ใช้ Allow me to clarify the rationale... เพื่อเชื่อมเข้าสู่หลักฐาน',
        'รักษาน้ำเสียงให้สงบและมั่นคง',
      ],
    },
    {
      day: 221,
      title: 'Conceding Without Losing Ground: ศิลปะการยอมรับข้อจำกัดเพื่อชนะใจผู้ฟัง',
      objective:
        'แสดงความน่าเชื่อถือด้วยการยอมรับข้อจำกัดอย่างตรงไปตรงมา ก่อนตอกย้ำว่าประโยชน์หลักมีน้ำหนักเหนือกว่า (`While X is undeniably true, Y far outweighs it...`)',
      explanation:
        'ในการเจรจาหรือการโน้มน้าวใจ คนที่อ้างว่าข้อเสนอของตัวเอง "สมบูรณ์แบบ 100% ไม่มีข้อเสียเลย" มักจะถูกมองว่า **ไม่จริงใจหรือกำลังปิดบังอะไรบางอย่าง**! ผู้เชี่ยวชาญระดับ B2 ใช้วิธี **Concession (การยอมรับข้อจำกัดบางส่วนก่อน)** เพื่อซื้อความน่าเชื่อถือ (Credibility): 1) **โครงสร้าง Concession:** *"While it is true that onboarding requires initial effort, the long-term efficiency gains far outweigh it."*, 2) **`Granted, ... However, ...`** (ยอมรับตามตรงว่า... แต่อย่างไรก็ตาม... เช่น *Granted, the transition will take three weeks. However, annual errors will plummet by 80%.*), 3) **`I acknowledge that... Still, ...`** (ฉันตระหนักดีว่า... ถึงกระนั้น...). เทคนิคนี้จะทำให้ข้อโต้แย้งของคุณแข็งแกร่งจนยากที่จะมีใครปฏิเสธได้!',
      sound: [
        'Contrastive Pitch Contour in Concessive Clauses',
        'concession /kənˈseʃ.ən/ · granted /ˈɡrɑːn.tɪd/ · outweighs /ˌaʊtˈweɪz/',
        'ในประโยค While X, Y... เสียงจะทอดขึ้นสูงเล็กน้อยตรงจุดยอมรับ (X) แล้วดิ่งลงหนักแน่นและช้าลงตรงประเด็นสำคัญ (Y)',
        'ฝึกออกเสียง: "Whi-le costs are hi-gher, ↗ the qua-li-ty far out-weighs them."',
      ],
      l1: [
        'ปฏิเสธทุกข้อบกพร่องเพราะกลัวแพ้การโต้เถียง หรือพูดแก้ตัวซ้ำๆ',
        'การยอมรับความจริงในภาษาอังกฤษไม่ใช่การยอมแพ้ แต่เป็นสัญญาณของวุฒิภาวะและความโปร่งใส (Transparency)',
        'ใช้โครงสร้าง While / Granted ขึ้นต้น เพื่อแสดงว่าเราคิดรอบด้านแล้วก่อนตัดสินใจ',
      ],
      vocab: [
        ['granted', 'จริงอยู่ที่ว่า... / ยอมรับตามตรงว่า...', '/ˈɡrɑːn.tɪd/', 'granted, there is a learning curve', 'จริงอยู่ที่ว่าย่อมมีช่วงที่ต้องเรียนรู้'],
        ['outweighs', 'มีน้ำหนักหรือคุณค่ามากกว่า', '/ˌaʊtˈweɪz/', 'benefits far outweigh the costs', 'ประโยชน์ที่ได้มีน้ำหนักมากกว่าต้นทุนมาก'],
        ['concession', 'การยอมรับข้อจำกัด / การโอนอ่อน', '/kənˈseʃ.ən/', 'strategic concession', 'การยอมรับข้อจำกัดเชิงยุทธศาสตร์'],
        ['shortcoming', 'ข้อบกพร่อง / จุดอ่อน', '/ˈʃɔːtˌkʌm.ɪŋ/', 'acknowledge potential shortcomings', 'ยอมรับข้อบกพร่องที่อาจเกิดขึ้น'],
        ['trade-off', 'สิ่งที่ต้องแลกเปลี่ยน / ได้อย่างเสียอย่าง', '/ˈtreɪd.ɒf/', 'understand the practical trade-off', 'เข้าใจสิ่งที่ต้องยอมแลกในทางปฏิบัติ'],
        ['credibility', 'ความน่าเชื่อถือ', '/ˌkred.əˈbɪl.ə.ti/', 'build lasting credibility', 'สร้างความน่าเชื่อถือที่ยั่งยืน'],
      ],
      examples: [
        ['While switching software takes time, the productivity gains will far outweigh the initial friction.', 'แม้ว่าการเปลี่ยนซอฟต์แวร์จะต้องใช้เวลา แต่ประสิทธิภาพที่เพิ่มขึ้นจะคุ้มค่ายิ่งกว่าความขลุกขลักในระยะแรก'],
        ['Granted, the premium subscription is pricier; however, it includes comprehensive security audits.', 'จริงอยู่ที่ค่าบริการแบบพรีเมียมมีราคาสูงกว่า แต่อย่างไรก็ตาม มันรวมบริการตรวจสอบความปลอดภัยที่ครบวงจร'],
        ['I acknowledge that changing suppliers is inconvenient; still, supply reliability must come first.', 'ฉันตระหนักดีว่าการเปลี่ยนคู่ค้าเป็นเรื่องไม่สะดวก ถึงกระนั้น ความน่าเชื่อถือของห่วงโซ่อุปทานต้องมาก่อนเสมอ'],
        ['Every architectural decision involves trade-offs, and this approach minimizes data loss risk.', 'การตัดสินใจเชิงสถาปัตยกรรมทุกครั้งย่อมมีสิ่งที่ต้องแลก และแนวทางนี้ช่วยลดความเสี่ยงของการสูญเสียข้อมูลลงได้มากที่สุด'],
      ],
      reading:
        'Unseasoned negotiators often fear that admitting a single weakness will collapse their entire proposal. Consequently, they defend every detail dogmatically, alienating sophisticated listeners who instantly detect practical trade-offs. Persuasive communication at the B2 level embraces strategic concession as a badge of integrity. By explicitly naming the downside first—using structures like "Granted" or "While it is true that"—the speaker proves that their recommendations emerge from balanced scrutiny rather than blind optimism. Once the audience feels heard and respected, the pivot to the decisive benefit carries immense persuasive weight. Candor builds authority faster than perfection ever could.',
      listenQ: 'Why does strategic concession build authority faster than claims of perfection?',
      listenA: 'Because it proves recommendations emerge from balanced scrutiny and shows respect for practical reality.',
      dictation: 'While the initial setup takes effort, the long-term gains far outweigh it.',
      listenNote:
        'จับจังหวะ contrast ระหว่าง While the initial setup กับ the long-term gains far outweigh it',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้โครงสร้าง Concession ยอมรับข้อจำกัดอย่างมีชั้นเชิงได้ถูกต้องที่สุด?',
          answer:
            'While the upfront investment is substantial, the recurring savings will far outweigh it.',
          choices: [
            'Because the investment is substantial, the recurring savings will not matter.',
            'While the upfront investment is substantial, the recurring savings will far outweigh it.',
            'Although the investment is cheap, we still do not want to buy it.',
            'Granted the cost is high, so we must cancel everything immediately.',
          ],
          explanation:
            'โครงสร้าง While X (ยอมรับข้อจำกัด), Y (ชี้ผลประโยชน์ที่เหนือกว่า) เป็นการโน้มน้าวระดับสูง',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคนี้ให้ถูกต้อง: "Granted that we have less time, but however we will succeed."',
          answer:
            'Granted, we have less time; however, we will succeed.',
          explanation:
            'ห้ามใช้ but คู่กับ however ในประโยคเดียวกัน ให้เลือกใช้ตัวใดตัวหนึ่ง',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำกริยาบอกน้ำหนัก: The strategic benefits of this expansion far _____ (มีน้ำหนักมากกว่า) the operational risks.',
          answer: 'outweigh',
          explanation: 'outweigh = มีน้ำหนักมากกว่า / เหนือกว่า',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "จริงอยู่ที่ว่าหลักสูตรนี้เข้มข้นมาก แต่ผลลัพธ์ที่ได้จะเปลี่ยนแปลงทักษะของคุณอย่างสิ้นเชิง"',
          answer:
            'Granted, this curriculum is very intensive; however, the results will completely transform your skills.',
          explanation:
            'Granted, this curriculum is very intensive; however, the results will completely transform your skills.',
        },
      ],
      writing:
        'เขียนข้อความโน้มน้าว 1 ย่อหน้า (80–100 คำ) เพื่อเสนอการเปลี่ยนแปลงในองค์กรหรือชีวิต โดยใช้ Granted..., However... และ While..., ...far outweigh...',
      writingSample:
        'Granted, transitioning our team to asynchronous documentation will require discipline in the first few weeks. Some members may initially miss frequent verbal syncs. However, while the adjustment period demands extra care, the resulting autonomy and deep-work hours will far outweigh the temporary friction. Ultimately, clear written records protect our institutional knowledge.',
      writingNote:
        'ตรวจดูการใช้วลี Concession และเครื่องหมาย semicolon/comma ให้ถูกต้อง',
      speakingTopic:
        'นำเสนอข้อเสนอที่มีข้อจำกัดโดยใช้ศิลปะ Concession 4 / 3 / 2 นาที',
      speakingBullets: [
        'ยอมรับข้อจำกัดด้วย Granted, it is true that...',
        'ตอกย้ำคุณค่าหลักด้วย However, the benefits far outweigh the drawbacks...',
      ],
    },
    {
      day: 222,
      title: 'Pitching Solutions & Call to Action: ปิดท้ายอย่างทรงพลังและเร่งด่วน',
      objective:
        'นำเสนอทางออกของปัญหา (Solution Pitch) และกระตุ้นให้ผู้ฟังตัดสินใจลงมือทำทันทีด้วย Call to Action (CTA) ที่ชัดเจนและน่าดึงดูด',
      explanation:
        'การนำเสนอที่ดีจะไม่จบลงแค่ *"That is all, thank you"* แต่จะต้องจบด้วย **Call to Action (CTA) ที่คมชัด** ซึ่งบอกผู้ฟังอย่างเจาะจงว่า: 1) สิ่งที่ต้องทำต่อไปคืออะไร (Next Steps), 2) ทำไมต้องทำตอนนี้ (Urgency), 3) ถ้าไม่ทำจะเกิดผลเสียอย่างไร (Cost of Inaction). วลีสำคัญระดับ B2 ได้แก่: **`What I propose is that we...`** (สิ่งที่ฉันขอเสนอคือการที่พวกเรา...), **`The immediate next step is to...`** (ขั้นตอนเร่งด่วนถัดไปคือ...), **`If we delay, we risk losing...`** (หากเราล่าช้า เราเสี่ยงที่จะสูญเสีย...), **`Let us commit to this pilot and evaluate results in thirty days.`** การปิดการนำเสนอด้วยความชัดเจนเช่นนี้จะเปลี่ยนผู้ฟังให้กลายเป็นผู้สนับสนุนทันที!',
      sound: [
        'Decisive Finality and Action-Oriented Intonation',
        'propose /prəˈpəʊz/ · immediate /ɪˈmiː.di.ət/ · commit /kəˈmɪt/',
        'ในประโยค Call to Action น้ำเสียงต้องตกลงต่ำอย่างมั่นคงและเด็ดขาด (falling intonation) ห้ามขึ้นเสียงสูงท้ายประโยคเหมือนกำลังขออนุญาตหรือลังเล',
        'ฝึกออกเสียง: "Let us ap-prove the bud-get to-day ↘ and launch on Mon-day."',
      ],
      l1: [
        'จบการนำเสนอด้วยความลังเล เช่น "Yeah, that is kind of my idea, so what do you think?" หรือ "Sorry for speaking so long"',
        'คนไทยมักเขินอายที่จะสั่งการหรือบอกให้ผู้ฟังตัดสินใจตรงๆ เพราะกลัวดูก้าวก่าย',
        'จำไว้ว่าในเวทีสากล การบอก Next Steps ที่ชัดเจนคือการช่วยประหยัดเวลาและแสดงความเป็นมืออาชีพ',
      ],
      vocab: [
        ['call to action', 'การเรียกร้องให้ลงมือปฏิบัติ', '/kɔːl tə ˈæk.ʃən/', 'deliver a clear call to action', 'ส่งสารเรียกร้องให้ลงมือทำอย่างชัดเจน'],
        ['urgency', 'ความเร่งด่วน', '/ˈɜː.dʒən.si/', 'convey a sense of urgency', 'สื่อสารถึงความจำเป็นเร่งด่วน'],
        ['cost of inaction', 'ความสูญเสียจากการนิ่งเฉย', '/kɒst əv ɪnˈæk.ʃən/', 'calculate the cost of inaction', 'คำนวณต้นทุนของการไม่ลงมือทำ'],
        ['propose', 'เสนอแนะ / ยื่นข้อเสนอ', '/prəˈpəʊz/', 'propose a phased rollout', 'เสนอการทยอยเปิดตัวเป็นระยะ'],
        ['deliverable', 'ชิ้นงานหรือผลลัพธ์ที่ต้องส่งมอบ', '/dɪˈlɪv.ər.ə.bəl/', 'define the first deliverable', 'กำหนดผลงานส่งมอบชิ้นแรก'],
        ['momentum', 'แรงขับเคลื่อนต่อเนื่อง', '/məˈmen.təm/', 'maintain project momentum', 'รักษาแรงขับเคลื่อนของโครงการไว้'],
      ],
      examples: [
        ['What I propose is that we approve a four-week pilot with twenty beta users.', 'สิ่งที่ฉันขอเสนอคือให้เราอนุมัติโครงการนำร่องสี่สัปดาห์ร่วมกับผู้ใช้รุ่นทดสอบ 20 คน'],
        ['The immediate next step is to finalize the API contracts by this Thursday.', 'ขั้นตอนเร่งด่วนลำดับแรกคือการสรุปข้อตกลง API ให้เสร็จสิ้นภายในวันพฤหัสบดีนี้'],
        ['If we delay this decision until next quarter, we risk losing our first-mover advantage.', 'หากเราชะลอการตัดสินใจนี้ไปจนถึงไตรมาสหน้า เราเสี่ยงที่จะสูญเสียความได้เปรียบในฐานะผู้ริเริ่มรายแรก'],
        ['Let us commit to this rollout today and review early engagement numbers in two weeks.', 'ขอให้เราตกลงเริ่มการเปิดตัวนี้ในวันนี้ แล้วกลับมาประเมินตัวเลขการมีส่วนร่วมในอีกสองสัปดาห์'],
      ],
      reading:
        'A persuasive pitch without an unambiguous call to action resembles a ship without a rudder. Listeners may appreciate the aesthetic visuals and nod along with the logical justifications, but without explicit direction, collective momentum dissipates within hours. High-performing leaders understand that decisions require deliberate closure. By articulating a clear next step—anchored to concrete deadlines and specific project owners—the presenter eliminates ambiguity. Framing the choice in terms of urgency and the cost of inaction sharpens resolve. Persuasion culminates not in intellectual agreement, but in decisive, coordinated execution.',
      listenQ: 'What happens to collective momentum if a pitch lacks an explicit call to action?',
      listenA: 'It dissipates within hours without clear direction.',
      dictation: 'What I propose is that we begin the four-week pilot program immediately.',
      listenNote:
        'จับเสียงเชื่อม What I propose is that we (/wɒt aɪ prəˈpəʊz ɪz ðæt wiː/)',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ประโยคใดทำหน้าที่เป็น Call to Action (CTA) ที่เด็ดขาดและเป็นรูปธรรมที่สุด?',
          answer:
            'Let us sign off on the design specs today so engineering can start building on Monday.',
          choices: [
            'Maybe we can think about this again sometime next month if people have time.',
            'Let us sign off on the design specs today so engineering can start building on Monday.',
            'I hope you guys liked my talk; feel free to do whatever you want.',
            'There are many things we could do, but it is entirely up to you.',
          ],
          explanation:
            'ระบุสิ่งที่ต้องทำชัดเจน (sign off design specs) และเวลาที่ต้องทำ (today / Monday)',
        },
        {
          kind: 'error_fix',
          prompt:
            'ปรับปรุงประโยคปิดท้ายให้มีความเป็นผู้นำและมีทิศทางชัดเจน: "So, yeah, that\'s pretty much everything, maybe we do it later."',
          answer:
            'To maintain our momentum, I propose that we approve this initial plan and review progress next Friday.',
          explanation:
            'เปลี่ยนความคลุมเครือเป็นข้อเสนอที่ชัดเจนพร้อมกำหนดเวลาทบทวน',
        },
        {
          kind: 'gap',
          prompt:
            'เติมวลีเปิดข้อเสนอ: _____ _____ _____ (สิ่งที่ฉันขอเสนอ) is that we test the prototype internally first.',
          answer: 'What I propose',
          explanation: 'What I propose = สิ่งที่ฉันขอเสนอแนะคือ...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ขั้นตอนเร่งด่วนถัดไปคือการจัดตารางประชุมร่วมกับทีมวิศวกรรม"',
          answer:
            'The immediate next step is to schedule an alignment meeting with the engineering team.',
          explanation:
            'The immediate next step is to schedule an alignment meeting with the engineering team.',
        },
      ],
      writing:
        'เขียน Pitch ปิดการขายหรือเสนอแนวคิด 1 ย่อหน้า (80–100 คำ) โดยระบุ Problem, Solution, และปิดด้วย Call to Action (CTA) ที่มีเวลาเจาะจง',
      writingSample:
        'Manual inventory counting currently costs our store ten hours every Sunday. To solve this bottleneck, what I propose is that we adopt a barcode scanning application this month. Built with our current database in mind, setup will take only two days. The immediate next step is to approve the software license today so our staff can begin hands-on training on Wednesday.',
      writingNote:
        'ตรวจสอบว่าประโยคสุดท้ายเป็นคำเรียกร้องที่ระบุวันเวลาชัดเจน',
      speakingTopic:
        'พูด Pitch สั้นๆ พร้อม Call to Action ที่ทรงพลัง 4 / 3 / 2 นาที',
      speakingBullets: [
        'บอกปัญหาและทางออกภายใน 1 นาทีแรก',
        'ปิดท้ายด้วย What I propose is that we... อย่างมั่นใจ',
      ],
    },
    {
      day: 223,
      title: 'B2 Proficiency Dry Run: จำลองสถานการณ์และอุดรอยรั่วก่อนสอบวัดระดับ',
      objective:
        'ทดสอบความพร้อมรอบด้าน ครอบคลุมการคิดเชิงตรรกะ การเชื่อมโยงความคิด การคุมโทนภาษา และแก้จุดผิดไวยากรณ์ก่อนเข้าสู่ Milestone Assessment 4',
      explanation:
        'ในวันที่ 223 นี้ เราจะทำการจำลองสถานการณ์จริง (Dry Run Simulation) เพื่อตรวจเช็กความพร้อมก่อนก้าวเข้าสู่แบบประเมิน **Milestone Assessment 4 (Day 224)** ซึ่งเป็นประตูผ่านระดับ B2 Operational Fluency! ในการจำลองวันนี้ คุณจะได้ทบทวน: 1) **PREP Framework** ในการจัดระเบียบความคิดแบบฉับพลัน, 2) **STAR Method** ในการเล่าผลงานเชิงประจักษ์, 3) **Diplomatic Tone & Hedging** การโต้แย้งอย่างสุขุม, 4) **Concession Structures** (Granted..., While...), 5) **Action-Oriented Closures**. ให้สังเกตจุดที่ยังสะดุด แล้วใช้เวลาวันนี้ปรับแต่งให้คล่องตัวที่สุดครับ!',
      sound: [
        'Flow and Cohesion Across Multi-Sentence Explanations',
        'simulation /ˌsɪm.jəˈleɪ.ʃən/ · diagnostic /ˌdaɪ.əɡˈnɒs.tɪk/ · fluency /ˈfluː.ən.si/',
        'รักษาจังหวะการหายใจและการเชื่อมเสียงในระดับ B2 ให้สม่ำเสมอ อย่าหยุดชะงักนานเกิน 2 วินาทีระหว่างเปลี่ยนประเด็น',
        'ฝึกออกเสียงประโยคเชื่อม: "Mo-ving on to our next chal-lenge, ↗ the da-ta reveals..."',
      ],
      l1: [
        'ตื่นเต้นและพูดเร็วเกินไปจนลืมออกเสียงตัวสะกดท้ายคำ (-s, -ed, -th)',
        'เมื่อเจอบททดสอบ คนไทยมักกังวลเรื่องแกรมมาร์จนหยุดพูด แต่ในระดับ B2 ความต่อเนื่อง (Fluency) และการแก้ปัญหาเฉพาะหน้าสำคัญพอๆ กับความแม่นยำ (Accuracy)',
        'หายใจลึกๆ วางโครงสร้างในหัว 3 วินาทีก่อนพูด แล้วใช้เครื่องมือที่เรียนมาขับเคลื่อนประโยค',
      ],
      vocab: [
        ['dry run', 'การซ้อมเสมือนจริง', '/draɪ rʌn/', 'conduct a full dry run', 'ทำการซ้อมใหญ่เสมือนจริง'],
        ['diagnostic', 'การตรวจวินิจฉัยเพื่อประเมิน', '/ˌdaɪ.əɡˈnɒs.tɪk/', 'self-diagnostic check', 'การตรวจวินิจฉัยประเมินตนเอง'],
        ['stamina', 'ความอึด / พลังความต่อเนื่อง', '/ˈstæm.ɪ.nə/', 'build speaking stamina', 'สร้างความอึดในการพูดต่อเนื่อง'],
        ['cohesive', 'เชื่อมโยงสอดคล้องกันอย่างดี', '/kəʊˈhiː.sɪv/', 'deliver cohesive arguments', 'นำเสนอข้อโต้แย้งที่เชื่อมโยงเป็นเนื้อเดียว'],
        ['gatekeeper', 'ด่านตรวจสอบ / ประตูวัดผล', '/ˈɡeɪtˌkiː.pər/', 'proficiency gatekeeper', 'เกณฑ์วัดระดับความเชี่ยวชาญ'],
        ['unwavering', 'มั่นคงไม่หวั่นไหว', '/ʌnˈweɪ.vər.ɪŋ/', 'unwavering confidence', 'ความมั่นใจที่มั่นคง'],
      ],
      examples: [
        ['Conducting a thorough dry run helps identify hidden hesitations before live meetings.', 'การซ้อมเสมือนจริงอย่างถี่ถ้วนช่วยชี้ให้เห็นจุดที่ยังลังเลก่อนการประชุมจริง'],
        ['By combining PREP with diplomatic hedging, she handled every challenging inquiry.', 'ด้วยการผสาน PREP เข้ากับการใช้ภาษาที่นุ่มนวล เธอจึงรับมือกับทุกข้อซักถามที่ท้าทายได้'],
        ['Our primary objective is to demonstrate clear operational fluency across diverse topics.', 'เป้าหมายหลักของเราคือการแสดงให้เห็นถึงความคล่องตัวในการสื่อสารในหลากหลายหัวข้อ'],
        ['Maintain steady breathing and let your structural frameworks guide the conversation.', 'รักษาลมหายใจให้สม่ำเสมอและปล่อยให้กรอบโครงสร้างความคิดนำทางบทสนทนาของคุณ'],
      ],
      reading:
        'Before athletes compete in championship finals, they engage in rigorous simulated runs under conditions mirroring actual competition. Language learners approaching the B2 proficiency gate require an identical discipline. Operational fluency does not imply knowing every obscure vocabulary word in the dictionary; rather, it reflects the ability to navigate complex social, professional, and intellectual interactions without breaking down into confusion. By testing argumentative frameworks, diplomatic hedges, and structured narrative arcs during this dry run, learners diagnose lingering friction points. Solidifying these patterns transforms conscious rules into effortless reflexes, preparing the mind for tomorrow decisive milestone.',
      listenQ: 'What does operational fluency truly reflect at the B2 level?',
      listenA: 'The ability to navigate complex interactions without breaking down into confusion.',
      dictation: 'Operational fluency means navigating complex discussions with confidence and ease.',
      listenNote:
        'จับเสียงเชื่อม discussions with และออกเสียง ease /iːz/ ให้ก้องชัดเจน',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดแสดงถึงการให้เหตุผลที่สมบูรณ์แบบระดับ B2 โดยมีการยอมรับและเสนอทางออก?',
          answer:
            'While our initial estimate was optimistic, we have adjusted the schedule to protect product quality.',
          choices: [
            'We were wrong so let us just stop working on this completely.',
            'While our initial estimate was optimistic, we have adjusted the schedule to protect product quality.',
            'The schedule is fine and nobody should ask any questions.',
            'Because we are late, everything is destroyed.',
          ],
          explanation:
            'ยอมรับความจริงอย่างเป็นมืออาชีพและระบุทางออกที่ปกป้องคุณภาพงาน',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคนี้ให้ถูกต้อง: "Having interview ten candidates, the final decision was made by Sarah."',
          answer:
            'Having interviewed ten candidates, Sarah made the final decision.',
          explanation:
            'แก้ Having interview เป็น Having interviewed และแก้ dangling modifier ให้ Sarah เป็นประธานหลัก',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมแสดงความคิดเห็น: In my _____, the proposed framework delivers the highest return on investment.',
          answer: 'view',
          explanation: 'In my view = ในมุมมองของฉัน...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ผลลัพธ์ที่ตามมาคือ ประสิทธิภาพของทีมเราเพิ่มขึ้นสามสิบเปอร์เซ็นต์ในไตรมาสแรก"',
          answer:
            'As a result, our team productivity increased by thirty percent in the first quarter.',
          explanation:
            'As a result, our team productivity increased by thirty percent in the first quarter.',
        },
      ],
      writing:
        'เขียนซ้อมความพร้อม 1 ย่อหน้า (100 คำ) อธิบายว่าคุณวางแผนจะนำทักษะภาษาอังกฤษที่ได้เรียนมาไปต่อยอดในการทำงานหรือชีวิตจริงอย่างไร',
      writingSample:
        'Having completed thirty-two weeks of intensive English study, I feel ready to apply my skills in global environments. In my view, structuring ideas through PREP will make my workplace contributions far more persuasive. When collaborating with international colleagues, I will use tactful hedging to provide constructive feedback without creating friction. Furthermore, by practicing 4/3/2 speaking routines weekly, I will continue sharpening my spontaneous delivery.',
      writingNote:
        'ตรวจสอบความสละสลวยของการเชื่อมโยงความคิดและ Tenses ในบทเขียน',
      speakingTopic:
        'ประเมินความพร้อมและจุดแข็งทางภาษาของตัวเอง 4 / 3 / 2 นาที',
      speakingBullets: [
        'พูดถึง 3 เครื่องมือที่คุณมั่นใจที่สุด (เช่น PREP, STAR, Hedging)',
        'เล่าเป้าหมายที่คุณจะทำให้สำเร็จใน Milestone Assessment วันพรุ่งนี้',
      ],
    },
    {
      day: 224,
      type: 'assessment',
      title: 'Milestone Assessment 4: B2 Operational Fluency Gate (การประเมินทักษะ B2 รอบด้าน)',
      objective:
        'ประเมินทักษะภาษาอังกฤษระดับ B2 Operational Fluency ครบทั้ง 4 ทักษะ: การฟังจับประเด็นซับซ้อน, การอ่านวิเคราะห์บทความวิชาการ, การเขียนแสดงความคิดเห็นเชิงตรรกะ, และการพูดแบบ PREP/STAR',
      explanation:
        'ยินดีต้อนรับสู่ **Milestone Assessment 4 (Day 224)**! นี่คือหมุดหมายที่สำคัญที่สุดของการเรียนในระดับ Upper-Intermediate (B2 Gatekeeper). การผ่านระดับ B2 หมายความว่าคุณมี **"Operational Fluency"** — คุณสามารถทำงานในบริษัทข้ามชาติ ประชุม นำเสนอ เจรจาต่อรอง และสื่อสารกับชาวต่างชาติได้อย่างเป็นธรรมชาติโดยไม่ต้องแปลไทยในหัวอีกต่อไป! แบบประเมินวันนี้ประกอบด้วย: 1) บทอ่านเชิงวิเคราะห์ความยาว 350+ คำ, 2) ข้อสอบฟังและจับใจความลึกซึ้ง, 3) ข้อสอบเขียน Opinion Essay พร้อม Rubric, 4) การทดสอบพูด 4/3/2 นาทีแบบไร้สคริปต์. ขอให้ตั้งสมาธิและปลดปล่อยศักยภาพของคุณออกมาให้เต็มที่ครับ!',
      sound: [
        'Mastering Natural Rhythm and Pitch Variation in High-Stakes Assessments',
        'operational /ˌɒp.ərˈeɪ.ʃən.əl/ · benchmark /ˈbentʃ.mɑːk/ · assessment /əˈses.mənt/',
        'ในการประเมินระดับ B2 ผู้ตรวจจะฟังทั้งการลงเสียงหนักเบา (Stress), การเชื่อมเสียง (Linking), และการหยุดวรรคตามความหมาย (Chunking)',
        'ฝึกออกเสียงประโยคประกาศความสำเร็จ: "I have de-ve-loped ge-nu-ine ope-ra-tio-nal flu-en-cy."',
      ],
      l1: [
        'อย่าปล่อยให้ความกังวลเรื่องข้อผิดพลาดเล็กๆ น้อยๆ มาหยุดยั้งความลื่นไหลของการสื่อสาร',
        'ในระดับสากล ผู้สื่อสารระดับ B2 ไม่ใช่คนที่ไม่เคยพูดผิดเลย แต่เป็นคนที่สามารถสื่อสารประเด็นซับซ้อนได้อย่างชัดเจนและแก้ไขคำพูดตัวเองได้เมื่อรู้ตัว (Self-correction)',
        'เชื่อมั่นในคลังคำศัพท์ Chunks และโครงสร้างทางไวยากรณ์ที่คุณฝึกฝนมาตลอด 224 วัน',
      ],
      vocab: [
        ['benchmark', 'เกณฑ์มาตรฐานเปรียบเทียบ', '/ˈbentʃ.mɑːk/', 'reach a key benchmark', 'บรรลุเกณฑ์มาตรฐานสำคัญ'],
        ['operational fluency', 'ความคล่องแคล่วในการใช้งานจริง', '/ˌɒp.ərˈeɪ.ʃən.əl ˈfluː.ən.si/', 'demonstrate operational fluency', 'แสดงความคล่องแคล่วในการใช้งานจริง'],
        ['synthesis', 'การสังเคราะห์และรวบรวมข้อมูล', '/ˈsɪn.θə.sɪs/', 'require intellectual synthesis', 'ต้องการการสังเคราะห์ทางความคิด'],
        ['articulate', 'สื่อสารได้อย่างชัดถ้อยชัดคำ', '/ɑːˈtɪk.jə.lət/', 'articulate nuanced viewpoints', 'สื่อสารมุมมองที่มีความละเอียดอ่อนได้อย่างชัดเจน'],
        ['comprehension', 'ความเข้าใจอย่างลึกซึ้ง', '/ˌkɒm.prɪˈhen.ʃən/', 'deep listening comprehension', 'ความเข้าใจในการฟังอย่างลึกซึ้ง'],
        ['culmination', 'จุดสูงสุดของความพยายาม', '/ˌkʌl.mɪˈneɪ.ʃən/', 'mark the culmination of effort', 'เป็นจุดสูงสุดของความมุมานะพยายาม'],
      ],
      examples: [
        ['Reaching Day 224 represents a monumental milestone in your language journey.', 'การก้าวมาถึงวันที่ 224 ถือเป็นหมุดหมายอันยิ่งใหญ่ในเส้นทางการเรียนรู้ภาษาของคุณ'],
        ['Operational fluency empowers professionals to express complex ideas without mental translation.', 'ความคล่องตัวในการใช้งานจริงช่วยให้คนทำงานสามารถถ่ายทอดความคิดที่ซับซ้อนได้โดยไม่ต้องแปลในหัว'],
        ['The ability to balance assertiveness with tactful diplomacy defines modern leadership.', 'ความสามารถในการรักษาสมดุลระหว่างความหนักแน่นกับการทูตที่นุ่มนวลคือนิยามของผู้นำยุคใหม่'],
        ['Celebrate how far you have come since Phase 0, and step confidently into Phase 5.', 'จงภาคภูมิใจในระยะทางที่คุณเดินทางมาตั้งแต่ Phase 0 และก้าวต่อไปสู่ Phase 5 ด้วยความมั่นใจ'],
      ],
      reading:
        'The transition from intermediate learner to operationally fluent communicator marks one of the most transformative leaps in second language acquisition. At the lower stages, learners operate as sentence assemblers, mentally selecting words, checking grammatical agreements, and translating phrases word-by-word from their native tongue. This cognitive bottleneck inevitably produces stuttered delivery and listener fatigue. By contrast, an operationally fluent speaker at the B2 benchmark utilizes lexical chunks, discursive frameworks like PREP, and tactical concessions as second nature. When presented with ambiguous challenges or critical feedback, they respond with measured diplomacy rather than emotional panic. Their writing displays syntactical elegance, incorporating participial phrases and cleft structures that direct emphasis with surgical precision. Most crucially, language ceases to be an academic subject studied in isolation; it becomes an active cognitive conduit through which complex ideas, empathy, and professional ambition are seamlessly expressed.',
      listenQ: 'How does an operationally fluent B2 speaker differ from a lower-stage learner?',
      listenA: 'They use lexical chunks, frameworks, and diplomacy as second nature without translating word-by-word.',
      dictation: 'Operational fluency enables professionals to communicate with nuanced diplomacy and precision.',
      listenNote:
        'จับเสียงเชื่อม nuanced diplomacy (/ˈnjuː.ɑːnst dɪˈpləʊ.mə.si/) และ precision',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดสะท้อนทักษะระดับ B2 Operational Fluency ได้สมบูรณ์ที่สุดในการประชุมนานาชาติ?',
          answer:
            'While I appreciate your perspective, allow me to clarify how our proposed architecture mitigates long-term security risks.',
          choices: [
            'You are completely wrong, so I am not going to listen to your ideas anymore.',
            'While I appreciate your perspective, allow me to clarify how our proposed architecture mitigates long-term security risks.',
            'I have no opinion, whatever you say is fine with me.',
            'Because we did it last year, so this year we must do it exactly the same.',
          ],
          explanation:
            'ผสานการยอมรับมุมมองของผู้อื่น (While I appreciate...) เข้ากับการชี้แจงอย่างสุภาพและทรงพลัง (allow me to clarify...)',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคนี้ให้ถูกต้องตามมาตรฐาน B2: "Having discuss the budget, the contract was signed by both parties immediately."',
          answer:
            'Having discussed the budget, both parties signed the contract immediately.',
          explanation:
            'แก้ discuss เป็น discussed (ช่อง 3) และแก้ dangling modifier โดยดึง both parties มาเป็นประธานหลัก',
        },
        {
          kind: 'gap',
          prompt:
            'เติมวลี Concession: _____, the learning curve is steep; however, the long-term career benefits are enormous.',
          answer: 'Granted',
          explanation: 'Granted = จริงอยู่ที่ว่า... / ยอมรับตามตรงว่า...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษระดับมืออาชีพ: "ในมุมมองของฉัน การจัดลำดับความสำคัญของความชัดเจนจะช่วยป้องกันความเข้าใจผิดในทีม"',
          answer:
            'In my view, prioritizing communication clarity will prevent misunderstandings across the team.',
          explanation:
            'In my view, prioritizing communication clarity will prevent misunderstandings across the team.',
        },
      ],
      writing:
        'เขียน Comprehensive Opinion Essay (150–200 คำ) ในหัวข้อ: "Can artificial intelligence replace human judgment in strategic decision-making?" โดยบังคับใช้: 1) โครงสร้าง PREP หรือ Concession (While/Granted), 2) Participle Clause (Present หรือ Having + V3), 3) Hedging Language (tend to, appears to, broadly speaking)',
      writingSample:
        'In my view, while artificial intelligence can process massive datasets with unmatched speed, it cannot fully replace human judgment in nuanced strategic decisions. Broadly speaking, machine learning models tend to identify historical correlations rather than causal understanding. Having analyzed automated recommendations across several industries, researchers observed that algorithms often fail to anticipate irrational human behavior or ethical complexities. Granted, predictive analytics offers indispensable decision support; however, the final responsibility must remain anchored in human empathy and situational discernment. For this reason, the most resilient organizations will combine data intelligence with experienced leadership rather than surrendering authority entirely to automated systems.',
      writingNote:
        'ตรวจเช็กการแบ่งย่อหน้า ความสอดคล้องของคำเชื่อม และการไม่หลุดคำเหมารวม 100%',
      speakingTopic:
        'Milestone 4 Capstone Speech: นำเสนอวิสัยทัศน์หรือทางออกของปัญหาใหญ่ 4 / 3 / 2 นาที',
      speakingBullets: [
        'นาทีที่ 1: เปิดประเด็นด้วย Point ที่ทรงพลัง และใช้ Concession ยอมรับข้อจำกัด',
        'นาทีที่ 2–3: เล่ากรณีศึกษาตัวอย่างด้วย STAR Method พร้อมตัวเลขที่เป็นรูปธรรม',
        'นาทีสุดท้าย: สรุปด้วย Call to Action ที่คมชัดและเร่งด่วน',
      ],
    },
  ]
);
