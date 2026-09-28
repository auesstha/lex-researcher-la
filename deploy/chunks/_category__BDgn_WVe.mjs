globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { C as createAstro, a as Fragment, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BKqYvUrJ.mjs";
import { t as createComponent } from "./compiler_BzXqPCge.mjs";
import { c as getBadgeClass, d as getStripClass, l as getBannerClass, s as getArticlesByCategory, t as CATEGORIES } from "./articles_BDfAGTqd.mjs";
import { t as $$Base } from "./Base_Gr6BRx0i.mjs";
//#region src/pages/category/[category].astro
var _category__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Category,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Category = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Category;
	const { category } = Astro.params;
	if (!category || !CATEGORIES[category]) return Astro.redirect("/categories");
	const cat = CATEGORIES[category];
	const articles = (await getArticlesByCategory(Astro.locals, category)).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
	const badgeClass = getBadgeClass(cat.color);
	const stripClass = getStripClass(cat.color);
	const bannerClass = getBannerClass(cat.color);
	function formatDate(iso) {
		return new Date(iso).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		});
	}
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": cat.label,
		"description": cat.description
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`bg-gradient-to-br ${bannerClass} text-white relative overflow-hidden`, "class")}><div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 25% 75%, white 1px, transparent 1px), radial-gradient(circle at 75% 25%, white 1px, transparent 1px); background-size: 36px 36px;"></div><div class="relative max-w-5xl mx-auto px-5 py-10 sm:py-16"><a href="/categories" class="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white/80 mb-6 transition-colors"><svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>All Categories</a><div class="text-4xl sm:text-5xl mb-4">${cat.icon}</div><h1 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">${cat.label}</h1><p class="text-sm sm:text-base opacity-75 max-w-2xl leading-relaxed">${cat.description}</p><div class="mt-5 flex items-center gap-3 text-xs text-white/50"><span>${articles.length} ${articles.length === 1 ? "article" : "articles"} published</span>${articles.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>·</span><span>Latest: ${formatDate(articles[0].publishedAt)}</span>` })}`}</div></div></div><div class="max-w-5xl mx-auto px-5 py-8 sm:py-12">${articles.length === 0 ? renderTemplate`<div class="text-center py-20"><div class="text-5xl mb-4">${cat.icon}</div><h2 class="font-serif text-xl font-bold text-slate-800 mb-2">No Articles Yet</h2><p class="text-stone-500 mb-6 text-sm">Be the first to publish research in ${cat.label}.</p><div class="flex flex-col sm:flex-row gap-3 justify-center"><a href="/admin/articles/new" class="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">Write an Article</a><a href="/categories" class="inline-flex items-center justify-center gap-2 border border-stone-200 hover:border-stone-400 text-stone-600 px-5 py-2.5 rounded-xl text-sm transition-colors">Browse Other Categories</a></div></div>` : renderTemplate`<div class="space-y-4 sm:space-y-5">${articles.map((article, i) => renderTemplate`<article class="bg-white rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all overflow-hidden group"><div${addAttribute(`h-1 w-full ${stripClass}`, "class")}></div><div class="p-5 sm:p-7"><div class="flex flex-wrap items-center gap-3 mb-3 sm:mb-4"><span${addAttribute(`text-xs font-semibold px-2.5 py-1 rounded-full border uppercase tracking-wide ${badgeClass}`, "class")}>${cat.label}</span><span class="text-xs text-stone-400">${article.readTime} min read</span><span class="text-xs text-stone-400 sm:ml-auto">${formatDate(article.publishedAt)}</span></div><h2${addAttribute(`font-serif font-bold text-slate-900 mb-2 sm:mb-3 leading-snug group-hover:text-amber-800 transition-colors ${i === 0 ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`, "class")}><a${addAttribute(`/articles/${article.slug}`, "href")}>${article.title}</a></h2><p class="text-stone-500 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base line-clamp-2 sm:line-clamp-none">${article.excerpt}</p><!-- Tags (hidden on mobile to save space) -->${article.tags.length > 0 && renderTemplate`<div class="hidden sm:flex flex-wrap gap-1.5 mb-4">${article.tags.map((tag) => renderTemplate`<span class="text-xs bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full">${tag}</span>`)}</div>`}<div class="flex items-center justify-between pt-4 border-t border-stone-100"><div class="flex items-center gap-2.5"><div class="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">${article.author.charAt(article.author.lastIndexOf(" ") + 1)}</div><div><a href="/lamia-akhter" class="text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors leading-none block">${article.author}</a><div class="text-xs text-stone-400 mt-0.5">${article.authorTitle}</div></div></div><a${addAttribute(`/articles/${article.slug}`, "href")} class="flex items-center gap-1.5 text-sm font-semibold text-slate-800 bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 hover:text-amber-800 px-4 py-2 rounded-xl transition-all">Read<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></div></div></article>`)}</div>`}</div>` })}`;
}, "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/category/[category].astro", void 0);
var $$file = "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/category/[category].astro";
var $$url = "/category/[category]";
//#endregion
//#region \0virtual:astro:page:src/pages/category/[category]@_@astro
var page = () => _category__exports;
//#endregion
export { page };
