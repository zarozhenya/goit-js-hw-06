const catedoriesRef = document.querySelector("#categories");
const categoriesItemsRef = catedoriesRef.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItemsRef.length}`);
console.log("\n");
categoriesItemsRef.forEach((item) => {
  const headingRef = item.querySelector("h2");
  const subListRef = item.querySelector("ul");
  const subListElementsRef = subListRef.querySelectorAll("li");
  console.log(`Category: ${headingRef.textContent}`);
  console.log(`Elements: ${subListElementsRef.length}`);
  console.log("\n");
});
