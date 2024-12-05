
document.addEventListener("DOMContentLoaded", (e) => {

	// Call for Income Table
	let InData = JSON.parse(localStorage.getItem("Income-Data")) ?? [];
	let InBOX = document.querySelector("#income-category-Data > tbody");
	let totalIncome = MakeTable(InData, InBOX, "green");

	// Call for Expance Table
	let ExData = JSON.parse(localStorage.getItem("Expance-Data")) ?? [];
	let ExBOX = document.querySelector("#expance-category-Data > tbody");
	let totalExpance = MakeTable(ExData, ExBOX, "red");

	// Net Total
	document.querySelector(
		"#Net"
	).innerHTML = `<h2 class="text-4xl font-bold py-2 text-center max-md:text-2xl">Net Total : ${(
		totalIncome - totalExpance
	).toLocaleString("en-IN")}₹ \\-</h2>`;

	function MakeTable(DATA, DATABOX, color) {
		let Total = 0;
		DATA.forEach((data, i) => {
			let tr = document.createElement("tr");
			tr.setAttribute("class", "border");

			let tdindex = document.createElement("td");
			tdindex.textContent = i + 1 + ".";

			let tdName = document.createElement("td");
			tdName.textContent = data.name;

			let tdCategory = document.createElement("td");
			tdCategory.textContent = data.category;

			let tdAmount = document.createElement("td");
			tdAmount.setAttribute(
				"class",
				`text-${color}-500 font-semibold text-right`
			);
			let NUM =
				(color == "red" ? "-" : "+") +
				Number(data.amount).toLocaleString("en-IN");
			tdAmount.textContent = NUM + " ₹ \\-";

			// Append td
			tr.appendChild(tdindex);
			tr.appendChild(tdCategory);
			tr.appendChild(tdName);
			tr.appendChild(tdAmount);

			// Append Li
			DATABOX.appendChild(tr);

			// Increase Total
			Total += parseInt(data.amount);
		});

		DATABOX.nextElementSibling.innerHTML += `<tr class="font-bold text-2xl"><td colspan="2">Total:</td><td></td><td class="text-${color}-500">${Total.toLocaleString(
			"en-IN"
		)}₹ \\-</td></tr>`;

		return Total;
	}
});
