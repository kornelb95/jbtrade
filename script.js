const arrow = document.querySelector("#arrow");
const contact = document.querySelector("#contact");
arrow.addEventListener("click", function() {
  contact.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
});
function scrollMenu(event, id) {
  console.log(event, id);
  event.preventDefault();
  const section = document.querySelector("#" + id);
  section.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
}
