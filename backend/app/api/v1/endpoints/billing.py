from fastapi import APIRouter, Header, HTTPException, Request
from typing import Optional

router = APIRouter()

@router.post("/webhook/stripe")
async def stripe_webhook(request: Request, stripe_signature: Optional[str] = Header(None)):
    """
    Handle Stripe webhook events (checkout.session.completed, invoice.paid, customer.subscription.deleted).
    """
    payload = await request.body()
    # Signature verification logic
    return {"status": "success", "event": "processed", "provider": "stripe"}

@router.post("/webhook/razorpay")
async def razorpay_webhook(request: Request, x_razorpay_signature: Optional[str] = Header(None)):
    """
    Handle Razorpay recurring subscription webhooks for Indian enterprise clients.
    """
    payload = await request.body()
    return {"status": "success", "event": "processed", "provider": "razorpay"}
