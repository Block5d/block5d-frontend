export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string,
    public phone: string,
    public gender: string,
    public photo: string,
    public saved: boolean = false
  ) { }
}
