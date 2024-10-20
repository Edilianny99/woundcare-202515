import { Patient, Prescription } from "@/interfaces/patient/patient.interface";
import { fetchAPI } from "@/utils/api";

export const getPatientMe = async () =>{
    const data = await fetchAPI<Patient>("/patient/me", "GET");
    return data;
};

export const createAllergies = async (name: string) => {
    const data = await fetchAPI<Patient>("/patient/me/allergies", "POST",  { name } );
    return data;
}

export const deleteAllergies = async (name: string) => {
    const data = await fetchAPI<Patient>(`/patient/me/allergies/${name}`, "DELETE",  { name } );
    return data;
}

export const editWeight_Height = async (weight: number, height: number) => {
    const data = await fetchAPI<Patient>("/patient/me", "PATCH",  { weight, height } );
    return data;
}

export const createMedicalRecords = async (description: string) => {
    const data = await fetchAPI<Patient>("/patient/me/medical-records", "POST",  { description } );
    return data;
}

export const deleteMedicalRecords = async (description: string) => {
    const data = await fetchAPI<Patient>(`/patient/me/medical-records/${description}`, "DELETE",  { description } );
    return data;
}

export const editCellPhoneNumber = async (cellPhoneNumber: string, phoneNumber: string) => {
    const data = await fetchAPI<Patient>("/patient/me", "PATCH",  { cellPhoneNumber, phoneNumber } );
    return data;
}

export const editAddress = async (adress: string) => {
    const data = await fetchAPI<Patient>("/patient/me", "PATCH",  { adress } );
    return data;
}

export const getPrescriptions = async () => {
    const data = await fetchAPI<Prescription[]>("/prescription/me", "GET");
    return data;
}