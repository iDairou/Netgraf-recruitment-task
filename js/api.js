class API {
	constructor() {
		this.url = "https://httpbin.org/post";
	}
	sendForm(data) {
		const options = {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		};

		return this._fetch(options, this.url);
	}
	_fetch(options, path, additionalPath = "") {
		const url = path + additionalPath;
		return fetch(url, options).then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		});
	}
}
export default API;
