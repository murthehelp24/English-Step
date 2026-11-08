import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 2: เล่าเรื่อง ตอบโต้ และเชื่อมความคิดในชีวิตประจำวัน';

export const WEEK11: ModuleSeed = createModule(
  {
    week: 11,
    phase: 2,
    phase_title: PHASE_TITLE,
    cefr_level: 'A2 → B1',
    title: 'Future Forms: เลือกใช้อนาคต 4 แบบอย่างเป็นธรรมชาติ',
    summary:
      'เลือกใช้อนาคต 4 รูปอย่างแม่นยำ: will (ตัดสินใจสดๆ/ช่วย/สัญญา), be going to (แผนที่คิดไว้/หลักฐานตรงหน้า), Present Continuous (นัดชัดเจน), Present Simple (ตารางเวลา), Time Clauses และระดับความมั่นใจ',
    focus: 'will vs be going to, Present Continuous & Simple for Future, Time Clauses, Certainty',
  },
  [
    {
      day: 71,
      title: 'ใช้อนาคตแบบฉับพลันด้วย will / \'ll: ตัดสินใจเดี๋ยวนั้น เสนอตัวช่วย และสัญญา',
      objective:
        'ใช้ will / \'ll / won\'t ในสถานการณ์ที่ถูกต้อง 4 แบบ ได้แก่ การตัดสินใจฉับพลันตอนพูด เสนอตัวช่วย คำสัญญา และการคาดการณ์ทั่วไป พร้อมออกเสียงลดรูป \'ll',
      explanation:
        'คนไทยมักถูกสอนให้ใช้ `will` กับทุกเรื่องในอนาคต แต่ในชีวิตจริงเจ้าของภาษาไม่ใช้ `will` กับแผนที่คิดไว้ล่วงหน้า! `will` มีไว้สำหรับ **4 โมเมนต์สำคัญนี้เท่านั้น**:\n1) **ตัดสินใจสดๆ วินาทีที่พูด (Spontaneous Decision)**: เพิ่งได้ยินเรื่องแล้วตัดสินใจเดี๋ยวนั้น เช่น `Oh, we\'re out of milk? Wait, I\'ll grab a bottle.`\n2) **เสนอตัวช่วย (Offering)**: `That box looks heavy—I\'ll carry it for you.`\n3) **ให้คำสัญญา / ยืนยัน (Promising)**: `I won\'t tell anyone, I promise!`\n4) **คาดการณ์จากความคิดเห็นส่วนตัว (General Prediction)**: `I think the traffic will get worse later.`\n**ห้ามลืมรูปย่อ `\'ll` และ `won\'t`**: ตอนพูดใช้รูปย่อ `I\'ll / we\'ll / she\'ll` เป็นหลัก และรูปปฏิเสธใช้ `won\'t` (`/wəʊnt/`) ไม่ใช่ `want` (`/wɒnt/`)!',
      sound: [
        'Contraction \'ll /l/ & Distinguishing won\'t /wəʊnt/ vs want /wɒnt/',
        'I\'ll /aɪl/ · we\'ll /wiːl/ · won\'t /wəʊnt/ · promise /ˈprɒm.ɪs/',
        'เวลาพูด "I\'ll get it" เสียงจะรวบไวเป็น "อายล-เก็ท-ทิท" (เสียง /l/ แตะเพดานปากเบาๆ แล้วเชื่อมเข้าคำถัดไป) ส่วน "won\'t" ต้องห่อปากสระโอ "/wəʊnt/" ไม่ให้ออกเสียงเหมือนคำว่า "want"',
        'ฝึกพูดสลับ 2 ประโยค: "I want to help" (/wɒnt/) vs "I won\'t forget" (/wəʊnt/) และ "I\'ll get the door / I\'ll pay for this"',
      ],
      l1: [
        'ใช้ "I will go to Japan next month" กับทริปที่จองตั๋วไว้ล่วงหน้าแล้ว หรือใช้ "I help you" (ลืม \'ll) เวลาเสนอตัวช่วยทันที',
        'คิดรวบยอดว่าคำว่า "จะ" ในภาษาไทยเท่ากับ will เสมอ และออกเสียง won\'t เหมือนคำว่า want ทำให้ความหมายกลับด้านเป็น "ต้องการ"',
        'เช็กอารมณ์ก่อนพูด: ถ้าเพิ่งคิดได้เดี๋ยวนี้ เสนอช่วย หรือให้สัญญา → ใช้ I\'ll / won\'t ทันที! ถ้าวางแผนไว้ก่อนแล้ว → เก็บไว้ใช้ going to ในบทพรุ่งนี้',
      ],
      vocab: [
        ['handle', 'จัดการ / รับมือ', '/ˈhæn.dəl/', 'I\'ll handle it', 'เดี๋ยวฉันจัดการเอง'],
        ['delivery', 'การส่งของ / พัสดุ', '/dɪˈlɪv.ər.i/', 'answer the delivery', 'ออกไปรับของที่มาส่ง'],
        ['napkin', 'กระดาษเช็ดปาก', '/ˈnæp.kɪn/', 'grab some napkins', 'หยิบกระดาษเช็ดปาก'],
        ['spill', 'หกเลอะเทอะ', '/spɪl/', 'wipe up a spill', 'เช็ดรอยน้ำหก'],
        ['promise', 'สัญญา', '/ˈprɒm.ɪs/', 'keep a promise', 'รักษาคำสัญญา'],
        ['guess', 'เดา / คาดว่า', '/ɡes/', 'I guess it\'ll clear up', 'ฉันเดาว่าฝนคงจะซาลง'],
      ],
      examples: [
        ['Did someone knock at the door? Don\'t get up—I\'ll answer it!', 'มีคนเคาะประตูเหรอ? ไม่ต้องลุกนะ เดี๋ยวฉันไปเปิดเอง!'],
        ['I will bring extra napkins from the kitchen right away.', 'เดี๋ยวฉันไปหยิบกระดาษเช็ดปากเพิ่มจากในครัวมาให้ทันทีเลย'],
        ['Trust me, I won\'t share your secret with anyone at work.', 'ไว้ใจฉันเถอะ ฉันจะไม่เอาความลับของคุณไปบอกใครที่ทำงานแน่นอน'],
        ['I think the café will stay quiet until around eleven o\'clock.', 'ฉันคิดว่าร้านกาแฟน่าน่าจะยังเงียบอยู่จนถึงประมาณสิบเอ็ดโมง'],
      ],
      reading:
        'On Thursday evening, Maya was setting up plates for a casual dinner when her friend Leo unexpectedly knocked twenty minutes early! Worse yet, while Leo was stepping inside with a box of pastries, his umbrella slipped and spilled rainwater across the hallway floor. Maya laughed warmly and reacted right away: "No worries at all! Put the box down—I\'ll grab a towel and wipe that up." Leo felt awkward and offered to help immediately: "I\'ll hold the umbrella outside so it doesn\'t drip more." Just then, Maya\'s phone buzzed with a message from their friend Ploy saying she was stuck in traffic. "Oh, she\'ll probably arrive twenty minutes late," Maya guessed calmly. "Don\'t worry, I won\'t start serving the hot soup until she gets here."',
      listenQ: 'Why did Leo offer to hold the umbrella outside?',
      listenA: 'So it would not drip more rainwater inside.',
      dictation: 'Don\'t get up—I\'ll answer the door right away.',
      listenNote: 'สังเกตเสียง "I\'ll" (/aɪl/) เชื่อมเข้าคำว่า answer เป็น "อาย-แลน-เซอะ" เร็วและเบากว่าคำว่า answer ที่เน้นหนัก',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคการเสนอตัวช่วยและรูปปฏิเสธที่ผิด 2 จุด: "Wait, your bag looks super heavy! I help you carry it, and I don\'t will drop anything."',
          answer: 'Wait, your bag looks super heavy! I\'ll help you carry it, and I won\'t drop anything.',
          explanation: 'เสนอตัวช่วยทันทีใช้ I\'ll help (รูปย่อ I will) และปฏิเสธของ will คือ won\'t (ไม่ใช้ don\'t will)',
        },
        {
          kind: 'choice',
          prompt: 'สถานการณ์ใดเหมาะกับการใช้ will / \'ll มากที่สุด?',
          answer: 'พนักงานเสิร์ฟเพิ่งทำซอสหก คุณเลยพูดทันทีว่า "ไม่ต้องห่วงครับ เดี๋ยวผมช่วยหยิบกระดาษเช็ดให้" → I\'ll grab some napkins.',
          choices: [
            'คุณจองตั๋วเครื่องบินไปเชียงใหม่ไว้ตั้งแต่เดือนที่แล้ว → I\'ll fly to Chiang Mai tomorrow.',
            'พนักงานเสิร์ฟเพิ่งทำซอสหก คุณเลยพูดทันทีว่า "ไม่ต้องห่วงครับ เดี๋ยวผมช่วยหยิบกระดาษเช็ดให้" → I\'ll grab some napkins.',
            'คุณมองเห็นเมฆดำทมึนเต็มฟ้าตรงหน้า → It will probably rained soon.',
            'รถไฟมีตารางออกเวลาแปดโมงตรงทุกวัน → The train will leaves at eight.',
          ],
          explanation: 'การตัดสินใจฉับพลันและเสนอตัวช่วยณ วินาทีที่พูดใช้ I\'ll + V1 ส่วนข้ออื่นมีรูปแบบเฉพาะที่ดีกว่า',
        },
        {
          kind: 'gap',
          prompt: 'เติมรูปย่อให้เป็นธรรมชาติ: Oh, you forgot your pen? Hold on, I _____ lend you mine.',
          answer: '\'ll',
          explanation: 'I\'ll (I will) ใช้เมื่อเสนอตัวช่วยเหลือทันทีตอนพูด',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ฉันสัญญาว่าฉันจะไม่ลืมส่งข้อความหาคุณคืนนี้"',
          answer: 'I promise I won\'t forget to text you tonight.',
          explanation: 'คำสัญญาเชิงปฏิเสธใช้ I promise I won\'t + V1',
        },
      ],
      writing:
        'เขียนสถานการณ์สั้นๆ 5 ประโยค เมื่อเกิดเรื่องปุบปับในบ้านหรือร้านอาหาร (เช่น ไฟดับ, ฝนตก, ทำน้ำหก, แบตหมด) แล้วทุกคนต่างพูดตัดสินใจช่วยกันเดี๋ยวนั้นด้วย `I\'ll...`, `We\'ll...` และ `I won\'t...`',
      writingSample:
        'Oh no, the kitchen sink is leaking water onto the floor! Wait right here—I\'ll turn off the water valve under the counter. Can you pass me that bucket? Yes, I\'ll grab it and put it right under the pipe. I\'ll also message our building technician right away, and I won\'t leave the house until he checks it.',
      writingNote: 'ตรวจสอบว่าทุกการตัดสินใจสดๆ และคำสัญญาใช้รูปย่อ \'ll / won\'t + V1 (ไม่ใช้ Present Simple ลอยๆ และไม่ใช้ don\'t will)',
      speakingTopic: 'ซ้อมตอบสนองฉับพลัน 5 สถานการณ์ด้วย I\'ll / won\'t (4 / 3 / 2 นาที)',
      speakingBullets: [
        'จำลอง 5 เหตุการณ์สด (โทรศัพท์ดัง, เพื่อนถือของหนัก, เพื่อนลืมกระเป๋าสตางค์, เมนูไม่มีภาษาไทย, สัญญาว่าจะเก็บความลับ) แล้วตอบด้วย I\'ll... ทันที',
        'ฝึกออกเสียง won\'t (/wəʊnt/) ปากกลมชัดไม่ให้ฟังเหมือน want (/wɒnt/)',
      ],
    },
    {
      day: 72,
      title: 'แผนที่คิดไว้ก่อนแล้ว & หลักฐานตรงหน้า (be going to) และเสียง "gonna" ในการฟัง',
      objective:
        'ใช้ be going to + V1 กับแผน/ความตั้งใจที่คิดมาก่อนหน้า และสิ่งที่เห็นหลักฐานชัดอยู่ตรงหน้า พร้อมฟังเสียงลดรูป gonna ออกแต่เขียนเป็น going to ได้ถูกต้อง',
      explanation:
        'ต่างจาก `will` ที่เพิ่งนึกได้ตอนพูด โครงสร้าง **`am / is / are + going to + V1`** ใช้กับ 2 สถานการณ์นี้ครับ:\n1) **แผนหรือความตั้งใจที่คิดไว้ล่วงหน้าแล้ว (Prior Intention)**: เช่น `Next month, I**\'m going to save** more money.` (คิดเตรียมแผนมาก่อนที่จะพูดแล้ว)\n2) **คาดการณ์จากหลักฐานที่เห็นอยู่ตรงหน้าชัดๆ (Present Evidence)**: เช่น `Look at those dark clouds! It**\'s going to rain**.` (มองเห็นเมฆดำตรงหน้าแล้ว) หรือ `Watch out! That cup **is going to fall**!`\n**เรื่องเสียงที่ต้องรู้**: เวลาเจ้าของภาษาพูดเร็วในชีวิตจริง `going to` มักถูกลดรูปเป็น **`"gonna"` (`/ˈɡɒn.ə/`)** เช่น `"I\'m gonna buy tea"` แต่กฎเหล็กในการเขียนและพูดให้ถูกไวยากรณ์คือ **ห้ามลืม `am / is / are` ข้างหน้า** และเวลาเขียนสื่อสารจริงให้เขียนเต็มว่า **`going to`** เสมอ!',
      sound: [
        'Listening to gonna /ˈɡɒn.ə/ vs Clear going to',
        'going to /ˈɡəʊ.ɪŋ tə/ (ชัด) · gonna /ˈɡɒn.ə/ (พูดเร็ว) · clouds /klaʊdz/ · renovate /ˈren.ə.veɪt/',
        'เวลาฟังฝรั่งคุยกัน: "What are you going to do?" จะได้ยินเร็วมากเป็น "Wha-tər-yuh-gun-nuh-do?" (/ˈwɒt.ə.jə ˈɡɒn.ə duː/) แต่ห้ามพูด *"I gonna"* แบบไม่มี \'m เด็ดขาด—ต้องมี **"I\'m gonna"** เสมอ!',
        'ฝึกฟัง-พูด 2 จังหวะ: พูดแบบชัด ("I am GOING to start") แล้วสลับพูดแบบไหลลื่น ("I\'m gən-nə START") โดยเสียง \'m ห้ามหาย',
      ],
      l1: [
        'ลืม verb to be หน้า going to ("I going to visit Pattaya" หรือ "I gonna go home") หรือเผลอเขียน "gonna to" ซ้อนคำว่า to เข้าไปอีก',
        'ได้ยินคำว่า gonna จากหนังและเพลงเลยหยิบมาใช้โดยตัด am/is/are ออก และไม่รู้ว่าหลัง gonna มีความหมายว่า going + to อยู่แล้ว',
        'จำสมการเดียวจบ: ประธาน + [am / is / are] + going to + V1 เสมอ! ถ้าพูดเร็วเป็น gonna ก็ต้องยังออกเสียง \'m / \'s / \'re ข้างหน้าอยู่ดี',
      ],
      vocab: [
        ['intention', 'ความตั้งใจ / แผนที่คิดไว้', '/ɪnˈten.ʃən/', 'clear intention', 'ความตั้งใจที่ชัดเจน'],
        ['evidence', 'หลักฐาน / สัญญาณที่เห็นชัด', '/ˈev.ɪ.dəns/', 'clear evidence', 'หลักฐานชัดเจน'],
        ['renovate', 'ปรับปรุงซ่อมแซมสถานที่', '/ˈren.ə.veɪt/', 'renovate the balcony', 'ปรับปรุงระเบียงห้อง'],
        ['cloudy', 'มีเมฆมาก', '/ˈklaʊ.di/', 'get cloudy fast', 'ฟ้าครึ้มเมฆมากอย่างรวดเร็ว'],
        ['savings', 'เงินออม', '/ˈseɪ.vɪŋz/', 'build my savings', 'สร้างเงินออมของฉัน'],
        ['slip', 'ลื่น / หลุดมือ', '/slɪp/', 'about to slip', 'กำลังจะลื่นหลุด'],
      ],
      examples: [
        ['Look at those dark clouds over the river—it\'s going to pour any minute!', 'ดูเมฆดำเหนือแม่น้ำพวกนั้นสิ ฝนกำลังจะเทลงมาในอีกไม่กี่นาทีนี้แน่!'],
        ['Next month, I am going to start cooking dinner three nights a week.', 'เดือนหน้า ฉันตั้งใจจะเริ่มทำอาหารเย็นกินเองสัปดาห์ละสามคืน'],
        ['Watch out! That tall stack of plates is going to fall off the counter.', 'ระวัง! กองจานสูงตั้งนั้นกำลังจะหล่นลงมาจากเคาน์เตอร์แล้ว'],
        ['Are you going to renovate your bedroom during the long holiday?', 'ช่วงวันหยุดยาวคุณวางแผนจะปรับปรุงห้องนอนใช่ไหม?'],
      ],
      reading:
        'On Saturday morning, Ben and Pim are walking slowly through Benjakitti Park with iced coffees in hand. Suddenly, Ben points up at the sky and says, "Look at those heavy grey clouds moving fast—it\'s definitely going to rain before noon!" Pim nods and replies, "Yes, let\'s walk faster toward the covered bridge. By the way, what are you going to do this afternoon if we stay indoors?" Ben smiles because he already planned his weekend. "I\'m going to clean out my closet and donate old shirts I never wear," he answers. "After that, I\'m going to paint the wooden shelf on my balcony." Pim laughs, "Nice plan! Meanwhile, I\'m going to bake banana bread with my sister—we already bought ripe bananas yesterday."',
      listenQ: 'What two things is Ben going to do indoors this afternoon?',
      listenA: 'He is going to clean out his closet (donate old shirts) and paint the wooden shelf on his balcony.',
      dictation: 'Look at those dark clouds—it is going to rain soon.',
      listenNote: 'สังเกตคำว่า "it\'s going to" ที่ผู้พูดเร็วอาจเชื่อมเป็น "its-gun-nə-rain" ให้ฝึกจับเสียง /s/ ของ it\'s กับ /ɡɒn.ə/ ให้ติดหู',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ใช้ gonna/going to ผิดไวยากรณ์ 2 จุด: "Next year I gonna to learn how to swim, and my brother going to buy a bike."',
          answer: 'Next year I am going to learn how to swim, and my brother is going to buy a bike.',
          explanation: '1) ในงานเขียน/ไวยากรณ์มาตรฐานใช้ am going to (ไม่เขียน gonna to) 2) ห้ามลืม verb to be (is) หน้า going to ของ my brother',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ be going to ได้ถูกต้องตรงตามหลัก "มีหลักฐานชัดอยู่ตรงหน้า"?',
          answer: 'Slow down! That cyclist isn\'t looking—he\'s going to bump into the cone!',
          choices: [
            'Slow down! That cyclist isn\'t looking—he\'s going to bump into the cone!',
            'Wait, the doorbell just rang—I going to open it.',
            'Our coffee machine broke, so I\'m gonna to buy a new one.',
            'I\'m thirsty—I\'m going to get some water right now just thinking of it.',
          ],
          explanation: 'เห็นคนปั่นจักรยานไม่มองทางอยู่ตรงหน้าเป็นการคาดการณ์จากหลักฐานจริงตรงหน้า จึงใช้ he\'s going to bump into...',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบประโยคถามแผนที่คิดไว้: What _____ (she / going to) cook for her parents\' anniversary?',
          answer: 'is she going to',
          explanation: 'ประโยคคำถามของ be going to ย้าย is มาหน้าประธาน she เป็น What is she going to...?',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ระวังนะ แก้วใบนั้นกำลังจะตกจากโต๊ะแล้ว!"',
          answer: 'Be careful! That glass is going to fall off the table!',
          explanation: 'เห็นหลักฐานตรงหน้าว่าแก้วกำลังจะหล่น ใช้ is going to fall off...',
        },
      ],
      writing:
        'เขียนเล่า "แผนการที่คุณคิดตั้งใจไว้แล้วสำหรับเดือนหน้าหรือวันหยุดนี้" 5 ประโยค โดยใช้ `am/is/are going to + V1` อย่างน้อย 4 ประโยค และใส่ 1 ประโยคคาดการณ์จากหลักฐานที่สมมุติว่าเห็นตรงหน้า',
      writingSample:
        'This weekend, I have several personal goals ready. On Saturday morning, I\'m going to organize all my old books and give away half of them. Then my cousin and I are going to try a new bicycle trail near the river. Look at the bright morning sunshine—it\'s going to be a warm afternoon, so we\'re going to bring hats and cold water. Finally, on Sunday night, I\'m going to plan my meals for the whole week.',
      writingNote: 'ตรวจสอบทุกจุดว่ามี am/is/are หน้า going to และกริยาหลัง going to เป็น V1 ไม่ผันรูป',
      speakingTopic: 'เล่าแผนที่ตั้งใจไว้แล้ว + สิ่งที่สังเกตเห็นรอบตัว (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดถึง 4 แผนที่คุณคิดเตรียมไว้แล้วในสัปดาห์/เดือนนี้ด้วย I\'m going to... / We\'re going to...',
        'ฝึกพูดคู่ให้ชินหู: พูดประโยคชัดๆ 1 รอบ (am going to) แล้วพูดจังหวะธรรมชาติ 1 รอบ (I\'m gən-nə) โดยไม่ทิ้งเสียง \'m / \'s / \'re',
      ],
    },
    {
      day: 73,
      title: 'นัดหมายคนอื่น (Present Continuous) vs ตารางเวลารถ-เครื่องบิน (Present Simple)',
      objective:
        'แยกใช้อนาคต 2 รูปที่เจอบ่อยในชีวิตประจำวัน: Present Continuous สำหรับนัดหมายส่วนตัวที่ตกลงเวลาแล้ว vs Present Simple สำหรับตารางเวลาสาธารณะ/กำหนดการ',
      explanation:
        'มาดูอนาคตอีก 2 รูปที่ทำให้ภาษาอังกฤษของคุณดูโปรระดับ B1 ทันที!\n1) **Present Continuous (`am/is/are + V-ing` + เวลาอนาคต)**: ใช้กับ **นัดหมายส่วนตัวที่ล็อกเวลา/สถานที่หรือจองตั๋วเรียบร้อยแล้ว** (Social / Personal Arrangements — คนอื่นรู้ด้วย!) เช่น `I**\'m meeting** Joy at 6 p.m. tonight.` หรือ `We**\'re flying** to Chiang Mai on Friday.`\n2) **Present Simple (`V1 / V1+s`)**: ใช้กับ **ตารางเวลาทางการที่ไม่ขึ้นกับความอยากของเรา (Timetables & Schedules)** เช่น รถไฟ เครื่องบิน พิพิธภัณฑ์ คลาสเรียน หนังเข้าโรง! เช่น `The flight **leaves** at 8:15 a.m.` หรือ `The museum **opens** at nine tomorrow.`\nเทียบชัดๆ ในประโยคเดียว: `I**\'m taking** the morning train tomorrow. It **leaves** at seven thirty!` (ฉันนัด/วางแผนจะขึ้น = Continuous | รถไฟออกตามตาราง 07:30 = Simple!)',
      sound: [
        'Clear Final -s on Schedule Verbs & Time Stress',
        'leaves /liːvz/ · arrives /əˈraɪvz/ · opens /ˈəʊ.pənz/ · closes /ˈkləʊ.zɪz/',
        'ระวังเสียงท้ายคำกริยาตารางเวลาเอกพจน์! "The flight leaves at eight" → เสียง /z/ ท้าย leaves เชื่อมเข้า at เป็น "ลีฟ-แซท-เอท" ห้ามพูด "ลีฟ-แอท" แบบไม่มี /z/ เด็ดขาด!',
        'ฝึกพูดประโยคคู่: "I\'m meeting Joy at SIX. / Her train arrives at FIVE thirty." โดยเน้นเสียงเวลาและออกเสียง /z/ ท้ายกริยาเอกพจน์ชัด',
      ],
      l1: [
        'พูดว่า "Tomorrow I meet Joy at 6" (ใช้ Simple กับนัดส่วนตัว) หรือพูดว่า "The flight is leaving at 8 every morning" / "The plane will leaves at 8"',
        'ไม่คุ้นว่า Present Simple ก็บอกอนาคตได้ (เรื่องตารางรถ/เครื่องบิน) และไม่คุ้นว่า Present Continuous ต้องใส่มารวมกับคำบอกเวลาอนาคตสำหรับนัดส่วนตัว',
        'จำคู่ตรงข้ามง่ายๆ: เรื่องคนนัดกันหรือจองไว้แล้ว → I\'m + V-ing | เรื่องตารางรถ/เรือ/เครื่องบิน/ร้านเปิดปิด → ประธานเอกพจน์ + V1 เติม -s!',
      ],
      vocab: [
        ['itinerary', 'แผนการเดินทางละเอียด', '/aɪˈtɪn.ər.ər.i/', 'follow the itinerary', 'ทำตามแผนการเดินทาง'],
        ['departure', 'เวลาออกเดินทาง', '/dɪˈpɑː.tʃər/', 'departure time', 'เวลาออกเดินทาง'],
        ['platform', 'ชานชาลารถไฟ', '/ˈplæt.fɔːm/', 'board at platform four', 'ขึ้นรถไฟที่ชานชาลา 4'],
        ['exhibition', 'นิทรรศการ', '/ˌek.sɪˈbɪʃ.ən/', 'visit an art exhibition', 'เข้าชมนิทรรศการศิลปะ'],
        ['check-in', 'การลงทะเบียนเข้าพัก/ขึ้นเครื่อง', '/ˈtʃek.ɪn/', 'online check-in', 'เช็กอินออนไลน์'],
        ['shuttle', 'รถรับส่งประจำทางระยะสั้น', '/ˈʃʌt.əl/', 'airport shuttle', 'รถรับส่งสนามบิน'],
      ],
      examples: [
        ['I\'m meeting Joy at a riverside café at six tomorrow evening.', 'พรุ่งนี้หกโมงเย็นฉันมีนัดเจอจอยที่ร้านกาแฟริมแม่น้ำ'],
        ['Our morning flight leaves Bangkok at eight fifteen and lands in Phuket before ten.', 'เที่ยวบินตอนเช้าของเราออกจากกรุงเทพฯ แปดโมงสิบห้าและลงจอดที่ภูเก็ตก่อนสิบโมง'],
        ['What time does the pottery exhibition open on Sunday?', 'วันอาทิตย์นิทรรศการเครื่องปั้นดินเผาเปิดกี่โมง?'],
        ['We\'re checking into our guesthouse at two, because the airport shuttle arrives around one thirty.', 'พวกเราจะเช็กอินเข้าเกสต์เฮาส์ตอนบ่ายสอง เพราะรถรับส่งสนามบินมาถึงประมาณบ่ายโมงครึ่ง'],
      ],
      reading:
        'Next Saturday, Namo is taking a quick weekend trip to Ayutthaya with his cousin May. Because they both love smooth schedules, Namo already sent the full itinerary yesterday. Their morning train leaves Hua Lamphong Station at seven twenty sharp and arrives in Ayutthaya at eight forty-five. At nine thirty, they are meeting a local guide near the bicycle shop across from the station. According to the map, the historical museum opens at nine and closes at four thirty, so they have plenty of time to explore calmly. In the evening, Namo isn\'t cooking or rushing back; instead, they are having dinner at a wooden riverside restaurant at six thirty. Their return train departs at eight ten, getting them back home before bedtime.',
      listenQ: 'What time does the morning train leave Hua Lamphong Station?',
      listenA: 'At seven twenty sharp.',
      dictation: 'Our morning train leaves at seven twenty and arrives before nine.',
      listenNote: 'ฝึกหูจับเสียง /z/ ท้ายคำว่า leaves และ arrives รวมถึงเสียงเชื่อม "arrives before" ให้แยกเอกพจน์ตามตารางเวลาออกชัดเจน',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคนัดหมายส่วนตัวและตารางเวลาที่สลับ Tense ผิด 2 จุด: "Tomorrow I meet my dentist at 10, and the clinic is opening at nine every day."',
          answer: 'Tomorrow I\'m meeting my dentist at 10, and the clinic opens at nine every day.',
          explanation: '1) นัดหมายส่วนตัวที่ล็อกเวลาแล้วใช้ I\'m meeting (Present Continuous) 2) เวลาเปิดทำการของคลินิกเป็นตารางเวลา ใช้ opens (Present Simple)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Future Forms ทั้งสองแบบ (นัดส่วนตัว + ตารางเวลา) ได้ถูกต้อง?',
          answer: 'We\'re flying to Chiang Mai on Friday—our plane departs at 7:40 a.m.',
          choices: [
            'We fly to Chiang Mai on Friday—our plane is departing at 7:40 a.m.',
            'We\'re flying to Chiang Mai on Friday—our plane departs at 7:40 a.m.',
            'We\'re fly to Chiang Mai on Friday—our plane depart at 7:40 a.m.',
            'We will flying to Chiang Mai on Friday—our plane departs at 7:40 a.m.',
          ],
          explanation: 'จองตั๋วเดินทางส่วนตัวแล้วใช้ We\'re flying ส่วนตารางเวลาบินใช้ departs (เติม s)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำกริยาตารางเวลาให้ถูกต้อง: Hurry up! The last ferry back to the pier _____ (leave) in fifteen minutes.',
          answer: 'leaves',
          explanation: 'ตารางเวลาเรือข้ามฟากใช้ Present Simple และ The last ferry เป็นเอกพจน์ จึงเติม -s เป็น leaves',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "คืนพรุ่งนี้ฉันมีนัดกินข้าวกับเพื่อนตอนหนึ่งทุ่ม และรถไฟฟ้าเที่ยวสุดท้ายออกตอนเที่ยงคืน"',
          answer: 'Tomorrow night I\'m having dinner with a friend at seven, and the last train leaves at midnight.',
          explanation: 'นัดส่วนตัวใช้ I\'m having dinner ส่วนตารางรถไฟฟ้าออกใช้ leaves',
        },
      ],
      writing:
        'เขียน "แผนเดินทาง 1 วันในสุดสัปดาห์หน้า" 5 ประโยค โดยผสมทั้งนัดหมายส่วนตัว (`I\'m meeting / We\'re taking / We\'re having...`) และตารางเวลาสาธารณะ (`The bus leaves... / The café opens... / The museum closes...`) ให้ครบทั้ง 2 แบบ',
      writingSample:
        'This Sunday, I\'m taking a short day trip to Bang Saen with two friends. Our morning van leaves the terminal at eight o\'clock and arrives near the beach around nine thirty. At eleven, we\'re meeting my aunt at a small seafood stall by the pier. The aquarium opens at nine and closes at four, so we\'re visiting it right after lunch. Finally, our return van departs at six in the evening.',
      writingNote: 'เช็กว่าคำกริยาตารางเวลาเอกพจน์ทุกตัว (train/bus/van/flight/museum/café) เติม -s/-es แล้ว (leaves, arrives, opens, closes, departs)',
      speakingTopic: 'เล่าแพลนทริปสุดสัปดาห์ผสม "นัดส่วนตัว + ตารางเดินทาง" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'แยกปากให้ไวระหว่าง "ฉันนัดใคร/กำลังจะไปทำอะไร" (I\'m + V-ing) กับ "รถ/เครื่องบิน/ร้านเปิดปิดกี่โมง" (It leaves / opens at...)',
        'ออกเสียง /z/ ท้าย leaves, arrives, opens, closes ให้ชัดแม้พูดเร็วในรอบ 2 นาที',
      ],
    },
    {
      day: 74,
      title: 'กฎเหล็ก Time Clauses: หลัง when, as soon as, until, before, after ห้ามใช้ will!',
      objective:
        'เชื่อมประโยคอนาคตด้วยคำบอกเวลา (when, as soon as, until, before, after) ได้ถูกต้องโดยใช้ Present Simple ในอนุประโยคเวลาแทน will',
      explanation:
        'นี่คือข้อผิดพลาดระดับคลาสสิกที่คนเรียนนานหลายปีก็ยังพลาดครับ! เมื่อพูดถึงอนาคตที่มี 2 ท่อนเชื่อมด้วยคำบอกเวลา **`when` (เมื่อ), `as soon as` (ทันทีที่), `until` (จนกระทั่ง), `before` (ก่อนที่), `after` (หลังจาก)** กฎเหล็กของภาษาอังกฤษคือ:\n- **ท่อนหลัก (Main Clause)** ใช้ **`will / \'ll` หรือ `be going to`** (หรือคำสั่ง)\n- **ท่อนคำบอกเวลา (หลัง `when / as soon as / until / before / after`)** **ห้ามใช้ `will` เด็ดขาด! ต้องใช้ Present Simple แทน!**\nดูตัวอย่างเทียบกันชัดๆ:\n❌ *I\'ll text you **when I will arrive**.* → ✅ `I\'ll text you **when I arrive**.`\n❌ *Please wait here **until she will come back**.* → ✅ `Please wait here **until she comes back**.`\n✅ `**As soon as** the rain **stops**, we\'ll head to the station.` (อย่าลืมเติม `-s` ถ้าประธานหลังคำเชื่อมเป็นเอกพจน์อย่าง `the rain / she / he` นะครับ!)',
      sound: [
        'Smooth Linking in as soon as /əz ˈsuːn əz/',
        'as soon as /əz ˈsuːn əz/ · until /ənˈtɪl/ · land /lænd/ · notify /ˈnəʊ.tɪ.faɪ/',
        '"as soon as I arrive" → เชื่อมเสียงต่อเนื่องทุกคำเป็น "แอซ-ซู-นะ-ซาย-อะ-ไรฟ์" โดยลดเสียงคำว่า as ทั้งสองตัวเหลือแค่ /əz/',
        'ฝึกพูดท่อนคำบอกเวลา 4 ชุดให้คล่องปากโดยไม่มีคำว่า will หลุดเข้าไป: "when I get home / as soon as it stops / until she calls / before we leave"',
      ],
      l1: [
        'พูดว่า "When I will reach home, I will call you" หรือ "I\'ll stay here until the bus will come"',
        'คิดแปลตรงตัวจากภาษาไทยว่าทั้งสองฝั่งเป็นเรื่องอนาคตเลยใส่คำว่า "จะ (will)" ทั้งหน้าและหลังคำเชื่อม',
        'จำกฎภาพจำ: คำเชื่อมเวลา 5 ตัว (when, as soon as, until, before, after) เป็น "เขตห้ามเข้าของ will" — หลังคำพวกนี้ให้ใช้ Present Simple ทันที!',
      ],
      vocab: [
        ['as soon as', 'ทันทีที่...', '/əz ˈsuːn əz/', 'text you as soon as I land', 'ส่งข้อความหาทันทีที่เครื่องลงจอด'],
        ['until', 'จนกระทั่ง', '/ənˈtɪl/', 'wait until it clears up', 'รอจนกว่าอากาศจะปลอดโปร่ง'],
        ['confirm', 'ยืนยัน', '/kənˈfɜːm/', 'confirm the booking', 'ยืนยันการจอง'],
        ['reach', 'ไปถึง / เอื้อมถึง', '/riːtʃ/', 'reach the terminal', 'ไปถึงอาคารผู้โดยสาร'],
        ['notify', 'แจ้งเตือน / แจ้งให้ทราบ', '/ˈnəʊ.tɪ.faɪ/', 'notify the team', 'แจ้งให้ทีมทราบ'],
        ['set off', 'ออกเดินทาง', '/set ɒf/', 'set off right after breakfast', 'ออกเดินทางทันทีหลังมื้อเช้า'],
      ],
      examples: [
        ['I\'ll send you a message as soon as my flight lands in Chiang Rai.', 'ฉันจะส่งข้อความหาคุณทันทีที่เครื่องบินลงจอดที่เชียงราย'],
        ['Please don\'t lock the front gate until everyone gets inside.', 'กรุณาอย่าเพิ่งล็อกประตูรั้วหน้าบ้านจนกว่าทุกคนจะเข้ามาข้างใน'],
        ['After she finishes her final call, we\'ll walk over to the noodle shop.', 'หลังจากเธอคุยสายสุดท้ายเสร็จ พวกเราจะเดินไปร้านก๋วยเตี๋ยวกัน'],
        ['Let\'s double-check every passport before we set off for the airport.', 'มาตรวจพาสปอร์ตทุกเล่มให้ชัวร์ก่อนเราจะออกเดินทางไปสนามบินกันเถอะ'],
      ],
      reading:
        'Airport pickups always run smoother when everyone communicates clearly. Before Auntie Da leaves home for Suvarnabhumi Airport, she checks the live arrival screen one last time. Her niece Mint is flying back from Singapore tonight, and she promised to message right away. "I\'ll call you as soon as I pick up my suitcase from the belt," Mint wrote earlier. While waiting at the arrival gate, Auntie Da reads a book and decides she won\'t order dinner until Mint steps out of customs. After Mint clears baggage claim, they are going to grab warm boat noodles near the highway on their way home. When they finally reach the house around ten, Mint will unpack a small box of tea and share stories about her week.',
      listenQ: 'When will Mint call Auntie Da at the airport?',
      listenA: 'As soon as she picks up her suitcase from the belt.',
      dictation: 'I will call you as soon as I pick up my suitcase.',
      listenNote: 'สังเกตเสียงเชื่อม "as soon as I" (/əz ˈsuːn əz aɪ/) และ "pick up my" (/pɪk ʌp maɪ/) เพื่อความลื่นไหลของจังหวะประโยคยาว',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่เผลอใส่ will หลังคำเชื่อมเวลา 2 จุด: "When he will get to the station, he\'ll wait until the rain will stop."',
          answer: 'When he gets to the station, he\'ll wait until the rain stops.',
          explanation: 'หลัง When และ until ห้ามใช้ will และประธาน he / the rain เป็นเอกพจน์ จึงต้องผันกริยาเติม -s เป็น gets และ stops',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Future Time Clauses ได้ถูกต้องสมบูรณ์ 100%?',
          answer: 'As soon as the driver arrives, we\'ll load the bags into the trunk.',
          choices: [
            'As soon as the driver will arrive, we\'ll load the bags into the trunk.',
            'As soon as the driver arrives, we\'ll load the bags into the trunk.',
            'Before we will set off, let\'s check the air pressure in the tires.',
            'After I\'ll finish dinner, I wash the dishes immediately.',
          ],
          explanation: 'อนุประโยคหลัง As soon as ต้องใช้ Present Simple (the driver arrives) ส่วนท่อนหลักใช้ \'ll + V1',
        },
        {
          kind: 'gap',
          prompt: 'เติมรูปกริยาที่ถูกต้อง: Don\'t worry, I\'ll keep the porch light on until you _____ (reach) home safely.',
          answer: 'reach',
          explanation: 'หลัง until ใช้ Present Simple และประธานคือ you จึงใช้ reach (ไม่ใส่ will)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ทันทีที่ฉันไปถึงออฟฟิศ ฉันจะส่งไฟล์ให้คุณ"',
          answer: 'As soon as I get to the office, I\'ll send you the file.',
          explanation: 'หลัง As soon as ใช้ Present Simple (I get to the office) และท่อนหลักใช้ I\'ll send',
        },
      ],
      writing:
        'เขียน "ข้อตกลงหรือแผนขั้นตอน" ในวันเดินทางหรือวันทำงานยุ่งๆ 5 ประโยค โดยใช้คำเชื่อมครบทั้ง 5 คำ (`when`, `as soon as`, `until`, `before`, `after`) และเช็กว่าไม่มี `will` อยู่หลังคำเชื่อมเหล่านี้เลยแม้แต่ตัวเดียว',
      writingSample:
        'Tomorrow is going to be a busy moving day, so let\'s follow a clear plan. Before the movers arrive at eight, I\'ll pack all the small electronics in one box. When the truck reaches our new apartment, my brother will help check the elevator key. We won\'t open the kitchen boxes until we finish setting up the beds. As soon as everything is inside the rooms, I\'ll order hot pizza for everyone. After we eat lunch together, we\'ll start organizing the living room.',
      writingNote: 'ขีดเส้นใต้หลังคำว่า before, when, until, as soon as, after ทุกตัวแล้วตรวจว่ากริยาเป็น Present Simple (V1 / V1+s) ทั้งหมด',
      speakingTopic: 'วางแผนขั้นตอนแบบเชื่อมเวลา 5 ขั้นตอน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าแผนพรุ่งนี้หรือแผนรับแขกโดยบังคับตัวเองใส่ when, as soon as, until, before, after ให้ครบทั้ง 5 คำ',
        'เบรกปากให้ทันทุกครั้งหลังคำเชื่อม 5 คำนี้—ห้ามหลุดพูด will หลังคำเชื่อม แต่ไปใส่ \'ll ที่อีกท่อนหนึ่งแทน!',
      ],
    },
    {
      day: 75,
      title: 'กะระดับความมั่นใจเรื่องอนาคต (definitely, probably, might, may not, unlikely)',
      objective:
        'บอกระดับความแน่นอนของเรื่องในอนาคตตั้งแต่ชัวร์ 100% จนถึงไม่น่าจะเกิดขึ้นด้วย definitely, probably, might/may (not) และ unlikely พร้อมวางตำแหน่งคำให้ถูกต้อง',
      explanation:
        'ในชีวิตจริงเราไม่ได้มั่นใจ 100% ทุกเรื่องครับ การพูดแค่ `will` ตลอดทำให้ฟังดูแข็งหรือมั่นใจเกินเหตุ ลองใช้ **สเกลความมั่นใจ 4 ระดับ** นี้:\n1) **มั่นใจมาก (~95–100%)**: `I**\'ll definitely** join you!` / `I **definitely won\'t** forget.` (**ระวังตำแหน่ง!** `definitely / probably` วาง **หลัง `will`** แต่ **หน้า `won\'t`**!)\n2) **น่าจะเกิด (~75%)**: `She**\'ll probably** take a taxi.` / `She **probably won\'t** drive tonight.`\n3) **อาจจะเกิดหรือไม่เกิด (~50%)**: ใช้ **`might` หรือ `may` + V1** (ไม่ต้องเติม `to` และใช้ได้กับทุกประธาน) เช่น `It **might rain** later.` / `We **may not** have enough chairs.`\n4) **ไม่น่าจะเกิด (~15–20%)**: `The price is **unlikely to** drop this month.` (หรือ `I don\'t think it\'ll happen.`)',
      sound: [
        'Word Stress & Reductions in Certainty Markers',
        'definitely /ˈdef.ɪ.nət.li/ · probably /ˈprɒb.ə.bli/ · unlikely /ʌnˈlaɪ.kli/ · forecast /ˈfɔː.kɑːst/',
        'คำว่า "definitely" อ่าน 4 พยางค์ชัดตรง DEF- (เดฟ-ฟิ-เนิท-ลี่) และ "probably" 3 พยางค์ (พรอบ-เบอะ-บลี่ ไม่ใช่ "พรอบ-แบ๊บ-ลี่") ส่วน "might not" ห้ามพูดห้วน—ออกเสียง /t/ ของ might เบาๆ แล้วชัดคำว่า not',
        'ฝึกพูดตำแหน่งสลับ 2 คู่: "I\'ll DEF-i-nite-ly go" vs "I DEF-i-nite-ly won\'t go" และ "It might rain" vs "It may not rain"',
      ],
      l1: [
        'วางตำแหน่งผิด: "I won\'t definitely go" (ความหมายเพี้ยน!) หรือ "Maybe I will going" หรือใส่ to หลัง might: "It might to rain"',
        'ไม่คุ้นการย้ายคำวิเศษณ์ไปหน้า won\'t และเผลอใช้ maybe ทุกครั้งแทน might/may/probably',
        'ท่องตำแหน่งให้ขาด: บอกเล่า → will + [definitely/probably] + V1 | ปฏิเสธ → [definitely/probably] + won\'t + V1 | และหลัง might/may ห้ามใส่ to!',
      ],
      vocab: [
        ['definitely', 'อย่างแน่นอน', '/ˈdef.ɪ.nət.li/', 'definitely join you', 'ไปร่วมด้วยแน่นอน'],
        ['probably', 'น่าจะ / คงจะ', '/ˈprɒb.ə.bli/', 'probably stay indoors', 'น่าจะอยู่ข้างในร่ม'],
        ['unlikely', 'ไม่น่าเป็นไปได้', '/ʌnˈlaɪ.kli/', 'unlikely to finish early', 'ไม่น่าจะเสร็จเร็ว'],
        ['forecast', 'พยากรณ์อากาศ / การคาดการณ์', '/ˈfɔː.kɑːst/', 'check the weather forecast', 'เช็กพยากรณ์อากาศ'],
        ['backup', 'แผนสำรอง', '/ˈbæk.ʌp/', 'have a backup plan', 'มีแผนสำรอง'],
        ['flexible', 'ยืดหยุ่นได้', '/ˈflek.sɪ.bəl/', 'stay flexible', 'ปรับเปลี่ยนได้อย่างยืดหยุ่น'],
      ],
      examples: [
        ['We\'ll definitely bring extra water because the trail gets sunny.', 'พวกเราจะเอาน้ำดื่มไปเผื่อแน่นอนเพราะเส้นทางเดินค่อนข้างแดดจัด'],
        ['Traffic looks unpredictable today, so I might take the skytrain instead.', 'การจราจรวันนี้ดูคาดเดายาก ฉันอาจจะขึ้นรถไฟฟ้าแทน'],
        ['Look at the forecast—our outdoor picnic probably won\'t stay dry after two.', 'ดูพยากรณ์อากาศสิ ปิกนิกกลางแจ้งของเราคงจะไม่แห้งรอดฝนหลังบ่ายสองแน่'],
        ['He is unlikely to arrive before noon because his morning meeting runs late.', 'เขาไม่น่าจะมาถึงก่อนเที่ยงเพราะประชุมตอนเช้าเลิกช้า'],
      ],
      reading:
        'Planning an outdoor weekend trip during Thailand\'s rainy season requires staying flexible. On Friday evening, Noah and Mint check the weather forecast for Khao Yai. "Well, the morning looks bright, so we\'ll probably enjoy a cool hike around seven," Noah says cheerfully. Mint zooms in on the afternoon radar map and adds, "True, though heavy showers might develop after three o\'clock, so an outdoor picnic may not work later in the day." Noah agrees and suggests a smart backup plan: "Fair enough! We\'ll definitely pack light rain jackets in our bags. And if it starts pouring, we\'re unlikely to finish the mountain trail anyway, so we can visit that wooden art gallery near the main road." Mint smiles because having options makes the trip stress-free.',
      listenQ: 'Why might an outdoor picnic not work later in the day according to Mint?',
      listenA: 'Because heavy showers might develop after three o\'clock.',
      dictation: 'Our outdoor picnic probably won\'t stay dry after three.',
      listenNote: 'สังเกตตำแหน่งในคำบอกเล่า vs ปฏิเสธ: "probably won\'t" ต้องเอา probably วางก่อน won\'t และออกเสียง stress ชัดที่ PROB-a-bly กับ WON\'T',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่วางตำแหน่งคำผิดและใส่ to เกิน 2 จุด: "She won\'t probably come tonight, and she might to send a message tomorrow."',
          answer: 'She probably won\'t come tonight, and she might send a message tomorrow.',
          explanation: '1) ในประโยคปฏิเสธ probably ต้องอยู่หน้า won\'t เป็น probably won\'t 2) หลัง modal verb อย่าง might ห้ามใส่ to',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดแสดงความมั่นใจระดับ "น่าจะเกิด (ประมาณ 75%) และไม่น่าจะเกิดขึ้น (ปฏิเสธ)" ได้ถูกตำแหน่งทุกคำ?',
          answer: 'I\'ll probably finish by five, so I definitely won\'t miss the dinner.',
          choices: [
            'I probably will finishing by five, so I won\'t definitely miss the dinner.',
            'I\'ll probably finish by five, so I definitely won\'t miss the dinner.',
            'I\'ll finish definitely by five, so I may not to miss the dinner.',
            'I unlikely to miss the dinner because I probably\'ll finish early.',
          ],
          explanation: '\'ll + probably + V1 (หลัง will) และ definitely + won\'t + V1 (หน้า won\'t)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำแสดงโอกาสที่ไม่แน่ชัด (50/50) ในรูปปฏิเสธ: Take a sweater just in case—the room _____ (may / not) be warm enough.',
          answer: 'may not',
          explanation: 'รูปปฏิเสธของ may คือ may not (ไม่เติม n\'t และไม่ใส่ to)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "รถบัสไม่น่าจะมาตรงเวลาช่วงเย็นวันศุกร์"',
          answer: 'The bus is unlikely to arrive on time on Friday evening.',
          explanation: 'ใช้ be unlikely to + V1 เพื่อสื่อว่า "ไม่น่าจะเกิด"',
        },
      ],
      writing:
        'เขียนคาดการณ์แผนสุดสัปดาห์หน้าของคุณ 5 ประโยค โดยใช้สเกลความมั่นใจให้ครบ 4 ระดับ: `\'ll definitely`, `definitely won\'t / probably won\'t`, `might / may not`, และ `is/am unlikely to`',
      writingSample:
        'Next weekend, my schedule stays fairly flexible depending on the rain. On Saturday morning, I\'ll definitely sleep in until eight because I worked late all week. If the sky stays clear, I\'ll probably ride my bicycle around the local park. However, I might not go far because afternoon storms look common lately. On Sunday evening, I\'m unlikely to eat out—I definitely won\'t skip cooking my favorite noodle soup at home!',
      writingNote: 'ตรวจจุดตาย 2 จุด: 1) definitely/probably วางหน้า won\'t แล้วหรือยัง 2) หลัง might/may ไม่มี to ส่วนหลัง unlikely ต้องมี to + V1',
      speakingTopic: 'พยากรณ์แผนสุดสัปดาห์และแผนสำรอง 4 ระดับความชัวร์ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูด 4 เรื่อง: สิ่งที่จะทำแน่นอน (definitely) / สิ่งที่น่าจะทำ (probably) / สิ่งที่อาจจะทำหรือไม่ทำ (might / may not) / สิ่งที่ไม่น่าเกิดขึ้น (unlikely to)',
        'ออกเสียงคำว่า definitely (4 พยางค์) และ probably (3 พยางค์) ให้จังหวะชัด',
      ],
    },
    {
      day: 76,
      title: 'วางแผนทริป โปรเจกต์ และชวนเพื่อน: รวมอนาคต 4 แบบในบทสนทนาจริง',
      objective:
        'ผสมผสานอนาคตทั้ง 4 แบบ (will, going to, Present Continuous, Present Simple) และวลีชวนเพื่อน/รับนัดได้อย่างลื่นไหลในบทสนทนาเดียว',
      explanation:
        'มาดูวิธีที่คนพูดคล่องตัวใช้ **"อนาคต 4 แบบรวมใน 1 บทสนทนา"** อย่างเป็นธรรมชาติที่สุด เวลาคุยเรื่องชวนเพื่อนไปเที่ยวหรือวางแผนงานร่วมกัน:\n1) **เปิดชวนด้วยนัดหมายที่ดูอยู่ (`Present Continuous`)**: *"Are you doing anything this Saturday? I\'m visiting Bang Kachao with Ploy."*\n2) **บอกตารางเรือ/รถ (`Present Simple`)**: *"The early ferry **leaves** at eight thirty, and the bike shop **opens** at eight."*\n3) **เล่าแผนที่ตั้งใจไว้แล้ว (`be going to`)**: *"We**\'re going to rent** two bicycles and explore the green park."*\n4) **ตอบรับหรือเสนอตัวฉับพลันตอนคุย (`will / \'ll`) + Time Clause**: *"Count me in! **I\'ll bring** cold snacks, and **I\'ll text** you **as soon as I wake up**!"*',
      sound: [
        'Inviting & Accepting Rhythm in Natural Dialogue',
        'count me in /kaʊnt miː ɪn/ · ferry /ˈfer.i/ · trail /treɪl/ · convenient /kənˈviː.ni.ənt/',
        'วลีตอบรับอย่าง "Count me in!" และ "Sounds great!" ต้องใช้น้ำเสียงกระตือรือร้น (สูง-ต่ำชัด) ส่วน "Let me check my schedule" พูดเชื่อมเร็วเป็น "เล็ท-มี-เช็ก-ไม-สเก็ด-จูล"',
        'ฝึกพูดบทสนทนาชวนเพื่อน 4 ขั้นตอนออกเสียงดังๆ เพื่อให้สลับ Tense 4 แบบได้โดยไม่ต้องหยุดนึกนาน',
      ],
      l1: [
        'ใช้ will ไปทั้งหมดทุกประโยคในบทสนทนา ("We will go... The boat will leave... I will bring...") ทำให้ฟังดูแข็งและขาดน้ำหนักความตั้งใจ',
        'ไม่รู้จักวลีรับนัดแบบธรรมชาติ เลยตอบแข็งๆ แค่ "Yes, I want to go" หรือ "I agree"',
        'วางแผน 4 ช่องในหัว: ชวน/นัด (V-ing) · ตารางรถ (V1+s) · แผนในใจ (going to) · อาสาทำสดๆ (I\'ll) + หยิบวลี Count me in / Sounds great! มาใช้',
      ],
      vocab: [
        ['count me in', 'นับฉันไปด้วยคน / เอาด้วย!', '/kaʊnt miː ɪn/', 'definitely count me in', 'นับฉันไปด้วยคนแน่นอน'],
        ['make it', 'มาได้ทัน / ปลีกตัวมาได้', '/meɪk ɪt/', 'glad you can make it', 'ดีใจที่คุณมาได้'],
        ['convenient', 'สะดวกสบาย', '/kənˈviː.ni.ənt/', 'a convenient time', 'เวลาที่สะดวก'],
        ['reserve', 'จองล่วงหน้า', '/rɪˈzɜːv/', 'reserve bikes ahead', 'จองจักรยานล่วงหน้า'],
        ['trail', 'เส้นทางเดิน/ปั่น', '/treɪl/', 'shaded bike trail', 'เส้นทางปั่นจักรยานร่มรื่น'],
        ['split', 'หารค่าใช้จ่าย / แบ่งกัน', '/splɪt/', 'split the snack bill', 'หารค่าขนมกัน'],
      ],
      examples: [
        ['Are you free this Sunday? We\'re visiting the floating market in the morning.', 'วันอาทิตย์นี้คุณว่างไหม? พวกเราจะไปตลาดน้ำกันตอนเช้า'],
        ['Our community boat leaves the pier at nine and returns before noon.', 'เรือชุมชนของเราออกจากท่าเก้าโมงตรงและกลับมาถึงก่อนเที่ยง'],
        ['We\'re going to cycle along the shaded trail and try local coconut ice cream.', 'พวกเราตั้งใจจะปั่นจักรยานไปตามเส้นทางร่มรื่นและลองกินไอศกรีมกะทิท้องถิ่น'],
        ['Sounds convenient! Count me in—I\'ll bring extra sunscreen and wet wipes.', 'ฟังดูสะดวกดีจัง! นับฉันไปด้วยคน เดี๋ยวฉันพกครีมกันแดดกับทิชชู่เปียกไปเพิ่มให้'],
      ],
      reading:
        'On Wednesday evening, Pete calls his friend Mind to plan a one-day cycling escape to Bang Kachao. "Hey Mind, are you doing anything this Saturday?" Pete asks cheerfully. "Nothing fixed yet," Mind replies. "Actually, Ken and I are taking the skytrain early and meeting at Bang Na pier at eight," Pete explains. "The small ferry leaves every ten minutes, and the bike shop opens at eight thirty. We\'re going to ride along the shaded garden trails until lunch, then visit the weekend market." Mind loves the idea immediately: "Count me in! That sounds super refreshing. Wait—do we need to reserve bicycles?" Pete answers, "Don\'t worry, I\'ll call the shop tomorrow morning to hold three bikes. Also, it might get sunny around noon, so bring a hat." Mind smiles, "Got it! I\'ll bring fruit snacks for us, and I\'ll text you before I leave home."',
      listenQ: 'What is Pete going to do tomorrow morning to help with the trip?',
      listenA: 'He will call the bike shop to reserve (hold) three bicycles.',
      dictation: 'I will call the shop tomorrow morning to hold three bikes.',
      listenNote: 'สังเกตว่าแม้ในประโยคอ่านจริงใช้ "I\'ll call" เพื่อรับอาสาจัดการตอนคุยสาย (spontaneous promise/offer) ฝึกแยกหูฟัง \'ll ที่พูดต่อจาก Don\'t worry',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้บทสนทนาวางแผนที่สลับรูปอนาคตผิด 2 จุด: "Count me in! Tomorrow I\'m meet you at eight—our ferry will leaves at 8:20, and I\'m going carry the water bottles just now."',
          answer: 'Count me in! Tomorrow I\'m meeting you at eight—our ferry leaves at 8:20, and I\'ll carry the water bottles.',
          explanation: '1) นัดเจอเพื่อนใช้ I\'m meeting 2) ตารางเรือใช้ leaves (ไม่ใช้ will leaves) 3) อาสาช่วยสดๆ ใช้ I\'ll carry (ไม่ใช้ I\'m going carry)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้สำนวนรับคำชวนและเลือกรูปอนาคต 2 แบบได้ลงตัวที่สุด?',
          answer: 'Sounds great—count me in! I\'ll bring snacks, and I\'m going to wear comfortable shoes.',
          choices: [
            'Yes, I agree to go! I bringing snacks, and the train will arrives at nine.',
            'Sounds great—count me in! I\'ll bring snacks, and I\'m going to wear comfortable shoes.',
            'Count me on! I\'m bring snacks, and I won\'t probably miss the boat.',
            'I\'d love to, so I\'ll definitely visiting you as soon as I will finish.',
          ],
          explanation: 'รับคำชวนด้วย Count me in! + อาสาทันที I\'ll bring + แผนที่ตั้งใจ I\'m going to wear ถูกต้องสมบูรณ์',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบวลี: Hey, I\'m really glad you can _____ it to Saturday\'s picnic!',
          answer: 'make',
          explanation: 'make it = สามารถมาร่วมงานหรือไปทันเวลาได้',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "นับฉันไปด้วยคน! รถไฟออกกี่โมงล่ะ? เดี๋ยวฉันช่วยจองที่นั่งเอง"',
          answer: 'Count me in! What time does the train leave? I\'ll reserve our seats.',
          explanation: 'ตารางรถไฟใช้ What time does the train leave? และอาสาช่วยสดๆ ใช้ I\'ll reserve...',
        },
      ],
      writing:
        'เขียนบทสนทนาชวนเพื่อนไปทริปวันหยุดหรือทำโปรเจกต์ร่วมกัน 8 บรรทัด (สลับ A/B) โดยบังคับให้มีทั้ง 4 รูปอนาคต (`I\'m + V-ing`, `It leaves/opens`, `going to`, `\'ll`) + 1 Future Time Clause + สำนวน `Count me in / make it`',
      writingSample:
        'A: Hey! Are you doing anything on Sunday morning?\nB: Nothing big yet—why?\nA: Joy and I are visiting the flower market near the river at seven. Would you like to join us?\nB: Count me in! What time does the express boat leave the main pier?\nA: It leaves at six forty sharp, and the street food stalls open around seven.\nB: Awesome! We\'re going to eat warm porridge there, right?\nA: Definitely! Oh, do we need cash for the boat ticket?\nB: Yes, probably—wait, I\'ll bring small bills for both of us, and I\'ll text you as soon as I reach the pier!',
      writingNote: 'เช็กครบ 5 อย่างในบทสนทนา: นัดหมาย (-ing) · ตารางเวลา (V1+s) · แผนในใจ (going to) · อาสาทันที (\'ll) · Time Clause ไม่มี will!',
      speakingTopic: 'สวมบทบาทโทรชวนเพื่อนวางแผนวันหยุด 4 จังหวะ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดคนเดียวแบบเล่น 2 บท (ผู้ชวน + ผู้ตอบรับ) ให้ได้ทั้งชวน ถามเวลาตารางเดินทาง เล่าแผนกิจกรรม และเสนอตัวช่วยกัน',
        'คอยเช็กหูตัวเองว่าตอนพูดถึงตารางรถ/ร้านเปิด ไม่เผลอใส่ will แต่ใช้ leaves/opens ชัดเจน',
      ],
    },
    {
      day: 77,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 11: แยกขาด 4 รูปอนาคต & Future Time Clauses + Dictogloss',
      objective:
        'รวบยอดการเลือกใช้ Future Forms ทั้ง 4 แบบ (will, going to, Present Continuous, Present Simple), Future Time Clauses และสเกลความมั่นใจ พร้อมฝึก Dictogloss',
      explanation:
        'ครบ 11 สัปดาห์แล้วครับ! วันนี้เรามารวม "เข็มทิศเลือกใช้อนาคต 4 แบบ + กฎเหล็ก 2 ข้อ" ให้แม่นยำระดับอัตโนมัติ:\n1) **`will / \'ll / won\'t`**: ตัดสินใจฉับพลันตอนพูด, เสนอตัวช่วย, สัญญา, คาดการณ์ทั่วไป\n2) **`am/is/are going to`**: แผนที่คิดไว้ก่อนพูดแล้ว + สิ่งที่มีหลักฐานชัดตรงหน้า (*Look at those clouds!*)\n3) **`Present Continuous`**: นัดหมายส่วนตัวที่ล็อกเวลากับคนอื่น/จองแล้ว (*I\'m meeting Joy at 6*)\n4) **`Present Simple`**: ตารางรถ/เครื่องบิน/ร้านเปิด-ปิด (*The train leaves at 8*)\n**กฎเหล็กแถม 2 ข้อ**: (ก) หลัง **`when, as soon as, until, before, after` ห้ามใช้ `will`** ใช้ Present Simple แทน! (ข) `definitely / probably` วาง **หลัง `will`** แต่ **หน้า `won\'t`**!',
      sound: [
        'Week 11 Future Forms Sound Contrast Review',
        'I\'ll /aɪl/ · won\'t /wəʊnt/ · going to /ˈɡəʊ.ɪŋ tə/ · leaves /liːvz/ · as soon as /əz ˈsuːn əz/',
        'Shadowing บทอ่านทบทวน 3 รอบ โดยฟังให้ออกทั้งรูปย่อ \'ll, เสียงเชื่อม leaves at, และคำว่า probably/definitely',
        'อ่านทวนประโยคตัวอย่าง 4 แบบต่อเนื่องกันใน 10 วินาทีโดยไม่สะดุด: "I\'ll help / I\'m going to save / I\'m meeting Ben / The train leaves at eight"',
      ],
      l1: [
        'ใช้ will แทนทั้งหมดทุกเรื่อง, ลืม \'m/\'s/\'re หน้า going to, เผลอใส่ will หลัง when/as soon as, หรือวาง probably หลัง won\'t',
        'สมองไทยคิดแค่คำว่า "จะ" คำเดียว เลยไม่แยกเจตนาว่าคิดสด คิดไว้ก่อน นัดแล้ว หรือเป็นตารางสาธารณะ',
        'ก่อนพูดเรื่องอนาคตถาม 1 คำ: "นี่คือ ตัดสินใจสด(\'ll) / แผนในใจหรือเห็นตรงหน้า(going to) / นัดคน(V-ing) / ตารางรถ(V1+s)?"',
      ],
      vocab: [
        ['arrangement', 'การนัดหมายที่จัดไว้', '/əˈreɪndʒ.mənt/', 'make travel arrangements', 'จัดการนัดหมายการเดินทาง'],
        ['timetable', 'ตารางเวลาเดินรถ/กิจกรรม', '/ˈtaɪmˌteɪ.bəl/', 'check the ferry timetable', 'เช็กตารางเวลาเรือ'],
        ['spontaneous', 'เกิดขึ้นทันที/ฉับพลัน', '/spɒnˈteɪ.ni.əs/', 'a spontaneous decision', 'การตัดสินใจแบบฉับพลัน'],
        ['uncertain', 'ไม่แน่นอน', '/ʌnˈsɜː.tən/', 'feel uncertain about', 'รู้สึกไม่แน่ใจเกี่ยวกับ'],
        ['coordinate', 'ประสานงาน', '/kəʊˈɔː.dɪ.neɪt/', 'coordinate the weekend plan', 'ประสานงานแผนสุดสัปดาห์'],
        ['pack', 'จัดกระเป๋า', '/pæk/', 'pack light for the trip', 'จัดกระเป๋าแบบเบาๆ สำหรับทริป'],
      ],
      examples: [
        ['Wait, you forgot your umbrella? Hold on, I\'ll grab a spare one from the closet.', 'อ้าว คุณลืมร่มเหรอ? รอเดี๋ยวนะ ฉันจะไปหยิบอันสำรองจากตู้มาให้'],
        ['As soon as everyone gets back to the hotel, we\'ll definitely order warm soup.', 'ทันทีที่ทุกคนกลับมาถึงโรงแรม พวกเราจะสั่งซุปร้อนๆ แน่นอน'],
        ['Look at the dark sky—our afternoon walk is probably going to get rained out.', 'ดูท้องฟ้ามืดครึ้มสิ การเดินเล่นตอนบ่ายของเราน่าจะเจอฝนแน่ๆ'],
        ['We\'re meeting the tour guide at seven, because the morning boat leaves at seven thirty.', 'พวกเรามีนัดเจอไกด์ตอนเจ็ดโมง เพราะเรือรอบเช้าออกจากท่าเจ็ดโมงครึ่ง'],
      ],
      reading:
        'Next Friday, Joy and her coworkers are taking a short team retreat to Hua Hin. Because everyone wanted a smooth trip, they coordinated the arrangements carefully last week. Their morning van leaves Bangkok at seven thirty sharp, and the seaside hotel check-in opens at two. Joy already knows what she is going to pack: light shirts, sunglasses, and a notebook for quiet morning reading. Still, the weather forecast looks slightly uncertain for Saturday afternoon. "It might rain briefly after lunch, so we probably won\'t schedule outdoor games at three," Joy tells her teammates. "However, as soon as the sky clears up, we\'ll definitely walk along the beach before dinner." Right then, her coworker drops a coffee lid on the desk, and Joy smiles quickly: "Don\'t move—I\'ll grab a napkin for you!"',
      listenQ: 'Why won\'t Joy\'s team probably schedule outdoor games at three on Saturday?',
      listenA: 'Because the weather forecast says it might rain briefly after lunch.',
      dictation: 'As soon as the sky clears up, we will walk along the beach.',
      listenNote: 'ฝึก Dictogloss จับ 4 รูปอนาคตที่อยู่ติดกันในบทเดียว: are taking (นัด) / leaves (ตาราง) / is going to pack (แผน) / might rain & probably won\'t (ความมั่นใจ) / as soon as... clears up, we\'ll... (Time Clause)',
      drills: [
        {
          kind: 'dictogloss',
          prompt: 'ฟังบทอ่านแล้วเติมชุดคำที่ตรงตามโครงสร้างอนาคตในเรื่องครบทั้ง 3 จุด: "Their morning van _____ at 7:30, Joy already knows what she _____ pack, and _____ the sky clears up, they\'ll walk along the beach."',
          answer: 'leaves / is going to / as soon as',
          choices: [
            'will leave / will / when will',
            'leaves / is going to / as soon as',
            'is leaving / going to / until',
            'leaves / will be / as soon as',
          ],
          explanation: 'ตารางรถใช้ leaves (Present Simple), แผนที่คิดไว้ก่อนใช้ is going to, และหลัง as soon as ใช้ Present Simple (clears up)',
          audio_text:
            'Their morning van leaves Bangkok at seven thirty sharp. Joy already knows what she is going to pack. As soon as the sky clears up, we\'ll definitely walk along the beach before dinner.',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่รวมจุดพลาด 3 จุดของสัปดาห์ 11: "When I will arrive at the gate, I\'m going to calling you, and I won\'t definitely be late!"',
          answer: 'When I arrive at the gate, I\'ll call you, and I definitely won\'t be late!',
          explanation: '1) หลัง When ห้ามใช้ will (เป็น When I arrive) 2) อาสา/สัญญาด่วนใช้ I\'ll call (หรือ I\'m going to call ไม่ใช่ going to calling) 3) definitely วางหน้า won\'t',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดเลือกใช้อนาคต 4 แบบและความมั่นใจได้ถูกต้องทุกจุด?',
          answer: 'Look at that traffic jam! We\'re unlikely to make it before the movie starts at seven.',
          choices: [
            'Look at that traffic jam! We\'re unlikely to make it before the movie starts at seven.',
            'Look at that traffic jam! We\'ll unlikely to make it before the movie will start at seven.',
            'I meet my friend tonight, and the train is leaving at eight every evening.',
            'Wait—your pen fell! I going to pick it up for you right now.',
          ],
          explanation: 'เห็นรถติดตรงหน้าใช้ unlikely to make it และตารางหนังฉายหลัง before ใช้ Present Simple (starts)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "พรุ่งนี้พวกเรามีนัดเจอเพื่อนที่คาเฟ่ตอนสิบโมง รถบัสออกเก้าโมงสิบห้า และฉันน่าจะพกร่มไปด้วยเผื่อฝนตก"',
          answer: 'Tomorrow we\'re meeting friends at a café at ten; the bus leaves at nine fifteen, and I\'ll probably bring an umbrella just in case.',
          explanation: 'นัดเจอ = we\'re meeting · ตารางรถ = leaves · น่าจะพกไป = I\'ll probably bring',
        },
      ],
      writing:
        'Weekly Synthesis Plan (7–8 ประโยค): เขียนเล่า "แผนสุดสัปดาห์หน้า + แผนสำรองถ้าฝนตก" โดยใช้ครบทั้ง 4 รูปอนาคต (`I\'m + V-ing`, `It leaves/opens`, `going to`, `\'ll`), อย่างน้อย 1 Time Clause (`when / as soon as / before`) และ 2 ระดับความมั่นใจ (`probably / might / definitely won\'t`)',
      writingSample:
        'Next Saturday, I\'m meeting two old college friends at the central train station at eight in the morning. Our local train leaves at eight twenty and arrives near the riverside market around nine thirty. Once we get there, we\'re going to explore the vintage bookstalls and eat warm coconut pancakes for breakfast. Looking at recent afternoon showers, it might rain around two o\'clock, so we probably won\'t stay outside all day. Instead, as soon as dark clouds appear, we\'ll duck into a cozy museum nearby—it opens until five! Oh, wait—I forgot that one friend dislikes spicy food, so I\'ll definitely remind everyone to order mild dishes too.',
      writingNote: 'ตรวจ 4 จุดสุดท้าย: ไม่ใช้ will หลัง when/once/as soon as · definitely/probably วางถูกฝั่งของ will/won\'t · ตารางเวลาเอกพจน์เติม -s แล้ว',
      speakingTopic: 'Weekly Future Showcase: "แผนสัปดาห์หน้าแบบมือโปร" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดเชื่อมให้ครบทั้งนัดหมายจริง (V-ing), ตารางเวลา (leaves/opens), แผนที่คิดไว้ (going to), การตอบรับสด (\'ll), และเงื่อนไขเวลา (as soon as + V1)',
        'สลับน้ำเสียงความมั่นใจ between \'ll definitely, probably won\'t และ might ให้ฟังเป็นธรรมชาติ',
      ],
    },
  ]
);
