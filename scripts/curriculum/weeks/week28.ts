import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 4: สื่อสารคล่องตัว เลือกโทนภาษา และฟังความเร็วเจ้าของภาษา';

export const WEEK28: ModuleSeed = createModule(
  {
    week: 28,
    phase: 4,
    phase_title: PHASE_TITLE,
    cefr_level: 'B2',
    title: 'Participle Clauses & Compact High-Level Sentences',
    summary:
      'ย่อประโยคซับซ้อนให้กระชับ สละสลวย และเป็นธรรมชาติแบบภาษาเขียนระดับ B2/C1 ด้วย Present, Past, Perfect Participles และหลีกเลี่ยงข้อผิดพลาด Dangling Modifiers',
    focus: 'Present & Past Participle Clauses, Having + V3, Dangling Participle Fixes',
  },
  [
    {
      day: 190,
      title: 'Present Participle Clauses (-ing) บอกเหตุผลและเวลาอย่างกระชับ',
      objective:
        'ลดรูปประโยคบอกเหตุผลหรือเวลาที่ประธานตัวเดียวกัน (*Because I noticed... → Noticing...*) ด้วย Present Participle (-ing) เพื่อให้ภาษาลื่นไหลเหมือนบทความมืออาชีพ',
      explanation:
        'ในภาษาเขียนและการสื่อสารระดับ B2 การต่อประโยคด้วย *Because...* หรือ *When...* ซ้ำๆ จะทำให้งานเขียนฟังดูเป็นท่อนๆ เหมือนเด็กนักเรียน เมื่อสองประโยคมี **"ประธานคนเดียวกัน"** เราสามารถตัดคำเชื่อมและประธานออก แล้วเปลี่ยนกริยาตัวแรกเป็น **Present Participle (`V-ing`)** ได้ทันที เช่น แทนที่จะพูดว่า *"Because she realized that traffic was heavy, she took the train."* เราย่อเป็น **`Realizing that traffic was heavy, she took the train.`** หรือบอกสองการกระทำที่เกิดขึ้นพร้อมกัน เช่น **`Walking into the café, I smelled freshly roasted coffee beans.`** ข้อควรระวัง: ประธานของส่วน `-ing` จะต้องเป็นประธานตัวเดียวกับประโยคหลักเสมอ!',
      sound: [
        'Stress in Fronted Participle Phrases',
        'realizing /ˈrɪə.laɪ.zɪŋ/ · walking /ˈwɔː.kɪŋ/ · noticing /ˈnəʊ.tɪ.sɪŋ/',
        'เมื่อขึ้นต้นประโยคด้วย Participle phrase ให้เน้นเสียงกริยา -ing ให้ชัดเจน และทอดเสียงเบาลงเล็กน้อยตรงเครื่องหมายจุลภาค (comma) ก่อนเริ่มประธานหลัก',
        'ฝึกออกเสียงประโยค 3 แบบโดยเว้นวรรคสั้นๆ ตรงลูกน้ำ: "No-ti-cing the delay, ↗ we rescheduled the call."',
      ],
      l1: [
        'ใช้ Because หรือ When ขึ้นต้นทุกประโยคโดยไม่เคยย่อรูป: "Because I wanted to save time, I..." ซ้ำๆ',
        'ภาษาไทยใช้คำว่า "พอเห็นว่า..." หรือ "เพราะว่า..." ตลอดเวลาโดยไม่มีโครงสร้างลดรูปกริยาช่วย',
        'สังเกตว่าเมื่อประธานเป็นคนเดียวกัน สามารถตัดคำเชื่อมทิ้งแล้วใส่ V-ing ขึ้นต้นเพื่อเพิ่มความเป็นมืออาชีพได้ทันที',
      ],
      vocab: [
        ['noticing', 'สังเกตเห็น (เมื่อสังเกตเห็น...)', '/ˈnəʊ.tɪ.sɪŋ/', 'noticing the sudden change', 'เมื่อสังเกตเห็นการเปลี่ยนแปลงกะทันหัน'],
        ['realizing', 'ตระหนักรู้ว่า...', '/ˈrɪə.laɪ.zɪŋ/', 'realizing the mistake early', 'เมื่อตระหนักถึงข้อผิดพลาดได้ตั้งแต่เนิ่นๆ'],
        ['expecting', 'คาดหมายว่า / หวังว่าจะ...', '/ɪkˈspek.tɪŋ/', 'expecting a quick reply', 'เมื่อคาดว่าจะได้รับคำตอบอย่างรวดเร็ว'],
        ['knowing', 'เมื่อรู้ว่า / ด้วยความที่รู้...', '/ˈnəʊ.ɪŋ/', 'knowing his busy schedule', 'ด้วยความที่รู้ตารางงานที่ยุ่งของเขา'],
        ['hoping', 'ด้วยความหวังว่าจะ...', '/ˈhəʊ.pɪŋ/', 'hoping to clear up doubts', 'ด้วยความหวังว่าจะคลายข้อสงสัย'],
        ['fearing', 'ด้วยความกังวล/กลัวว่าจะ...', '/ˈfɪə.rɪŋ/', 'fearing another long delay', 'ด้วยความกลัวว่าจะเกิดความล่าช้าอีกครั้ง'],
      ],
      examples: [
        ['Realizing that the flight was delayed, Alex opened his laptop to work.', 'เมื่อตระหนักว่าเที่ยวบินล่าช้า อเล็กซ์จึงเปิดแล็ปท็อปเพื่อเริ่มทำงาน'],
        ['Noticing the error in the document, she sent an updated draft immediately.', 'เมื่อสังเกตเห็นข้อผิดพลาดในเอกสาร เธอจึงส่งฉบับแก้ไขไปในทันที'],
        ['Knowing how important the launch was, the entire team stayed late.', 'ด้วยความที่รู้ว่าการเปิดตัวสำคัญเพียงใด ทั้งทีมจึงอยู่ทำงานจนดึก'],
        ['Hoping to resolve the confusion, the manager scheduled a quick sync.', 'ด้วยความหวังว่าจะช่วยคลายความสับสน ผู้จัดการจึงนัดประชุมสั้นๆ ขึ้นมา'],
      ],
      reading:
        'Arriving early at the Bangkok coworking hub, Maya found a quiet corner near the window. Looking out at the morning sky, she reviewed her speaking notes for the afternoon workshop. Realizing that several international clients preferred visual diagrams over long tables, she swapped three slides for clean infographics. Knowing the project background thoroughly gave her steady confidence. While preparing her presentation, she kept an eye on incoming Slack messages from the design squad. Sensing that the timeline was tight, she sent a proactive note outlining the top three priorities for the day. High-level writing and speaking rely on concise participle structures that keep narrative rhythm brisk and modern.',
      listenQ: 'Why did Maya swap three slides for clean infographics?',
      listenA: 'Because she realized that several international clients preferred visual diagrams over long tables.',
      dictation: 'Realizing the timeline was tight, she sent a proactive update.',
      listenNote:
        'จับจังหวะการหยุดสั้นๆ หลัง Realizing the timeline was tight, ก่อนขึ้น she sent',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'ย่อประโยคนี้ให้กระชับขึ้นด้วย Present Participle: "Because he realized that the database was slow, the engineer added an index."',
          answer:
            'Realizing that the database was slow, the engineer added an index.',
          explanation:
            'ตัด Because he ออกแล้วเปลี่ยน realized เป็น Realizing เพื่อความกระชับระดับ B2',
        },
        {
          kind: 'choice',
          prompt:
            'ประโยคใดใช้ Present Participle clause บอกเหตุผลได้ถูกต้องที่สุด?',
          answer:
            'Knowing the road was under repair, we took the expressway.',
          choices: [
            'Known the road was under repair, we took the expressway.',
            'Knowing the road was under repair, we took the expressway.',
            'Knew the road was under repair, we took the expressway.',
            'To know the road was under repair, we took the expressway.',
          ],
          explanation:
            'ใช้รูป active Present Participle (Knowing...) เพราะประธาน we เป็นผู้รู้เอง',
        },
        {
          kind: 'gap',
          prompt:
            'เติมกริยาในวงเล็บให้อยู่ในรูป Participle: _____ (hope) to fix the misunderstanding, Sarah called her partner.',
          answer: 'Hoping',
          explanation: 'Hoping to fix... = ด้วยความหวังว่าจะแก้ไข...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยใช้ Participle clause: "เมื่อสังเกตเห็นความผิดพลาด เธอจึงแก้ไขมันทันที"',
          answer:
            'Noticing the mistake, she corrected it immediately.',
          explanation:
            'Noticing the mistake, she corrected it immediately.',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์การตัดสินใจในที่ทำงานหรือการเรียน 4–5 ประโยค โดยใช้ Present Participle Clauses (เช่น Realizing..., Noticing..., Knowing...) อย่างน้อย 2 จุด',
      writingSample:
        'Realizing that our team had conflicting deadlines, I suggested a quick alignment meeting. Knowing how busy everyone was, I kept the agenda under fifteen minutes. Noticing that two designers were blocked by copy revisions, we reallocated the tasks on the spot.',
      writingNote:
        'ตรวจสอบให้แน่ใจว่าประธานของวลี Participle ด้านหน้า คือประธานตัวเดียวกันกับประโยคหลักด้านหลัง',
      speakingTopic:
        'เล่าการตัดสินใจแก้ปัญหาเฉพาะหน้าแบบกระชับ 4 / 3 / 2 นาที',
      speakingBullets: [
        'เริ่มประโยคด้วย Realizing that... หรือ Noticing that...',
        'รักษาน้ำเสียงให้มีจังหวะหยุดพักเล็กน้อยตรง comma',
      ],
    },
    {
      day: 191,
      title: 'Past Participle Clauses (V3) บอกเงื่อนไขและภูมิหลังในรูปถูกกระทำ',
      objective:
        'ใช้ Past Participle (V3) ขึ้นต้นประโยคเพื่ออธิบายภูมิหลังหรือเงื่อนไขในรูป Passive (*Built with care... / Given the situation...*) ได้อย่างถูกต้อง',
      explanation:
        'เมื่อประธานของประโยคเป็น **"ผู้ถูกกระทำ" (Passive)** หรือต้องการบอกภูมิหลังที่ถูกสร้าง/ถูกกำหนดมา เราใช้ **Past Participle (`V3`)** ขึ้นต้นประโยคแทนรูปเต็ม เช่น แทนที่จะพูดว่า *"Because the app was built with scalability in mind, it handles millions of users."* เราย่อเป็น **`Built with scalability in mind, the app handles millions of users.`** วลี V3 ยอดนิยมที่พบบ่อยในบทความระดับสากล ได้แก่: 1) **`Given + noun/fact`** (เมื่อพิจารณาจาก... / เมื่อคำนึงถึง...), 2) **`Faced with...`** (เมื่อต้องเผชิญกับ...), 3) **`Surrounded by...`** (เมื่อถูกห้อมล้อมด้วย...), 4) **`Supported by...`** (ด้วยการสนับสนุนจาก...) โครงสร้างนี้ทำให้ภาษาของคุณกระชับ ทรงพลัง และมีน้ำหนักทางวิชาการอย่างมาก!',
      sound: [
        'Clean Voicing of Past Participle Endings',
        'built /bɪlt/ · faced /feɪst/ · given /ˈɡɪv.ən/ · supported /səˈpɔː.tɪd/',
        'ระวังเสียงท้ายของ V3: built ลงท้ายด้วย /t/ ชัดเจน, faced ลงท้ายด้วย /t/ ไม่ใช่อ่าน "เฟส-เส็ด", given ออกเสียงสระเออะเบาๆ',
        'ฝึกพูดวลีขึ้นต้น: "Fa-ced with a tight deadline, ↗ the team stayed focused."',
      ],
      l1: [
        'เผลอใช้รูป V1 หรือ V-ing กับความหมาย passive เช่น พูดว่า "Building with care, the car is safe" แทนที่จะเป็น "Built with care..."',
        'ในภาษาไทยเราไม่ค่อยแยกรูปกริยากระทำกับถูกกระทำอย่างชัดเจน มักละคำว่า "ถูก..." ไว้ในใจ',
        'จำง่ายๆ: ถ้าประธานเป็นผู้กระทำใช้ V-ing แต่ถ้าประธานถูกกระทำหรือเป็นผลลัพธ์ใช้ V3',
      ],
      vocab: [
        ['given', 'เมื่อพิจารณาจาก... / ด้วยเหตุที่...', '/ˈɡɪv.ən/', 'given the current budget', 'เมื่อพิจารณาจากงบประมาณปัจจุบัน'],
        ['faced with', 'เมื่อต้องเผชิญหน้ากับ...', '/feɪst wɪð/', 'faced with heavy competition', 'เมื่อต้องเผชิญกับการแข่งขันสูง'],
        ['built', 'ถูกสร้างขึ้น...', '/bɪlt/', 'built for endurance', 'สร้างขึ้นเพื่อความทนทาน'],
        ['supported by', 'ได้รับการสนับสนุนจาก...', '/səˈpɔː.tɪd baɪ/', 'supported by strong data', 'ได้รับการสนับสนุนจากข้อมูลที่หนักแน่น'],
        ['tested', 'ได้รับการทดสอบแล้ว...', '/ˈtes.tɪd/', 'tested under pressure', 'ผ่านการทดสอบภายใต้สภาวะกดดัน'],
        ['inspired by', 'ได้รับแรงบันดาลใจจาก...', '/ɪnˈspaɪəd baɪ/', 'inspired by local art', 'ได้รับแรงบันดาลใจจากศิลปะท้องถิ่น'],
      ],
      examples: [
        ['Built with performance in mind, the new framework loads twice as fast.', 'เมื่อถูกสร้างขึ้นโดยคำนึงถึงประสิทธิภาพ เฟรมเวิร์กใหม่นี้จึงโหลดเร็วกว่าเดิมสองเท่า'],
        ['Given the limited timeline, we chose the simplest viable solution.', 'เมื่อพิจารณาจากกรอบเวลาที่จำกัด เราจึงเลือกทางออกที่ทำได้จริงและเรียบง่ายที่สุด'],
        ['Faced with rising material costs, the studio adapted its product line.', 'เมื่อต้องเผชิญกับต้นทุนวัสดุที่สูงขึ้น สตูดิโอจึงปรับสายผลิตภัณฑ์ของตน'],
        ['Supported by veteran mentors, the junior founders launched their pilot.', 'ด้วยการสนับสนุนจากที่ปรึกษามากประสบการณ์ ผู้ก่อตั้งรุ่นใหม่จึงเปิดตัวโครงการนำร่องได้สำเร็จ'],
      ],
      reading:
        'Given the growing complexity of cross-border software teams, communication habits can make or break a release. Built during the pandemic, our company internal dashboard was designed around transparent documentation rather than endless video calls. Faced with different time zones spanning Tokyo, Bangkok, and London, team leaders established written handoffs before signing off each evening. Supported by clear guidelines, engineers could pick up tasks without waiting overnight for verbal permission. Inspired by open-source workflows, every decision log remained searchable by new hires. Such compact passive participle clauses allow writers to summarize organizational context without dragging out sentence length.',
      listenQ: 'How did team leaders handle different time zones between Tokyo, Bangkok, and London?',
      listenA: 'They established written handoffs before signing off each evening.',
      dictation: 'Built with performance in mind, the system scales smoothly.',
      listenNote:
        'ออกเสียง Built with ให้เชื่อมเป็น /bɪlt wɪð/ และเน้นคำว่า performance',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ Past Participle clause แสดงความหมายถูกกระทำได้อย่างถูกต้อง?',
          answer:
            'Tested under extreme conditions, the battery lasted twenty hours.',
          choices: [
            'Testing under extreme conditions, the battery lasted twenty hours.',
            'Tested under extreme conditions, the battery lasted twenty hours.',
            'Test under extreme conditions, the battery lasted twenty hours.',
            'To test under extreme conditions, the battery lasted twenty hours.',
          ],
          explanation:
            'ใช้ Tested (V3) เพราะ battery เป็นสิ่งที่ถูกทดสอบ ไม่ได้เป็นผู้ทดสอบเอง',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำขึ้นต้น 2 คำให้สมบูรณ์: _____ _____ a sudden budget cut, the team reorganized priorities.',
          answer: 'Faced with',
          explanation: 'Faced with... = เมื่อต้องเผชิญกับ...',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคให้ถูกต้อง: "Giving the short timeframe, we hired two freelance designers."',
          answer:
            'Given the short timeframe, we hired two freelance designers.',
          explanation:
            'ใช้วลีคงรูป Given the... (เมื่อพิจารณาจาก...) ไม่ใช่ Giving',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยใช้ Past Participle: "ด้วยแรงบันดาลใจจากสถาปัตยกรรมไทย อาคารหลังนี้จึงใช้วัสดุไม้ธรรมชาติ"',
          answer:
            'Inspired by Thai architecture, the building uses natural wood materials.',
          explanation:
            'Inspired by Thai architecture, the building uses natural wood materials.',
        },
      ],
      writing:
        'เขียนบรรยายสินค้า บริการ หรือโปรเจกต์ของคุณ 4–5 ประโยค โดยใช้ Past Participle clauses (Built with..., Given..., Faced with..., Inspired by...) อย่างน้อย 2 โครงสร้าง',
      writingSample:
        'Built with security at its core, our mobile banking feature protects user data through biometric locks. Given the recent surge in online fraud, we introduced instant push notifications for all transfers. Supported by round-the-clock fraud monitoring, our customers can shop with peace of mind.',
      writingNote:
        'ระวังอย่าใช้ V-ing กับสิ่งของที่ถูกกระทำ และตรวจดู comma หลังจบวลี Participle เสมอ',
      speakingTopic:
        'นำเสนอแนวคิดผลิตภัณฑ์หรือบริการโดยใช้โครงสร้าง Past Participle 4 / 3 / 2 นาที',
      speakingBullets: [
        'ใช้วลี Built with... หรือ Inspired by... เพื่อเปิดตัวแนวคิด',
        'อธิบายอุปสรรคด้วย Faced with... แล้วบอกทางออกที่เลือก',
      ],
    },
    {
      day: 192,
      title: 'Perfect Participle (Having + V3) แสดงลำดับก่อนหลังอย่างชัดเจน',
      objective:
        'ใช้ Perfect Participle (`Having + V3`) เพื่อเน้นย้ำว่าเหตุการณ์แรกสิ้นสุดลงโดยสมบูรณ์แล้ว ก่อนที่เหตุการณ์ที่สองจะเริ่มต้นขึ้น',
      explanation:
        'บางครั้ง Present Participle (`V-ing`) อาจทำให้เข้าใจกำกวมได้ว่าสองเหตุการณ์เกิดขึ้นพร้อมกันหรือไม่ หากเราต้องการเน้นให้ชัดเจนว่า **"การกระทำแรกเสร็จสิ้นลงโดยสมบูรณ์แล้ว จึงตามมาด้วยการกระทำที่สอง"** ให้ใช้โครงสร้าง **Perfect Participle: `Having + V3`** เช่น: *"After he had finished the presentation, he felt relieved."* ย่อเป็น **`Having finished the presentation, he felt relieved.`** และถ้ารูปถูกกระทำ ให้ใช้ **`Having been + V3`** เช่น: **`Having been informed about the policy change, the staff adjusted their plans.`** โครงสร้างนี้ใช้บ่อยมากในสรุปรายงานเชิงวิเคราะห์และการเล่าเหตุการณ์ระดับสูงครับ!',
      sound: [
        'Weak Form of Having in Fast Delivery',
        'having /ˈhæv.ɪŋ/ · completed /kəmˈpliː.tɪd/ · reviewed /rɪˈvjuːd/',
        'คำว่า Having ในภาษาพูดเร็วจะออกเสียงกระชับ ไม่เน้นหนักเกินไป โดยน้ำหนักจะตกที่กริยา V3 ด้านหลัง เช่น Having reVIEWED...',
        'ฝึกออกเสียง: "Ha-ving spent months on research, ↗ they launched the tool."',
      ],
      l1: [
        'ใช้ After + Past Perfect ซ้ำซากตลอดทั้งบทความ หรือลืมว่า Having ต้องตามด้วย V3 เสมอ (เผลอเขียน Having finish ❌)',
        'ภาษาไทยพูดแค่ "พอทำเสร็จแล้วก็..." โดยไม่มีความแตกต่างทางไวยากรณ์ระหว่าง V-ing กับ Having + V3',
        'จำกฎเหล็ก: หลัง Having ต้องเป็นกริยาช่อง 3 (V3) เสมอ เช่น Having checked, Having discussed, Having learned',
      ],
      vocab: [
        ['having finished', 'เมื่อทำเสร็จสิ้นแล้ว...', '/ˈhæv.ɪŋ ˈfɪn.ɪʃt/', 'having finished the audit', 'เมื่อตรวจสอบบัญชีเสร็จสิ้นแล้ว'],
        ['having spent', 'หลังจากที่ได้ใช้เวลาไป...', '/ˈhæv.ɪŋ spent/', 'having spent weeks preparing', 'หลังจากใช้เวลาเตรียมตัวหลายสัปดาห์'],
        ['having reviewed', 'เมื่อได้ตรวจทานดูแล้ว...', '/ˈhæv.ɪŋ rɪˈvjuːd/', 'having reviewed all feedback', 'เมื่อได้ตรวจทานความคิดเห็นทั้งหมดแล้ว'],
        ['having been told', 'หลังจากที่ได้รับแจ้งว่า...', '/ˈhæv.ɪŋ biːn təʊld/', 'having been told about the delay', 'หลังจากได้รับแจ้งเรื่องความล่าช้า'],
        ['having worked', 'เมื่อได้เคยทำงานมาร่วมกัน...', '/ˈhæv.ɪŋ wɜːkt/', 'having worked together before', 'ด้วยความที่เคยทำงานร่วมกันมาก่อน'],
        ['having seen', 'เมื่อได้เห็นประจักษ์แล้ว...', '/ˈhæv.ɪŋ siːn/', 'having seen the positive results', 'เมื่อได้เห็นผลลัพธ์ที่เป็นบวกแล้ว'],
      ],
      examples: [
        ['Having reviewed the legal contract thoroughly, she signed with confidence.', 'เมื่อได้ตรวจทานสัญญาทางกฎหมายอย่างถี่ถ้วนแล้ว เธอจึงลงนามด้วยความมั่นใจ'],
        ['Having spent three months in Chiang Mai, David spoke conversational Thai.', 'หลังจากที่ได้ใช้ชีวิตอยู่เชียงใหม่สามเดือน เดวิดก็สื่อสารภาษาไทยได้คล่อง'],
        ['Having completed the onboarding checklist, new hires joined their squads.', 'เมื่อทำตามรายการปฐมนิเทศครบถ้วนแล้ว พนักงานใหม่จึงเริ่มร่วมงานกับทีม'],
        ['Having been informed of the reschedule, we adjusted our morning flight.', 'หลังจากที่ได้รับแจ้งเรื่องการเลื่อนกำหนดการ เราจึงปรับเปลี่ยนเที่ยวบินเช้า'],
      ],
      reading:
        'Having audited dozens of modern web applications over the past decade, our security advisory team observed recurring patterns. Having fixed the most obvious authentication vulnerabilities, companies often neglect silent background services. Having been trained primarily on frontend user experience, junior engineers rarely examine database connection limits until a marketing campaign triggers high traffic. Having realized this knowledge gap, senior engineering leads created practical checklists. Having tested the automated security pipeline across twenty staging servers, the department rolled out the new workflow to all branch offices. Mastering the Perfect Participle allows technical leaders to articulate sequence and causality with effortless authority.',
      listenQ: 'What do companies often neglect after fixing obvious authentication vulnerabilities?',
      listenA: 'They often neglect silent background services.',
      dictation: 'Having reviewed the report, the director approved the proposal.',
      listenNote:
        'จับเสียงเชื่อม /d/ ใน reviewed กับ /ðə/ ใน the report',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคนี้ให้ถูกต้องตามหลัก Perfect Participle: "Having finish the training module, she took the certification quiz."',
          answer:
            'Having finished the training module, she took the certification quiz.',
          explanation:
            'หลัง Having ต้องใช้กริยาช่อง 3 (finished) เสมอ',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ Perfect Participle แสดงเหตุการณ์ที่เกิดขึ้นและจบลงก่อนได้อย่างถูกต้อง?',
          answer:
            'Having worked with international clients for years, Ken understood cultural differences well.',
          choices: [
            'Having work with international clients for years, Ken understood cultural differences well.',
            'Having worked with international clients for years, Ken understood cultural differences well.',
            'Had worked with international clients for years, Ken understood cultural differences well.',
            'Have working with international clients for years, Ken understood cultural differences well.',
          ],
          explanation:
            'ใช้ Having worked (Having + V3) บ่งบอกประสบการณ์ที่สั่งสมมาก่อน',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำในช่องว่างให้เป็นรูป Perfect Participle ในเชิง Passive: _____ _____ notified about the venue change, the guests went to the main hall.',
          answer: 'Having been',
          explanation: 'Having been notified... = หลังจากที่ได้รับการแจ้งเตือน...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "หลังจากที่ได้อ่านรายงานฉบับสมบูรณ์แล้ว ผู้จัดการจึงตัดสินใจอนุมัติโครงการ"',
          answer:
            'Having read the full report, the manager decided to approve the project.',
          explanation:
            'Having read the full report, the manager decided to approve the project.',
        },
      ],
      writing:
        'เขียนสรุปประสบการณ์หรือขั้นตอนการทำงานในอดีต 4–5 ประโยค โดยใช้ Having + V3 (เช่น Having completed..., Having spent..., Having realized...) อย่างน้อย 2 ประโยค',
      writingSample:
        'Having conducted user interviews with fifty local merchants, we discovered a major pain point in payment tracking. Having analyzed the interview transcripts, our team redesigned the checkout screen. Having launched the updated flow last month, we noticed a forty percent drop in support tickets.',
      writingNote:
        'เช็กคำกริยาหลัง Having ว่าผันเป็นช่อง 3 อย่างถูกต้องทั้งหมด',
      speakingTopic:
        'เล่าความสำเร็จหรือผลงานที่ทำเสร็จสิ้นแล้วโดยใช้ Having + V3 4 / 3 / 2 นาที',
      speakingBullets: [
        'ใช้ Having spent time on... เพื่อเล่าการเตรียมตัว',
        'ใช้ Having seen the results... เพื่อสรุปบทเรียน',
      ],
    },
    {
      day: 193,
      title: 'Preposition + Participle Clauses (Upon, Before, Instead of, While)',
      objective:
        'ใช้คำบุพบทควบคู่กับ Participle (`Upon arriving`, `Before deciding`, `Instead of complaining`, `While reviewing`) เพื่อระบุเงื่อนไขและบริบทเวลาอย่างแม่นยำ',
      explanation:
        'อีกหนึ่งเครื่องมือที่ยกระดับภาษาให้ดูเป็นผู้เชี่ยวชาญคือการนำ **Preposition มานำหน้า Present Participle (`Preposition + V-ing`)** ซึ่งช่วยให้ความหมายเฉพาะเจาะจงยิ่งขึ้น: 1) **`Upon + V-ing`** (ทันทีที่... / เมื่อ... เช่น *Upon arriving at the office, he checked his mail.*), 2) **`Before / After + V-ing`** (ก่อน/หลังทำ... เช่น *Before submitting the form, double-check your name.*), 3) **`Instead of + V-ing`** (แทนที่จะทำ... เช่น *Instead of arguing, they focused on solutions.*), 4) **`While / When + V-ing`** (ในระหว่างที่กำลังทำ... เช่น *While waiting for the build, I wrote tests.*), 5) **`By + V-ing`** (โดยการทำ... เพื่อบอกวิธีการ เช่น *By automating tests, we saved hours.*) โครงสร้างนี้ใช้ทั้งในการพูดเชิงธุรกิจและการเขียนสรุปงานอย่างกว้างขวาง!',
      sound: [
        'Smooth Linking across Prepositional Participles',
        'upon /əˈpɒn/ · instead of /ɪnˈsted əv/ · submitting /səbˈmɪt.ɪŋ/',
        'คำว่า "Instead of" ต้องเชื่อมเสียงเป็น "อิน-สเต็ด-เดิฟ" (/ɪnˈsted əv/) และ "Upon arriving" เชื่อมเป็น "อะ-พอน-เนอะ-ไร-วิง"',
        'ฝึกพูดให้ไหลลื่น: "In-stead of wai-ting, ↗ we reached out directly."',
      ],
      l1: [
        'ใช้ Instead of ตามด้วยประโยคเต็ม หรือใช้ After/Before ตามด้วยรูปกริยาไม่ผัน เช่น After finish work ❌',
        'ในภาษาไทยเรามีคำว่า "แทนที่จะ..." แล้วตามด้วยประโยคยาวได้ แต่ภาษาอังกฤษหลัง Preposition ทุกตัวต้องเป็น Gerund/Participle (V-ing) หรือคำนามเท่านั้น',
        'จำกฎง่ายๆ: Preposition (upon, before, after, instead of, by) + V-ing เสมอ',
      ],
      vocab: [
        ['upon arriving', 'ทันทีที่มาถึง...', '/əˈpɒn əˈraɪ.vɪŋ/', 'upon arriving at the venue', 'ทันทีที่มาถึงสถานที่จัดงาน'],
        ['instead of', 'แทนที่จะ...', '/ɪnˈsted əv/', 'instead of waiting around', 'แทนที่จะนั่งรอเฉยๆ'],
        ['by automating', 'โดยการทำให้เป็นระบบอัตโนมัติ', '/baɪ ˈɔː.tə.meɪ.tɪŋ/', 'by automating manual steps', 'โดยการเปลี่ยนขั้นตอนมือให้เป็นอัตโนมัติ'],
        ['while reviewing', 'ในระหว่างที่ตรวจทาน...', '/waɪl rɪˈvjuː.ɪŋ/', 'while reviewing the proposal', 'ในระหว่างที่ตรวจทานข้อเสนอ'],
        ['before committing', 'ก่อนที่จะตัดสินใจผูกมัด/ยืนยัน', '/bɪˈfɔː kəˈmɪt.ɪŋ/', 'before committing resources', 'ก่อนที่จะจัดสรรทรัพยากรลงไป'],
        ['without hesitating', 'โดยไม่ลังเลเลย', '/wɪˈðaʊt ˈhez.ɪ.teɪ.tɪŋ/', 'answered without hesitating', 'ตอบคำถามโดยไม่ลังเล'],
      ],
      examples: [
        ['Upon entering the conference room, she greeted all participants warmly.', 'ทันทีที่เดินเข้ามาในห้องประชุม เธอได้กล่าวทักทายผู้ร่วมงานทุกคนอย่างอบอุ่น'],
        ['Instead of blaming the vendor, our engineers fixed the broken endpoint.', 'แทนที่จะไปโทษผู้ให้บริการ วิศวกรของเราได้ลงมือซ่อมจุดเชื่อมต่อที่พังเอง'],
        ['By establishing clear naming conventions, the team reduced filing mistakes.', 'โดยการวางกฎการตั้งชื่อไฟล์ให้ชัดเจน ทีมจึงลดความผิดพลาดในการจัดเก็บเอกสารลงได้'],
        ['Before launching the feature publicly, we ran a closed beta with fifty users.', 'ก่อนที่จะเปิดตัวฟีเจอร์นี้สู่สาธารณะ เราได้เปิดทดสอบวงปิดกับผู้ใช้ 50 คน'],
      ],
      reading:
        'Modern product management requires discipline when balancing speed against long-term stability. Upon receiving customer feature requests, smart product teams avoid promising delivery dates on the spot. Instead of reacting emotionally to negative app store reviews, lead designers look for systematic patterns in user complaints. By categorizing feedback into usability bugs, missing tools, and performance snags, they create actionable roadmaps. While evaluating weekly metrics, leadership checks whether retention improves alongside new signups. Before committing engineering resources to large redesigns, founders validate prototypes through clickable Figma tests. When paired with active verbs, prepositional participle phrases give technical documentation professional clarity and conciseness.',
      listenQ: 'What do lead designers do instead of reacting emotionally to negative reviews?',
      listenA: 'They look for systematic patterns in user complaints.',
      dictation: 'Instead of blaming others, the team focused on solutions.',
      listenNote:
        'สังเกตการเชื่อมเสียง in-stead of (/ɪnˈsted əv/) และการลงเสียงหนักที่ focused',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ Preposition + Participle ได้ถูกต้องตามหลักไวยากรณ์?',
          answer:
            'By simplifying the navigation menu, we decreased the bounce rate.',
          choices: [
            'By simplify the navigation menu, we decreased the bounce rate.',
            'By simplifying the navigation menu, we decreased the bounce rate.',
            'By simplified the navigation menu, we decreased the bounce rate.',
            'By to simplify the navigation menu, we decreased the bounce rate.',
          ],
          explanation:
            'หลัง Preposition "By" ต้องใช้กริยา V-ing (simplifying)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมสำนวนบอกเวลา: _____ _____ (ทันทีที่ได้รับ) the updated guidelines, the staff began rewriting the manuals.',
          answer: 'Upon receiving',
          explanation: 'Upon receiving = ทันทีที่ได้รับ...',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขข้อผิดพลาดในประโยคนี้: "Before make a final decision, consult with your senior lead."',
          answer:
            'Before making a final decision, consult with your senior lead.',
          explanation:
            'เปลี่ยน make เป็น making หลัง preposition "Before"',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "แทนที่จะบ่นเรื่องอากาศ พวกเราตัดสินใจออกไปเดินเล่นในสวน"',
          answer:
            'Instead of complaining about the weather, we decided to take a walk in the park.',
          explanation:
            'Instead of complaining about the weather, we decided to take a walk in the park.',
        },
      ],
      writing:
        'เขียนบรรยายวิธีการทำงานอย่างมีประสิทธิภาพ 4–5 ประโยค โดยใช้ Preposition + Participle (เช่น Upon..., Instead of..., By..., Before...) อย่างน้อย 3 รูปแบบ',
      writingSample:
        'By automating our daily data backups, we eliminated hours of manual oversight. Instead of relying on memory, our developers document all architecture decisions in a shared repository. Before pushing code to production, every contributor must pass automated linting checks.',
      writingNote:
        'เช็กว่าหลังคำบุพบททุกตัวมีคำกริยารูป -ing กำกับอยู่เสมอ',
      speakingTopic:
        'อธิบายแนวทางการแก้ปัญหาในชีวิตจริงด้วยเทคนิค By doing... และ Instead of doing... 4 / 3 / 2 นาที',
      speakingBullets: [
        'ใช้วลี Instead of... เพื่อบอกสิ่งที่ไม่ควรทำ',
        'ใช้วลี By... เพื่อบอกทางออกที่เป็นรูปธรรม',
      ],
    },
    {
      day: 194,
      title: 'หลุมพราง Dangling Participle: ประธานไม่ตรงกันที่คนไทยผิดบ่อยที่สุด',
      objective:
        'ตรวจจับและแก้ไขข้อผิดพลาด Dangling Modifiers / Dangling Participles ที่ทำให้ความหมายเพี้ยนหรือชวนหัวเราะ',
      explanation:
        'ข้อผิดพลาดที่ร้ายแรงและพบบ่อยที่สุดในการเขียนระดับสูงคือ **"Dangling Participle" (ประธานลอยเคว้ง)**! กฎทองของ Participle Clause คือ: **ประธานของประโยคหลักจะต้องเป็นผู้กระทำกริยาใน Participle ด้านหน้าเสมอ!** ลองดูตัวอย่างนี้: ❌ *"Walking down Sukhumvit Road, the trees looked beautiful."* (ประธานหลักคือ the trees กลายเป็นต้นไม้กำลังเดินลงถนนสุขุมวิท!) วิธีแก้คือเปลี่ยนประธานหลักให้เป็นคนที่เดินจริง: ✅ **`Walking down Sukhumvit Road, I admired the beautiful trees.`** หรือ ❌ *"Having finished the test, the papers were collected."* (กระดาษไม่ได้ทำข้อสอบเสร็จเอง!) ต้องแก้เป็น: ✅ **`Having finished the test, the students handed in their papers.`** เมื่อคุณตรวจจับจุดนี้ได้ งานเขียนภาษาอังกฤษของคุณจะแม่นยำเทียบเท่าเจ้าของภาษาทันที!',
      sound: [
        'Pitch Reset After the Comma Boundary',
        'admired /ədˈmaɪəd/ · collected /kəˈlek.tɪd/ · dangling /ˈdæŋ.ɡlɪŋ/',
        'เมื่อพูดประโยค Participle ให้ทอดเสียงขึ้นเล็กน้อยตรงท้ายวลี แล้วปรับระดับเสียงใหม่ (pitch reset) ที่ประธานตัวจริงในประโยคหลัก',
        'ฝึกพูดเปรียบเทียบ: "Wal-king home, ↗ I saw a shooting star."',
      ],
      l1: [
        'เขียนประโยคที่ส่วนหน้ากับส่วนหลังมีประธานคนละตัว เช่น "Opening the email, the virus attacked the laptop" (อีเมลไม่ได้เปิดตัวมันเอง แต่คนเป็นคนเปิด)',
        'ภาษาไทยเป็นภาษาที่ละประธานได้ตลอดเวลา ("พอเปิดเมลดู ไวรัสก็เข้าเครื่องเลย") คนฟังเข้าใจบริบทได้ แต่ภาษาอังกฤษถือเป็นความผิดพลาดทางไวยากรณ์ขั้นรุนแรง',
        'ท่องไว้เสมอ: ใครเป็นคนทำ V-ing ด้านหน้า คนนั้นต้องเป็นประธานตัวแรกหลังเครื่องหมาย Comma!',
      ],
      vocab: [
        ['dangling', 'ลอยเคว้ง / ไม่ตรงกับประธาน', '/ˈdæŋ.ɡlɪŋ/', 'dangling participle error', 'ข้อผิดพลาดประธานไม่ตรงกับกริยาลดรูป'],
        ['modifier', 'คำหรือวลีขยายความ', '/ˈmɒd.ɪ.faɪ.ər/', 'misplaced modifier', 'ส่วนขยายวางผิดตำแหน่ง'],
        ['clarity', 'ความชัดเจนแจ่มแจ้ง', '/ˈklær.ə.ti/', 'ensure sentence clarity', 'รับประกันความชัดเจนของประโยค'],
        ['confusing', 'น่าสับสน / ชวนเข้าใจผิด', '/kənˈfjuː.zɪŋ/', 'avoid confusing phrasing', 'หลีกเลี่ยงการใช้ถ้อยคำที่ชวนสับสน'],
        ['unintentional', 'ไม่ได้เจตนา / โดยไม่ตั้งใจ', '/ˌʌn.ɪnˈten.ʃən.əl/', 'unintentional humor', 'ความตลกขบขันที่ไม่ได้เจตนา'],
        ['subject', 'ประธานของประโยค', '/ˈsʌb.dʒekt/', 'match the implied subject', 'จับคู่ประธานแฝงให้ตรงกัน'],
      ],
      examples: [
        ['Walking down the street, I noticed a charming antique bookstore.', 'ขณะที่เดินไปตามถนน ฉันได้สังเกตเห็นร้านหนังสือเก่าที่มีเสน่ห์แห่งหนึ่ง'],
        ['Having reviewed the numbers, the analyst drafted an executive summary.', 'เมื่อได้ตรวจทานตัวเลขแล้ว นักวิเคราะห์จึงได้ร่างบทสรุปสำหรับผู้บริหาร'],
        ['Opening the package, she found a handwritten thank-you card inside.', 'เมื่อเปิดพัสดุดู เธอพบการ์ดขอบคุณเขียนด้วยลายมืออยู่ด้านใน'],
        ['Waiting for the bus, the commuters sheltered under the awning.', 'ขณะที่รอรถเมล์ ผู้โดยสารได้ยืนหลบฝนอยู่ใต้กันสาด'],
      ],
      reading:
        'Professional editors frequently warn writers about the subtle menace of dangling participles. Consider the famous blameworthy sentence: "Walking into the kitchen, the smoke alarm sounded." Read strictly, this absurd construction implies the plastic alarm strolled through the door on two legs! Because the English mind instinctively links the initial participle phrase to the immediate subject following the comma, any mismatch causes confusion or unintentional comedy. To repair a dangling participle, the writer must either supply the true active subject right after the comma or convert the participle phrase into a full clause with its own conjunction and verb. Polishing this single habit transforms ambiguous drafts into crystal-clear prose.',
      listenQ: 'How can a writer repair a dangling participle?',
      listenA: 'By supplying the true active subject right after the comma or converting the phrase into a full clause.',
      dictation: 'Walking into the kitchen, I heard the kettle boiling.',
      listenNote:
        'ระวังอย่าละประธาน I ให้แน่ใจว่าประธานคือ I ไม่ใช่ kettle',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยค Dangling Participle นี้ให้ถูกต้อง: "Walking in the park, the flowers smelled wonderful to John."',
          answer:
            'Walking in the park, John smelled the wonderful flowers.',
          explanation:
            'ประธานตัวจริงที่เดินในสวนคือ John ไม่ใช่ flowers จึงต้องนำ John มาไว้หลังลูกน้ำ',
        },
        {
          kind: 'choice',
          prompt:
            'ประโยคใดต่อไปนี้ถูกต้องตามหลักไวยากรณ์และไม่มีข้อผิดพลาด Dangling Participle?',
          answer:
            'Having completed the assignment, Linda turned off her computer.',
          choices: [
            'Having completed the assignment, the computer was turned off by Linda.',
            'Having completed the assignment, Linda turned off her computer.',
            'Having completed the assignment, the desk was cleaned up.',
            'Having completed the assignment, her room felt peaceful.',
          ],
          explanation:
            'Linda เป็นผู้ทำการบ้านเสร็จ Linda จึงต้องเป็นประธานตัวแรกหลังเครื่องหมาย comma',
        },
        {
          kind: 'gap',
          prompt:
            'เติมประธานที่ถูกต้องให้ประโยคสมบูรณ์: Arriving at the airport gate, _____ (we / the airplane) showed our boarding passes to the agent.',
          answer: 'we',
          explanation: 'คนที่เป็นผู้มาถึงประตูเครื่องบินและแสดงตั๋วคือ we',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยระวังไม่ให้ประธานลอย: "เมื่อเปิดประตูเข้าไป ฉันก็เห็นน้องหมานอนหลับอยู่"',
          answer:
            'Opening the door, I saw my dog sleeping.',
          explanation:
            'Opening the door, I saw my dog sleeping. (ประธานคือ I ไม่ใช่ door)',
        },
      ],
      writing:
        'เขียนประโยค Participle 4 คู่: โดยเขียนคู่ที่ผิด (Dangling) 1 ประโยค แล้วเขียนประโยคที่แก้ให้ถูกต้อง (Corrected) กำกับไว้ข้างใต้',
      writingSample:
        'Incorrect: Looking out the window, the rain started pouring.\nCorrect: Looking out the window, I saw the rain start pouring.\n\nIncorrect: Having prepared dinner, the table looked delicious.\nCorrect: Having prepared dinner, we invited our guests to the table.',
      writingNote:
        'เน้นย้ำประธานหลังเครื่องหมาย comma ว่าต้องเป็นผู้กระทำกริยาหน้าประโยคเสมอ',
      speakingTopic:
        'อธิบายหลักการแก้ Dangling Modifiers ให้เพื่อนฟังเป็นภาษาอังกฤษ 4 / 3 / 2 นาที',
      speakingBullets: [
        'ยกตัวอย่างประโยคตลกๆ เช่น Walking into the room, the chair broke.',
        'อธิบายวิธีแก้โดยดึงประธานตัวจริงมาวางไว้หลัง comma',
      ],
    },
    {
      day: 195,
      title: 'การเขียนพาดหัวและบทคัดย่อระดับผู้บริหารด้วย Participles',
      objective:
        'ประยุกต์ใช้ Participle Clauses ในการเขียนพาดหัวข่าว สรุปรายงานย่อ (Executive Summary) และ Bullet Points ทางธุรกิจอย่างเฉียบคม',
      explanation:
        'ในการทำงานจริง ผู้บริหารและลูกค้าไม่มีเวลาอ่านย่อหน้ายาวๆ ที่เต็มไปด้วยคำเชื่อมยืดยาว การใช้ **Participle Clauses** ช่วยให้คุณเขียน **Executive Summary** และพาดหัวที่กระชับ ตรงประเด็น และทรงพลัง ตัวอย่างเช่น: แทนที่จะเขียนว่า *"We have analyzed the fourth quarter data and we noticed that revenue grew by 15%, so we recommend expanding the sales team."* คุณสามารถเขียนอย่างคมชัดว่า: **`Having analyzed Q4 performance, leadership recommends expanding the regional sales team to capture rising demand.`** หรือในการเขียน bullet point ความสำเร็จ: **`Built with microservices, cutting server latency by 35%.`** ทักษะนี้จะเปลี่ยนข้อความธรรมดาให้กลายเป็นภาษาของผู้นำทางธุรกิจระดับมืออาชีพ!',
      sound: [
        'Executive Cadence and Punchy Rhythm',
        'quarterly /ˈkwɔː.təl.i/ · revenue /ˈrev.ən.juː/ · leadership /ˈliː.də.ʃɪp/',
        'น้ำเสียงในบทสรุปผู้บริหารต้องกระชับ มั่นคง ไม่ลากเสียงเอื่อย และลงเสียงหนักที่กริยาสำคัญและตัวเลข',
        'ฝึกพูดพาดหัวธุรกิจ: "Ha-ving exceeded Q3 targets, ↗ the board approved bonuses."',
      ],
      l1: [
        'เขียนรายงานด้วยการเรียงประโยคสั้นๆ ห้วนๆ ต่อกัน เช่น "We looked at data. It was good. We will hire people." หรือใช้คำเชื่อม Because/So เต็มไปหมด',
        'ในภาษาไทยเรามักเรียงเป็นข้อความบรรยายร้อยแก้วยาวๆ แต่ในสากล เอกสารผู้บริหารต้องการความกระชับ (Conciseness) และความชัดเจน (Clarity) เป็นอันดับหนึ่ง',
        'ฝึกย่อรูปเหตุผลหรือลำดับเวลาด้วย Participle clause เพื่อให้ส่วนสำคัญ (Action/Decision) เด่นที่สุดในประโยค',
      ],
      vocab: [
        ['executive summary', 'บทสรุปสำหรับผู้บริหาร', '/ɪɡˈzek.jə.tɪv ˈsʌm.ər.i/', 'prepare an executive summary', 'เตรียมบทสรุปสำหรับผู้บริหาร'],
        ['actionable', 'นำไปปฏิบัติได้จริง', '/ˈæk.ʃən.ə.bəl/', 'deliver actionable insights', 'นำเสนอข้อมูลเชิงลึกที่นำไปใช้ได้จริง'],
        ['conciseness', 'ความกระชับรัดกุม', '/kənˈsaɪs.nəs/', 'value clarity and conciseness', 'ให้ความสำคัญกับความชัดเจนและความกระชับ'],
        ['recommending', 'แนะนำว่า...', '/ˌrek.əˈmen.dɪŋ/', 'recommending strategic expansion', 'แนะนำให้ขยายธุรกิจเชิงยุทธศาสตร์'],
        ['outperforming', 'ทำผลงานได้เหนือกว่าเป้า', '/ˌaʊt.pəˈfɔː.mɪŋ/', 'outperforming original projections', 'ทำผลงานได้เกินกว่าที่คาดการณ์ไว้'],
        ['streamlining', 'ปรับกระบวนการให้กระชับคล่องตัว', '/ˈstriːm.laɪ.nɪŋ/', 'streamlining cross-team handoffs', 'ปรับการส่งต่องานระหว่างทีมให้คล่องตัวขึ้น'],
      ],
      examples: [
        ['Having analyzed Q4 metrics, leadership approved a twenty percent budget increase.', 'เมื่อได้วิเคราะห์ตัวเลขไตรมาส 4 แล้ว คณะผู้บริหารจึงอนุมัติการเพิ่มงบประมาณ 20%'],
        ['Built on scalable cloud architecture, the portal processed record traffic seamlessly.', 'ด้วยการสร้างบนระบบคลาวด์ที่ขยายตัวได้ พอร์ทัลจึงรองรับปริมาณการใช้งานสูงสุดได้อย่างราบรื่น'],
        ['Facing tighter regulations, the compliance team updated customer onboarding rules.', 'เมื่อต้องเผชิญกับกฎระเบียบที่เข้มงวดขึ้น ทีมกำกับดูแลจึงได้ปรับปรุงระเบียบการรับลูกค้าใหม่'],
        ['Streamlining internal workflows, the department saved forty hours weekly.', 'การปรับกระบวนการทำงานภายในให้คล่องตัวช่วยให้แผนกประหยัดเวลาได้ 40 ชั่วโมงต่อสัปดาห์'],
      ],
      reading:
        'In corporate communications, executive readers skim documents within seconds, hunting for core findings and decisive next steps. Dense paragraphs laden with passive fluff waste valuable leadership attention. High-impact summaries utilize fronted participle clauses to package background context neatly before presenting the decisive verdict. For instance, rather than dedicating three separate sentences to market background, an analyst writes: "Having surveyed eight hundred enterprise buyers, product marketing identified strong demand for offline data synchronization." This style signals analytical rigor and editorial respect for the reader time. Modern business writing values brevity paired with undeniable grammatical precision.',
      listenQ: 'Why do corporate analysts use fronted participle clauses in executive summaries?',
      listenA: 'To package background context neatly before presenting decisive next steps and respect reader time.',
      dictation: 'Having surveyed enterprise buyers, the team prioritized offline tools.',
      listenNote:
        'ออกเสียง enterprise /ˈen.tə.praɪz/ ให้ชัดเจนและเชื่อมต่อกับ buyers',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'ปรับประโยคยาวนี้ให้เป็นประโยคสรุปผู้บริหารที่กระชับโดยใช้ Having + V3: "Because our team had completed the pilot phase, we presented our findings to the board."',
          answer:
            'Having completed the pilot phase, our team presented our findings to the board.',
          explanation:
            'ใช้ Having completed the pilot phase เพื่อรวมเหตุการณ์ก่อนหน้าอย่างคมชัด',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดเหมาะสำหรับเป็น Bullet Point สรุปความสำเร็จใน Resume หรือรายงานมากที่สุด?',
          answer:
            'Redesigned the checkout flow, cutting cart abandonment by 18%.',
          choices: [
            'Redesigned the checkout flow, cutting cart abandonment by 18%.',
            'I redesigned the flow because it cut cart abandonment by 18%.',
            'Because we redesign the flow, cart abandonment cut 18%.',
            'Having redesign the flow, it cut cart abandonment by 18%.',
          ],
          explanation:
            'โครงสร้างกริยาหลักตามด้วย Participle clause บอกผลลัพธ์ (cutting...) เป็นมาตรฐานสูงสุดของเรซูเม่สากล',
        },
        {
          kind: 'gap',
          prompt:
            'เติมกริยาในช่องว่าง: _____ (face) with rising cloud costs, the infrastructure lead migrated workloads to dedicated servers.',
          answer: 'Faced',
          explanation: 'Faced with... = เมื่อต้องเผชิญกับ...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษระดับมืออาชีพ: "เมื่อได้ผ่านการทดสอบอย่างเข้มงวด ระบบใหม่นี้จึงพร้อมสำหรับการเปิดตัวทั่วประเทศ"',
          answer:
            'Having passed rigorous testing, the new system is ready for nationwide rollout.',
          explanation:
            'Having passed rigorous testing, the new system is ready for nationwide rollout.',
        },
      ],
      writing:
        'เขียน Executive Summary 1 ย่อหน้าสั้น (80–100 คำ) สรุปความคืบหน้าของโครงการหรือเป้าหมายส่วนตัว โดยใช้โครงสร้าง Participle อย่างน้อย 3 จุด (เช่น Having analyzed..., Built with..., Streamlining...)',
      writingSample:
        'Having reviewed customer feedback across thirty enterprise accounts, the product division identified an urgent need for automated data exports. Built with existing API infrastructure, the newly proposed export tool requires minimal engineering overhead. Streamlining weekly client reporting, this enhancement is projected to save account managers five hours each sprint.',
      writingNote:
        'เน้นย้ำความกระชับและความชัดเจนของข้อมูลเชิงตัวเลขและข้อสรุป',
      speakingTopic:
        'พรีเซนต์สรุปสถานะโครงการแบบ Executive Briefing 4 / 3 / 2 นาที',
      speakingBullets: [
        'เปิดด้วย Having reviewed our recent performance...',
        'ชี้แจงทางออกด้วย Built with... หรือ Facing challenges...',
        'ปิดท้ายด้วยผลลัพธ์ที่จับต้องได้',
      ],
    },
    {
      day: 196,
      type: 'review',
      title: 'ทบทวนและฝึกความแม่นยำ Participle Clauses ในทุกมิติ (Week 28 Review)',
      objective:
        'ประมวลความรู้ Present, Past, Perfect Participles และ Prepositional Participles พร้อมวิเคราะห์แก้จุดผิด Dangling Modifiers ให้แม่นยำ 100%',
      explanation:
        'ยินดีด้วยที่คุณจบสัปดาห์ที่ 28 ซึ่งเป็นก้าวสำคัญสู่การเขียนและสื่อสารภาษาอังกฤษขั้นสูง! ในวันนี้เราจะทบทวนแบบผสมผสาน (Interleaved Practice) เพื่อให้สมองของคุณแยกแยะได้อย่างอัตโนมัติ: 1) **`Present Participle (V-ing)`** สำหรับการกระทำที่เกิดขึ้นพร้อมกันหรือเป็นเหตุผลในรูป Active, 2) **`Past Participle (V3)`** สำหรับภูมิหลังหรือเงื่อนไขในรูป Passive, 3) **`Perfect Participle (Having + V3)`** สำหรับเหตุการณ์ที่เสร็จสมบูรณ์ก่อนอีกเหตุการณ์หนึ่ง, 4) **`Preposition + V-ing`** สำหรับบริบทเฉพาะทาง (Upon, Instead of, By, Before), และ 5) **`Dangling Modifier Check`** ตรวจสอบว่าประธานหลังลูกน้ำเป็นผู้กระทำกริยาหน้าประโยคจริงเสมอ การฝึกฝนวันนี้จะช่วยฝังทักษะเหล่านี้ลงสู่สัญชาตญาณของคุณครับ!',
      sound: [
        'Reviewing Rhythm and Breath Marks in Complex Sentences',
        'participial /ˌpɑː.tɪˈsɪp.i.əl/ · modifier /ˈmɒd.ɪ.faɪ.ər/ · sequence /ˈsiː.kwəns/',
        'ในประโยคที่ซับซ้อน ลมหายใจและจังหวะหยุดพักตรง comma มีความสำคัญยิ่งต่อความน่าเชื่อถือของผู้พูด',
        'ฝึกออกเสียงประโยคทบทวน 3 รูปแบบด้วยความเร็วธรรมชาติและหยุดพักให้ถูกจังหวะ',
      ],
      l1: [
        'เผลอกลับไปใช้ภาษาพูดง่ายๆ ที่มีแต่คำเชื่อมพื้นฐาน (Because/So/And) แล้วลืมนำโครงสร้าง Participles มาผสมผสาน',
        'การพัฒนาภาษาต้องการการฝึกนำเครื่องมือใหม่มาใช้ในชีวิตจริงซ้ำๆ จนไม่ต้องหยุดนึกสูตร',
        'เมื่อใดที่ต้องเขียนอีเมลสำคัญหรือร่างสรุป ให้ท้าทายตัวเองด้วยการใส่ Participle clause อย่างน้อย 1 ประโยคเสมอ',
      ],
      vocab: [
        ['participial clause', 'อนุประโยคกริยาลดรูป', '/ˌpɑː.tɪˈsɪp.i.əl klɔːz/', 'master participial clauses', 'เชี่ยวชาญอนุประโยคกริยาลดรูป'],
        ['sequence', 'ลำดับเหตุการณ์', '/ˈsiː.kwəns/', 'clarify time sequence', 'ทำลำดับเวลาให้ชัดเจน'],
        ['active voice', 'รูปประธานเป็นผู้กระทำ', '/ˈæk.tɪv vɔɪs/', 'prefer active voice', 'เลือกใช้รูปประธานกระทำ'],
        ['passive voice', 'รูปประธานถูกกระทำ', '/ˈpæs.ɪv vɔɪs/', 'recognize passive participle', 'แยกแยะกริยา passive participle'],
        ['concise phrasing', 'การใช้ถ้อยคำที่กระชับ', '/kənˈsaɪs ˈfreɪ.zɪŋ/', 'adopt concise phrasing', 'ปรับใช้สำนวนที่กระชับ'],
        ['polished prose', 'สำนวนการเขียนที่สละสลวย', '/ˈpɒl.ɪʃt prəʊz/', 'craft polished prose', 'สร้างสรรค์งานเขียนที่สละสลวย'],
      ],
      examples: [
        ['Having completed the weekly sprint, the engineers deployed the build.', 'เมื่อจบการทำงานประจำสัปดาห์แล้ว วิศวกรจึงได้ทำการติดตั้งโปรแกรม'],
        ['Built with resilience in mind, our system survived the network outage.', 'ด้วยการออกแบบที่คำนึงถึงความทนทาน ระบบของเราจึงรอดพ้นจากเหตุสัญญาณเครือข่ายดับได้'],
        ['Instead of reacting hastily, she reviewed the data from multiple angles.', 'แทนที่จะตอบสนองอย่างรีบร้อน เธอได้ตรวจดูข้อมูลจากหลากหลายมุมมอง'],
        ['Walking along the river, we discussed our plans for the upcoming year.', 'ขณะที่เดินไปตามแนวริมแม่น้ำ พวกเราได้แลกเปลี่ยนแผนการสำหรับปีหน้า'],
      ],
      reading:
        'Reviewing our progress through complex sentence architecture reveals how much linguistic confidence has grown. Early in our language journey, expressing cause, consequence, and time sequence required strings of simple declarative sentences joined by "because," "then," and "so." Now, equipped with present, past, and perfect participles, we compress dense narrative context into elegant introductory phrases. We have also conquered the dreaded dangling modifier, guaranteeing that every participial phrase points unmistakably to its true logical actor. Whether writing quarterly business memos, scholarly essays, or concise technical updates, deploying these structures demonstrates genuine operational mastery. Continued daily deliberate practice cements these patterns into intuitive, lifelong habits.',
      listenQ: 'What does deploying participial structures demonstrate in professional communication?',
      listenA: 'It demonstrates genuine operational mastery and linguistic confidence.',
      dictation: 'Having mastered these structures, our writing sounds natural and precise.',
      listenNote:
        'จับเสียงเชื่อม /d/ ใน mastered these และเสียง /s/ ใน structures',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ประโยคใดต่อไปนี้ถูกต้องสมบูรณ์และไม่มีข้อผิดพลาดทางไวยากรณ์?',
          answer:
            'Having reviewed the final proposal, the committee signed the contract.',
          choices: [
            'Having reviewed the final proposal, the contract was signed by the committee.',
            'Having reviewed the final proposal, the committee signed the contract.',
            'Reviewed the final proposal, the committee signing the contract.',
            'Reviewing the final proposal, the contract felt ready.',
          ],
          explanation:
            'The committee เป็นผู้ตรวจข้อเสนอ จึงต้องอยู่หลัง comma คู่กับ Having reviewed',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ไขประโยคนี้ให้ถูกต้อง: "Build in 1920, the historic bridge attracts thousands of visitors."',
          answer:
            'Built in 1920, the historic bridge attracts thousands of visitors.',
          explanation:
            'สะพานถูกสร้างขึ้น ต้องใช้ Past Participle (Built) ไม่ใช่ Build',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำ 2 คำในช่องว่าง: _____ _____ (แทนที่จะยอมแพ้), the team redesigned their prototype from scratch.',
          answer: 'Instead of giving up',
          explanation: 'Instead of giving up = แทนที่จะยอมแพ้',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "เมื่อตระหนักว่าเวลาใกล้หมดแล้ว พวกเราจึงมุ่งเน้นไปที่หัวข้อที่สำคัญที่สุด"',
          answer:
            'Realizing that time was running out, we focused on the most critical topics.',
          explanation:
            'Realizing that time was running out, we focused on the most critical topics.',
        },
      ],
      writing:
        'เขียนสรุปทบทวนบทเรียนของสัปดาห์นี้ 1 ย่อหน้า (100 คำ) โดยใช้ Participle Clauses ทั้ง 3 รูปแบบ (Present Participle, Past Participle, Having + V3) ครบถ้วน',
      writingSample:
        'Having practiced participle structures throughout the week, I feel significantly more confident writing executive summaries. Built on deliberate daily repetition, my understanding of sentence rhythm has improved markedly. Knowing how easy it is to drop into dangling modifiers, I now carefully verify that my main subject matches the initial participle phrase every time I edit my work.',
      writingNote:
        'ตรวจทานความถูกต้องของการจับคู่ประธานกับกริยา Participle ในทุกประโยค',
      speakingTopic:
        'ทบทวนการนำ Participle Clauses ไปใช้จริงในชีวิตประจำวัน 4 / 3 / 2 นาที',
      speakingBullets: [
        'สรุปความแตกต่างระหว่าง V-ing, V3 และ Having + V3',
        'ยกตัวอย่างการนำไปใช้ในงานเขียนหรือการเล่าเรื่องของตัวเอง',
      ],
    },
  ]
);
