# cowin-notifier

Basic NodeJS app to monitor vaccine slots using Cowin API.
1) Get notified based on pincode
2) Get notified based on district

Steps to compile & run
1) `git clone https://github.com/rkyshz/cowin-notifier.git`
2) `npm run build` (-w for watch mode)
3) `npm start`

Configurations
```[
    {
        "param": "400081",
        "date": "16-06-2021",
        "type": "P"
    },
    {
        "param": "395",
        "date": "15-06-2021",
        "type": "D"
    }
]
```
>type P - Get by Pincode

>type D - Get by District

>param - Either Pincode or District based on type (P/D)
