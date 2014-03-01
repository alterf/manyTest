(function(_w){
    var errorFunc = function(e){
        var sendParam = {};

        //表示用の仮
        var errorMes = document.getElementById('errorMes'),
            errorFile = document.getElementById('errorFile'),
            errorLine = document.getElementById('errorLine');


        sendParam.errorMes = e.message;
        sendParam.errorFile = e.filename;
        sendParam.errorLine = e.lineno;

        errorMes.innerHTML = sendParam.errorMes;
        errorFile.innerHTML = sendParam.errorFile;
        errorLine.innerHTML = sendParam.errorLine;

        console.log(sendParam);
    };

    var listnerFunc = function(event){
        errorFunc(event);
    };
    _w.addEventListener('error', listnerFunc, false);
})(window);

