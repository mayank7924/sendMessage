const SibApiV3Sdk = require('sib-api-v3-sdk');

var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = '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';

const SendTestEmail = async (email, name, subject, textContent) => {
    var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email
    sendSmtpEmail = {
      sender: { email: "mayank7924@gmail.com" },
      to: [
        {
          email,
          name,
        },
      ],
      subject,
      textContent,
    };
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail)
    console.log("API called successfully. Returned data: " + result);
    return result;
  }

module.exports = SendTestEmail