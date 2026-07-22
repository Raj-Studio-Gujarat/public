export function getWhatsAppNumber(): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!number) {
    throw new Error("NEXT_PUBLIC_WHATSAPP_NUMBER is not set");
  }
  return number.replace(/\D/g, "");
}

export function getWhatsAppUrl(message: string): string {
  const phone = getWhatsAppNumber();
  const text = encodeURIComponent(message);
  // api.whatsapp.com is more reliable than wa.me for pre-filled draft text
  return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
}

/**
 * Opens WhatsApp with a pre-filled draft. Uses an anchor click (not window.open)
 * so browsers keep the user gesture and do not strip the text query.
 */
export function openWhatsApp(message: string): void {
  const url = getWhatsAppUrl(message);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
