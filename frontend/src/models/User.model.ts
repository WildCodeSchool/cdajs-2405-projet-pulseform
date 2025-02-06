interface UserType {
  id: number;
  username: string;
  email: string;
  description?: string;
  password: string;
  image: string;
  birthday?: Date;
  gender?: number;
  age?: number;
  weight?: number;
  height?: number;
  createdAt: Date;
}

export default class User implements UserType {
  readonly id: number;
  readonly username: string;
  readonly description?: string;
  readonly email: string;
  readonly password: string;
  readonly image: string;
  readonly birthday?: Date;
  readonly gender?: number;
  readonly age?: number;
  readonly weight?: number;
  readonly height?: number;
  readonly createdAt: Date;

  constructor(data: UserType) {
    this.id = data.id;
    this.username = data.username.trim();
    this.description = data.description?.trim();
    this.email = data.email.trim();
    this.password = data.password.trim();
    this.image = data.image || "default-profile.png";
    this.birthday = data.birthday;
    this.gender = data.gender;
    this.age = data.age;
    this.weight = data.weight;
    this.height = data.height;
    this.createdAt = new Date(data.createdAt);
  }

  displayUserFullName() {
    return `${this.username} (${this.email})`;
  }
}
