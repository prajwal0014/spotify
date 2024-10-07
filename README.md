<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <ul>
            <li class="brand"><img src="logo.png" alt="spotify">spotify</li>
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>


    <div class="container">
        
        <div class="songlist">
            <h1>best of NCS-no copyright songs</h1>
            <div class="songitemcontainer">
                <div class="songItem">
                    <img src="cover.jpg" alt="1">
                    <span class = "songName">let me love you</span>
                    <spna class="songlistplay"><span class="timestamp">05:34 <i id="0" class="fa-solid songItemPlay fa-play"></i></span> </i></spna>
                </div>
                <div class="songItem">
                    <img src="cover2.jpg" alt="1">
                    <span class = "songName">Babuaan</span>
                    <spna class="songlistplay"><span class="timestamp">05:34 <i id="1" class="fa-solid songItemPlay fa-play"></i></span> </i></spna>
                </div>
                <div class="songItem">
                    <img src="cover3.jpg" alt="1">
                    <span class = "songName">Aaj Ki Raat</span>
                    <spna class="songlistplay"><span class="timestamp">05:34 <i id="2" class="fa-solid songItemPlay fa-play"></i></span> </i></spna>
                </div>
                <div class="songItem">
                    <img src="cover4.jpg" alt="1">
                    <span class = "songName">Rajaji-Ke-Dilwa</span>
                    <spna class="songlistplay"><span class="timestamp">05:34 <i id="3" class="fa-solid songItemPlay fa-play"></i></span> </i></spna>
                </div>
                <div class="songItem">
                    <img src="cover5.jpg" alt="1">
                    <span class = "songName">Cooler Kurti Me Laga La</span>
                    <spna class="songlistplay"><span class="timestamp">05:34 <i id="4" class="fa-solid songItemPlay fa-play"></i></span> </i></spna>
                </div>
                <div class="songItem">
                    <img src="cover6.jpeg" alt="1">
                    <span class = "songName">saj-Ke-Sawar-Ke</span>
                    <spna class="songlistplay"><span class="timestamp">05:34 <i id="5" class="fa-solid songItemPlay fa-play"></i></span> </i></spna>
                </div>
                <div class="songItem">
                    <img src="cover7.jpg" alt="1">
                    <span class = "songName">saj-Ke-Sawar-Ke</span>
                    <spna class="songlistplay"><span class="timestamp">05:34 <i id="6" class="fa-solid songItemPlay fa-play"></i></span> </i></spna>
                </div>
            </div>
            <div class="songItem">
                <img src="cover7.jpg" alt="1">
                <span class="songName">saj-Ke-Sawar-Ke</span>
                <spna class="songlistplay"><span class="timestamp">05:34 <i id="7" class="fa-solid songItemPlay  fa-play"></i></span> </i></spna>
            </div>
        </div>
        <div class="songbanner"></div>
    </div>

    <div class="bottom">
        <input type="range" name="range" id="myProgressBar" min="0" value ="0" max="100">
        <div class="icons">
            <!-- font awesome icons -->
            <i class="fa-solid fa-2x fa-backward" id="previous"></i>
            <i class="fa-solid fa-2x fa-play" id="masterPlay"></i>
            <i class="fa-solid fa-2x fa-forward" id="next"></i>
        </div>
        <div class="songinfo">
            <iframe src="https://giphy.com/embed/axsN0Wx9AjwOJBvBLu" width="55" height="55"  frameBorder="0" id="gif" allowFullScreen></iframe> <span id="masterSongName">Let-Me-Love-You</span>
        </div>
    </div>
    <script src="https://kit.fontawesome.com/15381bb90e.js" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>
