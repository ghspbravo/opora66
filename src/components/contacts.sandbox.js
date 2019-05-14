// /wp-json/wpcf7/v1/forms
// /wp-json/contact-form-7/v1/contact-forms/
import fetch from 'node-fetch'

  // await fetch(`http://opora66.ru/contactForm.php`, {
  //   method: 'post',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // })
  //   .then(data => data.json())
  //   .then(data => {
  //     data
  //   });

async function sendMail() {
  await fetch('http://opora66.ru/mail.php', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": 'Name',
      "email": 'mail@mail.ru',
      "phonenumber": '88005553535',
      "theme": 'Theme',
      "message": 'hello'
    })
  }).then(data => {
    return data.status;
  });
}
