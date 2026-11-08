import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 4: สื่อสารคล่องตัว เลือกโทนภาษา และฟังความเร็วเจ้าของภาษา';

export const WEEK26: ModuleSeed = createModule(
  {
    week: 26,
    phase: 4,
    phase_title: PHASE_TITLE,
    cefr_level: 'B2',
    title: 'Register & Tone Shifting: ปรับระดับภาษาตามบริบท',
    summary:
      'เปรียบเทียบโทนภาษา 3 ระดับ (สนิท/แชท ↔ สุภาพทำงาน ↔ พรีเซนต์/ทางการ) ลบสำนวนแปลจากไทยที่ฟังดูแข็งกระด้าง และเลือกคำได้ถูกกาละเทศะ',
    focus: 'Register Calibration, Casual vs Neutral vs Formal, Thai-to-English Tone Fixes',
  },
  [
    {
      day: 176,
      title: 'Three Registers in Action: "Can we change the schedule?"',
      objective:
        'แปลงความหมายเดียวกันเป็นภาษาอังกฤษ 3 ระดับโทน (สนิท/แชท · สุภาพทำงาน · ลูกค้า/ผู้บริหาร) ได้อย่างเหมาะสมกับความสัมพันธ์และบริบท',
      explanation:
        'ภาษาไทยปรับระดับด้วยสรรพนามและหางเสียง (*แก/เรา + นะ*, *พี่/คุณ + ครับ/ค่ะ*, *เรียนท่าน + ขอความอนุเคราะห์*) แต่ภาษาอังกฤษปรับระดับที่ **"กริยา + โครงสร้างเปิดประโยค + รูปย่อ"**! ลองดู 1 ความหมายคือ "ขอเลื่อนเวลานัด" ใน 3 โทน: 1) **Casual (เพื่อนสนิท/แชท):** `Hey, mind if we push dinner back to 7?` / `Any chance we can move things to Friday?` 2) **Neutral-Professional (ทีมงาน/เพื่อนร่วมงาน):** `Could we push our catch-up back by thirty minutes? Let me know what suits your schedule.` 3) **Formal / Client-Facing (ลูกค้า/ผู้บริหาร):** `Would it be possible to reschedule our session to Thursday morning? Thank you for your flexibility.` ถ้าสลับโทนผิด เพื่อนจะคิดว่าคุณโกรธ (ทางการเกิน) หรือลูกค้าจะรู้สึกว่าคุณไม่เป็นมืออาชีพ!',
      sound: [
        'Pitch Range & Warmth across Three Registers',
        'reschedule /ˌriːˈʃed.juːl/ · flexibility /ˌflek.səˈbɪl.ə.ti/ · itinerary /aɪˈtɪn.ər.ər.i/ · possible /ˈpɒs.ə.bəl/',
        'โทนสนิทพูดจังหวะเร็วและเชื่อมเยอะ: "Mind_if_we push_it_back?" (/maɪn dɪf wi ˈpʊʃ ɪt bæk/) ส่วนโทนสุภาพทำงานและลูกค้าจะชะลอจังหวะเล็กน้อยพร้อมน้ำเสียงนุ่มนวลที่ "Would_it_be_possible_to..."',
        'พูดประโยคขอเลื่อนนัด 3 โทนต่อเนื่องกัน โดยปรับสีหน้าและจังหวะเสียงให้ต่างกันชัดเจน',
      ],
      l1: [
        'พูดกับเพื่อนสนิทว่า "I would like to request changing our lunch appointment" หรือพิมพ์หาลูกค้าว่า "Hey, change time to 3 ok?"',
        'ภาษาไทยเปลี่ยนแค่หางเสียง "ครับ/นะ" เลยไม่ทันสังเกตว่าคำศัพท์อังกฤษเองก็แบกความสนิทหรือความเป็นทางการอยู่ในตัว',
        'เลือกชุดเปิดประโยคให้ตรงคน: เพื่อน = Mind if we...? / Any chance...? | ทีม = Could we shift...? | ลูกค้า = Would it be possible to reschedule...?',
      ],
      vocab: [
        [
          'push back',
          'เลื่อนเวลาออกไปก่อน',
          '/pʊʃ bæk/',
          'push things back an hour',
          'เลื่อนออกไปก่อนหนึ่งชั่วโมง',
        ],
        [
          'reschedule',
          'จัดตารางนัดใหม่ (สุภาพ/ทางการ)',
          '/ˌriːˈʃed.juːl/',
          'reschedule our session',
          'นัดเวลาประชุม/เซสชันใหม่',
        ],
        [
          'shift',
          'ขยับ/ปรับเปลี่ยนเล็กน้อย',
          '/ʃɪft/',
          'shift the timeline slightly',
          'ขยับกรอบเวลาเล็กน้อย',
        ],
        [
          'suit',
          'เหมาะกับ / สะดวกสำหรับ',
          '/suːt/',
          'suit your schedule',
          'เหมาะกับตารางเวลาของคุณ',
        ],
        [
          'heads-up',
          'การบอกกล่าวล่วงหน้า (กันตกใจ)',
          '/ˈhedz.ʌp/',
          'give you an early heads-up',
          'ขอแจ้งให้ทราบล่วงหน้าก่อน',
        ],
        [
          'flexibility',
          'ความยืดหยุ่น',
          '/ˌflek.səˈbɪl.ə.ti/',
          'appreciate your flexibility',
          'ขอบคุณสำหรับความยืดหยุ่น',
        ],
        [
          'work around',
          'ปรับเวลาให้เข้ากับข้อจำกัดของอีกฝ่าย',
          '/wɜːk əˈraʊnd/',
          'work around your availability',
          'จัดเวลาตามช่วงที่คุณสะดวก',
        ],
      ],
      examples: [
        [
          'Hey, any chance we can push coffee back to three today?',
          'เฮ้ พอจะเลื่อนเวลาไปดื่มกาแฟเป็นบ่ายสามวันนี้ได้ไหม? (โทนเพื่อนสนิท)',
        ],
        [
          'Could we shift our weekly check-in to Thursday if that suits your schedule?',
          'เราขอขยับรอบคุยประจำสัปดาห์ไปวันพฤหัสได้ไหมหากตรงกับตารางของคุณ?',
        ],
        [
          'Just giving you a quick heads-up that the morning train is running twenty minutes late.',
          'ขอแจ้งล่วงหน้าสั้นๆ นะ ว่ารถไฟรอบเช้าช้ากว่ากำหนดยี่สิบนาที',
        ],
        [
          'Would it be possible to reschedule our briefing for Friday afternoon instead?',
          'พอจะเป็นไปได้ไหมครับ/คะ ที่จะขอนัดบรีฟงานใหม่เป็นช่วงบ่ายวันศุกร์แทน? (โทนลูกค้า/ผู้บริหาร)',
        ],
      ],
      reading:
        'Napat spends Tuesday morning organizing a three-day podcast recording week in Bangkok, and a sudden studio maintenance notice forces him to adjust every slot. Writing the exact same request to three different people shows how register shapes trust. First, he texts his close college friend Ploy: "Hey! Studio AC broke down—mind if we push our chat back to Friday at four?" The tone is warm, fast, and effortless. Next, he messages his regular audio editor on Slack in neutral professional language: "Hi Ben, just giving you an early heads-up that we need to shift Thursday afternoon recordings by one hour. Let me know if that still suits your schedule." Finally, he drafts a clear, respectful email to an international guest speaker: "Dear Dr. Lin, would it be possible to reschedule our Thursday session to 2:00 p.m. so we can ensure quiet sound quality? I am happy to work around your availability and truly appreciate your flexibility." Same core message, three distinct registers—each calibrated precisely to the relationship.',
      listenQ: 'Why did Napat need to adjust all the podcast recording slots?',
      listenA: 'Because a sudden studio maintenance notice and broken air conditioning forced him to change the schedule.',
      dictation: 'Would it be possible to reschedule our session for Thursday?',
      listenNote:
        'สังเกตเสียงเชื่อมในคำถามสุภาพ "Would_it_be_possible_to..." ที่พูดต่อกันนุ่มนวลและเน้นชัดที่คำว่า possible และ reschedule',
      drills: [
        {
          kind: 'choice',
          prompt: 'ข้อใดเป็นโทน "สุภาพเหมาะส่งอีเมลถึงลูกค้าหรือวิทยากรภายนอก" ได้ดีที่สุด?',
          answer:
            'Would it be possible to reschedule our briefing to Friday at 10:00 a.m.?',
          choices: [
            'Hey, can we change the time to Friday 10 a.m. ok?',
            'I command that we move our briefing to Friday morning.',
            'Would it be possible to reschedule our briefing to Friday at 10:00 a.m.?',
            'Mind if we push our briefing back cuz I am busy Friday?',
          ],
          explanation:
            'Would it be possible to reschedule... เป็นโทนสุภาพระดับลูกค้าและผู้บริหารที่ชัดเจนและไม่แข็งทื่อเกินไป',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบสำนวนแจ้งล่วงหน้า: I just wanted to give you an early _____ that our courier might arrive late.',
          answer: 'heads-up',
          explanation: 'give someone a heads-up = บอกล่วงหน้าเพื่อให้เตรียมตัวทัน',
        },
        {
          kind: 'error_fix',
          prompt:
            'ปรับประโยคแชทถึงเพื่อนสนิทที่ฟังดูทางการแข็งทื่อเกินไปให้เป็นธรรมชาติ: "Dear best friend, I hereby request to reschedule our noodle lunch by thirty minutes."',
          answer: 'Hey, mind if we push our noodle lunch back by thirty minutes?',
          explanation:
            'กับเพื่อนสนิทใช้ Hey, mind if we push ... back? จะอบอุ่นและเป็นธรรมชาติกว่าคำว่า hereby request',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษในโทนทีมงานสุภาพ: "พวกเราขยับกรอบเวลาให้เข้ากับช่วงที่คุณสะดวกได้นะ"',
          answer: 'We can shift the timeline to work around your availability.',
          explanation:
            'shift the timeline = ขยับตารางเวลา · work around your availability = จัดตามเวลาที่คุณสะดวก',
        },
      ],
      writing:
        'เขียนข้อความขอเลื่อนนัดเดียวกัน (เช่น เลื่อนเวลาประชุม/กินข้าว/ส่งแบบร่าง) เป็น 3 เวอร์ชันสั้นๆ: (1) แชทหาเพื่อนสนิท (2) แชททีมงาน (3) อีเมลถึงลูกค้าหรืออาจารย์ต่างชาติ',
      writingSample:
        "1) Friend: Hey! Stuck in crazy rain—mind if we push coffee back by thirty minutes?\n2) Colleague: Hi Dan, just giving you a heads-up that the client review ran long. Could we shift our 3:00 p.m. sync to 3:30 if that suits your schedule?\n3) Client: Dear Ms. Patel, would it be possible to reschedule tomorrow's walkthrough to Thursday at 10:00 a.m.? We are happy to work around your availability and truly appreciate your flexibility.",
      writingNote:
        'เปรียบเทียบ 3 ชิ้นของคุณ: เพื่อนใช้รูปย่อและ push back, ทีมงานใช้ heads-up / shift / suit your schedule, ลูกค้าใช้ Would it be possible to reschedule และขอบคุณอย่างนอบน้อม',
      speakingTopic:
        'ฝึกพูดสลับ 3 โทนในสถานการณ์จริงเรื่องเดียวกัน 4 / 3 / 2 นาที',
      speakingBullets: [
        'จำลองขอเลื่อนเวลา 3 สายซ้อน: โทรหาเพื่อน → โทรหาเพื่อนร่วมทีม → ฝากข้อความเสียงถึงลูกค้า',
        'สังเกตการเปลี่ยนจังหวะเสียง: เพื่อน (เร็วเป็นกันเอง) → ทีม (ชัดกระชับ) → ลูกค้า (ช้าลงนิด สุภาพมั่นคง)',
      ],
    },
    {
      day: 177,
      title: 'Removing Blunt Direct-Thai Phrasing',
      objective:
        'เปลี่ยนประโยคแปลจากไทยที่ฟังดูห้วนหรือสั่งการ (*Tell me, Why you late?, You forgot to...*) ให้เป็นคำขอและคำถามที่สุภาพแต่ชัดเจน (*Could you walk me through...?, Is everything alright?*)',
      explanation:
        'ในภาษาไทยเราพูดสั้นๆ ใส่คำว่า **"นะ / หน่อย / สิ"** ปิดท้าย เช่น *"เล่าให้ฟังหน่อย", "ทำไมมาช้าอะ", "ลืมส่งไฟล์ป่าว", "ส่งมาเดี๋ยวนี้"* พอตัดหางเสียงไทยแล้วแปลเป็นอังกฤษตรงตัวว่า ❌ *"Tell me.", "Why you late?", "You forgot to attach.", "Send me now."* เจ้าของภาษากลับได้ยินว่าคุณ **"กำลังดุ ตำหนิ หรือออกคำสั่ง"**! ทางแก้ง่ายมาก แค่ใช้ 4 ตัวลดแรงกระแทก: 1) แทน *Tell me / Explain* ด้วย **`Could you walk me through...?`** (ช่วยเล่า/อธิบายทีละขั้นให้ฟังหน่อยได้ไหม) 2) แทน *Why are you late?* ด้วย **`Is everything alright? Looks like...`** (ทุกอย่างเรียบร้อยดีไหม ดูเหมือนว่า...) 3) แทน *You forgot to...* ด้วย **`Just following up on...` / `Looks like the file didn\'t come through`** (โฟกัสที่ "ตัวงาน/ระบบ" แทนการชี้หน้าว่า "คุณลืม") 4) แทน *Change this* ด้วย **`One quick tweak we could make is...`**',
      sound: [
        'Rising-Fall Softeners vs Flat Imperative Tone',
        'walk me through /wɔːk mi θruː/ · alright /ɔːlˈraɪt/ · attachment /əˈtætʃ.mənt/ · tweak /twiːk/',
        'เวลาพูด "Tell me" เสียงแบนลงจะฟังเหมือนสอบสวน แต่ถ้าขึ้นต้นด้วย "Could_you_walk_me_through..." (/kʊdʒə ˈwɔːk mi θruː/) พร้อมน้ำเสียงเปิดกว้าง ปลายประโยคยกขึ้นนิดๆ จะฟังดูชวนร่วมมือทันที',
        'ฝึกพูด 4 คู่ปรับโทน: Tell me → Could you walk me through... | You forgot → Looks like... | Why are you late? → Is everything alright? | Fix this → One quick tweak here...',
      ],
      l1: [
        'พิมพ์แชทสั้นห้วนในที่ทำงานต่างชาติ: "Send me the report.", "You forgot attachment.", "Why did you do like this?"',
        'ภาษาไทยใช้การลงท้ายด้วย "ครับ/ค่ะ/นะ" เพื่อสร้างความสุภาพ แต่ภาษาอังกฤษไม่มีหางเสียง จึงต้องวางคำลดแรงกระแทกไว้ข้างหน้าแทน',
        'จำกฎ "เลี่ยงการชี้หน้าว่า You forgot / Why did you": ย้ายประธานไปที่งานแทน (Looks like the link is missing) และเปิดด้วย Could you / Just checking',
      ],
      vocab: [
        [
          'walk through',
          'พาดู/อธิบายทีละขั้นตอนอย่างใจเย็น',
          '/wɔːk θruː/',
          'walk me through the steps',
          'ช่วยอธิบายขั้นตอนให้ฟังหน่อย',
        ],
        [
          'come through',
          'ส่งมาถึง/ผ่านเข้าระบบสำเร็จ',
          '/kʌm θruː/',
          'did not come through',
          'ไฟล์/ข้อความยังไม่เข้าในระบบ',
        ],
        [
          'tweak',
          'การปรับแก้จุดเล็กน้อย',
          '/twiːk/',
          'make one quick tweak',
          'ปรับแก้นิดเดียว',
        ],
        [
          'double-check',
          'ตรวจทานซ้ำอีกครั้ง',
          '/ˌdʌb.əlˈtʃek/',
          'double-check the figures',
          'ช่วยเช็กตัวเลขซ้ำอีกที',
        ],
        [
          'when you get a moment',
          'เมื่อคุณสะดวก/พอมีเวลาว่าง',
          '/wen jʊ ɡet ə ˈməʊ.mənt/',
          'take a look when you get a moment',
          'ฝากดูให้หน่อยเมื่อมีเวลาว่าง',
        ],
        [
          'feel free to',
          'เชิญ...ได้ตามสบายเลย',
          '/fiːl friː tə/',
          'feel free to flag any gaps',
          'ทักมาบอกจุดที่ขาดได้เลยนะ',
        ],
        [
          'on my radar',
          'อยู่ในความสนใจ/รับรู้ไว้แล้ว',
          '/ɒn maɪ ˈreɪ.dɑːr/',
          'keep this on my radar',
          'จด/ติดตามเรื่องนี้ไว้ในใจแล้ว',
        ],
      ],
      examples: [
        [
          'Could you walk me through how the updated booking flow works?',
          'ช่วยอธิบายให้ฟังหน่อยได้ไหมว่าขั้นตอนการจองแบบใหม่ทำงานยังไง?',
        ],
        [
          'Looks like the PDF attachment did not come through on that last email.',
          'ดูเหมือนไฟล์ PDF แนบจะยังไม่เข้าในอีเมลฉบับล่าสุดนะครับ/คะ',
          'พูดถึง "ไฟล์" แทนการกล่าวโทษว่า "You forgot to attach"',
        ],
        [
          'Is everything alright? You usually join the morning stand-up by nine.',
          'ทุกอย่างเรียบร้อยดีไหม ปกติเห็นเข้าประชุมเช้าตอนเก้าโมงแล้ว',
        ],
        [
          'When you get a moment, could we double-check the second slide together?',
          'พอมีเวลาว่างเมื่อไหร่ เรามาช่วยกันเช็กสไลด์หน้าที่สองอีกรอบดีไหม?',
        ],
      ],
      reading:
        'Shortly after becoming project lead at an international agency in Bangkok, Fah noticed an odd silence in her team chat. Whenever she typed fast updates between meetings—lines like "Send slides now," "You forgot the budget," or "Why you didn’t reply?"—colleagues stopped sharing ideas openly. During a coffee check-in, her mentor gently pointed out the hidden cultural mismatch. In Thai, short requests feel perfectly warm when spoken with a smile or a soft ending particle. Translated word-for-word into English text, however, direct commands lose that warmth and sound surprisingly sharp. Together, they rewrote three common messages. Instead of "You forgot the PDF," Fah learned to write, "Just following up—looks like the PDF didn’t come through!" Instead of "Explain your idea," she switched to, "Could you walk me through your thinking when you get a moment?" Within two weeks, the channel felt lighter and far more collaborative. Being polite in English does not require writing long essays; a few thoughtful opening words turn commands into genuine teamwork.',
      listenQ: 'Why did Fah’s direct English chat messages sound sharper than she intended?',
      listenA: 'Because direct Thai requests lose their soft spoken warmth and ending particles when translated word-for-word into English.',
      dictation: 'Could you walk me through the updated schedule when you get a moment?',
      listenNote:
        'สังเกตเสียงเชื่อม "walk_me_through" และ "when_you_get_a_moment" (เว็น-เยอะ-เก็ท-ทะ-โม-เมิ่นท์) ที่ทำให้คำขอฟังดูผ่อนคลายและเป็นมิตร',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'เปลี่ยนข้อความทวงไฟล์ที่ฟังดูตำหนิให้สุภาพเป็นมืออาชีพ: "You forgot to send the invoice. Send me right now."',
          answer:
            'Just following up—looks like the invoice did not come through. Could you share it when you get a moment?',
          explanation:
            'เลี่ยงการตำหนิว่า You forgot และเปลี่ยนคำสั่ง Send me เป็นคำขอ Could you share it when you get a moment?',
        },
        {
          kind: 'choice',
          prompt:
            'ถ้าเพื่อนร่วมทีมมาสายกว่าปกติ 20 นาที ข้อใดถามอย่างห่วงใยและไม่ฟังดูจับผิด?',
          answer:
            'Hi Tom, is everything alright? Just checking in since we started at ten.',
          choices: [
            'Why you late twenty minutes? Explain me!',
            'Hi Tom, is everything alright? Just checking in since we started at ten.',
            'You are very late again. Tell me why now.',
            'Remember time is ten, not ten twenty!',
          ],
          explanation:
            'Is everything alright? + Just checking in... แสดงความใส่ใจก่อนทักเรื่องเวลา',
        },
        {
          kind: 'gap',
          prompt:
            'เติมก้อนคำลดแรงกระแทก: Before we print the booklet, let us make one quick _____ to the cover font.',
          answer: 'tweak',
          explanation: 'make one quick tweak = ปรับแก้จุดเล็กน้อย (ฟังดูเบาและสร้างสรรค์กว่า saying it is wrong)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษแบบสุภาพไม่ห้วน: "ช่วยอธิบายขั้นตอนการจ่ายเงินให้ฉันฟังทีละขั้นหน่อยได้ไหม?"',
          answer: 'Could you walk me through the payment steps?',
          explanation: 'ใช้ Could you walk me through... แทนคำห้วนๆ อย่าง Tell me',
        },
      ],
      writing:
        'แปลงข้อความแปลตรงจากไทยที่ห้วน 3 ประโยคต่อไปนี้ให้เป็นแชท/อีเมลที่นุ่มนวลและชัดเจน (รวม 4–5 ประโยค): 1) "Tell me why you changed the price." 2) "You forgot to put my name." 3) "Check this file again today."',
      writingSample:
        "Hi Leo, hope your afternoon is going well! Could you walk me through the reasoning behind the updated pricing when you get a moment? Also, looks like my name didn't come through on the presenter list—would you mind adding it before tomorrow? Finally, feel free to double-check page three for one small tweak on the chart labels whenever you have five minutes. Thanks so much!",
      writingNote:
        'เช็กดูว่าไม่มีประโยคไหนตำหนิตรงๆ ว่า You forgot หรือสั่งห้วนๆ ด้วยคำกริยาขึ้นต้นประโยคอย่าง Tell me / Check this',
      speakingTopic:
        'จำลองการแก้ปัญหาหน้างานอย่างใจเย็น: ทวงไฟล์ + ถามความล่าช้า + ขอปรับแก้ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'หลีกเลี่ยง Tell me / Why are you late? / You forgot — ใช้ Could you walk me through, Is everything alright, Looks like... แทน',
        'ใช้น้ำเสียงโทนอบอุ่นและเปิดกว้าง ไม่ขึ้นเสียงแข็งท้ายประโยค',
      ],
    },
    {
      day: 178,
      title: 'Casual Conversation Markers & Friendly Warmth',
      objective:
        'เชื่อมบทสนทนาอย่างเป็นธรรมชาติและอบอุ่นด้วย Casual Markers (by the way, speaking of which, to be honest, no worries at all, whenever you get a chance, long story short)',
      explanation:
        'การพูดเก่งระดับ B2 ไม่ใช่แค่แกรมมาร์ถูก แต่คือ **"การต่อบทสนทนาให้ไหลไม่สะดุด"** คนไทยเวลาเปลี่ยนเรื่องคุยหรือตอบคำขอโทษมักพูดทื่อๆ ว่า *"Wait, I want to talk about..."* หรือ *"It is okay"* แต่เจ้าของภาษาใช้ **Conversation Markers** เพื่อส่งสัญญาณให้คู่สนทนาตามทัน: 1) **`by the way`** (เอ้อ ว่าแต่... — ใช้สลับไปอีกเรื่องแบบนุ่มๆ), 2) **`speaking of which`** (พูดถึงเรื่องนี้แล้วก็พอนึกขึ้นได้... — ใช้เชื่อมต่อจากคำที่อีกฝ่ายเพิ่งพูด!), 3) **`to be honest`** (เอาตรงๆ นะ / พูดตามจริง), 4) **`no worries at all`** (ไม่เป็นไรเลยสักนิด สบายมาก), 5) **`whenever you get a chance`** (เมื่อไหร่ที่คุณว่างค่อยทำก็ได้ ไม่รีบ), 6) **`long story short`** (สรุปสั้นๆ เลยก็คือ... — ตัดบทก่อนเล่าเรื่องยาว)',
      sound: [
        'Linking & Intonation on Discourse Markers',
        'by the way /baɪ ðə ˈweɪ/ · speaking of which /ˈspiː.kɪŋ əv wɪtʃ/ · honest /ˈɒn.ɪst/ · worries /ˈwʌr.iz/',
        'ตัว h ใน honest ไม่ออกเสียง (/ˈɒn.ɪst/) ส่วนคำว่า "speaking_of_which" เชื่อม /ŋ/ เข้ากับ /əv/ และ "no_worries_at_all" เชื่อม z เข้า a เป็น "โน-เวอ-รี-แซท-ทอล" จังหวะลงท้ายนุ่มนวล',
        'ฝึกพูด Marker ทั้ง 6 คำตามจังหวะหายใจจริง แล้วต่อด้วยประโยคสั้นๆ 1 ประโยคต่อตัว',
      ],
      l1: [
        'ตอบคำขอโทษด้วยคำเดิมซ้ำๆ ว่า "Never mind" (ระวัง! หลายบริบท Never mind ฟังดูตัดบทหรือหงุดหงิดนิดๆ!) หรือเปลี่ยนเรื่องแบบไม่มีปี่มีขลุ่ย',
        'คนไทยมักแปล "ไม่เป็นไร" เป็น Never mind ทั้งที่ในชีวิตจริงเจ้าของภาษาใช้ No worries / No problem / It is totally fine แทน',
        'เปลี่ยน Never mind ที่ใช้ปลอบ/รับคำขอโทษ มาเป็น "No worries at all!" และใช้ "Speaking of which," เชื่อมเรื่องที่เกี่ยวข้องทันที',
      ],
      vocab: [
        [
          'by the way',
          'เอ้อ ว่าแต่... / อีกอย่างหนึ่งนะ',
          '/baɪ ðə ˈweɪ/',
          'by the way, did you see',
          'ว่าแต่ คุณได้เห็น...หรือยัง',
        ],
        [
          'speaking of which',
          'พูดถึงเรื่องนี้ก็นึกขึ้นได้พอดี...',
          '/ˈspiː.kɪŋ əv wɪtʃ/',
          'speaking of which, I meant to ask',
          'พูดถึงเรื่องนี้พอดี ฉันตั้งใจจะถามว่า...',
        ],
        [
          'to be honest',
          'เอาตรงๆ นะ / พูดตามความจริง',
          '/tə bi ˈɒn.ɪst/',
          'to be honest, I prefer tea',
          'เอาตรงๆ นะ ฉันชอบชามากกว่า',
        ],
        [
          'no worries',
          'ไม่เป็นไรเลย / สบายมาก',
          '/nəʊ ˈwʌr.iz/',
          'no worries at all',
          'ไม่เป็นไรเลยสักนิดเดียว',
        ],
        [
          'whenever',
          'เมื่อไรก็ตามที่...',
          '/wenˈev.ər/',
          'whenever you get a chance',
          'เมื่อไรก็ตามที่คุณสะดวก/ว่าง',
        ],
        [
          'long story short',
          'เอาสั้นๆ เลยนะ / สรุปก็คือ',
          '/lɒŋ ˈstɔː.ri ʃɔːt/',
          'long story short, we made it',
          'สรุปสั้นๆ ก็คือพวกเราทำได้ทัน',
        ],
        [
          'that reminds me',
          'อ้อ นึกขึ้นได้พอดีเลย',
          '/ðæt rɪˈmaɪndz mi/',
          'oh, that reminds me',
          'โอ้ พอพูดแล้วนึกขึ้นได้เลย',
        ],
      ],
      examples: [
        [
          'No worries at all about the spilled water—let me grab a napkin.',
          'ไม่ต้องห่วงเรื่องน้ำหกเลยสักนิด เดี๋ยวฉันหยิบกระดาษทิชชูให้นะ',
          'ใช้แทน Never mind ที่อาจฟังดูประชดในบางสถานการณ์',
        ],
        [
          'Just send me those Chiang Mai photos whenever you get a chance.',
          'ไว้ส่งรูปทริปเชียงใหม่ให้ฉันตอนไหนก็ได้ที่คุณสะดวกนะ',
        ],
        [
          'Wait—you mentioned hiking last Sunday? Speaking of which, did you try that new trail?',
          'เดี๋ยวนะ เมื่อกี้พูดถึงเดินป่าวันอาทิตย์เหรอ? พูดถึงเรื่องนี้พอดี ได้ลองเส้นทางใหม่หรือยัง?',
        ],
        [
          'To be honest, I felt nervous before the talk, though long story short, everyone loved it.',
          'เอาตรงๆ ตอนแรกฉันประหม่าก่อนขึ้นพูด แต่สรุปสั้นๆ ก็คือทุกคนชอบมาก',
        ],
      ],
      reading:
        'Meeting an old university friend in Ari for iced matcha felt instantly comfortable because neither person rushed the chat. When Mint apologized for arriving ten minutes late due to a sudden downpour, Oak smiled and replied, "No worries at all—I grabbed a window table and ordered extra mango toast." Halfway through catching up on family news, Mint mentioned her sister was learning guitar. "Speaking of which," Oak said, pulling out his phone, "my neighbor just opened a cozy acoustic studio near the station!" That effortless link kept their conversation flowing without awkward pauses. Later, when Mint offered to share notes from a photography workshop she had attended, Oak told her not to rush and to forward the link whenever she got a chance. "By the way," Mint added before grabbing her bag, "to be honest, I almost stayed home because of the rain—long story short, I am really glad I came out today." Warm conversation markers act like gentle bridges between thoughts.',
      listenQ: 'How did Oak respond when Mint apologized for arriving ten minutes late?',
      listenA: 'He smiled and said, "No worries at all," adding that he had grabbed a window table and ordered extra mango toast.',
      dictation: 'Speaking of which, could you text me that link whenever you get a chance?',
      listenNote:
        'ฝึกจับเสียงเชื่อม "whenever_you_get_a_chance" ที่ไหลต่อกันเป็นก้อนเดียว โดย stress หนักตกที่คำว่า EV และ CHANCE',
      drills: [
        {
          kind: 'choice',
          prompt:
            'เพื่อนเพิ่งเล่าว่ากำลังฝึกทำอาหารไทย แล้วคุณอยากถามต่อเรื่องร้านวัตถุดิบที่เพิ่งไปเจอมา ควรเปิดประโยคอย่างไร?',
          answer: 'Speaking of which, have you visited that spice shop near the market?',
          choices: [
            'Never mind, have you visited that spice shop near the market?',
            'Speaking of which, have you visited that spice shop near the market?',
            'Long story short, have you visited that spice shop near the market?',
            'In light of that, have you visited that spice shop near the market?',
          ],
          explanation:
            'Speaking of which = พูดถึงเรื่องนี้แล้วก็นึกถึงอีกเรื่องที่เชื่อมโยงกันพอดี',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบสำนวนรับคำขอโทษอย่างเป็นมิตร: Sorry I mixed up the café branch! — "_____ _____ at all, the other shop is just five minutes away."',
          answer: 'No worries',
          explanation: 'No worries at all = ไม่เป็นไรเลยสักนิด สบายมาก',
        },
        {
          kind: 'error_fix',
          prompt:
            'เปลี่ยนคำตอบรับที่อาจฟังดูแข็งทื่อและปรับ Marker ให้เป็นธรรมชาติ: "A: Sorry for delaying your coffee! B: Never mind. Honest speaking, I waited long."',
          answer:
            'A: Sorry for delaying your coffee! B: No worries at all! To be honest, I did not wait long.',
          explanation:
            'เปลี่ยน Never mind → No worries at all! และ Honest speaking → To be honest',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "สรุปสั้นๆ เลยนะ ไว้ส่งไฟล์ให้ฉันตอนไหนก็ได้ที่คุณว่าง"',
          answer: 'Long story short, send me the file whenever you get a chance.',
          explanation: 'Long story short + whenever you get a chance',
        },
      ],
      writing:
        'เขียนบทสนทนาสั้นๆ 6–8 บรรทัดระหว่างเพื่อน 2 คนที่นัดเจอกันหลังไม่ได้เจอนาน โดยแทรก Markers จากบทอย่างน้อย 4 ตัว (no worries at all, speaking of which, by the way, to be honest, whenever you get a chance, long story short)',
      writingSample:
        "A: Sorry I am five minutes late—the skytrain escalator broke down!\nB: No worries at all! I just grabbed two iced teas. How was your trip to Phuket?\nA: Amazing! Long story short, we got caught in rain on day one, yet the rest of the week was sunny and peaceful.\nB: Oh, speaking of which, did you try that tiny noodle spot near the old town?\nA: Yes! To be honest, it was my favorite meal there. By the way, I took great photos of the street art—I will send them over whenever you get a chance to check your messages!",
      writingNote:
        'เช็กการสะกดคำ: No worries at all (worries เติม s) · To be honest (ไม่ใช่ Honest speaking) · Speaking of which (มี comma หลัง which)',
      speakingTopic:
        'เล่าเรื่องเพื่อนหรือทริปสุดสัปดาห์ให้เพื่อนฟังเหมือนนั่งคุยในร้านกาแฟ 4 / 3 / 2 นาที',
      speakingBullets: [
        'แทรกคำเชื่อมธรรมชาติระหว่างช่วง: By the way..., Speaking of which..., To be honest..., Long story short...',
        'ออกเสียงตัว h ใน honest ไม่ออกเสียง (/ˈɒn.ɪst/) และเชื่อม No worries at all อย่างรื่นหู',
      ],
    },
    {
      day: 179,
      title: 'Formal & Concise Written Phrasing',
      objective:
        'เขียนอีเมลหรือประกาศทางการอย่างกระชับและร่วมสมัย (in light of, further to our discussion, please find attached, at your earliest convenience) โดยเลี่ยงสำนวนโบราณแข็งทื่อเกินจำเป็น',
      explanation:
        'เมื่อเขียนถึงผู้ใหญ่ ลูกค้ารายใหม่ หรือคู่ค้าทางการ เรามักใช้ **Modern Formal Chunks**: 1) **`further to our discussion`** (ต่อเนื่องจากที่เราได้คุยกันไว้), 2) **`in light of`** (เมื่อพิจารณาจากสถานการณ์/ข้อมูลใหม่นี้), 3) **`please find attached`** (ขอแนบไฟล์มาพร้อมอีเมลนี้ — หรือรุ่นทันสมัยขึ้นอีกนิดคือ **`I have attached...`**), 4) **`with regard to`** (เกี่ยวกับเรื่อง...), 5) **`at your earliest convenience`** (ในเวลาที่ท่านสะดวกที่สุดเร็วๆ นี้ — สุภาพกว่า *ASAP!*), 6) **`should you have any questions`** (หากท่านมีคำถามเพิ่มเติม). **ข้อควรระวังยุคใหม่:** อย่าใช้คำโบราณที่คนรุ่นใหม่ไม่ใช้แล้วอย่าง ❌ *"Dear Sir/Madam, I beg to inform you herein..."* หรือ *"Thanking you in anticipation"* เพราะจะฟังดูเหมือนแม่แบบสมัยร้อยปีก่อน!',
      sound: [
        'Thought-Group Pausing in Formal Reading',
        'convenience /kənˈviː.ni.əns/ · regard /rɪˈɡɑːd/ · attached /əˈtætʃt/ · discussion /dɪˈskʌʃ.ən/',
        'เวลาอ่านอีเมลทางการออกเสียงหรือพูดพรีเซนต์ ใช้การหยุดหายใจเป็นก้อนความหมาย (Thought Groups): "In LIGHT of recent up-dates, / we have reVISED the schedule." และระวังตัว t ท้าย attached ออกเสียง /t/ เบาๆ (/əˈtætʃt/)',
        'ฝึกอ่านออกเสียง 4 วลีเปิดอีเมลโดยเว้นจังหวะตามเครื่องหมาย / : Further to our discussion, / · In light of the new timeline, / · With regard to your request, / · Please let me know / at your earliest convenience.',
      ],
      l1: [
        'เขียนอีเมลทางการด้วยสำนวนโบราณที่ท่องจากตำราเก่า ("Dear Sir/Madam, I beg to submit...", "Please kindly do the needful") หรือใส่คำสั่งห้วน "Reply me ASAP"',
        'เข้าใจผิดว่ายิ่งคำยาวและโบราณยิ่งแปลว่า "สุภาพและเก่ง" แต่เจ้าของภาษายุคใหม่มองว่าแข็งทื่อและอ่านยาก',
        'ยึดหลัก "Clear + Courteous + Concise": ใช้ in light of / further to our discussion / at your earliest convenience และลงท้ายแบบอบอุ่นเป็นมนุษย์',
      ],
      vocab: [
        [
          'in light of',
          'เมื่อพิจารณาจาก (สถานการณ์/ข้อมูลใหม่)',
          '/ɪn ˈlaɪt əv/',
          'in light of recent feedback',
          'เมื่อพิจารณาจากข้อเสนอแนะล่าสุด',
        ],
        [
          'further to',
          'สืบเนื่องต่อจาก...',
          '/ˈfɜː.ðər tə/',
          'further to our discussion',
          'สืบเนื่องจากที่ได้หารือกันไว้',
        ],
        [
          'attached',
          'ที่แนบมาด้วย',
          '/əˈtætʃt/',
          'please find attached',
          'ขอแนบเอกสารมาพร้อมนี้',
        ],
        [
          'convenience',
          'ความสะดวก',
          '/kənˈviː.ni.əns/',
          'at your earliest convenience',
          'ในโอกาสแรกที่ท่านสะดวก',
        ],
        [
          'with regard to',
          'เกี่ยวกับ / ในประเด็นเรื่อง...',
          '/wɪð rɪˈɡɑːd tə/',
          'with regard to your inquiry',
          'เกี่ยวกับข้อสอบถามของท่าน',
        ],
        [
          'should you',
          'หากท่าน... (ทางการแทน If you)',
          '/ʃʊd jʊ/',
          'should you have any questions',
          'หากท่านมีข้อสงสัยประการใด',
        ],
        [
          'confirm',
          'ยืนยัน',
          '/kənˈfɜːm/',
          'confirm receipt of',
          'ยืนยันการได้รับเอกสาร/ข้อความ',
        ],
      ],
      examples: [
        [
          'Further to our discussion on Monday, I have attached the revised budget sheet.',
          'สืบเนื่องจากที่เราคุยกันเมื่อวันจันทร์ ดิฉัน/ผมได้แนบตารางงบประมาณฉบับปรับปรุงมาด้วยแล้ว',
        ],
        [
          'In light of rising venue costs, we recommend moving the workshop to May.',
          'เมื่อพิจารณาจากค่าสถานที่ที่สูงขึ้น เราจึงขอแนะนำให้ย้ายเวิร์กชอปไปจัดในเดือนพฤษภาคม',
        ],
        [
          'Could you please confirm receipt of the signed agreement at your earliest convenience?',
          'รบกวนช่วยยืนยันการได้รับสัญญาฉบับลงนามแล้วในโอกาสแรกที่ท่านสะดวกด้วยครับ/ค่ะ',
        ],
        [
          'Should you require further details with regard to shipping, feel free to reply directly.',
          'หากท่านต้องการรายละเอียดเพิ่มเติมเกี่ยวกับการจัดส่ง สามารถตอบกลับอีเมลนี้ได้โดยตรง',
        ],
      ],
      reading:
        'Writing formal emails in modern English no longer requires stiff, nineteenth-century phrases. Clear professionals avoid outdated lines like "I beg to inform you" and instead aim for warmth paired with crisp structure. Imagine preparing a partnership update for a regional cultural festival. Starting with "Further to our discussion on Tuesday" immediately reminds the reader of shared context without wasting three paragraphs of greeting. Next, explaining a schedule adjustment with "In light of recent weather forecasts" sounds objective and thoughtful rather than defensive. When sharing files, either "Please find attached the updated program" or the slightly cleaner "I have attached the updated program" works well. Finally, replacing a pushy "Reply ASAP" with "Could you share your approval at your earliest convenience?" keeps pressure respectful while still signaling priority. Closing with "Should you have any questions, please let me know" leaves the door open cleanly. Modern formal writing succeeds when every sentence saves the reader time and shows quiet respect.',
      listenQ: 'What makes "Further to our discussion on Tuesday" effective at the start of a formal email?',
      listenA: 'It immediately reminds the reader of shared context without wasting extra paragraphs.',
      dictation: 'In light of recent feedback, I have attached the revised proposal.',
      listenNote:
        'ฟังการหยุดวรรคหลังคำว่า feedback และเสียง /t/ ท้ายคำว่า attached (/əˈtætʃt/) ก่อนคำว่า the revised proposal',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้โทนอีเมลทางการที่ "สุภาพ กระชับ และร่วมสมัย" โดยไม่ใช้ภาษาโบราณหรือห้วนเกินไป?',
          answer:
            'Further to our call, please find attached the updated schedule for your review.',
          choices: [
            'Dear Sir/Madam, I beg to submit herewith the schedule ASAP.',
            'Further to our call, please find attached the updated schedule for your review.',
            'Hey boss, attached the schedule below, reply me fast.',
            'Thanking you in anticipation, kindly do the needful right away.',
          ],
          explanation:
            'Further to our call, please find attached... เป็นอีเมลทางการยุคใหม่ที่สุภาพ ชัดเจน และสั้นกระชับ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำ 3 คำให้ครบก้อนคำ: _____ _____ _____ the extra registrations, we have booked a larger seminar hall.',
          answer: 'In light of',
          explanation: 'In light of + noun = เมื่อพิจารณาจาก / เนื่องจากสถานการณ์ใหม่นี้',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้คำผิดและปรับโทนจาก ASAP ที่แข็งทื่อให้สุภาพเป็นมืออาชีพ: "With regards of the contract, please sign and reply ASAP!"',
          answer:
            'With regard to the contract, please sign and return it at your earliest convenience.',
          explanation:
            'ใช้ With regard to (regard ไม่เติม s และใช้คู่ to) และแทน ASAP ด้วย at your earliest convenience',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษแบบทางการกระชับ: "หากท่านมีคำถามเพิ่มเติม โปรดแจ้งให้ดิฉันทราบได้เลยนะคะ"',
          answer: 'Should you have any further questions, please let me know.',
          explanation: 'Should you have... เป็นโครงสร้างเงื่อนไขแบบสุภาพทางการแทน If you have...',
        },
      ],
      writing:
        'เขียนอีเมลสั้นๆ 5–6 ประโยคถึงคู่ค้าหรือวิทยากร (สมมุติชื่อจริง เช่น Ms. Tanaka) แจ้งเลื่อนวันส่งไฟล์และแนบเอกสารใหม่ โดยใช้ Modern Formal Chunks อย่างน้อย 4 ตัว (Further to, In light of, attached, at your earliest convenience, Should you have)',
      writingSample:
        "Dear Ms. Tanaka,\n\nFurther to our discussion on Monday, I have attached the revised workshop outline for your review. In light of the venue team's new setup hours, we moved the morning registration slot by thirty minutes. With regard to the speaker bio section, could you confirm whether the summary on page two looks accurate at your earliest convenience? Should you have any questions or adjustments, please let me know.\n\nWarm regards,\nKorn",
      writingNote:
        'ตรวจเช็กความถูกต้องของบุพบท: Further to (ไม่ใช่ Further of) · In light of · With regard to (regard ไม่มี s) · at your earliest convenience',
      speakingTopic:
        'ฝึกพูดสรุปและแจ้งการเปลี่ยนแปลงงานต่อผู้บริหารหรือลูกค้าแบบกระชับ 4 / 3 / 2 นาที',
      speakingBullets: [
        'เปิดด้วยบริบทเดิม (Further to our last meeting...) → เหตุผลที่ปรับ (In light of...) → สิ่งที่แนบ/ส่งต่อ → เวลาที่รอคำตอบอย่างสุภาพ',
        'ฝึกหยุดจังหวะตาม Thought Groups ให้ออกเสียงชัด นุ่มนวล และน่าเชื่อถือ',
      ],
    },
    {
      day: 180,
      title: 'Apologizing, Thanking & De-escalating Tension across Registers',
      objective:
        'ขอโทษ ขอบคุณ และลดความตึงเครียดได้อย่างมืออาชีพและจริงใจตามระดับความสนิท ตั้งแต่เพื่อนซี้จนถึงลูกค้าที่ไม่พอใจ',
      explanation:
        'เมื่อเกิดข้อผิดพลาด คนไทยมักทำอย่างใดอย่างหนึ่งสุดโต่ง: ไม่พูดว่า *"Sorry, sorry, my fault very much!"* ซ้ำๆ จนดูขาดความมั่นใจ ก็โยนความผิดไปที่ระบบว่า *"Not my fault, the computer error."* เจ้าของภาษาปรับวิธีขอโทษและลดอารมณ์ตึงเครียดตามบริบทชัดเจน: 1) **เพื่อนสนิท:** `My bad—I totally spaced on the time! Let me make it up to you with lunch.` 2) **ทีมงาน:** `I apologize for the mix-up on my end. Here is how I am fixing it right now.` 3) **ลูกค้า/ผู้ใหญ่ (De-escalating):** `My sincere apologies for the inconvenience caused. Thank you for bearing with us while we sort this out, and here is what we are doing to prevent this from happening again.` สำคัญที่สุด: **ขอโทษสั้น + รับผิดชอบ + บอกทางแก้ทันที**',
      sound: [
        'Sincere Downward Intonation & Empathy Stress',
        'apologies /əˈpɒl.ə.dʒiz/ · appreciate /əˈpriː.ʃi.eɪt/ · bear with /beər wɪð/ · inconvenience /ˌɪn.kənˈviː.ni.əns/',
        'ความจริงใจอยู่ที่โทนเสียงต่ำนุ่มและเน้นคำสำคัญอย่างไม่เร่งรีบ: "My sin-CERE a-PO-lo-gies", "Thank you for BEARing with us", "I TRUly apPREciate your patience" — ห้ามพูดเร็วรัวเหมือนท่องสคริปต์!',
        'ฝึกออกเสียง 4 ประโยคโดยใช้น้ำเสียงช้าลง 15% เพื่อสื่อความจริงใจและมั่นคง',
      ],
      l1: [
        'พูดว่า "Sorry very much!" (แกรมมาร์ผิด — ต้องใช้ I am truly sorry) หรือตอบลูกค้าที่โมโหว่า "Calm down! It was system error, not me."',
        'คำว่า Calm down! ในภาษาอังกฤษมักยิ่งกระตุ้นให้อีกฝ่ายโกรธหนักขึ้น เพราะฟังเหมือนสั่งและดูแคลนอารมณ์เขา',
        'เปลี่ยน Calm down เป็นการรับฟัง + ขอบคุณที่บอก: "I completely understand your frustration. Thank you for flagging this—let me fix it right away."',
      ],
      vocab: [
        [
          'apologies',
          'คำขออภัยอย่างสุภาพ',
          '/əˈpɒl.ə.dʒiz/',
          'my sincere apologies for',
          'ขออภัยอย่างจริงใจสำหรับ...',
        ],
        [
          'appreciate',
          'ซาบซึ้ง / ขอบคุณอย่างยิ่ง',
          '/əˈpriː.ʃi.eɪt/',
          'truly appreciate your patience',
          'ขอบคุณสำหรับความอดทนรออย่างยิ่ง',
        ],
        [
          'make it up to',
          'ชดเชยให้เพื่อให้รู้สึกดีขึ้น',
          '/meɪk ɪt ˈʌp tə/',
          'make it up to someone',
          'เลี้ยง/ทำบางอย่างชดเชยให้...',
        ],
        [
          'bear with',
          'อดทนรอสักครู่ระหว่างกำลังแก้ไข',
          '/beər wɪð/',
          'thank you for bearing with us',
          'ขอบคุณที่อดทนรอระหว่างที่เราแก้ไข',
        ],
        [
          'mix-up',
          'ความสับสนคลาดเคลื่อนเรื่องข้อมูล/คิว',
          '/ˈmɪks.ʌp/',
          'apologize for the mix-up',
          'ขออภัยสำหรับความสับสนคลาดเคลื่อน',
        ],
        [
          'smooth over',
          'คลี่คลายบรรยากาศให้กลับมาดี',
          '/smuːð ˈəʊ.vər/',
          'smooth things over quickly',
          'คลี่คลายสถานการณ์ให้ลงตัวเร็ว',
        ],
        [
          'prevent',
          'ป้องกันไม่ให้เกิดซ้ำ',
          '/prɪˈvent/',
          'prevent this from happening again',
          'ป้องกันไม่ให้เรื่องนี้เกิดขึ้นซ้ำอีก',
        ],
      ],
      examples: [
        [
          'My bad on mixing up the café address—let me make it up to you with dessert!',
          'ความผิดฉันเองที่จำที่อยู่ร้านกาแฟผิด เดี๋ยวฉันเลี้ยงขนมหวานชดเชยให้นะ!',
        ],
        [
          'I completely understand why you feel frustrated, and I am fixing the link right now.',
          'ฉันเข้าใจดีเลยว่าทำไมคุณถึงหงุดหงิด และตอนนี้ฉันกำลังแก้ลิงก์ให้อยู่พอดี',
        ],
        [
          'Thank you for bearing with us while we verify your updated order details.',
          'ขอบคุณที่อดทนรอระหว่างที่เรากำลังตรวจสอบรายละเอียดคำสั่งซื้อฉบับอัปเดตของคุณ',
        ],
        [
          'My apologies for the mix-up; we have updated our checklist to prevent this from happening again.',
          'ขออภัยสำหรับความสับสนคลาดเคลื่อนครับ/ค่ะ เราได้ปรับปรุงเช็กลิสต์เพื่อป้องกันไม่ให้เกิดขึ้นซ้ำอีกแล้ว',
        ],
      ],
      reading:
        'Everyone makes mistakes, yet how you apologize shapes whether relationships break or grow stronger. One Thursday, Ton faced two awkward blunders before noon. First, he completely forgot his close friend Khao’s morning coffee meetup while rushing between errands. Instead of writing ten dramatic messages, Ton called immediately: "My bad, Khao—I totally spaced out on Thursday! Please let me make it up to you with dinner tonight." Khao laughed it off, and tension vanished in seconds. An hour later, Ton noticed a bigger slip at work: he had emailed the wrong workshop link to thirty paying attendees, leaving several confused in the lobby chat. This time, casual slang would sound careless, while blaming the software would sound defensive. Ton sent a calm message right away: "My sincere apologies for the mix-up this morning. Thank you so much for bearing with us—here is the active link now, and we are adding a double-check step to prevent this from happening again." By owning the fix quickly in the right register, he smoothed things over with ease.',
      listenQ: 'How did Ton handle sending the wrong workshop link to thirty attendees?',
      listenA: 'He apologized sincerely for the mix-up, thanked them for bearing with him, shared the active link, and explained how he would prevent it from happening again.',
      dictation: 'Thank you for bearing with us while we sort this out.',
      listenNote:
        'จำคำว่า bear (/beər/) แปลว่าอดทนรอ ไม่ใช่ beer! และฟังเสียงเชื่อม "sort_this_out" ท้ายประโยค',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ลูกค้ากำลังหงุดหงิดเพราะระบบจองห้องพักส่งอีเมลยืนยันซ้ำสองรอบ ควรตอบลดความตึงเครียดอย่างไร?',
          answer:
            'I understand the frustration, and my apologies for the mix-up—I am refunding the duplicate charge right now.',
          choices: [
            'Calm down! You clicked the button twice, not our system fault.',
            'Sorry very much!! Please forgive me forever!',
            'I understand the frustration, and my apologies for the mix-up—I am refunding the duplicate charge right now.',
            'My bad bro! No worries at all, chill out.',
          ],
          explanation:
            'สูตรลดแรงปะทะมืออาชีพ: ยอมรับความรู้สึกอีกฝ่าย + ขอโทษสั้นจริงใจ + บอกวิธีแก้ไขที่กำลังทำทันที',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบก้อนคำ: We added a final review step to _____ this from happening again.',
          answer: 'prevent',
          explanation: 'prevent X from happening again = ป้องกันไม่ให้เรื่องนี้เกิดซ้ำอีก',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้คำผิดและปรับโทนขอโทษเพื่อนให้เป็นธรรมชาติ: "I sorry very much for late! I will return good thing to you next meal."',
          answer:
            'My bad for running late! Let me make it up to you at our next meal.',
          explanation:
            'ห้ามพูด I sorry very much! กับเพื่อนใช้ My bad / I am so sorry for running late และใช้ make it up to you (ชดเชยให้)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษแบบมืออาชีพ: "ขอขอบคุณที่อดทนรอระหว่างที่เราช่วยคลี่คลายเรื่องนี้นะครับ/คะ"',
          answer: 'Thank you for bearing with us while we smooth this over.',
          explanation: 'bear with us + smooth this over (คลี่คลายสถานการณ์ให้ราบรื่น)',
        },
      ],
      writing:
        'เขียนคำขอโทษ + ทางแก้ไข 2 แบบสำหรับความผิดพลาดเดียวกัน (เช่น ส่งของช้า หรือลืมส่งไฟล์สำคัญ): แบบ A ถึงเพื่อนสนิท (2–3 ประโยค) และ แบบ B ถึงลูกค้าหรือพาร์ทเนอร์ (4–5 ประโยค)',
      writingSample:
        "Version A (Friend): Oh no, my bad for forgetting your camera cable at home today! I know you needed it before noon—let me make it up to you by dropping it off tonight along with iced milk tea.\n\nVersion B (Client): Dear Khun Nida, my sincere apologies for the delay on the packaging mockup today. I truly appreciate your patience and thank you for bearing with us while our printer corrected a color proof. I have attached the final file now, and we have added an extra morning buffer to prevent this from happening again.",
      writingNote:
        'ตรวจดูว่าไม่มีคำว่า Calm down หรือ Sorry very much หลุดมา และทุกแบบบอกทั้งคำขอโทษ + การแก้ไขชัดเจน',
      speakingTopic:
        'จำลองรับมือ 2 สถานการณ์ผิดพลาดติดกัน: ขอโทษเพื่อน vs คลี่คลายอารมณ์ลูกค้า 4 / 3 / 2 นาที',
      speakingBullets: [
        'พูดให้ครบ 3 จังหวะกับลูกค้า: รับฟัง (I understand...) → ขอโทษ (My apologies for the mix-up) → ลงมือแก้และป้องกันซ้ำ (prevent this from happening again)',
        'ควบคุมน้ำเสียงให้ช้าและมั่นคง ไม่พูดรัวด้วยความตกใจ',
      ],
    },
    {
      day: 181,
      title: 'Shifting Seamlessly Between Voice Chat and Written Follow-up',
      objective:
        'สื่อสารต่อเนื่องแบบไร้รอยต่อระหว่าง "การคุยสาย/ประชุมสั้นๆ ที่เป็นกันเอง" กับ "การสรุปเป็นข้อความลายลักษณ์อักษรที่กระชับชัดเจน"',
      explanation:
        'ในชีวิตทำงานยุค Hybrid การคุยสายสั้นๆ กับการส่งข้อความตามหลังต้องไปคู่กัน! **ตอนคุยเสียง (Voice Call)** คุณใช้ภาษาพูดที่เป็นธรรมชาติ ถามไถ่และยืดหยุ่นได้ (`Quick question—what do you think if...?`, `Let us circle back to that after lunch.`) แต่ **พอจบสายภายใน 5 นาที** ถ้าไม่เขียนสรุป คนฟังอาจจำคลาดเคลื่อน การเปลี่ยนโหมดมาเป็น **Written Follow-up** คือการตัดคำฟุ่มเฟือยออกแล้วสรุปด้วย: **`As promised, here is a quick recap of our call`**, **`Just to recap what we agreed`**, และ **`Action items / Next steps`** พร้อมระบุ "ใคร ทำอะไร เมื่อไร" ให้ชัดใน 3–5 บรรทัด',
      sound: [
        'Conversational Contractions vs Crisp Recap Read-Back',
        'promised /ˈprɒm.ɪst/ · recap /ˈriː.kæp/ · circle /ˈsɜː.kəl/ · priority /praɪˈɒr.ə.ti/',
        'ตอนคุยเสียงจะย่อคำเร็ว เช่น "on_the_call", "gonna circle back" แต่เวลาอ่านทวนหัวข้อ Action items จะเปลี่ยนมาเน้นชัดที่คำกริยาและวันที่ (e.g., "by THURSday NOON") เพื่อให้ผู้ฟังจดทัน',
        'ฝึกเปลี่ยนจังหวะ 2 ท่อน: พูดเร็วแบบคุยสาย 2 ประโยค แล้วชะลออ่านสรุป 3 Action items ให้ชัดทุกตัวเลขและวัน',
      ],
      l1: [
        'เวลาเขียนสรุปหลังคุยสาย ชอบเขียนเรียงเป็นย่อหน้ายาวเหมือนถอดเทปทุกคำ ("Today we talked about many things and then he said...") จนคนอ่านหาข้อสรุปไม่เจอ',
        'ไม่แยกความต่างระหว่าง "การคุยระดมสมอง (พูด)" กับ "บันทึกการตัดสินใจ (เขียน)"',
        'ใช้สูตร 3 ท่อนหลังจบสาย: 1) As promised / Just to recap... 2) ข้อตกลงสั้น 2–3 ขีด 3) Next step + เวลาส่งชัดๆ',
      ],
      vocab: [
        [
          'as promised',
          'ตามที่รับปาก/สัญญาไว้',
          '/əz ˈprɒm.ɪst/',
          'as promised on our call',
          'ตามที่บอกไว้ตอนคุยสายเมื่อสักครู่',
        ],
        [
          'recap',
          'สรุปใจความสำคัญสั้นๆ',
          '/ˈriː.kæp/',
          'just to recap',
          'ขอสรุปสั้นๆ เพื่อความตรงกันนะ',
        ],
        [
          'circle back',
          'วนกลับมาคุย/อัปเดตเรื่องนั้นอีกครั้ง',
          '/ˈsɜː.kəl bæk/',
          'circle back to this topic',
          'กลับมาดูประเด็นนี้อีกที',
        ],
        [
          'keep things moving',
          'เดินหน้างานต่อไม่ให้ค้างคา',
          '/kiːp θɪŋz ˈmuː.vɪŋ/',
          'to keep things moving',
          'เพื่อให้งานเดินหน้าต่อไปได้',
        ],
        [
          'action items',
          'รายการสิ่งที่ต้องลงมือทำต่อ',
          '/ˈæk.ʃən ˈaɪ.təmz/',
          'agree on clear action items',
          'ตกลงรายการที่ต้องทำต่อให้ชัด',
        ],
        [
          'align on',
          'ปรับความเข้าใจและเป้าหมายให้ตรงกัน',
          '/əˈlaɪn ɒn/',
          'align on next steps',
          'เห็นพ้องตรงกันในก้าวถัดไป',
        ],
        [
          'slip through the cracks',
          'ตกหล่นไปโดยไม่มีใครสังเกต',
          '/slɪp θruː ðə kræks/',
          'nothing slips through the cracks',
          'ไม่มีงานไหนตกหล่น',
        ],
      ],
      examples: [
        [
          'As promised on our call, here is the café menu link and budget note.',
          'ตามที่รับปากไว้ในสาย นี่คือลิงก์เมนูร้านกาแฟและโน้ตงบประมาณครับ/ค่ะ',
        ],
        [
          'Just to recap, we are launching the landing page on Thursday morning.',
          'ขอสรุปสั้นๆ เพื่อความตรงกันนะ พวกเราจะเปิดหน้าเว็บเช้าวันพฤหัสบดี',
        ],
        [
          'Let us circle back to the shipping quote once the supplier replies tomorrow.',
          'เดี๋ยวเรากลับมาดูใบเสนอราคาค่าขนส่งอีกครั้งทันทีที่ซัพพลายเออร์ตอบพรุ่งนี้นะ',
        ],
        [
          'Listing three clear action items ensures nothing slips through the cracks.',
          'การลิสต์รายการที่ต้องทำสามข้อให้ชัดช่วยให้มั่นใจว่าไม่มีอะไรตกหล่น',
        ],
      ],
      reading:
        'A lively fifteen-minute voice call solves tricky questions far faster than thirty back-and-forth texts, yet spoken promises fade quickly if nobody writes them down. Earlier today, freelance UX designer Kanya jumped on a quick call with the founder of a small bakery chain. During the voice chat, their tone stayed warm and flexible: "Wait—let us circle back to the loyalty screen after checking delivery fees," Kanya laughed while sketching notes on paper. Two minutes after hanging up, she switched smoothly into clean written mode. Knowing busy founders scan messages on the go, she skipped small talk and sent a concise three-line Slack recap: "Thanks for the great chat! As promised, just to recap what we aligned on: 1) Keep checkout to two screens, 2) Test the dark header tomorrow, and 3) Circle back on Friday at 10:00 a.m. to finalize photos." Nothing slipped through the cracks, and the team kept things moving without needing another meeting.',
      listenQ: 'How did Kanya keep the bakery founder from forgetting what they decided on the voice call?',
      listenA: 'Two minutes after hanging up, she sent a concise three-line written recap listing the decisions and next check-in time.',
      dictation: 'Just to recap, here are our next action items to keep things moving.',
      listenNote:
        'ฟังการเน้นเสียงคำว่า REcap (/ˈriː.kæp/ คำนามเน้นพยางค์แรก) และ ACtion items กับจังหวะเชื่อม keep_things_moving',
      drills: [
        {
          kind: 'choice',
          prompt:
            'หลังคุยโทรศัพท์กับเพื่อนร่วมทีมเสร็จ ข้อความเปิดสรุปใดเป็นธรรมชาติและช่วยให้ไม่มีงานตกหล่น?',
          answer:
            'Thanks for the quick chat! Just to recap our action items before Friday:',
          choices: [
            'Today we spoke on the phone for 15 minutes and I heard your voice clearly:',
            'Thanks for the quick chat! Just to recap our action items before Friday:',
            'I am writing to inform you that we talked and now you must remember:',
            'Long story short, please read my mind about what we said earlier:',
          ],
          explanation:
            'Just to recap our action items... กระชับ ชวนร่วมมือ และนำเข้าสู่รายการงานต่อได้ทันที',
        },
        {
          kind: 'gap',
          prompt:
            'เติมก้อนคำ 2 คำที่ขาด: Writing down deadlines ensures no tiny detail _____ _____ the cracks.',
          answer: 'slips through',
          explanation: 'slip through the cracks = ตกหล่นหายไปโดยไม่ตั้งใจ',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้คำสะกดและสำนวนในข้อความสรุปหลังประชุม: "As promise on our call, let us circle behind to the logo on Monday."',
          answer:
            'As promised on our call, let us circle back to the logo on Monday.',
          explanation: 'ใช้ As promised (V3) และ circle back to (ไม่ใช้ circle behind)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ตามที่รับปากไว้ นี่คือสรุปสั้นๆ เพื่อให้งานเดินหน้าต่อ"',
          answer: 'As promised, here is a quick recap to keep things moving.',
          explanation: 'As promised + a quick recap + to keep things moving',
        },
      ],
      writing:
        'จำลองสถานการณ์ว่าคุณเพิ่งวางสายคุยงาน/วางแผนทริปกับเพื่อนหรือลูกค้าเสร็จ ให้เขียนข้อความ Written Follow-up 4–5 บรรทัดโดยใช้ As promised, Just to recap, Action items (ลิสต์ 2–3 ข้อ), และ circle back',
      writingSample:
        "Thanks for hopping on a quick call earlier! As promised, here is a short note so nothing slips through the cracks.\n\nJust to recap what we aligned on:\n- Ploy will share the café shortlist by Wednesday noon.\n- I will check train seat availability tonight to keep things moving.\n- Let us circle back on Thursday evening to lock in our weekend bookings!",
      writingNote:
        'ดูความกระชับของข้อความเขียน: เปิดสั้น 1 บรรทัด ใช้ bullet สั้นขึ้นต้นด้วยคน+กริยา+กำหนดเวลา และปิดด้วยนัดรอบหน้า',
      speakingTopic:
        'ฝึก 2 โหมดในครั้งเดียว: พูดคุยสาย 2 นาทีแรก → อ่านสรุป Action items 1 นาทีท้าย (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ครึ่งแรกใช้โทนพูดธรรมชาติ (Quick question, let us circle back) · ครึ่งหลังเปลี่ยนจังหวะเป็นอ่านสรุปชัด (Just to recap, action items)',
        'เน้นความชัดเจนของชื่อคน ตัวเลข และวันเวลาในตอนสรุป',
      ],
    },
    {
      day: 182,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 26 — Register Calibration & Tone + Dictogloss',
      objective:
        'ประเมินความแม่นยำในการปรับโทน 3 ระดับ (Casual / Neutral / Formal), ลบประโยคแข็งทื่อแบบแปลไทยตรงตัว, ลดอารมณ์ตึงเครียด และสรุปงานหลังคุยสายผ่าน Dictogloss',
      explanation:
        'สัปดาห์ที่ 26 พาคุณก้าวข้ามกำแพงสำคัญของผู้เรียนไทย: **การพูดอังกฤษให้ถูก "กาละเทศะและน้ำเสียง"**! เราได้ฝึก: 1) ปรับคำเดียวกันเป็น 3 โทน (`push back` ↔ `shift` ↔ `reschedule`), 2) ลบคำสั่งห้วนแบบแปลไทย (*Tell me / You forgot*) เป็นตัวเชื่อมสุภาพ (`Could you walk me through...`, `Looks like...`), 3) เติมความอบอุ่นด้วย Casual Markers (`Speaking of which`, `No worries at all`, `Whenever you get a chance`), 4) เขียนอีเมลทางการยุคใหม่ที่กระชับ (`In light of`, `Further to`, `At your earliest convenience`), 5) ขอโทษและลดความขัดแย้งอย่างมืออาชีพ (`My bad / Make it up to you` vs `Bear with us / Prevent this from happening again`), และ 6) ปิดจบสายด้วย Written Recap วันนี้มาทวนครบทุกมิติผ่าน Dictogloss!',
      sound: [
        'Register Tone Switching & Connected Speech Audit',
        'reschedule /ˌriːˈʃed.juːl/ · convenience /kənˈviː.ni.əns/ · apologies /əˈpɒl.ə.dʒiz/ · honest /ˈɒn.ɪst/',
        'ทำ Shadowing บทอ่านวันนี้ โดยสังเกตการเปลี่ยนจังหวะของเสียงพูดเมื่อผู้เล่าเปลี่ยนจากการแชทกับอาสาสมัคร ไปเป็นอีเมลถึงพาร์ทเนอร์เทศบาล',
        'อ่านประโยคทวน 3 โทนคนละความเร็วและโทนเสียงเพื่อเช็กความคล่องของปากและหู',
      ],
      l1: [
        'เมื่อต้องเขียนหรือพูดเร็วๆ มักกลับไปปนโทนในข้อความเดียวกัน เช่น เปิดด้วย "Dear Khun Somchai" แล้วลงท้ายด้วย "No worries bro, reply ASAP!"',
        'ความเร่งรีบทำให้สมองหยิบประโยคที่คุ้นมือที่สุดโดยไม่เช็กความสัมพันธ์กับผู้ฟัง',
        'สร้างนิสัยเช็ก 3 วินาทีก่อนกดส่ง: 1) คุยกับใคร (เพื่อน / ทีม / ลูกค้า) 2) น้ำเสียงเปิดประโยคนุ่มพอหรือยัง 3) โทนตั้งแต่ต้นจนจบสอดคล้องกันไหม',
      ],
      vocab: [
        [
          'push back',
          'เลื่อนออกไป (โทนสนิท/ทีม)',
          '/pʊʃ bæk/',
          'push the call back',
          'เลื่อนเวลาโทรออกไปก่อน',
        ],
        [
          'walk through',
          'ช่วยอธิบายทีละขั้นอย่างสุภาพ',
          '/wɔːk θruː/',
          'walk someone through a plan',
          'อธิบายแผนให้ฟังทีละขั้น',
        ],
        [
          'speaking of which',
          'พูดถึงเรื่องนี้แล้วก็นึกขึ้นได้พอดี',
          '/ˈspiː.kɪŋ əv wɪtʃ/',
          'speaking of which, let me check',
          'พูดถึงเรื่องนี้พอดี เดี๋ยวฉันเช็กให้',
        ],
        [
          'in light of',
          'เมื่อพิจารณาจาก...',
          '/ɪn ˈlaɪt əv/',
          'in light of new details',
          'เมื่อพิจารณาจากข้อมูลใหม่',
        ],
        [
          'bear with',
          'อดทนรอสักครู่ระหว่างกำลังแก้ไข',
          '/beər wɪð/',
          'bear with us briefly',
          'รอสักครู่ระหว่างที่เราปรับปรุง',
        ],
        [
          'just to recap',
          'ขอสรุปสั้นๆ ให้ตรงกัน',
          '/dʒʌst tə ˈriː.kæp/',
          'just to recap key steps',
          'ขอสรุปขั้นตอนหลักสั้นๆ',
        ],
        [
          'whenever you get a chance',
          'เมื่อไรที่คุณสะดวกค่อยทำ',
          '/wenˈev.ər jʊ ɡet ə tʃɑːns/',
          'reply whenever you get a chance',
          'ตอบกลับเมื่อไหร่ก็ได้ที่สะดวก',
        ],
      ],
      examples: [
        [
          'No worries at all—just drop by whenever you get a chance this afternoon.',
          'ไม่เป็นไรเลย แวะมาตอนไหนก็ได้ที่สะดวกช่วงบ่ายนี้นะ',
        ],
        [
          'Could you walk me through the changes before we send this out?',
          'ช่วยเล่าจุดที่แก้ไขให้ฟังหน่อยได้ไหมก่อนเราส่งอันนี้ออกไป?',
        ],
        [
          'In light of the rain forecast, would it be possible to shift the setup indoors?',
          'เมื่อพิจารณาจากพยากรณ์ฝน พอจะเป็นไปได้ไหมที่จะย้ายจุดจัดงานเข้ามาในร่ม?',
        ],
        [
          'As promised on our call, here is a quick recap so nothing slips through the cracks.',
          'ตามที่รับปากไว้ตอนคุยสาย นี่คือสรุปสั้นๆ เพื่อไม่ให้มีเรื่องไหนตกหล่น',
        ],
      ],
      reading:
        'Organizing a neighborhood book swap taught Namo how quickly tone shifts in a single afternoon. At noon, she texted her volunteer crew warmly: "Hey everyone, no worries at all about the missing banners—speaking of which, drop extra tape in my bag whenever you get a chance!" An hour later, a vendor arrived flustered after a delivery mix-up. Rather than snapping, Namo lowered her voice calmly: "I understand how stressful traffic was today. Thank you for bearing with us while we clear a corner table for your boxes." That brief calm response smoothed things over immediately. Once booths opened, Namo jumped on a quick voice call with a printing partner and sent a crisp follow-up two minutes later: "As promised, just to recap, we will finalize the flyer color tomorrow morning." Finally, before heading home, she wrote to the city community office: "Further to our discussion, in light of higher turnout, please find attached the updated guest count at your earliest convenience." Mastering register means staying authentically yourself in every room.',
      listenQ: 'How did Namo de-escalate the flustered vendor who arrived after a delivery mix-up?',
      listenA: 'She lowered her voice calmly, acknowledged how stressful traffic was, and thanked the vendor for bearing with them while clearing a corner table.',
      dictation: 'In light of higher turnout, please find attached the updated count.',
      listenNote:
        'สังเกตความเปลี่ยนแปลงของโทนและจังหวะเสียงในบทอ่านตั้งแต่แชทเพื่อนร่วมทีม → คุยปลอบพ่อค้า → สรุปงานหลังโทร → อีเมลราชการ/เทศบาล',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้อีเมลถึงลูกค้าที่ปนโทนผิดและมีคำแปลตรงจากไทย 3 จุด: "Dear Khun Aom, you forgot to attach the file. Tell me why now, no worries bro!"',
          answer:
            'Dear Khun Aom, looks like the file did not come through. Could you walk me through the details when you get a moment?',
          explanation:
            '1) ลบคำกล่าวโทษว่า you forgot 2) เปลี่ยนคำสั่ง Tell me why เป็น Could you walk me through... 3) ตัดสแลง no worries bro ออกจากอีเมลลูกค้า',
        },
        {
          kind: 'dictogloss',
          prompt:
            'ฟังประโยคจากบทอ่านแล้วเลือกคำที่ตรงกันทุกประการ: "Thank you for _____ while we clear a corner table for your boxes."',
          answer: 'bearing with us',
          choices: [
            'waiting on us',
            'bearing with us',
            'carrying with us',
            'putting up us',
          ],
          explanation:
            'จากบทอ่าน: "Thank you for bearing with us while we clear a corner table for your boxes."',
          audio_text:
            'Thank you for bearing with us while we clear a corner table for your boxes.',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ Casual Marker และความอบอุ่นกับเพื่อนสนิทได้อย่างถูกต้องเป็นธรรมชาติ?',
          answer:
            'No worries at all about the delay—speaking of which, want to grab iced tea first?',
          choices: [
            'Never mind about the delay—further to our discussion, want iced tea?',
            'No worries at all about the delay—speaking of which, want to grab iced tea first?',
            'My sincere apologies for the inconvenience—reply ASAP about iced tea.',
            'Calm down about the delay—in light of which, drink iced tea.',
          ],
          explanation:
            'No worries at all + speaking of which เข้ากันอย่างเป็นธรรมชาติและอบอุ่นสำหรับเพื่อนสนิท',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเปิดอีเมลทางการที่สืบเนื่องจากเรื่องที่เคยคุยกัน: _____ _____ our discussion yesterday, we have prepared the revised outline.',
          answer: 'Further to',
          explanation: 'Further to our discussion = สืบเนื่องต่อจากที่ได้หารือกันไว้',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษในโทนทีมงานสุภาพ: "ขอสรุปสั้นๆ ตามที่รับปากไว้ เพื่อไม่ให้มีอะไรตกหล่นนะ"',
          answer:
            'As promised, just to recap so nothing slips through the cracks.',
          explanation:
            'As promised + just to recap + so nothing slips through the cracks',
        },
      ],
      writing:
        'เลือกสถานการณ์จริง 1 เรื่อง (เช่น งานกลุ่ม เปลี่ยนเวลานัด หรือแก้ปัญหาให้คนอื่น) แล้วเขียนข้อความ 2 ชิ้นคู่กัน: ชิ้นที่ 1 แชทคุยกับเพื่อนร่วมทีมแบบเป็นกันเองแต่อบอุ่น (3–4 ประโยค) และชิ้นที่ 2 อีเมลแจ้งคู่ค้า/ลูกค้าอย่างสุภาพกระชับ (4–5 ประโยค)',
      writingSample:
        "1) Team Chat: Hey team! No worries at all if the draft photos aren't final yet. Just to recap our morning call, could you walk me through any layout tweaks whenever you get a chance today? That way nothing slips through the cracks before tomorrow.\n\n2) Partner Email: Dear Khun Suda,\nFurther to our discussion on Tuesday, in light of updated venue hours, I have attached the revised event schedule. My apologies for any confusion caused by yesterday's earlier draft. Please confirm if the new time suits your team at your earliest convenience. Should you have any questions, let me know.\nBest regards,\nMook",
      writingNote:
        'ตรวจความสม่ำเสมอของโทนในแต่ละชิ้น: ไม่เอาคำสนิท (no worries, hey) ไปปนในอีเมลทางการ และไม่เอาคำแข็ง (attached herewith, ASAP) ไปใส่ในแชททีม',
      speakingTopic:
        'สวมบทบาทเล่าวันทำงานที่ต้องสลับโทนคุยกับคน 3 กลุ่ม (เพื่อน → ทีมงาน → ลูกค้า) 4 / 3 / 2 นาที',
      speakingBullets: [
        'แสดงให้เห็นการเลือกคำที่ต่างกันจริงในทั้ง 3 บทสนทนา (push back vs shift vs reschedule · my bad vs apologies)',
        'ฝึกจังหวะพูดให้ลื่นไหลและมั่นใจในรอบ 2 นาทีสุดท้าย',
      ],
    },
  ]
);
