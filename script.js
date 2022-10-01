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

    var temp_1 = document.querySelectorAll('.notify-item');
    console.log(temp_1);
    // Xử lí bật tắt side thông báo
    displayNotify();
    
        // $('.content').css("display","block");
});

function displayNotify()
{
    var openNotify  = [false,false,false,false];
    if($('#notify-1').click(function()
    {   
        if(openNotify[0] == false){
            openNotify[0] = true;
            console.log('hahahaa');
            $('#notify-1 .title').css("background-color","orange");
            $('#notify-1 .content').css("display","block");
            $('#notify-1 #icon-right').css("display","none");
            $('#notify-1 #icon-down').css("display","inline");

            $('#notify-1 .title').css("color","white");
            $('#notify-1 .news').css("color","white");

        }
        else{
            $('#notify-1 .title').css("color","#333");
            $('#notify-1 .news').css("color","#e89224");
            $('#notify-1 #icon-right').css("display","inline");
            $('#notify-1 #icon-down').css("display","none");
            $('#notify-1 .title').css("background-color","#fcc782");
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
            $('#notify-2 .title').css("background-color","orange");
            $('#notify-2 .content').css("display","block");
            $('#notify-2 #icon-right').css("display","none");
            $('#notify-2 #icon-down').css("display","inline");
            $('#notify-2 .title').css("color","white");
            $('#notify-2 .news').css("color","white");
        }
        else{
            $('#notify-2 .title').css("color","#333");
            $('#notify-2 .news').css("color","#e89224");
            $('#notify-2 #icon-right').css("display","inline");
            $('#notify-2 #icon-down').css("display","none");
            $('#notify-2 .title').css("background-color","#fcc782");
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
            $('#notify-3 .title').css("background-color","orange");
            $('#notify-3 .content').css("display","block");
            $('#notify-3 #icon-right').css("display","none");
            $('#notify-3 #icon-down').css("display","inline");3
            $('#notify-3 .title').css("color","white");
            $('#notify-3 .news').css("color","white");
        }
        else{
            $('#notify-3 .title').css("color","#333");
            $('#notify-3 .news').css("color","#e89224");
            $('#notify-3 #icon-right').css("display","inline");
            $('#notify-3 #icon-down').css("display","none");
            $('#notify-3 .title').css("background-color","#fcc782");
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
            $('#notify-4 .title').css("background-color","orange");
            $('#notify-4 .content').css("display","block");
            $('#notify-4 #icon-right').css("display","none");
            $('#notify-4 #icon-down').css("display","inline");4
            $('#notify-4 .title').css("color","white");
            $('#notify-4 .news').css("color","white");
        }
        else{
            $('#notify-4 .title').css("color","#333");
            $('#notify-4 .news').css("color","#e89224");
            $('#notify-4 #icon-right').css("display","inline");
            $('#notify-4 #icon-down').css("display","none");
            $('#notify-4 .title').css("background-color","#fcc782");
            $('#notify-4 .content').css("display","none");
            openNotify[3] = false;
        }
        
    }
    );
        
}
