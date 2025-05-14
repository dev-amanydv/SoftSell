import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'https://your-portfolio-site.com', // replace with your domain or localhost
    'X-Title': 'Aman Yadav Portfolio Chatbot',
  },
});

export async function POST(req: Request) {
  const body = await req.json();
  const messages = body.messages;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ reply: 'Invalid message format.' }, { status: 400 });
  }
  
  try {
    const completion = await openai.chat.completions.create({
      model: 'openrouter/auto', // ✅ Free & dynamic model
      messages: [
        {
          role: 'system',
          content: `
  You are a helpful and professional AI assistant for SoftSell.

  Your job is to answer only questions related to the SoftSell platform based on the following information:

  - SoftSell is a platform designed to simplify software sales and distribution.
  - It allows developers and companies to upload and list software products for sale.
  - Handles all payment processing and secure delivery automatically.
  - Buyers receive instant download links after purchase.
  - Developers can set prices and manage their product listings.
  - Promo codes and discount campaigns are supported.
  - SoftSell charges a small commission per transaction.
  - The platform is designed with a focus on user-friendly UI and secure transactions.
  - It is built using modern web technologies including Next.js, MongoDB, Tailwind, and Stripe.

  If the user asks anything outside of SoftSell, politely respond that you are only available to answer questions about the SoftSell platform.
          `,
        },
        ...messages,
      ],
      max_tokens: 1024
    });

    console.log('OpenAI response:', completion);

    if (!completion.choices || completion.choices.length === 0) {
      return NextResponse.json({ reply: 'No response from AI. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ reply: completion.choices[0].message.content });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json({ reply: 'Sorry, there was an error with the AI response. Try again later.' }, { status: 500 });
  }
}
