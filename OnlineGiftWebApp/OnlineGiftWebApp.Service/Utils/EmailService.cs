﻿using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace OnlineGiftWebApp.Services.Utils
{
    public class EmailService
    {
        private EmailSettings _settings;
        public EmailService(IOptions<EmailSettings> settings)
        {
            _settings = settings.Value;
        }

        public async Task SendMailAsync(string toDisplayName, string toAdr, string ccAdr, string subject, string bodyText, string attachmentFileName)
        {
            var mailServerIp = _settings.MailServerIp;
            var systemEmailSenderEmail = _settings.SystemEmailSenderEmail;
            var systemEmailSenderPassword = _settings.SystemEmailSenderPassword;
            var systemEmailSenderName = _settings.SystemEmailSenderName;
            var port = _settings.OutPortNo;
            var objMail = new MailMessage();

            objMail.To.Add(new MailAddress(toAdr, toDisplayName));
            if (!string.IsNullOrEmpty(ccAdr))
                objMail.CC.Add(ccAdr);

            objMail.From = new MailAddress(systemEmailSenderEmail, systemEmailSenderName);
            objMail.IsBodyHtml = true;
            objMail.Priority = MailPriority.Normal;
            if (!string.IsNullOrEmpty(attachmentFileName))
                objMail.Attachments.Add(new Attachment(attachmentFileName));

            objMail.Subject = subject;
            objMail.Body = bodyText;

            var objSmtpClient = new SmtpClient(mailServerIp, port)
            {
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Credentials = new NetworkCredential(systemEmailSenderEmail,
                    systemEmailSenderPassword)
            };

            objMail.DeliveryNotificationOptions = DeliveryNotificationOptions.OnSuccess;
            await objSmtpClient.SendMailAsync(objMail);
        }
    }

    public class EmailSettings
    {
        public string MailServerIp { get; set; }
        public string SystemEmailSenderEmail { get; set; }
        public string SystemEmailSenderPassword { get; set; }
        public string SystemEmailSenderName { get; set; }
        public int OutPortNo { get; set; }
    }
}
