import { SectionWrapper } from '../atom/SectionWrapper';
import Image from 'next/image';
import  paint  from '../../img/paint.svg'
import cvPic from "../../img/cvPic.png"


const PDF_CV = " http://localhost:5173/CV.pdf"

export const DrawSection = () => {

  const downloadFiles = (url) => {
    const link = document.createElement('a')
    const fileName = url.split('/').pop()

   // link.download = "image.png"
    link.href = url
    link.setAttribute('download', fileName)
    link.click()
  }
  
  

  return (
    <SectionWrapper title="Téléchargez mon CV !">
      <Image onClick={() => {downloadFiles(PDF_CV)}} src={cvPic} className='cursor-pointer' height={200} width={150} />
    </SectionWrapper>
  );
};
