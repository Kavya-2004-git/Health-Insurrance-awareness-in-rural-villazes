// Mobile menu
function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
}

// ALL SCHEMES DATA
const schemes = [
  {
    name: "Ayushman Bharat – PMJAY",
    desc: "Provides ₹5 Lakhs health cover per family per year.",
    details: "https://pmjay.gov.in/about/pmjay",
    eligibility: "https://pmjay.gov.in",
    apply: "https://pmjay.gov.in"
  },
  {
    name: "Aarogyasri (Andhra Pradesh)",
    desc: "Free treatment for BPL families in AP hospitals.",
    details: "https://ysraarogyasri.ap.gov.in",
    eligibility: "https://ysraarogyasri.ap.gov.in",
    apply: "https://ysraarogyasri.ap.gov.in"
  },
  {
    name: "Aarogyasri (Telangana)",
    desc: "Free treatment for poor families in Telangana hospitals.",
    details: "https://aarogyasri.telangana.gov.in",
    eligibility: "https://aarogyasri.telangana.gov.in",
    apply: "https://aarogyasri.telangana.gov.in"
  },
  {
    name: "Employees’ State Insurance (ESI)",
    desc: "For salaried workers in organized sector.",
    details: "https://www.esic.gov.in",
    eligibility: "https://www.esic.gov.in",
    apply: "https://www.esic.gov.in"
  },
  {
    name: "Central Govt. Health Scheme (CGHS)",
    desc: "For central govt. employees, pensioners & dependents.",
    details: "https://cghs.gov.in",
    eligibility: "https://cghs.nic.in",
    apply: "https://cghs.nic.in"
  },
  {
    name: "Rashtriya Swasthya Bima Yojana (RSBY)",
    desc: "Insurance for Below Poverty Line (BPL) families.",
    details: "https://www.india.gov.in/spotlight/rashtriya-swasthya-bima-yojana",
    eligibility: "https://www.india.gov.in",
    apply: "https://www.india.gov.in"
  },
  {
    name: "Ministry of Health & Family Welfare (MoHFW)",
    desc: "Government body providing national health programs and support.",
    details: "https://www.mohfw.gov.in",
    eligibility: "https://www.mohfw.gov.in",
    apply: "https://www.mohfw.gov.in"
  }
];

// 🔥 Dynamic rendering (IMPORTANT FIX)
function loadSchemes() {
  const container = document.querySelector(".schemes-section");
  if (!container) return;

  let isApplyPage = container.classList.contains("apply-mode");

  let html = `<div class="scheme-container">`;

  schemes.forEach(scheme => {
    html += `
      <div class="scheme-card">
        <h3>${scheme.name}</h3>
        <p>${scheme.desc}</p>
    `;

    if (isApplyPage) {
      // APPLY PAGE BUTTONS
      html += `
        <a href="${scheme.eligibility}" target="_blank" class="button">
          Check Eligibility
        </a>
        <a href="${scheme.apply}" target="_blank" class="button">
          Apply
        </a>
      `;
    } else {
      // SCHEMES PAGE BUTTON
      html += `
        <a href="${scheme.details}" target="_blank" class="button">
          View Details
        </a>
      `;
    }

    html += `</div>`;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// Run
document.addEventListener("DOMContentLoaded", loadSchemes);

document.querySelector("form")?.addEventListener("submit", function(e){
  e.preventDefault(); // stops page refresh
  document.getElementById("successMsg").style.display = "block";
});

const inputs = document.querySelectorAll("input, select, textarea");

inputs.forEach(input => {
  input.addEventListener("change", () => {
    let filled = 0;
    inputs.forEach(i => {
      if (i.value) filled++;
    });
    let percent = Math.round((filled / inputs.length) * 100);
    document.getElementById("progress").innerText = percent + "%";
  });
});

function speakEnglish() {
  let msg = new SpeechSynthesisUtterance(
    "Please fill this survey carefully."
  );
  speechSynthesis.speak(msg);
}
