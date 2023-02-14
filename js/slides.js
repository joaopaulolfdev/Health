$(function(){
    $('.mosaico .container .mosaico-wraper').slick({
        centerMode: false,
        slidesToShow:6,
        arrow:false,
        responsive:[

            {
                breackpoint:768,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:3
                }
            },
            {
                breackpoint:580,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:2

                }
            },
            {
                breackpoint:380,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:1
                }
            }
        ]
    });

    $('.tratamentos .container').slick({
        centerMode:false,
        slidesToShow:3,
        arrows:false,
        infinite:false,
        responsive:[
            {
                breackpoint:768,
                settings:{
                arrows:false,
                dots:true,
                infinite:false,
                centerMode:false,
                slidesToShow:2
            }
            },
            {
                breackpoint:480,
                settings:{
                    arrows:false,
                    dots:true,
                    infinite:false,
                    centerMode:false,
                    slidesToShow:1
                }
            }
        ]
    });
})