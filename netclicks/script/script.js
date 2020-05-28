const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
const API_KEY = 'b50bfed697bc70129372a8d659011bb5';
//https://github.com/mutalieva/mutalieva-netclick.github.io.git

const leftMenu = document.querySelector('.left-menu'),
    hamburger = document.querySelector('.hamburger'),
    tvShow = document.querySelector('.tv-shows__list'),
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.cross');


//Classes

 const DBservice = class {
    getData = async (url) => {
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error ('Error imposible to get');
        }
    };
    getTestData = async () =>{
    return await this.getData('test.json');
    };
    
};
const RenderCard = (response) =>{
    console.log(response);
    tvShow.textContent = '';
     response.results.forEach(element => {
         //Деструктуризация
        const {
                    backdrop_path: backdrop,
                    poster_path: poster,
                    vote_average: vote,
                    name: title
                } = element;
        const card = document.createElement('li');
        card.className = 'tv-shows__item';

        const posterIMG = poster ? IMG_URL + poster : 'img/no-poster.jpg',
        backDropIMG = backdrop ? IMG_URL + backdrop : 'img/no-poster.jpg',
        voteValue = vote ? vote : <span class="tv-card__vote"></span>;
        
        card.innerHTML = `
        <a href="#" class="tv-card">
        <span class="tv-card__vote">${voteValue}</span>
        <img class="tv-card__img";
             src= '${posterIMG}';
             data-backdrop= '${backDropIMG}';
             alt="Звёздные войны: Повстанцы">
        <h4 class="tv-card__head">${title}</h4>
    </a>
        `
        tvShow.append(card);
        
     });
    
        
    }

new DBservice().getTestData().then(RenderCard);




//MENU
hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});
document.addEventListener('click', (event) => {
    if (!event.target.closest('.left-menu')) {

        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }

    leftMenu.addEventListener('click', (event) => {
        const target = event.target,
            dropdown = target.closest('.dropdown');
        if (dropdown) {
            dropdown.classList.toggle('active');
            leftMenu.classList.add('openMenu');
            hamburger.classList.add('open');
        }
    });

    // Open Modal
    tvShow.addEventListener('click', (event) => {
        if (event.target.closest('.tv-shows__list')) {
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }
    });

    // Close Modal
    modal.addEventListener('click', () => {
        if (event.target.closest('.cross') || event.target.contains('modal')) {}
        modal.classList.add('hide');
        document.body.style.overflow = '';
    });

    //Open cards
    const changeImage = event => {
        const card = event.target.closest('.tv-shows__item');

        if (card) {
            const img = card.querySelector('.tv-card__img');

            if (img.dataset.backdrop) {
                [img.dataset.backdrop, img.src] = [img.src, img.dataset.backdrop];
            }
        }
    };

    tvShow.addEventListener('mouseover', changeImage);
    tvShow.addEventListener('mouseout', changeImage);

   

});