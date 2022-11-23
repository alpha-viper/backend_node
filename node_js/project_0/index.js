
//t.me/coding_sumit_bot
const { Telegraf } = require('telegraf');


const bot = new Telegraf('5703230668:AAF37-LD5SFSZAxC7Z1ZKn3QC82puo_6eVQ');
bot.start((ctx)=>(
    ctx.reply('Welcome to my new bot')
));
bot.launch();