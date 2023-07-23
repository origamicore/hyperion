export default class ApiRequest
{
    code:string;
    scope:string;
    table:string;
    table_key:string="";
    lower_bound:string=null;
    upper_bound:string=null;
    key_type:string='i64';
    index_position:string='1';
    limit:number=50;
    json:boolean=true;
    reverse:boolean=false;
    constructor(fields:{
        code:string;
        scope:string;
        table:string;
        table_key?:string;
        lower_bound?:string;
        upper_bound?:string;
        key_type?:string;
        index_position?:string;
        limit?:number;
        json?:boolean;
        reverse?:boolean;
    })
    {
        if(fields)Object.assign(this,fields);
    }
}
 