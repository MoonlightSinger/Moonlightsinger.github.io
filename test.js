var maxloads=10;
var i=0;
while(i<maxloads){
    var nxt=$('a:contains(下页)','.pagelistbox :last').attr("href");
    console.log('下一页: ' + nxt);
    if(nxt){
        var nxthtml = $.ajax(nxt , {
            async: false,
            dataType: 'html'
        }).done(function (data) {
            console.log('成功, 收到的数据: ' + data);
            var needload=$('.con');
            needload.append($(data).find('.con div:eq(1)'));
        }).fail(function (xhr, status) {
            console.log('失败: ' + xhr.status + ', 原因: ' + status);
        }).always(function () {
            console.log('请求完成: 无论成功或失败都会调用');
        });
    }
    i++;
}
