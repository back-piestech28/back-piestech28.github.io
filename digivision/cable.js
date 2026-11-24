function getchannels() {
    let channeldb = [
        ["index4.html", "NULL"],
        ["index2.html#https://www.wwlp.com/watch-live/", "https://back-pestech28.github.io/digivision/ch1.png"],
        ["index2.html#https://localnow.com/channels/nbc-boston-news", "https://back-pestech28.github.io/digivision/ch2.png"],
        ["index2.html#https://www.newsnationnow.com/news-nation-live/", "https://back-pestech28.github.io/digivision/ch3.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://back-pestech28.github.io/digivision/ch4.png"],
        ["index2.html#https://pluto.tv/us/watch/live-tv/18450/", "https://back-pestech28.github.io/digivision/ch5.png"],
        ["index3.html#https://tvsen3.aynaott.com/5fUWDMxZ/index.m3u8", "https://back-pestech28.github.io/digivision/ch6.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023160/tooneast/noslate/VIDEO_3_1928000.m3u8", "https://back-pestech28.github.io/digivision/ch7.png"],
        ["index3.html#https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://back-pestech28.github.io/digivision/ch8.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://back-pestech28.github.io/digivision/ch9.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://back-pestech28.github.io/digivision/ch10.png"],
        ["index3.html#https://streaming-live.rtp.pt/livetvhlsDVR/rtpnHDdvr.smil/playlist.m3u8", "https://back-pestech28.github.io/digivision/ch11.png"],
        ["index2.html#https://sic.pt/direto", "https://back-pestech28.github.io/digivision/ch12.png"],
        ["index3.html#tvi", "https://back-pestech28.github.io/digivision/ch13.png"],
        ["index3.html#tvific", "https://back-pestech28.github.io/digivision/ch14.png"],
        ["index3.html#tvirel", "https://back-pestech28.github.io/digivision/ch15.png"],
        ["index3.html#tvivps", "https://back-pestech28.github.io/digivision/ch16.png"],
        ["index.html", "NULL"],
    ];
    tviurl = tviget(1);
    tviurl = "index3.html#" + tviurl;
    channeldb[13][0] = tviurl;
    tvificurl = tviget(2);
    tvificurl = "index3.html#" + tvificurl;
    channeldb[14][0] = tvificurl;
    tvirelurl = tviget(3);
    tvirelurl = "index3.html#" + tvirelurl;
    channeldb[15][0] = tvirelurl;
    tvivmsurl = tviget(4);
    tvivmsurl = "index3.html#" + tvivmsurl;
    channeldb[16][0] = tvivmsurl;
    return channeldb;
}

function getchinfo() {1
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["WWLP", "Local news"],
        ["NBC 10", "New England News"],
        ["News Nation", "Non bias news 24/7"],
        ["TNT", "Movies TV shows and sports"],
        ["00s Replays", "2000s Movies"],
        ["Comedy Central", "Comedy Shows"],
        ["Cartoon Network", "Cartoons"],
        ["AWE", "World Telivision"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}

function getwebchannels() {
    let channeldb = [
        ["https://www.wwlp.com/watch-live/", "https://back-pestech28.github.io/digivision/ch1.png"],
        ["https://localnow.com/channels/nbc-boston-news", "https://back-pestech28.github.io/digivision/ch2.png"],
        ["https://www.newsnationnow.com/news-nation-live/", "https://back-pestech28.github.io/digivision/ch3.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://back-pestech28.github.io/digivision/ch4.png"],
        ["https://pluto.tv/us/watch/live-tv/18450/", "https://back-pestech28.github.io/digivision/ch5.png"],
        ["index2.html#https://tvsen3.aynaott.com/5fUWDMxZ/index.m3u8", "https://back-pestech28.github.io/digivision/ch6.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023160/tooneast/noslate/VIDEO_3_1928000.m3u8", "https://back-pestech28.github.io/digivision/ch7.png"],
        ["index2.html#https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://back-pestech28.github.io/digivision/ch8.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://back-pestech28.github.io/digivision/ch9.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://back-pestech28.github.io/digivision/ch10.png"],
        ["index3.html#https://streaming-live.rtp.pt/livetvhlsDVR/rtpnHDdvr.smil/playlist.m3u8", "https://back-pestech28.github.io/digivision/ch11.png"],
        ["index2.html#https://sic.pt/direto", "https://back-pestech28.github.io/digivision/ch12.png"],
        ["index3.html#tvi", "https://back-pestech28.github.io/digivision/ch13.png"],
        ["index3.html#tvific", "https://back-pestech28.github.io/digivision/ch14.png"],
        ["index3.html#tvirel", "https://back-pestech28.github.io/digivision/ch15.png"],
        ["index3.html#tvivps", "https://back-pestech28.github.io/digivision/ch16.png"],
    ];
    tviurl = tviget(1);
    tviurl = "index3.html#" + tviurl;
    channeldb[12][0] = tviurl;
    tvificurl = tviget(2);
    tvificurl = "index3.html#" + tvificurl;
    channeldb[13][0] = tvificurl;
    tvirelurl = tviget(3);
    tvirelurl = "index3.html#" + tvirelurl;
    channeldb[14][0] = tvirelurl;
    tvivmsurl = tviget(4);
    tvivmsurl = "index3.html#" + tvivmsurl;
    channeldb[15][0] = tvivmsurl;
    return channeldb;
}



function tviget(flagger) {
    let url = "";
    if (flagger == 1) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI.m3u8";
    }
    if (flagger == 2) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI_Ficcao.m3u8";
    }
    if (flagger == 3) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI_Reality.m3u8";
    }
    if (flagger == 4) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/Vmais_TVI.m3u8";
    }
    if (flagger == 5) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/CNN_Portugal.m3u8";
    }
    
    try {
        xhr = new XMLHttpRequest();
        xhr.open("GET", url, false); 
        xhr.send(null);
function tviget(flagger) {
    let url = "";
    if (flagger == 1) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI.m3u8";
    }
    if (flagger == 2) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI_Ficcao.m3u8";
    }
    if (flagger == 3) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI_Reality.m3u8";
    }
    if (flagger == 4) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/Vmais_TVI.m3u8";
    }
    if (flagger == 5) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/CNN_Portugal.m3u8";
    }
    
    try {
        xhr = new XMLHttpRequest();
        xhr.open("GET", url, false); 
        xhr.send(null);

        if (xhr.status === 200) {
            match = xhr.responseText.match(/https:\/\/\S+/);
            if (match) {
                return match[0];
            }
        }
    } catch (error) {
        console.error("Failed to fetch GitHub file synchronously:", error);
    }
    
    return null;
}

        if (xhr.status === 200) {
            match = xhr.responseText.match(/https:\/\/\S+/);
            if (match) {
                return match[0];
            }
        }
    } catch (error) {
        console.error("Failed to fetch GitHub file synchronously:", error);
    }
    
    return null;
}
