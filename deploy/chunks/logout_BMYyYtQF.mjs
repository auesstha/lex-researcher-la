globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { t as createComponent } from "./compiler_BzXqPCge.mjs";
import { n as clearSessionCookie } from "./auth_Dfd_3yDB.mjs";
//#region src/pages/admin/logout.astro
var logout_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Logout,
	file: () => $$file,
	url: () => $$url
});
var $$Logout = createComponent(($$result, $$props, $$slots) => {
	return new Response(null, {
		status: 302,
		headers: {
			"Location": "/admin/login",
			"Set-Cookie": clearSessionCookie()
		}
	});
}, "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/admin/logout.astro", void 0);
var $$file = "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/admin/logout.astro";
var $$url = "/admin/logout";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/logout@_@astro
var page = () => logout_exports;
//#endregion
export { page };
