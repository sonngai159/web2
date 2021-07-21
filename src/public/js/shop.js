
const showSort = (sorticonid,dropdownid) =>{
    const sort = document.getElementById(sorticonid),
    dropdown = document.getElementById(dropdownid);

    if( sorticonid && dropdownid ){
        sort.addEventListener('click',()=>{
            dropdown.classList.toggle('dropdown__show');
        })
    }
}
showSort('sort-icon','sort-dropdown-id');

const showFilter = (filtericon,filtermenu) =>{
    const filter = document.getElementById(filtericon),
    dropdown = document.getElementById(filtermenu);

    if( filtericon && filtermenu ){
        filter.addEventListener('click',()=>{
            dropdown.classList.add('show');
        })
    }
}
showFilter('filter-icon','filter-menu');

const cancelFilter = (cancelfiltericon,filtermenu) =>{
    const cancelfilter = document.getElementById(cancelfiltericon),
    dropdown = document.getElementById(filtermenu);

    if( cancelfiltericon && filtermenu ){
        cancelfilter.addEventListener('click',()=>{
            dropdown.classList.remove('show');
        })
    }
}

cancelFilter('cancel-filter','filter-menu');

/* EXPERT SAID SLICK SLIDER */
$('.expert__said').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    arrows:false,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToScroll: 1,
    infinite:true,
    responsive: [
        {
        breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
    ]
});

/* Recently Viewed */
$('.recently__viewed__product').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    arrows:false,
    slidesToShow: 4,
    autoplay:false,
    autoplaySpeed:3000,
    slidesToScroll: 1,
    infinite:true,
    responsive: [
        {
        breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
    ]
});

function lowtohigh(id){
    var idbt = document.getElementById(id);
    idbt.addEventListener('click', function(){
        var loc = location.href;
        if(loc.indexOf("?") === -1){
            location.href = loc + "?sort=lth";
        }else{
            if(loc.indexOf("sort") === -1){
                location.href = loc + "&sort=lth";
            }else{
                var url = new URL(location.href);
                var search_params = url.searchParams;
                search_params.set('sort', 'lth');
                console.log(url);
                location.href=url.href;
            }
        }
            
    }); 
}
lowtohigh('lth');

function hightolow(id){
    var idbt = document.getElementById(id);
    idbt.addEventListener('click', function(){
        var loc = location.href;
        if(loc.indexOf("?") === -1){
            location.href = loc + "?sort=htl";
        }else{
            if(loc.indexOf("sort") === -1){
                location.href = loc + "&sort=htl";
            }else{
                var url = new URL(location.href);
                var search_params = url.searchParams;
                search_params.set('sort', 'htl');
                console.log(url);
                location.href=url.href;
            }
        }
            
    }); 
}
hightolow('htl');


function typetop(id){
    var idbt = document.getElementById(id);
    idbt.addEventListener('click', function(){
        var loc = location.href;
        if(loc.indexOf("?") === -1){
            location.href = loc + "?type=top";
        }else{
            if(loc.indexOf("type") === -1){
                location.href = loc + "&type=top";
            }else{
                var url = new URL(location.href);
                var search_params = url.searchParams;
                search_params.set('type', 'top');
                console.log(url);
                location.href=url.href;
            }
        }
            
    }); 
}
typetop('type-top');

function typebottom(id){
    var idbt = document.getElementById(id);
    idbt.addEventListener('click', function(){
        var loc = location.href;
        if(loc.indexOf("?") === -1){
            location.href = loc + "?type=bottom";
        }else{
            if(loc.indexOf("type") === -1){
                location.href = loc + "&type=bottom";
            }else{
                var url = new URL(location.href);
                var search_params = url.searchParams;
                search_params.set('type', 'bottom');
                console.log(url);
                location.href=url.href;
            }
        }
            
    }); 
}
typebottom('type-bottom');

function typeshoes(id){
    var idbt = document.getElementById(id);
    idbt.addEventListener('click', function(){
        var loc = location.href;
        if(loc.indexOf("?") === -1){
            location.href = loc + "?type=shoes";
        }else{
            if(loc.indexOf("type") === -1){
                location.href = loc + "&type=shoes";
            }else{
                var url = new URL(location.href);
                var search_params = url.searchParams;
                search_params.set('type', 'shoes');
                console.log(url);
                location.href=url.href;
            }
        }
            
    }); 
}
typeshoes('type-shoes');