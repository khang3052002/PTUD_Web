$(function () {


    // xử lí khi click
    let temp;
    // $('.menu li').click(function () {
    //     //console.log($(this).attr('value'));
    //     var menu_content = $(this).text();
    //     var menu_footer = $('.item');
    //     let i;
        
    //     $(temp).css("color", "rgb(52 105 209)");
    //     $('.item').css("background-color", "#FFE0B2");
    //     // console.log(menu_footer.eq(1).text());
    //     console.log('hahaahahah');
    //     for (i in menu_footer) {
    //         if (menu_content == menu_footer.eq(i).text()) {
    //             menu_footer.eq(i).css("background-color", "orange");
    //             $(this).css("color", "#fcc782");
    //             temp = $(this);
    //             console.log(temp);
    //         }
    //     }
    // });

    // xử lí khi hover
    var check ;
    var temp_footer;
    let i;
    let menu_footer;
    $('.menu li').hover(function () {
        check = false;
        //console.log($(this).attr('value'));
        var menu_content = $(this).text();
        menu_footer = $('.item');
        

        // console.log(menu_footer.eq(1).text());
        for (i in menu_footer) 
        {
            if (menu_content == menu_footer.eq(i).text())
            {
                menu_footer.eq(i).css("background-color", "orange");
                $(this).css("color", "#fcc782");
                temp_footer = menu_footer.eq(i);
                console.log(i);
                break;
            }
        }
        $('.menu li').click(function () {
            //console.log($(this).attr('value'));
            check = true;
            var menu_content = $(this).text();
            var menu_footer = $('.item');
            let num;
            
            $(temp).css("color", "rgb(52 105 209)");
            $('.item').css("background-color", "#FFE0B2");
            // console.log(menu_footer.eq(1).text());
            console.log('hahaahahah');
            for (num in menu_footer) {
                if (menu_content == menu_footer.eq(num).text()) {
                    menu_footer.eq(num).css("background-color", "orange");
                    $(this).css("color", "#fcc782");
                    temp = $(this);
                    console.log(temp);
                    
                }
            }
            
        });
        

    }
        //console.log(str);
        ,
        function () {
            if(check == false)
            {
                //var menu_footer = $('.item');
                $(this).css("color", "rgb(52 105 209)");
                // $('.item').css("background-color", "#FFE0B2");
                menu_footer.eq(i).css("background-color", "#FFE0B2");
            }
            
        });


    

});
