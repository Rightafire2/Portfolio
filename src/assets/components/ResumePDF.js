import React from 'react';
import resume from '../pdfs/Bharadwaj_Amogh_Resume.pdf'

const PDFViewer = () => {
 return (
 <div>
 <iframe src={resume} width='100%' height='1000px' />
 </div>
 );
};
export default PDFViewer;