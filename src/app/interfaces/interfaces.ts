import { FormControl } from "@angular/forms"

export interface Friends{
    address: string,
    addressUrl: string,
    email: string,
    imageUrl: string,
    phone: string,
    title: string, 
    url: string,
    workdays: workday[] | null
}
interface workday{
    isOpen: boolean,
    _id: string,
    from?: string,
    to? : string
}
export interface LoginForm {
    email: FormControl<string | null>,
    password: FormControl<string | null>
}
export interface LoginErrors{
    email: string,
    password: string
}
export interface RegForm{
    name: FormControl<string | null>,
    email: FormControl<string | null>,
    password: FormControl<string | null>,
    confirm: FormControl<string | null>
}
export interface RegErrors{
    name: string, 
    email: string,
    password: string,
    confirm: string
}
export interface IsShown{
    pass: boolean;
    confirm: boolean
}

export interface InitState{
    friends: Friends[]
}