import React from "react";
import { Box, Image, Button, Text, Paragraph, Heading } from "grommet";
import { useHistory } from "react-router-dom";
import logo from "../logo.PNG";

const styles = {
  root: { marginTop: 20, marginLeft: 20 },
  image: { width: 150, marginLeft: 90, marginBottom: 20, marginTop: 20 },
  card: { marginRight: 20 },
  submitBox: { marginLeft: 10, marginBottom: 20, marginTop: 30 },
};
const PrivacyPolicy = () => {
  const history = useHistory();
  return (
    <Box style={styles.root}>
      <Image src={logo} alt="logo" style={styles.image} />
      <Heading margin="none" level="2">
        DATA PROTECTION NOTICE FOR CUSTOMERS{" "}
      </Heading>

      <Paragraph>
        This Data Protection Notice (“Notice”) sets out the basis on which
        Maargo Technologies (“we”, “us”, or “our”) may collect, use, disclose or
        otherwise process personal data of our customers in accordance with the
        Personal Data Protection Act (“PDPA”). This Notice applies to personal
        data in our possession or under our control, including personal data in
        the possession of organizations which we have engaged to collect, use,
        disclose or process personal data for our purposes.
      </Paragraph>
      <Heading margin="none" level="3">
        PERSONAL DATA{" "}
      </Heading>
      <Paragraph>
        1. As used in this Notice: “customer” means an individual who (a) has
        contacted us through any means to find out more about any goods or
        services we provide, or (b) may, or has, entered into a contract with us
        for the supply of any goods or services by us; and “personal data” means
        data, whether true or not, about a customer who can be identified: (a)
        from that data; or (b) from that data and other information to which we
        have or are likely to have access.
      </Paragraph>
      <Paragraph>
        2. Depending on the nature of your interaction with us, some examples of
        personal data which we may collect from you include name, email address,
        and company information. This data is collected if you contact us for
        inquiry, but not when you register as a user of Maargo.
      </Paragraph>
      <Paragraph>
        3. Other terms used in this Notice shall have the meanings given to them
        in the PDPA (where the context so permits).
      </Paragraph>
      <Heading margin="none" level="3">
        COLLECTION, USE AND DISCLOSURE OF PERSONAL DATA
      </Heading>
      <Paragraph>
        {" "}
        4. We generally do not collect your personal data unless (a) it is
        provided to us voluntarily by you directly or via a third party who has
        been duly authorised by you to disclose your personal data to us (your
        “authorised representative”) after (i) you (or your authorised
        representative) have been notified of the purposes for which the data is
        collected, and (ii) you (or your authorised representative) have
        provided written consent to the collection and usage of your personal
        data for those purposes, or (b) collection and use of personal data
        without consent is permitted or required by the PDPA or other laws. We
        shall seek your consent before collecting any additional personal data
        and before using your personal data for a purpose that has not been
        notified to you (except where permitted or authorised by law).
      </Paragraph>
      <Paragraph>
        5. We may collect and use your personal data for any or all of the
        following purposes: (a) performing obligations in the course of or in
        connection with our provision of the goods and/or services requested by
        you; (b) responding to, handling, and processing queries, requests,
        applications, complaints, and feedback from you; (c) managing your
        relationship with us; (d) any other purposes for which you have provided
        the information; and (e) any other incidental business purposes related
        to or in connection with the above.
      </Paragraph>
      <Paragraph>
        6. We may disclose your personal data: (e) where such disclosure is
        required for performing obligations in the course of or in connection
        with our provision of the goods and services requested by you.
      </Paragraph>

      <Heading margin="none" level="3">
        WITHDRAWING YOUR CONSENT{" "}
      </Heading>

      <Paragraph>
        {" "}
        7. The consent that you provide for the collection, use, and disclosure
        of your personal data will remain valid until such time it is being
        withdrawn by you in writing. You may withdraw consent and request us to
        stop collecting, using, and/or disclosing your personal data for any or
        all of the purposes listed above by submitting your request in writing
        or via email to our Data Protection Officer at the contact details
        provided below.
      </Paragraph>
      <Paragraph>
        {" "}
        8. Upon receipt of your written request to withdraw your consent, we may
        require reasonable time (depending on the complexity of the request and
        its impact on our relationship with you) for your request to be
        processed and for us to notify you of the consequences of us acceding to
        the same, including any legal consequences which may affect your rights
        and liabilities to us. In general, we shall seek to process your request
        within thirty (30) business days of receiving it.
      </Paragraph>
      <Paragraph>
        {" "}
        9. Whilst we respect your decision to withdraw your consent, please note
        that depending on the nature and scope of your request, we may not be in
        a position to continue providing our goods or services to you and we
        shall, in such circumstances, notify you before completing the
        processing of your request. Should you decide to cancel your withdrawal
        of consent, please inform us in writing in the manner described in
        clause 7 above.
      </Paragraph>
      <Paragraph>
        {" "}
        10. Please note that withdrawing consent does not affect our right to
        continue to collect, use and disclose personal data where such
        collection, use, and disclosure without consent is permitted or required
        under applicable laws.
      </Paragraph>

      <Heading margin="none" level="3">
        ACCESS TO AND CORRECTION OF PERSONAL DATA
      </Heading>

      <Paragraph>
        {" "}
        11. If you wish to make (a) an access request for access to a copy of
        the personal data which we hold about you or information about the ways
        in which we use or disclose your personal data, or (b) a correction
        request to correct or update any of your personal data which we hold
        about you, you may submit your request in writing or via email to our
        Data Protection Officer at the contact details provided below.
      </Paragraph>
      <Paragraph>
        {" "}
        12. Please note that a reasonable fee may be charged for an access
        request. If so, we will inform you of the fee before processing your
        request.
      </Paragraph>
      <Paragraph>
        {" "}
        13. We will respond to your request as soon as reasonably possible. In
        general, our response will be within thirty (30) business days. Should
        we not be able to respond to your request within thirty (30) days after
        receiving your request, we will inform you in writing within thirty (30)
        days of the time by which we will be able to respond to your request. If
        we are unable to provide you with any personal data or to make a
        correction requested by you, we shall generally inform you of the
        reasons why we are unable to do so (except where we are not required to
        do so under the PDPA).
      </Paragraph>

      <Heading margin="none" level="3">
        PROTECTION OF PERSONAL DATA
      </Heading>
      <Paragraph>
        {" "}
        14. To safeguard your personal data from unauthorised access,
        collection, use, disclosure, copying, modification, disposal, or similar
        risks, we have introduced appropriate administrative, physical, and
        technical measures such as a minimised collection of personal data,
        authentication, and access controls (such as good password practices,
        need-to-basis for data disclosure, etc.), and securely erase storage
        media in devices before disposal.
      </Paragraph>
      <Paragraph>
        {" "}
        15. You should be aware, however, that no method of transmission over
        the Internet or method of electronic storage is completely secure. While
        security cannot be guaranteed, we strive to protect the security of your
        information and are constantly reviewing and enhancing our information
        security measures.
      </Paragraph>

      <Heading margin="none" level="3">
        ACCURACY OF PERSONAL DATA
      </Heading>
      <Paragraph>
        {" "}
        16. We generally rely on personal data provided by you (or your
        authorised representative). In order to ensure that your personal data
        is current, complete, and accurate, please update us if there are
        changes to your personal data by informing our Data Protection Officer
        in writing or via email at the contact details provided below.
      </Paragraph>

      <Heading margin="none" level="3">
        RETENTION OF PERSONAL DATA
      </Heading>
      <Paragraph>
        {" "}
        17. We may retain your personal data for as long as it is necessary to
        fulfill the purpose for which it was collected, or as required or
        permitted by applicable laws.
      </Paragraph>
      <Paragraph>
        {" "}
        18. We will cease to retain your personal data, or remove the means by
        which the data can be associated with you, as soon as it is reasonable
        to assume that such retention no longer serves the purpose for which the
        personal data was collected, and is no longer necessary for legal or
        business purposes.
      </Paragraph>
      <Heading margin="none" level="3">
        TRANSFERS OF PERSONAL DATA OUTSIDE OF SINGAPORE
      </Heading>
      <Paragraph>
        {" "}
        19. We generally do not transfer your personal data to countries outside
        of Singapore. However, if we do so, we will obtain your consent for the
        transfer to be made and we will take steps to ensure that your personal
        data continues to receive a standard of protection that is at least
        comparable to that provided under the PDPA.
      </Paragraph>
      <Heading margin="none" level="3">
        DATA PROTECTION OFFICER
      </Heading>
      <Paragraph>
        {" "}
        20. You may contact our Data Protection Officer if you have any
        inquiries or feedback on our personal data protection policies and
        procedures, or if you wish to make any request, in the following manner:
      </Paragraph>
      <Text>Email Address: privacy@maargotech.com</Text>

      <Heading margin="none" level="3">
        EFFECT OF NOTICE AND CHANGES TO NOTICE
      </Heading>
      <Paragraph>
        {" "}
        21. This Notice applies in conjunction with any other notices,
        contractual clauses, and consent clauses that apply in relation to the
        collection, use, and disclosure of your personal data by us.
      </Paragraph>
      <Paragraph>
        {" "}
        22. We may revise this Notice from time to time without any prior
        notice. You may determine if any such revision has taken place by
        referring to the date on which this Notice was last updated. Your
        continued use of our services constitutes your acknowledgement and
        acceptance of such changes.
      </Paragraph>
      <Box direction="row" gap="medium" style={styles.submitBox}>
        <Button
          type="back"
          label="Back"
          onClick={() => {
            history.push("/signIn");
          }}
        />
      </Box>
    </Box>
  );
};
export default PrivacyPolicy;
