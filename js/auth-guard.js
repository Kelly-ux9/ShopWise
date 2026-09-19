import { supabase } from "../supabase.js";

export async function requireUser({ role, redirect = "login.html" } = {}) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) { location.href = redirect; return null; }
  const userRole = user.user_metadata?.role;
  if (role && userRole && userRole !== role) { location.href = redirect; return null; }
  return user;
}
