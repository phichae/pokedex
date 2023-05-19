


export class Pokemon {
    constructor(data) {
        this.name = data.name,
        this.nickName = data.nickName,
        this.img = data.img,
        this.weight = data.weight,
        this.types = data.types,
        this.creatorId = data.creatorId,
        this.creator = data.creator
    }
}