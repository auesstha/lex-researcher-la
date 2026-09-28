globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { C as createAstro, d as renderTemplate, p as renderHead } from "./server_BKqYvUrJ.mjs";
import { t as createComponent } from "./compiler_BzXqPCge.mjs";
import { t as renderScript } from "./script_t-CVJANn.mjs";
/* empty css                 */
import { i as isAuthenticated, r as createSessionCookie, t as checkPassword } from "./auth_Dfd_3yDB.mjs";
//#region src/pages/admin/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Login = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Login;
	if (isAuthenticated(Astro.request)) return Astro.redirect("/admin");
	let error = "";
	if (Astro.request.method === "POST") {
		const password = (await Astro.request.formData()).get("password");
		if (checkPassword(password)) return new Response(null, {
			status: 302,
			headers: {
				"Location": "/admin",
				"Set-Cookie": createSessionCookie()
			}
		});
		error = "Incorrect password. Please try again.";
	}
	return renderTemplate`<html lang="en" class="h-full"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Sign In — Lex Researcher Admin</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">${renderHead($$result)}</head><body class="h-full min-h-screen bg-slate-900 flex items-center justify-center p-4" style="font-family:'Inter',sans-serif"><!-- Background pattern --><div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image:radial-gradient(circle at 20% 50%, white 1px, transparent 1px),radial-gradient(circle at 80% 20%, white 1px, transparent 1px);background-size:40px 40px;"></div><!-- Amber glow --><div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div><div class="relative w-full max-w-sm"><!-- Logo block --><div class="text-center mb-8"><a href="/" class="inline-flex flex-col items-center gap-3"><div class="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30"><span class="text-slate-900 font-black text-2xl" style="font-family:'Playfair Display',serif">L</span></div><div><div class="text-white font-bold text-xl" style="font-family:'Playfair Display',serif">Lex Researcher</div><div class="text-slate-500 text-sm mt-0.5">Editorial Access Portal</div></div></a></div><!-- Card --><div class="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"><!-- Card header --><div class="px-7 pt-7 pb-5 border-b border-slate-700"><h1 class="text-white font-bold text-lg leading-none" style="font-family:'Playfair Display',serif">Sign in to Admin</h1><p class="text-slate-400 text-sm mt-1.5">Manage articles and content for Lex Researcher.</p></div><!-- Form --><div class="px-7 py-6">${error && renderTemplate`<div class="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl mb-5 flex items-center gap-2.5"><svg class="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>${error}</div>`}<form method="POST" class="space-y-4"><div><label class="block text-sm font-medium text-slate-300 mb-2">Password</label><div class="relative"><input type="password" name="password" id="password" required autofocus placeholder="Enter admin password" class="w-full bg-slate-900 border border-slate-600 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition"><button type="button" onclick="togglePwd()" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors p-1"><svg id="eye-icon" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></button></div></div><button type="submit" class="w-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-900 font-bold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"><svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>Sign In to Editorial Panel</button></form><!-- Hint --><div class="mt-5 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3"><div class="text-xs text-slate-500 font-medium mb-1">Default password</div><div class="text-xs text-slate-400 font-mono">lex-admin-2026</div><div class="text-xs text-slate-600 mt-1">Set <code class="text-slate-500">ADMIN_PASSWORD</code> env var to change.</div></div></div></div><div class="text-center mt-5"><a href="/" class="text-sm text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1.5"><svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>Back to website</a></div></div>${renderScript($$result, "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/admin/login.astro", void 0);
var $$file = "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/admin/login.astro";
var $$url = "/admin/login";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/login@_@astro
var page = () => login_exports;
//#endregion
export { page };
