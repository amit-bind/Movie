//  const APIKEY = '8fe06c95dec816259d0f117afc9f4e9f';
// const IMGPATH = 'https://image.tmdb.org/t/p/w500'; 



    const APIKEY = '8fe06c95dec816259d0f117afc9f4e9f';
    const IMGPATH = 'https://image.tmdb.org/t/p/w500';


    async function apiCall(path) {
        console.log(path);
        var res = await fetch(path);
        var ans = await res.json();
        // console.log(ans);
        return ans;
    }

    //Call for home page
    var ans_home = apiCall(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1
`);
    console.log(ans_home);

    ans_home.then(val => {
        console.log(val.results);
        var fans = val.results;

        if (fans.length > 0) {
            fans.forEach(value => {
                console.log(value);
            
                var divTag = document.createElement('div');
                divTag.className = 'col-xl-3  text-center mt-2 mb-2';

                var imgTag = document.createElement('img');
                imgTag.className = 'img-fluid';
                imgTag.src = IMGPATH + value.poster_path;

                var h2Tag = document.createElement('h2');
                h2Tag.innerHTML = value.original_title;

                var pTag = document.createElement('p');
                pTag.innerHTML = value.vote_average;

                divTag.append(imgTag)
                divTag.append(h2Tag)
                divTag.append(pTag)
              console.log(divTag);

                document.getElementById('result').append(divTag);
            });
        }
    })

document.querySelector('#searchBtn').onclick = function () {

    var data = document.getElementById('movieName').value;
    // console.log(data)
    var ans_search = apiCall(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${data}&page=1
    `);
    // console.log(ans_search);
    ans_search.then(val => {
        console.log(val.results);    
        var fans = val.results;

        if (fans.length > 0) {
            document.getElementById('result').innerHTML= "";
            fans.forEach(value => {
                // console.log(value);
                var divTag = document.createElement('div');
                divTag.className = 'col-xl-3 col-6 text-center mt-2 mb-2';

                var imgTag = document.createElement('img');
                imgTag.className = 'img-fluid';
                imgTag.src = IMGPATH + value.poster_path;

                var h2Tag = document.createElement('h2');
                h2Tag.innerHTML = value.original_title;

                var pTag = document.createElement('p');
                pTag.innerHTML = value.vote_average;

                divTag.append(imgTag)
                divTag.append(h2Tag)
                divTag.append(pTag)


                document.getElementById('result').append(divTag);

            })
        }
        })
    }

apiCall();

