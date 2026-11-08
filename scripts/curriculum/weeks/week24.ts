import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 3: คิดเป็นภาษาอังกฤษและสื่อสารในงานจริง';

export const WEEK24: ModuleSeed = createModule(
  {
    week: 24,
    phase: 3,
    phase_title: PHASE_TITLE,
    cefr_level: 'Early B2',
    title: 'สื่อสารในงานจริง & Milestone Assessment Phase 3',
    summary:
      'ประยุกต์ใช้ B1 เต็มรูปแบบในสถานการณ์ทำงานจริง การอัปเดตงาน แจ้งเลื่อนกำหนด ประสานงานลูกค้า และการประเมินผลใหญ่จบ Phase 3',
    focus: 'Workplace Communication, Status Updates, Delay Handling & Phase 3 Assessment',
  },
  [
    {
      day: 162,
      title: 'อัปเดตงานรายวันให้กระชับและโปร่งใส (Daily Standups & Status Updates)',
      objective:
        'ใช้ก้อนคำอัปเดตสถานะงาน (making good progress on, wrapping up, on track to, currently blocked by, pending review) ให้ทีมเห็นภาพงานและตัวติดขัดภายใน 45 วินาที',
      explanation:
        'ในการประชุมสั้นตอนเช้า (Standup) หรือพิมพ์อัปเดตในห้องแชทงาน คนไทยมักพูดคลุมเครือว่า *"Yesterday I do report. Today continue, still have small problem."* ทำให้หัวหน้าและเพื่อนร่วมทีมไม่รู้ว่างานเสร็จเมื่อไรและติดตรงไหน! ให้เปลี่ยนมาใช้สูตรอัปเดต **3 จังหวะระดับมืออาชีพ**: 1) **ความคืบหน้า (`wrapping up` / `making good progress on`)**: `I’m wrapping up the client slides this morning.` (กำลังเก็บงานขั้นสุดท้ายแล้ว) 2) **เป้าส่งมอบ (`on track to` / `aiming to`)**: `I’m on track to share the draft by 3 p.m.` (ยังอยู่ในกำหนดที่จะส่งบ่ายสาม) 3) **ตัวติดขัดและสิ่งที่ต้องการ (`currently blocked by` / `pending review`)**: `I’m currently blocked by missing sales figures from finance.` การใช้ Passive (`blocked by`) ช่วยชี้ปัญหาที่ตัวข้อมูลหรือขั้นตอนโดยไม่ฟังดูตำหนิเพื่อนร่วมงาน',
      sound: [
        'Linking & Rhythm in Status Phrasal Chunks',
        'wrapping up /ˈræp.ɪŋ ʌp/ · on track to /ɒn ˈtræk.tə/ · blocked by /blɒkt baɪ/',
        'วลี "wrapping up" เชื่อมท้าย -ing เบาเข้า "up" เป็น "แร็ป-พิง-งัพ" ส่วน "blocked by" ออกเสียง /t/ ลงท้าย -ed แล้วปล่อยลมเข้าเสียง /b/ ทันทีโดยไม่ออกเสียงว่า "บล็อก-เก็ด-บาย"!',
        'ฝึกพูดอัปเดต 3 ประโยคจบภายใน 20 วินาที: "I’m wrapping up X. / I’m on track to send it by four. / One section is pending review."',
      ],
      l1: [
        'พูดว่า "I finish 80% already, still stuck a bit" หรือออกเสียง "blocked" เป็น 2 พยางค์ ("บล็อก-เก็ด") และใช้ Present Simple "I finish it today."',
        'แปลตรงตัวจาก "ทำเสร็จไปแล้ว 80%" และคุ้นชินกับการลงท้ายคำที่อ่านตามตัวอักษร (-ed) โดยไม่เช็กว่าเสียง /k/ + -ed อ่านเป็น /t/',
        'ใช้วลีชุด 3 ก้าว: ใกล้จบ = wrapping up / making solid progress · ทันกำหนด = on track to · รอสิ่งค้าง = currently blocked by / pending review',
      ],
      vocab: [
        ['wrap up', 'สรุปจบ / เก็บงานขั้นสุดท้าย', '/ræp ʌp/', 'wrapping up the final edits', 'กำลังเก็บงานแก้ไขขั้นสุดท้าย'],
        ['on track', 'เป็นไปตามแผน / ทันกำหนด', '/ɒn træk/', 'on track to launch', 'อยู่ในกำหนดที่จะเปิดตัว'],
        ['blocked', 'ติดขัด / ชะงักชั่วคราวเพราะปัจจัยหนึ่ง', '/blɒkt/', 'currently blocked by', 'กำลังติดขัดอยู่ที่...'],
        ['pending', 'อยู่ระหว่างรอการดำเนินการ', '/ˈpen.dɪŋ/', 'pending client approval', 'รอการอนุมัติจากลูกค้า'],
        ['hand over', 'ส่งมอบงานต่อให้คนอื่น', '/hænd ˈəʊ.vər/', 'hand over the updated deck', 'ส่งมอบสไลด์ชุดอัปเดตต่อ'],
        ['prioritize', 'จัดลำดับความสำคัญ', '/praɪˈɒr.ɪ.taɪz/', 'prioritize urgent fixes', 'จัดลำดับงานแก้เร่งด่วนก่อน'],
        ['bottleneck', 'คอขวด / จุดที่ทำให้งานชะงัก', '/ˈbɒt.əl.nek/', 'spot a workflow bottleneck', 'มองเห็นคอขวดในขั้นตอนงาน'],
      ],
      examples: [
        ['I’m making good progress on the quarterly summary and should wrap it up before lunch.', 'ฉันกำลังทำสรุปรายไตรมาสคืบหน้าไปได้ดี และน่าจะปิดงานเสร็จก่อนมื้อเที่ยง'],
        ['Our design team is on track to hand over the website mockups by Thursday afternoon.', 'ทีมออกแบบของเราอยู่ในกำหนดที่จะส่งมอบภาพตัวอย่างเว็บไซต์ภายในบ่ายวันพฤหัสบดี'],
        ['Testing is currently blocked by an expired test account, so I’ve requested a reset.', 'การทดสอบตอนนี้ติดอยู่ที่บัญชีทดสอบหมดอายุ ฉันเลยแจ้งขอรีเซ็ตไปแล้ว'],
        ['Two travel claims are still pending manager approval before Friday’s cutoff.', 'ใบเบิกค่าเดินทางสองรายการยังรอหัวหน้าอนุมัติก่อนตัดรอบวันศุกร์'],
      ],
      reading:
        'At 9:15 every morning, our five-person operations team holds a focused ten-minute standup call. Previously, updates dragged past half an hour because everyone listed minor emails they had answered. Last month, we switched to a crisp three-point format that keeps everyone aligned. First, each member names what they are wrapping up today—for example, "I’m wrapping up the vendor checklist and expect to hand it over by noon." Second, we state whether main milestones remain on track to hit weekly deadlines. Third, anyone facing a hurdle flags it early using neutral phrasing like "I’m currently blocked by missing shipping labels, pending confirmation from the warehouse." Because bottlenecks surface early in the day, teammates jump in to help within minutes rather than discovering surprises at five o’clock. Keeping status notes transparent and specific turns brief daily calls into real momentum.',
      listenQ: 'Why did the morning standup previously drag past half an hour?',
      listenA: 'Because everyone listed minor emails they had answered.',
      dictation: 'We are on track to hand over the final files today.',
      listenNote:
        'จับเสียง "on track to" (/ɒn ˈtræk.tə/) และเสียงเชื่อม "hand over" (/hænd ˈəʊ.vər/) รวมถึง "files today" ที่ไม่ปล่อยเสียงซ้ำซ้อน',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคอัปเดตงานที่ผิดไวยากรณ์และไม่เป็นธรรมชาติ: "Today I wrapping up the budget sheet, and it still pending review from finance."',
          answer:
            "Today I'm wrapping up the budget sheet, and it's still pending review from finance.",
          explanation:
            '1) ประธาน I ต้องมี am/’m หน้า wrapping up 2) ประธานเอกพจน์ it ต้องมี is/’s หน้า pending review',
        },
        {
          kind: 'choice',
          prompt:
            'คุณอยากแจ้งทีมว่าตอนนี้เดินหน้าต่อไม่ได้เพราะรอข้อมูลตัวเลขจากฝ่ายขายอยู่ ข้อใดสื่อสารชัดเจนและไม่ฟังดูตำหนิใคร?',
          answer:
            "I'm currently blocked by missing sales figures, pending an update from the sales team.",
          choices: [
            "I'm currently blocked by missing sales figures, pending an update from the sales team.",
            'Sales team is lazy, so I cannot finish my report now.',
            'I am block because nobody send me figures yesterday.',
            'My work is wrapping up because sales figures never come.',
          ],
          explanation:
            'ใช้ currently blocked by + นาม และ pending... เพื่อระบุตัวติดขัดเชิงข้อมูลอย่างสุภาพและเป็นมืออาชีพ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมกริยาวลีที่ถูกต้อง: Everything looks smooth, and we are on _____ to launch the revised guide on Monday morning.',
          answer: 'track',
          explanation:
            'on track to + V1 = อยู่ในกำหนดการ / เป็นไปตามแผนที่จะ...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ฉันกำลังเก็บงานขั้นสุดท้ายของรายงานและน่าจะส่งต่อให้ทีมได้ก่อนสี่โมงเย็น"',
          answer:
            "I'm wrapping up the report and should hand it over to the team before 4 p.m.",
          explanation:
            'ใช้ I’m wrapping up... และ hand it over (วางกรรม it ไว้ตรงกลางระหว่าง hand กับ over!)',
        },
      ],
      writing:
        'เขียนอัปเดตสถานะงานประจำวันลงในช่องแชททีม (5–6 ประโยค) ครอบคลุม: งานที่กำลังเก็บจบ, งานที่อยู่ในกำหนดส่ง, และ 1 จุดที่กำลังรอข้อมูลหรือติดขัดอยู่ (ใช้ wrapping up, on track to, blocked by, pending)',
      writingSample:
        "Morning everyone! Here is my quick Tuesday update: I'm currently wrapping up the customer FAQ page and making good progress on the onboarding checklist. Overall, I'm on track to hand over both drafts before 3 p.m. today. However, the pricing table update is currently blocked by an unconfirmed shipping rate from our logistics partner. It is pending confirmation from their account rep, whom I followed up with at nine. Once that figure lands, I will prioritize inserting it right away.",
      writingNote:
        'เช็กตำแหน่งกรรมของ phrasal verb: ใช้ hand it over / wrap it up (เอาสรรพนาม it วางไว้ตรงกลาง) และตรวจ verb to be หน้า -ing ทุกจุด',
      speakingTopic: 'จำลองพูด Daily Standup จริง 45–60 วินาที (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดอัปเดตงานจริงของคุณ (หรือบทบาทจำลอง) ให้จบครบ 3 ก้อน: กำลังทำ/กำลังปิดอะไร -> ทันกำหนดวันไหน -> ติดอะไรและต้องให้ใครช่วย',
        'ฝึกพูดคำว่า blocked (/blɒkt/) เป็นพยางค์เดียว และเชื่อม "แร็ป-พิง-งัพ" กับ "ออน-แทร็ค-เทอะ" ให้ลื่นไหล',
      ],
    },
    {
      day: 163,
      title: 'แจ้งงานล่าช้าและบริหารความคาดหวังอย่างมืออาชีพ (Delay Handling & Expectations)',
      objective:
        'แจ้งเลื่อนกำหนดส่งล่วงหน้าอย่างตรงไปตรงมาด้วยสูตร 4 ขั้น (Heads-up + Neutral Reason + Mitigation + Revised ETA) โดยไม่กล่าวโทษหรือขอโทษพร่ำเพรื่อจนดูไร้ความรับผิดชอบ',
      explanation:
        'เมื่อรู้ตัวว่างานอาจส่งไม่ทัน คนไทยจำนวนมากมักทำพลาด 2 แบบสุดขั้ว: 1) รอจนถึงวินาทีสุดท้ายค่อยทักว่า *"Sorry sorry, I cannot finish today!"* (ขอโทษรัวๆ แต่ไม่มีเวลาส่งใหม่และไม่มีแผนสำรอง) หรือ 2) ชี้นิ้วไปที่คนอื่นว่า *"Client didn’t reply, not my fault."* ลองใช้สูตรแจ้งดีเลย์ระดับ B2 **4 ขั้นตอน (Early Heads-Up Formula)**: 1) **ทักล่วงหน้าเร็วที่สุด (`give an early heads-up`)**: `I wanted to give you a quick heads-up regarding Thursday’s delivery.` 2) **บอกเหตุเชิงระบบด้วย Passive/Noun (`due to / because...`)**: `Due to unexpected data errors in the raw file, verification is taking longer than estimated.` 3) **สิ่งที่กำลังทำเพื่อลดผลกระทบ (`mitigate / in the meantime`)**: `To keep things moving, I’ve already shared the completed sections for early review.` 4) **กำหนดส่งใหม่ที่มั่นใจจริง (`revised ETA / push back to`)**: `Would it work to push the final handoff back to Friday at 2 p.m.?`',
      sound: [
        'Calm Professional Cadence in Bad-News Delivery',
        'heads-up /ˈhedz.ʌp/ · mitigate /ˈmɪt.ɪ.ɡeɪt/ · revised /rɪˈvaɪzd/ · push back /pʊʃ bæk/',
        'เวลาพูดแจ้งข่าวเลื่อนกำหนด ห้ามพูดรัวเร็วด้วยเสียงตื่นตระหนก ให้ลดสปีดลงเล็กน้อย กดเสียงหนักชัดเจนที่เวลาใหม่ ("Friday at TWO p.m.") และเชื่อม "heads-up" เป็น "เฮด-ซัพ"',
        'ฝึกพูดประโยค 2 ท่อนที่สำคัญที่สุดด้วยน้ำเสียงนิ่งและมั่นคง: "I wanted to give you an early heads-up. | We’ll need to push the delivery back to Friday noon."',
      ],
      l1: [
        'รอจนเลยกำหนดแล้วค่อยพูดว่า "Very sorry I late! Today too many work, maybe send next week."',
        'เกรงใจจนไม่กล้าบอกล่วงหน้า และพอพูดก็เน้นแต่คำว่า sorry โดยไม่มีการเสนอทางออก (mitigation) หรือกำหนดการใหม่ที่แน่นอน (revised ETA)',
        'จำสมการแจ้งเลื่อนงานสุภาพ: Early heads-up + Neutral cause (due to...) + Partial workaround (In the meantime...) + Realistic revised ETA!',
      ],
      vocab: [
        ['heads-up', 'การแจ้งเตือนล่วงหน้า', '/ˈhedz.ʌp/', 'give an early heads-up', 'แจ้งเตือนล่วงหน้าตั้งแต่เนิ่นๆ'],
        ['push back', 'เลื่อนกำหนดออกไป', '/pʊʃ bæk/', 'push back the deadline', 'เลื่อนเส้นตายออกไป'],
        ['mitigate', 'บรรเทา / ลดผลกระทบ', '/ˈmɪt.ɪ.ɡeɪt/', 'mitigate the delay', 'ลดผลกระทบจากความล่าช้า'],
        ['revised', 'ที่ปรับปรุงแก้ไขใหม่', '/rɪˈvaɪzd/', 'share a revised timeline', 'แจ้งกำหนดการฉบับปรับใหม่'],
        ['unforeseen', 'ที่ไม่ได้คาดคิดมาก่อน', '/ˌʌn.fɔːˈsiːn/', 'unforeseen technical hurdles', 'อุปสรรคทางเทคนิคที่ไม่ได้คาดคิด'],
        ['defensive', 'ท่าทีตั้งรับแก้ตัว', '/dɪˈfen.sɪv/', 'avoid sounding defensive', 'หลีกเลี่ยงน้ำเสียงแก้ตัวตั้งรับ'],
        ['meanwhile', 'ในระหว่างนี้', '/ˈmiːn.waɪl/', 'meanwhile, keep moving forward', 'ในระหว่างนี้ให้เดินหน้าส่วนอื่นต่อ'],
      ],
      examples: [
        ['I’m reaching out early to give you a quick heads-up about tomorrow’s report timeline.', 'ฉันทักมาตั้งแต่เนิ่นๆ เพื่อแจ้งความคืบหน้าล่วงหน้าเกี่ยวกับกำหนดส่งรายงานพรุ่งนี้'],
        ['Due to unforeseen formatting glitches, exporting the full PDF is taking longer than expected.', 'เนื่องจากปัญหาการจัดหน้าที่ไม่ได้คาดคิด การส่งออกไฟล์ PDF ฉบับเต็มจึงใช้เวลานานกว่าที่คาด'],
        ['To mitigate the delay, I’ve uploaded sections one through three so your team can start reviewing now.', 'เพื่อลดผลกระทบจากความล่าช้า ฉันอัปโหลดส่วนที่หนึ่งถึงสามให้ทีมคุณเริ่มตรวจก่อนได้ทันที'],
        ['With that buffer built in, our revised target for the complete file is Thursday at 11 a.m.', 'เมื่อเผื่อเวลาดังกล่าวไว้ กำหนดส่งใหม่สำหรับไฟล์ฉบับสมบูรณ์คือวันพฤหัสบดีสิบเอ็ดโมงเช้า'],
      ],
      reading:
        'Missing a deadline occasionally happens to even the most organized teams; what separates true professionals is how early and clearly they communicate the shift. Last Wednesday, project lead Arisa noticed that an external lab wouldn’t return safety test results before Friday morning. Rather than staying silent and hoping for a miracle, she emailed her client thirty-six hours ahead of schedule. First, she gave a calm heads-up without sounding defensive or blaming the lab carelessly. Next, she explained that finalizing the summary depended on those pending figures due to strict compliance checks. To mitigate the delay, Arisa immediately attached the completed visual mockups so the client’s marketing crew didn’t have to wait idly. Finally, she proposed a realistic revised timeline for Monday at 10 a.m. Far from feeling upset, the client thanked her for protecting the schedule and keeping surprises off everyone’s plate.',
      listenQ: 'What did Arisa attach immediately to help mitigate the delay?',
      listenA: 'The completed visual mockups.',
      dictation: 'Let me give you an early heads-up about the timeline.',
      listenNote:
        'จับเสียงเชื่อม "give you an early heads-up" โดยเฉพาะคำว่า "heads-up" (/ˈhedz.ʌp/) ที่เชื่อม /z/ เข้า /ʌ/',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'ปรับแก้ข้อความแจ้งเลื่อนงานที่ดูแก้ตัวและคลุมเครือให้ชัดเจนเป็นมืออาชีพ: "So sorry boss, designer didn’t finish the artwork, so I maybe cannot send today, send soon."',
          answer:
            'I wanted to give you an early heads-up that the artwork needs one extra round of edits, so I suggest pushing the final handoff back to tomorrow at 2 p.m.',
          explanation:
            'หลีกเลี่ยงการโทษเพื่อนร่วมงานตรงๆ และคำว่า "send soon" ที่ไม่ระบุเวลา ให้ใช้วลีแจ้งล่วงหน้า + เหตุกลางๆ + กำหนดเวลาใหม่ชัดเจน',
        },
        {
          kind: 'choice',
          prompt:
            'ส่วนใดของข้อความแจ้งเลื่อนกำหนดช่วย "บรรเทาผลกระทบ" (mitigation) ได้ดีที่สุดระหว่างรอส่วนที่ล่าช้า?',
          answer:
            'In the meantime, I have shared the draft outline so you can review the structure today.',
          choices: [
            'In the meantime, I have shared the draft outline so you can review the structure today.',
            'Sorry again ten times for being slow this week.',
            'Actually, it is not my fault because the system ran slow.',
            'Please wait patiently until I feel ready to upload.',
          ],
          explanation:
            'การส่งส่วนที่เสร็จแล้วหรือร่างโครงสร้างให้ตรวจก่อนช่วยไม่ให้งานอีกฝั่งหยุดชะงัก และแสดงความรับผิดชอบเชิงรุก',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำกริยาวลีให้ถูกต้อง: Due to extra testing, we may need to _____ back the release date by forty-eight hours.',
          answer: 'push',
          explanation:
            'push back + deadline/date = เลื่อนกำหนดออกไป (หรือ move back)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "เพื่อลดผลกระทบจากความล่าช้า ทีมของเราจะส่งส่วนแรกให้ตรวจก่อนภายในเย็นนี้"',
          answer:
            'To mitigate the delay, our team will send the first section for review by this evening.',
          explanation:
            'ใช้ To mitigate the delay เปิดหน้าประโยคเพื่อแสดงการแก้ไขเฉพาะหน้าทันที',
        },
      ],
      writing:
        'เขียนอีเมลแจ้งลูกค้าหรือหัวหน้างาน (6–7 ประโยค) เพื่อขอเลื่อนกำหนดส่งพรีเซนเทชันหรือรายงานออกไป 1 วัน ให้ครบทั้ง 4 องค์ประกอบ: Early heads-up -> Neutral reason -> Mitigation step -> Revised ETA',
      writingSample:
        "Hi Sarah,\n\nI wanted to give you an early heads-up regarding tomorrow's campaign summary deck. Due to an unforeseen export error in our regional sales tracker, two afternoon charts still require manual verification. To mitigate any delay for your morning planning, I've just shared the completed executive summary and key recommendations in the shared folder so your team can review them today. Unless anything unexpected turns up during final checks, our revised ETA for the complete deck is Thursday at 10 a.m. Thank you for your flexibility, and please let me know if that timing works on your end.",
      writingNote:
        'ตรวจความสมดุลโทนอีเมล: ขอโทษสั้นๆ พอดีหรือขอบคุณความยืดหยุ่นของอีกฝ่าย (Thank you for your flexibility) โดยเน้นเวลาส่งใหม่ที่ทำได้จริง',
      speakingTopic: 'จำลองโทรแจ้งลูกค้าว่าต้องขยับกำหนดส่ง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ซ้อมพูดสถานการณ์จริง: โทรทักก่อนถึงวันส่ง 24 ชม. ด้วยสูตร Heads-up -> Neutral Reason -> Mitigation -> Revised ETA',
        'ใช้น้ำเสียงนิ่ง ชัด มั่นใจ (ไม่สั่นเครือและไม่พูด sorry เกิน 1 ครั้ง)',
        'ออกเสียง "push back" และ "heads-up" รวมถึงเวลาใหม่ให้ชัดเจน',
      ],
    },
    {
      day: 164,
      title: 'รับฟังฟีดแบ็ก แก้งาน และเคลียร์ขอบเขตงาน (Feedback, Revisions & Scope)',
      objective:
        'ตอบรับคำติชมอย่างเปิดกว้าง (take on board), ยืนยันความเข้าใจร่วมกัน (align on) และปฏิเสธงานนอกขอบเขตอย่างนุ่มนวล (out of scope / trade-off)',
      explanation:
        'ในงานจริง เรามักเจอ 2 สถานการณ์ปราบเซียน: 1) **ลูกค้าหรือหัวหน้าคอมเมนต์แรงๆ** — อย่าเพิ่งโต้กลับด้วยอารมณ์ ให้ใช้ Indirect Diplomacy + รับทราบเชิงบวก: `Thanks for flagging that—I’ll take those points on board.` (`take on board` = รับฟังนำไปปรับใช้จริง) และสรุปทวนให้ตรงกันว่า `Just to make sure we’re aligned on the next revision...` 2) **Scope Creep (ขอแก้นอกเหนือจากที่ตกลงทีละนิด)** — ห้ามตอบแค่ *"No, not in contract"* แต่ให้ใช้สูตร **Acknowledge + Scope Boundary + Condition (`as long as` / `trade-off`)**: `I see why that extra section would be helpful. Because it falls slightly outside our original scope, we could either add it as a separate phase next week or swap it with one of the current graphics.`',
      sound: [
        'Diplomatic Falling-Rising Intonation on Boundaries',
        'take on board /teɪk ɒn bɔːd/ · aligned on /əˈlaɪnd ɒn/ · out of scope /aʊt əv skəʊp/',
        'เวลาต่อรองขอบเขตงานด้วยประโยค "Just to make sure we’re aligned," ให้เสียงสูงขึ้นเล็กน้อยที่คำว่า aligned เพื่อเปิดพื้นที่ความร่วมมือ แล้วค่อยลงเสียงนิ่งตอนอธิบายทางเลือก',
        'ฝึกพูด 3 วลีสำคัญด้วยโทนสุภาพ: "Thanks for flagging that. / I’ll take that on board. / Just to make sure we’re aligned..."',
      ],
      l1: [
        'เวลาได้ยินคำขอเพิ่มงานนอกเหนือตกลง มักตอบตรงๆ ว่า "Cannot do, out of scope!" หรือยอมทำฟรีทั้งหมดแล้วมานั่งเครียดทีหลัง',
        'ขาดคำเชื่อมลดแรงปะทะ (softeners & trade-off framing) เลยกลัวเสียมารยาทจนไม่กล้าเจรจาขอบเขต',
        'ตั้งขอบเขตด้วยทางเลือก 2 ทางเสมอ ("We can either [เพิ่มงบ/เวลา] or [สลับแทนชิ้นเดิม]") เพื่อให้ลูกค้าเป็นคนเลือกอย่างสบายใจ',
      ],
      vocab: [
        ['take on board', 'รับฟังความเห็นมาพิจารณาปรับใช้', '/teɪk ɒn bɔːd/', 'take feedback on board', 'รับฟีดแบ็กมาปรับใช้'],
        ['aligned', 'เข้าใจตรงกัน / อยู่บนหน้าเดียวกัน', '/əˈlaɪnd/', 'make sure we are aligned', 'ตรวจสอบให้แน่ใจว่าเข้าใจตรงกัน'],
        ['scope', 'ขอบเขตของงานหรือโครงการ', '/skəʊp/', 'fall outside the initial scope', 'อยู่นอกเหนือขอบเขตงานเดิม'],
        ['revision', 'การปรับแก้ไขงาน', '/rɪˈvɪʒ.ən/', 'a minor round of revisions', 'การปรับแก้รอบเล็กๆ'],
        ['trade-off', 'การแลกเปลี่ยนสมดุล (ได้อย่างเสียอย่าง)', '/ˈtreɪd.ɒf/', 'discuss a practical trade-off', 'คุยเรื่องการสลับสมดุลงาน'],
        ['flag', 'ส่งสัญญาณเตือน / ชี้จุดสำคัญ', '/flæɡ/', 'flag an issue early', 'ทักท้วง/ชี้จุดสังเกตแต่เนิ่นๆ'],
        ['clarify', 'ขอคำอธิบายให้ชัดเจน', '/ˈklær.ɪ.faɪ/', 'clarify the priority', 'สอบถามลำดับความสำคัญให้ชัด'],
      ],
      examples: [
        ['Thank you for flagging the font contrast issue—we’ll definitely take that on board.', 'ขอบคุณที่ชี้จุดเรื่องความคมชัดของฟอนต์ครับ เราจะนำไปปรับแก้ไขแน่นอน'],
        ['Just to clarify, would you prefer us to focus on the mobile layout first?', 'ขอถามให้ชัดเจนขึ้นนะครับ คุณอยากให้เราโฟกัสหน้าจอมือถือก่อนใช่ไหมครับ?'],
        ['Adding three animated charts falls outside our original scope, though we can quote them as phase two.', 'การเพิ่มกราฟเคลื่อนไหวสามชุดอยู่นอกเหนือขอบเขตเดิม แต่เราสามารถเสนอราคาเป็นเฟสสองได้ครับ'],
        ['Before we start the second revision, let’s align on which sections are locked.', 'ก่อนเริ่มแก้รอบที่สอง เรามายืนยันให้ตรงกันก่อนนะครับว่าส่วนไหนล็อกไว้เรียบร้อยแล้ว'],
      ],
      reading:
        'Handling feedback calmly turns tense revision rounds into productive partnerships. When a client sends fifteen comments late on Friday afternoon, defending every single choice rarely helps. Instead, experienced leads start by acknowledging useful points: "Thanks for the detailed review—we’ve taken your notes on board, especially regarding the headline tone." Next, they separate simple refinements from hidden additions. If a request expands the workload noticeably, naming the boundary gently protects both quality and trust. For example, you might ask, "Just to make sure we’re aligned, adding a new video intro falls outside this sprint’s scope. Would you prefer to push Friday’s launch by two days, or save the intro for next month’s update?" By presenting clear trade-offs rather than blunt refusals, you empower stakeholders to decide priorities while keeping every timeline realistic.',
      listenQ: 'What two choices did the example ask the client to decide between when adding a new video intro?',
      listenA: 'Either pushing Friday’s launch by two days or saving the intro for next month’s update.',
      dictation: 'Just to clarify, is that section included in this phase?',
      listenNote:
        'จับโทนเสียงคำถามสุภาพแบบ Indirect Check หลัง "Just to clarify," และการเชื่อมคำ "included in" (/ɪnˈkluː.dɪd ɪn/)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'ปรับแก้ประโยคตอบฟีดแบ็กและขอบเขตงานที่แข็งเกินไปและผิดไวยากรณ์: "That new request out of scope, so we cannot do unless you paying extra money."',
          answer:
            'Since that new request falls outside our current scope, we can include it as long as we agree on an adjusted timeline and budget.',
          explanation:
            'ใช้ falls outside our current scope แทน "out of scope" ที่ขาดกริยา และเปลี่ยนการปฏิเสธทื่อๆ เป็นทางเลือกแบบเงื่อนไขสุภาพ',
        },
        {
          kind: 'choice',
          prompt:
            'หัวหน้าคอมเมนต์ว่าตัวอย่างในสไลด์ยังไม่ชัดพอ คุณอยากตอบรับอย่างเปิดกว้างและทวนจุดที่จะแก้ให้ตรงกัน ข้อใดเหมาะสมที่สุด?',
          answer:
            "Thanks for flagging that—I'll take your feedback on board and clarify the two case examples before noon.",
          choices: [
            "Thanks for flagging that—I'll take your feedback on board and clarify the two case examples before noon.",
            'Actually, I thought the examples were already super clear.',
            'Okay, I change everything because you don’t like it.',
            'You could have told me earlier before I finished the slides.',
          ],
          explanation:
            'ขอบคุณที่ชี้จุด + take feedback on board + ระบุขั้นตอนแก้ไขและเวลาส่งชัดเจน',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบวลี: Before starting any major redesign, let’s _____ on the main audience and key message first.',
          answer: 'align',
          explanation:
            'align on = ปรับความเข้าใจ/ตกลงเป้าหมายให้ตรงกันทั้งสองฝ่าย',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษแบบสุภาพ: "เพื่อให้แน่ใจว่าเราเข้าใจตรงกัน คุณอยากสลับเวลาประชุมเป็นบ่ายพรุ่งนี้ใช่ไหมครับ?"',
          answer:
            'Just to make sure we are aligned, would you like to move the meeting to tomorrow afternoon?',
          explanation:
            'ใช้ Just to make sure we are aligned, + Indirect/Polite question เพื่อทวนความเข้าใจ',
        },
      ],
      writing:
        'เขียนอีเมลตอบกลับลูกค้า 6–7 ประโยค: 1) ขอบคุณและรับฟีดแบ็กที่ช่วยแก้สี/ข้อความ (take on board) 2) ขอความชัดเจน 1 จุด (clarify) 3) แจ้งอย่างนุ่มนวลว่าฟีเจอร์ใหม่ที่ขอเพิ่มอยู่นอกขอบเขตเดิม (outside our scope) พร้อมเสนอ 2 ทางเลือก (trade-off)',
      writingSample:
        "Hi Mark,\n\nThank you for sending over your review notes so promptly! We've taken your feedback on board regarding the larger section headings and will adjust those across all pages today. Just to make sure we're aligned on the footer links, could you clarify whether the support email should point to your Bangkok or regional inbox? Regarding the extra interactive calculator you mentioned, that feature falls slightly outside our agreed scope for phase one. To keep our Friday launch on track, we could either launch with the standard contact form now and add the calculator next week, or expand this phase and shift launch to Tuesday. Let me know which option works best for your team!",
      writingNote:
        'ตรวจความสมดุลระหว่าง "ตอบรับสิ่งที่ทำได้ทันที" กับ "ตั้งขอบเขตพร้อมทางเลือก 2 ทาง"',
      speakingTopic: 'ซ้อมรับฟีดแบ็กและเจรจาขอบเขตงานแบบมืออาชีพ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'สวมบทรับคอมเมนต์จากลูกค้า/หัวหน้าที่ขอแก้งานพร้อมแอบแถมงานใหม่ 1 ชิ้น',
        'ใช้ให้ครบ: Thanks for flagging... -> I’ll take that on board -> Just to clarify... -> That falls outside our scope, so we can either A or B',
        'คุมน้ำเสียงให้อบอุ่น เป็นมิตร แต่ชัดเจนในขอบเขต',
      ],
    },
    {
      day: 165,
      title: 'เข้าร่วมและคุมจังหวะการประชุม (Agreements, Clarifications & Next Steps)',
      objective:
        'แทรกความเห็นในที่ประชุมอย่างสุภาพ ต่อยอดไอเดียเพื่อน (piggyback on), เห็นต่างแบบถนอมน้ำใจ (see where you’re coming from) และสรุป Action Items ปิดประชุมได้คมชัด',
      explanation:
        'คนไทยเก่งๆ หลายคนในที่ประชุมนานาชาติมักนั่งเงียบทั้งชั่วโมง เพราะรอจังหวะว่างที่ไม่มีใครพูดหรือกลัวเสียมารยาทเวลาแทรก! มาเก็บ **4 อาวุธคุมจังหวะประชุม** ที่ทำให้คุณมีตัวตนโดยไม่ต้องพูดเสียงดัง: 1) **ต่อยอดไอเดียเพื่อน**: `To build on what Ploy just mentioned...` / `Can I piggyback on that point quickly?` 2) **ขอให้พูดซ้ำ/สรุปความเข้าใจอย่างมีคลาส**: `Sorry to jump in—could you clarify what you meant by "soft launch"?` / `If I’m hearing you right, you’re suggesting we...` 3) **เห็นต่างอย่างให้เกียรติ**: `I totally see where you’re coming from; having said that, our timeline is quite tight.` 4) **ปิดประชุมด้วย Action Items**: `Before we wrap up, let’s recap next steps and owners.`',
      sound: [
        'Turn-Taking Pitch & Polite Interruption Stress',
        'piggyback /ˈpɪɡ.i.bæk/ · jump in /dʒʌmp ɪn/ · circle back /ˈsɜː.kəl bæk/',
        'เวลาต้องการขอแทรกในสายประชุมออนไลน์ ให้ใช้น้ำเสียงขึ้นเบาๆ ที่วลีเปิดสั้นๆ ("Sorry to jump in—", "Quick question on that—") แล้วรอเสี้ยววินาทีให้คู่สนทนาหยุด ก่อนเข้าคำถามด้วยโทนราบเรียบสุภาพ',
        'ฝึกพูด 4 ประโยคคุมประชุม: "Can I jump in briefly? / To build on Ben’s point... / I see where you’re coming from, yet... / Let’s circle back to..."',
      ],
      l1: [
        'นั่งเงียบจนจบการประชุมแล้วค่อยส่งแชททีหลัง หรือแทรกแบบกะทันหันว่า "Wait! Stop! I disagree with you."',
        'ไม่คุ้นวัฒนธรรม turn-taking แบบภาษาอังกฤษที่ต้องส่งสัญญาณเสียงสั้นๆ เพื่อขอพื้นที่พูด (floor-holding phrases)',
        'ท่อง 3 ประโยคเปิดไมค์ติดตัวไว้เสมอ: ต่อยอด = "To build on that..." · แทรกถาม = "Sorry to jump in, ..." · เห็นต่าง = "I see where you’re coming from; however, ..."',
      ],
      vocab: [
        ['build on', 'ต่อยอดจากความคิดของอีกฝ่าย', '/bɪld ɒn/', 'build on that idea', 'ต่อยอดจากไอเดียนั้น'],
        ['circle back', 'วนกลับมาคุยประเด็นนี้ภายหลัง', '/ˈsɜː.kəl bæk/', 'circle back to the budget', 'วนกลับมาดูเรื่องงบอีกครั้ง'],
        ['action item', 'รายการงานที่ต้องลงมือทำต่อหลังประชุม', '/ˈæk.ʃən ˌaɪ.təm/', 'assign clear action items', 'มอบหมายงานที่ต้องทำต่อให้ชัด'],
        ['perspective', 'มุมมอง', '/pəˈspek.tɪv/', 'from a practical perspective', 'จากมุมมองเชิงปฏิบัติ'],
        ['concise', 'สั้นกระชับได้ประเด็น', '/kənˈsaɪs/', 'keep the recap concise', 'สรุปให้กระชับได้ใจความ'],
        ['touch base', 'แวะคุยอัปเดตสั้นๆ', '/tʌtʃ beɪs/', 'touch base on Thursday', 'คุยอัปเดตสั้นๆ กันวันพฤหัสบดี'],
        ['consensus', 'มติเห็นพ้องร่วมกัน', '/kənˈsen.səs/', 'reach a quick consensus', 'หาข้อสรุปร่วมกันอย่างรวดเร็ว'],
      ],
      examples: [
        ['To build on what Niran just shared, adding a short tutorial video could cut support tickets too.', 'ขอต่อยอดจากที่คุณนิรันดร์เพิ่งแชร์ การเพิ่มวิดีโอสอนสั้นๆ น่าจะช่วยลดคำถามฝ่ายซัพพอร์ตได้ด้วย'],
        ['If I’m hearing you right, we’re delaying the print order until pricing is locked.', 'ถ้าฉันเข้าใจคุณไม่ผิด เรากำลังเลื่อนคำสั่งพิมพ์ออกไปจนกว่าจะล็อกราคาได้ใช่ไหม?'],
        ['I completely see where you’re coming from; however, testing with five users first feels safer.', 'ฉันเข้าใจมุมที่คุณคิดเลยครับ อย่างไรก็ตาม การทดสอบกับผู้ใช้ห้าคนก่อนน่าจะปลอดภัยกว่า'],
        ['Before we wrap up, let’s circle back to action items so everyone knows their deadline.', 'ก่อนปิดประชุม เรามาทบทวนรายการงานต่อกันสักนิดเพื่อให้ทุกคนรู้กำหนดส่งของตัวเอง'],
      ],
      reading:
        'Virtual meetings move rapidly, especially when six voices share one video window. Staying quiet until the very last minute often leaves good insights unspoken, yet interrupting abruptly feels awkward. Skilled participants bridge that gap using simple conversational hooks. When someone mentions an idea you support, open with "To build on Dan’s point..." so your comment sounds collaborative rather than repetitive. Whenever fast jargon leaves you unsure, pause the room gently: "Sorry to jump in—could we clarify what success looks like for week one?" If a proposal feels risky, acknowledge the speaker’s intent before offering another view: "I see where you’re coming from on speed; having said that, skipping final proofreading might trigger costly reprints." Finally, strong leaders never end a call vaguely. Spending ninety seconds to summarize decisions, owners, and when everyone will touch base next ensures the team reaches genuine consensus.',
      listenQ: 'What three items should be summarized in the final ninety seconds of a meeting?',
      listenA: 'Decisions, owners, and when everyone will touch base next.',
      dictation: 'Before we wrap up, let us recap the action items.',
      listenNote:
        'จับเสียงเชื่อม "wrap up" (/ræp ʌp/) และ "action items" (/ˈæk.ʃən ˌaɪ.təmz/) ท้ายประโยค',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคในที่ประชุมที่ดูแข็งและใช้คำผิดโครงสร้าง: "Wait! I disagree you! And before finish meeting, tell me who do what."',
          answer:
            "Sorry to jump in—I see where you're coming from, though I see it slightly differently. Before we wrap up, let's clarify who owns each action item.",
          explanation:
            'เปลี่ยนการขัดแบบห้วน ("Wait! I disagree you!") เป็นการขอแทรกสุภาพ + ยอมรับมุมอีกฝ่าย + สรุปเจ้าของงานด้วย action item',
        },
        {
          kind: 'choice',
          prompt:
            'เพื่อนร่วมทีมพูดเร็วและใช้คำย่อที่คุณไม่คุ้น คุณอยากแทรกถามเพื่อความชัวร์อย่างมืออาชีพ ข้อใดเหมาะสมที่สุด?',
          answer:
            'Sorry to jump in quickly—if I’m hearing you right, does that timeline include client testing?',
          choices: [
            'Sorry to jump in quickly—if I’m hearing you right, does that timeline include client testing?',
            'Stop talking fast! Repeat everything again please.',
            'I don’t understand any word you said just now.',
            'Let’s circle back to never talking about that timeline.',
          ],
          explanation:
            'Sorry to jump in + If I’m hearing you right... เป็นวิธีทวนความเข้าใจที่ฟังดูสุภาพและรอบคอบมาก',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบก้อนคำประชุม: That design discussion is getting long—let’s _____ back to it after we review the launch checklist.',
          answer: 'circle',
          explanation:
            'circle back to + topic = พักเรื่องนี้ไว้ก่อนแล้ววนกลับมาคุยอีกครั้งภายหลัง',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ขอต่อยอดจากประเด็นของเมย์นิดนึงนะคะ การทำแบบสอบถามสั้นๆ น่าจะช่วยประหยัดเวลาได้มาก"',
          answer:
            "To build on May's point, running a short survey could save us a lot of time.",
          explanation:
            'ใช้ To build on [Name]’s point เพื่อเชื่อมความคิดเข้ากับผู้พูดคนก่อนหน้าอย่างเป็นธรรมชาติ',
        },
      ],
      writing:
        'เขียนบันทึกจำลองบทพูดในที่ประชุมสั้นๆ 6–7 ประโยค: เริ่มจากต่อยอดไอเดียเพื่อน (To build on...) -> ขอความชัดเจน 1 เรื่อง -> เห็นต่างอย่างนุ่มนวล (I see where you’re coming from; having said that...) -> สรุป Action Items ปิดประชุม (Before we wrap up...)',
      writingSample:
        "Thanks, everyone, for sharing great ideas so far. To build on Pim's point about mobile alerts, adding a gentle one-day reminder could cut missed bookings too. Sorry to jump in quickly, Leo—just to clarify, would those reminders go out by email or SMS? Got it, thanks! Regarding the rollout date, I completely see where you're coming from on launching before the holiday; having said that, skipping a two-day pilot might create support overload. Before we wrap up, let's recap our action items: Pim will draft the copy by Wednesday, Leo will confirm SMS costs, and we'll touch base again on Thursday morning.",
      writingNote:
        'เช็กการเปลี่ยนจังหวะในบทพูด: มีทั้งการรับลูกเพื่อน (build on), การทวนถาม, การแย้งแบบให้เกียรติ, และการสรุปผู้รับผิดชอบ+วันส่ง',
      speakingTopic: 'สวมบทบาทนำและสรุปการประชุมสั้น (4 / 3 / 2 นาที)',
      speakingBullets: [
        'จำลองฉากคุณอยู่ในประชุมที่มีคนเสนอแผนเร่งเปิดตัวงาน แต่คุณเห็นความเสี่ยงด้านคุณภาพ',
        'ฝึกพูดให้ครบ 4 ลีลา: Build on friend’s idea -> Clarify a detail -> Disagree politely -> Summarize action items & owners',
        'เน้นโทนเสียงเป็นมิตรตอนแทรกพูด และจบด้วยเสียงมั่นคงตอนสรุปกำหนดส่ง',
      ],
    },
    {
      day: 166,
      title: 'อธิบายงาน ประสบการณ์ และเรื่องเทคนิคให้คนทั่วไปเข้าใจง่าย (Explaining Simply to Non-Experts)',
      objective:
        'ถอดศัพท์เทคนิคหรือประสบการณ์การทำงานให้เป็นภาษาเรียบง่ายด้วยวลีเชื่อมความเข้าใจ (in plain terms, essentially, think of it like...) และการเปรียบเทียบ (analogy) ที่จับต้องได้',
      explanation:
        'สัญญาณของผู้ใช้ภาษาระดับ B2 ตัวจริงไม่ใช่การพ่นศัพท์หรูยาวๆ แต่คือการ **"อธิบายเรื่องซับซ้อนให้คนนอกสายงานเข้าใจได้ใน 30 วินาที!"** ไม่ว่าคุณจะทำงานบัญชี ไอที การตลาด หรืองานบริการ ลองใช้สูตร **3 ขั้นอธิบายเรื่องยาก (Plain-English Formula)**: 1) **ถอดคำย่อ/ศัพท์เฉพาะ (`in plain terms` / `essentially`)**: `Essentially, an API works like a restaurant waiter carrying orders between two systems.` 2) **เปรียบเทียบกับของรอบตัว (`think of it like...`)**: `Think of a cache like keeping your favorite mug right on your desk instead of walking to the cupboard every time.` 3) **สรุปผลลัพธ์ที่คนฟังสนใจ (`the main benefit is...`)**: `In plain terms, pages load twice as fast for your customers.` ลูกค้าและผู้บริหารที่ไม่ใช่สายเทคนิคจะรักวิธีเล่าแบบนี้มาก!',
      sound: [
        'Storytelling Pacing & Analogy Emphasis',
        'essentially /ɪˈsen.ʃəl.i/ · in plain terms /ɪn pleɪn tɜːmz/ · analogy /əˈnæl.ə.dʒi/',
        'คำว่า "essentially" นิยมออกเสียง 4 พยางค์หรือรวบพยางค์กลางเบาๆ เป็น /ɪˈsen.ʃəl.i/ ("อิ-เซน-เชิล-ลี") ส่วนวลี "Think of it like..." เชื่อมติดกันเป็น "ธิง-เคิฟ-วิท-ไลค์" แล้วเน้นที่คำเปรียบเทียบด้านหลัง',
        'ฝึกพูดตัวอย่างอุปมาอุปไมย 2 รอบ โดยชะลอจังหวะนิดนึงตรง "Think of it like..." เพื่อให้ผู้ฟังจินตนาการภาพตามทัน',
      ],
      l1: [
        'เวลาเล่าเรื่องงานให้คนต่างแผนกหรือเพื่อนต่างชาติฟัง มักทับศัพท์เฉพาะเต็มไปหมด หรือแปลโครงสร้างคำไทยยาวๆ จนคนฟังงงว่ามันทำอะไรได้กันแน่',
        'ติดการอธิบายจาก "วิธีทำงานด้านเทคนิค" แทนที่จะเริ่มจาก "เปรียบเทียบกับชีวิตประจำวันและประโยชน์ที่ลูกค้าได้"',
        'ใช้กฎ 15 วินาที: พูดคำศัพท์ยากได้ 1 คำ แล้วต่อด้วย "In plain terms, think of it like [ของใช้ประจำวัน], which helps users [ผลลัพธ์จริง]!" ทันที',
      ],
      vocab: [
        ['essentially', 'โดยแก่นแท้แล้ว / สรุปง่ายๆ คือ', '/ɪˈsen.ʃəl.i/', 'essentially acts like a bridge', 'โดยแก่นแท้แล้วทำหน้าที่เหมือนสะพานเชื่อม'],
        ['in plain terms', 'พูดเป็นภาษาชาวบ้านเข้าใจง่ายคือ', '/ɪn pleɪn tɜːmz/', 'explain it in plain terms', 'อธิบายด้วยภาษาที่เข้าใจง่าย'],
        ['analogy', 'การเปรียบเทียบอุปมาอุปไมย', '/əˈnæl.ə.dʒi/', 'use a clear analogy', 'ใช้อุปมาที่เห็นภาพชัด'],
        ['jargon', 'ศัพท์เฉพาะวงการที่คนนอกฟังไม่เข้าใจ', '/ˈdʒɑː.ɡən/', 'avoid technical jargon', 'หลีกเลี่ยงศัพท์เทคนิคเฉพาะทาง'],
        ['walk through', 'พาเดินดูทีละขั้นตอนอย่างใจเย็น', '/wɔːk θruː/', 'walk someone through the steps', 'อธิบายไล่ทีละขั้นตอนให้ฟัง'],
        ['manual', 'ทำด้วยมือ / แบบไม่อัตโนมัติ', '/ˈmæn.ju.əl/', 'replace manual data entry', 'แทนที่การกรอกข้อมูลด้วยมือ'],
        ['scalable', 'ขยายรองรับปริมาณเพิ่มได้ง่าย', '/ˈskeɪ.lə.bəl/', 'build a scalable routine', 'สร้างระบบที่ขยายต่อได้ง่าย'],
      ],
      examples: [
        ['Let me walk you through how our new order tracking works without any technical jargon.', 'ให้ฉันอธิบายทีละขั้นว่าตัวติดตามคำสั่งซื้อใหม่ทำงานยังไงแบบไม่มีศัพท์เทคนิคนะคะ'],
        ['Think of cloud backup like storing spare house keys with a trusted neighbor.', 'ลองนึกภาพการสำรองข้อมูลบนคลาวด์เหมือนการฝากกุญแจบ้านสำรองไว้กับเพื่อนบ้านที่ไว้ใจได้'],
        ['In plain terms, automating invoices saves our accounting clerk six hours every Friday.', 'พูดให้ง่ายคือ การออกใบแจ้งหนี้อัตโนมัติช่วยประหยัดเวลาฝ่ายบัญชีไปได้หกชั่วโมงทุกวันศุกร์'],
        ['Essentially, the filter blocks noisy background traffic so real customers load the page smoothly.', 'โดยแก่นแล้ว ตัวกรองนี้จะกันทราฟฟิกรบกวนออกไปเพื่อให้ลูกค้าตัวจริงเปิดหน้าเว็บได้ลื่นไหล'],
      ],
      reading:
        'Whether you work in software, healthcare, logistics, or teaching, the ability to translate complex experience into clear everyday English opens doors everywhere. Last month, a data analyst named Arm joined a budget review with non-technical store managers. Rather than opening with database jargon like "automated ETL pipelines," Arm paused and chose a vivid analogy. "Think of our daily sales data like fresh produce arriving from twelve farms every morning," he began. "Previously, staff spent hours sorting crates by hand. Essentially, our new tool acts like a gentle sorting belt—in plain terms, managers see clean morning stock numbers on one screen before opening the doors." Immediately, everyone leaned forward and asked practical questions. Notice why Arm succeeded: he didn’t water down the truth; he simply walked his audience through the real-world benefit using clear, relatable pictures.',
      listenQ: 'What did Arm compare the new data tool to in his analogy?',
      listenA: 'A gentle sorting belt.',
      dictation: 'Think of it like storing spare keys with a trusted neighbor.',
      listenNote:
        'จับเสียงเชื่อม "Think of it like" (/θɪŋk əv ɪt laɪk/) และเสียง /t/ ลงท้ายคำว่า "trusted"',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'ปรับแก้คำอธิบายที่เต็มไปด้วยศัพท์ยากและผิดไวยากรณ์ให้คนทั่วไปเข้าใจได้ทันที: "Actually our API doing sync data database automatically, very complex backend."',
          answer:
            'In plain terms, think of our tool like a bridge that automatically copies updates between two apps so nobody types them twice.',
          explanation:
            'เปลี่ยนศัพท์เฉพาะที่ฟังยากและประโยคขาดกริยาแท้ เป็นวลี In plain terms + analogy (like a bridge...) + ผลลัพธ์ที่จับต้องได้',
        },
        {
          kind: 'choice',
          prompt:
            'คุณต้องอธิบายขั้นตอนทำงานใหม่ให้เพื่อนต่างแผนกที่ไม่ถนัดเทคนิคฟัง ข้อใดเริ่มต้นได้น่าฟังและเป็นมิตรที่สุด?',
          answer:
            "Let me walk you through the main steps in plain terms so you can see how it helps your team.",
          choices: [
            "Let me walk you through the main steps in plain terms so you can see how it helps your team.",
            'This is too technical for non-experts, so just trust our department.',
            'First, read this forty-page manual full of engineering jargon.',
            'Essentially, you don’t need to understand how it works at all.',
          ],
          explanation:
            'walk someone through + in plain terms + ประโยชน์สำหรับผู้ฟัง สร้างบรรยากาศร่วมมือได้ดีที่สุด',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำที่แปลว่า "ศัพท์เฉพาะทาง": Good communicators replace confusing technical _____ with everyday comparisons anyone can picture.',
          answer: 'jargon',
          explanation:
            'technical jargon = ศัพท์เฉพาะทางในสายอาชีพที่คนนอกวงการฟังไม่เข้าใจ',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "โดยแก่นแท้แล้ว ระบบนี้ช่วยลดขั้นตอนการกรอกข้อมูลด้วยมือลงได้ครึ่งหนึ่ง"',
          answer:
            'Essentially, this system cuts manual data entry in half.',
          explanation:
            'ใช้ Essentially, + ประโยคสั้นกระชับ (cuts manual data entry in half)',
        },
      ],
      writing:
        'เลือกทักษะ กระบวนการ หรือเทคโนโลยีในงาน/การเรียนของคุณ 1 อย่าง แล้วเขียนอธิบายให้ "เพื่อนที่อยู่คนละสายงาน" เข้าใจใน 5–6 ประโยค โดยใช้ walk through, think of it like (analogy), essentially และ in plain terms',
      writingSample:
        "People often think website caching sounds complicated, so let me walk you through it without any technical jargon. Think of caching like keeping your favorite coffee mug right on your desk instead of walking across the kitchen every morning. Normally, whenever someone visits a page, the server builds it fresh from scratch. Essentially, caching saves a ready-made snapshot close by so returning visitors see photos and text instantly. In plain terms, it makes your online shop feel noticeably faster while taking pressure off the main server during busy sales.",
      writingNote:
        'อ่านทวนแล้วถามตัวเอง: "ถ้าเพื่อนสนิทที่ไม่ทำงานสายนี้มาอ่าน เขาจะเห็นภาพทันทีภายใน 30 วินาทีไหม?"',
      speakingTopic: 'อธิบายเรื่องในสายงานของคุณให้คนนอกวงการเข้าใจใน 90 วินาที (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกหัวข้อ 1 อย่างจากงานประจำหรือสิ่งที่สนใจ (เช่น SEO, UX, Inventory, Tax deduction, AI prompt หรือ Workflow)',
        'ใช้สูตร: ห้ามโยนคำศัพท์ยากเกิน 1 คำ -> เปรียบเทียบ Think of it like... -> สรุป In plain terms, it helps people...',
        'ชะลอจังหวะพูดตรงคำว่า Think of it like... แล้วพูดด้วยน้ำเสียงเหมือนกำลังเล่าให้เพื่อนฟังที่โต๊ะกาแฟ',
      ],
    },
    {
      day: 167,
      title: 'Synthesis Lab เตรียมสอบจบ Phase 3: ผสม 6 โครงสร้างหลัก B1 → Early B2',
      objective:
        'สังเคราะห์ไวยากรณ์หลักตลอด Phase 3 (Passive Voice, Indirect Questions, Reported Speech, Deduction, 3rd/Mixed Conditionals และ Discourse Markers) ในสถานการณ์สื่อสารจริงก่อนสอบ Milestone',
      explanation:
        'พรุ่งนี้คือ **Phase 3 Milestone Assessment (Day 168)** แล้วครับ! วันนี้เรามาทำ **Synthesis Lab** รวบยอด 6 อาวุธสำคัญของ Phase 3 (Weeks 17–24) เพื่อเช็กว่าคุณสลับใช้ข้ามโครงสร้างได้คล่องแบบไม่ปนกันแล้วหรือยัง: 1) **Passive & Causative**: `was delayed due to...`, `have the contract reviewed` 2) **Indirect Diplomacy**: `Could you let me know whether the report has been sent?` (ห้ามสลับ V ช่วยหน้า S!) 3) **Reported Speech**: `She told me she would confirm by noon.` (ไม่ใส่ `to` หลัง `told me`) 4) **Modals of Deduction**: `It must have been reset` / `That can’t be right` (ไม่ใช่ `mustn’t be`) 5) **3rd & Mixed Conditionals / Wish**: `If we had backed it up, we wouldn’t be stuck now.` 6) **Discourse Markers**: `Despite the delay` / `Although..., ...` (ไม่มี `but`!) มาซ้อมผสมในแบบฝึกและเรื่องจริงวันนี้ให้แน่น 100% ครับ!',
      sound: [
        'Phase 3 Integrated Rhythm & Weak Forms Audit',
        "must have /ˈmʌs.təv/ · wouldn't have /ˈwʊd.n̩t.əv/ · could you let me /kʊdʒ.ə ˈlet.mi/ · despite /dɪˈspaɪt/",
        'ซ้อมเปลี่ยนโหมดการออกเสียงครบทุกสไตล์ในประโยคติดกัน: เสียงขอร้องนุ่มนวล (Could you let me know...) + เสียงวิเคราะห์อดีต (must-əv / couldn’t-əv) + จังหวะหยุดก่อนตัวเชื่อม (; however, / Consequently,)',
        'Shadowing บทอ่านวันนี้รวดเดียว 2 รอบ โดยสังเกตว่าประโยคหนึ่งสลับจาก Passive ไป Conditional และ Discourse Marker ได้ลื่นขนาดไหน',
      ],
      l1: [
        'เมื่อต้องเขียนหรือพูดยาวๆ โดยผสมหลายโครงสร้าง มักเกิดอาการ "สมาธิหลุดกลางทาง": เปิดด้วย Could you tell me... แล้วเผลอกลับเป็นรูปคำถามตรง (...where is the file?) หรือเปิด Although แล้วเผลอเติม but กลางประโยค',
        'สมองโฟกัสอยู่ที่เนื้อหาการสื่อสารจนดึงรูปแบบคำไทยกลับมาสอดแทรกโดยไม่รู้ตัว',
        'ตรวจ "3 จุดแดง" ก่อนจบทุกย่อหน้าในวันพรุ่งนี้: 1) Indirect Question เรียง S + V หรือยัง? 2) Despite ไม่มี of และ Although ไม่มี but? 3) Modal อดีตมี have + V3 ครบไหม?',
      ],
      vocab: [
        ['synthesize', 'สังเคราะห์ / ผสานเข้าด้วยกัน', '/ˈsɪn.θə.saɪz/', 'synthesize key findings', 'สังเคราะห์ข้อค้นพบสำคัญเข้าด้วยกัน'],
        ['diplomatic', 'สุภาพนุ่มนวลทางการทูต', '/ˌdɪp.ləˈmæt.ɪk/', 'use diplomatic phrasing', 'เลือกใช้ถ้อยคำที่สุภาพนุ่มนวล'],
        ['discrepancy', 'ความคลาดเคลื่อน / ข้อมูลไม่ตรงกัน', '/dɪˈskrep.ən.si/', 'spot a minor discrepancy', 'พบความคลาดเคลื่อนเล็กน้อย'],
        ['overhaul', 'ยกเครื่องปรับปรุงใหม่', '/ˈəʊ.və.hɔːl/', 'overhaul the workflow', 'ยกเครื่องขั้นตอนการทำงานใหม่'],
        ['resilient', 'ยืดหยุ่นฟื้นตัวเก่ง', '/rɪˈzɪl.i.ənt/', 'build a resilient process', 'สร้างกระบวนการที่ยืดหยุ่นรับมือปัญหาได้'],
        ['verify', 'ตรวจสอบยืนยันความถูกต้อง', '/ˈver.ɪ.faɪ/', 'verify the figures twice', 'ตรวจสอบตัวเลขซ้ำสองรอบ'],
        ['cohesive', 'เกาะเกี่ยวกลมกลืนเป็นเนื้อเดียว', '/kəʊˈhiː.sɪv/', 'write a cohesive response', 'เขียนคำตอบที่เชื่อมโยงกลมกลืน'],
      ],
      examples: [
        ['Could you let me know whether the revised budget has been approved by finance yet?', 'ช่วยแจ้งให้ทราบหน่อยได้ไหมครับว่างบฉบับปรับแก้ได้รับการอนุมัติจากฝ่ายการเงินหรือยัง?'],
        ['Our coordinator told us that the vendor must have shipped the wrong size by mistake.', 'ผู้ประสานงานบอกเราว่าซัพพลายเออร์ต้องส่งผิดไซซ์โดยไม่ได้ตั้งใจแน่ๆ'],
        ['Although a minor discrepancy slowed down Tuesday’s audit, we wouldn’t be on track today if we hadn’t checked early.', 'ถึงแม้ความคลาดเคลื่อนเล็กน้อยจะทำให้งานตรวจวันอังคารช้าลง แต่ถ้าเราไม่เช็กแต่เนิ่นๆ วันนี้เราก็คงไม่ทันกำหนด'],
        ['Despite two tight deadlines, the crew delivered a cohesive report and verified every chart.', 'ทั้งๆ ที่เจอเส้นตายกระชั้นถึงสองงาน ทีมงานก็ยังส่งรายงานที่กลมกลืนครบถ้วนและตรวจสอบทุกกราฟเรียบร้อย'],
      ],
      reading:
        'Preparing for a major workplace presentation tests nearly every communication skill at once. Last week, Kanya coordinated a cross-team product demo for regional partners. Two days before the call, she spotted a minor discrepancy in the shipment chart. At first, her assistant worried someone might have erased an entire column, yet Kanya quickly deduced that the file couldn’t have been deleted because yesterday’s backup remained intact. Rather than panicking, she sent a diplomatic message asking: "Could you let me know whether those updated totals were entered before noon?" Later, the warehouse lead told her that an automatic script had been paused due to server maintenance. Although the hiccup caused brief stress, Kanya turned it into a lesson: "If we hadn’t rehearsed early, we would be scrambling right before the partners joined." In plain terms, combining clear questions, calm deduction, and cohesive updates builds truly resilient teamwork.',
      listenQ: 'How did Kanya know the column could not have been permanently deleted?',
      listenA: 'Because yesterday’s backup remained intact.',
      dictation: 'Could you let me know whether the updated file was sent?',
      listenNote:
        'จับการเรียงลำดับ S + V หลัง "whether" (...the updated file was sent — ห้ามสลับเป็น was the updated file sent!)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยครวมข้อผิดพลาดจาก Phase 3 ทั้ง 3 จุด: "Could you tell me why did the order delayed, and although I told to him yesterday, but he still forgot."',
          answer:
            'Could you tell me why the order was delayed? Although I told him yesterday, he still forgot.',
          explanation:
            '1) Indirect question ตัด did และเรียง S + Passive (the order was delayed) 2) ตัด to หลัง told (told him) 3) ตัด but ทิ้งเมื่อมี Although',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดผสาน Mixed Conditional และ Deduction ได้ถูกต้องตามโครงสร้าง Phase 3 100%?',
          answer:
            "If we had checked the plug earlier, we wouldn't be wondering what could have caused the shutdown now.",
          choices: [
            "If we had checked the plug earlier, we wouldn't be wondering what could have caused the shutdown now.",
            "If we would have checked the plug earlier, we wouldn't have wondered now.",
            "If we had checked the plug earlier, we wouldn't be wondering what did cause the shutdown.",
            "If we checked the plug earlier, we mustn't be wondering what could have caused it now.",
          ],
          explanation:
            'อดีต (had checked) -> ปัจจุบัน (wouldn’t be wondering) + Embedded question/deduction (what could have caused...)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมที่เหมาะสมหน้ากลุ่มคำนาม: _____ the sudden discrepancy in the shipping sheet, our team stayed on track for the afternoon launch.',
          answer: 'Despite',
          explanation:
            'ด้านหลังเป็นกลุ่มคำนาม (the sudden discrepancy...) จึงใช้ Despite (ไม่มี of) หรือ In spite of',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ผู้จัดการบอกฉันว่าคู่มือฉบับใหม่น่าจะถูกแปลเสร็จก่อนวันศุกร์"',
          answer:
            'The manager told me that the new guide should be translated before Friday.',
          explanation:
            'รวม Reported Speech (told me without to) + Passive Voice (be translated)',
        },
      ],
      writing:
        'ซ้อมใหญ่ก่อนสอบ: เขียนบันทึกข้อความถึงทีมงาน (6–7 ประโยค) เกี่ยวกับปัญหาเล็กน้อยที่เพิ่งเจอและแนวทางรับมือ โดยบังคับใช้ครบอย่างน้อย 4 โครงสร้างจาก Phase 3: Passive, Indirect question, Modal of deduction/Mixed Conditional และ Discourse Marker',
      writingSample:
        "Hi team, just a quick synthesis before tomorrow's review. Earlier today, the registration form was temporarily paused due to a sudden spike in duplicate entries. Judging by the server logs, two automatic reminders must have triggered at the exact same minute. Could you let me know whether any guest complaints were received in your inbox? Although the glitch looked alarming at first, our technician fixed it within twenty minutes. Looking back, if we hadn't run yesterday's dry check, we would still be sorting messy rows right now. Moving forward, let's verify reminder schedules upfront every Friday.",
      writingNote:
        'อ่านตรวจละเอียดทีละข้อ: Passive (be + V3), Indirect Q (S+V), Deduction (must have + V3), Conditional และ Linkers (Although/despite/due to)',
      speakingTopic: 'ซ้อมพูดใหญ่ครบเครื่อง Phase 3 (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าเหตุการณ์งานหรือการเรียน 1 เรื่องที่ใช้ครบทั้ง: ปัญหาที่เกิดขึ้น (Passive) -> การวิเคราะห์สาเหตุ (must/might have) -> คำขอข้อมูลสุภาพ (Could you let me know...) -> บทเรียน (If we hadn’t... / Moving forward)',
        'ฝึกคุมจังหวะเชื่อมเสียงและไม่หลุดใช้รูปคำถามตรงในประโยคซ้อน',
      ],
    },
    {
      day: 168,
      type: 'assessment',
      title: 'Phase 3 Milestone Assessment: จบระดับ Solid B1 → Early B2',
      objective:
        'ประเมินความพร้อมรอบด้านจบ Phase 3 (Days 113–168): อ่านจับความลึก 220+ คำ, Dictogloss, Error Analysis, เขียนอีเมลตอบสนองข้อเสนอ 150+ คำ และพูดอธิบายเชิงเทคนิค/ประสบการณ์ระดับ Early B2',
      explanation:
        'ขอแสดงความยินดีด้วยครับ! วันนี้คือ **Day 168 — Milestone Assessment จบ Phase 3 (Solid B1 → Early B2)** ตลอด 8 สัปดาห์ของ Phase 3 คุณได้เปลี่ยนวิธีคิดจากการสร้างประโยคง่ายๆ มาสู่การควบคุมโครงสร้างระดับทำงานจริง ทั้งลำดับกาลซับซ้อน (Perfect Continuous / Past Perfect), Passive Voice, Indirect Questions, Reported Speech, Modals of Deduction, Third & Mixed Conditionals, Discourse Markers และทักษะสื่อสารในที่ทำงาน (Standups, Delay Handling, Scope Negotiation, Explaining Simply) ข้อสอบประเมินผลวันนี้จะทดสอบความแม่นยำรวมทั้งหมดผ่านบทอ่านเชิงลึก Dictogloss การแก้จุดผิดระดับ B2 งานเขียนอีเมลตอบรับข้อเสนอ 150+ คำ และพูด 4/3/2 ก่อนก้าวเข้าสู่ Phase 4 (B2 Operational Fluency) ในวันพรุ่งนี้!',
      sound: [
        'Phase 3 Graduation Speech & Connected Speech Audit',
        'consensus /kənˈsen.səs/ · discrepancy /dɪˈskrep.ən.si/ · mitigated /ˈmɪt.ɪ.ɡeɪ.tɪd/ · essentially /ɪˈsen.ʃəl.i/',
        'ตรวจความสมบูรณ์ของ 4 ระบบเสียงหลัก: 1) Weak form "have" (/əv/) ใน must have / wouldn’t have 2) Final -ed (/t/, /d/, /ɪd/) ใน Passive 3) Rising-soft pitch ใน Indirect Questions 4) Thought-group pauses รอบ Discourse Markers',
        'ทำ Shadowing บทอ่านประเมินผลวันนี้ 2 รอบเต็มเพื่อวัดจังหวะการหายใจ ความต่อเนื่อง และการเน้นคำสำคัญระดับ Early B2',
      ],
      l1: [
        'จุดรั่วสะสมที่ต้องเช็กเป็นพิเศษตอนประเมินจบ Phase 3: สลับ V ช่วยใน Indirect Question, ใส่ but หลัง Although, ใส่ of หลัง Despite, ลืม V3 หลัง must have/had, และขอโทษพร่ำเพรื่อเวลาแจ้งเลื่อนงานโดยไม่ให้ทางออก',
        'เมื่อเนื้อหายาวเกิน 150 คำ สมองมักพะวงเรื่องไอเดียจนละเลยไวยากรณ์พื้นฐานและตัวเชื่อมระหว่างประโยค',
        'แบ่งจังหวะตรวจสอบ 2 รอบเสมอ: รอบแรกเขียน/พูดตามโครง 4 ก้าวให้จบก่อน แล้วใช้ 60 วินาทีสุดท้ายสแกนจุดพลาดคนไทย (Indirect Q, Linkers, V3, Punctuation)',
      ],
      vocab: [
        ['milestone', 'หมุดหมายสำคัญของความก้าวหน้า', '/ˈmaɪl.stəʊn/', 'reach a major milestone', 'ก้าวถึงหมุดหมายสำคัญ'],
        ['autonomy', 'ความเป็นอิสระในการทำงาน/ตัดสินใจ', '/ɔːˈtɒn.ə.mi/', 'gain greater autonomy', 'ได้รับอิสระในการตัดสินใจมากขึ้น'],
        ['transparency', 'ความโปร่งใสเปิดเผยชัดเจน', '/trænˈspær.ən.si/', 'communicate with transparency', 'สื่อสารอย่างโปร่งใสชัดเจน'],
        ['propose', 'เสนอแนะอย่างเป็นทางการ', '/prəˈpəʊz/', 'propose a balanced solution', 'เสนอทางออกที่สมดุล'],
        ['feasible', 'ที่เป็นไปได้จริงในทางปฏิบัติ', '/ˈfiː.zə.bəl/', 'a realistic and feasible plan', 'แผนที่เป็นไปได้จริงในทางปฏิบัติ'],
        ['articulate', 'ถ่ายทอดความคิดได้ชัดถ้อยชัดคำ', '/ɑːˈtɪk.jʊ.leɪt/', 'articulate ideas clearly', 'ถ่ายทอดความคิดอย่างชัดเจน'],
        ['momentum', 'แรงส่งต่อเนื่อง', '/məˈmen.təm/', 'sustain steady momentum', 'รักษาแรงส่งต่อเนื่องไว้ได้'],
      ],
      examples: [
        ['Communicating with transparency builds lasting trust even when unforeseen setbacks arise.', 'การสื่อสารอย่างโปร่งใสช่วยสร้างความไว้วางใจระยะยาวแม้ในยามเกิดอุปสรรคที่ไม่ได้คาดคิด'],
        ['Before finalizing the contract, could you clarify whether quarterly reviews are included?', 'ก่อนสรุปสัญญาขั้นสุดท้าย ช่วยชี้แจงได้ไหมครับว่ารวมการทบทวนรายไตรมาสด้วยหรือไม่?'],
        ['Although the initial timeline looked ambitious, careful phasing made the entire plan feasible.', 'ถึงแม้ไทม์ไลน์แรกจะดูท้าทายมาก แต่การแบ่งเฟสอย่างรอบคอบก็ทำให้ทั้งแผนเป็นไปได้จริง'],
        ['Looking back across sixteen weeks, consistent daily output helped you articulate complex thoughts calmly.', 'มองย้อนกลับไปตลอดสิบหกสัปดาห์ การฝึกผลิตภาษาสม่ำเสมอทุกวันช่วยให้คุณถ่ายทอดความคิดซับซ้อนได้อย่างใจเย็น'],
      ],
      reading:
        'Reaching Day 168 marks a genuine turning point in how you think and communicate in English. Earlier in this journey, unexpected problems at work or while traveling might have forced you into short, choppy phrases—or worse, awkward silence. Consider how differently an experienced communicator handles a real project snag today. Suppose an updated client manual was supposed to be finalized on Wednesday, yet two crucial safety diagrams haven’t arrived from the engineering partner. Instead of blaming anyone defensively or vanishing until five o’clock, you step back and inspect the facts. Judging by yesterday’s status log, the diagrams must have been delayed due to final compliance edits rather than careless oversight. You immediately send a clear, diplomatic update: first, you give an early heads-up without panic; next, you clarify politely whether the team prefers reviewing the completed text chapters in the meantime. Moreover, you offer a feasible compromise—think of it like pouring a house foundation before installing the windows—so editorial work continues smoothly despite the pending graphics. Looking back, if you hadn’t practiced combining Indirect Questions, Passive Voice, logical deduction, and cohesive discourse markers step by step, coordinating under pressure would still feel intimidating today. At the end of the day, solid B1-to-B2 fluency isn’t about never pausing; it’s about sustaining calm momentum, articulating clear trade-offs, and guiding listeners effortlessly forward.',
      listenQ: 'What analogy does the assessment passage use to describe reviewing the completed text chapters while waiting for diagrams?',
      listenA: 'Pouring a house foundation before installing the windows.',
      dictation: 'Communicating with transparency builds trust during delays.',
      listenNote:
        'จับเสียงเน้นหนักคำนาม 3 คำหลักในประโยค: Communicating · transparency · trust · delays และฟังเสียง /θ/ ใน "with" กับ "trust"',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคประเมินความแม่นยำระดับ B1→B2 ที่ซ่อนจุดผิด 4 จุด: "Could you tell me why wasn’t the invoice sent yet? Despite of the reminder, finance mustn’t have received it, and if we checked earlier, we wouldn’t have been stressed right now."',
          answer:
            "Could you tell me why the invoice wasn't sent yet? Despite the reminder, finance can't have received it, and if we had checked earlier, we wouldn't be stressed right now.",
          explanation:
            '1) Indirect Question เรียง S+V -> why the invoice wasn’t sent 2) Despite ไม่มี of 3) ปฏิเสธความเป็นไปได้ในอดีตใช้ can’t/couldn’t have received (ไม่ใช่ mustn’t have) 4) Mixed Conditional อดีต (had checked) -> ปัจจุบัน right now (wouldn’t be stressed)',
        },
        {
          kind: 'dictogloss',
          prompt:
            'ฟังบทอ่านประเมินผลแล้วเติมคู่โครงสร้างที่ถูกต้องตรงตามต้นฉบับ: "Judging by yesterday’s status log, the diagrams _____ due to final edits, and _____ the completed chapters keeps work moving."',
          answer: 'must have been delayed / reviewing',
          choices: [
            'must have been delayed / reviewing',
            'must delayed / review',
            'mustn’t have been delayed / reviewed',
            'should have delayed / to reviewing',
          ],
          explanation:
            '1) คาดเดาอดีตในรูป Passive -> must have been delayed 2) Gerund เป็นประธานของกริยา keeps -> reviewing',
          audio_text:
            "Judging by yesterday's status log, the diagrams must have been delayed due to final edits, and reviewing the completed chapters keeps work moving.",
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้องค์ประกอบระดับ Early B2 ทั้งขอบเขตงาน เงื่อนไข และความสุภาพได้อย่างสมบูรณ์ไร้ที่ติ?',
          answer:
            'Although that extra module falls outside our initial scope, we can include it provided that we adjust the handoff to next Tuesday.',
          choices: [
            'Although that extra module falls outside our initial scope, we can include it provided that we adjust the handoff to next Tuesday.',
            'Although that extra module falls outside our initial scope, but we can include it if we will adjust the handoff.',
            'Despite of that extra module out of scope, we could include unless you don’t adjust the handoff.',
            'I wish we can include that extra module, therefore, please tell me when is the handoff.',
          ],
          explanation:
            'ประโยคแรกใช้ Although (ไม่มี but) + falls outside our initial scope + provided that + Present Simple (adjust) ถูกต้องทุกจุด',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำที่ช่วยให้การอธิบายเรื่องยากชัดเจนขึ้น: Rather than using confusing engineering _____, she used a clear kitchen analogy that every client grasped instantly.',
          answer: 'jargon',
          explanation:
            'jargon = ศัพท์เทคนิคเฉพาะทางที่คนนอกวงการไม่คุ้นเคย',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษระดับมืออาชีพ: "ถ้าเราไม่สร้างแผนสำรองไว้ตั้งแต่เดือนก่อน วันนี้เราคงกำลังติดขัดอยู่ที่ปัญหาเดิมแน่ๆ"',
          answer:
            "If we hadn't built a contingency plan last month, we would still be stuck on the same issue today.",
          explanation:
            'Mixed Conditional: อดีต (If we hadn’t built...) -> ปัจจุบัน (would still be stuck... today)',
        },
      ],
      writing:
        'Milestone Writing Task (150+ คำ / 8–10 ประโยค): ตอบกลับอีเมลข้อเสนอของลูกค้า/พาร์ทเนอร์ที่ขอเพิ่มฟีเจอร์ใหม่เข้ามาในสัปดาห์สุดท้ายก่อนเปิดตัว โดยเขียนให้ครอบคลุม: 1) รับทราบข้อเสนอและชี้แจงอย่างสุภาพว่าเหตุใดส่วนหนึ่งจึงอยู่นอกขอบเขตเดิม 2) ใช้ Indirect Question ขอความชัดเจน 1 จุด 3) เสนอทางเลือก 2 แบบ (trade-off: ขยายเวลา vs แบ่งเป็นเฟสสอง) ด้วยคำเชื่อมเงื่อนไข (provided that / as long as / unless) และ Discourse Markers',
      writingSample:
        "Dear Daniel,\n\nThank you very much for sharing your thoughtful feedback on the prototype and proposing the automated analytics dashboard. We have taken all of your layout notes on board and are currently wrapping up the final mobile adjustments. Regarding the new analytics dashboard, adding live reporting widgets falls slightly outside our initial scope for this Friday's launch. Because building and verifying reliable charts takes additional testing time, trying to squeeze everything into forty-eight hours could compromise stability on day one. In plain terms, launching a solid core site first ensures a smooth visitor experience while we construct the dashboard carefully behind the scenes. To move forward with full transparency, I'd like to propose two feasible options. Option A: we stay on track for Friday's release with the agreed pages and add the dashboard as phase two next Thursday, provided that the data fields are locked by Monday. Option B: we include the dashboard in one combined rollout, which would push the launch back to next Wednesday. Just to clarify, could you let me know which option aligns best with your marketing schedule?\n\nBest regards,\nKanya",
      writingNote:
        'ตรวจนับความยาวให้ได้อย่างน้อย 150 คำ และเช็กครบ 5 จุด: โทนสุภาพรับฟัง -> ขอบเขตและเหตุผล (falls outside scope / due to) -> ภาษาเข้าใจง่าย (in plain terms) -> ทางเลือกมีเงื่อนไข (provided that) -> Indirect Question ปิดท้าย',
      speakingTopic:
        'Phase 3 Graduation 4/3/2 Speech: อธิบายประสบการณ์ทำงานหรือระบบที่ซับซ้อนให้ผู้บริหาร/ลูกค้าที่ไม่ใช่สายเทคนิคเข้าใจ พร้อมสรุปบทเรียน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ช่วงที่ 1 (Context & Analogy): เล่า 1 โปรเจกต์/กระบวนการจากงานหรือการเรียนของคุณโดยใช้อุปมาเปรียบเทียบ (Think of it like... / In plain terms...) ไม่ใช้ศัพท์เทคนิคเกินจำเป็น',
        'ช่วงที่ 2 (Problem & Synthesis): เล่าจุดที่เคยสะดุด วิเคราะห์สาเหตุ (must have / due to) และวิธีสื่อสารรับมือ (early heads-up, trade-off, Mixed Conditional)',
        'ช่วงที่ 3 (Takeaway & Wrap-up): สรุปบทเรียนด้วย At the end of the day / Moving forward พร้อมจับเวลาไล่ลง 4 -> 3 -> 2 นาทีเพื่อวัดความคล่องระดับ Early B2 จริง!',
      ],
    },
  ]
);
