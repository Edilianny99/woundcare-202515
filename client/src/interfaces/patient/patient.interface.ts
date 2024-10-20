type PatientStatus = 'ACTIVE' | 'INACTIVE';

type BloodType = 
  | "A_POSITIVE"
  | "A_NEGATIVE"
  | "B_POSITIVE"
  | "B_NEGATIVE"
  | "AB_POSITIVE"
  | "AB_NEGATIVE"
  | "O_POSITIVE"
  | "O_NEGATIVE";

export type Genre = "MALE" | "FEMALE";

interface User {
    fullname: string;
  }
  
  export interface Patient {
    nationalId: string;
    genre: Genre;
    birthDate: string;
    address: string;
    phoneNumber: string;
    cellPhoneNumber: string;
    photo: string;
    bloodType: BloodType;
    weight: number;
    height: number;
    status: PatientStatus;
    allergies: string[];
    medicalRecords: string[];
    user: User;
  }

  export interface ThePatient {
    nationalId: string;
    genre: Genre;
    birthDate: string;
    address: string;
    phoneNumber: string;
    cellPhoneNumber: string;
    photo: string;
    bloodType: BloodType;
    weight: number;
    height: number;
    status: PatientStatus;
    allergies: string[];
    medicalRecord: string[];
    user: User;
  }

  export interface Medicine{
    medicine: string;
    dose: number;
    lapse: number;
  }
  export interface Prescription{
    id: number;
    medicalFile: number;
    medicineName: string;
    medicineDescription: string;
    dose: number;
    lapse: number;
  }
