import axios from "axios";

const API = "https://toko.ox-sys.com";

const DATA = {
  all_data: "/variations",
  pagination: (page = 1, size = 20) => `/variations/page=${page}&size=${size}`,
};

const AUTH = {
  login: "/security/auth_check",
};

const ACCESS_TOKEN = localStorage.getItem("token")
  ? `Bearer ${localStorage.getItem("token")}`
  : null;

// const ACCESS_TOKEN =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODAzNDY3NTQsImV4cCI6MTY4MTM4MzU1NCwicm9sZXMiOlt7fV0sImlkIjoxMTcyMTF9.a_Nies_7QmgZfLyp98yBrzP5i9Yhnm9BPWTQ0T21_NkVxHfQVVmzaMBciJQRftK5b95aqL6DKRus99pGevhpeEa92WCnDN-MWDuAjtRqTkWEgzNdjb6i-Jjhf4DTr-qC0QBFREt_dQDqi1OyAkoAizEiTaBK-jsIoPR_isQe51SJE4HS5Kys5c4JJWNlHF8fc-gshdJ2ydM6horuyPmGIzWsDWZ5G5r5SXWdW0h27grdAZYxTgPhKwGOqN7KE4g1SyI9md9a_MZa_QsIQVEJJjw-HDg3nsAjN16S86iOO2RoI0YBQl5hdqRR_TNsJkRnKKlNbVG4xhtXAhYK0g1XUyFRBxVk4ZfImuvQW69KKjr3_AiG9Nr61tWXiSkQ41apPypprk5msqhaMzL6JQFc8r_Rd-2itFq4kdoo1hGi7GZUZqsPLIlX0yaTbESVRqnk_eR6biFQZKpsJVmH-MFpCEzi-FTDULYqtwZ0rnyA7hwU8jmR28Q0uayIwsWZYaN3l5qSULLRfcKphOFuYlKWXH170INQD46AzHO1c6_UW8ptYCMK5ONeP27hVKP25_ZFJynD0bFSz3bgEYDHTNuPP7gG-tbN-3wnhgpWF9aacjaX6M13BHUUSsl2lyoZFVkAEf8T50kZjhFIDKUsPE_-8sy-fwlH67dQaQJbcIFmYMQ";

const API_URL = axios.create({
  baseURL: API,
  headers: {
    Authorization: ACCESS_TOKEN,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export { AUTH, DATA, API, API_URL, ACCESS_TOKEN };
