import { IOriModel, OriModel } from "@origamicore/core";

@OriModel()
export default class CollectionItem extends IOriModel
{
    owner:string;
    collection_id:string;
    item_serial:string;
    constructor(data:any)
    {
        super();
        Object.assign(this,data);
    }
}