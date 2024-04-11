const input = document.querySelector("#input");
const form = document.querySelector("#form");
const result = document.querySelector("#result");
const pullar = [500, 200, 100, 50, 20, 10, 5, 1];

form.addEventListener("click", (a)=>{
    a.preventDefault();
    result.innerHTML= "";
    let mebleg = +input.value;
    pullar.map((pul)=>{
        let say = Math.trunc(mebleg / pul);
        if(say){
            mebleg = mebleg - say*pul;
            const row = document.createElement("div");
            row.classList.add("row")
            for(i=0 ;  i<say && i<5; i++){
                let image = document.createElement("img");
                image.src = `./images/${pul}.jpg`;
                image.style.left = `${i * 60}px`;
                row.append(image);
            }

            if (say - 5 > 0) {
                const h1 = document.createElement("h1");
                h1.textContent = `${say - 5}X`;
                row.append(h1);
              }
              result.append(row);
        }
    })
})