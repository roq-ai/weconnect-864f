import * as yup from 'yup';

export const conferenceValidationSchema = yup.object().shape({
  title: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  organization_id: yup.string().nullable().required(),
});
