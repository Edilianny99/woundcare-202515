type PatientStatus = "ACTIVE" | "INACTIVE";

type BloodType =
  | "A_POSITIVE"
  | "A_NEGATIVE"
  | "B_POSITIVE"
  | "B_NEGATIVE"
  | "AB_POSITIVE"
  | "AB_NEGATIVE"
  | "O_POSITIVE"
  | "O_NEGATIVE";

type Genre = "MALE" | "FEMALE";

export interface User {
  nationalId: string;
  fullname: string;
  email: string;
  password: string;
  role: string;
}
export interface Patients{
    nationalId: string;
    user: User;
    genre: Genre;
    birthDate: string;
    adress: string;
    phoneNumber: string;
    cellPhoneNumber: string;
    bloodType: BloodType;
    weight: number;
    height: number;
    status: PatientStatus;
    allergies: string[];
    medicalRecords: string[];
    photo: string;
  }

  export interface TheMedicalFile {
    id: number;
    patientId: string;
    doctorId: string;
    nurseId: string;
    date: string;
    description: string;
    dischargeDate: string;
    physicalExam: string[];
    medicalHistory: string[];
    previousTreatment: string[];
    labResults: string[];
    carePlan: string[];
  }

  export interface ThePatientInfo {
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