# cowin-notifier (with IFTTT & Telegram integration)

NodeJS app to monitor vaccine slots using [Cowin API](https://apisetu.gov.in/public/marketplace/api/cowin "Cowin API") and notify via IFTTT to Telegram.
1) Get notified based on pincode
2) Get notified based on district

<img src="https://github.com/rkyshz/cowin-notifier/blob/master/docs/telegram.jpeg" width="250" height="426" />

>**Supports incremental updates `=>` Alerts once sent out for a particular slot won't be sent again unless server is restarted.**

**Run on Gitpod**</br>
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/rkyshz/cowin-notifier)&nbsp;

**Steps to compile & run**
1) `git clone https://github.com/rkyshz/cowin-notifier.git` **(Skip this step if using Gitpod)**
2) `npm install`
3) `npm run build` (`npm run watch` for watch mode)
4) `npm start -- -t 10 -k abcd1234` 
    - `-t`to poll every 10 minutes. Defaults to 5 if no args passed
    - `-k` IFTTT `Webhooks` api key from [IFTTT & Telegram integration](https://github.com/rkyshz/cowin-notifier/blob/master/IFTTT.md). If no key passed, Telegram alerts will be disabled.

**Configurations**<br/>
`cowin-config.json`

```
[
    {
        "param": "400081",
        "dateFrom": "16-06-2021",
        "dateTo": "18-06-2021",
        "type": "P"
    },
    {
        "param": "395",
        "dateFrom": "16-06-2021",
        "dateTo": "18-06-2021",
        "type": "D"
    }
]
```
>type P - Get by Pincode

>type D - Get by District

>param - Either Pincode or District based on type (P/D)

<h4>IFTTT webhook integration</h4>

**Refer** [IFTTT & Telegram integration](https://github.com/rkyshz/cowin-notifier/blob/master/IFTTT.md)
