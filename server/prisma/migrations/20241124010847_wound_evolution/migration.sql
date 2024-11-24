-- CreateTable
CREATE TABLE "WoundEvolution" (
    "id" SERIAL NOT NULL,
    "medicalFileId" INTEGER NOT NULL,
    "questionaire" JSONB NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WoundEvolution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WoundEvolution" ADD CONSTRAINT "WoundEvolution_medicalFileId_fkey" FOREIGN KEY ("medicalFileId") REFERENCES "MedicalFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
