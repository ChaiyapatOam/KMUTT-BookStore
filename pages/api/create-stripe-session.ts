const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import type { NextApiRequest, NextApiResponse } from "next";
async function CreateStripeSession(req: NextApiRequest, res: NextApiResponse)  {
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
};
export default CreateStripeSession;