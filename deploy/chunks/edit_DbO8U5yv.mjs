globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { C as createAstro, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BKqYvUrJ.mjs";
import { t as createComponent } from "./compiler_BzXqPCge.mjs";
import { f as saveArticle, i as getArticleById } from "./articles_BDfAGTqd.mjs";
import { t as $$AdminLayout } from "./AdminLayout_Cha49BKF.mjs";
import { t as $$CategorySelect } from "./CategorySelect_BgqYjZsq.mjs";
import { i as isAuthenticated } from "./auth_Dfd_3yDB.mjs";
//#region src/pages/admin/articles/[id]/edit.astro
var edit_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Edit,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Edit = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Edit;
	if (!isAuthenticated(Astro.request)) return Astro.redirect("/admin/login");
	const { id } = Astro.params;
	let article = await getArticleById(Astro.locals, id);
	if (!article) return Astro.redirect("/admin");
	let error = "";
	if (Astro.request.method === "POST") {
		const form = await Astro.request.formData();
		const title = (form.get("title") || "").trim();
		const slug = (form.get("slug") || "").trim();
		const category = form.get("category");
		const excerpt = (form.get("excerpt") || "").trim();
		const content = (form.get("content") || "").trim();
		const author = (form.get("author") || "").trim();
		const authorTitle = (form.get("authorTitle") || "").trim();
		const tags = (form.get("tags") || "").split(",").map((t) => t.trim()).filter(Boolean);
		const readTime = parseInt(form.get("readTime")) || 5;
		const published = form.get("published") === "1";
		if (!title || !slug || !category || !content || !author) error = "Please fill in all required fields (Title, Slug, Category, Author, Content).";
		else {
			await saveArticle(Astro.locals, {
				...article,
				title,
				slug,
				category,
				excerpt,
				content,
				author,
				authorTitle,
				tags,
				readTime,
				published,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			return Astro.redirect("/admin");
		}
	}
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": `Edit Article` }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-4xl"><!-- breadcrumb --><div class="flex items-center gap-2 text-xs text-stone-400 mb-5"><a href="/admin" class="hover:text-slate-700 transition-colors">All Articles</a><svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="text-stone-500 truncate max-w-xs">${article.title}</span></div>${error && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl mb-6 flex items-center gap-2.5"><svg class="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>${error}</div>`}<form method="POST" class="space-y-5"><!-- Basics --><div class="bg-white rounded-2xl border border-stone-200 p-6 space-y-5"><h2 class="text-xs font-bold text-stone-400 uppercase tracking-widest">Article Details</h2><div><label class="block text-sm font-semibold text-slate-700 mb-1.5">Title <span class="text-red-500">*</span></label><input type="text" name="title" required${addAttribute(article.title, "value")} class="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"></div><div><label class="block text-sm font-semibold text-slate-700 mb-1.5">URL Slug <span class="text-red-500">*</span></label><div class="flex items-stretch border border-stone-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-slate-900 focus-within:border-transparent transition"><span class="bg-stone-50 border-r border-stone-300 px-3 py-2.5 text-xs text-stone-400 font-mono flex items-center">/articles/</span><input type="text" name="slug" required${addAttribute(article.slug, "value")} class="flex-1 px-3 py-2.5 text-sm font-mono focus:outline-none bg-white"></div></div><div class="grid sm:grid-cols-2 gap-5"><div><label class="block text-sm font-semibold text-slate-700 mb-1.5">Category <span class="text-red-500">*</span></label>${renderComponent($$result, "CategorySelect", $$CategorySelect, { "selected": article.category })}</div><div><label class="block text-sm font-semibold text-slate-700 mb-1.5">Read Time (minutes)</label><input type="number" name="readTime" min="1" max="60"${addAttribute(article.readTime, "value")} class="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"></div></div><div><label class="block text-sm font-semibold text-slate-700 mb-1.5">Abstract / Excerpt</label><textarea name="excerpt" rows="3" class="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition resize-none">${article.excerpt}</textarea></div></div><!-- Body --><div class="bg-white rounded-2xl border border-stone-200 p-6 space-y-4"><div class="flex items-center justify-between"><h2 class="text-xs font-bold text-stone-400 uppercase tracking-widest">Article Body</h2><span class="text-xs text-stone-400">Blank line = new paragraph</span></div><textarea name="content" rows="22" required class="w-full px-4 py-3 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition resize-y font-mono leading-relaxed">${article.content}</textarea></div><!-- Author & Meta --><div class="bg-white rounded-2xl border border-stone-200 p-6 space-y-5"><h2 class="text-xs font-bold text-stone-400 uppercase tracking-widest">Author &amp; Metadata</h2><div class="grid sm:grid-cols-2 gap-5"><div><label class="block text-sm font-semibold text-slate-700 mb-1.5">Author Name <span class="text-red-500">*</span></label><input type="text" name="author" required${addAttribute(article.author, "value")} class="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"></div><div><label class="block text-sm font-semibold text-slate-700 mb-1.5">Title / Affiliation</label><input type="text" name="authorTitle"${addAttribute(article.authorTitle, "value")} class="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"></div></div><div><label class="block text-sm font-semibold text-slate-700 mb-1.5">Tags</label><input type="text" name="tags"${addAttribute(article.tags.join(", "), "value")} class="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"></div><div class="bg-stone-50 border border-stone-200 rounded-xl p-4"><label class="flex items-center gap-4 cursor-pointer select-none"><input type="hidden" name="published" value="0"><div class="relative"><input type="checkbox" name="published" value="1" id="pub-toggle"${addAttribute(article.published, "checked")} class="sr-only peer"><div class="w-11 h-6 bg-stone-300 rounded-full peer-checked:bg-emerald-500 transition-colors"></div><div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"></div></div><div><div class="text-sm font-semibold text-slate-700">Published</div><div class="text-xs text-stone-400">Toggle off to revert to draft</div></div></label></div></div><!-- Actions --><div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"><button type="submit" class="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"><svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Save Changes</button><a${addAttribute(`/articles/${article.slug}`, "href")} target="_blank" class="text-sm text-stone-500 hover:text-slate-800 px-5 py-3 rounded-xl border border-stone-200 hover:border-stone-400 text-center transition-all flex items-center justify-center gap-1.5"><svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>Preview Live</a><a href="/admin" class="text-sm text-stone-400 hover:text-slate-700 px-5 py-3 text-center transition-colors">Cancel</a></div></form></div>` })}`;
}, "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/admin/articles/[id]/edit.astro", void 0);
var $$file = "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/admin/articles/[id]/edit.astro";
var $$url = "/admin/articles/[id]/edit";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/articles/[id]/edit@_@astro
var page = () => edit_exports;
//#endregion
export { page };
