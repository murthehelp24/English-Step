# English Steps — เว็บไซต์เรียนภาษาอังกฤษส่วนตัว

> ภาษาอังกฤษทีละก้าว ในทุกวันของคุณ

เว็บไซต์เรียนภาษาอังกฤษส่วนตัว พัฒนาด้วย Next.js 15 (App Router, TypeScript), Tailwind CSS, Supabase (Auth/Postgres), Web Speech API สำหรับฝึกฟัง และ Server AI Tutor พร้อมหลักสูตรครบ 112 วัน (16 สัปดาห์) 740 แบบฝึกหัด

---

## 🎨 ทิศทางการออกแบบที่เลือก (Nordic Bright — ปรับตามคำสั่งล่าสุดของผู้ใช้)

- **ดีไซน์หลัก**: Nordic Bright สไตล์มินิมอลอ่านง่าย พื้นสะอาดตัดกับบล็อกสีพาสเทลอุ่น (`#FFF7DF` เหลืองเนยสำหรับบทเรียน, `#EAF4FF` ฟ้าอ่อนสำหรับทบทวน, `#F5F5F2` เทาหินนุ่ม), ปุ่มหลักสีส้มสด (`#FF5A1F`) แบบ Flat ไม่มีขอบเงา 3 มิติ และตัวอักษรขนาดใหญ่ (`IBM Plex Sans Thai` + `Plus Jakarta Sans`)
- **ธีม**: รองรับ 3 โหมดตั้งแต่เวอร์ชันแรก:
  - **Light (สว่าง)**: พื้นขาวสะอาด (`#FFFFFF`), บล็อกบทเรียนสีเหลืองเนย (`#FFF7DF`), ข้อความสีเข้ม (`#191919`), ปุ่มหลักสีส้ม (`#FF5A1F`)
  - **Dark (มืด)**: พื้นถ่าน (`#121417`), บล็อกบทเรียนสีอุ่นเข้ม (`#2B2416`), บล็อกทบทวนสีน้ำเงินเข้ม (`#162332`), ข้อความสว่างนวล (`#F4F4F1`)
  - **System (ตามระบบ)**: ปรับอัตโนมัติตาม OS พร้อมสคริปต์ป้องกันแสงวาบก่อนโหลด (Anti-FOUC)

---

## 🚀 ฟังก์ชันที่พัฒนาเสร็จสมบูรณ์พร้อมใช้งานจริง

1. **หน้า Today (`/`)**:
   - แถบนำทาง Nordic Bright พร้อมตัวแสดงวันที่ปัจจุบัน (`วันที่ X / 112`), จำนวนข้อรอทบทวน, และตัวสลับธีม สว่าง/มืด/ตามระบบ
   - การ์ดบทเรียนวันนี้ (`#FFF7DF`) ดึงบทถัดไปอัตโนมัติ พร้อมประโยคสำคัญ ปุ่มฟังเสียงอ่าน และปุ่มเริ่มเรียน
   - การ์ดสมุดทบทวน (`#EAF4FF`) แสดงตัวอย่างประโยคที่ผิดขีดฆ่าเทียบกับประโยคที่ถูก และปุ่มไปหน้าทบทวน
   - แถบสัปดาห์ปัจจุบัน (Week strip) แสดงสถานะ 7 วัน

2. **ห้องเรียนรายวัน (`/lessons/[id]`) แบบ Step-by-Step 5 ขั้นตอน (ครบ 112 วัน)**:
   - แถบนำทาง 5 ขั้น: **1. ปูพื้นฐาน**, **2. คำศัพท์**, **3. ฝึกฟังและอ่าน**, **4. แบบฝึก**, **5. เขียนและจบบท**
   - เสียงอ่านด้วย **Web Speech API TTS** ปรับความเร็วเสียงได้ (`ช้า 0.75x` / `ปกติ 1.0x`) มีปุ่มหยุดและฟังซ้ำ
   - คำศัพท์ประจำวันพร้อมความหมาย ตัวอย่าง และปุ่มบุ๊กมาร์ก
   - แบบฝึกหัดประจำวัน 740 ข้อ (Recall, Gap, Reorder, Comprehension, Translation, Dictation) โหมดโฟกัสทีละข้อ (สลับดูทั้งหมดในหน้าเดียวได้) ตรวจคำตอบด้วย deterministic logic พร้อมขอคำใบ้และคำอธิบายหลังตอบ
   - ระบบบันทึกข้อผิดพลาดเข้าสมุดทบทวนอัตโนมัติเมื่อตอบผิด
   - งานเขียนประจำวัน (Writing Challenge) พร้อมตัวอย่างและ Autosave
   - **ครู AI ประจำห้องเรียน**: รู้บริบทของบทเรียนปัจจุบัน ให้คำอธิบายภาษาไทย ให้คำใบ้ และตรวจประโยค

3. **คลังบทเรียน 16 สัปดาห์ (`/weeks` และ `/weeks/[id]`)**:
   - รวมครบ 112 วัน 16 สัปดาห์ พร้อมช่องค้นหาตามหัวข้อหรือคำศัพท์ และสรุปผลประจำสัปดาห์

4. **สมุดทบทวนข้อผิดพลาด (`/review`)**:
   - ระบบ **Spaced Repetition** 4 ขั้น (1, 3, 7, 14 วัน)
   - ตอบถูกเลื่อนขั้น ตอบผิดรีเซ็ตกลับขั้น 1 นัดทบทวนใน 1 วัน

5. **คลังคำศัพท์ (`/vocabulary`)**:
   - รวมคำศัพท์ทั้งหมด ค้นหา กรองตามสัปดาห์ เฉพาะคำที่บันทึก และฟังเสียงอ่านได้ทุกคำ

