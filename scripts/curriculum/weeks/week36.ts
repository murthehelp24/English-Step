import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 5: ความแม่นยำระดับสูงและการต่อยอดใช้จริงตลอดชีวิต';

export const WEEK36: ModuleSeed = createModule(
  {
    week: 36,
    phase: 5,
    phase_title: PHASE_TITLE,
    cefr_level: 'High-B2 → C1',
    title: 'Comprehensive Graduation & Personal Lifelong Immersion System',
    summary:
      'วางระบบภาษาอังกฤษเป็น Operating System ประจำชีวิตตลอดไป เสพสื่อและเก็บ Chunk อัตโนมัติ คิดเป็นภาษาอังกฤษโดยไร้ตัวแปลไทย พร้อมแบบทดสอบจบหลักสูตร 252 วัน (Grand Capstone Graduation)',
    focus: 'Lifelong Immersion Architecture, Autonomous Chunk Harvesting, Thai-Free Thinking, Graduation Capstone',
  },
  [
    {
      day: 246,
      title: 'English as an Operating System: สร้างระบบแวดล้อมทางภาษาให้เป็นส่วนหนึ่งของชีวิต',
      objective:
        'เปลี่ยนภาษาอังกฤษจากการเป็น "วิชาที่ต้องนั่งเรียน" ให้กลายเป็น "สภาพแวดล้อมอัตโนมัติ" ในชีวิตประจำวัน (Full Digital Immersion)',
      explanation:
        'เมื่อคุณเดินทางมาถึงสัปดาห์สุดท้ายของหลักสูตร สิ่งที่สำคัญที่สุดไม่ใช่การท่องสูตรไวยากรณ์เพิ่มอีกข้อ แต่คือ **"การสร้างระบบนิเวศ (Ecosystem) ที่ทำให้คุณได้ใช้ภาษาอังกฤษทุกวันโดยไม่ต้องฝืนใจ"**! คนที่เรียนภาษาแล้วลืม มักเกิดจากการหยุดใช้หลังจบคอร์ส แต่คนที่ใช้ภาษาได้อย่างเจ้าของภาษาจะเปลี่ยนภาษาอังกฤษให้เป็น **Operating System ของชีวิต**: 1) เปลี่ยนภาษาเมนูของโทรศัพท์ แล็ปท็อป และระบบค้นหาให้เป็นภาษาอังกฤษ 100%, 2) บริโภคข่าวสาร ความรู้ และความบันเทิง (YouTube, Podcasts, X, Reddit) จากแหล่งข้อมูลภาษาอังกฤษเป็นหลัก, 3) เมื่อมีข้อสงสัย ให้ค้นหาคำตอบใน Google หรือ AI ด้วยภาษาอังกฤษเสมอ. เมื่อภาษาอังกฤษกลายเป็นหน้าต่างสู่โลกกว้าง คุณจะไม่มีวันสูญเสียความคล่องตัวนี้ไปเลย!',
      sound: [
        'Effortless Flow in Daily Functional Commands',
        'immersion /ɪˈmɜː.ʃən/ · ecosystem /ˈiː.kəʊˌsɪs.təm/ · habitual /həˈbɪtʃ.u.əl/',
        'เมื่อคุยหรือใช้งานอุปกรณ์ภาษาอังกฤษ น้ำเสียงจะกลายเป็นธรรมชาติ มีจังหวะสั้นกระชับ ไม่ติดขัด และไม่เกร็ง',
        'ฝึกออกเสียง: "En-glish is not a sub-ject; ↗ it is my dai-ly ope-ra-ting sys-tem."',
      ],
      l1: [
        'พอนอกห้องเรียนก็สลับกลับไปเสพสื่อและค้นหาข้อมูลเป็นภาษาไทย 100% จนทักษะที่สะสมมาค่อยๆ หดหายไป (Skill Atrophy)',
        'คนส่วนใหญ่คิดว่าต้องบินไปอยู่ต่างประเทศถึงจะมี Immersion ได้ แต่ในยุคดิจิทัล คุณสามารถสร้างสภาพแวดล้อมภาษาอังกฤษ 100% ได้จากห้องนอนของคุณเอง',
        'เปลี่ยนนิสัยเล็กๆ วันละก้าว: วันนี้เปลี่ยนภาษาโทรศัพท์ พรุ่งนี้ฟัง Podcast ภาษาอังกฤษระหว่างเดินทาง',
      ],
      vocab: [
        ['immersion', 'การจมจุ่มอยู่ในสภาพแวดล้อมทางภาษา', '/ɪˈmɜː.ʃən/', 'total digital immersion', 'การใช้ชีวิตแวดล้อมด้วยภาษาอังกฤษในโลกดิจิทัล'],
        ['ecosystem', 'ระบบนิเวศ / สภาพแวดล้อมที่เกื้อหนุน', '/ˈiː.kəʊˌsɪs.təm/', 'personal learning ecosystem', 'ระบบนิเวศการเรียนรู้ส่วนบุคคล'],
        ['habitual', 'ที่เป็นไปตามความเคยชินอัตโนมัติ', '/həˈbɪtʃ.u.əl/', 'habitual daily exposure', 'การรับสัมผัสภาษาอย่างเป็นความเคยชินทุกวัน'],
        ['sustainable', 'ที่ยั่งยืนและทำได้ต่อเนื่องตลอดไป', '/səˈsteɪ.nə.bəl/', 'build sustainable routines', 'สร้างกิจวัตรที่ทำได้อย่างยั่งยืน'],
        ['atrophy', 'การเสื่อมถอยจากการไม่ได้ใช้งาน', '/ˈæt.rə.fi/', 'prevent skill atrophy', 'ป้องกันการเสื่อมถอยของทักษะ'],
        ['default', 'ค่าเริ่มต้นที่ตั้งไว้เสมอ', '/dɪˈfɔːlt/', 'set English as the default', 'ตั้งภาษาอังกฤษเป็นภาษาเริ่มต้น'],
      ],
      examples: [
        ['Setting English as my phone default language provides dozens of micro-interactions every day.', 'การตั้งภาษาอังกฤษเป็นภาษาเริ่มต้นในโทรศัพท์ช่วยให้ฉันได้สัมผัสภาษาหลายสิบครั้งในแต่ละวัน'],
        ['Total digital immersion eliminates the artificial divide between studying and living.', 'การแวดล้อมตัวเองด้วยภาษาในโลกดิจิทัลช่วยลบเส้นแบ่งระหว่างการนั่งเรียนกับการใช้ชีวิตจริง'],
        ['Consuming morning podcasts in English prepares your brain for spontaneous workplace discussions.', 'การฟังพอดแคสต์ภาษาอังกฤษในตอนเช้าช่วยเตรียมสมองของคุณให้พร้อมสำหรับการสนทนาในที่ทำงาน'],
        ['Consistent low-friction exposure guarantees that your fluency remains razor-sharp for life.', 'การเปิดรับภาษาอย่างสม่ำเสมอโดยไร้แรงต้านจะช่วยรักษาความคล่องตัวของคุณให้เฉียบคมไปตลอดชีวิต'],
      ],
      reading:
        'Language mastery is fundamentally a lifestyle architecture rather than a finite academic destination. Millions of dedicated learners complete high-level textbooks only to witness their hard-earned fluency decay within months of inactivity. Second language acquisition researchers refer to this phenomenon as linguistic attrition. To insulate oneself against atrophy, the learner must transition from deliberate study to ambient immersion. By configuring digital devices, streaming entertainment, and intellectual inquiries in English by default, the language ceases to be an external chore. Instead, it becomes the transparent glass through which one perceives the world. When input occurs effortlessly throughout the waking day, communicative confidence requires no conscious willpower to sustain.',
      listenQ: 'How does setting English as the default on digital devices prevent linguistic attrition?',
      listenA: 'It makes input effortless throughout the day, removing the need for conscious willpower.',
      dictation: 'Digital immersion turns English into a seamless daily operating system.',
      listenNote:
        'จับเสียงเชื่อม turns English into a seamless (/tɜːnz ˈɪŋ.ɡlɪʃ ˈɪn.tə ə ˈsiːm.ləs/)',
      drills: [
        {
          kind: 'choice',
          prompt:
            'พฤติกรรมใดช่วยรักษาความคล่องทางภาษาในระยะยาวได้อย่างยั่งยืนที่สุดตามหลัก Lifestyle Immersion?',
          answer:
            'Configuring digital devices in English and listening to authentic podcasts during daily commutes.',
          choices: [
            'Stopping all English practice until you need to travel abroad next year.',
            'Memorizing grammar rule tables once a month without ever speaking or listening.',
            'Configuring digital devices in English and listening to authentic podcasts during daily commutes.',
            'Only reading English dictionaries when forced to by a supervisor.',
          ],
          explanation:
            'การเปลี่ยนอุปกรณ์และเสพสื่อในชีวิตประจำวันสร้างการรับรู้ภาษาอย่างต่อเนื่องโดยไม่เกิดความล้า',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคนี้ให้ถูกต้อง: "English is not just a subject for study, but a tool for live everyday."',
          answer:
            'English is not just a subject to study, but a tool for living every day.',
          explanation:
            'หลัง preposition "for" ต้องใช้กริยา V-ing (living) และ every day แยกคำเมื่อเป็น adverb',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำนาม: Regular daily exposure is the best way to prevent skill _____ (การเสื่อมถอย).',
          answer: 'atrophy',
          explanation: 'skill atrophy = การเสื่อมถอยของทักษะจากการไม่ได้ใช้งาน',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "การทำให้ภาษาอังกฤษเป็นค่าเริ่มต้นในชีวิตประจำวันจะช่วยรักษาความคล่องตัวของคุณตลอดไป"',
          answer:
            'Making English your daily default will maintain your fluency for life.',
          explanation:
            'Making English your daily default will maintain your fluency for life.',
        },
      ],
      writing:
        'เขียนแผนผัง "Personal Immersion Blueprint" ของคุณ 1 ย่อหน้า (80–100 คำ) ระบุ 3 สิ่งในชีวิตประจำวันที่จะเปลี่ยนเป็นภาษาอังกฤษถาวรหลังจบคอร์สนี้',
      writingSample:
        'To maintain my fluency permanently, I have established three core immersion habits. First, I have switched the operating system of all my personal laptops and smartphones to English. Second, I will replace my morning radio commute with international technology podcasts. Finally, whenever I research new technical concepts or recipes, I will write my search queries exclusively in English.',
      writingNote:
        'ระบุการกระทำที่เป็นรูปธรรมและปฏิบัติได้จริงในชีวิตประจำวัน',
      speakingTopic:
        'อธิบายแผนการ Immersion ส่วนตัวในชีวิตจริง 4 / 3 / 2 นาที',
      speakingBullets: [
        'เล่าการเปลี่ยนแปลงในอุปกรณ์และสื่อที่เสพประจำวัน',
        'อธิบายประโยชน์ที่จะเกิดขึ้นกับสมองในระยะยาว',
      ],
    },
    {
      day: 247,
      title: 'Autonomous Chunk Harvesting: เทคนิคเก็บก้อนคำและสำนวนจากสื่อจริง',
      objective:
        'เก็บเกี่ยวคำศัพท์และก้อนคำ (Collocations / Chunks / Idiomatic phrases) จากสื่อจริง เช่น พอดแคสต์ สารคดี และบทความวิเคราะห์ได้อย่างเป็นระบบตลอดชีวิต',
      explanation:
        'ผู้เรียนที่ก้าวหน้าอย่างต่อเนื่องโดยไม่ต้องพึ่งพาครูอีกต่อไป มีทักษะสำคัญอย่างหนึ่งคือ **"Autonomous Chunk Harvesting" (การเก็บเกี่ยวคำศัพท์เป็นก้อนด้วยตัวเอง)**! เมื่อคุณอ่านข่าวหรือดูซีรีส์ อย่าจดคำศัพท์เดี่ยวๆ เช่น *decision, problem, risk* แต่ให้กวาดสายตามองหา **"คำที่ชอบมาด้วยกัน" (Collocations)**: เช่น เจอประโยค *"We need to mitigate this unforeseen risk"*, อย่าจดแค่ mitigate แต่ให้จดทั้งก้อน: **`mitigate an unforeseen risk`** (บรรเทาความเสี่ยงที่ไม่คาดฝัน), หรือเจอ *"The team reached a consensus"* ให้จด **`reach a consensus`** (บรรลุฉันทามติ). การมีสมุดจดหรือแอปจด Chunks ติดตัว จะทำให้คลังภาษาของคุณสดใหม่และเป็นธรรมชาติอยู่เสมอ!',
      sound: [
        'Harvesting Rhythm: Stress on the Collocational Anchor',
        'mitigate /ˈmɪt.ɪ.ɡeɪt/ · consensus /kənˈsen.səs/ · harvesting /ˈhɑː.vɪ.stɪŋ/',
        'เมื่อจดจำ Collocation ให้ฟังจังหวะการลงเสียงหนักของเจ้าของภาษา ซึ่งมักจะเชื่อมสองคำนี้เข้าด้วยกันเป็นหน่วยเสียงเดียว',
        'ฝึกออกเสียง: "Mi-ti-gate the risk. ↗ Reach a con-sen-sus. ↗ Strike a ba-lance."',
      ],
      l1: [
        'เปิดดิกแปลคำเดี่ยวแล้วนำมาแต่งประโยคด้วยไวยากรณ์ไทย เช่น "ทำตามสัญญา" แปลตรงเป็น "do the contract" ❌ แทนที่จะใช้ก้อนจริง "honor the contract" ✅',
        'เจ้าของภาษาไม่ได้จำคำศัพท์เดี่ยวแล้วนำมาเรียงกัน แต่จดจำก้อนวลีสำเร็จรูป (Formulaic Sequences) ที่สังคมใช้ร่วมกัน',
        'กฎเหล็กตลอดชีวิต: ห้ามจดคำศัพท์เดี่ยวเด็ดขาด ให้จดคำนามคู่กับคำกริยาหรือคำคุณศัพท์เสมอ',
      ],
      vocab: [
        ['harvesting', 'การเก็บเกี่ยว / การคัดสรรมาบันทึก', '/ˈhɑː.vɪ.stɪŋ/', 'autonomous chunk harvesting', 'การเก็บเกี่ยวก้อนคำด้วยตนเอง'],
        ['collocation', 'กลุ่มคำที่ใช้คู่กันตามธรรมชาติ', '/ˌkɒl.əˈkeɪ.ʃən/', 'learn natural collocations', 'เรียนรู้กลุ่มคำที่ใช้คู่กันอย่างเป็นธรรมชาติ'],
        ['mitigate', 'บรรเทา / ลดความรุนแรง', '/ˈmɪt.ɪ.ɡeɪt/', 'mitigate unforeseen risks', 'บรรเทาความเสี่ยงที่ไม่คาดฝัน'],
        ['consensus', 'ฉันทามติ / ความเห็นพ้องต้องกัน', '/kənˈsen.səs/', 'reach a broad consensus', 'บรรลุฉันทามติร่วมกันในวงกว้าง'],
        ['unforeseen', 'ที่ไม่ได้คาดหมายล่วงหน้า', '/ˌʌn.fɔːˈsiːn/', 'handle unforeseen obstacles', 'รับมือกับอุปสรรคที่ไม่คาดฝัน'],
        ['intuitive', 'ที่เข้าใจได้โดยสัญชาตญาณ', '/ɪnˈtʃuː.ɪ.tɪv/', 'develop intuitive grasp', 'พัฒนาความเข้าใจอย่างเป็นสัญชาตญาณ'],
      ],
      examples: [
        ['Whenever you encounter a compelling article, harvest three complete lexical chunks.', 'เมื่อใดก็ตามที่คุณพบบทความที่น่าสนใจ จงเก็บเกี่ยวคำศัพท์เป็นก้อนอย่างน้อยสามก้อนเสมอ'],
        ['Instead of memorizing the isolated word "risk", record "mitigate an unforeseen risk".', 'แทนที่จะท่องคำเดี่ยวว่า "risk" ให้บันทึกทั้งก้อนว่า "mitigate an unforeseen risk"'],
        ['Mature communicators intuitively rely on pre-assembled phrases to maintain conversational speed.', 'ผู้สื่อสารที่มีวุฒิภาวะจะอาศัยกลุ่มคำสำเร็จรูปเพื่อรักษาความเร็วในการสนทนา'],
        ['Active chunk harvesting ensures your vocabulary continuously evolves alongside modern usage.', 'การเก็บเกี่ยวคำเป็นก้อนอย่างสม่ำเสมอจะช่วยให้คลังศัพท์ของคุณพัฒนาควบคู่กับภาษาในโลกปัจจุบัน'],
      ],
      reading:
        'The defining trait of autonomous C1 learners is their predatory eye for collocational chunks. While intermediate students read passively for plot, advanced learners treat every podcast, white paper, and documentary as a goldmine of idiomatic architecture. When an author writes "we must strike a delicate balance," the novice highlights "balance," whereas the harvester captures the entire four-word formula: "strike a delicate balance." Cognitive psychologists confirm that working memory retrieves multi-word units far faster than it can synthesize novel syntax from grammatical rules. By maintaining a personal chunk journal, the lifelong learner builds an expansive linguistic repertoire, transforming foreign media into an endless masterclass.',
      listenQ: 'Why does working memory retrieve multi-word units faster than individual words?',
      listenA: 'Because multi-word chunks are stored and recalled as single cognitive units.',
      dictation: 'Autonomous chunk harvesting turns everyday media into a personal masterclass.',
      listenNote:
        'จับเสียงเชื่อม turns everyday media into a (/tɜːnz ˈev.ri.deɪ ˈmiː.di.ə ˈɪn.tə ə/)',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดคือการบันทึกคำศัพท์แบบ Lexical Chunk Harvesting ที่มีประสิทธิภาพสูงสุด?',
          answer:
            'strike a delicate balance (ประนีประนอมหาจุดสมดุลที่ลงตัว)',
          choices: [
            'balance = สมดุล (คำนาม)',
            'strike a delicate balance (ประนีประนอมหาจุดสมดุลที่ลงตัว)',
            'delicate = ละเอียดอ่อน (คำคุณศัพท์)',
            'strike = ตี (คำกริยา)',
          ],
          explanation:
            'การจำทั้งก้อน "strike a delicate balance" ช่วยให้นำไปใช้พูดและเขียนได้ทันทีโดยไม่ติดขัด',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ Collocation ผิดธรรมชาติให้เป็นก้อนคำที่เจ้าของภาษาใช้จริง: "Our committee did a consensus after two hours of debate."',
          answer:
            'Our committee reached a consensus after two hours of debate.',
          explanation:
            'ใช้ reach a consensus (บรรลุฉันทามติ) ไม่ใช่ do a consensus',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำกริยาคู่ Collocation: The safety team introduced new guidelines to _____ (บรรเทา) potential security risks.',
          answer: 'mitigate',
          explanation: 'mitigate potential risks = บรรเทาความเสี่ยงที่อาจเกิดขึ้น',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยใช้ Collocation: "พวกเราจำเป็นต้องหาจุดสมดุลที่ลงตัวระหว่างความเร็วและคุณภาพ"',
          answer:
            'We need to strike a delicate balance between speed and quality.',
          explanation:
            'We need to strike a delicate balance between speed and quality.',
        },
      ],
      writing:
        'เขียนประโยค 3 ประโยคโดยใช้ 3 Lexical Chunks สำคัญที่คุณประทับใจที่สุดในคอร์สนี้ (เช่น strike a delicate balance, reach a consensus, mitigate unforeseen risks)',
      writingSample:
        'To protect our project timeline, we must mitigate unforeseen risks before launching the marketing campaign. After extensive consultation with all department heads, our committee reached a consensus on the new budget. In every high-stakes negotiation, experienced leaders strive to strike a delicate balance between empathy and decisive firmness.',
      writingNote:
        'ตรวจดูให้แน่ใจว่าใช้คำร่วม (Collocational partners) อย่างเป็นธรรมชาติครบถ้วน',
      speakingTopic:
        'อธิบายเทคนิคการเก็บ Chunk และสาธิตการใช้ 3 ก้อนคำ 4 / 3 / 2 นาที',
      speakingBullets: [
        'อธิบายว่าทำไมการท่องคำเดี่ยวถึงไม่ได้ผลในสถานการณ์จริง',
        'ยกตัวอย่าง 3 ก้อนคำพร้อมบริบทการใช้งานในชีวิตจริง',
      ],
    },
    {
      day: 248,
      title: 'Maintaining Spoken Fluency Solo: ซ้อมพูดคล่องตัวได้ด้วยตัวเองทุกที่ทุกเวลา',
      objective:
        'รักษาและพัฒนาความคล่องแคล่วในการพูดภาษาอังกฤษด้วยตัวเองอย่างต่อเนื่อง ด้วยเทคนิค Self-Talk, Audio Journaling และ 4/3/2 Solo Drills',
      explanation:
        'หลายคนคิดว่าถ้าไม่มีเพื่อนฝรั่งหรือไม่ได้อาศัยอยู่ต่างประเทศ จะไม่มีวันฝึกพูดภาษาอังกฤษได้ นั่นคือความเข้าใจผิดอย่างยิ่ง! ผู้เชี่ยวชาญด้านภาษาศาสตร์ยืนยันว่า **การฝึกพูดคนเดียว (Self-Directed Output)** มีประสิทธิภาพสูงมากเพราะไม่มีความกดดันทางสังคม: 1) **Self-Talk (การพูดกับตัวเองในชีวิตประจำวัน):** ขณะทำอาหาร เดินทาง หรือจัดโต๊ะทำงาน ให้บรรยายสิ่งที่คุณทำหรือคิดเป็นภาษาอังกฤษออกมาเบาๆ, 2) **Audio Journaling (บันทึกเสียงสะท้อนตัวเอง):** อัดเสียงตัวเองเล่าสรุปเหตุการณ์ประจำวัน 2–3 นาทีลงในสมาร์ตโฟน แล้วเปิดฟังเพื่อเช็กจังหวะการพูดและเสียงเชื่อม, 3) **4/3/2 Solo Drill:** เลือก 1 หัวข้อ แล้วฝึกพูดอัดเสียง 4 นาที → 3 นาที → 2 นาที เพื่อบังคับให้สมองกลั่นกรองคำพูดให้กระชับและเร็วขึ้น การฝึกเพียงวันละ 10 นาทีจะรักษาความคล่องตัวของคุณไว้ตลอดกาล!',
      sound: [
        'Self-Correction and Fluid Pauses in Solo Speech',
        'journaling /ˈdʒɜː.nəl.ɪŋ/ · reflective /rɪˈflek.tɪv/ · spontaneous /spɒnˈteɪ.ni.əs/',
        'เมื่อพูดคนเดียว ให้ฝึกเว้นจังหวะหายใจอย่างสงบ (fluid pauses) แทนการเปล่งเสียงอ้ำอึ้ง เช่น "uh, um"',
        'ฝึกออกเสียง: "Re-cor-ding dai-ly au-dio logs ↗ sharpens spo-ken flu-en-cy."',
      ],
      l1: [
        'อายที่จะพูดคนเดียว หรือคิดว่าถ้าไม่มีคู่สนทนาตัวจริงจะไม่ได้ประโยชน์อะไร',
        'นักกีฬาและนักดนตรีระดับโลกใช้เวลาซ้อมคนเดียวถึง 90% ของเวลาทั้งหมด เพื่อสร้างความจำของกล้ามเนื้อ (Muscle Memory) ก่อนลงสนามจริง',
        'มองการฝึกพูดคนเดียวเป็นการสร้าง "กล้ามเนื้อปากและจังหวะสมอง" ที่เป็นอิสระและปลอดภัยที่สุด',
      ],
      vocab: [
        ['self-talk', 'การพูดคุยกับตัวเอง', '/self tɔːk/', 'practice intentional self-talk', 'ฝึกการพูดกับตัวเองอย่างมีเป้าหมาย'],
        ['audio journaling', 'การบันทึกสมุดบันทึกด้วยเสียง', '/ˈɔː.di.əʊ ˈdʒɜː.nəl.ɪŋ/', 'maintain audio journaling', 'รักษาการบันทึกเสียงประจำวัน'],
        ['muscle memory', 'ความจำของกล้ามเนื้อ', '/ˈmʌs.əl ˈmem.ər.i/', 'build mouth muscle memory', 'สร้างความจำกล้ามเนื้อช่องปาก'],
        ['unscripted', 'ที่ไม่ได้เตรียมบทไว้ล่วงหน้า / สด', '/ʌnˈskrɪp.tɪd/', 'unscripted speaking flow', 'ความลื่นไหลในการพูดแบบสดๆ'],
        ['frictionless', 'ที่ราบรื่นไร้แรงเสียดทาน', '/ˈfrɪk.ʃən.ləs/', 'create frictionless practice', 'สร้างการฝึกฝนที่ไร้แรงเสียดทาน'],
        ['reflective', 'ที่สะท้อนความคิดอย่างไตร่ตรอง', '/rɪˈflek.tɪv/', 'reflective self-critique', 'การวิพากษ์ตนเองอย่างใคร่ครวญ'],
      ],
      examples: [
        ['Practicing unscripted self-talk while walking builds incredible conversational stamina.', 'การฝึกพูดคุยกับตัวเองแบบไม่มีสคริปต์ขณะเดินช่วยสร้างความอึดในการสนทนาได้อย่างยอดเยี่ยม'],
        ['Audio journaling allows you to review your intonation and pace with objective clarity.', 'การบันทึกเสียงช่วยให้คุณตรวจทานท่วงทำนองเสียงและความเร็วในการพูดของตนเองได้อย่างเป็นกลาง'],
        ['By executing 4/3/2 drills solo, you train your brain to discard unnecessary conversational filler.', 'การฝึก 4/3/2 คนเดียวช่วยฝึกสมองให้ตัดคำฟุ่มเฟือยในการสนทนาทิ้งไป'],
        ['Ten minutes of daily spoken output guarantees that your speaking muscle memory stays primed.', 'การเปล่งเสียงพูดวันละสิบนาทีช่วยให้ความจำกล้ามเนื้อในการพูดของคุณพร้อมใช้งานอยู่เสมอ'],
      ],
      reading:
        'A pervasive misconception among language learners is that conversational fluency requires an external conversational partner. In reality, conversational partners primarily test fluency; they rarely provide the structured repetition necessary to construct it. Solo output techniques—such as self-talk, vocal commentary, and audio journaling—offer high-density practice without social anxiety or communicative shame. When a learner narrates their daily routine or synthesizes a podcast episode out loud, they bypass the passive comprehension trap. Recording and evaluating these unscripted monologues reveals unconscious vocal fillers and pronunciation blind spots. By incorporating systematic solo speaking drills into your routine, you take absolute ownership of your linguistic destiny.',
      listenQ: 'Why do solo output techniques offer high-density practice compared to casual conversation?',
      listenA: 'Because they provide structured repetition without social anxiety or communicative shame.',
      dictation: 'Solo speaking drills build powerful mouth muscle memory and confidence.',
      listenNote:
        'จับเสียงเชื่อม build powerful mouth muscle (/bɪld ˈpaʊə.fəl maʊθ ˈmʌs.əl/)',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดคือหัวใจสำคัญของเทคนิค 4/3/2 Speaking Drill ที่ช่วยพัฒนาความคล่องตัว?',
          answer:
            'พูดเรื่องเดิมซ้ำ 3 รอบภายใต้เวลาที่ลดลงเรื่อยๆ เพื่อบังคับให้สมองตัดคำฟุ่มเฟือย',
          choices: [
            'พูด 4 ภาษาในเวลา 3 นาทีกับเพื่อน 2 คน',
            'ท่องคำศัพท์ใหม่ 4 คำใน 3 นาทีแล้วพัก 2 นาที',
            'พูดเรื่องเดิมซ้ำ 3 รอบภายใต้เวลาที่ลดลงเรื่อยๆ เพื่อบังคับให้สมองตัดคำฟุ่มเฟือย',
            'อ่านบทความ 4 หน้าใน 3 นาทีแล้วเขียนสรุป 2 ประโยค',
          ],
          explanation:
            '4/3/2 บังคับให้พูดเรื่องเดิมในเวลา 4 นาที → 3 นาที → 2 นาที เพื่อเปลี่ยนการคิดเป็นความคล่องตัวอัตโนมัติ',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคนี้ให้ถูกต้อง: "I practice speak alone every morning to improve my pronunciation."',
          answer:
            'I practice speaking alone every morning to improve my pronunciation.',
          explanation:
            'หลังกริยา practice ต้องตามด้วย Gerund (V-ing) คือ speaking',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำในช่องว่าง: Audio _____ (การบันทึกไดอารี่ด้วยเสียง) helps track spoken clarity and rhythm.',
          answer: 'journaling',
          explanation: 'Audio journaling = การบันทึกเสียงสะท้อนความคิดประจำวัน',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "การซ้อมพูดคนเดียวเพียงวันละสิบนาทีจะช่วยรักษาความคล่องตัวของคุณไว้ตลอดไป"',
          answer:
            'Practicing speaking alone for just ten minutes a day will maintain your fluency forever.',
          explanation:
            'Practicing speaking alone for just ten minutes a day will maintain your fluency forever.',
        },
      ],
      writing:
        'เขียนบทสะท้อนความคิดสั้นๆ 1 ย่อหน้า (80–100 คำ) สำหรับนำไปใช้อัด Audio Journaling วันนี้ โดยเล่าถึงความท้าทายที่เอาชนะได้และเป้าหมายในอนาคต',
      writingSample:
        'Reflecting on my journey through these 252 days, I realize how much my relationship with English has transformed. In the beginning, speaking felt like walking through deep mud, with every word requiring agonizing mental effort. Today, while I still encounter unfamiliar phrases, I can express complex nuances with steady composure. Moving forward, I will dedicate ten minutes every evening to unscripted audio journaling to keep this hard-won momentum alive.',
      writingNote:
        'อ่านออกเสียงข้อความที่เขียนเพื่อทดสอบความลื่นไหลของจังหวะคำ',
      speakingTopic:
        'บันทึก Audio Journaling เล่าความรู้สึกของวันนี้ 4 / 3 / 2 นาที',
      speakingBullets: [
        'เล่าสิ่งที่ได้เรียนรู้และความภูมิใจในตัวเอง',
        'ทดสอบการพูดโดยไม่หยุดชะงักและไม่พึ่งพาภาษาไทยในหัว',
      ],
    },
    {
      day: 249,
      title: 'Thinking in English: ตัดวงจรการแปลไทยในสมองอย่างถาวร',
      objective:
        'กำจัดการแปลภาษาไทยในใจ (The Mental Thai Buffer) ผ่านการเชื่อมโยงมโนภาพกับภาษาอังกฤษโดยตรง (Direct Conceptual Mapping)',
      explanation:
        'เหตุผลหลักที่คนเรียนภาษาอังกฤษมาสิบปีแต่ยังพูดสะดุด คือ **"กระบวนการแปลสองชั้นในสมอง"** (คิดภาพ → แปลเป็นไทย → แปลจากไทยเป็นอังกฤษ → เช็กแกรมมาร์ → จึงค่อยเปล่งเสียงออกมา)! การคิดเป็นภาษาอังกฤษอย่างแท้จริง ต้องตัดตัวกลางภาษาไทยออกทั้งหมด โดยใช้วิธี **Direct Conceptual Mapping**: 1) เชื่อมโยง **"มโนภาพ/ความรู้สึก" เข้ากับ "คำภาษาอังกฤษ" โดยตรง** เช่น เมื่อเห็นฝนตกหนัก นึกภาพนั้นคู่กับคำว่า *pouring* ทันทีโดยไม่ต้องผ่านคำว่า "ตกหนัก", 2) บรรยายสภาพแวดล้อมรอบตัวด้วยเสียงบรรยายในหัว (Mental Commentary) เป็นภาษาอังกฤษ, 3) ใช้วลีเชื่อมทางความคิด เช่น *Let me think, Interestingly, In other words* เพื่อซื้อเวลาให้สมองคิดคำต่อไปโดยไม่หลุดกลับไปคิดเป็นไทย. เมื่อวงจรนี้ถูกตัดออก คุณจะพูดได้เร็วและเป็นธรรมชาติเท่าความคิดของคุณเอง!',
      sound: [
        'Internal Monologue Intonation and Smooth Transitions',
        'conceptual /kənˈsep.tʃu.əl/ · intuitive /ɪnˈtʃuː.ɪ.tɪv/ · eliminate /iˈlɪm.ɪ.neɪt/',
        'เสียงบรรยายในหัวควรมีท่วงทำนองที่ผ่อนคลาย ไม่เคร่งเครียด และเป็นจังหวะต่อเนื่องเหมือนการคิดปกติ',
        'ฝึกออกเสียง: "Think in con-cepts, ↗ not in trans-la-ted words."',
      ],
      l1: [
        'ตั้งประโยคภาษาไทยในหัวก่อน แล้วพยายามแปลศัพท์ทีละคำออกมาเป็นภาษาอังกฤษ (Mental translation bottleneck)',
        'โครงสร้างภาษาไทยและอังกฤษมีตรรกะทางความคิดคนละแบบ การแปลตรงตัวจะทำให้ไวยากรณ์และโทนภาษาผิดเพี้ยนเสมอ',
        'ฝึกหยุดคำภาษาไทยในหัวด้วยการจินตนาการเป็นภาพและอารมณ์ แล้วดึง Lexical Chunk ภาษาอังกฤษมาประกบทันที',
      ],
      vocab: [
        ['conceptual mapping', 'การเชื่อมโยงมโนภาพกับภาษาโดยตรง', '/kənˈsep.tʃu.əl ˈmæp.ɪŋ/', 'apply direct conceptual mapping', 'ประยุกต์ใช้การเชื่อมมโนภาพโดยตรง'],
        ['internal monologue', 'บทพูดในใจ / เสียงบรรยายความคิด', '/ɪnˈtɜː.nəl ˈmɒn.ə.lɒɡ/', 'cultivate an English internal monologue', 'สร้างเสียงบรรยายความคิดในใจเป็นภาษาอังกฤษ'],
        ['bottleneck', 'คอขวด / จุดที่ชะลอความเร็ว', '/ˈbɒt.əl.nek/', 'eliminate the translation bottleneck', 'กำจัดคอขวดของการแปลในหัว'],
        ['spontaneity', 'ความเป็นธรรมชาติที่ไม่ต้องคิดนาน', '/ˌspɒn.təˈneɪ.ə.ti/', 'achieve conversational spontaneity', 'บรรลุความเป็นธรรมชาติในการสนทนา'],
        ['bypass', 'ข้ามผ่าน / เลี่ยงจุดติดขัด', '/ˈbaɪ.pɑːs/', 'bypass the native language buffer', 'ข้ามผ่านตัวกลางภาษาแม่'],
        ['effortless', 'ที่เป็นไปอย่างง่ายดายไร้แรงต้าน', '/ˈef.ət.ləs/', 'effortless spontaneous speech', 'การพูดที่เป็นธรรมชาติอย่างง่ายดาย'],
      ],
      examples: [
        ['Direct conceptual mapping links mental images straight to English collocations.', 'การเชื่อมโยงมโนภาพโดยตรงช่วยผูกภาพในใจเข้ากับกลุ่มคำภาษาอังกฤษได้ทันที'],
        ['Eliminating the internal translation buffer unlocks effortless conversational spontaneity.', 'การกำจัดตัวกลางแปลภาษาในหัวช่วยปลดล็อกความเป็นธรรมชาติในการสนทนา'],
        ['When you hear a question, visualize the solution instead of translating the words.', 'เมื่อคุณได้ยินคำถาม จงจินตนาการภาพทางออกแทนที่จะมัวแปลคำศัพท์'],
        ['Cultivating a quiet English internal monologue reshapes neural pathways for lifelong fluency.', 'การบ่มเพาะเสียงในใจเป็นภาษาอังกฤษช่วยปรับเปลี่ยนวงจรประสาทเพื่อความคล่องตัวตลอดชีวิต'],
      ],
      reading:
        'Mental translation is the single greatest bottleneck preventing advanced learners from attaining genuine C1 fluency. When a speaker processes thoughts through a bilingual relay—formulating an intention in Thai, searching for equivalent lexical components, and arranging them into English syntax—latency becomes insurmountable. True fluency requires severing this domestic tether. By training the mind to map sensory experiences directly onto English formulas, the speaker bypasses the mother tongue entirely. Visualizing a bustling intersection immediately triggers words like "congested," "swarming," or "gridlock" without an intermediary Thai translation. As this conceptual reflex strengthens through deliberate immersion, speaking ceases to be an act of translation; it becomes the direct, spontaneous resonance of thought.',
      listenQ: 'What happens when a speaker severs the domestic translation tether?',
      listenA: 'They map sensory experiences directly onto English formulas, achieving spontaneous resonance of thought.',
      dictation: 'Thinking directly in English eliminates latency and unlocks authentic spontaneity.',
      listenNote:
        'จับเสียงเชื่อม directly in English eliminates (/dɪˈrekt.li ɪn ˈɪŋ.ɡlɪʃ iˈlɪm.ɪ.neɪts/)',
      drills: [
        {
          kind: 'choice',
          prompt:
            'สิ่งใดคืออุปสรรคสำคัญที่สุดที่ทำให้การพูดภาษาอังกฤษติดขัดและไม่ทันใจ?',
          answer:
            'การแปลข้อความจากภาษาไทยเป็นภาษาอังกฤษในใจทีละคำก่อนพูด',
          choices: [
            'การแปลข้อความจากภาษาไทยเป็นภาษาอังกฤษในใจทีละคำก่อนพูด',
            'การมีคำศัพท์ในหัวมากเกินไป',
            'การออกเสียงชัดเจนเกินไป',
            'การเข้าใจไวยากรณ์ลึกซึ้งเกินไป',
          ],
          explanation:
            'Mental translation คือคอขวดที่ทำให้การตอบสนองช้าและสูญเสียความเป็นธรรมชาติ',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคนี้ให้ถูกต้อง: "To think in English, you must stop to translate every word in your head."',
          answer:
            'To think in English, you must stop translating every word in your head.',
          explanation:
            'stop + V-ing (translating) หมายถึง หยุดทำสิ่งนั้น / เลิกทำ ส่วน stop to + V1 หมายถึง หยุดเพื่อที่จะทำ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำในช่องว่าง: Direct _____ mapping (การเชื่อมมโนภาพโดยตรง) connects sensory images straight to English.',
          answer: 'conceptual',
          explanation: 'Direct conceptual mapping = การเชื่อมมโนภาพโดยตรง',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "เมื่อคุณหยุดแปลในใจ ภาษาอังกฤษจะกลายเป็นเรื่องที่เป็นธรรมชาติอย่างแท้จริง"',
          answer:
            'When you stop translating in your mind, English becomes truly natural.',
          explanation:
            'When you stop translating in your mind, English becomes truly natural.',
        },
      ],
      writing:
        'เขียนคำบรรยายสิ่งที่คุณเห็นและรู้สึกในห้องของคุณ ณ ตอนนี้ 1 ย่อหน้า (80–100 คำ) โดยเขียนตรงจากความคิดเป็นภาษาอังกฤษโดยไม่แปลจากไทยแม้แต่ประโยคเดียว',
      writingSample:
        'Sitting at my desk late this evening, the soft amber lamp casts a quiet glow across my keyboard. Outside my window, the rhythmic hum of distant city traffic creates a peaceful backdrop. A warm mug of tea sits to my right, steam curling gently toward the ceiling. My thoughts feel calm and centered as I type these reflections directly in English.',
      writingNote:
        'สังเกตความรู้สึกขณะเขียนว่าภาษาลื่นไหลออกมาจากภาพตรงหน้าโดยตรง',
      speakingTopic:
        'ฝึก Stream of Consciousness พูดบรรยายความคิดสดๆ ในหัว 4 / 3 / 2 นาที',
      speakingBullets: [
        'บรรยายสิ่งที่กำลังมองเห็น รู้สึก หรือคิดอยู่ในขณะนี้โดยห้ามหยุดพูด',
        'หากนึกคำไม่ออก ให้อธิบายอ้อมๆ เป็นภาษาอังกฤษโดยห้ามหลุดคำไทย',
      ],
    },
    {
      day: 250,
      title: 'Cultural Pragmatics & Nuance: เข้าใจบริบทวัฒนธรรมและการสื่อสารไร้พรมแดน',
      objective:
        'ยกระดับการสื่อสารสู่ระดับ Global English ด้วยความเข้าใจใน Cultural Pragmatics, การตีความ High-Context vs Low-Context, และการเลือกใช้ระดับภาษาอย่างเฉียบคม',
      explanation:
        'ในระดับ B2+ และ C1 การสื่อสารไม่ได้วัดกันแค่แกรมมาร์ถูกหรือไม่ แต่วัดกันที่ **"Cultural Pragmatics" (การใช้ภาษาให้ถูกกาลเทศะและสอดคล้องกับวัฒนธรรมคู่สนทนา)**! 1) **Low-Context (ตรงไปตรงมา เช่น สหรัฐฯ เยอรมนี):** ผู้พูดให้ความสำคัญกับความชัดเจน ข้อมูลเชิงประจักษ์ และการพูดตรงประเด็นโดยไม่อ้อมค้อม, 2) **High-Context (อ่านระหว่างบรรทัด เช่น ญี่ปุ่น หรือไทย):** ให้ความสำคัญกับความสัมพันธ์ ความเกรงใจ และการรักษาน้ำใจ, 3) **Global English Agility:** ในเวทีสากล คุณต้องปรับตัวเป็น **Communicative Chameleon**—สามารถพูดตรงประเด็นแบบโปร่งใสในที่ประชุม แต่ยังคงความนุ่มนวลและให้เกียรติผ่าน Diplomatic Hedging ได้อย่างลงตัว ทักษะนี้คือสิ่งที่จะแยกผู้นำระดับสากลออกจากผู้พูดทั่วไป!',
      sound: [
        'Nuanced Vocal Warmth and Diplomatic Cadence',
        'pragmatics /præɡˈmæt.ɪks/ · chameleon /kəˈmiː.li.ən/ · nuanced /ˈnjuː.ɑːnst/',
        'น้ำเสียงในระดับสากลต้องมีความอบอุ่น (vocal warmth) เจืออยู่เสมอ เพื่อให้ข้อความที่ตรงไปตรงมาไม่ฟังดูห้วนหรือแข็งกระด้าง',
        'ฝึกออกเสียง: "Cul-tu-ral prag-ma-tics ↗ turns gra-mmar in-to em-pa-thy."',
      ],
      l1: [
        'เอาวัฒนธรรมความเกรงใจแบบไทยไปใช้จนไม่กล้าแสดงความเห็นในที่ประชุมสากล หรือกลับกัน คือพูดตรงเกินไปจนกลายเป็นหักหน้าผู้อื่น',
        'วัฒนธรรมสากลมองว่าการเงียบไม่แสดงความเห็น = ไม่มีความพร้อมหรือไม่ใส่ใจงาน',
        'ใช้สูตรสากล: แสดงความเห็นอย่างชัดเจน (Assertive) แต่เลือกใช้ถ้อยคำที่นุ่มนวลและเปิดรับมุมมองอื่น (Diplomatic)',
      ],
      vocab: [
        ['pragmatics', 'วัจนปฏิบัติศาสตร์ / การใช้ภาษาตามบริบทสังคม', '/præɡˈmæt.ɪks/', 'master cultural pragmatics', 'เชี่ยวชาญการใช้ภาษาตามบริบทสังคม'],
        ['low-context', 'การสื่อสารแบบตรงไปตรงมา', '/ləʊ ˈkɒn.tekst/', 'low-context communication', 'การสื่อสารที่เน้นความตรงไปตรงมา'],
        ['high-context', 'การสื่อสารที่อาศัยบริบทแวดล้อม', '/haɪ ˈkɒn.tekst/', 'high-context culture', 'วัฒนธรรมที่อาศัยบริบทแวดล้อม'],
        ['nuance', 'ความละเอียดอ่อนของความหมาย', '/ˈnjuː.ɑːns/', 'appreciate subtle nuance', 'เข้าใจความละเอียดอ่อนของความหมาย'],
        ['chameleon', 'ผู้ที่ปรับตัวเข้ากับสภาพแวดล้อมได้อย่างยอดเยี่ยม', '/kəˈmiː.li.ən/', 'communicative chameleon', 'ผู้สื่อสารที่ปรับตัวเข้ากับทุกสถานการณ์ได้อย่างยอดเยี่ยม'],
        ['diplomacy', 'การติดต่อสัมพันธ์อย่างมีศิลปะและการทูต', '/dɪˈpləʊ.mə.si/', 'exercise conversational diplomacy', 'ใช้ศิลปะทางการทูตในการสนทนา'],
      ],
      examples: [
        ['Cultural pragmatics ensures your message resonates respectfully across international teams.', 'การเข้าใจบริบททางวัฒนธรรมช่วยให้สารของคุณสื่อถึงทีมงานนานาชาติได้อย่างน่าเคารพ'],
        ['In low-context environments, clarity and directness are regarded as signs of professional respect.', 'ในสภาพแวดล้อมที่สื่อสารตรงไปตรงมา ความชัดเจนถือเป็นสัญลักษณ์ของความเคารพในวิชาชีพ'],
        ['Balancing direct clarity with empathetic nuance is the hallmark of modern global leadership.', 'การรักษาสมดุลระหว่างความชัดเจนกับความเข้าอกเข้าใจคือสัญลักษณ์ของผู้นำสากล'],
        ['Understanding cultural cues allows you to disagree constructively without damaging relationships.', 'การเข้าใจสัญญาณทางวัฒนธรรมช่วยให้คุณเห็นต่างอย่างสร้างสรรค์โดยไม่กระทบความสัมพันธ์'],
      ],
      reading:
        'Fluency without pragmatics produces articulate offenses. A speaker may assemble grammatically flawless sentences yet provoke unintended hostility through tone-deaf register choices. In low-context corporate environments, colleagues interpret roundabout circumlocution not as politeness, but as evasive unreliability. Conversely, unvarnished bluntness in high-context settings shatters team harmony. Navigating the global landscape requires communicative dexterity. Global professionals function as cultural chameleons, decoding unspoken contextual cues before calibrating their assertiveness. By mastering the delicate balance between direct transparency and diplomatic softening, the speaker transcends linguistic borders, wielding English not merely as an instrument of transaction, but as a bridge of genuine human connection.',
      listenQ: 'How do colleagues in low-context corporate environments interpret excessive circumlocution?',
      listenA: 'They interpret it as evasive unreliability rather than politeness.',
      dictation: 'Cultural pragmatics balances direct transparency with empathetic diplomacy.',
      listenNote:
        'จับเสียงเชื่อม direct transparency with empathetic (/daɪˈrekt trænsˈpær.ən.si wɪð ˌem.pəˈθet.ɪk/)',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดคือวิธีการปฏิเสธคำขอของเพื่อนร่วมงานต่างชาติอย่างมืออาชีพตามหลัก Cultural Pragmatics?',
          answer:
            'I would love to help, but given my current deliverables, I cannot commit without compromising quality.',
          choices: [
            'No, go away, I am too busy.',
            'Yes yes yes (แล้วแอบไม่ส่งงานทีหลังเพราะเกรงใจ)',
            'I would love to help, but given my current deliverables, I cannot commit without compromising quality.',
            'Why are you asking me when you know I have work?',
          ],
          explanation:
            'แสดงความปรารถนาดีแต่ชี้แจงข้อจำกัดอย่างมีเหตุผลและชัดเจน (Diplomatic yet firm)',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคนี้ให้ถูกต้อง: "He is very good in understanding cultural differences between teams."',
          answer:
            'He is very good at understanding cultural differences between teams.',
          explanation:
            'ใช้สำนวน be good at (เก่งในเรื่อง...) ไม่ใช่ good in',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำในช่องว่าง: Cultural _____ (วัจนปฏิบัติศาสตร์) is the study of how context influences meaning.',
          answer: 'pragmatics',
          explanation: 'Cultural pragmatics = การศึกษาการใช้ภาษาตามบริบทวัฒนธรรม',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษระดับมืออาชีพ: "การเข้าใจความแตกต่างทางวัฒนธรรมช่วยให้พวกเราทำงานร่วมกันได้อย่างราบรื่นยิ่งขึ้น"',
          answer:
            'Understanding cultural differences helps us collaborate much more smoothly.',
          explanation:
            'Understanding cultural differences helps us collaborate much more smoothly.',
        },
      ],
      writing:
        'เขียนอีเมลตอบปฏิเสธคำเชิญร่วมโครงการ 1 ฉบับ (80–100 คำ) โดยใช้ศิลปะ Cultural Pragmatics เพื่อรักษาความสัมพันธ์อันดีและแนะนำทางเลือกอื่น',
      writingSample:
        'Dear Sarah,\n\nThank you for thinking of me for the upcoming regional product launch. While the initiative sounds incredibly exciting, I must respectfully decline joining the core task force due to existing project commitments this quarter. However, I would be delighted to review your draft architecture document and share high-level feedback. Wishing you and the team tremendous success with the kickoff!\n\nBest regards,\nAttachai',
      writingNote:
        'ตรวจสอบความอบอุ่นของโทนภาษาและการให้ทางเลือกที่เป็นประโยชน์',
      speakingTopic:
        'แลกเปลี่ยนความคิดเห็นเรื่องการสื่อสารข้ามวัฒนธรรม 4 / 3 / 2 นาที',
      speakingBullets: [
        'เปรียบเทียบความแตกต่างระหว่างการสื่อสารแบบไทยกับสากล',
        'ยกตัวอย่างวิธีพูดตรงประเด็นโดยไม่เสียมารยาท',
      ],
    },
    {
      day: 251,
      title: 'Full Master Track Retrospective: สรุปบทเรียน 251 วันสู่ความสำเร็จ',
      objective:
        'ทบทวนวิวัฒนาการทักษะภาษาอังกฤษตลอด 251 วัน ตั้งแต่ Phase 0 จนถึง Phase 5 และเตรียมจิตใจให้พร้อมสำหรับ Graduation Milestone พรุ่งนี้',
      explanation:
        'ลองหยุดและมองย้อนกลับไปใน **Day 1**: วันแรกที่คุณเริ่มปรับระบบเสียง Schwa `/ə/`, พยัญชนะที่ไม่มีในภาษาไทย, และโครงสร้าง SVO พื้นฐาน... จากจุดเริ่มต้นที่ระดับศูนย์ (Pre-A1) วันนี้คุณได้ก้าวข้ามผ่าน: 1) **Phase 0 & 1:** รากฐานประโยคและการเอาตัวรอด, 2) **Phase 2:** การเล่าเรื่องและการเชื่อม Tenses, 3) **Phase 3:** การคิดเป็นภาษาอังกฤษและเจรจางานจริง, 4) **Phase 4:** ความคล่องตัวระดับ B2 การคุมโทน และ Participles, 5) **Phase 5:** ความแม่นยำขั้นสูงและระบบภาษาในชีวิตจริง! วันนี้คือวันแห่งการเฉลิมฉลองการเติบโตของคุณ ทบทวนจุดแข็ง และเตรียมตัวก้าวสู่การประเมินจบหลักสูตรอย่างภาคภูมิใจครับ!',
      sound: [
        'Commanding and Celebratory Delivery',
        'retrospective /ˌret.rəˈspek.tɪv/ · transformative /trænsˈfɔː.mə.tɪv/ · milestone /ˈmaɪl.stəʊn/',
        'น้ำเสียงในวันนี้เต็มไปด้วยความมั่นใจ สงบนิ่ง และภาคภูมิใจในความมุมานะตลอด 251 วัน',
        'ฝึกออกเสียง: "From ze-ro to ope-ra-tio-nal mas-te-ry, ↗ we have bu-ilt a life-long foun-da-tion."',
      ],
      l1: [
        'มองข้ามความก้าวหน้าของตัวเองแล้วยังรู้สึกว่า "ฉันยังไม่เก่งพอ"',
        'การเรียนภาษาไม่มีวันจบสิ้น แม้แต่เจ้าของภาษาก็ยังเรียนรู้คำใหม่ๆ อยู่เสมอ สิ่งสำคัญคือคุณมีรากฐานที่แข็งแกร่งจนสามารถพัฒนาต่อได้เองตลอดชีวิตแล้ว',
        'ยิ้มให้กับความทุ่มเทของคุณและก้าวเข้าสู่แบบประเมินด้วยหัวใจของผู้ชนะ',
      ],
      vocab: [
        ['retrospective', 'การมองย้อนทบทวนอดีต', '/ˌret.rəˈspek.tɪv/', 'conduct a comprehensive retrospective', 'ดำเนินการทบทวนภาพรวมในอดีต'],
        ['transformative', 'ที่เปลี่ยนแปลงอย่างลึกซึ้ง', '/trænsˈfɔː.mə.tɪv/', 'transformative learning experience', 'ประสบการณ์การเรียนรู้ที่เปลี่ยนแปลงชีวิต'],
        ['resilience', 'ความทรหดไม่ยอมแพ้ต่ออุปสรรค', '/rɪˈzɪl.jəns/', 'display incredible resilience', 'แสดงความทรหดอดทนอย่างยอดเยี่ยม'],
        ['milestone', 'หมุดหมายสำคัญแห่งความสำเร็จ', '/ˈmaɪl.stəʊn/', 'celebrate an extraordinary milestone', 'เฉลิมฉลองหมุดหมายอันพิเศษยิ่ง'],
        ['culmination', 'ผลลัพธ์สูงสุดของความพยายาม', '/ˌkʌl.mɪˈneɪ.ʃən/', 'the culmination of daily discipline', 'ผลรวมสูงสุดของวินัยในแต่ละวัน'],
        ['empowerment', 'การได้รับพลังและศักยภาพใหม่', '/ɪmˈpaʊə.mənt/', 'intellectual empowerment', 'การได้รับพลังทางปัญญา'],
      ],
      examples: [
        ['Looking back at Day 1 reveals just how transformative this 252-day journey has been.', 'เมื่อมองย้อนกลับไปในวันที่ 1 จะเห็นได้ว่าการเดินทาง 252 วันนี้เปลี่ยนแปลงเราไปมากเพียงใด'],
        ['Consistent daily practice built a resilient linguistic foundation that will serve you for decades.', 'การฝึกฝนประจำวันอย่างสม่ำเสมอได้สร้างรากฐานทางภาษาที่มั่นคงซึ่งจะรับใช้คุณไปอีกหลายทศวรรษ'],
        ['You have transformed from a hesitant learner into a confident, independent communicator.', 'คุณได้เปลี่ยนผ่านจากผู้เรียนที่ลังเลมาเป็นผู้สื่อสารที่มั่นใจและพึ่งพาตนเองได้'],
        ['Tomorrow we celebrate your graduation with pride, gratitude, and boundless ambition.', 'วันพรุ่งนี้พวกเราจะเฉลิมฉลองการจบหลักสูตรของคุณด้วยความภาคภูมิใจ ความขอบคุณ และความมุ่งมั่นอันไร้ขีดจำกัด'],
      ],
      reading:
        'A comprehensive retrospective on a 252-day language odyssey reveals far more than grammatical accumulation. It documents the systematic rewiring of cognitive habits. The journey began at absolute zero—dissecting missing phonemes, correcting Thai vocal substitutions, and mastering basic subject-verb contracts. Week by week, module by module, the scaffolding ascended: weaving past narratives, commanding complex conditionals, deploying diplomatic hedges, and crafting compact participial clauses. Most critically, the learner developed mental resilience, confronting plateaus and self-doubt with daily deliberate practice. The English language has ceased to be an intimidating foreign barrier; it has become an organic extension of thought, ready to empower personal and professional aspirations across the globe.',
      listenQ: 'What does a retrospective on this 252-day journey reveal beyond grammar?',
      listenA: 'It documents the systematic rewiring of cognitive habits and mental resilience.',
      dictation: 'Consistent daily discipline has built an organic foundation for lifelong fluency.',
      listenNote:
        'จับเสียงเชื่อม built an organic foundation (/bɪlt ən ɔːˈɡæn.ɪk faʊnˈdeɪ.ʃən/)',
      drills: [
        {
          kind: 'choice',
          prompt:
            'สิ่งใดคือปัจจัยสำคัญที่สุดที่ทำให้ผู้เรียนสามารถเดินทางมาจนถึงวันที่ 251 ได้สำเร็จ?',
          answer:
            'วินัยในการฝึกฝนทีละก้าวทุกวันอย่างสม่ำเสมอ (Consistent Daily Practice)',
          choices: [
            'การท่องจำหนังสือไวยากรณ์เล่มใหญ่ในคืนเดียว',
            'วินัยในการฝึกฝนทีละก้าวทุกวันอย่างสม่ำเสมอ (Consistent Daily Practice)',
            'การรอให้มีอารมณ์อยากเรียนแล้วค่อยอ่าน',
            'การพึ่งพาโชคชะตาโดยไม่ลงมือทำ',
          ],
          explanation:
            'ความสม่ำเสมอวันละนิด (Daily 60 Minutes) ชนะการอัดเรียนนานๆ แต่ขาดตอนเสมอ',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคนี้ให้ถูกต้อง: "Having complete 251 lessons, I am ready for graduation."',
          answer:
            'Having completed 251 lessons, I am ready for graduation.',
          explanation:
            'หลัง Having ต้องใช้ V3 (completed)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำในช่องว่าง: This journey marks the _____ (จุดสูงสุด) of daily dedication and hard work.',
          answer: 'culmination',
          explanation: 'culmination = จุดสูงสุด / ผลลัพธ์สูงสุดของความพยายาม',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ฉันภูมิใจในการเติบโตของตัวเองและพร้อมสำหรับบททดสอบสุดท้ายวันพรุ่งนี้"',
          answer:
            'I am proud of my personal growth and ready for tomorrow final assessment.',
          explanation:
            'I am proud of my personal growth and ready for tomorrow final assessment.',
        },
      ],
      writing:
        'เขียนจดหมายถึงตัวเองในอนาคต (Letter to Future Self) 1 ย่อหน้า (100–120 คำ) บันทึกความรู้สึก ความภาคภูมิใจ และคำสัญญาที่จะใช้ภาษาอังกฤษอย่างต่อเนื่อง',
      writingSample:
        'Dear Future Self,\n\nAs you read this note, remember that you dedicated 252 consecutive days to mastering the English language from the ground up. You conquered phonetics, survived intricate grammar hurdles, and learned to think directly in English without hesitation. Whenever future challenges seem daunting, look back at this achievement as proof of your unstoppable discipline. Promise yourself that you will continue using English as your window to the world, seeking knowledge without borders, and communicating with empathy and authority every single day.',
      writingNote:
        'เขียนด้วยพลังแห่งความภาคภูมิใจและความมุ่งมั่นจากใจจริง',
      speakingTopic:
        'Retrospective Speech: เล่าการเปลี่ยนแปลงของตัวเองตลอด 251 วัน 4 / 3 / 2 นาที',
      speakingBullets: [
        'เล่าความรู้สึกในวันแรกเทียบกับวันนี้',
        'กล่าวคำขอบคุณและสัญญาการต่อยอดทักษะในชีวิตจริง',
      ],
    },
    {
      day: 252,
      type: 'assessment',
      title: 'Grand Capstone Graduation: การประเมินจบหลักสูตร 252 วัน (Master Track Graduation)',
      objective:
        'ประเมินความสามารถทางภาษาอังกฤษรอบด้านขั้นสูงสุด (Grand Capstone Assessment) ครอบคลุมการฟังความเร็วธรรมชาติ, การอ่านบทความเชิงปรัชญาและเทคโนโลยี, การเขียนสุนทรพจน์จบหลักสูตร, และการพูดแสดงวิสัยทัศน์ 4/3/2 นาที',
      explanation:
        '🎉 **ขอแสดงความยินดีอย่างยิ่ง! คุณได้เดินทางมาถึงวันสุดท้ายของหลักสูตร English Steps Master Track (Day 252)!**\n\nนี่คือ **Grand Capstone Graduation Assessment** ที่รวมทุกทักษะที่คุณได้สั่งสมมาตลอด 252 วัน ตั้งแต่ระบบเสียง Phonics, IPA, Connected Speech, ไวยากรณ์แกนหลัก, Tenses ทุกมิติ, Lexical Chunks กว่า 3,000+ คำ, การโต้แย้งแบบ PREP/STAR, การคิดเป็นภาษาอังกฤษ, และการใช้ภาษาในบริบทวัฒนธรรมระดับสูง!\n\nแบบประเมินจบการศึกษานี้ออกแบบมาเพื่อยืนยันว่า: **คุณคือผู้สื่อสารภาษาอังกฤษที่คล่องแคล่ว เป็นอิสระ และพร้อมก้าวไปสู่เวทีระดับโลกได้อย่างเต็มภาคภูมิ**! ขอให้ทำแบบทดสอบสุดท้ายนี้ด้วยรอยยิ้มและความมั่นใจอย่างเต็มที่ครับ!',
      sound: [
        'Graduation Keynote Resonance and Authoritative Cadence',
        'capstone /ˈkæp.stəʊn/ · graduation /ˌɡrædʒ.uˈeɪ.ʃən/ · culmination /ˌkʌl.mɪˈneɪ.ʃən/',
        'เปล่งเสียงด้วยความมั่นใจสูงสุด ท่วงทำนองสง่างาม ชัดถ้อยชัดคำ และเต็มไปด้วยพลังของผู้นำทางความคิด',
        'ฝึกออกเสียงประโยคแห่งชัยชนะ: "I have gra-dua-ted from the Mas-ter Track with ge-nu-ine ope-ra-tio-nal mas-te-ry!"',
      ],
      l1: [
        'ไม่มีความกลัวหรือความประหม่าหลงเหลืออยู่อีกต่อไป',
        'คุณได้ก้าวข้ามกำแพงภาษาไทยในสมองไปเรียบร้อยแล้ว ทุกคำพูดและข้อเขียนในวันนี้คือหลักฐานประจักษ์ของความพยายามที่แท้จริง',
        'ปลดปล่อยพลังทางภาษาของคุณออกมาให้เต็มที่ โลกทั้งใบกำลังรอฟังสิ่งที่คุณจะสื่อสาร!',
      ],
      vocab: [
        ['capstone', 'จุดยอดแห่งความสำเร็จ / ผลงานชิ้นเอก', '/ˈkæp.stəʊn/', 'grand capstone graduation', 'การประเมินผลงานชิ้นเอกจบหลักสูตร'],
        ['graduation', 'การสำเร็จการศึกษาอย่างสมบูรณ์', '/ˌɡrædʒ.uˈeɪ.ʃən/', 'celebrate formal graduation', 'เฉลิมฉลองการจบหลักสูตรอย่างเป็นทางการ'],
        ['independence', 'ความเป็นอิสระและพึ่งพาตนเองได้', '/ˌɪn.dɪˈpen.dəns/', 'achieve linguistic independence', 'บรรลุความเป็นอิสระทางภาษาอย่างสมบูรณ์'],
        ['boundless', 'ไร้ขีดจำกัด / กว้างใหญ่ไพศาล', '/ˈbaʊnd.ləs/', 'boundless future opportunities', 'โอกาสในอนาคตอันไร้ขีดจำกัด'],
        ['legacy', 'มรดกทางทักษะและปัญญา', '/ˈleɡ.ə.si/', 'build a lasting personal legacy', 'สร้างมรดกทางทักษะส่วนตัวที่ยั่งยืน'],
        ['unlocked', 'ปลดล็อกอย่างสมบูรณ์', '/ʌnˈlɒkt/', 'unlocked true potential', 'ปลดล็อกศักยภาพที่แท้จริง'],
      ],
      examples: [
        ['Graduating on Day 252 confirms that persistence and science-backed methods conquer any language barrier.', 'การจบหลักสูตรในวันที่ 252 พิสูจน์ว่าความมุ่งมั่นและวิทยาศาสตร์การเรียนรู้เอาชนะได้ทุกกำแพงภาษา'],
        ['You possess the linguistic independence to read, write, listen, and lead in global settings.', 'คุณมีอิสรภาพทางภาษาที่จะอ่าน เขียน ฟัง และเป็นผู้นำในเวทีระดับโลกได้อย่างเต็มภาคภูมิ'],
        ['English is no longer a foreign challenge; it is your permanent gateway to knowledge.', 'ภาษาอังกฤษไม่ใช่ความท้าทายต่างด้าวอีกต่อไป แต่มันคือประตูถาวรสู่คลังความรู้ของคุณ'],
        ['Walk forward with unwavering confidence, knowing you have earned true operational fluency.', 'จงก้าวไปข้างหน้าด้วยความมั่นใจอันมั่นคง โดยตระหนักว่าคุณได้มาซึ่งความคล่องตัวที่แท้จริงแล้ว'],
      ],
      reading:
        'The completion of this 252-day Master Track stands as a triumph of deliberate practice, cognitive science, and personal grit. When you began on Day 1, the English language may have felt like an impenetrable fortress guarded by unfamiliar phonemes, bewildering idioms, and intimidating grammatical rules. Day after day, through 36 rigorous modules, you dismantled those barriers. You rewired your auditory perception to capture subtle schwas and elisions. You forged lexical chunks into immediate spoken reflex. You mastered the PREP and STAR architectures, transforming anxiety into commanding clarity. Most significantly, you eliminated the domestic translation buffer, discovering the exhilarating freedom of thinking directly in English. Today, as you cross this grand capstone threshold, recognize that you have unlocked more than mere vocabulary—you have claimed lifelong linguistic autonomy.',
      listenQ: 'What have you unlocked by completing this 252-day Master Track?',
      listenA: 'Lifelong linguistic autonomy and the freedom of thinking directly in English.',
      dictation: 'Today marks the grand culmination of 252 days of dedicated language mastery.',
      listenNote:
        'จับเสียงเชื่อม grand culmination of 252 days (/ɡrænd ˌkʌl.mɪˈneɪ.ʃən əv/)',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดคือสัญลักษณ์ที่แท้จริงของการบรรลุความเป็นอิสระทางภาษา (Linguistic Autonomy)?',
          answer:
            'สามารถคิด สื่อสาร และหาความรู้เพิ่มเติมเป็นภาษาอังกฤษได้ด้วยตนเองตลอดชีวิตโดยไม่ต้องพึ่งพาตัวแปลไทย',
          choices: [
            'การต้องเปิดพจนานุกรมแปลไทยทุกประโยคก่อนพูด',
            'สามารถคิด สื่อสาร และหาความรู้เพิ่มเติมเป็นภาษาอังกฤษได้ด้วยตนเองตลอดชีวิตโดยไม่ต้องพึ่งพาตัวแปลไทย',
            'การพูดเร็วๆ โดยไม่สนใจว่าผู้ฟังจะเข้าใจหรือไม่',
            'การหยุดอ่านและหยุดฟังภาษาอังกฤษหลังจบคอร์ส',
          ],
          explanation:
            'Linguistic Autonomy คือการมีเครื่องมือและทักษะที่สามารถต่อยอดการเรียนรู้ได้ด้วยตัวเองตลอดไป',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคฉลองชัยชนะนี้ให้ถูกต้องตามหลักไวยากรณ์: "Having graduate today, I will continue to learn English forever."',
          answer:
            'Having graduated today, I will continue to learn English forever.',
          explanation:
            'หลัง Having ต้องใช้ V3 (graduated)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำในช่องว่าง: We celebrate your formal _____ (การสำเร็จการศึกษา) with immense pride and admiration.',
          answer: 'graduation',
          explanation: 'graduation = การสำเร็จการศึกษา',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "พวกเราได้สำเร็จการศึกษาจากหลักสูตร 252 วันด้วยความมุ่งมั่นและความภาคภูมิใจ"',
          answer:
            'We have graduated from the 252-day curriculum with dedication and pride.',
          explanation:
            'We have graduated from the 252-day curriculum with dedication and pride.',
        },
      ],
      writing:
        'เขียน Graduation Keynote Speech (สุนทรพจน์จบหลักสูตร) 150–200 คำ สรุปบทเรียนชีวิต ความเปลี่ยนแปลงในตัวคุณ และวิสัยทัศน์ที่คุณจะนำภาษาอังกฤษไปสร้างคุณค่าให้โลกใบนี้',
      writingSample:
        'Distinguished mentors, colleagues, and fellow learners,\n\nStanding here at the conclusion of 252 consecutive days of rigorous study, I am filled with profound gratitude. When I embarked on this journey, speaking English felt like attempting to decipher an alien code. Today, having traversed 36 intensive modules, I no longer see English as a foreign obstacle, but as an intimate lens through which I explore the world.\n\nThrough deliberate practice, I discovered that fluency is not an innate gift bestowed upon a lucky few; it is a muscle forged through daily consistency, scientific feedback, and courage. Armed with operational fluency, I promise to use this voice to connect with global communities, share creative ideas, and solve meaningful problems. Thank you for walking this transformative path with me. The master track concludes today, but our lifelong journey of curiosity and impact has only just begun!',
      writingNote:
        'อ่านสุนทรพจน์นี้ออกเสียงดังๆ เพื่อสัมผัสพลังแห่งความสำเร็จของคุณ',
      speakingTopic:
        'Graduation Keynote Speech: กล่าวสุนทรพจน์จบหลักสูตร 4 / 3 / 2 นาที',
      speakingBullets: [
        'กล่าวเปิดด้วยความภาคภูมิใจในความมุมานะ 252 วัน',
        'แบ่งปันบทเรียนสำคัญที่สุดที่เปลี่ยนแปลงความคิดของคุณ',
        'กล่าวปิดท้ายด้วยวิสัยทัศน์ในอนาคตอันสดใส',
      ],
    },
  ]
);
