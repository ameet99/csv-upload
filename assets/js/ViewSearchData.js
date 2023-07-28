const allRow = document.getElementsByTagName("tr");
const search = document.getElementById("search-btn");
search.addEventListener("click", searchDataInFile);

function searchDataInFile() {
  const input = document.getElementById("inputText").value.toLowerCase();
  for (let i = 0; i < allRow.length; i++) {
    // higlight the keyword
    const data = allRow[i].textContent.toLowerCase();
    if (data.includes(input)) {
      allRow[i].classList.add("highlight");
    } else {
      allRow[i].classList.remove("highlight");
    }
  }
}
