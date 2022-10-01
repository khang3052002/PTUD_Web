$(function () {


    // xử lí khi click
    let temp;
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


    // Xử lí bật tắt side thông báo
    displayNotify();
    
        // $('.content').css("display","block");
});

function displayNotify()
{
    var openNotify  = [false,false,false,false];
    console.log('hahahaa');
    if($('#notify-1').click(function()
    {   
        if(openNotify[0] == false){
            openNotify[0] = true;
            console.log('hahahaa');
            $('#notify-1 .content').css("display","block");
        }
        else{
            $('#notify-1 .content').css("display","none");
            openNotify[0] = false;
        }
        
    }
    ));

    $('#notify-2').click(function()
    {   
        if(openNotify[1] == false){
            openNotify[1] = true;
            console.log('hahahaa');
            $('#notify-2 .content').css("display","block");
        }
        else{
            $('#notify-2 .content').css("display","none");
            openNotify[1] = false;
        }
        
    }
    );
    $('#notify-3').click(function()
    {   
        if(openNotify[2] == false){
            openNotify[2] = true;
            console.log('hahahaa');
            $('#notify-3 .content').css("display","block");
        }
        else{
            $('#notify-3 .content').css("display","none");
            openNotify[2] = false;
        }
        
    }
    );
    $('#notify-4').click(function()
    {   
        if(openNotify[3] == false){
            openNotify[3] = true;
            console.log('hahahaa');
            $('#notify-4 .content').css("display","block");
        }
        else{
            $('#notify-4 .content').css("display","none");
            openNotify[3] = false;
        }
        
    }
    );
        
}
