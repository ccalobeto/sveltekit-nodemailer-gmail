# SvelteKit contact form example

Use your email provider app password to send emails from your
SvelteKit app.

Read the [blog post](https://scottspence.com/posts/contact-form-send-email-from-site) for more information.

[nodemailer](https://mailtrap.io/blog/nodemailer-gmail/)

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
- [Adjust the form code](https://github.com/ccalobeto/tut-forms/commit/134fdcaf488fc76bdb0a9daef199f0cd184e2d93): the api action route and  the nodemailer *transport* from fastmail to gmail. 

## Setup to use Cloudflare Pages in production
- Install the node version deployment on your project

.nvmrc
```bash
v20.17.0
```
- Install [adapter-cloudflare adapter](npm i -D @sveltejs/adapter-cloudflare) or the [commit](https://github.com/ccalobeto/tut-forms/commit/2f57e599fb1aeaead7f170d278770195795516ac) 

```bash
npm i -D @sveltejs/adapter-cloudflare
```
- Add cloudflare `wrangler.toml` file.

This file is a config file to deploy in cloudflare pages. Cloudflare suggest to download it from *cloudflare pages dashboard* and edit. This step fix two *Building application errors*.
First install *wrangler* package in your project, then download the wrangler config file from *cloudflare dashboard pages* with this command `npx wrangler pages download config tut-forms` and add this line **compatibility_flags = [ "nodejs_compat" ]** to the downloaded toml file. See the commit [here](https://github.com/ccalobeto/tut-forms/commit/2e1ec18930a509a9d473e33eca15be91be2c0387).

## Cloudflare deploy errors on Building application
Found wrangler.toml file. Reading build configuration...
2025-01-16T02:12:27.817292Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.

The package "stream" wasn't found on the file system but is built into node. Are you trying to bundle for node? You can use "platform: 'node'" to do that, which will remove this error.
2025-01-16T02:12:46.816205Z	
... more 53 error related to compatibility



