pc.script.createLoadingScreen(function (app) {
    // Отключаем splash экран полностью
    app.on('preload:progress', function () {});
    app.on('preload:end', function () {});
    app.on('start', function () {});
});

'html, body {',
             '   background-color: transparent;',
            '}'
