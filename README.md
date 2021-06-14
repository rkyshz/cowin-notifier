# cowin-notifier (with IFTTT & Telegram integration)

Basic NodeJS app to monitor vaccine slots using [Cowin API](https://apisetu.gov.in/public/marketplace/api/cowin "Cowin API").
1) Get notified based on pincode
2) Get notified based on district

<b>Run on Gitpod</b><br/>
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/TheAlgorithms/Javascript)&nbsp;

Steps to compile & run
1) `git clone https://github.com/rkyshz/cowin-notifier.git`
2) `npm run build` (`npm run watch` for watch mode)
3) `npm start -- -t 10` (`-t`to poll every 10 minutes. Defaults to 5 if no args passed)

Configurations
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
