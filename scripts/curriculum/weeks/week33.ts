import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 5: ความแม่นยำระดับสูงและการต่อยอดใช้จริงตลอดชีวิต';

export const WEEK33: ModuleSeed = createModule(
  {
    week: 33,
    phase: 5,
    phase_title: PHASE_TITLE,
    cefr_level: 'High-B2 → C1',
    title: 'Inversion, Subjunctive & ไวยากรณ์เชิงศิลปะระดับสูง',
    summary:
      'เข้าใจและใช้ Inversion หลังคำกริยาวิเศษณ์เชิงปฏิเสธ (Rarely/Seldom/Not only), Conditionals Inverted (Had we / Were I / Should you) และ Subjunctive อย่างเป็นธรรมชาติ',
    focus: 'Negative Inversion, Conditional Inversion, Subjunctive Mood & Precision',
  },
  [
    {
      day: 225,
      title: 'Negative Inversion: เน้นอารมณ์และน้ำหนักด้วย Never / Rarely / Not only',
      objective:
        'พลิกโครงสร้างประโยค (Auxiliary + Subject + Verb) หลังคำเชิงปฏิเสธหรือจำกัดความอย่าง Never, Rarely และ Not only ได้แม่นยำเพื่อสร้างแรงกระแทกทางความหมาย',
      explanation:
        'ในระดับ C1 การขึ้นต้นประโยคด้วยคำเชิงปฏิเสธหรือความถี่น้อยอย่าง **`Never`**, **`Rarely`**, **`Little`**, หรือ **`Not only`** ไม่ได้ทำเพื่อโชว์ความหรู แต่เพื่อ **"เน้นน้ำหนักความรู้สึกให้ผู้ฟังหยุดฟัง"** กฎเหล็กคือทันทีที่วางคำกลุ่มนี้ไว้หน้าประโยค กริยาช่วยต้องกระโดดมาหน้าประธานเหมือนรูปคำถาม: **`Negative Word + Aux (have/do/did/can) + Subject + Main Verb`** เช่น `Never have I seen such teamwork.` ถ้าประโยคเดิมเป็น Present/Past Simple ที่ไม่มีกริยาช่วย ต้องดึง **`do / does / did`** เข้ามาช่วยแล้วปล่อยกริยาแท้กลับเป็นรูปเดิม เช่น `Rarely do people notice this detail.` และ `Not only did we finish early, but we also stayed under budget.` (ส่วนครึ่งหลังหลัง `but also` กลับมาเรียงปกติ)',
      sound: [
        'Emphatic Stress on Negative Fronting & Auxiliary Linking',
        'never /ˈnev.ər/ · rarely /ˈreə.li/ · extraordinary /ɪkˈstrɔː.dən.ər.i/ · subtle /ˈsʌt.əl/',
        'เน้นเสียงหนักที่คำเปิด: "**NE-ver** have-I seen...", "**NOT** only did-we..." โดยเชื่อม have-I / did-we เป็นจังหวะเร็ว',
        'ฝึกพูด 3 ประโยคเน้นน้ำหนักจากช้าไปเร็ว: Never have I felt... / Rarely do I hear... / Not only did she help, but she also...',
      ],
      l1: [
        'ขึ้นต้นด้วย Never หรือ Not only แล้วเรียงคำแบบประโยคบอกเล่าปกติ: "❌ Never I have seen that." หรือ "❌ Not only we solved it, but also..."',
        'ภาษาไทยเอาคำว่า "ไม่เคย / ไม่เพียงแต่" มาวางหน้าประโยคแล้วตามด้วย ประธาน + กริยา ได้เลยโดยไม่ต้องสลับตำแหน่งคำช่วย',
        'จำจังหวะในหัวเป็นภาพสะท้อนคำถาม: เจอ Never / Rarely / Not only นำหน้าปุ๊บ ปากต้องดึง have / do / does / did มาก่อนประธานทันที',
      ],
      vocab: [
        ['rarely', 'แทบจะไม่ / นานๆ ครั้ง', '/ˈreə.li/', 'rarely do people notice', 'น้อยคนนักที่จะสังเกตเห็น'],
        ['remarkable', 'น่าทึ่ง / โดดเด่น', '/rɪˈmɑː.kə.bəl/', 'a remarkable shift', 'การเปลี่ยนแปลงที่น่าทึ่ง'],
        ['overlook', 'มองข้าม', '/ˌəʊ.vəˈlʊk/', 'overlook a crucial detail', 'มองข้ามรายละเอียดสำคัญ'],
        ['compose', 'ตั้งสติ / รวบรวมอารมณ์', '/kəmˈpəʊz/', 'stay composed under pressure', 'คงความนิ่งไว้ภายใต้ความกดดัน'],
        ['initiative', 'ความคิดริเริ่ม', '/ɪˈnɪʃ.ə.tɪv/', 'take the initiative', 'เป็นฝ่ายเริ่มลงมือก่อน'],
        ['underestimate', 'ประเมินต่ำเกินไป', '/ˌʌn.dəˈres.tɪ.meɪt/', 'underestimate the impact', 'ประเมินผลกระทบต่ำเกินไป'],
        ['resilience', 'ความยืดหยุ่นทางใจ / การฟื้นตัว', '/rɪˈzɪl.i.əns/', 'quiet resilience', 'ความแข็งแกร่งทางใจแบบเงียบๆ'],
      ],
      examples: [
        ['Never have I witnessed such calm teamwork during a sudden outage.', 'ฉันไม่เคยเห็นการทำงานเป็นทีมที่นิ่งขนาดนี้มาก่อนตอนระบบล่มกะทันหัน'],
        ['Rarely do busy commuters pause to thank the station staff.', 'น้อยครั้งนักที่คนเดินทางตอนเร่งรีบจะหยุดขอบคุณเจ้าหน้าที่สถานี'],
        ['Not only did Pim redesign the menu, but she also trained every new barista.', 'พิมพ์ไม่เพียงออกแบบเมนูใหม่ แต่ยังเทรนบาริสต้าใหม่ทุกคนด้วย'],
        ['Little did we realize how deeply that single conversation would shape our year.', 'พวกเราแทบไม่รู้เลยว่าการคุยกันครั้งเดียวนั้นจะเปลี่ยนปีของเราไปมากขนาดไหน'],
      ],
      reading:
        'Last October, a sudden power blackout hit our neighborhood café right before the morning rush. Never had our small crew handled forty waiting customers without espresso machines or point-of-sale screens. For two tense minutes, everyone stood frozen near the counter. Then Pim took the initiative. Not only did she switch the kettle to a camping gas burner, but she also invited guests to sample cold-brew concentrates while sharing stories about local roasters. Rarely do people stay patient when caffeine arrives late, yet the mood shifted almost instantly. Little did we expect that an unplanned morning without Wi-Fi would turn strangers into regular neighbors. By noon, electricity returned, and several customers left handwritten notes praising Pim’s quiet resilience. Underestimating how strongly tone shapes a room is easy, but that blackout proved one lasting lesson: when leaders stay composed under pressure, obstacles often reveal what a team is truly capable of.',
      listenQ: 'How did Pim keep customers engaged during the power blackout?',
      listenA: 'She made hot water on a camping gas burner and invited guests to sample cold-brew concentrates while sharing coffee stories.',
      dictation: 'Not only did she stay composed, but she also inspired the whole crew.',
      listenNote:
        'สังเกตคำเชื่อมเสียงในบทฟัง: "Not only did_she" เสียง /d/ หน้า she มักกลืนนุ่มลงเป็น /dʒ/ เบาๆ และคำว่า "Rarely do" กดเสียงหนักที่ Rare- แล้วปล่อย do เบา',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ลืมสลับตำแหน่งหลัง Negative Fronting: "Never I have tasted street food as fresh as the noodles in that alley."',
          answer: 'Never have I tasted street food as fresh as the noodles in that alley.',
          explanation: 'เมื่อนำ Never มาวางต้นประโยค ต้องสลับกริยาช่วย have มาหน้าประธาน I เป็น Never have I tasted...',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้โครงสร้าง Not only ... but also ได้ถูกต้องตามหลัก Inversion?',
          answer: 'Not only did he miss the ferry, but he also lost his waterproof bag.',
          choices: [
            'Not only he missed the ferry, but he also lost his waterproof bag.',
            'Not only did he missed the ferry, but he also lost his waterproof bag.',
            'Not only did he miss the ferry, but also did he lose his waterproof bag.',
            'Not only did he miss the ferry, but he also lost his waterproof bag.',
          ],
          explanation: 'ครึ่งแรกสลับเป็น did + he + V1 (miss) ส่วนครึ่งหลังหลัง but he also เรียงตามปกติ (lost)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำกริยาช่วยที่เหมาะสม: Rarely _____ urban planners ask cyclists how intersections feel at night.',
          answer: 'do',
          explanation: 'urban planners เป็นพหูพจน์ใน Present Simple จึงดึง do มาวางหน้าประธานหลัง Rarely',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยขึ้นต้นด้วย Little: "พวกเราแทบไม่รู้เลยว่าโครงการนั้นจะใช้เวลานานถึงหกเดือน"',
          answer: 'Little did we know that the project would take six months.',
          explanation: 'Little did + Subject + know/realize... เป็นโครงสร้างมาตรฐานสำหรับเล่าเรื่องย้อนหลัง',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์จริงหรือเรื่องประทับใจ 1 ย่อหน้า (5–6 ประโยค) โดยแทรก Negative Inversion อย่างน้อย 2 รูปแบบ (เช่น Never have I..., Rarely do..., หรือ Not only did... but also...)',
      writingSample:
        'Last month, I attended a community design workshop in Chiang Mai without knowing anyone there. Never have I walked into a room of strangers and felt welcomed so quickly. Not only did the hosts pair newcomers with local artisans, but they also encouraged everyone to share failed prototypes openly. Rarely do professionals talk so honestly about mistakes that taught them something valuable. Little did I expect to leave with three collaborators and a clear plan for our neighborhood garden.',
      writingNote:
        'เช็กหลังขึ้นต้นด้วย Never / Rarely / Not only / Little ว่ามีกริยาช่วย (have/do/did) วางหน้าประธานครบทุกจุด และกริยาแท้หลัง do/did กลับเป็น V1 เสมอ',
      speakingTopic: 'เล่าช่วงเวลาที่ทำให้ประทับใจหรือประหลาดใจที่สุดในปีที่ผ่านมา (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เปิดเรื่องด้วยภาพเหตุการณ์สั้นๆ แล้วกดน้ำหนักอารมณ์ด้วย Never have I... หรือ Little did I expect...',
        'เติมรายละเอียดผลลัพธ์ด้วย Not only did... but also... โดยคุมจังหวะให้เป็นธรรมชาติ ไม่ท่องจำแข็งทื่อ',
      ],
    },
    {
      day: 226,
      title: 'More Inversion Patterns: Seldom, Hardly...when, No sooner...than & Only after',
      objective:
        'เรียงลำดับเหตุการณ์สองเหตุการณ์ที่เกิดติดกันแทบจะทันทีและจุดตระหนักรู้ด้วย Hardly...when, No sooner...than และ Only after...did...',
      explanation:
        'นอกจาก `Never` แล้ว การเล่าเรื่องระดับสูงยังมีอีก 3 โครงสร้างที่ช่วยให้จังหวะเรื่องเฉียบคมมาก: 1) **`Seldom`** (ไม่ค่อย): `Seldom have I encountered...` 2) **เหตุการณ์เกิดปุ๊บ อีกอย่างตามมาปั๊บ**: ใช้ **`Hardly had + S + V3 ... when + Past Simple`** หรือ **`No sooner had + S + V3 ... than + Past Simple`** (ระวังคู่จับให้แม่น: *Hardly/Scarcely* คู่ **`when`** เท่านั้น ส่วน *No sooner* เป็นขั้นกว่า จึงคู่ **`than`** เท่านั้น!) 3) **การสลับแบบรอจบประโยคย่อย (`Delayed Inversion`)**: กับ **`Only after` / `Only when` / `Not until`** ห้ามสลับในส่วนแรก! ต้องรอให้จบเหตุการณ์แรกก่อน แล้วค่อยสลับในกริยาหลัก เช่น `Only after I read her message **did I realize** the mistake.` (ไม่ใช่ *Only after did I read...* ❌)',
      sound: [
        'Rhythm of Two-Clause Inversion (Rise on Part 1, Fall on Part 2)',
        'seldom /ˈsel.dəm/ · scarcely /ˈskeəs.li/ · realize /ˈrɪə.laɪz/ · immediate /ɪˈmiː.di.ət/',
        '"No sooner had I..." มักเชื่อมเสียงเป็น "No soo-ner ha-daɪ" และหยุดพักสั้นๆ ก่อน "than..." เพื่อให้คนฟังลุ้นต่อ',
        'ฝึกพูดประโยค 2 จังหวะแบบขึ้นเสียงท้ายท่อนแรกแล้วลงเสียงท่อนหลัง: "Hardly had we landed ↗ when the storm broke ↘."',
      ],
      l1: [
        'จับคู่ผิดเป็น "No sooner ... when" หรือ "Hardly ... than" และมักสลับคำผิดจุดใน Only after เช่น "❌ Only after did I arrive home I noticed..."',
        'จำคำเชื่อมสลับกันเพราะในภาษาไทยแปลรวมๆ ว่า "พอ...ก็..." ทั้งคู่ ส่วน Only after คนไทยมักอยากรีบกลับคำตั้งแต่ต้นประโยค',
        'ท่องคู่แท้ 2 ชุด: 1) No **sooner** (ขั้นกว่า -er) → **than** / **Hardly** → **when** 2) Only after / Not until ให้ **ล็อกประโยคแรกไว้ปกติ** แล้วค่อยกลับคำที่ **ประโยคหลักข้างหลัง**',
      ],
      vocab: [
        ['seldom', 'ไม่ค่อย / นานๆ ครั้ง', '/ˈsel.dəm/', 'seldom does an opportunity', 'นานๆ ครั้งโอกาสจึงจะ...'],
        ['scarcely', 'แทบจะไม่ทัน', '/ˈskeəs.li/', 'scarcely had we stepped', 'พวกเราแทบจะยังไม่ได้ก้าว...'],
        ['downpour', 'ฝนเทลงมาอย่างหนัก', '/ˈdaʊn.pɔːr/', 'caught in a sudden downpour', 'ติดฝนตกหนักกะทันหัน'],
        ['boarding', 'การขึ้นเครื่อง / ขึ้นรถ', '/ˈbɔː.dɪŋ/', 'announce final boarding', 'ประกาศเรียกขึ้นเครื่องรอบสุดท้าย'],
        ['dawn on', 'เพิ่งนึกขึ้นได้ / กระจ่าง', '/dɔːn ɒn/', 'it dawned on me', 'ฉันเพิ่งฉุกคิด/เข้าใจขึ้นมา'],
        ['unfold', 'คลี่คลาย / เผยออกมา', '/ʌnˈfəʊld/', 'watch events unfold', 'เฝ้าดูเหตุการณ์คลี่คลาย'],
        ['hindsight', 'ความเข้าใจเมื่อมองย้อนหลัง', '/ˈhaɪnd.saɪt/', 'in hindsight', 'พอมองย้อนกลับไป'],
      ],
      examples: [
        ['Hardly had we stepped off the BTS platform when a sudden downpour began.', 'พวกเราแทบจะยังก้าวลงจากชานชาลาบีทีเอสไม่ทันไร ฝนก็เทลงมาอย่างหนัก'],
        ['No sooner had the host finished introducing the guest than the microphone cut out.', 'พอพิธีกรแนะนำแขกรับเชิญจบปุ๊บ ไมโครโฟนก็ดับลงทันที'],
        ['Only after checking my passport twice did I realize my flight departed from Terminal 2.', 'ก็ต่อเมื่อเช็กพาสปอร์ตซ้ำสองรอบนั่นแหละ ฉันถึงเพิ่งรู้ว่าเครื่องออกที่อาคาร 2'],
        ['Seldom do travelers appreciate delayed trains until they meet kind strangers on the bench.', 'นักเดินทางไม่ค่อยซาบซึ้งรถไฟที่ล่าช้าหรอก จนกว่าจะได้คุยกับคนแปลกหน้าใจดีบนม้านั่ง'],
      ],
      reading:
        'Transferring flights in a busy hub teaches patience faster than any guidebook. Last winter, I landed in Tokyo with forty minutes before my connecting flight to Bangkok. No sooner had I walked out of the arrival gate than the airline staff announced final boarding at a distant wing. I sprinted past moving walkways with my carry-on bouncing behind me. Hardly had I reached the desk out of breath when the gate agent smiled calmly and told me the flight had been pushed back twenty minutes due to strong headwinds. I collapsed into a window seat, watching maintenance crews unfold ramps across the wet tarmac. Seldom do I slow down during work trips, always chasing the next email or deadline. Yet only after sitting quietly beside the foggy glass did I realize how exhausted I had been for months. In hindsight, that brief pause felt less like a travel delay and more like an overdue breather before landing back home.',
      listenQ: 'Why did the speaker end up having extra time to rest at the gate?',
      listenA: 'Because the connecting flight was pushed back twenty minutes due to strong headwinds.',
      dictation: 'Only after sitting quietly did I realize how tired I felt.',
      listenNote:
        'สังเกตเสียง Past Perfect ใน Hardly had / No sooner had: คำว่า "had" มักลดรูปเสียงเบาเป็น /əd/ เชื่อมติดกับประธาน เช่น "Hardly had_I" ฟังคล้าย "Hardly ha-daɪ"',
      drills: [
        {
          kind: 'choice',
          prompt: 'ข้อใดจับคู่โครงสร้างและวางตำแหน่ง Inversion ได้ถูกต้อง 100%?',
          answer: 'No sooner had we ordered our meal than the chef came out to greet us.',
          choices: [
            'No sooner had we ordered our meal when the chef came out to greet us.',
            'No sooner we had ordered our meal than the chef came out to greet us.',
            'No sooner had we ordered our meal than the chef came out to greet us.',
            'Hardly had we ordered our meal than the chef came out to greet us.',
          ],
          explanation: 'No sooner ต้องคู่กับ than และต้องวาง had หน้าประธาน (had we ordered)',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ตำแหน่ง Inversion ที่สลับผิดจุด: "Only after did the meeting end I noticed three missed messages."',
          answer: 'Only after the meeting ended did I notice three missed messages.',
          explanation: 'ห้ามสลับคำในประโยคหลัง Only after (ใช้ the meeting ended ปกติ) แล้วค่อยสลับในประโยคหลักเป็น did I notice',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำเชื่อมที่ถูกต้อง: Hardly had the workshop begun _____ the projector bulb flickered out.',
          answer: 'when',
          explanation: 'Hardly ... when (ไม่ใช้ than เพราะ than ใช้กับ No sooner)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยใช้ Not until: "จนกระทั่งอ่านสัญญาอีกรอบ ฉันถึงเห็นเงื่อนไขที่ซ่อนอยู่"',
          answer: 'Not until I read the contract again did I see the hidden condition.',
          explanation: 'Not until + clause ปกติ (I read...) + inversion ในประโยคหลัก (did I see...)',
        },
      ],
      writing:
        'เขียนเรื่องราวการเดินทางหรือเหตุการณ์ที่เกิดขึ้นแบบไม่คาดคิด 1 ย่อหน้า (5–6 ประโยค) โดยใช้ Hardly...when (หรือ No sooner...than) และ Only after...did... อย่างละ 1 ประโยค',
      writingSample:
        'Two months ago, I took an early train to Hua Hin for a quiet weekend alone. No sooner had the train pulled out of the station than I noticed my headphones were still on my kitchen counter. At first, I felt annoyed because I had planned to listen to podcasts for four hours. Hardly had I accepted the silence when an elderly vendor began chatting with passengers about old coastal towns. Only after stepping off at the seaside station did I realize how refreshing an unscheduled conversation could be.',
      writingNote:
        'ตรวจความสอดคล้อง 2 จุด: 1) Hardly คู่ when / No sooner คู่ than 2) Only after เชื่อมด้วยประโยคเรียงปกติ แล้วจึง invert ในประโยคหลักด้านหลัง',
      speakingTopic: 'เล่าเหตุการณ์ "แผนพังแต่ได้บทเรียนดี" ด้วยจังหวะเล่าเรื่อง 2 ขั้น (4 / 3 / 2 นาที)',
      speakingBullets: [
        'สร้างความตื่นเต้นช่วงจุดพลิกผันด้วย No sooner had... than... หรือ Hardly had... when...',
        'ปิดท้ายข้อคิดที่ได้ด้วย Only after [เหตุการณ์] did I realize...',
      ],
    },
    {
      day: 227,
      title: 'Inverted Conditionals: สื่อสารเงื่อนไขอย่างภูมิฐานด้วย Should / Were / Had',
      objective:
        'ลดรูปประโยคเงื่อนไข If ด้วยการตัด If ออกแล้วสลับ Should / Were / Had มาไว้หน้าประธาน เพื่อใช้ในบริบทการงาน การเจรจา และการทบทวนบทเรียน',
      explanation:
        'แทนที่จะใช้ `If` ซ้ำๆ ทั้งฉบับ เจ้าของภาษาในที่ทำงานและงานเขียนระดับ C1 นิยมใช้ **Inverted Conditionals** เพราะฟังดูกระชับ สุภาพ และมีน้ำหนักกว่ามาก แบ่งเป็น 3 แบบตรงกับ Conditional 1–3: 1) **แบบที่ 1 (สุภาพ/เตรียมรับมือ): `Should + S + V1`** แทน *If + S + should...* เช่น `**Should you need** any clarification, please let me know.` 2) **แบบที่ 2 (สมมติ/เสนอไอเดียแบบนุ่มนวล): `Were + S + to V1`** (หรือ `Were I in your shoes`) เช่น `**Were we to redesign** the onboarding flow, drop-off rates would fall.` 3) **แบบที่ 3 (ย้อนคิดแก้ไขอดีต): `Had + S + V3`** เช่น `**Had I known** about the road closure, I would have left earlier.` และจำกฎรูปปฏิเสธให้แม่น: **ห้ามใช้รูปย่อ `Hadn\'t / Weren\'t` หน้าประธานเด็ดขาด!** ต้องวาง `not` ไว้หลังประธาน เช่น `Had it not been for her help...`',
      sound: [
        'Conditional Inversion Intonation & Contraction Avoidance',
        'clarification /ˌklær.ə.fɪˈkeɪ.ʃən/ · redesign /ˌriː.dɪˈzaɪn/ · setback /ˈset.bæk/',
        'ระวัง: พูด "Had it not been..." เต็มคำและเน้น **not** เล็กน้อย ส่วนผลลัพธ์ด้านหลังมักลดรูป "would have" เป็น /ˈwʊd.əv/',
        'ฝึกพูด 3 เงื่อนไขต่อกัน: Should you need... / Were we to try... / Had I checked...',
      ],
      l1: [
        'เผลอวางรูปปฏิเสธย่อหน้าประธาน เช่น "❌ Hadn’t we checked earlier..." หรือลืม "to" ในแบบที่ 2 เช่น "❌ Were we redesign..."',
        'ภาษาไทยใช้คำว่า "ถ้าหากว่า" แล้วต่อประโยคธรรมดา ไม่มีการตัด "ถ้า" และสลับ Had/Were และคนไทยมักเติม If ซ้อนเข้าไปเป็น "❌ If had I known..."',
        'ตัด If ทิ้ง 100% เมื่อสลับแล้ว! รูปปฏิเสธให้แยก not ไว้หลังประธานเสมอ: Should you not... / Were it not for... / Had we not...',
      ],
      vocab: [
        ['clarification', 'การอธิบายให้ชัดเจนขึ้น', '/ˌklær.ə.fɪˈkeɪ.ʃən/', 'seek further clarification', 'ขอคำอธิบายเพิ่มเติม'],
        ['postpone', 'เลื่อนออกไป', '/pəʊstˈpəʊn/', 'postpone the launch', 'เลื่อนการเปิดตัวออกไป'],
        ['foresight', 'วิสัยทัศน์ / การมองการณ์ไกล', '/ˈfɔː.saɪt/', 'have the foresight to', 'มีวิสัยทัศน์พอที่จะ...'],
        ['jeopardize', 'ทำให้ตกอยู่ในความเสี่ยง', '/ˈdʒep.ə.daɪz/', 'jeopardize the timeline', 'ทำให้กำหนดการเสี่ยงล่าช้า'],
        ['intervention', 'การเข้ามาช่วยแทรกแซง', '/ˌɪn.təˈven.ʃən/', 'timely intervention', 'การเข้าช่วยอย่างทันท่วงที'],
        ['repercussion', 'ผลกระทบที่ตามมาภายหลัง', '/ˌriː.pəˈkʌʃ.ən/', 'unintended repercussions', 'ผลพวงที่ไม่ได้ตั้งใจ'],
        ['allocate', 'จัดสรร (เวลา/งบ)', '/ˈæl.ə.keɪt/', 'allocate extra buffer time', 'จัดสรรเวลาเผื่อเพิ่มเติม'],
      ],
      examples: [
        ['Should you require further clarification before Friday, feel free to message me directly.', 'หากคุณต้องการคำอธิบายเพิ่มเติมก่อนวันศุกร์ สามารถทักมาหาฉันได้โดยตรงเลยนะ'],
        ['Were our clinic to extend evening hours, working parents could book visits far more easily.', 'หากคลินิกของเราขยายเวลาช่วงค่ำ ผู้ปกครองที่ทำงานประจำก็จะจองคิวได้ง่ายขึ้นมาก'],
        ['Had the team not spotted that billing error in time, it would have caused major repercussions.', 'หากทีมไม่สังเกตเห็นความผิดพลาดเรื่องบิลได้ทันเวลา มันคงก่อผลกระทบใหญ่ตามมาแล้ว'],
        ['Had it not been for our guide’s timely intervention, we would have missed the last boat back.', 'หากไม่ได้ความช่วยเหลือทันท่วงทีจากไกด์ของเรา พวกเราคงตกรือเที่ยวสุดท้ายไปแล้ว'],
      ],
      reading:
        'During quarterly project retrospectives, strong teams avoid pointing fingers and instead examine decisions calmly. Last week, our product team reviewed a mobile update that nearly missed its release window. Several bugs appeared two days before launch, yet our lead engineer kept the group focused on root causes rather than blame. Had we allocated an extra week for field testing early on, those glitches would never have reached the final stage. Still, the discussion was not only about looking backward. Were we to rebuild our release checklist today, we would pair designers and developers earlier in the sprint so small usability snags never pile up at the end. Just as importantly, had it not been for transparent communication with our client partners, trust might have eroded overnight. Before wrapping up, our coordinator sent a clear summary to every stakeholder: "Should any partner encounter unexpected behavior after updating, our support desk will prioritize a fix within two hours." Honest reflection turns setbacks into better systems.',
      listenQ: 'What would the team change if they rebuilt their release checklist today?',
      listenA: 'They would pair designers and developers earlier in the sprint so small usability snags do not pile up at the end.',
      dictation: 'Had it not been for early testing, the bug would have spread.',
      listenNote:
        'ฟังประโยค "Had we allocated..." และ "...would never have reached..." จะได้ยินเสียง "would have" ถูกลดเหลือเพียง /wʊd əv/ หรือ /wʊdə/ ในการพูดต่อเนื่อง',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคเงื่อนไขที่ใส่ If ซ้ำและย่อรูปปฏิเสธผิดจุด: "If hadn’t she reminded me, I would have forgotten the passport."',
          answer: 'Had she not reminded me, I would have forgotten the passport.',
          explanation: 'เมื่อสลับ Had มาหน้าประธานต้องตัด If ออก และรูปปฏิเสธต้องแยก not ไว้หลังประธาน (Had she not...)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดเขียนประโยคสมมติแบบสุภาพ (Type 2 Inverted Conditional) ได้ถูกต้อง?',
          answer: 'Were we to launch in September, we would need two more editors.',
          choices: [
            'Were we launch in September, we would need two more editors.',
            'Were we to launch in September, we would need two more editors.',
            'If were we to launch in September, we would need two more editors.',
            'Were we to launch in September, we will need two more editors.',
          ],
          explanation: 'โครงสร้างมาตรฐานคือ Were + Subject + to V1 และประโยคผลลัพธ์ใช้ would + V1',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำเปิดประโยคเงื่อนไขเชิงสุภาพ: _____ you happen to pass the pharmacy, could you pick up some bandages?',
          answer: 'Should',
          explanation: 'Should + S + V1 ใช้แทน If you happen to... เพื่อให้ฟังดูสุภาพและนุ่มนวล',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยขึ้นต้นด้วย Had: "หากฉันรู้มาก่อนว่ารถติดขนาดนี้ ฉันคงขึ้นรถไฟฟ้าไปแล้ว"',
          answer: 'Had I known earlier that traffic was this bad, I would have taken the train.',
          explanation: 'Conditional Type 3 Inverted: Had I known... I would have + V3',
        },
      ],
      writing:
        'เขียนอีเมลสั้นๆ หรือบันทึกทบทวนโปรเจกต์/บทเรียนในชีวิตจริง (5–6 ประโยค) โดยใช้ Inverted Conditionals ครบทั้ง 3 แบบ (Should..., Were...to..., และ Had...)',
      writingSample:
        'Thank you everyone for wrapping up the community fair smoothly despite yesterday’s afternoon rain. Had we not moved the craft tables under the pavilion at noon, half of our handmade posters would have been soaked. Looking ahead to next spring, I have one proposal for the committee. Were we to partner with two local cafés for advance ticket pickup, morning queues at the entrance would drop dramatically. Please review the attached budget notes by Wednesday. Should anyone need clarification on the supply costs, I am happy to jump on a brief call.',
      writingNote:
        'เช็ก 3 กฎทอง: ไม่มี If นำหน้า / มี to หลัง Were...S... / ไม่มีรูปย่อ Hadn’t หรือ Weren’t หน้าประธาน',
      speakingTopic: 'ทบทวนเหตุการณ์สำคัญในงานหรือชีวิตด้วย "ถ้าย้อนเวลากลับไปได้ + ข้อเสนอข้างหน้า" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'สะท้อนอดีตด้วย Had I known... / Had it not been for...',
        'เสนอไอเดียใหม่สำหรับอนาคตด้วย Were we to... และปิดท้ายอย่างสุภาพด้วย Should you need...',
      ],
    },
    {
      day: 228,
      title: 'The Mandative Subjunctive: เสนอแนะและกำหนดมาตรฐานด้วยโครงสร้างระดับมืออาชีพ',
      objective:
        'ใช้กริยารูปฐาน (Bare Infinitive Subjunctive) หลังคำแนะนำและความจำเป็น เช่น suggest that..., insist that..., It is essential that... ได้ถูกต้อง',
      explanation:
        'ลองดูประโยคนี้: `It is essential that every team member **be** informed.` หรือ `She suggested that he **review** the draft.` ทำไม `every team member` ถึงใช้ `be` (ไม่ใช่ `is`) และ `he` ถึงใช้ `review` (ไม่เติม `-s`)? นี่คือ **Mandative Subjunctive**! เราใช้เมื่อพูดถึง **"ข้อเสนอแนะ ความต้องการ หรือสิ่งที่จำเป็นต้องเกิดขึ้น"** หลังกริยาอย่าง **`suggest, recommend, insist, propose, demand, request`** หรือคุณศัพท์อย่าง **`essential, vital, imperative, crucial, advisable`** กฎมีข้อเดียวแต่ทรงพลังมาก: **`... that + Subject + (not) + Base Verb (V1 ไม่ผันตามประธาน ไม่เติม -s ไม่เปลี่ยนเป็น was/is)`** ระวังกับดักใหญ่ของคนไทย: หลัง `suggest` ห้ามใช้ `suggest someone to do` (❌) ให้ใช้ `suggest that someone do` หรือ `suggest doing` แทน!',
      sound: [
        'Clear Stress on Bare Verbs & Negative "Not + Base Verb"',
        'mandative /ˈmæn.də.tɪv/ · imperative /ɪmˈper.ə.tɪv/ · crucial /ˈkruː.ʃəl/ · protocol /ˈprəʊ.tə.kɒl/',
        'สังเกตว่าเมื่อตัด should ออก เสียงเน้นจะไปตกที่กริยาหลัก เช่น "suggested that he **STAY**" หรือ "insisted that the file **NOT** be shared"',
        'ฝึกพูดประโยคคู่เทียบให้ติดหู: "I suggest he check it" (ไม่ใช่ checks) / "It is vital she be ready" (ไม่ใช่ is)',
      ],
      l1: [
        'เติม -s หรือใช้ is/are/was หลัง that เช่น "❌ It is essential that he checks it." หรือพูดผิดโครงสร้างเป็น "❌ She suggested me to review it."',
        'ภาษาไทยแปล "แนะนำให้เขาทำ" ตรงตัวเลยเผลอใส่ pattern ของ ask/tell (someone to do) มาใช้กับ suggest/recommend/insist',
        'จำกฎเหล็ก 2 ชั้น: 1) suggest/recommend/insist ห้ามตามด้วย O + to V1 เด็ดขาด! 2) หลัง that ใช้ Base Verb ล้วน (be / review / not delay) เสมอแม้ประธานเป็น he/she/it',
      ],
      vocab: [
        ['imperative', 'จำเป็นอย่างยิ่งยวด', '/ɪmˈper.ə.tɪv/', 'it is imperative that', 'จำเป็นอย่างยิ่งยวดที่จะต้อง...'],
        ['protocol', 'ระเบียบปฏิบัติ / ขั้นตอนมาตรฐาน', '/ˈprəʊ.tə.kɒl/', 'follow safety protocol', 'ปฏิบัติตามขั้นตอนความปลอดภัย'],
        ['mandatory', 'บังคับ / ต้องทำตามกฎ', '/ˈmæn.də.tər.i/', 'become mandatory', 'กลายเป็นข้อบังคับ'],
        ['confidential', 'เป็นความลับ', '/ˌkɒn.fɪˈden.ʃəl/', 'keep records confidential', 'เก็บข้อมูลเป็นความลับ'],
        ['endorse', 'รับรอง / สนับสนุนอย่างเป็นทางการ', '/ɪnˈdɔːs/', 'endorse the proposal', 'ให้การรับรองข้อเสนอ'],
        ['advisable', 'ควรกระทำ / เหมาะสม', '/ədˈvaɪ.zə.bəl/', 'deem it advisable', 'เห็นสมควรว่าควรทำ'],
        ['rectify', 'แก้ไขให้ถูกต้อง', '/ˈrek.tɪ.faɪ/', 'rectify the discrepancy', 'แก้ไขความคลาดเคลื่อนให้ถูกต้อง'],
      ],
      examples: [
        ['It is imperative that every clinic volunteer be briefed on privacy rules before Monday.', 'จำเป็นอย่างยิ่งที่อาสาสมัครคลินิกทุกคนจะต้องได้รับฟังสรุปเรื่องกฎความเป็นส่วนตัวก่อนวันจันทร์'],
        ['Our legal advisor recommended that the company not sign the lease until the roof is repaired.', 'ที่ปรึกษากฎหมายของเราแนะนำว่าบริษัทไม่ควรเซ็นสัญญาเช่าจนกว่าหลังคาจะซ่อมเสร็จ'],
        ['The chef insisted that the broth simmer slowly rather than boil at high heat.', 'เชฟยืนกรานให้เคี่ยวน้ำซุปด้วยไฟอ่อนๆ แทนที่จะต้มด้วยไฟแรง'],
        ['Is it really necessary that a guest present a paper copy at reception?', 'จำเป็นจริงๆ หรือที่แขกต้องยื่นสำเนากระดาษที่เคาน์เตอร์ต้อนรับ?'],
      ],
      reading:
        'Clear standards protect small organizations when they grow quickly. When our neighborhood library launched an evening co-study program, the founding committee drafted simple guidelines so everyone felt safe and respected. First, they decided it was vital that every volunteer be trained on basic emergency exits before hosting a late shift. Second, the coordinator suggested that guests keep phone calls inside the courtyard rather than near quiet reading tables. When a vendor asked to store large boxes near the stairwell, the fire warden insisted that the hallway remain completely clear at all times. Even small administrative habits benefited from direct language. Our treasurer recommended that each expense receipt be photographed on the same day so nothing got lost in backpacks. None of these rules sounded cold or bureaucratic when explained with warmth; instead, they showed respect for everyone’s shared time. When it is crucial that people act consistently, crisp and unambiguous expectations prevent small misunderstandings before they turn into frustration.',
      listenQ: 'Where did the library coordinator suggest guests take their phone calls?',
      listenA: 'Inside the courtyard rather than near quiet reading tables.',
      dictation: 'It is essential that every team member be informed early.',
      listenNote:
        'ในเสียงอ่าน "that every volunteer be trained" คำว่า that จะถูกลดเสียงเป็น /ðət/ เร็วและเบา เพื่อส่งน้ำหนักไปที่คำว่า vital และ be trained',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ใช้โครงสร้าง suggest ผิดแบบคนไทย: "My mentor suggested me to practice aloud every morning and insisted that the recording is short."',
          answer: 'My mentor suggested that I practice aloud every morning and insisted that the recording be short.',
          explanation: 'suggest ไม่ใช้ O + to V1 (ใช้ that I practice) และหลัง insisted that ใช้ Subjunctive คือ be (ไม่ใช่ is)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Mandative Subjunctive (รวมถึงรูปปฏิเสธ) ได้ถูกต้องสมบูรณ์?',
          answer: 'The safety officer recommended that staff not enter the lab without goggles.',
          choices: [
            'The safety officer recommended staff not to enter the lab without goggles.',
            'The safety officer recommended that staff do not enters the lab without goggles.',
            'The safety officer recommended that staff not enter the lab without goggles.',
            'The safety officer recommended that staff did not enter the lab without goggles.',
          ],
          explanation: 'รูปปฏิเสธของ Subjunctive วาง not หน้า V1 โดยตรงโดยไม่ต้องใช้ do/did: that staff not enter',
        },
        {
          kind: 'gap',
          prompt: 'เติมรูปกริยาที่ถูกต้องของ submit: The committee requested that each applicant _____ a two-minute voice note by Friday.',
          answer: 'submit',
          explanation: 'หลัง requested that + ประธานเอกพจน์ (each applicant) ใช้ Base Verb (submit) ไม่เติม -s',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยใช้ It is essential that: "จำเป็นอย่างยิ่งที่ข้อมูลผู้ป่วยทุกคนจะต้องถูกเก็บเป็นความลับ"',
          answer: 'It is essential that every patient record be kept confidential.',
          explanation: 'ใช้ Subjunctive Passive: be + V3 (be kept confidential) ไม่ใช่ is kept',
        },
      ],
      writing:
        'เขียนข้อตกลงหรือคำแนะนำสำหรับทีม งานอาสา หรือกฎการอยู่ร่วมกันในบ้าน/ออฟฟิศ (5–6 ประโยค) โดยใช้โครงสร้าง Mandative Subjunctive อย่างน้อย 3 ประโยค (รวมรูปปฏิเสธหรือ passive `be + V3` อย่างน้อย 1 ข้อ)',
      writingSample:
        'As we prepare for next month’s design sprint in Bangkok, we want everyone to enjoy a smooth and focused week. First, it is essential that every participant be added to the shared calendar before Friday noon. Second, the facilitators suggest that each team test rough sketches with real users rather than polishing slides too early. We also recommend that laptops stay closed during morning feedback circles so everyone listens actively. Finally, it is imperative that client prototypes not be shared on public social media without written consent.',
      writingNote:
        'ตรวจเช็กกริยาหลัง that ทุกตัว: เป็น V1 ล้วนไหม (ไม่มี -s, ไม่มี is/are, ไม่มี do/don’t และ Passive ใช้ be + V3)?',
      speakingTopic: 'วางกฎทอง 4 ข้อสำหรับทริปเดินทางกับเพื่อนหรือการทำงานร่วมกัน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้กรอบ: It is vital that... / I suggest that everyone... / We insist that... not...',
        'อธิบายเหตุผลสั้นๆ หลังแต่ละกฎเพื่อให้ฟังดูมีเหตุผลและเป็นมิตร ไม่แข็งกระด้าง',
      ],
    },
    {
      day: 229,
      title: 'Advanced Precision: เชื่อมความคิดให้เฉียบคมด้วย whereby, nonetheless, notwithstanding, insofar as',
      objective:
        'ใช้คำเชื่อมระดับสูง (whereby, nonetheless, notwithstanding, in light of, insofar as) อย่างแม่นยำตามความหมายและตำแหน่งไวยากรณ์จริง',
      explanation:
        'คนเรียนระดับสูงมักอยากใช้คำเชื่อมหรูๆ แต่พลาดเรื่อง "ตำแหน่งและหน้าที่ของคำ": 1) **`whereby`** = "โดยวิธีที่ / ซึ่งทำให้เกิดระบบที่..." (ใช้ขยายระบบ กฎ หรือข้อตกลง เช่น `a policy **whereby** employees choose flexible hours` — ไม่ใช่แค่แทน where เฉยๆ!) 2) **`in light of`** (+ Noun/Noun Phrase) = "เมื่อพิจารณาจากข้อมูลใหม่นี้" เช่น `In light of recent feedback...` 3) **`notwithstanding`** (+ Noun) = "ทั้งๆ ที่มี / แม้จะ..." (ทางการกว่า *despite*) 4) **`nonetheless`** = "ถึงกระนั้นก็ตาม" (ใช้คั่นเชื่อมความขัดแย้งอย่างสุภาพ) 5) **`insofar as`** = "ในแง่ที่ว่า / ตราบเท่าที่..." (จำกัดขอบเขตให้แม่นยำ เช่น `The app helps **insofar as** learners actually speak aloud.`)',
      sound: [
        'Chunking Long Formal Connectors with Micro-Pauses',
        'whereby /weəˈbaɪ/ · nonetheless /ˌnʌn.ðəˈles/ · notwithstanding /ˌnɒt.wɪθˈstæn.dɪŋ/ · insofar as /ˌɪn.səʊˈfɑːr æz/',
        'คำว่า "In light of recent feedback," ต้องเว้นจังหวะสั้นๆ หลังก้อนคำเปิด และลดเสียง "of" เป็น /əv/ เชื่อม smooth',
        'อ่านก้อนคำ 5 ตัวนี้ด้วยจังหวะคงที่: in-LIGHT-of | non-the-LESS | WHERE-by | in-so-FAR-as | not-with-STAND-ing',
      ],
      l1: [
        'ใช้ "whereby" ปะปนกับ "where" เช่น "❌ The café whereby we met..." หรือตามหลัง "in light of" ด้วยประโยคเต็มตรงๆ โดยไม่มี "the fact that"',
        'แปลตรงคำภาษาไทยว่า "ในแง่ที่ / โดยที่" โดยไม่ได้ดูว่าคำไหนเป็น Conjunction (ตามด้วยประโยค) และคำไหนเป็น Preposition (ตามด้วยคำนาม)',
        'แยกกลุ่มให้ขาด: Preposition (+ Noun) = in light of, notwithstanding | Relative/Conjunction (+ Clause) = whereby, insofar as | Adverb = nonetheless',
      ],
      vocab: [
        ['whereby', 'ซึ่งโดยวิธีนั้น / โดยระบบที่...', '/weəˈbaɪ/', 'a system whereby members vote', 'ระบบที่สมาชิกใช้สิทธิโหวต'],
        ['nonetheless', 'ถึงกระนั้นก็ตาม', '/ˌnʌn.ðəˈles/', 'demanding yet rewarding nonetheless', 'ท้าทายแต่ถึงกระนั้นก็คุ้มค่า'],
        ['notwithstanding', 'ทั้งๆ ที่มี / แม้จะมี', '/ˌnɒt.wɪθˈstæn.dɪŋ/', 'notwithstanding early delays', 'แม้จะมีความล่าช้าในช่วงแรก'],
        ['in light of', 'เมื่อพิจารณาจาก...', '/ɪn laɪt əv/', 'in light of recent feedback', 'เมื่อพิจารณาจากฟีดแบ็กที่ผ่านมา'],
        ['insofar as', 'ในแง่ที่ว่า / เท่าที่...', '/ˌɪn.səʊˈfɑːr æz/', 'useful insofar as it saves time', 'มีประโยชน์ในแง่ที่ช่วยประหยัดเวลา'],
        ['pilot program', 'โครงการนำร่อง', '/ˈpaɪ.lət ˈprəʊ.ɡræm/', 'launch a pilot program', 'เริ่มโครงการนำร่อง'],
        ['transparent', 'โปร่งใส / ชัดเจนตรวจสอบได้', '/trænsˈpær.ənt/', 'remain transparent about', 'ยังคงความโปร่งใสเกี่ยวกับ'],
      ],
      examples: [
        ['In light of recent user surveys, we simplified the onboarding screen from six steps to two.', 'เมื่อพิจารณาจากผลสำรวจผู้ใช้ล่าสุด เราจึงย่อหน้าเริ่มต้นจากหกขั้นตอนเหลือสองขั้นตอน'],
        ['The co-op introduced an exchange program whereby neighbors share power tools instead of buying new ones.', 'สหกรณ์ชุมชนเริ่มโครงการแลกเปลี่ยนที่ให้เพื่อนบ้านยืมเครื่องมือช่างกันแทนการซื้อใหม่'],
        ['Our outdoor concert faced light drizzle; nonetheless, nearly every seat stayed full until the encore.', 'คอนเสิร์ตกลางแจ้งของเราเจอฝนปรอยๆ แต่ถึงกระนั้นเกือบทุกที่นั่งก็ยังเต็มจนถึงเพลงแถม'],
        ['Remote work boosts autonomy insofar as teams agree on clear weekly milestones.', 'การทำงานทางไกลช่วยเพิ่มอิสระได้ก็ต่อเมื่อทีมตกลงเป้าหมายรายสัปดาห์กันชัดเจน'],
      ],
      reading:
        'Last spring, a mid-sized Thai architecture studio tested a four-day studio schedule for three months. The proposal began in light of growing burnout among junior designers who spent two hours daily in Bangkok traffic. Management designed a transparent pilot program whereby staff worked extended hours Tuesday through Friday, leaving Mondays for deep personal focus or rest. Notwithstanding initial skepticism from two senior partners who worried client deadlines might slip, early results surprised everyone. Missed morning check-ins fell sharply, and sketch reviews became noticeably sharper. The transition required careful boundaries, nonetheless. Project leads noticed that shorter weeks worked smoothly only insofar as teams protected deep-work blocks and avoided scheduling unnecessary status calls. By August, client satisfaction remained steady while staff turnover dropped to zero. Rather than claiming one schedule fits every industry, the founders published an honest summary showing both the trade-offs and the conditions under which flexible work genuinely thrives.',
      listenQ: 'Under what condition did the shorter workweek run smoothly according to project leads?',
      listenA: 'Only insofar as teams protected deep-work blocks and avoided unnecessary status calls.',
      dictation: 'In light of recent feedback, we designed a simpler system.',
      listenNote:
        'สังเกตการเว้นลมหายใจ (Thought Groups) ในประโยคยาวระดับ C1: "Notwithstanding initial skepticism / from two senior partners / ... early results surprised everyone."',
      drills: [
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้คำว่า whereby ได้ถูกต้องตามบริบทและไวยากรณ์?',
          answer: 'The clinic created a referral system whereby patients receive test results within twenty-four hours.',
          choices: [
            'Chiang Mai is the quiet city whereby I bought my favorite ceramic mug.',
            'The clinic created a referral system whereby patients receive test results within twenty-four hours.',
            'We canceled the picnic whereby it rained heavily all Sunday morning.',
            'She arrived early whereby everyone was still setting up the stage.',
          ],
          explanation: 'whereby ใช้อธิบาย "กระบวนการ ระบบ แผน หรือข้อตกลง" ที่ทำให้สิ่งหนึ่งเกิดขึ้น (ไม่ใช่สถานที่หรือเหตุผลทั่วไป)',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ใช้ in light of ผิดรูปไวยากรณ์: "In light of the ferry was canceled early, we stayed an extra night on the island."',
          answer: 'In light of the early ferry cancellation, we stayed an extra night on the island.',
          explanation: 'in light of เป็นคำบุพบท (Preposition) ต้องตามด้วย Noun/Noun Phrase (the early ferry cancellation) ไม่ใช่ประโยคเต็ม',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำเชื่อมแสดงขอบเขตที่เหมาะสม: Daily flashcards help memory _____ learners review words in real sentences rather than isolated lists.',
          answer: 'insofar as',
          explanation: 'insofar as = ในแง่ที่ว่า / ตราบเท่าที่ (กำหนดเงื่อนไขขอบเขตของคำกล่าว)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยใช้ nonetheless: "การฝึกพูดคนเดียวช่วงแรกอาจรู้สึกแปลก ถึงกระนั้นมันก็สร้างความคล่องตัวได้เร็ว"',
          answer: 'Speaking aloud alone may feel strange at first; nonetheless, it builds fluency quickly.',
          explanation: 'ใช้ nonetheless หลังเครื่องหมาย ; (หรือขึ้นประโยคใหม่) เพื่อเชื่อมความขัดแย้งเชิงบวก',
        },
      ],
      writing:
        'เขียนย่อหน้าสรุปข้อเสนอหรือผลการทดลองเล็กๆ ในงาน/ชีวิตประจำวัน (5–6 ประโยค) โดยใช้คำเชื่อมอย่างน้อย 3 คำจากบทนี้ (in light of, whereby, nonetheless, notwithstanding, insofar as) ให้ถูกต้องตามชนิดของคำ',
      writingSample:
        'In light of rising electricity bills this summer, our shared studio introduced a simple afternoon energy habit. We set up a rotating routine whereby the last person leaving each zone switches off idle monitors and adjusts blinds before sunset. Notwithstanding a few forgetful days during week one, everyone adapted quickly once reminders sat beside the light switches. The room stayed cool enough without cranking the AC down to twenty degrees; nonetheless, we kept portable fans near sunny desks. The habit works well insofar as everyone treats shared space as thoughtfully as home.',
      writingNote:
        'เช็กหลัง in light of และ notwithstanding ว่าตามด้วยคำนามหรือ V-ing แล้วหรือยัง และหลัง whereby เป็นระบบ/ขั้นตอนที่ตามด้วยประโยคสมบูรณ์หรือไม่',
      speakingTopic: 'อธิบายนโยบายหรือระบบเล็กๆ ที่อยากให้เกิดขึ้นในที่ทำงานหรือชุมชน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เปิดเหตุผลด้วย In light of... แล้วอธิบายกลไกด้วย a system whereby...',
        'ระบุข้อจำกัดหรือมุมที่ต้องระวังด้วย notwithstanding หรือ insofar as ให้คำพูดดูรอบคอบและมีน้ำหนัก',
      ],
    },
    {
      day: 230,
      title: 'Elegance Without Over-Complicating: รู้จังหวะใช้ภาษาระดับสูง vs ภาษาเรียบง่ายที่จริงใจ',
      objective:
        'แยกแยะบริบทที่ควรใช้โครงสร้างระดับสูง (Inversion / Subjunctive / Formal Connectors) กับบริบทที่ความเรียบง่ายจริงใจสื่อสารได้ทรงพลังกว่า',
      explanation:
        'ความลับของระดับ C1 ที่ผู้เรียนจำนวนมากมองข้ามคือ **“เก่ง C1 ไม่ใช่การยัด Inversion และคำหรูลงในทุกประโยค”** หากคุณส่งข้อความหาเพื่อนร่วมงานว่า *"Should you be free for noodle soup, notwithstanding your workload, let us dine"* คุณไม่ได้ดูเก่ง แต่ดูเหมือนหุ่นยนต์! จุดแข็งของนักสื่อสารระดับ C1 คือ **Control of Register (การคุมโทนและจังหวะ)**: 1) **ใช้โครงสร้างสูงเมื่อต้องการ**: เปิดสุนทรพจน์ จบประเด็นสำคัญ เน้นอารมณ์ลึกซึ้ง หรือเขียนข้อตกลง/อีเมลสำคัญ 2) **ใช้ภาษาตรงไปตรงมาเมื่อต้องการ**: สร้างความไว้วางใจ พูดปลอบใจเพื่อน คุยงานเร่งด่วน หรือเล่าความจริงใจ เปรียบเทียบดู: ในย่อหน้าเดียวกัน คุณอาจปูเรื่องเรียบๆ 3 ประโยค แล้วค่อยวาง `Never have I...` เพียง 1 ประโยคตรงจุดพีค ประโยคนั้นจะเปล่งประกายทันที!',
      sound: [
        'Register Shifting: Warm Conversational Flow vs Deliberate Emphasis',
        'authenticity /ˌɔː.θenˈtɪs.ə.ti/ · pretentious /prɪˈten.ʃəs/ · concise /kənˈsaɪs/ · heartfelt /ˈhɑːt.felt/',
        'เปรียบเทียบน้ำเสียง: ประโยคสั้นจริงใจ ("Thanks for backing me up today.") พูดเร็วและอุ่น ส่วนประโยคเน้นน้ำหนัก ("Never have I felt more supported.") พูดช้าลงนิดและเว้นช่องไฟชัด',
        'ฝึกอ่านย่อหน้าสลับโทน: ปูเรื่องด้วยประโยคสั้นปกติ → วาง Inversion 1 จุดตรงหัวใจสำคัญ → กลับมาปิดอย่างอบอุ่น',
      ],
      l1: [
        'เข้าใจผิดว่า "ภาษาอังกฤษดี = ใช้คำยาวที่สุดและกลับประโยคทุกบรรทัด" จนข้อความดูแข็งกระด้างและอ่านยาก',
        'ในระบบการศึกษาเดิมมักให้คะแนนคำยากแยกจากบริบท เลยติดนิสัยใส่คำทางการในแชทหรือบทสนทนาทั่วไป',
        'ถามตัวเองก่อนพิมพ์หรือพูดเสมอ: "ประโยคนี้ต้องการความจริงใจฉับไว (Plain & Warm) หรือต้องการน้ำหนัก/ความเป็นทางการ (Elevated)?" แล้วเลือกใช้แบบเจาะจง 1–2 จุดต่อย่อหน้าพอ!',
      ],
      vocab: [
        ['overwhelm', 'ท่วมท้น / มากเกินไป', '/ˌəʊ.vəˈwelm/', 'overwhelm the reader', 'ทำให้ผู้อ่านรู้สึกหนักเกินไป'],
        ['authenticity', 'ความจริงใจ / ความเป็นธรรมชาติ', '/ˌɔː.θenˈtɪs.ə.ti/', 'speak with authenticity', 'พูดด้วยความจริงใจเป็นธรรมชาติ'],
        ['concise', 'กระชับได้ใจความ', '/kənˈsaɪs/', 'keep updates concise', 'ทำอัปเดตให้กระชับ'],
        ['reserve', 'เก็บสงวนไว้ใช้ (เฉพาะโอกาส)', '/rɪˈzɜːv/', 'reserve inversion for impact', 'สงวน Inversion ไว้สร้างแรงกระแทก'],
        ['convey', 'สื่อสาร / ถ่ายทอดความรู้สึก', '/kənˈveɪ/', 'convey genuine gratitude', 'ถ่ายทอดความขอบคุณอย่างจริงใจ'],
        ['pompous', 'โอ้อวด / ดูเสแสร้งเป็นทางการเกินเหตุ', '/ˈpɒm.pəs/', 'avoid sounding pompous', 'หลีกเลี่ยงการฟังดูโอ้อวด/แข็งทื่อ'],
        ['striking', 'โดดเด่นสะดุดตา/ใจ', '/ˈstraɪ.kɪŋ/', 'create a striking contrast', 'สร้างความเปรียบต่างที่โดดเด่น'],
      ],
      examples: [
        ['Reserving formal inversion for your key takeaway makes that single line truly striking.', 'การสงวน Inversion ไว้ใช้ตรงข้อคิดหลักจะทำให้บรรทัดนั้นโดดเด่นสะดุดใจจริงๆ'],
        ['When a teammate is stressed, plain warmth conveys far more care than stiff wording.', 'เวลาเพื่อนร่วมทีมเครียด คำพูดเรียบง่ายที่อบอุ่นสื่อความห่วงใยได้มากกว่าถ้อยคำแข็งๆ มาก'],
        ['Her speech worked because most sentences stayed concise while two pivotal moments used elevated syntax.', 'สุนทรพจน์ของเธอได้ผลเพราะประโยคส่วนใหญ่กระชับ โดยมีจุดสำคัญเพียงสองจุดที่ใช้โครงสร้างระดับสูง'],
        ['Good editors trim pretentious phrases so authenticity shines through every paragraph.', 'บรรณาธิการที่ดีจะตัดวลีที่ดูโอ้อวดออก เพื่อให้ความจริงใจฉายชัดในทุกย่อหน้า'],
      ],
      reading:
        'Imagine listening to a concert where every single note is played at maximum volume. Within three minutes, your ears grow tired because nothing stands out anymore. Advanced English syntax works the same way. Learners who first discover negative inversion or formal connectors sometimes feel tempted to pack them into every message. Yet overloading a casual update with words like "notwithstanding" or "whereby" can sound pompous and create distance between you and the listener. Skilled communicators rely on plain, concise English for ninety percent of a conversation because clarity builds trust quickly. Then, when a moment genuinely calls for emotion, precision, or authority, they bring in a single well-placed structure. Think of a founder thanking staff after a brutal month: she chats warmly about coffee runs and late nights, then pauses and says, "Never have I been prouder to build alongside this crew." That single inversion lands with unforgettable weight precisely because the surrounding language remained honest and human.',
      listenQ: 'Why does a single inverted sentence land with strong impact in a speech?',
      listenA: 'Because the surrounding language stays plain and concise, creating a contrast that makes the inverted line stand out.',
      dictation: 'Clarity builds trust while selective elegance creates lasting impact.',
      listenNote:
        'ฟังการหยุดพัก (Pause) ก่อนประโยคคำพูดของ founder ในบทอ่าน — ช่วงเว้นครึ่งวินาทีก่อน "Never have I..." คือเครื่องมือสำคัญของคนพูดเก่งระดับ C1',
      drills: [
        {
          kind: 'choice',
          prompt: 'คุณต้องการส่งข้อความสั้นๆ ขอบคุณเพื่อนร่วมงานที่ช่วยแก้งานดึก ข้อใดสื่อความจริงใจและเหมาะสมกับบริบทที่สุด?',
          answer: 'Hey Ploy, thanks so much for stepping in tonight—I owe you iced coffee tomorrow!',
          choices: [
            'Hey Ploy, notwithstanding the late hour, never have I felt such gratitude whereby you assisted me.',
            'Hey Ploy, thanks so much for stepping in tonight—I owe you iced coffee tomorrow!',
            'Ploy, it is imperative that you accept my heartfelt appreciation forthwith.',
            'Should you desire coffee tomorrow, had you not stayed, I would have perished.',
          ],
          explanation: 'การขอบคุณเพื่อนร่วมงานในแชทต้องการความอบอุ่น เป็นธรรมชาติ ไม่ควรยัด Inversion หรือคำทางการเกินเหตุ',
        },
        {
          kind: 'choice',
          prompt: 'ประโยคใดในคำกล่าวปิดโปรเจกต์ที่ใช้ "ความเรียบง่าย + Inversion เฉพาะจุด" ได้ลงตัวที่สุด?',
          answer: 'We hit plenty of bumps this quarter, and many nights ran late. Yet rarely have I seen a team recover with such good humor.',
          choices: [
            'Notwithstanding our bumpy quarter, whereby late nights ensued, rarely have I seen recovery nonetheless.',
            'We hit plenty of bumps this quarter, and many nights ran late. Yet rarely have I seen a team recover with such good humor.',
            'Had we hit bumps, should we stay late, it is vital that humor be maintained.',
            'No sooner did we hit bumps than late nights ran, whereby rarely did we complain.',
          ],
          explanation: 'ประโยคแรกปูความจริงอย่างเรียบง่าย แล้วจึงวาง Rarely have I seen... ในประโยคปิดเพื่อสร้างแรงกระแทกทางอารมณ์',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำศัพท์ที่ถูกต้อง: Overusing complex connectors in casual chats can accidentally make your message sound _____.',
          answer: 'pompous',
          explanation: 'pompous = ดูวางท่า/โอ้อวดเกินความจำเป็นเมื่อใช้ภาษาทางการผิดบริบท',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษให้สั้น กระชับ และเป็นธรรมชาติ (ไม่ต้องใช้ Inversion): "ขอบคุณมากนะที่ช่วยสละเวลามาฟังฉันบ่นวันนี้"',
          answer: 'Thanks so much for taking the time to listen to me vent today.',
          explanation: 'ใช้ภาษาสนทนาที่อบอุ่นและเป็นธรรมชาติ: taking the time to listen to me vent',
        },
      ],
      writing:
        'ลองเขียนข้อความ 2 เวอร์ชันในหัวข้อเดียวกัน (การชวนเพื่อน/ทีมฉลองหลังปิดงานยาก): เวอร์ชัน A = แชทสั้นอบอุ่นเป็นกันเอง (2–3 ประโยค) และ เวอร์ชัน B = คำกล่าวเปิดโต๊ะอาหาร/อีเมลขอบคุณทีมแบบวาง Inversion พอดีๆ 1 จุด (4–5 ประโยค)',
      writingSample:
        'Version A (Team Chat): We survived launch week! Thank you all for staying calm today—grabbing celebratory mango sticky rice for the office tomorrow morning.\n\nVersion B (Team Toast): Over the past six weeks, our small crew solved more surprises than we ever put on the calendar. There were late evenings when the prototype refused to cooperate, and moments when everyone needed extra patience. Yet never have I worked with people who kept lifting each other up so steadily. Let us raise a glass to a job honestly and thoughtfully done.',
      writingNote:
        'สังเกตความต่าง: เวอร์ชัน A สั้น กระชับ ใช้ phrasal verb และน้ำเสียงเป็นกันเอง ส่วนเวอร์ชัน B ปูเรื่องอย่างจริงใจก่อนปล่อย Inversion แค่ 1 ประโยคที่ทรงพลัง',
      speakingTopic: 'ซ้อมพูดสลับโทน: เล่าเรื่องเดิม 2 แบบ (คุยกับเพื่อนสนิท vs กล่าวขอบคุณบนเวที) (4 / 3 / 2 นาที)',
      speakingBullets: [
        'รอบแรกพูดแบบธรรมชาติ อบอุ่น สั้นกระชับ เหมือนเล่าให้เพื่อนฟังในร้านกาแฟ',
        'รอบที่ 2–3 ปรับเป็นคำกล่าวปิดงานโดยคงความจริงใจไว้ 80% และใส่ Inversion / Conditional Inversion แค่ 1–2 จุดตรงไคลแมกซ์',
      ],
    },
    {
      day: 231,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 33 — High-Level Syntax Precision + Dictogloss',
      objective:
        'สังเคราะห์ไวยากรณ์ระดับสูงตลอดสัปดาห์ 33 (Negative Inversion, Hardly/No sooner/Only after, Inverted Conditionals, Subjunctive และ Formal Connectors) พร้อมฝึก Dictogloss เต็มรูปแบบ',
      explanation:
        'ยินดีด้วยครับที่จบสัปดาห์แรกของ **Phase 5 (High-B2 → C1)** แล้ว! ตลอด 6 วันที่ผ่านมา คุณไม่ได้แค่ท่องสูตรไวยากรณ์ยากๆ แต่ได้ฝึก **"เหตุผลทางความรู้สึกและจังหวะของการเลือกใช้"** วันนี้เรามาทบทวนทั้ง 5 แกนหลักรวมกัน: 1) **Negative Inversion** (*Never have I / Rarely do / Not only did... but also*) 2) **Two-Event & Delayed Inversion** (*Hardly... when / No sooner... than / Only after... did*) 3) **Inverted Conditionals** (*Should you... / Were we to... / Had it not been for...*) 4) **Mandative Subjunctive** (*essential that every member be... / recommended that he not sign*) 5) **Precision & Register** (ใช้ *whereby, nonetheless, in light of* อย่างถูกหน้าที่และไม่แข็งทื่อ)',
      sound: [
        'Week 33 Prosody Audit: Stress, Thought Groups & Micro-Pauses',
        'notwithstanding /ˌnɒt.wɪθˈstæn.dɪŋ/ · imperative /ɪmˈper.ə.tɪv/ · hindsight /ˈhaɪnd.saɪt/ · resilience /rɪˈzɪl.i.əns/',
        'Shadowing บทอ่านทบทวน 3 รอบ โดยเน้นเว้นช่วงหายใจหลังตัวเชื่อมเปิดประโยค และกดน้ำหนักเสียงเฉพาะจุดเน้นของ Inversion',
        'เช็กการออกเสียงคำช่วยลดรูป: had I /ˈhæd.aɪ/, would have /ˈwʊd.əv/, in light of /ɪn laɪt əv/',
      ],
      l1: [
        'เมื่อต้องนำโครงสร้าง C1 หลายแบบมาใช้ในงานเขียนหรือพูดชิ้นเดียวกัน มักเผลอหลุดผิดคู่คำเชื่อมหรือผันกริยาหลัง Subjunctive กลับไปเป็นรูปปกติ',
        'เวลาสมองโฟกัสเนื้อหา มักดึงความเคยชินเก่า (เช่น If + Had / suggest someone to do) กลับมาแทรก',
        'ใช้เช็กลิสต์ 3 วินาทีก่อนส่ง/พูด: (1) หน้าประโยคปฏิเสธ → สลับคำช่วยหรือยัง? (2) หลัง suggest/vital that → กริยาไม่ผันใช่ไหม? (3) ใช้คำหรูพอดีกับบริบทหรือยัง?',
      ],
      vocab: [
        ['culminate', 'บรรลุผลสูงสุด / จบลงด้วย...', '/ˈkʌl.mɪ.neɪt/', 'culminate in a smooth launch', 'ลงเอยด้วยการเปิดตัวอย่างราบรื่น'],
        ['pivotal', 'สำคัญยิ่งยวด / เป็นจุดเปลี่ยน', '/ˈpɪv.ə.təl/', 'play a pivotal role', 'มีบทบาทสำคัญยิ่ง'],
        ['reconcile', 'ประสานความเข้าใจ / ปรับให้ลงตัว', '/ˈrek.ən.saɪl/', 'reconcile two viewpoints', 'ประสานมุมมองสองฝั่งให้ลงตัว'],
        ['meticulous', 'พิถีพิถัน ละเอียดรอบคอบ', '/məˈtɪk.jə.ləs/', 'meticulous preparation', 'การเตรียมตัวอย่างพิถีพิถัน'],
        ['contingency', 'แผนสำรองเผื่อฉุกเฉิน', '/kənˈtɪn.dʒən.si/', 'prepare a contingency plan', 'เตรียมแผนสำรองไว้'],
        ['steadfast', 'แน่วแน่ มั่นคง', '/ˈsted.fɑːst/', 'remain steadfast', 'ยังคงแน่วแน่ไม่หวั่นไหว'],
        ['calibrate', 'ปรับจูนให้พอเหมาะ', '/ˈkæl.ɪ.breɪt/', 'calibrate your tone', 'ปรับจูนโทนเสียง/ภาษาให้พอเหมาะ'],
      ],
      examples: [
        ['Not only did meticulous preparation reduce stress, but it also freed room for creativity.', 'การเตรียมตัวอย่างพิถีพิถันไม่เพียงช่วยลดความเครียด แต่ยังเปิดพื้นที่ให้ความสร้างสรรค์ด้วย'],
        ['Were our team to skip a contingency plan today, tomorrow’s field event could face delays.', 'หากทีมของเราข้ามการทำแผนสำรองวันนี้ งานภาคสนามพรุ่งนี้อาจเจอความล่าช้าได้'],
        ['It is crucial that the coordinator reconcile both viewpoints before the afternoon briefing.', 'จำเป็นอย่างยิ่งที่ผู้ประสานงานต้องประสานมุมมองทั้งสองฝั่งให้ลงตัวก่อนการประชุมสั้นช่วงบ่าย'],
        ['Calibrating your tone matters as much as mastering advanced grammar.', 'การปรับจูนโทนภาษาให้พอเหมาะสำคัญไม่แพ้การเชี่ยวชาญไวยากรณ์ระดับสูงเลย'],
      ],
      reading:
        'In light of everything our community clinic learned during last year’s flood response, the directors rebuilt their neighborhood readiness plan from scratch. Previously, volunteers waited for phone trees that often jammed during heavy storms. Under the new framework, they established a digital check-in whereby block captains report street conditions within fifteen minutes. Had it not been for meticulous preparation by retired nurses in the district, several elderly residents might have been overlooked during the October rains. No sooner had the first warning sounded than neighborhood runners delivered dry battery packs and drinking water. Furthermore, the board insisted that every team lead verify medical supply boxes monthly rather than once a season. Not only did the updated system cut response times in half, but it also built deeper trust among neighbors who rarely spoke before. Nonetheless, the organizers keep their messages warm and straightforward during drills. Only after practicing under calm conditions did everyone realize how steadfast planning protects ordinary kindness when emergencies strike.',
      listenQ: 'How often did the board insist that team leads verify medical supply boxes?',
      listenA: 'Monthly rather than once a season.',
      dictation: 'No sooner had the warning sounded than volunteers delivered supplies.',
      listenNote:
        'รอบแรกฟังจับภาพรวมโดยไม่อ่านสคริปต์ รอบสองจดคำสำคัญเช่น In light of / whereby / Had it not been / No sooner / insisted that / Not only / Only after แล้วลองเรียบเรียงเล่าซ้ำ',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังประโยคสรุปจากบทอ่านแล้วเลือกตัวเลือกที่ประกอบไวยากรณ์และก้อนคำได้ตรงกับที่ได้ยินมากที่สุด:',
          answer: 'Only after practicing under calm conditions did everyone realize how steadfast planning protects ordinary kindness.',
          choices: [
            'Only after did everyone practice under calm conditions they realized how steadfast planning protects ordinary kindness.',
            'Only after practicing under calm conditions did everyone realize how steadfast planning protects ordinary kindness.',
            'No sooner did everyone practice under calm conditions when steadfast planning protected ordinary kindness.',
            'Only after practicing under calm conditions everyone realized how steadfast planning protect ordinary kindness.',
          ],
          explanation:
            'ตามบทอ่านเป๊ะ: Only after + V-ing (ไม่สลับส่วนหน้า) แล้วจึงสลับ did everyone realize ในประโยคหลัก',
          audio_text:
            'Only after practicing under calm conditions did everyone realize how steadfast planning protects ordinary kindness.',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้จุดผิด 2 จุดในประโยคเดียว: "Hadn’t the coordinator suggested us to test the mic early, the livestream would fail."',
          answer: 'Had the coordinator not suggested that we test the mic early, the livestream would have failed.',
          explanation:
            '1) Had + S + not (ไม่ย่อ Hadn’t หน้าประธาน) 2) suggest that + S + V1 (ไม่ใช้ suggest us to) และ Type 3 คู่ would have failed',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Mandative Subjunctive และ Inverted Conditional ได้ถูกต้องทั้งประโยค?',
          answer: 'Were a storm to block the bridge, it is vital that drivers remain inside their vehicles until crews arrive.',
          choices: [
            'Were a storm block the bridge, it is vital that drivers remains inside their vehicles until crews arrive.',
            'If were a storm to block the bridge, it is vital that drivers be remained inside their vehicles.',
            'Were a storm to block the bridge, it is vital that drivers remain inside their vehicles until crews arrive.',
            'Should a storm to block the bridge, it is vital that drivers remaining inside their vehicles.',
          ],
          explanation: 'Were + S + to V1 (Were a storm to block...) และ vital that + S + V1 ล้วน (drivers remain)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำเชื่อมที่เหมาะสม: The volunteers created a shared map _____ local drivers could locate open shelters quickly.',
          answer: 'whereby',
          explanation: 'whereby ใช้อธิบายกลไก/ระบบ (shared map) ที่ช่วยให้เกิดผลลัพธ์',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษโดยใช้ Never: "ฉันไม่เคยเห็นการเตรียมตัวอย่างพิถีพิถันที่สร้างความมั่นใจให้ทีมได้มากขนาดนี้มาก่อน"',
          answer: 'Never have I seen meticulous preparation build so much confidence for a team.',
          explanation: 'Never + have I seen + [Noun] + V1 (หรือ build such confidence)',
        },
      ],
      writing:
        'เขียนเรียงความสั้น 1 ย่อหน้า (7–8 ประโยค) สรุปบทเรียนสำคัญที่คุณได้เรียนรู้จากการทำงานเป็นทีมหรือรับมือเหตุไม่คาดคิด โดยบูรณาการโครงสร้างสัปดาห์นี้ 4 อย่าง: 1) Negative Inversion 2) Conditional Inversion (Had/Were) 3) Mandative Subjunctive 4) Formal Connector 1 ตัวอย่างเป็นธรรมชาติ',
      writingSample:
        'Last year, our small neighborhood café faced a sudden three-week street renovation that blocked foot traffic right in front of our entrance. In light of dropping walk-in sales, we had to rethink how we served regular customers quickly. Had we waited passively for the road crews to finish, we would have lost half our monthly revenue. Instead, our team launched an afternoon pre-order system whereby office workers picked up chilled drinks at a side alley. It was essential that every staff member double-check order labels before noon so pickups took less than thirty seconds. Not only did the experiment keep us afloat, but it also introduced us to nearby studios we had never met before. Never have I felt prouder of how calm creativity solves tough weeks.',
      writingNote:
        'ตรวจความสมดุล: 7 ประโยคมีโครงสร้างปกติผสมโครงสร้างระดับสูงอย่างลงตัว อ่านแล้วลื่นไหล ไม่รู้สึกยัดเยียด',
      speakingTopic: 'Review Speech: เล่าเรื่องจริง 1 เรื่องที่ใช้ครบ 3 พลังภาษา (เน้นอารมณ์ + เงื่อนไข + ข้อเสนอแนะ) (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ปูเรื่องปกติสั้นๆ แล้วกดเน้นจุดพีคด้วย Never / Not only / Only after',
        'วิเคราะห์ทางเลือกด้วย Had we... หรือ Were we to... แล้วปิดข้อเสนอแนะด้วย It is essential that...',
        'ตรวจหลังอัดเสียง: ไม่พูดรัวจนกลืนคำช่วย (have/did/be) และเว้นช่วงหายใจก่อนประโยคสำคัญ',
      ],
    },
  ]
);
