class AccountType {
    password;
    gMail;
    faceBook;

    static TYPES = {
        "PASSWORD": 'password',
        "GMAIL": 'gmail',
        "FACEBOOK": 'facebook'
    }

    constructor (type, value){
        if (!type || !value){
            throw new Error('incomplete params');
        }
        switch (type) {
            case AccountType.TYPES.PASSWORD : {
                this.password = value;
                break;
            }

            case AccountType.TYPES.GMAIL : {
                this.gMail = value;
                break;
            }

            default : {
                throw new Error('please pass valid account type')
            }

        }
    }
}