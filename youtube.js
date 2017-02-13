window.onload = function() {

    document.getElementById("button").onclick = function() {

        var channel = document.getElementById("channel").value;
        var key = "&key=AIzaSyDUr_yXwdPp5pXNTentKbNhGauIKVFVXDY";
        var query = "https://www.googleapis.com/youtube/v3/channels?part=statistics";

        channel = "&forUsername=" + channel;
        query += channel + key;

        $.get(query, (res) => {
            var data = res["items"][0];

            if (data) {
                console.log(data.statistics);
            } else {
                console.log("Channel not found");
            }
        });
    };
};
