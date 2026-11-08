import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 4: สื่อสารคล่องตัว เลือกโทนภาษา และฟังความเร็วเจ้าของภาษา';

export const WEEK29: ModuleSeed = createModule(
  {
    week: 29,
    phase: 4,
    phase_title: PHASE_TITLE,
    cefr_level: 'B2',
    title: 'Emphasis, Cleft Sentences & การเน้นจุดสำคัญในการสื่อสาร',
    summary:
      'เน้นคำและประเด็นที่ต้องการให้ผู้ฟังโฟกัสโดยไม่ขึ้นเสียงผิดธรรมชาติด้วย It-cleft, What-cleft และ Fronting พร้อม Emphatic do/did',
    focus: 'It-clefts, What-clefts, Emphatic do/did, Rhetorical Fronting',
  },
  [
    {
      day: 197,
      title: 'What-Cleft Sentences — ปูจุดสนใจก่อนเฉลยประเด็นหลัก',
      objective:
        'ใช้โครงสร้าง What + S + V + is/was... เพื่อดึงความสนใจผู้ฟังไปที่สาระสำคัญที่สุดโดยไม่ต้องขึ้นเสียงตะโกน',
      explanation:
        'เวลาพูดภาษาไทยแล้วอยากเน้น เรามักพูดคำสำคัญซ้ำหรือใส่น้ำเสียงหนักๆ ท้ายประโยค แต่ในภาษาอังกฤษระดับ B2 เจ้าของภาษามักใช้ **What-Cleft (Pseudo-cleft)** เพื่อ "สร้างกรอบความอยากรู้" ก่อนเฉลยคำตอบ เช่น แทนที่จะพูดเรียบๆ ว่า *"Consistency matters most."* ให้ผ่าประโยคเป็น **`What matters most is consistency.`** (สิ่งที่สำคัญที่สุดก็คือความสม่ำเสมอ) โครงสร้างหลักคือ **`What + (S) + V + is/was + สิ่งที่ต้องการเน้น`** (จะตามด้วยคำนาม, `to + V1`, `V-ing`, หรือ `that-clause` ก็ได้) เช่น **`What surprised us was his calm reaction.`** และในภาษาพูดประจำวันยังนิยมใช้กับการเล่าเหตุการณ์อย่าง **`What happened was (that)...`** หรือ **`What I need is a quiet hour to think.`** ข้อควรระวังสำคัญ: หลังกลุ่มคำ `What...` ต้องมี **`is` หรือ `was`** เสมอ ห้ามตัดทิ้งเหมือนภาษาไทยเด็ดขาด!',
      sound: [
        'Cleft Pitch Framing & Pause before is/was',
        'consistency /kənˈsɪs.tən.si/ · reaction /riˈæk.ʃən/ · bottleneck /ˈbɒt.əl.nek/',
        'แบ่งจังหวะ 2 ช่วงชัด: "What MATTERS most | is conSIS­tency." ลดเสียง `was` เป็น `/wəz/` (เวอะซ) เบาๆ แล้วลงน้ำหนักหนักแน่นตรงคำเฉลยด้านหลัง',
        'ฝึกพูด 3 ประโยคโดยหยุดหายใจครึ่งจังหวะก่อนคำว่า is/was: What matters most | is consistency. / What surprised us | was his reaction.',
      ],
      l1: [
        'ตัด Verb to be ออกตามโครงสร้างไทย เช่น "What I want only clear feedback." หรือใช้ "The thing what I want..."',
        'ภาษาไทยพูดว่า "สิ่งที่ฉันอยากได้ [หยุด] คำตอบที่ชัดเจน" ได้โดยไม่ต้องมีกริยา "คือ" คั่นตลอดเวลา แต่ภาษาอังกฤษประโยคหน้า What-clause เป็นประธาน จึงขาด Main Verb (is/was) ไม่ได้',
        'ท่องสูตรติดปาก: What-clause = ประธาน 1 ก้อน → ตามด้วย is/was ทันทีเสมอ และห้ามใช้ what ต่อท้าย the thing (ใช้ the thing that หรือ what เดี่ยวๆ)',
      ],
      vocab: [
        [
          'consistency',
          'ความสม่ำเสมอ',
          '/kənˈsɪs.tən.si/',
          'build consistency over time',
          'สร้างความสม่ำเสมอเมื่อเวลาผ่านไป',
        ],
        [
          'overlook',
          'มองข้าม',
          '/ˌəʊ.vəˈlʊk/',
          'overlook a crucial detail',
          'มองข้ามรายละเอียดสำคัญ',
        ],
        [
          'friction',
          'แรงเสียดทาน / จุดติดขัด',
          '/ˈfrɪk.ʃən/',
          'remove daily friction',
          'ลดจุดติดขัดในชีวิตประจำวัน',
        ],
        [
          'turnaround',
          'จุดพลิกผัน',
          '/ˈtɜːn.ə.raʊnd/',
          'spark a turnaround',
          'จุดประกายการพลิกฟื้นสถานการณ์',
        ],
        [
          'insight',
          'ความเข้าใจเชิงลึก',
          '/ˈɪn.saɪt/',
          'gain a fresh insight',
          'ได้มุมมองเชิงลึกใหม่',
        ],
        [
          'humbling',
          'ที่ทำให้ถ่อมตัว / เตือนสติ',
          '/ˈhʌm.blɪŋ/',
          'a humbling reminder',
          'เครื่องเตือนใจที่ทำให้เรานอบน้อม',
        ],
        [
          'adopt',
          'รับมาใช้ / ปรับใช้',
          '/əˈdɒpt/',
          'adopt a simpler workflow',
          'นำขั้นตอนที่ง่ายกว่ามาใช้',
        ],
      ],
      examples: [
        [
          'What matters most in long-term projects is steady consistency.',
          'สิ่งที่สำคัญที่สุดในโปรเจกต์ระยะยาวคือความสม่ำเสมอที่มั่นคง',
        ],
        [
          'What surprised the entire team was his calm reaction.',
          'สิ่งที่ทำให้ทีมทั้งหมดประหลาดใจคือปฏิกิริยาที่นิ่งสงบของเขา',
        ],
        [
          'What we really need right now is a realistic timeline, not more meetings.',
          'สิ่งที่เราต้องการจริงๆ ตอนนี้คือกรอบเวลาที่เป็นไปได้ ไม่ใช่การประชุมเพิ่ม',
        ],
        [
          'What happened was that the delivery driver took the wrong exit in the rain.',
          'สิ่งที่เกิดขึ้นก็คือคนขับรถส่งของเลี้ยวออกผิดทางตอนฝนตก',
          'ใช้ What happened was (that)... เพื่ออธิบายต้นตอของเหตุการณ์อย่างเป็นธรรมชาติ',
        ],
      ],
      reading:
        'When our small design team launched a neighborhood food-rescue app in Bangkok last year, we initially obsessed over sleek animations and dark mode. What we overlooked was how hectic street-food stalls actually get around closing time. Vendors simply did not have spare hands to tap through five confirmation screens while packing leftover soup. What turned the project around was spending three rainy evenings observing two market stalls in Ari. What vendors needed most was a one-tap voice tag that took under four seconds. Once we rebuilt the interface around that single insight, daily listings tripled within a month. What surprised us even more was who championed the app first: older stall owners in their sixties, who hated wasting unsold curry at midnight. What makes a digital tool stick in daily life is rarely technical complexity; rather, what matters most is removing friction from a routine people already care about. Looking back, what I appreciate most about that rocky launch is the humbling reminder that real clarity comes from watching real users in the street, not debating polished mockups inside a quiet, air-conditioned meeting room.',
      listenQ: 'What did the Ari market vendors actually need most from the app?',
      listenA: 'They needed a one-tap voice tag that took under four seconds.',
      dictation: 'What matters most is removing friction from a routine.',
      listenNote:
        'สังเกตการเว้นจังหวะเล็กน้อยหลัง What-clause ก่อนออกเสียง is/was เพื่อย้ำใจความสำคัญด้านหลังให้เด่นชัด',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยค What-cleft ที่ลืมกริยาหลักและใช้คำเชื่อมผิดรูป: "What the clients really want clear pricing, not another long slide deck."',
          answer:
            'What the clients really want is clear pricing, not another long slide deck.',
          explanation:
            'ก้อน "What the clients really want" ทำหน้าที่เป็นประธานเอกพจน์ จึงต้องตามด้วยกริยาหลัก "is" ก่อนส่วนขยาย "clear pricing"',
        },
        {
          kind: 'choice',
          prompt:
            'คุณอยากเล่าให้หัวหน้าฟังว่าสิ่งที่ทำให้โปรเจกต์ล่าช้าไม่ใช่ความขี้เกียจ แต่เป็นการอนุมัติที่ช้า ข้อใดใช้ What-cleft ได้ถูกต้องและเป็นธรรมชาติที่สุด?',
          answer:
            'What delayed the launch was slow vendor approval, not a lack of effort.',
          choices: [
            'What delayed the launch slow vendor approval, not a lack of effort.',
            'What delayed the launch was slow vendor approval, not a lack of effort.',
            'The thing what delayed the launch is slow vendor approval.',
            'What was delayed the launch is slow vendor approval.',
          ],
          explanation:
            'เหตุการณ์ในอดีต (delayed) ต้องจับคู่กับ was และไม่ใส่ what หลัง the thing',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้โครงสร้างสมบูรณ์ (1 คำ): _____ surprised everyone at the town hall was how openly the founder admitted her mistake.',
          answer: 'What',
          explanation:
            'ใช้ What นำหน้าประโยคเพื่อเน้นสิ่งที่ไม่คาดคิด (สิ่งที่ทำให้ทุกคนประหลาดใจคือ...)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยใช้ What-cleft: "สิ่งที่ฉันซาบซึ้งมากที่สุดคือความซื่อสัตย์ของคุณ"',
          answer: 'What I appreciate most is your honesty.',
          explanation:
            'วางกรอบความสำคัญด้วย "What I appreciate most" แล้วตามด้วย "is your honesty"',
        },
      ],
      writing:
        'เขียนย่อหน้า 4–5 ประโยคสะท้อนบทเรียนจากการทำงานหรือการเรียนรู้ที่ผ่านมา โดยใช้ What-cleft อย่างน้อย 3 รูปแบบ (เช่น What I realized..., What surprised me..., What matters most...)',
      writingSample:
        'When I first started cooking at home, I bought expensive pans and complicated spice jars. What I quickly realized was that fancy gear never replaces basic knife control. What helped me improve most was preparing the same three stir-fry dishes every week until my timing felt automatic. Now, what matters most to me is fresh ingredients and clean prep, not how crowded my kitchen shelf looks.',
      writingNote:
        'เช็กว่าทุก What-clause ของคุณมี is หรือ was คั่นก่อนเฉลยเสมอ และตรวจ Tense ให้สอดคล้องกันทั้งประโยค (อดีตคู่ was / ปัจจุบันหรือความจริงทั่วไปคู่ is)',
      speakingTopic:
        'เล่าบทเรียนพลิกมุมมองในชีวิตหรือการทำงาน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เปิดเรื่องด้วยความคาดหวังเดิม แล้วหักมุมด้วย What surprised me most was...',
        'สรุปหัวใจสำคัญด้วย What matters most is... โดยเว้นจังหวะหยุดสั้นๆ ก่อนคำว่า is/was',
        'ใช้คำศัพท์อย่าง overlooked, friction, insight หรือ consistency ให้คล่องปากในรอบที่ 2 และ 3',
      ],
    },
    {
      day: 198,
      title: 'It-Cleft Sentences — ชี้เป้าเฉพาะจุดและแก้ความเข้าใจผิดให้คม',
      objective:
        'ใช้ It is/was + [จุดโฟกัส] + that/who... เพื่อชี้ชัดตัวบุคคล เวลา สาเหตุ หรือแก้ไขความเข้าใจผิดด้วยโครงสร้าง It is not X—it is Y',
      explanation:
        'ถ้า `What-cleft` เหมือนการสร้างกรอบรอเฉลย **`It-cleft`** ก็เหมือน **"ไฟสปอตไลต์"** ที่ส่องตรงไปยังคำหรือวลีหนึ่งเดียวในประโยค! โครงสร้างคือ **`It is/was + [สิ่งที่เน้น] + that/who + [ส่วนที่เหลือ]`** เช่น จากประโยคเรียบๆ *"The slow checkout flow caused drop-offs."* เราส่องไฟไปที่ต้นตอได้ทันทีว่า **`It was the slow checkout flow that caused drop-offs.`** จุดแข็งระดับ B2 ของ `It-cleft` คือใช้ **หักล้างสมมติฐานผิดๆ อย่างสุภาพแต่เด็ดขาด**: **`It’s not just cost—it’s timing.`** หรือ **`It wasn’t the team’s skill that held us back; it was the unclear brief.`** ข้อต้องจำแม่น: แม้จุดที่เน้นจะเป็นคำบอกเวลา (yesterday) หรือสถานที่ (in Chiang Mai) ตัวเชื่อมหลักที่มาตรฐานและปลอดภัยที่สุดคือ **`that`** (ส่วนคนใช้ `who` หรือ `that` ได้ แต่อย่าใช้ `when/where/which` มั่วใน `It-cleft`!)',
      sound: [
        'Spotlight Stress on Focused Noun & Weak "that" /ðət/',
        'discourage /dɪˈskʌr.ɪdʒ/ · bottleneck /ˈbɒt.əl.nek/ · abandon /əˈbæn.dən/',
        'ออกเสียง "It was" เบาและเร็ว (/ɪt wəz/) แล้วยก Pitch ขึ้นสูงบนคำเป้าหมาย จากนั้นปล่อย `that` เป็นเสียงลดรูป `/ðət/` เช่น "It was the CHECKout flow ðət caused DROP-offs."',
        'ซ้อมสลับโฟกัสในประโยคเดียว 3 แบบ: It was MAY who called. / It was YESTERDAY that May called. / It was THE CLIENT that May called.',
      ],
      l1: [
        'ใช้คำเชื่อมตามความหมายไทย เช่น "It was last Friday when we met." หรือ "It was the traffic which made me late."',
        'คนไทยเห็นคำว่าเวลาเลยคว้า when และเห็นคำว่าสิ่งของเลยคว้า which มาใส่ใน It-cleft ทั้งที่เจ้าของภาษานิยมใช้ that กับเวลา/สถานที่/สิ่งของใน It-cleft',
        'จำกฎเหล็ก: ใน It-cleft ถ้าเน้นคนใช้ who หรือ that แต่ถ้าเน้นสิ่งของ เวลา เหตุผล หรือสถานที่ ให้ใช้ that เสมอ (ห้ามใช้ when/where หลัง It is/was...)',
      ],
      vocab: [
        [
          'bottleneck',
          'คอขวด / จุดติดขัดหลัก',
          '/ˈbɒt.əl.nek/',
          'spot the real bottleneck',
          'มองเห็นจุดติดขัดที่แท้จริง',
        ],
        [
          'drop-off',
          'การลดลง / การเลิกใช้กลางคัน',
          '/ˈdrɒp.ɒf/',
          'reduce checkout drop-offs',
          'ลดการหลุดกลางคันตอนชำระเงิน',
        ],
        [
          'discourage',
          'ทำให้ท้อ / ทำให้ไม่อยากทำต่อ',
          '/dɪˈskʌr.ɪdʒ/',
          'discourage potential buyers',
          'ทำให้ผู้ซื้อที่สนใจถอดใจ',
        ],
        [
          'abandon',
          'ละทิ้ง / ทิ้งไว้กลางคัน',
          '/əˈbæn.dən/',
          'abandon a shopping cart',
          'ทิ้งตะกร้าสินค้าไว้ไม่กดจ่าย',
        ],
        [
          'bounce back',
          'ฟื้นตัวกลับมาอย่างรวดเร็ว',
          '/baʊns bæk/',
          'bounce back quickly',
          'ฟื้นตัวกลับมาอย่างรวดเร็ว',
        ],
        [
          'margin',
          'ส่วนต่างกำไร / ขอบเขต',
          '/ˈmɑː.dʒɪn/',
          'protect profit margins',
          'รักษากำไรต่อหน่วยไว้',
        ],
        [
          'spike',
          'พุ่งสูงขึ้นฉับพลัน',
          '/spaɪk/',
          'spike on Sunday mornings',
          'พุ่งสูงขึ้นในเช้าวันอาทิตย์',
        ],
      ],
      examples: [
        [
          'It was the slow checkout flow that caused most weekend drop-offs.',
          'ขั้นตอนชำระเงินที่ช้านั่นแหละที่เป็นสาเหตุให้คนหลุดกลางคันมากที่สุดช่วงสุดสัปดาห์',
        ],
        [
          'It was not the price that discouraged buyers; it was the unclear delivery window.',
          'ไม่ใช่ราคาหรอกที่ทำให้คนซื้อถอดใจ แต่มันคือช่วงเวลาจัดส่งที่ไม่ชัดเจนต่างหาก',
        ],
        [
          'It is only when you test under real traffic that hidden bugs appear.',
          'ตอนที่ทดสอบภายใต้การใช้งานจริงเท่านั้นแหละที่บั๊กซ่อนอยู่จะโผล่ออกมา',
        ],
        [
          'It was Maya who spotted the bottleneck before our Monday launch.',
          'มายาต่างหากที่เป็นคนสังเกตเห็นจุดคอขวดก่อนวันเปิดตัววันจันทร์',
          'ใช้ who หรือ that เมื่อจุดที่ต้องการส่องสปอตไลต์เป็นตัวบุคคล',
        ],
      ],
      reading:
        'Last month, an artisan bakery in Chiang Mai noticed a puzzling drop in weekend pre-orders. At first, the owner assumed nearby cafés had undercut her prices, so she considered discounting her signature croissants. Before cutting her thin margins, however, she asked a friend in digital operations to inspect the website analytics. Within ten minutes, the real bottleneck became crystal clear. It was not the price of the pastries that discouraged buyers; rather, it was the slow mobile checkout flow that caused most drop-offs. Shoppers had to re-enter their street address three times whenever a voucher code failed, and it was that tiny friction that made nearly half of them abandon their carts. Even more telling, it was specifically on Sunday mornings—when parents ordered quickly between errands—that the error rate spiked. Once a developer trimmed the form down to two clean screens, orders bounced back within forty-eight hours. Often in business and in daily communication, it is not the loudest complaint that tells the whole story; it is the quiet obstacle hidden inside an everyday habit that slowly pushes people away.',
      listenQ: 'When did the checkout error rate spike most noticeably?',
      listenA: 'It spiked specifically on Sunday mornings when parents ordered quickly between errands.',
      dictation: 'It is not just cost; it is timing.',
      listenNote:
        'สังเกตคู่ประโยคหักล้างความเข้าใจผิด "It was not X that...; it was Y that..." ซึ่งมักยกระดับเสียงบนคำที่เป็น Y เพื่อแก้ความเข้าใจของอีกฝ่าย',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยค It-cleft ที่ใช้ตัวเชื่อมผิดประเภทและสับสนโครงสร้าง 2 จุด: "It was last Tuesday when the client called, and it wasn’t budget which blocked the deal."',
          answer:
            'It was last Tuesday that the client called, and it was not the budget that blocked the deal.',
          explanation:
            'ใน It-cleft สำหรับเวลาและสิ่งของ ให้ใช้ that (ไม่ใช้ when หรือ which) และใส่ the หน้า budget เมื่อชี้เฉพาะงบของดีลนี้',
        },
        {
          kind: 'choice',
          prompt:
            'เพื่อนร่วมทีมคิดว่าลูกค้าไม่พอใจเพราะสีของแพ็กเกจ แต่จริงๆ แล้วเป็นเพราะการตอบแชทช้า ข้อใดแก้ความเข้าใจผิดด้วย It-cleft ได้เฉียบคมที่สุด?',
          answer:
            "It wasn't the packaging color that upset customers; it was our slow reply time.",
          choices: [
            "It wasn't the packaging color where upset customers; it was our slow reply time.",
            "It wasn't the packaging color that upset customers; it was our slow reply time.",
            'The packaging color it did not upset customers, slow reply time did.',
            'What upset customers was not packaging color, it was when we replied slowly.',
          ],
          explanation:
            'ใช้คู่ contrastive It-cleft: It wasn’t X that...; it was Y เพื่อปฏิเสธข้อสันนิษฐานเดิมและส่องไฟไปที่สาเหตุจริง',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมให้ถูกหลัก It-cleft (1 คำ): It was only after the second workshop _____ the junior designers felt confident enough to pitch.',
          answer: 'that',
          explanation:
            'หลังวลีบอกเวลาในโครงสร้าง It was only after... ใช้ that เสมอ (ห้ามใช้ when)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยใช้ It-cleft: "ไม่ใช่เรื่องค่าใช้จ่ายหรอก แต่เป็นเรื่องจังหวะเวลาต่างหาก"',
          answer: "It's not about the cost; it's the timing that matters.",
          explanation:
            'ใช้โครงสร้างส่องประเด็นเปรียบเทียบ It’s not...; it’s [จุดเน้น] เพื่อหันความสนใจผู้ฟังทันที',
        },
      ],
      writing:
        'เขียนวิเคราะห์ปัญหาที่เคยเกิดขึ้นจริง 1 เรื่อง (เช่น รถติด, งานล่าช้า, ขายของไม่ออก, หรืออ่านหนังสือไม่รู้เรื่อง) ความยาว 5 ประโยค โดยใช้ It-cleft แบบหักล้างความเชื่อเดิม (It wasn’t X that...; it was Y that...) อย่างน้อย 2 ประโยค',
      writingSample:
        'For months, I struggled to wake up for morning runs and blamed my weak willpower. Then I tracked my evening routine for two weeks. It wasn’t laziness that kept me under the blanket; it was scrolling through news feeds past midnight that drained my energy. It was only when I left my phone charging in the kitchen that my sleep bounced back. Looking at the change, it’s small environmental habits—not dramatic motivation—that keep us steady.',
      writingNote:
        'ตรวจตัวเชื่อมหลังจุดเน้นทุกตัว: คนใช้ who/that ส่วนเวลา สถานที่ และสาเหตุใช้ that ห้ามหลุดเป็น when หรือ where',
      speakingTopic:
        'อธิบายสาเหตุที่แท้จริงของปัญหาใกล้ตัวด้วย It-cleft Contrast (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เปิดด้วยสิ่งที่คนส่วนใหญ่เข้าใจผิด (Most people assume...) แล้วหักด้วย It is not...; it is... that...',
        'เน้นเสียงสูงชัดบนคำเป้าหมายหลัง It is/was และปล่อย that เบาๆ เป็น /ðət/',
        'ปิดท้ายด้วยข้อเสนอแนะเชิงปฏิบัติ 1 ข้อ',
      ],
    },
    {
      day: 199,
      title: 'All-Cleft & Reason/Place Clefts — เน้นขีดจำกัด เหตุผล และจุดเปลี่ยน',
      objective:
        'ใช้ All I wanted was..., The reason I asked is that..., และ The place/moment where... เพื่ออธิบายเจตนาและความเชื่อมโยงอย่างสุภาพและตรงประเด็น',
      explanation:
        'นอกจาก `What` และ `It` แล้วยังมีตระกูล Cleft ที่ชาวต่างชาติใช้สื่อสารความต้องการและเหตุผลแทบทุกวันในชีวิตจริงและการทำงาน: 1) **`All (that) + S + V + is/was...`** แปลว่า *"ทั้งหมดที่...ก็แค่..."* ใช้ลดความตึงเครียดหรือเน้นขอบเขตที่เรียบง่าย เช่น **`All I wanted was a bit of clarity.`** (สิ่งที่ผมต้องการก็แค่ความชัดเจนเท่านั้นเอง) 2) **`The reason (why) + S + V + is (that)...`** เช่น **`The reason I asked is that the budget shifted.`** (ข้อห้ามสำคัญระดับ B2: อย่าเขียน/พูดซ้ำว่า *The reason... is **because*** ให้ใช้ **`is that...`**!) 3) **`The place where... / The moment when... / The way that...`** เพื่อเล่าจุดพลิกผันอย่างเห็นภาพ เช่น **`The moment it clicked was when we drew the timeline on paper.`**',
      sound: [
        'Smooth Linking in "All I wanted" & "The reason I"',
        'clarity /ˈklær.ə.ti/ · hesitate /ˈhez.ɪ.teɪt/ · redundancy /rɪˈdʌn.dən.si/',
        'เชื่อมเสียงลื่นไหล: `All I wanted` → `/ɔːl aɪ ˈwɒn.tɪd/` (ออล-ไล-ว้อน-ทิด) · `is that` → `/ɪz ðæt/` · ออกเสียง `clarity` เน้นพยางค์แรก `/ˈklær.ə.ti/` (แคล-เรอะ-ที)',
        'ฝึกพูด 3 ประโยคเชื่อมเสียงไม่สะดุด: All I wanted was clarity. / The reason I checked is that specs changed. / The moment it clicked was Friday.',
      ],
      l1: [
        'พูดหรือเขียนซ้ำซ้อนว่า "The reason why I asked is because the plan changed." หรือใช้กริยาพหูพจน์ผิดกับ All I want ("All I want are two cups of coffee.")',
        'ภาษาไทยแปล "เหตุผลคือเพราะ..." ได้อย่างเป็นธรรมชาติ แต่ในภาษาอังกฤษ reason กับ because ซ้ำความหมายกัน และ All I want แปลว่า "สิ่งเดียวทั้งหมดที่ฉันต้องการ" จึงมักถือเป็นเอกพจน์เมื่อเน้นก้อนความต้องการเดียว',
        'เปลี่ยน "is because" หลัง The reason... เป็น "is that..." ทุกครั้งในงานเขียนและพูดทางการ ส่วน "All + S + V" เมื่อตามด้วย 1 สิ่งหรือวลีเดียว ให้ใช้ is/was เสมอ',
      ],
      vocab: [
        [
          'clarity',
          'ความชัดเจน',
          '/ˈklær.ə.ti/',
          'ask for clarity',
          'ขอความชัดเจน',
        ],
        [
          'hesitate',
          'ลังเล',
          '/ˈhez.ɪ.teɪt/',
          'hesitate before replying',
          'ลังเลก่อนตอบกลับ',
        ],
        [
          'misread',
          'ตีความผิด / อ่านพลาด',
          '/ˌmɪsˈriːd/',
          'misread the tone',
          'ตีความน้ำเสียงผิดไป',
        ],
        [
          'defensive',
          'ตั้งการ์ด / ปกป้องตัวเองเกินไป',
          '/dɪˈfen.sɪv/',
          'sound slightly defensive',
          'ฟังดูเหมือนกำลังตั้งรับป้องกันตัว',
        ],
        [
          'click',
          'เข้าใจทะลุปรุโปร่ง / ลงตัว',
          '/klɪk/',
          'the moment it clicked',
          'จังหวะที่ทุกอย่างลงตัวพอดี',
        ],
        [
          'reassurance',
          'ความอุ่นใจ / คำยืนยันให้สบายใจ',
          '/ˌriː.əˈʃʊə.rəns/',
          'offer calm reassurance',
          'ให้ความมั่นใจอย่างใจเย็น',
        ],
        [
          'expectation',
          'ความคาดหวัง',
          '/ˌek.spekˈteɪ.ʃən/',
          'align expectations early',
          'ปรับความคาดหวังให้ตรงกันตั้งแต่เนิ่นๆ',
        ],
      ],
      examples: [
        [
          'All I wanted was basic clarity before sending the invoice.',
          'ทั้งหมดที่ฉันต้องการก็แค่ความชัดเจนพื้นฐานก่อนส่งใบแจ้งหนี้เท่านั้นเอง',
        ],
        [
          'The reason I asked is that the schedule keeps shifting.',
          'เหตุผลที่ฉันถามก็เพราะว่าตารางงานเปลี่ยนไปเรื่อยๆ',
        ],
        [
          'The place where everything finally clicked was a quiet corner café near the station.',
          'สถานที่ที่ทุกอย่างลงตัวในที่สุดก็คือร้านกาแฟมุมสงบใกล้สถานี',
        ],
        [
          'All you need to do now is confirm the guest count by noon.',
          'ทั้งหมดที่คุณต้องทำตอนนี้ก็แค่ยืนยันจำนวนแขกก่อนเที่ยง',
          'หลัง All you need to do is สามารถตามด้วย V1 เพียวๆ (ไม่ต้องมี to) ได้เลย',
        ],
      ],
      reading:
        'After a tense Thursday call, two colleagues, Pim and Nathan, stayed online for five extra minutes to clear the air. Nathan sounded slightly defensive at first because he thought Pim was questioning his design speed. Pim quickly offered calm reassurance. "All I wanted was clarity on the final handoff date," she explained gently. "The reason I asked twice is that our print partner needs forty-eight hours to test the paper colors." Once Nathan heard the full picture, his shoulders dropped. He admitted he had misread her quick chat messages earlier that morning. The moment where everything truly clicked was when they sketched a shared two-week calendar on screen together. Suddenly, the confusion vanished. All they needed was five minutes of honest context to align expectations before Friday. Walking away from the call, Pim noted how often workplace tension grows out of silence rather than disagreement. The way you frame a hard question—calmly stating your reason first instead of sounding accusing—often determines whether a teammate shuts down or leans in to help.',
      listenQ: 'Why did Pim ask twice about the final handoff date?',
      listenA: 'Because their print partner needed forty-eight hours to test the paper colors.',
      dictation: 'The reason I asked is that the deadline shifted.',
      listenNote:
        'จับคู่คำว่า "All I wanted was..." และ "The reason I asked is that..." ซึ่งช่วยลดน้ำเสียงตำหนิและทำให้ผู้ฟังเปิดใจรับฟังเหตุผลของเรา',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่มีความซ้ำซ้อนและผันกริยาผิด 2 จุด: "The reason why I hesitated was because nobody replied, and all I want are a quick update."',
          answer:
            'The reason I hesitated was that nobody replied, and all I want is a quick update.',
          explanation:
            '1) เปลี่ยน was because เป็น was that เพื่อตัดความซ้ำซ้อนระดับ B2 2) all I want หมายถึงสิ่งเดียวที่ต้องการ จึงใช้ is a quick update',
        },
        {
          kind: 'choice',
          prompt:
            'ถ้าเพื่อนร่วมงานเข้าใจผิดว่าคุณกำลังจับผิดเขา คุณอยากอธิบายอย่างใจเย็นว่า "สิ่งที่ฉันต้องการก็แค่ความชัดเจน" ข้อใดพูดได้สุภาพและถูกหลักที่สุด?',
          answer: 'All I wanted was a little clarity before we sent the file.',
          choices: [
            'All I wanted were a little clarity before we sent the file.',
            'All I wanted was a little clarity before we sent the file.',
            'The reason what I wanted was clarity before we sent the file.',
            'All what I wanted was clarity before sending the file.',
          ],
          explanation:
            'ใช้ All I wanted was + นามเอกพจน์/นับไม่ได้ (a little clarity) และห้ามใส่ what หลัง all เด็ดขาด',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อม 1 คำให้โครงสร้างสมบูรณ์ (แบบทางการ B2): The reason we postponed the workshop is _____ three speakers are still traveling.',
          answer: 'that',
          explanation:
            'โครงสร้างมาตรฐานคือ The reason + S + V + is that + Clause (หลีกเลี่ยง is because)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ทั้งหมดที่คุณต้องทำตอนนี้คือส่งข้อความยืนยันกลับมา"',
          answer: 'All you have to do now is send a confirmation message back.',
          explanation:
            'ใช้ All you have to do (now) is + V1 (send...) เพื่อชี้ขั้นตอนง่ายๆ เพียงข้อเดียว',
        },
      ],
      writing:
        'เขียนข้อความ Slack/อีเมลสั้นๆ 5–6 ประโยคเพื่อเคลียร์ความเข้าใจผิดกับเพื่อนร่วมทีมหรือลูกค้า โดยใช้ครบทั้ง All I wanted was..., The reason I asked is that..., และ The way... อย่างเป็นมิตร',
      writingSample:
        'Hi Ben, thanks for hopping on a quick call earlier! Just to make sure we are on the same page, all I wanted was a clear backup plan in case the courier arrives late tomorrow. The reason I brought it up early is that our venue closes its loading dock at five sharp. The way we split the tasks on the calendar works really well for me. Thanks again for aligning expectations so smoothly!',
      writingNote:
        'ตรวจดูว่าไม่มี "The reason... is because" และไม่มี "All what..." ปะปนอยู่ในร่างข้อความของคุณ',
      speakingTopic:
        'เล่าเหตุการณ์ที่เคยสื่อสารคลาดเคลื่อนแล้วคลี่คลายได้ด้วยดี (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าฉากเข้าใจผิดสั้นๆ แล้วอธิบายเจตนาจริงด้วย All I wanted was... และ The reason I... is that...',
        'เล่าจุดคลี่คลายด้วย The moment where it clicked was...',
        'คุมเสียงให้นุ่มนวลเป็นมิตรเหมือนการเปิดใจคุยกับเพื่อนร่วมงาน',
      ],
    },
    {
      day: 200,
      title: 'Emphatic do / does / did & Reflexive Emphasis — ย้ำความจริงอย่างหนักแน่น',
      objective:
        'ใช้ do/does/did ในประโยคบอกเล่าเพื่อโต้แย้งข้อสงสัย และใช้ Reflexive Pronouns (myself/herself/themselves) เพื่อเน้นตัวผู้กระทำอย่างเป็นธรรมชาติ',
      explanation:
        'ในภาษาอังกฤษทั่วไป เราไม่ใส่ `do/does/did` หน้ากริยาในประโยคบอกเล่า แต่ทันทีที่ต้องการ **"ยืนยันเพื่อลบล้างข้อสงสัย"** หรือ **"ย้ำให้ผู้ฟังเชื่อ"** เจ้าของภาษาจะดึง **`do / does / did + V1`** มาเน้นเสียงเต็มคำ! เช่น ถูกถามว่า *"Did you forget to attach the receipt?"* เราตอบกลับทันทีว่า **`I did attach it! Check the second email.`** (ฉันแนบไปแล้วจริงๆ!) หรือใช้เวลาชวน/ขอร้องอย่างจริงใจ: **`Do come in and grab a seat.`** / **`It does make a huge difference.`** ส่วนการเน้นตัวผู้กระทำ ใช้ **Intensive Reflexive Pronoun** (`myself, himself, herself, themselves`) วางหลังประธานหรือท้ายประโยค เช่น **`She herself led the whole workshop.`** (ตัวเธอเองเลยที่เป็นคนนำเวิร์กช็อป — ต่างจาก `by herself` ที่แปลว่า "ตามลำพัง/คนเดียว"!)',
      sound: [
        'Unreduced Strong Stress on do / does / did',
        'attach /əˈtætʃ/ · convince /kənˈvɪns/ · thoroughly /ˈθʌr.ə.li/',
        'จุดชี้ขาดความหมายอยู่ที่เสียงหนัก! ปกติ `do/did` อาจพูดเบา แต่ใน Emphatic form ต้องออกเสียงเต็มสระและหนักที่สุดในประโยค: "I DID double-check the file!" (/aɪ ˈdɪd.../) · "She herSELF designed it."',
        'ฝึกพูดโต้แย้ง 3 คู่: You didn’t check! → I DID check it! / It doesn’t help → It DOES help! / Nobody led it → She herSELF led it!',
      ],
      l1: [
        'ผันกริยาซ้ำหลัง did เช่น "I did checked the file already!" หรือใช้ "by herself" เมื่อตั้งใจสื่อว่า "ตัวเธอเองเป็นคนลงมือ (แม้มีทีมงานอยู่ด้วย)"',
        'คนไทยชินกับการผันอดีตที่คำกริยาหลัก เลยเผลอเติม -ed หลัง did และมักจำรวมกันว่า herself กับ by herself แปลเหมือนกัน',
        'จำ 2 กฎสั้นๆ: 1) หลัง do/does/did ต้องตามด้วย V1 ไม่ผัน (-ed/-s ห้ามโผล่!) 2) ลงมือเองกับตัวแม้มีคนอื่นอยู่ = She herself... / ทำคนเดียวไม่มีใครช่วย = by herself',
      ],
      vocab: [
        [
          'double-check',
          'ตรวจสอบซ้ำอีกครั้ง',
          '/ˌdʌb.əlˈtʃek/',
          'double-check the measurements',
          'ตรวจสอบขนาดซ้ำอีกครั้ง',
        ],
        [
          'verify',
          'ยืนยันความถูกต้อง',
          '/ˈver.ɪ.faɪ/',
          'verify every figure',
          'ตรวจสอบตัวเลขทุกตัวให้ชัวร์',
        ],
        [
          'genuinely',
          'อย่างแท้จริง / จริงใจ',
          '/ˈdʒen.ju.ɪn.li/',
          'genuinely care about details',
          'ใส่ใจรายละเอียดอย่างแท้จริง',
        ],
        [
          'step in',
          'ก้าวเข้ามาช่วยจัดการ',
          '/step ɪn/',
          'step in to help',
          'เข้ามาช่วยคลี่คลายสถานการณ์',
        ],
        [
          'skepticism',
          'ความกังขาสงสัย',
          '/ˈskep.tɪ.sɪ.zəm/',
          'overcome initial skepticism',
          'เอาชนะความกังขาในตอนแรก',
        ],
        [
          'back up',
          'สนับสนุน / สำรองข้อมูล',
          '/bæk ʌp/',
          'back up a claim with proof',
          'ยืนยันคำพูดด้วยหลักฐาน',
        ],
        [
          'ownership',
          'ความเป็นเจ้าของงาน / ความรับผิดชอบเต็มตัว',
          '/ˈəʊ.nə.ʃɪp/',
          'take full ownership',
          'รับผิดชอบงานนั้นอย่างเต็มตัว',
        ],
      ],
      examples: [
        [
          'I did double-check the file before uploading it to the shared folder!',
          'ฉันตรวจไฟล์ซ้ำแล้วจริงๆ ก่อนอัปโหลดลงโฟลเดอร์แชร์!',
        ],
        [
          'The museum director herself welcomed guests at the door.',
          'ผู้อำนวยการพิพิธภัณฑ์ลงมาต้อนรับแขกที่หน้าประตูด้วยตัวเองเลย',
        ],
        [
          'Even small adjustments do make a measurable difference over a month.',
          'แม้การปรับเล็กๆ น้อยๆ ก็สร้างความแตกต่างที่วัดผลได้จริงๆ เมื่อครบหนึ่งเดือน',
        ],
        [
          'Although he doubted our timeline at first, he did admit later that the pace felt fair.',
          'แม้ตอนแรกเขาจะกังขากรอบเวลาของเรา แต่ภายหลังเขาก็ยอมรับจริงๆ ว่าจังหวะงานลงตัวดี',
          'ใช้ did admit เพื่อย้ำว่าสุดท้ายอีกฝ่ายยอมรับจริงๆ แม้ตอนแรกไม่เชื่อ',
        ],
      ],
      reading:
        'During setup for a pop-up craft exhibition in Bangkok, a lighting glitch nearly delayed opening night. An external contractor insisted someone on the local crew had misread the voltage chart, leaving junior coordinator Ploy facing sharp skepticism. Calmly, Ploy opened her tablet to back up her work with timestamped photos. "I did double-check the specifications twice yesterday," she told the contractor firmly, "and I did email the updated diagram to your engineer at four." When the contractor inspected the cables himself, he discovered a faulty adapter inside his own crate. Rather than blaming anyone further, the exhibition director herself stepped in to coordinate a rapid swap with a nearby supplier. While the crew still ran behind schedule, that honest ownership did save the evening’s reception. Visitors walking in at seven never guessed how chaotic five o’clock had been. For Ploy, the night proved something lasting: when you genuinely verify every detail beforehand, you can stand your ground politely—and let your records speak.',
      listenQ: 'Who actually caused the lighting glitch according to the inspection?',
      listenA: 'The external contractor had a faulty adapter inside his own crate.',
      dictation: 'I did double-check the file before sending it.',
      listenNote:
        'ฟังเสียงเน้นตรง "did double-check", "did email", "himself" และ "herself" ซึ่งไม่ได้แปลว่าอยู่คนเดียว แต่แปลว่าลงมือด้วยตัวเองหรือทำจริงเพื่อยืนยัน',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ใช้ Emphatic did และ Reflexive ผิดความหมาย 2 จุด: "I promise I did sent the draft yesterday, and the client by himself approved it in front of the whole board."',
          answer:
            'I promise I did send the draft yesterday, and the client himself approved it in front of the whole board.',
          explanation:
            '1) หลัง did ใช้ V1 (send ไม่ใช่ sent) 2) ต่อหน้าบอร์ดทั้งคณะ ไม่ได้อยู่คนเดียว จึงต้องใช้ the client himself (ตัวลูกค้าเอง) ไม่ใช่ by himself',
        },
        {
          kind: 'choice',
          prompt:
            'เพื่อนพูดติดตลกว่าคุณไม่ได้ซ้อมพูดมาก่อนเลย ทั้งที่คุณซ้อมมา 3 รอบแล้ว คุณควรตอบโต้อย่างเป็นธรรมชาติว่าอย่างไร?',
          answer: 'Actually, I did practice three times before coming here!',
          choices: [
            'Actually, I did practiced three times before coming here!',
            'Actually, I do practiced three times before coming here!',
            'Actually, I did practice three times before coming here!',
            'Actually, I was did practice three times before coming here!',
          ],
          explanation:
            'ยืนยันอดีตที่ถูกสงสัยใช้ did + V1 (did practice) พร้อมเน้นเสียงที่คำว่า did',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเน้นย้ำที่ถูกต้อง (1 คำ): Even though fifteen minutes sounds short, a daily walk _____ lower stress levels noticeably.',
          answer: 'does',
          explanation:
            'ประธาน a daily walk เป็นเอกพจน์ในปัจจุบัน ใช้ does + V1 (lower) เพื่อเน้นย้ำว่า "ช่วยลดได้จริงๆ"',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยเน้นทั้งกริยาและตัวผู้กระทำ: "หัวหน้าเชฟลงมือปรุงซอสนี้ด้วยตัวเองเลย"',
          answer: 'The head chef herself prepared this sauce.',
          explanation:
            'วาง herself (หรือ himself) ติดกับ The head chef เพื่อเน้นว่าลงมือทำด้วยตัวเอง (ไม่ได้ฝากผู้ช่วยทำ)',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์ 5 ประโยคเมื่อคุณต้องยืนยันความถูกต้องของสิ่งที่ทำ หรือเล่าถึงคนสำคัญที่ลงมือทำบางอย่างด้วยตัวเอง (ใช้ Emphatic do/does/did อย่างน้อย 2 จุด และ Intensive Reflexive 1 จุด)',
      writingSample:
        'Last semester, our group nearly lost points because a classmate thought nobody had proofread the final bibliography. Fortunately, I had saved every edit log. I did verify all twelve citations the night before submission, and our team leader herself checked the formatting on campus. Even though tight deadlines feel stressful, good preparation does pay off when questions come up.',
      writingNote:
        'ตรวจหลัง do/does/did ทุกตัวว่าเป็น V1 รูปเดิมเสมอ ไม่เติม -s หรือ -ed และเช็กว่าใช้ himself/herself เฉยๆ (ไม่มี by) เมื่อต้องการเน้นตัวบุคคล',
      speakingTopic:
        'เล่าสถานการณ์ที่คุณต้องยืนยันสิ่งที่ทำไปแล้วอย่างสุภาพแต่มั่นคง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ออกเสียง DID / DOES / DO ให้เต็มเสียงสระเพื่อยืนยันข้อเท็จจริงโดยไม่ต้องโมโห',
        'ใช้ herself/himself/myself เพื่อเน้นผู้รับผิดชอบหลักในเหตุการณ์',
        'ฝึกพูดประโยค "I did double-check..." ให้ชัดและเป็นจังหวะธรรมชาติ',
      ],
    },
    {
      day: 201,
      title: 'Fronting & Topic Focus in Storytelling — สลับหัวประโยคสร้างอารมณ์เรื่อง',
      objective:
        'ใช้ Rhetorical Fronting (เช่น Exhausted though we felt..., Little did we know..., That issue we can handle...) เพื่อสร้างน้ำหนักและจังหวะดราม่าให้เรื่องเล่า',
      explanation:
        'เวลาเล่าเรื่องที่น่าตื่นเต้นหรือเปรียบเทียบความสำคัญในระดับ B2 แทนที่จะเรียง `Subject + Verb` แบบเรียบแบนทุกประโยค เราสามารถ **"ดึงคำสำคัญหรือคำคุณศัพท์มาวางหน้าสุด" (Fronting)** เพื่อปูอารมณ์ก่อนเฉลยผลลัพธ์ ดู 3 รูปแบบที่ใช้ได้จริงทันที: 1) **`[Adjective] + though/as + S + V`**: เช่น **`Exhausted though we felt, we pushed on until sunset.`** (= แม้เราจะเหนื่อยล้าแค่ไหน แต่เราก็เดินหน้าต่อ — คมกว่า *Although we felt exhausted...* เยอะ!) 2) **ดึงคำกริยา/กรรมมาวางหน้าเพื่อจับคู่เปรียบเทียบ**: **`The easy details we can polish later; the core message we must agree on today.`** 3) **ก้อนเปิดเรื่องแบบชวนลุ้น**: **`Little did we know (that)...`** (หารู้ไม่ว่า...) เช่น **`Little did we know the mountain road had already flooded.`**',
      sound: [
        'Contrastive Pause at Clause Boundary',
        'exhausted /ɪɡˈzɔː.stɪd/ · stranded /ˈstræn.dɪd/ · resourceful /rɪˈzɔːs.fəl/',
        'โครงสร้าง Fronting ต้องอาศัย "จังหวะหยุดสั้นๆ" คั่นกลาง! ยกเสียงขึ้นเล็กน้อยปลายท่อนหน้า (`ExHAUSTed though we felt, ↗ |`) แล้วกดเสียงลงอย่างมั่นคงในท่อนหลัง (`we PUSHED on. ↘`)',
        'ฝึกพูด 2 ท่อนโดยมีจังหวะพัก 0.5 วินาทีตรงจุลภาค: Exhausted though we felt, | we pushed on. / Little did we know, | the train had stopped.',
      ],
      l1: [
        'ย้ายกรรมมาขึ้นต้นประโยคแบบลอยๆ โดยไม่มีจุดเปรียบเทียบ หรือใช้ "Little we knew..." โดยลืมสลับ did ขึ้นหน้า (inversion)',
        'ภาษาไทยสลับกรรมขึ้นหน้าได้อิสระ ("เรื่องนั้น เดี๋ยวค่อยคุย") แต่ในภาษาอังกฤษถ้าสลับหน้าต้องมีท่อนเปรียบเทียบคู่กันหรือใช้โครงสร้างเชื่อมที่ชัดเจน',
        'เวลาใช้ Little did + ประธาน + V1 จำเป็นก้อนติดปากเลยว่าต้องมี did หลัง Little เสมอ และหลัง Adjective though + S + V ห้ามใส่ although ซ้ำ (ห้าม *Exhausted although...*)',
      ],
      vocab: [
        [
          'push on',
          'เดินหน้าต่อ (แม้ลำบาก)',
          '/pʊʃ ɒn/',
          'push on through the storm',
          'เดินหน้าฝ่าพายุต่อไป',
        ],
        [
          'stranded',
          'ติดค้าง / ไปต่อไม่ได้',
          '/ˈstræn.dɪd/',
          'left stranded at the station',
          'ติดค้างอยู่ที่สถานี',
        ],
        [
          'resourceful',
          'ช่างคิดแก้ปัญหา / ไหวพริบดี',
          '/rɪˈzɔːs.fəl/',
          'stay calm and resourceful',
          'นิ่งและรู้จักหาทางออก',
        ],
        [
          'downpour',
          'ฝนตกหนักฉับพลัน',
          '/ˈdaʊn.pɔːr/',
          'get caught in a sudden downpour',
          'เจอฝนเทลงมาอย่างกะทันหัน',
        ],
        [
          'hospitality',
          'น้ำใจการต้อนรับขับสู้',
          '/ˌhɒs.pɪˈtæl.ə.ti/',
          'warm local hospitality',
          'ไมตรีจิตการต้อนรับจากคนท้องถิ่น',
        ],
        [
          'improvise',
          'แก้ปัญหาเฉพาะหน้า',
          '/ˈɪm.prə.vaɪz/',
          'improvise a backup plan',
          'คิดแผนสำรองเฉพาะหน้า',
        ],
        [
          'unforgettable',
          'ลืมไม่ลง',
          '/ˌʌn.fəˈɡet.ə.bəl/',
          'an unforgettable detour',
          'การออกนอกเส้นทางที่ลืมไม่ลง',
        ],
      ],
      examples: [
        [
          'Exhausted though we felt, we pushed on toward the ridge before dark.',
          'แม้จะรู้สึกเหนื่อยล้าแค่ไหน พวกเราก็ยังกัดฟันเดินหน้าต่อสู่สันเขาก่อนฟ้ามืด',
        ],
        [
          'Little did we know that the last local bus had left twenty minutes earlier.',
          'พวกเราหารู้ไม่ว่ารถบัสท้องถิ่นเที่ยวสุดท้ายเพิ่งออกไปเมื่อยี่สิบนาทีก่อนหน้านั้น',
        ],
        [
          'Strange as it may sound, getting stranded turned out to be the highlight of our trip.',
          'ฟังดูอาจแปลก แต่การติดค้างกลางทางกลับกลายเป็นไฮไลต์ของทริปเลยทีเดียว',
        ],
        [
          'The wet jackets we hung by the stove; the broken luggage we worried about the next morning.',
          'เสื้อกันฝนที่เปียกเราเอาไปแขวนผึ่งข้างเตา ส่วนกระเป๋าที่พังค่อยมาห่วงเอาตอนเช้าวันรุ่งขึ้น',
          'การดึงนาม 2 ชุดมาขึ้นต้นช่วยเปรียบเทียบการจัดลำดับความสำคัญได้อย่างมีจังหวะ',
        ],
      ],
      reading:
        'Last October, my cousin and I boarded an evening train toward Lampang, expecting a smooth three-hour ride. Clear and breezy as the afternoon sky looked in Bangkok, dark clouds were already gathering over the northern hills. Halfway through the journey, the train slowed to a halt outside a tiny wooden station. Little did we know that a sudden downpour had flooded a bridge two kilometers ahead. Stranded without cell reception, passengers initially groaned at the delay. Nervous though we felt about missing our hotel check-in, everyone soon started improvising. The snacks we pooled onto one shared bench; the quiet corners we offered to parents with sleepy toddlers. Moments later, the station master himself arrived with two steaming flasks of ginger tea and dry towels. Warm local hospitality turned what could have been a miserable night into an unforgettable detour. Tired as we were when a shuttle van finally rescued us at midnight, we laughed the entire ride into town—grateful for a story far richer than any smooth itinerary.',
      listenQ: 'Why did the evening train stop halfway through the journey to Lampang?',
      listenA: 'Because a sudden downpour had flooded a bridge two kilometers ahead.',
      dictation: 'Exhausted though we felt, we pushed on calmly.',
      listenNote:
        'สังเกตโทนเรื่องเล่าในบทอ่านที่ใช้ Adj + as/though และ Little did we know เพื่อสลับจังหวะอารมณ์ไม่ให้น่าเบื่อ',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยค Fronting ที่ใช้คำเชื่อมผิดและลืมคำกริยาช่วย 2 จุด: "Tired although she was, she stayed late; little we knew she had already booked an early flight."',
          answer:
            'Tired though she was, she stayed late; little did we know she had already booked an early flight.',
          explanation:
            '1) เมื่อย้าย Adjective มาขึ้นต้น ใช้ though หรือ as (ไม่ใช่ although) 2) หลัง Little ในอดีตต้องมี did นำหน้าประธาน เป็น little did we know',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ Fronting เพื่อสื่อว่า "ฟังดูอาจน่าแปลกใจ แต่เราได้ไอเดียที่ดีที่สุดตอนแผนแรกพัง" ได้ถูกต้อง?',
          answer:
            'Strange as it may sound, we found our best idea after the first plan failed.',
          choices: [
            'Strange although it may sound, we found our best idea after the first plan failed.',
            'Strange as it may sound, we found our best idea after the first plan failed.',
            'As strange it may sound, we found our best idea after the first plan failed.',
            'Strange was it sounded, we found our best idea after the first plan failed.',
          ],
          explanation:
            'รูปแบบมาตรฐานคือ Adjective + as/though + S + V (เช่น Strange as it may sound)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำ 1 คำให้สำนวนเปิดหักมุมสมบูรณ์: _____ did we realize at the time that our casual prototype would attract three thousand sign-ups.',
          answer: 'Little',
          explanation:
            'Little did + S + V1 = ในตอนนั้นไม่รู้ตัวเลยว่า... (ใช้สร้างอารมณ์หักมุมในเรื่องเล่า)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยขึ้นต้นด้วยคำคุณศัพท์: "แม้สถานที่นั้นจะคับแคบ แต่บรรยากาศก็อบอุ่นเป็นกันเอง"',
          answer: 'Cramped though the space was, the atmosphere felt warm and welcoming.',
          explanation:
            'ย้าย Cramped มาขึ้นหน้าตามด้วย though + S + V เพื่อขับความต่างของบรรยากาศให้เด่นขึ้น',
        },
      ],
      writing:
        'เขียนเรื่องเล่าเหตุการณ์เดินทางหรือเหตุการณ์ไม่คาดคิด 5–6 ประโยค โดยใช้ทั้ง `Adj + though/as + S + V` และ `Little did I/we know...` อย่างละ 1 ประโยค',
      writingSample:
        'Two years ago, I signed up for a morning riverside bike tour without checking the weather forecast. Humid though the early breeze felt, I assumed the sun would come out by eight. Little did I know a seasonal storm was moving straight across the river. Soaked as we got within ten minutes, our guide stayed remarkably resourceful and led us into an old ceramic workshop for hot cocoa. It became my favorite memory of the whole trip.',
      writingNote:
        'เช็กจุดสำคัญ: ห้ามใช้ although หลัง Adjective ที่ย้ายมาข้างหน้า (ใช้ though หรือ as เท่านั้น) และอย่าลืม did หลัง Little',
      speakingTopic:
        'เล่าเรื่องเหตุการณ์พลิกผันหรือทริปที่ผิดแผนแต่ประทับใจ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ปูฉากเริ่มต้น แล้วหักมุมด้วย Little did I/we know that...',
        'แสดงความทรหดด้วย [Adjective] though/as we felt, we still...',
        'เว้นจังหวะสั้นๆ ตรงจุลภาคให้ผู้ฟังซึมซับภาพความต่างได้ทัน',
      ],
    },
    {
      day: 202,
      title: 'Persuasive Framing — ชี้นำโฟกัสในคำอธิบายและการโน้มน้าวใจจริง',
      objective:
        'เลือกผสม Clefts, Emphatic do/did และ Fronting เพื่อเปลี่ยนมุมมองผู้ฟังจากความกังวลไปสู่ทางออกได้อย่างมีชั้นเชิง',
      explanation:
        'ทักษะ B2 ไม่ใช่แค่ "แต่งประโยคถูก" แต่คือ **"เลือกมุมโฟกัสให้ตรงใจผู้ฟัง"**! ลองเทียบวิธีพูดเรื่องเดียวกันเวลาโน้มน้าวร้านค้าเรื่องเลนจักรยาน: ประโยคธรรมดา: *"A bike lane helps shops."* (จืดและไม่มีน้ำหนัก) พอใช้ **Persuasive Framing**: 1) **ลดความกลัวด้วย `It-cleft` หักล้าง**: `It’s not fast cars that bring daily coffee buyers; it’s safe walking and cycling access.` 2) **ดึงจุดร่วมด้วย `What-cleft`**: `What local shopkeepers care about most is steady weekday foot traffic.` 3) **ย้ำข้อเท็จจริงด้วย `Emphatic do/does`**: `A shaded street does keep pedestrians browsing longer.` เห็นไหมครับว่าเมื่อวางจุดโฟกัสถูกตำแหน่ง เราไม่ต้องพูดเสียงแข็งหรือเถียงเอาชนะ แต่ชวนผู้ฟังมองมุมเดียวกันได้ทันที',
      sound: [
        'Measured Persuasive Cadence (Confident, Not Combative)',
        'foot traffic /ˈfʊt ˌtræf.ɪk/ · perspective /pəˈspek.tɪv/ · reluctant /rɪˈlʌk.tənt/',
        'เวลาโน้มน้าว ห้ามเน้นทุกคำเท่ากัน! ให้โทนเสียงราบเรียบในท่อนอธิบาย แล้วลงเสียงหนักและช้าลง 10% ตรงใจความที่ต้องการเปลี่ยนมุมมอง ("A shaded street | DOES keep pedestrians browsing.")',
        'ฝึกพูดประโยค 3 ชั้นติดต่อกัน: ยอมรับความกังวล → หักด้วย It is not... → เชื่อมสู่เป้าหมายร่วมด้วย What matters most is...',
      ],
      l1: [
        'ใช้คำสั่งตรงๆ หรือพูดประโยคปฏิเสธแข็งๆ เช่น "You are wrong about parking. Bike lane is better!"',
        'เมื่อขาดเครื่องมือชี้นำจุดสนใจ (Framing) ผู้พูดมักต้องขึ้นเสียงหรือใช้คำตัดสินผิด-ถูก ซึ่งทำให้อีกฝ่ายตั้งการ์ดทันที',
        'สูตรโน้มน้าวสุภาพแบบ B2: 1) รับรู้มุมเขา (All-cleft / Concession) → 2) ย้ายจุดโฟกัส (It’s not X; it’s Y) → 3) ตอกย้ำผลดีร่วมกัน (What we all want is...)',
      ],
      vocab: [
        [
          'foot traffic',
          'จำนวนคนเดินผ่านเข้าร้าน',
          '/ˈfʊt ˌtræf.ɪk/',
          'boost weekday foot traffic',
          'เพิ่มจำนวนคนเดินเข้าร้านในวันธรรมดา',
        ],
        [
          'skeptical',
          'กังขา / ยังไม่ปักใจเชื่อ',
          '/ˈskep.tɪ.kəl/',
          'address skeptical listeners',
          'ตอบข้อกังขาของผู้ฟังที่ยังไม่เชื่อ',
        ],
        [
          'pilot project',
          'โครงการนำร่อง',
          '/ˈpaɪ.lət ˌprɒdʒ.ekt/',
          'launch a short pilot project',
          'เริ่มโครงการนำร่องระยะสั้น',
        ],
        [
          'tradeoff',
          'สิ่งที่ต้องแลกกัน / ข้อแลกเปลี่ยน',
          '/ˈtreɪd.ɒf/',
          'weigh the practical tradeoffs',
          'ชั่งน้ำหนักข้อแลกเปลี่ยนที่เกิดขึ้นจริง',
        ],
        [
          'linger',
          'เดินเล่น / อยู่ต่อนานขึ้น',
          '/ˈlɪŋ.ɡər/',
          'encourage visitors to linger',
          'ชวนให้ผู้มาเยือนเดินเล่นอยู่นานขึ้น',
        ],
        [
          'common ground',
          'จุดร่วมที่เห็นตรงกัน',
          '/ˌkɒm.ən ˈɡraʊnd/',
          'find common ground early',
          'หาจุดร่วมกันให้เจอตั้งแต่ต้น',
        ],
        [
          'measurable',
          'ที่วัดผลได้ชัดเจน',
          '/ˈmeʒ.ər.ə.bəl/',
          'show measurable results',
          'แสดงผลลัพธ์ที่วัดได้จริง',
        ],
      ],
      examples: [
        [
          'What local café owners care about most is steady weekday foot traffic.',
          'สิ่งที่เจ้าของร้านกาแฟท้องถิ่นใส่ใจมากที่สุดคือจำนวนลูกค้าที่เดินเข้าร้านสม่ำเสมอในวันธรรมดา',
        ],
        [
          'It is rarely street parking alone that keeps a small shop thriving; it is safe, pleasant street access.',
          'ไม่ค่อยใช่แค่ที่จอดรถริมถนนหรอกที่ทำให้ร้านเล็กๆ อยู่รอด แต่มันคือทางเดินที่ปลอดภัยและน่ารื่นรมย์ต่างหาก',
        ],
        [
          'Reluctant though some drivers felt at first, wider sidewalks did bring more families out in the evening.',
          'แม้คนขับรถบางส่วนจะลังเลในตอนแรก แต่ทางเท้าที่กว้างขึ้นก็ดึงให้หลายครอบครัวออกมาเดินช่วงเย็นมากขึ้นจริงๆ',
        ],
        [
          'All the neighborhood asked for was a three-month trial with measurable numbers.',
          'ทั้งหมดที่คนในย่านขอมีเพียงการทดลองใช้สามเดือนพร้อมตัวเลขที่วัดผลได้จริง',
          'ใช้ All... was... เพื่อทำให้ข้อเสนอฟังดูสมเหตุสมผลและไม่ใหญ่เกินตัว',
        ],
      ],
      reading:
        'When urban planner Nont proposed adding a shaded bike lane along a busy market street, half the shopkeepers in the room looked skeptical. They worried that losing ten roadside parking spots would hurt afternoon sales. Rather than arguing over traffic charts, Nont opened by finding common ground. "All any of us want is a lively street where local shops thrive," he began calmly. "The reason I suggested this trial is that speed—not parking—keeps families away from these sidewalks." One baker shook his head, insisting drivers spent the most. Nont nodded respectfully before reframing the tradeoff. "It isn’t passing commuters rushing at fifty kilometers an hour who stop for fresh bread," he explained. "It’s neighbors strolling past your window who actually linger and buy." Reluctant though the group remained, Nont’s calm framing did shift the mood. Instead of rejecting the idea outright, the street committee agreed to a sixty-day weekend pilot project—proving that what changes minds is rarely louder volume, but sharper focus.',
      listenQ: 'What did the street committee agree to try after Nont reframed the discussion?',
      listenA: 'They agreed to a sixty-day weekend pilot project.',
      dictation: 'What changes minds is sharper focus, not louder volume.',
      listenNote:
        'สังเกตการร้อยโครงสร้างทั้งสัปดาห์เข้าด้วยกันในบทพูดจริง: All... is, The reason... is that, It isn’t... who, Reluctant though..., did shift, และ What changes minds is...',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ในการประชุมเสนอไอเดียปรับพื้นที่ออฟฟิศให้เงียบลง เพื่อนบางคนกลัวว่าห้องจะดูแคบ คุณอยากหันโฟกัสไปที่ผลลัพธ์โดยไม่หักหน้าใคร ข้อใดวาง Framing ได้เฉียบที่สุด?',
          answer:
            'What matters most to all of us is staying focused, and it’s constant background noise—not desk size—that tires people out.',
          choices: [
            'You shouldn’t care about desk size because noise is the real problem.',
            'What matters most to all of us is staying focused, and it’s constant background noise—not desk size—that tires people out.',
            'What matters most to all of us staying focused, and it’s noise which tires people out.',
            'Little did you know that desk size is never important compared to noise.',
          ],
          explanation:
            'รวม What-cleft สร้างจุดร่วม (What matters most...) แล้วใช้ It-cleft หักล้างจุดกังวลอย่างสุภาพ (it’s X—not Y—that...)',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคโน้มน้าวที่มีข้อผิดไวยากรณ์ 2 จุด: "All what the team asks for is a short trial, and a quieter workspace do improve concentration."',
          answer:
            'All the team asks for is a short trial, and a quieter workspace does improve concentration.',
          explanation:
            '1) ตัด what หลัง All ออก (ใช้ All the team asks for) 2) ประธาน a quieter workspace เป็นเอกพจน์ จึงใช้ Emphatic does',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำที่ขาดหายให้ประโยคเปรียบเทียบสมบูรณ์ (1 คำ): Skeptical _____ some vendors were in week one, weekend sales rose by twenty percent.',
          answer: 'though',
          explanation:
            'ใช้ Adj + though + S + V (หรือ as) เพื่อยอมรับความกังขาก่อนเฉลยผลลัพธ์เชิงบวก',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยเน้นเหตุผลและจุดเน้น: "ไม่ได้อยู่ที่ว่าเราทำงานกี่ชั่วโมงหรอก แต่มันอยู่ที่ว่าเราปกป้องสมาธิได้แค่ไหนต่างหาก"',
          answer:
            "It isn't how many hours we work that counts; it's how well we protect our focus.",
          explanation:
            'ใช้ contrastive It-cleft เพื่อเปรียบเทียบสองแกนให้ผู้ฟังเปลี่ยนมุมคิดทันที',
        },
      ],
      writing:
        'เขียนข้อเสนอโน้มน้าวสั้นๆ 6 ประโยคเพื่อชวนเพื่อนร่วมงานหรือคนในครอบครัวปรับเปลี่ยนนิสัยบางอย่าง (เช่น ลดประชุมวันศุกร์, แยกขยะที่บ้าน, หรือเดินแทนการขับรถใกล้ๆ) โดยวางลำดับ: หาจุดร่วม → หักล้างความกลัว → เสนอทดลองระยะสั้น',
      writingSample:
        'I know Friday afternoon meetings feel like a safe habit for catching up. All I’m suggesting, however, is trying a quiet Friday pilot for just four weeks. It isn’t fewer check-ins that hurt teamwork; it’s fragmented time that keeps everyone working late. What our team needs most is one uninterrupted afternoon to finish deep tasks cleanly. Busy though our schedule gets, protecting four hours does help people log off with clear heads. Let’s measure output next month and decide together.',
      writingNote:
        'อ่านทวนออกเสียงว่ามีอย่างน้อย 1 It-cleft, 1 What-cleft หรือ All-cleft, และโทนภาษาเป็นมิตรชวนทดลอง ไม่ใช่สั่งการ',
      speakingTopic:
        'เสนอไอเดียปรับปรุงสิ่งรอบตัวให้ดีขึ้นต่อคนที่ยังลังเล (4 / 3 / 2 นาที)',
      speakingBullets: [
        'หา common ground ก่อนด้วย All we want is... หรือ What matters most to all of us is...',
        'คลายข้อกังวลด้วย It isn’t X that...; it’s Y that... แล้วตอกย้ำด้วย does/did',
        'รักษาจังหวะพูดให้นิ่ง ชัด และเป็นมิตรตลอดทั้ง 3 รอบ',
      ],
    },
    {
      day: 203,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 29 — Emphasis & Cleft Mastery + Dictogloss',
      objective:
        'สังเคราะห์และตรวจสอบความแม่นยำในการใช้ What-cleft, It-cleft, All/Reason Cleft, Emphatic do/did และ Fronting ผ่าน Dictogloss และการผลิตภาษาจริง',
      explanation:
        'ครบสัปดาห์ที่ 29 แล้ว! สัปดาห์นี้คุณได้ปลดล็อกเครื่องมือจัดไฟสปอตไลต์ให้ประโยคครบชุดโดยไม่ต้องตะโกนหรือพูดห้วนแบบเดิม: **1) `What-cleft`** สร้างกรอบรอเฉลย (`What makes a difference is...`), **2) `It-cleft`** ชี้เป้าและหักล้าง (`It wasn’t price that stopped them; it was speed.`), **3) `All / Reason Cleft`** ลดแรงต้าน (`All I wanted was clarity.`, `The reason I asked is that...`), **4) `Emphatic do/does/did & Reflexives`** ย้ำข้อเท็จจริงและตัวผู้ลงมือ (`I did check!`, `She herself fixed it.`), และ **5) `Fronting`** ปูอารมณ์เรื่องเล่า (`Cramped though the space was...`, `Little did we know...`) วันนี้มาทดสอบ Dictogloss ความเร็วธรรมชาติและแก้จุดผิดรวมกันครับ',
      sound: {
        title: 'Week 29 Synthesis: Focus Stress & Thought-Group Pacing',
        ipa: 'atmosphere /ˈæt.mə.sfɪər/ · renovate /ˈren.ə.veɪt/ · transformation /ˌtræns.fəˈmeɪ.ʃən/',
        connected_speech:
          'เช็กการพักหายใจตรงรอยต่อของ Clefts และ Fronting: "It was NATURAL light | that changed the ROOM." · "Small though the shopHOUSE looked, | it DID feel airy."',
        drill:
          'ทำ Shadowing บทอ่านวันนี้ 3 รอบ โดยเน้นเสียงคำที่เป็นจุดโฟกัสหลัง is/was และคำว่า did ในท่อนย้ำให้ชัดเจนเป็นธรรมชาติ',
      },
      l1: [
        'รวมกับดักประจำสัปดาห์ 29: 1) ลืม is/was หลัง What-clause 2) ใช้ when/which แทน that ใน It-cleft 3) พูด "The reason... is because" 4) เติม -ed หลัง did 5) ใช้ although หลัง Adj ที่ย้ายมาหน้าประโยค',
        'เวลาพูดจริงเร็วๆ สมองมักกลับไปใช้โครงสร้างไทยหรือซ้อนคำเชื่อม 2 ชั้นโดยไม่รู้ตัว',
        'สแกน 5 เช็กลิสต์ก่อนกดส่งหรือจบประโยค: What... IS | It is... THAT | The reason... IS THAT | did + V1 | Adj + THOUGH/AS',
      ],
      vocab: [
        [
          'shophouse',
          'ตึกแถว / อาคารพาณิชย์',
          '/ˈʃɒp.haʊs/',
          'restore an old shophouse',
          'ปรับปรุงตึกแถวเก่าให้มีชีวิต',
        ],
        [
          'cramped',
          'คับแคบ / อึดอัด',
          '/kræmpt/',
          'transform a cramped layout',
          'ปรับผังพื้นที่ที่เคยคับแคบ',
        ],
        [
          'daylight',
          'แสงธรรมชาติ',
          '/ˈdeɪ.laɪt/',
          'bring in natural daylight',
          'ดึงแสงธรรมชาติเข้ามาในอาคาร',
        ],
        [
          'airiness',
          'ความโปร่งโล่งสบาย',
          '/ˈeə.ri.nəs/',
          'create a sense of airiness',
          'สร้างความรู้สึกโปร่งสบาย',
        ],
        [
          'acoustic',
          'เกี่ยวกับระบบเสียง',
          '/əˈkuː.stɪk/',
          'improve acoustic comfort',
          'ลดเสียงสะท้อนให้สบายหูขึ้น',
        ],
        [
          'craftsmanship',
          'ฝีมือช่าง / ความประณีต',
          '/ˈkrɑːfts.mən.ʃɪp/',
          'admire local craftsmanship',
          'ชื่นชมฝีมือช่างท้องถิ่น',
        ],
        [
          'functional',
          'ใช้งานได้จริง / ตอบโจทย์การใช้งาน',
          '/ˈfʌŋk.ʃən.əl/',
          'keep every corner functional',
          'ให้ทุกมุมใช้งานได้จริง',
        ],
        [
          'outcome',
          'ผลลัพธ์สุดท้าย',
          '/ˈaʊt.kʌm/',
          'deliver a lasting outcome',
          'สร้างผลลัพธ์ที่ยั่งยืน',
        ],
      ],
      examples: [
        [
          'It was natural daylight, not expensive furniture, that transformed the old shophouse.',
          'แสงธรรมชาติต่างหาก ไม่ใช่เฟอร์นิเจอร์ราคาแพง ที่เปลี่ยนโฉมตึกแถวเก่าหลังนี้',
        ],
        [
          'What the studio needed most was quiet acoustic comfort.',
          'สิ่งที่สตูดิโอต้องการมากที่สุดคือความเงียบสบายหูในการทำงาน',
        ],
        [
          'Cramped though the narrow floor plan looked, smart storage did make every corner functional.',
          'แม้ผังพื้นแคบๆ จะดูคับแคบ แต่การจัดเก็บที่ชาญฉลาดก็ทำให้ทุกมุมใช้งานได้จริงขึ้นมาเลย',
        ],
        [
          'All the architects asked for was permission to open one central skylight.',
          'ทั้งหมดที่สถาปนิกขอคืออนุญาตให้เจาะช่องรับแสงตรงกลางเพียงช่องเดียว',
        ],
      ],
      reading:
        'When a four-person architecture studio leased a narrow 1970s shophouse in Talat Noi, friends warned them the dark interior would feel depressing. Cramped though the ground floor looked on day one, the founders saw quiet potential behind the peeling paint. Little did their visitors know that an unused lightwell had been boarded up behind the staircase for decades. Once builders removed the dusty plywood, morning sun poured straight through three levels. What transformed the office was not flashy marble or costly imports; it was natural daylight and airflow that made the whole space breathe. All the team wanted was a calm, functional studio where clients felt welcome without formal stiffness. The reason they kept the worn teak beams is that genuine craftsmanship tells a neighborhood’s story far better than sterile drywall. The lead architect herself sketched the curved oak desks, and local carpenters did deliver an outcome beyond expectation. Today, guests who step off the noisy lane always pause in the doorway—reminded that what shapes how we feel inside a room is often what we choose to uncover, not what we buy.',
      listenQ: 'Why did the architects keep the worn teak beams inside the studio?',
      listenA: 'Because genuine craftsmanship tells a neighborhood’s story far better than sterile drywall.',
      dictation: 'It was natural daylight that transformed the entire studio.',
      listenNote:
        'บททบทวนนี้รวมโครงสร้าง Emphasis ครบทั้ง 5 วัน ให้จับจังหวะคำที่เป็นจุดโฟกัสและฟัง Dictogloss ด้านล่างอย่างละเอียด',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังเสียงจากบทอ่านแล้วเลือกคู่ประโยค Cleft ที่ตรงกับต้นฉบับทุกคำ: "What transformed the office was not flashy marble... _____"',
          answer: 'it was natural daylight and airflow that made the whole space breathe.',
          choices: [
            'it was natural daylight and airflow which made the whole space breathe.',
            'it was natural daylight and airflow that made the whole space breathe.',
            'there was natural daylight and airflow that made the whole space breathe.',
            'it is natural daylight and airflow what made the whole space breathe.',
          ],
          explanation:
            'ต้นฉบับใช้ It-cleft ในอดีตคู่กับ that: "it was natural daylight and airflow that made the whole space breathe."',
          audio_text:
            'What transformed the office was not flashy marble or costly imports; it was natural daylight and airflow that made the whole space breathe.',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ผิดหลักสัปดาห์ 29 รวม 4 จุด: "What annoyed the neighbors noise at night, and the reason they complained was because the gate did broke. Tight although the timeline was, the team by themselves fixed it."',
          answer:
            'What annoyed the neighbors was noise at night, and the reason they complained was that the gate did break. Tight though the timeline was, the team themselves fixed it.',
          explanation:
            '1) ใส่ was หลัง What-clause 2) เปลี่ยน was because เป็น was that 3) หลัง did ใช้ V1 (break) 4) Fronting ใช้ though (ไม่ใช่ although) และเน้นตัวทีมเองใช้ themselves (ไม่มี by)',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้โครงสร้างเน้นความสำคัญระดับ B2 ได้ถูกต้องสมบูรณ์ 100% ทุกส่วน?',
          answer:
            'Little did we realize at the time that all she needed was honest feedback.',
          choices: [
            'Little we realized at the time that all what she needed was honest feedback.',
            'Little did we realize at the time that all she needed was honest feedback.',
            'It was only last month when all she needed were honest feedback.',
            'Helpful although the workshop was, it did helped nobody on Friday.',
          ],
          explanation:
            'Little did we realize (inversion + V1) + all she needed was (ไม่มี what และ feedback นับไม่ได้ใช้ was)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยรวม Cleft + Emphatic: "เหตุผลที่ฉันเลือกสถานที่นี้ก็เพราะแสงธรรมชาติทำให้ห้องดูโปร่งโล่งจริงๆ"',
          answer:
            'The reason I chose this space is that natural daylight does make the room feel airy.',
          explanation:
            'ใช้ The reason I chose... is that... คู่กับ Emphatic does make เพื่อย้ำผลลัพธ์เชิงบวก',
        },
      ],
      writing:
        'เขียนรีวิวหรือเรื่องเล่า 6–7 ประโยคเกี่ยวกับ "การเปลี่ยนพื้นที่เดิม / นิสัยเดิม / ขั้นตอนเดิมให้ดีขึ้น" โดยตั้งใจใส่โครงสร้างจากสัปดาห์นี้ให้ครบ 4 แบบ (What-cleft, It-cleft, All/Reason cleft, และ Fronting หรือ Emphatic do/did)',
      writingSample:
        'Six months ago, I dreaded sitting at my study corner every evening. Cramped though my desk was, I kept blaming my old chair for my slow focus. Little did I realize that a single cluttered shelf was draining my attention before I even opened a book. What changed everything was clearing ninety percent of the papers into one neat box. The reason that small reset worked is that visual calm does help your brain settle down faster. Now, all I need is a warm lamp and thirty quiet minutes to get real work done.',
      writingNote:
        'ตรวจเช็ก 5 จุดทองคำของสัปดาห์ 29 ก่อนจบ: ไม่มี What-clause ที่ขาด is/was, ไม่มี It-cleft ที่ใช้ when/which ผิด, ไม่มี The reason... is because, ไม่มี V2 หลัง did, และไม่มี although หลัง Fronted adjective',
      speakingTopic:
        'Review สัปดาห์ 29: เล่าการเปลี่ยนแปลงหรือทางออกที่พลิกสถานการณ์จริง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใส่ครบทั้งเรื่องเล่าอดีต (Little did we know / Tough though it was) และจุดวิเคราะห์ (It wasn’t X; it was Y / What mattered most was...)',
        'ใช้เสียงหยุดสั้นๆ หลังท่อนหน้าและน้ำหนักเสียงที่มั่นคงบนคำเป้าหมาย',
        'ประเมินตัวเองหลังพูดรอบ 2 นาที: ใช้โครงสร้างเน้นจุดสำคัญได้คล่องโดยไม่ต้องนึกแปลจากไทยหรือไม่',
      ],
    },
  ]
);
