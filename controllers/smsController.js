// const client = require("twilio")(
//   "ACb843cf978dd0580ded040f1e7ba1b847",
//   "00a51303f66d9e755e7cdd2af614a1c7"
// );
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "bc4e8aa7",
  apiSecret: "wwix4Z8sbHw2KQ1K"
})

module.exports.sendSms = async (req, res) => {
  // client.messages
  //   .create({
  //     body: "Dwyrty Service is he ma man",
  //     to: "+21694240978",
  //     from: "+19378173820",
  //   })
  //   .then((message) => console.log(message))
  //   // here you can implement your fallback code
  //   .catch((error) => console.log(error));
  const from = "Service Home"
const to = "21620632249"
const n = req.params.n
const ln = req.params.ln
const m = req.params.m
const s = req.params.s
const text = "Monsieur/Madame "+m+", Votre demande de service "+s+" a été accepté par le professionnel "+n+" "+ln+". Votre meeting enligne sera le 04/06/2022 à 09:00 sur notre plateform, soyez à l'heure."
console.log(text);
vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
};
