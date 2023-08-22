export const getHTMLBodyContact = ({
  title,
  text,
  date,
  sender,
}: {
  text: string;
  sender: string;
  date: string;
  title: string;
}) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html style="height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;">
  <head>
    <meta charset="UTF8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap" rel="stylesheet">


    <style>
      @media only screen and (max-width: 600px) {
        .mobile-view_mod {
          display: block !important;
          width: 100% !important;
        }
        .mobile-view-padding_mod{
          padding: 10px 0;
        }
        .mobile-view_mod.item tbody {
          display: block;
          width: 100% !important;
        }
        .mobile-padding {
          padding: 10px;
        }
        .mobile-hide_mod {
          display: none !important;
        }
        .main-table {
          width: 100% !important;
        }
        .mobile-view-img_mod {
          max-width: 100% !important;
          width: 100% !important;
          height: auto !important;
        }

        .mobile-float_mod {
          width: 100% !important;
          float: left !important;
          padding-left: 0 !important;
          max-width: 430px !important;
        }

        .mobile-float_mod--half {
          width: 50% !important;
        }

        .main-img__wrap {
          padding: 0 0 0 0 !important;
        }

        .mobile-social__wrap {
          border-right: 1px solid #E3E3E3 !important;
        }

        .mobile-social {
          border-right: none !important;
        }

      }
    </style>
  </head>
  <body style="background: #F6F7FA; height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;">
    <table class="main-table-wrapper" border="0" cellpadding="0" cellspacing="0" bgcolor="#F6F7FA" valign="top" align="center" style="background: #F6F7FA; height: 100%; margin: 0 auto; padding-bottom: 55px; padding-left: 8px; padding-right: 8px; width: 100%;">
      <tr>
        <td valign="top" align="center" style="margin:0;padding:0;">
          <table class="main-table main-background" width="580" border="0" cellpadding="0" cellspacing="0" bgcolor="#F6F7FA" style="border-radius: 50px; font-family: 'Jost', sans-serif; margin: 0 auto; max-width: 632px !important; min-width: 320px; padding: 0; width: 100%;">
            <tr>
              <td style="width: 100%;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#F6F7FA" style="margin:0;padding:0;">
                  <tr>
                    <td valign="top" align="center">
                      <table class="table-content" width="700" border="0" cellpadding="0" cellspacing="0" bgcolor="#F6F7FA" style="font-family: 'Jost', sans-serif; margin: 0 auto; padding: 0; width: 100%;">
                        <tr>
                          <td style="width: 40px;height:40px;" width="40" height="40" bgcolor="transparent">
                            <table width="40" height="40" style="display:block; width: 40px; height:40px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="width: 40px;height:40px;" width="40" height="40" bgcolor="transparent"></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                          <tr>
                            <td width="100%" style="width: 100%" valign="top">
                              <table width="100%" style="width: 100%" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent">
                                    <table width="16" height="16" style="display:block; width: 16px; height:16px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent"></td>
                                      </tr>
                                    </table>
                                  </td>
                                  <td><img class="main-logo__img" src="https://iili.io/hY8Sgp.png" alt="Mental Reminders logo" width="205px" style="border: 0; display: block; height: auto; outline: 0; padding: 0; width: 205px;"></td>
                                  <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent">
                                    <table width="16" height="16" style="display:block; width: 16px; height:16px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        <tr>
                          <td style="width: 23px;height:23px;" width="23" height="23" bgcolor="transparent">
                            <table width="23" height="23" style="display:block; width: 23px; height:23px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="width: 23px;height:23px;" width="23" height="23" bgcolor="transparent"></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                          <tr>
                            <td width="100%" style="width: 100%" valign="top">
                              <table width="100%" style="width: 100%" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent">
                                    <table width="16" height="16" style="display:block; width: 16px; height:16px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent"></td>
                                      </tr>
                                    </table>
                                  </td>
                                  <td width="100%" style="width: 100%;" valign="top">
                                    <table class="table--radius" width="100%" style="border-collapse: collapse; border-radius: 16px; overflow: hidden; width: 100%;" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                      <tr>
                                        <td style="width: 40px;height:40px;" width="40" height="40" bgcolor="transparent">
                                          <table width="40" height="40" style="display:block; width: 40px; height:40px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                              <td style="width: 40px;height:40px;" width="40" height="40" bgcolor="transparent"></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                        <tr>
                                          <td width="100%" style="width: 100%" valign="top">
                                            <table width="100%" style="width: 100%" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                              <tr>
                                                <td style="width: 32px"></td>
                                                <td class="main-title" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 28px !important; font-weight: 600; line-height: 1.5;"><span class="main-title" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 28px !important; font-weight: 600; line-height: 1.5;">${title}</span></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      <tr>
                                        <td style="width: 9px;height:9px;" width="9" height="9" bgcolor="transparent">
                                          <table width="9" height="9" style="display:block; width: 9px; height:9px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                              <td style="width: 9px;height:9px;" width="9" height="9" bgcolor="transparent"></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                        <tr>
                                          <td width="100%" style="width: 100%" valign="top">
                                            <table width="100%" style="width: 100%" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                              <tr>
                                                <td style="width: 32px"></td>
                                                <td class="main-text" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 16px !important; font-weight: 400; line-height: 1.5;"><span class="main-text" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 16px !important; font-weight: 400; line-height: 1.5;">Sender: ${sender}</span></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      <tr>
                                        <td style="width: 8px;height:8px;" width="8" height="8" bgcolor="transparent">
                                          <table width="8" height="8" style="display:block; width: 8px; height:8px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                              <td style="width: 8px;height:8px;" width="8" height="8" bgcolor="transparent"></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                        <tr>
                                          <td width="100%" style="width: 100%" valign="top">
                                            <table width="100%" style="width: 100%" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                              <tr>
                                                <td style="width: 32px"></td>
                                                <td class="main-text" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 16px !important; font-weight: 400; line-height: 1.5;"><span class="main-text" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 16px !important; font-weight: 400; line-height: 1.5;">Date: ${date}</span></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      <tr>
                                        <td style="width: 24px;height:24px;" width="24" height="24" bgcolor="transparent">
                                          <table width="24" height="24" style="display:block; width: 24px; height:24px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                              <td style="width: 24px;height:24px;" width="24" height="24" bgcolor="transparent"></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                        <tr>
                                          <td width="100%" style="width: 100%" valign="top">
                                            <table width="100%" style="width: 100%" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                              <tr>
                                                <td style="width: 32px"></td>
                                                <td class="main-text" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 16px !important; font-weight: 400; line-height: 1.5;"><span class="main-text" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 16px !important; font-weight: 400; line-height: 1.5;">${text}</span></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      <tr>
                                        <td style="width: 40px;height:40px;" width="40" height="40" bgcolor="transparent">
                                          <table width="40" height="40" style="display:block; width: 40px; height:40px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                              <td style="width: 40px;height:40px;" width="40" height="40" bgcolor="transparent"></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                  <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent">
                                    <table width="16" height="16" style="display:block; width: 16px; height:16px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        <tr>
                          <td style="width: 24px;height:24px;" width="24" height="24" bgcolor="transparent">
                            <table width="24" height="24" style="display:block; width: 24px; height:24px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="width: 24px;height:24px;" width="24" height="24" bgcolor="transparent"></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                          <tr>
                            <td width="100%" style="width: 100%" valign="top">
                              <table width="100%" style="width: 100%" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent">
                                    <table width="16" height="16" style="display:block; width: 16px; height:16px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent"></td>
                                      </tr>
                                    </table>
                                  </td>
                                  <td width="100%" style="width: 100%;" valign="top">
                                    <table width="100%" style="width: 100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#F6F7FA">
                                      <tr>
                                        <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent">
                                          <table width="16" height="16" style="display:block; width: 16px; height:16px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                              <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent"></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                        <tr>
                                          <td width="100%" style="width: 100%" valign="top">
                                            <table width="100%" style="width: 100%" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                              <tr>
                                                <td class="main-text" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 16px !important; font-weight: 400; line-height: 1.5;"><span class="main-text" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 16px !important; font-weight: 400; line-height: 1.5;">Thanks,</span></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      <tr>
                                        <td style="width: 8px;height:8px;" width="8" height="8" bgcolor="transparent">
                                          <table width="8" height="8" style="display:block; width: 8px; height:8px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                              <td style="width: 8px;height:8px;" width="8" height="8" bgcolor="transparent"></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                        <tr>
                                          <td width="100%" style="width: 100%" valign="top">
                                            <table width="100%" style="width: 100%" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                              <tr>
                                                <td class="main-text" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 16px !important; font-weight: 400; line-height: 1.5;"><span class="main-text" style="color: #1D1C20; font-family: 'Jost', sans-serif; font-size: 16px !important; font-weight: 400; line-height: 1.5;">Mental Reminders Team!☀️</span></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      <tr>
                                        <td style="width: 32px;height:32px;" width="32" height="32" bgcolor="transparent">
                                          <table width="32" height="32" style="display:block; width: 32px; height:32px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                              <td style="width: 32px;height:32px;" width="32" height="32" bgcolor="transparent"></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                  <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent">
                                    <table width="16" height="16" style="display:block; width: 16px; height:16px;" bgcolor="transparent" border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td style="width: 16px;height:16px;" width="16" height="16" bgcolor="transparent"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
