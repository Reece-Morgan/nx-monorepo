import { FormData } from './types';

// export const sendEmail = async (data: FormData) => {
//   const apiEndpoint = '/api/email';

//   fetch(apiEndpoint, {
//     method: 'POST',
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       alert(response.message);
//     })
//     .catch((err) => {
//       alert(err);
//     });
// };

export const sendEmail = async (data: FormData): Promise<string> => {
  const apiEndpoint = '/api/email';

  try {
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return 'success';
  } catch (err) {
    alert(err);
    return 'error' + err;
  }
};
