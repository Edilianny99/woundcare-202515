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

export interface Patient {
  nationalId: string;
  fullname: string;
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
  medicalRecord: string[];
  photo: string;
}

export interface Nurse {
  nationalId: string;
  genre: Genre;
  birthDate: string;
  medicalCenter: string;
  user: User;
}

export interface Medicine {
  medicine: string;
  dose: number;
  lapse: number;
}
export interface Prescription {
  medicines: Medicine[];
}

export interface Doctor {
  nationalId: string;
  genre: Genre;
  birthDate: string;
  medicalCenter: string;
  user: User;
}

export interface MedicalFile {
  patientId: string;
  doctorId: string;
  nurseId: string;
  date: string;
  description: string;
  physicalExam: string[];
  medicalHistory: string[];
  previousTreatment: string[];
  labResults: string[];
  carePlan: string[];
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

export interface TheDoctor {
  nationalId: string;
  fullname: string;
  email: string;
  password: string;
  genre: Genre;
  birthDate: string;
  medicalCenter: string;
}

export interface BandageChange{
  date: string;
  nurseId: string;
  patientId: string;
}

export interface PrescriptionMedicine{
  medicalFileId: number;
  medicineName: string;
  medicineDescription: string;
  dose: number;
  lapse: number;
}