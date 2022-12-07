import Stripe from "stripe";

import { loadStripe } from "@stripe/stripe-js";

const stripeServerSide = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",
});

export { stripeServerSide };
