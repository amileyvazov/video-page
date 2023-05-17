
const row=document.querySelector('.row')

axios.get(' https://api.tvmaze.com/shows').then(res =>{
 
for (let i = 0; i < res.data.length; i++) {
    row.innerHTML += `
    <div class="col-3">
        <div class="card" style="he: 18rem;">
            <img src="${res.data[i].image.medium}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${res.data[i].title}</h5>
                <p class="card-text">${res.data[i].type.length > 50 ? res.data[i].type.substring(0,50)+ " ..." : res.data[i].type}</p>

                <a href="detals.html" class="btn btn-primary w-100">Detals</a>
            </div>
        </div>
    </div>
    `
}
});
