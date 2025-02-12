import { IonDatetime } from "@ionic/angular"

export interface TransactionInterface {
    transactionNo:number,
    transactionDescription:string,
    transactionAmount:number,
    transactionDate: Date
}

export interface AddTransactionInterface {
    TransactionNo:number,
    TransactionDescription:string,
    TransactionAmount:number,
    TransactionDate: IonDatetime
}

