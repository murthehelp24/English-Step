import { createModule } from '../helpers';
import { ModuleSeed } from '../types';

const PHASE_TITLE = 'Phase 3: คิดเป็นภาษาอังกฤษและสื่อสารในงานจริง';

export const WEEK18: ModuleSeed = createModule(
  {
    week: 18,
    phase: 3,
    phase_title: PHASE_TITLE,
    cefr_level: 'B1',
    title: 'Passive Voice ในโลกความจริง: ข่าว ระบบงาน และกระบวนการ',
    summary:
      'เข้าใจเหตุผลที่เจ้าของภาษาเลือกใช้ Passive Voice (ไม่ทราบผู้ทำ / ผู้ทำไม่สำคัญ / เน้นผลงาน), Passive ในหลาย Tense, get + V3 และกริยา 2 กรรม',
    focus: 'Real-World Passive Across Tenses, get-passive, Process Explanation',
  },
  [
    {
      day: 120,
      title: 'ตรรกะของ Passive Voice (be + V3): คงจุดโฟกัสที่งาน/สิ่งของ ไม่ใช่แค่สูตรสลับกรรม',
      objective:
        'เข้าใจว่าเมื่อไหร่ควรใช้ Passive Voice เพื่อเล่าข่าวและกระบวนการ พร้อมแก้อาการพูดคำนามที่ทำเองไม่ได้ในรูป Active (เช่น "The parcel sent yesterday")',
      explanation:
        'ในโรงเรียนเรามักเรียน Passive Voice แค่เป็นสูตรสลับกรรมขึ้นมาเป็นประธาน แต่ในโลกความจริง เจ้าของภาษาเลือกใช้ **`be + V3`** ด้วยเหตุผล 3 ข้อ:\n1) **ผู้กระทำไม่สำคัญหรือทุกคนรู้อยู่แล้ว**: `Coffee beans are roasted here daily.` (ไม่ต้องบอกว่า *by workers*)\n2) **ไม่ทราบว่าใครทำ**: `My bike was stolen outside the library.`\n3) **ต้องการรักษา "หัวข้อเดิม (Topic Flow)"** ให้ไหลลื่น ไม่กระโดดไปมา: `This parcel arrived at dawn. Then it was scanned and sorted.`\nจุดตายคนไทย: ในภาษาไทยเราพูดว่า "พัสดุส่งไปแล้ว / เอกสารพิมพ์เสร็จแล้ว" โดยไม่มีคำว่า "ถูก" คนไทยจึงชอบพูดว่า ❌ *"The parcel sent yesterday."* ซึ่งผิดความหมาย! เพราะพัสดุเดินไปส่งตัวเองไม่ได้ ต้องเป็น ✅ **`The parcel was sent yesterday.`**',
      sound: [
        'Weak "was/were/are" + Crisp V3 Endings',
        'packed /pækt/ · shipped /ʃɪpt/ · labeled /ˈleɪ.bəld/',
        'เวลาพูด Passive ให้ลดเสียง `be` (`are` → /ər/, `was` → /wəz/, `were` → /wər/) แล้วปล่อยเสียงเน้นหนักที่กริยา V3 พร้อมเสียงท้าย /-t/, /-d/, /-ɪd/ ให้ครบ',
        'ฝึกอ่านชุด Passive 4 คำให้ท้ายคำคมชัด: was shipped / were packed / is sealed / are labeled',
      ],
      l1: [
        'พูดประโยค Passive เป็น Active เช่น "The parcel sent yesterday." หรือ "My laptop fixed already."',
        'ภาษาไทยใช้ "ถูก/โดน" เฉพาะเรื่องร้าย พอเป็นเรื่องปกติหรือเรื่องดี (อาหารเสิร์ฟแล้ว อีเมลส่งแล้ว) เราละคำว่าถูกหมด สมองจึงลืมใส่ be + V3',
        'ถามตัวเอง 1 วินาทีก่อนพูด: "ประธานข้างหน้าทำกริยานี้เองได้ไหม?" (พัสดุส่งเองได้ไหม? ❌ ไม่ได้!) → ต้องใส่ be + V3 ทันที!',
      ],
      vocab: [
        ['parcel', 'พัสดุ', '/ˈpɑː.səl/', 'deliver a fragile parcel', 'จัดส่งพัสดุที่แตกหักง่าย'],
        ['roast', 'คั่ว / อบ', '/rəʊst/', 'freshly roasted beans', 'เมล็ดกาแฟที่คั่วสดใหม่'],
        ['seal', 'ปิดผนึก', '/siːl/', 'seal the bag tightly', 'ปิดผนึกถุงให้แน่น'],
        ['label', 'ติดฉลาก', '/ˈleɪ.bəl/', 'label every shipment', 'ติดฉลากพัสดุทุกกล่อง'],
        ['inspect', 'ตรวจสอบคุณภาพ', '/ɪnˈspekt/', 'inspect before dispatch', 'ตรวจสอบก่อนปล่อยของออก'],
        ['warehouse', 'คลังสินค้า', '/ˈweə.haʊs/', 'shipped from our warehouse', 'จัดส่งออกจากคลังสินค้าของเรา'],
      ],
      examples: [
        ['Every batch of beans is roasted early in the morning.', 'เมล็ดกาแฟทุกล็อตถูกคั่วตั้งแต่เช้าตรู่'],
        ['The parcels were labeled before the courier arrived.', 'พัสดุถูกติดฉลากไว้เรียบร้อยก่อนที่พนักงานส่งของจะมาถึง'],
        ['All customer orders are packed in recyclable paper boxes.', 'คำสั่งซื้อทั้งหมดของลูกค้าถูกบรรจุในกล่องกระดาษรีไซเคิล'],
        ['Wait—was this glass jar inspected before sealing?', 'เดี๋ยวก่อน ขวดแก้วใบนี้ถูกตรวจสอบก่อนปิดผนึกหรือยัง?'],
      ],
      reading:
        "Inside a small craft coffee roastery in Chiang Mai, every morning follows a careful routine. First, green beans are sourced directly from highland farms and inspected for moisture and size. Once a batch passes quality checks, it is roasted in small drums for twelve minutes until a rich aroma fills the room. Immediately afterward, the hot beans are cooled on wide metal trays so the flavor stays balanced. By ten o'clock, the bags are filled, sealed tightly, and labeled with the exact roast date. Yesterday, more than eighty online orders were packed before noon and picked up by a local courier. Even the shipping boxes are reused whenever clean cartons are returned by neighborhood cafés. Because every step focuses on the beans rather than individual staff names, passive sentences describe this workflow cleanly and naturally.",
      listenQ: 'How long is each batch of coffee beans roasted?',
      listenA: 'For twelve minutes.',
      dictation: 'All online orders are packed in recyclable boxes.',
      listenNote: 'สังเกตเสียง /t/ ท้าย packed (/pækt/) เชื่อมกับ in และเสียงลดรูปของ are เป็น /ər/',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ประธานทำกริยาเองไม่ได้: "Look at the tracking page—your package delivered at nine o\'clock this morning."',
          answer: "Look at the tracking page—your package was delivered at nine o'clock this morning.",
          explanation: 'package ส่งตัวเองไม่ได้ ต้องใช้รูป Passive อดีต: was delivered',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Passive Voice เพื่อรักษาลำดับเรื่องและไวยากรณ์ได้ถูกต้องที่สุด?',
          answer: 'Fresh herbs are washed gently before they are dried in low heat.',
          choices: [
            'Fresh herbs wash gently before they dry in low heat.',
            'Fresh herbs are washed gently before they are dried in low heat.',
            'Fresh herbs were wash gently before they dried in low heat.',
            'Fresh herbs are washing gently before drying in low heat.',
          ],
          explanation: 'สมุนไพรถูกล้างและถูกทำให้แห้งตามกระบวนการทั่วไป ใช้ Present Simple Passive: are washed / are dried',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่างให้ถูกต้อง: Every glass bottle is carefully _____ (inspect) before it leaves our studio.',
          answer: 'inspected',
          explanation: 'โครงสร้าง Passive Voice: is + V3 (inspected)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "หน้าต่างบานนั้นถูกซ่อมเมื่อวานตอนบ่ายแล้ว"',
          answer: 'That window was repaired yesterday afternoon.',
          explanation: 'window เป็นผู้ถูกซ่อมในอดีต ใช้ was repaired (ไม่ใช้ *repaired เฉยๆ)',
        },
      ],
      writing:
        'อธิบายขั้นตอนการผลิตหรือเตรียมสิ่งของ 1 อย่างที่คุณคุ้นเคย (เช่น การชงกาแฟ การแพ็กสินค้า หรือการเตรียมเมนูอาหาร) 5–6 ประโยค โดยใช้ Present Simple Passive และ Past Simple Passive อย่างน้อย 4 จุด',
      writingSample:
        'At our home bakery, mango sticky rice is prepared fresh every morning. First, sweet sticky rice is soaked in clean water for three hours and steamed until soft. Meanwhile, ripe mangoes are peeled and sliced carefully right before packing. Yesterday, thirty lunch boxes were ordered by a nearby clinic. Every box was sealed neatly and delivered well before noon.',
      writingNote: 'เช็กทุกประโยคที่ประธานเป็นสิ่งของว่าได้ใส่ is/are/was/were + V3 ครบแล้ว ไม่มีคำนามสิ่งของไปทำกริยา Active เองโดยไม่ได้ตั้งใจ',
      speakingTopic: 'อธิบายกระบวนการเบื้องหลัง 1 งาน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือก 1 ขั้นตอนในที่ทำงานหรือชีวิตประจำวัน (เช่น การจัดส่งสินค้า การทำเมนูอาหาร หรือการตรวจสอบเอกสาร)',
        'ใช้ลำดับ First..., Then..., Next..., Yesterday... คู่กับ is/are/was/were + V3',
        'เน้นออกเสียงท้าย -ed ของ V3 (/t/, /d/, /ɪd/) ให้ชัดเจน ไม่ปล่อยกลืน',
      ],
    },
    {
      day: 121,
      title: 'Passive หลาย Tense: กำลังถูกทำ (is/was being + V3) และอนาคต (will be / going to be + V3)',
      objective:
        'ใช้ Passive ในรูป Continuous (กำลังถูกซ่อม/ปรับปรุงอยู่ตอนนี้หรือในอดีต) และ Future (จะถูกส่ง/ประกาศ) เพื่อรายงานสถานะงานได้ตรงจังหวะ',
      explanation:
        'ชีวิตจริงไม่ได้มีแค่ "ถูกทำเป็นประจำ" หรือ "ถูกทำไปแล้ว" แต่บ่อยครั้งเราต้องรายงาน **"สิ่งที่กำลังถูกจัดการอยู่ ณ ตอนนี้"** หรือ **"สิ่งที่จะถูกดำเนินการเร็วๆ นี้"**:\n1) **กำลังถูกทำอยู่ตอนนี้ (`am/is/are + being + V3`)**: `The elevator is being repaired today.` (ลิฟต์กำลังอยู่ระหว่างการซ่อม — ห้ามพูดว่า `*is repairing` เด็ดขาด!)\n2) **กำลังถูกทำ ณ จุดหนึ่งในอดีต (`was/were + being + V3`)**: `The walkway was being repainted when I walked past.`\n3) **อนาคต (`will be + V3` / `is going to be + V3`)**: `Your refund will be processed within three business days.`\nสังเกตสูตรจำ: **Continuous Passive ต้องมีคำว่า `being` เสมอ** (`is BEING V3`) ส่วน **Future Passive ใช้ `will be V3`** ไม่ต้องผัน `be`!',
      sound: [
        'Smooth Rhythm in "is being" & "will be"',
        'being updated /ˈbiː.ɪŋ ʌpˈdeɪ.tɪd/ · will be /wɪl bi/ · repaired /rɪˈpeərd/',
        'พูด "is being" ให้เป็นจังหวะต่อเนื่อง /ɪz ˈbiː.ɪŋ/ (อย่าหยุดขยักระหว่างคำ) และ "will be" ในคำพูดจริงมักย่อเป็น /əl bi/ เช่น "It’ll be sent tomorrow"',
        'ฝึกพูด 3 กาลต่อเนื่องกัน: It is cleaned daily. / It is being cleaned right now. / It will be cleaned tonight.',
      ],
      l1: [
        'พูดว่า "The system is updating right now." หรือ "The road is repairing." เมื่อจะบอกว่าสิ่งนั้นกำลังถูกซ่อม/อัปเดตโดยคนอื่น',
        'คนไทยชินกับสูตร "กำลัง... = is + V-ing" จึงลืมเติม being + V3 เวลาประธานเป็นสิ่งของ',
        'ถ้าอยากบอกว่า "กำลังถูกทำอยู่ตอนนี้" ให้เพิ่มคำว่า "being" คั่นกลางเสมอ: is + BEING + V3!',
      ],
      vocab: [
        ['upgrade', 'อัปเกรด / ปรับปรุงให้ดีขึ้น', '/ʌpˈɡreɪd/', 'currently being upgraded', 'กำลังถูกปรับปรุงอยู่ในขณะนี้'],
        ['walkway', 'ทางเดินเชื่อม', '/ˈwɔːk.weɪ/', 'the elevated walkway', 'ทางเดินยกระดับ'],
        ['refund', 'เงินคืน', '/ˈriː.fʌnd/', 'process a full refund', 'ดำเนินการคืนเงินเต็มจำนวน'],
        ['service', 'บำรุงรักษา / ตรวจเช็ก', '/ˈsɜː.vɪs/', 'be serviced regularly', 'ได้รับการตรวจเช็กซ่อมบำรุงสม่ำเสมอ'],
        ['detour', 'ทางเบี่ยง / เส้นทางอ้อม', '/ˈdiː.tʊər/', 'take a short detour', 'ใช้ทางเบี่ยงระยะสั้น'],
        ['resume', 'กลับมาเปิดดำเนินการต่อ', '/rɪˈzjuːm/', 'service will resume shortly', 'บริการจะกลับมาเปิดตามปกติเร็วๆ นี้'],
      ],
      examples: [
        ['Please take the stairs because the main elevator is being serviced right now.', 'กรุณาใช้บันไดเพราะลิฟต์หลักกำลังอยู่ระหว่างการตรวจเช็กซ่อมบำรุงตอนนี้'],
        ['New safety gates will be installed next Monday morning.', 'ประตูนิรภัยชุดใหม่จะถูกติดตั้งในเช้าวันจันทร์หน้า'],
        ['When we visited the museum last month, the east wing was being renovated.', 'ตอนที่เราไปพิพิธภัณฑ์เมื่อเดือนก่อน ปีกตะวันออกกำลังถูกปรับปรุงอยู่'],
        ['Your replacement card is going to be delivered before five o’clock.', 'บัตรใบใหม่ของคุณกำลังจะถูกจัดส่งก่อนห้าโมงเย็น'],
      ],
      reading:
        "Commuters near Ari Station noticed extra signs along the skytrain bridge this morning. Because heavy rains weakened several floor tiles last month, the elevated walkway is currently being upgraded by city maintenance crews. Temporary arrows guide pedestrians onto a covered sidewalk detour while old panels are being replaced section by section. Yesterday evening, new solar lights were being tested above the stairs, and residents praised the brighter view. According to the neighborhood notice, repainting will be finished by Thursday night, and normal access will resume on Friday at dawn. Meanwhile, feedback from daily riders is also being collected through a short QR survey at the entrance so future repairs cause less disruption.",
      listenQ: 'When will normal access to the elevated walkway resume?',
      listenA: 'On Friday at dawn.',
      dictation: 'The elevated walkway is currently being upgraded.',
      listenNote: 'สังเกต stress หลักที่ elevated, currently และ upgraded ส่วน is being เชื่อมสั้นและลื่น',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ป้ายแจ้งเตือนหน้าห้องประชุมให้ถูกหลัก Passive: "Sorry for the noise—the conference room is repainting this afternoon."',
          answer: 'Sorry for the noise—the conference room is being repainted this afternoon.',
          explanation: 'ห้องประชุมทาสีเองไม่ได้และกำลังเกิดขึ้นตอนนี้ ต้องใช้ Present Continuous Passive: is being repainted',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Passive Voice บอกเหตุการณ์ที่กำลังถูกทำในอดีต ณ ตอนนั้นได้ถูกต้อง?',
          answer: 'Our website was being updated when the traffic spike happened.',
          choices: [
            'Our website was updating when the traffic spike happened.',
            'Our website was being updated when the traffic spike happened.',
            'Our website is being updated yesterday when the traffic spike happened.',
            'Our website has being updated when the traffic spike happened.',
          ],
          explanation: 'กำลังถูกอัปเดตในอดีต ณ ช่วงเวลานั้น ใช้ Past Continuous Passive: was being updated',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่างให้ครบโครงสร้าง Future Passive: Rest assured, every claim _____ be reviewed by our support team within 24 hours.',
          answer: 'will',
          explanation: 'อนาคตแบบ Passive ใช้ will + be + V3: will be reviewed',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "เงินคืนของคุณจะถูกโอนเข้าบัญชีภายในวันศุกร์นี้"',
          answer: 'Your refund will be transferred to your account by this Friday.',
          explanation: 'ใช้ Future Passive: will be transferred (หรือ will be processed/sent)',
        },
      ],
      writing:
        'เขียนประกาศสั้นๆ 5–6 ประโยค แจ้งเพื่อนร่วมงานหรือผู้พักอาศัยในคอนโดเกี่ยวกับการปรับปรุงระบบ/สถานที่ โดยใช้ครบทั้ง `is being + V3` (กำลังซ่อมตอนนี้), `was being + V3` (ที่ทำเมื่อวาน) และ `will be + V3` (สิ่งที่จะเสร็จในอนาคต)',
      writingSample:
        'Hello everyone, please note that the lobby air conditioner is being serviced today until four o’clock. Yesterday afternoon, the old ceiling filters were being cleaned, so temporary fans were placed near the entrance. Once the final parts arrive, the cooling system will be tested for two hours. Full service will be restored before dinner time, and we appreciate your patience.',
      writingNote: 'ตรวจสอบคำว่า being ใน Continuous Passive (อย่าสลับเป็น been) และตรวจว่าหลัง will ใช้ be + V3 เสมอ',
      speakingTopic: 'รายงานสถานะการซ่อมบำรุง / อัปเดตระบบ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูด 3 ช่วงเวลาของสิ่งของ/ระบบ 1 อย่าง: เมื่อวานกำลังถูกทำอะไร (was being V3) → ตอนนี้กำลังถูกทำอะไร (is being V3) → พรุ่งนี้จะถูกทำอะไร (will be V3)',
        'ออกเสียง is being และ will be ให้ต่อเนื่องเป็นกลุ่มคำเดียว',
        'หลีกเลี่ยงการเผลอพูดว่า *The room is cleaning* หรือ *The app is updating itself* โดยไม่ได้ตั้งใจ',
      ],
    },
    {
      day: 122,
      title: 'Passive กับ Present Perfect (has/have been + V3) & Modals (must/can/should be + V3)',
      objective:
        'อัปเดตงานที่เสร็จสมบูรณ์แล้วด้วย has/have been + V3 และอธิบายกฎเกณฑ์ ความเป็นไปได้ หรือข้อเสนอแนะด้วย Modal + be + V3',
      explanation:
        'ในชีวิตการทำงานและเอกสารจริง มี Passive อีก 2 รูปที่ใช้บ่อยที่สุดในโลก:\n1) **อัปเดตผลลัพธ์จนถึงตอนนี้ (`has/have + been + V3`)**: ใช้แจ้งข่าวความคืบหน้าโดยเน้นตัวงาน เช่น `The budget has been approved!` (งบผ่านอนุมัติแล้ว!) หรือ `Three bugs have been fixed since yesterday.`\n2) **กฎ ข้อบังคับ และความยืดหยุ่น (`Modal + be + V3`)**: ใช้กับ `must, should, can, may, might, have to` เช่น `All receipts must be uploaded before Friday.`, `This menu can be customized for allergies.`\nข้อสำคัญ: ใน Present Perfect Passive ต้องใช้ **`been`** (`has BEEN approved`), ส่วนหลัง Modal ใช้ **`be`** เสมอ (`must BE submitted`) อย่าสลับสองคำนี้เด็ดขาด!',
      sound: [
        'Reduced "has/have been" & Modal + "be"',
        "has been /əz bɪn/ · must be /ˈmʌs.bi/ · customized /ˈkʌs.tə.maɪzd/",
        'คำว่า `must be` ในการพูดเร็ว เสียง /t/ ตรงกลางมักละเบาๆ เหลือ `/ˈmʌs.bi/` (มัส-บิ) ส่วน `has been` ลดเป็น `/əz bɪn/` เพื่อไปเน้นชัดที่ V3 (`approved`, `submitted`)',
        'ฝึกพูด 4 ประโยคแบบเจ้าของภาษา: It’s been approved. / They’ve been notified. / Forms must be signed. / Settings can be changed.',
      ],
      l1: [
        'พูดว่า "The report has approved." (ลืม been) หรือ "This form must submitted today." (ลืม be หลัง must)',
        'คนไทยสับสน between "been" กับ "be" ใน Passive และบางครั้งเติม "to" หลัง Modal เช่น "can to be customized"',
        'จำรหัส 2 บรรทัด: has/have + BEEN + V3 | must/can/should + BE + V3 (ห้ามมี to หลัง modal!)',
      ],
      vocab: [
        ['approve', 'อนุมัติ', '/əˈpruːv/', 'the budget has been approved', 'งบประมาณได้รับการอนุมัติแล้ว'],
        ['submit', 'ยื่น / ส่ง (เอกสาร/งาน)', '/səbˈmɪt/', 'must be submitted online', 'ต้องถูกส่งผ่านระบบออนไลน์'],
        ['customize', 'ปรับแต่งตามความต้องการ', '/ˈkʌs.tə.maɪz/', 'can be easily customized', 'สามารถปรับแต่งได้ง่าย'],
        ['notify', 'แจ้งให้ทราบ', '/ˈnəʊ.tɪ.faɪ/', 'have already been notified', 'ได้รับแจ้งเรียบร้อยแล้ว'],
        ['confidential', 'เป็นความลับ', '/ˌkɒn.fɪˈden.ʃəl/', 'keep confidential files safe', 'เก็บรักษาไฟล์ที่เป็นความลับให้ปลอดภัย'],
        ['store', 'จัดเก็บ', '/stɔːr/', 'should be stored securely', 'ควรถูกจัดเก็บอย่างปลอดภัย'],
      ],
      examples: [
        ['Good news—your travel request has been approved by the operations lead.', 'ข่าวดีนะ คำขอเดินทางของคุณได้รับการอนุมัติจากหัวหน้าฝ่ายปฏิบัติการแล้ว'],
        ['All expense receipts must be submitted within five working days.', 'ใบเสร็จค่าใช้จ่ายทั้งหมดต้องถูกส่งภายในห้าวันทำการ'],
        ['Three minor design issues have been resolved since our morning check-in.', 'ปัญหาดีไซน์เล็กๆ สามจุดได้รับการแก้ไขแล้วตั้งแต่การประชุมเช้า'],
        ['Notification alerts can be customized inside your profile preferences.', 'การแจ้งเตือนสามารถปรับแต่งได้ในหน้าตั้งค่าโปรไฟล์ของคุณ'],
      ],
      reading:
        "Welcome to the studio! To make your first week comfortable, most setup steps have already been completed for you. Your company email has been created, and your access badge has been activated at the front desk. Before Friday afternoon, only two short forms must be signed and uploaded to the internal portal. Please remember that confidential client files should always be stored inside shared team folders rather than personal drives. On the bright side, your desk height, chair support, and calendar alerts can all be customized to fit how you work best. If any software permission still looks missing, simply message the support channel—those requests can usually be handled within thirty minutes.",
      listenQ: 'Where should confidential client files always be stored?',
      listenA: 'Inside shared team folders rather than personal drives.',
      dictation: 'All receipts must be submitted before Friday.',
      listenNote: 'จับเสียงลดรูป /ˈmʌs.bi/ ใน must be และเสียง /ɪd/ ท้าย submitted ให้ชัดเจน',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ตกหล่นคำช่วยสำคัญ 2 จุด: "Your booking has confirmed, and extra towels can requested at reception."',
          answer: 'Your booking has been confirmed, and extra towels can be requested at reception.',
          explanation: '1) Present Perfect Passive ต้องมี been: has been confirmed 2) Modal Passive ต้องมี be: can be requested',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Passive เพื่อรายงานผลที่สำเร็จแล้วและข้อบังคับได้อย่างถูกต้องสมบูรณ์?',
          answer: 'The final draft has been reviewed, so comments must be added before noon.',
          choices: [
            'The final draft has reviewed, so comments must be added before noon.',
            'The final draft has been reviewed, so comments must added before noon.',
            'The final draft has been reviewed, so comments must be added before noon.',
            'The final draft has being reviewed, so comments must to be added before noon.',
          ],
          explanation: 'has been reviewed (ถูกตรวจแล้ว) + must be added (ต้องถูกเพิ่ม)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่าง: Sensitive passwords should never _____ shared over public chat apps.',
          answer: 'be',
          explanation: 'หลัง Modal (should never) ตามด้วย be + V3 (shared)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "กำหนดการนี้สามารถปรับเปลี่ยนได้ แต่ใบสมัครต้องถูกส่งภายในวันนี้"',
          answer: 'This schedule can be adjusted, but the application form must be submitted today.',
          explanation: 'ใช้ Modal Passive ทั้งสองท่อน: can be adjusted + must be submitted',
        },
      ],
      writing:
        'เขียน "คู่มือสั้นๆ + อัปเดตสถานะ" สำหรับสมาชิกใหม่ในทีมหรือผู้เช่าห้องใหม่ 5–6 ประโยค โดยใช้ทั้ง `has/have been + V3` และ `must/should/can be + V3` อย่างละ 2 ประโยคขึ้นไป',
      writingSample:
        'Welcome aboard! Your workspace has been prepared, and your welcome kit has been placed on your desk. Before Monday morning, your emergency contact details must be updated in the system. Kitchen mugs and snacks can be used freely by everyone on the floor. However, empty containers should be rinsed and sorted into the recycling bins right after lunch.',
      writingNote: 'เช็กคู่กริยาช่วยทุกจุด: has/have + BEEN + V3 และ must/can/should + BE + V3 ไม่สลับกัน',
      speakingTopic: 'อัปเดตงานที่เสร็จแล้ว & กฎการใช้งานสำคัญ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'สรุปสิ่งที่ทีมเตรียมเสร็จเรียบร้อยแล้ว (Everything has been arranged / Two tasks have been finished)',
        'อธิบายกติกาหรือสิ่งที่ปรับแต่งได้ด้วย must be / should be / can be + V3',
        'ฝึกพูด must be เป็น /ˈmʌs.bi/ และ has been เป็น /əz bɪn/ ให้ไหลลื่น',
      ],
    },
    {
      day: 123,
      title: 'Get-Passive (get + V3) ในภาษาพูดประจำวัน vs Formal Passive (be + V3)',
      objective:
        'ใช้ get + V3 ได้อย่างเป็นธรรมชาติในบทสนทนาสำหรับเหตุการณ์ไม่คาดคิดหรือจุดเปลี่ยนชีวิต และแยกบริบททางการกับภาษาพูดได้ถูกต้อง',
      explanation:
        'เวลาฝรั่งคุยกันในชีวิตจริง เขาไม่ได้พูด `be + V3` ตลอดเวลา โดยเฉพาะเมื่อเล่า **"เรื่องบังเอิญ อุบัติเหตุ หรือความเปลี่ยนแปลงสำคัญของคน"** เจ้าของภาษามักใช้ **`get + V3`** (Get-Passive) แทน! ตัวอย่างสุดฮิตที่ใช้ทุกวัน:\n- เรื่องติดขัด/เสียหาย: `get stuck in traffic` (รถติดแหง็ก), `get lost` (หลงทาง), `get delayed` (ล่าช้า), `get damaged` (เสียหาย), `get soaked` (เปียกโชก)\n- ข่าวดี/จุดเปลี่ยนชีวิต: `get hired` (ได้งาน), `get promoted` (ได้เลื่อนตำแหน่ง), `get invited` (ได้รับเชิญ), `get paid` (ได้เงินเดือน/ค่าจ้าง)\n**ข้อแตกต่างด้านโทนภาษา (Register)**: ใช้ `get + V3` ในบทสนทนากับเพื่อนและเล่าเรื่องส่วนตัว ส่วนในประกาศทางการ สัญญา และข่าวทางการให้คงรูป `be + V3` ไว้ (เช่น `Bags are inspected at the gate` ไม่ใช่ `*Bags get inspected*`)',
      sound: [
        'Consonant Linking in "get / got + V3"',
        'got stuck /ɡɒt stʌk/ · get promoted /ɡet prəˈməʊ.tɪd/ · damaged /ˈdæm.ɪdʒd/',
        'เวลาพูด `got stuck` หรือ `got lost` ให้เชื่อม /t/ ท้าย got เข้ากับคำหลังอย่างรวดเร็ว ไม่หยุดคั่นเสียงเป็นสองจังหวะ และระวังท้าย `damaged` (/dʒd/) อย่าตัดเสียงท้ายทิ้ง',
        'ฝึกออกเสียงกลุ่มคำ get-passive 6 ก้อนติดกัน: got stuck / got soaked / got delayed / got hired / got promoted / got fixed',
      ],
      l1: [
        'ใช้คำว่า "become stuck / become hired" หรือพูดซ้ำว่า "I was stuck / I was lost" แบบไม่คุ้นกับ get + V3 หรือเอา get + V3 ไปใส่ในประกาศทางการ',
        'ในตำราเรียนมักสอนแค่ be + V3 จนผู้เรียนไม่กล้าใช้ get + V3 ทั้งที่เป็นโครงสร้างที่เจ้าของภาษาพูดบ่อยที่สุดในชีวิตประจำวัน',
        'จำหลักเลือกใช้ง่ายๆ: เล่าเหตุการณ์ส่วนตัว/เหตุไม่คาดฝันให้เพื่อนฟัง = get + V3 (ในอดีตใช้ got + V3) | เขียนประกาศ/กฎ/รายงานทางการ = be + V3',
      ],
      vocab: [
        ['get stuck', 'ติดขัด / ติดแหง็ก', '/ɡet stʌk/', 'get stuck in heavy traffic', 'ติดแหง็กอยู่ท่ามกลางรถติดหนัก'],
        ['get soaked', 'เปียกโชก', '/ɡet səʊkt/', 'get soaked in a sudden downpour', 'เปียกโชกในฝนเทลงมาฉับพลัน'],
        ['get promoted', 'ได้เลื่อนตำแหน่ง', '/ɡet prəˈməʊ.tɪd/', 'finally get promoted', 'ได้เลื่อนตำแหน่งในที่สุด'],
        ['get damaged', 'ได้รับความเสียหาย', '/ɡet ˈdæm.ɪdʒd/', 'get damaged during transit', 'เสียหายระหว่างการขนส่ง'],
        ['get hired', 'ได้รับการว่าจ้าง / ได้งาน', '/ɡet ˈhaɪəd/', 'get hired at a green startup', 'ได้งานที่สตาร์ตอัปสายรักษ์โลก'],
        ['downpour', 'ฝนตกหนักเทลงมา', '/ˈdaʊn.pɔːr/', 'caught in an evening downpour', 'เจอฝนเทหนักช่วงเย็น'],
      ],
      examples: [
        ['Our delivery van got stuck near the bridge for forty minutes.', 'รถตู้ส่งของของเราติดแหง็กอยู่แถวสะพานตั้งสี่สิบนาที'],
        ['Two ceramic bowls got damaged while the box was being moved.', 'ชามเซรามิกสองใบได้รับความเสียหายตอนที่กล่องกำลังถูกย้าย'],
        ['Have you heard the great news? Tanya finally got promoted last week!', 'ได้ยินข่าวดีหรือยัง? ธัญญ่าได้เลื่อนตำแหน่งเมื่อสัปดาห์ที่แล้วในที่สุด!'],
        ['If we leave without an umbrella, we are going to get soaked.', 'ถ้าเราออกไปโดยไม่พกร่ม เดี๋ยวได้เปียกโชกแน่ๆ'],
      ],
      reading:
        "Tuesday turned into a day of surprises for Lek from start to finish. First, he got stuck in unexpected roadwork on Rama IV for half an hour. As he rushed from the station without checking the sky, he got caught in a sudden afternoon downpour and his favorite umbrella got bent backward by a strong gust of wind. Even his paper folder got slightly damaged along the edges. Fortunately, the afternoon completely turned around once he reached the studio. Not only did his earlier proposal get approved without a single revision, but his teammate Ploy also shared exciting news—she had just gotten hired as lead illustrator for a children's book series, and Lek himself got invited to lead next month's workshop. Over warm noodles afterward, they laughed about how chaotic mornings often end with the brightest wins.",
      listenQ: 'What happened to Lek’s umbrella during the afternoon downpour?',
      listenA: 'It got bent backward by a strong gust of wind.',
      dictation: 'Two boxes got damaged during the heavy storm.',
      listenNote: 'สังเกตเสียงท้ายของ damaged (/ˈdæm.ɪdʒd/) กับ during และเน้นเสียงหลักที่ Two, boxes, damaged, storm',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'ปรับประโยคเล่าเรื่องส่วนตัวให้เป็นธรรมชาติและถูกไวยากรณ์: "Yesterday my phone was drop in the puddle and it become broke."',
          answer: 'Yesterday my phone got dropped in a puddle and it got broken.',
          explanation: 'เล่าอุบัติเหตุในภาษาพูดใช้ got + V3: got dropped / got broken (หรือ broke ในรูปอกรรมกริยา)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ get-passive กับโทนภาษาพูดได้อย่างเหมาะสมที่สุด (และไม่เอาไปใช้ผิดในประกาศทางการ)?',
          answer: 'Sorry I am late—my train got delayed at the interchange station.',
          choices: [
            'All staff backpacks get inspected by security upon entering the building.',
            'Sorry I am late—my train got delayed at the interchange station.',
            'Yesterday I got boring during the long afternoon workshop.',
            'Official tax receipts get issued within seven days of payment.',
          ],
          explanation: 'got delayed เป็นเหตุไม่คาดคิดในการสนทนาจริง ส่วนประกาศนโยบาย (backpacks / tax receipts) ควรใช้ be + V3 และ "เบื่อ" ใช้ got bored (ไม่ใช่ got boring)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำให้ครบก้อนคำ: After three rounds of interviews, Somchai finally _____ hired by a solar energy company.',
          answer: 'got',
          explanation: 'เหตุการณ์เปลี่ยนชีวิตในอดีตแบบสนทนา ใช้ got hired',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ (ใช้โทนภาษาพูด get + V3): "อย่าลืมเอาแผนที่ติดตัวไปนะ ไม่งั้นพวกเราอาจจะหลงทางได้"',
          answer: "Don't forget to bring the map, or we might get lost.",
          explanation: 'ใช้ get lost (หลงทาง) ในภาษาพูดคู่กับ might',
        },
      ],
      writing:
        'เขียนเล่า "วันวุ่นวายที่จบลงด้วยเรื่องดี" 5–6 ประโยค โดยใช้ก้อนคำ `get + V3` (ในรูปอดีต `got + V3` หรือปัจจุบัน/อนาคต) อย่างน้อย 4 จุด',
      writingSample:
        'Last Friday, nearly everything went wrong before lunch. First, I got stuck behind a parade near the old town and missed my morning coffee stop. Then, my canvas tote got soaked when a passing scooter splashed through a puddle. Luckily, my laptop stayed dry inside its sleeve. Later that afternoon, our team presentation got praised by the client, and I even got invited to join the next design sprint!',
      writingNote: 'เช็กว่าหลัง get/got ใช้รูปกริยาช่อง 3 (V3) ครบทุกตัว (stuck, soaked, damaged, promoted, lost) และไม่ได้ใช้กับประกาศทางการ',
      speakingTopic: 'เล่าเหตุการณ์วุ่นๆ หรือข่าวดีด้วย get + V3 (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าวันที่เคยรถติด หลงทาง เปียกฝน หรือของพัง โดยใช้ got stuck / got lost / got soaked / got damaged',
        'ปิดท้ายด้วยเรื่องดีอย่าง got invited / got praised / got hired / got fixed',
        'เปรียบเทียบในใจว่าประโยคนี้เหมาะกับพูดเล่าเพื่อน (got + V3) vs เขียนประกาศทางการ (be + V3)',
      ],
    },
    {
      day: 124,
      title: 'กริยา 2 กรรมใน Passive (We were given...) & Causative (have/get something done)',
      objective:
        'สร้างประโยค Passive โดยเอา "คน" ขึ้นเป็นประธานเมื่อกริยามี 2 กรรม และใช้ have/get + object + V3 เมื่อจ้างหรือให้คนอื่นทำให้',
      explanation:
        'วันนี้มี 2 โครงสร้างระดับ B1 ที่ช่วยให้ภาษาอังกฤษของคุณฟังดูเหมือนเจ้าของภาษาทันที:\n1) **กริยา 2 กรรม (`give, offer, send, show, tell, assign`)**: เวลาเปลี่ยนเป็น Passive เจ้าของภาษาเกือบ 90% เอา **"คน"** ขึ้นเป็นประธานแทนสิ่งของ! เช่น แทนที่จะพูดแข็งๆ ว่า *"Clear instructions were given to us."* พูดให้ลื่นเป็นธรรมชาติว่า **`We were given clear instructions.`** หรือ **`She was offered a flexible schedule.`**\n2) **Causative (`have/get + สิ่งของ + V3`) = ให้ช่าง/คนอื่นทำให้ (ไม่ได้ทำเอง!)**:\n- คนไทยชอบพูดว่า ❌ *"I cut my hair yesterday."* (ฟังเหมือนคุณถือกรรไกรตัดผมตัวเอง!) หรือ *"I fixed my laptop at the shop."* (ฟังเหมือนคุณซ่อมเอง!)\n- ที่ถูกคือ ✅ **`I had my hair cut yesterday.`** / **`I got my laptop repaired at the shop.`** — สูตรนี้บอกชัดเจนว่า **"ฉันจัดแจงให้มืออาชีพทำให้"**!',
      sound: [
        'Stress Contrast in Causative Sentences',
        'had my laptop repaired /hæd maɪ ˈlæp.tɒp rɪˈpeərd/ · were given /wə ˈɡɪv.ən/',
        'ใน Causative ให้เน้นเสียงที่ "สิ่งของ" และ "V3 ท้ายประโยค" (`I had my LAPtop rePAIRED`) ส่วน `had my` และ `were` ออกเสียงเบาเร็ว (`/wə/` ไม่ใช่ /wɜːr/ หนักๆ)',
        'ฝึกพูดคู่ต่างความหมาย: I painted my room. (ทาเอง) vs I had my room painted. (จ้างช่างทา)',
      ],
      l1: [
        'พูดว่า "I cut my hair" หรือ "I repaired my car at the garage" ทั้งที่ไปร้านให้ช่างทำให้ และพูดว่า "It was told me that..."',
        'ภาษาไทยใช้กริยาเดียวโดยละคำว่า "ให้ช่าง..." เช่น "ไปตัดผมมา / เอารถไปซ่อมมา" จึงแปลตรงตัวเป็น Active โดยไม่รู้ตัว',
        'ท่องไว้เลย: ถ้าไปร้านทำผม ร้านซ่อม หรือให้ใครช่วยทำให้ ใช้โครงสร้าง "have/get + สิ่งของ + V3" เสมอ! และเมื่อมีคนรับผล ใช้ "I was given / She was told / We were offered"!',
      ],
      vocab: [
        ['technician', 'ช่างเทคนิค', '/tekˈnɪʃ.ən/', 'have it checked by a technician', 'ให้ช่างเทคนิคช่วยตรวจเช็ก'],
        ['landlord', 'เจ้าของห้อง/บ้านเช่า', '/ˈlænd.lɔːd/', 'check with the landlord', 'สอบถามกับเจ้าของห้องเช่า'],
        ['locksmith', 'ช่างทำกุญแจ', '/ˈlɒk.smɪθ/', 'call a certified locksmith', 'เรียกช่างกุญแจที่ได้มาตรฐาน'],
        ['instructions', 'คำแนะนำ / ขั้นตอนปฏิบัติ', '/ɪnˈstrʌk.ʃənz/', 'be given clear instructions', 'ได้รับคำแนะนำที่ชัดเจน'],
        ['alter', 'แก้ไขขนาด (เสื้อผ้า)', '/ˈɔːl.tər/', 'get a jacket altered', 'เอาเสื้อแจ็กเก็ตไปแก้ทรง'],
        ['polish', 'ขัดเงา / เกลางาน', '/ˈpɒl.ɪʃ/', 'have the floors polished', 'จ้างขัดเงาพื้นห้อง'],
      ],
      examples: [
        ['Before moving into the studio, we had all the door locks changed.', 'ก่อนย้ายเข้าห้องสตูดิโอ เราให้ช่างมาเปลี่ยนกุญแจประตูทั้งหมดแล้ว'],
        ['Every new member was given a clear checklist on their first day.', 'สมาชิกใหม่ทุกคนได้รับเช็กลิสต์ที่ชัดเจนตั้งแต่วันแรก'],
        ['I need to get my trousers altered before Saturday’s ceremony.', 'ฉันต้องเอากางเกงไปแก้ทรงก่อนงานพิธีวันเสาร์นี้'],
        ['She was offered two extra days to polish the final proposal.', 'เธอได้รับข้อเสนอขยายเวลาอีกสองวันเพื่อเกลาข้อเสนอชิ้นสุดท้าย'],
      ],
      reading:
        "Moving into a small older studio near On Nut took plenty of coordination, yet everything came together smoothly. Before bringing any furniture inside, Mint had the faded living room walls repainted in warm cream and got the noisy air conditioner serviced by a technician. Because the previous tenant had misplaced a spare key, Mint also had the front door lock changed for peace of mind. On move-in morning, she was given clear instructions about waste sorting and package lockers by the friendly building manager. Even better, she was offered a free reserved spot for her bicycle near the side garden. While unpacking boxes, Mint noticed one curtain hung slightly too low, so she plans to get it shortened at a neighborhood tailor shop next week. Taking time to arrange professional help early saved her days of unnecessary stress.",
      listenQ: 'Why did Mint have the front door lock changed before moving in?',
      listenA: 'Because the previous tenant had misplaced a spare key.',
      dictation: 'We were given clear instructions on our first day.',
      listenNote: 'สังเกต "were given" ลดเสียง were เป็น /wə/ แล้วเน้นหนักที่ given, clear และ instructions',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคที่ฟังเหมือนเจ้าของรถลงมือซ่อมเบรกด้วยตัวเองทั้งที่ไปอู่: "Yesterday I fixed my brakes at a local garage, and it was told me the tires look fine."',
          answer: 'Yesterday I had my brakes fixed at a local garage, and I was told the tires look fine.',
          explanation: '1) ให้ช่างซ่อมให้ใช้ had/got my brakes fixed 2) กริยา 2 กรรมใช้คนเป็นประธาน: I was told (ไม่ใช่ *it was told me)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดสื่อความหมายถูกต้องว่า "คุณไปร้านเพื่อให้ช่างตัดผมให้ ไม่ได้หยิบกรรไกรตัดเอง"?',
          answer: 'I finally got my hair cut at that new salon near the station.',
          choices: [
            'I finally cut my hair by myself at that new salon near the station.',
            'I finally got my hair cut at that new salon near the station.',
            'I finally had cutting my hair at that new salon near the station.',
            'My hair finally got cutting at that new salon near the station.',
          ],
          explanation: 'โครงสร้าง Causative ที่ถูกต้องคือ get/have + object (my hair) + V3 (cut)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่าง: Each volunteer was _____ (show) how to operate the emergency radio before the shift began.',
          answer: 'shown',
          explanation: 'Passive ของกริยา 2 กรรม (show + person): was shown (V3 ของ show คือ shown)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "ฉันเพิ่งให้ช่างเปลี่ยนหน้าจอโทรศัพท์เมื่อบ่ายวานนี้"',
          answer: 'I just had my phone screen replaced yesterday afternoon.',
          explanation: 'ใช้ Causative อดีต: had + my phone screen + replaced (V3) หรือ got ... replaced',
        },
      ],
      writing:
        'เขียนบันทึก 5–6 ประโยค เล่าการเตรียมตัวก่อนย้ายบ้าน จัดงาน หรือทริปเดินทาง โดยใช้โครงสร้าง `have/get + something + V3` อย่างน้อย 2 ประโยค และ Passive กริยา 2 กรรม (`was given / was told / was offered`) อย่างน้อย 2 ประโยค',
      writingSample:
        'Preparing for my friend’s outdoor dinner took careful teamwork. Earlier this week, I had our wooden garden chairs cleaned and got two extra string lights installed along the fence. Yesterday, my brother got his suit tailored at the corner shop just in time. When we arrived at the bakery to pick up the cake, we were given complimentary candles and helpful storage tips. Later, we were also offered extra ice packs for the drive home.',
      writingNote: 'ตรวจสอบคำกริยาหลัง object ใน Causative ว่าอยู่ในรูป V3 ทั้งหมด (cleaned, installed, tailored, repaired, cut)',
      speakingTopic: 'แยกความต่าง: ทำเอง vs จ้างช่างทำ & สิ่งที่ได้รับ (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เล่าสิ่งที่คุณจ้างหรือให้ร้าน/ทีมงานทำให้ในช่วงเดือนที่ผ่านมาด้วย I had my... / I got my... + V3',
        'แทรกสิ่งที่คุณได้รับแจ้งหรือมอบหมายด้วย I was given... / We were told... / I was offered...',
        'เน้น Stress ให้ชัดที่ตัวสิ่งของและกริยา V3 ท้ายประโยค',
      ],
    },
    {
      day: 125,
      title: 'Explaining Workflows, Tech Updates & Local News Stories Naturally',
      objective:
        'ผสมผสาน Active และ Passive Voice อย่างสมดุลเพื่ออธิบายขั้นตอนระบบงาน อัปเดตด้านเทคโนโลยี และข่าวท้องถิ่นได้น่าอ่านน่าฟัง',
      explanation:
        'เวลาเขียนหรือพูดเล่าข่าวจริงและระบบงานในบริษัท คนที่เพิ่งเรียน Passive มักใช้ผิดสองสุดขั้ว: ไม่ลืมใส่ Passive เลย ก็ยัด Passive ใส่ทุกประโยคจนแข็งเป็นหุ่นยนต์! เคล็ดลับของระดับ B1 คือ **"สลับ Active กับ Passive เพื่อรักษาตัวเอก (Topic Flow)"**:\n- ใช้ **Active** เมื่อโฟกัสที่คน/ทีมผู้ลงมือหรือผู้ใช้งาน: `Residents can check live water levels on the map.`\n- ใช้ **Passive** เมื่อโฟกัสที่ระบบ ข้อมูล หรือเหตุการณ์ในข่าว: `Sensors are mounted under three bridges. Once high levels are detected, automatic alerts are sent to district teams.`\nการสลับอย่างมีจังหวะคู่กับตัวเชื่อมขั้นตอน (`First`, `Once...`, `Meanwhile`, `Eventually`) ทำให้งานอธิบายระบบและข่าวของคุณไหลลื่นระดับมืออาชีพ!',
      sound: [
        'Pacing & Chunking in Multi-Step Explanations',
        'sensor /ˈsen.sər/ · triggered /ˈtrɪɡ.ərd/ · residents /ˈrez.ɪ.dənts/',
        'เวลาอ่านข่าวหรืออธิบายขั้นตอนยาวๆ ให้หยุดหายใจสั้นๆ หลังคำเชื่อม (`First,`, `Once water levels rise,`, `Meanwhile,`) เพื่อแยก "เงื่อนไข" ออกจาก "ผลที่ถูกกระทำ"',
        'ฝึกอ่านบทอ่านวันนี้ด้วยการแบ่งวรรค 2 จังหวะต่อประโยคให้ฟังเหมือนผู้ประกาศข่าวสารคดี',
      ],
      l1: [
        'สลับประธานไปมาแบบสะเปะสะปะ ("First, the team installs sensors. Then alerts send out. Then citizens are opened the app.")',
        'ไม่ทันเช็กว่าใครเป็นคนทำในประโยคถัดไป และลืมเปลี่ยนรูปกริยาเมื่อตัวเอกเปลี่ยนจาก "ทีมงาน" เป็น "ข้อมูล/แจ้งเตือน"',
        'เช็กตัวเอกของแต่ละประโยค: ถ้าตัวเอกคือ "คน/ทีม/ผู้ใช้" → Active | ถ้าตัวเอกคือ "เซ็นเซอร์/ข้อมูล/แจ้งเตือน/ถนน" → Passive!',
      ],
      vocab: [
        ['sensor', 'ตัวตรวจจับ / เซ็นเซอร์', '/ˈsen.sər/', 'install smart flood sensors', 'ติดตั้งเซ็นเซอร์ตรวจวัดน้ำท่วมอัจฉริยะ'],
        ['trigger', 'กระตุ้นให้ทำงาน', '/ˈtrɪɡ.ər/', 'trigger an instant alert', 'กระตุ้นให้ส่งแจ้งเตือนทันที'],
        ['verify', 'ตรวจสอบความถูกต้อง', '/ˈver.ɪ.faɪ/', 'verify incoming readings', 'ตรวจสอบค่าข้อมูลที่ส่งเข้ามา'],
        ['resident', 'ผู้อยู่อาศัย / ชาวบ้าน', '/ˈrez.ɪ.dənt/', 'notify local residents', 'แจ้งเตือนผู้อยู่อาศัยในพื้นที่'],
        ['launch', 'เปิดตัว / เริ่มใช้งาน', '/lɔːntʃ/', 'launch a pilot network', 'เปิดตัวเครือข่ายนำร่อง'],
        ['accuracy', 'ความแม่นยำ', '/ˈæk.jər.ə.si/', 'improve forecast accuracy', 'เพิ่มความแม่นยำในการคาดการณ์'],
      ],
      examples: [
        ['Once unusual water levels are detected, an early warning is triggered automatically.', 'ทันทีที่ตรวจพบระดับน้ำผิดปกติ ระบบเตือนภัยล่วงหน้าจะถูกกระตุ้นให้ทำงานอัตโนมัติ'],
        ['Engineers check the readings first before alerts are shared with local residents.', 'วิศวกรตรวจสอบค่าที่อ่านได้ก่อนที่การแจ้งเตือนจะถูกแชร์ให้ชาวบ้านในพื้นที่'],
        ['The pilot network was launched last month and has already been expanded to six streets.', 'เครือข่ายนำร่องถูกเปิดตัวเมื่อเดือนก่อนและได้ถูกขยายไปยังหกถนนแล้ว'],
        ['Anyone in the neighborhood can view live updates on the community board.', 'ทุกคนในละแวกนั้นสามารถดูอัปเดตแบบเรียลไทม์บนบอร์ดชุมชนได้'],
      ],
      reading:
        "Last month, a Bangkok riverside neighborhood launched a smart flood-alert network to help families prepare earlier during heavy storms. Under the pilot project, compact solar sensors were mounted beneath four canal bridges. Whenever water rises rapidly, readings are transmitted to a central dashboard every five minutes. Once a critical threshold is reached, an automatic warning is triggered and checked by on-duty staff. After those numbers are verified, clear advisories are posted to the neighborhood chat group within minutes. Residents also played an active role in shaping the system: during community workshops, volunteers were asked which streets usually flood first, and several sensor spots were adjusted based on their local knowledge. Because the workflow combines reliable technology with human verification, false alarms have been kept low, and people feel far better informed before rain arrives.",
      listenQ: 'How often are readings transmitted to the central dashboard when water rises rapidly?',
      listenA: 'Every five minutes.',
      dictation: 'Once the data is verified, alerts are sent out.',
      listenNote: 'สังเกตการเว้นจังหวะสั้นๆ หลัง verified และเสียง /t/ ท้าย sent เชื่อมเข้ากับ out เป็น /sent aʊt/',
      drills: [
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคอธิบายระบบที่ผสม Active-Passive ผิดจุด: "After a ticket submits by a user, our team is received an alert and fixes it fast."',
          answer: 'After a ticket is submitted by a user, our team receives an alert and fixes it fast.',
          explanation: 'ticket ถูกส่ง (Passive: is submitted) ส่วน our team เป็นคนรับและแก้ไขเอง (Active: receives / fixes)',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดสลับ Active และ Passive เพื่อเล่าข่าวท้องถิ่นได้ลื่นไหลและถูกต้องที่สุด?',
          answer: 'City crews planted eighty shade trees along the canal, and drip lines were installed to water them.',
          choices: [
            'City crews were planted eighty shade trees along the canal, and drip lines installed to water them.',
            'City crews planted eighty shade trees along the canal, and drip lines were installed to water them.',
            'Eighty shade trees planted along the canal, and drip lines were installing by city crews.',
            'City crews planted eighty shade trees along the canal, and drip lines have installing to water them.',
          ],
          explanation: 'ท่อนแรก City crews (ผู้ทำ) ใช้ Active: planted; ท่อนหลัง drip lines (สิ่งของถูกติดตั้ง) ใช้ Passive: were installed',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่าง: Whenever an error is _____ (detect), the system pauses the transfer automatically.',
          answer: 'detected',
          explanation: 'ใช้ Present Simple Passive หลัง is: detected',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "เมื่อคำสั่งซื้อได้รับการยืนยันแล้ว อีเมลสรุปจะถูกส่งให้ลูกค้าทันที"',
          answer: 'Once an order is confirmed, a summary email is sent to the customer immediately.',
          explanation: 'ท่อนแรก Passive: is confirmed ท่อนหลัง Passive: is sent',
        },
      ],
      writing:
        'เขียนข่าวสั้นท้องถิ่นหรือคำอธิบายการทำงานของแอป/บริการ 1 ระบบ (6–7 ประโยค) โดยผสม Active (สำหรับผู้ใช้/ทีมงาน) กับ Passive (สำหรับระบบ/ข้อมูล/สิ่งของ) ให้ลื่นไหลอย่างน้อยอย่างละ 2 ประโยค',
      writingSample:
        'Last week, our local market introduced a reusable cup program to cut single-use plastic waste. Shoppers pay a small deposit at any drink stall when they borrow a steel cup. After they finish their drink, cups can be dropped off at three brightly marked return kiosks near the exits. Every evening, all returned cups are collected, washed at high temperatures, and sanitized before morning service. So far, more than six hundred plastic cups have been saved in just ten days.',
      writingNote: 'ตรวจจุดเปลี่ยนจาก "คนทำ" (Active: pay, borrow, finish) มาเป็น "แก้ว/ระบบ" (Passive: can be dropped off, are collected, have been saved)',
      speakingTopic: 'อธิบายระบบงานหรือเล่าข่าวชุมชน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'เลือกเล่า 1 ข่าวหรือ 1 ระบบการทำงาน (เช่น การคืนแก้ว การสั่งอาหารเดลิเวอรี หรือระบบแจ้งเตือนสภาพอากาศ)',
        'ใช้คำเชื่อมขั้นตอน First / Once / After that / Meanwhile และสลับ Active-Passive อย่างเป็นธรรมชาติ',
        'เว้นจังหวะหยุดหายใจสั้นๆ ท้ายอนุประโยคแรกก่อนขึ้นประโยคผลลัพธ์',
      ],
    },
    {
      day: 126,
      type: 'review',
      title: 'ทบทวนสัปดาห์ 18: Real-World Passive & Causative + Dictogloss',
      objective:
        'ประมวลความแม่นยำเรื่อง Passive ทุก Tense, get + V3, กริยา 2 กรรม และ Causative have/get something done ผ่าน Dictogloss และการเขียน-พูดจริง',
      explanation:
        'จบสัปดาห์ที่ 18 แล้วครับ! สัปดาห์นี้คุณปลดล็อก Passive Voice จากแค่ "สูตรท่องจำในกระดาษ" ให้กลายเป็นเครื่องมือเล่าข่าว อัปเดตงาน และสื่อสารชีวิตจริง สรุป 5 โครงสร้างหลักก่อนลุย Dictogloss:\n1) **Passive ทั่วไป/อดีต**: `is/are/was/were + V3` (สิ่งของทำเองไม่ได้!)\n2) **กำลังถูกทำ & อนาคต**: `is/was being + V3` และ `will be + V3`\n3) **เสร็จสมบูรณ์ & กฎ/ข้อบังคับ**: `has/have been + V3` และ `must/can/should be + V3`\n4) **ภาษาพูดประจำวัน**: `get/got + V3` (`got stuck, got hired, got damaged`)\n5) **กริยา 2 กรรม & จ้างมืออาชีพ**: `We were given...` และ `I had/got my laptop repaired.`',
      sound: [
        'Week 18 Passive Rhythm & V3 Final Consonants',
        'was being /wəz ˈbiː.ɪŋ/ · has been /əz bɪn/ · got damaged /ɡɒt ˈdæm.ɪdʒd/',
        'ทำ Shadowing บทอ่านทบทวนวันนี้ 2 รอบ โดยรักษาเสียงเบาของกริยาช่วย (`was, were, been, being, be`) แล้วปล่อยพลังเสียงชัดเจนลงที่ V3 ทุกตัว',
        'เช็กการออกเสียงคำลงท้าย -ed ทั้ง 3 กลุ่ม (/t/, /d/, /ɪd/) ในคำว่า packed, damaged, upgraded, repaired',
      ],
      l1: [
        'พอรวมทุกแบบไว้ด้วยกัน มักสับสนระหว่าง being (กำลังถูกทำ) กับ been (ทำเสร็จแล้ว) และยังเผลอใช้ Active กับประธานที่เป็นสิ่งของอยู่บ้าง',
        'ความเร่งรีบตอนพูดทำให้ตัดคำช่วย be/been/being ทิ้ง เหลือแค่ "The file approved yesterday" หรือ "The room is painting"',
        'ใช้ 2 คำถามสั้นๆ ในหัว: 1) ประธานทำเองได้ไหม? (ไม่ได้ = ต้องมี be/get + V3!) 2) จ้างคนอื่นทำใช่ไหม? (ใช่ = have/get + ของ + V3!)',
      ],
      vocab: [
        ['coordinate', 'ประสานงาน', '/kəʊˈɔː.dɪ.neɪt/', 'coordinate with local vendors', 'ประสานงานกับผู้ค้าท้องถิ่น'],
        ['complimentary', 'ฟรี / อภินันทนาการ', '/ˌkɒm.plɪˈmen.tər.i/', 'be offered complimentary drinks', 'ได้รับเครื่องดื่มฟรีเป็นอภินันทนาการ'],
        ['disruption', 'การหยุดชะงัก / ความไม่สะดวก', '/dɪsˈrʌp.ʃən/', 'minimize daily disruption', 'ลดการหยุดชะงักในชีวิตประจำวันให้น้อยที่สุด'],
        ['reimburse', 'เบิกจ่ายคืนเงิน', '/ˌriː.ɪmˈbɜːs/', 'expenses will be reimbursed', 'ค่าใช้จ่ายจะถูกเบิกจ่ายคืนให้'],
        ['thoroughly', 'อย่างถี่ถ้วน', '/ˈθʌr.ə.li/', 'be tested thoroughly', 'ถูกทดสอบอย่างถี่ถ้วน'],
        ['handover', 'การส่งมอบงาน', '/ˈhændˌəʊ.vər/', 'complete the project handover', 'ส่งมอบงานโปรเจกต์เสร็จสมบูรณ์'],
      ],
      examples: [
        ['While the main stage was being tested, chairs were arranged neatly across the hall.', 'ขณะที่เวทีหลักกำลังถูกทดสอบ เก้าอี้ก็ถูกจัดวางอย่างเป็นระเบียบทั่วห้องโถง'],
        ['All equipment has been checked thoroughly before tomorrow’s handover.', 'อุปกรณ์ทั้งหมดได้รับการตรวจเช็กอย่างถี่ถ้วนแล้วก่อนการส่งมอบงานวันพรุ่งนี้'],
        ['Wait—did your suitcase get damaged on the morning bus?', 'เดี๋ยวนะ กระเป๋าเดินทางของคุณเสียหายบนรถบัสตอนเช้าหรือเปล่า?'],
        ['We had the banner reprinted overnight and were given a discount for the delay.', 'เราสั่งพิมพ์ป้ายใหม่ข้ามคืนและได้รับส่วนลดสำหรับความล่าช้าด้วย'],
      ],
      reading:
        "Hosting a weekend neighborhood craft fair took weeks of behind-the-scenes planning. Early in the month, thirty local booths were assigned, and simple setup rules were sent to every maker. Unfortunately, two days before opening, our team noticed that the main courtyard awning got damaged during a sharp gust of wind. Immediately, we had the torn frame repaired by a metal workshop so safety would not be compromised. On Friday afternoon, while string lights were being hung across the trees, handmade tables were unloaded and wiped clean. By sunset, every electrical cable had been inspected thoroughly by a licensed technician. Volunteers were given clear maps and complimentary meal vouchers before heading home to rest. Thanks to steady coordination, when neighbors arrived on Saturday morning, every path was cleared and the whole fair opened right on schedule.",
      listenQ: 'What did the team do immediately after noticing the courtyard awning got damaged?',
      listenA: 'They had the torn frame repaired by a metal workshop.',
      dictation: 'Volunteers were given clear maps before heading home.',
      listenNote: 'จับเสียงเชื่อม "were given" (/wə ˈɡɪv.ən/) และ "clear maps" (ลงเสียง /s/ ท้าย maps ชัดเจน)',
      drills: [
        {
          kind: 'dictogloss',
          prompt:
            'ฟังเสียงบทสรุปแล้วเลือกคู่คำที่เติมได้ตรงต้นฉบับ: "On Friday afternoon, while string lights _____ across the trees, handmade tables _____ and wiped clean."',
          answer: 'were being hung / were unloaded',
          choices: [
            'were being hung / were unloaded',
            'were hanging / had unloaded',
            'have been hung / got unloaded',
            'are being hung / were unloaded',
          ],
          explanation: 'จากบทอ่าน: "On Friday afternoon, while string lights were being hung across the trees, handmade tables were unloaded and wiped clean."',
          audio_text: 'On Friday afternoon, while string lights were being hung across the trees, handmade tables were unloaded and wiped clean.',
        },
        {
          kind: 'error_fix',
          prompt: 'แก้ประโยคทบทวนที่มีจุดพลาด 2 จุด: "Our office printer is repairing right now, so I went to the print shop and printed the posters myself by the staff."',
          answer: 'Our office printer is being repaired right now, so I went to the print shop and had the posters printed by the staff.',
          explanation: '1) เครื่องพิมพ์กำลังถูกซ่อม: is being repaired 2) ให้พนักงานร้านพิมพ์ให้: had the posters printed',
        },
        {
          kind: 'choice',
          prompt: 'ข้อใดใช้ Passive และ Causative ได้ถูกต้องครบทุกจุด?',
          answer: 'She was offered a ride home after her bicycle got damaged in the rain.',
          choices: [
            'It was offered her a ride home after her bicycle damaged in the rain.',
            'She was offered a ride home after her bicycle got damaged in the rain.',
            'She has offered a ride home after her bicycle was damaging in the rain.',
            'She was offering a ride home after her bicycle got damage in the rain.',
          ],
          explanation: 'กริยา 2 กรรมใช้ She was offered + เหตุบังเอิญภาษาพูดใช้ got damaged (V3)',
        },
        {
          kind: 'gap',
          prompt: 'เติมคำในช่องว่าง: Travel receipts must _____ uploaded to the system before the month ends.',
          answer: 'be',
          explanation: 'Modal Passive: must + be + V3 (uploaded)',
        },
        {
          kind: 'translation',
          prompt: 'แปลเป็นภาษาอังกฤษ: "งบประมาณได้รับการอนุมัติแล้ว และพรุ่งนี้เราจะให้ช่างมาติดตั้งเครื่องปรับอากาศใหม่"',
          answer: 'The budget has been approved, and tomorrow we will have a new air conditioner installed.',
          explanation: 'has been approved (Present Perfect Passive) + will have a new air conditioner installed (Causative อนาคต)',
        },
      ],
      writing:
        'สรุปประจำสัปดาห์ (6–8 ประโยค): เล่าการเตรียมงาน 1 ชิ้น การซ่อมแซมที่บ้าน หรืออัปเดตขั้นตอนงานในออฟฟิศ โดยรวม Passive อย่างน้อย 4 รูป (เช่น `is being V3`, `has been V3`, `must be V3`, `got + V3`, `had something done`)',
      writingSample:
        'Preparing our small studio for an open-house weekend required calm teamwork. First, the entrance sign had been faded by the sun, so we had a new wooden sign painted by a local artist. Yesterday, while extra display shelves were being assembled in the corner, sample boxes were organized by color. Unfortunately, one ceramic mug got chipped during unpacking, yet spare pieces were quickly placed on the shelf. Finally, all safety checks have been completed, and visitors will be welcomed with complimentary herbal tea tomorrow morning.',
      writingNote: 'ตรวจสอบความถูกต้องของรูปกริยาช่วยในทุก Passive (be/been/being/got) และตรวจว่า Causative ใช้ have/get + object + V3 ถูกต้อง',
      speakingTopic: 'Week 18 Mastery Speech: เบื้องหลังงานและการแก้ปัญหาหน้างาน (4 / 3 / 2 นาที)',
      speakingBullets: [
        'พูด 4 นาที → 3 นาที → 2 นาที อธิบายขั้นตอนการจัดงานหรือแก้ปัญหาที่ทำงาน/ที่บ้าน',
        'ใช้ให้ครบทั้ง Passive ปกติ (was/is being/has been V3), get + V3 และ have something done',
        'เน้นความชัดเจนของเสียงท้าย V3 และจังหวะลดเสียงของกริยาช่วย',
      ],
    },
  ]
);
