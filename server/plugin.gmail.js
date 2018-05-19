let google = require('googleapis'),
    gmail = google.gmail('v1');

let auth = new google.auth.OAuth2(
  '151622309174-ufqkb0shfhmm3k263pb6j4ma8ril9j7v.apps.googleusercontent.com',
  'PQ_B5r3Gvp4_BbAe4YXxl8Jr',
  'http://localhost:8443/gmail/success'
);

// to generate tokens manually, go to the link generated by:
// console.log(auth.generateAuthUrl({ access_type: 'offline', prompt: 'consent', scope: ['https://www.googleapis.com/auth/gmail.send'] }));
let tokens = {
  access_token: 'ya29.GluyBc6CR6o_QBtk9-7cEow1B8mJiZc_Fx2gTRfHEIxWSrg5GFpOW1wHP66shh48Q7L1BIQc9GUbk62wbTCtLFFvucwtWF-kqQDrqp1D8E_Ov901jRYn1m0o1HVl',
  token_type: 'Bearer',
  refresh_token: '1/NMyIsKELCDajxhGeQGKn-SCEy0Acf9QmXkqZHMPpi84',
  expiry_date: 1525528233788
};

auth.setCredentials(tokens);

module.exports = function write(to, subject, body) {

  gmail.users.messages.send({
    auth: auth,
    userId: 'me',
    format: 'raw',
    resource: {
      raw: new Buffer(
`Content-Type: text/plain; charset=\"UTF-8\"
MIME-Version: 1.0
Content-Transfer-Encoding: 7bit
to: ${ to }
from: info@fearless-apps.com
subject: ${ subject }

${ body }`).toString('base64').replace(/\+/g, '-').replace(/\//g, '_')
        }
  }, function(err, response) {

    if(err) return console.log(err);

  });

};