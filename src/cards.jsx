


function Cardrendering({ name, bio, pic, salary,onClick }) {
  return (
    <div  onClick={onClick} className="card ">
      <img src={pic} alt={"user Img"} className="object-cover h-[250px]" />
      <h3>{name}</h3>
      <p>{bio}</p>
      <p>{salary}</p>
    </div>
  );
}

export default Cardrendering;
