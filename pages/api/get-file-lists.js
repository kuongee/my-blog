import fs from 'fs';

export default (req, res) => {
  const { query } = req;
  if (!query.subject) {
    res.status(500).json({ error: 'failed to load data' });
  }

  try {
    const filenames = fs.readdirSync(`_contents/${query.subject}`);

    res.status(200).json({
      fileList: filenames.map(file => {
        const name = file.split('.md')[0];
        return {
          name,
        };
      }),
    });
  } catch {
    res.status(500).json({ error: 'failed to load data' });
  }
};
