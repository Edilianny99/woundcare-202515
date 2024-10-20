type Genre = "MALE" | "FEMALE";

export interface Nurse {
  fullname: string;
  email: string;
  password: string;
  nationalId: string;
  genre: Genre;
  birthDate: string;
  medicalCenter: string;
}

export interface User {
    nationalId: string;
    fullname: string;
    email: string;
    role: string;
}

export interface Nurses {
    nationalId: string;
    genre: Genre;
    birthDate: string;
    medicalCenter: string;
    user: User;
  }
