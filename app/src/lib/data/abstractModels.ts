export interface AbstractModel{
    toJson : () => string,
    fromJson : (json : string) => any

}