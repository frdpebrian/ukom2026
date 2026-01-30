// Tunggu halaman siap
document.addEventListener("DOMContentLoaded", () => {

  // ===== LOGIN =====
  window.login = function(){
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;
    const err = document.getElementById("error");

    if(u === "ferdy" && p === "123"){
      document.getElementById("loginWrap").style.display = "none";
      document.getElementById("portfolio").classList.remove("hidden");
      animateSkills();
    } else {
      err.innerText = "Username atau password salah!";
    }
  };

  // ===== THEME =====
  window.toggleTheme = function(){
    document.body.classList.toggle("dark");
  };

  window.scrollToBiodata = function(){
    document.getElementById("biodata").scrollIntoView({behavior:"smooth"});
  };

  window.contact = function(){
    alert("Terima kasih sudah mengunjungi portofolio saya 🚀");
  };

  window.sendMessage = function(e){
    e.preventDefault();
    alert("Pesan berhasil dikirim 👍");
  };

  // ===== SKILL BAR =====
  function animateSkills(){
    document.querySelectorAll(".bar div").forEach(bar=>{
      bar.style.width = bar.dataset.skill + "%";
    });
  }

  // ===== STAR BACKGROUND (AMAN) =====
  const canvas = document.getElementById("stars");
  if(canvas){
    const ctx = canvas.getContext("2d");

    function resize(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    let stars = [];
    for(let i=0;i<120;i++){
      stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*1.5,
        s:Math.random()*0.6+0.2
      });
    }

    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle="white";

      stars.forEach(star=>{
        ctx.beginPath();
        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
        ctx.fill();

        star.y+=star.s;
        if(star.y>canvas.height){
          star.y=0;
          star.x=Math.random()*canvas.width;
        }
      });

      requestAnimationFrame(draw);
    }
    draw();
  }

});
// MENU DOTS
window.toggleMenu = function(){
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

// LOGOUT
window.logout = function(){
  document.getElementById("portfolio").classList.add("hidden");
  document.getElementById("loginWrap").style.display = "flex";
  document.getElementById("dropdownMenu").style.display = "none";
};
document.querySelectorAll(".dropdown a").forEach(item=>{
  item.addEventListener("click",()=>{
    document.getElementById("dropdownMenu").style.display = "none";
  });
});