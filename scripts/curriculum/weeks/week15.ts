import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 2: เล่าเรื่อง ตอบโต้ และเชื่อมความคิดในชีวิตประจำวัน';

export const WEEK15: ModuleSeed = createModule(
  {
    week: 15,
    phase: 2,
    phase_title: PHASE_TITLE,
    cefr_level: 'Early B1',
    title: 'Relative Clauses: ขยายความและเชื่อมประโยคให้ลื่นไหล',
    summary:
      'เชื่อมประโยคสั้นๆ ด้วย who, which, that, where, when, whose แบบ Defining และ Non-defining พร้อมวิธีละคำเชื่อมแบบเจ้าของภาษา',
    focus: 'Defining/Non-defining Relative Clauses & Omission',
  },
  [
    {
      day: 99,
      title: 'Defining Relative Clauses (who, which, that) — ห้ามทิ้งสรรพนามซ้ำ!',
      objective:
        'เชื่อมคำนามคนหรือสิ่งของด้วย who / which / that ได้อย่างแม่นยำ และแก้จุดผิดอันดับหนึ่งของคนไทยที่ทิ้ง it / him / them ซ้ำท้ายประโยค',
      explanation:
        'ในระดับ A1 เรามักพูดประโยคสั้นๆ ขาดเป็นท่อนว่า `"I met a designer. She lives near Ari."` เมื่อเข้าสู่ B1 เราเชื่อมให้ลื่นด้วย **Defining Relative Clauses** เพื่อชี้ชัดว่าหมายถึงคนไหนหรืออันไหน:\n- **`who`** (หรือ `that`) ใช้ขยาย **คน**: `The woman who works beside me speaks three languages.`\n- **`which`** (หรือ `that`) ใช้ขยาย **สิ่งของ/สถานที่/ไอเดีย**: `The app which tracks my habits is free.`\n\n**กับดักคนไทยที่ผิดบ่อยมาก**: ห้ามทิ้งสรรพนามซ้ำไว้ท้ายประโยค! เพราะ `who / which / that` ทำหน้าที่แทนคำนามนั้นไปแล้ว เช่น ❌ *"The book that I bought **it** yesterday is great."* → ที่ถูกคือ **`The book that I bought yesterday is great.`** ✅ (ตัด `it` ทิ้ง!)',
      sound: [
        'Weak "that" /ðət/ in Relative Clauses',
        'colleague /ˈkɒl.iːɡ/ · recommend /ˌrek.əˈmend/ · specific /spəˈsɪf.ɪk/',
        'ระวัง! `that` ที่ใช้เชื่อม Relative Clause อ่านเสียงเบาว่า `/ðət/` ไม่ใช่อ่านชัดว่า `/ðæt/` เหมือน "สิ่งนั้น": `the tool that helps` → `/ðə tuːl ðət helps/`',
        'ฝึกพูดเชื่อมคล่องไม่หยุดหายใจกลางก้อน: the friend who helped me, the song that cheers me up, the café which opens early',
      ],
      l1: [
        'ทิ้งสรรพนามซ้ำท้ายประโยคขยาย เช่น "The colleague who I talked to him" หรือ "The laptop which I ordered it last week"',
        'ภาษาไทยใช้โครงสร้าง "หนังสือที่ฉันซื้อ*มัน*เมื่อวาน" หรือ "เพื่อนที่ฉันคุยกับ*เขา*" จึงเผลอเก็บ it/him/her/them ติดไว้ด้วย',
        'จำกฎเหล็ก 1 วินาที: คำว่า who / which / that กินตัว it / him / her / them เข้าไปในตัวมันแล้ว! ห้ามใส่ซ้ำตอนท้ายอีกเด็ดขาด',
      ],
      vocab: [
        ['colleague', 'เพื่อนร่วมงาน', '/ˈkɒl.iːɡ/', 'a colleague who supports me', 'เพื่อนร่วมงานที่คอยช่วยฉัน'],
        ['recommend', 'แนะนำ', '/ˌrek.əˈmend/', 'the spot that she recommended', 'ร้านที่เธอแนะนำ'],
        ['helpful', 'เป็นประโยชน์ / ชอบช่วยเหลือ', '/ˈhelp.fəl/', 'helpful feedback', 'คำแนะนำที่เป็นประโยชน์'],
        ['device', 'อุปกรณ์ (อิเล็กทรอนิกส์)', '/dɪˈvaɪs/', 'a device that saves energy', 'อุปกรณ์ที่ช่วยประหยัดไฟ'],
        ['mention', 'เอ่ยถึง / พูดถึง', '/ˈmen.ʃən/', 'the topic which you mentioned', 'หัวข้อที่คุณพูดถึง'],
        ['specific', 'เฉพาะเจาะจง', '/spəˈsɪf.ɪk/', 'a specific skill', 'ทักษะเฉพาะด้าน'],
        ['organize', 'จัดระเบียบ', '/ˈɔː.ɡə.naɪz/', 'organize daily notes', 'จัดระเบียบโน้ตประจำวัน'],
      ],
      examples: [
        ['The colleague who sits across from me always shares helpful shortcuts.', 'เพื่อนร่วมงานที่นั่งตรงข้ามฉันมักจะแชร์คีย์ลัดที่มีประโยชน์เสมอ'],
        ['The notebook that I bought last week fits inside my jacket pocket.', 'สมุดโน้ตที่ฉันซื้อเมื่อสัปดาห์ที่แล้วใส่ในกระเป๋าเสื้อแจ็กเก็ตได้พอดี'],
        ['We need a quiet tool which organizes tasks without sending annoying alerts.', 'เราต้องการเครื่องมือเงียบๆ ที่ช่วยจัดระเบียบงานโดยไม่ส่งแจ้งเตือนน่ารำคาญ'],
        ['Did you find the recipe that Auntie Nipa mentioned yesterday?', 'คุณเจอสูตรอาหารที่คุณป้านิภาพูดถึงเมื่อวานหรือยัง?'],
      ],
      reading:
        'Last month, Natee started a new job at a small design studio where every teammate wore multiple hats. On his second day, he felt slightly lost because he did not know which software tools the team preferred. Luckily, a helpful colleague who had worked there for four years sat beside him during lunch. She showed him a simple checklist app that organized client requests in clear daily steps. She also recommended a quiet noodle shop across the street which served fresh soup in under five minutes. Before the week ended, Natee stopped worrying about specific workflows and finished every task on time. Having coworkers who genuinely guide newcomers makes any transition easier.',
      listenQ: 'What did the helpful colleague recommend across the street from the studio?',
      listenA: 'A quiet noodle shop which served fresh soup in under five minutes.',
      dictation: 'The app that she recommended organized my daily tasks.',
      listenNote:
        'สังเกต `that` ในตำแหน่งเชื่อมความอ่านเบาเร็วเป็น `/ðət/` แล้วเชื่อมต่อไปยัง `she recommended` โดยไม่หยุดค้าง',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ทิ้งสรรพนามซ้ำและใช้คำเชื่อมผิดคน/ของ: "The jacket who I washed it yesterday is still wet."',
          answer: 'The jacket which I washed yesterday is still wet.',
          explanation:
            'jacket เป็นสิ่งของใช้ which หรือ that (ไม่ใช้ who) และต้องตัดสรรพนามซ้ำ it ออก',
        },
        {
          kind: 'choice',
          prompt: 'ประโยคใดเชื่อมคำนามด้วย Defining Relative Clause ได้ถูกต้องโดยไม่มีคำเกิน?',
          answer: 'I still keep the thank-you card that my first teacher gave me.',
          choices: [
            'I still keep the thank-you card that my first teacher gave me it.',
            'I still keep the thank-you card who my first teacher gave me.',
            'I still keep the thank-you card that my first teacher gave me.',
            'I still keep the thank-you card which she gave it to me.',
          ],
          explanation:
            'card ใช้ that หรือ which และตัด it ทิ้ง (gave me ไม่ใช่ gave me it)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมคนหรือสิ่งของให้ถูกต้อง: Anyone _____ arrives before eight receives a free coffee coupon.',
          answer: 'who',
          explanation: 'Anyone หมายถึงคน จึงใช้ who (หรือ that)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "เพื่อนที่ฉันโทรหาเมื่อวานทำงานอยู่ใกล้สถานีรถไฟ"',
          answer: 'The friend who I called yesterday works near the train station.',
          explanation:
            'เชื่อมด้วย who และห้ามใส่ him/her หลัง called (เป็น called yesterday ทันที)',
        },
      ],
      writing:
        'เขียนแนะนำคน 2 คนและสิ่งของ 2 ชิ้นที่สำคัญต่อชีวิตประจำวันของคุณ 4–5 ประโยค โดยใช้ `who`, `which` และ `that` และตรวจให้มั่นใจว่าไม่มีสรรพนามซ้ำท้ายประโยค',
      writingSample:
        'I rely on a small mechanical timer that keeps me focused during deep work blocks. It sits beside the blue mug which my sister bought during her trip to Chiang Mai. At work, the manager who checks our weekly progress always leaves clear, encouraging notes. Also, I enjoy calling an old friend who shares practical book tips every month.',
      writingNote:
        'ตรวจเช็กประโยคที่มี who/which/that ทุกตัวว่าไม่มี it, him, her, them ห้อยท้ายอยู่ซ้ำซ้อน',
      speakingTopic:
        'แนะนำ "คนและสิ่งของคู่ใจในชีวิตประจำวัน" ด้วย who/which/that (4 / 3 / 2 นาที)',
      speakingBullets: [
        'บรรยายของใช้ 2 อย่าง + คนรอบตัว 2 คน โดยเชื่อมประโยคขยายทันทีแทนการพูดแยกท่อน',
        'กดเสียง `that` ใน Relative Clause ให้เบาเป็น `/ðət/` เพื่อไม่ให้สะดุดจังหวะ',
      ],
    },
    {
      day: 100,
      title: 'where, when, whose สำหรับสถานที่ ช่วงเวลา และความเป็นเจ้าของ',
      objective:
        'ใช้ where (ที่ซึ่ง), when (เมื่อ/ช่วงเวลาที่) และ whose (ของใคร) เชื่อมความหมายละเอียดโดยไม่สับสนกับ which หรือ who',
      explanation:
        'นอกจาก `who / which / that` ยังมีตัวเชื่อม 3 ตัวที่ทำให้การเล่าเรื่องคมกริบขึ้นทันที:\n1. **`where`** (= in/at which) ใช้เมื่อ **มีเหตุการณ์เกิดขึ้นข้างในสถานที่นั้น**: `That is the bakery where we met.` (เทียบดู: ถ้าพูดถึงตัวตึกหรือตัวสถานที่ในฐานะ "สิ่งของ" ยังใช้ `which`: `The bakery which sells croissants is closed.` vs `The bakery where I work is busy.`)\n2. **`when`** (= in/on which) ขยายคำบอกเวลา เช่น *day, season, moment, year*: `October is the month when the weather turns cooler.`\n3. **`whose`** แสดง **ความเป็นเจ้าของ** (แปลว่า "...ของคนที่ / ของสิ่งที่มี...") ใช้แทน *his, her, their, its*: `I chatted with a neighbor whose dog loves greeting guests.` (ห้ามใช้ ❌ *who his dog* หรือ ❌ *who’s*)',
      sound: [
        'Whose /huːz/ vs Who’s /huːz/ & Where Linking',
        'whose /huːz/ · neighborhood /ˈneɪ.bə.hʊd/ · childhood /ˈtʃaɪld.hʊd/ · resident /ˈrez.ɪ.dənt/',
        'คำว่า `whose` ออกเสียง `/huːz/` เหมือน `who’s` เป๊ะ! ต้องแยกจากบริบทคำนามข้างหลัง: `whose sister` (ของใคร) vs `who’s waiting` (who is)',
        'ฝึกพูด 3 ก้อนคำ: the café where I study, the season when rain begins, the neighbor whose garden blooms',
      ],
      l1: [
        'พูดว่า "the café which I work" (ลืม in/at เมื่อใช้ which แทน where) หรือ "the man who his car broke down" แทน whose',
        'คนไทยแปลตรงตัว "คนที่รถของเขาเสีย" เป็น who + his car และใช้ which กับทุกสถานที่โดยไม่ได้สังเกตว่ากริยาข้างหลังต้องการ "ข้างในนั้น" หรือไม่',
        'เช็กง่ายๆ: ข้างหลังเกิดเหตุการณ์ "ข้างในที่นั่น" → ใช้ where! ข้างหลังเป็นคำนามที่เป็นสมบัติของคนข้างหน้า ("รถของเขา/ร้านของเธอ") → ใช้ whose!',
      ],
      vocab: [
        ['neighborhood', 'ย่านที่อยู่อาศัย / ละแวกบ้าน', '/ˈneɪ.bə.hʊd/', 'a quiet neighborhood where', 'ย่านเงียบสงบที่ซึ่ง'],
        ['childhood', 'วัยเด็ก', '/ˈtʃaɪld.hʊd/', 'childhood memories', 'ความทรงจำในวัยเด็ก'],
        ['owner', 'เจ้าของ', '/ˈəʊ.nər/', 'the owner whose shop', 'เจ้าของคนที่มีร้าน...'],
        ['season', 'ฤดูกาล', '/ˈsiː.zən/', 'the season when breezes blow', 'ฤดูที่สายลมพัดเย็น'],
        ['landmark', 'จุดสังเกต / แลนด์มาร์ก', '/ˈlænd.mɑːk/', 'local landmark', 'แลนด์มาร์กประจำท้องถิ่น'],
        ['belongings', 'ข้าวของส่วนตัว', '/bɪˈlɒŋ.ɪŋz/', 'pack personal belongings', 'เก็บข้าวของส่วนตัว'],
        ['resident', 'ผู้อยู่อาศัย', '/ˈrez.ɪ.dənt/', 'long-time resident', 'ผู้อยู่อาศัยมานาน'],
      ],
      examples: [
        ['This alley is the neighborhood where my grandmother opened her first shop.', 'ซอยนี้คือย่านที่คุณย่าของฉันเปิดร้านแรก'],
        ['December is the season when cool evenings arrive in northern Thailand.', 'เดือนธันวาคมคือช่วงเวลาที่ลมเย็นยามค่ำมาถึงภาคเหนือของไทย'],
        ['We thanked the resident whose advice helped us find the hidden landmark.', 'เราขอบคุณผู้อยู่อาศัยที่คำแนะนำของเขาช่วยให้เราหาจุดสังเกตที่ซ่อนอยู่เจอ'],
        ['Can you show me the exact moment when the audio started echoing?', 'คุณช่วยชี้ช่วงจังหวะที่เสียงเริ่มสะท้อนให้ดูหน่อยได้ไหม?'],
      ],
      reading:
        'Walking down Song Wat Road feels like stepping through living history. It is a riverfront neighborhood where old wooden shophouses sit comfortably next to modern art studios. Long-time residents still remember the decades when spice boats unloaded sacks along the narrow piers every dawn. Today, you might meet a young potter whose studio displays handmade tea cups in a century-old doorway, or an elderly tailor whose family has stitched shirts on the same street for sixty years. Whenever friends visit Bangkok, I guide them to a corner tea room where afternoon sunlight hits the tiled floor beautifully. That gentle light always reminds me of childhood Sundays when our whole family lingered over warm snacks together.',
      listenQ: 'What do long-time residents on Song Wat Road still remember?',
      listenA: 'The decades when spice boats unloaded sacks along the narrow piers every dawn.',
      dictation: 'We visited a potter whose studio sits near the river.',
      listenNote:
        'สังเกต `whose studio` ที่เชื่อมติดกันเป็น `/huːz ˈstjuː.di.əʊ/` (สระยาว `/uː/` ก่อนเสียง `/z/` และเสียงควบ `st-`)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้คำเชื่อมความเป็นเจ้าของและสถานที่ที่ผิด 2 จุด: "I met a baker who his bread smells amazing at the street market which we bought mango yesterday."',
          answer:
            'I met a baker whose bread smells amazing at the street market where we bought mango yesterday.',
          explanation:
            'who his bread ต้องเปลี่ยนเป็น whose bread (ของใคร) และซื้อของ "ที่ตลาด" ใช้ where we bought (ไม่ใช้ which เฉยๆ)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดแยกความต่างระหว่าง `where` กับ `which` ได้ถูกต้อง 100%?',
          answer: 'The library where I usually study has a rooftop terrace which overlooks the river.',
          choices: [
            'The library which I usually study has a rooftop terrace where overlooks the river.',
            'The library where I usually study has a rooftop terrace which overlooks the river.',
            'The library where overlooks the river is next to the café which we met.',
            'The library whose I usually study has a rooftop terrace that overlooks the river.',
          ],
          explanation:
            'study (ในห้องสมุด = where I usually study) ส่วน overlooks เป็นกริยาที่ตัวระเบียงเป็นประธานเอง จึงใช้ which overlooks',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมบอกความเป็นเจ้าของ: She helped a traveler _____ luggage had gone missing at the terminal.',
          answer: 'whose',
          explanation: 'กระเป๋าของนักเดินทางคนนั้น → whose luggage',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "วันเสาร์คือวันที่ฉันมีเวลาว่างพอจะจัดระเบียบบ้าน"',
          answer: 'Saturday is the day when I have enough time to organize the house.',
          explanation: 'ขยายคำว่า the day ด้วย when + ประโยคบอกสิ่งที่ทำในวันนั้น',
        },
      ],
      writing:
        'บรรยายย่านที่คุณอยู่หรือสถานที่ในความทรงจำ 4–5 ประโยค โดยใช้ทั้ง `where`, `when` และ `whose` ให้ครบทั้ง 3 คำ',
      writingSample:
        'My favorite spot in town is a small community park where neighbors jog every morning. Early sunrise is the peaceful moment when older residents gather near the pond for tai chi. Across the street lives a cheerful uncle whose juice stand opens before seven o’clock. Whenever I visit that corner, I remember childhood holidays when life felt much slower.',
      writingNote:
        'ตรวจเช็ก 3 จุด: 1) หลัง where มี Subject+Verb เกิดข้างในสถานที่ 2) หลัง when ขยายเวลา 3) หลัง whose ต้องตามด้วยคำนามทันที (whose + noun)',
      speakingTopic:
        'พาทัวร์ "ย่านโปรดหรือช่วงเวลาในความทรงจำ" ด้วย where, when, whose (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าอย่างน้อย 1 สถานที่ (where), 1 ช่วงเวลา (when) และ 1 คนที่มีจุดเด่น/ของบางอย่าง (whose)',
        'ระวังไม่พูด `who his` หรือ `where` ตรงที่คำนามเป็นประธานของกริยา (เช่น a park which has big trees)',
      ],
    },
    {
      day: 101,
      title: 'Dropping the Relative Pronoun (วิธีพูดลื่นแบบเจ้าของภาษา 80%)',
      objective:
        'ละคำเชื่อม who / which / that เมื่อทำหน้าที่เป็นกรรม (Object) และใช้บุพบทท้ายประโยค (friend I told you about) ได้อย่างเป็นธรรมชาติ',
      explanation:
        'เวลาพูดจริง เจ้าของภาษาพูดว่า **`"The café we visited yesterday"`** แทนที่จะพูดว่า `"The café which we visited yesterday"` ถึง 80% ของเวลา! กฎง่ายมากที่จะรู้ว่า **"ละได้" หรือ "ห้ามละ"**:\n- **ละได้ (เมื่อหลังคำเชื่อมมีประธานตัวใหม่มาตาม!)**: `the friend (who) I told you about`, `the podcast (that) you shared`, `the sweater (which) she wore` — สังเกตว่าหลังคำนามมี **`I / you / she / we`** โผล่มาเลยละ `who/which/that` ออกได้ทันที!\n- **ห้ามละ (เมื่อคำเชื่อมเป็นประธานของกริยาเอง!)**: `the woman **who lives** next door` (หลัง `who` ไม่มีประธานใหม่ แต่เป็นกริยา `lives` เลย ห้ามตัด `who` ออกเด็ดขาด! ❌ *the woman lives next door is kind*)',
      sound: [
        'Smooth Zero-Connector Rhythm & Stranded Prepositions',
        'spot /spɒt/ · podcast /ˈpɒd.kɑːst/ · familiar /fəˈmɪl.i.ər/ · detail /ˈdiː.teɪl/',
        'เวลาละคำเชื่อม ให้อ่านคำนามต่อเข้าประธานตัวใหม่ทันทีโดยไม่เว้นช่องว่างนาน: `the café we visited` (`the ka-FAY we VI-zi-ted`), `the friend I told you about` (`a-BOUT` เน้นเสียงตอนจบ)',
        'ฝึกพูด 4 วลีละคำเชื่อมรวดเดียว: the movie we watched, the recipe you tried, the colleague I work with, the message I got',
      ],
      l1: [
        'ละคำเชื่อมผิดตำแหน่ง เช่น พูดว่า "I know a guy speaks Japanese" (ตัด who ที่เป็นประธานทิ้ง!) หรือไม่กล้าละเลยจนพูดสะดุดทุกคำ',
        'ไม่คุ้นกับวิธีเอาบุพบทมาห้อยท้ายวลี เช่น "the song I listened to" หรือ "the problem we talked about"',
        'เช็กคำแรกหลังช่องว่าง: ถ้าเจอ "คน/สิ่งที่เป็นผู้กระทำ (I, you, we, my boss)" → ตัด who/which/that ทิ้งได้เลย! ถ้าเจอ "กริยาเลย (works, helps, sits)" → ห้ามตัดเด็ดขาด!',
      ],
      vocab: [
        ['spot', 'จุด / สถานที่เล็กๆ', '/spɒt/', 'the lunch spot we tried', 'ร้านมื้อเที่ยงที่เราไปลองมา'],
        ['recipe', 'สูตรอาหาร', '/ˈres.ɪ.pi/', 'the recipe you shared', 'สูตรอาหารที่คุณแชร์มา'],
        ['podcast', 'รายการพอดแคสต์', '/ˈpɒd.kɑːst/', 'the podcast I listen to', 'พอดแคสต์ที่ฉันฟังประจำ'],
        ['impression', 'ความรู้สึกประทับใจแรก', '/ɪmˈpreʃ.ən/', 'the first impression she gave', 'ความประทับใจแรกที่เธอให้'],
        ['recognize', 'จำได้ / นึกออก', '/ˈrek.əɡ.naɪz/', 'recognize a familiar voice', 'จำเสียงที่คุ้นเคยได้'],
        ['familiar', 'คุ้นเคย', '/fəˈmɪl.i.ər/', 'the melody you found familiar', 'ทำนองที่คุณรู้สึกคุ้นหู'],
        ['detail', 'รายละเอียด', '/ˈdiː.teɪl/', 'every detail I remembered', 'ทุกรายละเอียดที่ฉันจำได้'],
      ],
      examples: [
        ['Is this the quiet noodle spot you told me about last week?', 'นี่คือร้านก๋วยเตี๋ยวเงียบๆ ที่คุณเล่าให้ฉันฟังเมื่อสัปดาห์ก่อนใช่ไหม?'],
        ['The recipe my aunt sent yesterday turned out delicious.', 'สูตรอาหารที่คุณป้าส่งมาเมื่อวานทำออกมาอร่อยมาก'],
        ['I immediately recognized the podcast host we listened to on the train.', 'ฉันจำเสียงผู้จัดพอดแคสต์ที่เราฟังบนรถไฟได้ทันที'],
        ['Anyone who knows the answer can raise a hand right away.', 'ใครก็ตามที่รู้คำตอบสามารถยกมือได้เลย (ละ who ไม่ได้ เพราะ who เป็นประธานของ knows)'],
      ],
      reading:
        'Have you noticed how natural short descriptions sound when speakers drop extra words? Yesterday, my friend Jin called while walking past the small bakery we visited last winter. She instantly recognized the warm cinnamon smell we loved so much. While chatting, she asked for the ginger tea recipe I made during her cold last month. I promised to text every detail she needed before dinner. Later that evening, I listened to the travel podcast you recommended on Tuesday. The guest shared vivid stories about a mountain village he stayed in for three weeks, and his calm voice felt surprisingly familiar. Dropping that unnecessary "which" or "that" kept our whole conversation smooth and relaxed.',
      listenQ: 'What did Jin ask the speaker to send her while they were chatting?',
      listenA: 'The ginger tea recipe the speaker made during Jin’s cold last month.',
      dictation: 'This is the travel podcast I told you about yesterday.',
      listenNote:
        'สังเกตจังหวะไหลรวดเดียว `the travel podcast I told you about` (ไม่มี `that`) โดยลงเสียงหนักที่ `podcast`, `told` และ `about`',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ละคำเชื่อมผิดตำแหน่ง (ตัดประธานทิ้ง): "I chatted with a graphic designer lives in our building about the poster we created."',
          answer:
            'I chatted with a graphic designer who lives in our building about the poster we created.',
          explanation:
            'who เป็นประธานของ lives จึงห้ามละเด็ดขาด (ต้องใส่ who lives) ส่วน the poster we created ละ that ได้ถูกต้องแล้วเพราะ we เป็นประธานตัวใหม่',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดสามารถ "ละคำเชื่อม" ได้อย่างถูกต้องโดยความหมายสมบูรณ์?',
          answer: 'The blue folder (that) I left on your desk contains all the signed receipts.',
          choices: [
            'The blue folder (that) sits on your desk contains all the signed receipts.',
            'The blue folder (that) I left on your desk contains all the signed receipts.',
            'The neighbor (who) helped us carry the boxes lives upstairs.',
            'The battery (which) came inside the box ran out quickly.',
          ],
          explanation:
            'ประโยคเดียวที่หลัง (that) มีประธานตัวใหม่ (I) คือ "that I left" จึงละได้ ส่วนอีก 3 ข้อหลังวงเล็บเป็นกริยาทันที (sits, helped, came) ห้ามละ!',
        },
        {
          kind: 'gap',
          prompt:
            'เติมบุพบทท้ายก้อนคำที่ละคำเชื่อมไว้: Who was the cheerful guest you were talking _____ near the entrance?',
          answer: 'to',
          explanation: 'talk to someone → the guest you were talking to (ละ who แล้วเก็บบุพบท to ไว้ท้าย)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษแบบเจ้าของภาษา (ละคำเชื่อม): "หนังสือเล่มที่คุณแนะนำให้ฉันช่วยได้มากเลย"',
          answer: 'The book you recommended to me helped a lot.',
          explanation:
            'หลัง the book มีประธานตัวใหม่ you จึงละ that/which ได้เลย เป็น The book you recommended...',
        },
      ],
      writing:
        'เขียนแนะนำ 4 อย่าง (เพลง/พอดแคสต์, ร้านอาหาร, เพื่อน/คนรู้จัก, สูตรอาหารหรือคำแนะนำ) 4–5 ประโยค โดยใช้แบบละคำเชื่อม 3 ประโยค และแบบห้ามละ 1 ประโยค (ที่คำเชื่อมเป็นประธาน)',
      writingSample:
        'Every morning, I listen to an English podcast I discovered two months ago. The host shares everyday stories I can easily follow while brewing coffee. On Friday, I cooked the spicy tofu recipe my coworker wrote down for me, and everyone loved it. Still, the kitchen gadget that saves me the most time is definitely my small rice cooker.',
      writingNote:
        'เช็กประโยคที่มี "คำนาม + ประธานตัวใหม่ + กริยา" (podcast I discovered, stories I can follow, recipe my coworker wrote) ว่าไหลลื่นและไม่ทิ้ง it/them ท้ายประโยค',
      speakingTopic:
        'เล่า "ของดี 4 อย่างที่คนอื่นแนะนำมา" โดยละคำเชื่อมแบบเจ้าของภาษา (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดชุด `the ___ I heard / you told me about / we tried / she sent me` ให้ลื่นติดปากโดยไม่ชะงักตรงกลาง',
        'แทรก 1 ประโยคที่ละไม่ได้ (เช่น the friend who suggested it) เพื่อฝึกแยกแยะตอนพูดสด',
      ],
    },
    {
      day: 102,
      title: 'Non-defining Relative Clauses (, who / , which) — ห้ามใช้ that!',
      objective:
        'ใช้ Non-defining Relative Clauses (มีลูกน้ำคั่น) เพื่อเสริมข้อมูลน่ารู้ และใช้ ", which" อ้างถึงทั้งประโยคก่อนหน้าอย่างถูกต้อง',
      explanation:
        'ต่างจาก Defining Clause ที่ช่วยชี้ว่า "อันไหน/คนไหน", **Non-defining Relative Clause** คือส่วน **"เล่าเสริมเพิ่มเติม"** เมื่อผู้ฟังรู้อยู่แล้วว่าหมายถึงใครหรือเมืองไหน (เช่นชื่อเฉพาะอย่าง *Bangkok, my mom, my boss*) วิธีสังเกตและกฎเหล็กมี 3 ข้อ:\n1. **ต้องมีลูกน้ำ (Comma `,`) กั้นหน้า-หลังเสมอ** (และตอนพูดให้หยุดหายใจสั้นๆ แล้วลดเสียงลงนิดหนึ่งเหมือนใส่วงเล็บให้ข้อมูลเสริม)\n2. **ห้ามใช้ `that` เด็ดขาด และห้ามละคำเชื่อม!** ต้องใช้ `, who` หรือ `, which` เท่านั้น: เช่น `My cousin, who lives in Phuket, runs a small café.` (ห้าม ❌ *My cousin, that lives...*)\n3. **สูตรโปร B1 — `, which` อ้างถึงทั้งประโยคก่อนหน้า**: เช่น `We arrived twenty minutes early, which gave us time to relax.` (หมายถึง "การที่มาถึงเร็ว" ทำให้มีเวลาพัก — ยกระดับการพูดทันที!)',
      sound: [
        'Comma Pause & Parenthetical Pitch Drop',
        'background /ˈbæk.ɡraʊnd/ · outcome /ˈaʊt.kʌm/ · historic /hɪˈstɒr.ɪk/ · relieved /rɪˈliːvd/',
        'เทคนิคเสียงระดับ B1: เมื่อเจอ `, who ... ,` ให้หยุดสั้นๆ 0.2 วินาที ลดระดับเสียงต่ำลงนิดหน่อยในส่วนขยาย แล้วกลับมาระดับปกติตรงกริยาหลัก!',
        'ฝึกพูดประโยค 2 ส่วนแบบทิ้งจังหวะลูกน้ำชัด: "Chiang Mai, [ลงเสียง] which is surrounded by mountains, [กลับเสียง] feels peaceful in November."',
      ],
      l1: [
        'ใส่ "that" หลังเครื่องหมายลูกน้ำ (", that is in the north") หรือเขียนขยายชื่อเฉพาะแบบไม่มีลูกน้ำเลย',
        'จำเหมารวมว่า which กับ that ใช้แทนกันได้ 100% ทุกกรณี จึงหยิบ that ไปใส่ใน Non-defining clause ด้วย',
        'จำกฎเหล็ก 2 ขั้น: เห็นลูกน้ำ (,) เมื่อไหร่ → ห้ามใส่ that, ห้ามตัด who/which ทิ้ง, และใช้ ", which" ปิดท้ายเพื่อต่อยอดผลลัพธ์ของทั้งประโยคได้!',
      ],
      vocab: [
        ['background', 'ภูมิหลัง / ข้อมูลเบื้องหลัง', '/ˈbæk.ɡraʊnd/', 'share helpful background', 'แชร์ข้อมูลเบื้องหลังที่เป็นประโยชน์'],
        ['reliable', 'น่าเชื่อถือ / พึ่งพาได้', '/rɪˈlaɪ.ə.bəl/', 'a reliable partner', 'คู่หู/พาร์ตเนอร์ที่พึ่งพาได้'],
        ['generosity', 'ความเอื้อเฟื้อเผื่อแผ่', '/ˌdʒen.əˈrɒs.ə.ti/', 'unexpected generosity', 'น้ำใจที่คาดไม่ถึง'],
        ['outcome', 'ผลลัพธ์', '/ˈaʊt.kʌm/', 'a positive outcome', 'ผลลัพธ์ในแง่ดี'],
        ['historic', 'ทางประวัติศาสตร์ / เก่าแก่สำคัญ', '/hɪˈstɒr.ɪk/', 'historic town center', 'ย่านเมืองเก่าที่มีคุณค่าทางประวัติศาสตร์'],
        ['charming', 'มีเสน่ห์น่าเอ็นดู', '/ˈtʃɑː.mɪŋ/', 'a charming alley', 'ซอยเล็กๆ ที่มีเสน่ห์'],
        ['relieved', 'โล่งใจ', '/rɪˈliːvd/', 'feel deeply relieved', 'รู้สึกโล่งใจอย่างมาก'],
      ],
      examples: [
        ['Ayutthaya, which lies an hour north of Bangkok, makes an easy day trip.', 'อยุธยา ซึ่งอยู่ห่างไปทางเหนือของกรุงเทพฯ หนึ่งชั่วโมง เป็นทริปไปเช้าเย็นกลับที่สะดวกมาก'],
        ['My older brother, who works as a paramedic, always stays calm in emergencies.', 'พี่ชายของฉัน ซึ่งเป็นเจ้าหน้าที่กู้ชีพ มักจะใจเย็นในสถานการณ์ฉุกเฉินเสมอ'],
        ['Our flight landed thirty minutes early, which gave us plenty of time for lunch.', 'เที่ยวบินของเราลงจอดเร็วขึ้นสามสิบนาที ซึ่งทำให้เรามีเวลากินมื้อเที่ยงเหลือเฟือ'],
        ['Ms. Darunee’s unexpected generosity saved the whole event, which left everyone deeply relieved.', 'น้ำใจที่คาดไม่ถึงของคุณดารุณีช่วยงานทั้งหมดไว้ได้ ซึ่งทำให้ทุกคนโล่งใจมาก'],
      ],
      reading:
        'Last weekend, I traveled to Lampang, which is one of the calmest historic towns in northern Thailand. Because I booked an early train, the journey took longer than flying, which actually allowed me to read half a novel along the way. At the station, I met Auntie Wan, who has run a charming guesthouse near the river for twenty years. Her background as a retired schoolteacher showed in every detail, from handwritten walking maps to fresh morning porridge. On Sunday afternoon, the rain suddenly cleared just before the street market opened, which made the evening stroll unforgettable. Leaving Lampang felt bittersweet, yet her kindness gave the whole trip such a peaceful outcome.',
      listenQ: 'What unexpected benefit did taking the longer morning train bring the speaker?',
      listenA: 'It allowed the speaker to read half a novel along the way.',
      dictation: 'The rain cleared before evening, which made our walk unforgettable.',
      listenNote:
        'จับจังหวะหยุดสั้นๆ ก่อน `, which` เพื่อฟังวิธีเชื่อมความเห็นต่อจากเหตุการณ์ทั้งประโยคก่อนหน้า',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้คำเชื่อมต้องห้ามหลังเครื่องหมายลูกน้ำ 2 จุด: "My mentor, that worked in Singapore for ten years, moved to Chiang Mai, what surprised the whole team."',
          answer:
            'My mentor, who worked in Singapore for ten years, moved to Chiang Mai, which surprised the whole team.',
          explanation:
            'หลังลูกน้ำห้ามใช้ that (ต้องใช้ who กับคน) และเมื่ออ้างถึงเหตุการณ์ทั้งประโยคก่อนหน้าต้องใช้ , which (ไม่ใช้ , what)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Non-defining Relative Clause ขยายและอ้างถึงทั้งประโยคได้ถูกต้องที่สุด?',
          answer: 'Nadia forgot her umbrella at home, which turned out fine because the afternoon stayed sunny.',
          choices: [
            'Nadia forgot her umbrella at home, that turned out fine because the afternoon stayed sunny.',
            'Nadia forgot her umbrella at home, what turned out fine because the afternoon stayed sunny.',
            'Nadia forgot her umbrella at home, which turned out fine because the afternoon stayed sunny.',
            'Nadia, that forgot her umbrella at home, stayed dry all afternoon.',
          ],
          explanation:
            'ใช้ ", which" เพื่อขยายเหตุการณ์ "ลืมร่ม" ทั้งก้อนได้อย่างสละสลวย (ห้ามใช้ , that หรือ , what)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อม Non-defining ที่ถูกต้อง: Sukhothai, _____ is famous for its ancient stone parks, feels wonderful by bicycle.',
          answer: 'which',
          explanation: 'Sukhothai เป็นชื่อเฉพาะมีลูกน้ำคั่น (Non-defining) จึงต้องใช้ which เท่านั้น',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "รถไฟฟ้ามาตรงเวลาพอดี ซึ่งทำให้ฉันรู้สึกโล่งใจมาก"',
          answer: 'The train arrived right on time, which made me feel very relieved.',
          explanation: 'ใส่ลูกน้ำแล้วต่อด้วย , which made me feel... เพื่อขยายทั้งประโยคหน้า',
        },
      ],
      writing:
        'เขียนเล่าถึงเมืองที่คุณชอบ ญาติ/เพื่อนสนิท 1 คน และเหตุการณ์หนึ่งที่เกิดผลลัพธ์ดีๆ 4–5 ประโยค โดยใช้ Non-defining Clauses (`, who` / `, which`) และ `, which` อ้างถึงทั้งประโยค อย่างละอย่างน้อย 1 จุด',
      writingSample:
        'Last month, I spent two days in Nan, which feels noticeably slower than big tourist cities. I stayed with Uncle Somchai, who grows organic coffee behind his wooden house. On my second morning, I woke up before sunrise without an alarm, which gave me a quiet hour to watch mist drifting across the valley. Overall, that slow weekend gave my tired mind a wonderful outcome.',
      writingNote:
        'เช็กเครื่องหมายลูกน้ำหน้า who / which ทุกจุด และตรวจว่าไม่มี , that หรือ , what หลุดเข้ามา',
      speakingTopic:
        'เล่า "ทริปหรือคนที่ช่วยเสริมชีวิตคุณ" ด้วยลูกเล่น , who / , which (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ฝึกหยุดพักสั้นๆ 0.2 วินาทีและลดโทนเสียงลงตรงส่วนขยาย `, who ... ,` หรือ `, which ... ,`',
        'ปิดความคิดด้วย `, which made me feel...` หรือ `, which helped a lot` เพื่อเชื่อมเหตุและผลแบบ B1',
      ],
    },
    {
      day: 103,
      title: 'what (= the thing which) vs that / which (แก้จุดสับสน Everything what)',
      objective:
        'แยกการใช้ what (สิ่งที่/อะไรที่ ไม่มีคำนามนำหน้า) ออกจาก that / which (ต้องมีคำนามหรือ everything/something นำหน้า) ได้อย่างแม่นยำ',
      explanation:
        'หนึ่งในข้อผิดพลาดที่เจอบ่อยที่สุดในผู้เรียนระดับ A2–B1 คือการใช้ `what` ผิดที่ เช่น ❌ *"Everything **what** he said was true."* หรือ ❌ *"This is the laptop **what** I want."* กฎทองแยก 2 ฝั่งชัดเจนใน 10 วินาที:\n- **`what` = "the thing(s) that" (มีคำว่า "สิ่งนั้น" อยู่ในตัวอยู่แล้ว!)** ดังนั้น **ห้ามมีคำนาม หรือคำอย่าง *everything, all, something, nothing* มาวางหน้า `what` เด็ดขาด!** ใช้เปิดหัวประโยคหรือตามหลังกริยาได้เลย เช่น `What surprised me was his patience.`, `Tell me what you need.`\n- **`that / which`**: ต้องวาง **หลังคำนามหรือ `everything / all / something`** เช่น `Everything that he said was true.`, `That is the exact point which I wanted to clarify.`',
      sound: [
        'Emphatic Stress on "WHAT..." Clauses',
        'feedback /ˈfiːd.bæk/ · clarify /ˈklær.ɪ.faɪ/ · concern /kənˈsɜːn/ · appreciate /əˈpriː.ʃi.eɪt/',
        'โครงสร้างเปิดด้วย `What...` มักกดเสียงหนักที่ตัวเปิดกับจุดพีคท้ายประโยค: "**WHAT** really helped me / was her honest **FEED**back."',
        'ฝึกพูดประโยคเปิดหัวแบบเจ้าของภาษา 4 แบบ: What matters most is..., What I appreciated was..., Everything that happened..., Something that bothered me...',
      ],
      l1: [
        'พูดว่า "Everything what you told me" หรือ "All what we need is time" หรือ "The movie what we saw"',
        'แปลตรงตัวคำว่า "ที่" หรือ "อะไรที่" จากภาษาไทย (ทุกอย่างที่เธอพูด → everything + what) โดยลืมว่าภาษาอังกฤษคำว่า everything กับ what ชนกันไม่ได้',
        'จำกฎ 2 บรรทัด: ไม่มีคำนามข้างหน้า → ใช้ what (What you need is rest.) | มีคำนามหรือ everything/all/something ข้างหน้า → ใช้ that หรือละทิ้งไปเลย (Everything you said / Everything that you said)!',
      ],
      vocab: [
        ['feedback', 'ความคิดเห็น/คำติชม', '/ˈfiːd.bæk/', 'constructive feedback', 'คำติชมเพื่อพัฒนา'],
        ['summarize', 'สรุปใจความ', '/ˈsʌm.ər.aɪz/', 'summarize what matters', 'สรุปสิ่งที่สำคัญ'],
        ['clarify', 'ทำให้กระจ่าง / อธิบายเพิ่ม', '/ˈklær.ɪ.faɪ/', 'clarify a misunderstanding', 'เคลียร์ความเข้าใจผิดให้กระจ่าง'],
        ['concern', 'ความกังวล / ข้อห่วงใย', '/kənˈsɜːn/', 'address every concern', 'ตอบข้อกังวลทุกข้อ'],
        ['solution', 'ทางออก / วิธีแก้', '/səˈluː.ʃən/', 'a realistic solution', 'ทางออกที่ใช้ได้จริง'],
        ['honest', 'ซื่อสัตย์ / ตรงไปตรงมา', '/ˈɒn.ɪst/', 'honest reflection', 'การสะท้อนคิดอย่างตรงไปตรงมา'],
        ['appreciate', 'ซาบซึ้ง / เห็นคุณค่า', '/əˈpriː.ʃi.eɪt/', 'truly appreciate', 'ซาบซึ้งใจอย่างแท้จริง'],
      ],
      examples: [
        ['What I really appreciated was how calmly she clarified every concern.', 'สิ่งที่ฉันซาบซึ้งมากคือวิธีที่เธออธิบายคลายข้อกังวลทุกข้ออย่างใจเย็น'],
        ['Everything that the team agreed on appears in this short summary.', 'ทุกอย่างที่ทีมตกลงร่วมกันปรากฏอยู่ในสรุปสั้นๆ ฉบับนี้'],
        ['Tell me what you honestly think about our revised plan.', 'บอกฉันทีว่าคุณคิดอย่างไรจริงๆ เกี่ยวกับแผนที่ปรับใหม่ของเรา'],
        ['All the feedback that we gathered pointed toward one clear solution.', 'คำติชมทั้งหมดที่เราเก็บรวบรวมชี้ไปยังทางออกที่ชัดเจนเพียงหนึ่งเดียว'],
      ],
      reading:
        'After finishing a busy group project, our team always holds a fifteen-minute feedback check. Yesterday, our lead asked everyone to share what worked well and what still felt confusing. At first, junior members hesitated to speak openly because nobody wanted to sound negative. However, our lead clarified that honest notes help future teams avoid stress. What surprised me most was how quickly a calm conversation fixed a problem we had worried about for weeks. Everything that teammates brought up led directly to a practical solution, such as splitting big uploads into smaller steps. Before ending the call, our lead summarized all the points we needed to adjust and thanked us for sharing what truly mattered.',
      listenQ: 'What surprised the speaker most during the fifteen-minute feedback check?',
      listenA: 'How quickly a calm conversation fixed a problem they had worried about for weeks.',
      dictation: 'What surprised me was everything that they agreed on.',
      listenNote:
        'ประโยคนี้เทียบให้เห็นคู่กันชัด: ข้างหน้าไม่มีคำนามใช้ `What surprised me` ส่วนข้างหลังมี `everything` จึงตามด้วย `that` (`everything that...`)',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้คำเชื่อม what ที่วางผิดหลังคำนาม/everything 2 จุด: "All what she wrote down reflects the exact advice what our mentor shared."',
          answer:
            'All that she wrote down reflects the exact advice that our mentor shared.',
          explanation:
            'หลัง All และหลังคำนาม (the exact advice) ห้ามใช้ what เด็ดขาด ต้องใช้ that (หรือละทิ้งไปเลยได้เช่น All she wrote down)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ `what` และ `that / which` ได้ถูกต้อง 100%?',
          answer: 'What matters right now is reviewing everything that the client requested.',
          choices: [
            'What matters right now is reviewing everything what the client requested.',
            'That matters right now is reviewing everything that the client requested.',
            'What matters right now is reviewing everything that the client requested.',
            'Everything what matters right now is the solution what they chose.',
          ],
          explanation:
            'เปิดหัวประโยคไม่มีคำนามใช้ What (What matters...) ส่วนหลัง everything ใช้ that',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำว่า what หรือ that: Honestly, _____ helped me improve fastest was recording my own voice daily.',
          answer: 'what',
          explanation:
            'ข้างหน้าช่องว่างไม่มีคำนาม จึงต้องใช้ what (= สิ่งที่ช่วยฉันพัฒนาเร็วที่สุดคือ...)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "สิ่งที่ฉันชอบที่สุดเกี่ยวกับที่นี่คือบรรยากาศที่ซื่อสัตย์และสงบ"',
          answer: 'What I like most about this place is the honest and peaceful atmosphere.',
          explanation: 'ขึ้นต้นด้วย What I like most... = สิ่งที่ฉันชอบที่สุด...',
        },
      ],
      writing:
        'เขียนสะท้อนความเห็น 4–5 ประโยคเกี่ยวกับสิ่งที่คุณได้เรียนรู้จากงาน ชีวิต หรือการเรียนภาษา โดยใช้ `What ... is/was ...` อย่างน้อย 2 ประโยค และ `everything/all/the point that ...` อย่างน้อย 2 ประโยค',
      writingSample:
        'Over the past three months, what surprised me most about learning English was how much listening helps speaking. Earlier, I memorized single words, yet everything that I remembered vanished during real calls. When I switched to learning chunks aloud, I saw real progress. What I truly appreciate now is having clear examples that I can reuse immediately in daily conversations.',
      writingNote:
        'ตรวจเช็กคำว่า everything, all, something, nothing และคำนามทุกตัว ว่าไม่มีคำว่า what ตามหลังเด็ดขาด!',
      speakingTopic:
        'พูดแสดงความเห็นแบบคมชัดด้วย "What matters most..." (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เปิดประเด็นด้วยประโยคทรงพลัง: What surprised me was..., What I appreciate most is...',
        'คั่นด้วยข้อเท็จจริง: Everything that we tried..., The feedback I received...',
      ],
    },
    {
      day: 104,
      title: 'Describing People, Neighborhoods & Meaningful Objects in Detail',
      objective:
        'ประกอบ Relative Clauses ทุกชนิดเข้าด้วยกันเพื่อบรรยายผู้คน ย่านที่อยู่ และของที่มีคุณค่าทางใจได้อย่างลึกซึ้งและไหลลื่น',
      explanation:
        'ถึงเวลาเอาจิ๊กซอว์ทั้งสัปดาห์มาต่อเป็นภาพใหญ่! ในการคุยแบบ B1 เวลาเพื่อนต่างชาติถามถึง "บ้านเกิดของคุณ", "คนที่คุณนับถือ" หรือ "ของที่ระลึกที่มีความหมาย" อย่าตอบแค่ 1–2 ประโยคสั้นๆ ให้ใช้ **เทคนิค 3 ชั้น (Identify → Story → Extra Value)** ด้วย Relative Clauses:\n1. **ระบุชัด (Defining / Omitted)**: `This is the wooden bracelet my grandmother gave me before I moved.`\n2. **ใส่ฉาก (Where / When / Whose)**: `It came from a craft market where local artisans still carve patterns by hand.`\n3. **เสริมความรู้สึกรวม (Non-defining `, which`)**: `She wrapped it in blue cotton, which still reminds me of her calm voice.`\nเพียง 3 ประโยค ภาษาของคุณจะมีมิติและเล่าเรื่องได้น่าประทับใจมาก!',
      sound: [
        'Smooth Clause Pacing & Breath Groups',
        'keepsake /ˈkiːp.seɪk/ · artisan /ˈɑː.tɪ.zən/ · vendor /ˈven.dər/ · vividly /ˈvɪv.ɪd.li/',
        'เวลาพูดประโยคยาวที่มี Relative Clause ซ้อน อย่าพูดรวดเร็วจนหายใจไม่ทัน ให้แบ่งหยุดสั้นๆ ตามหน่วยความหมาย: `[คำนาม+ส่วนขยายแรก] / [กริยาหลัก] / [, which ความรู้สึกปิดท้าย]`',
        'ฝึกอ่านตัวอย่างที่ 1 แบบแบ่ง 3 จังหวะ: "The silver pen [pause] my father gave me [pause] sits on my desk every day."',
      ],
      l1: [
        'เขียนหรือพูดประโยคสั้นๆ ซ้ำประธาน (It... It... She... She...) 5 ประโยคติดกัน จนฟังดูเหมือนระดับ A1',
        'กังวลว่าประโยคยาวจะผิดเลยไม่กล้าเชื่อม where / whose / , which เข้าด้วยกัน',
        'ฝึกด้วยกรอบ 3 ประโยค: 1) นาม + ส่วนขยายละคำเชื่อม (the gift I keep...) 2) ฉากเวลา/สถานที่ (where/when/whose...) 3) ผลทางใจ (, which reminds me of...)',
      ],
      vocab: [
        ['keepsake', 'ของที่ระลึกที่มีคุณค่าทางใจ', '/ˈkiːp.seɪk/', 'a meaningful keepsake', 'ของที่ระลึกที่มีความหมาย'],
        ['craft', 'งานฝีมือ / หัตถกรรม', '/krɑːft/', 'traditional craft', 'งานหัตถกรรมดั้งเดิม'],
        ['artisan', 'ช่างฝีมือ', '/ˈɑː.tɪ.zən/', 'local artisans', 'ช่างฝีมือท้องถิ่น'],
        ['handcrafted', 'ทำด้วยมือ', '/ˌhændˈkrɑːf.tɪd/', 'handcrafted ceramic bowl', 'ชามเซรามิกทำมือ'],
        ['vendor', 'พ่อค้าแม่ค้า (แผง/ตลาด)', '/ˈven.dər/', 'a market vendor', 'แม่ค้าในตลาด'],
        ['vividly', 'อย่างชัดเจนแจ่มแจ้ง', '/ˈvɪv.ɪd.li/', 'vividly remember', 'จำได้ชัดเจนแจ่มแจ้ง'],
        ['remind', 'ทำให้นึกถึง / เตือนความจำ', '/rɪˈmaɪnd/', 'remind me of home', 'ทำให้ฉันนึกถึงบ้าน'],
      ],
      examples: [
        ['The small ceramic mug I use every morning came from an artisan market in Chiang Rai.', 'แก้วเซรามิกใบเล็กที่ฉันใช้ทุกเช้ามาจากตลาดงานฝีมือในเชียงราย'],
        ['I still keep a handwritten postcard from a friend whose advice changed my career path.', 'ฉันยังเก็บโปสการ์ดลายมือจากเพื่อนที่คำแนะนำของเขาเปลี่ยนเส้นทางอาชีพของฉัน'],
        ['Sunday evenings are the hours when neighborhood vendors light paper lanterns along the canal.', 'เย็นวันอาทิตย์คือช่วงเวลาที่พ่อค้าแม่ค้าในย่านจะจุดโคมกระดาษริมคลอง'],
        ['Our community library sits beside an old garden, which gives everyone a peaceful reading corner.', 'ห้องสมุดชุมชนของเราตั้งอยู่ข้างสวนเก่า ซึ่งมอบมุมอ่านหนังสือสงบๆ ให้ทุกคน'],
      ],
      reading:
        'On my wooden bookshelf sits a small handcrafted tea tin that always draws questions from guests. It is a keepsake my grandfather brought back from a northern hill village where tea leaves are roasted over charcoal. Every morning when I open the lid, the gentle smoky scent reminds me of childhood visits to his quiet orchard. What makes the tin even more special is the tiny brass spoon inside, which an elderly vendor gave me after teaching me how to brew loose-leaf tea properly. Even today, friends whose busy schedules keep them stressed love dropping by for an evening cup. Sitting together near the window creates calm conversations, which is exactly why I treasure simple objects with living stories behind them.',
      listenQ: 'Who gave the speaker the tiny brass spoon inside the tea tin?',
      listenA: 'An elderly vendor who taught the speaker how to brew loose-leaf tea properly.',
      dictation: 'This keepsake reminds me of the quiet village where my grandparents lived.',
      listenNote:
        'สังเกตเสียงเชื่อม `keepsake reminds me` และส่วนขยาย `where my grandparents lived` ที่วางปิดท้ายประโยคอย่างสมดุล',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'รวมและแก้ประโยคที่ผิด 2 จุด: "I keep a silver watch who my uncle gave me it on the day when I graduated, that still works perfectly."',
          answer:
            'I keep a silver watch that my uncle gave me on the day when I graduated, which still works perfectly.',
          explanation:
            '1) นาฬิกาใช้ that/which (ไม่ใช้ who) และตัด it ออก 2) หลังลูกน้ำห้ามใช้ that ต้องเปลี่ยนเป็น , which',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Relative Clauses ผสมผสานบรรยายสิ่งของและบริบทได้อย่างถูกต้องสมบูรณ์?',
          answer: 'The woven basket we bought from a village artisan holds all the family photos I treasure.',
          choices: [
            'The woven basket what we bought from a village artisan holds all the family photos who I treasure.',
            'The woven basket we bought from a village artisan holds all the family photos I treasure.',
            'The woven basket we bought it from a village artisan holds the photos which I treasure them.',
            'The woven basket, that we bought from a village artisan, holding all the photos I treasure.',
          ],
          explanation:
            'ละ that ได้อย่างลื่นทั้งสองจุด (the woven basket we bought / the family photos I treasure) โดยไม่มีคำซ้ำ',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมบอกความเป็นเจ้าของให้ถูกต้อง: We visited a small pottery workshop _____ owner taught visitors how to shape clay cups.',
          answer: 'whose',
          explanation: 'เจ้าของของเวิร์กชอปนั้น → whose owner',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ตลาดริมคลองที่เราแวะไปเมื่อวานมีของทำมือมากมาย ซึ่งทำให้ฉันนึกถึงบ้านเกิด"',
          answer:
            'The canal market we visited yesterday had plenty of handcrafted items, which reminded me of my hometown.',
          explanation: 'ละ which หลัง market (we visited) และปิดด้วย , which อ้างถึงทั้งประโยคหน้า',
        },
      ],
      writing:
        'เขียนบรรยาย "สิ่งของที่มีคุณค่าทางใจ 1 ชิ้น" หรือ "มุมหนึ่งในย่านบ้านของคุณ" ความยาว 5–6 ประโยค โดยใช้กรอบ 3 ชั้น (Defining/Omitted + where/when/whose + `, which`)',
      writingSample:
        'On my desk sits a small leather notebook I bought during my first solo trip to Phuket. It came from a tiny stationery shop where a retired artist painted each cover by hand. Inside, I still keep a train ticket from the morning when I watched the sunrise alone on the platform. Whenever work gets hectic, flipping through those pages brings back calm memories, which reminds me why slow travel matters so much.',
      writingNote:
        'อ่านออกเสียงงานเขียนตัวเอง 1 รอบเพื่อเช็กจังหวะการหยุดหายใจตามลูกน้ำและดูว่าไม่มี it/them เกินมาท้ายประโยค',
      speakingTopic:
        'เล่าเรื่อง "ของที่ระลึกหรือสถานที่ที่มีเรื่องราวพิเศษ" ครบทุกโครงสร้าง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'ใช้สูตร 3 ชั้น: ของ/สถานที่คืออะไร (the ___ I keep...) → เกี่ยวกับใคร/ที่ไหน/ตอนไหน (where / when / whose) → ส่งผลต่อใจยังไง (, which reminds me of...)',
        'ฝึกแบ่งลมหายใจให้สม่ำเสมอเพื่อให้ประโยคยาวฟังชัดและสง่า',
      ],
    },
    {
      day: 105,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 15 — Relative Clauses เต็มระบบ & Dictogloss',
      objective:
        'ทบทวน Relative Clauses ทั้งระบบ (Defining, Omission, where/when/whose, Non-defining, what vs that) ผ่าน Dictogloss และโจทย์ผสม',
      explanation:
        'ครบสัปดาห์ที่ 15 แล้วครับ! ลองทบทวนแผนที่ **Relative Clauses ทั้ง 5 กฎเหล็ก** ให้แม่นยำ 100% ก่อนเข้าสัปดาห์สุดท้ายของ Phase 2:\n1. **Defining (`who/which/that`)**: ใช้ระบุตัวตน และ **ห้ามทิ้งสรรพนามซ้ำ** (`the movie I watched` ✅ / ❌ *watched it*)\n2. **การละคำเชื่อม**: ถ้าหลังช่องว่างมีประธานตัวใหม่ (`the spot we tried`) ละได้เลย; ถ้าเป็นกริยาทันที (`a friend who lives here`) ห้ามละ!\n3. **`where / when / whose`**: สถานที่ที่เกิดเหตุการณ์ข้างใน (`where`), ช่วงเวลา (`when`), ความเป็นเจ้าของ (`whose + noun`)\n4. **Non-defining (`, who / , which`)**: มีลูกน้ำคั่นเพื่อเสริมข้อมูลหรือขยายทั้งประโยคก่อนหน้า — **ห้ามใช้ `that` เด็ดขาด!**\n5. **`what` vs `that`**: ไม่มีคำนามนำหน้าใช้ `what` (`What matters is...`), มีคำนามหรือ *everything/all/something* นำหน้าใช้ `that`!',
      sound: [
        'Week 15 Connected Relative Clause Audit',
        'community /kəˈmjuː.nə.ti/ · recognize /ˈrek.əɡ.naɪz/ · artisan /ˈɑː.tɪ.zən/ · generous /ˈdʒen.ər.əs/',
        'ทบทวนจุดเชื่อมเสียงสำคัญ: weak `that` (`/ðət/`), `whose` (`/huːz/`), parenthetical drop on `, which ... ,`, และ linking ท้ายบุพบท (`talked about`, `listened to`)',
        'ทำ Shadowing บทอ่านประจำวัน 3 รอบ โดยเน้นแยกน้ำเสียงระหว่างก้อนคำปกติกับส่วนขยายหลังลูกน้ำให้ชัดเจน',
      ],
      l1: [
        'เวลาพูดเร็วๆ มักพลาด 3 จุดเดิมซ้ำๆ: ทิ้ง it ท้ายประโยค, ใส่ that หลังลูกน้ำ, และพูด everything what',
        'สมองยังสลับโหมดคำถาม/คำเชื่อมกับคำเชื่อมขยายนามไม่คล่อง 100%',
        'เช็กคำหน้า-หลังทันที: หน้าเป็น everything/all/noun → ห้าม what | หน้ามีลูกน้ำ (,) → ห้าม that | หลังมี it/him/them → ตัดทิ้งเลย!',
      ],
      vocab: [
        ['courtyard', 'ลานกลางบ้าน / ลานกว้าง', '/ˈkɔːt.jɑːd/', 'a shaded courtyard', 'ลานร่มรื่นกลางอาคาร'],
        ['gather', 'รวมตัวกัน', '/ˈɡæð.ər/', 'gather every Saturday', 'รวมตัวกันทุกวันเสาร์'],
        ['host', 'เจ้าภาพ / ผู้จัด', '/həʊst/', 'a welcoming host', 'เจ้าภาพที่ต้อนรับอบอุ่น'],
        ['showcase', 'จัดแสดง / นำเสนอ', '/ˈʃəʊ.keɪs/', 'showcase local crafts', 'จัดแสดงงานฝีมือท้องถิ่น'],
        ['transform', 'ปรับเปลี่ยนโฉม', '/trænsˈfɔːm/', 'transform an old warehouse', 'ปรับโฉมโกดังเก่า'],
        ['inspire', 'สร้างแรงบันดาลใจ', '/ɪnˈspaɪər/', 'inspire young makers', 'สร้างแรงบันดาลใจให้นักสร้างรุ่นใหม่'],
        ['thriving', 'คึกคัก / เจริญรุ่งเรือง', '/ˈθraɪ.vɪŋ/', 'a thriving neighborhood hub', 'ศูนย์รวมย่านที่คึกคักมีชีวิตชีวา'],
      ],
      examples: [
        ['What makes this community courtyard special is the warm spirit among neighbors.', 'สิ่งที่ทำให้ลานชุมชนแห่งนี้พิเศษคือน้ำใจอันอบอุ่นของเพื่อนบ้าน'],
        ['The vintage bookstore we discovered upstairs sells maps from the 1970s.', 'ร้านหนังสือเก่าที่เราเจอชั้นบนขายแผนที่ตั้งแต่ยุค 1970'],
        ['We chatted with a baker whose grandmother founded the neighborhood café.', 'เราคุยกับช่างทำขนมปังที่คุณย่าของเขาเป็นผู้ก่อตั้งร้านกาแฟประจำย่าน'],
        ['The warehouse opened last spring, which quickly transformed the whole street.', 'โกดังเปิดเมื่อฤดูใบไม้ผลิที่แล้ว ซึ่งเปลี่ยนโฉมถนนทั้งสายอย่างรวดเร็ว'],
      ],
      reading:
        'Last Saturday, I explored a community space in Thonburi that transformed an old rice warehouse into a thriving weekend hub. Inside sits a shaded courtyard where neighbors gather over iced tea while acoustic guitarists play soft folk tunes. What caught my eye first was a long wooden table showcasing handcrafted bags made by local artisans whose families have stitched canvas for generations. Upstairs, a small studio hosts language meetups every Sunday morning, which encourages shy learners to speak without pressure. During lunch, I met the founder, who smiled warmly and shared everything that she learned while restoring the brick building. The afternoon breeze we enjoyed under those wide mango trees made the visit truly unforgettable.',
      listenQ: 'What does the small studio upstairs host every Sunday morning?',
      listenA: 'Language meetups, which encourage shy learners to speak without pressure.',
      dictation: 'She shared everything that she learned while restoring the building.',
      listenNote:
        'บทอ่านนี้รวม Relative Clauses ครบทุกแบบ: `that transformed`, `where neighbors gather`, `What caught`, `whose families`, `, which encourages`, `, who smiled`, `everything that she learned`, และ `breeze we enjoyed` (ละคำเชื่อม!)',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังเสียงจากบทอ่านแล้วเลือกกลุ่มคำเชื่อมที่ถูกต้องตามต้นฉบับ: "During lunch, I met the founder, _____ smiled warmly and shared _____ she learned while restoring the brick building."',
          answer: 'who / everything that',
          choices: [
            'that / everything what',
            'who / everything that',
            'whom / all what',
            'whose / something which',
          ],
          explanation:
            'จากบทอ่าน: หลังลูกน้ำใช้ who (ห้าม that) และหลัง everything ใช้ that (ห้าม what)',
          audio_text:
            'During lunch, I met the founder, who smiled warmly and shared everything that she learned while restoring the brick building.',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้จุดผิด 3 จุดในสัปดาห์นี้: "Everything what we tried at the market, that sits beside the pier, made the dish we cooked it taste amazing."',
          answer:
            'Everything that we tried at the market, which sits beside the pier, made the dish we cooked taste amazing.',
          explanation:
            '1) Everything that (ห้าม what) 2) หลังลูกน้ำใช้ , which (ห้าม , that) 3) ตัด it ท้าย the dish we cooked',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Relative Clauses ทั้งแบบ Defining, Whose และ Non-defining ได้ถูกต้องทั้งหมด?',
          answer: 'The neighbor whose bicycle I borrowed yesterday lives in Chiang Rai, which is my favorite northern city.',
          choices: [
            'The neighbor who his bicycle I borrowed yesterday lives in Chiang Rai, that is my favorite northern city.',
            'The neighbor whose bicycle I borrowed yesterday lives in Chiang Rai, which is my favorite northern city.',
            'The neighbor whose bicycle I borrowed it yesterday lives in Chiang Rai, what is my favorite city.',
            'The neighbor which bicycle I borrowed lives in Chiang Rai, which my favorite northern city.',
          ],
          explanation:
            'whose bicycle (ไม่มี it ซ้ำ) + , which is (Non-defining) ถูกต้อง 100%',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำที่ขาดโดยไม่ต้องใช้คำเชื่อมเกิน: Do you remember the exact restaurant _____ we celebrated your birthday last year?',
          answer: 'where',
          explanation: 'เกิดเหตุการณ์ฉลอง "ที่ร้านอาหารนั้น" จึงใช้ where',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "สิ่งที่ฉันซาบซึ้งใจมากคือเจ้าของร้านผู้ใจดีซึ่งแนะนำเส้นทางให้พวกเรา"',
          answer:
            'What I really appreciated was the kind owner who suggested the route to us.',
          explanation: 'What I really appreciated... + who suggested (ละ who ไม่ได้เพราะเป็นประธาน)',
        },
      ],
      writing:
        'เขียนรีวิวหรือแนะนำสถานที่ชุมชน/ตลาด/ร้านโปรดในเมืองของคุณ 5–6 ประโยค โดยใช้ Relative Clauses ครบทั้ง 5 แบบ (`who/that`, ละคำเชื่อม, `where/whose`, `, who / , which`, และ `What...` / `everything that...`)',
      writingSample:
        'One spot I visit almost every Saturday is a green courtyard hidden behind an old shophouse near my station. It is a peaceful corner where neighborhood bakers sell warm sourdough alongside fresh flower stalls. At the corner table sits Aunty Mei, who remembers every regular customer’s favorite tea. What I appreciate most is how friendly everyone feels, which makes the noisy city feel much smaller. Everything that I buy there supports local makers directly.',
      writingNote:
        'ตรวจเช็กครั้งสุดท้าย: ไม่มีสรรพนามซ้ำท้ายประโยค ไม่มี that หลังลูกน้ำ และไม่มี what หลัง everything/คำนาม',
      speakingTopic:
        'ทบทวนสัปดาห์ 15: แนะนำสถานที่และผู้คนรอบตัวแบบไร้รอยต่อ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดให้ครบสูตรทั้ง 5 แบบ: สิ่งที่ชอบ (What I like...), สถานที่ (where...), ของที่เราลอง (the food we tried), เจ้าของ (whose...), และผลลัพธ์ (, which makes...)',
        'ใช้รอบ 2 นาทีฝึกพูดแบบไม่สะดุดตรงรอยต่อ clause และลดเสียง `that` เป็น `/ðət/`',
      ],
    },
  ]
);
