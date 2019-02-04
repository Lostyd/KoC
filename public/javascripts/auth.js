$(document).ready(function () {
    socket.on('cozdanno', function () {
        alert('cozdanno')
    });

    socket.on('nelza', function () {
        alert('nelza')
    });

    socket.on('obnovil', function () {
        alert('obnovil')
    });


    if(localStorage.getItem('token')){
        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/auth",
            data: {'token': localStorage.getItem('token')},
            success: function(rows){
                $('#tokenform').remove();
                $('#logindiv').append('<div class="media">\n' +
                    '  <img src="'+rows.avatar+'" class="rounded-circle" style="height: 30px!important; width: 30px!important; display: rrrr!important;" class="mr-4" alt="...">\n' +
                    '  <div class="media-body">\n' +
                    '    <h7 class="mt-0">'+rows.username+' #'+rows.tag+'</h7>\n' +
                    '  </div>\n' +
                    '</div>')
            },
            error: function () {
                alert( "Щито то пошло не так");
            }
        });
    }


    $("#auth").click(function (){
        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/auth",
            data: {'token': $('#token').val()},
            success: function(rows){
                localStorage.setItem('token', $('#token').val());
                $('#tokenform').remove();
                $('#logindiv').append('<div class="media">\n' +
                    '  <img src="'+rows.avatar+'" class="rounded-circle" style="height: 30px!important; width: 30px!important; display: rrrr!important;" class="mr-4" alt="...">\n' +
                    '  <div class="media-body">\n' +
                    '    <h7 class="mt-0">'+rows.username+' #'+rows.tag+'</h7>\n' +
                        '  </div>\n' +
                    '</div>')
            },
            error: function () {
                alert( "Увы, но вас нет на сервера дискорда, извините");
            }
        });
    })



});