# 🏠 RateMyDorm

A **Next.js + TypeScript web application** that allows students to **rate, review, and explore schools and dormitories**.  
Inspired by RateMyProfessor and StaySavvy, this project helps students make informed choices about where to study and live.  

Built with a modern stack — **Prisma + PostgreSQL, Clerk Auth, Cloudinary, and shadcn/ui** — and designed for speed, usability, and clean UI.

---

## ✨ Features

- 🏫 **Schools & Dorms Directory** – Browse schools and dormitories with details and ratings.  
- 📝 **Reviews & Ratings** – Leave feedback about dorm quality, facilities, and overall experience.  
- 📷 **Image Upload** – Upload school/dorm photos via **Cloudinary**.  
- 🛠 **Multi-Step Add Forms** – Add new schools and dorms with **paginated forms** (Next / Submit flow).  
- 🔒 **Authentication** – Secure login and registration using **Clerk Auth**.  
- 📌 **Duplicate Check** – Prevent duplicate school entries (“School already exists”).  
- ⚡ **SSR Hydration** – Full SSR hydration with **React Query** for dynamic dashboard routes.  
- 🎨 **Modern UI** – Consistent and responsive UI with **shadcn/ui** + **Tailwind CSS**.  

---

## 🛠️ Tech Stack

**Frontend**
- [Next.js](https://nextjs.org/) (App Router)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com/) – UI components  
- [React Query](https://tanstack.com/query) – Data fetching & hydration  

**Backend**
- [Prisma](https://www.prisma.io/) – ORM  
- [PostgreSQL](https://www.postgresql.org/) – Database  
- [Cloudinary](https://cloudinary.com/) – Image uploads  
- [Clerk](https://clerk.com/) – Authentication  

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ratemydorm.git
cd ratemydorm
