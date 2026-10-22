import './StudentCard.css'
function StudentCard(props) {
  const fiche = "fiche etudiant";
  const ville = props.ville || "non renseigne";

  return (
    <div className="card">
      <img src={props.image} alt="Photo de l'étudiant" />
      <h1>{fiche}</h1>
      <p><strong>Nom&Prenom : </strong>{props.studentName}</p>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Telephone :</strong> {props.tlf}</p>
      <p><strong>Filiere : </strong>{props.fili}</p>
      <p><strong>annee d'etude :</strong> {props.annee}</p>
      <p><strong>grp :</strong> {props.grp}</p>
      <p><strong>Ville :</strong> {ville}</p>
    </div>
  );
}

export default StudentCard;