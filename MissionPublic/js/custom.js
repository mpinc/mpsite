/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
 var compilePage =  function(langId){
        //console.log("langId:"+langId);
        var langs=[en_us,zh_cn];
        var lang=langs[langId];
        var source=$('#index_template').html();
        //console.log($('#index_template').html());
        var template=Handlebars.compile(source);
        var html=template(lang);
        $('#mainContent').empty().append(html);


        $('#langToggle').click(function(){
                if (langId==0){
                    langId=1;
                }else{
                    langId=0;
                }
                compilePage(langId);
            })  
        $('.preloader').fadeOut(1000); // set duration in brackets  


    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();
}

/* start preloader */
$(window).load(function(){
       var langId=0;
       compilePage(langId);
	  
});
/* end preloader */
