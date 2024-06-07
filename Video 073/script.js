function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr;
    if (views < 1000000) {
        viewStr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views;
    }

    let htmlCode = `
    <div class="container">
        <div class="cards">
            <div class="imgBox">
              <img src="${thumbnail}" alt="Thumbnail">
              <div class="durCapsule">${duration}</div>
            </div>
            <div class="textBox">
              <div class="title">
                  <h2>${title}</h2>
                </div>
                <div class="extraText">
                  ${cName} . ${viewStr} views . ${monthsOld} months ago
             </div>
            </div>
         </div>
    </div>`;

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + htmlCode;

}

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 727000, 2, "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
