const FAQs = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const plus = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="31"
    fill="none"
    viewBox="0 0 30 31"
  >
    <path
      fill="#AD28EB"
      d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
    />
  </svg>`;

const minus = ` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="31"
    fill="none"
    viewBox="0 0 30 31"
  >
    <path
      fill="#301534"
      d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
    />
  </svg>`;

document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-button");
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".icon");
    button.addEventListener("click", () => {
      content.classList.toggle("active");
      if (content.classList.contains("active")) {
        icon.innerHTML = minus;
      } else {
        icon.innerHTML = plus;
      }
    });
  });
});
