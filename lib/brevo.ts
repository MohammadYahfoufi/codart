// lib/brevo.ts
import * as Brevo from "@getbrevo/brevo";

export const brevo = (() => {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error("BREVO_API_KEY is not set");

  const client = new Brevo.TransactionalEmailsApi();
  client.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);
  return client;
})();
