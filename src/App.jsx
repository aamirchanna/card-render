import { useState } from 'react';
import './App.css';
import Cardrendering from './cards';

const developers = [
  {
    name: "Aamir Khan",
    bio: "A passionate web developer with expertise in front-end technologies.",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3yv_H7--JNwlOShDtklJOv3o8B4ORNjkig&s",
    salary: "$70,000"
  },
  {
    name: "Sara Ali",
    bio: "Full-stack developer with a knack for creating dynamic web applications.",
    pic: "data:image/jpeg;base64,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",
    salary: "$85,000"
  },
  {
    name: "John Doe",
    bio: "Experienced back-end developer specializing in database management.",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DsGNwO9Zy0FRxC16gNQ-0WLeWrvAwNIhqA&s",
    salary: "$90,000"
  },
  {
    name: "Jane Smith",
    bio: "Front-end developer with a focus on responsive design and user experience.",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nKyNVLePv2ZPFkiNGPoqGfysWIHk7XtS2w&s",
    salary: "$75,000"
  },
  // ... other developers
];

function App() {
  const [selectedPic, setSelectedPic] = useState('');

  const handleCardClick = (pic) => {
    setSelectedPic(pic);
    const modal = new window.bootstrap.Modal(document.getElementById('staticBackdrop'));
    modal.show();
  };

  return (
    <div>
      <h1 className='text-center text-4xl font-bold m-4 text-blue-700'>Gallery</h1>
      <div className="card-container p-0">
        {developers.map((developer, index) => (
          <Cardrendering
            key={index}
            name={developer.name}
            bio={developer.bio}
            pic={developer.pic}
            salary={developer.salary}
            onClick={() => handleCardClick(developer.pic)}
          />
      
        ))}

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Developer Image </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={selectedPic} alt="Developer" style={{ width: '100%' }} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div></div>
    </div>
  );
}

export default App;
