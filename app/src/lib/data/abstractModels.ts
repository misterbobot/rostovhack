export interface AbstractModel{
    toJson : () => string,
    fromJson : () => void

}