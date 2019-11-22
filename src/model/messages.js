class Message {
    msgText;
    seen;
    delivered;
    msgSender;
    msgTime;
    msgReciever;

    constructor(msgText, msgSender, msgTime, msgReciever, seen = false, delivered = false) {
        this.msgText = msgText;
        this.msgSender = msgSender;
        this.msgTime = msgTime;
        this.msgReciever = msgReciever;
        this.seen = seen;
        this.delivered = delivered;
    }


    set msgSender(msgSender){
        if(typeof msgSender === 'string'){
            this.msgSender = msgSender;
        } else{
            throw new Error('type must be a string');
        }
    }

    set msgTime(msgTime){
        if(typeof msgTime === number){
            this.msgTime = msgTime;
        } else{
            throw new Error('type must be a number');
        }
    }

    set msgReciever(msgReciever){
        if(typeof msgReciever === 'string'){
            this.msgReciever = msgReciever;
        }else{
            throw new Error('type must be a string');
        }
    }

    set seen(seen){
        if(typeof seen === Boolean){
            this.seen = false;
        }
    }

    set delivered(delivered){
        if(typeof delivered === Boolean){
            this.delivered = false;
        }
    }

}