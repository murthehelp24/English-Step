import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 4: สื่อสารคล่องตัว เลือกโทนภาษา และฟังความเร็วเจ้าของภาษา';

export const WEEK27: ModuleSeed = createModule(
  {
    week: 27,
    phase: 4,
    phase_title: PHASE_TITLE,
    cefr_level: 'B2',
    title: 'Hedging, Softening & ศิลปะการเห็นต่างอย่างนุ่มนวล',
    summary:
      'แสดงความเห็น แนะนำ ปฏิเสธ และคัดค้านอย่างมืออาชีพโดยไม่ฟังดูตัดสินหรือหักหน้า ด้วย Hedging language, Modifiers และ Concessive Structures',
    focus: 'Hedging Language, Tactful Disagreement, Diplomatic Pushback',
  },
  [
    {
      day: 183,
      title: 'Avoiding Absolute Overstatements (tend to, appear to, is likely to)',
      objective:
        'ลดการพูดแบบเหมารวมสุดโต่ง (*always, never, 100%, everyone*) ด้วย Hedging Language (`tend to`, `appear to`, `is likely to`, `in most cases`, `broadly speaking`)',
      explanation:
        'ผู้เรียนระดับต้นมักพูดแบบตัดสิน 100% เช่น *"Thai commuters never use bikes."* หรือ *"This update will definitely fail."* ซึ่งในสายตาเจ้าของภาษาฟังดู **ไม่รอบคอบ เหมารวม และชวนโต้เถียง**! ในระดับ B2 เราใช้ **Hedging Language** (ภาษาช่วยลดความสุดโต่งให้ตรงกับความจริง) ได้แก่: 1) **`tend to + V1`** (มีแนวโน้มที่จะ.../มักจะ...), 2) **`appear to / seem to + V1`** (ดูเหมือนว่า... จากข้อมูลตรงหน้า), 3) **`is likely to + V1`** (มีโอกาสสูงที่จะ...), 4) **`in most cases`** (ในกรณีส่วนใหญ่ — ไม่ใช่ all cases), 5) **`broadly speaking`** (พูดโดยภาพรวมกว้างๆ), 6) **`for the most part`** (โดยส่วนใหญ่แล้ว), 7) **`to a certain degree`** (ในระดับหนึ่ง)',
      sound: [
        'Weak Function Words inside Hedging Chunks',
        'tend to /ˈtend tə/ · appear to /əˈpɪə tə/ · broadly /ˈbrɔːd.li/ · likely /ˈlaɪk.li/',
        'สังเกตว่าคำว่า "to" ใน tend_to, appear_to, likely_to จะลดเสียงเป็น /tə/ สั้นและเบาเสมอ และตัว /d/ ท้าย tend มักกลมกลืนไปกับ /t/ เป็น "เท็น-เทอะ" ส่วน "in_most_cases" เชื่อมเสียงตรง /t/ เบาๆ',
        'พูดประโยคเปิด 5 แบบโดยไม่เน้นหนักที่ to: Commuters TEND tə avoid... · Prices apPEAR tə drop... · It is LIKEly tə help... · BROADly SPEAking... · In MOST CAses...',
      ],
      l1: [
        'เผลอใช้คำเด็ดขาดอย่าง always, never, everyone, 100% ตลอดเวลา: "Young people never read newsletters." หรือ "Every customer hates pop-ups."',
        'ในภาษาไทยเราพูดติดปากว่า "ไม่มีใครอ่านหรอก" หรือ "ทุกคนก็ทำแบบนี้หมด" แบบเชิงเปรียบเปรย แต่พอแปลเป็นอังกฤษตรงตัวฟังดูเหมารวมผิดข้อเท็จจริง',
        'เปลี่ยนสูตรในหัวทันที: every → most · always → tend to · never → rarely · will definitely → is likely to',
      ],
      vocab: [
        [
          'tend to',
          'มักจะ / มีแนวโน้มที่จะ...',
          '/ˈtend tə/',
          'tend to prefer quick chats',
          'มักชอบการคุยสั้นๆ มากกว่า',
        ],
        [
          'appear to',
          'ดูเหมือนว่า (จากหลักฐานที่เห็น)',
          '/əˈpɪə tə/',
          'appear to slow down',
          'ดูเหมือนจะช้าลง',
        ],
        [
          'likely',
          'มีแนวโน้ม/มีโอกาสสูงที่จะ',
          '/ˈlaɪk.li/',
          'is likely to increase',
          'มีแนวโน้มที่จะเพิ่มขึ้น',
        ],
        [
          'in most cases',
          'ในกรณีส่วนใหญ่',
          '/ɪn məʊst ˈkeɪ.sɪz/',
          'in most cases, users skip ads',
          'ในกรณีส่วนใหญ่ ผู้ใช้กดข้ามโฆษณา',
        ],
        [
          'broadly speaking',
          'พูดโดยภาพรวมกว้างๆ',
          '/ˈbrɔːd.li ˈspiː.kɪŋ/',
          'broadly speaking, the trend is clear',
          'โดยภาพรวม แนวโน้มนี้ชัดเจน',
        ],
        [
          'for the most part',
          'โดยส่วนใหญ่แล้ว',
          '/fɔː ðə ˈməʊst pɑːt/',
          'for the most part, feedback was warm',
          'โดยส่วนใหญ่ เสียงตอบรับอบอุ่นดี',
        ],
        [
          'overstatement',
          'คำกล่าวเกินจริง/เหมารวม',
          '/ˌəʊ.vəˈsteɪt.mənt/',
          'avoid sweeping overstatements',
          'หลีกเลี่ยงการพูดเหมารวมเกินจริง',
        ],
      ],
      examples: [
        [
          'Morning commuters tend to pick the fastest shaded route to the station.',
          'คนเดินทางตอนเช้ามักเลือกเส้นทางที่เร็วและร่มรื่นที่สุดไปสถานีรถไฟฟ้า',
        ],
        [
          'In most cases, shorter daily videos appear to hold reader attention better.',
          'ในกรณีส่วนใหญ่ วิดีโอสั้นรายวันดูเหมือนจะดึงความสนใจผู้อ่านได้ดีกว่า',
        ],
        [
          'Broadly speaking, flexible hybrid hours are likely to boost team retention.',
          'พูดโดยภาพรวม ชั่วโมงทำงานแบบไฮบริดที่ยืดหยุ่นมีแนวโน้มจะช่วยรักษาคนในทีมได้ดีขึ้น',
        ],
        [
          'For the most part, participants welcomed the simpler two-page registration form.',
          'โดยส่วนใหญ่แล้ว ผู้เข้าร่วมงานต่างชื่นชมแบบฟอร์มลงทะเบียนสองหน้าแบบใหม่ที่เรียบง่ายขึ้น',
        ],
      ],
      reading:
        'When a city planners group surveyed three hundred Bangkok residents about a proposed shaded bike path, the early numbers avoided easy clichés. Before seeing the data, one columnist claimed nobody in tropical heat would ever cycle to work. Yet careful researchers avoid sweeping overstatements like "always" and "never." Broadly speaking, residents showed steady interest whenever safe lane dividers and shower lockers were available. Commuters aged twenty to forty tended to prefer short fifteen-minute hops connecting neighborhood streets to the skytrain, rather than long highway rides. In most cases, cost mattered far less than predictable street lighting after dark. Several local shopkeepers also noticed that slow morning bike traffic appeared to encourage quick coffee stops right outside their doors. For the most part, the pilot stretch looks likely to grow once shaded trees mature along the canal. Speaking with measured precision makes any argument far more credible.',
      listenQ: 'What mattered more than cost for most commuters considering the bike path?',
      listenA: 'Safe lane dividers, shower lockers, and predictable street lighting after dark.',
      dictation: 'Broadly speaking, shorter meetings tend to boost team focus.',
      listenNote:
        'สังเกตการออกเสียงสระเบาใน tend_to (/ˈtend tə/) และหยุดวรรคสั้นๆ หลัง Broadly speaking,',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'ปรับประโยคที่เหมารวมเกินจริง 2 จุดให้เป็นภาษา B2 ที่น่าเชื่อถือ: "Every online shopper always leaves the cart immediately when shipping is charged."',
          answer:
            'In most cases, online shoppers tend to leave the cart when extra shipping is charged.',
          explanation:
            'แทน Every / always ด้วย In most cases และ tend to เพื่อไม่กล่าวอ้าง 100% เกินจริง',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ Hedging Language แสดงความน่าจะเป็นของแนวโน้มในอนาคตได้ถูกต้องตามหลักไวยากรณ์?',
          answer:
            'Moving workshops earlier in the day is likely to improve attendance.',
          choices: [
            'Moving workshops earlier in the day is likely improving attendance.',
            'Moving workshops earlier in the day is likely to improve attendance.',
            'Moving workshops earlier in the day appears improving attendance.',
            'Moving workshops earlier in the day tends improve attendance.',
          ],
          explanation:
            'ใช้ is likely to + V1 / appear to + V1 / tend to + V1 เสมอ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำ 3 คำให้ครบก้อนคำ: _____ _____ _____, remote learners preferred recorded lessons during busy weekdays.',
          answer: 'For the most',
          explanation: 'For the most part, ... = โดยส่วนใหญ่แล้ว...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยไม่ใช้คำสุดโต่ง: "พูดโดยภาพรวม ดูเหมือนว่าผู้ใช้ใหม่มักจะชอบตัวอย่างสั้นๆ"',
          answer:
            'Broadly speaking, new users appear to prefer short examples.',
          explanation: 'Broadly speaking + appear to prefer',
        },
      ],
      writing:
        'เขียนข้อสังเกตสั้นๆ 5–6 ประโยคเกี่ยวกับพฤติกรรมการใช้มือถือ การเดินทาง หรือการกินดื่มของคนรอบตัว โดยเปลี่ยนทุกการเหมารวมให้เป็น Hedging (ใช้ tend to, appear to, is likely to, in most cases, broadly speaking อย่างน้อย 4 ตัว)',
      writingSample:
        "Broadly speaking, people in my neighborhood have changed how they order coffee over the past two years. On busy weekday mornings, office workers tend to order ahead through mobile apps instead of waiting in line. In most cases, afternoon visitors appear to choose cafés with quiet power outlets and stable Wi-Fi rather than trendy photo spots. For the most part, shops that offer smaller low-sugar sizes are likely to keep loyal regulars coming back.",
      writingNote:
        'เช็กคำกริยาหลัง tend to / appear to / is likely to ว่าใช้ V1 และสแกนหาคำว่า always / never / everyone เพื่อเช็กว่าไม่ได้หลุดมา',
      speakingTopic:
        'วิเคราะห์เทรนด์หรือนิสัยของคนในสังคมอย่างมีเหตุผล ไม่สุดโต่ง 4 / 3 / 2 นาที',
      speakingBullets: [
        'พูดถึงพฤติกรรมการทำงาน การเรียน หรือการท่องเที่ยว โดยบังคับใช้ tend to, in most cases, broadly speaking, is likely to',
        'ออกเสียง /tə/ เบาๆ ใน tend to / appear to / likely to ให้ลื่นไม่สะดุด',
      ],
    },
    {
      day: 184,
      title: 'Tactful Disagreement ("Yes, and..." vs "I see where you\'re coming from, though...")',
      objective:
        'แสดงความเห็นต่างอย่างนุ่มนวลและสร้างสรรค์ด้วยโครงสร้างยอมรับอีกฝ่ายก่อนเบี่ยงมุมมอง (`I see where you\'re coming from`, `you have a point, though`, `from another angle`)',
      explanation:
        'คนไทยเวลาไม่เห็นด้วยมักเจอ 2 ปัญหา: ถ้าไม่ **เงียบไปเลยเพราะเกรงใจ** ก็หลุดพูดตรงๆ แบบตำราเก่าว่า ❌ *"I disagree with you"* หรือ *"No, you are wrong"* ซึ่งฟังดูปะทะทันที! ศิลปะการเห็นต่างแบบ B2 ใช้สูตร **"Acknowledge → Pivot → Offer Angle"**: 1) **Acknowledge (รับรู้มุมของอีกฝ่ายก่อน):** `I see where you\'re coming from` (ฉันเข้าใจเลยว่าทำไมคุณมองแบบนั้น), `You raise a valid point` (คุณยกประเด็นที่น่าสนใจมาก) 2) **Pivot (พลิกนุ่มๆ ด้วย `though` / `at the same time` / `having said that`):** อย่าพูดว่า `BUT` ดังกระแทกให้ใช้ `, though...` ท้ายประโยคหรือ `that said,` แทน! 3) **Offer Angle (เสนอมุมใหม่เป็นคำถามชวนคิด):** `Have we considered looking at it from another angle?` / `I\'m not entirely convinced that...`',
      sound: [
        'Rise-Fall-Rise Concession Intonation',
        'perspective /pəˈspek.tɪv/ · convinced /kənˈvɪnst/ · necessarily /ˌnes.əˈser.ə.li/ · angle /ˈæŋ.ɡəl/',
        'เวลาพูด "I see where you\'re coming from," น้ำเสียงตอนท้ายไม่ดิ่งปิดตาย แต่ลอยค้างนิดหนึ่งก่อนต่อด้วย ", though..." เพื่อส่งสัญญาณให้คู่สนทนารู้ว่า "ฉันฟังคุณนะ และมีมุมเสริมเล็กน้อย"',
        'ฝึกพูดประโยค 2 ท่อนด้วยน้ำเสียงเปิดรับ: "You have a point, ↗ though from another angle..." · "I see where you are coming from, ↗ yet I am not entirely convinced..."',
      ],
      l1: [
        'ขึ้นต้นด้วย "I disagree with your idea" หรือ "No, it is not like that, because..." แล้วตามด้วยคำว่า BUT เสียงแข็ง',
        'คำว่า I disagree ตรงๆ ในการประชุมจริงฟังดูหักหน้าคู่สนทนา และคำว่า but ต้นประโยคมักทำให้บรรยากาศกลายเป็นฝ่ายแพ้-ชนะ',
        'ใช้สูตร "ยอมรับก่อน 1 ก้าว + วาง though ไว้เชื่อม": "That makes sense on paper, though in practice..."',
      ],
      vocab: [
        [
          'coming from',
          'มุมมอง/เหตุผลเบื้องหลังของอีกฝ่าย',
          '/ˈkʌm.ɪŋ frəm/',
          "see where you're coming from",
          'เข้าใจที่มาที่ไปและมุมมองของคุณ',
        ],
        [
          'valid',
          'มีน้ำหนัก / น่าฟัง / สมเหตุสมผล',
          '/ˈvæl.ɪd/',
          'raise a valid point',
          'ยกประเด็นที่สมเหตุสมผลขึ้นมา',
        ],
        [
          'convinced',
          'ปักใจเชื่อ / มั่นใจเต็มที่',
          '/kənˈvɪnst/',
          'not entirely convinced',
          'ยังไม่มั่นใจเต็มที่นักว่า...',
        ],
        [
          'necessarily',
          'อย่างจำเป็นเสมอไป',
          '/ˌnes.əˈser.ə.li/',
          'not necessarily the best fit',
          'อาจไม่ใช่ตัวเลือกที่เหมาะที่สุดเสมอไป',
        ],
        [
          'angle',
          'แง่มุม / มุมมอง',
          '/ˈæŋ.ɡəl/',
          'look at it from another angle',
          'ลองมองจากอีกมุมหนึ่ง',
        ],
        [
          'considered',
          'ได้พิจารณาแล้ว',
          '/kənˈsɪd.əd/',
          'have we considered',
          'เราได้ลองพิจารณา...แล้วหรือยัง',
        ],
        [
          'overlook',
          'มองข้ามไปโดยไม่ตั้งใจ',
          '/ˌəʊ.vəˈlʊk/',
          'risk overlooking a detail',
          'เสี่ยงจะมองข้ามรายละเอียดไป',
        ],
      ],
      examples: [
        [
          "I see where you're coming from, though cutting the budget now might slow growth.",
          'ฉันเข้าใจมุมมองของคุณนะ เพียงแต่การตัดงบตอนนี้อาจทำให้การเติบโตชะลอลงได้',
        ],
        [
          'You raise a valid point about speed; at the same time, accuracy matters too.',
          'คุณยกประเด็นเรื่องความเร็วได้น่าสนใจ แต่ในเวลาเดียวกันความแม่นยำก็สำคัญเหมือนกัน',
        ],
        [
          "I'm not entirely convinced that flashy animations will help first-time readers.",
          'ฉันยังไม่ค่อยมั่นใจนักว่าแอนิเมชันหวือหวาจะช่วยผู้อ่านมือใหม่ได้จริง',
        ],
        [
          'Cheaper tools are not necessarily easier for new volunteers to maintain.',
          'เครื่องมือที่ราคาถูกกว่าไม่ได้แปลว่าจะดูแลรักษาง่ายกว่าสำหรับอาสาสมัครเสมอไป',
        ],
      ],
      reading:
        'During an afternoon editorial meeting for a Chiang Mai travel zine, two writers held opposite visions for the autumn issue. Jay argued enthusiastically for featuring luxury rooftop pools to attract higher ad revenue. Instead of dismissing him bluntly with "I disagree," senior editor Ploy leaned in calmly and acknowledged his goal first. "I see where you are coming from, Jay—strong sponsors help keep our print quality high," she began. Then she pivoted gently without breaking momentum. "Having said that, I am not entirely convinced luxury hotels fit what our loyal readers love most about this zine. Have we considered looking at it from another angle?" She suggested pairing boutique neighborhood cafés with long-form portraits of ceramic makers. Rather than feeling shut down, Jay paused and nodded: "You raise a valid point—high-end spots are not necessarily our core strength." Together, they blended both priorities into a craftsman-meets-design feature that satisfied readers and local sponsors alike.',
      listenQ: 'How did Ploy respond to Jay’s proposal instead of bluntly saying "I disagree"?',
      listenA: 'She acknowledged his sponsor goal first, gently noted she was not entirely convinced it fit loyal readers, and offered another angle.',
      dictation: "I see where you're coming from, though another angle might work better.",
      listenNote:
        'สังเกตการลงเสียงคำว่า necessarily (/ˌnes.əˈser.ə.li/) เน้นพยางค์ที่ 3 "เซะ" และทำเสียงยกค้างเบาๆ ก่อนคำว่า though',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ในที่ประชุม เพื่อนร่วมทีมเสนอไอเดียลดเวลาการอบรมจาก 2 วันเหลือ 2 ชั่วโมง คุณเห็นว่าเสี่ยงเกินไป ควรโต้แย้งอย่างสุภาพอย่างไร?',
          answer:
            "You raise a valid point about saving time, though I'm not entirely convinced two hours is enough.",
          choices: [
            'No, you are completely wrong—two hours is impossible!',
            'I disagree with your opinion because you did not think carefully.',
            "You raise a valid point about saving time, though I'm not entirely convinced two hours is enough.",
            'Yes, great idea, let us do two hours even though I hate it.',
          ],
          explanation:
            'ยอมรับเจตนาดีเรื่องประหยัดเวลา (You raise a valid point) แล้วเบี่ยงด้วย though + I’m not entirely convinced...',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบก้อนคำที่ช่วยลดความสุดโต่ง: Working longer hours does not _____ produce better creative results.',
          answer: 'necessarily',
          explanation: 'not necessarily = ไม่ได้แปลว่าจะเป็นเช่นนั้นเสมอไป',
        },
        {
          kind: 'error_fix',
          prompt:
            'ปรับคำคัดค้านที่ฟังดูห้วนเกินไปให้เป็น B2 Tactful Disagreement: "I disagree. Your plan is bad. Let us think my idea."',
          answer:
            "I see where you're coming from, though have we considered looking at it from another angle?",
          explanation:
            'รับฟังมุมมองอีกฝ่ายด้วย I see where you’re coming from แล้วชวนคิดต่อด้วย Have we considered...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ฉันเข้าใจมุมมองของคุณนะ เพียงแต่เรายังเสี่ยงที่จะมองข้ามความต้องการของผู้ใช้ใหม่"',
          answer:
            "I see where you're coming from, though we risk overlooking new users' needs.",
          explanation:
            "I see where you're coming from, though + risk overlooking...",
        },
      ],
      writing:
        'เลือกประเด็นถกเถียงที่พบจริง 1 เรื่อง (เช่น การทำงานจากบ้าน vs เข้าออฟฟิศ, การใช้ AI ช่วยเขียนงาน, หรือการเที่ยวแบบแผนแน่น vs เที่ยวชิล) แล้วเขียนตอบความเห็นของเพื่อน 5–6 ประโยคโดยใช้สูตร Acknowledge → Pivot → Offer Angle',
      writingSample:
        "I totally see where you're coming from about bringing everyone back to the office five days a week—face-to-face brainstorming really sparks quick energy. You raise a valid point about mentoring younger staff as well. Having said that, I'm not entirely convinced full-time commuting is necessarily the best way to keep senior focus high. Have we considered trying two shared anchor days instead? That way, we get lively collaboration without losing quiet deep-work mornings.",
      writingNote:
        'เช็กคำเชื่อมว่าไม่มี "No, you are wrong" หรือ "I disagree" ดิบๆ และมีคำรับรองจุดแข็งของอีกฝ่ายก่อนเบี่ยงมุมเสมอ',
      speakingTopic:
        'จำลองเห็นต่างอย่างสุภาพในหัวข้อที่คุยกับเพื่อนหรือทีม (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดครบ 3 ขั้น: ยอมรับจุดดีของอีกฝ่าย (You raise a valid point / I see where you are coming from) → พลิกนุ่มด้วย though → เสนอมุมใหม่ด้วย Have we considered...?',
        'ฝึกโทนเสียงขึ้น-ลงแบบเปิดรับ ไม่กระแทกเสียงตรงคำว่า though',
      ],
    },
    {
      day: 185,
      title: 'Diplomatic Pushback & Saying "No" Constructively',
      objective:
        'ปฏิเสธงานด่วน คำขอ หรือเงื่อนไขที่ไม่ไหวได้อย่างนุ่มนวล ชัดเจน และเสนอทางเลือกที่ทำได้จริงโดยไม่พูด "Yes" แบบเกรงใจจนพังทีหลัง',
      explanation:
        'กับดักใหญ่ของคนไทยคือ **"ความเกรงใจ"**: เวลามีคนฝากงานแทรกทั้งที่มือเต็ม หลายคนไม่กล้าพูดว่าไม่ไหว จึงตอบรับว่า `Yes, okay!` แล้วสุดท้ายทำไม่ทัน หรือไม่ก็ปฏิเสธทื่อๆ ว่า `No, I am busy.` วิธีพูดปฏิเสธแบบมืออาชีพ (**Diplomatic Pushback**) มีสูตร 3 ท่อน: 1) **แสดงความยินดี/เจตนาดี:** `I would love to help with this...` 2) **บอกข้อจำกัดอย่างเป็นกลาง (ใช้คำเกี่ยวกับเวลา/ภาระงาน ไม่พูดว่าขี้เกียจ):** `...though my bandwidth is stretched until Friday` / `...yet taking it on right now might carry a risk to quality` 3) **เสนอทางเลือกหรือพบกันครึ่งทาง:** `Realistically speaking, the earliest I can give this the attention it deserves is Monday.` / `What if we meet halfway and tackle phase one first?`',
      sound: [
        'Measured Pacing on Constructive Refusals',
        'bandwidth /ˈbænd.wɪdθ/ · realistically /ˌrɪəˈlɪs.tɪ.kli/ · compromise /ˈkɒm.prə.maɪz/ · quality /ˈkwɒl.ə.ti/',
        'สังเกตเสียง /θ/ ท้าย bandwidth (/ˈbænd.wɪdθ/) ต้องแลบลิ้นเบาๆ ส่วน realistically ออกเสียง 5 พยางค์ (รี-อะ-ลิซ-ติก-คลี่) และเว้นจังหวะสั้นหลังคำว่า love to help เพื่อคั่นก่อนบอกข้อจำกัด',
        'ฝึกพูดประโยคปฏิเสธแบบมีทางออก 3 รอบโดยไม่เร่ง: I would LOVE to help, / though my BANDwidth is STRETCHED until Friday. / What if we aim for MONday morning?',
      ],
      l1: [
        'ปฏิเสธห้วนๆ ว่า "No, cannot! I am too busy." หรือเกรงใจจนรับปากทุกอย่าง "Yes, I can try!" ทั้งที่รู้ว่าไม่ทันแน่',
        'วัฒนธรรมเกรงใจทำให้กังวลว่าการปฏิเสธเท่ากับไม่น่ารัก ทั้งที่ในระดับ B2 การบอกข้อจำกัดล่วงหน้าอย่างตรงไปตรงมาคือความรับผิดชอบสูงสุด',
        'จำวลีทอง: แทนคำว่า I am too busy ด้วย "My bandwidth is stretched right now" และแทน No ด้วย "What if we shift..."',
      ],
      vocab: [
        [
          'bandwidth',
          'กำลังเวลา/สมาธิที่มีอยู่สำหรับรับงานเพิ่ม',
          '/ˈbænd.wɪdθ/',
          'my bandwidth is stretched',
          'ตารางและกำลังรับงานตอนนี้แน่นมากแล้ว',
        ],
        [
          'carry a risk',
          'มีความเสี่ยงที่จะเกิดผลเสีย',
          '/ˈkær.i ə rɪsk/',
          'carry a risk to quality',
          'เสี่ยงต่อคุณภาพงาน',
        ],
        [
          'realistically',
          'หากมองตามความเป็นจริง',
          '/ˌrɪəˈlɪs.tɪ.kli/',
          'realistically speaking',
          'พูดกันตามความเป็นจริงเลยนะ',
        ],
        [
          'meet halfway',
          'พบกันครึ่งทาง / ปรับเข้าหากัน',
          '/miːt ˌhɑːfˈweɪ/',
          'meet halfway on scope',
          'ปรับขอบเขตงานให้เจอกันครึ่งทาง',
        ],
        [
          'on the current timeline',
          'ภายใต้กรอบเวลาในตอนนี้',
          '/ɒn ðə ˈkʌr.ənt ˈtaɪm.laɪn/',
          'on the current timeline',
          'ภายใต้เส้นตายที่มีอยู่ตอนนี้',
        ],
        [
          'attention it deserves',
          'ความใส่ใจอย่างเต็มที่สมคุณค่าของงาน',
          '/əˈten.ʃən ɪt dɪˈzɜːvz/',
          'give it the attention it deserves',
          'ทุ่มเทเวลาให้อย่างเต็มที่สมควรแก่เนื้องาน',
        ],
        [
          'scope',
          'ขอบเขตของงาน/โครงการ',
          '/skəʊp/',
          'keep within scope',
          'ควบคุมให้อยู่ในขอบเขตที่ตกลงไว้',
        ],
      ],
      examples: [
        [
          "I'd love to help with the brochure, though my bandwidth is stretched until Friday.",
          'ฉันยินดีช่วยทำโบรชัวร์เลยนะ เพียงแต่ตอนนี้มือฉันเต็มถึงวันศุกร์เลย',
        ],
        [
          'Adding three extra pages on the current timeline might carry a risk to print quality.',
          'การเพิ่มอีกสามหน้าภายใต้กำหนดส่งเดิมอาจเสี่ยงต่อคุณภาพงานพิมพ์ได้',
        ],
        [
          'Realistically speaking, I can give this task the attention it deserves next Tuesday.',
          'พูดกันตามความจริง ฉันจะดูแลงานนี้ได้อย่างเต็มที่ในวันอังคารหน้า',
        ],
        [
          'Since budgets are tight, what if we meet halfway and launch with core features first?',
          'เนื่องจากงบจำกัด ลองพบกันครึ่งทางโดยปล่อยฟีเจอร์หลักก่อนดีไหม?',
        ],
      ],
      reading:
        'At four on Wednesday, freelance illustrator Nida received an urgent message from a favorite startup client asking for twelve custom icons by Thursday noon. Feeling flattered, Nida almost typed a quick "Sure, no problem!" even though she already had two magazine deadlines overnight. Remembering last month’s exhausting all-nighter, she paused and chose diplomatic pushback instead. First, she showed genuine enthusiasm: "Thank you for thinking of me—I would love to illustrate this set!" Next, she explained the constraint calmly without sounding defensive: "However, my bandwidth is stretched through Thursday morning, and rushing twelve fresh icons on the current timeline might carry a risk to the clean style you expect." Finally, she offered a constructive alternative: "Realistically speaking, I can deliver four priority icons by noon tomorrow and send the remaining eight on Monday so every piece gets the attention it deserves. Would meeting halfway like that work for your launch?" Twenty minutes later, the founder replied warmly, thanking her for protecting quality and happily agreeing to the phased schedule.',
      listenQ: 'What constructive compromise did Nida offer to her startup client?',
      listenA: 'She offered to deliver four priority icons by Thursday noon and the remaining eight on Monday.',
      dictation: 'My bandwidth is stretched until Friday, so what if we meet halfway?',
      listenNote:
        'ฝึกออกเสียงตัว /θ/ ท้ายคำว่า bandwidth (/ˈbænd.wɪdθ/) และการเชื่อมคำใน what_if_we_meet_halfway',
      drills: [
        {
          kind: 'choice',
          prompt:
            'หัวหน้าหรือเพื่อนร่วมทีมมาขอให้ช่วยงานใหญ่เพิ่มวันนี้ แต่คุณมีงานค้างเต็มมืออยู่แล้ว ข้อใดปฏิเสธแบบมืออาชีพที่สุด?',
          answer:
            "I'd love to pitch in, though my bandwidth is stretched today—realistically speaking, I can start tomorrow morning.",
          choices: [
            'No way! I have too many jobs already, ask someone else.',
            "Yes, I will finish everything tonight even if I don't sleep!",
            "I'd love to pitch in, though my bandwidth is stretched today—realistically speaking, I can start tomorrow morning.",
            'Cannot do today because I am very busy right now.',
          ],
          explanation:
            'แสดงความเต็มใจ (I’d love to...) + บอกข้อจำกัดเป็นกลาง (my bandwidth is stretched) + เสนอเวลาที่ทำได้จริง (tomorrow morning)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบก้อนคำ: Shipping unedited slides tonight could _____ a serious risk to our brand credibility.',
          answer: 'carry',
          explanation: 'carry a risk = มีความเสี่ยงที่จะเกิดผลเสียตามมา',
        },
        {
          kind: 'error_fix',
          prompt:
            'ปรับคำปฏิเสธที่ฟังดูห้วนและแก้สำนวนให้ถูกต้อง: "I cannot take this project. Give me less work, or wait me next week."',
          answer:
            'Taking this on right now might carry a risk to quality—what if we meet halfway and aim for next week?',
          explanation:
            'ชี้ให้เห็นความเสี่ยงต่อคุณภาพงานแทนการปฏิเสธทื่อๆ และชวนต่อรองด้วย what if we meet halfway',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "พูดตามความเป็นจริง ฉันอยากทุ่มเทเวลาให้งานนี้อย่างเต็มที่ในสัปดาห์หน้า"',
          answer:
            'Realistically speaking, I want to give this the attention it deserves next week.',
          explanation:
            'Realistically speaking + give this the attention it deserves',
        },
      ],
      writing:
        'เขียนข้อความตอบปฏิเสธคำขอกะทันหันอย่างสร้างสรรค์ 5–6 ประโยค (เช่น เพื่อนขอให้ช่วยจัดงานด่วน หรือลูกค้าขอเพิ่มเนื้องานเกินขอบเขต) โดยใช้สูตร: ยินดีช่วย → ข้อจำกัด/ความเสี่ยง → เสนอทางออกพบกันครึ่งทาง',
      writingSample:
        "Thanks so much for inviting me to design the event banner—I'd really love to help out! However, my bandwidth is stretched through Friday evening due to two existing community workshops. Taking on a full visual set on the current timeline might carry a risk to getting the details sharp enough. Realistically speaking, I can give the banner the attention it deserves starting Saturday morning, or what if we meet halfway and I adapt one of your existing templates tonight?",
      writingNote:
        'ตรวจโครงสร้าง 3 ขั้นให้ครบ: 1) ขอบคุณ/แสดงความตั้งใจ 2) เหตุผลด้าน bandwidth/timeline risk 3) เสนอทางเลือกจริง 1–2 แบบ',
      speakingTopic:
        'ฝึกพูด "Say No Constructively" เมื่อเวลาไม่พอ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้ก้อนคำ: I would love to..., my bandwidth is stretched, carry a risk, realistically speaking, meet halfway',
        'ใช้น้ำเสียงนิ่ง มั่นใจ และอบอุ่น ไม่พูดเหมือนกำลังแก้ตัวหรือกลัวอีกฝ่ายโกรธ',
      ],
    },
    {
      day: 186,
      title: 'Expressing Nuanced Uncertainty & Balanced Pros/Cons',
      objective:
        'ชั่งน้ำหนักข้อดี-ข้อเสียและแสดงความไม่แน่ใจอย่างมีระดับ (`to some extent`, `on balance`, `having said that`, `on the flip side`, `it remains to be seen`)',
      explanation:
        'ปัญหาโลกแตกส่วนใหญ่ในงานและชีวิตไม่มีคำตอบขาว-ดำ เจ้าของภาษาแสดงความคิดแบบคนคิดเป็น (Critical Nuance) ด้วยชุดคำเชื่อมระดับ B2 ที่ลึกกว่า *"Good and bad"* หรือ *"On the other hand"*: 1) **`to some extent`** (เห็นด้วย/เป็นจริงในระดับหนึ่ง แต่ไม่ใช่ทั้งหมด), 2) **`having said that`** (กล่าวแบบนั้นแล้วก็จริง... แต่ในอีกมุมหนึ่ง — เป็นธรรมชาติและลื่นกว่า *Nevertheless* ในบทสนทนา), 3) **`on the flip side`** (ในอีกด้านหนึ่งของเหรียญ — ใช้ยกข้อดีหรือข้อเสียคู่เทียบ), 4) **`on balance`** (เมื่อชั่งน้ำหนักทั้งหมดแล้วโดยรวม...), 5) **`it remains to be seen`** (คงต้องรอดูต่อไปในอนาคตว่า...), 6) **`a double-edged sword`** (ดาบสองคม)',
      sound: [
        'Discourse Boundary Pauses & Stress',
        'extent /ɪkˈstent/ · balance /ˈbæl.əns/ · sword /sɔːd/ · remains /rɪˈmeɪnz/',
        'ตัว w ใน sword ไม่ออกเสียง (/sɔːd/)! และเวลาใช้ตัวเชื่อมเหล่านี้ให้เว้นจังหวะสั้นๆ 0.3 วินาทีหลัง comma เพื่อแบ่งฝั่งข้อดีและข้อเสียให้คนฟังตามทัน: "To some exTENT, / ... Having SAID that, / ... On BALance, / ..."',
        'ฝึกอ่านเรียง 4 ก้อนคำด้วยจังหวะหยุดสั้นๆ: To some exTENT, / · Having SAID that, / · On the FLIP side, / · On BALance,',
      ],
      l1: [
        'เริ่มต้นทุกย่อหน้าด้วย "On the one hand... On the other hand..." แข็งๆ หรือพูดว่า "It has good side and bad side"',
        'คนไทยมักแปล "ดาบสองคม" หรือ "มีทั้งดีและเสีย" ด้วยคำศัพท์พื้นฐานซ้ำๆ จนไม่เห็นน้ำหนักว่าสุดท้ายเอนเอียงไปทางไหน',
        'ใช้โครงสร้าง 3 จังหวะ: ยอมรับฝั่งแรก (To some extent) → พลิกอีกฝั่ง (Having said that / On the flip side) → ชั่งน้ำหนักสรุป (On balance)',
      ],
      vocab: [
        [
          'to some extent',
          'ในระดับหนึ่ง / บางส่วน',
          '/tə sʌm ɪkˈstent/',
          'agree to some extent',
          'เห็นด้วยในระดับหนึ่ง',
        ],
        [
          'having said that',
          'ถึงอย่างนั้นก็เถอะ / แต่อย่างไรก็ตาม',
          '/ˈhæv.ɪŋ sed ðæt/',
          'having said that, costs matter',
          'ถึงอย่างนั้น เรื่องค่าใช้จ่ายก็ยังสำคัญ',
        ],
        [
          'on the flip side',
          'ในอีกด้านหนึ่ง (ข้อดี/ข้อเสียตรงข้าม)',
          '/ɒn ðə ˈflɪp saɪd/',
          'on the flip side, speed drops',
          'ในอีกด้านหนึ่ง ความเร็วก็ลดลง',
        ],
        [
          'on balance',
          'เมื่อชั่งน้ำหนักรวมทั้งหมดแล้ว',
          '/ɒn ˈbæl.əns/',
          'on balance, the shift pays off',
          'เมื่อชั่งน้ำหนักดูแล้ว การเปลี่ยนนี้คุ้มค่า',
        ],
        [
          'double-edged sword',
          'ดาบสองคม (มีทั้งคุณและโทษในตัว)',
          '/ˌdʌb.əl.edʒd ˈsɔːd/',
          'prove a double-edged sword',
          'กลายเป็นดาบสองคม',
        ],
        [
          'remains to be seen',
          'ยังต้องรอดูผลพิสูจน์ต่อไป',
          '/rɪˈmeɪnz tə bi ˈsiːn/',
          'it remains to be seen whether',
          'คงต้องรอดูกันต่อไปว่า...',
        ],
        [
          'trade-off',
          'การแลกเปลี่ยน/ได้อย่างเสียอย่าง',
          '/ˈtreɪd.ɒf/',
          'accept a clear trade-off',
          'ยอมรับการได้อย่างเสียอย่างที่ชัดเจน',
        ],
      ],
      examples: [
        [
          'AI note-takers help to some extent, though they still miss subtle cultural jokes.',
          'ตัวช่วยจดโน้ต AI มีประโยชน์ในระดับหนึ่ง แต่ก็ยังพลาดมุกตลกเชิงวัฒนธรรมที่ละเอียดอ่อน',
        ],
        [
          'Working from home saves commuting time; on the flip side, teammates can feel isolated.',
          'การทำงานจากบ้านช่วยประหยัดเวลาเดินทาง แต่ในอีกด้านหนึ่งเพื่อนร่วมทีมอาจรู้สึกโดดเดี่ยวได้',
        ],
        [
          'Constant notifications are a double-edged sword—having said that, quiet mode helps.',
          'การแจ้งเตือนตลอดเวลาเป็นดาบสองคม แต่ถึงอย่างนั้นโหมดเงียบก็ช่วยได้มาก',
        ],
        [
          'On balance, moving to a four-day week appears promising, though long-term results remain to be seen.',
          'เมื่อชั่งน้ำหนักรวมแล้ว สัปดาห์ทำงานสี่วันดูมีแววดี แม้ผลระยะยาวยังคงต้องรอดูกันต่อไป',
        ],
      ],
      reading:
        'When a mid-sized studio in Bangkok tested a four-day workweek last autumn, team reactions showed why nuanced thinking beats quick hype. To some extent, giving everyone Fridays off boosted focus dramatically from Monday through Thursday. People cut small status calls in half and brought noticeably fresher creative energy into morning sprints. Having said that, the experiment proved a double-edged sword for client-facing coordinators. On the flip side of deeper rest, tighter four-day windows meant urgent client tweaks felt far more intense before Thursday evening. Nobody called it pure magic or pure failure; instead, everyone weighed the trade-off honestly during a monthly review. On balance, staff retention climbed and overall client satisfaction stayed high, though whether the model works during peak holiday seasons still remains to be seen. Exploring gray areas calmly allows teams to adapt policies instead of abandoning good ideas too soon.',
      listenQ: 'What trade-off did client-facing coordinators face during the four-day workweek trial?',
      listenA: 'On the flip side of deeper rest, tighter four-day windows made urgent client tweaks feel more intense before Thursday evening.',
      dictation: 'On balance, the change seems helpful, though long-term habits remain to be seen.',
      listenNote:
        'ระวังการออกเสียง sword (/sɔːd/ ไม่ออก w) และ trade-off (/ˈtreɪd.ɒf/) พร้อมการหยุดวรรคสั้นๆ หลังคำว่า On balance,',
      drills: [
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ก้อนคำแสดงการชั่งน้ำหนักสรุปรวมทั้งหมดหลังพิจารณาทั้งข้อดีและข้อเสียแล้ว?',
          answer:
            'On balance, the hybrid policy works well despite a few scheduling trade-offs.',
          choices: [
            'To some extent, the hybrid policy is 100% perfect for everyone.',
            'On balance, the hybrid policy works well despite a few scheduling trade-offs.',
            'On the flip side, the hybrid policy means having no downsides at all.',
            'Broadly speaking, double-edged sword means purely positive.',
          ],
          explanation:
            'On balance = เมื่อชั่งน้ำหนักข้อดีข้อเสียรวมกันทั้งหมดแล้ว...',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำ 3 คำให้ครบสำนวน: Unlimited flexibility can be helpful; having _____ _____, clear boundaries prevent burnout.',
          answer: 'said that',
          explanation:
            'having said that, ... = กล่าวอย่างนั้นแล้วก็จริง แต่... (ตัวเชื่อมพลิกมุมมองที่ลื่นไหลมาก)',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้คำผิดในสำนวนชั่งน้ำหนักและดาบสองคม 2 จุด: "To some degree, fast fame is a two-edge sword, and it stays to be seen how he adapts."',
          answer:
            'To some extent, fast fame is a double-edged sword, and it remains to be seen how he adapts.',
          explanation:
            'สำนวนมาตรฐานคือ a double-edged sword และ it remains to be seen (ไม่ใช้ stays to be seen)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ฉันเห็นด้วยในระดับหนึ่งนะ แต่ในอีกด้านหนึ่งมันก็มีความเสี่ยงเหมือนกัน"',
          answer:
            'I agree to some extent, though on the flip side there is a risk too.',
          explanation: 'to some extent + on the flip side',
        },
      ],
      writing:
        'เขียนวิเคราะห์ข้อดี-ข้อเสียของหัวข้อร่วมสมัย 1 เรื่อง (เช่น การเรียนออนไลน์ การใช้ AI ในงานสร้างสรรค์ หรือการย้ายมาอยู่เมืองใหญ่) 5–6 ประโยค โดยใช้ to some extent, having said that / on the flip side, trade-off และ on balance',
      writingSample:
        "Moving from a busy city center to a quiet outer suburb improves daily life to some extent—rent drops noticeably and morning walks feel calmer. Having said that, longer travel times can become a double-edged sword for anyone attending evening workshops downtown. On the flip side, fewer unplanned errands leave extra hours for cooking and reading at home. Each household simply has to weigh that lifestyle trade-off honestly. On balance, I find suburban quiet well worth an extra train ride, though how well it fits during rainy season remains to be seen.",
      writingNote:
        'ดูการเชื่อมโยง 2 ฝั่ง: เปิดข้อดี → พลิกข้อเสียด้วย Having said that / On the flip side → สรุปภาพรวมด้วย On balance',
      speakingTopic:
        'ถกประเด็น "ดาบสองคม" ของเทคโนโลยีหรือไลฟ์สไตล์ยุคใหม่ 4 / 3 / 2 นาที',
      speakingBullets: [
        'ห้ามฟันธงฝั่งเดียว: ใช้ to some extent → having said that → on the flip side → on balance → it remains to be seen',
        'ออกเสียง sword (/sɔːd/) และ extent (/ɪkˈstent/) ให้ชัด พร้อมหยุดหายใจหลัง discourse marker ทุกตัว',
      ],
    },
    {
      day: 187,
      title: 'Constructive Peer Review & Feedback',
      objective:
        'วิจารณ์งานออกแบบ งานเขียน หรือไอเดียของผู้อื่นอย่างสร้างสรรค์ ชัดเจน และรักษาน้ำใจ (`what stands out`, `works really well`, `could benefit from`, `worth exploring`)',
      explanation:
        'เวลาตรวจงานเพื่อนร่วมงานหรือคอมเมนต์งานดีไซน์/บทความ คนไทยมักติด 2 ขั้ว: ถ้าไม่เกรงใจจนตอบแค่ *"Nice! Good job!"* (ไม่ได้ช่วยให้งานดีขึ้นเลย) ก็เขียนสั้นห้วนเกินไปว่า *"Font ugly, paragraph 2 confusing, change it."* ซึ่งทำให้คนทำเสียกำลังใจ! เจ้าของภาษาระดับ B2 ใช้ **Constructive Feedback Framework**: 1) **Specific Strength (ชมให้เจาะจงจุดที่ดีจริง):** `What really stands out is how clear the opening feels.` / `The layout works really well on mobile.` 2) **Gentle Area to Improve (ชี้จุดปรับปรุงแบบโฟกัสที่ชิ้นงาน ไม่ใช่ตัวคน):** `One area to strengthen is...` / `The transition felt a bit unclear to me.` / `This section could benefit from a real example.` 3) **Actionable Suggestion (ชวนต่อยอด):** `It might be worth exploring a warmer tone here.` / `Feel free to build on this!`',
      sound: [
        'Warm Praise Stress vs Curious Suggestion Rise',
        'stands out /stændz aʊt/ · benefit /ˈben.ɪ.fɪt/ · strengthen /ˈstreŋ.θən/ · exploring /ɪkˈsplɔː.rɪŋ/',
        'ออกเสียงคำว่า strengthen (/ˈstreŋ.θən/) ให้ชัดทั้ง /ŋ/ และ /θ/! เวลาชมจุดเด่น ให้เน้นเสียงขึ้นอบอุ่นที่ "What really STANDS OUT is..." แต่เวลาเสนอแนะให้ใช้น้ำเสียงนุ่มนวลแบบชวนคิด "It could BEnefit from..." หรือ "Maybe worth exPLORing..."',
        'พูด 3 ขั้นต่อเนื่องให้โทนฟังดูเป็นโค้ชที่เป็นมิตร: What stands out is... · One area to strengthen is... · It might be worth exploring...',
      ],
      l1: [
        'ให้ฟีดแบ็กสั้นเกินจริงเช่น "Bad color! Wrong order! Fix all!" หรือไม่กล้าติอะไรเลยจนพูดแค่ "Everything good, up to you"',
        'เกรงใจกลัวเพื่อนเสียหน้า เลยไม่กล้าบอกจุดอ่อน หรือพอจะบอกก็ขาดคำอ่อนโยนอย่าง a bit / could benefit from / worth exploring',
        'แยก "งาน" ออกจาก "คนทำ": พูดว่า "The second paragraph feels a bit dense" แทน "You wrote confusingly"',
      ],
      vocab: [
        [
          'stand out',
          'โดดเด่นสะดุดตาขึ้นมา',
          '/stænd aʊt/',
          'what really stands out is',
          'จุดที่โดดเด่นชัดเจนมากคือ...',
        ],
        [
          'strengthen',
          'เสริมให้แข็งแรง/ดียิ่งขึ้น',
          '/ˈstreŋ.θən/',
          'one area to strengthen',
          'จุดหนึ่งที่สามารถเสริมให้ดีขึ้นได้คือ',
        ],
        [
          'benefit from',
          'จะได้ประโยชน์มากหากเพิ่มเติม...',
          '/ˈben.ɪ.fɪt frəm/',
          'could benefit from an example',
          'น่าจะได้ประโยชน์มากถ้ามีตัวอย่างประกอบ',
        ],
        [
          'worth exploring',
          'น่าลองศึกษาหรือปรับดูเพิ่มเติม',
          '/wɜːθ ɪkˈsplɔː.rɪŋ/',
          'worth exploring another title',
          'น่าลองปรับชื่อเรื่องดูอีกแบบ',
        ],
        [
          'a bit unclear',
          'ยังไม่ค่อยชัดเจนนักเล็กน้อย',
          '/ə bɪt ʌnˈklɪər/',
          'felt a bit unclear at first',
          'ตอนอ่านครั้งแรกแอบไม่ค่อยชัดนิดหน่อย',
        ],
        [
          'build on',
          'ต่อยอดจากสิ่งที่มีอยู่เดิม',
          '/bɪld ɒn/',
          'build on this strong draft',
          'ต่อยอดจากฉบับร่างที่ดีนี้อีกขั้น',
        ],
        [
          'flow',
          'ความลื่นไหลของเนื้อหาหรือลำดับ',
          '/fləʊ/',
          'improve the overall flow',
          'ช่วยให้การลำดับเรื่องลื่นไหลขึ้น',
        ],
      ],
      examples: [
        [
          'What really stands out in your presentation is the simple visual timeline.',
          'จุดที่โดดเด่นมากในงานนำเสนอของคุณคือเส้นเวลาแบบภาพที่ดูเข้าใจง่าย',
        ],
        [
          'The intro works really well, though the pricing table felt a bit unclear at first.',
          'เกริ่นนำทำได้ดีมากเลย เพียงแต่ตารางราคาตอนดูครั้งแรกแอบงงนิดหน่อย',
        ],
        [
          'One area to strengthen is the closing paragraph—it could benefit from a brief summary.',
          'จุดหนึ่งที่เสริมให้ปังขึ้นได้คือย่อหน้าปิด น่าจะดีขึ้นมากถ้ามีสรุปสั้นๆ ทิ้งท้าย',
        ],
        [
          'It might be worth exploring a shorter headline so mobile readers scan it faster.',
          'น่าลองปรับพาดหัวให้สั้นลงอีกนิด เพื่อให้คนอ่านบนมือถือกวาดสายตาได้เร็วขึ้น',
        ],
      ],
      reading:
        'Two junior designers, Beam and Sarah, sat beside a sunlit café window reviewing onboarding screens for a local language app. Earlier in her career, Sarah used to receive blunt comments like "Text boring, change icon," which always deflated her motivation. Now, she and Beam practiced constructive peer review instead. Beam started by naming a concrete strength: "What really stands out here is how calm the color palette feels—the welcome screen works really well on smaller phones." Seeing Sarah relax, Beam shifted naturally to helpful improvements without attacking her effort. "One area to strengthen might be the third step," he noted gently. "The button label felt a bit unclear at first, so it could benefit from an action verb like Start Practice." Sarah smiled and jotted down the note immediately. Next, she looked at Beam’s audio player layout and suggested, "I love the clean timer—it might also be worth exploring a slower playback toggle right beside it." Honest, respectful critique helps good drafts become great products.',
      listenQ: 'What gentle suggestion did Beam give to strengthen the third onboarding step?',
      listenA: 'He said the button label felt a bit unclear at first and could benefit from an action verb like "Start Practice."',
      dictation: 'What really stands out is how smooth the overall flow feels.',
      listenNote:
        'สังเกตเสียง /ŋ/ + /θ/ ในคำว่า strengthen (/ˈstreŋ.θən/) และการเชื่อมเสียง stands_out และ could_benefit_from',
      drills: [
        {
          kind: 'choice',
          prompt:
            'เพื่อนส่งบทความฉบับร่างมาให้ช่วยตรวจ คุณพบว่าช่วงเปิดเรื่องดีมาก แต่ย่อหน้ากลางยืดเยื้อ ควรให้ความเห็นอย่างไร?',
          answer:
            'The opening works really well! One area to strengthen is the middle section—it could benefit from shorter paragraphs.',
          choices: [
            'Good start, then middle super boring and messy. Rewrite!',
            'Nice article! Nothing wrong at all! (แม้จะอ่านยากมาก)',
            'The opening works really well! One area to strengthen is the middle section—it could benefit from shorter paragraphs.',
            'You wrote too long in the middle, why did you do that?',
          ],
          explanation:
            'ชมเฉพาะจุดที่ทำได้ดี (works really well) + ชี้จุดพัฒนาด้วยภาษาไม่ตัดสิน (One area to strengthen... could benefit from...)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบวลี: Before finalizing the poster, it might be worth _____ a slightly larger font for seniors.',
          answer: 'exploring',
          explanation: 'worth + V-ing เสมอ (worth exploring = น่าลองสำรวจ/พิจารณาดู)',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้แกรมมาร์ผิดหลัง worth และลดโทนตัดสินแรงในคอมเมนต์งาน: "Your chart is totally bad! It is worth to change all colors."',
          answer:
            'One area to strengthen is the chart contrast—it might be worth exploring clearer colors.',
          explanation:
            '1) หลัง worth ใช้ V-ing (exploring/changing) ห้ามใช้ to + V1 2) เปลี่ยนคำตัดสินว่า totally bad เป็น One area to strengthen',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "จุดที่โดดเด่นมากคือตัวอย่างจริง และช่วงสรุปน่าจะได้ประโยชน์ถ้าเพิ่มคำถามชวนคิด"',
          answer:
            'What really stands out is the real example, and the ending could benefit from a thoughtful question.',
          explanation: 'What really stands out + could benefit from',
        },
      ],
      writing:
        'เขียนคอมเมนต์ฟีดแบ็กงานของเพื่อน 5–6 ประโยค (เช่น สไลด์นำเสนอ 1 ชุด, หน้าเว็บ, วิดีโอสั้น, หรือสูตรอาหารที่เพื่อนทำ) โดยใส่ครบ 3 ขั้น: จุดเด่น (What stands out / works well) → จุดที่ปรับเพิ่มได้ (One area to strengthen / a bit unclear) → ข้อเสนอแนะต่อยอด (could benefit from / worth exploring)',
      writingSample:
        "Thanks for sharing your travel video draft! What really stands out is the calm background music and crisp street-food shots—the opening thirty seconds work really well to pull viewers in. One area to strengthen is the audio balance during the market interview, where voices felt a bit unclear over traffic noise. That clip could benefit from quick bilingual subtitles so nobody misses the vendor's story. It might also be worth exploring a shorter two-minute cut for social feeds—excited to see how you build on this!",
      writingNote:
        'เช็กไวยากรณ์สำคัญ: worth + V-ing (เช่น worth exploring) · could benefit from + noun · เน้นพูดถึง "ตัวงาน" ไม่โจมตีตัวบุคคล',
      speakingTopic:
        'สวมบทบาทโค้ชหรือเพื่อนร่วมทีมให้ฟีดแบ็กผลงานอย่างสร้างสรรค์ 4 / 3 / 2 นาที',
      speakingBullets: [
        'พูดเรียง 3 ขั้นให้เป็นธรรมชาติ: ชมจุดเด่นให้ชัด → ชี้ 1–2 จุดที่พัฒนาได้ → แนะนำแนวทางต่อยอด',
        'ฝึกออกเสียง strengthen (/ˈstreŋ.θən/) และ stands out ให้ชัดเจน',
      ],
    },
    {
      day: 188,
      title: 'Navigating Difficult Conversations Calmly in Relationships & Work',
      objective:
        'พูดคุยเรื่องละเอียดอ่อนหรือแก้ไขความขัดแย้งอย่างสงบด้วย "I-Statements" (`from my perspective`, `I feel that`, `clear the air`, `find common ground`, `avoid jumping to conclusions`)',
      explanation:
        'เวลาไม่สบายใจกับเพื่อน คนรัก หรือเพื่อนร่วมงาน หลายคนหลีกเลี่ยงปัญหาจนสะสมระเบิด หรือไม่ก็เผลอใช้ **"You-Statements"** ที่ฟังเหมือนขึ้นศาล: ❌ *"You always leave the cleanup to me!"* / *"You never listen!"* วิธีคุยเรื่องยากให้แก้ปัญหาได้จริงโดยไม่ทำลายความสัมพันธ์คือใช้ **"I-Statements"**: 1) **`From my perspective...`** (จากมุมมองที่ฉันเจอ...) 2) **`I feel overwhelmed when...`** (ฉันรู้สึกเหนื่อย/กดดันเวลาที่...) แทนการชี้นิ้ว 3) **`Let\'s clear the air`** (เรามาเปิดอกคุยให้สบายใจกันเถอะ) 4) **`avoid jumping to conclusions`** (อย่าเพิ่งด่วนสรุปไปเอง) 5) **`not take it personally`** (แยกเรื่องงาน/พฤติกรรมออกจากคุณค่าส่วนตัว) 6) **`find common ground`** (หาจุดที่ทั้งคู่ตกลงกันได้เพื่อเดินหน้าต่อ)',
      sound: [
        'Steady Unhurried Pace & Neutral Pitch',
        'perspective /pəˈspek.tɪv/ · personally /ˈpɜː.sən.ə.li/ · conclusions /kənˈkluː.ʒənz/ · ground /ɡraʊnd/',
        'เวลาคุยเรื่องอ่อนไหว ให้ลดความเร็วลงและลด pitch ไม่ให้เสียงแหลมสูงเหมือนประชด: "From_my_perSPEC-tive, /" · "Let us clear_the_AIR." · "Let us find_common_GROUND." การลงเสียงหนักเบาแบบนุ่มนวลช่วยให้คู่สนทนาไม่ตั้งการ์ดป้องกันตัว',
        'พูดประโยค I-statement 3 ประโยคด้วยโทนเสียงราบเรียบแต่จริงใจ',
      ],
      l1: [
        'เวลาโกรธหรือน้อยใจ เผลอพูดประโยคตำหนิเหมารวม: "Why do you always forget?", "You never care about my time!"',
        'การขึ้นต้นด้วย "You always / You never" กระตุ้นให้อีกฝ่ายหันมาโต้เถียงปกป้องตัวเองทันที แทนที่จะฟังปัญหา',
        'เปลี่ยนหัวประโยคจาก "You always..." เป็น "From my perspective, when X happens, I feel..." แล้วถามหาทางออกร่วมกัน',
      ],
      vocab: [
        [
          'clear the air',
          'เปิดอกคุยกันให้หายคาใจ',
          '/klɪər ði ˈeər/',
          'clear the air calmly',
          'คุยเปิดอกให้หายขุ่นข้องใจอย่างสงบ',
        ],
        [
          'perspective',
          'มุมมองจากฝั่งของตนเอง',
          '/pəˈspek.tɪv/',
          'from my perspective',
          'ในมุมมองของฉัน / จากฝั่งที่ฉันเจอ',
        ],
        [
          'common ground',
          'จุดร่วมที่ทั้งสองฝ่ายเห็นพ้องกัน',
          '/ˈkɒm.ən ɡraʊnd/',
          'find common ground',
          'หาจุดกึ่งกลางที่ยอมรับร่วมกันได้',
        ],
        [
          'jump to conclusions',
          'ด่วนตัดสินสรุปเองก่อนรู้ความจริง',
          '/dʒʌmp tə kənˈkluː.ʒənz/',
          'avoid jumping to conclusions',
          'หลีกเลี่ยงการด่วนสรุปไปเอง',
        ],
        [
          'take personally',
          'เก็บมาคิดว่าเป็นเรื่องโจมตีส่วนตัว',
          '/teɪk ˈpɜː.sən.ə.li/',
          'try not to take it personally',
          'พยายามไม่เก็บมาคิดน้อยใจเป็นเรื่องส่วนตัว',
        ],
        [
          'move forward',
          'ก้าวต่อไปข้างหน้า / หาทางออกร่วมกัน',
          '/muːv ˈfɔː.wəd/',
          'agree on how to move forward',
          'ตกลงวิธีเดินหน้าต่อร่วมกัน',
        ],
        [
          'misunderstanding',
          'ความเข้าใจคลาดเคลื่อน',
          '/ˌmɪs.ʌn.dəˈstæn.dɪŋ/',
          'resolve a small misunderstanding',
          'คลี่คลายความเข้าใจผิดเล็กๆ',
        ],
      ],
      examples: [
        [
          'Before tension grows, let us grab tea and clear the air calmly.',
          'ก่อนที่ความอึดอัดจะบานปลาย เรามาดื่มชาคุยเปิดอกให้สบายใจกันเถอะ',
        ],
        [
          'From my perspective, I feel stretched when weekend plans change at the last minute.',
          'จากมุมของฉัน ฉันแอบรู้สึกตึงเวลาที่แผนวันหยุดเปลี่ยนกะทันหันนาทีสุดท้าย',
        ],
        [
          'Let us pause and ask directly instead of jumping to conclusions.',
          'เราหยุดแล้วถามกันตรงๆ ดีกว่าด่วนคิดสรุปไปเองนะ',
        ],
        [
          'Once both sides listened without taking feedback personally, finding common ground became easy.',
          'พอทั้งสองฝ่ายรับฟังโดยไม่เก็บไปน้อยใจส่วนตัว การหาจุดลงตัวร่วมกันก็ง่ายขึ้นเยอะ',
        ],
      ],
      reading:
        'When close friends Gun and Mai shared a weekend flea-market booth, hidden stress nearly strained their friendship. Gun cared deeply about neat pricing tags, while Mai stayed up late baking cookies and slept through Saturday morning setup. By noon, Gun felt exhausted and nearly snapped, "You never show up on time!" Catching himself before speaking in anger, Gun suggested a quiet break behind the stalls once the lunch rush slowed. "Hey, I want to clear the air calmly before we get resentful," he began. Instead of accusing Mai, he used calm I-statements: "From my perspective, I felt really overwhelmed carrying the heavy tables alone at seven." Mai looked surprised—she had assumed Gun preferred setting up early and had stayed up baking extra trays to help boost their booth! Realizing they had both jumped to conclusions, neither took the misunderstanding personally. Within ten minutes, they found common ground: Mai handled afternoon sales and cash cleanup while Gun took morning setup. Honest, calm dialogue protected both their booth and their bond.',
      listenQ: 'Why had Mai stayed up late instead of arriving at seven for booth setup?',
      listenA: 'She had assumed Gun preferred setting up early and stayed up baking extra trays of cookies to help boost their booth.',
      dictation: 'From my perspective, let us clear the air and find common ground.',
      listenNote:
        'สังเกตการเชื่อมคำ "clear_the_air" (/klɪər ði ˈeər/ สระ /ði/ หน้าเสียงสระ) และคำว่า perspective /pəˈspek.tɪv/',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'เปลี่ยนคำกล่าวโทษแบบ You-statement ให้เป็น I-statement ที่นุ่มนวลและชวนแก้ปัญหา: "You always leave me alone with all the kitchen mess!"',
          answer:
            'From my perspective, I feel overwhelmed when the kitchen cleanup piles up on one person.',
          explanation:
            'ใช้ From my perspective + I feel + สถานการณ์แทนการชี้หน้าว่า You always...',
        },
        {
          kind: 'choice',
          prompt:
            'เพื่อนเงียบไปสองวันหลังคุยงานกัน คุณไม่อยากตีความไปเองในแง่ร้าย ควรเตือนตัวเองหรือพูดอย่างไร?',
          answer:
            "I don't want to jump to conclusions, so let me check in gently and clear the air.",
          choices: [
            "She obviously hates me now; I'll take it personally and stop talking.",
            "I don't want to jump to conclusions, so let me check in gently and clear the air.",
            'Why do you always ignore messages when things get hard?',
            'You never reply on time, which shows zero respect.',
          ],
          explanation:
            'avoid jumping to conclusions + clear the air ช่วยรักษาความสัมพันธ์และเปิดโอกาสให้ฟังความจริง',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำ 2 คำให้ครบก้อนคำ: Despite different work habits, the roommates sat down to find _____ _____ on quiet evening hours.',
          answer: 'common ground',
          explanation: 'find common ground = หาจุดร่วมหรือข้อตกลงที่ทั้งสองฝ่ายรับได้',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "อย่าเก็บไปคิดเป็นเรื่องส่วนตัวเลย เรามาหาทางเดินหน้าต่อด้วยกันเถอะ"',
          answer:
            "Try not to take it personally—let's agree on how to move forward together.",
          explanation: 'take it personally + agree on how to move forward',
        },
      ],
      writing:
        'เขียนข้อความหรือบทพูดเพื่อคลี่คลายเรื่องอึดอัดใจเล็กๆ 5–6 ประโยค (เช่น รูมเมทเสียงดังตอนดึก หรือเพื่อนร่วมกลุ่มส่งงานช้า) โดยใช้ clear the air, from my perspective, I feel..., avoid jumping to conclusions, และ find common ground',
      writingSample:
        "Hey Mint, hope your week is going okay. I wanted to reach out and clear the air calmly before tomorrow's group presentation. I didn't want to jump to conclusions when the slide edits came in late last night, and I definitely don't want anyone to take this personally. From my perspective, I felt pretty stressed practicing our part only an hour before bed. Could we find common ground on a midnight cutoff for final changes moving forward?",
      writingNote:
        'เช็กดูว่าไม่มีประโยคขึ้นต้นด้วย "You always / You never" และมีการชวนหาทางออกร่วมกันในตอนท้าย',
      speakingTopic:
        'ฝึกพูดเปิดอกคุยเรื่องยากในงานหรือความสัมพันธ์อย่างสงบ 4 / 3 / 2 นาที',
      speakingBullets: [
        'ใช้สูตร: ขอเปิดอกคุยอย่างใจเย็น (clear the air) → เล่าความรู้สึกผ่านมุมของตัวเอง (From my perspective, I feel...) → ชวนหาจุดร่วม (find common ground / move forward)',
        'ควบคุมน้ำเสียงให้ช้า ต่ำ มั่นคง ไม่เร่งร้อนเหมือนกำลังโต้เถียง',
      ],
    },
    {
      day: 189,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 27 — Hedging & Tactful Persuasion + Dictogloss',
      objective:
        'สังเคราะห์ทักษะ Hedging, การเห็นต่างอย่างสุภาพ, การปฏิเสธแบบมีทางออก, การชั่งน้ำหนัก pros/cons, การให้ฟีดแบ็กสร้างสรรค์ และการคุยเรื่องยากผ่าน Dictogloss',
      explanation:
        'ในสัปดาห์ที่ 27 คุณได้เรียนรู้ **"ความแข็งแรงที่นุ่มนวล" (Diplomatic Strength)** ของภาษาอังกฤษระดับ B2: 1) **Hedging** (`tend to`, `appear to`, `is likely to`, `in most cases`, `broadly speaking`), 2) **เห็นต่างอย่างให้เกียรติ** (`I see where you\'re coming from, though...`, `have we considered...`), 3) **ปฏิเสธอย่างสร้างสรรค์** (`my bandwidth is stretched`, `carry a risk`, `meet halfway`), 4) **ชั่งน้ำหนักรอบด้าน** (`to some extent`, `having said that`, `on the flip side`, `on balance`), 5) **ฟีดแบ็กเชิงสร้างสรรค์** (`what stands out`, `could benefit from`, `worth exploring`), และ 6) **คลี่คลายความขัดแย้ง** (`clear the air`, `from my perspective`, `find common ground`). วันนี้มารวมทุกกลยุทธ์ในบทอ่านและการฝึก Dictogloss!',
      sound: [
        'Diplomatic Intonation & Hedging Flow Audit',
        'bandwidth /ˈbænd.wɪdθ/ · strengthen /ˈstreŋ.θən/ · perspective /pəˈspek.tɪv/ · balance /ˈbæl.əns/',
        'ทำ Shadowing บทอ่านประจำวัน 3 รอบ โดยเน้นเสียงนุ่มนวลที่ช่วง Acknowledge (เช่น "You raise a valid point") และเว้นจังหวะสั้นๆ รอบ though / having said that / on balance',
        'ทวนออกเสียง 4 คำปราบเซียนประจำสัปดาห์: bandwidth · strengthen · necessarily · sword (/sɔːd/)',
      ],
      l1: [
        'เวลาพูดสดโดยไม่ทันตั้งตัว มักหลุดกลับไปสุดโต่ง 2 ทาง: ไม่พูด "No, wrong!" / "Always!" ก็เกรงใจจนตอบ "Yes, ok" ไปหมดทุกอย่าง',
        'สมองยังไม่ชินกับชุดเปิดประโยคนุ่มๆ อย่าง I see where you are coming from หรือ From my perspective',
        'จำ "3 วลีกันชน" ติดปากไว้ก่อน: 1) In most cases... 2) I see where you are coming from, though... 3) Realistically speaking, what if we...?',
      ],
      vocab: [
        [
          'tend to',
          'มักจะ / มีแนวโน้มที่จะ',
          '/ˈtend tə/',
          'tend to run late',
          'มักจะยืดเยื้อเกินเวลา',
        ],
        [
          'coming from',
          'มุมมอง/จุดยืนของอีกฝ่าย',
          '/ˈkʌm.ɪŋ frəm/',
          "see where you're coming from",
          'เข้าใจมุมมองของอีกฝ่าย',
        ],
        [
          'bandwidth',
          'กำลังเวลา/ความจุในการรับงาน',
          '/ˈbænd.wɪdθ/',
          'bandwidth is stretched',
          'เวลากับกำลังรับงานตึงตัวมาก',
        ],
        [
          'having said that',
          'ถึงกระนั้นก็ตาม / แต่อีกมุมหนึ่ง',
          '/ˈhæv.ɪŋ sed ðæt/',
          'having said that, we need rest',
          'ถึงอย่างนั้น พวกเราก็ต้องการเวลาพัก',
        ],
        [
          'benefit from',
          'จะได้ประโยชน์มากหากเสริม...',
          '/ˈben.ɪ.fɪt frəm/',
          'could benefit from clear labels',
          'น่าจะได้ประโยชน์มากถ้ามีป้ายชัดเจน',
        ],
        [
          'common ground',
          'จุดร่วมที่ตกลงกันได้',
          '/ˈkɒm.ən ɡraʊnd/',
          'reach common ground quickly',
          'หาจุดร่วมกันได้เร็ว',
        ],
        [
          'on balance',
          'เมื่อชั่งน้ำหนักทั้งหมดแล้ว',
          '/ɒn ˈbæl.əns/',
          'on balance, the trial succeeded',
          'โดยรวมแล้ว การทดลองนี้ประสบความสำเร็จ',
        ],
      ],
      examples: [
        [
          'Late-night shifts tend to wear volunteers down faster than anyone expects.',
          'กะทำงานดึกมักทำให้อาสาสมัครล้าเร็วกว่าที่ใครๆ คาดคิดไว้',
        ],
        [
          'Community events often benefit from clear signs and warm volunteer briefings.',
          'กิจกรรมชุมชนมักได้ประโยชน์มากจากป้ายบอกทางที่ชัดและการบรีฟอาสาสมัครที่อบอุ่น',
        ],
        [
          'I see where you are coming from, though adding midnight hours might carry a fatigue risk.',
          'ฉันเข้าใจมุมมองของคุณนะ เพียงแต่การเปิดถึงเที่ยงคืนอาจเสี่ยงต่อความเหนื่อยล้าได้',
        ],
        [
          'On balance, testing a two-week pilot helped everyone find common ground calmly.',
          'เมื่อชั่งน้ำหนักรวมแล้ว การลองทำนำร่องสองสัปดาห์ช่วยให้ทุกคนหาจุดร่วมได้อย่างใจเย็น',
        ],
      ],
      reading:
        'At a monthly co-op bookstore meeting, members debated whether to stay open until midnight on weekends. At first, two younger hosts argued eagerly that late hours would double book sales. Rather than rejecting the dream with a flat "No," co-founder Lek acknowledged their excitement first. "What really stands out is how much energy you want to bring to our reading lounge," she said warmly. "I see where you are coming from, though broadly speaking, late transit options in this lane tend to slow down after ten." Still, another member noted that quiet night owls often buy tea and poetry—to some extent, midnight browsing held real charm. Having said that, Lek pointed out that staff bandwidth was already stretched on Sunday mornings, so rushing into permanent midnight shifts might carry a risk to service quality. To clear the air and avoid jumping to conclusions, everyone weighed the trade-off calmly. On balance, they found common ground: a one-month Friday-only trial until eleven, which could benefit from extra acoustic curtains. Whether midnight hours become permanent remains to be seen.',
      listenQ: 'What balanced compromise did the bookstore members agree to try?',
      listenA: 'They agreed to test a one-month Friday-only trial until eleven o’clock with extra acoustic curtains.',
      dictation: 'On balance, they found common ground through a practical one-month trial.',
      listenNote:
        'สังเกตการร้อยเรียง Hedging & Softeners ในบทอ่าน: broadly speaking, tend to, to some extent, having said that, on balance, remains to be seen',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่แข็งกระด้างและผิดไวยากรณ์ 3 จุด: "I disagree! Your idea is always terrible. It is worth to ask someone else because I am too busy."',
          answer:
            "I see where you're coming from, though my bandwidth is stretched—it might be worth exploring another option together.",
          explanation:
            '1) แทน I disagree / always terrible ด้วย I see where you’re coming from, though... 2) แทน I am too busy ด้วย my bandwidth is stretched 3) หลัง worth ใช้ V-ing (exploring)',
        },
        {
          kind: 'dictogloss',
          prompt:
            'ฟังประโยคจากบทอ่านแล้วเลือกกลุ่มคำที่ตรงกันทุกประการ: "Having said that, Lek pointed out that _____ was already stretched on Sunday mornings."',
          answer: 'staff bandwidth',
          choices: [
            'team energy',
            'staff bandwidth',
            'shop schedule',
            'store budget',
          ],
          explanation:
            'จากบทอ่าน: "Having said that, Lek pointed out that staff bandwidth was already stretched on Sunday mornings..."',
          audio_text:
            'Having said that, Lek pointed out that staff bandwidth was already stretched on Sunday mornings.',
        },
        {
          kind: 'choice',
          prompt:
            'ประโยคใดรวม Hedging + การชั่งน้ำหนักข้อดีข้อเสียได้ถูกต้องและสละสลวยที่สุด?',
          answer:
            'To some extent, shorter sprints boost speed; on the flip side, urgent reviews appear to cause fatigue.',
          choices: [
            'To some extent, shorter sprints always boost 100% speed; never causing fatigue.',
            'To some extent, shorter sprints boost speed; on the flip side, urgent reviews appear to cause fatigue.',
            'Having say that, shorter sprints are good; in the other flip, tired.',
            'Broadly speaking, shorter sprints likely boost speed; I disagree with fatigue.',
          ],
          explanation:
            'To some extent + on the flip side + appear to + V1 ใช้ถูกหลักไวยากรณ์และโทน B2 สมบูรณ์',
        },
        {
          kind: 'gap',
          prompt:
            'เติมก้อนคำ 2 คำที่ขาด: One area to _____ in the proposal is the timeline, which felt a bit unclear.',
          answer: 'strengthen',
          explanation: 'one area to strengthen = จุดหนึ่งที่เสริมให้ดียิ่งขึ้นได้',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษแบบสุภาพและมีทางออก: "ในมุมมองของฉัน การเลื่อนไปสัปดาห์หน้าช่วยลดความเสี่ยงและทำให้เราหาจุดร่วมกันได้"',
          answer:
            'From my perspective, shifting to next week lowers the risk and helps us find common ground.',
          explanation: 'From my perspective + lowers the risk + find common ground',
        },
      ],
      writing:
        'เขียนอีเมลหรือความเห็นตอบกลับสถานการณ์จำลอง (เช่น เพื่อนร่วมทีมอยากเพิ่มฟีเจอร์ใหม่ก่อนวันเปิดตัวทั้งที่เวลาไม่พอ) 6–7 ประโยค โดยใช้ทักษะทั้งสัปดาห์: ชมจุดเด่น → Hedging & เห็นต่างอย่างสุภาพ → ปฏิเสธเชิงสร้างสรรค์ → ชั่งน้ำหนักและเสนอทางเลือกพบกันครึ่งทาง',
      writingSample:
        "Thanks for pulling these fresh event ideas together—what really stands out is how engaging the evening workshop theme feels! I completely see where you're coming from about adding two extra booths before Saturday. Having said that, our volunteer bandwidth is already stretched this week, and rushing setup on the current timeline might carry a risk to guest check-in speed. Realistically speaking, the extra booths could benefit from a quieter prep window next month. On balance, what if we meet halfway by running the main workshop first and testing one mini-booth next week?",
      writingNote:
        'ตรวจความต่อเนื่องของโทน: อ่านแล้วรู้สึกเหมือนได้รับคำแนะนำจากเพื่อนร่วมงานที่เคารพกัน ไม่รู้สึกถูกสั่งหรือถูกตำหนิ',
      speakingTopic:
        'จำลองการประชุมหาทางออกร่วมกันในเรื่องที่ทีมเห็นต่างกัน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ฝึกผสมทั้ง 4 ทักษะ: Hedging (tend to / in most cases) + เห็นต่างนุ่มนวล (I see where you are coming from, though) + ปฏิเสธมีทางออก (bandwidth / meet halfway) + ชั่งน้ำหนัก (on balance)',
        'รักษาโทนเสียงอบอุ่นและจังหวะหยุดหายใจตามจุดเชื่อมทุกช่วง',
      ],
    },
  ]
);
