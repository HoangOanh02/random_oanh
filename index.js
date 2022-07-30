document.querySelector("#random").onclick
= function() {
    const valueRandom = Math.floor(Math.random()*3);
    let member
    switch(valueRandom) {
        case 0:
            member = 'Hoàng Oanh'
          break;
        case 1:
            member = 'Hoàng Phụng'
          break;
        default:
            member = 'Trà Ny'
      }
    document.querySelectorAll("h2")[0].innerText = `Chúc mừng bạn ${member} `

};