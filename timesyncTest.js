if (Meteor.isClient) {
    Template.displayServerTime.serverTime = function () {
        return TimeSync.serverTime(undefined, true);
    };


//make it easy to format any date in the app
//http://stackoverflow.com/a/18597006
    var DateFormats = {
        clock: "ddd MMM DD, YYYY HH:mm:ss"
    };

    UI.registerHelper("formatTime", function (datetime, format) {
        if (moment) {
            f = DateFormats[format];
            return moment(datetime).format(f);
        } else {
            return datetime;
        };
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
