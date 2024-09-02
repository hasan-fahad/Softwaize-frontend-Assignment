// Categories data fetch
document.addEventListener("DOMContentLoaded", function () {
  const url = "categories.csv"; // URL to your CSV file

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      // Parse CSV data
      const rows = data.split("\n");
      const categories = rows.slice(1).map((row) => {
        const [name, imageUrl, link] = row.split(",");
        return { name, imageUrl, link };
      });

      // Generate HTML for categories
      const container = document.querySelector(".variant");
      categories.forEach((category) => {
        if (category.name && category.imageUrl && category.link) {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
                        <img src="${category.imageUrl}" alt="${category.name}" />
                        <a href="${category.link}">${category.name}</a>
                    `;
          container.appendChild(listItem);
        }
      });
    })
    .catch((error) => console.error("Error fetching CSV:", error));
});

// toggle

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const links = sidebar.querySelectorAll("a");

  // Close the sidebar when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !sidebar.contains(event.target) &&
      !menuToggle.contains(event.target) &&
      menuToggle.checked
    ) {
      menuToggle.checked = false;
    }
  });

  // Close the sidebar when clicking a menu item
  links.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.checked = false;
    });
  });
});
