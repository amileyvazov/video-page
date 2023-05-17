
const row=document.querySelector('.row')

axios.get(' https://api.tvmaze.com/shows').then(res =>{
 
for (let i = 0; i < res.data.length; i++) {
    row.innerHTML += `
    <div class="col-3">
        <div class="card" style="he: 18rem;">
            <img src="${res.data[i].image.medium}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${res.data[i].name}</h5>
                <p class=language>${res.data[i].language}</p>
                <p class="type">${res.data[i].genres}</p>
                <p class="status">${res.data[i].status}</p>
                <p class="start">${res.data[i].runtime}</p>
                <p class="end">${res.data[i].averageRuntime}</p>
                <p class="startime">${res.data[i].premiered}</p>
                <p class="endtime">${res.data[i].ended}</p>
                <p class="schedule">${res.data[i].schedule.time} and ${res.data[i].schedule.days}</p>
            </div>
        </div>
    </div>
    `
}
});