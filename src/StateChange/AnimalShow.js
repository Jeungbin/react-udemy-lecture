export default function AnimalShow({ animalImg, heartImg }) {
  return (
    <div>
      <img style={{ width: "100px" }} src={animalImg} alt="" />
      <img src={heartImg} alt="" />
    </div>
  );
}
