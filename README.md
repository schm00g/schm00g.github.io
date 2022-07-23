# schm00g.github.io

### How to use Github Pages to host a custom domain:

1. Set up your Github Pages as per [instructions](https://pages.github.com/).
2. Purchase your web domain. I chose [Google Domains](https://domains.google.com/).

3. In Google Domains (or whatever provider you used), click on DNS in sidebar and add custom records. Create two seperate records: one of Type A with TTL 1H and another of type CNAME with TTL 1H. The A record will be for Host name `yourdomain.com` and the CNAME for `www.yourdomain.com`. Add the following in the A record Data field:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
And in the CNAME record Data field: `<my-domain>.github.io`

4. In your Github Pages repo `<my-domain>.github.io` navigate to `Settings` > `Pages` (in sidebar) > `Custom domain`. Add your domain here.

5. Now wait for the DNS check to complete. This may take some time. Github will issue your site with an SSL cert. This means that I now have a running page on the web with only the need to pay for a domain, no paid hosting, certs etc.

6. Be sure to check `Enforce HTTPS`!

7. Finally, visit my site [here](https://smcgrath.dev/).

### Site analytics using Umami hosted on Railway. Hmm?

See the live [dashboard](https://umami-production-863f.up.railway.app/share/DM50VHxJ/Blog).

Why [Umami](https://umami.is/)? Well it's private and anonymised meaning no data is shared with third-parties.

I used [Railway](https://railway.app/) to self-host my Umami instance and PostgreSQL server.
