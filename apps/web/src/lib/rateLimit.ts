export function checkRateLimit() {
	const filteredEvents = getRateLimit();
	const rateLimit = 10;
	if (filteredEvents.length > rateLimit) return true;
	return false;
}

export function getRateLimit() {
	const local = localStorage.getItem("events");
	if (!local) localStorage.setItem("events", JSON.stringify([]));
	const events = JSON.parse(local || "[]");
	const oneMinuteAgo = Date.now() - 60 * 1000;
	const filteredEvents = events.filter((event: number) => event > oneMinuteAgo);
	localStorage.setItem("events", JSON.stringify(filteredEvents));
	return filteredEvents.length;
}
