# E-Portfolio (Modern Blue)

เว็บไซต์แฟ้มสะสมผลงานออนไลน์สำหรับนักเรียน สร้างด้วย HTML5, CSS3 และ JavaScript ล้วน (ไม่ต้องติดตั้งเครื่องมือเพิ่ม) ธีมสีน้ำเงิน Navy / Royal / Light Blue รองรับมือถือและคอมพิวเตอร์

## หน้าและฟีเจอร์
- **Home** – รูปโปรไฟล์ ชื่อ และคำแนะนำตัว
- **About Me** – ประวัติส่วนตัวและประวัติการศึกษา
- **Skills** – คอมพิวเตอร์, Programming, AI, Robotics (แถบระดับทักษะแบบเคลื่อนไหว)
- **Activities** – กิจกรรมพร้อมภาพและวันที่
- **Certificates** – แกลเลอรีเกียรติบัตร คลิกเพื่อขยายภาพ
- **Projects** – โครงงาน (ESP32/IoT, AI, Robotics, Web) และส่วน **Code Showcase** พร้อมลิงก์ GitHub
- **Contact** – อีเมล เบอร์โทร และ Social Media
- เมนูเลื่อนไปยังแต่ละส่วนแบบ Smooth Scrolling, ไฮไลต์เมนูตามหน้าที่กำลังดู, ปุ่ม Back to Top

## โครงสร้างไฟล์
```
index.html   เนื้อหาทั้งหมด
style.css    สีและการจัดหน้า (ปรับสีที่ตัวแปร :root)
script.js    เมนู, แอนิเมชัน, lightbox, ปุ่ม Back to Top
assets/      รูปภาพ (ตอนนี้เป็นรูป Placeholder แบบ SVG)
```

## วิธีแก้ข้อมูลและเปลี่ยนรูป
1. เปิด `index.html` แล้วแทนข้อความในวงเล็บ `[...]` ด้วยข้อมูลจริงของคุณ
2. ใส่รูปของคุณในโฟลเดอร์ `assets/` แล้วแก้ชื่อไฟล์ใน `src="..."` (รองรับ .jpg .png .webp) เช่น `assets/profile.svg` → `assets/profile.jpg`
3. ส่วน Code Showcase: แก้โค้ดตัวอย่างและเปลี่ยนลิงก์ `https://github.com/YOUR-USERNAME/YOUR-REPO` เป็น Repository ของคุณ
4. ส่วน Contact: แก้อีเมลและลิงก์ Social Media ที่มีคำว่า `YOUR-...`
5. ปรับระดับทักษะที่ `data-level="..."` (0–100)

## เผยแพร่ด้วย GitHub Pages
1. สร้าง Repository ใหม่บน GitHub ตั้งเป็น **Public** (เช่น `eportfolio`)
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ (`index.html`, `style.css`, `script.js`, `README.md`, โฟลเดอร์ `assets`) ไปที่ branch `main`
3. ไปที่ **Settings → Pages**
4. ที่ *Build and deployment* เลือก **Deploy from a branch** → Branch: `main` / โฟลเดอร์ `/ (root)` → **Save**
5. รอ 1–2 นาที เว็บจะอยู่ที่ `https://<ชื่อผู้ใช้>.github.io/<ชื่อ-repo>/`

> ใช้เฉพาะ path แบบสัมพัทธ์ (เช่น `assets/...`) ทำให้เว็บทำงานได้ทั้งใน Repository ปกติและแบบ `<ชื่อผู้ใช้>.github.io`

## หมายเหตุ
- ข้อมูลส่วนตัวทั้งหมดเป็น Placeholder ต้องแก้เป็นข้อมูลจริงก่อนเผยแพร่
- ไอคอนและฟอนต์ Prompt โหลดจาก CDN (Font Awesome, Google Fonts) จึงต้องมีอินเทอร์เน็ตตอนเปิดเว็บ
