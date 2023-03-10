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
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchByKeyword = exports.getAudioInfo = exports.getStreamUrl = void 0;
const ytdl = require("ytdl-core");
const yts = require("yt-search");
function getStreamUrl(sourceId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let { formats } = yield ytdl.getInfo(sourceId);
            const audioFormats = ytdl.filterFormats(formats, "audioonly");
            return audioFormats[0].url;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
exports.getStreamUrl = getStreamUrl;
function getAudioInfo(sourceId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let { related_videos, videoDetails } = yield ytdl.getInfo(sourceId);
            return { related: related_videos, details: videoDetails };
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
exports.getAudioInfo = getAudioInfo;
function searchByKeyword(keyword) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield yts(keyword);
            // let audios:Array<ytsr.Item> = items.filter((i:ytsr.Item) => i.type === "video")
            // let channels:Array<ytsr.Item> = items.filter((i:ytsr.Item) => i.type === "channel")
            // let playlists:Array<ytsr.Item> = items.filter((i:ytsr.Item) => i.type === "playlist")
            return data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
exports.searchByKeyword = searchByKeyword;
