document.querySelectorAll("#ok").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // ป้องกันการทำงานของลิงก์เดิม

    // เลื่อนหน้าไปยังส่วนที่มี id="item"
    document.querySelector("#item").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll("#ok01").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // ป้องกันการทำงานของลิงก์เดิม

    // เลื่อนหน้าไปยังส่วนที่มี id="item"
    document.querySelector("#item01").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll("#ok02").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // ป้องกันการทำงานของลิงก์เดิม

    // เลื่อนหน้าไปยังส่วนที่มี id="item"
    document.querySelector("#item02").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll("#ok03").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // ป้องกันการทำงานของลิงก์เดิม

    // เลื่อนหน้าไปยังส่วนที่มี id="item"
    document.querySelector("#item03").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll("#ok04").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // ป้องกันการทำงานของลิงก์เดิม

    // เลื่อนหน้าไปยังส่วนที่มี id="item"
    document.querySelector("#item04").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// เมื่อคลิกที่ปุ่ม Back to Top, เลื่อนขึ้นไปที่ด้านบนของหน้า
document.getElementById('backToTop').addEventListener('click', function() {
  window.scrollTo({
    top: 0, // เลื่อนขึ้นไปที่ตำแหน่ง top (ด้านบน)
    behavior: 'smooth' // เลื่อนแบบนุ่มนวล
  });
});

// ทำให้ปุ่มแสดงเมื่อผู้ใช้เลื่อนหน้าเว็บลง
window.onscroll = function() {
  let backToTopButton = document.getElementById('backToTop');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = 'block'; // แสดงปุ่มเมื่อเลื่อนลงมา
  } else {
    backToTopButton.style.display = 'none'; // ซ่อนปุ่มเมื่ออยู่ที่ด้านบน
  }
};
// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when link clicked (mobile)
navLinks.querySelectorAll('li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});





