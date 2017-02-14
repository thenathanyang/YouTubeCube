function getData() {
    var channel = document.getElementById("channel").value;
    var tempName = channel; 
    var key = "&key=AIzaSyDUr_yXwdPp5pXNTentKbNhGauIKVFVXDY";
    var query = "https://www.googleapis.com/youtube/v3/channels?part=statistics";

    channel = "&forUsername=" + channel;
    query += channel + key;

    $.get(query, function(res) {
        var data = res["items"][0];

        if (data) {
            // Clear the data
            name     = "";
            comments = "";
            subs     = "";
            vids     = "";
            views    = "";

            // Fill in the data
            name     = tempName + "\n";
            comments = "Comments: " + data.statistics.commentCount      + "\n";
            subs     = "Subs: "     + data.statistics.subscriberCount   + "\n";
            vids     = "Videos: "   + data.statistics.videoCount        + "\n";
            views    = "Views: "    + data.statistics.viewCount         + "\n";
        } else {
            channelNotFound = 1;
            notFound = "Channel not found!";
        }

        drawText(name, 0);
        drawText(subs, 1);
        drawText(views, 2);
        drawText(comments, 3);
        drawText(vids, 4);
        drawText(name, 5);
        initTexture();
    });
};
