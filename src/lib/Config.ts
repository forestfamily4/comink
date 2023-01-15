
interface iConfig{
    DEV:boolean

}

export class Config implements iConfig {
    DEV:boolean;
    constructor(){
        this.DEV=process.env.DEV==="true";
    }
}