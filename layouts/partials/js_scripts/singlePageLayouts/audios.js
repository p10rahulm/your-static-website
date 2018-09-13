document.addEventListener('DOMContentLoaded', function(){
    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        mini: false,
        autoplay: true,
        theme: '#FADFA3',
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: 90,
        lrcType: 0,
        audio: [
        {{range .Params.audios}}
            {
                name: '{{.name}}',
                artist: '{{.artist}}',
                url: '/audios/{{.filename}}',
                cover: '/img/audios/{{.cover}}',
            },
        {{end}}
        ]
    });
}, false);