import { Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React from "react";

function termsAndConditions() {
  return (
    <Box as="main" width="100vw" minHeight="100vh" padding={5}>
      <Box
        as="article"
        fontSize={15}
        display="flex"
        flexDirection="column"
        gap={6}
      >
        <Heading as="h1" fontSize={18}>
          Términos y Condiciones para el Uso de la Aplicación de Monitoreo de
          Heridas
        </Heading>
        <Text>
          Por favor, lea cuidadosamente los siguientes términos y condiciones
          antes de utilizar nuestra aplicación de monitoreo de heridas. Al
          acceder y utilizar esta aplicación, usted acepta estar sujeto a estos
          términos y condiciones. Si no está de acuerdo con alguno de los
          siguientes términos, no utilice esta aplicación.
        </Text>
        <OrderedList spacing={6} fontWeight={700}>
          <ListItem>
            <Heading as="h2" fontSize={15} display="inline">
              Propósito de la Aplicación:{" "}
            </Heading>
            <Text display="inline" fontWeight={400}>
              La aplicación de monitoreo de heridas ha sido diseñada para
              proporcionar a los pacientes y profesionales de la salud una
              herramienta de seguimiento y gestión de heridas de difícil
              cicatrización. Esta aplicación permite registrar y visualizar
              información relacionada con el cuidado de heridas, así como
              recibir recordatorios y alertas para un seguimiento adecuado del
              tratamiento.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" fontSize={15} display="inline">
              Naturaleza de la Información Proporcionada:{" "}
            </Heading>
            <Text display="inline" fontWeight={400}>
              La información proporcionada a través de esta aplicación es de
              naturaleza educativa e informativa y no pretende reemplazar el
              consejo médico profesional. Los datos registrados en la
              aplicación, incluidos los comentarios, observaciones y registros
              de heridas, deben ser compartidos con un profesional de la salud
              para su evaluación y orientación adecuada.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" fontSize={15} display="inline">
              Privacidad y Confidencialidad:{" "}
            </Heading>
            <Text display="inline" fontWeight={400}>
              Nos comprometemos a proteger la privacidad y confidencialidad de
              los datos del paciente almacenados en esta aplicación. Toda la
              información personal y médica proporcionada será tratada de
              acuerdo con las leyes y regulaciones de privacidad de datos
              aplicables. Los datos del paciente solo serán accesibles por el
              personal médico autorizado y nunca serán compartidos con terceros
              sin consentimiento expreso del paciente.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" fontSize={15} display="inline">
              Responsabilidad del Usuario:{" "}
            </Heading>
            <Text display="inline" fontWeight={400}>
              El usuario es responsable de garantizar la exactitud y veracidad
              de la información proporcionada a través de la aplicación. Se
              recomienda encarecidamente a los usuarios que verifiquen la
              información antes de compartirla con profesionales de la salud.
              Además, el usuario es responsable de mantener la confidencialidad
              de su información de inicio de sesión y notificar de inmediato
              cualquier actividad no autorizada en su cuenta.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" fontSize={15} display="inline">
              Consentimiento para el Tratamiento de Datos:{" "}
            </Heading>
            <Text display="inline" fontWeight={400}>
              Al utilizar esta aplicación, usted otorga su consentimiento para
              el tratamiento de sus datos personales y médicos de acuerdo con
              las políticas de privacidad de la aplicación. Esto incluye el
              almacenamiento, procesamiento y uso de sus datos con el propósito
              de brindar los servicios ofrecidos por la aplicación y mejorar su
              funcionalidad.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" fontSize={15} display="inline">
              Limitación de Responsabilidad:{" "}
            </Heading>
            <Text display="inline" fontWeight={400}>
              La aplicación de monitoreo de heridas y su contenido se
              proporcionan &quot;tal cual&quot; y &quot;según
              disponibilidad&quot;. No ofrecemos garantías de ningún tipo, ya
              sean explícitas o implícitas, respecto a la precisión,
              confiabilidad o idoneidad del contenido para un propósito
              particular. En ningún caso seremos responsables de cualquier daño
              directo, indirecto, incidental, especial o consecuente derivado
              del uso de esta aplicación.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" fontSize={15} display="inline">
              Modificaciones a los Términos y Condiciones:{" "}
            </Heading>
            <Text display="inline" fontWeight={400}>
              Nos reservamos el derecho de modificar, actualizar o eliminar
              estos términos y condiciones en cualquier momento y sin previo
              aviso. Se le notificará cualquier cambio significativo en los
              términos y condiciones a través de la aplicación. El uso
              continuado de la aplicación después de dichos cambios constituirá
              su aceptación de los mismos.
            </Text>
          </ListItem>
        </OrderedList>
        <Box as="footer">
          <Heading as="h2" fontSize={15} display="inline">
            Aceptación de los Términos y Condiciones:{" "}
          </Heading>
          <Text display="inline" fontWeight={400}>
            Al aceptar estos términos y condiciones, usted reconoce haber leído,
            entendido y aceptado todas las disposiciones establecidas en este
            documento. Si tiene alguna pregunta o inquietud con respecto a estos
            términos y condiciones, por favor contáctenos antes de continuar
            utilizando la aplicación.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default termsAndConditions;
