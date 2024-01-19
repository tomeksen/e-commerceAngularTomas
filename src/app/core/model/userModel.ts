export class User{
    name!:string;
    password!: string;
    uploadPhoto!: string;
    role!: string;
    mobNumber!: string;
    address!: Address; 
    gender!: string;
    language!: string;
    email!: string;
    dob!: string;
    agreetc!: boolean;
    age!: number;
    aboutYou!: string;
}

export class Address{
    id!: number;
    addLine1!: string;
    addLine2!: string;
    city!: string;
    state!: string;
    zipCode!: string;
}

