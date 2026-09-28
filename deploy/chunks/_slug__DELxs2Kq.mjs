globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { C as createAstro, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BKqYvUrJ.mjs";
import { t as createComponent } from "./compiler_BzXqPCge.mjs";
import { a as getArticleBySlug, t as CATEGORIES, u as getPublishedArticles } from "./articles_BDfAGTqd.mjs";
import { t as $$Base } from "./Base_Gr6BRx0i.mjs";
//#region src/pages/articles/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const article = await getArticleBySlug(Astro.locals, slug);
	if (!article || !article.published) return Astro.redirect("/404");
	const catBadge = {
		"world-law": "bg-amber-100 text-amber-800 border border-amber-200",
		"river-law": "bg-blue-100 text-blue-800 border border-blue-200",
		"international-law": "bg-emerald-100 text-emerald-800 border border-emerald-200"
	};
	const catStrip = {
		"world-law": "bg-amber-400",
		"river-law": "bg-blue-400",
		"international-law": "bg-emerald-400"
	};
	function formatDate(iso) {
		return new Date(iso).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		});
	}
	const related = (await getPublishedArticles(Astro.locals)).filter((a) => a.id !== article.id && a.category === article.category).slice(0, 2);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": article.title,
		"description": article.excerpt
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="sticky top-14 sm:top-16 z-20 bg-white/95 backdrop-blur-sm border-b border-stone-100 sm:hidden"><div class="px-4 py-2.5 flex items-center gap-3"><a href="javascript:history.back()" class="flex items-center gap-1.5 text-xs font-medium text-stone-500 active:text-stone-900"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>Back</a><span class="h-4 w-px bg-stone-200"></span><span${addAttribute(`text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${catBadge[article.category]}`, "class")}>${CATEGORIES[article.category]?.label}</span><span class="text-xs text-stone-400 ml-auto">${article.readTime} min read</span></div></div><div class="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-14"><!-- Desktop breadcrumb --><nav class="hidden sm:flex items-center gap-2 text-sm text-stone-400 mb-10 flex-wrap"><a href="/" class="hover:text-stone-700 transition-colors">Home</a><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><a${addAttribute(`/category/${article.category}`, "href")} class="hover:text-stone-700 transition-colors">${CATEGORIES[article.category]?.label}</a><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="text-stone-600 truncate">${article.title}</span></nav><!-- Header --><header class="mb-8 sm:mb-10"><!-- Desktop badge --><span${addAttribute(`hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-5 ${catBadge[article.category]}`, "class")}>${CATEGORIES[article.category]?.label}</span><h1 class="serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-3 sm:mt-5 mb-4 sm:mb-5 leading-tight">${article.title}</h1><p class="text-base sm:text-xl text-stone-500 leading-relaxed mb-6 sm:mb-8 font-light">${article.excerpt}</p><!-- Author + meta strip --><div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-100"><div class="flex items-center gap-3"><div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 flex items-center justify-center text-white serif text-base sm:text-lg font-bold flex-shrink-0">${article.author.charAt(article.author.lastIndexOf(" ") + 1)}</div><div><a href="/lamia-akhter" class="font-semibold text-slate-900 hover:text-amber-700 transition-colors text-sm sm:text-base">${article.author}</a><div class="text-xs text-stone-500">${article.authorTitle}</div></div></div><div class="flex items-center gap-4 sm:gap-6 sm:ml-auto text-xs text-stone-500 flex-wrap"><div><div class="font-medium text-stone-700 text-xs uppercase tracking-wide mb-0.5">Published</div><div>${formatDate(article.publishedAt)}</div></div><div><div class="font-medium text-stone-700 text-xs uppercase tracking-wide mb-0.5">Read time</div><div>${article.readTime} minutes</div></div></div></div></header><!-- Color strip --><div${addAttribute(`h-0.5 w-16 rounded-full mb-8 ${catStrip[article.category]}`, "class")}></div><!-- Body --><div class="space-y-5">${article.content.split("\n\n").map((paragraph) => renderTemplate`<p class="text-slate-700 leading-8 text-base sm:text-lg">${paragraph}</p>`)}</div><!-- Tags -->${article.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-10 sm:mt-12 pt-8 border-t border-stone-200"><span class="text-xs text-stone-400 font-medium mr-1 self-center">Tags:</span>${article.tags.map((tag) => renderTemplate`<span class="text-xs bg-white text-stone-600 px-3 py-1.5 rounded-full border border-stone-200">${tag}</span>`)}</div>`}<!-- Back link mobile --><div class="mt-10 sm:hidden"><a${addAttribute(`/category/${article.category}`, "href")} class="inline-flex items-center gap-2 text-sm font-medium text-stone-600 bg-white border border-stone-200 px-4 py-2.5 rounded-xl active:bg-stone-50"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>More ${CATEGORIES[article.category]?.label} articles</a></div></div>${related.length > 0 && renderTemplate`<section class="border-t border-stone-200 bg-white py-10 sm:py-14"><div class="max-w-3xl mx-auto px-4 sm:px-6"><h2 class="serif text-lg sm:text-xl font-bold text-slate-900 mb-5 sm:mb-6">More in ${CATEGORIES[article.category]?.label}</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${related.map((r) => renderTemplate`<a${addAttribute(`/articles/${r.slug}`, "href")} class="group bg-stone-50 hover:bg-white border border-stone-200 hover:border-stone-300 rounded-2xl p-5 hover:shadow-md transition-all block"><div class="serif text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-800 leading-snug mb-2 transition-colors line-clamp-2">${r.title}</div><div class="text-xs text-stone-500 line-clamp-2 leading-relaxed">${r.excerpt}</div><div class="text-xs text-stone-400 mt-3 flex items-center gap-2"><span>${r.author}</span><span>·</span><span>${formatDate(r.publishedAt)}</span></div></a>`)}</div></div></section>`}` })}`;
}, "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/articles/[slug].astro", void 0);
var $$file = "C:/Users/Esstha/Music/law/lex-researcher-site/src/pages/articles/[slug].astro";
var $$url = "/articles/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/articles/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
