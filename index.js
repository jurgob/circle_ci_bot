'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const BOT_TOKEN = process.env.BOT_TOKEN;
const tg = new Telegram.Telegram(BOT_TOKEN)


class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        console.log('$ ',$._chatId)

        $.sendMessage('your chat id is:')
        $.sendMessage($._chatId)
    }

    get routes() {
        return {
            'chatid': 'pingHandler'
        }
    }
}

tg.router
    .when(['chatid'], new PingController())
