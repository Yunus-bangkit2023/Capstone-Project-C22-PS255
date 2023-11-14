// pewarisan 
// contoh ambulance dan taxi kedhuanay termasuk class Mobil namun punya fungsi dan atribut yang berbeda
// contoh email & whatapp sama2 layanan pengirim pesan namun berbedaaa dalam segi kemampuanya

// ini contoh yang salah atau contoh manual
class WhatsAppService {
    constructor(sender) {
        this.sender = sender;
    }
    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
    sendBroadcastMessage(message, receivers){
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

class EmailService {
    constructor(sender){
        this.sender=sender;
    }
    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
    sendDelayedMessage(message, receiver, delay){
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
        
    }
}

// sekarang kita gabungkan servuce email dan whatsapp dalam satu class yang sama

class MailService {
    constructor(sender){
        this.sender=sender;
    }
    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
    sendDelayedMessage(message, receiver, delay){
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
    sendBroadcastMessage(message, receivers){
        for (const receiver of receivers){
            this.sendMessage(message, receiver);
        }
    }
}

const whatsapp = new MailService('088211001126');
const email = new MailService('akbarbramansyah@gmail.com');

whatsapp.sendDelayedMessage();
email.sendBroadcastMessage();