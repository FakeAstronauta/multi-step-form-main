export interface FormState{
    name: string;
    email: string;
    phoneNumber: string
}

export interface addOnsState{
    onlineService: boolean,
    largerStorage: boolean,
    customizableProfile: boolean,
};

export interface plansState{
    cardIndex: number,
    plan: string,
    price: number,
    toggleState: boolean,
}

// this is for redux only
export interface Store {
    user: any;
    plan: any;
    addOns: any;
}