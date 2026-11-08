import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 3: คิดเป็นภาษาอังกฤษและสื่อสารในงานจริง';

export const WEEK23: ModuleSeed = createModule(
  {
    week: 23,
    phase: 3,
    phase_title: PHASE_TITLE,
    cefr_level: 'B1 → B2',
    title: 'Discourse Markers: เชื่อมตรรกะและความคิดให้เป็นระบบ',
    summary:
      'จัดโครงสร้างความคิดและงานเขียน-พูดให้ไหลลื่นด้วยตัวเชื่อมแสดงความขัดแย้ง เหตุ-ผล การเสริมความ และตัวอย่าง โดยไม่ใช้คำเชื่อมซ้ำซ้อนแบบภาษาไทย',
    focus: 'Contrast, Cause/Result, Addition, Punctuation with Linkers',
  },
  [
    {
      day: 155,
      title: 'เชื่อมความขัดแย้งอย่างแม่นยำ (although / despite / however / whereas)',
      objective:
        'เลือกใช้ตัวเชื่อมความขัดแย้งให้ถูกโครงสร้างไวยากรณ์ (ประโยคเต็ม vs นาม/V-ing) และกำจัดจุดพลาดซ้ำซ้อนแบบ "Although... but..." และ "despite of"',
      explanation:
        'คนไทยเวลาต้องการเชื่อมประโยคขัดแย้งมักพลาด 3 เรื่องใหญ่: 1) **ใส่ตัวเชื่อมซ้ำซ้อน** เช่น *"Although it was raining, but we went out."* (ในภาษาไทย "ถึงแม้ว่า... แต่..." พูดคู่กันได้ แต่ในภาษาอังกฤษใช้ได้แค่ **อย่างใดอย่างหนึ่ง**: `Although it was raining, we went out.` หรือ `It was raining, but we went out.`) 2) **แยกกลุ่มคำตามหลังให้ขาด**: **`although / even though / whereas + ประโยคเต็ม (S + V)`** ส่วน **`despite / in spite of + คำนาม / V-ing / the fact that`** (**ห้ามเติม `of` หลัง `despite` เด็ดขาด!** พูดแค่ `Despite the rain...` หรือ `In spite of the rain...`) 3) **`however` ต้องคั่นประโยคด้วยจุดหรือเซมิโคลอน**: `The route looked quick; however, traffic stalled near the bridge.` (ไม่ใช้แค่ลูกน้ำคั่น 2 ประโยคยาว)',
      sound: [
        'Linking & Pause Control in Contrast Markers',
        'although /ɔːlˈðəʊ/ · despite /dɪˈspaɪt/ · whereas /weərˈæz/ · however /haʊˈev.ər/',
        'เวลาพูด "However," ต้นประโยคหรือหลังเซมิโคลอน ให้ลงเสียงเน้นที่พยางค์กลาง (-EV-) แล้วหยุดหายใจสั้นๆ ก่อนเข้าประโยคขัดแย้ง ส่วน "in spite of" เชื่อมท้ายเป็น "อิน-สปาย-เทิฟ" (/ɪn ˈspaɪt.əv/)',
        'ฝึกพูด 3 โครงสร้างจากเหตุการณ์เดียวกัน: "Although the ticket was pricey, we went. / Despite the price, we went. / The ticket was pricey; however, we went."',
      ],
      l1: [
        'พูดว่า "Although the team worked hard, but they missed the target" หรือ "Despite of the bad weather, we arrived safely."',
        'ภาษาไทยใช้โครงสร้างคู่ "ถึงแม้ว่า... แต่..." และจำสับสนระหว่าง "in spite of" (มี of) กับ "despite" (ไม่มี of)',
        'ท่อง 2 กฎเหล็กขัดแย้ง: 1) ประโยคหนึ่งมีได้แค่ 1 ตัวเชื่อมขัดแย้ง (ตัด but ทิ้งเมื่อใช้ although!) 2) despite ไม่มี of เด็ดขาด!',
      ],
      vocab: [
        ['despite', 'ทั้งๆ ที่ / แม้ว่า (+ นาม/V-ing)', '/dɪˈspaɪt/', 'despite the tight schedule', 'ทั้งๆ ที่ตารางแน่น'],
        ['whereas', 'ในขณะที่ (เปรียบเทียบความต่าง)', '/weərˈæz/', 'whereas others prefer', 'ในขณะที่คนอื่นชอบ'],
        ['nevertheless', 'กระนั้นก็ตาม / อย่างไรก็ตาม', '/ˌnev.ə.ðəˈles/', 'nevertheless remain hopeful', 'กระนั้นก็ยังคงมีความหวัง'],
        ['obstacle', 'อุปสรรค / สิ่งกีดขวาง', '/ˈɒb.stə.kəl/', 'overcome a major obstacle', 'เอาชนะอุปสรรคใหญ่'],
        ['outweigh', 'มีน้ำหนักมากกว่า / คุ้มกว่า', '/ˌaʊtˈweɪ/', 'outweigh the drawbacks', 'มีน้ำหนักมากกว่าข้อเสีย'],
        ['drawback', 'ข้อเสีย / จุดอ่อน', '/ˈdrɔː.bæk/', 'a minor drawback', 'ข้อเสียเล็กน้อย'],
        ['steady', 'สม่ำเสมอ / มั่นคง', '/ˈsted.i/', 'make steady progress', 'ก้าวหน้าอย่างสม่ำเสมอ'],
      ],
      examples: [
        ['Although the morning ferry was delayed by fog, everyone arrived cheerful.', 'ถึงแม้เรือข้ามฟากตอนเช้าจะดีเลย์เพราะหมอก แต่ทุกคนก็มาถึงอย่างสดใส'],
        ['Despite the noisy street outside, the library corner feels remarkably peaceful.', 'ทั้งๆ ที่ถนนข้างนอกเสียงดัง แต่มุมห้องสมุดนี้กลับเงียบสงบอย่างน่าทึ่ง'],
        ['My older brother enjoys big city crowds, whereas I prefer quiet coastal towns.', 'พี่ชายฉันชอบความคึกคักในเมืองใหญ่ ในขณะที่ฉันชอบเมืองชายทะเลเงียบๆ'],
        ['The repair cost slightly more than planned; however, the battery now lasts all day.', 'ค่าซ่อมแพงกว่าที่วางแผนไว้นิดหน่อย อย่างไรก็ตาม ตอนนี้แบตอยู่ได้ทั้งวันเลย'],
      ],
      reading:
        'Choosing between remote work and office days often divides teams. Although working from home eliminates long commutes, it can also blur the line between rest and deadlines. Conversely, commuting downtown feels tiring; however, spontaneous hallway chats frequently spark useful solutions within minutes. Notice how the pros and cons of both setups balance out when teams compare them fairly. In our recent survey, senior staff appreciated quiet solo mornings at home, whereas newer hires strongly preferred sitting beside teammates in person. Despite these clear differences, both groups agreed on one practical rule: flexible schedules work best when communication stays predictable. Even though unexpected changes still happen every week, shared calendars help everyone make steady progress without feeling disconnected.',
      listenQ: 'Who strongly preferred sitting beside teammates in person according to the survey?',
      listenA: 'Newer hires.',
      dictation: 'Despite the tight deadline, we made steady progress.',
      listenNote:
        'สังเกตว่าหลัง "Despite" เป็นวลีนาม "the tight deadline" ทันที (ไม่มีคำว่า of!) และมี comma คั่นก่อนเข้าประโยคหลัก',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้จุดพลาดคู่ยอดฮิตของคนไทย 2 จุดในประโยคเดียว: "Even though the coffee shop was crowded, but we stayed two hours despite of the loud music."',
          answer:
            'Even though the coffee shop was crowded, we stayed two hours despite the loud music.',
          explanation:
            '1) ตัด but ทิ้งเมื่อประโยคขึ้นต้นด้วย Even though / Although 2) คำว่า despite ห้ามตามด้วย of เด็ดขาด',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้เครื่องหมายวรรคตอนและโครงสร้างเชื่อมความขัดแย้งได้ถูกต้องสมบูรณ์?',
          answer:
            'The train looks slower on paper; however, it avoids all evening road traffic.',
          choices: [
            'The train looks slower on paper; however, it avoids all evening road traffic.',
            'The train looks slower on paper, however, it avoids all evening road traffic.',
            'Despite it looks slower on paper, the train avoids evening road traffic.',
            'Although the train looks slower on paper, but it avoids evening road traffic.',
          ],
          explanation:
            'ใช้เซมิโคลอน (หรือจุด) หน้า however และจุลภาคหลัง however เพื่อเชื่อมสองประโยคอิสระโดยไม่เกิด comma splice',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมเปรียบเทียบสองฝ่าย: My colleague prefers quick voice memos, _____ I usually type short bullet points.',
          answer: 'whereas',
          explanation:
            'whereas = ในขณะที่ (ใช้เปรียบเทียบลักษณะที่ต่างกันของสองคนหรือสองสิ่งในประโยคเดียว)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ทั้งๆ ที่ฝนตกหนัก ทีมงานก็ยังจัดสถานที่กลางแจ้งจนเสร็จทันเวลา"',
          answer:
            'Despite the heavy rain, the team still finished setting up the outdoor venue on time.',
          explanation:
            'ใช้ Despite + noun phrase (the heavy rain) หรือ In spite of the heavy rain',
        },
      ],
      writing:
        'เขียนเปรียบเทียบข้อดี-ข้อเสียของการตัดสินใจเรื่องหนึ่ง (เช่น เรียนออนไลน์ vs เรียนสด, ซื้อรถ vs นั่งรถไฟฟ้า, หรือทำงานอิสระ vs งานประจำ) 5–6 ประโยค โดยใช้ให้ครบทั้ง although/even though, despite, whereas และ ; however,',
      writingSample:
        "Switching to an electric scooter saved me considerable time each week. Although the upfront price felt high at first, lower daily charging costs quickly balanced my monthly budget. Despite occasional afternoon showers, wearing a light poncho keeps my short commute comfortable. My sister still drives across town every morning, whereas I glide past crowded intersections in fifteen minutes. Long trips across provinces remain a minor drawback; however, the everyday convenience easily outweighs the limitation.",
      writingNote:
        'เช็กทุกประโยคที่ขึ้นด้วย Although / Even though ว่าไม่มี "but" โผล่กลางประโยค และเช็กว่าหลัง Despite ไม่มี "of"',
      speakingTopic: 'ชั่งน้ำหนักสองมุมของเรื่องใกล้ตัวด้วยคำเชื่อมขัดแย้ง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกหัวข้อ 1 เรื่องที่ต้องชั่งข้อดีกับข้อเสีย (เช่น เมืองใหญ่ vs ต่างจังหวัด หรือกาแฟที่บ้าน vs ร้านกาแฟ)',
        'บังคับใช้โครงสร้าง 3 แบบให้ครบ: Although..., ... | Despite + นาม, ... | ...; however, ...',
        'ตั้งใจตัดคำว่า "but" ออกจากสมองทุกครั้งที่เปิดประโยคด้วย Although / Even though',
      ],
    },
    {
      day: 156,
      title: 'อธิบายเหตุผลอย่างมืออาชีพ (because of / due to / owing to / since / as)',
      objective:
        'แยกโครงสร้างระหว่างตัวเชื่อมเหตุผลที่ตามด้วยประโยคเต็ม (because, since, as) กับตัวเชื่อมที่ตามด้วยคำนาม/วลีนาม (because of, due to, owing to, thanks to)',
      explanation:
        'พอจะพูดคำว่า "เพราะว่า..." หลายคนใช้ `because` คำเดียวทั้งเรื่อง หรือเผลอใช้ `because of` นำหน้าประโยคที่มีกริยา! แบ่งตัวเชื่อมเหตุผลเป็น 2 กล่องชัดเจน: 1) **ตามด้วยประโยคเต็ม (`S + V`)**: **`because` / `since` / `as`** (`Since everyone arrived early, we started five minutes ahead of schedule.` — `since` กับ `as` เมื่อวางต้นประโยคจะฟังดูนุ่มนวลและเป็นทางการกว่า `because`) 2) **ตามด้วยคำนาม / V-ing เท่านั้น (ห้ามมีกริยาแท้!)**: **`because of` / `due to` / `owing to` / `thanks to`** เช่น `The flight was delayed due to thick fog.` (**ห้าม** ❌ *due to the fog was thick*!) และจำทริกโทนภาษา: **`thanks to`** ใช้กับเหตุผลเชิงบวก ("ต้องขอบคุณ..."), ส่วน **`due to`** ใช้เล่าเหตุเชิงระบบ/ปัญหาได้อย่างเป็นกลางไม่โทษตัวบุคคล',
      sound: [
        'Smooth Linking in Cause Phrases',
        'because of /bɪˈkɒz.əv/ · due to /ˈdjuː.tə/ · owing to /ˈəʊ.ɪŋ.tə/ · thanks to /θæŋks tə/',
        'คำว่า "because of" พูดเร็วเชื่อมเสียง /z/ เข้า /əv/ เป็น "บิ-คอ-เซิฟ" ส่วน "due to" และ "thanks to" ลดคำว่า "to" เป็น /tə/ ("ดิว-เทอะ", "แทงคส-เทอะ")',
        'ฝึกพูดสลับรูปประโยคเต็มกับวลีนาม 3 คู่: "because the road flooded" <-> "due to road flooding" / "since you helped" <-> "thanks to your help"',
      ],
      l1: [
        'พูดว่า "Due to the system crashed, we lost the draft" หรือ "Because of it rained heavily, we stayed inside."',
        'มองว่า because = because of = due to โดยลืมเช็กว่าหลังคำบุพบท (of / to) ใส่ได้แค่คำนาม/V-ing ไม่ใช่ประโยคเต็ม',
        'จำกฎเดียวจบ: เห็นคำลงท้าย "of" หรือ "to" (because of, due to, owing to, thanks to) -> ด้านหลังห้ามมีกริยาแท้! ถ้าจะเล่าเป็นประโยคเต็มให้ตัด of/to ออกแล้วใช้ because / since / as!',
      ],
      vocab: [
        ['due to', 'เนื่องมาจาก (+ คำนาม/V-ing)', '/ˈdjuː.tə/', 'postponed due to heavy rain', 'เลื่อนออกไปเนื่องจากฝนตกหนัก'],
        ['owing to', 'อันเนื่องมาจาก (+ คำนาม)', '/ˈəʊ.ɪŋ.tə/', 'delayed owing to staffing limits', 'ล่าช้าเนื่องจากข้อจำกัดด้านคน'],
        ['thanks to', 'ต้องขอบคุณ (+ คำนามเชิงบวก)', '/θæŋks tə/', 'thanks to early preparation', 'ต้องขอบคุณการเตรียมตัวล่วงหน้า'],
        ['factor', 'ปัจจัยสำคัญ', '/ˈfæk.tər/', 'a key contributing factor', 'ปัจจัยสำคัญที่มีส่วนทำให้เกิด'],
        ['disruption', 'การหยุดชะงัก', '/dɪsˈrʌp.ʃən/', 'minimize service disruption', 'ลดการหยุดชะงักของบริการให้เหลือน้อยที่สุด'],
        ['shortage', 'ภาวะขาดแคลน', '/ˈʃɔː.tɪdʒ/', 'a temporary shortage', 'ภาวะขาดแคลนชั่วคราว'],
        ['stem from', 'มีต้นตอมาจาก', '/stem frɒm/', 'stem from unclear instructions', 'มีต้นตอจากคำสั่งที่ไม่ชัดเจน'],
      ],
      examples: [
        ['Since the café’s espresso machine needed maintenance, we met at the tea house next door.', 'เนื่องจากเครื่องชงกาแฟของร้านต้องซ่อมบำรุง เราเลยนัดเจอกันที่ร้านชาข้างๆ แทน'],
        ['The afternoon ferry was canceled due to strong waves near the southern pier.', 'เรือข้ามฟากช่วงบ่ายถูกยกเลิกเนื่องจากคลื่นแรงบริเวณท่าเรือฝั่งใต้'],
        ['Thanks to your clear checklist, our new volunteer set up the registration booth smoothly.', 'ต้องขอบคุณเช็กลิสต์ที่ชัดเจนของคุณ อาสาสมัครใหม่ของเราจึงจัดบูธลงทะเบียนได้อย่างราบรื่น'],
        ['Much of the confusion stemmed from two teams using different file versions.', 'ความสับสนส่วนใหญ่มีต้นตอมาจากการที่สองทีมใช้ไฟล์คนละเวอร์ชันกัน'],
      ],
      reading:
        'Last Thursday, an unexpected power fluctuation disrupted online orders across three local bakeries just before the lunch rush. Initially, customers wondered why the checkout screen kept reloading. Later that afternoon, the shop manager shared a clear update explaining what had happened. The slowdown had occurred due to scheduled cable maintenance two blocks away, rather than any fault in the bakery’s software. Since drivers were already waiting outside the kitchen, staff quickly wrote handwritten tickets to minimize service disruption. Thanks to calm teamwork and a printed menu sheet kept under the counter, nearly every order reached customers within twenty minutes of the original estimate. Looking back, most delays in busy shops stem from missing backup habits; owing to that single paper fallback, the bakery turned a stressful hour into loyal customer praise.',
      listenQ: 'What caused the online order slowdown across the three bakeries?',
      listenA: 'Scheduled cable maintenance two blocks away.',
      dictation: 'The flight was delayed due to thick coastal fog.',
      listenNote:
        'จับเสียง "due to" (/ˈdjuː.tə/) และสังเกตว่าด้านหลังตามด้วยกลุ่มคำนาม "thick coastal fog" ไม่มีกริยาแท้',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ใช้ตัวเชื่อมเหตุผลผิดโครงสร้าง: "Because of the bridge was closed for repairs, many buses arrived late due to traffic moved slowly."',
          answer:
            'Because the bridge was closed for repairs, many buses arrived late because traffic moved slowly.',
          explanation:
            'ทั้ง "the bridge was closed" และ "traffic moved slowly" เป็นประโยคเต็ม (S+V) จึงต้องใช้ because (หรือ since/as) แทน because of / due to (หรือย่อเป็น due to slow traffic / the bridge closure)',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ "due to" หรือ "thanks to" ได้ถูกต้องตามทั้งโครงสร้างและโทนความหมาย?',
          answer:
            'Thanks to careful preparation, the community fair opened ten minutes early.',
          choices: [
            'Thanks to careful preparation, the community fair opened ten minutes early.',
            'Thanks to the heavy rain, the outdoor picnic was canceled.',
            'Due to our team practiced twice, the presentation flowed smoothly.',
            'Owing to she forgot the charger, her tablet shut down.',
          ],
          explanation:
            'thanks to ใช้กับผลลัพธ์เชิงบวก + นาม (careful preparation) ส่วน due to/owing to ห้ามตามด้วยประโยคที่มีกริยาแท้',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ตรงบริบท (since / due to): _____ you already reviewed the draft notes, let’s jump straight into the final budget.',
          answer: 'Since',
          explanation:
            'ด้านหลังเป็นประโยคเต็ม (you already reviewed...) และวางต้นประโยคเพื่อบอกเหตุที่ทั้งสองฝ่ายรู้กันแล้ว จึงใช้ Since (หรือ As)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ความล่าช้าส่วนใหญ่มีต้นตอมาจากการขาดการสื่อสารที่ชัดเจน"',
          answer:
            'Most of the delays stem from a lack of clear communication.',
          explanation:
            'ใช้กริยาวลี stem from + noun phrase เพื่ออธิบายต้นตอได้อย่างเป็นกลาง',
        },
      ],
      writing:
        'เขียนชี้แจงเหตุผลที่งานหรือทริปหนึ่งมีการปรับเปลี่ยนแผน 5–6 ประโยค โดยใช้ให้ครบทั้ง since/as (+ ประโยค), due to (+ นาม/V-ing), stem from และ thanks to (+ นามเชิงบวก)',
      writingSample:
        "We decided to shift Sunday's outdoor sketch walk to the indoor museum gallery. This change happened mainly due to forecast thunderstorms along the riverfront. As several participants are carrying paper sketchbooks and watercolor sets, keeping everyone under a dry roof felt far safer. Any confusion around the gate number stemmed from an old link on last month's flyer, which we have now updated. Thanks to the museum staff's quick help, we even reserved a bright seating alcove overlooking the courtyard.",
      writingNote:
        'ตรวจเช็กคำหลัง due to, owing to, because of, thanks to ทุกจุดว่าไม่มีกริยาแท้ (V1/V2) หลงเข้าไป!',
      speakingTopic: 'อธิบายต้นตอปัญหาและทางออกอย่างไม่โทษคนอื่น (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าเหตุการณ์ที่แผนสะดุด 1 เรื่อง โดยอธิบายเหตุผลเชิงระบบแทนการบ่นตัวบุคคล',
        'ฝึกแปลงเหตุผลจากประโยคเต็ม (because + S + V) เป็นกลุ่มนาม (due to + Noun / thanks to + Noun)',
        'ออกเสียง "due to" ("ดิว-เทอะ") และ "because of" ("บิ-คอ-เซิฟ") ให้เชื่อมต่อเนื่อง',
      ],
    },
    {
      day: 157,
      title: 'เชื่อมผลลัพธ์และระดับความเข้มข้น (therefore / consequently / so...that / such...that)',
      objective:
        'ใช้ตัวเชื่อมผลลัพธ์ (therefore, consequently, as a result) อย่างถูกเครื่องหมายวรรคตอน และแยกใช้ so + adj/adv + that กับ such + (a/an) adj + noun + that ได้แม่นยำ',
      explanation:
        'เวลาเล่าเหตุและผล ระดับ A2 ใช้แค่ `so` ทุกครั้ง พอขึ้นระดับ B1→B2 เรามีตัวเลือกที่ช่วยให้ตรรกะคมชัดขึ้น 2 ชุด: 1) **ตัวเชื่อมผลลัพธ์ระหว่างประโยค**: **`therefore` / `consequently` / `as a result`** เช่น `The supplier missed two check-ins. As a result, we ordered from a backup vendor.` หรือ `The software hadn’t been updated; consequently, older files failed to open.` (**ระวัง!** ห้ามใช้ comma ตัวเดียวเชื่อม `..., therefore, ...` ให้ใช้ `. Therefore, ...` หรือ `; therefore, ...`) 2) **แสดงระดับความเข้มข้นจนเกิดผลลัพธ์**: **`so + adj/adv + that`** (`The instructions were so unclear that nobody knew where to start.`) vs **`such + (a/an) + adj + noun + that`** (`They were such unclear instructions that...` / `It was such a clear guide that everyone finished early.`) — **คนไทยมักสลับ `so` กับ `such` เมื่อมีคำนามพ่วงท้าย!**',
      sound: [
        'Stress & Rhythm in "so...that" and "such a...that"',
        'therefore /ˈðeə.fɔːr/ · consequently /ˈkɒn.sɪ.kwənt.li/ · as a result /əz ə rɪˈzʌlt/',
        'เวลาเน้นความเข้มข้นด้วย so / such ให้ยืดเสียงและยกโทนที่คำว่า SO หรือ SUCH (และคำคุณศัพท์หลัก) เพื่อสื่อความรู้สึกชัดเจน: "It was SO loud that..." / "It was SUCH a great tip that..."',
        'ฝึกพูดประโยคคู่เทียบจังหวะ: "The queue was SO long that we left." vs "It was SUCH a long queue that we left."',
      ],
      l1: [
        'พูดว่า "It was so heavy rain that we stayed indoors" หรือเชื่อมสองประโยคด้วย comma splice: "The road flooded, therefore we worked remotely."',
        'ลืมเช็กว่าหลังคำคุณศัพท์มี "คำนาม" ตามมาหรือไม่ (ถ้ามีนามต้องเปลี่ยนจาก so เป็น such) และเข้าใจว่า therefore ใช้แทนลูกน้ำ+so ได้เลย',
        'เช็กตัวหลังสุดก่อนคำว่า that เสมอ: จบด้วย adj/adv เปล่าๆ -> ใช้ SO · จบด้วย adj + NOUN -> ใช้ SUCH (a/an)! และใส่ ; หรือ . หน้า therefore เสมอ',
      ],
      vocab: [
        ['consequently', 'ดังนั้น / ส่งผลให้ตามมา', '/ˈkɒn.sɪ.kwənt.li/', 'consequently fall behind', 'ส่งผลให้ล่าช้าตามมา'],
        ['as a result', 'ผลที่ตามมาคือ', '/əz ə rɪˈzʌlt/', 'as a direct result', 'เป็นผลลัพธ์โดยตรง'],
        ['overwhelmed', 'ล้นมือ / ท่วมท้นจนรับไม่ไหว', '/ˌəʊ.vəˈwelmd/', 'feel completely overwhelmed', 'รู้สึกท่วมท้นจนรับมือแทบไม่ไหว'],
        ['vivid', 'ชัดเจนแจ่มแจ้ง / มีชีวิตชีวา', '/ˈvɪv.ɪd/', 'give a vivid example', 'ยกตัวอย่างให้เห็นภาพชัด'],
        ['inevitable', 'หลีกเลี่ยงไม่ได้', '/ɪnˈev.ɪ.tə.bəl/', 'an inevitable outcome', 'ผลลัพธ์ที่หลีกเลี่ยงไม่ได้'],
        ['streamline', 'ปรับขั้นตอนให้กระชับคล่องตัว', '/ˈstriːm.laɪn/', 'streamline the workflow', 'ปรับขั้นตอนงานให้คล่องตัวขึ้น'],
        ['dramatically', 'อย่างมาก / อย่างเห็นได้ชัด', '/drəˈmæt.ɪ.kəl.i/', 'improve dramatically', 'ดีขึ้นอย่างเห็นได้ชัด'],
      ],
      examples: [
        ['The printer ran out of ink mid-morning; consequently, we switched to shared tablets.', 'เครื่องพิมพ์หมึกหมดกลางสาย ส่งผลให้เราหันมาใช้แท็บเล็ตแชร์กันแทน'],
        ['Her explanation was so clear that even complete beginners followed every step.', 'คำอธิบายของเธอชัดเจนมากจนแม้แต่มือใหม่สนิทยังทำตามได้ทุกขั้นตอน'],
        ['It was such a practical workshop that three participants stayed afterward to ask questions.', 'มันเป็นเวิร์กชอปที่นำไปใช้ได้จริงมากจนผู้เข้าร่วมสามคนอยู่ต่อเพื่อถามคำถาม'],
        ['We streamlined the weekly form; therefore, sign-ups doubled within two weeks.', 'เราปรับแบบฟอร์มรายสัปดาห์ให้กระชับขึ้น ดังนั้นยอดลงทะเบียนจึงเพิ่มขึ้นเป็นสองเท่าในสองสัปดาห์'],
      ],
      reading:
        'Two years ago, our neighborhood library’s checkout counter used a slow, three-step paper log. On Saturday afternoons, the line grew so long that families often put their books back and walked out. It was such a frustrating bottleneck that staff spent half their energy apologizing instead of recommending stories. Eventually, a part-time volunteer proposed a simple QR scanning sheet to streamline the workflow. The change cost almost nothing; however, it cut checkout time from four minutes per person to under thirty seconds. As a result, weekend visits jumped dramatically within a single season. More children now borrow picture books every Friday; consequently, the library has started hosting monthly storytelling circles too. When one persistent snag is fixed properly, positive results often ripple outward faster than anyone expects.',
      listenQ: 'What happened on Saturday afternoons when the checkout line grew too long?',
      listenA: 'Families often put their books back and walked out.',
      dictation: 'It was such a useful session that everyone took notes.',
      listenNote:
        'สังเกตคู่คำ "such a" + adj + noun + "that" โดยเชื่อมเสียง "such-a" เป็น "ซัช-เชอะ" (/ˈsʌtʃ.ə/) แล้วเน้นที่คำว่า useful',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ใช้ so ผิดที่และเชื่อม therefore ด้วยลูกน้ำผิดวิธี: "He gave so helpful advice that we saved hours, therefore we finished early."',
          answer:
            'He gave such helpful advice that we saved hours; therefore, we finished early.',
          explanation:
            '1) advice เป็นคำนามนับไม่ได้ มีคำนามตามหลังต้องใช้ such (ไม่ใส่ a เพราะ advice นับไม่ได้!) 2) คั่นประโยคอิสระหน้า therefore ด้วย ; (หรือ .) และใส่ , หลัง therefore',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ "so...that" หรือ "such...that" ได้ถูกต้องตามหลักไวยากรณ์ 100%?',
          answer:
            'They faced such unexpected delays that they booked an extra hotel night.',
          choices: [
            'They faced such unexpected delays that they booked an extra hotel night.',
            'They faced so unexpected delays that they booked an extra hotel night.',
            'It was a such noisy café that nobody could hear the speaker.',
            'The café was such noisy that nobody could hear the speaker.',
          ],
          explanation:
            'delays เป็นคำนามพหูพจน์ ใช้ such + adj + plural noun + that (ไม่ต้องใส่ a); ถ้าไม่มีคำนามต้องใช้ so + adj + that (so noisy that)',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำบอกผลลัพธ์ที่เหมาะสมต้นประโยคใหม่: The supplier shipped the wrong adapter. _____, our sound check started forty minutes behind schedule.',
          answer: 'Consequently',
          explanation:
            'Consequently, ... (หรือ As a result, / Therefore,) ใช้ขึ้นประโยคใหม่เพื่อสรุปผลที่ตามมาจากประโยคก่อนหน้า',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ลมแรงมากจนเต็นท์ด้านข้างเกือบปลิวไปเลย"',
          answer:
            'The wind was so strong that the side tent nearly blew away.',
          explanation:
            'ใช้ so + adj (strong) + that เพราะหลัง strong ไม่มีคำนามตามหลัง',
        },
      ],
      writing:
        'เขียนเล่าเหตุการณ์ "การปรับแก้เล็กๆ ที่เปลี่ยนผลลัพธ์ให้ดีขึ้นหรือแย่ลงมาก" 5–6 ประโยค โดยใช้ให้ครบทั้ง therefore / consequently (พร้อมเครื่องหมาย ; หรือ . ที่ถูก), so...that และ such...that',
      writingSample:
        "Last winter, our small team spent nearly two hours every Monday copying numbers across four separate spreadsheets. It was such a repetitive routine that mistakes slipped in almost every week; consequently, everyone dreaded Monday mornings. One teammate noticed the pattern and built a single shared template with automatic checks. The improvement was so dramatic that our weekly review dropped to twenty minutes. As a result, we gained an extra afternoon each week to talk directly with customers.",
      writingNote:
        'เช็กเครื่องหมายวรรคตอนหน้า therefore/consequently/as a result (ต้องเป็น . หรือ ;) และตรวจนับว่าคำนามหลัง such เป็นเอกพจน์ (such a/an...) หรือพหูพจน์/นับไม่ได้ (ไม่มี a/an)',
      speakingTopic: 'เล่าลูกโซ่เหตุและผลจากปัญหาจริง 1 เรื่อง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เริ่มจากสภาพเดิมด้วย so...that หรือ such (a)...that เพื่อย้ำความเข้มข้นของปัญหา',
        'ตามด้วยผลลัพธ์ต่อเนื่องโดยใช้ As a result, / Consequently, / Therefore,',
        'ใส่น้ำหนักเสียงที่คำว่า SO / SUCH เพื่อสื่อความรู้สึกจริง ไม่พูดราบเรียบ',
      ],
    },
    {
      day: 158,
      title: 'ขยายความ เสริมประเด็น และยกตัวอย่าง (moreover / in other words / specifically / for instance)',
      objective:
        'เลือกใช้ตัวเชื่อมเสริมประเด็น (furthermore, moreover, in addition) ตัวเชื่อมขยายความเข้าใจ (in other words, specifically) และตัวยกตัวอย่าง (for instance, such as) ได้ถูกหน้าที่และถูกโครงสร้าง',
      explanation:
        'เวลาพูดหรือเขียนคำอธิบายยาวขึ้น คนเรียนมักใช้แต่คำว่า *"and", "also", "like"* ซ้ำไปซ้ำมา ทำให้อ่านแล้วจับไม่ถูกว่าประโยคใหม่กำลัง **"เพิ่มข้อใหม่"**, **"อธิบายคำเดิมให้ง่ายขึ้น"**, หรือ **"ยกตัวอย่างเฉพาะเจาะจง"** แยก 3 กลุ่มนี้ให้ชัด: 1) **เพิ่มข้อน้ำหนักเสริม**: **`in addition` / `furthermore` / `moreover`** (วางต้นประโยคตามด้วย `,`) — **ระวัง!** `in addition` (ไม่มี `to` + ประโยคเต็ม) vs `in addition to` (+ คำนาม/V-ing)! เช่น `In addition to lowering costs, the app saves paper.` 2) **ขยายความให้ชัด/พูดให้ง่ายลง**: **`in other words`** (พูดอีกอย่างคือ / สรุปสั้นๆ ว่า), **`specifically`** (โดยเฉพาะเจาะจงลงไปคือ) 3) **ยกตัวอย่าง**: **`for instance` / `for example`** (+ ประโยคเต็มหรือรายการ) vs **`such as`** (+ รายการคำนามกลางประโยค ห้ามใส่จุดตัดประโยคหน้า such as)',
      sound: [
        'Clarifying Drop & Pause in "in other words" & "specifically"',
        'moreover /mɔːrˈəʊ.vər/ · specifically /spəˈsɪf.ɪ.kli/ · for instance /fər ˈɪn.stəns/',
        'คำว่า "specifically" ออกเสียง 4 พยางค์ชัดในจังหวะพูดจริง (/spəˈsɪf.ɪ.kli/ "สเปอะ-ซิฟ-ฟิค-คลี") ส่วน "in other words" เชื่อมลื่นเป็น "อิน-นะ-เธอร์-เวิร์ดส" แล้วเว้นวรรคสั้นๆ ก่อนอธิบายซ้ำ',
        'ฝึกพูดเรียง 3 ขั้น: ประเด็นหลัก -> "In other words, ..." (แปลให้ฟังง่าย) -> "For instance, ..." (ยกตัวอย่างจริง)',
      ],
      l1: [
        'ใช้ "In addition..." ชนคำนามตรงๆ โดยลืม "to" ("In addition the price, ...") หรือขึ้นต้นประโยคใหม่ด้วย "Such as, we offer..."',
        'จำสลับระหว่างบุพบท (in addition to / such as) ที่ต้องเกาะกับคำนาม กับตัวเชื่อมประโยค (In addition, / For instance,) ที่เปิดประโยคใหม่',
        'จำคู่รูปประโยคแม่นๆ: เปิดประโยคใหม่ = In addition, / For instance, / In other words, (มีลูกน้ำตาม!) | เกาะกลางประโยคหน้านาม = in addition to / such as (ไม่มีลูกน้ำขึ้นต้นประโยค!)',
      ],
      vocab: [
        ['furthermore', 'ยิ่งไปกว่านั้น (เสริมน้ำหนัก)', '/ˌfɜː.ðəˈmɔːr/', 'furthermore, the system supports', 'ยิ่งไปกว่านั้น ระบบยังรองรับ'],
        ['in other words', 'กล่าวอีกนัยหนึ่งก็คือ', '/ɪn ˈʌð.ər wɜːdz/', 'put it in other words', 'กล่าวอีกนัยหนึ่งก็คือ'],
        ['specifically', 'โดยเฉพาะเจาะจง', '/spəˈsɪf.ɪ.kli/', 'specifically designed for', 'ออกแบบมาเพื่อ...โดยเฉพาะ'],
        ['for instance', 'ยกตัวอย่างเช่น', '/fər ˈɪn.stəns/', 'for instance, weekly check-ins', 'ยกตัวอย่างเช่น การเช็กอินรายสัปดาห์'],
        ['measurable', 'ที่วัดผลได้เป็นรูปธรรม', '/ˈmeʒ.ər.ə.bəl/', 'set measurable goals', 'ตั้งเป้าหมายที่วัดผลได้'],
        ['redundant', 'ซ้ำซ้อนเกินจำเป็น', '/rɪˈdʌn.dənt/', 'remove redundant steps', 'ตัดขั้นตอนที่ซ้ำซ้อนออก'],
        ['illustrate', 'อธิบายให้เห็นภาพด้วยตัวอย่าง', '/ˈɪl.ə.streɪt/', 'illustrate a point clearly', 'ยกตัวอย่างประกอบประเด็นให้ชัด'],
      ],
      examples: [
        ['In addition to cutting plastic waste, bringing a reusable mug saves five baht per cup.', 'นอกเหนือจากการลดขยะพลาสติก การพกแก้วส่วนตัวช่วยประหยัดได้แก้วละห้าบาทด้วย'],
        [
          'Automating repetitive manual tasks gives staff much more time to help guests.',
          'การทำให้งานซ้ำซ้อนเป็นระบบอัตโนมัติช่วยให้พนักงานมีเวลาดูแลลูกค้ามากขึ้น',
        ],
        ['Several steps slowed us down—specifically, waiting for three separate email approvals.', 'มีหลายขั้นตอนที่ดึงให้เราช้า โดยเฉพาะอย่างยิ่งการรออีเมลอนุมัติถึงสามชั้น'],
        ['Try adding small daily habits—for instance, reading one short news brief with your breakfast.', 'ลองเพิ่มนิสัยเล็กๆ ประจำวันดูสิ เช่น อ่านข่าวสั้นหนึ่งชิ้นคู่กับมื้อเช้า'],
      ],
      reading:
        'Good speakers rarely dump ten facts onto listeners at once; instead, they guide attention step by step. First, state one clear idea and set measurable goals for the audience to grasp. Next, use clarifying phrases to translate abstract words into everyday terms. For instance, instead of merely saying "Let’s optimize onboarding," you might add, "In other words, let’s make day one simpler for newcomers." Furthermore, narrowing down broad advice makes your message instantly memorable. Rather than telling a team to "fix communication," point out what needs attention—specifically, sharing weekly status notes in one shared channel rather than across three chat apps. In addition to reducing confusion, this habit removes redundant follow-up questions. Notice how linking additions, clarifications, and vivid examples turns scattered thoughts into persuasive guidance.',
      listenQ: 'How does the passage suggest replacing the vague advice "fix communication"?',
      listenA: 'By specifically sharing weekly status notes in one shared channel rather than across three chat apps.',
      dictation: 'In other words, let us remove redundant steps.',
      listenNote:
        'จับเสียงเชื่อม "In other words" (/ɪn ˈʌð.ər wɜːdz/) และเสียง /t/ ของ "let" กับคำว่า "redundant"',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่ใช้ตัวเชื่อมผิดตำแหน่งและขาดคำเชื่อม: "In addition the free breakfast, the hotel offers quiet workspaces. Such as, there are three silent phone booths."',
          answer:
            'In addition to the free breakfast, the hotel offers quiet workspaces. For instance, there are three silent phone booths.',
          explanation:
            '1) หน้านาม (the free breakfast) ต้องใช้ In addition to 2) ขึ้นต้นประโยคเต็มเพื่อยกตัวอย่างให้ใช้ For instance, / For example, (ไม่ขึ้นประโยคใหม่ด้วย Such as,)',
        },
        {
          kind: 'choice',
          prompt:
            'คุณเพิ่งอธิบายคำศัพท์เทคนิคให้ลูกค้าฟัง แล้วอยากแปลความหมายให้เข้าใจง่ายขึ้นทันที ประโยคใดเชื่อมได้เหมาะสมที่สุด?',
          answer:
            'In other words, your data stays backed up automatically every evening.',
          choices: [
            'In other words, your data stays backed up automatically every evening.',
            'Moreover, your data stays backed up automatically every evening.',
            'Whereas, your data stays backed up automatically every evening.',
            'Due to, your data stays backed up automatically every evening.',
          ],
          explanation:
            'in other words ใช้ถอดความหรือสรุปสารเดิมให้ผู้ฟังเข้าใจง่ายขึ้นในมุมใหม่',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำเชื่อมเจาะจงรายละเอียด: We need to trim minor expenses—_____, monthly software subscriptions nobody opens anymore.',
          answer: 'specifically',
          explanation:
            'specifically = โดยเฉพาะเจาะจง (ใช้เจาะจงตัวอย่างที่สำคัญจากหัวข้อกว้างๆ)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "ยิ่งไปกว่านั้น การเดินสิบห้านาทีหลังอาหารยังช่วยให้สมองปลอดโปร่งขึ้นด้วย"',
          answer:
            'Moreover, walking for fifteen minutes after meals helps clear your mind.',
          explanation:
            'ใช้ Moreover, / Furthermore, + S + V เพื่อเพิ่มประเด็นสนับสนุนที่มีน้ำหนักมากขึ้น',
        },
      ],
      writing:
        'เขียนคำแนะนำวิธีพัฒนาทักษะใดทักษะหนึ่งให้เพื่อน (5–6 ประโยค) โดยเชื่อมประเด็นให้ครบ 3 หน้าที่: เสริมข้อเพิ่ม (Moreover / In addition to), แปลความให้ง่าย (In other words / Specifically), และยกตัวอย่างจริง (For instance / such as)',
      writingSample:
        "If you want to keep your monthly spending balanced, tracking small daily habits matters far more than skipping rare big trips. In other words, quiet weekday routines quietly shape your savings at the end of the year. Specifically, recurring delivery fees and impulse late-night orders often drain budgets faster than people expect. In addition to checking your banking app once a week, try naming a fixed weekend fun allowance. For instance, withdrawing cash for Friday evening snacks keeps treats enjoyable without guilt.",
      writingNote:
        'เช็กการวางตัวเชื่อม: In addition to / such as ต้องอยู่หน้าคำนาม ส่วน Moreover, / In other words, / For instance, ขึ้นต้นประโยคพร้อมลูกน้ำ',
      speakingTopic: 'อธิบายเรื่องยากให้คนทั่วไปเข้าใจด้วยตัวอย่างจริง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกหลักการหรือเทคนิคการทำงาน 1 อย่างที่คนมักเข้าใจยาก',
        'อธิบายตามสเต็ป: พูดหลักการ -> In other words, ... -> Specifically, ... -> For instance, ...',
        'ออกเสียงคำ 4 พยางค์อย่าง specifically (/spəˈsɪf.ɪ.kli/) ให้ชัดและไม่รีบรวบพยางค์จนฟังไม่ออก',
      ],
    },
    {
      day: 159,
      title: 'พูดลื่นเป็นธรรมชาติ: Spoken Signposts vs คำติดปาก (Having said that / At the end of the day)',
      objective:
        'ลดการใช้คำติดปากลอยๆ (um, actually, you know) และเปลี่ยนมาใช้โครงสร้างนำร่องการพูด (First of all, On the other hand, Having said that, Long story short) ให้คนฟังตามติดได้ทัน',
      explanation:
        'เวลาคิดเป็นภาษาอังกฤษสดๆ คนไทยจำนวนมากเผลอใส่คำว่า *"Actually...", "Wait...", "And then..."* ทุกๆ ห้าวินาที ทำให้คนฟังจับประเด็นไม่เจอว่าคุณกำลังเริ่มเรื่อง เปลี่ยนมุม หรือกำลังสรุป! ลองสลับมาใช้ **Spoken Signposts (ป้ายบอกทางตอนพูด)** 5 ตัวนี้แทน: 1) **`First of all, ...`** (เปิดข้อแรกให้ผู้ฟังตั้งหลัก) 2) **`On the other hand, ...` / `On the flip side, ...`** (พลิกดูอีกมุมอย่างเป็นธรรมชาติ) 3) **`Having said that, ...`** ("ถึงจะพูดแบบนั้นก็เถอะ แต่..." — ดีเยี่ยมเวลาจะยอมรับอีกมุมแล้วดึงกลับมาประเด็นตัวเอง!) 4) **`Long story short, ...`** (ตัดเรื่องยาวให้สั้นก่อนเข้าจุดสำคัญ) 5) **`At the end of the day, ...`** ("สรุปสุดท้ายแล้วสิ่งสำคัญที่สุดคือ...") ป้ายบอกทางเหล่านี้ให้เวลาสมองคุณหายใจ 0.5 วินาทีโดยฟังดูฉลาดและคล่องแคล่ว!',
      sound: [
        'Thought-Group Pauses & Intonation on Signposts',
        'Having said that /ˈhæv.ɪŋ sed ðæt/ · At the end of the day /ət ði end əv ðə deɪ/',
        'สังเกตคำว่า "the" ก่อน "end" เปลี่ยนเสียงเป็น "ดิ" (/ði/) เพราะ end ขึ้นต้นด้วยสระ แล้วเชื่อมเป็น "แอ็ท-ดิ-เอ็น-เดิฟ-เดอะ-เดย์" ส่วนคำว่า "Having said that" อ่านรวบ 3 คำในกลุ่มเดียวแล้วหยุดนิดนึงก่อนเข้าข้อแย้ง',
        'ฝึกพูด 4 ป้ายบอกทางด้วยจังหวะคิด-พูดจริง: "First of all, | ... Having said that, | ... Long story short, | ... At the end of the day, | ..."',
      ],
      l1: [
        'เปิดเกือบทุกประโยคด้วย "Actually, ..." หรือ "And then, ... and then, ..." เวลาคิดคำต่อไปไม่ทัน',
        'ใช้คำติดปากเดียวซ้ำๆ เป็นสะพานหยุดคิด ทำให้แม้ไวยากรณ์ถูกแต่คนฟังรู้สึกว่าคำพูดวนและไม่มีโครงสร้าง',
        'เปลี่ยน "Actually..." ที่ไม่จำเป็นออก แล้วเลือกป้ายบอกทางตามบทบาทจริง: เริ่มข้อ -> First of all | พลิกมุมยอมรับแต่ค้าน -> Having said that | สรุปใจความ -> At the end of the day',
      ],
      vocab: [
        ['having said that', 'ถึงกระนั้นก็ตาม (ยอมรับมุมก่อนแล้วพลิก)', '/ˈhæv.ɪŋ sed ðæt/', 'having said that, we still', 'ถึงกระนั้นก็ตาม เรายังคง...'],
        ['at the end of the day', 'ท้ายที่สุดแล้ว / สรุปประเด็นหลักคือ', '/ət ði end əv ðə deɪ/', 'at the end of the day', 'ท้ายที่สุดแล้ว / โดยแก่นสำคัญ'],
        ['on the flip side', 'ในทางกลับกัน (ภาษาพูดเป็นธรรมชาติ)', '/ɒn ðə flɪp saɪd/', 'on the flip side, it takes time', 'ในอีกด้านหนึ่ง มันก็ต้องใช้เวลา'],
        ['long story short', 'สรุปสั้นๆ ก็คือ (รวบรัดเรื่องเล่า)', '/lɒŋ ˈstɔː.ri ʃɔːt/', 'long story short, we made it', 'สรุปสั้นๆ คือพวกเราทำทัน'],
        ['signpost', 'ป้ายนำทางโครงสร้างคำพูด', '/ˈsaɪn.pəʊst/', 'use clear signposts', 'ใช้ป้ายนำทางความคิดให้ชัด'],
        ['ramble', 'พูดยืดเยื้อออกนอกประเด็น', '/ˈræm.bəl/', 'avoid rambling on', 'หลีกเลี่ยงการพูดยืดเยื้อไร้ทิศทาง'],
        ['bottom line', 'แก่นสำคัญที่สุด / บทสรุปหลัก', '/ˌbɒt.əm ˈlaɪn/', 'the bottom line is', 'แก่นสำคัญที่สุดคือ'],
      ],
      examples: [
        ['First of all, let’s thank the team who stayed late to unpack the event boxes.', 'อย่างแรกเลย มาขอบคุณทีมที่อยู่ดึกช่วยแกะกล่องอุปกรณ์งานกันก่อน'],
        [
          'Having said that, the mobile layout still needs a few adjustments.',
          'ถึงกระนั้นก็ตาม หน้าจอบนมือถือก็ยังต้องปรับแก้เพิ่มเติมอีกเล็กน้อย',
        ],
        ['Long story short, the shuttle bus broke down halfway, so we hopped onto a local songthaew.', 'เล่าสั้นๆ คือรถรับส่งเสียกลางทาง พวกเราเลยกระโดดขึ้นสองแถวท้องถิ่นแทน'],
        ['At the end of the day, consistent practice beats memorizing long word lists overnight.', 'ท้ายที่สุดแล้ว การฝึกสม่ำเสมอชนะการท่องศัพท์กองโตข้ามคืนอยู่ดี'],
      ],
      reading:
        'During live conversations, listeners rely on spoken signposts much like drivers rely on road signs at an intersection. Imagine a colleague trying to summarize a complex hotel booking issue without any markers—after two minutes of rambling details, everyone feels lost. Now listen to how clean signposts reshape that exact same update. "First of all, the venue held our deposit safely. Long story short, a duplicate invoice appeared in billing yesterday, so finance paused the transfer. On the flip side, our event manager caught the mismatch before noon. Having said that, we still need a fresh confirmation email before Friday." Notice how each short phrase buys the speaker half a second to breathe while signaling where the story is turning. At the end of the day, sounding fluent is rarely about speaking faster; it is about guiding listeners effortlessly.',
      listenQ: 'What did the event manager catch before noon according to the speaker’s example?',
      listenA: 'The duplicate invoice mismatch.',
      dictation: 'Having said that, we still need written approval.',
      listenNote:
        'สังเกตเสียงหยุดเบาๆ หลัง "Having said that" เพื่อส่งสัญญาณให้คนฟังเตรียมรับมุมมองที่สวนกลับอย่างสุภาพ',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'ปรับปรุงบทพูดที่เต็มไปด้วยคำติดปากซ้ำซ้อนให้ใช้ Spoken Signposts ที่คมชัด: "Actually, the café is cheap. Actually, the coffee is great. Wait, actually it closes too early at 4 p.m."',
          answer:
            'First of all, the café is affordable and the coffee is great. Having said that, it closes a bit early at 4 p.m.',
          explanation:
            'ตัด Actually ที่ซ้ำเกินไปออก แล้วใช้ First of all เปิดข้อดี จากนั้นพลิกมุมด้วย Having said that เพื่อแจ้งข้อจำกัดอย่างลื่นไหล',
        },
        {
          kind: 'choice',
          prompt:
            'คุณกำลังเล่าเรื่องทริปที่เจอเหตุการณ์วุ่นวายหลายอย่าง แต่แค่อยากข้ามรายละเอียดปลีกย่อยเข้าตอนจบ ควรใช้วลีใดเปิดท่อนสรุป?',
          answer: 'Long story short, we arrived just in time for dinner.',
          choices: [
            'Long story short, we arrived just in time for dinner.',
            'Moreover, we arrived just in time for dinner.',
            'In other words, we arrived just in time for dinner.',
            'Specifically, we arrived just in time for dinner.',
          ],
          explanation:
            'Long story short ใช้รวบรัดเรื่องเล่ายาวๆ ในภาษาพูดเพื่อเข้าสู่บทสรุปทันที',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำให้ครบสำนวนสรุปแก่นสำคัญ: At the _____ of the day, clear communication keeps every partnership healthy.',
          answer: 'end',
          explanation:
            'At the end of the day, ... = ท้ายที่สุดแล้ว / สิ่งสำคัญที่สุดก็คือ...',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษแบบภาษาพูดธรรมชาติ: "ในอีกด้านหนึ่ง การนั่งรถไฟก็ช่วยให้ฉันอ่านหนังสือได้ด้วยนะ"',
          answer:
            'On the flip side, taking the train gives me time to read.',
          explanation:
            'On the flip side (หรือ On the other hand) ใช้เปิดมุมมองอีกด้านอย่างเป็นธรรมชาติในการสนทนา',
        },
      ],
      writing:
        'เขียนสคริปต์พูดสั้นๆ 6 ประโยค ให้ความเห็นเรื่อง "การซื้ออุปกรณ์ทำงานราคาสูง vs รุ่นคุ้มค่า" โดยใช้ให้ครบทั้ง First of all, On the flip side, Having said that และ At the end of the day',
      writingSample:
        "People often ask whether buying the newest flagship tablet really improves daily focus. First of all, a bright screen and smooth battery life definitely remove small frustrations during long calls. On the flip side, flagship prices rise sharply every single year. Having said that, a mid-range device still handles notes, slides, and video meetings effortlessly for most people. Long story short, fancy specs look impressive on paper, yet rarely change work quality by themselves. At the end of the day, steady habits matter far more than expensive gear.",
      writingNote:
        'อ่านสคริปต์ที่เขียนออกมาดังๆ 1 รอบ แล้วเช็กว่าหยุดจังหวะครึ่งวินาทีตรงเครื่องหมายจุลภาคหลังแต่ละ Signpost แล้วหรือยัง',
      speakingTopic: 'แสดงความเห็น 60–90 วินาทีโดยไม่ใช้คำว่า "Actually" เกิน 1 ครั้ง (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกหัวข้อถกเบาๆ 1 เรื่อง (เช่น ทำงานร้านกาแฟ vs ห้องสมุด หรือทริปวางแผนละเอียด vs เดินทางตามใจ)',
        'ใช้ป้ายนำทางครบ 4 จุด: First of all -> On the flip side -> Having said that -> At the end of the day',
        'เมื่อคิดคำต่อไปไม่ทัน ให้หยุดเงียบ 0.5 วินาทีหลัง signpost แทนการพูด um หรือ actually ซ้ำๆ',
      ],
    },
    {
      day: 160,
      title: 'ร้อยเรียงย่อหน้าให้แน่นและไหลลื่น (Paragraph Cohesion & Pronoun Chaining)',
      objective:
        'สร้างย่อหน้าความยาว 120+ คำที่ร้อยเรียงเหตุ-ผล ขัดแย้ง ตัวอย่าง และบทสรุปได้ลื่นไหลด้วย Discourse Markers ร่วมกับคำอ้างอิง (this shift, such measures) โดยไม่วนซ้ำคำเดิม',
      explanation:
        'หลายคนเขียนแยกทีละประโยคถูกหมด แต่พอเอามารวมเป็น 1 ย่อหน้ายาวกลับอ่านสะดุดเหมือนเอาประโยคมาวางต่อกันเฉยๆ! ความลับของ **Paragraph Cohesion** (ความเกาะเกี่ยวของย่อหน้า) ระดับ B2 มี 2 กลไกคู่กัน: 1) **วางโครง 4 ท่อนให้คนอ่านคาดเดาทางถูก**: **Topic Sentence (เปิดประเด็น) -> Clarification/Example (`Specifically / For instance`) -> Contrast/Nuance (`However / Having said that`) -> Consequence/Takeaway (`Consequently / Therefore`)** 2) **Reference Chaining (การอ้างอิงคำซ้ำด้วย `this + คำนามสรุป` / `such + คำนาม`)** เช่น แทนที่จะพิมพ์คำว่า *"flexible work schedule"* ซ้ำ 4 รอบ ให้เปลี่ยนเป็น **`this shift`**, **`this approach`**, หรือ **`such flexibility`** เพื่อผูกประโยคหลังเข้ากับประโยคหน้าเหมือนโซ่คล้องกัน!',
      sound: [
        'Cohesive Flow & Reference Stress',
        'this approach /ðɪs əˈprəʊtʃ/ · such measures /sʌtʃ ˈmeʒ.əz/ · as a consequence /əz ə ˈkɒn.sɪ.kwəns/',
        'เวลาพูดวลีอ้างอิงย้อนหลังอย่าง "this shift" หรือ "this approach" ให้กดเสียงสั้นๆ ที่คำว่า THIS/SUCH เบาๆ แล้วลงน้ำหนักที่คำนามสรุปด้านหลัง เพื่อส่งไม้ต่อความหมายไปข้างหน้า',
        'อ่านย่อหน้าตัวอย่างใน Reading ดังๆ โดยลากสายตาดูคำที่ชี้กลับไปยังประโยคก่อนหน้า (this change, such steps, consequently)',
      ],
      l1: [
        'เขียนคำนามหลักคำเดิมซ้ำๆ ทุกประโยค (เช่น "online learning... online learning... online learning...") หรือขึ้นต้นทุกประโยคด้วยคำเชื่อมแข็งๆ แบบเรียงเบอร์ ("Firstly... Secondly... Thirdly... Lastly...")',
        'ไม่คุ้นกับการใช้คำนามสรุปกว้างๆ (this habit, this shift, such steps) เพื่อรับช่วงความคิดจากประโยคก่อนหน้า',
        'ฝึกแทนที่คำนามเดิมในประโยคที่ 2 ด้วย "this + คำนามหมวดหมู่" (this habit / this issue / this approach) ร่วมกับตัวเชื่อมที่บอกความสัมพันธ์จริงของประโยค!',
      ],
      vocab: [
        ['cohesion', 'ความเกาะเกี่ยวกลมกลืนของเนื้อหา', '/kəʊˈhiː.ʒən/', 'improve paragraph cohesion', 'เพิ่มความกลมกลืนเชื่อมโยงในย่อหน้า'],
        ['transition', 'ช่วงเชื่อมต่อเปลี่ยนผ่าน', '/trænˈzɪʃ.ən/', 'a smooth transition', 'การเปลี่ยนผ่านที่ราบรื่น'],
        ['approach', 'แนวทางการจัดการ / วิธีคิด', '/əˈprəʊtʃ/', 'adopt a practical approach', 'นำแนวทางปฏิบัติที่ใช้ได้จริงมาใช้'],
        ['initiative', 'โครงการริเริ่ม', '/ɪˈnɪʃ.ə.tɪv/', 'launch a green initiative', 'เปิดตัวโครงการริเริ่มด้านสิ่งแวดล้อม'],
        ['hesitation', 'ความลังเล', '/ˌhez.ɪˈteɪ.ʃən/', 'initial hesitation', 'ความลังเลในช่วงแรก'],
        ['ripple effect', 'ผลกระทบต่อเนื่องเป็นลูกโซ่', '/ˈrɪp.əl ɪˈfekt/', 'create a positive ripple effect', 'สร้างผลบวกต่อเนื่องเป็นลูกโซ่'],
        ['reinforce', 'ตอกย้ำ / เสริมให้แข็งแกร่งขึ้น', '/ˌriː.ɪnˈfɔːs/', 'reinforce the main point', 'ตอกย้ำประเด็นหลักให้แน่นขึ้น'],
      ],
      examples: [
        ['Our office introduced silent morning hours last spring, and this shift cut interruptions in half.', 'ออฟฟิศเราเริ่มใช้ชั่วโมงเงียบตอนเช้าเมื่อฤดูใบไม้ผลิที่แล้ว และการปรับเปลี่ยนนี้ช่วยลดการถูกรบกวนลงได้ครึ่งหนึ่ง'],
        ['Specifically, teammates save quick non-urgent questions for a single afternoon thread.', 'โดยเฉพาะเจาะจงคือเพื่อนร่วมทีมจะเก็บคำถามที่ไม่ด่วนไว้รวมในเธรดช่วงบ่ายทีเดียว'],
        ['Despite some initial hesitation from managers, the calm routine quickly proved its value.', 'แม้จะมีความลังเลจากผู้จัดการอยู่บ้างในช่วงแรก แต่กิจวัตรที่สงบนี้ก็พิสูจน์คุณค่าได้อย่างรวดเร็ว'],
        ['Consequently, employees finish deep tasks earlier and leave the building with far less stress.', 'ผลที่ตามมาคือพนักงานทำงานที่ต้องใช้สมาธิเสร็จเร็วขึ้นและกลับบ้านด้วยความเครียดที่น้อยลงมาก'],
      ],
      reading:
        'Introducing a shared "no-meeting Wednesday" policy transformed how our twenty-person studio handled weekly projects. Initially, some department leads feared that pausing all group calls for one day would slow down urgent approvals. Despite this understandable hesitation, the team agreed to test the approach for a single month. Specifically, teammates blocked Wednesday mornings for focused writing, design, and coding, while saving routine questions for Thursday standups. In addition, managers posted brief written priorities on Tuesday evenings so nobody felt stuck alone. As a result, deep creative work moved noticeably faster without requiring late overtime. Even better, this small boundary created a positive ripple effect across the entire week: meetings on other days became shorter because people arrived better prepared. Looking back, such simple structural shifts often improve team energy far more effectively than asking everyone simply to work harder.',
      listenQ: 'Why did meetings on other days also become shorter after the policy began?',
      listenA: 'Because people arrived better prepared.',
      dictation: 'Despite initial hesitation, this approach worked well.',
      listenNote:
        'สังเกตวิธีที่ "this approach" เชื่อมความคิดต่อเนื่องโดยไม่ต้องพูดคำว่า "no-meeting Wednesday" ซ้ำอีก',
      drills: [
        {
          kind: 'error_fix',
          prompt:
            'แก้ย่อหน้าสั้นที่พูดคำเดิมซ้ำและใช้ตัวเชื่อมผิดความหมาย: "Our team started writing daily notes. Writing daily notes saved time. However, we stayed more organized."',
          answer:
            'Our team started writing daily notes, and this simple habit saved time. As a result, we stayed far more organized.',
          explanation:
            '1) แทนคำซ้ำ "Writing daily notes" ด้วย this simple habit เพื่อความลื่นไหล 2) ประโยคหลังเป็นผลลัพธ์เชิงบวกที่ตามมา ไม่ใช่ความขัดแย้ง จึงเปลี่ยน However เป็น As a result',
        },
        {
          kind: 'choice',
          prompt:
            'ประโยคแรกกล่าวถึง "ร้านกาแฟลดราคาให้คนที่นำแก้วมาเอง" ข้อใดต่อประโยคที่สองด้วย Pronoun/Reference Chaining ได้เป็นธรรมชาติที่สุด?',
          answer:
            'This small incentive encouraged dozens of regular customers to skip single-use cups.',
          choices: [
            'This small incentive encouraged dozens of regular customers to skip single-use cups.',
            'Whereas the café reduced the price, customers skipped single-use cups.',
            'Despite of that discount, single-use cups were skipped by everyone.',
            'Moreover, the discount for people who bring their own cups encouraged customers.',
          ],
          explanation:
            'ใช้ This small incentive ชี้กลับไปยังการลดราคาในประโยคแรกอย่างกระชับและสละสลวยระดับ B2',
        },
        {
          kind: 'gap',
          prompt:
            'เติมคำอ้างอิงที่เชื่อมประเด็นจากประโยคก่อนหน้า: Several neighborhoods installed shaded bike lanes last year. _____ measures made morning rides much safer for students.',
          answer: 'Such',
          explanation:
            'Such measures = มาตรการลักษณะดังกล่าว (ชี้กลับไปถึงการสร้างเลนจักรยานที่มีร่มเงา)',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษโดยหลีกเลี่ยงการทวนคำยาวซ้ำ: "โครงการริเริ่มนี้ช่วยสร้างผลดีต่อเนื่องไปทั่วทั้งชุมชน"',
          answer:
            'This initiative created a positive ripple effect across the entire community.',
          explanation:
            'ใช้ This initiative แทนการทวนชื่อโครงการเต็ม พร้อมสำนวน ripple effect',
        },
      ],
      writing:
        'เขียนย่อหน้าเชิงวิเคราะห์ 1 ย่อหน้าเต็ม (6–7 ประโยค / ~120 คำ) อธิบายนโยบายหรือนิสัยดีๆ 1 อย่าง (เช่น เดิน 20 นาทีตอนเที่ยง, ปิดแจ้งเตือนช่วงเช้า, หรือแยกขยะในออฟฟิศ) โดยเรียงครบ 4 ท่อน: Topic -> Specifically/In addition -> Despite/However -> As a result + ใช้ This/Such เชื่อมโซ่ประโยคอย่างน้อย 1 จุด',
      writingSample:
        'Setting aside fifteen minutes every Friday afternoon to organize digital files dramatically improved my weekly focus. At first, spending time on folders felt less urgent than finishing client tasks. Despite this initial hesitation, keeping the routine for three weeks quickly revealed how much energy messy desktops quietly drain. Specifically, naming documents by date and project code stops endless hunting during busy Monday mornings. In addition, clearing old downloads frees space before backups run overnight. Consequently, this simple habit created a calm ripple effect across my workweek, leaving me far less rushed when tight deadlines arrive.',
      writingNote:
        'ตรวจความต่อเนื่องของโซ่คำเชื่อม: ประโยคติดกันทุกคู่มีเหตุผลเชื่อมต่อ (เสริม, เจาะจง, ขัดแย้ง, หรือผลลัพธ์) และไม่มีคำนามยาวซ้ำๆ เกิน 2 ครั้งในย่อหน้าเดียว',
      speakingTopic: 'เล่าไอเดียปรับปรุงการทำงาน/ชีวิตให้ครบ 4 จังหวะใน 1 เรื่องเดียว (4 / 3 / 2 นาที)',
      speakingBullets: [
        'วางโครงสร้างพูดให้เหมือนย่อหน้าที่สมบูรณ์: เปิดประเด็น -> เจาะจงวิธีทำ (Specifically) -> ดักมุมแย้ง (Despite this hesitation / Having said that) -> ผลลัพธ์ (As a result / Consequently)',
        'ใช้คำอ้างอิงเชื่อม (this shift, this habit, such steps) แทนการพูดคำเดิมซ้ำๆ',
        'รักษาน้ำเสียงนิ่ง ชัด และหยุดครึ่งวินาทีระหว่างเปลี่ยนท่อนความคิด',
      ],
    },
    {
      day: 161,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 23: ร้อยเรียงตรรกะด้วย Discourse Markers + Dictogloss',
      objective:
        'ประเมินความแม่นยำในการเลือกตัวเชื่อมความขัดแย้ง เหตุ-ผล การขยายความ-ตัวอย่าง เครื่องหมายวรรคตอน และการจับใจความเชื่อมโยงผ่าน Dictogloss',
      explanation:
        'ยินดีด้วยครับ จบสัปดาห์ที่ 23 แล้ว! สัปดาห์นี้เราแก้ปัญหาคลาสสิกของการสื่อสารระดับ B1→B2 คือ "รู้ศัพท์เยอะแต่ประโยคไม่เกาะกัน" ลองเช็ก 5 เสาหลักของ Discourse Markers ก่อนไปสัปดาห์สุดท้ายของ Phase 3: 1) **ขัดแย้ง**: `although + S + V` (ห้ามใส่ `but` ซ้ำ!) vs `despite + N/V-ing` (ห้ามใส่ `of`!) 2) **เหตุ**: `since / as / because + S + V` vs `due to / owing to / thanks to + N/V-ing` 3) **ผล**: `; therefore, / . Consequently, / As a result,` และแยก `so + adj + that` vs `such + (a/an) adj + noun + that` 4) **ขยายความ/ตัวอย่าง**: `In addition,` vs `In addition to + N` / `In other words,` / `Specifically,` / `For instance,` 5) **Spoken Signposts & Cohesion**: `Having said that`, `At the end of the day`, และ `this approach / such measures` วันนี้มาลุย Dictogloss และแบบฝึกผสมกันครับ!',
      sound: [
        'Week 23 Discourse Stress & Pause Audit',
        'despite /dɪˈspaɪt/ · consequently /ˈkɒn.sɪ.kwənt.li/ · specifically /spəˈsɪf.ɪ.kli/ · having said that /ˈhæv.ɪŋ sed ðæt/',
        'ทบทวนการเว้นจังหวะสั้นๆ รอบตัวเชื่อมทั้งประโยคเขียนและพูด เพื่อให้ผู้ฟังแยกชั้นความคิด (เหตุ vs ขัดแย้ง vs ผลลัพธ์) ได้ทันที',
        'ทำ Shadowing บทอ่านวันนี้ 2 รอบ โดยขีดเส้นใต้ตัวเชื่อมทั้งหมดและออกเสียงเน้นนำหน้าทุกท่อน',
      ],
      l1: [
        'รวมกับดักใหญ่สัปดาห์ 23: Although... but, despite of, due to + ประโยคเต็ม, comma splice หน้า however/therefore, และ so + adj + noun + that',
        'ความเคยชินจากไวยากรณ์ไทยที่ต่อคำเชื่อมเข้าหากันตรงๆ โดยไม่เช็กว่าคำข้างหลังเป็นวลีนามหรือประโยคเต็ม',
        'สแกนแค่ 2 วินาทีหลังตัวเชื่อมทุกตัว: เห็น "S + V" ใช้กลุ่ม Sentence Linkers · เห็น "Noun / V-ing" ใช้กลุ่ม Preposition Linkers!',
      ],
      vocab: [
        ['coherent', 'เชื่อมโยงเป็นระบบเข้าใจง่าย', '/kəʊˈhɪə.rənt/', 'present a coherent argument', 'นำเสนอข้อโต้แย้งที่เป็นระบบ'],
        ['persuasive', 'โน้มน้าวใจได้ดี', '/pəˈsweɪ.sɪv/', 'a persuasive explanation', 'คำอธิบายที่โน้มน้าวใจได้'],
        ['counterargument', 'ข้อโต้แย้งอีกฝั่ง', '/ˈkaʊn.tərˌɑːɡ.jə.mənt/', 'address a counterargument', 'ตอบรับข้อโต้แย้งอีกฝั่งอย่างมีเหตุผล'],
        ['concise', 'กระชับได้ใจความ', '/kənˈsaɪs/', 'keep updates concise', 'ทำให้อัปเดตกระชับได้ใจความ'],
        ['nuance', 'รายละเอียด/ความต่างละเอียดอ่อน', '/ˈnjuː.ɑːns/', 'capture subtle nuance', 'จับความหมายแฝงละเอียดอ่อนได้'],
        ['acknowledge', 'ยอมรับทราบ / รับฟัง', '/əkˈnɒl.ɪdʒ/', 'acknowledge another view', 'ยอมรับฟังมุมมองอีกฝ่าย'],
        ['stand out', 'โดดเด่นชัดเจน', '/stænd aʊt/', 'stand out clearly', 'โดดเด่นขึ้นมาอย่างชัดเจน'],
      ],
      examples: [
        ['Although adding weekly check-ins felt tedious at first, the habit prevented costly delays.', 'ถึงแม้การเพิ่มการเช็กอินรายสัปดาห์จะดูจุกจิกในตอนแรก แต่นิสัยนี้ก็ช่วยป้องกันความล่าช้าราคาแพงได้'],
        ['Many remote projects stall due to unclear ownership rather than lack of skill.', 'โปรเจกต์ทางไกลจำนวนมากสะดุดเนื่องจากความไม่ชัดเจนเรื่องผู้รับผิดชอบมากกว่าการขาดทักษะ'],
        ['It was such a persuasive summary that the committee approved the pilot budget right away.', 'มันเป็นบทสรุปที่โน้มน้าวใจได้ดีมากจนคณะกรรมการอนุมัติงบนำร่องทันที'],
        ['First, acknowledge the counterargument calmly; consequently, your main solution will sound far fairer.', 'อย่างแรกให้ยอมรับข้อโต้แย้งอีกฝ่ายอย่างใจเย็น ผลคือทางออกหลักของคุณจะฟังดูเป็นธรรมขึ้นมาก'],
      ],
      reading:
        'Writing a persuasive recommendation rarely depends on fancy vocabulary alone; rather, it relies on keeping every link between ideas crystal clear. Suppose you want your team to adopt shared meeting notes. First of all, state the main benefit cleanly: better documentation saves hours of repeated questions. Despite this obvious upside, some teammates still resist writing things down due to busy afternoon schedules. Having said that, you can keep notes remarkably concise by using a three-line template. Specifically, record only key decisions, owners, and due dates—in other words, skip word-for-word transcripts entirely. It is such a light routine that anyone can finish it in three minutes before logging off. Consequently, absent colleagues catch up effortlessly without interrupting live work. At the end of the day, coherent structure makes ordinary ideas stand out clearly.',
      listenQ: 'What three items does the passage suggest recording in concise meeting notes?',
      listenA: 'Key decisions, owners, and due dates.',
      dictation: 'It is such a light routine that anyone can finish it.',
      listenNote:
        'จับความเชื่อมโยงระหว่าง "such a light routine" กับ "that anyone can finish it" รวมถึงเสียงเชื่อม "such-a" (/ˈsʌtʃ.ə/)',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังบทอ่านแล้วเลือกคู่คำเชื่อมที่ตรงตามตรรกะของข้อความ: "_____ this obvious upside, some teammates still resist writing things down _____ busy afternoon schedules."',
          answer: 'Despite / due to',
          choices: [
            'Despite / due to',
            'Although / because',
            'Despite of / because of',
            'However / thanks to',
          ],
          explanation:
            'ทั้ง "this obvious upside" และ "busy afternoon schedules" ต่างเป็นวลีนาม จึงต้องใช้ Despite (ไม่มี of) และ due to',
          audio_text:
            'Despite this obvious upside, some teammates still resist writing things down due to busy afternoon schedules.',
        },
        {
          kind: 'error_fix',
          prompt:
            'แก้ประโยคที่พลาดตัวเชื่อม 3 จุด: "Although the instructions were so short guide, but everyone understood easily, therefore nobody asked questions."',
          answer:
            'Although the instructions were such a short guide, everyone understood easily; therefore, nobody asked questions.',
          explanation:
            '1) ตัด but ทิ้งเมื่อมี Although 2) "short guide" มีคำนามเอกพจน์นับได้ ใช้ such a short guide 3) ใช้ ; therefore, คั่นสองประโยคหลัก',
        },
        {
          kind: 'choice',
          prompt:
            'ข้อใดใช้ "In addition" หรือ "For instance" ได้ถูกต้องตามโครงสร้างภาษาอังกฤษ?',
          answer:
            'In addition to cutting paper costs, digital forms speed up client approvals.',
          choices: [
            'In addition to cutting paper costs, digital forms speed up client approvals.',
            'In addition cutting paper costs, digital forms speed up client approvals.',
            'Such as, digital forms speed up client approvals.',
            'Despite of the speed, digital forms cut paper costs.',
          ],
          explanation:
            'หน้านาม/V-ing ต้องใช้ In addition to; ไม่ใช้ Such as, เปิดประโยคเต็ม',
        },
        {
          kind: 'translation',
          prompt:
            'แปลเป็นภาษาอังกฤษ: "กล่าวอีกนัยหนึ่งก็คือ โครงสร้างที่เชื่อมโยงดีช่วยลดความสับสนได้มาก"',
          answer:
            'In other words, coherent structure greatly reduces confusion.',
          explanation:
            'ใช้ In other words, + S + V เพื่อสรุปความให้ชัดเจนกระชับ',
        },
      ],
      writing:
        'เขียนข้อเสนอแนะสั้นๆ 1 ย่อหน้า (6–7 ประโยค) แนะนำวิธีปรับปรุงการประชุมหรือการเรียนภาษาอังกฤษของตัวคุณเอง โดยใช้ตัวเชื่อมอย่างน้อย 5 ประเภท: Contrast (Although/Despite), Cause (due to/since), Clarification (In other words/Specifically), Result (Consequently/such...that) และ Spoken/Closing marker',
      writingSample:
        "Hosting fifteen-minute morning check-ins kept our small design crew aligned all year. Although short calls initially felt unnecessary, they eliminated dozens of confusing afternoon messages. Specifically, everyone shares one top priority and flags any blocker upfront—in other words, nobody guesses what teammates are handling. Some sessions still run long due to unexpected client edits; however, keeping a visible timer prevents rambling. It has been such a practical habit that even remote freelancers asked to join. Consequently, our weekly delivery rate improved smoothly. At the end of the day, simple structure beats endless ad-hoc chats.",
      writingNote:
        'อ่านทวนแบบตรวจคำหลังตัวเชื่อมทุกตัว: ประโยคเต็ม (S+V) vs วลีนาม (N/V-ing) และตรวจ ; / . หน้า however / therefore / consequently',
      speakingTopic: 'สรุปสัปดาห์ 23: นำเสนอข้อเสนอที่ครบตรรกะ 4 ด้านภายใน 2 นาที (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูดให้ครบสายเชื่อมความคิด: ปัญหา/เหตุผล (due to/since) -> วิธีแก้เจาะจง (Specifically) -> ข้อจำกัดและการแก้ (Despite/Having said that) -> ผลลัพธ์และสรุป (Consequently / At the end of the day)',
        'ฝึกตัดคำซ้ำซ้อนและพูดด้วยจังหวะสม่ำเสมอโดยไม่พึ่ง actually / umm',
      ],
    },
  ]
);
