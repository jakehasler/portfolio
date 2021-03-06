var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jake Hasler' });
});

router.get('/resume', function(req, res, next) {
	//var stream = fs.readStream('./public/files/JH-resume.pdf');
	var fileName = 'JH-Resume.pdf';
	// res.setHeader('Content-disposition', 'inline; filename="' + fileName + '"');
	// res.setHeader('Content-type', 'application/pdf');
	console.log(stream);
	//stream.pipe(res);
	res.writeHead(200, {
		'Content-Type': 'application/pdf',
		'Access-Control-Allow-Origin': '*',
		'Content-Disposition': 'inline; filename=' + fileName
	});
	res.end('./public/files/JH-resume.pdf');
})

router.get('/spp', function(req, res, next) {
  res.sendFile('./public/spp/index.html');
});

/* Send an Email */
router.post('/send', function(req, res, next) {
 	
 	// create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: 'motoslugger@gmail.com',
	        pass: '101493jwh'
	    }
	});

	// NB! No need to recreate the transporter object. You can use
	// the same transporter object for all e-mails

	var mailOptions = req.body;
	console.log(req.body);

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);

	});

	res.end("Message Sent");
});


module.exports = router;
