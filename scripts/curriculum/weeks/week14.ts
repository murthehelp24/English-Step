import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 2: เล่าเรื่อง ตอบโต้ และเชื่อมความคิดในชีวิตประจำวัน';

export const WEEK14: ModuleSeed = createModule(
  {
    week: 14,
    phase: 2,
    phase_title: PHASE_TITLE,
    cefr_level: 'Early B1',
    title: 'Gerund vs Infinitive & Phrasal Verbs ชุดใช้ทุกวัน',
    summary:
      'แยกให้ชัดว่าเมื่อไหร่ตามด้วย V-ing หรือ to + V1, คำกริยาที่ความหมายเปลี่ยนตามรูป (remember/stop/try) และ Phrasal Verbs แกนหลัก (get, take, put, turn, look, bring)',
    focus: 'Gerunds vs Infinitives, Core Phrasal Verbs in Context',
  },
  [
    {
      day: 92,
      title: 'กริยาที่ตามด้วย V-ing (enjoy, suggest, mind) + กฎเหล็กหลัง Preposition',
      objective:
        'ใช้ V-ing (Gerund) หลังกริยากลุ่ม enjoy/avoid/suggest/mind/keep และหลัง Preposition ทุกตัวรวมถึง look forward to อย่างถูกต้อง',
      explanation:
        'เมื่อวางกริยา 2 ตัวต่อกันในภาษาอังกฤษ ตัวหลังไม่ได้ใส่ `to` เสมอไป! มีกลุ่มกริยาสำคัญที่บังคับให้ตามด้วย **`V-ing` (Gerund)** เท่านั้น ได้แก่ **`enjoy, avoid, suggest, mind, finish, keep, practice, consider`**: เช่น `I enjoy cooking dinner.`, `Would you mind opening the window?` (ห้าม ❌ *suggest to go* หรือ *enjoy to cook*)\n\nกฎเหล็กข้อที่สองที่ช่วยกันพลาดได้ 90% คือ **"หลังคำบุพบท (Preposition: in, on, at, for, about, without, before, after) ต้องใช้ `V-ing` เสมอ!"** เช่น `good at explaining`, `thank you for helping` และกับดักยอดฮิต **`look forward to + V-ing`** (เช่น `I look forward to seeing you.`) เพราะ `to` ในสำนวนนี้เป็น Preposition ไม่ใช่ `to` ของกริยาช่อง 1!',
      sound: [
        'Weak "to" before -ing & Preposition Linking',
        'avoid /əˈvɔɪd/ · suggest /səˈdʒest/ · look forward to /lʊk ˈfɔː.wəd tə/',
        'ในวลี `look forward to seeing you` คำว่า `to` ลดเสียงเบาเป็น `/tə/` แล้วไหลเข้า `seeing` ทันที ส่วน `good at speaking` เชื่อม `/d/` เข้า `/ə/` เป็น `กู๊-แด็ท-สปีค-กิง`',
        'ฝึกพูด 5 ก้อนคำรวดเดียวโดยไม่สะดุด: enjoy working, avoid driving, suggest taking, mind waiting, look forward to meeting',
      ],
      l1: [
        'ใส่ to + V1 หลังคำว่า enjoy, suggest, practice หรือ look forward to เช่น "I look forward to meet you" หรือ "She suggested to take a taxi."',
        'คนไทยคุ้นกับสูตร "กริยาชนกริยาให้คั่นด้วย to" และเห็นคำว่า to ใน look forward to เลยเผลอตามด้วย V1 ทันที',
        'จำ 2 กลุ่มให้แม่น: 1) กริยา 8 ตัวทองคำ (enjoy, avoid, suggest, mind, finish, keep, practice, consider) + V-ing 2) เจอบุพบท (at, for, about, to ใน look forward to) → ใช้ V-ing ทันที!',
      ],
      vocab: [
        ['avoid', 'หลีกเลี่ยง', '/əˈvɔɪd/', 'avoid rushing in the morning', 'เลี่ยงการรีบเร่งตอนเช้า'],
        ['suggest', 'แนะนำ / เสนอ', '/səˈdʒest/', 'suggest trying a new route', 'แนะนำให้ลองเส้นทางใหม่'],
        ['postpone', 'เลื่อนออกไป', '/pəʊstˈpəʊn/', 'postpone holding the meeting', 'เลื่อนการจัดประชุมออกไป'],
        ['admit', 'ยอมรับ', '/ədˈmɪt/', 'admit making a mistake', 'ยอมรับว่าทำพลาด'],
        ['capable', 'มีความสามารถ', '/ˈkeɪ.pə.bəl/', 'capable of leading a team', 'สามารถนำทีมได้'],
        ['habit', 'นิสัย / ความเคยชิน', '/ˈhæb.ɪt/', 'keep practicing daily', 'ฝึกทำสม่ำเสมอทุกวัน'],
        ['distraction', 'สิ่งรบกวนสมาธิ', '/dɪˈstræk.ʃən/', 'avoid checking notifications', 'เลี่ยงการเช็กแจ้งเตือน'],
      ],
      examples: [
        ['Would you mind lowering the volume a little bit?', 'คุณช่วยลดเสียงลงอีกนิดได้ไหมคะ?'],
        ['She suggested taking the riverside ferry instead of sitting in traffic.', 'เธอแนะนำให้ขึ้นเรือข้ามฟากริมแม่น้ำแทนการนั่งติดอยู่ในรถ'],
        ['My brother is surprisingly good at fixing minor kitchen leaks.', 'น้องชายของฉันเก่งเรื่องซ่อมรอยรั่วเล็กๆ ในครัวอย่างน่าทึ่ง'],
        ['I really look forward to seeing the whole team next Monday.', 'ฉันตั้งตารอที่จะได้เจอทีมงานทุกคนในวันจันทร์หน้าเลย'],
      ],
      reading:
        'At the beginning of the year, Khao noticed that constant phone notifications broke his concentration at work. Whenever he finished answering one email, he could not avoid checking social media for ten minutes. One afternoon, a colleague suggested turning off non-urgent alerts and keeping the phone inside a desk drawer until noon. At first, Khao admitted feeling restless without checking his screen every five minutes. However, he kept practicing this small habit for two weeks. Soon, he started enjoying working in calm forty-minute blocks and stopped wasting half his morning. Now he feels proud of staying focused during busy mornings and looks forward to leaving the office on time every Friday.',
      listenQ: 'What did Khao’s colleague suggest doing to protect his concentration?',
      listenA: 'Turning off non-urgent alerts and keeping the phone inside a desk drawer until noon.',
      dictation: 'I look forward to seeing your team next Monday.',
      listenNote:
        'ฟังคำว่า `to` ใน `look forward to seeing` จะถูกกลืนสั้นๆ เป็น `/tə/` ส่วนคำว่า `seeing` ฟังชัดทั้ง 2 พยางค์',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้คำผิด 2 จุดหลังกริยาและบุพบท: "She suggested to leave earlier to avoid to get stuck in Friday traffic."',
          answer:
            'She suggested leaving earlier to avoid getting stuck in Friday traffic.',
          explanation:
            'suggest และ avoid เป็นกริยาที่ต้องตามด้วย V-ing เสมอ (leaving / getting stuck)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดเขียนประโยคปิดอีเมลและแสดงความถนัดได้ถูกต้อง 100%?',
          answer: 'Thank you for helping me today—I look forward to hearing from you soon.',
          choices: [
            'Thank you for help me today—I look forward to hear from you soon.',
            'Thank you for helping me today—I look forward to hear from you soon.',
            'Thank you for helping me today—I look forward to hearing from you soon.',
            'Thank you to help me today—I look forward to hearing from you soon.',
          ],
          explanation:
            'หลัง for (preposition) ใช้ helping และหลัง look forward to ใช้ hearing',
        },
        {
          kind: 'gap',
          prompt:
            'เติมรูปกริยาที่ถูกต้องของ speak: After a few months of daily practice, you will feel confident about _____ in meetings.',
          answer: 'speaking',
          explanation: 'about เป็น Preposition กริยาที่ตามหลังต้องเติม -ing เป็น speaking',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "คุณรังเกียจไหมถ้าจะช่วยเปิดหน้าต่าง?" (ใช้ Would you mind...)',
          answer: 'Would you mind opening the window?',
          explanation: 'หลัง Would you mind ต้องใช้ V-ing (opening) เสมอ',
        },
      ],
      writing:
        'เขียนเกี่ยวกับนิสัยการทำงานหรือการเรียนของคุณ 4–5 ประโยค โดยใช้กริยาหรือบุพบท + `V-ing` อย่างน้อย 4 ตัว (เช่น enjoy, avoid, keep, good at, look forward to)',
      writingSample:
        'These days, I try to avoid checking messages before breakfast because it helps me stay calm. I really enjoy listening to English podcasts while making morning coffee. Whenever I finish reading a short article, I practice summarizing two main ideas aloud. Thank you for suggesting this simple routine—I look forward to seeing steady progress next month.',
      writingNote:
        'เช็กคำกริยาหลัง enjoy, avoid, finish, practice, for, look forward to ว่าเติม -ing ครบทุกจุดแล้วหรือยัง',
      speakingTopic:
        'เล่า "นิสัยที่เลี่ยงและนิสัยที่ชอบทำ" ด้วย Gerunds (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดถึงสิ่งที่คุณชอบทำ (enjoy), พยายามเลี่ยง (avoid), ถนัด (good at) และตั้งตารอ (look forward to)',
        'ออกเสียงลงท้าย `-ing` เบาเป็นธรรมชาติ (`/ɪŋ/`) ไม่เน้นกระแทกเสียงท้ายคำ',
      ],
    },
    {
      day: 93,
      title: 'กริยาตามด้วย to + V1 (decide, manage, hope) & Verb + Object + to V1',
      objective:
        'ใช้กริยากลุ่ม decide/promise/hope/refuse/manage + to V1 และโครงสร้าง Verb + คน + to V1 (advise, remind, ask, encourage) ได้อย่างถูกต้อง',
      explanation:
        'ตรงข้ามกับบทเมื่อวาน กริยาที่สื่อถึง **"เป้าหมาย แผนการ อนาคต หรือการตัดสินใจ"** จะตามด้วย **`to + V1` (Infinitive)** เสมอ เช่น **`decide to, promise to, hope to, expect to, offer to, refuse to, manage to, afford to`**: เช่น `We managed to catch the last train.`, `She offered to share her notes.`\n\nและโครงสร้างสำคัญในที่ทำงานคือ **`Verb + Object (คน) + to + V1`** เช่น **`advise someone to, remind someone to, ask someone to, tell someone to, encourage someone to`**: `The doctor advised him to rest more.` (ห้ามพูดว่า ❌ *advised him rest* หรือ ❌ *want that you come* ต้องเป็น **`want you to come`**!)',
      sound: [
        'Natural "to" Reduction /tə/ in Infinitives',
        'manage /ˈmæn.ɪdʒ/ · refuse /rɪˈfjuːz/ · remind /rɪˈmaɪnd/ · encourage /ɪnˈkʌr.ɪdʒ/',
        'เวลาพูดจริง `to` ในก้อนกริยาจะสั้นและเบาเป็น `/tə/`: "decided to leave" → `di-SAI-dəd tə leev`, "remind me to send" → `ri-MAIND mi tə send`',
        'ฝึกพูดประโยค 2 กลุ่ม: กลุ่ม 1 (decide to, manage to, hope to) และกลุ่ม 2 (remind me to, advise us to, want you to)',
      ],
      l1: [
        'พูดว่า "I want that you help me" หรือ "My boss reminded me send the email" (ลืม to หรือเอา that มาใส่แทน)',
        'คนไทยแปลตรงตัวจาก "อยากให้คุณ..." หรือ "เตือนให้ฉัน..." โดยใส่ that หรือตัด to ทิ้งหลังคำนามบุคคล',
        'ใช้สูตรตายตัวสำหรับคน: "กริยา + คน (me/him/her/my friend) + to + กริยาช่อง 1" เช่น want you to stay, remind me to lock, advise her to apply',
      ],
      vocab: [
        ['manage', 'จัดการได้สำเร็จ (แม้ยาก)', '/ˈmæn.ɪdʒ/', 'manage to finish on time', 'ทำเสร็จทันเวลาได้สำเร็จ'],
        ['refuse', 'ปฏิเสธไม่ทำ', '/rɪˈfjuːz/', 'refuse to give up', 'ไม่ยอมแพ้'],
        ['remind', 'เตือนความจำ', '/rɪˈmaɪnd/', 'remind someone to bring', 'เตือนใครบางคนให้นำมา'],
        ['encourage', 'ให้กำลังใจ / สนับสนุน', '/ɪnˈkʌr.ɪdʒ/', 'encourage me to speak', 'สนับสนุนให้ฉันพูด'],
        ['promise', 'สัญญา', '/ˈprɒm.ɪs/', 'promise to arrive early', 'สัญญาว่าจะมาถึงแต่เช้า'],
        ['expect', 'คาดหวัง', '/ɪkˈspekt/', 'expect to hear back', 'คาดว่าจะได้รับการตอบกลับ'],
        ['arrange', 'จัดแจง / นัดหมาย', '/əˈreɪndʒ/', 'arrange to meet', 'นัดหมายที่จะเจอกัน'],
      ],
      examples: [
        ['Our team managed to solve the audio issue ten minutes before the call.', 'ทีมของเราแก้ปัญหาเสียงได้สำเร็จก่อนเริ่มสายแค่สิบนาที'],
        ['Please remind me to bring the printed handouts tomorrow morning.', 'ช่วยเตือนฉันให้เอาเอกสารแจกมาพรุ่งนี้เช้าด้วยนะ'],
        ['Her mentor encouraged her to present the design idea in English.', 'พี่เลี้ยงของเธอสนับสนุนให้เธอนำเสนอไอเดียดีไซน์เป็นภาษาอังกฤษ'],
        ['They refused to rush the product until every detail felt safe.', 'พวกเขาปฏิเสธที่จะรีบปล่อยสินค้าจนกว่าทุกรายละเอียดจะปลอดภัย'],
      ],
      reading:
        'Preparing for her first community presentation felt intimidating, so Fon asked an experienced coworker, Alex, to listen to her rehearsal. After hearing the first draft, Alex offered to help tighten the opening story and advised her to speak slightly slower. He also reminded her to pause after key points instead of rushing through every slide. At first, Fon expected to feel nervous on stage, yet daily rehearsals built real comfort. On Friday morning, she managed to deliver the entire ten-minute talk calmly, and several guests asked her to share the slides afterward. That small milestone taught her not to refuse new opportunities out of fear.',
      listenQ: 'What two pieces of advice did Alex give Fon after listening to her rehearsal?',
      listenA: 'He advised her to speak slightly slower and reminded her to pause after key points.',
      dictation: 'Please remind me to send the file before noon.',
      listenNote:
        'ฟังเสียง `remind me to` ที่ไหลติดกันโดย `to` เบาเป็น `/tə/` และ `before noon` เน้นที่ `noon`',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้โครงสร้าง Verb + Object + to V1 ที่ใช้ผิดแบบแปลตรงตัว: "My manager wants that I organize the files and reminded me call the supplier."',
          answer:
            'My manager wants me to organize the files and reminded me to call the supplier.',
          explanation:
            'want และ remind ใช้โครงสร้าง กริยา + Object + to V1 (wants me to organize / reminded me to call) ห้ามใช้ want that I...',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้กริยากับ `to + V1` และรูปปฏิเสธ `not to + V1` ได้ถูกต้อง?',
          answer: 'She promised not to tell anyone before we managed to confirm the schedule.',
          choices: [
            'She promised to not telling anyone before we managed confirm the schedule.',
            'She promised not to tell anyone before we managed to confirm the schedule.',
            'She promised that not tell anyone before we managed confirming the schedule.',
            'She promised not telling anyone before we managed to confirm the schedule.',
          ],
          explanation:
            'รูปปฏิเสธของ to + V1 คือ not to + V1 (promised not to tell) และ manage ตามด้วย to + V1 (managed to confirm)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบโครงสร้าง: The coach encouraged the new players _____ keep practicing even after a tough match.',
          answer: 'to',
          explanation: 'encourage + Object (the new players) + to + V1',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "พวกเราตัดสินใจที่จะทำอาหารเย็นเองแทนที่จะสั่งอาหาร"',
          answer: 'We decided to cook dinner ourselves instead of ordering food.',
          explanation: 'decide + to V1 (decided to cook) และหลัง of (preposition) ใช้ ordering',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์ที่มีคนช่วยแนะนำหรือเตือนคุณจนทำเรื่องยากๆ สำเร็จ 4–5 ประโยค โดยใช้ `manage to`, `decide to`, และ `Verb + someone + to V1` (เช่น advise/remind/encourage) อย่างน้อย 3 จุด',
      writingSample:
        'Last month, I decided to cook a special dinner for my parents’ anniversary, even though I rarely cook big meals. My older sister offered to help with the shopping and reminded me to prepare the sauces early. At one point, the stove stopped heating properly, yet we managed to finish all four dishes on time. My mom encouraged me to write down the recipes for next year.',
      writingNote:
        'เช็กให้ชัวร์ว่าหลัง decide, manage, offer, remind me, encourage me มีคำว่า to ก่อนกริยาช่อง 1 ครบทุกตัว',
      speakingTopic:
        'เล่า "เรื่องท้าทายที่คุณทำสำเร็จได้เพราะมีคนคอยช่วย" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้ก้อนคำ: decided to..., offered to..., advised me to..., reminded me to..., managed to...',
        'ลดเสียงคำว่า `to` เป็น `/tə/` ทุกครั้งเพื่อให้จังหวะพูดไม่สะดุด',
      ],
    },
    {
      day: 94,
      title: 'กริยาเปลี่ยนความหมาย (stop, remember, try + V-ing vs to V1)',
      objective:
        'แยกความหมายที่ต่างกันอย่างชัดเจนของ stop, remember, forget และ try เมื่อตามด้วย V-ing เทียบกับ to + V1',
      explanation:
        'มีกริยา 3 ตัวท็อปที่ตามด้วยได้ทั้ง `V-ing` และ `to + V1` แต่ **ความหมายเปลี่ยนคนละเรื่องเลย**:\n1. **`stop`**: `stop doing` = **เลิกทำสิ่งนั้น** (เช่น `He stopped smoking five years ago.` = เลิกสูบแล้ว) vs `stop to do` = **หยุดเดิน/หยุดงานที่ทำอยู่ เพื่อแวะทำอีกอย่าง** (เช่น `On the way home, I stopped to buy fresh fruit.` = แวะซื้อผลไม้)\n2. **`remember / forget`**: `remember doing` = **จำความทรงจำในอดีตได้ว่าเคยทำ** (`I clearly remember locking the door.`) vs `remember to do` = **จำไว้ว่าต้องทำสิ่งนั้น (หน้าที่/ยังไม่ทำ)** (`Remember to lock the door before leaving!`)\n3. **`try`**: `try doing` = **ลองทำดูเพื่อทดลองวิธีแก้** (`Try adding a little lemon juice.`) vs `try to do` = **พยายามออกแรงทำให้สำเร็จ** (`I tried to open the tight jar, but it didn’t move.`)',
      sound: [
        'Stress Contrast in Meaning-Changing Pairs',
        'regret /rɪˈɡret/ · experiment /ɪkˈsper.ɪ.mənt/ · memory /ˈmem.ər.i/ · lock /lɒk/',
        'เปรียบเทียบเสียง: "I stopped SMOKING" (เน้น SMOKING = เลิกสูบ) vs "I stopped to BUY coffee" (`to` เบา `/tə/`, เน้น BUY = แวะซื้อ)',
        'พูดประโยคคู่เทียบ 3 คู่ให้ต่างทั้งเสียงและภาพในหัว: remember locking vs remember to lock / stop scrolling vs stop to rest / try restarting vs try to reach',
      ],
      l1: [
        'ใช้ stop to + V1 เพื่อบอก "เลิกทำนิสัย" เช่น "I want to stop to eat late at night" (แปลเพี้ยนเป็น "อยากแวะกินตอนดึก" ทันที!)',
        'แปลตรงตัวว่า "หยุดที่จะทำ" จึงใส่ to หลัง stop โดยไม่รู้ว่า stop to do แปลว่า "หยุดอย่างอื่นเพื่อมาทำอันนี้"',
        'เช็กภาพเวลา: remember/forget + V-ing = ภาพย้อนหลังในความทรงจำ | remember/forget + to V1 = เช็กลิสต์ที่ต้องทำ! และ stop + V-ing = เลิกพฤติกรรมนั้นถาวร/ชั่วคราว',
      ],
      vocab: [
        ['regret', 'เสียใจภายหลัง / เสียดาย', '/rɪˈɡret/', 'regret saying that', 'เสียใจที่พูดแบบนั้นออกไป'],
        ['experiment', 'ทดลองทำดู', '/ɪkˈsper.ɪ.mənt/', 'try experimenting with', 'ลองทดลองใช้...ดู'],
        ['lock', 'ล็อกประตู', '/lɒk/', 'remember to lock up', 'จำไว้ว่าต้องล็อกให้เรียบร้อย'],
        ['pause', 'หยุดพักชั่วคราว', '/pɔːz/', 'stop to pause and breathe', 'หยุดพักหายใจสักครู่'],
        ['memory', 'ความทรงจำ', '/ˈmem.ər.i/', 'a clear memory of', 'ความทรงจำที่ชัดเจนเกี่ยวกับ'],
        ['attempt', 'พยายาม / ความพยายาม', '/əˈtempt/', 'try to lift carefully', 'พยายามยกอย่างระมัดระวัง'],
        ['focus', 'จดจ่อ / สมาธิ', '/ˈfəʊ.kəs/', 'stop losing focus', 'เลิกเสียสมาธิ'],
      ],
      examples: [
        ['Don’t worry—I clearly remember locking the back gate before we left.', 'ไม่ต้องห่วง ฉันจำได้ชัดเจนว่าล็อกประตูหลังแล้วก่อนเราออกมา'],
        ['Please remember to unplug the kettle before heading out.', 'อย่าลืมถอดปลั๊กกาน้ำร้อนก่อนออกไปข้างนอกนะ'],
        ['On my bike ride home, I stopped to take a photo of the sunset.', 'ระหว่างปั่นจักรยานกลับบ้าน ฉันแวะจอดถ่ายรูปพระอาทิตย์ตก'],
        ['If the app freezes again, try restarting your phone first.', 'ถ้าแอปค้างอีก ลองรีสตาร์ทมือถือดูก่อนนะ'],
      ],
      reading:
        'Last Saturday, Dan left his apartment in a hurry to catch a morning train. Halfway down the street, he suddenly panicked because he could not remember locking his front door. He tried to stay calm and think back, yet his mind went blank. Rather than regretting a careless mistake later, he walked back upstairs to check. Sure enough, the door was locked, so he felt relieved and hurried back down. On the way to the station, he stopped to grab an iced coffee because he had recently stopped drinking sugary sodas and wanted a lighter boost. When he reached the platform, the ticket machine jammed, so he tried tapping his card a second time and finally boarded with two minutes to spare.',
      listenQ: 'Why did Dan walk back upstairs to his apartment on Saturday morning?',
      listenA: 'Because he could not remember locking his front door.',
      dictation: 'I stopped to buy tea because I stopped drinking soda.',
      listenNote:
        'ประโยคเดียวมี `stopped to buy` (แวะซื้อ) และ `stopped drinking` (เลิกดื่ม) ฟังความต่างของคำว่า `to` หน้า `buy` เทียบกับ `-ing` หลัง `stopped`',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ใช้รูปหลัง stop และ remember ผิดความหมาย: "I finally stopped to check my phone in bed, and I’ll never forget to see that snowy mountain for the first time."',
          answer:
            'I finally stopped checking my phone in bed, and I will never forget seeing that snowy mountain for the first time.',
          explanation:
            'เลิกเช็กมือถือใช้ stopped checking และความทรงจำที่ไม่มีวันลืมในอดีตใช้ never forget seeing',
        },
        {
          kind: 'choice',
          prompt: 'สถานการณ์: เพื่อนบ่นว่าแกงจืดยังจืดไปหน่อย คุณแนะนำให้ "ลองเติมซีอิ๊วนิดนึงดู" ควรพูดว่าอย่างไร?',
          answer: 'Try adding a splash of soy sauce to see if it tastes richer.',
          choices: [
            'Try to add a splash of soy sauce to remember tasting it.',
            'Try adding a splash of soy sauce to see if it tastes richer.',
            'Stop adding soy sauce so it tastes richer.',
            'Remember adding soy sauce before you cooked.',
          ],
          explanation:
            'try + V-ing (try adding) แปลว่า "ลองทำดูเป็นวิธีทดสอบ/ทดลองแก้ปัญหา"',
        },
        {
          kind: 'gap',
          prompt:
            'เติมรูปกริยาที่ถูกต้องของ turn: On our road trip, we stopped _____ off the main highway to enjoy the view.',
          answer: 'to turn',
          explanation:
            'แวะหยุดเพื่อเลี้ยวออกจากทางหลวง → stopped to turn off (ถ้า stopped turning จะแปลว่าเลิกเลี้ยว)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "อย่าลืมปิดไฟก่อนเข้านอนนะ"',
          answer: 'Remember to turn off the lights before going to bed.',
          explanation:
            'เป็นสิ่งเตือนให้ทำ (เช็กลิสต์) ใช้ Remember to turn off และหลัง before ใช้ going',
        },
      ],
      writing:
        'เขียนบันทึกสั้นๆ 4–5 ประโยคเล่าเหตุการณ์ในสัปดาห์นี้ โดยใช้คู่ความหมายต่างอย่างน้อย 3 คู่ เช่น `stop doing` vs `stop to do`, `remember doing` vs `remember to do`, `try doing` vs `try to do`',
      writingSample:
        'This month, I stopped drinking sweet milk tea every afternoon because I wanted better sleep. On Monday evening, I stopped to buy herbal tea at a small shop near the station instead. When I got home, I remembered putting my house keys in my coat pocket, so I found them right away. Before sleeping, I also tried reading ten pages of a novel to relax, and it helped!',
      writingNote:
        'ตรวจเช็กความหมายของกริยาหลัง stop / remember / try ว่าตรงกับเจตนา (อดีต/ทดลอง/เลิก = V-ing vs หน้าที่/แวะ/พยายาม = to V1)',
      speakingTopic:
        'เล่าความเปลี่ยนแปลงนิสัยและความทรงจำด้วยคู่ stop / remember / try (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดเปรียบเทียบนิสัยที่เลิกทำ (stopped + V-ing), สิ่งที่แวะทำ (stopped to + V1), และคำแนะนำทดลอง (try + V-ing)',
        'ชะลอจังหวะนิดหนึ่งตรงกริยาสำคัญเพื่อเช็กว่าไม่หลุด V-ing หรือ to V1 ผิดความหมาย',
      ],
    },
    {
      day: 95,
      title: 'Core Phrasal Verbs 1: get & take + กฎวางสรรพนาม (turn it off)',
      objective:
        'ใช้กริยาวลีแกนหลักของ get และ take ในชีวิตประจำวันพร้อมวางตำแหน่งสรรพนามในกริยาวลีแยกคำ (Separable) ได้ถูกต้อง',
      explanation:
        'กริยาวลี (Phrasal Verbs) คือกริยา + คำกำกับ (Particle เช่น *on, off, over, up, away*) ที่เจ้าของภาษาใช้แทนคำทางการในบทสนทนาจริงถึง 80%! ชุดที่ 1 คือ **`get`** และ **`take`**:\n- `get along (with)` = เข้ากันได้ดีกับ...\n- `get over` = ทำใจได้ / หายจาก (ป่วย/ผิดหวัง)\n- `get rid of` = กำจัด / ทิ้งของที่ไม่ใช้\n- `take off` = เครื่องบินขึ้น / ถอดออก / งานเริ่มปัง\n- `take over` = รับช่วงต่อ / เข้ามาดูแลแทน\n- `take care of` = ดูแล\n\n**กฎทองที่ห้ามพลาด (Separable Rule)**: เมื่อกริยาวลีแยกคำได้และกรรมเป็น **สรรพนาม (`it, them, him, her`)** ต้องวาง **ตรงกลาง** เสมอ! เช่น **`turn it off` ✅ / `take them off` ✅** (ห้ามพูด ❌ *turn off it* หรือ ❌ *take off them* เด็ดขาด!)',
      sound: [
        'Particle Stress in Phrasal Verbs',
        'get along /ɡet əˈlɒŋ/ · get rid of /ɡet ˈrɪd əv/ · take over /teɪk ˈəʊ.vər/',
        'จำหลักเสียง: ใน Phrasal Verb น้ำหนักเสียง (Stress) มักอยู่ที่ **Particle** ไม่ใช่ตัวกริยา! เช่น `take OFF your shoes`, `turn it OFF`, `get ALONG with`',
        'ฝึกพูดวางสรรพนามตรงกลางให้ติดปาก 5 ชุด: take it off, put it away, throw them out, pick it up, turn it down',
      ],
      l1: [
        'เอา it / them ไปห้อยท้ายกริยาวลี เช่น "Please turn off it" หรือ "Take off them before entering"',
        'คิดตามโครงสร้างภาษาไทย "ปิด+มัน", "ถอด+มัน" จึงเอาสรรพนามไปไว้หลังกริยาวลีทั้งก้อน',
        'จำกฎสั้นๆ: ถ้ากรรมเป็น "คำสั้นๆ (it / them / me)" ให้คั่นตรงกลางเสมอ → turn IT off / put THEM away / pick ME up!',
      ],
      vocab: [
        ['get along', 'เข้ากันได้ดี', '/ɡet əˈlɒŋ/', 'get along well with', 'เข้ากันได้ดีกับ'],
        ['get over', 'ผ่านพ้น / ทำใจได้ / หายป่วย', '/ɡet ˈəʊ.vər/', 'get over a cold', 'หายจากไข้หวัด'],
        ['get rid of', 'กำจัด / โละทิ้ง', '/ɡet ˈrɪd əv/', 'get rid of old clutter', 'โละของรกๆ ทิ้ง'],
        ['take off', 'ถอดออก / บินขึ้น / พุ่งทะยาน', '/teɪk ɒf/', 'take your shoes off', 'ถอดรองเท้าออก'],
        ['take over', 'รับช่วงต่อ / เข้ามาดูแลแทน', '/teɪk ˈəʊ.vər/', 'take over the shift', 'รับช่วงต่อกะทำงาน'],
        ['take care of', 'ดูแล / จัดการให้เรียบร้อย', '/teɪk ˈkeər əv/', 'take care of the details', 'ดูแลรายละเอียดให้'],
        ['clutter', 'ของรกเกะกะ', '/ˈklʌt.ər/', 'clear out clutter', 'เคลียร์ของรกๆ ออก'],
      ],
      examples: [
        ['Fortunately, I get along really well with my new roommates.', 'โชคดีที่ฉันเข้ากับรูมเมตคนใหม่ได้ดีมาก'],
        ['Wait a minute—take your wet shoes off before stepping onto the rug.', 'เดี๋ยวก่อน ถอดรองเท้าเปียกๆ ออกก่อนเดินขึ้นพรมนะ'],
        ['Your jacket is still on the chair; please hang it up.', 'เสื้อแจ็กเก็ตของคุณยังอยู่บนเก้าอี้ ช่วยแขวนมันขึ้นหน่อยนะ'],
        ['When Mina went on leave, her teammate offered to take over the weekly report.', 'ตอนมีนาลางาน เพื่อนร่วมทีมอาสารับช่วงต่อรายงานประจำสัปดาห์ให้'],
      ],
      reading:
        'Every rainy season, Ton’s small entryway becomes messy because wet umbrellas and old boxes pile up by the door. Last Sunday, he finally decided to get rid of all the clutter. First, he asked his younger sister to help take care of sorting the old magazines while he packed unused cables into a box. Whenever they found broken chargers, they threw them away instead of hiding them in another drawer. By lunchtime, Ton felt amazed by how clean the hallway looked. Later that afternoon, his friend stopped by, took his shoes off neatly by the mat, and joked that Ton was getting over his habit of keeping everything forever. Next week, Ton even plans to take over organizing the kitchen shelves.',
      listenQ: 'What did Ton and his sister do with broken chargers they found?',
      listenA: 'They threw them away instead of hiding them in another drawer.',
      dictation: 'If you find broken chargers, just throw them away.',
      listenNote:
        'สังเกตการวาง `them` ตรงกลางใน `throw them away` ซึ่งพูดเร็วๆ จะเชื่อมเป็น `throw-ə-mə-WAY` (เน้นที่ `away`)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ตำแหน่งสรรพนามใน Phrasal Verb 2 จุด: "Your boots are muddy—please take off them and put away them in the rack."',
          answer:
            'Your boots are muddy—please take them off and put them away in the rack.',
          explanation:
            'เมื่อกรรมเป็นสรรพนาม (them/it) ใน Phrasal Verb แบบแยกได้ ต้องวางตรงกลาง: take them off และ put them away',
        },
        {
          kind: 'choice',
          prompt: 'ประโยคใดใช้ Phrasal Verbs ของ `get` และ `take` ได้ตรงความหมายธรรมชาติทั้งหมด?',
          answer: 'It took him two weeks to get over the flu before he could take over his normal projects again.',
          choices: [
            'It took him two weeks to get rid of the flu before he could take off his normal projects.',
            'It took him two weeks to get over the flu before he could take over his normal projects again.',
            'It took him two weeks to get along the flu before he could take care it.',
            'It took him two weeks to get over it the flu and take over them.',
          ],
          explanation:
            'get over = หายป่วย/ผ่านพ้น และ take over = รับช่วงต่อดูแลงาน (เข้ากับบริบทที่สุด)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบก้อนคำ: Even though they have very different personalities, the two neighbors get _____ wonderfully.',
          answer: 'along',
          explanation: 'get along (well) = เข้ากันได้ดี/ลงรอยกัน',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ถึงเวลาต้องโละเสื้อผ้าเก่าๆ พวกนั้นทิ้งแล้ว (ใช้ get rid of)"',
          answer: 'It is time to get rid of those old clothes.',
          explanation: 'get rid of + noun (ชุดคำกริยาวลี 3 คำที่แยกไม่ได้ วางกรรมต่อท้ายได้เลย)',
        },
      ],
      writing:
        'เขียนเล่าเรื่องการจัดการบ้าน การทำงานร่วมกับเพื่อน หรือการช่วยรับช่วงต่อแทนใครสักคน 4–5 ประโยค โดยใช้ Phrasal Verbs จากบทนี้ (get along, get over, get rid of, take off, take over, take care of) อย่างน้อย 4 ตัว และใช้สรรพนามคั่นกลาง (เช่น `put it away`, `throw them out`) อย่างน้อย 1 จุด',
      writingSample:
        'Last weekend, I helped my cousin clean out her storage corner and get rid of twenty old boxes. Because we get along easily, the heavy work actually felt fun. Whenever we found empty jars, we washed them and put them away in a neat basket. Once we finished taking care of the hallway, she cooked noodles while I took over answering her phone messages.',
      writingNote:
        'เช็กคำว่า get rid of และ take care of (ห้ามลืม of!) รวมถึงตำแหน่งสรรพนาม it / them ที่ต้องอยู่หน้า particle',
      speakingTopic:
        'เล่า "วันจัดบ้านหรือช่วยงานเพื่อน" ด้วย get & take phrasal verbs (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใส่ก้อนคำธรรมชาติ: get rid of clutter, get along with, take care of, take it off, put them away',
        'เน้นเสียงตัว particle ท้ายกริยา (get ALONG, take OVER, throw them AWAY) ให้ฟังเหมือนเจ้าของภาษา',
      ],
    },
    {
      day: 96,
      title: 'Core Phrasal Verbs 2: put, turn, look & bring',
      objective:
        'เข้าใจและใช้ Phrasal Verbs สำคัญกลุ่ม put, turn, look และ bring ในสถานการณ์งานและการสนทนาประจำวันได้ถูกต้อง',
      explanation:
        'กริยาวลีชุดที่ 2 คือคำที่เจอในชีวิตจริงและที่ทำงานทุกวัน แต่แปลตรงตัวไม่ได้เลย ต้องจำความหมายทั้งก้อน:\n- **`put off`** = เลื่อนออกไป (คล้าย postpone เช่น `Stop putting off your dental checkup.`)\n- **`put up with`** = อดทนต่อ (เรื่องน่ารำคาญ เช่นเสียงดัง)\n- **`turn down`** = ปฏิเสธ (ข้อเสนอ/คำเชิญ) หรือหรี่เสียง (`turn it down`)\n- **`turn out`** = กลับกลายเป็นว่า / ผลออกมาเป็น...\n- **`look into`** = ตรวจสอบ / สืบดูรายละเอียด\n- **`look up to`** = นับถือ / ยกย่องเป็นแบบอย่าง\n- **`bring up`** = หยิบยกขึ้นมาพูดในบทสนทนา หรือเลี้ยงดูลูก',
      sound: [
        'Linking Across Multi-Word Phrasal Verbs',
        'put off /pʊt ɒf/ · turn out /tɜːn aʊt/ · look into /lʊk ˈɪn.tuː/ · bring up /brɪŋ ʌp/',
        'เวลาพูดเร็ว พยัญชนะท้ายกริยาจะเชื่อมเข้าสระของ Particle ทันที: `put off` → `pu-TOFF`, `turn out` → `tur-NOUT`, `look into` → `loo-KIN-to`, `put up with` → `pu-TUP-with`',
        'ฝึกพูด 5 ก้อนคำแบบเสียงเชื่อมไหลไม่หยุด: put it off, turn it down, turned out great, look into it, bring it up',
      ],
      l1: [
        'แปลความหมายตามคำตรงตัว เช่น คิดว่า "turn down a job" แปลว่าคว่ำงาน หรือ "put off" แปลว่าถอดออก',
        'พยายามจำความหมายแยกทีละคำแทนที่จะจำความหมายเชิงเปรียบเทียบของทั้งวลี',
        'จำด้วยภาพเรื่องเล่า: เลื่อนตารางออกไป (put off), ปรับเสียงหรือข้อเสนอลง (turn down), หันมามองข้างในเพื่อตรวจสอบ (look into), หยิบเรื่องขึ้นมาบนโต๊ะ (bring up)!',
      ],
      vocab: [
        ['put off', 'เลื่อน / ผัดผ่อน', '/pʊt ɒf/', 'put off the decision', 'เลื่อนการตัดสินใจออกไป'],
        ['put up with', 'ทน / อดทนต่อ', '/pʊt ʌp wɪð/', 'put up with the noise', 'อดทนกับเสียงรบกวน'],
        ['turn down', 'ปฏิเสธ / หรี่ลง', '/tɜːn daʊn/', 'turn down an invitation', 'ปฏิเสธคำเชิญ'],
        ['turn out', 'กลับกลายเป็นว่า / ผลลัพธ์คือ', '/tɜːn aʊt/', 'turn out better than expected', 'ผลออกมาดีกว่าที่คิด'],
        ['look into', 'ตรวจสอบ / สืบค้นข้อมูล', '/lʊk ˈɪn.tuː/', 'look into the issue', 'ตรวจสอบปัญหา'],
        ['look up to', 'เคารพนับถือ / ยกย่อง', '/lʊk ʌp tuː/', 'look up to a mentor', 'นับถือพี่เลี้ยงเป็นแบบอย่าง'],
        ['bring up', 'หยิบยกขึ้นมาพูด / เลี้ยงดู', '/brɪŋ ʌp/', 'bring up a valid point', 'หยิบยกประเด็นที่น่าสนใจขึ้นมา'],
      ],
      examples: [
        ['We had to put off our outdoor picnic until the heavy rain stopped.', 'เราต้องเลื่อนการปิกนิกกลางแจ้งออกไปจนกว่าฝนหนักจะหยุด'],
        ['She politely turned down the extra project because her schedule was full.', 'เธอปฏิเสธโปรเจกต์เสริมอย่างสุภาพเพราะตารางงานเต็มแล้ว'],
        ['At first I worried about the move, yet everything turned out smoothly.', 'ตอนแรกฉันกังวลเรื่องย้ายบ้าน แต่ทุกอย่างกลับราบรื่นดี'],
        ['Wait—I will look into that delivery delay and message you back right away.', 'เดี๋ยวนะ ฉันจะตรวจสอบเรื่องส่งของล่าช้าแล้วทักกลับหาคุณทันที'],
      ],
      reading:
        'For three weeks, the apartment above Ploy’s flat had loud drilling every morning. At first, she tried to put up with the noise by wearing headphones, yet concentrating during calls became impossible. Instead of putting off a difficult conversation, she brought up the issue calmly at the building office. The manager promised to look into the repair schedule that very afternoon. Later, it turned out that the upstairs neighbor did not realize how clearly sound traveled through the concrete floor. He apologized warmly and agreed to shift noisy work to lunch hours when Ploy usually steps out. Even though Ploy had turned down a neighbor’s offer to swap rooms earlier, talking honestly solved everything.',
      listenQ: 'How did the upstairs neighbor respond after the manager looked into the noise issue?',
      listenA: 'He apologized warmly and agreed to shift noisy work to lunch hours.',
      dictation: 'I will look into the issue and bring it up tomorrow.',
      listenNote:
        'สังเกตเสียงเชื่อม `loo-KIN-to` และ `bring it up` ที่ออกเสียงไหลต่อกันเหมือนคำเดียว (`brin-gi-tup`)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้คำที่เลือก Particle ผิดความหมายและวางสรรพนามผิด: "Don’t put out your dentist visit any longer—and if the music is too loud, please turn down it."',
          answer:
            'Don’t put off your dentist visit any longer—and if the music is too loud, please turn it down.',
          explanation:
            'เลื่อนออกไปใช้ put off (ไม่ใช้ put out = ดับไฟ) และ turn down แยกคำได้ต้องวาง it ไว้ตรงกลาง (turn it down)',
        },
        {
          kind: 'choice',
          prompt: 'ประโยคใดใช้ `turn out`, `look up to` และ `bring up` ได้ตรงความหมาย?',
          answer: 'I look up to my older cousin, especially after she brought up a smart idea that turned out great.',
          choices: [
            'I look into my older cousin, especially after she put up a smart idea that turned down great.',
            'I look up to my older cousin, especially after she brought up a smart idea that turned out great.',
            'I look up my older cousin, especially after she brought over an idea that turned in great.',
            'I put up with my older cousin, because she turned out my job invitation.',
          ],
          explanation:
            'look up to = นับถือ, bring up = ยกประเด็นขึ้นมาพูด, turn out great = ผลออกมาดีมาก',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำในวลี 3 คำ: How long can you put _____ with slow internet before switching providers?',
          answer: 'up',
          explanation: 'put up with = อดทนต่อ (สถานการณ์ที่น่ารำคาญ)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ผลปรากฏว่าวันประชุมออกมาดีกว่าที่ฉันกังวลไว้"',
          answer: 'It turned out that the meeting went better than I worried.',
          explanation: 'ใช้ It turned out that... = ผลปรากฏว่า / กลับกลายเป็นว่า...',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์แก้ปัญหาหรือการพูดคุยกับเพื่อน/เพื่อนร่วมงาน 4–5 ประโยค โดยใช้ Phrasal Verbs อย่างน้อย 4 คำจาก `put off, put up with, turn down, turn out, look into, look up to, bring up`',
      writingSample:
        'Last week, I noticed an error on our team calendar, so I decided not to put off fixing it. I brought it up gently during our morning check-in, and our team lead promised to look into the dates right away. Although I usually hate extra meetings, this quick chat turned out to be super helpful. That calm attitude is exactly why everyone looks up to her.',
      writingNote:
        'ตรวจให้แน่ใจว่า Phrasal Verbs ทุกตัวใช้ Particle ถูกตัว (put off, look into, turn out, look up to) และสื่อความหมายตรงบริบท',
      speakingTopic:
        'เล่า "เรื่องที่กังวลตอนแรกแต่ผลกลับออกมาดี" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'รวมวลี: put off, bring up, look into, turn out, put up with',
        'ฝึกเชื่อมเสียงข้ามคำให้ลื่น: `pu-toff`, `brin-gi-tup`, `tur-nout`, `loo-kin-to`',
      ],
    },
    {
      day: 97,
      title: 'Phrasal Verbs for Daily Problems, Tech & Social Life',
      objective:
        'นำ Phrasal Verbs ที่ใช้จริงในชีวิตประจำวัน เทคโนโลยี และการนัดพบเพื่อนมาใช้สื่อสารแทนคำไทยแปลตรงตัว',
      explanation:
        'เวลาพูดเรื่องปัญหาเทคโนโลยีหรือการนัดพบเพื่อน คนไทยมักพูดตรงตัวว่า *"open the computer"*, *"close the light"*, *"my phone no battery"*, *"meet friends for talk"* ซึ่งฟังดูแข็งและแปลกหู เจ้าของภาษาใช้ชุด Phrasal Verbs ต่อไปนี้แทนทั้งหมด:\n- **เทคโนโลยี & ปัญหาเฉพาะหน้า**: `plug in` (เสียบปลั๊ก), `back up` (สำรองข้อมูล), `log in / sign out` (เข้าระบบ/ออกจากระบบ), `break down` (เครื่องเสีย/พัง), `run out of` (หมดเกลี้ยง เช่น `run out of battery`), `figure out` (คิดออก/แก้ปมได้)\n- **สังคม & นัดพบ**: `show up` (โผล่มาตามนัด), `catch up (with)` (อัปเดตชีวิตคุยกันหลังไม่ได้เจอนาน), `drop by` (แวะมาหาแป๊บหนึ่ง)',
      sound: [
        'Linking Tech & Social Phrasal Verbs',
        'figure out /ˈfɪɡ.ər aʊt/ · run out of /rʌn ˈaʊt əv/ · break down /breɪk daʊn/ · catch up /kætʃ ʌp/',
        'พูดเชื่อม 3–4 คำเป็นก้อนเดียว: `figure it out` → `/ˈfɪɡ.ə.rɪˈtaʊt/`, `run out of` → `/rʌˈnaʊ.təv/`, `plug it in` → `/plʌ.ɡɪˈtɪn/`',
        'ฝึกออกเสียงกลุ่ม tech & social 6 ชุดให้ลื่น: plug it in, back them up, log in, ran out of battery, catch up soon, showed up early',
      ],
      l1: [
        'พูดว่า "open the laptop / close the TV" หรือ "my battery finish / out of" เมื่อเกิดปัญหาในชีวิตประจำวัน',
        'ติดคำกริยาไทย "เปิด-ปิด" (open-close) กับเครื่องใช้ไฟฟ้า และนึกคำว่า run out of / figure out ไม่ออกตอนพูดสด',
        'เปลี่ยนทันที: เปิด/ปิดเครื่องใช้ไฟฟ้า = turn on / turn off (หรือ plug in / unplug), หมด = run out of, คิดแก้ได้ = figure out!',
      ],
      vocab: [
        ['figure out', 'คิดออก / หาทางแก้ได้', '/ˈfɪɡ.ər aʊt/', 'figure out the problem', 'หาทางแก้ปัญหาได้'],
        ['run out of', 'ใช้หมดเกลี้ยง', '/rʌn ˈaʊt əv/', 'run out of battery', 'แบตเตอรี่หมด'],
        ['back up', 'สำรองข้อมูล', '/bæk ʌp/', 'back up your files', 'สำรองไฟล์ของคุณไว้'],
        ['catch up', 'คุยอัปเดตสารทุกข์สุกดิบ', '/kætʃ ʌp/', 'catch up over coffee', 'นั่งคุยอัปเดตชีวิตกันพร้อมกาแฟ'],
        ['show up', 'ปรากฏตัว / มาตามนัด', '/ʃəʊ ʌp/', 'show up on time', 'มาถึงตรงเวลา'],
        ['break down', 'เสีย / ขัดข้อง (เครื่องจักร/รถ)', '/breɪk daʊn/', 'printer broke down', 'เครื่องพิมพ์เสีย'],
        ['plug in', 'เสียบปลั๊กไฟ', '/plʌɡ ɪn/', 'plug in the charger', 'เสียบปลั๊กสายชาร์จ'],
      ],
      examples: [
        ['Wait—let me plug in my laptop before the battery runs out.', 'เดี๋ยวนะ ขอฉันเสียบปลั๊กโน้ตบุ๊กก่อนแบตจะหมด'],
        ['Remember to back up your photos before updating the phone.', 'อย่าลืมสำรองรูปภาพไว้ก่อนอัปเดตมือถือนะ'],
        ['Even though the projector broke down, we figured out a quick solution.', 'แม้โปรเจกเตอร์จะเสีย แต่เราก็คิดทางแก้เฉพาะหน้าออกจนได้'],
        ['It was great catching up with an old classmate who dropped by yesterday.', 'ดีใจมากที่ได้คุยอัปเดตชีวิตกับเพื่อนร่วมรุ่นเก่าที่แวะมาหาเมื่อวาน'],
      ],
      reading:
        'Nothing tests your patience like a tech surprise right before a catch-up call. On Thursday night, Beam planned to catch up with two college friends online, yet her tablet battery almost ran out ten minutes before eight. She grabbed her cable to plug it in, only to realize the wall socket was switched off. After flipping the switch, her Wi-Fi router suddenly slowed down, and the call screen froze. Instead of panicking, Beam unplugged the router, waited thirty seconds, and plugged it back in. Within two minutes, she managed to figure out the connection glitch and log in smoothly. Her friends showed up on screen laughing, and they spent an hour sharing stories while Beam promised to back up her old laptop photos that weekend.',
      listenQ: 'How did Beam fix her slow Wi-Fi router before the call?',
      listenA: 'She unplugged the router, waited thirty seconds, and plugged it back in.',
      dictation: 'We finally figured out why the printer broke down.',
      listenNote:
        'ฟังเสียงเชื่อม `figured out` (`/ˈfɪɡ.əd aʊt/`) และจังหวะท้าย `broke down` ที่ลงน้ำหนักชัดเจนตรง `down`',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้คำแปลตรงตัวแบบไทยและ Phrasal Verb ให้เป็นธรรมชาติ: "Please open the lamp, plug off the charger, and back up them before your laptop finish battery."',
          answer:
            'Please turn on the lamp, unplug the charger, and back them up before your laptop runs out of battery.',
          explanation:
            'เปิดไฟใช้ turn on, ถอดปลั๊กใช้ unplug, back up แยกคำได้ต้องวาง them ตรงกลาง (back them up), และแบตหมดใช้ runs out of battery',
        },
        {
          kind: 'choice',
          prompt: 'สถานการณ์: เพื่อนไม่ได้เจอกันนานและคุณอยากชวนมานั่งคุยอัปเดตชีวิต ควรใช้คำใด?',
          answer: 'Let’s meet at the café this Saturday to catch up over lunch.',
          choices: [
            'Let’s meet at the café this Saturday to break down over lunch.',
            'Let’s meet at the café this Saturday to catch up over lunch.',
            'Let’s meet at the café this Saturday to run out over lunch.',
            'Let’s meet at the café this Saturday to plug in over lunch.',
          ],
          explanation: 'catch up (over lunch/coffee) = พบปะคุยอัปเดตเรื่องราวชีวิตหลังห่างกันไปนาน',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบก้อนคำ: Don’t worry if the setup looks confusing at first—we will _____ it out together.',
          answer: 'figure',
          explanation: 'figure it out = ค่อยๆ คิดและหาทางแก้ไขมันให้ได้',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "พวกเราแป้งหมดแล้ว ระหว่างทางกลับบ้านช่วยแวะซื้อหน่อยได้ไหม"',
          answer: 'We have run out of flour—could you stop to buy some on your way home?',
          explanation:
            'ใช้ run out of (หมดเกลี้ยง) ผสมกับ stop to buy (แวะซื้อ) จากบทก่อนหน้าอย่างแม่นยำ',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์วันที่อุปกรณ์ขัดข้องหรือนัดเจอเพื่อนแล้วมีเรื่องวุ่นๆ นิดหน่อย 4–5 ประโยค โดยใช้ Phrasal Verbs อย่างน้อย 4 คำจากบทนี้ (plug in, back up, run out of, break down, figure out, show up, catch up)',
      writingSample:
        'Yesterday morning, my coffee maker broke down right when I felt super sleepy. Worse, I realized we had run out of instant coffee too! I tried to figure out what was wrong with the machine, and it turned out the cable was simply loose—I just needed to plug it in tightly. Later at noon, an old friend showed up near my office, so we caught up over iced tea for forty minutes.',
      writingNote:
        'เช็กการผัน Tense ของ Phrasal Verbs ในเรื่องเล่าอดีต: broke down, ran out of, figured out, showed up, caught up (เปลี่ยนรูปเฉพาะตัวกริยาหน้า)',
      speakingTopic:
        'เล่า "วันที่เทคพังแต่แก้ได้ + นัดอัปเดตกับเพื่อน" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้กริยาวลีชุดจริง: ran out of, plugged it in, backed it up, figured it out, caught up with',
        'ฝึกผันช่อง 2 เฉพาะกริยาหน้าในเรื่องเล่าอดีต (broke down, showed up, ran out of) ให้ไม่หลุดเป็น V1',
      ],
    },
    {
      day: 98,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 14 — Gerund/Infinitive + Phrasal Verbs & Dictogloss',
      objective:
        'ทบทวนสัปดาห์ที่ 14 เต็มรูปแบบ: แยก Gerund vs Infinitive (รวมคู่เปลี่ยนความหมาย) และใช้ Phrasal Verbs ได้คล่องและถูกตำแหน่งสรรพนาม',
      explanation:
        'จบสัปดาห์ที่ 14 ด้วยการเชื่อม 2 ทักษะที่ทำให้ภาษาอังกฤษฟังเป็น "เจ้าของภาษา" ที่สุดเข้าด้วยกัน:\n1. **กริยาตามหลัง**: `enjoy/avoid/suggest/mind/prepositions + V-ing` vs `decide/manage/offer/Verb + Object + to V1`\n2. **ความหมายเปลี่ยน**: `stop smoking` (เลิก) vs `stop to buy` (แวะซื้อ) | `remember locking` (จำได้ว่าล็อกแล้ว) vs `remember to lock` (อย่าลืมล็อก)\n3. **Phrasal Verbs + กฎสรรพนาม**: `get along, get over, get rid of, take over, put off, put up with, turn down, turn out, look into, bring up, figure out, run out of` และเมื่อมี `it / them` ต้องวางคั่นกลาง (`back them up`, `turn it down`)!\nฝึกฟัง Dictogloss และแก้ประโยคผสมด้านล่างให้แม่นยำก่อนเข้า Week 15 ครับ',
      sound: [
        'Week 14 Fluency Audit: -ing, Weak "to", & Phrasal Linking',
        'suggest /səˈdʒest/ · manage /ˈmæn.ɪdʒ/ · figure out /ˈfɪɡ.ər aʊt/ · look forward to /lʊk ˈfɔː.wəd tə/',
        'ฟังเสียงต่อเนื่องในสปีดธรรมชาติ: `suggested backing it up`, `managed to figure it out`, `look forward to catching up`',
        'ทำ Shadowing บทอ่านวันนี้ 3 รอบ โดยเน้น particle ท้าย Phrasal Verb ให้ชัดและปล่อยคำว่า `to` กับ `-ing` ไหลเบาเป็นธรรมชาติ',
      ],
      l1: [
        'เมื่อต้องเล่าเรื่องยาว มักเผลอกลับไปพูด "suggested to check", "turn off it", "stopped to drink coffee" (ทั้งที่ตั้งใจบอกว่าเลิกดื่ม!)',
        'กริยา 2 เรื่องนี้ใช้บ่อยติดกันในประโยคเดียว เช่น "I reminded him to back up it" ❌ → ต้องเป็น "to back it up" ✅',
        'เช็ก 3 จุดเร็ว: 1) หลังบุพบท/enjoy/avoid เป็น -ing ไหม? 2) หลัง want/remind + คน มี to ไหม? 3) it/them อยู่ตรงกลาง Phrasal Verb ไหม?',
      ],
      vocab: [
        ['workshop', 'เวิร์กชอป / กิจกรรมอบรมเชิงปฏิบัติการ', '/ˈwɜːk.ʃɒp/', 'host a community workshop', 'จัดเวิร์กชอปชุมชน'],
        ['projector', 'เครื่องฉายภาพโปรเจกเตอร์', '/prəˈdʒek.tər/', 'set up the projector', 'ติดตั้งเครื่องฉายภาพ'],
        ['backup', 'แผน/ไฟล์สำรอง', '/ˈbæk.ʌp/', 'keep a backup plan', 'มีแผนสำรองไว้'],
        ['adapt', 'ปรับตัว', '/əˈdæpt/', 'adapt smoothly', 'ปรับตัวได้อย่างราบรื่น'],
        ['settle', 'จัดการให้เข้าที่ / สงบลง', '/ˈset.əl/', 'settle into a routine', 'เริ่มเข้าที่เข้าทาง'],
        ['smoothly', 'อย่างราบรื่น', '/ˈsmuːð.li/', 'turn out smoothly', 'ผลออกมาอย่างราบรื่น'],
        ['resilient', 'ยืดหยุ่นรับมือปัญหาได้ดี', '/rɪˈzɪl.i.ənt/', 'stay resilient', 'รับมือสถานการณ์ได้นิ่ง'],
      ],
      examples: [
        ['They suggested backing up every slide before plugging in the laptop.', 'พวกเขาแนะนำให้สำรองสไลด์ทั้งหมดก่อนเสียบปลั๊กโน้ตบุ๊ก'],
        ['Fortunately, our team managed to figure out the sound glitch early.', 'โชคดีที่ทีมของเราแก้ปัญหาเสียงขัดข้องได้สำเร็จตั้งแต่เนิ่นๆ'],
        ['Nobody wanted to put off the workshop, even after the projector broke down.', 'ไม่มีใครอยากเลื่อนเวิร์กชอปออกไป แม้ว่าโปรเจกเตอร์จะเสียก็ตาม'],
        ['Please remind everyone to turn off their phones before we begin.', 'ช่วยเตือนทุกคนให้ปิดเสียงโทรศัพท์ก่อนเราเริ่มด้วยนะ'],
      ],
      reading:
        'Preparing a Saturday community workshop always tests how well a team adapts under pressure. Twenty minutes before guests started arriving, the main projector broke down, and the spare remote seemed to have run out of batteries. Instead of putting off the opening session, Mei calmly reminded her team to stay focused and asked two volunteers to look into the backup cables. She had always avoided leaving slides on a single laptop, and she remembered backing them up on a cloud drive the night before. Soon, one volunteer plugged in a spare monitor, figured out the display settings, and got everything running. Even though they had to turn down extra music requests, the morning turned out smoothly, and everyone looked forward to catching up again next month.',
      listenQ: 'Why did Mei already have a safe copy of the workshop slides?',
      listenA: 'Because she remembered backing them up on a cloud drive the night before.',
      dictation: 'She avoided putting off the session and figured it out.',
      listenNote:
        'บทอ่านนี้รวม `avoid + V-ing`, `remember + V-ing` (ความทรงจำ), `remind someone to`, `put off`, `look into`, `run out of`, `plug in`, `figure out`, `turn down`, `turn out` และ `look forward to + V-ing`',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังเสียงบทสรุปจากบทอ่านแล้วเติมวลีที่หายไปให้ตรง: "Even though they had to _____ extra music requests, the morning _____ smoothly, and everyone looked forward to _____ again next month."',
          answer: 'turn down / turned out / catching up',
          choices: [
            'turn down / turned out / catching up',
            'turn off / turned over / catch up',
            'put off / figured out / catching up',
            'turn down / turned out / catch up',
          ],
          explanation:
            'จากบทอ่าน: turn down (ปฏิเสธคำขอ), turned out smoothly (ผลออกมาอย่างราบรื่น) และ look forward to + V-ing (catching up)',
          audio_text:
            'Even though they had to turn down extra music requests, the morning turned out smoothly, and everyone looked forward to catching up again next month.',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้จุดผิด 3 จุด: "I suggested to back up it early, yet he forgot turning off the heater and kept to complain about the noise."',
          answer:
            'I suggested backing it up early, yet he forgot to turn off the heater and kept complaining about the noise.',
          explanation:
            '1) suggest + V-ing + สรรพนามคั่นกลาง (backing it up) 2) ลืมทำหน้าที่ที่ต้องทำใช้ forgot to turn off 3) keep + V-ing (complaining)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Gerund/Infinitive และ Phrasal Verbs ถูกต้องทั้งประโยค?',
          answer: 'Thanks for reminding me to look into the report—I’ll avoid putting it off until Friday.',
          choices: [
            'Thanks for remind me look into the report—I’ll avoid to put off it until Friday.',
            'Thanks for reminding me to look into the report—I’ll avoid putting it off until Friday.',
            'Thanks to reminding me looking into the report—I’ll avoid putting off it.',
            'Thanks for reminding me to look up the report—I’ll decide putting it off.',
          ],
          explanation:
            'for + reminding, remind me to look into, avoid + putting + it + off ถูกต้องครบทุกกฎ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมรูปกริยาที่เหมาะสมของ smoke/drink หรือ work: After she stopped _____ late at night, her sleep improved dramatically.',
          answer: 'working',
          explanation: 'เลิกพฤติกรรมที่ทำเป็นประจำ ใช้ stop + V-ing (stopped working)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "พวกเราตั้งตารอที่จะได้คุยอัปเดตชีวิตกันหลังฉันผ่านเรื่องสัปดาห์ที่วุ่นๆ นี้ไปได้"',
          answer:
            'We look forward to catching up after I get over this busy week.',
          explanation: 'look forward to + catching up และ get over = ผ่านพ้นช่วงเวลาหนักๆ ไปได้',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์ทำงานหรือแก้ปัญหาเฉพาะหน้าในสัปดาห์นี้ (5–6 ประโยค) โดยผสมทั้ง `V-ing`, `to + V1`, คู่ความหมายต่าง (`remember/stop/try`), และ Phrasal Verbs ที่มีสรรพนามคั่นกลาง',
      writingSample:
        'Earlier this week, I finally stopped checking work messages during dinner because it made me feel restless. On Tuesday, my printer broke down right when I needed to print tickets, so I tried restarting it twice before figuring out that the tray was simply stuck. My friend reminded me to keep a backup copy on my phone, which turned out to be great advice. Now I look forward to enjoying calmer evenings and catching up with my family properly.',
      writingNote:
        'เช็ก 3 ข้อหลักของสัปดาห์: 1) กริยาและบุพบทตามด้วย -ing ครบ 2) verb + คน + to V1 ไม่ขาด to 3) สรรพนาม it/them อยู่ตรงกลาง Phrasal Verbs เสมอ',
      speakingTopic:
        'ทบทวนสัปดาห์ 14: เล่าเรื่องแก้ปัญหาเฉพาะหน้าให้จบใน 4/3/2 นาที',
      speakingBullets: [
        'พูดให้ครบสูตรผสม: สิ่งที่เลี่ยง/ชอบทำ (V-ing) → สิ่งที่คนแนะนำ (advised me to...) → ปัญหาและทางแก้ (broke down, ran out of, figured it out, turned out)',
        'ตั้งใจพูดรอบ 2 นาทีให้กระชับ ลื่นไหล และเสียงเชื่อม particle ชัดเจน',
      ],
    },
  ]
);
