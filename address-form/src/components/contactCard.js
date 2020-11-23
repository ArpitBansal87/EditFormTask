import { Typography } from "@material-ui/core";

const ContactCard = (props) => {
  return (
    <>
      <div class="contact-card">
        <div class="contact-card-header">
          <Typography variant="h3">Name</Typography>
          <Typography variant="subtitle">Designation</Typography>
        </div>
        <div class="contact-card-details"></div>
      </div>
    </>
  );
};

export default ContactCard