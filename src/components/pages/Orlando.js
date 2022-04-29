import React, {useState} from 'react';
import '../../App.css';
import data from '../data/images.json';
import Modal from '../Modal.js';

export default function Orlando() {

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handleRotationRight = () => {
    const totalLength = data.data.length;
    if(currentIndex + 1 >= totalLength){
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  }

  const handleRotationLeft = () => {
    const totalLength = data.data.length;
    if(currentIndex === 0){
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength -1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  }

  return (
    <>
    <h1 className='orlando'>ORLANDO</h1>;
    <div className="wrapper">
    {data.data.map((item, index) => (
        <div key={index}>
          <figure className="gallery-figure">
            <img src={item.link} alt={item.text} width="70%" className="orlando-img" onClick={() => handleClick(item, index)}/>
            <figcaption>{item.text}</figcaption>
          </figure>
        </div>
    ))}
    </div>
    <div>
    {clickedImg && <Modal clickedImg={clickedImg} handleRotationLeft={handleRotationLeft} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} />}
    </div>
    </>
  );
}
