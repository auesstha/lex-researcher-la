globalThis.process ??= {};
globalThis.process.env ??= {};
//#region src/lib/auth.ts
var ADMIN_PASSWORD = "lex-admin-2026";
var SESSION_COOKIE = "lex_session";
var SESSION_VALUE = "authenticated";
function checkPassword(password) {
	return password === ADMIN_PASSWORD;
}
function isAuthenticated(request) {
	const match = (request.headers.get("cookie") || "").split(";").find((c) => c.trim().startsWith("lex_session="));
	if (!match) return false;
	return match.split("=")[1]?.trim() === SESSION_VALUE;
}
function createSessionCookie() {
	return `${SESSION_COOKIE}=${SESSION_VALUE}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`;
}
function clearSessionCookie() {
	return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`;
}
//#endregion
export { isAuthenticated as i, clearSessionCookie as n, createSessionCookie as r, checkPassword as t };
