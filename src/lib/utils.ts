import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

/**
 * Format a Saudi phone number with elegant spacing.
 * Input: "0535557874" or "+966535557874"
 * Output: "+966 53 555 7874" (intl) or "053 555 7874" (local)
 */
export function formatPhone(phone: string, withCountryCode = true): string {
  let clean = phone.replace(/\D/g, '');
  if (clean.startsWith('966')) clean = clean.slice(3);
  if (clean.startsWith('0')) clean = clean.slice(1);
  if (clean.length === 9) {
    const formatted = `${clean.slice(0, 2)} ${clean.slice(2, 5)} ${clean.slice(5, 9)}`;
    return withCountryCode ? `+966 ${formatted}` : `0${clean.slice(0, 2)} ${clean.slice(2, 5)} ${clean.slice(5, 9)}`;
  }
  return phone;
}

/** Raw digits for tel: href */
export function phoneHref(phone: string): string {
  const clean = phone.replace(/\D/g, '');
  return clean.startsWith('966') ? `+${clean}` : clean.startsWith('0') ? `+966${clean.slice(1)}` : `+966${clean}`;
}
