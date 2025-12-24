import crypto from "crypto";

export type TelebirrPayload = {
  appId: string;
  shortCode: string;
  notifyUrl: string;
  returnUrl: string;
  outTradeNo: string;
  subject: string;
  amount: number;
  currency: "ETB";
};

export function signPayload(payload: TelebirrPayload, appKey: string) {
  const data = JSON.stringify(payload);
  return crypto.createHmac("sha256", appKey).update(data).digest("hex");
}

export function verifyPayload(payload: TelebirrPayload, signature: string, appKey: string) {
  return signPayload(payload, appKey) === signature;
}
