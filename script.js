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
                // console.log(i);
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
    DragDrop();
        // $('.content').css("display","block");
    
    //checkInput();
    $('form').submit(function(event)
    {
        // xu li ma so
        var maSo = document.querySelector('#maso').value;
        var regex_maSo =/^1[7-9]{1}|2[0-2]{1}[0-9]{6}$/;
        var flag_maSo = regex_maSo.test(maSo);
        console.log(flag_maSo);

        // xu li ho ten 
        var hoTen = document.querySelector('#hoten').value;
        let regex_hoTen = /^([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})$/;
        var flag_hoTen = regex_hoTen.test(hoTen);
        console.log(flag_hoTen);
        // xử lí địa chỉ
        var diaChi = document.querySelector('#diachi').value;
        let regex_diaChi = /^([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ0-9]{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ0-9]+)((\s{1}[A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ0-9]{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ0-9]+){1,})$/;
        var flag_diaChi = regex_hoTen.test(diaChi);
        console.log(flag_diaChi);
        //xu li dien thoai
        var dienThoai = document.querySelector('#dienthoai').value;
        var regex_dt =/^[0]{1}[0-9]{9}$/;
        var flag_dt = regex_dt.test(dienThoai);
        console.log(flag_dt);
        // xu li gioi tinh
        var gioiTinh;
        if($('#nam').is(':checked'))
        {
            gioiTinh = 'Nam';
        }
        else if($('#nu').is(':checked'))
        {
            gioiTinh = 'Nữ';
        }
        else{
            alert('sex');
        }
        // console.log(gioiTinh);
        // xu li ngay sinh
        var ngaySinh = document.querySelector('#ngaysinh').value;
        // var tempDate = new Date(ngaySinh);
        // var formattedDate = [tempDate.getMonth() + 1, tempDate.getDate(), tempDate.getFullYear()].join('/');
        // console.log(formattedDate) ;

        var day = new Date(ngaySinh);
        var dd = String(day.getDate()).padStart(2, '0');
        var mm = String(day.getMonth() + 1).padStart(2, '0'); 
        var yyyy = day.getFullYear();
        day = mm + '/' + dd + '/' + yyyy; 
        console.log(day);

        // xu li email
        var email = document.querySelector('#email').value;
        var regex_email = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,3}$/;
        var flag_email = regex_email.test(email);
        console.log(flag_email);

        var list = [
        {flag: flag_maSo, id: '#maso' },
        {flag: flag_hoTen, id: '#hoten'},
        {flag: flag_diaChi, id: '#diachi'},
        {flag: flag_dt, id: '#dienthoai'},
        {flag: flag_email, id:'#email'}
    ]
    console.log(list);
        var temp_id_old;
        for(let i in list)
        {
            if(list[i].flag == false)
            {
                $(list[i].id).css("border","2px solid red");
                //$(list[i].id).after('<i class="fa-solid fa-xmark" id="xmark" ></i>');
                // $(list[i].id).addClass('fa fa-arrow-right');
                // $('row-input').css("position","absolute");
                temp_id_old = $(list[i].id).parent().attr('id');
                //temp_id_old = '#' + temp_id_old + ' i';
                // console.log($(temp_id_old));
                temp_id_old = '#' + temp_id_old;
                $(temp_id_old +' #xmark').css("display","inline");
                $(temp_id_old +' #tick_check').css("display","none");
                
            }
            else{
                console.log('hahahaha');
                temp_id_old = $(list[i].id).parent().attr('id');
                temp_id_old = '#' + temp_id_old;
                $(temp_id_old +' #tick_check').css("display","inline");
                $(temp_id_old +' #xmark').css("display","none");
                
                //$(temp_id_old).remove();
                // $('i').removeClass("fa-solid fa-xmark");
                // $('i').remove();
                //console.log($(list[i].id).parent().attr('id'));
                // $(temp_id_old)
                $(list[i].id).css("border","1px solid #333");
                //$(list[i].id).after('<i class="fa-solid fa-check" id="tick_check"></i>');

            }
            
        }
        //console.log(list);
        

        event.preventDefault();
    });

    $('#xoa').click(function()
    {
        $('.row-input i').css("display","none");
        $('form').trigger("reset");
    });
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
            $('#notify-1 .title').css("border","1px solid blue");
        }
        else{
            $('#notify-1 .title').css("color","#333");
            $('#notify-1 .news').css("color","#e89224");
            $('#notify-1 #icon-right').css("display","inline");
            $('#notify-1 #icon-down').css("display","none");
            $('#notify-1 .title').css("background-color","#fcc782");
            $('#notify-1 .content').css("display","none");
            $('#notify-1 .title').css("border","none");
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
            $('#notify-2 .title').css("border","1px solid blue");
        }
        else{
            $('#notify-2 .title').css("color","#333");
            $('#notify-2 .news').css("color","#e89224");
            $('#notify-2 #icon-right').css("display","inline");
            $('#notify-2 #icon-down').css("display","none");
            $('#notify-2 .title').css("background-color","#fcc782");
            $('#notify-2 .content').css("display","none");
            $('#notify-2 .title').css("border","none");
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
            $('#notify-3 .title').css("border","1px solid blue");
        }
        else{
            $('#notify-3 .title').css("color","#333");
            $('#notify-3 .news').css("color","#e89224");
            $('#notify-3 #icon-right').css("display","inline");
            $('#notify-3 #icon-down').css("display","none");
            $('#notify-3 .title').css("background-color","#fcc782");
            $('#notify-3 .content').css("display","none");
            $('#notify-3 .title').css("border","none");
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
            $('#notify-4 .title').css("border","1px solid blue");
        }
        else{
            $('#notify-4 .title').css("color","#333");
            $('#notify-4 .news').css("color","#e89224");
            $('#notify-4 #icon-right').css("display","inline");
            $('#notify-4 #icon-down').css("display","none");
            $('#notify-4 .title').css("background-color","#fcc782");
            $('#notify-4 .content').css("display","none");
            $('#notify-4 .title').css("border","none");
            openNotify[3] = false;
        }
        
    }
    );
        
}

function DragDrop()
{
    
    $('.notify-item').draggable({
        containment : ".dkhp",
        zIndex: 10000,
        revert: false,
    });
    
    
}

function checkInput()
{
    // xu li ma so
    var maSo = document.querySelector('#maso')
    var str_maso = maSo.value;
    console.log(str_maso);
}
function resetForm(e)
{
    $('form').trigger("reset");
}