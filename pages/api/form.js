// file: api/form.js
import axios from 'axios'

export default async function ({ body }) {
  const formData = {
    title: body.title,
    content: body.content,
    status: 'publish',
  }

  const response = await axios.post(
    'https://myblog.nufat.id/wp-json/wp/v2/posts',
    formData,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.WORDPRESS_AUTH_TOKEN}`,
      },
    }
  )

  return response.data
}
