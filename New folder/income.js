
document.addEventListener("DOMContentLoaded", (e) => {
	LoadInputByLocalStorage();

	let form = document.querySelector("form")
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		let name = document.querySelector("#Income-name").value;
		let amount = document.querySelector("#Income-Amount").value;
		let category = document.querySelector("select").value;

		let li = document.createElement("li");
		li.textContent = `${category} : ${name} : ${Number(
			amount
		).toLocaleString("en-IN")}₹`;
		document.querySelector("#income-category-Data").append(li);

		let incomeCategoryData =
			JSON.parse(localStorage.getItem("Income-Data")) ?? [];
		incomeCategoryData.push({ name, amount, category });
		localStorage.setItem("Income-Data", JSON.stringify(incomeCategoryData));

		// Reset the form
		form.reset();
	});

	function LoadInputByLocalStorage() {
		let IncomeCategory =
			JSON.parse(localStorage.getItem("InputCatogory")) ?? [];

		IncomeCategory.forEach((element) => {
			let option = document.createElement("option");
			option.value = element;
			option.textContent = element;
			document.querySelector("select").append(option);
		});

		let incomeCategoryData =
			JSON.parse(localStorage.getItem("Income-Data")) ?? [];
		incomeCategoryData.forEach((i) => {
			let li = document.createElement("li");
			li.textContent = `${i.category} : ${i.name} : ${Number(
				i.amount
			).toLocaleString("en-IN")}₹`;
			document.querySelector("#income-category-Data").append(li);
		});
	}
});
