const fs = require("fs");

fs.writeFile("profile.txt", "Name: Riya\nAge: 22\nCity: Mumbai", function(err) {
    if (err) {
        console.log(err);
    } else {
        fs.readFile("profile.txt", "utf8", function(err, data) {
            if (err) {
                console.log(err);
            } else {
                let name = data.split("\n")[0].split(":")[1].trim();

                function checkName() {
                    if (name === "Riya") {
                        console.log("Profile verified");
                    } else {
                        console.log("Invalid profile");
                    }
                }

                checkName();

                fs.appendFile("profile.txt", "\nStatus: Active", function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        fs.rename("profile.txt", "verified_profile.txt", function(err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("File renamed");
                            }
                        });
                    }
                });
            }
        });
    }
});