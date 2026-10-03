const db = supabase.createClient("https://eidrjlpbrbghpqterpjf.supabase.co","sb_publishable_EdN-GqKXO978IMHqCVz8lQ_jhBPdq2K");

async function signup(email, password) {
  const { error } = await db.auth.signUp({ email, password });
  if (error) alert(error.message);
  else alert("Account created, now click Login");
}

async function login(email, password) {
  const { error } = await db.auth.signInWithPassword({ email, password });
  if (error) alert(error.message);
  else window.location.href = "./products_page.html";
}

async function logout() {
  await db.auth.signOut();
  window.location.href = "./login.html";
}

async function requirelogin() {
  const { data } = await db.auth.getSession();
  if (!data.session) window.location.href = "./login.html";
}