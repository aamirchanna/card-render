import { useState } from 'react';
import './App.css';
import Cardrendering from './cards';

const developers = [
  {
    name: "Butcher",
    bio: "A passionate web developer with expertise in front-end technologies.",
    pic: "https://i2-prod.mirror.co.uk/news/uk-news/article33127616.ece/ALTERNATES/s1200b/0_billy-butcher-in-the-boys.jpg",
    salary: "$70,000"
  },
  {
    name: "Sara Ali",
    bio: "Full-stack developer with a knack for creating dynamic web applications.",
    pic: "https://cdn.mos.cms.futurecdn.net/TMwgmGnY6vLXqdZSupTiaR-320-80.jpg",
    salary: "$85,000"
  },
  {
    name: "John",
    bio: "Experienced back-end developer specializing in database management.",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-Zqft78ByPZOT0JpGaAYm4dtqdJWiXzkKw&s",
    salary: "$90,000"
  },
  {
    name: "Jane Smith",
    bio: "Front-end developer with a focus on responsive design and user experience.",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nKyNVLePv2ZPFkiNGPoqGfysWIHk7XtS2w&s",
    salary: "$75,000"
  },
  
  {
    name: "Jane Smith",
    bio: "Front-end developer with a focus on responsive design and user experience.",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nKyNVLePv2ZPFkiNGPoqGfysWIHk7XtS2w&s",
    salary: "$75,000"
  },
  
  {
    name: "Jane Smith",
    bio: "Front-end developer with a focus on responsive design and user experience.",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nKyNVLePv2ZPFkiNGPoqGfysWIHk7XtS2w&s",
    salary: "$75,000"
  },
  {
    name: "Jane Smith",
    bio: "Front-end developer with a focus on responsive design and user experience.",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nKyNVLePv2ZPFkiNGPoqGfysWIHk7XtS2w&s",
    salary: "$75,000"
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
