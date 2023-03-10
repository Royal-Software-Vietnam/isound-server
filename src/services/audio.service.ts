import ytdl = require("ytdl-core")
import yts = require("yt-search")

export async function getStreamUrl(sourceId:string):Promise<string|any> {
    try {
        let { formats } = await ytdl.getInfo(sourceId)
        const audioFormats = ytdl.filterFormats(formats, "audioonly")
        return audioFormats[0].url
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getAudioInfo(sourceId:string):Promise<any> {
    try {
        let { related_videos, videoDetails }:any = await ytdl.getInfo(sourceId)
        return { related:related_videos, details:videoDetails }
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function searchByKeyword (keyword:string) {
    try {
        const data:yts.SearchResult = await yts(keyword)
        // let audios:Array<ytsr.Item> = items.filter((i:ytsr.Item) => i.type === "video")
        // let channels:Array<ytsr.Item> = items.filter((i:ytsr.Item) => i.type === "channel")
        // let playlists:Array<ytsr.Item> = items.filter((i:ytsr.Item) => i.type === "playlist")
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}