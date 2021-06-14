<h5>IFTTT & Telegram integration</h5>

1) Signup on [IFTTT](https://ifttt.com/home).
2) Click on **create**
![step1](/docs/step1.png)
4) On **Choose a service** page filter or select `Webhooks`
![step2](/docs/step2.png)
6) Select **Receive a web request** & click on **connect**
7) Click `Add If` & enter **Event Name** as `slot_open` and **Create trigger**

![step3](/docs/step3.png)

8) Click `Add Then That` and filter or select `Telegram`

![step4](/docs/step4.png)
![step5](/docs/step5.png)

9) Connect & authorize Telegram
10) Select `Send messsage` on <b>Choose an action</b> for Telegram

![step6](/docs/step6.png)

11) On the `Send message` screen -
   - **Target Chat** `=>` **Private chat with @IFTTT**
   - **Message text** `=>` ``` <b>Vaccine Slot available - Updated at {{OccurredAt}}</b><br/>{{Value1}}```
   - **web page preview** `=>` **Disabled**
   
![step7](/docs/step7.png)

12) Click **Create** or **Update**
13) 
![step8](/docs/step8.png)
   
