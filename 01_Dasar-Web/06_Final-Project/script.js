const beritas = document.querySelectorAll("#content article");
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.addEventListener("click", function () {
    // Ambil id artikel yang sesuai dengan section yang diklik
    const beritaId = "berita" + this.id.slice(-1);

    // Seleksi artikel yang sesuai di dalam elemen dengan ID "content"
    const berita = document.querySelector("#content #" + beritaId);

    beritas.forEach((article) => {
      if (article.id == beritaId) {
        article.style.display = "block";
      }
      if (article.id != beritaId) {
        article.style.display = "none";
      }
    });
  });
});
