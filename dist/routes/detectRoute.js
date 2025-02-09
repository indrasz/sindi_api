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
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const axios_1 = __importDefault(require("axios"));
const upload = (0, multer_1.default)();
const router = (0, express_1.Router)();
router.post("/detect", upload.single("image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const imageBase64 = (_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer.toString("base64");
        const response = yield axios_1.default.post("https://detect.roboflow.com/american-sign-language-letters/6", imageBase64, {
            params: { api_key: "hTZuf1D35gj1nUUY9SMe" },
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
        res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
exports.default = router;
