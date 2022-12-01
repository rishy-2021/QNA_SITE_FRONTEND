import NextAuth from "next-auth";
import nodemailer from "nodemailer";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
// import TwitterProvider from "next-auth/providers/twitter";
import EmailProvider from "next-auth/providers/email";
// import { text } from "stream/consumers";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongoClient";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "1080512323-7akro7qrabirog170lf13domktumo9cu.apps.googleusercontent.com",

      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      // authorizationUrl:
      //   "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    FacebookProvider({
      clientId: "986837982012299",
      clientSecret: "25281d4fb20f192761816380a7980742",

      // authorizationUrl:
      //   "https://www.facebook.com/v11.0/dialog/oauth?scope=email",
    }),
    // TwitterProvider({
    //   // clientId: process.env.FACEBOOK_CLIENT_ID,
    //   // clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),

    // EMAIL_SERVER=smtp://username:password@smtp.example.com:587
    // EMAIL_FROM=noreply@example.com
    EmailProvider({
      // server: {
      //   host: "smtp.gmail.com",
      //   port: 587,
      //   auth: {
      //     user: "rishypatel08@gmail.com",
      //     pass: "vyyaygwmzrblutij",
      //   },
      // },
      // from: "rishypatel08@gmail.com:vyyaygwmzrblutij@s",

      server:
        "smtp://rishypatel08@gmail.com:vyyaygwmzrblutij@smtp.gmail.com:587",
      from: "rishypatel08@gmail.com",

      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        const { host } = new URL(url);
        const transport = nodemailer.createTransport(server);
        await transport.sendMail({
          to: email,
          from,
          subject: `Sign in to ${host}`,
          text: text({ url, host }),
          html: html({ url, host, email }),
        });
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: "sercet",

  callbacks: {
    // async jwt(token, account) {
    //   if (account?.accessToken) {
    //     token.accessToken = account.accessToken;
    //   }
    //   return token;
    // },
    async session({ session, user, token }) {
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  // jwt: {
  //   encryption: true,
  // },
  // pages: {
  //   signIn: "/auth",
  // },
});
function text({ url, host }: Record<"url" | "host", string>) {
  return `Sign in to ${host}\n${url}\n\n`;
}

function html({ url, host, email }: Record<"url" | "host" | "email", string>) {
  // Insert invisible space into domains and email address to prevent both the
  // email address and the domain from being turned into a hyperlink by email
  // clients like Outlook and Apple mail, as this is confusing because it seems
  // like they are supposed to click on their email address to sign in.
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const escapedHost = `${host.replace(/\./g, "&#8203;.")}`;

  // Some simple styling options
  const backgroundColor = "#f9f9f9";
  const textColor = "#444444";
  const mainBackgroundColor = "#ffffff";
  const buttonBackgroundColor = "#346df1";
  const buttonBorderColor = "#346df1";
  const buttonTextColor = "#ffffff";

  return `
<body style="background: ${backgroundColor};">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        <strong>${escapedHost}</strong>
      </td>
    </tr>
  </table>
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        Sign in as <strong>${escapedEmail}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Sign in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`;
}
