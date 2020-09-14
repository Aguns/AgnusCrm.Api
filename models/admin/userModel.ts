// Defining schema interface
interface UserSchema {
    _id: { $oid: string };
    username: string;
    password: string;
  }

  interface User{
    id:string,
    username:string,
    name:string,
    firstName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    password :string,
    confirmPassword:boolean,
    inactive:boolean,
    country: string
};

export {
    UserSchema,
    User
};