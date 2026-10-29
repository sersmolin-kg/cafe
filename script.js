const menuTabs = document.querySelectorAll(".menu-tab");
const menuCards = document.querySelectorAll(".menu-card");

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    menuTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    menuCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];

dateInput.min = localToday;

document.querySelector("#booking-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name").trim();
  const phone = formData.get("phone").trim();
  const date = formData.get("date");
  const time = formData.get("time");
  const guests = formData.get("guests");

  const message =
    `Здравствуйте! Хочу забронировать столик.%0A` +
    `Имя: ${encodeURIComponent(name)}%0A` +
    `Телефон: ${encodeURIComponent(phone)}%0A` +
    `Дата: ${encodeURIComponent(date)}%0A` +
    `Время: ${encodeURIComponent(time)}%0A` +
    `Гостей: ${encodeURIComponent(guests)}`;

  // Замените номер на WhatsApp-номер кафе: код страны + номер, только цифры.
  const whatsappNumber = "996700000000";
  // window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener");
});

document.querySelector("#year").textContent = new Date().getFullYear();
