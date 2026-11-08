import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 3: คิดเป็นภาษาอังกฤษและสื่อสารในงานจริง';

export const WEEK17: ModuleSeed = createModule(
  {
    week: 17,
    phase: 3,
    phase_title: PHASE_TITLE,
    cefr_level: 'B1',
    title: 'Present Perfect Continuous & การควบคุมลำดับเวลาลึกซึ้ง (Past Perfect)',
    summary:
      'เน้นระยะเวลาและความต่อเนื่องถึงปัจจุบัน (have been doing), เปรียบเทียบผลลัพธ์ vs กิจกรรม และลำดับเหตุการณ์อดีต 2 ชั้นด้วย Past Perfect (had + V3)',
    focus: 'Present Perfect Continuous vs Simple, Past Perfect Sequencing',
  },
  [
    {
      day: 113,
      title: 'Present Perfect Continuous (have/has been + V-ing): ทำต่อเนื่องมาจนถึงตอนนี้ & หลักฐานตรงหน้า',
      objective:
        'อธิบายกิจกรรมที่เริ่มในอดีตและยังทำต่อเนื่องมาจนถึงปัจจุบัน รวมถึงกิจกรรมที่เพิ่งหยุดไปหมาดๆ โดยมีร่องรอยให้เห็นชัดเจน',
      explanation:
        'ใน Phase 2 คุณใช้ Present Perfect (`have + V3`) เพื่อบอกว่า "เคยทำ" หรือ "ทำเสร็จแล้ว" แต่วันนี้เรายกระดับไปอีกขั้นด้วย **Present Perfect Continuous (`have/has been + V-ing`)** เพื่อโฟกัสที่ **"ความต่อเนื่องและระยะเวลา"** ใน 2 สถานการณ์หลัก:\n1) **ทำต่อเนื่องมาจากอดีตจนถึงวินาทีนี้** (มักคู่ `for`, `since`, `all morning`, `lately`): เช่น `I’ve been learning English for four months.` (เรียนต่อเนื่องมาตลอด 4 เดือนและยังเรียนอยู่)\n2) **เพิ่งหยุดทำหมาดๆ แต่มีหลักฐานตรงหน้าให้คนเห็น**: เช่น เห็นเพื่อนมือเปื้อนดินเลยถามว่า `Have you been gardening?` หรือตาแดงก่ำ `I’ve been staring at my laptop all afternoon.`\nข้อควรระวัง: อย่าลืม **`been`** เด็ดขาด! โครงสร้างต้องครบ 3 ชิ้นเสมอ: `have/has + been + V-ing`',
      sound: [
        'Weak "have/has been" Reduction',
        'been /bɪn/ · all morning /ɔːl ˈmɔː.nɪŋ/ · collaborating /kəˈlæb.ə.reɪ.tɪŋ/',
        'ในคำพูดเร็ว "have been" ลดรูปเป็น /əv bɪn/ เช่น "I’ve been waiting" ออกเสียงว่า /aɪv bɪn ˈweɪ.tɪŋ/ (อ่าน "บิน" สั้นๆ ไม่ลากเสียง "บีน")',
        'ออกเสียงประโยคที่มี been 5 ประโยคให้จังหวะสั้นกระชับ: I’ve been working / She’s been practicing / We’ve been talking',
      ],
      l1: [
        'พูดว่า "I have waiting here for an hour." (ลืม been) หรือใช้ Present Simple "I wait here for an hour."',
        'ภาษาไทยใช้คำว่า "มา...แล้ว" ต่อท้ายกริยาเดียวได้เลย (เช่น รอมาชั่วโมงนึงแล้ว) จึงมักตัดกริยาช่วย been ทิ้งหรือไม่ผัน Tense',
        'เมื่อไหร่ที่พูดถึงกิจกรรมที่ "ทำต่อเนื่องมาจนถึงตอนนี้ + มีระยะเวลา (for/since)" ให้ดึงก้อน "’ve been + V-ing" / "’s been + V-ing" ออกมาเป็นแพ็กเดียวทันที',
      ],
      vocab: [
        ['exhausted', 'เหนื่อยล้าสุดๆ', '/ɪɡˈzɔː.stɪd/', 'look completely exhausted', 'ดูเหนื่อยล้าอย่างเห็นได้ชัด'],
        ['stubborn', 'ดื้อรั้น / แก้ยาก', '/ˈstʌb.ən/', 'a stubborn bug', 'บั๊ก/ปัญหาที่แก้ยาก'],
        ['collaborate', 'ร่วมมือกันทำงาน', '/kəˈlæb.ə.reɪt/', 'collaborate on a project', 'ร่วมมือกันทำโปรเจกต์'],
        ['stare', 'จ้องมอง', '/steər/', 'stare at a screen', 'จ้องหน้าจอ'],
        ['breather', 'เวลาพักหายใจสั้นๆ', '/ˈbriː.ðər/', 'take a brief breather', 'ขอพักหายใจสักครู่'],
        ['overtime', 'ล่วงเวลา / โอที', '/ˈəʊ.və.taɪm/', 'work overtime', 'ทำงานล่วงเวลา'],
        ['faintly', 'เบาๆ / จางๆ', '/ˈfeɪnt.li/', 'smell faintly of coffee', 'มีกลิ่นกาแฟจางๆ'],
      ],
      examples: [
        ['Why are your hands covered in flour? Have you been baking?', 'ทำไมมือคุณเลอะแป้งเต็มไปหมดเลย? เพิ่งอบขนมมาเหรอ?'],
        ['Our product team has been working overtime all week.', 'ทีมโปรดักต์ของเราทำงานล่วงเวลามาตลอดทั้งสัปดาห์'],
        ['She has been collaborating with the Bangkok studio since January.', 'เธอทำงานร่วมกับสตูดิโอที่กรุงเทพฯ มาตั้งแต่เดือนมกราคม'],
        ['Sorry my eyes look red—I have been staring at spreadsheets for hours.', 'ขอโทษทีที่ตาดูแดงนะ ฉันจ้องตารางงานมาหลายชั่วโมงแล้ว'],
      ],
      reading:
        "When Mei unlocks the co-working studio on Saturday morning, the hallway still smells faintly of floor wax and fresh coffee. Near the entrance, a cheerful cleaner is wiping the glass door; she has been tidying the shared spaces since six o'clock. Across the quiet room, Mei's teammate Dan looks noticeably tired. Two empty mugs sit beside his keyboard, and his shoulders are stiff. Why does he look so worn out? Because he has been testing a stubborn payment feature all morning without a real break. In fact, the whole product team has been working extra hours this week ahead of Monday's release. Even so, Dan smiles when he sees Mei walk in with hot rice porridge. They have been collaborating on this app for nearly four months, and every small fix brings them closer to launch. Mei gently closes his laptop for ten minutes because anyone who has been staring at code for hours needs sunlight and breakfast first.",
      listenQ: 'How long have Mei and Dan been collaborating on the app?',
      listenA: 'For nearly four months.',
      dictation: 'I have been testing this feature all morning.',
      listenNote: 'สังเกต "have been" ออกเสียงเชื่อมเบาๆ เป็น /əv bɪn/ และ stress หนักที่ testing, feature, morning',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่โครงสร้างขาดส่วนสำคัญและผิด Tense: "Wait outside? How long do you standing here in the rain?"',
          answer: 'How long have you been standing here in the rain?',
          explanation: 'ถามระยะเวลาที่ยืนต่อเนื่องจากอดีตจนถึงตอนนี้ต้องใช้ Present Perfect Continuous: How long have you been + V-ing?',
        },
        {
          kind: 'choice',
          prompt: 'เพื่อนเดินเข้ามาพร้อมเสื้อเปียกชุ่มและหอบเหนื่อย ข้อใดถามหาสาเหตุที่เพิ่งทำเสร็จหมาดๆ ได้เป็นธรรมชาติที่สุด?',
          answer: 'Have you been running in the park?',
          choices: [
            'Are you run in the park?',
            'Have you been running in the park?',
            'Did you running in the park?',
            'Have you ran in the park?',
          ],
          explanation: 'เห็นร่องรอยหลักฐานตรงหน้า (เหงื่อท่วม หอบ) ใช้ Present Perfect Continuous: Have you been running...?',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบโครงสร้าง: Sorry for the mess in the kitchen—I have _____ preparing sauces since noon.',
          answer: 'been',
          explanation: 'โครงสร้าง Present Perfect Continuous ต้องมี been เสมอ: have + been + V-ing',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "พวกเราทำงานร่วมกันในโปรเจกต์นี้มาตั้งแต่เดือนมีนาคมแล้ว"',
          answer: 'We have been collaborating on this project since March.',
          explanation: 'ใช้ have been collaborating (ต่อเนื่องถึงปัจจุบัน) + since March (จุดเริ่มต้น)',
        },
      ],
      writing:
        'เขียนอัปเดตชีวิตหรือโปรเจกต์ที่คุณทำต่อเนื่องช่วงนี้ 5–6 ประโยค โดยใช้ Present Perfect Continuous อย่างน้อย 3 ประโยค (ทั้งแบบระบุ for/since และแบบเล่าผลที่เห็นได้ชัด)',
      writingSample:
        'Lately, I have been trying to build a healthier evening routine. Since last month, I have been cooking simple dinners at home instead of ordering takeout every night. My kitchen counter looks busy because I have been experimenting with Thai herbs and roasted vegetables. At work, our team has been preparing a new onboarding guide for clients. Even though everyone feels a bit tired, we have been making steady progress each day.',
      writingNote: 'เช็กทุกประโยคที่ใช้ Present Perfect Continuous ว่ามีครบทั้ง 3 ส่วน (have/has + been + V-ing) และใช้ for กับช่วงเวลา / since กับจุดเริ่มต้นถูกต้อง',
      speakingTopic: 'เล่ากิจกรรมที่ทำต่อเนื่องช่วงนี้ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดถึงสิ่งที่คุณทำต่อเนื่องมาหลายสัปดาห์หรือหลายเดือน (งาน การออกกำลังกาย งานอดิเรก) โดยใช้ I’ve been + V-ing',
        'ยกตัวอย่าง "หลักฐานหรือผลลัพธ์เล็กๆ" ที่คนรอบข้างสังเกตเห็นได้ เช่น โต๊ะทำงานรกขึ้น สุขภาพดีขึ้น หรืออ่านไวขึ้น',
        'เน้นออกเสียง /əv bɪn/ ให้เบาและเร็ว ไม่ลากเสียง "บีน" ยาว',
      ],
    },
    {
      day: 114,
      title: 'Present Perfect Simple vs Continuous: เน้น "ผลสำเร็จ" vs "ความต่อเนื่อง" (+ Stative Verbs)',
      objective:
        'แยกแยะได้ว่าเมื่อไหร่ควรใช้ have + V3 (เน้นจำนวน/ผลที่เสร็จสิ้น) และเมื่อไหร่ใช้ have been + V-ing (เน้นเวลา/กระบวนการ) พร้อมห้ามใส่ -ing กับ Stative Verbs',
      explanation:
        'เมื่อพูดถึงช่วงเวลาจนถึงปัจจุบัน เจ้าของภาษาไม่ได้เลือก Tense มั่วๆ แต่เลือกตาม **"ภาพที่อยากให้คนฟังโฟกัส"**:\n1) **Present Perfect Continuous (`have been + V-ing`) = โฟกัสที่ "ตัวกิจกรรมและเวลาที่ใช้ไป"** (ยังไม่รู้ว่าเสร็จหรือยัง แต่ทำมานานแล้ว): `I’ve been reading all morning.` (นั่งอ่านมาทั้งเช้าเลย)\n2) **Present Perfect Simple (`have + V3`) = โฟกัสที่ "ผลลัพธ์สุดท้ายหรือจำนวนที่ทำสำเร็จ"**: `I’ve read three chapters.` (อ่านจบไป 3 บทแล้ว — ห้ามใช้ `*have been reading three chapters`!)\n3) **กฎเหล็ก Stative Verbs**: กริยาแสดงสถานะ ความรู้สึก ความสัมพันธ์ หรือการครอบครอง เช่น `know, own, belong, realize, believe, prefer` **ห้ามใช้ Continuous เด็ดขาด** ต้องใช้ Simple เสมอ: `I’ve known Mint for eight years.` (ส่วน `live` และ `work` ใช้ได้ทั้งคู่โดยความหมายแทบไม่ต่างกัน)',
      sound: [
        'Linking & Final Consonants in Past Participles',
        "I've known /aɪv nəʊn/ · chapters /ˈtʃæp.tərz/ · completed /kəmˈpliː.tɪd/",
        'เทียบเสียงย่อระหว่าง `I’ve known` (/aɪv nəʊn/ จบที่ /n/ ชัดๆ) กับ `I’ve been` (/aɪv bɪn/) ไม่ให้กลืนหายไปกับคำถัดไป',
        'ฝึกพูดคู่เทียบสลับจังหวะ 3 คู่: I’ve been painting the room / I’ve painted two walls / I’ve known him for years',
      ],
      l1: [
        'พูดว่า "I’ve been knowing him since university." หรือ "She has been writing five emails this morning."',
        'คนไทยจำว่า "ตั้งแต่...เป็นต้นมา = have been -ing เสมอ" จึงเผลอใส่ -ing กับทั้ง Stative Verbs และประโยคที่ระบุจำนวนครั้งชัดเจน',
        'เช็ก 2 ข้อก่อนเลือก Tense: 1) กริยานั้นคือ know/own/believe/like หรือเปล่า? ถ้าใช่ ใช้ Simple ทันที! 2) มีตัวเลขบอกจำนวนผลสำเร็จ (3 books, twice, 10 pages) ไหม? ถ้ามี ใช้ Simple ทันที!',
      ],
      vocab: [
        ['renovate', 'ปรับปรุงซ่อมแซม', '/ˈren.ə.veɪt/', 'renovate an old apartment', 'ปรับปรุงอพาร์ตเมนต์เก่า'],
        ['progress', 'ความคืบหน้า', '/ˈprəʊ.ɡres/', 'track real progress', 'ติดตามความคืบหน้าจริง'],
        ['chapter', 'บท (ในหนังสือ)', '/ˈtʃæp.tər/', 'finish three chapters', 'อ่านจบสามบท'],
        ['estimate', 'ประเมิน / คาดการณ์', '/ˈes.tɪ.meɪt/', 'roughly estimate costs', 'ประเมินค่าใช้จ่ายคร่าวๆ'],
        ['belong', 'เป็นของ / สังกัด', '/bɪˈlɒŋ/', 'belong to this neighborhood', 'ผูกพัน/เป็นส่วนหนึ่งของย่านนี้'],
        ['patient', 'อดทน', '/ˈpeɪ.ʃənt/', 'stay patient with delays', 'ใจเย็นอดทนกับความล่าช้า'],
      ],
      examples: [
        ['We have been renovating this kitchen for two weeks, and the tiles look dusty.', 'เราปรับปรุงครัวนี้มาสองสัปดาห์แล้ว และกระเบื้องยังเต็มไปด้วยฝุ่น'],
        ['I have painted two bedrooms since Monday.', 'ฉันทาสีห้องนอนเสร็จไปแล้วสองห้องตั้งแต่เมื่อวันจันทร์'],
        ['How long have you known your business partner?', 'คุณรู้จักหุ้นส่วนธุรกิจของคุณมานานแค่ไหนแล้ว?'],
        ['She has been answering messages all afternoon and has replied to twenty clients so far.', 'เธอตอบข้อความมาทั้งบ่าย และตอนนี้ตอบลูกค้าไปแล้ว 20 ราย'],
      ],
      reading:
        "Over coffee in Ari, Niran and Pim compare notes on their weekend projects. Pim sighs and points to paint spots on her sleeve. She and her sister have been renovating their tiny bookstore since Friday morning. Although their arms feel sore, they have already assembled four wooden shelves and sorted over two hundred secondhand novels. Niran laughs because he knows how chaotic home projects can get. They have known each other since their first job eight years ago, so he remembers Pim's ambitious plans well. Meanwhile, Niran has been practicing Spanish every evening for two months. When Pim asks how much he remembers, he admits he has only memorized about fifty useful phrases so far. Still, both friends agree that steady daily effort matters far more than overnight perfection.",
      listenQ: 'How many wooden shelves have Pim and her sister already assembled?',
      listenA: 'Four wooden shelves.',
      dictation: 'I have known my business partner for eight years.',
      listenNote: 'ระวังเสียง /n/ ท้าย known เชื่อมกับ my และเสียง /t/ ใน partner ไม่ออกเสียงหนักเกินไปแต่คงจังหวะพยางค์แรก PART-ner',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ผิดกฎ Stative Verb: "My aunt has been owning this traditional noodle shop since 1998."',
          answer: 'My aunt has owned this traditional noodle shop since 1998.',
          explanation: 'own เป็น Stative Verb (แสดงความเป็นเจ้าของ) ไม่ใช้รูป -ing ต้องเปลี่ยนเป็น Present Perfect Simple: has owned',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้คู่ Simple vs Continuous ได้ถูกต้องที่สุดตามหลัก "กิจกรรม vs จำนวนสำเร็จ"?',
          answer: 'He has been calling suppliers all morning, and he has reached three of them.',
          choices: [
            'He has called suppliers all morning, and he has been reaching three of them.',
            'He has been calling suppliers all morning, and he has reached three of them.',
            'He is calling suppliers all morning, and he reached three of them.',
            'He has been calling suppliers all morning, and he has been reaching three of them.',
          ],
          explanation: 'all morning เน้นความต่อเนื่อง (has been calling) ส่วน three of them ระบุจำนวนผลสำเร็จชัดเจน (has reached)',
        },
        {
          kind: 'gap',
          prompt: 'เติมรูปกริยาที่เหมาะสมที่สุด: Look at the floor—who has been _____ (paint) in here without a drop cloth?',
          answer: 'painting',
          explanation: 'มีหลักฐานตรงหน้า (สีเลอะพื้น) และเน้นกิจกรรมต่อเนื่อง จึงใช้ has been painting',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ฉันอ่านรายงานฉบับนี้มาทั้งเช้าแล้ว และอ่านจบไปแล้วสิบหน้า"',
          answer: 'I have been reading this report all morning, and I have read ten pages.',
          explanation: 'ส่วนแรกเน้นเวลาต่อเนื่อง (have been reading) ส่วนหลังเน้นจำนวนสำเร็จ (have read ten pages)',
        },
      ],
      writing:
        'เขียนบันทึกสั้นๆ 5–6 ประโยค เปรียบเทียบ "สิ่งที่คุณทุ่มเทเวลากับมันช่วงนี้ (Continuous)" กับ "ผลลัพธ์เป็นชิ้นเป็นอันที่ทำสำเร็จแล้ว (Simple)" และใส่ Stative Verb อย่างน้อย 1 ประโยค (เช่น know / own / believe)',
      writingSample:
        'I have been organizing our family photos since Sunday afternoon. It takes patience because hundreds of files were mixed together. So far, I have sorted six vacation albums and deleted nearly two hundred blurry shots. My sister and I have owned this old hard drive for seven years, so finding forgotten memories feels special. Even though my eyes are tired, I have learned a lot about backing up files safely.',
      writingNote: 'ตรวจคำที่ระบุจำนวน (six albums, two hundred shots) ว่าใช้ have + V3 แล้ว และตรวจว่า Stative Verbs ไม่ได้ใส่ -ing',
      speakingTopic: 'เปรียบเทียบความพยายามกับผลลัพธ์ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดถึงงานหรือทักษะที่คุณกำลังทำต่อเนื่อง (I’ve been practicing / working on...)',
        'สลับไปบอกจำนวนผลสำเร็จที่ทำได้จริงแล้วด้วย have + V3 (I’ve finished / written / completed...)',
        'แทรกความสัมพันธ์หรือความเชื่อที่ใช้ know / own / believe ในรูป Present Perfect Simple ให้ถูกต้อง',
      ],
    },
    {
      day: 115,
      title: 'Past Perfect (had + V3): การเล่า "อดีตซ้อนอดีต" ให้ลำดับเวลาชัดเจน',
      objective:
        'ใช้ had + V3 เพื่อชี้เหตุการณ์ที่เกิดขึ้น "ก่อน" เหตุการณ์อดีตอีกเหตุการณ์หนึ่ง ทำให้ผู้ฟังไม่สับสนเวลาเล่าย้อนความ',
      explanation:
        'เวลาเล่าเรื่องในอดีตตามลำดับ 1 → 2 → 3 แค่ Past Simple ก็พอแล้ว เช่น `I locked the door and walked to the station.` แต่ในชีวิตจริง เรามักเล่า **"ผลลัพธ์ทีหลังก่อน แล้วค่อยย้อนกลับไปบอกสาเหตุที่เกิดก่อนหน้านั้น"** นี่คือจุดที่ **Past Perfect (`had + V3`)** ทำงาน!\nสูตรคิดภาพในหัว: **จุดอดีตที่ 1 (เกิดก่อน = `had + V3`)** → **จุดอดีตที่ 2 (ตัวอ้างอิง = `Past Simple`)**\nตัวอย่าง: `When I reached the counter, the last ferry had already left.` (เรือออก *ก่อน* ฉันไปถึง)\nเทียบกับ `When I reached the counter, the ferry left.` (ฉันไปถึงพอดี แล้วเรือก็เพิ่งออกต่อหน้า!)\nการรู้จัก `had + V3` ทำให้คุณเล่าจุดหักมุม ความเสียดาย หรือการเตรียมตัวล่วงหน้าได้แม่นยำระดับ B1 แท้ๆ',
      sound: [
        "Contracted 'd (/d/) + V3 Clarity",
        "had left /həd left/ · I'd forgotten /aɪd fəˈɡɒt.ən/ · departed /dɪˈpɑː.tɪd/",
        'เจ้าของภาษามักย่อ had เป็น ’d เช่น "The train had already left" ลดเสียง had เป็น /həd/ หรือ "It’d already closed" แต่ต้องระวังอย่าออกเสียง ’d หายไปจนฟังเหมือน V1/V2',
        'ฝึกคู่เทียบ: When I arrived, he left. vs When I arrived, he’d already left.',
      ],
      l1: [
        'ใช้ Past Simple ล้วนพร้อมคำว่า already: "When I arrived at the meeting, everyone finished already."',
        'ภาษาไทยใช้คำว่า "แล้ว / ไปก่อนหน้านั้น" วางท้ายประโยคโดยกริยาไม่เปลี่ยนรูป ผู้เรียนจึงลืมใส่ had หน้า V3',
        'จำง่ายๆ: ถ้าเรื่องหลักอยู่ในอดีต (V2) แล้วคุณต้อง "ย้อนแฟลชแบ็ก" ไปเล่าสิ่งที่เกิดเสร็จไปก่อนหน้านั้น ให้ติดป้าย had + V3 ไว้บนเหตุการณ์ที่เกิดก่อนเสมอ',
      ],
      vocab: [
        ['depart', 'ออกเดินทาง (รถ/เรือ/เครื่อง)', '/dɪˈpɑːt/', 'had already departed', 'ได้ออกเดินทางไปแล้วก่อนหน้านั้น'],
        ['unplug', 'ถอดปลั๊ก', '/ʌnˈplʌɡ/', 'unplug the charger', 'ถอดปลั๊กที่ชาร์จออก'],
        ['realize', 'ตระหนัก / เพิ่งรู้ตัว', '/ˈrɪə.laɪz/', 'suddenly realize that', 'เพิ่งนึกขึ้นได้ทันทีว่า'],
        ['backup', 'ไฟล์สำรอง / แผนสำรอง', '/ˈbæk.ʌp/', 'save a cloud backup', 'บันทึกไฟล์สำรองไว้บนคลาวด์'],
        ['board', 'ขึ้นยานพาหนะ', '/bɔːd/', 'board the shuttle bus', 'ขึ้นรถรับส่ง'],
        ['reschedule', 'เลื่อนนัด / จัดตารางใหม่', '/ˌriːˈskedʒ.uːl/', 'reschedule an appointment', 'เลื่อนนัดหมาย'],
      ],
      examples: [
        ['When we reached the pier, the express boat had already departed.', 'ตอนที่เราไปถึงท่าเรือ เรือด่วนได้แล่นออกไปแล้วก่อนหน้านั้น'],
        ['My laptop was completely dead because someone had unplugged it overnight.', 'โน้ตบุ๊กฉันแบตหมดเกลี้ยงเพราะมีคนถอดปลั๊กออกไปตั้งแต่เมื่อคืน'],
        ['She felt relieved after she had uploaded a cloud backup.', 'เธอรู้สึกโล่งใจหลังจากที่ได้อัปโหลดไฟล์สำรองขึ้นคลาวด์ไว้แล้ว'],
        ['Before moving to Chiang Mai, Ton had never lived outside his hometown.', 'ก่อนจะย้ายมาเชียงใหม่ ต้นไม่เคยอาศัยอยู่นอกบ้านเกิดมาก่อนเลย'],
      ],
      reading:
        "Monday started chaotically for Ploy before she even stepped out of her apartment. At seven sharp, she grabbed her bag and realized her tablet battery was completely dead; her younger brother had unplugged the charger the night before to charge his headphones. She rushed downstairs anyway, hoping to catch the morning shuttle to the coworking hub. Unfortunately, when she reached the corner stop, the shuttle had already departed three minutes earlier. Feeling frustrated, Ploy called a motorcycle taxi and finally arrived at the workshop room just in time. Luckily, her teammates did not panic when her tablet refused to start. The previous evening, Ploy had saved a clean backup of the slides in their shared folder, so everyone smoothly switched to a spare screen. Looking back, one smart habit from the night before had saved the entire morning presentation.",
      listenQ: 'Why did Ploy’s tablet battery die before her morning trip?',
      listenA: 'Because her younger brother had unplugged the charger the night before.',
      dictation: 'When we reached the station, the train had already left.',
      listenNote: 'สังเกต "had already" ลดเสียง had เป็น /həd/ แล้วเชื่อมไป /ɔːlˈred.i/ และ stress ชัดที่ already และ left',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคเพื่อให้ลำดับเหตุการณ์ชัดเจนว่าไฟล์ถูกลบ "ก่อน" ที่ฉันจะเปิดดู: "Yesterday I opened the folder, and someone deleted my notes earlier."',
          answer: 'Yesterday I opened the folder, and someone had deleted my notes earlier.',
          explanation: 'opened คือจุดอ้างอิงในอดีต ส่วนการลบเกิดก่อนหน้านั้น จึงต้องใช้ Past Perfect: had deleted',
        },
        {
          kind: 'choice',
          prompt: 'ประโยคใดแสดงชัดว่า "เขากินข้าวเสร็จก่อนที่ฉันจะโทรไป"?',
          answer: 'When I called him at eight, he had already eaten dinner.',
          choices: [
            'When I called him at eight, he already ate dinner.',
            'When I called him at eight, he had already eaten dinner.',
            'When I had called him at eight, he ate dinner.',
            'When I called him at eight, he has already eaten dinner.',
          ],
          explanation: 'เหตุการณ์เกิดก่อนอดีต (called) ต้องใช้ had + V3 (had already eaten)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่าง: Before joining our Bangkok branch, Sam had never _____ (work) in hospitality.',
          answer: 'worked',
          explanation: 'Past Perfect ใช้โครงสร้าง had + V3: had never worked',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ตอนที่พวกเราไปถึงร้านอาหาร เพื่อนร่วมงานได้สั่งอาหารไว้แล้ว"',
          answer: 'When we arrived at the restaurant, our colleague had already ordered the food.',
          explanation: 'arrived (อดีตหลัก) + had already ordered (ทำไว้ก่อนหน้านั้นแล้ว)',
        },
      ],
      writing:
        'เล่าเหตุการณ์ "เกือบพลาด / โชคดีที่เตรียมตัวไว้ก่อน" ในชีวิตจริง 5–6 ประโยค โดยใช้ Past Perfect (`had + V3`) ย้อนความอย่างน้อย 3 ครั้ง',
      writingSample:
        'Last Friday, I nearly missed an important client call during a heavy storm. When I opened my calendar, I noticed the meeting link had moved to a different platform. Worse still, the café Wi-Fi stopped working ten minutes before the call started. Fortunately, I had topped up my mobile data plan earlier that morning. Because I had also tested my headset the night before, I joined smoothly from my phone hotspot.',
      writingNote: 'ตรวจสอบว่าทุกครั้งที่ย้อนไปเล่าสิ่งที่เกิดก่อนหน้าเหตุการณ์หลัก ได้ใช้ had + V3 ครบถ้วน และไม่สลับไปใช้ has + V3',
      speakingTopic: 'เล่าย้อนแฟลชแบ็กเหตุการณ์ในอดีต (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เริ่มต้นด้วยเหตุการณ์ในอดีต (Last month / Yesterday when I...) แล้วค่อยย้อนเหตุผลด้วย because ... had + V3',
        'ใช้คำเชื่อมบอกเวลา เช่น earlier, the night before, already, never ... before',
        'ระวังการออกเสียง V3 ลงท้าย -ed และ -en ให้ชัดเจน',
      ],
    },
    {
      day: 116,
      title: 'Narrative Time Control: ผสม Past Simple, Past Continuous และ Past Perfect เล่าเรื่องให้ลื่น',
      objective:
        'ควบคุมมุมกล้องการเล่าเรื่องทั้ง 3 แบบในเรื่องเดียว: ฉากหลังที่กำลังเกิด (Past Continuous), เหตุการณ์หลัก (Past Simple) และปูมหลังที่เกิดก่อน (Past Perfect)',
      explanation:
        'นักเล่าเรื่องที่ดีไม่ได้ใช้แค่ Past Simple เรียงเป็นหุ่นยนต์ แต่สลับ **"มุมกล้อง 3 ตัว"** ในอดีตได้อย่างกลมกลืน:\n1) **Past Continuous (`was/were + V-ing`) = กล้องถ่ายบรรยากาศฉากหลัง** ที่กำลังดำเนินอยู่: `Guests were chatting quietly in the lobby...`\n2) **Past Simple (`V2`) = กล้องจับเหตุการณ์หลักที่แทรกเข้ามาหรือเดินเรื่องต่อ**: `...when the projector suddenly flickered and went dark.`\n3) **Past Perfect (`had + V3`) = กล้องย้อนอดีตบอกที่มา/ความพร้อมก่อนหน้านั้น**: `Luckily, the coordinator had saved an offline version an hour earlier.`\nการผสมทั้ง 3 Tense แบบนี้ช่วยให้คนฟังเห็นภาพเป็นฉากๆ รู้ทันทีว่าอะไรเกิดพร้อมกัน อะไรเกิดทีหลัง และอะไรเตรียมไว้ก่อนแล้ว',
      sound: [
        'Intonation & Clause Pausing in Storytelling',
        'flickered /ˈflɪk.ərd/ · smoothly /ˈsmuːð.li/ · audience /ˈɔː.di.əns/',
        'เวลาเล่าประโยคซ้อน 2 ท่อน ให้ขึ้นเสียงเล็กน้อยตรงท้ายท่อนฉากหลัง ("While the team was SETTING up...") แล้วหยุด 0.3 วินาที ก่อนลงเสียงต่ำท่อนหลัก ("...the power suddenly WENT out.")',
        'ฝึกอ่านประโยค 3 กาลต่อกันด้วยจังหวะเหมือนเล่าให้เพื่อนฟัง 3 รอบ',
      ],
      l1: [
        'เล่าทั้งเรื่องด้วย V2 หรือ V1 ล้วน ทำให้เหตุการณ์ที่กำลังดำเนินอยู่ กับเหตุการณ์ที่เตรียมไว้ก่อนหน้า ปนกันจนคนฟังจับประเด็นไม่ได้',
        'ในภาษาไทยเราเพียงแค่เติม "กำลัง..." หรือ "ไว้ก่อนแล้ว" หน้าคำกริยาเดิม สมองเลยไม่อยากผัน 3 รูปพร้อมกัน',
        'วางสูตรเล่าเรื่อง 3 บรรทัดติดตัว: "ตอนนั้นกำลัง... (was/were -ing)" → "จู่ๆ ก็เกิด... (V2)" → "เป็นเพราะก่อนหน้านั้นได้... (had + V3)"',
      ],
      vocab: [
        ['flicker', 'กะพริบ (ไฟ/หน้าจอ)', '/ˈflɪk.ər/', 'the screen suddenly flickered', 'หน้าจอกะพริบขึ้นมาทันที'],
        ['outage', 'ไฟดับ / ระบบล่ม', '/ˈaʊ.tɪdʒ/', 'a brief power outage', 'เหตุไฟฟ้าดับชั่วคราว'],
        ['audience', 'ผู้ฟัง / ผู้ชม', '/ˈɔː.di.əns/', 'keep the audience engaged', 'ดึงดูดความสนใจของผู้ฟังไว้ได้'],
        ['export', 'ส่งออกไฟล์/ข้อมูล', '/ɪkˈspɔːt/', 'export an offline copy', 'ส่งออกสำเนาแบบออฟไลน์'],
        ['calmly', 'อย่างใจเย็น', '/ˈkɑːm.li/', 'handle the issue calmly', 'รับมือปัญหาอย่างใจเย็น'],
        ['relieved', 'โล่งใจ', '/rɪˈliːvd/', 'feel deeply relieved', 'รู้สึกโล่งใจอย่างมาก'],
      ],
      examples: [
        ['While the speaker was greeting guests, the microphones suddenly went silent.', 'ขณะที่ผู้บรรยายกำลังทักทายแขก ไมโครโฟนก็เงียบดับไปกะทันหัน'],
        ['Everyone stayed calm because the tech lead had prepared a spare battery pack.', 'ทุกคนยังใจเย็นเพราะหัวหน้าทีมเทคนิคได้เตรียมแบตเตอรี่สำรองไว้ก่อนแล้ว'],
        ['As soon as the power returned, we continued the demo without losing data.', 'ทันทีที่ไฟกลับมา เราก็สาธิตต่อได้โดยไม่เสียข้อมูลเลย'],
        ['I did not recognize the new cafe because they had redesigned the entire front garden.', 'ฉันจำคาเฟ่ร้านเดิมแทบไม่ได้เลยเพราะเขาจัดสวนหน้าร้านใหม่ทั้งหมดไว้ก่อนแล้ว'],
      ],
      reading:
        "During our annual design showcase in Thonglor, everything tested our nerves in less than five minutes. At two o'clock, forty guests were sipping iced tea and chatting warmly while our presenter was introducing the final prototype. Suddenly, a heavy thunderstorm rolled across the street, and the ceiling lights flickered before cutting out completely. For three seconds, the room fell silent. Fortunately, nobody panicked because our operations lead had exported an offline slide deck onto a charged tablet earlier that morning. While two staff members were opening the side curtains for natural daylight, the presenter moved closer to the front row and kept the audience engaged with live samples. By the time building maintenance restored the main generator ten minutes later, the audience had already asked thoughtful questions and praised our calm teamwork.",
      listenQ: 'What were the guests doing right before the thunderstorm cut out the lights?',
      listenA: 'They were sipping iced tea and chatting warmly.',
      dictation: 'While we were waiting, the rain had already stopped.',
      listenNote: 'ลดเสียง were เป็น /wər/ และ had เป็น /həd/ เพื่อให้คำกริยาหลัก waiting และ stopped เด่นชัด',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคเล่าเรื่องให้ครบ 3 มิติเวลา: "When the manager walked in, we discussed the budget because someone sent wrong numbers before."',
          answer: 'When the manager walked in, we were discussing the budget because someone had sent wrong numbers before.',
          explanation: 'ตอนที่ผู้จัดการเดินเข้ามา พวกเรากำลังถกกันอยู่ (were discussing) และตัวเลขผิดถูกส่งมาก่อนหน้านั้นแล้ว (had sent)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดเรียงร้อยฉากหลัง + เหตุการณ์หลัก + เหตุการณ์ก่อนหน้า ได้สมบูรณ์แบบที่สุด?',
          answer: 'The kitchen was buzzing with orders when the oven shut off because a fuse had blown.',
          choices: [
            'The kitchen buzzed with orders when the oven was shutting off because a fuse blew.',
            'The kitchen was buzzing with orders when the oven shut off because a fuse had blown.',
            'The kitchen was buzzed with orders when the oven shut off because a fuse has blown.',
            'The kitchen is buzzing with orders when the oven shut off because a fuse had blown.',
          ],
          explanation: 'was buzzing (บรรยากาศกำลังเกิด) + shut off (เหตุการณ์หลักแทรก) + had blown (สาเหตุที่เกิดก่อน)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่าง: We _____ (pack) our bags when the driver texted that he had arrived downstairs.',
          answer: 'were packing',
          explanation: 'กำลังจัดกระเป๋าอยู่ (ฉากหลังต่อเนื่อง) ตอนที่คนขับส่งข้อความมา: were packing',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ขณะที่พวกเรากำลังตรวจเช็กห้องประชุม ทีมงานก็ได้ตั้งค่าโปรเจกเตอร์ไว้เรียบร้อยแล้ว"',
          answer: 'While we were checking the meeting room, the staff had already set up the projector.',
          explanation: 'While we were checking (กำลังทำ) + had already set up (ทำเสร็จไว้ก่อนแล้ว)',
        },
      ],
      writing:
        'เขียนเรื่องสั้น 6–7 ประโยค เล่าเหตุการณ์ไม่คาดฝันที่ทำงานหรือระหว่างเดินทาง โดยต้องใช้ครบทั้ง 3 Tense: Past Continuous (บรรยากาศ), Past Simple (เหตุการณ์หลัก) และ Past Perfect (สิ่งที่เกิดขึ้นก่อนหน้า)',
      writingSample:
        'Last Wednesday evening, I was riding the train home while reading a novel. Suddenly, the train slowed down and stopped between stations. Some passengers looked worried because a power issue had delayed earlier trains on the same line. Luckily, I had downloaded a podcast before boarding and carried a small bottle of water. Ten minutes later, the lights flickered back on, and we reached the station safely.',
      writingNote: 'ขีดเส้นใต้ Tense ทั้ง 3 แบบในงานเขียนของคุณเพื่อตรวจว่าใช้ถูกบทบาท: ฉากหลัง (-ing), เดินเรื่อง (V2), ย้อนอดีต (had + V3)',
      speakingTopic: 'เล่าเรื่องสั้นที่มีฉากหลัง + เหตุหักมุม (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ตั้งฉากด้วย was/were + V-ing ให้คนฟังนึกภาพบรรยากาศออก',
        'ตัดเข้าจุดหักมุมด้วย Past Simple (Suddenly...) และเฉลยเบื้องหลังด้วย had + V3',
        'เน้นการเว้นจังหวะและโทนเสียงตรงคำเชื่อม While / Suddenly / Fortunately',
      ],
    },
    {
      day: 117,
      title: 'Time Signals แม่นยำ: by the time, until, before, after, lately, recently, all week',
      objective:
        'เลือกใช้คำบอกเวลาขั้นสูงคู่กับ Tense ที่ถูกต้อง โดยเฉพาะคู่ที่คนไทยสับสนบ่อยอย่าง by the time vs until และ lately vs earlier',
      explanation:
        'คำบอกเวลาคือ "ป้ายบอกทาง" ของประโยค แต่คนเรียนระดับ B1 มักใช้ป้าย 2 คู่นี้สลับกัน:\n1) **`by the time` (กว่าจะถึงตอนนั้น... ก็เสร็จไปแล้ว)** vs **`until` (ทำต่อเนื่องไปจนกระทั่ง... แล้วหยุด)**\n- `By the time I got home, Mom had already cooked dinner.` (ตอนถึงบ้าน ข้าวเสร็จแล้ว — ใช้คู่ `Past Perfect`)\n- `I waited at the lobby until my friend arrived.` (นั่งรอต่อเนื่องไปจนกระทั่งเพื่อนมาถึง — ใช้ `Past Simple` ต่อเนื่องถึงจุดจบ)\n2) **`lately / recently` (ช่วงนี้ / เมื่อเร็วๆ นี้)**: คู่กับ `Present Perfect Simple/Continuous` เช่น `Have you seen any good films lately?` หรือ `I’ve been sleeping poorly recently.`\n3) **`all week / all morning`**: เน้นความต่อเนื่องยาวนาน คู่กับ `have/has been + V-ing` หรือ `Past Continuous` ตามบริบท',
      sound: [
        'Linking & Rhythm in Time Phrase Chunks',
        'by the time /baɪ ðə ˈtaɪm/ · until /ənˈtɪl/ · recently /ˈriː.sənt.li/',
        'พูด "by the time" เป็นก้อนเดียวไม่แยกคำ โดยลด "the" เบาๆ /baɪ ðə taɪm/ และ "lately" ออกเสียง /ˈleɪt.li/ (ไม่ลด t เป็น /t/ ชัดแบบลากยาว แต่กักลม /t/ นิดเดียวก่อน /l/)',
        'ฝึกพูด 4 วลีนำหน้าให้คล่องปาก: By the time we arrived... / Until last month... / Lately I’ve been... / All week long...',
      ],
      l1: [
        'ใช้ "Until I arrived at the airport, the counter closed." (แปลตรงคำว่า "กว่าจะถึง... / จนกระทั่ง...")',
        'ในภาษาไทย "จนกระทั่ง" ใช้แทนได้ทั้งช่วงรอต่อเนื่อง และผลที่เกิดขึ้นเรียบร้อยแล้วตอนไปถึง',
        'แยกชัดๆ: ถ้าแปลว่า "รอ/ทำไปเรื่อยๆ จนถึงจุดนี้" ใช้ until | ถ้าแปลว่า "กว่าจะถึงตอนนั้น อีกเรื่องหนึ่งก็เสร็จ/จบไปแล้ว" ใช้ by the time + Past Perfect!',
      ],
      vocab: [
        ['swap', 'แลกเปลี่ยน', '/swɒp/', 'organize a neighborhood book swap', 'จัดงานแลกหนังสือในชุมชน'],
        ['volunteer', 'อาสาสมัคร', '/ˌvɒl.ənˈtɪər/', 'local volunteers', 'อาสาสมัครในพื้นที่'],
        ['settle', 'ลงตัว / จัดการเรียบร้อย', '/ˈset.əl/', 'settle the final details', 'สรุปรายละเอียดสุดท้ายให้ลงตัว'],
        ['postpone', 'เลื่อนออกไป', '/pəʊstˈpəʊn/', 'postpone until next Sunday', 'เลื่อนออกไปจนถึงวันอาทิตย์หน้า'],
        ['lately', 'ช่วงหลังๆ มานี้', '/ˈleɪt.li/', 'feel busier lately', 'ช่วงนี้รู้สึกยุ่งขึ้น'],
        ['crate', 'ลังไม้ / กล่องใส่ของ', '/kreɪt/', 'carry heavy crates', 'ยกลังใส่ของหนักๆ'],
      ],
      examples: [
        ['By the time we unpacked the last crate, forty readers had already queued outside.', 'กว่าเราจะเปิดลังสุดท้ายเสร็จ นักอ่านสี่สิบคนก็มาต่อแถวด้านนอกแล้ว'],
        ['We kept the registration desk open until the final speaker finished.', 'เราเปิดโต๊ะลงทะเบียนต่อไปเรื่อยๆ จนกระทั่งผู้พูดคนสุดท้ายพูดจบ'],
        ['Have you been getting enough rest lately with the new schedule?', 'ช่วงนี้คุณได้พักผ่อนเพียงพอไหมกับตารางงานใหม่?'],
        ['I had never volunteered at a community event until last month.', 'ฉันไม่เคยเป็นอาสาสมัครในงานชุมชนมาก่อนเลยจนกระทั่งเดือนที่แล้ว'],
      ],
      reading:
        "All week, a group of neighbors has been sorting donated novels for Sunday's community book swap. Lately, people have been cleaning out their shelves and dropping off boxes faster than anyone expected. Until Friday evening, the volunteers worried they would not have enough tables for over six hundred books. However, two nearby cafés generously lent folding tables after hearing about the project. On Sunday morning, organizers arrived at seven to label genres and arrange chairs under the trees. By the time the neighborhood clock struck nine, early visitors had already browsed half of the poetry table and swapped twenty children's stories. Recently, small local events like this have been bringing quiet streets back to life. Even after the tents came down at noon, neighbors stayed to chat until the afternoon sun cooled down.",
      listenQ: 'What had early visitors already done by nine o’clock on Sunday morning?',
      listenA: 'They had browsed half of the poetry table and swapped twenty children’s stories.',
      dictation: 'By the time we arrived, they had settled the details.',
      listenNote: 'สังเกตจังหวะหยุดสั้นๆ หลัง arrived และการลดเสียง had ใน they had settled (/ðeɪd ˈset.əld/ หรือ /ðeɪ həd ˈset.əld/)',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ตัวเชื่อมเวลาที่ผิดความหมาย: "Until the ambulance arrived, the neighbors already helped the cyclist."',
          answer: 'By the time the ambulance arrived, the neighbors had already helped the cyclist.',
          explanation: 'สื่อว่า "กว่าจะถึงตอนนั้น อีกฝ่ายได้ช่วยไปแล้ว" ต้องใช้ By the time + Past Perfect (had already helped)',
        },
        {
          kind: 'choice',
          prompt: 'ประโยคใดใช้คู่คำบอกเวลากับ Tense ได้แม่นยำ 100%?',
          answer: 'Lately, our team has been testing a faster delivery route.',
          choices: [
            'Lately, our team tests a faster delivery route.',
            'Lately, our team has been testing a faster delivery route.',
            'By the time tomorrow, I had finished the draft.',
            'She stayed at the library by the time it closed at eight.',
          ],
          explanation: 'lately ใช้กับ Present Perfect Simple/Continuous (has been testing) ส่วน stayed ต่อเนื่องจนปิดต้องใช้ until',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำเชื่อมเวลาให้ตรงความหมาย "ทำต่อเนื่องไปจนกระทั่ง": We cannot release the update _____ every bug is resolved.',
          answer: 'until',
          explanation: 'ยังไม่ปล่อยอัปเดตไปเรื่อยๆ จนกระทั่งแก้บั๊กครบ ใช้ until',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "กว่าพวกเราจะไปถึงหน้าประตูทางเข้า ตั๋วก็ถูกขายหมดไปแล้ว"',
          answer: 'By the time we reached the entrance gate, the tickets had already sold out.',
          explanation: 'By the time + reached (อดีตหลัก) + had already sold out (หมดไปก่อนหน้านั้นแล้ว)',
        },
      ],
      writing:
        'เขียนเล่าเบื้องหลังงานกิจกรรม ทริป หรือการทำงานกลุ่ม 5–6 ประโยค โดยบังคับใช้คำบอกเวลาทั้ง 4 ตัวให้ถูกบริบท: `all week`, `lately`, `until`, และ `by the time`',
      writingSample:
        'Lately, our neighborhood club has been planning an outdoor movie night. Volunteers have been collecting cushions and testing speakers all week. We kept adjusting the screen angle until the image looked sharp in the dark. By the time families started walking into the park at six, the snack table had already opened and music was playing softly.',
      writingNote: 'ตรวจสอบคู่โครงสร้างหลัง by the time ว่าอีกประโยคใช้ Past Perfect (had + V3) และตรวจคำสะกด lately / until (ตัว l ตัวเดียว!)',
      speakingTopic: 'เล่าเตรียมงานหรือเหตุการณ์ที่แข่งกับเวลา (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เริ่มจากภาพรวมช่วงนี้ด้วย Lately I’ve been... หรือ All week I’ve been...',
        'เล่าจุดที่ต้องรอหรือทำต่อเนื่องด้วย until และจุดที่ทำเสร็จก่อนเวลาด้วย by the time + had V3',
        'ออกเสียงวลีเชื่อมเวลาเป็นก้อนลื่นไหลไม่สะดุด',
      ],
    },
    {
      day: 118,
      title: 'Life Updates & Long-Term Projects: อัปเดตชีวิต นิสัยใหม่ และจุดเปลี่ยนอย่างเป็นธรรมชาติ',
      objective:
        'สนทนาแลกเปลี่ยนเรื่องราวชีวิตเมื่อไม่ได้เจอกันนานได้อย่างมีมิติ โดยผสาน Present Perfect Continuous, Simple และ Past Perfect อย่างลื่นไหล',
      explanation:
        'เวลาบังเอิญเจอเพื่อนเก่าหรือคุยอัปเดตในทีม คนที่พูดระดับ A1 มักพูดได้แค่ `I’m fine. I work at a company.` ซึ่งสั้นเกินไปจนบทสนทนาตัน! เจ้าของภาษาในระดับ B1 ใช้สูตร **"3 ชั้นการอัปเดตชีวิต"**:\n1) **ช่วงนี้ทำอะไรต่อเนื่อง (`have been + V-ing`)**: `I’ve been training for a half-marathon lately.`\n2) **ผลสำเร็จ/สิ่งที่เพิ่งเปลี่ยน (`have + V3` + Stative)**: `I’ve moved to a quieter neighborhood and I’ve already made new friends.`\n3) **จุดเริ่มต้นในอดีตก่อนจะมาถึงวันนี้ (`Past Simple + Past Perfect`)**: `I switched roles last year because I had never worked in product design before.`\nพอพูดครบ 3 ชั้นแบบนี้ บทสนทนาจะน่าฟัง ดูโต และต่อยอดคำถามกันได้ยาวเลยครับ!',
      sound: [
        'Conversational Openers & Reaction Stress',
        'catching up /ˈkætʃ.ɪŋ ʌp/ · surprisingly /səˈpraɪ.zɪŋ.li/ · shift /ʃɪft/',
        'ออกเสียงคำเกริ่นอัปเดตด้วยน้ำเสียงกระตือรือร้น: "Guess what—I’ve been...", "Believe it or not, I’d never..." โดยขึ้นเสียงสูงตรง Believe it or NOT',
        'ฝึกซ้อมถาม-ตอบ 2 คู่: What have you been up to lately? / How’s that new project going?',
      ],
      l1: [
        'เวลาถูกถาม "What have you been up to lately?" มักตอบแค่ "Nothing special, I work every day." (ใช้ Present Simple แทนการเล่าช่วงนี้)',
        'ไม่คุ้นชินกับการเชื่อมระหว่างเหตุการณ์ปัจจุบันที่กำลังทำ กับเหตุผลเบื้องหลังในอดีตที่นำมาสู่สิ่งนี้',
        'เตรียมชุดคำตอบ 3 ประโยคไว้ล่วงหน้า: 1) ช่วงนี้กำลังทุ่มเทอะไร (I’ve been...) 2) สำเร็จอะไรไปบ้าง (I’ve already...) 3) ทำไมถึงเริ่ม (Before that, I’d never...)',
      ],
      vocab: [
        ['catch up', 'คุยอัปเดตสารทุกข์สุกดิบ', '/kætʃ ʌp/', 'catch up over coffee', 'นั่งคุยอัปเดตชีวิตพลางดื่มกาแฟ'],
        ['shift', 'การเปลี่ยนแปลง / ย้ายสาย', '/ʃɪft/', 'make a career shift', 'เปลี่ยนสายงาน'],
        ['discipline', 'วินัย', '/ˈdɪs.ə.plɪn/', 'build daily discipline', 'สร้างวินัยรายวัน'],
        ['burnout', 'ภาวะหมดไฟ', '/ˈbɜːn.aʊt/', 'recover from burnout', 'ฟื้นตัวจากภาวะหมดไฟ'],
        ['milestone', 'หมุดหมายสำคัญ', '/ˈmaɪl.stəʊn/', 'reach a personal milestone', 'ก้าวถึงหมุดหมายส่วนตัว'],
        ['rewarding', 'คุ้มค่า / น่าภาคภูมิใจ', '/rɪˈwɔː.dɪŋ/', 'feel deeply rewarding', 'รู้สึกคุ้มค่าและอิ่มเอมใจ'],
      ],
      examples: [
        ['It has been ages since we last caught up—what have you been working on?', 'นานมากแล้วนะที่เราไม่ได้คุยอัปเดตกันเลย ช่วงนี้คุณทำอะไรอยู่บ้าง?'],
        ['I have been cycling along the river every morning to recover from burnout.', 'ฉันปั่นจักรยานเลียบแม่น้ำทุกเช้าเพื่อฟื้นตัวจากภาวะหมดไฟ'],
        ['So far, I have completed three community design projects this year.', 'จนถึงตอนนี้ ฉันทำโปรเจกต์ออกแบบให้ชุมชนสำเร็จไปแล้วสามงานในปีนี้'],
        ['Before making that career shift, she had spent six years in accounting.', 'ก่อนที่จะเปลี่ยนสายงานนั้น เธอใช้เวลาหกปีอยู่ในสายงานบัญชีมาก่อน'],
      ],
      reading:
        "When Khao and Beam bump into each other at an art market in Bangkok, they immediately grab iced matcha to catch up. They have not seen each other since a friend's wedding two winters ago. Beam asks what Khao has been doing lately, and Khao grins excitedly. For the past eight months, he has been building a small zero-waste packaging studio with two university friends. Although the work takes huge daily discipline, they have already partnered with twelve local bakeries. Beam shares her own update too: she left corporate marketing last autumn after she had finally recovered from severe burnout. Before making that career shift, she had never imagined teaching pottery classes on weekends. Now she has been running beginner workshops for four months and finds the pace deeply rewarding. Both agree that stepping outside old routines felt scary at first, yet every small milestone has proved worth the leap.",
      listenQ: 'How many local bakeries has Khao’s studio already partnered with?',
      listenA: 'Twelve local bakeries.',
      dictation: 'What have you been working on lately?',
      listenNote: 'สังเกตคำว่า "What have you" พูดเร็วเชื่อมเสียงเป็น /ˈwɒt.əv.jə/ (วอท-เทิฟ-เยอะ) และยกเสียงสูงท้ายประโยคเล็กน้อยเพราะเป็นคำถามกันเอง',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้บทสนทนาอัปเดตชีวิตให้เป็นธรรมชาติและถูกกาล: "Recently I am learning guitar for six months, and before that I never touched an instrument."',
          answer: 'Recently I have been learning guitar for six months, and before that I had never touched an instrument.',
          explanation: 'เรียนต่อเนื่อง 6 เดือนจนถึงตอนนี้ใช้ have been learning และย้อนอดีตก่อนหน้านั้นใช้ had never touched',
        },
        {
          kind: 'choice',
          prompt: 'เพื่อนถามว่า "What have you been up to these days?" คำตอบใดฟังลื่นไหล เป็นธรรมชาติ และถูกไวยากรณ์?',
          answer: "I've been training for a 10K run, and I've already hit my weekly distance goal twice!",
          choices: [
            "I'm training for a 10K run for three months, and I hit my goal two times already.",
            "I've been training for a 10K run, and I've already hit my weekly distance goal twice!",
            'I trained for a 10K run since January, and I have been hitting my goal twice.',
            'I have been train for a 10K run, and I never ran before last year.',
          ],
          explanation: 'ใช้ Present Perfect Continuous เล่าสิ่งที่กำลังมุ่งมั่นช่วงนี้ + Present Perfect Simple บอกจำนวนครั้งที่ทำได้สำเร็จ (twice)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบก้อนคำ: Before moving to Phuket, I had never _____ (run) a guest house before.',
          answer: 'run',
          explanation: 'กริยา 3 ช่องของ run คือ run – ran – run ดังนั้นหลัง had never ใช้ V3 คือ run',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ช่วงนี้เธอฝึกภาษาสเปนมาตลอดเลย เพราะก่อนหน้านี้เธอไม่เคยเรียนมาก่อน"',
          answer: 'She has been practicing Spanish lately because she had never studied it before.',
          explanation: 'ช่วงนี้ทำต่อเนื่อง (has been practicing ... lately) + อดีตก่อนหน้านั้น (had never studied)',
        },
      ],
      writing:
        'เขียนอีเมลหรือข้อความยาว 6–7 ประโยคส่งหาเพื่อนเก่าที่ไม่ได้คุยกันมา 1 ปี อัปเดตสิ่งที่คุณทำต่อเนื่องช่วงนี้ + ผลสำเร็จ 1–2 อย่าง + สิ่งที่คุณไม่เคยคิดจะทำมาก่อนแต่ตอนนี้ทำแล้ว',
      writingSample:
        'Hey Mint! It feels like ages since we last caught up. Lately, I have been working on a small urban gardening balcony at my condo. Over the past three months, I have grown basil, mint, and even two cherry tomato plants! Before moving into this place, I had never kept a single plant alive, so this feels like a real milestone. I have also been taking evening swimming lessons twice a week. What have you been up to recently?',
      writingNote: 'เช็กการสลับ Tense: ช่วงนี้ทำต่อเนื่อง (have been + V-ing) vs ผลสำเร็จ (have + V3) vs ก่อนหน้านี้ในอดีต (had + V3)',
      speakingTopic: 'Catching Up with an Old Friend (4 / 3 / 2 นาที)',
      speakingBullets: [
        'จำลองว่ากำลังเล่าอัปเดตชีวิต 6 เดือนที่ผ่านมาให้เพื่อนฟังอย่างออกรส',
        'บังคับใช้ครบ: 1) I’ve been + V-ing 2) I’ve already + V3 3) Before that, I’d never + V3',
        'คุมเสียง ’ve been (/əv bɪn/) และ ’d (/d/) ให้เป็นธรรมชาติไม่สะดุด',
      ],
    },
    {
      day: 119,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 17: Deep Time Control & Dictogloss',
      objective:
        'ทบทวนและสังเคราะห์ Present Perfect Continuous vs Simple, Past Perfect และการเล่าเรื่อง 3 กาลผ่าน Dictogloss และโจทย์สถานการณ์จริง',
      explanation:
        'ครบสัปดาห์ที่ 17 แล้ว! สัปดาห์นี้คุณได้ก้าวข้ามจากการเล่าเรื่องเป็นเส้นตรงแบบ A1–A2 มาสู่การ **"คุมเวลาหลายชั้นอย่างแม่นยำ"** ทบทวนภาพใหญ่ 4 แกนก่อนทำ Dictogloss:\n1) **ต่อเนื่องถึงตอนนี้ / มีหลักฐานตรงหน้า**: `have/has been + V-ing` (อย่าลืม `been`)\n2) **ผลสำเร็จเป็นจำนวน / Stative Verbs**: `have/has + V3` (`read 3 chapters`, `known him for years`)\n3) **แฟลชแบ็กอดีตซ้อนอดีต**: `had + V3` (เกิดก่อนจุดอดีตหลัก เช่น `By the time..., ... had already...`)\n4) **เล่าเรื่อง 3 กล้อง**: ฉากหลัง (`was/were -ing`) + เหตุการณ์หลัก (`V2`) + ที่มาก่อนหน้า (`had + V3`)',
      sound: [
        'Week 17 Fluency & Weak-Form Review',
        "I've been /aɪv bɪn/ · she'd already /ʃiːd ɔːlˈred.i/ · until /ənˈtɪl/",
        'ซ้อมเชื่อมเสียงทั้งหมดในบทอ่านวันนี้ด้วยจังหวะสม่ำเสมอ ไม่เน้นคำช่วย (have, has, been, had, was, were) แต่ชัดที่คำกริยาหลักและเสียงท้าย -ed / -s',
        'ทำ Shadowing บทอ่านวันนี้อย่างน้อย 2 รอบก่อนลงมือทำแบบฝึก Dictogloss',
      ],
      l1: [
        'เวลาต้องเลือกหลาย Tense ในย่อหน้าเดียวกัน มักสับสนระหว่าง "have been + V3" (ผิด!) กับ "have been + V-ing" หรือ "had + V3"',
        'สมองจำคำว่า "been" กับ "had" ปนกันเมื่อยังไม่ได้แยกภาพเวลาในหัวให้ขาด',
        'ท่องสูตรติดสมอง: ปัจจุบันต่อเนื่อง = have/has BEEN + V-ing | อดีตซ้อนอดีต = HAD + V3 | ถูกกระทำค่อยเรียนสัปดาห์หน้า!',
      ],
      vocab: [
        ['retrospective', 'การทบทวนย้อนหลัง', '/ˌret.rəˈspek.tɪv/', 'hold a team retrospective', 'จัดประชุมทบทวนงานทีม'],
        ['bottleneck', 'คอขวด / จุดติดขัด', '/ˈbɒt.əl.nek/', 'spot a workflow bottleneck', 'พบจุดติดขัดในกระบวนการ'],
        ['smoothly', 'อย่างราบรื่น', '/ˈsmuːð.li/', 'run surprisingly smoothly', 'ดำเนินไปอย่างราบรื่นเกินคาด'],
        ['consistent', 'สม่ำเสมอ', '/kənˈsɪs.tənt/', 'stay consistent over time', 'รักษาความสม่ำเสมอตลอดเวลา'],
        ['frustrated', 'หงุดหงิด / ท้อใจ', '/frʌsˈtreɪ.tɪd/', 'feel slightly frustrated', 'รู้สึกหงุดหงิดใจเล็กน้อย'],
        ['verify', 'ตรวจสอบยืนยัน', '/ˈver.ɪ.faɪ/', 'verify every detail', 'ตรวจสอบยืนยันทุกรายละเอียด'],
      ],
      examples: [
        ['Our team has been tracking daily workflow bottlenecks since early May.', 'ทีมของเราติดตามจุดติดขัดในงานประจำวันมาตั้งแต่ต้นเดือนพฤษภาคม'],
        ['We have already verified three new solutions during this morning’s review.', 'เราได้ตรวจสอบยืนยันทางแก้ใหม่สามข้อไปแล้วระหว่างการทบทวนเช้านี้'],
        ['When the manager joined the call, everyone had already shared their honest notes.', 'ตอนที่ผู้จัดการเข้าสายประชุม ทุกคนได้แชร์บันทึกอย่างตรงไปตรงมาไว้ก่อนแล้ว'],
        ['While we were discussing next steps, the system finally stopped lagging.', 'ขณะที่เรากำลังหารือขั้นต่อไป ระบบก็หยุดหน่วงลงในที่สุด'],
      ],
      reading:
        "During Friday's team retrospective, everyone noticed how much smoother work has felt lately. For the past six weeks, the support squad has been tracking customer delays to spot hidden bottlenecks. So far, they have resolved fourteen recurring issues and shortened reply times by half. Earlier in the spring, however, the process had felt chaotic. One Tuesday in March, agents were answering dozens of urgent chats when the shared dashboard suddenly froze. Nobody knew what had happened until the tech lead checked the server logs and found that an unscheduled script had filled the memory overnight. By the time engineering restarted the system, customers had already waited nearly forty minutes. That tough afternoon taught everyone a clear lesson: stay consistent with monitoring, verify updates early, and keep calm when unexpected trouble hits.",
      listenQ: 'How many recurring issues has the support squad resolved so far?',
      listenA: 'Fourteen recurring issues.',
      dictation: 'By the time they checked, the memory had filled overnight.',
      listenNote: 'จับเสียงเชื่อม "by the time" และเสียง "had filled" ไม่ให้กลืนหายจนฟังเหมือน Past Simple ธรรมดา',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังเสียงบทสรุปแล้วเลือกคู่คำที่เติมลงช่องว่างได้ตรงต้นฉบับ: "For the past six weeks, the support squad _____ tracking customer delays to spot _____."',
          answer: 'has been / hidden bottlenecks',
          choices: [
            'has been / hidden bottlenecks',
            'had been / simple mistakes',
            'have been / daily replies',
            'was / minor delays',
          ],
          explanation: 'จากบทอ่าน: "For the past six weeks, the support squad has been tracking customer delays to spot hidden bottlenecks."',
          audio_text: 'For the past six weeks, the support squad has been tracking customer delays to spot hidden bottlenecks.',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคทบทวนที่มีจุดพลาด 2 จุด: "I have been knowing Sara since five years, and before I met her I never visited Phuket."',
          answer: 'I have known Sara for five years, and before I met her I had never visited Phuket.',
          explanation: '1) know ไม่ใช้ -ing และ five years ใช้ for (ไม่ใช่ since) 2) อดีตก่อน met ใช้ had never visited',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดคุมลำดับเวลาทั้ง 3 มิติได้ถูกต้องและชัดเจนที่สุด?',
          answer: 'When I reached the clinic, patients were waiting quietly because the doctor had been delayed by traffic.',
          choices: [
            'When I reached the clinic, patients waited quietly because the doctor delayed by traffic.',
            'When I reached the clinic, patients were waiting quietly because the doctor had been delayed by traffic.',
            'When I was reaching the clinic, patients have been waiting quietly because the doctor had delayed.',
            'By the time I reached the clinic, patients were waiting quietly because the doctor has delayed.',
          ],
          explanation: 'reached (จุดเวลาอดีต) + were waiting (กำลังเกิดขึ้นตอนนั้น) + had been delayed (เหตุที่เกิดก่อนหน้านั้น)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่าง: She has been writing emails all morning, and she has _____ (send) twelve replies already.',
          answer: 'sent',
          explanation: 'ระบุจำนวนผลสำเร็จ twelve replies ใช้ Present Perfect Simple: has sent',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ฉันรออยู่ที่หน้าประตูจนกระทั่งฝนหยุดตก แต่กว่าจะถึงร้าน อาหารก็เย็นหมดแล้ว"',
          answer: 'I waited at the door until the rain stopped, but by the time I reached the shop, the food had already gotten cold.',
          explanation: 'waited ... until ... stopped (รอต่อเนื่องจนหยุด) + by the time I reached ... had already gotten cold (เย็นไปก่อนแล้ว)',
        },
      ],
      writing:
        'สรุปประจำสัปดาห์ (6–8 ประโยค): เล่าพัฒนาการเรื่องการเรียนภาษาอังกฤษหรือโปรเจกต์งานของคุณ โดยผสมครบทั้ง: 1) สิ่งที่ทำต่อเนื่องช่วงนี้ 2) ผลลัพธ์ที่ทำได้แล้ว 3) บทเรียนจากเหตุการณ์พลาดครั้งก่อนในอดีต',
      writingSample:
        'Over the last six weeks, I have been spending one hour every morning building real English habits. So far, I have completed over one hundred listening drills and written sixteen short paragraphs in my notebook. Last year, whenever I tried to speak quickly, I froze because I had never practiced timed storytelling before. By the time I finished my first week of speaking aloud, my confidence had already grown noticeably. While I was reviewing my old notes yesterday, I realized how consistent effort changes everything.',
      writingNote: 'เช็ก 4 จุดก่อนจบสัปดาห์ 17: have been + V-ing | have + V3 (ผลสำเร็จ/Stative) | had + V3 (อดีตก่อนอดีต) | by the time vs until',
      speakingTopic: 'Week 17 Mastery Speech: เล่าพัฒนาการ + เหตุการณ์ย้อนอดีต (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูด 4 นาที → 3 นาที → 2 นาที เชื่อมปัจจุบันต่อเนื่อง (I’ve been...) เข้ากับอดีตซ้อนอดีต (Before that, I’d...)',
        'ตั้งใจออกเสียง /əv bɪn/ และ /həd/ ให้เป็นจังหวะสม่ำเสมอ ไม่สะดุดตรงกริยาช่วย',
        'แทรกคำบอกเวลาอย่างน้อย 3 คำ: lately, all week, until, by the time',
      ],
    },
  ]
);
