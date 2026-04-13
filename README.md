# Huawei Technical Test

Repository ini berisi 3 task utama:

1. Backend Development (Express.js CRUD API)
2. Automation Testing (Weather Data Collection + Cleanup)
3. SQL Data Processing

---

# 📦 1. Backend Setup
Masuk ke folder backend:

```bash
cd backend
npm install
npm run dev
```

Server berjalan di:

```text
http://localhost:3000
```

Swagger documentation:

```text
http://localhost:3000/api-docs
```

---

# 🤖 2. Automation Setup
Masuk ke folder automation:

```bash
cd automation
npm install
npm run collect
npm run cleanup
```

Output file:
- Windows → `C:\cron`
- Linux → `/home/cron`

Linux cron production:

```bash
0 8,12,15 * * * /usr/bin/node /home/frida/automation/collect.js
0 0 * * * /usr/bin/node /home/frida/automation/cleanup.js
```

Windows testing menggunakan:
- Task Scheduler
- Task 08:00
- Task 12:00
- Task 15:00
- Cleanup 00:00

---

# 🗄️ 3. SQL Data Processing
Jalankan file berikut di MySQL / SQLyog:

```text
sql/data_processing.sql
```

Database yang digunakan:

```text
company_db
```

---

# 📝 Notes
Frontend tidak dibuat secara terpisah karena task berfokus pada API backend.
Pengujian frontend disimulasikan menggunakan Swagger UI.

