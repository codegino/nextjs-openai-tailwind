import {NextApiRequest, NextApiResponse} from 'next';
import {openai} from '../../libs/openai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {prompt} = req.body;

  if (req.method !== 'POST') {
    return res.status(400).json({error: 'Invalid request'});
  }

  const response = await openai.createCompletion({
    prompt,
    model: 'text-davinci-003',
    temperature: 0.6,
    max_tokens: 100,
    n: 1,
  });

  const firstResponse = response.data.choices[0];

  return res.status(200).json({
    data: {
      ...firstResponse,
      text: firstResponse.text.replace(/^\n+/, ''),
    },
  });
}
