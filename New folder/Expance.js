document.addEventListener("DOMContentLoaded", (e) => {
	LoadInputByLocalStorage();
	let form = document.querySelector("form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		let name = document.querySelector("#expance-name").value;
		let amount = document.querySelector("#expance-Amount").value;
		let category = document.querySelector("select").value;

		let li = document.createElement("li");
		li.textContent = `${category} : ${name} : ${Number(
			amount
		).toLocaleString("en-IN")}₹`;
		document.querySelector("#expance-category-Data").append(li);

		let expanceCategoryData =
			JSON.parse(localStorage.getItem("Expance-Data")) ?? [];
		expanceCategoryData.push({ name, amount, category });
		localStorage.setItem(
			"Expance-Data",
			JSON.stringify(expanceCategoryData)
		);

		// Reset the form
		form.reset();
	});

	function LoadInputByLocalStorage() {
		let expanceCategory =
			JSON.parse(localStorage.getItem("ExpanceCatogory")) ?? [];

		expanceCategory.forEach((element) => {
			let option = document.createElement("option");
			option.value = element;
			option.textContent = element;
			document.querySelector("select").append(option);
		});

		let expanceCategoryData =
			JSON.parse(localStorage.getItem("Expance-Data")) ?? [];
		expanceCategoryData.forEach((i) => {
			let li = document.createElement("li");
			li.textContent = `${i.category} : ${i.name} : ${Number(
				i.amount
			).toLocaleString("en-IN")}₹`;
			document.querySelector("#expance-category-Data").append(li);
		});
	}
});