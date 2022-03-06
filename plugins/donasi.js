//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2ButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌〔 Donasi • E-money 〕
├ GoPay: 6281386945391 && 6285770598246 
├ Dana: 6281386945391 && 6285770598246
├ Pulsa: 6281386945391 && 6285770598246 
└────
`.trim(), watermark, 'Menu', '.menu','Check my profile','.profile' m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
