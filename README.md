# My Wallet

My Wallet is a finance manager that simplifies control of your revenues and expenses. With an intuitive interface, My Wallet allows you to quickly maintain full control of your personal finances.

<div style="backgroundcolor:black" align="center">
  
![My-Wallet-Print](https://github.com/FernandoM52/MyWallet-front/assets/81760656/1d403b29-7b2b-408e-8747-04136680f7ac)
</div>

## About this Project

My Wallet is a web API to help individuals efficiently manage their finances. With this app, users can effortlessly gain insights into their spending habits, track their income and expenses, and maintain a real-time balance overview. Whether you're looking to gain a better understanding of your financial choices or simply stay on top of your financial health, My Wallet provides the tools and insights you need.

Implemented features:
- Sign Up
- Login
- Logout
- List of all user transactions
- Add an expense
- Add an revenue

Next steps:
- Edit an transaction
- Delete an transaction

## Why

I've often looked for apps so I could manage my expenses and know exactly how much I spend on a certain type of thing, basically controlling my hard-earned money, but I've never been successful. So, with that in mind, I came up with the idea of ​​making my own finance management app!

My Wallet was my first Full-Stack project. It was also my second project using a non-relational database, which was a topic I was studying at the time and for that I found the choice of MongoDB interesting.

So, I'm very grateful to made it and share this project, hope be very useful to you. Enjoy! 

## Technologies

The following technologies were used to develop this project:

<div>
  
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
  ![NodeJS](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Env](https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black)
</div>


## How to run

This api has a front-end, if you are interested in running the api together with the front you can find all the instructions to start the front <a href="https://github.com/FernandoM52/MyWallet-front" target="_blank">here<a/>.

<h3>Running</h3>

1. Create a `/.env` file and add the environment variable `DATABASE_URL` with the address of your localhost, like this:

```
DATABASE_URL=http://localhost:3000
```

2. Run the back-end with:

```
npm start
```
