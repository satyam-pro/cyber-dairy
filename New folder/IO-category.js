document.addEventListener("DOMContentLoaded", (e) => {
	LoadInExByLocalStorage();

	let myinput = document.querySelector("input");
	let mycategory = document.querySelector("select");

	let form = document.querySelector("form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		let name = myinput.value;
		let category = mycategory.value;

		// validation
		if (category == "S") {
			alert("Select Any Category");
			return;
		}

		if (category == "Income") {
			let li = document.createElement("li");
			li.textContent = name;
			document.querySelector("#income-category").append(li);

			// Update in local storage
			let InputCatogory =
				JSON.parse(localStorage.getItem("InputCatogory")) ?? [];
			InputCatogory.push(name);
			localStorage.setItem(
				"InputCatogory",
				JSON.stringify(InputCatogory)
			);
		} else if (category == "Expance") {
			let li = document.createElement("li");
			li.textContent = name;
			document.querySelector("#expance-category").append(li);

			// Update in local storage
			let ExpanceCatogory =
				JSON.parse(localStorage.getItem("ExpanceCatogory")) ?? [];
			ExpanceCatogory.push(name);
			localStorage.setItem(
				"ExpanceCatogory",
				JSON.stringify(ExpanceCatogory)
			);
		}

		// Reset the form
		form.reset();
	});

	// Firstly Load All The Data From Loacale Storage
	function LoadInExByLocalStorage() {
		let InputCatogory =
			JSON.parse(localStorage.getItem("InputCatogory")) ?? [];
		InputCatogory.map((name) => {
			let li = document.createElement("li");
			li.textContent = name;
			document.querySelector("#income-category").append(li);
		});

		let ExpanceCatogory =
			JSON.parse(localStorage.getItem("ExpanceCatogory")) ?? [];
		ExpanceCatogory.map((name) => {
			let li = document.createElement("li");
			li.textContent = name;
			document.querySelector("#expance-category").append(li);
		});
	}
});