import * as yup from 'yup';

export const participantValidationSchema = yup.object().shape({
  joined_at: yup.date().nullable(),
  left_at: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  conference_id: yup.string().nullable().required(),
});