6. **หน้าพัฒนาการ (`/progress`)**:
   - สถิติจริงจาก attempts (บทที่จบแล้ว, จำนวนแบบฝึกที่ทำ, ความแม่นยำเฉลี่ย, งานเขียนที่บันทึก, คำศัพท์ที่บันทึก) และแถบความคืบหน้า 16 สัปดาห์

7. **หน้าตั้งค่าและความเป็นเจ้าของข้อมูล (`/settings`)**:
   - สลับธีม Light / Dark / System
   - กำหนดเวลาเรียนเป้าหมายต่อวัน และเขตเวลา `Asia/Bangkok`
   - **Export ข้อมูล (JSON)** สำหรับสำรองข้อมูลได้ตลอดเวลา
   - **Import ข้อมูล (JSON)** สำหรับกู้คืนข้อมูล
   - ล้างข้อมูลเพื่อเริ่มใหม่ (Reset Data)

8. **หน้า Onboarding (`/onboarding`) และ Login (`/login`)**:
   - ตั้งชื่อ ประเมินพื้นฐานเบื้องต้น และตั้งเวลาเรียน
   - Login เฉพาะเจ้าของ รองรับทั้ง Local Mode และ Supabase Auth RLS

---

## 🛠️ วิธีเปิดใช้งานในเครื่อง (Local Development)

### 1. เข้าสู่โฟลเดอร์โปรเจกต์
```bash
cd "/Users/attachai/Desktop/English Step/english-steps"
```

### 2. ติดตั้ง Dependencies (หากยังไม่ได้ติดตั้ง)
```bash
npm install
```

### 3. รัน Development Server
```bash
npm run dev
```
เปิดเบราว์เซอร์ไปที่: `http://localhost:3000`

### 4. รัน Production Build & Test
```bash
# รัน Unit Tests ตรวจสอบหลักสูตร 112 วัน และ 740 ข้อ
npx tsx tests/curriculum.test.ts

# รัน Build (รวม Typecheck + ESLint + Next.js Bundle)
npm run build

# รัน Production Server
npm run start
```

---

## ☁️ วิธีเชื่อมต่อบริการจริง (เมื่อพร้อมใช้งาน Production)

### 1. ตั้งค่า Supabase (Database & Auth)
1. สร้างโปรเจกต์ใหม่ที่ [Supabase](https://supabase.com)
2. ไปที่ **SQL Editor** แล้วรันไฟล์ Schema Migration:
   `supabase/migrations/20261108000000_init_english_steps.sql`
3. คัดลอกค่าจาก Supabase Settings มาใส่ใน `.env.local` (อ้างอิงจาก `.env.example`):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJh...
   SUPABASE_SERVICE_ROLE_KEY=eyJh...
   ```
4. รันสคริปต์ Seed บทเรียน 112 วันเข้าสู่ฐานข้อมูล Supabase:
   ```bash
   npx tsx scripts/seed-curriculum.ts
   ```

### 2. ตั้งค่า AI Provider (Gemini / OpenAI / Claude)
1. เพิ่ม Key ใน `.env.local`:
   ```
   AI_PROVIDER=gemini
   AI_API_KEY=AIzaSy...
   AI_MODEL=gemini-1.5-flash
   AI_MONTHLY_BUDGET_USD=10.00
   ```
   *(หากยังไม่ใส่ API Key ระบบจะใช้ Intelligent Curriculum Tutor Engine ใน Server ซึ่งทำงานได้ทันทีโดยไม่มีค่าใช้จ่าย)*

### 3. Deploy บน Vercel
1. เชื่อมต่อ Git Repository กับ [Vercel](https://vercel.com)
2. ตั้งค่า Environment Variables ใน Vercel Dashboard ตาม `.env.example`
3. กำหนด Root Directory เป็น `english-steps` หาก deploy จาก repository รวม
4. กด Deploy

---

## 📋 สถานะการทำงานจริง vs บริการภายนอก

| ส่วนของระบบ | สถานะปัจจุบัน | หมายเหตุ |
|---|---|---|
| **ดีไซน์ Nordic Bright (ทุกหน้า)** | ✅ ใช้งานจริง 100% | รองรับ Light / Dark / System พร้อมตัวอักษรขนาดอ่านง่าย |
| **เนื้อหา 112 วัน / 16 สัปดาห์** | ✅ ใช้งานจริง 100% | นำเข้าจาก curriculum.json ครบ 740 แบบฝึกหัด |
| **ระบบทำแบบฝึกหัด & ตรวจคำตอบ** | ✅ ใช้งานจริง 100% | ตรวจจับคำตอบ ยืดหยุ่นเรื่อง punctuation |
| **ระบบ Spaced Repetition (1/3/7/14 วัน)** | ✅ ใช้งานจริง 100% | เลื่อน/ลด stage ตามผลตอบ |
| **เสียงอ่านบทเรียน (TTS)** | ✅ ใช้งานจริง 100% | ใช้ Web Speech API ในเบราว์เซอร์ ไม่ต้องพึ่งพา API ภายนอก |
| **Autosave & ประวัติคำตอบ** | ✅ ใช้งานจริง 100% | บันทึกใน LocalStorage ทันที และมี Export/Import JSON |
| **ครู AI ประจำห้องเรียน** | ✅ ใช้งานจริงในโหมด Intelligent Server Engine | พร้อมเชื่อมต่อ Gemini/OpenAI ทันทีเมื่อใส่ API key |
| **ฐานข้อมูล Supabase PostgreSQL & Auth** | ⏳ พร้อมโครงสร้าง Migration & Seed Script | มี Local Mode รองรับ รอใส่ URL/Key เมื่อจะขึ้น Cloud |
