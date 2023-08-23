import React from "react";
import { Page, Document, Text } from "@react-pdf/renderer";
import { Box } from "@mui/material";
const MyPDFDocument = () => (
  <Document>
    <Page size="A4">
      <Text>
        <Box className="container" id="container"></Box>
      </Text>
    </Page>
  </Document>
);

export default MyPDFDocument;
