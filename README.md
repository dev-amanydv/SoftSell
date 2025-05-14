# 🚀 SoftSell

**SoftSell** is a modern, AI-powered SaaS platform for selling and distributing software products. It simplifies software sales with seamless payment integration, secure digital delivery, and an intuitive user interface — complete with an AI chatbot assistant.

![SoftSell Preview](./screenshots/homepage.png)

---

## ✨ Features

- 💾 Upload and manage software products
- 💳 Secure payment processing (Stripe)
- 📦 Instant download links for buyers after purchase
- 🎟️ Discount codes and promo campaigns
- 🤖 AI chatbot for instant user assistance (powered by OpenAI)
- 🧾 Receipts and transaction records
- 🔐 Admin-only access and authentication (upcoming)
- 📈 Future analytics and dashboard (in development)

---

## 📸 Screenshots

> Place your screenshots in the `/screenshots` folder and update the paths below.

| Homepage | AI Chatbot | Upload Interface |
|---------|------------|------------------|
| ![Home](./screenshots/homepage.png) | ![Chatbot](./screenshots/chatbot.png) | ![Upload](./screenshots/upload.png) |

---

## 🧰 Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion
- **Backend:** Next.js 14 (App Router), API Routes
- **Database:** MongoDB + Mongoose
- **AI:** OpenAI GPT-4 API
- **Payments:** Stripe
- **Deployment:** Vercel
- **Others:** Cloudflare Workers (for edge logic), TypeScript

---

## 💬 AI Chatbot Assistant

The chatbot is integrated into the bottom-right of the interface, offering users quick answers to common questions about SoftSell.

- Built with OpenAI's Chat API
- Only responds to queries about SoftSell
- Responsive, animated UI with spring-based motion

---

## 🚀 Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/softsell.git
cd softsell
