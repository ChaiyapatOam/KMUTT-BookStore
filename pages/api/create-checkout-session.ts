import currency from "currency.js";
import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { stripeServerSide } from "@/lib/Stripe";
import { TApiErrorResp } from "../../types";

const checkoutSession = async (
  req: NextApiRequest,
  res: NextApiResponse<any | TApiErrorResp>
) => {
  try {
    const host = req.headers.origin;
    const referer = req.headers.referer;
    const body = JSON.parse(req.body);
    const formatedPrice = currency(body.price, {
      precision: 2,
      symbol: "",
    }).multiply(100);
    const session = await stripeServerSide.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["promptpay", "card"],
      phone_number_collection: { enabled: true },
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: ["TH"] },
      line_items: [
        {
          price_data: {
            currency: "thb",
            product_data: {
              name: body?.title,
              images: [body.image],
              description: body?.description,
            },
            unit_amount_decimal: formatedPrice.toString(),
          },
          quantity: 1,
        },
      ],
      success_url: `${host}/thank-you`,
      cancel_url: `${referer}?status=cancel`,
      metadata: {
        images: body.image,
      },
    });
    return res.status(200).json({ id: session.id });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong!! Please try again after sometime",
    });
  }
};

const handler = nc({ attachParams: true }).post(checkoutSession);

export default handler;
