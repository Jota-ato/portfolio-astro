export const generateEmailTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="color-scheme" content="dark light" />
    <meta name="supported-color-schemes" content="dark light" />
    <title>New contact submission</title>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <style>
      table, td { font-family: Arial, Helvetica, sans-serif; }
    </style>
    <![endif]-->
  </head>
  <body style="margin:0; padding:0; background-color:#070910; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">
    <!-- Preheader (oculto, aparece como preview en la bandeja de entrada) -->
    <div style="display:none; max-height:0; overflow:hidden; mso-hide:all;">
      New contact submission from ${name}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#070910; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;">
            <tr>
              <td style="background-color:#0f111a; border:1px solid #95a1b5; border-radius:12px; padding:24px; font-family:'Geist Mono', Consolas, Menlo, monospace;">

                <!-- Header -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-bottom:16px; border-bottom:1px solid #161925;">
                      <h1 style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:24px; line-height:1.3; font-weight:700; color:#e8ecf5;">
                        New Contact submission!
                      </h1>
                    </td>
                  </tr>
                </table>

                <!-- Body -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:16px;">
                  <tr>
                    <td style="padding-bottom:16px;">
                      <h2 style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:20px; line-height:1.3; font-weight:700; color:#e8ecf5;">
                        ${name}
                      </h2>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:16px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#161925; border-radius:10px;">
                        <tr>
                          <td style="padding:8px 12px; font-size:16px; line-height:1.5; color:#e8ecf5;">
                            Email:
                            <strong style="color:#a8c4f0;"> ${email}</strong>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:8px;">
                      <h3 style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:1.3; font-weight:700; color:#e8ecf5;">
                        Message:
                      </h3>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#161925; border-radius:10px;">
                        <tr>
                          <td style="padding:8px 12px; font-size:16px; line-height:1.6; color:#e8ecf5;">
                            ${message}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- Footer opcional -->
            <tr>
              <td style="padding:16px 8px 0; text-align:center; font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#95a1b5;">
                Enviado desde el formulario de contacto de tu sitio.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
