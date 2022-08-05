const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [{
        name: '群青',           //歌曲名称
        artist: 'yoasobi',       //歌曲作者
        url: 'https://music.163.com/song/media/outer/url?id=1472480890.mp3',         //歌曲源文件地址
        cover: 'https://p1.music.126.net/sF9I_mKMVNtsCD-ZXzfV_A==/109951165251958014.jpg?param=130y130',     //歌曲封面地址
        lrc:  'https://cdn.back2me.cn/lrc/%E7%BE%A4%E9%9D%92.lrc',        //歌曲的歌词文件
        theme: '#eeeeee'        //主题颜色（优先）
    },
{
        name: '怪物',           //歌曲名称
        artist: 'yoasobi',       //歌曲作者
        url: 'https://music.163.com/song/media/outer/url?id=1803908863',         //歌曲源文件地址
        cover: 'https://p1.music.126.net/M9FA7rm098sFErf-B7QWOw==/109951165536665031.jpg?param=130y130',     //歌曲封面地址
        lrc:  'https://cdn.back2me.cn/lrc/%E6%80%AA%E7%89%A9.lrc',        //歌曲的歌词文件
        theme: '#eeeeee'        //主题颜色（优先）
    },
{
        name: 'アンコール',           //歌曲名称
        artist: 'yoasobi',       //歌曲作者
        url: 'https://music.163.com/song/media/outer/url?id=1500151579',         //歌曲源文件地址
        cover: 'https://p1.music.126.net/r3HQ2Na5Z-CvnDGHmcl9-A==/109951165515346936.jpg?param=130y130',     //歌曲封面地址
        lrc:  'https://cdn.back2me.cn/lrc/%E3%82%A2%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%AB.lrc',        //歌曲的歌词文件
        theme: '#eeeeee'        //主题颜色（优先）
    },
{
        name: 'あの夢をなぞって',           //歌曲名称
        artist: 'yoasobi',       //歌曲作者
        url: 'https://music.163.com/song/media/outer/url?id=1417236632',         //歌曲源文件地址
        cover: 'https://p2.music.126.net/lX06lnoMCH8x18XqC4j5yg==/109951164632728541.jpg?param=130y130',     //歌曲封面地址
        lrc:  'https://cdn.back2me.cn/lrc/%E3%81%82%E3%81%AE%E5%A4%A2%E3%82%92%E3%81%AA%E3%81%9E%E3%81%A3%E3%81%A6.lrc',        //歌曲的歌词文件
        theme: '#eeeeee'        //主题颜色（优先）
    },
{
        name: '夜に駆ける',           //歌曲名称
        artist: 'yoasobi',       //歌曲作者
        url: 'https://music.163.com/song/media/outer/url?id=1409311773',         //歌曲源文件地址
        cover: 'https://p2.music.126.net/3xWlqwYmfwRFebeiONUpGg==/109951164546210608.jpg?param=130y130',     //歌曲封面地址
        lrc:  'https://cdn.back2me.cn/lrc/1409311773.lrc',        //歌曲的歌词文件
        theme: '#eeeeee'        //主题颜色（优先）
    }]
});
