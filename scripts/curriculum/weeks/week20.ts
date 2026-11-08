import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 3: คิดเป็นภาษาอังกฤษและสื่อสารในงานจริง';

export const WEEK20: ModuleSeed = createModule(
  {
    week: 20,
    phase: 3,
    phase_title: PHASE_TITLE,
    cefr_level: 'B1',
    title: 'Reported Speech: เล่าคำพูด สรุปประชุม และส่งต่อข้อมูล',
    summary:
      'ถ่ายทอดคำพูดและคำขอของคนอื่นอย่างแม่นยำ เลือก Reporting Verbs ที่สื่ออารมณ์ชัดเจนกว่า say/tell และสรุปประเด็นสำคัญจากการสนทนา',
    focus: 'Reported Statements/Questions/Requests, Reporting Verbs',
  },
  [
    {
      day: 134,
      title: 'Reported Statements: การถอย Tense (Backshift), เปลี่ยนเวลา/สรรพนาม & กรณีที่ไม่ต้องถอย Tense',
      objective:
        'ถ่ายทอดคำพูดของผู้อื่นได้อย่างแม่นยำโดยปรับสรรพนาม คำบอกเวลา และถอย Tense 1 ขั้นเมื่อเรื่องจบไปแล้ว รวมถึงรู้ว่าเมื่อไหร่ควรคง Tense ปัจจุบันไว้',
      explanation:
        'เวลาเอาคำพูดของเพื่อนหรือลูกค้ามาเล่าต่อให้คนอื่นฟังในภายหลัง (เช่น เมื่อวานเขาพูดว่า...) ภาษาอังกฤษจะ **"ถอย Tense ลง 1 ขั้น (Backshift)"** เพราะจุดเวลาตอนพูดผ่านไปแล้ว:\n- `am/is/are` → **`was/were`** | `V1` → **`V2`** | `will` → **`would`** | `can` → **`could`** | `did / have done` → **`had done`**\nพร้อมขยับคำบอกเวลา/สถานที่ให้ตรงมุมมองคนเล่า: `today` → **`that day`**, `tomorrow` → **`the next / following day`**, `yesterday` → **`the day before`**, `here` → **`there`**\n**ข้อยกเว้นสำคัญ (ไม่ต้องถอย Tense!)**: ถ้าสิ่งที่พูดยังคง **เป็นความจริงอยู่ในปัจจุบัน** หรือเป็นนิสัย/ตารางประจำ สามารถคง Present Simple ไว้ได้เลย เช่น `She told me the bakery **opens** at seven.` (ร้านยังเปิด 7 โมงอยู่ทุกวันนี้!)',
      sound: [
        'Weak "that" /ðət/ & Contracted "had/would" (\'d)',
        'said that /ˈsed ðət/ · the day before /ðə ˈdeɪ bɪˈfɔːr/ · following /ˈfɒl.əʊ.ɪŋ/',
        'เวลาเล่าคำพูดต่อ คำว่า `that` มักลดเสียงเป็น `/ðət/` หรือละทิ้งไปเลยในภาษาพูด (`He said he’d come` / `She told me she was busy`) เพื่อไม่ให้ประโยคดูแข็งทื่อ',
        'ซ้อมแปลงและพูดออกเสียง 3 คู่: "I’m busy today" → She said she was busy that day. / "I’ll call tomorrow" → He said he’d call the next day.',
      ],
      l1: [
        'เล่าคำพูดเมื่อหลายวันก่อนด้วยคำบอกเวลาเดิม: "Last Monday, the driver said he will arrive tomorrow." (ความจริงหมายถึงวันอังคารที่ผ่านมา!)',
        'ภาษาไทยไม่ต้องถอย Tense และมักยกคำพูดตรงๆ มาเล่าต่อทั้งดุ้นโดยไม่ปรับสรรพนามหรือเวลาตามมุมมองผู้ฟัง',
        'เช็ก 3 จุดทุกครั้งที่เล่าคำพูดในอดีต: 1) สรรพนามเปลี่ยนตามคนเล่าหรือยัง? (I→he/she) 2) เวลาเปลี่ยนไหม? (yesterday→the day before) 3) ถอย Tense 1 ขั้นหรือยัง (ยกเว้นความจริงถาวร)?',
      ],
      vocab: [
        ['supplier', 'ซัพพลายเออร์ / ผู้จัดหาวัตถุดิบ', '/səˈplaɪ.ər/', 'contact the fabric supplier', 'ติดต่อผู้จัดหาผ้า'],
        ['postpone', 'เลื่อนออกไป', '/pəʊstˈpəʊn/', 'postpone until the following week', 'เลื่อนออกไปเป็นสัปดาห์ถัดไป'],
        ['landlord', 'ผู้ให้เช่า', '/ˈlænd.lɔːd/', 'check with the landlord', 'สอบถามกับผู้ให้เช่า'],
        ['following', 'ถัดไป (ใช้แทน next/tomorrow)', '/ˈfɒl.əʊ.ɪŋ/', 'the following morning', 'เช้าวันถัดมา'],
        ['permanently', 'อย่างถาวร', '/ˈpɜː.mə.nənt.li/', 'remain permanently open', 'เปิดให้บริการถาวร'],
        ['relay', 'ส่งต่อข้อความ/ข้อมูล', '/ˈriː.leɪ/', 'relay an urgent update', 'ส่งต่อข้อมูลอัปเดตด่วน'],
      ],
      examples: [
        ['On Tuesday, our supplier said the fabric shipment would arrive the following morning.', 'เมื่อวันอังคาร ซัพพลายเออร์บอกว่าล็อตผ้าจะมาถึงในเช้าวันถัดไป'],
        ['She told me she had submitted the tax receipt the day before.', 'เธอบอกฉันว่าเธอได้ส่งใบเสร็จภาษีไปตั้งแต่วันก่อนหน้านั้นแล้ว'],
        ['My roommate mentioned that he could pick up the groceries after work.', 'รูมเมตของฉันบอกว่าเขาสามารถแวะซื้อของเข้าบ้านหลังเลิกงานได้'],
        ['The landlord told us that the building security desk stays open twenty-four hours.', 'ผู้ให้เช่าบอกเราว่าเคาน์เตอร์รปภ.ของอาคารเปิดตลอดยี่สิบสี่ชั่วโมง (ความจริงถาวรจึงไม่ต้องถอย Tense)'],
      ],
      reading:
        "Relaying accurate messages across a busy team takes more care than simply repeating exact words. On Monday afternoon, the printing supplier called Anan and said, \"We finished the proof yesterday, and our van will deliver the boxes here tomorrow morning.\" Two days later, when Anan updated his manager on Wednesday, he shifted every time marker clearly so nobody got confused. He explained that the supplier had finished the proof on Sunday and that their van had delivered the boxes there the day before. On the other hand, when Anan passed along a message from their new neighborhood café owner, he kept one verb in the present simple: the owner said that the coffee counter opens at six thirty every weekday and offers oat milk without extra charge. Knowing when to shift tenses back and when a fact stays current keeps every update crystal clear.",
      listenQ: 'Why did Anan keep the verb "opens" in the present simple when relaying the café owner’s message?',
      listenA: 'Because the coffee counter’s weekday opening schedule stays current and true.',
      dictation: 'He said they had finished the proof the day before.',
      listenNote: 'สังเกต "they had" ย่อหรือลดเสียงเบาๆ และ Stress ชัดที่ said, finished, proof, day, before',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคเล่าคำพูดเมื่อสัปดาห์ก่อนที่ยังไม่ได้ปรับเวลาและ Tense: "Last Wednesday, Mint said she will send the contract tomorrow and she lost the file yesterday."',
          answer: 'Last Wednesday, Mint said she would send the contract the next day and that she had lost the file the day before.',
          explanation: 'will → would / tomorrow → the next day (หรือ the following day) / lost → had lost / yesterday → the day before',
        },
        {
          kind: 'choice',
          prompt: 'เมื่อเดือนที่แล้วคุณครูพูดว่า "The city library closes at eight on weekdays." (และตอนนี้ก็ยังเป็นแบบนั้น) ข้อใดเล่าต่อได้ถูกต้องและเป็นธรรมชาติที่สุด?',
          answer: 'Our teacher told us that the city library closes at eight on weekdays.',
          choices: [
            'Our teacher said us that the city library closed at eight on weekdays.',
            'Our teacher told us that the city library closes at eight on weekdays.',
            'Our teacher told that the city library is closing at eight yesterday.',
            'Our teacher asked us that the city library will close at eight.',
          ],
          explanation: 'ตารางเวลาที่ยังเป็นจริงเสมอคง Present Simple (closes) ได้ และ told + person (us) ถูกต้อง',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่างให้ถูกหลัก Backshift: On Friday morning, the technician told me he _____ (fix) the leaking pipe the day before.',
          answer: 'had fixed',
          explanation: 'คำพูดเดิมเป็น Past Simple ("I fixed it yesterday") เมื่อนำมาเล่าต่อในอดีตจึงถอยเป็น Past Perfect: had fixed',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ (เป็นการเล่าเหตุการณ์สัปดาห์ก่อน): "เขาบอกว่าเขาไม่สามารถมาร่วมประชุมในวันถัดไปได้"',
          answer: 'He said that he could not join the meeting the following day.',
          explanation: 'can’t → could not + tomorrow → the following day / the next day',
        },
      ],
      writing:
        'จำลองว่าคุณได้รับข้อความจาก 2 คนเมื่อ 3 วันก่อน (เช่น ช่างซ่อมบ้าน และเพื่อนร่วมงาน) แล้วเขียนสรุปส่งต่อให้ครอบครัวหรือหัวหน้า 5–6 ประโยค โดยใช้ Backshift (would, could, had + V3) คู่กับคำบอกเวลาที่ปรับแล้ว และใส่ความจริงที่ยังเป็นปัจจุบัน 1 ประโยค',
      writingSample:
        'Earlier this week, I spoke with both the electrician and our studio manager about Thursday’s setup. On Monday, the electrician told me he had tested all the kitchen outlets the day before and that everything was safe. He also said he would bring two extra extension cords the following morning. Meanwhile, our studio manager mentioned that the building service gate opens at seven daily, so we could unload boxes early without blocking street traffic.',
      writingNote: 'เช็กว่าไม่หลุดใช้ today/tomorrow/yesterday แบบดิบๆ ในประโยคอดีต และตรวจการผัน would/could/had + V3',
      speakingTopic: 'ส่งต่อข้อความจาก 2 แหล่งให้แม่นยำ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'นึกถึงคำพูดหรือแชตที่เพื่อน/ลูกค้า/ช่างเพิ่งบอกคุณเมื่อสัปดาห์ก่อน แล้วเล่าต่อด้วย He said... / She told me...',
        'บังคับเปลี่ยนเวลาจาก tomorrow → the next day และ yesterday → the day before',
        'แทรกความจริงที่ยังเป็นปัจจุบัน 1 ข้อที่ไม่ต้องถอย Tense (เช่น เวลาเปิดร้าน หรือที่อยู่)',
      ],
    },
    {
      day: 135,
      title: 'say vs tell vs ask: แก้นิสัยพูดผิดตลอดกาล ("He said me..." ❌ → "He told me..." ✅)',
      objective:
        'แยกโครงสร้างกรรมของ say, tell และ ask ได้ขาด 100% โดยไม่เผลอวางชื่อคนหลัง say หรือลืมใส่ชื่อคนหลัง tell',
      explanation:
        'จุดผิดอันดับ 1 ของผู้เรียนไทยเวลาเริ่มเล่าคำพูดคนอื่นคือสลับ **`say`** กับ **`tell`**! เพราะภาษาไทยใช้ "บอกว่า / พูดว่า" วางตรงไหนก็ได้ แต่ในภาษาอังกฤษ 3 คำนี้มีโครงสร้างคนละแบบเด็ดขาด:\n1) **`say`** = โฟกัสที่ **"คำพูด"** (ห้ามวาง `me/him/her` หลัง `say` เด็ดขาด! ❌ *He said me*)\n- ✅ `He said (that) he was tired.` หรือ `He said **to** me (that) he was tired.`\n2) **`tell`** = โฟกัสที่ **"ผู้ฟัง"** (ต้องมี `me/him/us/ชื่อคน` ตามหลังทันที! ❌ *He told that...*)\n- ✅ `He told **me** (that) he was tired.` (ยกเว้นสำนวนเฉพาะ: *tell the truth, tell a lie, tell a story, tell the time*)\n3) **`ask`** = ใช้เมื่อมี **"คำถามหรือคำขอร้อง"** (+ คนหรือไม่ใส่คนก็ได้ในคำถาม): `She asked **me** if I had finished.` / `She asked **us** to wait.`',
      sound: [
        'Final Clusters in "told me" / "asked me" / "said that"',
        'told me /ˈtəʊld mi/ · asked me /ˈɑːskt mi/ · said to me /ˈsed tə mi/',
        'ระวังกลุ่มพยัญชนะท้ายใน `asked` (/ɑːskt/) อย่าออกเสียงเป็น "แอ็ก-ซิด" แต่ให้ปล่อยเสียง /skt/ สั้นๆ แล้วต่อด้วย `me` (/ˈɑːskt mi/ หรือในพูดเร็วมากอาจคลาย /t/ เบาๆ แต่ห้ามหายทั้ง /sk/)',
        'ฝึกพูด 3 โครงสร้างให้ติดปากจนไม่หลุดผิด: He said he’d call. / He told me he’d call. / He asked me to call.',
      ],
      l1: [
        'พูดว่า "She said me to come early." หรือ "They told that the train is late."',
        'ภาษาไทย "เขาบอกฉันว่า..." กับ "เขาบอกว่า..." ใช้กริยาคำเดียวกันได้ทั้งคู่ เลยจำปนกันหมด',
        'ท่อง 3 สมการทองคำไว้หน้าโต๊ะ: SAY + something | TELL + someone + something | ASK + someone + (if/to...)',
      ],
      vocab: [
        ['mix-up', 'ความเข้าใจผิด / ความสับสน', '/ˈmɪks.ʌp/', 'clear up a scheduling mix-up', 'เคลียร์ความเข้าใจผิดเรื่องตารางเวลา'],
        ['misunderstand', 'เข้าใจผิด', '/ˌmɪs.ʌn.dəˈstænd/', 'completely misunderstand the note', 'เข้าใจข้อความผิดไปคนละทาง'],
        ['deadline', 'กำหนดส่งงาน', '/ˈded.laɪn/', 'extend a project deadline', 'ขยายกำหนดส่งโปรเจกต์'],
        ['truth', 'ความจริง', '/truːθ/', 'always tell the truth', 'พูดความจริงเสมอ'],
        ['update', 'ข้อมูลอัปเดต', '/ˈʌp.deɪt/', 'pass along an update', 'ส่งต่อข้อมูลอัปเดต'],
        ['strict', 'เข้มงวด / เป๊ะ', '/strɪkt/', 'be strict about timing', 'เข้มงวดเรื่องเวลา'],
      ],
      examples: [
        ['Our manager told us that the client wanted two brighter color samples.', 'ผู้จัดการบอกพวกเราว่าลูกค้าอยากได้ตัวอย่างสีที่สว่างขึ้นอีกสองแบบ'],
        ['Nok said she would handle the seating chart before Friday noon.', 'นกบอกว่าเธอจะจัดการผังที่นั่งให้เสร็จก่อนเที่ยงวันศุกร์'],
        ['Wait—did the receptionist say to wait here or upstairs?', 'เดี๋ยวนะ พนักงานต้อนรับบอกให้รอตรงนี้หรือข้างบน?'],
        ['The organizer asked everyone whether they needed parking passes.', 'ผู้จัดงานถามทุกคนว่าต้องการบัตรจอดรถไหม'],
      ],
      reading:
        "A small mix-up at a boutique design studio proved how much difference clear reporting makes. On Thursday morning, Win rushed in looking stressed because he thought their client presentation started at nine. When Mint asked him why he was hurrying, Win said that a junior coordinator had told him the meeting was moved earlier. Mint frowned and called the coordinator right away to check. As it turned out, the coordinator had only said that the room setup would begin at nine, while the client had asked everyone to gather at ten sharp! Because Win was rushing past the elevator, he had simply misheard half of the hallway conversation. Over iced coffee afterward, both teammates laughed and promised to double-check key times in writing. Clear notes—and keeping say, tell, and ask straight—prevent tiny hallway rumors from turning into morning panic.",
      listenQ: 'When had the client actually asked everyone to gather?',
      listenA: 'At ten sharp.',
      dictation: 'She told me the client had moved the deadline.',
      listenNote: 'สังเกต "told me" ต้องตามด้วย me ทันที และลดเสียง "had" เบาๆ ใน had moved',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ใช้ say / tell ผิดกฎทั้ง 2 จุด: "Yesterday, Leo said me he was tired, and Nora told that she could cover his shift."',
          answer: 'Yesterday, Leo told me he was tired, and Nora said that she could cover his shift.',
          explanation: '1) มีกรรมคน (me) ใช้ told me (หรือ said to me) 2) ไม่มีกรรมคนใช้ said that (ไม่ใช้ told that)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ say, tell และ ask ได้ถูกต้อง 100% ทุกตำแหน่ง?',
          answer: 'My neighbor told me that the water pipe was fixed, and she asked if we had good pressure now.',
          choices: [
            'My neighbor said me that the water pipe was fixed, and she asked if we had good pressure now.',
            'My neighbor told that the water pipe was fixed, and she said to me if we had good pressure.',
            'My neighbor told me that the water pipe was fixed, and she asked if we had good pressure now.',
            'My neighbor asked me that the water pipe was fixed, and she told if we had good pressure.',
          ],
          explanation: 'told + person (me) + that... และ asked + if... สำหรับคำถาม ถูกต้องครบทุกตัว',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำกริยาที่ถูกต้อง (say / tell / ask ในรูปอดีต): Nobody _____ us that the main gate locked early on Sundays!',
          answer: 'told',
          explanation: 'มีกรรมคน (us) ตามหลังทันทีและเป็นประโยคบอกเล่า จึงต้องใช้ told (ไม่ใช้ *said us)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "หัวหน้าบอกฉันว่าเราจะไม่ต้องทำงานวันเสาร์นี้ แต่เขาถามฉันว่าฉันช่วยตรวจรายงานก่อนวันศุกร์ได้ไหม"',
          answer: 'My boss told me that we would not have to work this Saturday, and he asked me if I could review the report before Friday.',
          explanation: 'ใช้ told me (บอกเล่า + คน) และ asked me if... (ถาม + คน)',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์ "สื่อสารคลาดเคลื่อนแล้วเคลียร์เข้าใจกัน" 5–6 ประโยค โดยใช้ครบทั้ง `said (that)...`, `said to + คน`, `told + คน + (that)...`, และ `asked + คน + if/to...`',
      writingSample:
        'Last Friday, we had a funny lunch mix-up in our team chat. First, Ton told me that everyone was meeting at the noodle shop across the street. However, ten minutes later, May said she had reserved a quiet table inside the market courtyard instead. When I called Ton, he admitted he had misread May’s earlier message! So May asked us to walk two minutes farther south, and she told everyone she would order iced drinks before we arrived.',
      writingNote: 'กวาดสายตาตรวจหลังคำว่า said (ต้องไม่มี me/us/him เดี่ยวๆ) และหลัง told (ต้องมีคน ยกเว้น told the truth/a story)',
      speakingTopic: 'เล่าเรื่องเข้าใจผิดในแชตหรือชีวิตจริงด้วย say / tell / ask (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าเหตุการณ์ที่คนหนึ่งบอกอย่างหนึ่ง แต่อีกคนเข้าใจอีกอย่าง (เช่น นัดผิดร้าน เวลาเปลี่ยน หรือส่งของผิด)',
        'ใช้ให้ครบทั้ง said / told + person / asked + person อย่างละ 2 ครั้งขึ้นไป',
        'ฟังเสียงตัวเองว่าห้ามหลุดพูด *said me* หรือ *told that* เด็ดขาด!',
      ],
    },
    {
      day: 136,
      title: 'Reported Questions & Commands: asked me to / told us not to / asked where we had been',
      objective:
        'รายงานทั้ง "คำถาม" (ทั้ง Wh- และ Yes/No) และ "คำสั่ง/คำขอ" (ทั้งเชิงบวกและเชิงห้าม) ของคนอื่นโดยเรียงคำและใช้รูปกริยาได้ถูกต้อง',
      explanation:
        'วันนี้เรารวมพลังของ **Week 19 (Indirect Order)** เข้ากับ **Week 20 (Backshift)** เพื่อรายงาน 2 สิ่งสำคัญ:\n1) **Reported Questions (รายงานคำถาม)**: ใช้สูตร `asked (+ คน) + Wh-word / if / whether + ประธาน + กริยาที่ถอย Tense แล้ว` (**ห้ามใส่ do/does/did และห้ามใส่เครื่องหมาย `?`**!)\n- *"Where did you park?"* → `He asked where we **had parked**.`\n- *"Are you ready?"* → `She asked **if** we **were** ready.`\n2) **Reported Commands & Requests (รายงานคำสั่ง/คำขอ)**: ไม่ใช้ backshift แต่ใช้ **`told / asked / reminded / advised + คน + (not) to + V1`**!\n- *"Wait outside."* → `The guard **told us to wait** outside.`\n- *"Don’t touch the wet paint."* → `She **told us not to touch** the wet paint.` (สังเกต: `not` วางหน้า `to` เสมอ! ไม่ใช่ *`to don\'t`* ❌)',
      sound: [
        'Stress on "not to" in Reported Negative Commands',
        'told us not to /ˈtəʊld əs ˈnɒt tə/ · asked where /ɑːskt weər/ · advised /ədˈvaɪzd/',
        'ในคำสั่งห้าม (`told us NOT to touch`) ให้เน้นเสียงชัดเจนที่ `not` แล้วลดเสียง `to` เป็น `/tə/` เพื่อให้คนฟังได้ยินคำว่าห้ามชัดไม่พลาด!',
        'ฝึกพูด 4 โครงสร้างสลับกัน: asked me to wait / told us not to rush / asked if I was ready / asked where I had been',
      ],
      l1: [
        'พูดว่า "She asked me where did I live?" (คง did + ลำดับคำถาม) หรือ "He told me don’t be late." / "He told me to not touch."',
        'ภาษาไทยรายงานคำสั่งห้ามโดยยกคำว่า "อย่า..." มาตรงๆ เช่น "เขาบอกฉันว่าอย่าสาย" สมองจึงหยิบ don’t มาใส่หลัง told โดยไม่เปลี่ยนเป็น not to',
        'ท่อง 2 รหัส: คำถาม = asked + (if/Wh) + S + VถอยTense | คำสั่ง/คำขอ = told/asked + คน + (NOT) TO + V1!',
      ],
      vocab: [
        ['safety drill', 'การซ้อมรับมือเหตุฉุกเฉิน', '/ˈseɪf.ti drɪl/', 'conduct a fire safety drill', 'จัดการซ้อมหนีไฟเพื่อความปลอดภัย'],
        ['curator', 'ภัณฑารักษ์ (ผู้ดูแลพิพิธภัณฑ์)', '/kjʊəˈreɪ.tər/', 'listen to the museum curator', 'ฟังคำแนะนำจากภัณฑารักษ์พิพิธภัณฑ์'],
        ['corridor', 'ทางเดินในอาคาร', '/ˈkɒr.ɪ.dɔːr/', 'walk down the east corridor', 'เดินไปตามทางเดินฝั่งตะวันออก'],
        ['evacuate', 'อพยพออกจากอาคาร', '/ɪˈvæk.ju.eɪt/', 'evacuate calmly via stairs', 'อพยพอย่างสงบทางบันได'],
        ['prohibit', 'ห้าม', '/prəˈhɪb.ɪt/', 'strictly prohibit flash photos', 'ห้ามถ่ายภาพเปิดแฟลชอย่างเด็ดขาด'],
        ['assembly', 'จุดรวมพล', '/əˈsem.bli/', 'gather at the assembly point', 'รวมตัวกันที่จุดรวมพล'],
      ],
      examples: [
        ['The museum guide told us not to lean against the wooden display cases.', 'ไกด์พิพิธภัณฑ์บอกพวกเราว่าอย่าพิงตู้จัดแสดงไม้'],
        ['Security asked every visitor whether they had left backpacks in the locker.', 'เจ้าหน้าที่รักษาความปลอดภัยถามผู้เข้าชมทุกคนว่าได้ฝากเป้ไว้ในล็อกเกอร์หรือยัง'],
        ['During the drill, the safety officer reminded staff to stay calm and use the stairs.', 'ระหว่างการซ้อม เจ้าหน้าที่ความปลอดภัยเตือนพนักงานให้ตั้งสติและใช้บันได'],
        ['Our supervisor asked where we had stored the signed attendance sheets.', 'หัวหน้างานถามว่าพวกเราเก็บใบลงชื่อเข้างานที่เซ็นแล้วไว้ที่ไหน'],
      ],
      reading:
        "Yesterday morning, our office building held its annual fire safety drill, and every team practiced following clear instructions. Before the alarm sounded, the building safety officer walked floor by floor and reminded everyone to check the nearest stairwell. Once the bell rang at ten o'clock, floor wardens calmly told us not to use the elevators and asked everyone to leave laptops behind. While we walked down the east corridor, a warden checked each meeting room and asked whether anyone had stayed inside the phone booths. Outside in the shaded courtyard, our team leader counted heads and asked who had arrived late that morning so nobody would be missed on the roster. Within six minutes, the whole building had gathered safely at the assembly point. Afterward, the officer praised how quietly everyone moved and advised us to memorize two separate exit routes just in case.",
      listenQ: 'What did the floor wardens tell everyone not to use when the alarm rang?',
      listenA: 'They told everyone not to use the elevators.',
      dictation: 'The officer told us not to use the elevator.',
      listenNote: 'สังเกตการเน้นเสียงที่ "not" ก่อนลดเสียง "to" เป็น /tə/ ในคำว่า not to use',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยครายงานคำถามและคำสั่งห้ามที่ผิด 2 จุด: "The nurse asked me how long did I feel dizzy, and she told me don’t skip breakfast."',
          answer: 'The nurse asked me how long I had felt dizzy, and she told me not to skip breakfast.',
          explanation: '1) Reported Question ตัด did และถอย Tense เป็น how long I had felt 2) Reported Negative Command ใช้ told me not to + V1',
        },
        {
          kind: 'choice',
          prompt: 'หัวหน้าพูดว่า "Please don’t share these draft numbers outside the room, and have you backed up the slides?" ข้อใดรายงานคำพูดนี้ได้ถูกต้อง 100%?',
          answer: 'Our lead asked us not to share those draft numbers outside the room and asked if we had backed up the slides.',
          choices: [
            'Our lead told us to not sharing those draft numbers and asked did we back up the slides.',
            'Our lead asked us not to share those draft numbers outside the room and asked if we had backed up the slides.',
            'Our lead said us don’t share those draft numbers and asked whether had we backed up the slides.',
            'Our lead asked us didn’t share those draft numbers and asked if we have backed up the slides.',
          ],
          explanation: 'asked us not to share + asked if we had backed up (เรียง S+V และถอย Tense)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่างให้ถูกต้อง: The coach reminded the runners _____ to sprint too fast during the first kilometer.',
          answer: 'not',
          explanation: 'โครงสร้างคำสั่งห้าม: reminded + คน + not + to + V1 (not to sprint)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "พนักงานถามฉันว่าฉันเคยมาเที่ยวที่พิพิธภัณฑ์แห่งนี้มาก่อนไหม และเตือนฉันไม่ให้ถ่ายรูปโดยเปิดแฟลช"',
          answer: 'The staff member asked me whether I had visited this museum before and reminded me not to take flash photos.',
          explanation: 'asked me whether/if I had visited + reminded me not to take',
        },
      ],
      writing:
        'เขียนเล่าการไปทัศนศึกษา เวิร์กช็อป การซ้อมความปลอดภัย หรือไปหาหมอ 5–6 ประโยค โดยรายงานทั้งคำถามที่เจ้าหน้าที่/หมอถามคุณ (`asked if / asked + Wh-`) และคำแนะนำหรือข้อห้าม (`told/asked/advised me (not) to...`) อย่างน้อย 4 ประโยค',
      writingSample:
        'Last Saturday, I joined a beginner pottery workshop in Ari, and the instructor gave super clear guidance. First, she asked everyone if we had ever used a spinning wheel before. Next, she asked why we wanted to make mugs or bowls so she could size our clay. Before starting, she told us not to press too hard with our thumbs while centering the clay. She also reminded us to keep a damp sponge nearby and advised us not to rush the trimming stage.',
      writingNote: 'ตรวจสอบคำถามรายงานทุกจุดว่าไม่มี ? และไม่มี do/does/did รวมถึงตรวจ not to + V1 ในข้อห้ามทุกจุด',
      speakingTopic: 'เล่าคำแนะนำ ข้อห้าม และคำถามจากประสบการณ์จริง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าตอนไปตรวจสุขภาพ เวิร์กช็อป อบรม หรือเดินทางที่ต้องฟังคำชี้แจงจากเจ้าหน้าที่',
        'ใช้ asked me if / asked where... (พร้อมถอย Tense) และ told/reminded us (not) to + V1',
        'เน้นเสียงชัดตรงคำว่า not ใน not to เพื่อสื่อความหมายข้อห้ามให้แม่นยำ',
      ],
    },
    {
      day: 137,
      title: 'Powerful Reporting Verbs: mention, point out, clarify, confirm, remind, suggest, apologize for, insist on',
      objective:
        'ยกระดับจาก say/tell ที่จำเจ ไปใช้ Reporting Verbs เฉพาะทางที่สื่อเจตนาชัด พร้อมใช้รูปแบบกริยาตามหลัง (that / to V1 / V-ing) ได้ถูกต้อง',
      explanation:
        'หากเล่าประชุมแล้วพูดแค่ *"He said... She said... He told..."* ทั้งเรื่อง ภาษาจะฟังดูเรียบแบนเหมือนระดับ A2! เจ้าของภาษาในระดับ B1–B2 เลือกใช้ **Reporting Verbs ที่บอกหน้าที่ของคำพูดทันที** แต่ต้องจับคู่โครงสร้างด้านหลังให้ถูก 3 กลุ่ม:\n1) **กลุ่ม + `(that) clause`** (เล่าข้อเท็จจริง/ชี้ประเด็น): `mention` (เอ่ยถึง), `point out` (ชี้ให้เห็นจุดสำคัญ), `clarify` (อธิบายให้ชัด), `confirm` (ยืนยัน)\n2) **กลุ่ม + `คน + (not) to + V1`** (เตือน/แนะนำ): `remind` (เตือนความจำ), `advise` (แนะนำ), `encourage` (สนับสนุน)\n3) **กลุ่ม + `V-ing` หรือ `คำบุพบท + V-ing`** (ข้อผิดพลาดฮิตของคนไทย!): **`suggest + V-ing`** (*She suggested taking a taxi.* ❌ ห้าม `*suggested me to take*`), **`apologize for + V-ing`** (*He apologized for arriving late.* ❌ ห้าม `*apologized me*`), **`insist on + V-ing`** (*They insisted on checking every file.*)',
      sound: [
        'Multi-Syllable Word Stress in Reporting Verbs',
        'clarify /ˈklær.ɪ.faɪ/ · confirm /kənˈfɜːm/ · apologize /əˈpɒl.ə.dʒaɪz/ · suggest /səˈdʒest/',
        'ระวัง Stress ของคำกริยา 4 ตัวนี้: `CLAR-i-fy` (พยางค์แรก), `con-FIRM` (พยางค์สอง), `a-POL-o-gize` (พยางค์สอง), `sug-GEST` (พยางค์สอง และอ่าน /səˈdʒest/ ไม่ใช่ "ซัก-เก็ต")',
        'ฝึกพูด 5 ก้อนคำพร้อมรูปแบบด้านหลัง: suggested waiting / apologized for delaying / insisted on testing / clarified that / reminded us to',
      ],
      l1: [
        'พูดว่า "He suggested me to leave early." หรือ "She apologized me for late." หรือ "I want to confirm you that..."',
        'คนไทยเอาโครงสร้าง tell + คน + to V1 ไปสวมทับทุก Reporting Verb ทั้งที่ suggest / apologize / confirm มีกฎเฉพาะตัว',
        'จำ 3 คำต้องห้ามใส่ "คน" ตรงๆ หลังกริยา: suggest (+ V-ing / that S V) | apologize (to คน FOR + V-ing) | confirm (+ that S V / something — ห้าม *confirm you*)!',
      ],
      vocab: [
        ['clarify', 'ชี้แจงให้กระจ่าง', '/ˈklær.ɪ.faɪ/', 'clarify the payment timeline', 'ชี้แจงกรอบเวลาชำระเงินให้ชัดเจน'],
        ['point out', 'ชี้ให้เห็น', '/pɔɪnt aʊt/', 'point out a missing figure', 'ชี้ให้เห็นตัวเลขที่ขาดหายไป'],
        ['mention', 'กล่าวถึง / เกริ่นถึง', '/ˈmen.ʃən/', 'casually mention a concern', 'เกริ่นถึงข้อกังวลขึ้นมา'],
        ['apologize', 'ขอโทษ', '/əˈpɒl.ə.dʒaɪz/', 'apologize for delaying the upload', 'ขอโทษที่อัปโหลดไฟล์ล่าช้า'],
        ['insist', 'ยืนกราน / ยืนยันหนักแน่น', '/ɪnˈsɪst/', 'insist on reviewing every page', 'ยืนกรานที่จะตรวจทุกหน้า'],
        ['suggest', 'เสนอแนะ', '/səˈdʒest/', 'suggest splitting the rollout', 'เสนอให้แบ่งการปล่อยระบบเป็นช่วงๆ'],
      ],
      examples: [
        ['Our product lead clarified that the new menu would roll out next Monday.', 'หัวหน้าทีมโปรดักต์ชี้แจงให้ชัดว่าเมนูใหม่จะเริ่มใช้ในวันจันทร์หน้า'],
        ['Dan suggested testing the link on mobile before emailing clients.', 'แดนเสนอให้ทดสอบลิงก์บนมือถือก่อนส่งอีเมลให้ลูกค้า'],
        ['The delivery partner apologized for dropping off the wrong crate earlier.', 'พาร์ทเนอร์ขนส่งขอโทษที่มาส่งลังผิดก่อนหน้านี้'],
        ['The finance reviewer pointed out that two travel receipts were still unsigned.', 'ผู้ตรวจบัญชีชี้ให้เห็นว่าใบเสร็จค่าเดินทางสองใบยังไม่ได้เซ็นชื่อ'],
      ],
      reading:
        "During Tuesday's product review, strong reporting verbs captured not just what people said, but why each comment mattered. First, our developer apologized for uploading the test video ten minutes late because his home internet had dropped. Immediately, our project lead clarified that no client had waited, and she confirmed that the main schedule stayed on track. Midway through the demo, our designer pointed out that one button looked too faint on smaller phone screens. Instead of rushing past the issue, she suggested enlarging the icon and adding a short text label. Everyone agreed quickly, though our quality tester insisted on checking the fix across three browsers before Friday's launch. Before wrapping up, the lead also reminded everyone to double-check their regional holiday dates on the shared calendar. A thirty-minute call turned into a crystal-clear action log.",
      listenQ: 'What did the quality tester insist on doing before Friday’s launch?',
      listenA: 'He or she insisted on checking the fix across three browsers.',
      dictation: 'She suggested testing the link on mobile first.',
      listenNote: 'สังเกตคำว่า "suggested" ออกเสียง /səˈdʒes.tɪd/ (ซะ-เจส-ทิด) ตามด้วย V-ing (testing) ไม่ใช่ to test',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้กริยารายงานคำพูดที่ผิดโครงสร้างทั้ง 2 จุด: "At the meeting, Boom suggested us to postpone the trip, and Jane apologized everyone for arrive late."',
          answer: 'At the meeting, Boom suggested postponing the trip, and Jane apologized to everyone for arriving late.',
          explanation: '1) suggest + V-ing (suggested postponing) หรือ suggest that we postpone 2) apologize to + คน + for + V-ing (apologized to everyone for arriving late)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Reporting Verbs หลากหลายและถูกโครงสร้างไวยากรณ์ 100%?',
          answer: 'The client pointed out a pricing typo and insisted on receiving an updated quote by noon.',
          choices: [
            'The client pointed out a pricing typo and insisted to receive an updated quote by noon.',
            'The client pointed out a pricing typo and insisted on receiving an updated quote by noon.',
            'The client clarified us a pricing typo and suggested us to resend the quote.',
            'The client confirmed me a pricing typo and apologized for miss the email.',
          ],
          explanation: 'point out + noun และ insist on + V-ing (receiving) ถูกต้องสมบูรณ์ (confirm/clarify/suggest ไม่วางคนตรงๆ แบบนั้น)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำบุพบทให้สมบูรณ์: The courier company apologized _____ mixing up two boxes at the sorting hub.',
          answer: 'for',
          explanation: 'โครงสร้างคงรูป: apologize + for + V-ing (หรือคำนาม)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "เธอเสนอให้จัดประชุมสั้นๆ 15 นาทีในเช้าวันพรุ่งนี้เพื่อยืนยันรายละเอียดทั้งหมด"',
          answer: 'She suggested holding a quick fifteen-minute meeting tomorrow morning to confirm all the details.',
          explanation: 'suggested + V-ing (holding/having) + to confirm all the details',
        },
      ],
      writing:
        'เขียนบันทึกสรุปหลังประชุมสั้นๆ (6–7 ประโยค) โดยห้ามใช้คำว่า `said` และ `told` เลย! ให้เลือกใช้ Reporting Verbs จากบทนี้แทนอย่างน้อย 5 คำ (`clarified, pointed out, confirmed, reminded, suggested, apologized for, insisted on`)',
      writingSample:
        'Here is a brief recap from today’s vendor check-in. First, the print shop apologized for delivering the sample folders one day late. They clarified that a broken cutter had slowed production, and confirmed that the main batch is already packed. During the review, May pointed out a small spelling typo on page three. She suggested fixing the footer right away before printing begins. Finally, the team lead insisted on checking one fresh proof tonight and reminded everyone to sign off before ten tomorrow.',
      writingNote: 'ตรวจหลังทุก Reporting Verb ให้เป๊ะ: suggest + V-ing | apologize for + V-ing | insist on + V-ing | remind + คน + to V1',
      speakingTopic: 'สรุปผลการประชุมโดยไม่ใช้คำว่า said / told (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าสิ่งที่เพื่อนร่วมงานหรือเพื่อนในกลุ่มคุยตกลงกัน โดยบังคับใช้ mention, point out, clarify, suggest + V-ing, remind + คน + to',
        'ฝึกออกเสียง Stress คำว่า CLARify, conFIRM, aPOLogize, sugGEST ให้ถูกต้อง',
        'ตรวจสอบไม่ให้เผลอพูดว่า *suggested me to* หรือ *apologized me*',
      ],
    },
    {
      day: 138,
      title: 'Summarizing Meetings, Feedback & Client Requirements Accurately',
      objective:
        'สังเคราะห์บทสนทนาหรือฟีดแบ็กยาวๆ ให้เป็นข้อสรุปที่กระชับ ชัดเจน แยกแยะประเด็นที่ตกลงแล้วกับคำถามเปิด เพื่อส่งต่อให้ทีมหรือลูกค้าได้ทันที',
      explanation:
        'ในการทำงานจริง เราไม่ได้รายงานคำพูดทีละประโยคแบบคำต่อคำ แต่ต้อง **"ย่อยข้อมูล" (Synthesize)** จากการประชุม 40 นาทีให้เหลือสรุป 5 บรรทัดที่ใครอ่านก็เข้าใจตรงกัน! โครงสร้างระดับมืออาชีพที่ใช้สรุปงานได้แก่:\n- **อ้างอิงแหล่งข้อมูลอย่างเป็นกลาง**: `According to the client...` / `Based on user feedback...`\n- **สรุปมติที่เห็นพ้องกัน (Passive + Reporting)**: `It was agreed that...` / `Both teams confirmed that...`\n- **สรุปความต้องการและจุดเน้น**: `The client highlighted that...` / `They requested that we focus on...`\n- **แยกสิ่งที่ยังรอคำตอบ**: `One open question remains whether...`\nจำหลักสำคัญ: สรุปที่ดีต้องตอบ 3 อย่างชัดเจน — **ตกลงอะไรไปแล้ว? / ใครต้องทำอะไร? / เรื่องไหนยังต้องเช็กต่อ?**',
      sound: [
        'Thought-Group Chunking in Meeting Recaps',
        'according to /əˈkɔː.dɪŋ tuː/ · highlighted /ˈhaɪ.laɪ.tɪd/ · requirement /rɪˈkwaɪə.mənt/',
        'เวลาพูดสรุปประชุมให้คนฟังจดทัน ให้แบ่งประโยคเป็น 2–3 ก้อนความหมาย (Thought Groups) แล้วหยุด 0.4 วินาทีหลังตัวเปิด (`According to the client, [พัก] delivery speed matters most.`)',
        'ฝึกอ่านออกเสียงบทสรุป 4 ประโยคแบบแบ่งวรรคให้ฟังดูนิ่ง ชัด และน่าเชื่อถือ',
      ],
      l1: [
        'สรุปประชุมด้วยการก๊อปปี้คำพูดดิบๆ มาเรียงต่อกันเป็นหน้ากระดาษ จนคนอ่านหาไม่เจอว่าตกลงต้องทำอะไรต่อ',
        'ไม่คุ้นกับการใช้คำเชื่อมอย่าง According to / It was agreed that / They highlighted that เพื่อรวบความเห็นหลายประโยคเข้าด้วยกัน',
        'ฝึกจับ "แก่น 3 ข้อ" ก่อนเขียนสรุป: 1) ลูกค้า/ทีมต้องการอะไร (highlighted/requested) 2) มติที่ได้คืออะไร (it was agreed/confirmed) 3) สิ่งที่ต้องทำต่อคือใครทำอะไร (action items)!',
      ],
      vocab: [
        ['synthesize', 'สังเคราะห์ / ย่อยรวมข้อมูล', '/ˈsɪn.θə.saɪz/', 'synthesize key takeaways', 'สังเคราะห์ข้อสรุปสำคัญออกมา'],
        ['requirement', 'ข้อกำหนด / ความต้องการ', '/rɪˈkwaɪə.mənt/', 'meet client requirements', 'ตอบโจทย์ความต้องการของลูกค้า'],
        ['highlight', 'เน้นย้ำ / ชูจุดสำคัญ', '/ˈhaɪ.laɪt/', 'highlight two top priorities', 'เน้นย้ำสองเรื่องสำคัญอันดับต้นๆ'],
        ['consensus', 'ฉันทามติ / ความเห็นพ้อง', '/kənˈsen.səs/', 'reach a quick consensus', 'ได้ข้อสรุปร่วมกันอย่างรวดเร็ว'],
        ['action item', 'รายการสิ่งที่ต้องลงมือทำต่อ', '/ˈæk.ʃən ˈaɪ.təm/', 'assign clear action items', 'มอบหมายงานที่ต้องทำต่ออย่างชัดเจน'],
        ['remaining', 'ที่ยังค้างอยู่', '/rɪˈmeɪ.nɪŋ/', 'address remaining questions', 'จัดการคำถามที่ยังค้างอยู่'],
      ],
      examples: [
        ['According to early shopper feedback, shorter checkout screens reduced drop-offs.', 'จากฟีดแบ็กผู้ซื้อช่วงแรก หน้าจอชำระเงินที่สั้นลงช่วยลดการกดออกกลางคันได้'],
        ['It was agreed that the design team would deliver updated mockups by Thursday.', 'ที่ประชุมตกลงร่วมกันว่าทีมดีไซน์จะส่งภาพตัวอย่างฉบับอัปเดตภายในวันพฤหัสบดี'],
        ['The client highlighted that eco-friendly packaging mattered more than glossy ink.', 'ลูกค้าเน้นย้ำว่าบรรจุภัณฑ์รักษ์โลกสำคัญกว่าหมึกพิมพ์เงาวับ'],
        ['One remaining question is whether the regional branch can store extra cartons.', 'คำถามที่ยังค้างอยู่หนึ่งข้อคือสาขาภูมิภาคสามารถเก็บกล่องสำรองได้หรือไม่'],
      ],
      reading:
        "Turning a lively forty-minute client call into a crisp summary is one of the highest-value workplace skills. Yesterday afternoon, Pim met with a local skincare brand to finalize their holiday gift box. At first, the founders shared scattered wishes about ribbons, paper texture, and shipping speed. Instead of typing every remark word for word, Pim synthesized the discussion into four clear takeaways for her production team. First, according to the founders, durable recycled cardboard was non-negotiable, whereas gold foil could be skipped to save time. Second, they highlighted that every box needed a handwritten thank-you card inside. Third, it was agreed that Pim's studio would submit two physical box prototypes by next Wednesday. Finally, one open question remained regarding whether the client's warehouse could handle cold-weather storage before December. Within ten minutes, everyone knew the exact priorities without rewatching the call.",
      listenQ: 'What did the skincare brand founders agree to skip in order to save time?',
      listenA: 'They agreed that gold foil could be skipped.',
      dictation: 'It was agreed that prototypes would arrive by Wednesday.',
      listenNote: 'สังเกตโครงสร้าง "It was agreed that..." ออกเสียงไหลลื่น แล้วเน้นชัดที่ prototypes, arrive, Wednesday',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้สรุปการประชุมที่ยังปนภาษาคำสั่งดิบและผิดโครงสร้าง 2 จุด: "According to client, they highlighted need faster shipping, and it agreed we send samples Friday."',
          answer: 'According to the client, they highlighted the need for faster shipping, and it was agreed that we would send samples on Friday.',
          explanation: '1) According to the client + highlighted the need for... (หรือ highlighted that they needed...) 2) โครงสร้าง Passive: it was agreed that we would send...',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดสรุปประเด็นที่ยังไม่ได้ข้อสรุปจากที่ประชุมได้เป็นมืออาชีพและถูกต้องที่สุด?',
          answer: 'One remaining question is whether the supplier can guarantee delivery before the holiday.',
          choices: [
            'We don’t know yet can supplier guarantee delivery before holiday or not.',
            'One remaining question is whether the supplier can guarantee delivery before the holiday.',
            'Remaining question is if can the supplier guaranteeing delivery before the holiday.',
            'According to us, it was agreed whether the supplier can guarantee delivery.',
          ],
          explanation: 'ใช้ One remaining question is whether + S + V (เรียงแบบบอกเล่า) สั้น ชัด และเป็นธรรมชาติ',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบวลีอ้างอิงแหล่งข้อมูล: _____ to recent customer surveys, most commuters prefer quiet morning notifications.',
          answer: 'According',
          explanation: 'According to + แหล่งที่มา = อ้างอิงตาม / จากข้อมูลของ...',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษระดับสรุปประชุม: "ที่ประชุมเห็นพ้องกันว่าเราจะทดสอบฟีเจอร์ใหม่กับกลุ่มลูกค้าเล็กๆ ก่อน"',
          answer: 'It was agreed that we would test the new feature with a small customer group first.',
          explanation: 'ใช้โครงสร้างสรุปประชุม: It was agreed that + we would test (Backshift หลัง was agreed)',
        },
      ],
      writing:
        'สมมติว่าคุณเพิ่งประชุมเรื่องงานอีเวนต์ ทริปเที่ยวกับเพื่อน หรือโปรเจกต์ปรับปรุงร้านเสร็จ ให้เขียน **บทสรุป 6–7 ประโยค** แยก 3 ส่วนชัดเจนในย่อหน้าเดียว: 1) ความต้องการหลัก (`According to... / highlighted that...`) 2) สิ่งที่ตกลงกันแล้ว (`It was agreed that... / confirmed that...`) 3) สิ่งที่ยังต้องเช็กต่อ (`One remaining question is whether...`)',
      writingSample:
        'Here is our quick summary from this afternoon’s community market planning call. According to the neighborhood committee, shading and clean drinking-water stations are the top priorities for Saturday’s event. Vendors also highlighted that earlier setup access would help prevent street traffic outside the gate. Consequently, it was agreed that gates would open for unloading at six thirty in the morning and that signage would be placed at both corners. We also confirmed that two volunteers would handle waste sorting throughout the day. One remaining question is whether the local café can lend extra folding chairs before Friday evening.',
      writingNote: 'ตรวจดูว่าทั้งสรุปมีการผสม According to / highlighted / it was agreed that / remaining question is whether และถอย Tense หลังอดีตถูกต้อง',
      speakingTopic: 'สรุปสาระสำคัญจากการคุย 30 นาทีให้จบใน 2–4 นาที (4 / 3 / 2 นาที)',
      speakingBullets: [
        'สมมติว่ากำลังรายงานหัวหน้าหรือเพื่อนร่วมทีมหลังเพิ่งประชุมเสร็จสดๆ ร้อนๆ',
        'แบ่งช่วงพูดเป็น Thought Groups ชัดๆ: เกริ่นภาพรวม (According to...) → สิ่งที่ตกลงแล้ว (It was agreed that...) → สิ่งที่ยังต้องเช็ก (One open question is whether...)',
        'ใช้จังหวะหยุดหายใจ 0.4 วินาทีหลังคำเชื่อมเพื่อให้ผู้ฟังจดตามทัน',
      ],
    },
    {
      day: 139,
      title: 'Detecting Nuance & Speaker Attitude: อ่านน้ำเสียงผ่านคำรายงาน (claim, admit, insist, assure, complain)',
      objective:
        'เข้าใจความแตกต่างด้านน้ำเสียงและความน่าเชื่อถือของคำพูดที่แฝงอยู่ใน Reporting Verbs เพื่ออ่านข่าว รีวิว และรับฟังความเห็นในทีมได้อย่างลึกซึ้ง',
      explanation:
        'เมื่อนักข่าวหรือเพื่อนร่วมงานรายงานคำพูดคนอื่น คำกริยาที่เขาเลือกใช้จะบอก **"ท่าทีและความน่าเชื่อถือ"** ของเรื่องนั้นทันที! ลองเทียบประโยคเดียวกันแต่เปลี่ยน Reporting Verb:\n- `He **explained** that the server paused.` (เป็นกลาง มีเหตุผล)\n- `He **claimed** that the server paused.` (คนเล่าแอบสงสัยว่าจริงหรือเปล่า / อ้างว่า...)\n- `He **admitted** that he had skipped the backup.` (ยอมรับความผิดอย่างไม่เต็มใจนัก)\n- `He **complained** that nobody had warned him.` (บ่น/ไม่พอใจ)\n- `He **assured** us that everything was safe.` (ให้คำมั่นเพื่อทำให้คนฟังสบายใจ)\n- `She **hesitated to** promise an exact date.` (ลังเล ยังไม่กล้ารับปากเต็มที่)\nการจับความต่างเล็กๆ เหล่านี้ช่วยให้คุณ "อ่านใจคนพูด" และเลือกคำรายงานได้ตรงอารมณ์สถานการณ์จริง!',
      sound: [
        'Expressive Stress on Attitude Reporting Verbs',
        'claimed /kleɪmd/ · admitted /ədˈmɪt.ɪd/ · assured /əˈʃʊərd/ · complained /kəmˈpleɪnd/',
        'เวลาออกเสียงรายงานท่าที ให้ลงน้ำหนักเสียงหลักลงที่ Reporting Verb ตัวนั้นเบาๆ เช่น "He CLAIMED he’d sent it" (ฟังปุ๊บรู้ว่าผู้พูดแอบสงสัย) vs "She aSSURED us it was ready" (มั่นใจ อบอุ่น)',
        'ฝึกพูดประโยคเดียวกัน 3 น้ำเสียงโดยสลับคำ: claimed / admitted / assured',
      ],
      l1: [
        'แปลและใช้ทุกคำรายงานว่า "say / tell" หมด จนไม่สามารถแยกออกว่าคนพูดกำลังอ้างลอยๆ ยอมรับผิด บ่น หรือให้ความมั่นใจ',
        'สับสนความหมายระหว่าง "claim" (อ้างว่า — อาจจริงหรือไม่จริงก็ได้) กับ "confirm / prove" (ยืนยัน/พิสูจน์แล้วว่าจริง) รวมถึงใช้ "assure" ไม่มีกรรม (ที่ถูกคือ assure + คน!)',
        'จำง่ายๆ ตามอารมณ์: ไม่แน่ใจว่าจริง = claim | ยอมรับผิด = admit | บ่นไม่พอใจ = complain | ทำให้โล่งใจ = assure + คน (+ that...)',
      ],
      vocab: [
        ['claim', 'อ้างว่า (ยังอาจไม่พิสูจน์)', '/kleɪm/', 'claim the delay was unavoidable', 'อ้างว่าความล่าช้าเป็นเรื่องเลี่ยงไม่ได้'],
        ['admit', 'ยอมรับ (มักเป็นเรื่องผิดพลาด)', '/ədˈmɪt/', 'admit overlooking an email', 'ยอมรับว่ามองข้ามอีเมลไปฉบับหนึ่ง'],
        ['assure', 'รับรอง / ให้ความมั่นใจแก่...', '/əˈʃʊərd/', 'assure the team that', 'ให้ความมั่นใจแก่ทีมว่า'],
        ['complain', 'บ่น / ร้องเรียน', '/kəmˈpleɪnd/', 'complain about noisy repairs', 'บ่นเรื่องเสียงดังจากการซ่อมแซม'],
        ['hesitate', 'ลังเล / ยังไม่กล้ารับปาก', '/ˈhez.ɪ.teɪt/', 'hesitate to promise a date', 'ลังเลที่จะรับปากวันเวลาแน่นอน'],
        ['reliable', 'น่าเชื่อถือ', '/rɪˈlaɪ.ə.bəl/', 'sound calm and reliable', 'ฟังดูนิ่งและน่าเชื่อถือ'],
      ],
      examples: [
        ['One vendor claimed he had shipped the lamps on Monday, yet no tracking number existed.', 'ผู้ขายรายหนึ่งอ้างว่าเขาส่งโคมไฟตั้งแต่วันจันทร์ แต่กลับไม่มีเลขพัสดุเลย'],
        ['To his credit, Dan admitted that he had forgotten to attach the invoice.', 'ต้องชมแดนที่เขายอมรับตรงๆ ว่าลืมแนบใบแจ้งหนี้'],
        ['Neighbors complained that late-night deliveries were blocking the narrow lane.', 'เพื่อนบ้านบ่นว่ารถส่งของตอนดึกจอดขวางซอยแคบๆ'],
        ['The technician assured us that the new seal would prevent future leaks.', 'ช่างเทคนิคให้ความมั่นใจกับเราว่าซีลยางตัวใหม่จะช่วยกันรั่วในอนาคตได้'],
      ],
      reading:
        "Reading between the lines of any project debrief starts with paying attention to reporting verbs. After a rain-delayed outdoor concert in Chiang Mai, two organizers gave noticeably different accounts. At first, the stage contractor claimed that heavy wind had damaged two speakers overnight, making sound checks impossible. However, when the venue manager checked security footage, the contractor quietly admitted that his crew had arrived three hours late and forgotten waterproof covers. Meanwhile, several nearby stall owners complained that poor drainage near the ticket booth had soaked their displays. Rather than trading blame, the main event director stepped forward and assured vendors that partial booth fees would be refunded promptly. Although she hesitated to announce a rescheduled date until weather forecasts cleared, everyone appreciated her honesty and clear accountability.",
      listenQ: 'What did the stage contractor quietly admit after security footage was checked?',
      listenA: 'He admitted that his crew had arrived three hours late and forgotten waterproof covers.',
      dictation: 'The director assured vendors that fees would be refunded.',
      listenNote: 'สังเกตคำว่า "assured" (/əˈʃʊərd/) เน้นพยางค์สองและเชื่อมไปหา vendors ทันที (assure + คน + that)',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ใช้ความหมายและโครงสร้างของ Reporting Verb ผิด 2 จุด: "The guest assured that the AC worked, and the clerk claimed for the noisy hallway."',
          answer: 'The clerk assured the guest that the AC worked, and the guest complained about the noisy hallway.',
          explanation: '1) assure ต้องมีกรรมคนตามหลัง (assured the guest that...) 2) บ่นเรื่องเสียงดังใช้ complain about (ไม่ใช่ *claim for)',
        },
        {
          kind: 'choice',
          prompt: 'คุณอ่านเจอข้อความว่า "The driver admitted checking his phone right before missing the turn." ประโยคนี้สะท้อนท่าทีใด?',
          answer: 'The driver reluctantly acknowledged making a mistake.',
          choices: [
            'The driver boasted proudly about his driving skill.',
            'The driver reluctantly acknowledged making a mistake.',
            'The driver proved that another car caused the delay.',
            'The driver complained about the road signs being unclear.',
          ],
          explanation: 'admit + V-ing แปลว่ายอมรับความจริงหรือความผิดพลาดที่เกิดขึ้น',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ตรงความหมาย "อ้างลอยๆ ยังไม่น่าเชื่อเต็มร้อย": The website _____ to offer instant support, yet nobody answered our message for two days.',
          answer: 'claimed',
          explanation: 'claimed สื่อถึงคำกล่าวอ้างที่ขัดกับหลักฐานจริงในท่อนหลัง',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "หัวหน้างานให้ความมั่นใจกับพวกเราว่าไฟล์สำรองทั้งหมดปลอดภัยดี และเธอยอมรับว่าช่วงเช้าทุกคนกดดันมาก"',
          answer: 'Our supervisor assured us that all backup files were safe, and she admitted that everyone had felt pressured that morning.',
          explanation: 'assured us that... (มีกรรมคน us) + admitted that... (ยอมรับ)',
        },
      ],
      writing:
        'เขียน "มุมมองรายงานข่าวหรือสรุปเหตุการณ์ที่มีดราม่าเล็กๆ" (เช่น งานจัดส่งล่าช้า รีวิวสินค้า หรือเรื่องเข้าใจผิดในคอนโด) 6–7 ประโยค โดยใช้ Reporting Verbs สะท้อนน้ำเสียงอย่างน้อย 4 ตัวจาก: `claimed`, `admitted`, `complained`, `assured (+ คน)`, `hesitated to`',
      writingSample:
        'Residents in our building had a busy discussion after yesterday’s elevator outage. At first, the maintenance company claimed that a city power surge had caused the sudden stop. However, the technician later admitted that an old sensor had needed replacement for weeks. Several neighbors on upper floors complained that no warning notice had been posted in advance. Fortunately, the building manager stepped in and assured residents that the new part was already on the way. Although she hesitated to promise an exact hour for reopening, she promised hourly updates in the chat group.',
      writingNote: 'ตรวจดูว่า assure มีกรรมคน (assured residents / assured us) เสมอ และ complain ใช้คู่ about/that ส่วน claim ใช้สื่อคำอ้างที่ยังไม่ปักใจเชื่อ',
      speakingTopic: 'เล่าเหตุการณ์ 2 มุมมองด้วย Attitude Reporting Verbs (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าเรื่องความขัดแย้งเล็กๆ หรือรีวิวบริการที่มีทั้งฝ่ายอ้างเหตุผล ฝ่ายบ่น ฝ่ายยอมรับผิด และฝ่ายให้ความมั่นใจ',
        'ใช้น้ำเสียงเน้นคำที่ claimed / admitted / complained / assured เพื่อถ่ายทอดอารมณ์ผู้พูดให้สมจริง',
        'ระวังการวางกรรมหลัง assure (+ คน) และ V-ing หลัง admit (admit + V-ing / admit that...)',
      ],
    },
    {
      day: 140,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 20: Reported Speech, Reporting Verbs & Meeting Summaries + Dictogloss',
      objective:
        'ประมวลความรู้ตลอดสัปดาห์ 20 ทั้งการถอย Tense ข้อยกเว้นความจริงถาวร say/tell/ask คำถาม-คำสั่งรายงาน และ Reporting Verbs ผ่าน Dictogloss และงานเขียน-พูดปิดท้าย Phase 3A',
      explanation:
        'ยินดีด้วยครับ! วันนี้จบ **สัปดาห์ที่ 20 (ครึ่งทางของ Phase 3 — Phase 3A)** แล้ว ทบทวน 5 หลักสำคัญของ Reported Speech ก่อนลุย Dictogloss:\n1) **Backshift & Time Shifts**: `will → would`, `V2/have → had V3`, `tomorrow → the following day`, `yesterday → the day before` (**ยกเว้น**ความจริง/ตารางที่ยังเป็นปัจจุบัน!)\n2) **`say` vs `tell` vs `ask`**: `said (to me) that...` | `told me that...` | `asked (me) if / to...`\n3) **Reported Questions & Commands**: `asked where we had gone` (ห้าม did/สลับกริยา!) | `told us NOT to touch`\n4) **Reporting Verbs + รูปแบบที่ถูกต้อง**: `suggest + V-ing`, `apologize (to sb) for + V-ing`, `insist on + V-ing`, `clarify / point out / confirm`\n5) **Meeting Summaries & Nuance**: `According to...`, `It was agreed that...`, และแยกอารมณ์ของ `claimed vs admitted vs assured + คน`',
      sound: [
        'Week 20 Connected Speech & Thought-Group Audit',
        "said that /ˈsed ðət/ · told us not to /ˈtəʊld əs ˈnɒt tə/ · assured us /əˈʃʊərd əs/",
        'ทำ Shadowing บทอ่านวันนี้ 2 รอบ โดยฝึกแบ่ง Thought Groups แบบผู้สรุปงานมืออาชีพ และเช็กการออกเสียง -ed / -s ท้ายคำกริยารายงานทุกตัวไม่ให้หล่นหาย',
        'เช็กคำที่มักออกเสียงผิด: `clarify` /ˈklær.ɪ.faɪ/, `apologize` /əˈpɒl.ə.dʒaɪz/, `suggest` /səˈdʒest/',
      ],
      l1: [
        'พอใช้รวมทุกโครงสร้าง มักหลงใส่คำว่า `to` หลัง suggest (`suggested to do`), ใส่ `me` หลัง say (`said me`), หรือลืมเปลี่ยน `not` มาไว้หน้า `to` ในคำสั่งห้าม',
        'ความเร็วในการเล่าเรื่องทำให้กลับไปใช้โครงสร้างภาษาไทยที่ทุกกริยามีหน้าตาเหมือนกันหมด',
        'ก่อนกดส่งอีเมลหรือพูดสรุปงาน ให้สแกน 3 ตัวท็อปเสมอ: 1) say/tell ถูกช่องไหม? 2) คำถามรายงานไม่มี do/did/สลับกริยาแล้วใช่ไหม? 3) suggest/apologize/insist ใช้คู่ V-ing หรือยัง?',
      ],
      vocab: [
        ['takeaway', 'ประเด็นสำคัญที่ได้', '/ˈteɪk.ə.weɪ/', 'share key takeaways', 'แชร์ประเด็นสำคัญที่ได้จากประชุม'],
        ['accountability', 'ความรับผิดชอบที่ตรวจสอบได้', '/əˌkaʊn.təˈbɪl.ə.ti/', 'build clear accountability', 'สร้างความรับผิดชอบที่ชัดเจนในทีม'],
        ['perspective', 'มุมมอง', '/pəˈspek.tɪv/', 'understand every perspective', 'เข้าใจมุมมองของทุกฝ่าย'],
        ['reassure', 'ทำให้สบายใจคลายกังวล', '/ˌriː.əˈʃʊər/', 'reassure worried clients', 'ทำให้ลูกค้าที่กังวลสบายใจขึ้น'],
        ['promptly', 'อย่างทันท่วงที / รวดเร็ว', '/ˈprɒmpt.li/', 'follow up promptly', 'ติดตามงานอย่างทันท่วงที'],
        ['consensus', 'ข้อสรุปร่วมกัน', '/kənˈsen.səs/', 'document the final consensus', 'จดบันทึกข้อสรุปสุดท้ายร่วมกัน'],
      ],
      examples: [
        ['The facilitator reminded everyone not to interrupt while teammates shared honest feedback.', 'ผู้ดำเนินวงเสวนาเตือนทุกคนไม่ให้พูดแทรกระหว่างที่เพื่อนร่วมทีมแบ่งปันความเห็นอย่างตรงไปตรงมา'],
        ['According to our retrospective notes, nobody blamed individuals for last month’s delay.', 'จากบันทึกทบทวนงาน ไม่มีใครกล่าวโทษรายบุคคลสำหรับความล่าช้าเมื่อเดือนก่อน'],
        ['Two engineers admitted rushing the final upload and suggested adding an automated check.', 'วิศวกรสองคนยอมรับว่าเร่งอัปโหลดไฟล์สุดท้ายและเสนอให้เพิ่มการตรวจเช็กอัตโนมัติ'],
        ['Our manager assured the team that deadlines would stay realistic next quarter.', 'ผู้จัดการให้ความมั่นใจกับทีมว่ากำหนดส่งงานในไตรมาสหน้าจะตั้งอยู่บนความเป็นจริงมากขึ้น'],
      ],
      reading:
        "At the close of a demanding product cycle, our eight-person team held an honest retrospective to capture clear takeaways. First, our coordinator asked everyone what had slowed us down most during launch week. Two designers pointed out that late copy edits had pushed layout reviews past midnight, while a developer admitted skipping an extra check the day before release. Instead of complaining endlessly, everyone focused on practical fixes. Marketing apologized for sending changes piecemeal and suggested freezing all headline edits forty-eight hours earlier next time. Our engineering lead clarified that automated alerts already catch broken links, though she insisted on keeping one human review before publishing. Finally, the team lead reassured everyone that holiday schedules would be respected and told us not to reply to routine chats after seven o'clock. According to our shared summary, it was agreed that every role felt heard and clear accountability made future sprints far calmer.",
      listenQ: 'What did marketing suggest doing next time after apologizing for sending changes piecemeal?',
      listenA: 'They suggested freezing all headline edits forty-eight hours earlier.',
      dictation: 'Marketing suggested freezing all edits two days earlier.',
      listenNote: 'สังเกต "suggested" ตามด้วย V-ing (freezing) ทันที และออกเสียงท้าย -ed ของ suggested ชัดเจน',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังเสียงบทอ่านแล้วเลือกคู่คำที่เติมได้ตรงต้นฉบับ: "Instead of complaining endlessly, everyone focused on practical fixes. Marketing _____ for sending changes piecemeal and _____ freezing all headline edits..."',
          answer: 'apologized / suggested',
          choices: [
            'apologized / suggested',
            'explained / asked',
            'complained / insisted',
            'admitted / reminded',
          ],
          explanation: 'จากบทอ่าน: "Marketing apologized for sending changes piecemeal and suggested freezing all headline edits..."',
          audio_text: 'Instead of complaining endlessly, everyone focused on practical fixes. Marketing apologized for sending changes piecemeal and suggested freezing all headline edits forty-eight hours earlier next time.',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคทบทวนที่มีจุดพลาด 3 จุด: "Yesterday, Kate said me she will visit the site tomorrow, and she asked me where did we put the keys."',
          answer: 'Yesterday, Kate told me she would visit the site the next day, and she asked me where we had put the keys.',
          explanation: '1) said me → told me 2) will ... tomorrow → would ... the next day (หรือ the following day) 3) where did we put → where we had put',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Reported Commands, Backshift และ Reporting Verbs ได้ถูกต้องครบ 100%?',
          answer: 'The coordinator reminded us not to leave equipment unlocked and assured us that guards stayed on duty all night.',
          choices: [
            'The coordinator reminded us to not leave equipment unlocked and assured that guards stayed on duty all night.',
            'The coordinator reminded us not to leave equipment unlocked and assured us that guards stayed on duty all night.',
            'The coordinator told us don’t leave equipment unlocked and suggested us to check the guards.',
            'The coordinator asked us not leaving equipment unlocked and said us that guards stay all night.',
          ],
          explanation: 'reminded us not to leave (not วางหน้า to) + assured us that... (มีกรรมคน us) ถูกต้องครบทุกส่วน',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่างให้ถูกโครงสร้าง: The safety inspector insisted _____ testing every smoke alarm before the guests checked in.',
          answer: 'on',
          explanation: 'โครงสร้างคงรูป: insist + on + V-ing (testing)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษระดับสรุปประชุม: "ที่ประชุมเห็นพ้องกันว่าผู้จัดการจะยืนยันวันที่ใหม่กับลูกค้า และเตือนทีมไม่ให้ลืมสำรองไฟล์ก่อนวันศุกร์"',
          answer: 'It was agreed that the manager would confirm the new date with the client and remind the team not to forget to back up the files before Friday.',
          explanation: 'It was agreed that + would confirm + and remind the team not to forget...',
        },
      ],
      writing:
        'งานเขียนส่งท้าย Phase 3A (7–8 ประโยค): เขียนสรุปบทสนทนาหรือประชุม 1 ครั้งที่คุณจินตนาการหรือเคยเจอ โดยผสมให้ครบทั้ง: 1) การรายงานคำพูดพร้อม Backshift และปรับเวลา 2) Reported Question 1 ข้อ 3) Reported Command (`not to`) 1 ข้อ และ 4) Reporting Verbs เฉพาะทางอย่างน้อย 3 คำ (`clarified, pointed out, suggested + V-ing, apologized for, assured + คน`)',
      writingSample:
        'Last Friday, our neighborhood cycling club met to review our monthly charity ride. At the start, the route planner asked everyone which street crossings had felt busiest the month before. Several riders pointed out that one bridge lacked clear cones, and one volunteer apologized for arriving late to set up signs. Consequently, our captain suggested starting setup thirty minutes earlier next month. He also reminded us not to ride two abreast on narrow market lanes. Meanwhile, our treasurer clarified that donation receipts stay available online all year, and she assured members that every contribution reached the local school safely. It was agreed that clear planning would make next month’s ride even smoother.',
      writingNote: 'เช็กครบ 5 จุด: 1) say/tell ไม่สลับกรรม 2) Backshift + เวลาครบ 3) ไม่มี do/does/did ในคำถามรายงาน 4) not to + V1 5) suggest/apologize for/insist on + V-ing',
      speakingTopic: 'Phase 3A Mid-Checkpoint Speech: รายงานสรุปการสนทนาและบทเรียนรอบเดือน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูด 4 นาที → 3 นาที → 2 นาที เล่าเหตุการณ์สำคัญที่รวมการเล่าเวลาซับซ้อน (สัปดาห์ 17) ระบบงาน (สัปดาห์ 18) ความสุภาพ (สัปดาห์ 19) และการรายงานคำพูด (สัปดาห์ 20)',
        'ใช้ Reporting Verbs ให้หลากหลายกว่า said/told (เช่น pointed out, clarified, suggested + V-ing, assured us, reminded us not to)',
        'คุม Thought Groups และการลดเสียง weak forms (been, was, were, that, not to) ให้ลื่นไหลเป็นธรรมชาติระดับ Solid B1',
      ],
    },
  ]
);
