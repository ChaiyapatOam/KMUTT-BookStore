import { NextApiRequest, NextApiResponse } from "next";

import { CURRENCY, MIN_AMOUNT, MAX_AMOUNT } from "../../../config";
import { formatAmountForStripe } from "@/utils/stripe-helper";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { body } = req.body;
      const redirectURL =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://kmutt-book-store.vercel.app/';
    
    const transformedItem = {
      price_data: {
        currency: 'thb',
        product_data: {
          name: body?.title,
          images: [body?.image],
        },
        unit_amount: body.price * 100,
      },
      description: body?.description,
      quantity: body.quantity,
    };
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [transformedItem],
      mode: 'payment',
      success_url: redirectURL + '?status=success',
      cancel_url: redirectURL + '?status=cancel',
      metadata: {
        images: body.image,
      },
    });
    
    res.json({ id: session.id });
    } catch (err) {
      if (err instanceof Error)
        res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
