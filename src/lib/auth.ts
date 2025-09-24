// src/lib/auth.ts
import { cookies } from "next/headers";
import {
  createServerClient,
  createBrowserClient,
  type CookieOptions,
} from "@supabase/ssr";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Para Server Components (lectura). No intenta escribir cookies.
 * Úsalo en pages/server components donde sólo lees datos.
 */
export async function createSupabaseRSC() {
  const store = await cookies();
  return createServerClient(url, anon, {
    cookies: {
      get(name: string) {
        return store.get(name)?.value;
      },
      // no-ops para evitar errores en RSC
      set() {},
      remove() {},
    },
  });
}

/**
 * Para Server Actions / Route Handlers (lectura+escritura).
 * Úsalo dentro de acciones con "use server" o en /api routes.
 */
export async function createSupabaseServer() {
  const store = await cookies();
  return createServerClient(url, anon, {
    cookies: {
      get(name: string) {
        return store.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        store.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        store.set({ name, value: "", ...options, maxAge: 0 });
      },
    },
  });
}

/** Para Client Components (navegador) */
export function createSupabaseBrowser() {
  return createBrowserClient(url, anon);
}
