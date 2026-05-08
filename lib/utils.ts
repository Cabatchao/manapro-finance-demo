import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function xpf(value: number) { return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "XPF", maximumFractionDigits: 0 }).format(value); }
export function todayISO(){ return new Date().toISOString().slice(0,10); }
