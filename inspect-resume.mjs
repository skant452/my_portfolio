import mammoth from 'mammoth';

const result = await mammoth.extractRawText({ path: 'data/Shashikant_Kumar_Resume-f7c1d0.docx' });
console.log(result.value);
