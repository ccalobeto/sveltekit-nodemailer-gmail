# SvelteKit contact form example

Use your email provider app password to send emails from your
SvelteKit app.

Read the [blog post](https://scottspence.com/posts/contact-form-send-email-from-site) and [nodemailer](https://mailtrap.io/blog/nodemailer-gmail/) for more information.



## Setup

Copy `example.env` to `.env` and fill in the values.

```bash
cp example.env .env
```

## Environment variables

Update the environment variables in `.env` with the values for your
email provider.

```
EMAIL_APP_PASSWORD=your-email-provider-app-password
EMAIL_APP_USER=your-email-provider-user-email
EMAIL_APP_TO_ADDRESS=email-address-to-send-to
```

## Notes about the form
[Adjust the form code](https://github.com/ccalobeto/sveltekit-nodemailer-gmail/commit/0bec35aa4ee2fea654d739083b63102e9f878c91) adding an api action route and change the nodemailer *transport* from fastmail to gmail setup. 

## Setup to use Cloudflare Pages in production
- Install the node version deployment on your project

.nvmrc
```bash
v20.17.0
```
- Install the adapter and follow the [commit](https://github.com/ccalobeto/sveltekit-nodemailer-gmail/commit/8e2c6b9e55272896f4ae9c207d44a23da94ce917) 

```bash
npm i -D @sveltejs/adapter-cloudflare
```

- Add cloudflare `wrangler.toml` file.

This file is a config file to deploy in cloudflare pages. Cloudflare suggest to download it from *cloudflare pages dashboard* and edit. This step fix two *Building application errors*.
First install *wrangler* package in your project, then download the wrangler config file from *cloudflare dashboard pages* with this command `npx wrangler pages download config tut-forms` and add this line **compatibility_flags = [ "nodejs_compat" ]** to the downloaded toml file. See the commit [here](https://github.com/ccalobeto/sveltekit-nodemailer-gmail/commit/8941b174b149fc0acf3105727204cb941b9cf8da).

## Send mails with nodemailer
- Install nodemailer package
- Setup secrets in `.env` file and cloudflare settings. 
- Create an app password on [google account](https://myaccount.google.com/u/1/security-checkup/3?continue=https%3A%2F%2Fmyaccount.google.com%2Fu%2F1%2Fsecurity) 
- Setup the [config file](https://github.com/ccalobeto/sveltekit-nodemailer-gmail/commit/e50cb45f307058cd101c153b13b238bd1f4a173d).

## Cloudflare deploy errors on Building application
Found wrangler.toml file. Reading build configuration...
2025-01-16T02:12:27.817292Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.

The package "stream" wasn't found on the file system but is built into node. Are you trying to bundle for node? You can use "platform: 'node'" to do that, which will remove this error.
2025-01-16T02:12:46.816205Z	
... more 53 error related to compatibility

>[!WARNING]
> [17-01-2025] The form still can't send an email in production environment into cloudflare.

