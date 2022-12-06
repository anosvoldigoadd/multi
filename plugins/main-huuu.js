let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, pickRandom(stikercute), m, { packname: "wa.me/6287855066799", author: "мυʀѕι∂ вσт-χмℓ\nig @mursid.st" })
}

handler.customPrefix = /^(Bott|Hay|hay|Halo|halo|bro|kk|hy|Hy)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikercute = [
 "https://telegra.ph/file/aa06b93cd2922b23779f7.png",//panda1
 "https://telegra.ph/file/7f95199d14acc58842931.png",//panda2
]
