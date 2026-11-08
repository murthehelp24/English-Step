import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 2: เล่าเรื่อง ตอบโต้ และเชื่อมความคิดในชีวิตประจำวัน';

export const WEEK13: ModuleSeed = createModule(
  {
    week: 13,
    phase: 2,
    phase_title: PHASE_TITLE,
    cefr_level: 'A2 → B1',
    title: 'การเปรียบเทียบขั้นกว่า-สุด & ตัวขยายความที่ทำให้ภาษาฟังโปร',
    summary:
      'ใช้ Comparatives, Superlatives, as...as, ตัวปรับน้ำหนัก (far/a bit/much), too/enough และ so/such เปรียบเทียบตัวเลือกจริงในชีวิตและงาน',
    focus: 'Comparatives, Superlatives, as...as, too/enough, so/such',
  },
  [
    {
      day: 85,
      title: 'Comparatives ขั้นกว่า (-er / more & ข้อยกเว้น better, worse, farther)',
      objective:
        'เปรียบเทียบสองสิ่งด้วย -er / more และรูปยกเว้นอย่างถูกต้องโดยไม่ซ้อน more หน้า -er หรือ better',
      explanation:
        'เวลาจะบอกว่าสิ่งหนึ่ง "...กว่า" อีกสิ่งหนึ่ง กฎหลักแบ่งตามความยาวเสียงพยางค์: คำสั้น 1 พยางค์ (หรือ 2 พยางค์ลงท้าย `-y`) ให้เติม **`-er`** แล้วตามด้วย **`than`** เช่น `faster than`, `cheaper than`, `busier than` (เปลี่ยน `y` เป็น `i` แล้วเติม `er`) ส่วนคำยาว 2 พยางค์ขึ้นไปให้ใช้ **`more + adj + than`** เช่น `more convenient than`, `more reliable than` ที่สำคัญมากคือ **ข้อยกเว้นเปลี่ยนรูป**: `good → better`, `bad → worse`, `far → farther/further` ข้อผิดพลาดอันดับหนึ่งของคนไทยคือพูดว่า ❌ *"more better"* หรือ ❌ *"more cheaper"* เพราะคิดถึงคำว่า "กว่า = more" แล้วเผลอใส่ซ้ำทั้งสองอย่าง!',
      sound: [
        'Unstressed -er Ending & Weak "than"',
        'faster /ˈfɑː.stər/ · cheaper /ˈtʃiː.pər/ · better /ˈbet.ər/ · worse /wɜːs/',
        'คำว่า `than` ในประโยคพูดจริงจะลดรูปเป็น `/ðən/` เบาๆ แล้วเชื่อมเข้าคำหลัง: "cheaper than driving" → `/ˈtʃiːpə ðən ˈdraɪvɪŋ/`',
        'ออกเสียงคู่เปรียบเทียบ 5 คู่โดยกดเสียงพยางค์หน้าและปล่อย `-er than` เบาและเร็ว: FAST-er than, CHEAP-er than, BET-ter than, WORSE than, MORE con-VE-nient than',
      ],
      l1: [
        'พูดซ้อนรูปเปรียบเทียบ เช่น "The train is more cheaper than a taxi" หรือ "Your idea is more better."',
        'ในภาษาไทยคำว่า "กว่า" เป็นคำเดี่ยววางหลังคำคุณศัพท์ทุกคำ ผู้เรียนจึงเผลอเอา "more" มาแทนคำว่า "กว่า" แล้วใส่ซ้ำหน้าคำที่ผัน -er หรือ better แล้ว',
        'เช็ก 1 วินาทีก่อนพูด: ถ้าท้ายคำมี -er หรือเป็น better/worse แล้ว ห้ามใส่ more นำหน้าเด็ดขาด!',
      ],
      vocab: [
        ['commute', 'เดินทางไป-กลับทำงาน', '/kəˈmjuːt/', 'daily commute', 'การเดินทางไปทำงานประจำวัน'],
        ['convenient', 'สะดวกสบาย', '/kənˈviː.ni.ənt/', 'more convenient than', 'สะดวกสบายกว่า'],
        ['crowded', 'แออัด / คนแน่น', '/ˈkraʊ.dɪd/', 'less crowded', 'แออัดน้อยกว่า'],
        ['affordable', 'ราคาจับต้องได้', '/əˈfɔː.də.bəl/', 'affordable option', 'ตัวเลือกที่ราคาสบายกระเป๋า'],
        ['reliable', 'น่าเชื่อถือ / ไว้ใจได้', '/rɪˈlaɪ.ə.bəl/', 'reliable service', 'บริการที่ไว้ใจได้'],
        ['farther', 'ไกลกว่า (ระยะทาง)', '/ˈfɑː.ðər/', 'farther from downtown', 'ไกลจากใจกลางเมืองกว่า'],
        ['efficient', 'มีประสิทธิภาพ / ประหยัดเวลา', '/ɪˈfɪʃ.ənt/', 'time-efficient route', 'เส้นทางที่ประหยัดเวลา'],
      ],
      examples: [
        ['Taking the skytrain is faster than driving during rush hour.', 'การขึ้นรถไฟฟ้าเร็วกว่าการขับรถในช่วงชั่วโมงเร่งด่วน'],
        ['The morning bus is cheaper than a ride-hailing car.', 'รถเมล์รอบเช้าถูกกว่าการเรียกรถผ่านแอป'],
        ['Her new apartment is farther from the office, yet it is quieter.', 'อพาร์ตเมนต์ใหม่ของเธออยู่ไกลจากออฟฟิศกว่าเดิม แต่เงียบสงบกว่า'],
        ['Working from a quiet café gave me better focus than staying at home.', 'การทำงานจากร้านกาแฟเงียบๆ ช่วยให้ฉันมีสมาธิดีกว่าอยู่บ้าน'],
      ],
      reading:
        'Last month, Namo changed how she handles her daily commute in Bangkok. Previously, she drove her small car to work every morning, even though traffic moved slowly and parking fees kept rising. Then a coworker suggested testing the skytrain for one week. To her surprise, the train was faster, more reliable, and more affordable than driving alone. Although the station is slightly farther from her apartment than her old parking spot, the morning walk gives her fresh energy. On rainy days, the platform gets more crowded than usual, so she leaves fifteen minutes earlier. Overall, her new routine feels healthier and calmer, and her afternoons are better because she arrives home without stress.',
      listenQ: 'Why does Namo leave fifteen minutes earlier on rainy days?',
      listenA: 'Because the platform gets more crowded than usual.',
      dictation: 'The skytrain is faster and more reliable than driving.',
      listenNote:
        'ฟังเสียง `-er` ท้าย `faster` เชื่อมคำว่า `and` แบบลดเสียงเป็น /ən/ และ `than` อ่านเบาๆ ว่า /ðən/',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ใส่ตัวเปรียบเทียบซ้ำซ้อนผิดหลัก: "This local restaurant is more cheaper and more better than the place downtown."',
          answer:
            'This local restaurant is cheaper and better than the place downtown.',
          explanation:
            'cheap เป็นคำสั้นใช้ cheaper (ห้าม more cheaper) และ good เปลี่ยนรูปเป็น better (ห้าม more better)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้รูปขั้นกว่าของคำคุณศัพท์หลายพยางค์และคำยกเว้นได้ถูกต้อง 100%?',
          answer: 'The blue jacket looks more practical, even though the grey one feels softer.',
          choices: [
            'The blue jacket looks practicaler, even though the grey one feels more soft.',
            'The blue jacket looks more practical, even though the grey one feels softer.',
            'The blue jacket looks most practical than the grey one.',
            'The blue jacket looks more practicaler than the grey one.',
          ],
          explanation:
            'practical มี 3 พยางค์จึงใช้ more practical ส่วน soft มี 1 พยางค์จึงเติม -er เป็น softer',
        },
        {
          kind: 'gap',
          prompt: 'เติมรูปขั้นกว่าของ bad ให้ตรงความหมาย: Yesterday’s traffic was _____ than last Friday’s.',
          answer: 'worse',
          explanation: 'รูปขั้นกว่าของ bad คือ worse (ห้ามพูดว่า badder หรือ more bad)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "รถไฟสะดวกกว่าและเร็วกว่าการขับรถ"',
          answer: 'The train is more convenient and faster than driving.',
          explanation:
            'convenient (3 พยางค์) ใช้ more convenient + fast (1 พยางค์) ใช้ faster + than driving',
        },
      ],
      writing:
        'เปรียบเทียบตัวเลือก 2 อย่างในชีวิตจริงของคุณ (เช่น การเดินทาง 2 วิธี ร้านอาหาร 2 ร้าน หรือการทำงานที่บ้าน vs ออฟฟิศ) จำนวน 4–5 ประโยค โดยใช้ทั้งรูป `-er`, `more + adj` และ `better/worse`',
      writingSample:
        'In my daily life, riding the train is better than driving my car into town. First, the train is faster and more predictable during evening traffic. Although a car feels more comfortable when I carry heavy bags, parking downtown is much worse and more expensive. Overall, taking the train makes my weekday routine calmer and more affordable.',
      writingNote:
        'เช็กทุกประโยคเปรียบเทียบว่าไม่เผลอใส่ more หน้า -er หรือหน้า better/worse และไม่ลืมคำว่า than เมื่อมีคู่เทียบ',
      speakingTopic:
        'เปรียบเทียบทางเลือก 2 แบบในชีวิตประจำวัน "Which option fits my week better?" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกเปรียบเทียบระหว่าง 2 สิ่งจริง เช่น อยู่คอนโด vs บ้านชานเมือง หรือทำอาหารเอง vs สั่งเดลิเวอรี',
        'ใช้คำเปรียบเทียบหลากหลาย: faster than, more affordable than, quieter, better, worse',
        'ตั้งใจลดเสียง than ให้เบาเป็น /ðən/ เพื่อไม่ให้ฟังแข็งเป็นคำๆ',
      ],
    },
    {
      day: 86,
      title: 'Superlatives ขั้นสุด (the -est / the most & one of the + plural)',
      objective:
        'บอกความเป็นที่สุดด้วย the -est / the most และใช้โครงสร้าง one of the + ขั้นสุด + นามพหูพจน์โดยไม่ลืม -s',
      explanation:
        'เมื่อเปรียบเทียบตั้งแต่ 3 สิ่งขึ้นไปเพื่อชี้จุด **"ที่สุด"** เราใช้ขั้นสุด (Superlative) ซึ่งต้องมี **`the`** นำหน้าเสมอ: คำสั้นเติม **`the ...-est`** (`the tallest`, `the easiest`) คำยาวใช้ **`the most + adj`** (`the most relaxing`, `the most helpful`) และคำยกเว้นคือ **`the best`**, **`the worst`**, **`the farthest/furthest`**\n\nโครงสร้างระดับ B1 ที่เจ้าของภาษาใช้บ่อยมากเวลาแนะนำของดีคือ **`one of the + superlative + plural noun`** (หนึ่งใน...ที่สุด) เช่น `This is one of the best cafés in Chiang Mai.` สังเกตคำว่า **`cafés` ต้องเติม `-s` เสมอ!** เพราะพูดถึง "หนึ่งในหลายๆ ร้านที่ดีที่สุด" ไม่ใช่ร้านเดียว',
      sound: [
        'Superlative -est /ɪst/ & Plural -s Linking',
        'best /best/ · nicest /ˈnaɪ.sɪst/ · busiest /ˈbɪz.i.ɪst/ · one of the /wʌn əv ðə/',
        '"one of the best restaurants" พูดเร็วเป็น `/ˈwʌn əv ðə ˈbest ˈrest.rɒnts/` อย่าลืมเสียง /s/ ท้ายนามพหูพจน์!',
        'ฝึกพูดชุดคำขั้นสุด 4 ชุดให้ชัด: the BEST spot, the MOST comfortable chair, one of the NICEST parks, the BUSIEST street',
      ],
      l1: [
        'ลืมเติม -s ท้ายคำนามในโครงสร้าง "one of the best restaurant in town" หรือลืมคำว่า "the" หน้าขั้นสุด ("She is smartest in class.")',
        'ภาษาไทยพูดว่า "หนึ่งในร้านอาหารที่ดีที่สุด" โดยคำว่า "ร้านอาหาร" ไม่มีรูปพหูพจน์ ทำให้ลืมเติม -s ในภาษาอังกฤษแทบทุกครั้ง',
        'จำสูตรเป็นก้อนเดียว: "one of the + ขั้นสุด + นามพหูพจน์ (-s)" เช่น one of the best movies / one of the friendliest teams',
      ],
      vocab: [
        ['atmosphere', 'บรรยากาศ', '/ˈæt.məs.fɪər/', 'cozy atmosphere', 'บรรยากาศอบอุ่นเป็นกันเอง'],
        ['cozy', 'อบอุ่นสบาย', '/ˈkəʊ.zi/', 'the coziest corner', 'มุมที่อบอุ่นน่านั่งที่สุด'],
        ['memorable', 'น่าจดจำ', '/ˈmem.ər.ə.bəl/', 'the most memorable trip', 'ทริปที่น่าจดจำที่สุด'],
        ['generous', 'ใจกว้าง / ให้เยอะ', '/ˈdʒen.ər.əs/', 'generous portions', 'ปริมาณอาหารที่ให้เยอะคุ้มค่า'],
        ['popular', 'เป็นที่นิยม', '/ˈpɒp.jə.lər/', 'one of the most popular spots', 'หนึ่งในจุดที่ฮิตที่สุด'],
        ['reasonable', 'สมเหตุสมผล / ไม่แพงเกิน', '/ˈriː.zən.ə.bəl/', 'the most reasonable price', 'ราคาที่สมเหตุสมผลที่สุด'],
        ['worthwhile', 'คุ้มค่าแก่เวลา/เงิน', '/ˌwɜːθˈwaɪl/', 'worthwhile experience', 'ประสบการณ์ที่คุ้มค่า'],
      ],
      examples: [
        ['This alley hides one of the best noodle shops in Bangkok.', 'ซอยนี้ซ่อนร้านก๋วยเตี๋ยวที่อร่อยที่สุดร้านหนึ่งในกรุงเทพฯ ไว้'],
        ['Sunday morning is the quietest time to walk around the park.', 'เช้าวันอาทิตย์เป็นช่วงเวลาที่เงียบสงบที่สุดสำหรับการเดินเล่นในสวน'],
        ['That rooftop garden has the most relaxing atmosphere in our area.', 'สวนบนดาดฟ้าแห่งนั้นมีบรรยากาศที่ผ่อนคลายที่สุดในย่านของเรา'],
        ['Meeting local artisans was the most memorable part of my weekend.', 'การได้พบช่างฝีมือท้องถิ่นเป็นช่วงที่น่าจดจำที่สุดในวันหยุดของฉัน'],
      ],
      reading:
        'Every neighborhood hides a few gems, and Ari has some of the liveliest cafés in Bangkok. Last Saturday, my friends took me to a small wooden coffee bar tucked behind a row of old trees. Even though it is not the biggest café on the street, it has one of the coziest atmospheres I have ever experienced. The barista greeted everyone warmly and offered the freshest pastries in the area at very reasonable prices. For me, the iced oolong tea was the best item on the menu, while my friend claimed the lemon tart was the most unforgettable dessert she tried all year. If you want a worthwhile place to read or chat quietly, this little spot is easily one of the finest choices nearby.',
      listenQ: 'What did the speaker think was the best item on the café’s menu?',
      listenA: 'The iced oolong tea.',
      dictation: 'It is one of the coziest cafés in our neighborhood.',
      listenNote:
        'สังเกตเสียง `/s/` ท้ายคำว่า `cafés` ในก้อนคำ `one of the coziest cafés` และคำว่า `the` หน้าขั้นสุด',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ขาด the และลืมพหูพจน์: "Chiang Mai has one of most peaceful café I ever saw."',
          answer:
            'Chiang Mai has one of the most peaceful cafés I have ever seen.',
          explanation:
            'ต้องใส่ the หน้า most peaceful และคำนามหลัง one of the... ต้องเป็นพหูพจน์ (cafés) รวมถึงใช้ I have ever seen เมื่อพูดถึงประสบการณ์จนถึงปัจจุบัน',
        },
        {
          kind: 'choice',
          prompt: 'ประโยคใดใช้โครงสร้าง Superlative ได้ถูกต้องสมบูรณ์ที่สุด?',
          answer: 'That bakery sells one of the freshest loaves of bread in the city.',
          choices: [
            'That bakery sells one of freshest bread in the city.',
            'That bakery sells one of the freshest loaf of bread in the city.',
            'That bakery sells one of the freshest loaves of bread in the city.',
            'That bakery sells the most fresh loaves of bread in the city.',
          ],
          explanation:
            'one of the + freshest (คำสั้นใช้ -est) + loaves (นามพหูพจน์)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมขั้นสุดของ friendly (เป็นกันเอง): Everyone agreed that Aunty Lek runs the _____ stall at the market.',
          answer: 'friendliest',
          explanation: 'friendly ลงท้าย -y จึงเปลี่ยน y เป็น i แล้วเติม -est ได้เป็น the friendliest',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "นี่คือหนึ่งในทริปที่น่าจดจำที่สุดในชีวิตของฉัน"',
          answer: 'This is one of the most memorable trips of my life.',
          explanation: 'ใช้สูตร one of the + most memorable + trips (อย่าลืม -s ท้าย trips)',
        },
      ],
      writing:
        'เขียนรีวิวสั้นๆ แนะนำร้านอาหาร สวนสาธารณะ หรือสถานที่โปรดในเมืองของคุณ 4–5 ประโยค โดยใช้ `one of the + superlative + plural noun` อย่างน้อย 2 จุด',
      writingSample:
        'Benchakitti Park is easily one of the most relaxing green spaces in Bangkok. Early morning is the coolest and quietest time to jog along the skywalk above the water. For photography lovers, the wooden bridge offers one of the best sunset views in the city. Even on busy weekends, it remains the most worthwhile place to recharge without spending money.',
      writingNote:
        'ตรวจดูทุกจุดหลังคำว่า one of the... ว่าคำนามปิดท้ายมีรูปพหูพจน์ (-s/-es) ครบถ้วนหรือไม่',
      speakingTopic:
        'แนะนำ "Top 3 Favorite Spots in My Town" ด้วย Superlatives (4 / 3 / 2 นาที)',
      speakingBullets: [
        'แนะนำสถานที่โปรด 3 แห่ง (ร้านกาแฟ ร้านอาหาร มุมพักผ่อน) พร้อมเหตุผลว่าที่สุดด้านไหน',
        'ใช้ก้อนคำให้ติดปาก: one of the best..., the coziest..., the most reasonable...',
        'ตรวจหูตัวเองให้ชัดว่าออกเสียง -s ท้ายนามพหูพจน์หลัง one of the ทุกครั้ง',
      ],
    },
    {
      day: 87,
      title: 'Equality & Modifiers (as...as, not nearly as...as, far / a bit + comparative)',
      objective:
        'เปรียบเทียบระดับความเท่ากันและขยายน้ำหนักความต่าง (ต่างกันมาก vs ต่างกันนิดเดียว) อย่างเป็นธรรมชาติ',
      explanation:
        'ภาษาอังกฤษระดับ A2–B1 จะฟังดูละเอียดและฉลาดขึ้นทันทีเมื่อคุณไม่ได้พูดแค่ "ดีกว่า/ถูกกว่า" แต่บอกได้ว่า **"พอๆ กัน"** หรือ **"ต่างกันแค่นิดเดียว / ต่างกันลิบลับ"**:\n1. **เท่ากัน / ไม่เท่ากัน**: **`as + adj/adv + as`** (`This laptop is as light as a book.`) หรือรูปปฏิเสธ **`not as ... as`** / **`not nearly as ... as`** (ไม่...เท่าเลยสักนิด เช่น `The new phone is not nearly as pricey as I expected.`)\n2. **ตัวขยายน้ำหนักหน้าขั้นกว่า**: แทนที่จะใช้ *very* (ซึ่งผิด!), ใช้ **`much / far / a lot`** (มาก) หรือ **`a bit / slightly`** (นิดหน่อย) หน้าขั้นกว่า เช่น `far quieter than`, `a bit heavier than`',
      sound: [
        'Rhythmic Weak "as...as" & Emphatic Modifiers',
        'as good as /əz ˈɡʊd əz/ · nearly /ˈnɪə.li/ · slightly /ˈslaɪt.li/ · far /fɑːr/',
        'คำว่า `as` ทั้งตัวหน้าและตัวหลังพูดเบาว่า `/əz/` ส่วนคำคุณศัพท์ตรงกลางเน้นชัด: "It’s əz LIGHT əz a feather."',
        'ฝึกพูดจังหวะสั้น-ยาว-สั้น: "as FAST as", "not NEARly as HARD as", "FAR MORE useful than"',
      ],
      l1: [
        'ใช้ "very" หน้าขั้นกว่า ("This bag is very better than my old one") หรือใช้ "as...than" ("It is not as fast than yours")',
        'ภาษาไทยพูดว่า "ดีกว่ามาก" เอาคำว่า "มาก (very)" มาใส่หน้าคำทุกประเภท แต่ภาษาอังกฤษห้ามวาง very หน้าขั้นกว่า',
        'จำคู่ตายตัว: ขั้นกว่าใช้คู่กับ much / far / a bit / slightly (ห้ามใช้ very!) และ as ใช้คู่กับ as เสมอ (ห้ามใช้ than)',
      ],
      vocab: [
        ['battery', 'แบตเตอรี่', '/ˈbæt.ər.i/', 'long battery life', 'อายุแบตเตอรี่ที่ใช้งานได้นาน'],
        ['lightweight', 'น้ำหนักเบา', '/ˈlaɪt.weɪt/', 'as lightweight as', 'น้ำหนักเบาพอๆ กับ'],
        ['durable', 'ทนทาน', '/ˈdjʊə.rə.bəl/', 'far more durable', 'ทนทานกว่ามาก'],
        ['screen', 'หน้าจอ', '/skriːn/', 'clearer screen', 'หน้าจอที่คมชัดกว่า'],
        ['compare', 'เปรียบเทียบ', '/kəmˈpeər/', 'compare two models', 'เปรียบเทียบสองรุ่น'],
        ['practical', 'ใช้งานได้จริง / มีประโยชน์จริง', '/ˈpræk.tɪ.kəl/', 'practical choice', 'ตัวเลือกที่ใช้งานได้จริง'],
        ['noticeable', 'สังเกตเห็นได้ชัด', '/ˈnəʊ.tɪ.sə.bəl/', 'a noticeable difference', 'ความแตกต่างที่เห็นได้ชัด'],
      ],
      examples: [
        ['This slim tablet is almost as powerful as my old desktop.', 'แท็บเล็ตบางเครื่องนี้แรงเกือบเท่าคอมตั้งโต๊ะเครื่องเก่าของฉันเลย'],
        ['The second model costs a bit more, yet its battery lasts much longer.', 'รุ่นที่สองแพงกว่านิดหน่อย แต่แบตเตอรี่อยู่ได้นานกว่ามาก'],
        ['Learning in small chunks is not nearly as stressful as cramming.', 'การเรียนเป็นก้อนเล็กๆ ไม่เครียดเท่าการอัดเนื้อหารวดเดียวเลย'],
        ['Her new backpack is slightly heavier than mine, though it is far more durable.', 'เป้ใบใหม่ของเธอหนักกว่าของฉันนิดเดียว แต่ทนทานกว่ามาก'],
      ],
      reading:
        'When Ton decided to replace his worn-out laptop, he spent an afternoon comparing two lightweight models at the shop. Model A looked sleek, and its price was not nearly as high as he expected. However, when he checked the keyboard and screen, Model B turned out to be much brighter and far more comfortable for long writing sessions. Although Model B felt a bit heavier in his backpack, its battery life was nearly twice as long as Model A’s. Since Ton often works at cafés without power outlets, battery performance made a noticeable difference. In the end, he chose Model B because it was a much more practical tool for daily work.',
      listenQ: 'Why did Model B make a noticeable difference for Ton when working at cafés?',
      listenA: 'Because its battery life was nearly twice as long as Model A’s, and he often works without power outlets.',
      dictation: 'The new model is not nearly as expensive as I expected.',
      listenNote:
        'จับจังหวะ `not nearly as ... as` โดยคำว่า `nearly` ถูกเน้นเสียงส่วน `as` ทั้งสองตัวออกเสียงเบาๆ `/əz/`',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ใช้ very หน้าขั้นกว่าและใช้คู่ as...than ผิด: "My new office is very quieter, and the commute isn’t as long than before."',
          answer:
            'My new office is much quieter, and the commute is not as long as before.',
          explanation:
            'ห้ามใช้ very หน้า quieter ให้ใช้ much/far แทน และ as ต้องคู่กับ as (not as long as before)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดสื่อความหมายว่า "ต่างกันแค่นิดเดียว / ใกล้เคียงกัน" ได้ถูกต้องตามหลักภาษา?',
          answer: 'The blue suitcase is slightly larger than the black one, though it feels just as light.',
          choices: [
            'The blue suitcase is very larger than the black one, though it feels just as light.',
            'The blue suitcase is slightly larger than the black one, though it feels just as light.',
            'The blue suitcase is slightly larger as the black one, though it feels as light than it.',
            'The blue suitcase is a bit more large than the black one.',
          ],
          explanation:
            'ใช้ slightly ขยายหน้า larger (ขั้นกว่า) และใช้ just as light (เทียบเท่า) ได้อย่างเป็นธรรมชาติ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบวลีเปรียบเทียบความต่างมาก: Walking through the park is _____ more refreshing than sitting in traffic.',
          answer: 'far',
          explanation:
            'วาง far (หรือ much) หน้า more refreshing เพื่อย้ำว่าต่างกันมาก (ห้ามใช้ very)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "งานนี้ไม่ได้ยากอย่างที่ฉันกังวลไว้เลยสักนิด"',
          answer: 'This task is not nearly as difficult as I worried.',
          explanation: 'ใช้โครงสร้าง not nearly as + difficult + as เพื่อบอกความต่างชัดเจน',
        },
      ],
      writing:
        'เปรียบเทียบอุปกรณ์หรือสิ่งของ 2 ชิ้นที่คุณใช้ประจำ (เช่น มือถือเก่ากับใหม่, คีย์บอร์ด, กระเป๋า, หรือรองเท้า 2 คู่) จำนวน 4–5 ประโยค โดยใช้ `as...as`, `not nearly as...as`, และ `far/much` + `a bit/slightly`',
      writingSample:
        'My new canvas shoes are far more comfortable than my old leather pair. Even after walking five kilometers, my feet do not feel nearly as tired as before. The new pair looks just as neat for casual Fridays, though the soles are slightly thicker. Spending a bit more for durable shoes was definitely a practical decision.',
      writingNote:
        'ตรวจเช็กว่าไม่มีคำว่า very อยู่หน้าคำขั้นกว่า และทุกวลี as... มี as ปิดท้ายเสมอ',
      speakingTopic:
        'เปรียบเทียบสินค้า 2 รุ่นหรือวิธีทำงาน 2 แบบอย่างละเอียด (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ระบุความต่างทั้งแบบ "ใกล้เคียง" (just as...as / slightly) และ "ต่างกันชัดเจน" (not nearly as...as / far more)',
        'ฝึกพูดคำว่า `əz...əz` ให้เสียงไหลลื่นไม่สะดุด',
      ],
    },
    {
      day: 88,
      title: 'too + adj vs adj + enough vs enough + noun (แก้สลับตำแหน่ง)',
      objective:
        'บอกระดับ "มากเกินไป (แง่ลบ)" ด้วย too และ "เพียงพอ / ไม่พอ" ด้วยตำแหน่งของ enough ที่ถูกต้องทั้งกับ Adj และ Noun',
      explanation:
        'โครงสร้าง `too` และ `enough` เป็นจุดที่คนไทยวางสลับตำแหน่งบ่อยมาก! ให้จำภาพความหมายและตำแหน่งดังนี้:\n1. **`too + adj / adv`** = มากเกินไป (จนเกิดปัญหา/ไม่ดี) เช่น `This room is too noisy to sleep.` **ข้อห้าม**: อย่าใช้ `too` แทน `very` ในแง่ชม เช่น ❌ *"Thai food is too delicious!"* (ฝรั่งจะนึกว่าอร่อยจนกินไม่ไหวหรือมีปัญหา ให้ใช้ `so / really delicious` แทน)\n2. **`adj / adv + enough`** = ...เพียงพอ (`enough` อยู่ **หลัง** Adj!) เช่น `fast enough`, `bright enough`, `not warm enough` (ห้าม ❌ *enough fast*)\n3. **`enough + noun`** = มีคำนามเพียงพอ (`enough` อยู่ **หน้า** Noun!) เช่น `enough time`, `enough storage space`',
      sound: [
        'Silent "gh" in enough /ɪˈnʌf/ & Linking',
        'enough /ɪˈnʌf/ · bright enough /braɪt ɪˈnʌf/ · too noisy /tuː ˈnɔɪ.zi/',
        'ระวัง `enough` ลงท้ายด้วยเสียง `/f/` และเชื่อมคำหน้าอย่างรวดเร็ว: "fast enough" → `/ˈfɑːs.tɪ.nʌf/`, "old enough" → `/ˈəʊl.dɪ.nʌf/`',
        'ฝึกสลับตำแหน่งด้วยปาก: พูดชุด `adj + enough` (big enough, cheap enough, clear enough) สลับกับ `enough + noun` (enough time, enough money, enough chairs)',
      ],
      l1: [
        'สลับเอา enough ไปไว้หน้าคุณศัพท์ เช่น "This apartment isn’t enough big" หรือใช้ too ชมว่า "She is too kind" แทน very kind',
        'ภาษาไทยพูดว่า "ใหญ่พอ" หรือ "พอใหญ่" และมักพูด "ดีเกินไป" ในเชิงชื่นชม จึงแปลคำว่า "เกิน" เป็น too ไปในทางบวก',
        'จำง่ายๆ: คุณศัพท์มาห้อยท้ายไม่ได้ ต้องนำหน้า enough เสมอ (big enough), ส่วนคำนามตามหลัง enough ได้เลย (enough room)!',
      ],
      vocab: [
        ['spacious', 'กว้างขวาง', '/ˈspeɪ.ʃəs/', 'spacious enough for two', 'กว้างพอสำหรับสองคน'],
        ['noisy', 'เสียงดังรบกวน', '/ˈnɔɪ.zi/', 'too noisy to focus', 'เสียงดังเกินกว่าจะมีสมาธิ'],
        ['storage', 'พื้นที่เก็บของ', '/ˈstɔː.rɪdʒ/', 'enough storage space', 'พื้นที่เก็บของเพียงพอ'],
        ['natural', 'เป็นธรรมชาติ', '/ˈnætʃ.ər.əl/', 'enough natural light', 'แสงธรรมชาติเพียงพอ'],
        ['budget', 'งบประมาณ', '/ˈbʌdʒ.ɪt/', 'within our budget', 'อยู่ในงบประมาณของเรา'],
        ['nearby', 'อยู่ใกล้เคียง', '/ˌnɪəˈbaɪ/', 'shops nearby', 'ร้านค้าใกล้เคียง'],
        ['cramped', 'คับแคบ / อึดอัด', '/kræmpt/', 'too cramped', 'คับแคบเกินไป'],
      ],
      examples: [
        ['The first studio looked nice, yet the kitchen was too cramped to cook in.', 'ห้องสตูดิโอแรกดูดี แต่ครัวคับแคบเกินกว่าจะทำอาหารได้'],
        ['Is this desk wide enough for two monitors and a notebook?', 'โต๊ะตัวนี้กว้างพอสำหรับหน้าจอสองตัวกับสมุดหนึ่งเล่มไหม?'],
        ['Luckily, the new apartment has enough storage space for all our gear.', 'โชคดีที่อพาร์ตเมนต์ใหม่มีพื้นที่เก็บของพอสำหรับอุปกรณ์ทั้งหมดของเรา'],
        ['We had to leave early because the café got too loud for a phone call.', 'เราต้องรีบออกเพราะร้านกาแฟเสียงดังเกินไปสำหรับการคุยโทรศัพท์'],
      ],
      reading:
        'Searching for a rental apartment takes patience because photos online rarely tell the full story. On Saturday, Pim visited two units within her budget. The first room was right next to a skytrain station, yet the street below was far too noisy, and the balcony was not spacious enough to hang laundry comfortably. Besides, the tiny closet did not offer enough storage for her winter clothes. The second unit was a ten-minute walk from the station, which seemed manageable. Inside, large windows let in enough natural light, and the living area was quiet enough for online meetings. Because it had everything she truly needed, Pim signed the lease that afternoon.',
      listenQ: 'What were two problems with the first apartment unit Pim visited?',
      listenA: 'The street was too noisy, and the balcony and closet were not large enough.',
      dictation: 'The living area is bright and quiet enough for work.',
      listenNote:
        'ฟังเสียง `/t/` ท้าย `quiet` เชื่อมเข้า `enough` เป็น `/ˈkwaɪə.tɪ.nʌf/` พร้อมสระหน้า `/f/` ที่ชัดเจน',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ตำแหน่ง enough และการใช้ too ผิดความหมาย: "This Wi-Fi isn’t enough strong for video calls, even though the café host is too friendly!"',
          answer:
            'This Wi-Fi is not strong enough for video calls, even though the café host is very friendly!',
          explanation:
            'strong เป็น adjective จึงวางหน้า enough (strong enough) และคำชมเชิงบวกให้ใช้ very friendly หรือ so friendly แทน too friendly',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดวางตำแหน่งของ `enough` และ `too` ได้ถูกต้องทุกจุด?',
          answer: 'We don’t have enough chairs because too many guests arrived early.',
          choices: [
            'We don’t have chairs enough because too many guests arrived early.',
            'We don’t have enough chairs because too many guests arrived early.',
            'The table isn’t enough big for everyone, so it feels cramped too.',
            'The coffee is enough hot, though the room is too much cold.',
          ],
          explanation:
            'chairs เป็นคำนามจึงวางหลัง enough (enough chairs) และ too many ใช้กับนามนับได้พหูพจน์ได้ถูกต้อง (ห้าม too much + adj)',
        },
        {
          kind: 'gap',
          prompt:
            'เรียงคำให้ถูกในช่องว่าง (wide / enough): Make sure the hallway is _____ for the sofa to pass through.',
          answer: 'wide enough',
          explanation: 'wide เป็น adjective จึงต้องวางไว้หน้า enough → wide enough',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "กระเป๋าใบนี้หนักเกินไป และฉันไม่มีเวลาพอที่จะจัดใหม่"',
          answer: 'This bag is too heavy, and I do not have enough time to pack again.',
          explanation: 'too + heavy (adj) และ enough + time (noun)',
        },
      ],
      writing:
        'เขียนประเมินห้องพัก ร้านกาแฟ หรือโต๊ะทำงานของคุณตอนนี้ 4–5 ประโยค โดยใช้ `too + adj`, `adj + enough` และ `enough + noun` ให้ครบทั้ง 3 แบบ',
      writingSample:
        'My home workspace is mostly comfortable, though it still needs a few small changes. The chair is soft enough for three hours of focus, and my desk has enough space for my laptop and water bottle. However, the corner gets too dark after five o’clock, so I need a brighter lamp. On weekend mornings, the street outside is also too loud to record clear audio.',
      writingNote:
        'เช็กตำแหน่งคำทุกครั้ง: adj + enough (loud enough, bright enough) vs enough + noun (enough space, enough time)',
      speakingTopic:
        'ประเมินความเหมาะสมของสถานที่หรือสินค้าด้วย too & enough (4 / 3 / 2 นาที)',
      speakingBullets: [
        'สมมุติว่ากำลังดูห้องเช่า โต๊ะทำงาน หรือกระเป๋าเดินทางใบใหม่ให้เพื่อนฟัง',
        'พูดสลับ 3 โครงสร้างให้ติดปาก: too + adj, adj + enough, enough + noun',
        'หลีกเลี่ยงการใช้ too ชมสิ่งดีๆ — เปลี่ยนเป็น really หรือ so แทน',
      ],
    },
    {
      day: 89,
      title: 'so + adj/adv vs such + (a/an) adj + noun (แสดงอารมณ์ธรรมชาติ)',
      objective:
        'เน้นความรู้สึก ประสบการณ์ และผลลัพธ์อย่างเป็นธรรมชาติด้วย so และ such โดยไม่สลับโครงสร้างหลังคำทั้งสอง',
      explanation:
        'เวลาอยากเล่าความประทับใจให้มีอารมณ์ร่วม ("อร่อยมากจน...", "ทริปดีขนาดนั้นเลย!") คนไทยมักใช้คำว่า *very* ซ้ำๆ ทั้งเรื่อง ทั้งที่เจ้าของภาษานิยมใช้ **`so`** และ **`such`** มากกว่าเยอะ:\n- **`so + adjective / adverb (+ that...)`**: เน้นระดับของคำคุณศัพท์/กริยาวิเศษณ์ล้วนๆ ไม่มีคำนามตามหลัง เช่น `The street food was so fresh!`, `Time passed so quickly that we missed the last boat.`\n- **`such + (a/an) + adjective + noun (+ that...)`**: ต้องมี **คำนาม** ปิดท้ายเสมอ! ถ้านามเอกพจน์นับได้ อย่าลืม `a/an`: `It was such a relaxing trip!`, `They showed such warm hospitality.` (ห้าม ❌ *so a relaxing trip* หรือ ❌ *such relaxing* เฉยๆ!)',
      sound: [
        'Expressive Pitch Rise on "so" and "such"',
        'such a /sʌtʃ ə/ · exhausted /ɪɡˈzɔː.stɪd/ · hospitality /ˌhɒs.pɪˈtæl.ə.ti/',
        'พูดเชื่อม `such a` เป็นเสียงเดียวว่า `/ˈsʌtʃə/` ("ซัท-เชอะ") และยืดเสียง `so` เล็กน้อยเพื่อสื่ออารมณ์: "It was SUCH a good view!"',
        'ฝึกพูดประโยคใส่อารมณ์ 4 ประโยค: "I was SO tired!", "It’s SUCH a nice spot!", "He spoke SO clearly!", "They were SUCH kind hosts!"',
      ],
      l1: [
        'พูดว่า "It was so a good movie" หรือ "The weather was such nice today!"',
        'คิดว่า so กับ such แปลว่า "มาก" เหมือนกันเลยหยิบใช้แทนกันโดยไม่ดูว่าท้ายวลีมีคำนามปิดอยู่หรือไม่',
        'เช็กตัวปิดท้าย: ไม่มีคำนามปิด → ใช้ so (so nice / so quickly); มีคำนามปิดท้าย → ใช้ such (such a nice day / such kind people)',
      ],
      vocab: [
        ['hospitality', 'การต้อนรับขับสู้', '/ˌhɒs.pɪˈtæl.ə.ti/', 'warm hospitality', 'การต้อนรับที่อบอุ่น'],
        ['exhausted', 'เหนื่อยล้าหมดแรง', '/ɪɡˈzɔː.stɪd/', 'so exhausted', 'เหนื่อยล้ามากๆ'],
        ['view', 'ทิวทัศน์ / วิว', '/vjuː/', 'such a stunning view', 'วิวที่สวยสะกดสายตามาก'],
        ['vivid', 'ชัดเจน / มีชีวิตชีวา', '/ˈvɪv.ɪd/', 'vivid colors', 'สีสันสดชัดมีชีวิตชีวา'],
        ['unexpected', 'ที่คาดไม่ถึง', '/ˌʌn.ɪkˈspek.tɪd/', 'such an unexpected gift', 'ของขวัญที่คาดไม่ถึงจริงๆ'],
        ['refreshing', 'สดชื่นกระปรี้กระเปร่า', '/rɪˈfreʃ.ɪŋ/', 'so refreshing', 'สดชื่นมาก'],
        ['impression', 'ความประทับใจ', '/ɪmˈpreʃ.ən/', 'leave a strong impression', 'ทิ้งความประทับใจไว้มาก'],
      ],
      examples: [
        ['The morning mist over the river looked so calm and peaceful.', 'หมอกยามเช้าเหนือแม่น้ำดูสงบและสบายตามาก'],
        ['It was such a refreshing break from busy city traffic.', 'มันเป็นการพักเบรกที่สดชื่นมากจากรถติดในเมือง'],
        ['Our host cooked so generously that nobody could finish a second bowl.', 'เจ้าภาพทำอาหารให้เยอะมากจนไม่มีใครกินชามที่สองหมด'],
        ['That little market left such a vivid impression on everyone in our group.', 'ตลาดเล็กๆ แห่งนั้นทิ้งความประทับใจที่ชัดเจนไว้กับทุกคนในกลุ่มเลย'],
      ],
      reading:
        'Last Sunday, our small team visited a riverside village an hour outside Chiang Mai. Because we had worked long hours all week, everyone arrived feeling so exhausted that we barely talked on the ride there. However, the mountain air felt so refreshing the moment we stepped out of the van. A local family welcomed us with such warm hospitality and served fresh herbal tea beside a wooden pond. During lunch, the grilled fish and spicy salad were so flavorful that we kept asking for the recipe. Even better, a light afternoon breeze blew across the garden, creating such a peaceful atmosphere that nobody checked their phone for three hours. It was such an unexpected surprise and left a lasting impression on all of us.',
      listenQ: 'How did the team feel when they first arrived at the village?',
      listenA: 'They felt so exhausted that they barely talked on the ride there.',
      dictation: 'They welcomed us with such warm hospitality.',
      listenNote:
        'สังเกตว่า `hospitality` นับไม่ได้ จึงใช้ `such warm hospitality` (ไม่มี `a`) และเน้นเสียงตรงคำว่า `such` กับพยางค์ `-tal-`',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่สลับ so และ such ผิดหลัก: "It was so a pleasant afternoon that we felt such relaxed by the lake."',
          answer:
            'It was such a pleasant afternoon that we felt so relaxed by the lake.',
          explanation:
            'a pleasant afternoon มีคำนามปิดท้ายจึงต้องใช้ such a; ส่วน relaxed เป็น adjective ล้วนจึงใช้ so relaxed',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ `so` และ `such` กับคำนามนับได้และนับไม่ได้ถูกต้อง?',
          answer: 'She gave us such helpful advice that we solved the issue so quickly.',
          choices: [
            'She gave us such a helpful advice that we solved the issue so quickly.',
            'She gave us such helpful advice that we solved the issue so quickly.',
            'She gave us so helpful advice that we solved the issue such quickly.',
            'She gave us such helpful that we solved the issue such quick.',
          ],
          explanation:
            'advice เป็นคำนามนับไม่ได้จึงห้ามใส่ a (ใช้ such helpful advice) และ quickly เป็น adverb จึงใช้ so quickly',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำว่า so หรือ such ให้ถูกต้อง: Nobody expected _____ an unforgettable sunset after the heavy rain.',
          answer: 'such',
          explanation: 'มีก้อนคำนาม "an unforgettable sunset" ตามหลัง จึงต้องใช้ such',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "มันเป็นวันหยุดสุดสัปดาห์ที่สบายใจมากจนฉันไม่อยากกลับเลย"',
          answer: 'It was such a relaxing weekend that I did not want to go back.',
          explanation: 'ใช้ such a relaxing weekend (มี noun) + that + ผลที่ตามมา',
        },
      ],
      writing:
        'เล่าความประทับใจเกี่ยวกับมื้ออาหาร ทริปสั้นๆ หรือคอนเสิร์ต/อีเวนต์ที่คุณชอบ 4–5 ประโยค โดยใช้ทั้ง `so + adj/adv` และ `such + (a/an) adj + noun` อย่างละอย่างน้อย 2 ครั้ง',
      writingSample:
        'Last month, I tried a small family restaurant near the river, and it left such a great impression on me. The grilled chicken smelled so delicious that we ordered two extra plates right away. The staff worked so politely even during the dinner rush. Honestly, it was such a cozy evening that we stayed until closing time.',
      writingNote:
        'ตรวจดูวลีที่มี such ทุกจุดว่ามีคำนามปิดท้ายเสมอ และถ้าเป็นคำนามเอกพจน์นับได้ อย่าลืมใส่ a/an',
      speakingTopic:
        'เล่าความทรงจำที่ประทับใจสุดๆ ด้วยเสียงใส่อารมณ์ "so... / such a..." (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกร้านอาหาร วันหยุด หรือการเจอกันที่ประทับใจจริง 1 เหตุการณ์',
        'ฝึกใส่น้ำเสียงเน้นคำว่า so และ such a ให้ฟังดูมีชีวิตชีวา ไม่ราบเรียบ',
      ],
    },
    {
      day: 90,
      title: 'Comparing Products, Housing & Lifestyle Choices in Daily Life',
      objective:
        'ผสมผสานโครงสร้างเปรียบเทียบทั้งหมด (Comparatives, Superlatives, as...as, too/enough, so/such) เพื่อโต้ตอบและตัดสินใจในสถานการณ์จริง',
      explanation:
        'ในชีวิตประจำวันและที่ทำงาน เราแทบไม่เคยพูดโครงสร้างเปรียบเทียบทีละอันแยกกัน แต่จะใช้ **"ผสมเป็นชุดเหตุผล"** เพื่อตัดสินใจหรือแนะนำคนอื่น เช่น:\n- **เปิดด้วยตัวเปรียบเทียบ**: `Living downtown is far more convenient than staying in the suburbs,`\n- **ชี้ข้อจำกัดด้วย `too / enough`**: `yet many condos near the station are too small or not quiet enough.`\n- **สรุปด้วยขั้นสุดหรือ `such`**: `For remote workers, a townhouse near a park can be the most balanced lifestyle choice—it feels like such a relief after busy work hours.`\nการร้อยประโยคแบบนี้ช่วยให้คุณอธิบายเหตุผล (Pros & Cons) ได้ลึกและน่าฟังในระดับ B1 ทันที',
      sound: [
        'Balanced Pros-and-Cons Intonation',
        'lifestyle /ˈlaɪf.staɪl/ · trade-off /ˈtreɪd.ɒf/ · priority /praɪˈɒr.ə.ti/ · flexibility /ˌflek.səˈbɪl.ə.ti/',
        'เวลาพูดข้อดี-ข้อเสีย ให้เสียงสูงขึ้นเล็กน้อยตรงคำเชื่อมขัดแย้ง (`Although...`, `On the other hand...`) แล้วลดเสียงลงเมื่อสรุปเหตุผล',
        'ฝึกพูดประโยคยาว 2 ส่วนให้จบในลมหายใจเดียวที่สบาย: "Although downtown is noisier, it’s much closer to my gym."',
      ],
      l1: [
        'เล่าเปรียบเทียบแบบห้วนๆ เป็นท่อน ("Downtown good. Suburb far. Condo expensive.") โดยไม่มีตัวปรับระดับหรือประโยคเชื่อมเหตุผล',
        'กลัวพูดผิดเลยไม่กล้าเอา too/enough มาต่อยอดจาก comparative ในการให้เหตุผลเดียวกัน',
        'ใช้สูตร 3 จังหวะ: 1) เทียบข้อดีหลัก (far more... / as...as) 2) ชี้จุดติดขัด (too... / not...enough) 3) เลือกตัวที่ดีที่สุด (the best option for...)',
      ],
      vocab: [
        ['lifestyle', 'วิถีชีวิต / ไลฟ์สไตล์', '/ˈlaɪf.staɪl/', 'balanced lifestyle', 'วิถีชีวิตที่สมดุล'],
        ['trade-off', 'ข้อแลกเปลี่ยน / ได้อย่างเสียอย่าง', '/ˈtreɪd.ɒf/', 'a fair trade-off', 'ข้อแลกเปลี่ยนที่รับได้'],
        ['peaceful', 'สงบสุข', '/ˈpiːs.fəl/', 'peaceful surroundings', 'สภาพแวดล้อมที่สงบ'],
        ['flexibility', 'ความยืดหยุ่น', '/ˌflek.səˈbɪl.ə.ti/', 'greater flexibility', 'ความยืดหยุ่นที่มากขึ้น'],
        ['priority', 'ลำดับความสำคัญ', '/praɪˈɒr.ə.ti/', 'top priority', 'สิ่งสำคัญอันดับแรก'],
        ['balance', 'ความสมดุล / สร้างสมดุล', '/ˈbæl.əns/', 'work-life balance', 'สมดุลชีวิตและการงาน'],
        ['weigh', 'ชั่งน้ำหนัก / พิจารณา', '/weɪ/', 'weigh the pros and cons', 'ชั่งน้ำหนักข้อดีและข้อเสีย'],
      ],
      examples: [
        ['Working remotely gives me far greater flexibility than commuting every day.', 'การทำงานจากที่บ้านให้ความยืดหยุ่นมากกว่าการเดินทางไปทำงานทุกวันมาก'],
        ['Staying downtown sounds exciting, yet the rent is too high for my top priority right now.', 'การอยู่ใจกลางเมืองฟังดูน่าตื่นเต้น แต่ค่าเช่าสูงเกินไปสำหรับเป้าหมายสำคัญของฉันตอนนี้'],
        ['A mid-sized apartment near a park seems like the most practical trade-off.', 'อพาร์ตเมนต์ขนาดกลางใกล้สวนสาธารณะดูจะเป็นทางสายกลางที่ใช้งานได้จริงที่สุด'],
        ['Once you weigh your priorities carefully, choosing a lifestyle becomes much clearer.', 'เมื่อคุณชั่งน้ำหนักลำดับความสำคัญอย่างรอบคอบ การเลือกวิถีชีวิตก็จะชัดเจนขึ้นมาก'],
      ],
      reading:
        'Choosing where to live and how to work always involves a trade-off. For many young professionals, renting a studio right in the city center feels like such an exciting lifestyle choice because cafés, gyms, and offices are just minutes away. However, city studios are often too cramped for hobbies and not nearly as peaceful as suburban homes. On the other hand, moving out of town offers much larger living space at a far more affordable price, yet a two-hour daily commute can quickly ruin your work-life balance. Today, hybrid workers often look for the best compromise: an older apartment along a train line, just far enough from main roads to stay quiet, yet close enough to reach meetings without stress.',
      listenQ: 'What is the main downside of moving out to a suburban home mentioned in the passage?',
      listenA: 'A two-hour daily commute can quickly ruin your work-life balance.',
      dictation: 'A quiet apartment near the train offers the best compromise.',
      listenNote:
        'จับการเชื่อมเสียง `quiet apartment` และพยางค์เน้นในคำว่า `compromise` (/ˈkɒm.prə.maɪz/ เน้นพยางค์แรก)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้จุดพลาดผสมโครงสร้างเปรียบเทียบ 2 จุด: "Suburban houses are very cheaper, and the air isn’t as polluted than downtown."',
          answer:
            'Suburban houses are much cheaper, and the air is not as polluted as downtown.',
          explanation:
            'ห้ามใช้ very หน้า cheaper (ใช้ much/far แทน) และโครงสร้าง as... ต้องปิดด้วย as (ไม่ใช้ than)',
        },
        {
          kind: 'choice',
          prompt: 'ประโยคใดเปรียบเทียบข้อดีข้อเสียของไลฟ์สไตล์ได้คล่องและถูกไวยากรณ์ทั้งหมด?',
          answer: 'Although cycling takes a bit longer, it is far healthier and not nearly as expensive as driving.',
          choices: [
            'Although cycling takes a bit more long, it is very healthier and not nearly as expensive than driving.',
            'Although cycling takes a bit longer, it is far healthier and not nearly as expensive as driving.',
            'Although cycling is too healthy, it is not enough fast as taking a taxi.',
            'Although cycling is such healthy habit, it is one of the best commute in town.',
          ],
          explanation:
            'a bit longer, far healthier และ not nearly as expensive as driving ล้วนใช้ถูกตำแหน่งและถูกคู่ทุกจุด',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำศัพท์จากบทให้ถูกความหมาย: Before signing a new job contract, always _____ the pros and cons carefully.',
          answer: 'weigh',
          explanation: 'weigh the pros and cons = ชั่งน้ำหนักข้อดีและข้อเสีย',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ความยืดหยุ่นสำคัญพอๆ กับเงินเดือนสำหรับวิถีชีวิตของฉัน"',
          answer: 'Flexibility is as important as salary for my lifestyle.',
          explanation: 'ใช้โครงสร้างความเท่ากัน as + important + as',
        },
      ],
      writing:
        'เขียนเปรียบเทียบตัวเลือกชีวิตจริงของคุณ 1 คู่ (เช่น เมือง vs ชานเมือง, ทำงานประจำ vs ฟรีแลนซ์, ซื้อรถ vs ใช้รถสาธารณะ) ความยาว 5–6 ประโยค โดยใช้ทั้ง Comparatives/Modifiers, `too/enough` และสรุปด้วย Superlative',
      writingSample:
        'If I weigh remote work against working in an office every day, a hybrid schedule is the best balance for me. Staying home full-time saves money and feels far quieter than a busy office. However, five days alone at home can feel too isolated, and I do not get enough face-to-face teamwork. Going to the office twice a week is not nearly as tiring as a daily commute, yet it gives me such a refreshing change of pace.',
      writingNote:
        'ตรวจดูว่าคำอธิบายมีครบทั้งข้อดี ตัวปรับน้ำหนัก (far/a bit) ข้อจำกัด (too/enough) และข้อสรุปที่ชัดเจน',
      speakingTopic:
        'ชั่งน้ำหนักข้อดี-ข้อเสียของทางเลือกชีวิต "City vs Suburbs" หรือ "Hybrid vs Office" (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดเรียง 3 ขั้น: เทียบความต่าง (far more / not nearly as) → ข้อจำกัด (too / enough) → ทางออกที่คุ้มค่าที่สุด (the best trade-off)',
        'ใช้ก้อนคำให้ลื่น: weigh the pros and cons, top priority, work-life balance',
      ],
    },
    {
      day: 91,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 13 — เปรียบเทียบขั้นกว่า-สุด & Dictogloss',
      objective:
        'ทบทวนและสังเคราะห์โครงสร้างเปรียบเทียบทั้งหมดของสัปดาห์ 13 ผ่าน Dictogloss, Error Analysis และการพูดโต้ตอบตัดสินใจ',
      explanation:
        'ครบสัปดาห์ที่ 13 แล้วครับ! วันนี้เรามาทดสอบความแม่นยำในการหยิบทุกเครื่องมือเปรียบเทียบมาใช้สลับกันโดยไม่หลงกลกับดักภาษาไทย:\n1. **Comparatives + Modifiers**: `-er / more` + ข้อยกเว้น `better/worse/farther` + ตัวปรับน้ำหนัก `far / much / a bit` (ห้าม `very` และห้าม `more better`)\n2. **Superlatives**: `the -est / the most` + `one of the + superlative + plural noun` (อย่าลืม `-s`!)\n3. **Equality**: `(not nearly) as ... as`\n4. **Degree**: `too + adj` (ปัญหา) vs `adj + enough` vs `enough + noun`\n5. **Emotion**: `so + adj/adv` vs `such + (a/an) adj + noun`\nทำแบบฝึกหัด Dictogloss และ Error Fix ให้ครบก่อนก้าวเข้าสู่สัปดาห์หน้าครับ!',
      sound: [
        'Week 13 Full Comparison Fluency Check',
        'farther /ˈfɑː.ðər/ · exhausted /ɪɡˈzɔː.stɪd/ · priority /praɪˈɒr.ə.ti/ · enough /ɪˈnʌf/',
        'จับเสียงลดรูปเวลาฟังเร็ว: `than` (`/ðən/`), `as...as` (`/əz...əz/`), `such a` (`/ˈsʌtʃə/`), `quiet enough` (`/ˈkwaɪətɪnʌf/`)',
        'Shadowing บทอ่านวันนี้ให้ทันจังหวะทั้ง 3 รอบ โดยเน้นเสียงคำเปรียบเทียบและหยุดพักหายใจที่เครื่องหมายวรรคตอน',
      ],
      l1: [
        'เวลาต้องพูดเร็วๆ รวมหลายโครงสร้าง มักเผลอกลับไปพูด more better, enough warm, so a nice place หรือลืม -s ท้าย one of the best...',
        'สมองยังต้องหยุดแปลคำว่า "กว่า / พอ / มากจน" ทีละคำแทนที่จะดึงก้อนคำทั้งชุดออกมา',
        'ใช้สูตรเช็กด่วน 4 ข้อ: มี -er แล้วห้ามใส่ more | หลัง one of the ต้องมี -s | adj ต้องนำหน้า enough | มีคำนามปิดท้ายใช้ such!',
      ],
      vocab: [
        ['getaway', 'ทริปพักผ่อนสั้นๆ', '/ˈɡet.ə.weɪ/', 'a weekend getaway', 'ทริปพักผ่อนช่วงสุดสัปดาห์'],
        ['cabin', 'บ้านพักไม้ / กระท่อมพักผ่อน', '/ˈkæb.ɪn/', 'a cozy mountain cabin', 'บ้านพักบนเขาแสนอบอุ่น'],
        ['riverside', 'ริมแม่น้ำ', '/ˈrɪv.ə.saɪd/', 'riverside homestay', 'โฮมสเตย์ริมแม่น้ำ'],
        ['stunning', 'งดงามสะดุดตา', '/ˈstʌn.ɪŋ/', 'stunning scenery', 'ทิวทัศน์ที่งดงามมาก'],
        ['convenience', 'ความสะดวกสบาย', '/kənˈviː.ni.əns/', 'daily convenience', 'ความสะดวกในชีวิตประจำวัน'],
        ['isolated', 'ห่างไกล / โดดเดี่ยว', '/ˈaɪ.sə.leɪ.tɪd/', 'feel slightly isolated', 'รู้สึกค่อนข้างห่างไกลผู้คน'],
        ['consensus', 'ความเห็นพ้องร่วมกัน', '/kənˈsen.səs/', 'reach a consensus', 'ได้ข้อสรุปร่วมกัน'],
      ],
      examples: [
        ['The mountain cabin was far quieter than any hotel in town.', 'บ้านพักบนเขาเงียบสงบกว่าโรงแรมในเมืองทุกแห่งมาก'],
        ['Honestly, it was such a cozy getaway that we didn’t want to leave.', 'พูดตามตรง มันเป็นทริปพักผ่อนที่อบอุ่นมากจนเราไม่อยากกลับเลย'],
        ['Is the riverside homestay close enough to walk to the morning market?', 'โฮมสเตย์ริมแม่น้ำอยู่ใกล้พอที่จะเดินไปตลาดเช้าได้ไหม?'],
        ['That valley holds one of the most stunning views in northern Thailand.', 'หุบเขาแห่งนั้นมีหนึ่งในวิวที่งดงามที่สุดในภาคเหนือของไทย'],
      ],
      reading:
        'Planning a weekend getaway with friends can be tricky when everyone has different priorities. Last Thursday, Mint and her three coworkers compared two places in Kanchanaburi: a wooden mountain cabin and a small riverside homestay. The cabin looked stunning in photos and offered one of the most peaceful forest views in the province, yet the mountain road sounded too steep for night driving. Moreover, the cabin did not have enough kitchen tools for cooking dinner together. By contrast, the riverside homestay was not nearly as isolated as the cabin, and its price was much more reasonable. Even though the rooms were a bit smaller, the porch was spacious enough for four friends to share dinner under the stars. In the end, they reached a consensus easily because the homestay felt like such a practical and relaxing choice.',
      listenQ: 'Why did Mint and her coworkers decide against booking the mountain cabin?',
      listenA: 'Because the road sounded too steep for night driving and the cabin did not have enough kitchen tools.',
      dictation: 'The homestay was not nearly as isolated as the mountain cabin.',
      listenNote:
        'บทฟังวันนี้รวมทั้ง `one of the + plural`, `too + adj`, `enough + noun`, `not nearly as...as`, `a bit smaller` และ `such a...`',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังเสียงสรุปจากบทอ่านแล้วเติมวลีที่ขาดให้ตรงทุกคำ: "By contrast, the riverside homestay was _____ isolated _____ the cabin, and its price was _____ reasonable."',
          answer: 'not nearly as / as / much more',
          choices: [
            'not nearly as / as / much more',
            'not nearly as / than / very more',
            'too much / like / far most',
            'almost as / that / a bit most',
          ],
          explanation:
            'จากบทอ่าน: "...was not nearly as isolated as the cabin, and its price was much more reasonable."',
          audio_text:
            'By contrast, the riverside homestay was not nearly as isolated as the cabin, and its price was much more reasonable.',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ผิด 3 จุดในสัปดาห์นี้: "This café is one of the best bakery in town, and their tea is enough sweet without being more expensive than others."',
          answer:
            'This café is one of the best bakeries in town, and their tea is sweet enough without being more expensive than others.',
          explanation:
            '1) หลัง one of the best ต้องเป็นนามพหูพจน์ bakeries 2) enough อยู่หลัง adjective (sweet enough)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ `so / such / too / enough` ได้ถูกต้องทั้งหมด?',
          answer: 'The view was so stunning that we stayed outside even though the wind felt a bit too chilly.',
          choices: [
            'The view was such stunning that we stayed outside even though the wind felt enough chilly.',
            'The view was so stunning that we stayed outside even though the wind felt a bit too chilly.',
            'It was so a stunning view that nobody had time enough to take photos.',
            'They showed so warm hospitality that we stayed too long happily.',
          ],
          explanation:
            'so + adj (so stunning), a bit too + adj (too chilly) ถูกต้องและเป็นธรรมชาติที่สุด',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเปรียบเทียบน้ำหนักให้ถูกต้อง: Taking the early ferry is _____ faster than waiting for the noon boat.',
          answer: 'far',
          explanation: 'ใช้ far (หรือ much) ขยายหน้าขั้นกว่า faster (ห้ามใช้ very)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "มันเป็นสถานที่ที่เงียบพอสำหรับการพักผ่อน และเป็นหนึ่งในประสบการณ์ที่ดีที่สุดของปีนี้"',
          answer:
            'It is a quiet enough place to rest, and it is one of the best experiences of this year.',
          explanation: 'quiet enough (adj + enough) และ one of the best experiences (มี -s)',
        },
      ],
      writing:
        'เขียนเปรียบเทียบสถานที่พักผ่อนหรือร้านอาหาร 2 แห่งที่คุณเคยไป (5–6 ประโยค) โดยใช้โครงสร้างสัปดาห์นี้ให้ครบ: ขั้นกว่า + ตัวขยาย (`far/a bit`), `one of the + plural`, `(not) as...as`, `too/enough` และ `so/such`',
      writingSample:
        'Last month, my family compared two beaches for a short weekend getaway: Hua Hin and Koh Samet. Koh Samet has one of the clearest bays in eastern Thailand, and the water looked so blue that we swam for hours. However, taking the boat took far longer than driving down to Hua Hin, and our ferry ride felt a bit too bumpy. On the other hand, Hua Hin is not nearly as quiet as the island, yet it offers enough cozy cafés and seafood markets for everyone. Overall, Hua Hin was such a convenient option for a two-day trip.',
      writingNote:
        'อ่านทวนผลงานเขียนและเช็ก 4 จุดสำคัญ: ไม่ซ้อน more/-er, นามพหูพจน์หลัง one of the, ตำแหน่ง adj + enough, และความต่าง so กับ such',
      speakingTopic:
        'ทบทวนสัปดาห์ 13: แนะนำและเปรียบเทียบ 2 ตัวเลือกจนได้ข้อสรุป 4/3/2 นาที',
      speakingBullets: [
        'พูดเทียบ 2 เมือง 2 โรงแรม หรือ 2 อุปกรณ์ โดยใส่ครบทั้ง Comparatives, one of the + plural, too/enough และ so/such',
        'รอบ 2 นาทีต้องลดความลังเลและเชื่อมคำว่า `əz...əz`, `ðən`, `ɪnʌf` ให้ได้จังหวะเจ้าของภาษา',
      ],
    },
  ]
);
