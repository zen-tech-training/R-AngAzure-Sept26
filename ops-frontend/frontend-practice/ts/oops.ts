interface order{
    //public string id; //C# synatx
    id: string,
    odate: Date,
    customerId ?: string,
    status: "completed" | "pending" | "cancelled" | "in-progress" | "on-hold" | "failed" | "refunded" | "shipped" | "delivered" | "returned" | "processing" | "awaiting-payment" | "awaiting-shipment" | "awaiting-fulfillment" | "awaiting-pickup" | "partially-shipped" | "partially-delivered" | "partially-returned",
}

const orders: order[] = [];
orders.push({
    id: "12345",
    odate: new Date(),
    customerId: "CUST001",
    status: "pending"
});
orders.push({
    id: "12346",
    odate: new Date(), 
    customerId: "CUST001",   
    status: "pending"
});


// ✅ Valid with type
type Status = "pending" | "approved" | "rejected"; // Union
type ID = string | number;                         // Union of primitives
type Point = [number, number];                     // Tuple
type OrderType = {
    id: ID,
    odate: Date,
    customerId ?: string,
    status: Status
}
type myDataStructure = {
    id: number,
    m1: ()=>void,
    m2: (a:number, b:number)=>number,
}
const pointOne: Point = [10, 20];


//interface allows extension. Where as type does not allow extension.
interface I1{
    // id: number,
}
interface I2{
    name: string,
}
interface I3 extends I1, I2{
    age: number,
    m1: ()=>void,
    addition: (a:number, b:number)=>string,
}
class MyClass implements I3{
    id: number;
    name: string;
    age: number;
    constructor(id:number, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    m1(): void {
        console.log("m1 method");
    }
    addition(a: number, b: number): string {
        const res = a+b;
        return "Addition is:" + res;
    }
}
