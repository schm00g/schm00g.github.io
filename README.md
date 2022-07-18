# schm00g.github.io

### How to use Github pages to host a custom domain

1. Set up your Github pages as per [instructions](https://pages.github.com/).
   
2. Purchase your web domain. I chose [Google Domains](https://domains.google.com/).

3. In Google domains, click on DNS in sidebar and add custom records. Add the following Data for two records of Type A with TTL 1H. The first record will be for Host name `yourdomain.com` and the second for `www.yourdomain.com`.
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

4. In your Github pages `<my-domain>.github.io` repo navigate to `Settings` > `Pages` (in sidebar) > `Custom domain`. Add your domain here.

5. Now wait for the DNS check to complete. This may take some time. Github will issue your site with an SSL cert. This means that I now have a running page on the web with only the need to pay for a domain, no paid hosting, certs etc.

6. Be sure to check `Enforce HTTPS`! 

7. Finally, visit my site [here](https://smcgrath.dev/).
