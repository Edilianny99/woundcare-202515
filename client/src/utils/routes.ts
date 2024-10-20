const routes = {
  //Visitor routes
  login: "/login",
  //Patient routes
  patientHomePage: "/home-page",
  patientProfile: "/perfil",
  postBandageChangeForm: "/dailyCares",
  monitoringSignsAndSymptomsForm: "/dailyCares",
  dischargeForm: "/discharge",
  patientMedicines: "/medicines",
  patientDailyCares: "/dailyCares",
  patientMessages: "/medical-chat",
  patientDischargeCongrats: "/dischargeCongrats",
  patientFrequentlyAskedQuestions: "/frequently-asked-questions",
  //Loged routes
  notifications: "/notifications",
  //General routes
  termsAndConditions: "/terms-&-conditions",
  //Admin routes
  adminHomePage: "/admin-home-page",
  adminRegisterNurse: "/admin-register-nurse",
  //Nurse routes
  nurseHomePage: "/nurse-home-page",
  nurseRegisterPatient: "/register-patient",
  nurseMedicalFilePatient: "/medical-file-patient",
  nurseCreateMedicalFile: "/create-medical-file",
  nursePatientsList: "/nurse-patient-list",
  nurseMessages: "/nurse-conversations",
  nurseDoctorsList: "/nurse-doctor-list",
  nurseRegisterDoctor: "/nurse-register-doctor",
  nurseDoctorInfo: "/doctor-info",
  //Doctor routes
  doctorHomePage: "/doctor-home-page",
  doctorPatientsList: "/doctor-patient-list",
  doctorMedicalFilePatient: "/doctor-medical-file-patient",
  doctorMessages: "/doctor-conversations",
};
export default routes;
