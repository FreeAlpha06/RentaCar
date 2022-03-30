export interface Rental{
    Id:number,
    CarId:number,
    CustomerId:number,
    RentAddress:string,
    ReturnAddress:string,
    RentDate:Date,
    ReturnDate:Date,
    IsActive:boolean
}