function getData() {
    var channel = document.getElementById("channel").value;
    var key = "&key=AIzaSyDUr_yXwdPp5pXNTentKbNhGauIKVFVXDY";
    var query = "https://www.googleapis.com/youtube/v3/channels?part=statistics";

    var name = channel;
    channel = "&forUsername=" + channel;
    query += channel + key;

    $.get(query, function(res) {
        var data = res["items"][0];

        if (data) {
            cubeText = "";
            cubeText += "Name: "     + name                              + ", ";
            cubeText += "Comments: " + data.statistics.commentCount      + ", ";
            cubeText += "Subs: "     + data.statistics.subscriberCount   + ", ";
            cubeText += "Vids: "     + data.statistics.videoCount        + ", ";
            cubeText += "Views: "    + data.statistics.viewCount;
        } else {
            cubeText = "Channel not found!";
        }

        drawText();
        initTexture();
    });
};
