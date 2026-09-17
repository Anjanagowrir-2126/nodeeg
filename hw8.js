

var http = require('http');
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');
var nodemailer = require('nodemailer');

var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: "4767532ed7a1d4",
        pass: "2addb5abc37f52"
    }
});
var server = http.createServer(function(req, res) {

    if (req.url == '/' && req.method == 'GET') {

        res.writeHead(200, {'Content-Type': 'text/html'});

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Tech Support</title>
            </head>
            <body>

                <h2>Tech Support File Upload</h2>

                <form action="/upload" method="post" enctype="multipart/form-data">

                    <label>Email ID:</label>
                    <input type="email" name="email" required>

                    <br><br>

                    <label>Select a file:</label>
                    <input type="file" name="supportFile" required>

                    <br><br>

                    <button type="submit">Upload File</button>

                </form>

            </body>
            </html>
        `);

    }

    else if (req.url == '/upload' && req.method == 'POST') {

        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {

            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('File upload failed');
                return;
            }

            var uploadedFile = files.supportFile;

            if (Array.isArray(uploadedFile)) {
                uploadedFile = uploadedFile[0];
            }

            var uploadFolder = path.join(__dirname, 'uploads');

            if (!fs.existsSync(uploadFolder)) {
                fs.mkdirSync(uploadFolder);
            }

            var fileName = path.basename(uploadedFile.originalFilename);

            var newFilePath = path.join(uploadFolder, fileName);

            fs.rename(uploadedFile.filepath, newFilePath, function(err) {

                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Error moving file');
                    return;
                }

                console.log('File moved to uploads folder');

                var mailOptions = {
                    from: "Private Person <from@example.com>",
                    to: "admin@example.com",
                    subject: "File Uploaded",
                    text: "A user uploaded a file to the support portal."
                };

                transport.sendMail(mailOptions, function(error, info) {

                    if (error) {
                        console.log(error);

                        res.writeHead(500, {'Content-Type': 'text/plain'});
                        res.end('File uploaded, but email failed: ' + error.message);
                    }

                    else {
                        console.log("Message sent: " + info.messageId);

                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.end('File uploaded successfully and email sent to admin.');
                    }

                });

            });

        });

    }

    else {

        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page Not Found');

    }

});

server.listen(3000, function() {

    console.log('Server running at http://localhost:3000');

});