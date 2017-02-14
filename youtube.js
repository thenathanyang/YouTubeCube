function getData() {
    var channel = document.getElementById("channel").value;
    var key = "&key=AIzaSyDUr_yXwdPp5pXNTentKbNhGauIKVFVXDY";
    var query = "https://www.googleapis.com/youtube/v3/channels?part=statistics";

    channel = "&forUsername=" + channel;
    query += channel + key;

    $.get(query, function(res) {
        var data = res["items"][0];

        if (data) {
            cubeText = "";
            cubeText += "Comments: " + data.statistics.commentCount      + "\n";
            cubeText += "Subs: "     + data.statistics.subscriberCount   + "\n";
            cubeText += "Vids: "     + data.statistics.videoCount        + "\n";
            cubeText += "Views: "    + data.statistics.viewCount         + "\n";
        } else {
            cubeText = "Channel not found!";
        }

        drawText();
        initTexture();
    });
};
